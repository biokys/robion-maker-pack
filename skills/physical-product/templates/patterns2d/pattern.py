"""Parametric 2D cutting pattern — single source of truth for pieces, the
marker layout and fabric consumption.

Conventions (do not break):
- All dimensions in millimetres. Parameters live in the PARAMETERS block only;
  everything else is derived. Asserts guard impossible geometry.
- One builder function per piece, registered in PIECES. Builders return the
  closed STITCH-line outline as [(x, y), ...] (y up). Pieces with
  on_fold=True return the HALF outline as an open polyline that starts and
  ends ON the fold axis x=0 — the template unfolds it and marks the axis.
- Seam allowance is applied programmatically (shapely mitre buffer of the
  stitch line -> the cutting line). allowance=0 means the builder returned
  the cutting line itself (leather edges, bound edges).
- The marker packs piece BOUNDING BOXES (shelf FFD, deterministic) — an upper
  bound for purchasing, not professional marker making. grain="lengthwise"
  pieces never rotate; grain="any" may rotate 90°.
- Robion's live customizer overrides parameters via ROBION_PARAMS (applied
  right after the PARAMETERS block, so derived values and asserts see them).

CLI (via uv):
    uv run pattern.py export   # out/pieces/*.svg + out/layout.{svg,html}
    uv run pattern.py bom      # Czech fabric+notions table into out/bom.md
    uv run pattern.py check    # validity gate: closed, simple, fits fabric
    uv run pattern.py show     # list pieces and cut sizes
"""

from __future__ import annotations

import html
import json
import math
import os
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Callable

from shapely.geometry import Point, Polygon
from shapely.ops import nearest_points

OUT = Path(__file__).parent / "out"
EPS = 1e-6


def _apply_robion_params() -> None:
    """Apply live-customizer overrides from Robion (CONTRACT.md §2).

    Robion re-runs this script with ROBION_PARAMS set to one JSON object,
    e.g. {"apron_length": 900}. Only existing scalar parameters are
    overridden and each keeps its original type; anything else warns on
    stderr. Without the variable this is a no-op.
    """
    raw = os.environ.get("ROBION_PARAMS", "")
    if not raw:
        return
    try:
        overrides = json.loads(raw)
    except json.JSONDecodeError as err:
        print(f"ROBION_PARAMS ignored — invalid JSON: {err}", file=sys.stderr)
        return
    if not isinstance(overrides, dict):
        print("ROBION_PARAMS ignored — expected a JSON object", file=sys.stderr)
        return
    params = globals()
    for key, value in overrides.items():
        if key.startswith("_") or not isinstance(params.get(key), (bool, int, float, str)):
            print(f"ROBION_PARAMS: no parameter named {key!r}", file=sys.stderr)
            continue
        try:
            params[key] = type(params[key])(value)
        except (TypeError, ValueError):
            print(f"ROBION_PARAMS: cannot apply {key}={value!r}", file=sys.stderr)


# --------------------------------------------------------------------------
# PARAMETERS (single source of truth) — replace the demo apron (zástěra)
# with the real product's parameters. Fixed inputs from the user first.
# --------------------------------------------------------------------------
apron_length = 850.0        # total length, hem edge to bib top
apron_hip_width = 600.0     # finished width at the bottom
apron_chest_width = 300.0   # finished width of the bib (top section)
bib_height = 300.0          # height of the bib above the waist point
pocket_width = 400.0
pocket_height = 220.0
strap_finished_width = 40.0  # straps are sewn as tubes and turned
neck_strap_length = 600.0
waist_strap_length = 900.0

seam_allowance = 10.0       # default allowance applied to stitch lines
hem_allowance = 25.0        # bottom hem of the apron body
fabric_name = "kanvas 340 g/m²"
fabric_width = 1400.0       # usable width of the fabric
fabric_buy_margin = 0.10    # purchasing reserve on top of the marker length

_apply_robion_params()  # slider overrides land here, before anything derives

# Derived values + asserts — computed, never retyped.
waist_y = apron_length - bib_height              # side-curve start height
hem_drop = hem_allowance - seam_allowance        # extra depth so the uniform
# buffer yields a hem_allowance-deep cutting edge at the bottom
strap_cut_width = 2 * strap_finished_width + 2 * seam_allowance
NOTIONS: list[tuple[str, str]] = [  # (item, qty/size) — Czech, shown in BOM
    ("nit polyester", "1 cívka"),
]

