# Upholstery playbook — padded & covered furniture

## When this applies

Benches with padded seats, window-seat cushions, headboards, pet beds,
camper cushions, chair re-covers. **The first two-stack vertical**: the
frame is solids (via [woodworking.md](woodworking.md)), the covers are
patterns2d (via [sewing.md](sewing.md)). Out of scope: sprung traditional
upholstery (coil springs, horsehair) — refer to a professional upholsterer
and say so.

## Two-stack scaffold convention (defined here, applies pack-wide)

A project combining two template stacks keeps the PRIMARY stack at the repo
root and scaffolds the secondary stack into a subdirectory with its own
pyproject/Makefile (here: solids at root, `covers/` with patterns2d
templates). One build sheet covers both; the root README links the
sub-scaffold. Parameters shared between the two live in the root model and
are RETYPED into the sub-scaffold with a comment naming the source — note
the duplication in the build sheet's Assumptions section until the pack has
a cross-stack parameter mechanism.

## Intake additions

- Use intensity: daily seating vs occasional — drives foam grade.
- Removable covers wanted? (zips + patterns2d) vs stapled-on (fabric in the
  solids BOM, no sewing).
- Fabric: upholstery-grade wanted — abrasion rating matters for daily
  seats; directional/patterned fabric changes the marker.

## Stack & stage refinements

- **Frame (solids/woodworking)** — hardwood (beech) where staples and screws
  work repeatedly; radius every edge the fabric wraps (sharp edges cut foam
  and fabric); base for the seat: plywood board or elastic webbing — choose
  by comfort wanted and say why.
- **Foam** — PUR foam grade by use: seats want higher density (≈ RG35+),
  backs softer (≈ RG25) — density, not just firmness, drives lifetime; typ.
  seat thickness 60–100 mm. Foam is cut oversize ~5 mm per side and
  compressed by the cover (sew the cover snug) — a wrap of polyester
  wadding rounds the look. Glue foam to the base with foam adhesive.
- **Covers (patterns2d in `covers/`)** — box-cushion pieces (top, bottom,
  boxing strip, zip strip), allowance 10 mm; pattern dims from the FOAM
  block minus the snug-fit compression — make the fit a parameter and gate
  it with a test corner when fabric is expensive. Notches align boxing to
  corners. Stapled covers instead: fabric cut rectangles go in the solids
  BOM with pull allowances (~80–100 mm per side for stapling grip).
- **BOM** — foam by block dims + grade, fabric from the marker, wadding,
  zips (length = boxing opening), staples, foam adhesive.
- **Removable cushion on a lid** — hook-and-loop: the loop strips are sewn
  on the cover's bottom panel, so their geometry (two cross strips near the
  ends, or two lengthwise strips) is decided ONCE in `covers/pattern.py` and
  the frame BOM copies the hook-side quantity from it — never size the two
  sides in two places. A lid on a piano hinge is carried by the front panel
  and the hinge line across its depth: the hinge leaf screws are the weak
  member (leaning on the open lid), not the plate — size them (3.5×16 into a
  plywood edge, or the leaf on the inner face) before worrying about the span.
- **Make plan** — frame → finish → webbing/board → glue foam → wadding →
  cover (sew per covers/ plan, or staple: centers first, then work outward,
  hospital corners); pull evenly, no puckers.
- **Analysis** — frame per woodworking if it's seating (deflection under
  people); covers none.

## Materials & stock

PUR foam by RG grade (≈ RG25 for backs, RG35+ for seats), cut to block size
by the foam supplier; upholstery fabric with a stated abrasion class
(Martindale rubs) for daily seats; polyester wadding, elastic or jute
webbing, staples sized to the gun. Name a foam supplier and an upholstery
fabric shop from the user's own market — the workshop profile may name
preferred suppliers; never invent a supplier or a price. Leave prices per
project.

## Last mile

Frame per woodworking drawings; covers per the printed 1:1 pattern; the
assembly order above is the plan's spine. First cushion of a batch is the
fit gate before cutting the rest of the fabric.

## Safety gates

No machines beyond the parent verticals'. Warn about: foam adhesive
ventilation, and staple gun ricochet on hardwood.
