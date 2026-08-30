"""Tile the pattern pieces onto A4 pages at TRUE 1:1 scale.

Packs the pieces onto a virtual print sheet (3 page-columns wide), then
windows that sheet into A4 pages via shifted SVG viewBoxes. Adjacent pages
overlap by OVERLAP mm; registration crosses sit on the shared grid corners,
so taping crosses onto crosses reconstructs the sheet. Page 1 is an info
page: piece table, page-map, and the 100 mm control square the user must
measure after printing.

Run: uv run tile_a4.py          # -> out/print/strih_A4.html
     make pdf                   # Chrome-prints it -> out/print/strih_A4.pdf

The @page rule and mm-sized SVGs make Chrome print at exact scale — never
print this from a viewer that "fits to page".
"""

from __future__ import annotations

import html
import math
import tomllib
from pathlib import Path

import pattern

ROOT = Path(__file__).parent
OUT = ROOT / "out" / "print"

PAGE_W, PAGE_H = 210.0, 297.0     # A4 portrait, mm
MARGIN = 10.0                     # printer-safe margin
OVERLAP = 10.0                    # glued overlap between adjacent pages
USABLE_W, USABLE_H = PAGE_W - 2 * MARGIN, PAGE_H - 2 * MARGIN
STEP_W, STEP_H = USABLE_W - OVERLAP, USABLE_H - OVERLAP
MIN_COLS = 2                      # virtual-sheet width floor, in page-columns
GAP = 12.0                        # spacing between pieces on the sheet


def product_name() -> str:
    meta = tomllib.loads((ROOT / "pyproject.toml").read_text())
    return meta["project"]["name"]


def cross(x: float, y: float) -> str:
    return (f'<path d="M {x - 4:.1f} {y:.1f} H {x + 4:.1f} '
            f'M {x:.1f} {y - 4:.1f} V {y + 4:.1f}" '
            f'stroke="#c00" stroke-width="0.3" fill="none"/>')


def page_svg(content: str, col: int, row: int, cols: int, rows: int) -> str:
    x0, y0 = col * STEP_W, row * STEP_H
    overlay = []
    for cx in (x0, x0 + STEP_W):
        for cy in (y0, y0 + STEP_H):
            overlay.append(cross(cx, cy))
    if col < cols - 1:
        overlay.append(
            f'<line x1="{x0 + STEP_W:.1f}" y1="{y0:.1f}" '
            f'x2="{x0 + STEP_W:.1f}" y2="{y0 + USABLE_H:.1f}" '
            f'stroke="#c00" stroke-width="0.2" stroke-dasharray="3 3"/>')
    if row < rows - 1:
        overlay.append(
            f'<line x1="{x0:.1f}" y1="{y0 + STEP_H:.1f}" '
            f'x2="{x0 + USABLE_W:.1f}" y2="{y0 + STEP_H:.1f}" '
            f'stroke="#c00" stroke-width="0.2" stroke-dasharray="3 3"/>')
    page_id = f"{chr(ord('A') + row)}{col + 1}"
    overlay.append(
        f'<text x="{x0 + 3:.1f}" y="{y0 + 7:.1f}" font-size="6" fill="#c00" '
        f'font-family="Helvetica,Arial,sans-serif">{page_id} — slepit na '
        f'křížky, přesah {OVERLAP:.0f} mm</text>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{USABLE_W}mm" '
            f'height="{USABLE_H}mm" '
            f'viewBox="{x0:.1f} {y0:.1f} {USABLE_W} {USABLE_H}">'
            f'{pattern.STYLE}{content}{"".join(overlay)}</svg>')