assert apron_chest_width < apron_hip_width, "bib must be narrower than hips"
assert 0 < bib_height < apron_length, "bib height must fit inside the length"
assert hem_allowance >= seam_allowance, "hem cannot be shallower than a seam"
assert fabric_width > apron_hip_width + 2 * seam_allowance, "fabric too narrow"


# --------------------------------------------------------------------------
# Geometry helpers
# --------------------------------------------------------------------------
def bezier(p0, c0, c1, p1, n: int = 24) -> list[tuple[float, float]]:
    """Sampled cubic Bézier including both endpoints."""
    pts = []
    for i in range(n + 1):
        t = i / n
        u = 1 - t
        pts.append(tuple(
            u ** 3 * a + 3 * u ** 2 * t * b + 3 * u * t ** 2 * c + t ** 3 * d
            for a, b, c, d in zip(p0, c0, c1, p1)
        ))
    return pts


def unfold(half: list[tuple[float, float]]) -> list[tuple[float, float]]:
    """Mirror an open half-outline (endpoints on x=0) across the fold axis."""
    assert abs(half[0][0]) < EPS and abs(half[-1][0]) < EPS, \
        "on_fold builders must start and end on the fold axis x=0"
    mirrored = [(-x, y) for x, y in reversed(half[1:-1])]
    return half + mirrored


# --------------------------------------------------------------------------
# PIECES registry — the PARTS analog. Builders return the stitch line.
# --------------------------------------------------------------------------
@dataclass(frozen=True)
class PieceSpec:
    builder: Callable[[], list[tuple[float, float]]]
    label: str                       # Czech, shown on the piece and in tables
    cut: int = 1                     # how many times to cut this piece
    on_fold: bool = False            # builder returns the half on x=0
    grain: str = "lengthwise"        # "lengthwise" (no rotation) | "any"
    allowance: float | None = None   # None -> seam_allowance; 0 -> cut line
    notches: tuple[tuple[float, float], ...] = ()  # points ON the stitch line
    notes: str = ""                  # Czech, shown in the BOM piece table


def front() -> list[tuple[float, float]]:
    """Apron body, right half; fold axis on x=0. Stitch line, y up.

    The bottom edge sits at -hem_drop so the uniform seam buffer produces a
    hem_allowance-deep cutting edge at the hem (see hem_drop above).
    """
    hip = apron_hip_width / 2
    chest = apron_chest_width / 2
    side_curve = bezier(
        (hip, waist_y),
        (hip - 0.35 * (hip - chest), waist_y + 0.10 * bib_height),
        (chest, waist_y + 0.45 * bib_height),
        (chest, apron_length),
    )
    return [(0.0, -hem_drop), (hip, -hem_drop), (hip, waist_y)] \
        + side_curve[1:] + [(0.0, apron_length)]


def pocket() -> list[tuple[float, float]]:
    """Patch pocket with rounded bottom corners. Stitch line, y up."""
    w, h, r = pocket_width, pocket_height, 40.0
    left = bezier((r, 0.0), (r * 0.45, 0.0), (0.0, r * 0.45), (0.0, r), n=12)
    right = bezier((w - r, 0.0), (w - r * 0.55, 0.0), (w, r * 0.45), (w, r), n=12)
    return [(0.0, h), (0.0, r)] + [p for p in reversed(left)] \
        + right + [(w, h)]


def _strap(length: float) -> list[tuple[float, float]]:
    """Straps are cut as rectangles (sewn to tubes); builder returns the
    CUTTING line directly — pair with allowance=0."""
    return [(0.0, 0.0), (strap_cut_width, 0.0),
            (strap_cut_width, length), (0.0, length)]


PIECES: dict[str, PieceSpec] = {
    "predni_dil": PieceSpec(
        front, label="Přední díl", on_fold=True,
        notches=((apron_hip_width / 2, waist_y),),
        notes=f"spodní lem {hem_allowance:.0f} mm (v přídavku)"),
    "kapsa": PieceSpec(
        pocket, label="Kapsa",
        notes="horní okraj zapravit dvojitým založením"),
    "sle_krk": PieceSpec(
        lambda: _strap(neck_strap_length), label="Šle — krk",
        grain="any", allowance=0.0, notes="šito do trubice a obráceno"),
    "sle_pas": PieceSpec(
        lambda: _strap(waist_strap_length), label="Šle — pas", cut=2,
        grain="any", allowance=0.0, notes="šito do trubice a obráceno"),
}


