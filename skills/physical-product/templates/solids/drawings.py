"""Dimensioned production drawings (build123d) — proven sheet framework.

Sheet standard (see the skill's drafting-conventions.md):
- Fixed A3 landscape sheet with a border frame and a title block
  bottom-right: drawing number, title, scale, material, count, date, units.
- TRUE scale per sheet (1:10 large panels, 1:5 details, 1:1 small parts) —
  ExportSVG(scale=1/P) makes SVG units equal paper mm, which also enables
  exact-scale printing (the .print.html wrapper each sheet emits).
- Dimensions: italic font, thin technical-blue lines with FILLED text so
  they read apart from the heavy black object outlines. Placement by named
  side ("above"/"below"/"left"/"right") via build123d-drafting-helpers;
  hole callouts, center marks and section indicators included.
- Views from the side the fabricator works from; first-angle (ISO-E)
  placement when a second view is used (top view BELOW the front view).
- Dimension anchor points come from MODEL PARAMETERS and are calibrated to
  the projected geometry (affine fit of the projected bbox), so the mild
  perspective of project_to_viewport cannot detach dims from edges.

Outputs per sheet into out/drawings/:
  <name>.svg          the drawing (units = paper mm)
  <name>.html         scaling wrapper for Chrome screenshot (PNG check)
  <name>.print.html   A3 true-scale wrapper for `chrome --print-to-pdf`
  <name>.dxf          optional (write(dxf=True)): layered DXF, model mm 1:1
  manifest.json       sheet list in drawing-number order (merge_pdfs.py)

Run: uv run drawings.py; PNGs/PDFs via `make drawings-png` / `drawings-pdf`.
"""

from __future__ import annotations

import datetime
import json
import math
import re
import sys
from pathlib import Path
from typing import Callable

from build123d import *  # noqa: F403
from build123d import ColorIndex  # not in the star export

import model

try:
    from build123d_drafting import (CenterMark, Centerline, Dimension,
                                    HoleCallout, Leader, Note, draft_preset)
    _DRAFTING = True
except Exception as _err:
    _DRAFTING = False
    print(f"WARNING: build123d_drafting unavailable ({_err}) — dims fall "
          "back to ExtensionLine; center marks and hole callouts degrade")

try:
    from b123d_recognisers import recognise_countersinks, recognise_holes
    _RECOGNISERS = True
except Exception:
    _RECOGNISERS = False    # auto_holes prints the install hint when called

OUT = Path(__file__).parent / "out" / "drawings"

DATE: str | None = None          # None -> today; set "2026-08-24" to freeze
PROJECT = "EDIT-ME PROJECT"      # uppercase project line in the title block
# ISO 3098 technical lettering (osifont, GPL+font-exception, full diacritics
# and the ⌀ glyph included) — fetched by `make assets/osifont/osifont.ttf`;
# missing file falls back to OS Arial italic (then write Ø, not ⌀, in labels).
_OSIFONT = Path(__file__).parent / "assets" / "osifont" / "osifont.ttf"
FONT_PATH: str | None = str(_OSIFONT) if _OSIFONT.exists() else None
PAPER_W, PAPER_H = 420.0, 297.0  # A3 landscape, paper mm
MARGIN = 8.0                     # frame inset from paper edge
TB_W, TB_H = 190.0, 36.0         # title block size
DIM_BLUE = (0, 90, 170)
# section-view hatching: material class -> [(angle_deg, spacing_paper_mm)]
HATCH_STYLES = {"wood": [(45, 3.5)], "xps": [(45, 7.0), (-45, 7.0)],
                "metal": [(45, 2.5)]}


# --------------------------------------------------------------------------
# Projection + calibration (keep verbatim — battle-tested)
# --------------------------------------------------------------------------
MAPPINGS: dict[str, Callable[[float, float, float], tuple[float, float]]] = {
    "front": lambda x, y, z: (x, z),      # camera at -Y
    "back": lambda x, y, z: (-x, z),      # camera at +Y
    "left": lambda x, y, z: (-y, z),      # camera at -X
    "right": lambda x, y, z: (y, z),      # camera at +X
    "top": lambda x, y, z: (x, y),        # camera at +Z, up +Y
    "bottom": lambda x, y, z: (-x, y),    # camera at -Z, up +Y
}
CAMERA = {"front": ((0, -1, 0), (0, 0, 1)), "back": ((0, 1, 0), (0, 0, 1)),
          "left": ((-1, 0, 0), (0, 0, 1)), "right": ((1, 0, 0), (0, 0, 1)),
          "top": ((0, 0, 1), (0, 1, 0)), "bottom": ((0, 0, -1), (0, 1, 0))}


class View:
    """Projected edges + a parameter->sheet coordinate transform.

    Use pt(x, y, z) with MODEL coordinates to anchor dimensions; the affine
    calibration guarantees they meet the projected edges exactly.
    Placement: use Sheet.add_views / Sheet.place_view (they work from the
    actual projected bboxes); `shift`/translate() are raw SHEET-space
    offsets for the rare manual case, applied before add_view.
    """

    def __init__(self, part: Part, kind: str,
                 shift: tuple[float, float] = (0.0, 0.0)):
        self.kind = kind                    # used by Sheet.auto_holes
        direction, up = CAMERA[kind]
        bb = part.bounding_box()
        self.bbox = bb                      # used by Sheet.section_indicator
        size = max(bb.size)
        center = (bb.min + bb.max) / 2
        origin = center + Vector(direction).normalized() * size * 300
        self.visible, self.hidden = part.project_to_viewport(
            viewport_origin=tuple(origin), viewport_up=up)

        mapping = MAPPINGS[kind]
        us, vs = zip(*(mapping(x, y, z)
                       for x in (bb.min.X, bb.max.X)
                       for y in (bb.min.Y, bb.max.Y)
                       for z in (bb.min.Z, bb.max.Z)))
        e0, e1, f0, f1 = min(us), max(us), min(vs), max(vs)
        a = self._edges_bbox(self.visible)
        sx = (a[1] - a[0]) / (e1 - e0)
        sy = (a[3] - a[2]) / (f1 - f0)
        tx, ty = a[0] - e0 * sx, a[2] - f0 * sy
        assert 0.9 < sx < 1.1 and 0.9 < sy < 1.1, \
            f"projection scale off: {sx:.3f}/{sy:.3f}"
        self._m = mapping
        self._s = (sx, sy, tx, ty)
        self.translate(*shift)

    def translate(self, dx: float, dy: float) -> None:
        """Move this view on the sheet; pt() follows. NOTE: translate BEFORE
        Sheet.add_view — layers keep references to the pre-move edges."""
        if dx or dy:
            self.visible = [e.translate((dx, dy, 0)) for e in self.visible]
            self.hidden = [e.translate((dx, dy, 0)) for e in self.hidden]
            sx, sy, tx, ty = self._s
            self._s = (sx, sy, tx + dx, ty + dy)

    @staticmethod
    def _edges_bbox(edges) -> tuple[float, float, float, float]:
        boxes = [e.bounding_box() for e in edges]
        return (min(b.min.X for b in boxes), max(b.max.X for b in boxes),
                min(b.min.Y for b in boxes), max(b.max.Y for b in boxes))

    def pt(self, x: float, y: float, z: float) -> tuple[float, float]:
        u, v = self._m(x, y, z)
        sx, sy, tx, ty = self._s
        return (u * sx + tx, v * sy + ty)


