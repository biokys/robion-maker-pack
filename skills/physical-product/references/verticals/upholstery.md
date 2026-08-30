# Upholstery playbook — padded & covered furniture

## When this applies

Benches with padded seats, window-seat cushions, headboards, pet beds
("pelíšek"), camper cushions, chair re-covers. **The first two-stack
vertical**: the frame is solids (via [woodworking.md](woodworking.md)), the
covers are patterns2d (via [sewing.md](sewing.md)). Out of scope: sprung
traditional upholstery (coil springs, horsehair) — refer to a čalouník and
say so.

## Two-stack scaffold convention (defined here, applies pack-wide)

A project combining two template stacks keeps the PRIMARY stack at the repo
root and scaffolds the secondary stack into a subdirectory with its own
pyproject/Makefile (here: solids at root, `covers/` with patterns2d
templates). One build sheet covers both; the root README links the
sub-scaffold. Parameters shared between the two live in the root model and
are RETYPED into the sub-scaffold with a comment naming the source — note
the duplication in the build sheet's Předpoklady until the pack has a
cross-stack parameter mechanism.

## Intake additions

- Use intensity: daily seating vs occasional — drives foam grade.
- Removable covers wanted? (zips + patterns2d) vs stapled-on (fabric in the
  solids BOM, no sewing).
- Fabric: upholstery-grade wanted — abrasion rating matters for daily
  seats; directional/patterned fabric changes the marker.

## Stack & stage refinements

- **Frame (solids/woodworking)** — hardwood (buk) where staples and screws
  work repeatedly; radius every edge the fabric wraps (sharp edges cut foam
  and fabric); base for the seat: plywood board or webbing ("popruhy") —
  choose by comfort wanted and say why.
- **Foam** — PUR foam grade by use: seats want higher density (≈ RG35+),
  backs softer (≈ RG25) — density, not just firmness, drives lifetime; typ.
  seat thickness 60–100 mm. Foam is cut oversize ~5 mm per side and
  compressed by the cover ("potah šít těsný") — a wrap of vatelín rounds
  the look. Glue foam to the base with foam adhesive.
- **Covers (patterns2d in `covers/`)** — box-cushion pieces (top, bottom,
  boxing strip, zip strip), allowance 10 mm; pattern dims from the FOAM
  block minus the snug-fit compression — make the fit a parameter and gate
  it with a test corner when fabric is expensive. Notches align boxing to
  corners. Stapled covers instead: fabric cut rectangles go in the solids
  BOM with pull allowances (~80–100 mm per side for stapling grip).
- **BOM** — foam by block dims + grade, fabric from the marker, vatelín,
  zips (length = boxing opening), staples, foam adhesive.
- **Make plan** — frame → finish → webbing/board → glue foam → vatelín →
  cover (sew per covers/ plan, or staple: centers first, then work outward,
  hospital corners); pull evenly, no puckers.
- **Analysis** — frame per woodworking if it's seating (deflection under
  people); covers none.

## Materials & suppliers (CZ)

PUR pěna (molitan) by RG grade from foam suppliers ("prodejci PUR pěn" —
per the user's town), potahové látky (e.g. Látky Mráz or local specialist;
for daily seats ask for upholstery abrasion class), vatelín, popruhy,
sponky. Leave prices per project.

## Last mile

Frame per woodworking drawings; covers per the printed 1:1 pattern; the
assembly order above is the plan's spine. First cushion of a batch is the
fit gate before cutting the rest of the fabric.

## Safety gates

No machines beyond the parent verticals'. Warn about: foam adhesive
ventilation, and staple gun ricochet on hardwood.
