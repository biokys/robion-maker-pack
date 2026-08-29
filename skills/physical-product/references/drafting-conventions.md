# Production drawing conventions (ISO) + build123d sheet framework

Drawings go to a fabricator — correctness of convention matters as much as
numbers. Battle-tested on a welded-frame drawing and a full 10-sheet
panelized-coop set; `templates/drawings.py` encodes everything below.

## Sheet standard (user-required — do not regress)

Every sheet is a fixed **A3 landscape** page with a border frame and a
**title block (razítko) bottom-right** containing: drawing number
(e.g. KUR-01), part title, MĚŘÍTKO, MATERIÁL, KUSŮ, DATUM, "KÓTY V MM ·
ISO-E" and the project line. Use a **true scale** per sheet — 1:10 large
panels, 1:5 details, 1:1 small parts — chosen so content fits the A3
graphics area (the framework warns when it doesn't).

Dimension style: ISO 3098-like **italic** font (`Draft(font="Arial",
font_style=FontStyle.ITALIC, arrow_length=2.5*P, pad_around_text=1.2*P)`),
thin lines in technical blue with **filled** glyphs so dims read apart
from the heavy black outlines. Layer weights: frame/visible 0.7, hidden
0.35 gray ISO_DASH, dims 0.25 blue, title text filled near-black.
`ExportSVG.add_layer(fill_color=…)` fills dimension text and arrows —
without it glyphs render hollow (guard with try/except for old versions).

## View placement — first-angle (ISO-E, European)

- Front view (nárys) is the master view: pick the face that shows the most
  features; draw panels viewed from the side the fabricator claddes first.
- **Top view goes BELOW the front view** (first-angle!), side view to the
  right. One sheet communicates one part; per-part sheets.
- A hole is a **circle only in the view along its axis**; side-on it is
  two dashed hidden lines. Hidden edges dashed; visible solid, heavier.
- Dimension what the fabricator measures: outer envelope, feature
  positions from a datum edge (chained dims for patterns), stock
  cross-section. Never dimension the same feature twice.

## The framework (templates/drawings.py) — how it works

- **`View(part, kind, shift=)`** projects with `project_to_viewport` from
  a camera 300× part size away, then fits an affine map (per-axis scale +
  offset, asserted within 0.9–1.1) between expected screen coords of the
  part bbox and the projected edges. **`view.pt(x, y, z)` converts MODEL
  coordinates to sheet coordinates** — anchor every dimension through it,
  so parameters, not retyped numbers, drive the dims and the projection's
  mild perspective (~0.3 %) cannot detach them. `shift` places secondary
  views (first angle: top view shifts −Y by view height + gap).
- **`Sheet(name, number, title, scale_den, material, count, note)`** owns
  layers, the Draft style scaled by P = scale_den, `dim(p1, p2,
  offset_paper_mm, label)`, the A3 frame and the title block. Pass
  explicit `label=` strings from parameters — auto labels append units
  ("150mm") and drift is invisible.
- **ExtensionLine offset sign rule (verified empirically):** positive
  offset lies on the border edge's **right-hand normal** (p1→p2 rotated
  −90°). Horizontal left→right border ⇒ positive is BELOW; vertical
  bottom→top ⇒ positive is RIGHT. Choose the p1/p2 order so dims land
  outside the outline; iterate on the rendered PNG.
- Frame centering: `fy0 = cy − (PAPER_H − 2·MARGIN + TB_H)/2 · P` — do
  NOT add TB_H·P again (classic bug: content overlaps the title block).
- Construct drafting objects standalone (Algebra mode) — building an
  `ExtensionLine` inside an empty `BuildSketch` context crashes.
- **`Box()` is CENTER-aligned by default** — build parts for drawings with
  `align=(Align.MIN,)*3` so `view.pt()` model coordinates run 0..length and
  dimension anchors hit corners; a centered box silently puts `pt(0,0)`
  mid-part (dims land inside, layouts shift by half a part).
- Vector `Text()` sketches work for the title block (Czech diacritics
  included); put them on a filled layer.

## Section views (řezy) — proven recipe

No native section support needed; three steps, all in the framework
(`Sheet.hatch`, `section_faces`, `sheet_polygon` in templates/drawings.py):

1. **Cut & project:** `kept = solid − half-space-box` per part (skip
   empties, and skip parts between viewer and plane entirely);
   `View(Compound(children=kept), "left")` — the projection yields the cut
   outlines AND the background edges behind the plane, which is exactly
   what a section drawing shows. Use `Compound(children=…)`, not `+`
   (fusing would erase layer-interface edges).
2. **Section faces:** intersect the solid with a 1 mm sliver at the plane
   and keep the sliver faces lying in it (`section_faces`) — exact for
   prismatic-along-normal geometry and boolean-robust always (avoid
   edge∩face intersections, they are fragile).
3. **Hatch in sheet space:** map each polygonal face's ordered wire
   vertices through `view.pt()` (`sheet_polygon` — exact for straight
   edges), then `Sheet.hatch(poly, style)` clips thin 45° stripe
   rectangles (0.22 paper mm wide) by the polygon — coplanar 2D face
   booleans only. Styles: wood 45°/3.5 mm, XPS crosshatch ±45°/7 mm,
   metal 45°/2.5 mm. Different patterns per sandwich layer sell the
   skladba — keep per-layer solids accessible in the model
   (`PanelData.layer_solids`-style field), since fused panels lose them.

Pick the plane to cut through the most informative features (openings,
sandwich stacks, internal fittings) while avoiding lengthwise slices of
beams lying in the plane (shift the plane a few cm instead). Title-block
note: keep it short ("rovina x = 700, pohled zleva") — long notes overflow
into the MĚŘÍTKO cell. Dimension interior heights the elevations can't
show (clear height, fitting heights above floor, sill heights).

## Outputs & conversion pipeline

Each `Sheet.write()` emits three files into `out/drawings/`:

1. `<name>.svg` — the drawing; `ExportSVG(scale=1/P)` ⇒ **SVG units =
   paper mm** (this is what makes true-scale print possible).
2. `<name>.html` — scaling wrapper for the PNG check. **Chrome renders a
   bare SVG at 1 px per unit and crops it** — always screenshot the
   wrapper (Makefile rule), never the SVG directly.
3. `<name>.print.html` — `@page { size: 420mm 297mm; margin: 0 }` with the
   image sized to the SVG's native units **in mm** ⇒
   `chrome --headless --print-to-pdf` produces a vector A3 PDF at exactly
   1:P. `make drawings-pdf` prints all sheets and merges them via
   `merge_pdfs.py` (pypdf, sheet order = drawing numbers) into
   `out/drawings/vykresy_A3.pdf`.

`make pdf` additionally prints the build sheet's A4 `.print.html` variant
and prepends it → **one complete printable PDF** (A4 document + A3
sheets; mixed page sizes in one PDF are fine). See buildsheet.md for the
build-sheet print variant (forced light theme + break rules).

## Verification (mandatory)

Every sheet: `make drawings-png` → **Read each PNG** — check view
placement, dims outside outlines and matching the model parameters,
hidden lines dashed, title block not overlapped. Fix by flipping dim
p1/p2 or offsets per the sign rule; re-render; only then show the user.
For the PDFs, Read a few pages of the merged file (the Read tool renders
PDF pages) to confirm order, page sizes and vector output.
