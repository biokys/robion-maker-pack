# Animal housing playbook — hives, coops, hutches, nest boxes

## When this applies

Beehives ("úl"), chicken coops ("kurník"), rabbit hutches ("králíkárna"),
bird nest boxes ("budka"), insect hotels. Woodworking with animal-driven
constraints — dimensions come from the animal, not the user. Out of scope:
large livestock structures (stables) and anything under farm-subsidy/
veterinary regulation — say so.

## Intake additions

- Which animal, how many, and the local predator situation (kuna/liška
  change the mesh and skirt requirements).
- **Beehives: the frame system decides everything** — ask which "rámková
  míra" the user runs (in CZ commonly 39×24, 39×17, or Langstroth) and
  whether boxes must interoperate with existing equipment. Never mix
  systems silently.
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
  frame rests ("ozuby").
- **BOM + cut plan** — palubky/prkna, OSB only where dry, mesh as
  engineering item: welded galvanized mesh for predator surfaces (kuna
  defeats light hexagonal netting), buried skirt 30–40 cm against digging.
- **Make plan** — finish rule: **no pressure-treated or biocide-treated
  wood, paint or preservative on surfaces animals touch, gnaw or that face
  the hive interior** — inside stays bare; weather protection (linseed oil,
  paint) belongs on the OUTSIDE only. Roofs actually waterproof (lepenka/
  plech), sloped away from entrances.
- **Analysis** — none beyond common sense; snow load on big coop roofs gets
  an analytic glance.

## Materials & suppliers (CZ)

Smrk/borovice palubky a prkna, střešní lepenka or pozink plech, svařované
pozinkované pletivo. Suppliers per woodworking + zemědělské potřeby for
mesh and hardware cloth; beekeeping dims cross-checked against the user's
existing equipment, not catalogs. Leave prices per project.

## Last mile

Standard woodworking build; for hives, a dry-fit with the user's actual
frames before finishing is the gate that matters (frame rest depth and bee
space verified with a caliper).

## Safety gates

No machines beyond woodworking's. Build sheet must warn about: treated-wood
ban above (animal health), galvanized cut edges are sharp, and for hives —
paint fumes must be fully cured before bees move in.