# --------------------------------------------------------------------------
# Piece construction: stitch polygon -> cutting polygon, normalized to (0,0)
# --------------------------------------------------------------------------
@dataclass(frozen=True)
class BuiltPiece:
    key: str
    spec: PieceSpec
    stitch: Polygon          # normalized: cutting bbox starts at (0, 0)
    cutting: Polygon
    notches: tuple[tuple[float, float], ...]
    fold_x: float | None     # x of the fold axis after normalization

    @property
    def width(self) -> float:
        return self.cutting.bounds[2]

    @property
    def height(self) -> float:
        return self.cutting.bounds[3]

    @property
    def allowance(self) -> float:
        return seam_allowance if self.spec.allowance is None else self.spec.allowance


def _build(key: str, spec: PieceSpec) -> BuiltPiece:
    pts = spec.builder()
    fold_x: float | None = None
    if spec.on_fold:
        pts = unfold(pts)
        fold_x = 0.0
    stitch = Polygon(pts)
    if not stitch.is_valid or stitch.area < EPS:
        raise SystemExit(f"piece {key!r}: invalid or degenerate stitch outline")
    allowance = seam_allowance if spec.allowance is None else spec.allowance
    cutting = stitch.buffer(allowance, join_style="mitre", mitre_limit=5.0) \
        if allowance > 0 else stitch
    minx, miny, _, _ = cutting.bounds
    def shift(poly: Polygon) -> Polygon:
        return Polygon([(x - minx, y - miny) for x, y in poly.exterior.coords])
    notches = tuple((x - minx, y - miny) for x, y in spec.notches)
    if fold_x is not None:
        fold_x -= minx
    return BuiltPiece(key, spec, shift(stitch), shift(cutting), notches, fold_x)


def built_pieces() -> list[BuiltPiece]:
    return [_build(key, spec) for key, spec in PIECES.items()]


# --------------------------------------------------------------------------
# Marker: shelf FFD packing of cutting bboxes onto the fabric width
# --------------------------------------------------------------------------
@dataclass(frozen=True)
class Placement:
    piece: BuiltPiece
    x: float                 # sheet coords, y measured DOWN from the top
    y: float
    rotated: bool            # 90° (grain="any" only)

    @property
    def w(self) -> float:
        return self.piece.height if self.rotated else self.piece.width

    @property
    def h(self) -> float:
        return self.piece.width if self.rotated else self.piece.height


def pack(pieces: list[BuiltPiece], width: float,
         gap: float = 10.0) -> tuple[list[Placement], float]:
    """Deterministic shelf first-fit-decreasing. Returns placements and the
    consumed length. Rotation only for grain='any', and only when it helps
    the piece fit flatter on a shelf."""
    instances: list[tuple[BuiltPiece, bool]] = []
    for p in pieces:
        rotated = p.spec.grain == "any" and p.height > p.width \
            and p.height <= width
        for _ in range(p.spec.cut):
            instances.append((p, rotated))
    def footprint(inst):  # (h, w) after rotation, sorted tall-first
        p, rot = inst
        return (p.width, p.height) if rot else (p.height, p.width)
    instances.sort(key=lambda i: (-footprint(i)[0], -footprint(i)[1], i[0].key))
    placements: list[Placement] = []
    shelves: list[list[float]] = []   # [y, cursor_x, height] per shelf
    y_cursor = 0.0
    for piece, rotated in instances:
        h, w = footprint((piece, rotated))
        if w > width:
            raise SystemExit(
                f"piece {piece.key!r} is wider ({w:.0f} mm) than the fabric "
                f"({width:.0f} mm) — rethink the piece or the fabric")
        for shelf in shelves:
            if shelf[1] + w <= width and h <= shelf[2]:
                placements.append(Placement(piece, shelf[1], shelf[0], rotated))
                shelf[1] += w + gap
                break
        else:
            shelves.append([y_cursor, w + gap, h])
            placements.append(Placement(piece, 0.0, y_cursor, rotated))
            y_cursor += h + gap
    consumed = y_cursor - gap if shelves else 0.0
    return placements, consumed


# --------------------------------------------------------------------------
# SVG rendering — shared by export (marker) and tile_a4.py (print sheets)
# --------------------------------------------------------------------------
STYLE = (
    '<style>'
    '.cut{fill:#faf7f0;stroke:#1a1a1a;stroke-width:0.6}'
    '.stitch{fill:none;stroke:#555;stroke-width:0.35;stroke-dasharray:4 3}'
    '.fold{stroke:#555;stroke-width:0.35;stroke-dasharray:10 3 2 3}'
    '.grain{stroke:#1a1a1a;stroke-width:0.5}'
    '.notch{stroke:#1a1a1a;stroke-width:0.7}'
    'text{font-family:Helvetica,Arial,sans-serif;fill:#1a1a1a}'
    '</style>'
)


