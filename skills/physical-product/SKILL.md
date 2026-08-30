---
name: physical-product
description: "Design a complete physical product end-to-end: parametric CAD model (build123d), dimensioned production drawings, photoreal Blender renders, BOM/kusovník, assembly & finishing plan, strength/modal analysis (FEA), optional KiCad PCB, and a published Czech build sheet (výrobní list). Triggers on: navrhni mi (stolek, poličku, držák, krabičku, konstrukci), výrobní výkres, kusovník, pevnostní výpočet, vlastní frekvence, design a bracket/enclosure/table/fixture, parametric 3D model, build sheet, BOM, technical drawing, FEA."
---

# Physical Product

Guide the design of a complete physical product from idea to a manufacturing-ready
package. The finished deliverable set: parametric 3D model, dimensioned drawings,
photoreal renders, BOM, assembly + surface-finishing plan, analysis (analytic +
optional FEA/modal), optional PCB, and a build-sheet artifact page.

**Language rule:** all user-facing deliverables (build sheet, README, drawings text,
BOM, dialogue) in the user's language — the templates in this pack show Czech. Code,
comments, commit messages and file names in English.

## 1 · Intake

**Workshop profile first:** read `~/.robion/workshop.yaml` before asking anything —
it answers machines, tools and materials once for all projects. Missing file ⇒ run
the one-time workshop interview and create it:
[references/workshop-profile.md](references/workshop-profile.md).

Then ask what the profile can't know (batched, in the user's language) — but never
stall: if the user can't answer, assume a sensible value and record it under
"Předpoklady":

- Function and load case: what does it carry/do, worst realistic load, static or
  dynamic (vibration source nearby?).
- Dimensions: which are fixed (space constraints, stock material on hand) vs derived.
- Materials for THIS project beyond what the profile lists (stock on hand matters
  most).
- Manufacturing reality beyond the profile: who makes the parts the user can't —
  and anything borrowed or one-off for this build.
- Aesthetic reference (photo) if looks matter.
- Electronics inside? → PCB stage applies.
- Depth wanted: quick concept vs full package with FEA.

## 2 · Stack decision

Default **build123d** (Python/OCCT: BREP, fillets, STEP export, in-code dimensioned
drawings, exact volumes for BOM, clean FEA meshing). Use OpenSCAD only for a trivial
single prismatic part or when the user asks for it. KiCad enters iff the product
contains electronics. Details and interchange rules: [references/stack-selection.md](references/stack-selection.md).

## 3 · Scaffold & bootstrap

New project: copy `templates/` files into the repo (pyproject.toml, Makefile,
model.py, drawings.py, merge_pdfs.py, blender_viz.py, fea.py, datauri.py,
buildsheet.html, CLAUDE.md.template → CLAUDE.md), **rename `[project].name`
in pyproject.toml to the product slug** (merge_pdfs.py derives
`<name>_komplet.pdf` from it — the default leaves `product_komplet.pdf`),
fill the `{{PACK_VERSION}}` stamp in CLAUDE.md with the installed pack
version (it tells future sessions which template vintage the project has —
see MIGRATIONS.md in the pack), run `uv sync`, then `make font` (ISO 3098
lettering for drawings; skip offline — Arial fallback) and `make doctor`
to see which tools exist. Canonical outputs: `out/parts/*.{step,stl}`, `out/drawings/` (SVG +
PNG checks + per-sheet PDF + merged `vykresy_A3.pdf`), `out/viz_*.png`,
`out/fea/`, `out/bom.md`, `out/<product>_komplet.pdf`; textures in `assets/`. Environment specifics and the degrade matrix
when tools are missing: [references/toolchain.md](references/toolchain.md).

## 4 · Stage pipeline

Run stages in order; each has a gate. Skipping a stage is fine when the user says so
— note it in the build sheet.

**Robion cockpit — build it unprompted.** When the `set_controls` MCP tool exists,
the cockpit is part of stage 1, not an optional extra (read `controls_help` first):

- `param: true` sliders **named exactly after the parameters in `model.py`** —
  the viewport and every run-button then receive them as `ROBION_PARAMS`
  automatically.
- `viewport: {path: 'model.py'}` — the live 3D; sliders re-render it in ~0.4 s.
- A photoreal button: `{kind:'run', command:'make viz',
  output:'out/viz_hero.png', autoClose: true}` — the finished terminal closes
  itself and the viewport switches to the render.
- `image` tiles for `out/viz_*.png` and drawings — they refresh on their own
  whenever the files are regenerated.
- A `set` preset button restoring the defaults.

Keep the cockpit current as stages advance (BOM stage: a shopping `checklist`;
plans: image tiles of the sheets). No `set_controls` tool (a bare terminal) ⇒ skip
silently, never mention it.

