# Animal housing playbook — hives, coops, hutches, nest boxes

## When this applies

Beehives, chicken coops, rabbit hutches, bird nest boxes, insect hotels.
Woodworking with animal-driven constraints — dimensions come from the animal,
not the user. Out of scope: large livestock structures (stables) and anything
under farm-subsidy/veterinary regulation — say so.

## Intake additions

- Which animal, how many, and the local predator situation (marten, fox,
  raccoon change the mesh and skirt requirements).
- **Beehives: the frame system decides everything** — ask which frame size
  the user runs (Langstroth, Dadant, or a regional standard such as 39×24
  or 39×17) and whether boxes must interoperate with existing equipment.
  Never mix systems silently.
- Cleaning access: how the user wants to clean it drives doors, trays and
  roof design more than anything else.

## Stack & stage refinements

Stack: **solids**, refining [woodworking.md](woodworking.md).

- **Model** — parametrize on the animal standard: hive box inner dims derive
  from frame measure + **bee space (6–9 mm)** on all frame faces — violate
  it and bees glue or comb the gap; keep the bee-space assert in model.py.
  Coops: floor area per hen (≈ 3–4 hens/m² inside as the playbook's
  guidance), roosts HIGHER than nest boxes (else they sleep in the nests),
  nest box ≈ 30×30×30 cm per 3–4 hens, ventilation openings above roost
  height (air exchange without draft at bird level). Hutches: raised floor,
  gnawable edges get metal edging. Nest boxes: entry-hole diameter is
  species-specific (≈ 26–34 mm for common songbirds) — make it a parameter
  and name the species in the build sheet.
- **Drawings** — standard woodworking; 1:1 templates for entry holes and
  frame rests (the rebate the frame lugs hang on).
- **BOM + cut plan** — tongue-and-groove or plain boards, OSB only where
  dry, mesh as engineering item: welded galvanized mesh for predator
  surfaces (a marten defeats light hexagonal netting), buried skirt
  30–40 cm against digging.
- **Make plan** — finish rule: **no pressure-treated or biocide-treated
  wood, paint or preservative on surfaces animals touch, gnaw or that face
  the hive interior** — inside stays bare; weather protection (linseed oil,
  paint) belongs on the OUTSIDE only. Roofs actually waterproof (roofing
  felt or sheet metal), sloped away from entrances.
- **Analysis** — none beyond common sense; snow load on big coop roofs gets
  an analytic glance.

## Materials & stock

Spruce or pine boards (tongue-and-groove and plain), roofing felt or
galvanized sheet for roofs, welded galvanized mesh (hardware cloth) for
predator surfaces. Timber per the woodworking playbook; mesh and hardware
cloth from an agricultural supplier. Beekeeping dimensions get cross-checked
against the user's existing equipment, not catalogs. Name vendors from the
user's own market — the workshop profile may name preferred suppliers; never
invent a supplier or a price. Leave prices per project.

## Last mile

Standard woodworking build; for hives, a dry-fit with the user's actual
frames before finishing is the gate that matters (frame rest depth and bee
space verified with a caliper).

## Safety gates

No machines beyond woodworking's. Build sheet must warn about: treated-wood
ban above (animal health), galvanized cut edges are sharp, and for hives —
paint fumes must be fully cured before bees move in.