# --------------------------------------------------------------------------
# Sheet with A3 frame and title block
# --------------------------------------------------------------------------
def _text(txt: str, size: float, at: tuple[float, float],
          align=(Align.MIN, Align.MIN)):
    kwargs = {"font_path": FONT_PATH} if FONT_PATH else {}
    return Pos(*at, 0) * Text(txt, font_size=size, align=align, **kwargs)


def _parse_scale(scale) -> tuple[float, str]:
    """5, 0.5, "1:5" or "2:1" -> (P = model mm per paper mm, title-block label)."""
    if isinstance(scale, str):
        num, _, den = scale.partition(":")
        p = float(den) / float(num)
    else:
        p = float(scale)
    assert p > 0, f"invalid scale {scale!r}"
    return p, (f"1:{p:g}" if p >= 1 else f"{1 / p:g}:1")


_SIDE_VECTORS = {"above": (0.0, 1.0), "below": (0.0, -1.0),
                 "left": (-1.0, 0.0), "right": (1.0, 0.0)}


def _side_sign(p1, p2, side: str) -> float:
    """Fallback replica of build123d_drafting's side rule: positive
    ExtensionLine offsets lie on the p1->p2 right-hand normal (dy, -dx)."""
    dx, dy = p2[0] - p1[0], p2[1] - p1[1]
    sx, sy = _SIDE_VECTORS[side]
    return 1.0 if dy * sx - dx * sy >= 0 else -1.0


_DIM_NUM = re.compile(r"^[⌀ØR]?\s*(\d+(?:[.,]\d+)?)")


def _parse_dim_label(label: str) -> float | None:
    """Leading number of a checkable dim label, or None for labels that are
    deliberately not the measured distance: "(60)" reference dims, "~"/"≈"
    approximations, counts ("2× 30"), angles ("45°"), non-numeric text.
    ⌀/Ø/R prefixes are stripped, not skipped — those ARE checkable."""
    s = label.strip()
    if s.startswith(("(", "~", "≈")) or "×" in s or "°" in s:
        return None
    m = _DIM_NUM.match(s)
    return float(m.group(1).replace(",", ".")) if m else None


def _clip_len(seg, box) -> float:
    """Length of the segment portion inside an AABB (Liang–Barsky)."""
    (x0, y0), (x1, y1) = seg
    dx, dy = x1 - x0, y1 - y0
    t0, t1 = 0.0, 1.0
    for p, q in ((-dx, x0 - box[0]), (dx, box[2] - x0),
                 (-dy, y0 - box[1]), (dy, box[3] - y0)):
        if p == 0:
            if q < 0:
                return 0.0
            continue
        r = q / p
        if p < 0:
            t0 = max(t0, r)
        else:
            t1 = min(t1, r)
    return 0.0 if t0 >= t1 else math.hypot(dx, dy) * (t1 - t0)


def _label_of(sketch) -> str:
    return getattr(sketch, "label", "") or "⌀ callout"


class Detail:
    """Handle returned by Sheet.detail(): pt() maps MODEL coordinates into
    the blown-up detail so dims anchor exactly (labels stay true model mm —
    the dim-truth lint divides measured lengths by k inside details)."""

    def __init__(self, src: tuple[float, float], k: float,
                 at: tuple[float, float], view: View):
        self._src, self.k, self.at, self._view = src, k, at, view

    def pt(self, x: float, y: float, z: float) -> tuple[float, float]:
        u, v = self._view.pt(x, y, z)
        return ((u - self._src[0]) * self.k + self.at[0],
                (v - self._src[1]) * self.k + self.at[1])


