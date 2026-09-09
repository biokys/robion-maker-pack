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
  needed). Record the choice and why under "Assumptions".
- Fit partners: what does the part mate with — name the 3–6 dimensions you
  need and get them from a vendor STEP or drawing, calipers or a photo with a
  ruler, never guessed ([core/fit-partners.md](../core/fit-partners.md)); the
  mating object becomes a `reference=True` part so `make check` fits against
  it.
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
  - Holes print undersized: add +0.2 mm to diameters or note "drill to size".
    Mating clearances 0.2–0.3 mm per side; test-fit features on first print.
  - Chamfer bottom edges 0.4 mm against elephant foot.
  - Check the part fits the profile's `bed_mm` — the assert belongs in
    model.py.
- **Drawings** — usually skipped (the STL is the deliverable); keep a
  dimensioned drawing only for parts others must verify or machine later.
- **BOM** — part mass from `Shape.volume × density` is the SOLID mass; real
  print weight is lower (infill) — report the solid mass as an upper bound and
  say so. Print time and filament use come from the user's slicer: leave a
  "from your slicer" line, never quote a figure you did not get from the user.
- **Make plan = the print plan** — the deliverable is STL + STEP + settings for
  the user's own slicer (named in the workshop profile, `printer.slicer`), as
  a table per part: the file to load (`out/parts/<part>_print.stl` in print
  orientation when it differs from assembly coordinates, plus `<part>.step`),
  material, layer height, walls in that slicer's own words (Bambu Studio "wall
  loops", PrusaSlicer "perimeters"), top/bottom layers, infill % and pattern,
  supports (none / where), brim, elephant-foot compensation, first-layer and
  plate notes, post-processing (tapping, inserts, drilling to size); plus a
  render of the part lying as printed. **Robion never slices**: no slicer CLI,
  no G-code, no 3MF, no `slicing/`, no `out/slice/` — the maker loads the STL
  with the plan's settings, checks the preview and slices in their own slicer.

## Materials & stock

Filament is specified by polymer, diameter (1.75 mm typical) and spool weight
(1 kg standard) — and by the tuned print profile it goes with; say "filament
on hand" when the user prints from stock. Brass heat-set threaded inserts and
machine screws for enclosure lids belong in the BOM. Name filament brands and
vendors from the user's own market — the workshop profile may name preferred
suppliers; never invent a supplier or a price, and leave prices per project.

## Last mile

The user loads the STL with the print plan's settings into their own slicer,
checks the preview, starts the print themselves, and post-processes per the
make plan. In Robion, print progress can be watched
via the cockpit when the user wires a probe to their printer's API — never
assume it exists.

## Safety gates

**The agent never slices and never starts a print** — STL and the print plan
are handed over; the slicer and the click are the user's. Build sheet must warn about: ASA/ABS fumes (ventilation/enclosure),
first print of a fit feature is a test fit, and load-bearing prints: state the
load assumption and the weak direction explicitly.
