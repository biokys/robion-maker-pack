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
  file; per-project assumptions belong in that project's "Předpoklady" section,
  not here.
- **Offer updates, don't silently write.** When the user mentions a new machine,
  tool or material mid-conversation ("koupil jsem frézku"), offer to update the
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
  language model; it understands the user's language.

## Schema by example

All dimensions in millimetres. `null` means "doesn't have one"; a missing key
means "not asked yet".

```yaml
# ~/.robion/workshop.yaml — what I can make with. Edit freely.
updated: 2026-08-29

machines:
  printer:
    name: Prusa MK4S
    bed_mm: [250, 210, 220]
    nozzle_mm: 0.4
    materials: [PLA, PETG]
  laser: null
  cnc: null

tools:
  - okružní pila s vodicí lištou
  - horní frézka
  - stojanová vrtačka
  - excentrická bruska

materials_on_hand:
  - { name: "spárovka dub 18 mm", size_mm: [2000, 600, 18], qty: 2 }
  - { name: "ocelový plech 3 mm", size_mm: [500, 500, 3], qty: 1 }

fasteners_on_hand: [vruty 4×40, kolíky 8 mm, PU lepidlo]

workshop:
  space: "garáž, pracovní stůl 2 m"
  finishing_available: [tvrdý voskový olej, olejové mořidlo]
  no_go: [svařování, komaxit]

skill_level: pokročilý hobby    # drives joinery & process choices

notes: |
  Nemám svěrku delší než 60 cm — dlouhé lepené spoje řešit jinak.
```

## The interview (first contact)

Batch these, in the user's language; accept "nevím / nemám" freely:

1. Machines: 3D printer (which, bed, nozzle, materials)? Laser (bed, power)?
   CNC (envelope)? Anything else that runs G-code?
2. Tools: what's actually in the workshop — saws, router, drill press, sanders,
   clamps; what is explicitly missing or off-limits (`no_go`).
3. Materials & fasteners on hand worth using up (stock sizes matter most).
4. Space & finishing options; skill level and appetite (quick builds vs fine
   joinery).

How the profile drives decisions: joints are chosen from `tools` (no domino →
dowels or pocket screws), stock sizes seed the parameters block, `no_go` blocks
whole approaches, printer/laser/cnc presence decides which "make it" stage the
project even offers.
