# Fitness equipment playbook — training gear that carries a moving human

## When this applies

Plyo boxes, pull-up bars ("hrazda"), squat stands, benches, dip bars,
climbing holds' backboards, kids' gym frames. Composes with woodworking
(boxes, benches) and metalwork (bars, stands). Out of scope: anything
overhead-suspended for swinging children (playground norms) and motorized
equipment — design conservatively and say a norm check is the user's job.

## Intake additions

- User mass + the worst movement: kipping pull-ups and box-jump landings are
  DYNAMIC — this vertical never designs for static body weight.
- Where it mounts: concrete, masonry, timber frame, or freestanding —
  anchoring is usually the weakest link, ask before modeling.
- Indoor/outdoor (corrosion → metalwork finishes).

## Stack & stage refinements

Stacks: **solids**; metal parts follow [metalwork.md](metalwork.md), wooden
ones [woodworking.md](woodworking.md).

- **Model** — playbook defaults, stated in the build sheet as assumptions:
  design load = **3× body mass** for dynamic use (jumps, kipping), 2× for
  strictly static gear; target safety factor ≥ 3 on yield on top of that.
  Grip tubes ⌀ 32–34 mm (established comfortable pull-up grip). Plyo box:
  internal bracing under the landing face, edges rounded generously,
  non-slip top surface.
- **Drawings** — anchor positions dimensioned from walls/floor datums;
  weld callouts per metalwork.
- **BOM + cut plan** — anchors are engineering items: chemical anchors for
  concrete/hollow masonry, lag bolts INTO STRUCTURE for timber (never
  plasterboard alone — say it in the plan); list anchor size and stated
  load rating.
- **Make plan** — assembly, then the **overload test protocol before first
  use**: load gradually to ~1.5–2× intended working load with mass, not a
  person (sandbags, plates), inspect welds/joints/anchors, then use. The
  test is a numbered step, not a footnote.
- **Analysis** — MANDATORY, analytic first (bending of the bar/beam,
  anchor shear/pull-out, tip-over for freestanding stands with the load at
  the worst position), FEA to verify anything welded or slender. Weld
  quality assumption stated per metalwork.

## Materials & suppliers (CZ)

Steel per metalwork (jäkl, trubka; Ferona, Kondor); birch plywood or
smrk KVH for boxes/benches per woodworking; chemické kotvy + svorníky from
spojovací technika / hobbymarket. Leave prices per project.

## Last mile

Build per the parent vertical (weld/wood plans), anchor per the drawing,
run the overload test, then train. Re-torque/inspect anchors and welds
periodically — put the inspection interval in the build sheet.

## Safety gates

The agent never claims gear is safe for a person until the overload test
step is done — the build sheet states design load, safety factor, and the
test protocol explicitly. Freestanding stands: tip-over numbers reach the
user. Kids' equipment: recommend the applicable playground/toy norms check
— out of this playbook's scope to certify.