def _path(poly: Polygon, ox: float, oy: float, ph: float, cls: str) -> str:
    pts = " ".join(f"{ox + x:.2f},{oy + ph - y:.2f}"
                   for x, y in poly.exterior.coords)
    return f'<polygon class="{cls}" points="{pts}"/>'


def piece_markup(p: BuiltPiece, ox: float, oy: float, *,
                 rotated: bool = False, labels: bool = True) -> str:
    """One piece drawn with its top-left cutting corner at (ox, oy) in SVG
    coords (y down). Rotation is 90° clockwise."""
    parts = []
    if rotated:
        parts.append(f'<g transform="translate({ox + p.height:.2f},{oy:.2f}) '
                     f'rotate(90)">')
        ox = oy = 0.0
    ph = p.height
    parts.append(_path(p.cutting, ox, oy, ph, "cut"))
    if p.allowance > 0:
        parts.append(_path(p.stitch, ox, oy, ph, "stitch"))
    if p.fold_x is not None:
        fx = ox + p.fold_x
        parts.append(f'<line class="fold" x1="{fx:.2f}" y1="{oy:.2f}" '
                     f'x2="{fx:.2f}" y2="{oy + ph:.2f}"/>')
    for nx, ny in p.notches:
        edge = nearest_points(p.cutting.exterior, Point(nx, ny))[0]
        parts.append(
            f'<line class="notch" x1="{ox + edge.x:.2f}" '
            f'y1="{oy + ph - edge.y:.2f}" x2="{ox + nx:.2f}" '
            f'y2="{oy + ph - ny:.2f}"/>')
    cx, cy = p.cutting.representative_point().coords[0]
    if labels:
        fold_note = ", rozloženo (osa vyznačena)" if p.fold_x is not None else ""
        sub = f"{p.spec.cut}×, přídavek {p.allowance:.0f} mm{fold_note}"
        parts.append(
            f'<text x="{ox + cx:.2f}" y="{oy + ph - cy:.2f}" font-size="11" '
            f'text-anchor="middle">{html.escape(p.spec.label)}</text>'
            f'<text x="{ox + cx:.2f}" y="{oy + ph - cy + 13:.2f}" '
            f'font-size="8" text-anchor="middle">{html.escape(sub)}</text>')
        if p.spec.grain == "lengthwise":
            gy0, gy1 = oy + ph - cy + 22, oy + ph - cy + 60
            if gy1 < oy + ph - 5:
                gx = ox + cx
                parts.append(
                    f'<line class="grain" x1="{gx:.2f}" y1="{gy0:.2f}" '
                    f'x2="{gx:.2f}" y2="{gy1:.2f}"/>'
                    f'<path class="grain" fill="none" d="M {gx - 2:.2f} {gy0 + 4:.2f} '
                    f'L {gx:.2f} {gy0:.2f} L {gx + 2:.2f} {gy0 + 4:.2f}"/>'
                    f'<path class="grain" fill="none" d="M {gx - 2:.2f} {gy1 - 4:.2f} '
                    f'L {gx:.2f} {gy1:.2f} L {gx + 2:.2f} {gy1 - 4:.2f}"/>')
    if rotated:
        parts.append('</g>')
    return "".join(parts)


def _svg(width: float, height: float, body: str) -> str:
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{width:.0f}mm" '
            f'height="{height:.0f}mm" viewBox="0 0 {width:.2f} {height:.2f}">'
            f'{STYLE}{body}</svg>\n')


