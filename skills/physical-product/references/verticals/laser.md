# Laser playbook — flat parts cut from sheet by a laser cutter

## When this applies

Flat parts cut from plywood, MDF, acrylic ("plexi") or thin materials on the
profile's laser: boxes, panels, signage, mechanical flat parts, engraved
fronts. Combines routinely with 3d-print (printed corners on laser-cut panels)
and electronics (front panels). Out of scope: metals unless the profile's
laser explicitly cuts them (diode lasers don't), and 3D relief engraving.

## Intake additions

- Material + thickness per part, and whether the user has a MEASURED kerf for
  that material on their machine. No measurement ⇒ plan a test cut (a small
  slot comb) as step 1 of the make plan; never guess kerf into the geometry.
- Visible face: lasers leave burn marks on edges and the down-facing side —
  ask which face shows (masking tape note in the plan).
- Workflow: does the user run LightBurn (typical) or feed G-code directly
  (GRBL diode machines)?

## Stack & stage refinements

Stack: **solids** — model the assembled product as real 3D solids (so fit,
interference and BOM stay honest), then derive 2D.

- **Model** — constant-thickness parts only (same flat-plate rule as
  [cnc-router.md](cnc-router.md)). Box corners: finger joints ("zubování")
  with finger width ≥ material thickness; slot WIDTH = material thickness
  exactly — kerf compensation happens in the CAM (LightBurn offset) or as one
  model parameter `kerf_comp` default 0, never both. Acrylic snap fits: don't
  — acrylic cracks; use screws or glue.
- **2D export** — exact per-part face wires to DXF/SVG, the same recipe as
  [cnc-router.md](cnc-router.md) (projected drawing views are NOT cut
  geometry). Engrave content goes on a separate layer/color from cuts —
  LightBurn maps layers to operations.
- **Drawings** — usually the 2D exports + one assembly drawing; dimension only
  what the user must verify after cutting.
- **BOM + cut plan** — `cutlist.py` Sheets for purchasing; actual nesting of
  irregular shapes is done in LightBurn by the user — the cut plan states
  sheet counts and which parts share a sheet.
- **Make plan** — per sheet: material, which face down, test-cut step if kerf
  unmeasured, operation order: **engrave first, then inner cuts, outer
  contours last** (the part stays referenced as long as possible), masking for
  visible faces.

## Materials & suppliers (CZ)

Překližka (topol/bříza 3–6 mm), MDF 3 mm, plexisklo/PMMA (cast lépe než
extrudované pro gravír). Suppliers a BOM may name: local dřevocentrum for
plywood, plastic sheet suppliers (e.g. Zenit) for PMMA. NEVER put PVC or
polycarbonate in a laser BOM — PVC releases chlorine (machine-killing,
toxic), PC burns; if the user asks for them, refuse the material and say why.

## Last mile

The user imports the DXF/SVG into LightBurn (interchange format — never author
`.lbrn2` directly, it's undocumented), sets power/speed from their material
library, nests onto the sheet, and cuts. Direct G-code only for GRBL diode
machines when the user asks for it.

## Safety gates

**The agent never starts the laser.** Build sheet must warn about: never leave
a running laser unattended (fire), ventilation/extraction, the PVC/PC material
ban above, and acrylic edge flames at low speed.