class Sheet:
    """One A3 drawing sheet. Offsets/sizes in annotation methods are PAPER mm.

    Dimensions take a named side ("above"/"below"/"left"/"right" of the
    measured span) — the offset sign is computed for you. All helper sizes
    are multiplied by P internally; pass paper mm everywhere.
    """

    def __init__(self, name: str, number: str, title: str,
                 scale: int | float | str, material: str, count: int = 1,
                 note: str = ""):
        self.name, self.number, self.title = name, number, title
        self.material = material
        self.count, self.sheet_note = count, note
        # P = model mm per paper mm; scale accepts 5, 0.5, "1:5" or "2:1"
        self.P, self.scale_label = _parse_scale(scale)
        if _DRAFTING:
            style = dict(font_size=3.5 * self.P, decimal_precision=0,
                         arrow_length=2.5 * self.P,
                         pad_around_text=1.2 * self.P,
                         line_width=0.18 * self.P,
                         extension_gap=1.0 * self.P)
            if FONT_PATH:   # ISO 3098 lettering (osifont) — upright
                self.draft = draft_preset(font_path=FONT_PATH, **style)
            else:           # OS fallback: Arial italic (no ⌀ glyph -> Ø)
                self.draft = draft_preset(font_path=None, font="Arial",
                                          font_style=FontStyle.ITALIC,
                                          **style)
        else:
            try:
                self.draft = Draft(font_size=3.5 * self.P, font="Arial",
                                   font_style=FontStyle.ITALIC,
                                   arrow_length=2.5 * self.P,
                                   pad_around_text=1.2 * self.P,
                                   decimal_precision=0)
            except TypeError:
                self.draft = Draft(font_size=3.5 * self.P,
                                   decimal_precision=0)
        self.layers: dict[str, list] = {
            "visible": [], "hidden": [], "dims": [], "marks": [],
            "hatch": [], "frame": [], "text": []}
        self._parts_rows: list[tuple] = []
        self._skipped_marks = 0
        self._dim_checks: list[tuple[str, tuple, tuple]] = []
        self._details: list[tuple[tuple, float, float]] = []  # (at, r, k)

    def add_view(self, view: View) -> None:
        self.layers["visible"].extend(view.visible)
        self.layers["hidden"].extend(view.hidden)

    def dim(self, p1: tuple[float, float], p2: tuple[float, float],
            side: str, offset_paper_mm: float = 10.0,
            label: str | None = None) -> None:
        """Linear dimension between two view.pt() points, placed on `side`.

        Always pass an explicit `label` — auto labels append units.
        """
        if label is not None:
            self._dim_checks.append((label, p1, p2))
        offset = abs(offset_paper_mm) * self.P
        if _DRAFTING:
            self.layers["dims"].append(
                Dimension(p1, p2, side, offset, self.draft, label=label))
        else:
            self.layers["dims"].append(ExtensionLine(
                border=Edge.make_line((*p1, 0), (*p2, 0)),
                offset=_side_sign(p1, p2, side) * offset,
                draft=self.draft, label=label))

    def hole_note(self, at: tuple[float, float], d_model: float,
                  count: int | None = None,
                  offset_paper: tuple[float, float] = (12.0, 10.0),
                  through: bool = False, depth=None,
                  cbore_dia=None, cbore_depth=None,
                  csink_dia=None, csink_angle: float | None = None,
                  suffix: str = "") -> None:
        """Leader from a hole at `at` (view.pt of its center) to a
        '4x ⌀8'-style callout; depth/counterbore/countersink included when
        given. `d_model` in model mm."""
        elbow = (at[0] + offset_paper[0] * self.P,
                 at[1] + offset_paper[1] * self.P)
        if _DRAFTING:
            def _s(v):  # strings bypass draft.decimal_precision rounding
                return f"{v:g}" if isinstance(v, (int, float)) else v
            callout = HoleCallout(f"{d_model:g}", count=count,
                                  through=through, depth=_s(depth),
                                  cbore_dia=_s(cbore_dia),
                                  cbore_depth=_s(cbore_depth),
                                  csink_dia=_s(csink_dia),
                                  csink_angle=csink_angle,
                                  suffix=suffix or None, draft=self.draft,
                                  line_width=0.15 * self.P)
            self.layers["dims"].append(
                Leader(at, elbow, "", self.draft, callout=callout,
                       line_width=0.15 * self.P))
        else:
            text = f"{count}x " if count else ""
            extra = "".join(f" {t}" for t in (
                f"hl. {depth}" if depth else "",
                f"zahl. Ø{cbore_dia}×{cbore_depth}" if cbore_dia else "",
                f"csink Ø{csink_dia}/{csink_angle:g}°" if csink_dia else "",
            ) if t)
            self.layers["dims"].append(_text(
                f"{text}Ø{d_model:g}{' THRU' if through else ''}{extra}"
                f"{' ' + suffix if suffix else ''}",
                3.5 * self.P, elbow))

    def center_mark(self, at: tuple[float, float], d_model: float) -> None:
        """ISO center mark crosshair over a hole of model diameter d."""
        if _DRAFTING:
            self.layers["marks"].append(
                CenterMark(at, size=d_model + 4 * self.P, draft=self.draft,
                           line_width=0.13 * self.P))
        else:
            self._skipped_marks += 1

    def centerline(self, p1: tuple[float, float],
                   p2: tuple[float, float]) -> None:
        """ISO chain centerline between two sheet points."""
        if _DRAFTING:
            self.layers["marks"].append(
                Centerline(p1, p2, self.draft, line_width=0.13 * self.P))
        else:
            self._skipped_marks += 1

    def note(self, text: str, at: tuple[float, float],
             leader_from: tuple[float, float] | None = None) -> None:
        """Free note at `at`; with `leader_from`, an arrowed leader from
        that point (e.g. an edge) to the note shelf."""
        if _DRAFTING and leader_from is not None:
            self.layers["dims"].append(
                Leader(leader_from, at, text, self.draft,
                       line_width=0.15 * self.P))
        elif _DRAFTING:
            self.layers["text"].append(Note(text, at, self.draft))
        else:
            self.layers["text"].append(_text(text, 3.0 * self.P, at))

    def section_indicator(self, view: View, axis: str, coord: float,
                          label: str = "A", direction: int = -1) -> None:
        """ISO 128-44 cutting-plane marks on a parent view for the plane
        <axis> = coord (model mm). Sight arrows point along `direction`
        (+1/-1) perpendicular to the trace. The section itself is a separate
        view titled 'SECTION A-A'.
        """
        P, bb = self.P, view.bbox
        ax = axis.upper()
        free = [a for a in "XYZ" if a != ax]
        lo = {"X": bb.min.X, "Y": bb.min.Y, "Z": bb.min.Z}
        hi = {"X": bb.max.X, "Y": bb.max.Y, "Z": bb.max.Z}
        pts = [view.pt(**{ax.lower(): coord,
                          free[0].lower(): fa, free[1].lower(): fb})
               for fa in (lo[free[0]], hi[free[0]])
               for fb in (lo[free[1]], hi[free[1]])]
        us, vs = [p[0] for p in pts], [p[1] for p in pts]
        eb = View._edges_bbox(view.visible)
        ext = 6 * P
        if max(us) - min(us) < 1e-9:        # vertical trace
            p1, p2 = (us[0], eb[2] - ext), (us[0], eb[3] + ext)
            normal = (float(direction), 0.0)
        elif max(vs) - min(vs) < 1e-9:      # horizontal trace
            p1, p2 = (eb[0] - ext, vs[0]), (eb[1] + ext, vs[0])
            normal = (0.0, float(direction))
        else:
            raise AssertionError(
                f"plane {ax}={coord} is parallel to this view — put the "
                "indicator on a view perpendicular to the cut")
        # chain line (fallback: plain thin line)
        if _DRAFTING:
            self.layers["marks"].append(
                Centerline(p1, p2, self.draft, line_width=0.13 * P))
        else:
            self.layers["marks"].append(
                Edge.make_line((*p1, 0), (*p2, 0)))
        tx, ty = (p2[0] - p1[0], p2[1] - p1[1])
        tlen = math.hypot(tx, ty)
        tx, ty = tx / tlen, ty / tlen       # unit vector along the trace
        ang = math.degrees(math.atan2(ty, tx))
        for end, inward in ((p1, 1.0), (p2, -1.0)):
            # thick end stroke, lying on the trace, pointing inward
            self.layers["marks"].append(
                Pos(*end, 0) * Rot(Z=ang)
                * Pos(inward * 2.5 * P, 0, 0) * Rectangle(5 * P, 0.5 * P))
            # sight arrow: sits opposite the sight side, head pointing along
            # `normal` (the viewing direction), touching the trace end
            tip = (end[0] - normal[0] * 1.5 * P, end[1] - normal[1] * 1.5 * P)
            tail = (end[0] - normal[0] * 7 * P, end[1] - normal[1] * 7 * P)
            self.layers["marks"].append(Arrow(
                arrow_size=3 * P, shaft_width=0.3 * P,
                shaft_path=Edge.make_line((*tip, 0), (*tail, 0))))
            self.layers["text"].append(_text(
                label, 5 * P,
                (end[0] - normal[0] * 12 * P, end[1] - normal[1] * 12 * P),
                align=(Align.CENTER, Align.CENTER)))

    def detail(self, view: View, center_model: tuple[float, float, float],
               radius_paper: float, scale: int | float | str,
               label: str = "B", at: tuple[float, float] = (0.0, 0.0)
               ) -> Detail:
        """Circular detail view of `view` at a different scale.

        Clips the view's edges to a circle of `radius_paper` (paper mm)
        around `center_model`, blows them up by k = sheet_P / detail_P and
        places them at `at` (sheet coords). Draws the source circle +
        letter on the parent and the destination ring + caption. Call
        AFTER the parent view is placed. Dim inside via the returned
        Detail.pt() with TRUE model-mm labels.
        """
        P = self.P
        p_det, det_label = _parse_scale(scale)
        k = P / p_det
        c = view.pt(*center_model)
        r_src, r_dst = radius_paper * P, radius_paper * P * k
        clip = (Pos(*c, 0) * Circle(r_src)).face()
        failed = 0
        for layer, edges in (("visible", view.visible),
                             ("hidden", view.hidden)):
            for e in edges:
                try:
                    r = e & clip
                except Exception:
                    failed += 1
                    continue
                for piece in ([] if r is None else r.edges()):
                    if piece.length > 0.01 * P:
                        self.layers[layer].append(
                            piece.translate((-c[0], -c[1], 0)).scale(k)
                                 .translate((*at, 0)))
        if failed:
            print(f"  WARNING {self.name}: {failed} detail edges failed "
                  "to clip")
        # source marker on the parent: thin circle + letter at 45 deg
        self.layers["marks"].append(
            Pos(*c, 0) * (Circle(r_src) - Circle(r_src - 0.18 * P)))
        lp = (r_src + 4 * P) * 0.7071
        self.layers["text"].append(_text(
            label, 5 * P, (c[0] + lp, c[1] + lp),
            align=(Align.CENTER, Align.CENTER)))
        # destination ring + caption
        self.layers["marks"].append(
            Pos(*at, 0) * (Circle(r_dst) - Circle(r_dst - 0.18 * P)))
        self.note(f"DETAIL {label} ({det_label})",
                  (at[0], at[1] - r_dst - 6 * P))
        self._details.append((at, r_dst, k))
        return Detail(c, k, at, view)

    def auto_holes(self, view: View, part: Part, axis: str | None = None,
                   note_offset: tuple[float, float] = (12.0, 10.0),
                   note_step: float = 9.0, axis_tol_deg: float = 1.0
                   ) -> list[tuple]:
        """Recognise drilled holes (b123d-recognisers), center-mark those
        axial to `view` and emit one grouped hole_note per (⌀, depth,
        cbore, csink) family. Returns [(HoleRecord, count)] — empty when
        the recogniser is unavailable (annotate manually then).
        """
        if not _RECOGNISERS:
            print(f"  WARNING {self.name}: b123d-recognisers unavailable — "
                  "uv sync --extra recognise, or annotate holes manually")
            return []
        if axis is None:
            d = Vector(CAMERA[view.kind][0]).normalized()
        else:
            d = {"X": Vector(1, 0, 0), "Y": Vector(0, 1, 0),
                 "Z": Vector(0, 0, 1)}[axis.lstrip("+-").upper()]
        holes = recognise_holes(part, csinks=recognise_countersinks(part))
        cos_tol = math.cos(math.radians(axis_tol_deg))
        keep = [h for h in holes
                if abs(h.axis[0] * d.X + h.axis[1] * d.Y
                       + h.axis[2] * d.Z) >= cos_tol]
        groups: dict[tuple, list] = {}
        for h in keep:
            at = view.pt(*h.location)   # axis point -> circle center
            self.center_mark(at, h.diameter)
            key = (round(h.diameter, 2), h.bottom == "through",
                   None if h.bottom == "through" else round(h.depth, 1),
                   (round(h.cbore.diameter, 2), round(h.cbore.depth, 1))
                   if h.cbore else None,
                   (round(h.csink.major_diameter, 2),
                    round(h.csink.included_angle)) if h.csink else None)
            groups.setdefault(key, []).append((h, at))
        out = []
        for i, members in enumerate(groups.values()):
            h, at = max(members, key=lambda m: (m[1][1], -m[1][0]))
            thru = h.bottom == "through"
            self.hole_note(
                at, h.diameter, count=len(members), through=thru,
                depth=None if thru else f"{h.depth:g}",
                cbore_dia=f"{h.cbore.diameter:g}" if h.cbore else None,
                cbore_depth=f"{h.cbore.depth:g}" if h.cbore else None,
                csink_dia=f"{h.csink.major_diameter:g}" if h.csink else None,
                csink_angle=h.csink.included_angle if h.csink else None,
                offset_paper=(note_offset[0],
                              note_offset[1] + i * note_step))
            out.append((h, len(members)))
        return out

    def balloon(self, n: int | str, at: tuple[float, float],
                tip: tuple[float, float] | None = None,
                r_paper: float = 4.0) -> None:
        """ISO 6433 position balloon: circle with BOM position `n` at
        `at` (sheet coords); optional leader toward `tip` on the part,
        ending in a filled dot."""
        P = self.P
        r = r_paper * P
        self.layers["marks"].append(
            Pos(*at, 0) * (Circle(r) - Circle(r - 0.35 * P)))
        self.layers["text"].append(
            _text(str(n), 3.5 * P, at, align=(Align.CENTER, Align.CENTER)))
        if tip is not None:
            dx, dy = tip[0] - at[0], tip[1] - at[1]
            dist = math.hypot(dx, dy)
            if dist > r:
                ang = math.degrees(math.atan2(dy, dx))
                self.layers["marks"].append(
                    Pos(*at, 0) * Rot(Z=ang) * Pos(r + (dist - r) / 2, 0, 0)
                    * Rectangle(dist - r, 0.18 * P))
                self.layers["marks"].append(Pos(*tip, 0) * Circle(0.8 * P))

    def parts_table(self, rows: list[tuple]) -> None:
        """Parts table above the title block, rendered at write() time.
        Rows are (pos, name, qty, material) — use parts_rows() so balloon
        numbers match model.bom() by construction."""
        self._parts_rows = list(rows)

    def place_view(self, view: View, side: str, of: View,
                   gap_paper: float = 12.0) -> None:
        """Translate `view` so it sits on `side` of `of` ("below"/"above"/
        "left"/"right"), aligned by the ACTUAL projected edge bboxes.

        Never place views from model-coordinate spans: project_to_viewport
        centers edges on the part, so a part modeled at e.g. z=1100 lands
        nowhere near model coordinates. Call BEFORE add_view.
        """
        g = gap_paper * self.P
        b = View._edges_bbox(of.visible)
        s = View._edges_bbox(view.visible)
        if side == "below":
            view.translate(b[0] - s[0], b[2] - g - s[3])
        elif side == "above":
            view.translate(b[0] - s[0], b[3] + g - s[2])
        elif side == "left":
            view.translate(b[0] - g - s[1], b[2] - s[2])
        elif side == "right":
            view.translate(b[1] + g - s[0], b[2] - s[2])
        else:
            raise ValueError(f"unknown side {side!r}")

    def add_views(self, part: Part, kinds: list[str],
                  gap_paper: float = 12.0) -> dict[str, View]:
        """Create and add views laid out in first angle (top BELOW front,
        right view on the LEFT, left/back on the RIGHT); {kind: View}."""
        views = {k: View(part, k) for k in kinds}
        base = views[kinds[0]]
        anchor_right = base
        for kind in kinds[1:]:
            v = views[kind]
            if kind in ("top", "bottom"):
                self.place_view(v, "below" if kind == "top" else "above",
                                base, gap_paper)
            elif kind == "right":
                self.place_view(v, "left", base, gap_paper)
            else:                       # "left", "back"
                self.place_view(v, "right", anchor_right, gap_paper)
                anchor_right = v
        for v in views.values():
            self.add_view(v)
        return views

    def hatch(self, face2d, style: str) -> None:
        """Fill a sheet-space polygon with ISO-style section hatching.

        Stripes are thin filled rectangles clipped by the polygon — plain
        coplanar 2D face booleans, no fragile edge/face intersections.
        """
        P = self.P
        failed = 0
        for angle, spacing in HATCH_STYLES[style]:
            bb = face2d.bounding_box()
            cx = (bb.min.X + bb.max.X) / 2
            cy = (bb.min.Y + bb.max.Y) / 2
            diag = math.hypot(bb.size.X, bb.size.Y) + 4 * spacing * P
            n = int(diag / (spacing * P) / 2) + 1
            for k in range(-n, n + 1):
                stripe = (Pos(cx, cy, 0) * Rot(Z=angle)
                          * Pos(0, k * spacing * P, 0)
                          * Rectangle(diag, 0.22 * P))
                try:
                    piece = stripe & face2d
                    if piece.area > 1e-6:
                        self.layers["hatch"].append(piece)
                except Exception:
                    failed += 1
        if failed:
            print(f"  WARNING {self.name}: {failed} hatch stripes failed "
                  f"({style}) — check the section polygon on the PNG")

    def _title_block(self, fx0: float, fy0: float, fx1: float) -> None:
        P = self.P
        x0, y0 = fx1 - TB_W * P, fy0          # bottom-right corner of frame
        w, h = TB_W * P, TB_H * P
        split = x0 + 100.0 * P                # left info cell | right grid
        self.layers["frame"] += [
            Edge.make_line((x0, y0 + h, 0), (x0 + w, y0 + h, 0)),
            Edge.make_line((x0, y0, 0), (x0, y0 + h, 0)),
            Edge.make_line((split, y0, 0), (split, y0 + h, 0)),
            Edge.make_line((split, y0 + h / 3, 0), (x0 + w, y0 + h / 3, 0)),
            Edge.make_line((split, y0 + 2 * h / 3, 0),
                           (x0 + w, y0 + 2 * h / 3, 0)),
        ]
        date = DATE or datetime.date.today().isoformat()
        # L10N: title-block labels are read off the printed sheet
        rows = [("DRAWING NO.", self.number), ("SCALE", self.scale_label),
                ("DATE / QTY", f"{date} / {self.count}")]
        for i, (key, value) in enumerate(rows):
            ry = y0 + h - (i + 1) * h / 3
            self.layers["text"].append(
                _text(key, 2.2 * P, (split + 3 * P, ry + h / 3 - 4.2 * P)))
            self.layers["text"].append(
                _text(value, 3.2 * P, (split + 3 * P, ry + 2.2 * P)))
        self.layers["text"] += [
            _text(self.title, 5.0 * P, (x0 + 4 * P, y0 + h - 9 * P)),
            _text(f"MATERIAL: {self.material}", 2.6 * P,
                  (x0 + 4 * P, y0 + h - 15.5 * P)),
            _text((self.sheet_note + " · " if self.sheet_note else "")
                  + "DIMENSIONS IN MM · ISO-E", 2.6 * P,
                  (x0 + 4 * P, y0 + h - 21.5 * P)),
            _text(PROJECT, 2.8 * P, (x0 + 4 * P, y0 + 2.5 * P)),
        ]

    def _parts_table(self, fx1: float, fy0: float) -> None:
        """Parts grid above the title block: header row at the bottom,
        positions ascending upward (ISO 7573 style)."""
        P = self.P
        x0 = fx1 - TB_W * P
        y = fy0 + TB_H * P                  # top edge of the title block
        rh = 7.0 * P
        cols = [12.0, 100.0, 14.0, 64.0]    # paper mm; sums to TB_W
        # L10N: parts-table header row
        lines = [("POS.", "NAME", "QTY", "MATERIAL")] + list(self._parts_rows)
        for i, row in enumerate(lines):
            ry = y + i * rh
            self.layers["frame"].append(Edge.make_line(
                (x0, ry + rh, 0), (x0 + TB_W * P, ry + rh, 0)))
            cx = x0
            for width, cell in zip(cols, row):
                self.layers["text"].append(_text(
                    str(cell), 2.2 * P if i == 0 else 2.6 * P,
                    (cx + 2 * P, ry + 2.2 * P)))
                cx += width * P
        top = y + len(lines) * rh
        self.layers["frame"].append(Edge.make_line((x0, y, 0), (x0, top, 0)))
        cx = x0
        for width in cols[:-1]:
            cx += width * P
            self.layers["frame"].append(
                Edge.make_line((cx, y, 0), (cx, top, 0)))

    def _lint_dims(self) -> list[str]:
        """Dim-truth check: every checkable label must equal the measured
        anchor distance (model mm). Catches wrong anchors, stale labels and
        dims accidentally spanning two views."""
        findings = []
        for label, p1, p2 in self._dim_checks:
            want = _parse_dim_label(label)
            if want is None:
                continue
            measured = math.hypot(p2[0] - p1[0], p2[1] - p1[1])
            where = ""
            for at, r_dst, k in self._details:
                if (math.hypot(p1[0] - at[0], p1[1] - at[1]) <= r_dst
                        and math.hypot(p2[0] - at[0], p2[1] - at[1])
                        <= r_dst):
                    measured /= k
                    where = f" in DETAIL (k={k:g})"
                    break
            tol = 0.2 + 0.005 * measured
            if abs(measured - want) > tol:
                findings.append(
                    f"dim '{label}' measures {measured:.1f}{where} "
                    f"(Δ{abs(measured - want):.2f} > ±{tol:.2f})")
        return findings

    def _lint_collisions(self) -> list[str]:
        """Text must stay clear: label×label overlap, foreign annotation
        strokes through labels, visible part edges through labels. Uses the
        helpers' label metadata — raw sketches (balloons, section letters)
        are not covered."""
        if not _DRAFTING:
            print(f"  note {self.name}: collision lint skipped "
                  "(build123d_drafting missing)")
            return []
        P = self.P
        annos = [s for layer in ("dims", "marks", "text")
                 for s in self.layers[layer]]
        labeled = [(s, s.label_bbox) for s in annos
                   if getattr(s, "label_bbox", None)]
        findings = []
        for i, (sa, ba) in enumerate(labeled):          # A: label x label
            for sb, bb_ in labeled[i + 1:]:
                w = min(ba[2], bb_[2]) - max(ba[0], bb_[0])
                h = min(ba[3], bb_[3]) - max(ba[1], bb_[1])
                if w <= 0 or h <= 0:
                    continue
                area = w * h / (P * P)
                smaller = min(
                    (ba[2] - ba[0]) * (ba[3] - ba[1]),
                    (bb_[2] - bb_[0]) * (bb_[3] - bb_[1])) / (P * P)
                if area > max(0.5, 0.15 * smaller):
                    findings.append(
                        f"label '{_label_of(sa)}' overlaps label "
                        f"'{_label_of(sb)}' by {area:.1f} mm² — nudge "
                        "offset_paper/side")
        for sa, ba in labeled:              # B: foreign strokes vs label
            for sb in annos:
                if sb is sa:
                    continue
                if any(_clip_len(seg, ba) > 1.0 * P
                       for seg in getattr(sb, "segments", ()) or ()):
                    findings.append(
                        f"line crosses label '{_label_of(sa)}' — move the "
                        "dim or leader elbow")
                    break
        pad = 0.5 * P
        for sa, ba in labeled:              # C: part edges vs label
            bx = (ba[0] - pad, ba[1] - pad, ba[2] + pad, ba[3] + pad)
            for e in self.layers["visible"]:
                eb = e.bounding_box()
                if (eb.max.X < bx[0] or eb.min.X > bx[2]
                        or eb.max.Y < bx[1] or eb.min.Y > bx[3]):
                    continue
                inside = sum(
                    1 for t in range(33)
                    if (lambda v: bx[0] <= v.X <= bx[2]
                        and bx[1] <= v.Y <= bx[3])(e @ (t / 32)))
                if inside / 33 * e.length > 1.0 * P:
                    findings.append(
                        f"part edge crosses label '{_label_of(sa)}' — move "
                        "the dim off the outline")
                    break
        return findings

    def write(self, dxf: bool = False) -> None:
        P = self.P
        findings = self._lint_dims() + self._lint_collisions()
        for i, finding in enumerate(findings):
            if i == 10:
                print(f"  WARNING {self.name}: (+{len(findings) - 10} more)")
                break
            print(f"  WARNING {self.name}: {finding}")
        if self._skipped_marks:
            print(f"  WARNING {self.name}: {self._skipped_marks} center "
                  "marks/centerlines skipped (build123d_drafting missing)")
        drawn = (self.layers["visible"] + self.layers["hidden"]
                 + self.layers["dims"] + self.layers["marks"])
        boxes = [s.bounding_box() for s in drawn]
        cx = (min(b.min.X for b in boxes) + max(b.max.X for b in boxes)) / 2
        cy = (min(b.min.Y for b in boxes) + max(b.max.Y for b in boxes)) / 2
        cw = max(b.max.X for b in boxes) - min(b.min.X for b in boxes)
        ch = max(b.max.Y for b in boxes) - min(b.min.Y for b in boxes)
        # bottom strip reserved for the title block AND the parts table (the
        # table grows upward from it — without this a tall assembly always
        # collides with the parts table)
        reserved = TB_H + (len(self._parts_rows) + 1) * 7.0 \
            if self._parts_rows else TB_H
        if cw > (PAPER_W - 2 * MARGIN) * P or \
                ch > (PAPER_H - 2 * MARGIN - reserved) * P:
            print(f"  WARNING {self.name}: content exceeds A3 at "
                  f"{self.scale_label}"
                  + (" (parts table shrinks the graphics area — larger "
                     "scale_den or fewer rows)" if self._parts_rows else ""))
        # frame centered on content; graphics area sits above the reserved
        # strip (do NOT add it again to fy0 — classic off-by-strip bug)
        fx0 = cx - (PAPER_W / 2 - MARGIN) * P
        fx1 = cx + (PAPER_W / 2 - MARGIN) * P
        fy0 = cy - (PAPER_H - 2 * MARGIN + reserved) / 2 * P
        fy1 = fy0 + (PAPER_H - 2 * MARGIN) * P
        self.layers["frame"] += [
            Edge.make_line((fx0, fy0, 0), (fx1, fy0, 0)),
            Edge.make_line((fx1, fy0, 0), (fx1, fy1, 0)),
            Edge.make_line((fx1, fy1, 0), (fx0, fy1, 0)),
            Edge.make_line((fx0, fy1, 0), (fx0, fy0, 0))]
        self._title_block(fx0, fy0, fx1)
        if self._parts_rows:
            self._parts_table(fx1, fy0)

        exporter = ExportSVG(scale=1.0 / P, margin=5)
        def add_layer(name, **kw):
            try:
                exporter.add_layer(name, **kw)
            except TypeError:       # older ExportSVG without fill_color
                kw.pop("fill_color", None)
                exporter.add_layer(name, **kw)
        add_layer("frame", line_weight=0.7)
        add_layer("visible", line_weight=0.7)
        add_layer("hidden", line_color=(110, 110, 110), line_weight=0.35,
                  line_type=LineType.ISO_DASH)
        # dim/mark ink is filled faces (glyphs, arrowheads, thin-rect lines)
        # -> fill_color is mandatory and line_weight must stay hairline
        add_layer("dims", line_color=DIM_BLUE, fill_color=DIM_BLUE,
                  line_weight=0.1)
        add_layer("marks", line_color=(20, 20, 20), fill_color=(20, 20, 20),
                  line_weight=0.1)
        add_layer("hatch", line_color=(60, 60, 60), fill_color=(60, 60, 60),
                  line_weight=0.05)
        add_layer("text", line_color=(20, 20, 20), fill_color=(20, 20, 20),
                  line_weight=0.1)
        for layer, shapes in self.layers.items():
            for shape in shapes:
                exporter.add_shape(shape, layer=layer)

        OUT.mkdir(parents=True, exist_ok=True)
        path = OUT / f"{self.name}.svg"
        exporter.write(str(path))
        # screenshot wrapper — Chrome renders bare SVG 1 px/unit and crops
        (OUT / f"{self.name}.html").write_text(
            '<!doctype html><html><body style="margin:0;display:grid;'
            'place-items:center;height:100vh">'
            f'<img src="{self.name}.svg" '
            'style="max-width:97vw;max-height:97vh"></body></html>\n')
        # print wrapper — SVG units are paper mm, so sizing the image to
        # its native units in mm prints at exactly 1:P
        svg_head = path.read_text()[:500]
        w_mm = float(re.search(r'width="([\d.]+)', svg_head).group(1))
        h_mm = float(re.search(r'height="([\d.]+)', svg_head).group(1))
        (OUT / f"{self.name}.print.html").write_text(
            "<!doctype html><html><head><style>"
            f"@page {{ size: {PAPER_W}mm {PAPER_H}mm; margin: 0; }}"
            "html,body { margin:0; padding:0; }"
            f"body {{ width:{PAPER_W}mm; height:{PAPER_H}mm; display:grid;"
            " place-items:center; }"
            f"img {{ width:{w_mm}mm; height:{h_mm}mm; }}"
            f'</style></head><body><img src="{self.name}.svg">'
            "</body></html>\n")
        _update_manifest(self)
        if dxf:
            self._write_dxf()
        print(f"wrote {path}")

    def _write_dxf(self) -> None:
        """Layered DXF in MODEL mm (true 1:1 — the `visible` layer is the
        CNC-usable geometry; annotation/text export as outline curves and
        are P-times paper size)."""
        try:
            # DXF lineweights are restricted to the ezdxf value set
            # (0.05, 0.09, 0.13, 0.25, 0.35, 0.70, ...)
            exp = ExportDXF(unit=Unit.MM)
            exp.add_layer("frame", line_weight=0.7)
            exp.add_layer("visible", line_weight=0.7)
            exp.add_layer("hidden", color=ColorIndex.GRAY, line_weight=0.35,
                          line_type=LineType.ISO_DASH)
            exp.add_layer("dims", color=ColorIndex.BLUE, line_weight=0.25)
            exp.add_layer("marks", line_weight=0.13)
            exp.add_layer("hatch", line_weight=0.05)
            exp.add_layer("text", line_weight=0.09)
            for layer, shapes in self.layers.items():
                for shape in shapes:
                    exp.add_shape(shape, layer=layer)
            exp.write(str(OUT / f"{self.name}.dxf"))
            print(f"wrote {OUT / f'{self.name}.dxf'} (model mm, 1:1)")
        except Exception as exc:
            print(f"  WARNING {self.name}: DXF export failed ({exc})")


