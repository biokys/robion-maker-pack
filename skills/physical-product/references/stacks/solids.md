# Solids stack — build123d (default), OpenSCAD (fallback)

The default stack for anything rigid: parametric solids in Python on the OCCT
BREP kernel, one geometry source feeding every downstream artifact.

## build123d (default)

- Real solids: fillets/chamfers by edge selection, sweeps, lofts, threads
  (`bd_warehouse`), assemblies with joints.
- **STEP export** — the interchange format for everything downstream: FEA meshing
  (gmsh reads STEP), fabrication, KiCad enclosure fit-checks, other CAD.
- In-code dimensioned drawings (`drafting` classes + `ExportSVG`/`ExportDXF`,
  hidden lines from `project_to_viewport`). See [drafting-conventions.md](drafting-conventions.md).
- Exact `Shape.volume` → trustworthy BOM masses.
- Plain Python: BOM as data structures, unit-testable geometry, no echo-parsing.

Structure rule: **one builder function per part**, registered in a `PARTS` dict with
a material record (see `templates/solids/model.py`). Viz, drawings and FEA all consume
per-part exports — never one merged body.

Run via `uv run` in a per-project environment (`templates/solids/pyproject.toml`); never
system python. Optional live viewer: `ocp-vscode` — a dev convenience only, the
pipeline must never depend on it.

## OpenSCAD (fallback)

Use only when: the part is a trivial prismatic solid AND no drawings/FEA are needed,
or the project already uses it, or the user asks. Limitations that disqualify it for
full products: mesh-only output (no STEP), no hidden-line projections, no dimensions,
poor FEA input. If forced down this path, mirror the build123d template's structure
in OpenSCAD terms: a `VIEW` dispatch variable selecting part/assembly renders,
`echo()`-emitted BOM lines parsed from stdout, and per-part STL exports for the viz stage.

Hard-won rules for this path (from a real product on OpenSCAD 2021.01):

- **Three speeds, use the right one:** `openscad -o x.echo model.scad`
  evaluates the model WITHOUT geometry — asserts + echo-BOM in well under a
  second, the fastest parameter-tuning loop; `-o x.png` without `--render`
  goes through the OpenCSG preview (sub-second); STL export always runs full
  CGAL (minutes for an assembly, seconds per part) — export per part while
  iterating.
- **CSG robustness:** a union of bodies touching only at a face or an edge
  is non-2-manifold — always overlap 0.3–0.5 mm. A coplanar `difference()`
  through a face that is also another body's surface produces degenerate
  triangles — compute the part's dimension instead of cutting it to size.
  CGAL keeps "contact" faces at coplanar contacts, which later masquerade
  as overhangs in print analysis — fix the overlaps first, only then read
  overhang reports.
- **`make check` does not exist here — replace it.** Write an independent
  probe script over the exported STLs (ray/containment tests on the mesh):
  no part's vertices intrude into another part, nothing protrudes above a
  functional plane, planes tested as planes rather than as sums of the
  formulas that built them. This finds errors renders cannot show
  (sub-millimetre intrusions, a plate proud of a seating plane). Keep one
  known part volume as a regression guard when refactoring builders.
- **Camera:** `--camera=tx,ty,tz,rx,ry,rz,dist`; `rz=0` looks from −Y,
  `rz=90` from +X; with `--projection=o` the `dist` acts as zoom.

## Conventions that hold across the stack

- Units: **millimetres** everywhere (CAD, drawings, viz scale 0.001, FEA uses
  the mm-N-s system — see [fea-recipe.md](fea-recipe.md)).
- STEP is the hand-off format between stages; STL only where meshes are required
  (viz, 3D print).
- Deterministic outputs: everything regenerable via `make`; no manual editing of
  generated files.

## Scaffold specifics

Templates: `templates/common/` + `templates/solids/` (pyproject.toml, Makefile,
model.py, drawings.py, cutlist.py, merge_pdfs.py, viz.py, fea.py,
datauri.py, buildsheet.html, CLAUDE.md.template → CLAUDE.md). After `uv sync`,
run `make font` (ISO 3098 lettering for drawings; skip offline — Arial
fallback) and `make doctor`. Canonical outputs: `out/parts/*.{step,stl}`,
`out/drawings/` (SVG + PNG checks + per-sheet PDF + merged `drawings_A3.pdf`),
`out/viz_*.png`, `out/fea/`, `out/bom.md`, `out/cutlist.{md,svg,png}`,
`out/<product>_complete.pdf`; textures in `assets/`.

## Stage pipeline (solids)

1. **Model** — parameters at the top of `model.py` are the single source of truth;
   derived values + asserts right below; every part is a builder function registered
   in `PARTS` with a material record. Export per-part STEP+STL (viz, drawings and FEA
   each need separate bodies). Run `make check` (mass/COG, pairwise interference,
   declared clearances) before investing in drawings — parts are in assembly
   coordinates, so overlaps are real collisions. *Gate:* `gate model ask.json`
   (kind `approve`) — in Robion the cockpit viewport is the live geometry the
   maker tunes with the sliders before pressing Continue; add a quick render
   (`VIZ_SAMPLES=48 make viz`) as a `gallery` when the viewport is not enough.
   Elsewhere show quick renders (`make parts` + ocp preview) before investing
   in drawings/viz.
