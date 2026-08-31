# Aluminum profiles playbook — frames bolted from T-slot extrusions

## When this applies

Frames and furniture from extruded aluminium construction profiles
("hliníkové konstrukční profily" — item, Bosch Rexroth, Alutec K&K, hobby
V-slot): shelving ("polička", "regál"), stands, workbenches, machine frames
and enclosures. Assembled by bolting into the slots ("drážky") — no welding,
mostly catalog hardware. Combines routinely with 3d-print (printed
connectors, feet, panel clips), woodworking (shelf boards) and electronics
(machine frames). Out of scope: precision motion (linear rails, belts) —
design the frame, but rail alignment is a discipline of its own.

## Intake additions

- Which SYSTEM is a fixed input: raster (20/30/40/45 mm) × slot width
  ("drážka" 5/6/8/10 mm). Nuts and connectors are NOT interchangeable across
  systems, and anything the user already owns decides it. 2020 with a 6 mm
  slot is the 3D-printing hobby standard; rasters 30/40 with an 8 mm slot
  carry real furniture loads.
- Who cuts: supplier cut-to-length (accurate square cuts) vs self-cut
  (needs a miter/band saw with a non-ferrous blade — check `tools`)?
- Joint tooling: an M5/M8 tap ("závitník") for core threads, a drill press
  for access holes? A 3D printer in the profile unlocks printed connectors.
- Load per shelf, and what the frame stands on/against — tall shelving must
  be anchored ("kotvení ke zdi"), see Safety gates.

## Stack & stage refinements

Stack: **solids**.

- **Model** — one builder per member returning a plain box of the nominal
  cross-section; true lengths and positions are what matter. Member lengths
  derived from outer dimensions minus raster multiples, never retyped.
  Collapse members into `PartSpec` families (`group="profil 3030"`).
  Catalog hardware (brackets, nuts, feet) is not a PARTS entry — render
  it via the `VIZ_COMPOUNDS` callable. For the hero render, extrude a 2D
  sketch with the slots indicated — plain boxes render like wood.
- **Tilted shelves** ("nakloněná patra") — proven pattern: the tilt is ONE
  parameter (per floor), and only the depth-running members tilt; cross
  members stay horizontal, so every cut stays square and the node
  complication is confined to one arm. Rotate the shelf plane about the
  edge that preserves the envelope (typically the rear one) — only the
  opposite-post length changes. Check the side effects the render hides:
  front clearance between floors shrinks (state it in the build sheet),
  and NOTHING may protrude above the shelf's functional plane — a bracket
  0.6 mm proud makes the load rock on edges instead of sitting on rails.
- **Mass = effective density, not aluminium.** Profiles are hollow; a solid
  box at 2.7e-6 kg/mm³ overstates mass ~2×. Give each profile family its own
  `Material` with `density = kg_per_m / (A_nominal_mm² × 1000)` from the
  catalog kg/m (3030 ≈ 1.0 kg/m → 1.11e-6). Say in "Předpoklady" that BOM
  mass comes from catalog kg/m — the `Shape.volume` cross-check then
  verifies geometry, not weight.
- **Joints** — pick per joint, mixing is normal:
  - corner bracket ("rohový úhelník") + T-nut — the default:
    furniture-strength, re-adjustable, visible;
  - end bolt into the profile core ("čelní spoj") — hidden and stiff: tap
    the core (2020 → M5, 3030/4040 → M8) and drill an access hole in the
    adjoining profile — model that hole and dimension it; it is the only
    machining beyond cutting;
  - T-nut type decides assembly ORDER: slide-in nuts ("posuvné matice")
    must enter the slot BEFORE the frame closes — the make plan counts them
    per slot; drop-in/hammer-head nuts ("kladívkové matice") are the
    after-the-fact rescue;
  - 3D-printed connectors, feet, caps and panel clips for light duty —
    orient the print so shear does not run along layers, allow ~0.2–0.4 mm
    slot clearance, and keep them out of the primary load path of a loaded
    shelf. Never let two features of a printed part meet at a face or an
    edge only ("nožová hrana" — weak in plastic AND a CSG mess): embed the
    mating feature a few mm into its base plate, or overlap 0.3–0.5 mm.
- **Drawings** — an assembly sheet with balloons + `parts_table` (catalog
  hardware gets no part drawings), a member cut table (position, profile,
  length), and a drilling sheet per machined profile (access holes, tapped
  cores — from one datum). Don't dimension catalog cross-sections; name the
  system instead. A tilt reads ONLY in a true side ortho view — perspective
  3/4 shots hide it entirely; give every tilted design one.
- **BOM + cut plan** — mostly PURCHASED rows: exact catalog part numbers
  (system and slot size in the name!), nuts counted per joint plus spares.
  cutlist.py: `Bar(6000)` (hobby 3000) with kerf ~3 mm when self-cutting;
  supplier cut-to-length ⇒ profiles go to `NO_STOCK` ("řeže dodavatel na
  míru") and the member table carries the exact lengths.
- **Make plan** — cut/order lengths → deburr ("srazit hrany, vyfoukat
  třísky") → tap cores, drill access holes → insert slide-in nuts per the
  counted plan → bolt loose → square on a flat surface ("úhlopříčky") →
  torque; joints that see vibration get a medium-strength thread-locker
  ("lepidlo na závity", e.g. Loctite 243); panels and shelf boards last.
- **Analysis** — mandatory for shelving. Shelf-beam deflection with
  E = 70 GPa (⅓ of steel — the same section sags 3× more than "jäkl") and
  catalog Ix/Iy, never the solid-box value; tip-over via the `Stability`
  block from `model.mass_properties()`. Bolted joints are semi-rigid — a
  tall or slender rack needs bracing against racking ("kosení"): a diagonal,
  a back panel captured in the slots, or wall anchoring; the joint-stiffness
  assumption belongs in "Předpoklady".

## Materials & suppliers (CZ)

Profiles come anodized ("elox") — there is no finishing stage; fill the
build sheet's `{{SEKCE_FINALIZACE}}` slot with "Dokončení" and cover
deburring, slot/corner caps ("krytky drážek") and levelling feet
("nivelační patky") there. Suppliers a BOM may name: Alutec K&K (Czech
maker, cuts to length), item24, Haberkorn (Bosch Rexroth); hobby 2020
V-slot from 3D-printing e-shops. Shelf boards per the woodworking playbook.
Leave prices per project.

## Last mile

The user orders profiles cut to length from the member table and hardware by
the BOM part numbers, then works at the bench: machining first (taps, access
holes), slide-in nuts counted in before closing, squaring before torquing.
Re-adjustability is the system's selling point — the plan says which joints
stay loosenable and which get the thread-locker.

## Safety gates

The agent never starts any machine. Build sheet must warn: aluminium cutting
needs a non-ferrous blade ("kotouč na neželezné kovy", wax/WD-40 as
lubricant) — NEVER an abrasive cut-off wheel ("rozbrušovačka": the disc
loads up with aluminium and can grab or shatter); chips and cut edges are razor
sharp; a loaded shelf taller than ~1200 mm must be anchored to the wall
(tip-over — children climb shelves); state the honest per-shelf load rating
including the joint type it assumes.