# --------------------------------------------------------------------------
# Sheet manifest — drawing-number order for merge_pdfs.py, no hand list.
# --------------------------------------------------------------------------
_MANIFEST_FRESH = False   # first write in a process starts a fresh manifest


def _natural(s: str) -> tuple:
    return tuple(int(t) if t.isdigit() else t
                 for t in re.findall(r"\d+|\D+", s))


def _update_manifest(sheet: Sheet) -> None:
    global _MANIFEST_FRESH
    path = OUT / "manifest.json"
    entries = []
    if _MANIFEST_FRESH and path.exists():
        entries = json.loads(path.read_text())["sheets"]
    entries = [e for e in entries if e["name"] != sheet.name]
    entries.append({"name": sheet.name, "number": sheet.number,
                    "title": sheet.title, "scale": sheet.scale_label})
    entries.sort(key=lambda e: _natural(e["number"]))
    path.write_text(json.dumps({"version": 1, "sheets": entries},
                               ensure_ascii=False, indent=1) + "\n")
    _MANIFEST_FRESH = True


# --------------------------------------------------------------------------
# Parts-table rows for assembly sheets
# --------------------------------------------------------------------------
def parts_rows() -> list[tuple[int, str, int, str]]:
    """Parts rows (pos, name, qty, material) from model.bom_rows() —
    part-family groups collapsed, balloon numbers match the BOM by
    construction."""
    return [(i, name, count, material)
            for i, name, material, count, _mass, _note in model.bom_rows()]


