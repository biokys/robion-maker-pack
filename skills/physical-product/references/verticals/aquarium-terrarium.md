# Aquarium & terrarium playbook — stands, covers and cabinets for tanks

## When this applies

Stands ("stolek pod akvárium"), cabinets, covers/hoods with lighting, and
terrarium/vivarium enclosures. The tank itself is BOUGHT — this playbook
never designs the glass vessel; that boundary goes in the build sheet.
Composes with woodworking (cabinet), metalwork (welded stand frames — often
the better answer above ~200 l), electronics (lighting controllers).

## Intake additions

- Tank: exact footprint, rimmed or rimless (drives support type), volume.
- **Real load**: water ≈ volume in kg, plus glass, substrate and hardscape —
  ask what goes in; rock-heavy scapes add a lot. Compute the total, show it,
  and design to it with margin; never design to "volume" alone.
- Floor under the stand (a loaded big tank may need the FLOOR checked — flag
  it for large volumes, that's a building question, not furniture).
- Humidity level around it (splashes, terrarium misting) → finishes.

## Stack & stage refinements

Stack: **solids**; frame per [metalwork.md](metalwork.md) or cabinet per
[woodworking.md](woodworking.md).

- **Model** — the non-negotiable geometry rule: the top supports the tank
  the way the tank requires — rimmed tanks bear on the RIM (perimeter fully
  supported, no point contacts), rimless tanks bear FULL AREA on a flat top
  plus a foam mat (XPS/PE podložka). Adjustable feet ("stavitelné nohy")
  for levelling — an out-of-level tank loads glass unevenly. Design doors
  around filter/bucket access (maintenance is weekly, make it a gate
  question).
- **Drawings** — standard; the top-flatness requirement stated as a note.
- **BOM + cut plan** — moisture-resistant choices: plywood over raw MDF,
  edges sealed, waterproof finish (2K paint / yacht varnish class) — water
  WILL run down the sides eventually. Feet, foam mat, cable glands for the
  hood.
- **Make plan** — build, seal EVERY edge and hole (water finds end grain),
  level the stand with the feet BEFORE filling, fill test in steps (part
  fill → check level and deflection → continue). Electrics: every cable
  gets a **drip loop** below its socket — the classic aquarium electrical
  rule; sockets never below tank waterline height.
- **Analysis** — MANDATORY. Analytic: top deflection under full load and
  leg/frame stress; FEA to verify anything slender or welded. Playbook's
  conservative default target, stated as an assumption in the build sheet:
  top deflection under full load ≲ 0.5 mm — glass hates twisting supports.
  Include the mass total in the build sheet next to the safety factor.

## Materials & suppliers (CZ)

Jäkl frames per metalwork (Ferona), překližka/lamino per woodworking, XPS
podložka, stavitelné nohy from spojovací technika/hobbymarket. Leave prices
per project.

## Last mile

Build, seal, level, then the stepped fill test with a spirit level on the
rim — the fill test is the gate before livestock, and it happens with the
tank in its final position (moving a filled tank is not a thing).

## Safety gates

The agent never signs off the floor's capacity for very large tanks —
recommend a structural check and say the threshold reasoning. Warn about:
water + electricity (drip loops, RCD/proudový chránič recommended), tip
hazard for tall terrariums (anchor to wall), and that the stand is designed
for THIS tank's stated load — a bigger tank later needs a re-check.