2. **Drawings** — use the proven Sheet/View framework in `templates/solids/drawings.py`:
   fixed A3 landscape sheets with border frame and a localized title block
   (drawing number, scale, material, quantity, date), TRUE per-sheet scale (1:10
   panels / 1:5 details / 1:1 small parts), ISO first-angle views laid out
   automatically (`add_views`), italic technical-blue dims anchored on model
   parameters via `view.pt()` (affine-calibrated to the projection).
   Annotations come from `build123d-drafting-helpers` (pinned in pyproject):
   named-side dims, hole callouts ("4× ⌀8"), center marks, section
   indicators; assembly sheets get balloons + a BOM table
   (`parts_table(parts_rows())`). Section views with per-material
   hatching are supported — add one when interior heights or layered build-ups
   need showing. `write(dxf=True)` adds a true-1:1 layered DXF for CNC/laser;
   for actual CNC routing use exact face-wire DXFs per
   [../verticals/cnc-router.md](../verticals/cnc-router.md), not projected views.
   Conventions, the section recipe and the SVG→PNG/PDF pipeline:
   [drafting-conventions.md](drafting-conventions.md).
   *Gate:* `make drawings-png` and **Read each PNG** — view placement, dims
   outside outlines, legibility — before showing the user. Then
   `make drawings-pdf` → printable true-scale `out/drawings/drawings_A3.pdf`.
3. **Viz** — `viz.py` + the `viz/` engine (three.js + a GPU path tracer in
   headless Chrome; the same engine draws Robion's viewport and robion.app).
   Per-part materials: presets (`powder_coat`, `plastic`, `brushed_metal`, `glass`,
   `oak_sparovka`) and `pbr(...)` for anything else — every field of the physical
   model plus box-projected texture maps. Bbox-driven camera/lights. `PARTS()` globs
   `out/parts/*.stl` and picks the material by part name (`material_for`),
   so variants and part families need no edit; `VIZ_SAMPLES=32
   VIZ_SHOTS=viz_hero` renders a quick preview (what `concept.py` does).
   Known traps: [viz-gotchas.md](viz-gotchas.md). *Gate:* Read the
   render; user approves the hero shot.
4. **BOM** — computed from the same parameters as the geometry (`make bom`), masses
   cross-checked against `Shape.volume × density`; include fasteners, adhesives,
   finish materials named as the user's market sells them — in `out/hardware.md`
   as Markdown tables with the columns `item | specification or purpose |
   quantity` (any headings between them; the build sheet parses every table
   by position). Then `make cutlist`
   — declare the stock in
   `cutlist.py` STOCK (sizes from the workshop profile) and get the cutting
   plan: purchasing table + cut diagrams (`make cutlist-png`, Read the PNG).
5. **Assembly + finishing plan** — numbered localized steps; include the surface-finish
   schedule (sanding grits, oil/paint coats, cure times) and safety notes; order
   steps so interior surfaces get finished while still accessible. Written to
   `out/plan.md` in `## ` sections, the finish schedule in a section of its own
   (the build sheet matches its heading with `FINISHING_HEADING`); the build
   sheet renders that file and never writes it.
6. **Analysis** — ALWAYS produce analytic estimates first (governing-member stress,
   deflection, first natural frequency, safety factor); frames of slender
   members then get the beam-element model (`make frame-fea`, numpy, no
   solver); solid FEA static + modal via pygccx/gmsh/CalculiX only for
   plates, castings and local detail: [fea-recipe.md](fea-recipe.md).
   *Gate:* sanity checks pass before any number reaches the user.
7. **PCB (optional)** — KiCad authoring + `kicad-cli` exports, board STEP into the
   CAD assembly for fit-check: [pcb.md](pcb.md).
8. **Build sheet** — assemble the localized build sheet from
   `templates/common/buildsheet.html` per [../core/buildsheet.md](../core/buildsheet.md)
   (`make buildsheet` — it reads `out/plan.md`, `out/hardware.md`,
   `out/*_assumptions.md`, `design.json` and the `covers/` sub-project when
   there is one); mirror the content in the project README.md; then
   `gate buildsheet ask.json` (kind `approve`, `show: [{type: file, path:
   out/build_sheet.html}]`) and `open_file` it. The template's `@media print` block makes the same
   `out/build_sheet.html` printable — `make pdf` → one complete PDF (A4 build
   sheet + all A3 drawing sheets), per the print-variant section of buildsheet.md.

## Stack-specific traps

- `viz.py` needs Chrome with a working GPU: software GL takes minutes per image.
  Exit 2 = no Chrome (degrade sentence in the build sheet), 1 = see `out/viz.log`.
- Projected drawing views carry a mild perspective residual — CAM geometry must
  come from face wires, never projected views
  ([../verticals/cnc-router.md](../verticals/cnc-router.md)).
- build123d 0.11: booleans on a located `Compound` (e.g. `Pos(...) *
  import_step(...)`) ignore the children's placements — move every solid
  explicitly: `Compound(children=[loc * Solid(s.wrapped) for s in
  shape.solids()])`.
- `Compound(children=[...])` re-parents its children — copy parts before
  putting one part into a second compound.
- `project_to_viewport` with an exactly axis-aligned camera can return no
  edges at all (seen on an imported-STEP assembly) — nudge the direction by
  ~1e-3 or shorten the camera distance.
