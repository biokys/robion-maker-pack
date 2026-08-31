# Sheet-metal playbook — thin-sheet parts with straight bends

## When this applies

Boxes, covers, brackets, chassis, panels bent from thin sheet (mild steel,
aluminium, stainless, typ. 0.5–3 mm) on a brake or by a fab shop. Combines
with laser (cutting the flat), cnc-router (aluminum flats), electronics
(chassis). Out of scope: rolled curves, deep drawing, hems on thick stock —
and no CAM: this playbook produces the exact FLAT pattern + a bend plan; the
bending itself is manual or the fab shop's.

## Intake additions

- Who bends: user's brake (max length? min flange?) or a fab shop (then ask
  for their preferred K-factor/bend deduction — shops have their own).
- Material + thickness; inside bend radius the tooling actually makes (hand
  brakes on thin sheet ≈ radius near the sheet thickness).
- Tolerance reality: ±0.5 mm is honest for DIY bending — don't design fits
  tighter than the process.

## Stack & stage refinements

Stack: **solids** — with the sheet-metal twist: **the flat pattern and the
folded part are BOTH derived from the same flange parameters.**

- **Model — the flat-pattern recipe:**
  - Parameters: flange lengths (to outside faces), thickness `T`, inside
    radius `R`, K-factor `K` (default 0.44 for air-bent mild steel — a
    playbook default, calibrate below), bend angles.
  - **Bend allowance** per bend: `BA = θ × (R + K·T)` (θ in radians). Flat
    length = Σ(flange flats) + Σ(BA), where each flange flat is the outside
    dimension minus (R + T) per adjacent 90° bend. Put the formula in
    model.py as functions, never hand-typed lengths.
  - Two builders per part from the same parameters: `*_flat` (extruded flat
    polygon — the cut geometry) and the folded solid (for `make check`
    fit-checks and viz). The assert: folded outside dims match the stated
    parameters.
  - **Calibration is a stage-1 step whenever K is unverified**: bend a
    100 mm test strip of the actual sheet on the actual brake, measure the
    legs, solve K back out, update the parameter. State the measured K in
    the build sheet.
  - Design rules: holes/slots ≥ 2.5–3× T from a bend line (else they
    distort — move them or cut after bending), corner relief cuts where two
    bends meet, min flange per the brake's die (typ. several × T — ask).
- **2D export** — flat-pattern face wires to DXF per
  [cnc-router.md](cnc-router.md) / [laser.md](laser.md) rules; bend lines on
  a separate layer, marked, never cut.
- **Drawings** — the folded part with outside dims + a flat-pattern sheet
  with bend lines dimensioned and bend DIRECTION marked (up/down), plus a
  bend table: order, angle, tool line.
- **BOM + cut plan** — `cutlist.py` Sheets (mill sheet, typ. 2000×1000 mm);
  deburring consumables, edge protection.
- **Make plan** — cut → deburr EVERY edge → punch/drill far-from-bend holes
  → bend in the stated ORDER (inner bends first where the brake reach
  demands; the order is designed, not improvised) → post-bend holes →
  finish (zinc spray, paint; stainless stays bare).
- **Analysis** — usually none for enclosures; brackets get the metalwork
  analytic treatment.

## Materials & stock

Sheet: cold-rolled mild steel (DC01), hot-dip galvanized steel, aluminium
(formable alloys such as EN AW-5754), stainless (1.4301 / AISI 304).
Typical sheet size 2000×1000 mm, thickness 0.5–3 mm. Fab-shop cutting and
bending are bought services — list them as BOM service rows. Name a steel
stockholder and a fab shop from the user's own market — the workshop profile
may name preferred suppliers; never invent a supplier or a price. Leave
prices per project.

## Last mile

The user (or fab shop) cuts the flat per DXF, then bends per the bend table
— test strip first when K is uncalibrated. Fab-shop route: hand over flat
DXF + folded drawing + bend table; ask the shop to confirm their K/deduction
before cutting.

## Safety gates

The agent never starts cutting machines (laser/plasma per their playbooks).
Warn about: sheared sheet edges cut (deburr before handling is a step, not
advice), brake pinch points, and springback — angles need slight overbend,
which is why the test strip exists.
