"""Dimensioned production drawings (build123d) — proven sheet framework.

Sheet standard (see the skill's drafting-conventions.md):
- Fixed A3 landscape sheet with a border frame and a title block (razítko)
  bottom-right: drawing number, title, scale, material, count, date, units.
- TRUE scale per sheet (1:10 large panels, 1:5 details, 1:1 small parts) —
  ExportSVG(scale=1/P) makes SVG units equal paper mm, which also enables
  exact-scale printing (the .print.html wrapper each sheet emits).
- Dimensions: italic font, thin technical-blue lines with FILLED text so
  they read apart from the heavy black object outlines.
- Views from the side the fabricator works from; first-angle (ISO-E)
  placement when a second view is used (top view BELOW the front view).
- Dimension anchor points come from MODEL PARAMETERS and are calibrated to
  the projected geometry (affine fit of the projected bbox), so the mild
  perspective of project_to_viewport cannot detach dims from edges.

Outputs per sheet into out/drawings/:
  <name>.svg          the drawing (units = paper mm)
  <name>.html         scaling wrapper for Chrome screenshot (PNG check)
  <name>.print.html   A3 true-scale wrapper for `chrome --print-to-pdf`

Run: uv run drawings.py; PNGs/PDFs via `make drawings-png` / `drawings-pdf`.
"""

from __future__ import annotations

import math
import re
from pathlib import Path
from typing import Callable

from build123d import *  # noqa: F403

import model

OUT = Path(__file__).parent / "out" / "drawings"

DATE = "EDIT-ME"                 # e.g. 2026-08-24
PROJECT = "EDIT-ME PROJECT"      # uppercase project line in the title block
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
}
CAMERA = {"front": ((0, -1, 0), (0, 0, 1)), "back": ((0, 1, 0), (0, 0, 1)),
          "left": ((-1, 0, 0), (0, 0, 1)), "right": ((1, 0, 0), (0, 0, 1)),
          "top": ((0, 0, 1), (0, 1, 0))}


class View:
    """Projected edges + a parameter->sheet coordinate transform.

    Use pt(x, y, z) with MODEL coordinates to anchor dimensions; the affine
    calibration guarantees they meet the projected edges exactly.
    `shift` places secondary views (first-angle: top view shifts -Y).
    """

    def __init__(self, part: Part, kind: str,
                 shift: tuple[float, float] = (0.0, 0.0)):
        direction, up = CAMERA[kind]
        bb = part.bounding_box()
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
        tx, ty = a[0] - e0 * sx + shift[0], a[2] - f0 * sy + shift[1]
        assert 0.9 < sx < 1.1 and 0.9 < sy < 1.1, \
            f"projection scale off: {sx:.3f}/{sy:.3f}"
        if shift != (0.0, 0.0):
            self.visible = [e.translate((*shift, 0)) for e in self.visible]
            self.hidden = [e.translate((*shift, 0)) for e in self.hidden]
        self._m = mapping
        self._s = (sx, sy, tx, ty)

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
    return Pos(*at, 0) * Text(txt, font_size=size, align=align)


class Sheet:
    """One A3 drawing sheet. Offsets in dim() are PAPER mm.

    Offset sign rule (verified): positive offset lies on the border edge's
    RIGHT-HAND normal — p1->p2 direction rotated -90 deg. So a horizontal
    left->right border puts positive offsets BELOW; a vertical bottom->top
    border puts them RIGHT. Choose p1/p2 order so dims land outside the
    outline, then verify on the PNG.
    """

    def __init__(self, name: str, number: str, title: str, scale_den: int,
                 material: str, count: int = 1, note: str = ""):
        self.name, self.number, self.title = name, number, title
        self.scale_den, self.material = scale_den, material
        self.count, self.sheet_note = count, note
        self.P = float(scale_den)           # model mm per paper mm
        try:
            self.draft = Draft(font_size=3.5 * self.P, font="Arial",
                               font_style=FontStyle.ITALIC,
                               arrow_length=2.5 * self.P,
                               pad_around_text=1.2 * self.P,
                               decimal_precision=0)
        except TypeError:
            self.draft = Draft(font_size=3.5 * self.P, decimal_precision=0)
        self.layers: dict[str, list] = {
            "visible": [], "hidden": [], "dims": [], "hatch": [],
            "frame": [], "text": []}

    def add_view(self, view: View) -> None:
        self.layers["visible"].extend(view.visible)
        self.layers["hidden"].extend(view.hidden)

    def dim(self, p1: tuple[float, float], p2: tuple[float, float],
            offset_paper_mm: float, label: str | None = None) -> None:
        border = Edge.make_line((*p1, 0), (*p2, 0))
        self.layers["dims"].append(
            ExtensionLine(border=border, offset=offset_paper_mm * self.P,
                          draft=self.draft, label=label))

    def hatch(self, face2d, style: str) -> None:
        """Fill a sheet-space polygon with ISO-style section hatching.

        Stripes are thin filled rectangles clipped by the polygon — plain
        coplanar 2D face booleans, no fragile edge/face intersections.
        """
        P = self.P
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
                    continue

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
        rows = [("VÝKRES Č.", self.number), ("MĚŘÍTKO", f"1:{self.scale_den}"),
                ("DATUM / KS", f"{DATE} / {self.count}")]
        for i, (key, value) in enumerate(rows):
            ry = y0 + h - (i + 1) * h / 3
            self.layers["text"].append(
                _text(key, 2.2 * P, (split + 3 * P, ry + h / 3 - 4.2 * P)))
            self.layers["text"].append(
                _text(value, 3.2 * P, (split + 3 * P, ry + 2.2 * P)))
        self.layers["text"] += [
            _text(self.title, 5.0 * P, (x0 + 4 * P, y0 + h - 9 * P)),
            _text(f"MATERIÁL: {self.material}", 2.6 * P,
                  (x0 + 4 * P, y0 + h - 15.5 * P)),
            _text((self.sheet_note + " · " if self.sheet_note else "")
                  + "KÓTY V MM · ISO-E", 2.6 * P,
                  (x0 + 4 * P, y0 + h - 21.5 * P)),
            _text(PROJECT, 2.8 * P, (x0 + 4 * P, y0 + 2.5 * P)),
        ]

    def write(self) -> None:
        P = self.P
        drawn = (self.layers["visible"] + self.layers["hidden"]
                 + self.layers["dims"])
        boxes = [s.bounding_box() for s in drawn]
        cx = (min(b.min.X for b in boxes) + max(b.max.X for b in boxes)) / 2
        cy = (min(b.min.Y for b in boxes) + max(b.max.Y for b in boxes)) / 2
        cw = max(b.max.X for b in boxes) - min(b.min.X for b in boxes)
        ch = max(b.max.Y for b in boxes) - min(b.min.Y for b in boxes)
        if cw > (PAPER_W - 2 * MARGIN) * P or \
                ch > (PAPER_H - 2 * MARGIN - TB_H) * P:
            print(f"  WARNING {self.name}: content exceeds A3 at "
                  f"1:{self.scale_den}")
        # frame centered on content; graphics area sits above the title
        # strip (do NOT add TB_H again to fy0 — classic off-by-strip bug)
        fx0 = cx - (PAPER_W / 2 - MARGIN) * P
        fx1 = cx + (PAPER_W / 2 - MARGIN) * P
        fy0 = cy - (PAPER_H - 2 * MARGIN + TB_H) / 2 * P
        fy1 = fy0 + (PAPER_H - 2 * MARGIN) * P
        self.layers["frame"] += [
            Edge.make_line((fx0, fy0, 0), (fx1, fy0, 0)),
            Edge.make_line((fx1, fy0, 0), (fx1, fy1, 0)),
            Edge.make_line((fx1, fy1, 0), (fx0, fy1, 0)),
            Edge.make_line((fx0, fy1, 0), (fx0, fy0, 0))]
        self._title_block(fx0, fy0, fx1)

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
        add_layer("dims", line_color=DIM_BLUE, fill_color=DIM_BLUE,
                  line_weight=0.25)
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
        print(f"wrote {path}")


