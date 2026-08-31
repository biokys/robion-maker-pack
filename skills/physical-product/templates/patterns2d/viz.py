"""Flat parametric hero illustration — the patterns2d analog of blender_viz.

A sewn product has no solid to photoreal-render; its hero is a 2D
illustration of the FINISHED product, drawn from the same parameters as
pattern.py, so slider changes reflow it like every other artifact. Cheap:
one SVG plus a Chrome screenshot (`make viz` -> out/viz_hero.png).

Replace scene() with the real product's illustration (the demo draws the
apron worn flat: body, topstitching, pocket, straps); keep the coordinate
convention (millimetres, y up — sx()/sy() convert to SVG), the muted
one-hue palette, and the out/viz_hero.{svg,html} contract the Makefile
screenshots. Never screenshot the mm-sized SVG directly (Chrome renders
~3.78 px/mm) — always go through the pixel wrapper written here.
"""

from __future__ import annotations

import math
from pathlib import Path

from shapely.geometry import Polygon

import pattern as P

OUT = Path(__file__).parent / "out"
PNG_WIDTH = 1200          # pixel width of the rendered hero

# Palette — muted fabric tones; keep ONE hue family so the product reads
# as one object (the build sheet's gradient stays the only saturated accent).
FABRIC = "#a98963"
FABRIC_EDGE = "#7c6142"
FABRIC_POCKET = "#9c7c57"
STITCH = "#f3ead9"
STRAP = "#8a6c4a"
SHADOW = "#3a2f24"

# Scene extent in pattern coordinates (mm, y up) — derived, never retyped.
STRAP_REACH = 0.35 * P.waist_strap_length   # visible length of each waist tie
ARCH_H = 0.30 * P.neck_strap_length         # neck-loop arch height
MARGIN = 25.0
X_MIN = -P.apron_hip_width / 2 - STRAP_REACH
X_MAX = -X_MIN
Y_MIN = -P.hem_drop - 40.0                  # room for the drop shadow
Y_MAX = P.apron_length + ARCH_H + 30.0
W = X_MAX - X_MIN + 2 * MARGIN
H = Y_MAX - Y_MIN + 2 * MARGIN


def sx(x: float) -> float:
    return MARGIN + x - X_MIN


def sy(y: float) -> float:
    return MARGIN + Y_MAX - y


def path_d(pts: list[tuple[float, float]], close: bool = True) -> str:
    d = "M " + " L ".join(f"{sx(x):.1f} {sy(y):.1f}" for x, y in pts)
    return d + (" Z" if close else "")


def scene() -> str:
    """The demo apron worn flat. A real product replaces this function."""
    body_pts = P.unfold(P.front())
    hw = P.apron_hip_width / 2
    chest = P.apron_chest_width / 2
    parts = [
        # drop shadow behind everything
        f'<path d="{path_d([(x + 8, y - 10) for x, y in body_pts])}" '
        f'fill="{SHADOW}" opacity="0.18" filter="url(#blur)"/>',
        # neck loop (behind the bib)
        f'<path d="M {sx(-chest + 12):.1f} {sy(P.apron_length):.1f} '
        f'C {sx(-chest):.1f} {sy(P.apron_length + ARCH_H):.1f} '
        f'{sx(chest):.1f} {sy(P.apron_length + ARCH_H):.1f} '
        f'{sx(chest - 12):.1f} {sy(P.apron_length):.1f}" fill="none" '
        f'stroke="{STRAP}" stroke-width="{P.strap_finished_width:.1f}" '
        f'stroke-linecap="round"/>',
    ]
    for side in (-1, 1):  # waist ties drooping outward
        x0 = side * hw
        parts.append(
            f'<path d="M {sx(x0):.1f} {sy(P.waist_y - 20):.1f} '
            f'Q {sx(x0 + side * 0.6 * STRAP_REACH):.1f} {sy(P.waist_y):.1f} '
            f'{sx(x0 + side * STRAP_REACH):.1f} {sy(P.waist_y - 90):.1f}" '
            f'fill="none" stroke="{STRAP}" '
            f'stroke-width="{P.strap_finished_width:.1f}" '
            f'stroke-linecap="round"/>')
    parts.append(f'<path d="{path_d(body_pts)}" fill="{FABRIC}" '
                 f'stroke="{FABRIC_EDGE}" stroke-width="2"/>')
    # topstitching: dashed inset of the finished outline (shapely does the
    # offset — the illustration inherits the pattern's real geometry)
    inner = Polygon(body_pts).buffer(-8.0, join_style="mitre")
    for g in ([inner] if isinstance(inner, Polygon) else list(inner.geoms)):
        if not g.is_empty:
            parts.append(f'<path d="{path_d(list(g.exterior.coords))}" '
                         f'fill="none" stroke="{STITCH}" stroke-width="1.2" '
                         f'stroke-dasharray="7 5"/>')
    parts.append(  # double-needle hem
        f'<line x1="{sx(-hw + 15):.1f}" y1="{sy(18.0):.1f}" '
        f'x2="{sx(hw - 15):.1f}" y2="{sy(18.0):.1f}" stroke="{STITCH}" '
        f'stroke-width="1.2" stroke-dasharray="7 5"/>')
    # patch pocket at the placement marked on the pattern piece
    pw, ph = P.pocket_width, P.pocket_height
    parts.append(
        f'<rect x="{sx(P.pocket_left):.1f}" y="{sy(P.pocket_top_y):.1f}" '
        f'width="{pw:.1f}" height="{ph:.1f}" rx="10" '
        f'fill="{FABRIC_POCKET}" stroke="{FABRIC_EDGE}" stroke-width="1.5"/>')
    parts.append(
        f'<rect x="{sx(P.pocket_left) + 6:.1f}" '
        f'y="{sy(P.pocket_top_y) + 6:.1f}" width="{pw - 12:.1f}" '
        f'height="{ph - 12:.1f}" rx="7" fill="none" stroke="{STITCH}" '
        f'stroke-width="1.2" stroke-dasharray="7 5"/>')
    return "".join(parts)


def main() -> None:
    OUT.mkdir(exist_ok=True)
    defs = ('<defs><filter id="blur" x="-20%" y="-20%" width="140%" '
            'height="140%"><feGaussianBlur stdDeviation="6"/></filter></defs>')
    (OUT / "viz_hero.svg").write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{W:.0f}mm" '
        f'height="{H:.0f}mm" viewBox="0 0 {W:.1f} {H:.1f}">'
        f'{defs}{scene()}</svg>\n')
    win_w = PNG_WIDTH
    win_h = math.ceil(win_w * H / W)
    (OUT / "viz_hero.html").write_text(
        f'<!doctype html><html data-window-size="{win_w},{win_h}">'
        f'<body style="margin:0;background:#fff">'
        f'<img src="viz_hero.svg" style="width:{win_w}px"></body></html>\n')
    print(f"  viz_hero.svg (scene {W:.0f} × {H:.0f} mm)")


if __name__ == "__main__":
    main()