# --------------------------------------------------------------------------
# Outputs
# --------------------------------------------------------------------------
def export() -> None:
    pieces_dir = OUT / "pieces"
    pieces_dir.mkdir(parents=True, exist_ok=True)
    for p in built_pieces():
        margin = 5.0
        body = piece_markup(p, margin, margin)
        (pieces_dir / f"{p.key}.svg").write_text(
            _svg(p.width + 2 * margin, p.height + 2 * margin, body))
        print(f"  piece {p.key}.svg ({p.width:.0f} × {p.height:.0f} mm)")
    placements, consumed = pack(built_pieces(), fabric_width)
    margin = 20.0
    body = [f'<rect x="{margin}" y="{margin}" width="{fabric_width:.2f}" '
            f'height="{consumed:.2f}" fill="none" stroke="#999" '
            f'stroke-width="1" stroke-dasharray="8 4"/>']
    for pl in placements:
        body.append(piece_markup(pl.piece, margin + pl.x, margin + pl.y,
                                 rotated=pl.rotated))
    area = sum(pl.piece.cutting.area * 1 for pl in placements)
    eff = area / (fabric_width * consumed) * 100 if consumed else 0.0
    body.append(
        f'<text x="{margin}" y="{margin - 6:.2f}" font-size="12">'
        f'{html.escape(fabric_name)} — šíře {fabric_width:.0f} mm, spotřeba '
        f'{consumed / 1000:.2f} m, využití {eff:.0f} % (odhad po obdélnících)'
        f'</text>')
    svg = _svg(fabric_width + 2 * margin, consumed + 2 * margin,
               "".join(body))
    (OUT / "layout.svg").write_text(svg)
    win_w = 1600
    win_h = max(200, math.ceil(win_w * (consumed + 2 * margin)
                               / (fabric_width + 2 * margin)))
    (OUT / "layout.html").write_text(
        f'<!doctype html><html data-window-size="{win_w},{win_h}">'
        f'<body style="margin:0;background:#fff">'
        f'<img src="layout.svg" style="width:{win_w}px"></body></html>\n')
    print(f"  layout.svg ({consumed / 1000:.2f} m of {fabric_name})")


def bom() -> None:
    OUT.mkdir(exist_ok=True)
    placements, consumed = pack(built_pieces(), fabric_width)
    buy = consumed * (1 + fabric_buy_margin)
    lines = [
        "# Kusovník (střih)", "",
        "## Látka", "",
        "| Materiál | Šíře | Spotřeba (marker) | Nákup (s rezervou "
        f"{fabric_buy_margin * 100:.0f} %) |",
        "|---|---|---|---|",
        f"| {fabric_name} | {fabric_width / 10:.0f} cm | "
        f"{consumed / 1000:.2f} m | **{buy / 1000:.2f} m** |", "",
        "Spotřeba je horní odhad (skládání po obdélnících, bez rotací proti "
        "směru osnovy).", "",
        "## Galanterie", "",
        "| Položka | Množství |", "|---|---|",
    ]
    lines += [f"| {n} | {q} |" for n, q in NOTIONS]
    lines += [
        "", "## Díly", "",
        "| Díl | Stříhat | Rozměr (vč. přídavků) | Přídavek | Poznámka |",
        "|---|---|---|---|---|",
    ]
    for p in built_pieces():
        lines.append(
            f"| {p.spec.label} | {p.spec.cut}× | {p.width:.0f} × "
            f"{p.height:.0f} mm | {p.allowance:.0f} mm | {p.spec.notes} |")
    text = "\n".join(lines) + "\n"
    (OUT / "bom.md").write_text(text)
    print(text)


def check() -> None:
    problems: list[str] = []
    pieces = built_pieces()
    for p in pieces:
        if not p.cutting.is_valid:
            problems.append(f"{p.key}: cutting line self-intersects "
                            "(allowance too big for a concave corner?)")
        for nx, ny in p.notches:
            if p.stitch.exterior.distance(Point(nx, ny)) > 1.0:
                problems.append(f"{p.key}: notch ({nx:.0f}, {ny:.0f}) is not "
                                "on the stitch line")
        if p.spec.grain == "lengthwise" and p.width > fabric_width:
            problems.append(f"{p.key}: wider than the fabric and not rotatable")
    try:
        pack(pieces, fabric_width)
    except SystemExit as err:
        problems.append(str(err))
    if problems:
        print("CHECK FAILED:")
        for pr in problems:
            print(f"  - {pr}")
        raise SystemExit(1)
    print(f"check OK: {len(pieces)} pieces, "
          f"{sum(p.spec.cut for p in pieces)} cuts")


def show() -> None:
    for p in built_pieces():
        rot = "any" if p.spec.grain == "any" else "lengthwise"
        print(f"  {p.key:<14} {p.spec.cut}×  {p.width:7.1f} × {p.height:7.1f} mm"
              f"  allowance {p.allowance:>4.1f}  grain {rot}")


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "export"
    if cmd == "export":
        export()
    elif cmd == "bom":
        bom()
    elif cmd == "check":
        check()
    elif cmd == "show":
        show()
    else:
        raise SystemExit(f"unknown command {cmd!r} (export|bom|check|show)")