# --------------------------------------------------------------------------
# Section views (řezy) — recipe, proven on a sandwich-panel product:
#   1. cutter = half-space box up to the plane x = x0; kept = solid - cutter
#      per part (skip empties); View(Compound(children=kept), "left") shows
#      the cut faces plus everything behind the plane as background edges.
#   2. section_faces(solid, x0) -> the true cross-section polygons.
#   3. sheet.hatch(sheet_polygon(face, view), "wood"/"xps"/"metal").
#   Layered assemblies: keep per-layer solids accessible in the model (a
#   `layer_solids` field) so each layer hatches with its own pattern.
#   For a Y-plane section, use kind "front"/"back" and swap x/y analogously.
# --------------------------------------------------------------------------
def section_faces(solid: Part, x0: float) -> list:
    """Cross-section faces of `solid` at the plane x = x0.

    A 1 mm sliver intersection, keeping the sliver faces in the plane —
    exact for X-prismatic geometry, boolean-robust always.
    """
    try:
        sliver = solid & (Pos(x0, -4000, -1000)
                          * Box(1.0, 8000, 6000,
                                align=(Align.MIN, Align.MIN, Align.MIN)))
        if not sliver.volume or sliver.volume < 1.0:
            return []
    except Exception:
        return []
    return [f for f in sliver.faces().filter_by(Axis.X)
            if abs(f.center().X - x0) < 1e-4]


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
# Demo sheet for the template bracket — replace with the real product's
# sheets. Every dim anchors on MODEL PARAMETERS via view.pt().
# --------------------------------------------------------------------------
def sheet_bracket() -> None:
    s = Sheet("bracket", "BR-01", "ÚHELNÍK", 1,
              f"ocel S235, plech {model.thickness:g} mm", count=2)
    part = model.PARTS["bracket"].builder()
    v = View(part, "front")
    s.add_view(v)
    s.dim(v.pt(0, 0, 0), v.pt(model.bracket_leg_a, 0, 0), 10,
          f"{model.bracket_leg_a:.0f}")
    s.dim(v.pt(model.bracket_leg_a, 0, 0),
          v.pt(model.bracket_leg_a, 0, model.thickness), 10,
          f"{model.thickness:.0f}")
    s.dim(v.pt(0, 0, 0), v.pt(0, 0, model.bracket_leg_b), -10,
          f"{model.bracket_leg_b:.0f}")
    # first angle: top view BELOW the front view (holes appear as circles)
    vt = View(part, "top", shift=(0, -(model.bracket_width + 45)))
    s.add_view(vt)
    off = model.hole_edge_offset
    s.dim(vt.pt(0, 0, 0), vt.pt(off, 0, 0), 8, f"{off:.0f}")
    s.dim(vt.pt(off, 0, 0), vt.pt(model.bracket_leg_a - off, 0, 0), 8,
          f"{model.bracket_leg_a - 2 * off:.0f}")
    s.dim(vt.pt(model.bracket_leg_a, 0, 0),
          vt.pt(model.bracket_leg_a, model.bracket_width, 0), 10,
          f"{model.bracket_width:.0f}")
    s.write()


if __name__ == "__main__":
    sheet_bracket()