1. **Model** — parameters at the top of `model.py` are the single source of truth;
   derived values + asserts right below; every part is a builder function registered
   in `PARTS` with a material record. Export per-part STEP+STL (viz, drawings and FEA
   each need separate bodies). Run `make check` (mass/COG, pairwise interference,
   declared clearances) before investing in drawings — parts are in assembly
   coordinates, so overlaps are real collisions. *Gate:* in Robion the cockpit is the gate — the user
   tunes the sliders on the live viewport and approves; elsewhere show quick renders
   (`make parts` + OpenSCAD-style screenshot or ocp preview) before investing in
   drawings/viz.
2. **Drawings** — use the proven Sheet/View framework in `templates/drawings.py`:
   fixed A3 landscape sheets with border frame and Czech title block (razítko —
   číslo výkresu, měřítko, materiál, kusy, datum), TRUE per-sheet scale (1:10
   panels / 1:5 details / 1:1 small parts), ISO first-angle views laid out
   automatically (`add_views`), italic technical-blue dims anchored on model
   parameters via `view.pt()` (affine-calibrated to the projection).
   Annotations come from `build123d-drafting-helpers` (pinned in pyproject):
   named-side dims, hole callouts ("4× ⌀8"), center marks, section
   indicators; assembly sheets get balloons + a kusovník table
   (`parts_table(parts_rows())`). Section views (řezy) with per-material
   hatching are supported — add one when interior heights or layered build-ups
   need showing. `write(dxf=True)` adds a true-1:1 layered DXF for CNC/laser;
   for actual CNC routing use exact face-wire DXFs per
   [references/cnc-router.md](references/cnc-router.md), not projected views.
   Conventions, the section recipe and the SVG→PNG/PDF pipeline:
   [references/drafting-conventions.md](references/drafting-conventions.md).
   *Gate:* `make drawings-png` and **Read each PNG** — view placement, dims
   outside outlines, legibility — before showing the user. Then
   `make drawings-pdf` → printable true-scale `out/drawings/vykresy_A3.pdf`.
3. **Viz** — headless Blender/Cycles via `blender_viz.py` template (per-part
   materials, PBR textures, bbox-driven camera/lights). Known traps:
   [references/blender-gotchas.md](references/blender-gotchas.md). *Gate:* Read the
   render; user approves the hero shot.
4. **BOM** — computed from the same parameters as the geometry (`make bom`), masses
   cross-checked against `Shape.volume × density`; include fasteners, adhesives,
   finish materials with Czech names.
5. **Assembly + finishing plan** — numbered Czech steps; include the surface-finish
   schedule (sanding grits, oil/paint coats, cure times) and safety notes; order
   steps so interior surfaces get finished while still accessible.
6. **Analysis** — ALWAYS produce analytic estimates first (governing-member stress,
   deflection, first natural frequency, safety factor); FEA static + modal via
   pygccx/gmsh/CalculiX only to verify: [references/fea-recipe.md](references/fea-recipe.md).
   *Gate:* sanity checks pass before any number reaches the user.
7. **PCB (optional)** — KiCad authoring + `kicad-cli` exports, board STEP into the
   CAD assembly for fit-check: [references/kicad-pipeline.md](references/kicad-pipeline.md).
8. **Build sheet** — assemble the Czech výrobní list artifact from
   `templates/buildsheet.html` per [references/buildsheet.md](references/buildsheet.md);
   load the `artifact-design` skill before composing the page; mirror the content in
   the project README.md. The template's `@media print` block makes the same
   `out/vyrobni_list.html` printable — `make pdf` → one complete PDF (A4 build
   sheet + all A3 drawing sheets), per the print-variant section of buildsheet.md.

## 5 · Verification habits (non-negotiable)

- Parameters single source of truth; derived values computed, never retyped; asserts
  guard impossible geometry. Changing one parameter must reflow everything.
- Every visual output (drawing, render) is rendered to PNG and **looked at** with the
  Read tool before the user sees it.
- Blender headless exits 0 even when the script crashes — the Makefile greps the log
  for Traceback; never trust the exit code.
- BOM mass = parametric computation, cross-checked vs `Shape.volume`.
- FEA numbers pass the sanity checklist (reactions, rigid-body modes, hand-estimate
  agreement) before being reported.

## 6 · Iteration protocol

User feedback → change parameters (never hardcode inside builders) → `make` → show.
Keep the dialogue in Czech, short iterations, one nástřel at a time. Record design
decisions in the project README; record newly discovered tool gotchas in the project
CLAUDE.md ("Gotchas learned here").

## 7 · Degrade & uncertainty

Missing tool ⇒ skip that stage gracefully and say so in the build sheet (exact Czech
sentences in [references/toolchain.md](references/toolchain.md)). Never install
system packages (brew) without asking. The build sheet always ends with a
"Předpoklady a nejistoty" section listing every assumption made.

## 8 · Retrospective (end of project)

After the user approves the build sheet, write `RETRO.md` into the project:
what worked, what ground (ordered by severity), and every gotcha already
recorded in the project CLAUDE.md. Then offer to turn the findings into pack
patches — the pack's templates improve only through this loop (MIGRATIONS.md
in the pack repo tracks what changed between versions for running projects).