# --------------------------------------------------------------------------
# Section views — recipe, proven on a sandwich-panel product:
#   1. cutter = half-space box up to the plane <axis> = coord; kept = solid
#      - cutter per part (skip empties); View(Compound(children=kept), ...)
#      shows the cut faces plus everything behind the plane.
#   2. section_faces(solid, axis, coord) -> true cross-section polygons.
#   3. sheet.hatch(sheet_polygon(face, view), "wood"/"xps"/"metal").
#   4. sheet.section_indicator(parent_view, axis, coord, "A") draws the
#      cutting-plane trace + sight arrows on the parent view; title the
#      section view "SECTION A-A" via sheet.note().
#   Layered assemblies: keep per-layer solids accessible in the model (a
#   `layer_solids` field) so each layer hatches with its own pattern.
# --------------------------------------------------------------------------
def section_faces(solid: Part, axis: str, coord: float) -> list:
    """Cross-section faces of `solid` at the plane <axis> = coord
    (axis "X"/"Y"/"Z").

    A 1 mm sliver intersection, keeping the sliver faces in the plane —
    exact for prismatic geometry along the axis, boolean-robust always.
    """
    ax = axis.upper()
    bb = solid.bounding_box()
    pad = 100.0
    lo = [bb.min.X - pad, bb.min.Y - pad, bb.min.Z - pad]
    size = [bb.size.X + 2 * pad, bb.size.Y + 2 * pad, bb.size.Z + 2 * pad]
    i = "XYZ".index(ax)
    lo[i], size[i] = coord, 1.0
    try:
        sliver = solid & (Pos(*lo)
                          * Box(*size, align=(Align.MIN,) * 3))
        if not sliver.volume or sliver.volume < 1.0:
            return []
    except Exception:
        return []
    return [f for f in sliver.faces().filter_by(getattr(Axis, ax))
            if abs(getattr(f.center(), ax) - coord) < 1e-4]


