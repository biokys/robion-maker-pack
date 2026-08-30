# 3D-print playbook — FDM parts and enclosures

## When this applies

Parts made on the profile's FDM printer: enclosures, brackets, jigs, adapters,
knobs. Combines routinely with electronics (PCB enclosure — fit gate) and
woodworking/metalwork (printed hardware on a built frame). Out of scope: resin
printing and strength-critical parts a print can't honestly carry — offer a
metal/wood redesign instead.

## Intake additions

- Which material for THIS part (from the profile's `materials`): PLA (easy,
  stiff, hates heat/UV), PETG (tougher, outdoor-ok), ASA/ABS (heat, enclosure
  needed). Record the choice and why under "Předpoklady".
- Fit partners: what does the part mate with — get the real dimensions of the
  mating object measured, never guessed.
- Load direction: layer adhesion is the weak direction — printed parts are
  weakest in tension across layers.

## Stack & stage refinements

Stack: **solids**.

- **Model — printability rules:**
  - Wall thicknesses in multiples of the nozzle (0.4 mm nozzle → 0.8 / 1.2 /
    1.6 mm walls).
  - Self-supporting overhangs ≤ 45°; design chamfers instead of overhangs
    where possible; bridging only over short spans.
  - Orient the part on the bed at MODEL time: the largest flat face down, load
    paths within layers, not across them. If two orientations fight, split the
    part and add a joint.
  - Holes print undersized: add +0.2 mm to diameters or note "převrtat".
    Mating clearances 0.2–0.3 mm per side; test-fit features on first print.
  - Chamfer bottom edges 0.4 mm against elephant foot.
  - Check the part fits the profile's `bed_mm` — the assert belongs in
    model.py.
- **Drawings** — usually skipped (the STL is the deliverable); keep a
  dimensioned drawing only for parts others must verify or machine later.
- **BOM** — part mass from `Shape.volume × density` is the SOLID mass; real
  print weight is lower (infill) — report the solid mass as an upper bound,
  or the slicer's estimate when available, and say which one it is.
- **Make plan** — per part: material, orientation (photo/render of the part
  lying as printed), supports yes/no and where, first-layer notes, any
  post-processing (tapping, inserts, drilling to size).
- **Slicing** — if PrusaSlicer exists on the machine, it can slice headless:
  `prusa-slicer --export-gcode` with the user's printer profile; the G-code
  header carries the time and filament estimates — quote them in the BOM.
  No slicer on PATH ⇒ hand the user the STL and the orientation notes, and
  say the estimate is missing.

## Materials & suppliers (CZ)

Filament suppliers a BOM may name: Prusament, Fillamentum, Plasty Mladeč —
or "filament z profilu" when the user prints from stock on hand. Threaded
inserts (mosazné závitové vložky) and machine screws for enclosure lids belong
in the BOM.

## Last mile

The user slices (or reviews the provided G-code), starts the print themselves,
and post-processes per the make plan. In Robion, print progress can be watched
via the cockpit when the user wires a probe to their printer's API — never
assume it exists.

## Safety gates

**The agent never starts a print** — G-code is handed over, the click is the
user's. Build sheet must warn about: ASA/ABS fumes (větrání/enclosure), first
print of a fit feature is a test fit, and load-bearing prints: state the load
assumption and the weak direction explicitly.
