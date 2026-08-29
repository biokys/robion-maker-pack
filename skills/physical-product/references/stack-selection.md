# Stack selection

## build123d (default)

Python parametric CAD on the OCCT BREP kernel. Chosen as default because the whole
product pipeline stays in one language and one geometry source:

- Real solids: fillets/chamfers by edge selection, sweeps, lofts, threads
  (`bd_warehouse`), assemblies with joints.
- **STEP export** — the interchange format for everything downstream: FEA meshing
  (gmsh reads STEP), fabrication, KiCad enclosure fit-checks, other CAD.
- In-code dimensioned drawings (`drafting` classes + `ExportSVG`/`ExportDXF`,
  hidden lines from `project_to_viewport`). See drafting-conventions.md.
- Exact `Shape.volume` → trustworthy BOM masses.
- Plain Python: BOM as data structures, unit-testable geometry, no echo-parsing.

Structure rule: **one builder function per part**, registered in a `PARTS` dict with
a material record (see `templates/model.py`). Viz, drawings and FEA all consume
per-part exports — never one merged body.

Run via `uv run` in a per-project environment (`templates/pyproject.toml`); never
system python. Optional live viewer: `ocp-vscode` — a dev convenience only, the
pipeline must never depend on it.

## OpenSCAD (fallback)

Use only when: the part is a trivial prismatic solid AND no drawings/FEA are needed,
or the project already uses it, or the user asks. Limitations that disqualify it for
full products: mesh-only output (no STEP), no hidden-line projections, no dimensions,
poor FEA input. If forced down this path, mirror the build123d template's structure
in OpenSCAD terms: a `VIEW` dispatch variable selecting part/assembly renders,
`echo()`-emitted BOM lines parsed from stdout, and per-part STL exports for Blender.

## KiCad (electronics only)

Enters iff the product contains a PCB. Authoring is interactive/file-based;
`kicad-cli` handles checks and exports headlessly. Board outline/height travels into
the build123d assembly as STEP for enclosure fit. See kicad-pipeline.md.

## Conventions that hold across the stack

- Units: **millimetres** everywhere (CAD, drawings, Blender scale 0.001, FEA uses
  the mm-N-s system — see fea-recipe.md).
- STEP is the hand-off format between stages; STL only where meshes are required
  (Blender, 3D print).
- Deterministic outputs: everything regenerable via `make`; no manual editing of
  generated files.