def info_page(pieces, sheet_w: float, sheet_h: float, content: str,
              cols: int, rows: int, used: set[tuple[int, int]]) -> str:
    rows_html = "".join(
        f"<tr><td>{html.escape(p.spec.label)}</td><td>{p.spec.cut}×</td>"
        f"<td>{p.width:.0f} × {p.height:.0f} mm</td></tr>"
        for p in pieces)
    k = min(75.0 / sheet_w, 130.0 / sheet_h) if sheet_w and sheet_h else 1.0
    map_w, map_h = k * sheet_w, k * sheet_h
    grid = []
    for r in range(rows):
        for c in range(cols):
            skipped = (r, c) not in used
            grid.append(
                f'<rect x="{c * STEP_W:.1f}" y="{r * STEP_H:.1f}" '
                f'width="{USABLE_W}" height="{USABLE_H}" fill="none" '
                f'stroke="{"#bbb" if skipped else "#c00"}" stroke-width="1.2"/>'
                f'<text x="{c * STEP_W + 8:.1f}" y="{r * STEP_H + 18:.1f}" '
                f'font-size="16" fill="{"#bbb" if skipped else "#c00"}">'
                f'{chr(ord("A") + r)}{c + 1}</text>')
    minimap = (f'<svg width="{map_w:.1f}mm" height="{map_h:.1f}mm" '
               f'viewBox="0 0 {sheet_w:.1f} {sheet_h:.1f}" '
               f'xmlns="http://www.w3.org/2000/svg">{pattern.STYLE}'
               f'{content}{"".join(grid)}</svg>')
    square = ('<svg width="106mm" height="106mm" viewBox="0 0 106 106" '
              'xmlns="http://www.w3.org/2000/svg">'
              '<rect x="3" y="3" width="100" height="100" fill="none" '
              'stroke="#1a1a1a" stroke-width="0.5"/>'
              '<text x="53" y="56" font-size="6" text-anchor="middle" '
              'font-family="Helvetica,Arial,sans-serif">KONTROLNÍ ČTVEREC '
              '100 × 100 mm</text></svg>')
    return (
        f'<h1>{html.escape(product_name())} — střih 1:1</h1>'
        f'<p>Tisknout na 100 % (žádné „přizpůsobit stránce"). Nejdřív '
        f'ZMĚŘIT kontrolní čtverec — musí mít přesně 100 × 100 mm. Stránky '
        f'slepit křížek na křížek v pořadí po řadách (A1, A2, …). Šedé '
        f'stránky mapy jsou prázdné a netisknou se.</p>'
        f'<div style="display:flex;gap:10mm;align-items:flex-start">'
        f'<div>{square}</div>'
        f'<div><h2 style="margin-top:0">Mapa stránek</h2>{minimap}</div>'
        f'</div>'
        f'<h2>Díly</h2><table border="1" cellspacing="0" cellpadding="4" '
        f'style="border-collapse:collapse;font-size:10pt">'
        f'<tr><th>Díl</th><th>Stříhat</th><th>Rozměr</th></tr>{rows_html}'
        f'</table>')


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    pieces = pattern.built_pieces()
    # enough page-columns for the widest piece that cannot rotate
    widest = max(min(p.width, p.height) if p.spec.grain == "any"
                 else p.width for p in pieces)
    cols = max(MIN_COLS, math.ceil((widest - OVERLAP) / STEP_W))
    sheet_w = cols * STEP_W + OVERLAP
    placements, consumed = pattern.pack(pieces, sheet_w, gap=GAP)
    sheet_h = consumed
    content = "".join(
        pattern.piece_markup(pl.piece, pl.x, pl.y, rotated=pl.rotated)
        for pl in placements)
    rows = max(1, math.ceil((sheet_h - OVERLAP) / STEP_H))
    # skip pages no piece touches — the info page's map grays them out
    used: set[tuple[int, int]] = set()
    for pl in placements:
        for r in range(rows):
            for c in range(cols):
                if (pl.x < c * STEP_W + USABLE_W and pl.x + pl.w > c * STEP_W
                        and pl.y < r * STEP_H + USABLE_H
                        and pl.y + pl.h > r * STEP_H):
                    used.add((r, c))
    pages = [f'<div class="page info">'
             f'{info_page(pieces, sheet_w, sheet_h, content, cols, rows, used)}'
             f'</div>']
    for r in range(rows):
        for c in range(cols):
            if (r, c) in used:
                pages.append(f'<div class="page tile">'
                             f'{page_svg(content, c, r, cols, rows)}</div>')
    (OUT / "strih_A4.html").write_text(
        '<!doctype html><html><head><meta charset="utf-8">'
        '<style>@page{size:A4 portrait;margin:0}'
        'body{margin:0;font-family:Helvetica,Arial,sans-serif}'
        f'.page{{width:{PAGE_W}mm;height:{PAGE_H}mm;position:relative;'
        f'page-break-after:always;overflow:hidden}}'
        f'.page.tile>svg{{position:absolute;left:{MARGIN}mm;top:{MARGIN}mm}}'
        f'.page.info{{box-sizing:border-box;padding:{MARGIN + 5}mm}}'
        f'.page.info svg{{display:block;margin:4mm 0}}'
        '</style></head><body>'
        + "".join(pages) + '</body></html>\n')
    print(f"  strih_A4.html — {len(pages)} pages (grid {rows}×{cols}, "
          f"{rows * cols - len(pages) + 1} blank skipped, + info), "
          f"sheet {sheet_w:.0f} × {sheet_h:.0f} mm")


if __name__ == "__main__":
    main()