def sheet_polygon(face, view: View):
    """Map a planar polygonal 3D face into sheet coordinates via view.pt.

    Exact for faces with straight edges (map the ordered wire vertices).
    """
    wire = face.outer_wire()
    try:
        edges = wire.order_edges()
    except AttributeError:
        edges = wire.edges()
    pts = [edge @ 0 for edge in edges]
    pts2 = [(*view.pt(p.X, p.Y, p.Z), 0) for p in pts]
    return make_face(Polyline(*pts2, close=True))


# --------------------------------------------------------------------------
# Demo sheets for the template bracket — replace with the real product's
# sheets. Every dim anchors on MODEL PARAMETERS via view.pt().
# --------------------------------------------------------------------------
def sheet_bracket() -> None:
    """Part sheet: auto-laid-out views, named-side dims, hole callout +
    center marks, and a section A-A with its indicator."""
    s = Sheet("bracket", "BR-01", "ANGLE BRACKET", 1,
              f"steel S235, sheet {model.thickness:g} mm", count=2)
    part = model.PARTS["bracket"].builder()
    # first angle: top view lands BELOW the front view automatically
    views = s.add_views(part, ["front", "top"], gap_paper=18.0)
    v, vt = views["front"], views["top"]
    s.dim(v.pt(0, 0, 0), v.pt(model.bracket_leg_a, 0, 0), "below", 10,
          f"{model.bracket_leg_a:.0f}")
    s.dim(v.pt(model.bracket_leg_a, 0, 0),
          v.pt(model.bracket_leg_a, 0, model.thickness), "right", 10,
          f"{model.thickness:.0f}")
    s.dim(v.pt(0, 0, 0), v.pt(0, 0, model.bracket_leg_b), "left", 10,
          f"{model.bracket_leg_b:.0f}")
    off = model.hole_edge_offset
    s.dim(vt.pt(0, 0, 0), vt.pt(off, 0, 0), "below", 8, f"{off:.0f}")
    s.dim(vt.pt(off, 0, 0), vt.pt(model.bracket_leg_a - off, 0, 0),
          "below", 8, f"{model.bracket_leg_a - 2 * off:.0f}")
    s.dim(vt.pt(model.bracket_leg_a, 0, 0),
          vt.pt(model.bracket_leg_a, model.bracket_width, 0), "right", 10,
          f"{model.bracket_width:.0f}")
    # holes on the top view: recognised automatically; manual fallback
    # keeps the demo annotated when the `recognise` extra is absent
    mid = model.bracket_width / 2
    if not s.auto_holes(vt, part, note_offset=(14.0, -14.0)):
        for x, _ in model.hole_positions_a:
            s.center_mark(vt.pt(x, mid, 0), model.hole_diameter)
        s.hole_note(vt.pt(model.hole_positions_a[0][0], mid, 0),
                    model.hole_diameter, count=len(model.hole_positions_a),
                    through=True, offset_paper=(-12.0, 26.0))
    # section A-A at y = width/2 (through the holes), viewed from -Y:
    # indicator on the top view, hatched section view right of the front view
    y_cut = model.bracket_width / 2
    s.section_indicator(vt, "Y", y_cut, "A", direction=-1)
    kept = part - Pos(-500, y_cut, -500) * Box(1000, 1000, 1000,
                                               align=(Align.MIN,) * 3)
    vsec = View(kept, "front")
    s.place_view(vsec, "right", v, gap_paper=40.0)  # before add_view!
    s.add_view(vsec)
    for face in section_faces(part, "Y", y_cut):
        s.hatch(sheet_polygon(face, vsec), "metal")
    eb = View._edges_bbox(vsec.visible)
    s.note("SECTION A-A", ((eb[0] + eb[1]) / 2, eb[2] - 12))
    # circular 2:1 detail of the left hole, placed right of the top view
    hole = (model.hole_positions_a[0][0], mid, model.thickness)
    tb = View._edges_bbox(vt.visible)
    det = s.detail(vt, hole, radius_paper=11.0, scale="2:1", label="B",
                   at=(tb[1] + 55, (tb[2] + tb[3]) / 2))
    s.dim(det.pt(hole[0] - model.hole_diameter / 2, mid, 0),
          det.pt(hole[0] + model.hole_diameter / 2, mid, 0), "above", 14,
          f"Ø{model.hole_diameter:g}")
    s.write(dxf=True)


