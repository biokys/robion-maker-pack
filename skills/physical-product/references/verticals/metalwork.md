# Metalwork playbook — welded & bolted frames from standard steel profiles

## When this applies

Frames and structures from standard mild-steel profiles: gates ("brána"),
fences, racks ("regál"), stands, brackets, machine bases, table frames.
Combines routinely with woodworking (steel frame + wood infill/top). Out of
scope: pressure vessels, lifting equipment, anything requiring a certified
weld or a stamped structural calculation — design it, but the build sheet must
say a professional has to verify it.

## Intake additions

- Who welds? Check the profile's `no_go` first — if welding is excluded,
  design **bolted** joints or plan fabrication by a zámečník and note it.
- Indoor or outdoor → corrosion protection level (see finishes below).
- Anchoring: what does it mount to (concrete, masonry, wood) — anchors belong
  in the BOM.
- Gate/moving products: hinge type and post situation are fixed inputs, ask
  early.

## Stack & stage refinements

Stack: **solids**.

- **Model** — default material S235JR (density 7850 kg/m³ in the material
  record — BOM mass in kg is a key deliverable here). One builder per member;
  frames parametrized by outer dimensions + profile size, member lengths
  derived. Miter joints (45°) at visible corners, butt joints elsewhere —
  model the real cut geometry so member lengths in the cutlist are true.
  Closed profiles (jäkl) that will be hot-dip galvanized need drain/vent
  holes — model them, don't leave them to the fabricator.
- **Drawings** — a fabrication drawing per weldment: overall dims, member
  positions from one datum, and a member table (position, profile, length,
  miter angles). Weld callouts as plain text notes ("koutový svar a3,
  obvodově") — the drafting helpers have no ISO 2553 symbol primitives, so
  never fake them graphically; text is unambiguous. Bolted joints get hole
  positions dimensioned from the datum edge.
- **BOM + cut plan** — `cutlist.py` Bars: stock length 6000 mm (standard hutní
  délka; 3000 mm sold in hobby sizes), kerf ~2–3 mm (rozbrušovačka / pásová
  pila). Mitered members: override the piece length to the LONGEST point of
  the miter. BOM lists steel by profile + total kg, plus spojovací materiál
  (pevnostní třída 8.8 for structural bolts), electrodes/wire, primer/paint or
  galvanizing as a service item.
- **Make plan** — welding sequence that limits distortion: cut all members →
  deburr → dry-assembly on a flat surface, check diagonals ("úhlopříčky") →
  tack weld everything ("nastehovat") → re-check diagonals → full welds
  alternating sides. Then finish, then mount hardware.
- **Analysis** — mandatory for anything load-bearing or human-adjacent
  (racks, gates, stands). Analytic first (governing member bending +
  deflection, tip-over for stands), FEA to verify. State the weld assumption
  explicitly in the build sheet: calculations assume sound full-perimeter
  welds; execution quality is the welder's responsibility.

## Materials & suppliers (CZ)

- Profiles: uzavřený profil "jäkl" (e.g. 20×20×2, 30×30×2, 40×40×3), úhelník
  (L), plochá ocel ("pásovina"), trubka, plech. Steel grade S235JR unless the
  user states otherwise.
- Suppliers a BOM may name: Ferona, Kondor, local hutní materiál; hobbymarkety
  for small pieces. Galvanizing ("žárové zinkování") and powder coating
  ("komaxit") are bought services — list as BOM service rows, price per
  project.
- Fasteners: šrouby 8.8 + podložky + samojistné matice; kotvy dle podkladu
  (chemická kotva do dutých materiálů).

## Last mile

The user (or their zámečník) works from the fabrication drawing + member cut
table at the saw, the weld plan at the bench, and takes the finished weldment
to the galvanizer/powder coater with the drawing. For bolted designs, the
drilling positions drive; a drill press beats a hand drill for frame accuracy
— note it when the profile has one.

## Safety gates

The agent never starts any machine. Build sheet must warn about: UV/fumes
during welding (kukla, větrání), cutting disc safety, sharp deburred edges,
hot-dip galvanizing REQUIRES the vent holes (trapped air/liquid in a closed
profile can burst it in the zinc bath — this is why the model has them), and
heavy weldments = two people to move.
