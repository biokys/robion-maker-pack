# Production drawing conventions (ISO) + build123d sheet framework

Drawings go to a fabricator — correctness of convention matters as much as
numbers. Battle-tested on a welded-frame drawing and a full 10-sheet
panelized-coop set; `templates/solids/drawings.py` encodes everything below.

## Sheet standard (user-required — do not regress)

Every sheet is a fixed **A3 landscape** page with a border frame and a
**title block bottom-right** containing: drawing number
(e.g. BRK-01), part title, SCALE, MATERIAL, QTY, DATE, "DIMENSIONS IN MM ·
ISO-E" and the project line. Use a **true scale** per sheet — 1:10 large
panels, 1:5 details, 1:1 small parts — chosen so content fits the A3
graphics area (the framework warns when it doesn't).

Lettering: **osifont** — the open ISO 3098 technical font (upright, full
diacritics AND the ⌀ glyph) — fetched once per project by `make font`;
`drawings.py` picks it up automatically (`FONT_PATH`). Without it the
sheets fall back to OS Arial italic, which **lacks ⌀ (U+2300)** — then
write **Ø (U+00D8)** in every hand-written label/note (the helpers'
`HoleCallout` draws its symbol geometrically, so it is safe either way).
Annotations come from **`build123d-drafting-helpers`** (pinned in
pyproject) via `draft_preset(font_size=3.5*P, arrow_length=2.5*P,
pad_around_text=1.2*P, line_width=0.18*P, extension_gap=1.0*P,
font_path=FONT_PATH)` — **every size passed to the helpers is absolute
model units, so multiply by P**. Dims are thin lines in technical blue
with **filled** glyphs so they read apart from the heavy black outlines;
helper ink is **filled faces** (glyphs, arrowheads, thin-rect lines):
`fill_color` on the layer is mandatory and layer `line_weight` stays
hairline (0.1) or glyphs fatten. Layer weights: frame/visible 0.7, hidden
0.35 gray ISO_DASH, dims 0.1 blue filled, marks (centerlines, section
traces, balloons) 0.1 near-black filled, title text filled near-black.

## View placement — first-angle (ISO-E, European)

- The front view is the master view: pick the face that shows the most
  features; draw panels viewed from the side the fabricator claddes first.
- **Top view goes BELOW the front view** (first-angle!), side view to the
  right; a **bottom view goes ABOVE** (kind "bottom" exists — for parts
  machined from below, often clearer than a section). One sheet
  communicates one part; per-part sheets.
- A hole is a **circle only in the view along its axis**; side-on it is
  two dashed hidden lines. Hidden edges dashed; visible solid, heavier.
- Dimension what the fabricator measures: outer envelope, feature
  positions from a datum edge (chained dims for patterns), stock
  cross-section. Never dimension the same feature twice.

## The framework (templates/solids/drawings.py) — how it works

- **`View(part, kind, shift=)`** projects with `project_to_viewport` from
  a camera 300× part size away, then fits an affine map (per-axis scale +
  offset, asserted within 0.9–1.1) between expected screen coords of the
  part bbox and the projected edges. **`view.pt(x, y, z)` converts MODEL
  coordinates to sheet coordinates** — anchor every dimension through it,
  so parameters, not retyped numbers, drive the dims and the projection's
  mild perspective (~0.3 %) cannot detach them. `shift` places secondary
  views (first angle: top view shifts −Y by view height + gap).
- **`Sheet(name, number, title, scale, material, count, note)`** owns
  layers, the draft style scaled by P, the A3 frame and the title block.
  `scale` accepts `5`, `0.5`, `"1:5"` or `"2:1"`; DATUM defaults to today
  (set the `DATE` constant to freeze it).
- **`dim(p1, p2, side, offset_paper_mm, label)`** — linear dimension with
  a **named side** (`"above"/"below"/"left"/"right"` of the measured
  span); the offset sign is computed for you (helpers' right-hand-normal
  rule; the same rule is replicated in `_side_sign` for the
  no-helpers fallback). Offset is PAPER mm, always positive. Pass
  explicit `label=` strings from parameters — auto labels append units
  ("150mm") and drift is invisible.
- **Annotation methods** (all take sheet coords from `view.pt()`):
  `hole_note(at, d_model, count=, through=, offset_paper=(dx, dy))` —
  leader + "4× ⌀8 THRU" callout with real ⌀ glyphs; `center_mark(at,
  d_model)` and `centerline(p1, p2)` — ISO chain marks for every hole in
  its axis view; `note(text, at, leader_from=)` — free note or arrowed
  leader note (use for "SECTION A-A" titles). Layer routing:
  Dimension/Leader/HoleCallout → `dims` (blue), Centerline/CenterMark/
  section traces/balloons → `marks` (black), Note → `text`.
- **`add_views(part, kinds, gap_paper)`** computes first-angle placement
  automatically (top BELOW front, right view on the LEFT, left on the
  RIGHT, back beyond); extra views (sections, details) go through
  **`place_view(view, side, of, gap_paper)`**. Both place from the
  **ACTUAL projected edge bboxes** — never compute placement from
  model-coordinate spans: `project_to_viewport` centers edges on the
  part, so a part modeled at e.g. z = 1100 mm lands nowhere near its
  model coordinates and hand-derived shifts throw views off the sheet.
  `place_view`/`View.translate` must run BEFORE `add_view` (layers keep
  references to the pre-move edges).
- **Assembly sheets:** `balloon(n, at, tip=)` draws an ISO 6433 position
  balloon with a dotted leader; `parts_table(parts_rows())` renders the
  BOM grid above the title block (header at the bottom, positions
  ascending). `parts_rows()` comes from `model.bom_rows()` (part-family
  groups collapsed), so balloon numbers match the BOM by
  construction. The frame centering **reserves the table height** — tall
  content shrinks the graphics area, and the A3-overflow warning says so:
  respond with a larger scale_den or fewer rows, don't nudge the table.
- **Auto hole annotation:** `auto_holes(view, part)` (needs
  `uv sync --extra recognise` → b123d-recognisers) recognises drilled
  holes, center-marks those axial to the view and emits one grouped
  callout per (⌀, depth, cbore, csink) family — returns `[]` when the
  recogniser is missing, so demos/projects keep a manual fallback branch.
  `hole_note` passes `depth`/`cbore_*`/`csink_*` through to the callout.
- **Detail views (circular):** `det = sheet.detail(view,
  center_model, radius_paper, "2:1", label="B", at=...)` — clips the
  placed parent view to a circle, blows it up by k = P/P_detail at `at`,
  draws source circle + letter and destination ring + caption. Dim inside
  via `det.pt(x, y, z)` with TRUE model-mm labels (the lint knows k).
  Call only after the parent view is placed.
- **Missing helpers degrade, not crash:** without `build123d_drafting`
  installed, dims fall back to `ExtensionLine`, callouts to plain text,
  center marks are skipped — each with a printed WARNING. `make doctor`
  shows `b3d-drafting` and `recognisers` status.

## Machine lint (runs at every write())

Two passes print `WARNING <sheet>: ...` lines — treat any warning as a
gate failure, fix and re-render:

- **Dim truth:** every checkable `dim()` label must equal the measured
  anchor distance (tolerance 0.2 mm + 0.5 %). Catches wrong anchors,
  stale labels and dims accidentally spanning two views. Deliberately
  uncheckable labels are skipped by convention: `(60)` parenthesised
  reference dims, `~`/`≈` approximations, counts with `×`, angles with
  `°`; `Ø`/`⌀`/`R` prefixes are stripped and CHECKED. Dims inside a
  detail are divided by its k first.
- **Collisions:** labels must stay clear — label×label overlap
  (> 0.5 mm² / 15 % of the smaller), foreign annotation strokes through a
  label (> 1 mm chord), visible part edges through a label (> 1 mm).
  Powered by the helpers' label metadata; balloons and section letters
  are plain sketches and are not covered — check those on the PNG.
- `uv run drawings.py lint-selftest` verifies both passes on deliberately
  broken annotations (CI runs it); zero warnings on the demo is the
  shipped baseline.
- Frame centering: `fy0 = cy − (PAPER_H − 2·MARGIN + TB_H)/2 · P` — do
  NOT add TB_H·P again (classic bug: content overlaps the title block).
- Construct drafting objects standalone (Algebra mode) — building an
  `ExtensionLine` inside an empty `BuildSketch` context crashes.
- **`Box()` is CENTER-aligned by default** — build parts for drawings with
  `align=(Align.MIN,)*3` so `view.pt()` model coordinates run 0..length and
  dimension anchors hit corners; a centered box silently puts `pt(0,0)`
  mid-part (dims land inside, layouts shift by half a part).
- Vector `Text()` sketches work for the title block (diacritics
  included); put them on a filled layer.

## Section views — proven recipe

No native section support needed; four steps, all in the framework
(`Sheet.hatch`, `Sheet.section_indicator`, `section_faces`,
`sheet_polygon` in templates/solids/drawings.py):

1. **Cut & project:** `kept = solid − half-space-box` per part (skip
   empties, and skip parts between viewer and plane entirely);
   `View(Compound(children=kept), "left")` — the projection yields the cut
   outlines AND the background edges behind the plane, which is exactly
   what a section drawing shows. Use `Compound(children=…)`, not `+`
   (fusing would erase layer-interface edges).
2. **Section faces:** intersect the solid with a 1 mm sliver at the plane
   and keep the sliver faces lying in it (`section_faces(solid, axis,
   coord)` — any of "X"/"Y"/"Z") — exact for prismatic-along-normal
   geometry and boolean-robust always (avoid edge∩face intersections,
   they are fragile).
3. **Hatch in sheet space:** map each polygonal face's ordered wire
   vertices through `view.pt()` (`sheet_polygon` — exact for straight
   edges), then `Sheet.hatch(poly, style)` clips thin 45° stripe
   rectangles (0.22 paper mm wide) by the polygon — coplanar 2D face
   booleans only. Styles: wood 45°/3.5 mm, XPS crosshatch ±45°/7 mm,
   metal 45°/2.5 mm. Different patterns per sandwich layer sell the
   skladba — keep per-layer solids accessible in the model
   (`PanelData.layer_solids`-style field), since fused panels lose them.
4. **Indicator on the parent view:**
   `sheet.section_indicator(parent_view, axis, coord, "A", direction=±1)`
   draws the ISO 128-44 cutting-plane trace (chain line, thick end
   strokes, sight arrows along `direction`, view letters); title the
   section view "SECTION A-A" via `sheet.note()` centered under it.

Pick the plane to cut through the most informative features (openings,
sandwich stacks, internal fittings) while avoiding lengthwise slices of
beams lying in the plane (shift the plane a few cm instead). Title-block
note: keep it short ("plane x = 700, viewed from the left") — long notes overflow
into the SCALE cell. Dimension interior heights the elevations can't
show (clear height, fitting heights above floor, sill heights).

## Outputs & conversion pipeline

Each `Sheet.write()` emits three files into `out/drawings/` (plus two
optional ones):

1. `<name>.svg` — the drawing; `ExportSVG(scale=1/P)` ⇒ **SVG units =
   paper mm** (this is what makes true-scale print possible).
2. `<name>.html` — scaling wrapper for the PNG check. **Chrome renders a
   bare SVG at 1 px per unit and crops it** — always screenshot the
   wrapper (Makefile rule), never the SVG directly.
3. `<name>.print.html` — `@page { size: 420mm 297mm; margin: 0 }` with the
   image sized to the SVG's native units **in mm** ⇒
   `chrome --headless --print-to-pdf` produces a vector A3 PDF at exactly
   1:P. `make drawings-pdf` prints all sheets and merges them via
   `merge_pdfs.py` into `out/drawings/drawings_A3.pdf`.
4. `manifest.json` — sheet list sorted by drawing number, maintained by
   `write()`; `merge_pdfs.py` takes the merge order from it (its
   `SHEET_ORDER` list is only a fallback when no manifest exists).
5. `<name>.dxf` — with `write(dxf=True)`: layered DXF in **model mm, true
   1:1** — the `visible` layer is the CNC/laser-usable geometry.
   Annotations/text export as outline curves at P× paper size and DXF
   lineweights snap to the ezdxf value set (0.05/0.09/0.13/0.25/0.35/…) —
   both cosmetic caveats, the cut geometry is exact.

`make pdf` additionally prints the build sheet's A4 `.print.html` variant
and prepends it → **one complete printable PDF** (A4 document + A3
sheets; mixed page sizes in one PDF are fine). See buildsheet.md for the
build-sheet print variant (forced light theme + break rules).

## Verification (mandatory)

Every sheet: `make drawings-png` → **Read each PNG** — check view
placement, dims outside outlines and matching the model parameters,
annotations not colliding (callouts vs section arrows vs dims), hidden
lines dashed, title block not overlapped. Fix by changing the dim `side`
or nudging callout `offset_paper`; re-render; only then show the user.
For the PDFs, Read a few pages of the merged file (the Read tool renders
PDF pages) to confirm order, page sizes and vector output.
