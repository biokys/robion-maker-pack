# Workshop profile — what the maker can make with

One file answers "what machines, tools and materials does this user have" for
every project, so intake never asks the same questions twice:

```
~/.robion/workshop.yaml
```

## Rules

- **Read it first.** At intake, read the file before asking anything; ask only
  what it doesn't answer for *this* project.
- **Create it on first contact.** If the file is missing, run the workshop
  interview once (batched questions, user's language), write the file, and show
  it to the user for confirmation. In Robion you may instead build the interview
  as a one-time controls page (toggles/selects via `set_controls`) — same file
  either way.
- **Never invent inventory.** Anything the user did not state stays out of the
  file; per-project assumptions belong in that project's assumptions section,
  not here.
- **Offer updates, don't silently write.** When the user mentions a new machine,
  tool or material mid-conversation ("I bought a router"), offer to update the
  profile; keep `updated:` current.
- **Per-project deviations stay in the project.** A borrowed tool or one-off
  material goes into the project brief/README, not into the profile.
- The file is the user's: hand-edits are expected, unknown extra keys must
  survive round-trips, comments are welcome.
- **Structure in English, content in the user's language.** Keys, units and
  numbers are the standard (`machines`, `bed_mm`, millimetres, `null`) — that is
  what tools may ever parse. Free-text values (tool names, materials, notes)
  stay in the user's own words: never translate them to English "for
  consistency", and never force English terms on the user. The reader is a
  language model; it understands the user's language. The example below is
  English because the pack is; a real profile is written however its owner
  speaks.
- **This file carries the market, not just the workshop.** `language` and
  `suppliers` are what make deliverables local — stock sizes actually sold,
  vendors, currency and standards differ per country and cannot be derived by
  translating English. Playbooks deliberately name no vendors; they come from
  here or from asking the user.

## Schema by example

All dimensions in millimetres. `null` means "doesn't have one"; a missing key
means "not asked yet".

```yaml
# ~/.robion/workshop.yaml — what I can make with. Edit freely.
updated: 2026-08-29

# Deliverables (build sheet, drawings, BOM) are written in this language;
# market defaults (stock sizes, standards, currency) follow the country.
language: cs
country: CZ
currency: CZK

machines:
  printer:
    name: Prusa MK4S
    bed_mm: [250, 210, 220]
    nozzle_mm: 0.4
    materials: [PLA, PETG]
  laser: null
  cnc: null
  sewing:
    name: Veritas Rubina 1290
    features: [zigzag, buttonhole]
    needles: [universal 80, jeans 100]
  overlock: null

tools:
  - track saw
  - router
  - drill press
  - random-orbit sander

materials_on_hand:
  - { name: "oak edge-glued panel 18 mm", size_mm: [2000, 600, 18], qty: 2 }
  - { name: "steel sheet 3 mm", size_mm: [500, 500, 3], qty: 1 }
  # fabrics: 2D size [length, width] — the width drives the marker
  - { name: "canvas 340 g/m², sand", size_mm: [3000, 1400], qty: 1 }

fasteners_on_hand: [screws 4×40, dowels 8 mm, PU glue]

# the sewing analog of fasteners
notions_on_hand: [polyester thread, zip 40 cm, PP webbing 25 mm]

# Where this user actually buys — playbooks name no vendors, they come
# from here. Never invent an entry.
suppliers:
  steel: [Ferona]
  wood: [local timber merchant]
  fabric: []

workshop:
  space: "garage, 2 m bench"
  finishing_available: [hard wax oil, oil stain]
  no_go: [welding, powder coating]

skill_level: advanced hobby    # drives joinery & process choices

notes: |
  No clamp longer than 60 cm — long glue-ups need another approach.
```

The free-text values above are English only because this pack is. A real
profile uses its owner's own words and their local trade names for stock —
that is the point of the structure/content split, and those names are what
the BOM and the build sheet should echo back.

## The interview (first contact)

Batch these, in the user's language; accept "don't know / don't have" freely:

1. Machines: 3D printer (which, bed, nozzle, materials)? Laser (bed, power)?
   CNC (envelope)? Sewing machine (which, zigzag/buttonhole, needles) and
   overlock? Anything else that runs G-code?
2. Tools: what's actually in the workshop — saws, router, drill press, sanders,
   clamps; what is explicitly missing or off-limits (`no_go`).
3. Materials & fasteners on hand worth using up (stock sizes matter most —
   for fabrics the usable width); notions stash for sewn goods.
4. Space & finishing options; skill level and appetite (quick builds vs fine
   joinery).
5. Language for deliverables and the country they are built in — plus the
   vendors they actually buy from, if they want them named in the BOM.

How the profile drives decisions: joints are chosen from `tools` (no domino →
dowels or pocket screws), stock sizes seed the parameters block, `no_go` blocks
whole approaches, printer/laser/cnc presence decides which "make it" stage the
project even offers, and overlock presence picks the seam finishes (overlock
vs zigzag vs French seam) in a sewing plan.