def sheet_overview() -> None:
    """Assembly-sheet pattern: balloons + parts table above the title block.
    Balloon numbers come from parts_rows() = model.bom() order."""
    s = Sheet("overview", "ASM-01", "ASSEMBLY", 1, "see parts table")
    part = model.PARTS["bracket"].builder()
    v = View(part, "front")
    s.add_view(v)
    tip = v.pt(model.bracket_leg_a * 0.75, 0, model.thickness)
    s.balloon(1, (tip[0] + 20, tip[1] + 30), tip=tip)
    s.parts_table(parts_rows())
    s.write()


def lint_selftest() -> None:
    """Deliberately broken annotations must trip the lints, clean ones must
    stay silent. Exit non-zero on mismatch (CI runs this)."""
    if not _DRAFTING:
        print("lint-selftest skipped (build123d_drafting missing)")
        return
    part = model.PARTS["bracket"].builder()
    s = Sheet("selftest", "ST-01", "SELFTEST", 1, "test")
    v = View(part, "front")
    s.add_view(v)
    a, b = v.pt(0, 0, 0), v.pt(model.bracket_leg_a, 0, 0)
    s.dim(a, b, "below", 10, "99")          # wrong -> 1 truth finding
    s.dim(a, b, "below", 18, "(60)")        # reference -> skipped
    s.dim(a, b, "below", 26, "2× 30")       # count -> skipped
    truth = s._lint_dims()
    ok = True
    if len(truth) != 1:
        print(f"SELFTEST FAIL: expected 1 dim-truth finding, got {truth}")
        ok = False
    # duplicate dim at the same offset -> label x label overlap
    s.dim(a, b, "below", 10, f"{model.bracket_leg_a:.0f}")
    # a note dropped on the part outline -> part-edge finding
    s.note("ON EDGE", v.pt(model.bracket_leg_a / 2, 0, model.thickness))
    # a centerline through the '99' label -> foreign-segment finding
    lb = next(x.label_bbox for x in s.layers["dims"]
              if getattr(x, "label", None) == "99")
    cx = (lb[0] + lb[2]) / 2
    s.centerline((cx, lb[1] - 20), (cx, lb[3] + 20))
    col = s._lint_collisions()
    for needle in ("overlaps label", "line crosses label",
                   "part edge crosses label"):
        if not any(needle in f for f in col):
            print(f"SELFTEST FAIL: no '{needle}' finding in {col}")
            ok = False
    # a detail dim with a true model-mm label must stay silent
    s2 = Sheet("selftest2", "ST-02", "SELFTEST2", 1, "test")
    v2 = View(part, "top")
    s2.add_view(v2)
    mid = model.bracket_width / 2
    hole = (model.hole_positions_a[0][0], mid, 0)
    det = s2.detail(v2, hole, 11.0, "2:1", at=(200.0, 0.0))
    s2.dim(det.pt(hole[0] - 4, mid, 0), det.pt(hole[0] + 4, mid, 0),
           "above", 10, "8")
    extra = s2._lint_dims()
    if extra:
        print(f"SELFTEST FAIL: detail dim false positive: {extra}")
        ok = False
    print("lint-selftest OK" if ok else "lint-selftest FAILED")
    if not ok:
        raise SystemExit(1)


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "lint-selftest":
        lint_selftest()
    else:
        sheet_bracket()
        sheet_overview()
