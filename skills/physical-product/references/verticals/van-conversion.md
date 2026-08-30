# Van conversion playbook — furniture built into a vehicle

## When this applies

Furniture and storage built into a van/camper ("vestavba"): beds, kitchen
pods, drawers, seat boxes, wall panels. Composes heavily: woodworking (the
furniture itself), metalwork (brackets, slides), 3d-print (fillers, clips),
sewing (cushion covers via upholstery). Out of scope — **pro-review gates,
not DIY stages**: LPG/gas installs, 230 V shore power, water heaters, seating
changes and anything affecting vehicle registration ("přestavba") — design
around them, but the build sheet must send them to a professional and tell
the user to verify local legal requirements.

## Intake additions

- **Weight budget FIRST**: payload = max permissible weight − actual curb
  weight (vážní lístek beats the papers). Every BOM in this vertical tracks
  running total mass against it — that's the reason `Shape.volume × density`
  masses exist.
- Vehicle envelope: measured interior (wheel arches, ribs, curves) — curved
  walls enter the model as measured template polygons (cardboard scribing),
  never guessed.
- What stays accessible: spare wheel, jack points, seat rails, vents,
  existing wiring runs.
- Sleeping/sitting layout fixed points (bed length is a human, not a
  parameter to shave).

## Stack & stage refinements

Stack: **solids** (+ others by composition).

- **Model** — the van interior is a fixed envelope part (measured, marked
  "MĚŘENO"); furniture must `make check` against it. Lightweight
  construction is the default: frame of small softwood battens + thin
  poplar plywood skins beats massive sheet boxes (poplar ply is notably
  lighter than birch — that's why vanlife uses it). Round every corner a
  head can hit.
- **Drawings** — 1:1 templates for curved cuts (transfer of the scribed
  polygons); drilling positions for body fixings dimensioned from body
  features the user can find (rib edges, existing holes).
- **BOM + cut plan** — mass column is mandatory and the build sheet shows
  the running total vs payload. Fixings: rivet nuts ("nýtovací matice") into
  body ribs, machine screws, threaded inserts in wood.
- **Make plan** — dry-fit everything OUTSIDE the van first; every hole
  drilled into the body gets deburring + zinc primer (corrosion), and
  **check both sides before drilling** (wiring looms, tank lines, outer
  skin). Panels get ventilation gaps behind them (condensation).
- **Analysis** — anchoring, not furniture strength, is the story: in a
  crash, unanchored furniture becomes a projectile — every module anchors to
  body or floor structure, and the build sheet says so explicitly. Analytic
  check of anchor pull-out under the module's mass; state assumptions, and
  for heavy modules (water, batteries) recommend a pro review.

## Materials & suppliers (CZ)

Topolová překližka (lehká, typ. 9–15 mm), smrkové hranolky, birch ply only
where wear demands it. Suppliers: same as woodworking (JAF Holz, Dřevo
Trust) + spojovací technika for rivet nuts and machine screws. Ferona for
bracket steel. Leave prices per project.

## Last mile

Modules are built complete on the bench from the drawings, then carried in
and anchored per the fixing plan — the van is the worst workshop, so the
plan minimizes in-vehicle work to drilling, priming and bolting.

## Safety gates

The agent never signs off gas, 230 V, water heating, or seating changes —
those are professional installs and the build sheet lists them as such, plus
the registration/legal check. Warn about: drilling blind into the body,
weight over payload (illegal and dangerous), and unanchored mass.
