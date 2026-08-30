---
name: physical-product
description: "Design a complete physical product end-to-end — furniture and joinery, welded metal frames, 3D prints, laser-cut and sheet-metal parts, CNC-routed parts, electronics with a PCB, sewn and leather goods, van build-outs, fitness gear, animal housing, upholstered pieces, aquarium stands: parametric model or cutting pattern, dimensioned production drawings, photoreal renders, BOM/kusovník, cut plans (nářezový plán, rozvin), assembly & finishing plan, strength/modal analysis (FEA), and a published Czech build sheet (výrobní list). Triggers on: navrhni mi (stolek, poličku, držák, krabičku, bránu, plot, regál, konstrukci, střih, tašku, zástěru, peněženku, vestavbu do dodávky, hrazdu, plyo box, úl, kurník, králíkárnu, budku, čalouněnou lavici, stolek pod akvárium, krabičku z plechu), výrobní výkres, kusovník, nářezový plán, rozvin plechu, pevnostní výpočet, vlastní frekvence, svařovaná konstrukce, design a bracket/enclosure/table/gate/rack/fixture, sewing pattern, leather wallet, parametric 3D model, build sheet, BOM, technical drawing, FEA."
---

# Physical Product

Guide the design of a complete physical product from idea to a
manufacturing-ready package. Every project, whatever the vertical, walks the
same spine: **a parametric source of truth → derived artifacts (visuals,
drawings/patterns, BOM, plans) → verification → gates → a build sheet the user
makes the thing from.** Changing one parameter must reflow everything.

The skill is layered — load only what the project needs:

- **This file** — the spine: intake, routing, stages, gates, habits.
- **`references/verticals/`** — playbooks: WHAT is being made (wood, metal,
  print, laser, CNC, electronics, sewing). Read after routing; they refine
  stages, never replace the spine.
- **`references/stacks/`** — recipes: HOW artifacts get produced (solids =
  build123d, patterns2d = 2D cutting patterns, pcb = KiCad).
- **`references/core/`** — shared conventions (workshop profile, toolchain &
  degrade, build sheet).

**Language rule:** all user-facing deliverables (build sheet, README, drawings
text, BOM, dialogue) in the user's language — the templates in this pack show
Czech. Code, comments, commit messages and file names in English.

## 1 · Intake

**Workshop profile first:** read `~/.robion/workshop.yaml` before asking
anything — it answers machines, tools and materials once for all projects.
Missing file ⇒ run the one-time workshop interview and create it:
[references/core/workshop-profile.md](references/core/workshop-profile.md).

Then ask what the profile can't know (batched, in the user's language) — but
never stall: if the user can't answer, assume a sensible value and record it
under "Předpoklady":

- Function and load case: what does it carry/do, worst realistic load, static or
  dynamic (vibration source nearby?).
- Dimensions: which are fixed (space constraints, stock material on hand) vs derived.
- Materials for THIS project beyond what the profile lists (stock on hand matters
  most).
- Manufacturing reality beyond the profile: who makes the parts the user can't —
  and anything borrowed or one-off for this build.
- Aesthetic reference (photo) if looks matter.
- Electronics inside? → PCB stage applies.
- Depth wanted: quick concept vs full package with FEA.

## 2 · Vertical routing

Decide what kind of thing is being made and read the matching playbook(s)
BEFORE modeling. Real products often cross verticals (an enclosure = print +
electronics; a gate = metal frame + wood infill) — read every playbook that
applies and compose; the spine stays single.

| The product is… | Playbook |
|---|---|
| furniture, shelving, joinery — solid wood / sheet goods | [verticals/woodworking.md](references/verticals/woodworking.md) |
| a welded or bolted metal frame — gate, fence, rack, stand, bracket | [verticals/metalwork.md](references/verticals/metalwork.md) |
| a 3D-printed part or enclosure | [verticals/3d-print.md](references/verticals/3d-print.md) |
| flat parts laser-cut from plywood/acrylic/steel | [verticals/laser.md](references/verticals/laser.md) |
| flat parts machined on a CNC router | [verticals/cnc-router.md](references/verticals/cnc-router.md) |
| contains a PCB / electronics | [verticals/electronics.md](references/verticals/electronics.md) |
| sewn from fabric or canvas — bag, apron, cover, simple garment | [verticals/sewing.md](references/verticals/sewing.md) |
| cut & stitched from leather — wallet, belt, pouch, bag | [verticals/leather-goods.md](references/verticals/leather-goods.md) |
| furniture built into a vehicle — vestavba, camper module | [verticals/van-conversion.md](references/verticals/van-conversion.md) |
| training gear carrying a moving human — hrazda, plyo box, stojan | [verticals/fitness-equipment.md](references/verticals/fitness-equipment.md) |
| housing for animals — úl, kurník, králíkárna, budka | [verticals/animal-housing.md](references/verticals/animal-housing.md) |
| padded & covered furniture — čalouněná lavice, sedáky, pelíšek | [verticals/upholstery.md](references/verticals/upholstery.md) |
| a stand, cabinet or hood for an aquarium/terrarium | [verticals/aquarium-terrarium.md](references/verticals/aquarium-terrarium.md) |
| thin-sheet parts with straight bends — krabička z plechu, kryt, držák | [verticals/sheet-metal.md](references/verticals/sheet-metal.md) |

No row matches ⇒ run the spine bare — it is complete by itself. If the project
taught vertical-specific lessons, propose a new playbook at retrospective time
([verticals/_template.md](references/verticals/_template.md) defines the anatomy).

## 3 · Stack decision

The stack is chosen by the product's source-of-truth geometry, not by the
vertical:

- **solids** (default) — build123d parametric solids; OpenSCAD only as a
  narrow fallback: [stacks/solids.md](references/stacks/solids.md).
- **patterns2d** — flat pieces cut from flexible sheet goods (fabric, leather,
  foam): [stacks/patterns2d.md](references/stacks/patterns2d.md).
- **pcb** — KiCad, iff the product contains electronics; coexists with the
  solids stack (board STEP → enclosure fit): [stacks/pcb.md](references/stacks/pcb.md).

## 4 · Scaffold & bootstrap

New project: copy `templates/common/` plus the chosen stack's
`templates/<stack>/` files flat into the repo root, **rename `[project].name`
in pyproject.toml to the product slug**, fill the `{{PACK_VERSION}}` stamp in
CLAUDE.md with the installed pack version (it tells future sessions which
template vintage the project has — see MIGRATIONS.md in the pack), run
`uv sync`, then `make doctor` to see which tools exist. A project combining
TWO template stacks (e.g. a solids frame with patterns2d covers) keeps the
primary stack at the root and scaffolds the secondary into a subdirectory
with its own pyproject/Makefile — the convention is defined in
[verticals/upholstery.md](references/verticals/upholstery.md); the build
sheet stays one. Stack-specific
bootstrap steps (fonts, extras) and the canonical `out/` layout are listed in
the stack recipe. Environment specifics and the degrade matrix when tools are
missing: [references/core/toolchain.md](references/core/toolchain.md).

## 5 · Stage pipeline

Run stages in order; each has a gate. Skipping a stage is fine when the user
says so — note it in the build sheet. Concrete commands live in the stack
recipe ([solids](references/stacks/solids.md),
[patterns2d](references/stacks/patterns2d.md)); the vertical playbook refines
what each stage must cover.

| # | Stage | Deliverable | Gate |
|---|---|---|---|
| 1 | **Model** | parametric source of truth (`model.py` / `pattern.py`) | user approves the live geometry |
| 2 | **See it** | live viewport / rendered previews | user approves proportions |
| 3 | **Drawings / pattern sheets** | dimensioned drawings or 1:1 pattern pages | every PNG Read and checked before the user sees it |
| 4 | **BOM + cut plan** | kusovník, nářezový plán / marker layout | masses & consumption cross-checked |
| 5 | **Make plan** | numbered Czech assembly/sewing/welding steps + finishing schedule | ordered so it's actually executable |
| 6 | **Analysis** (when load-bearing) | analytic estimates first, FEA to verify | sanity checks pass before numbers reach the user |
| 7 | **Build sheet** | Czech výrobní list per [core/buildsheet.md](references/core/buildsheet.md) | user approves; mirror into README |

**Robion cockpit — build it unprompted.** When the `set_controls` MCP tool
exists, the cockpit is part of stage 1, not an optional extra (read
`controls_help` first):

- `param: true` sliders **named exactly after the parameters in the model
  script** — the viewport and every run-button then receive them as
  `ROBION_PARAMS` automatically.
- Solids: `viewport: {path: 'model.py'}` — the live 3D; sliders re-render it in
  ~0.4 s. Patterns2d: `image` tiles of `out/layout.svg` and the piece SVGs —
  they refresh whenever a run-button regenerates them.
- A photoreal button (solids): `{kind:'run', command:'make viz',
  output:'out/viz_hero.png', autoClose: true}`.
- `image` tiles for renders, drawings, cut plans — they refresh on their own
  whenever the files are regenerated.
- A `set` preset button restoring the defaults.

Keep the cockpit current as stages advance (BOM stage: a shopping `checklist`;
plans: image tiles of the sheets). No `set_controls` tool (a bare terminal) ⇒
skip silently, never mention it.

## 6 · Verification habits (non-negotiable)

- Parameters single source of truth; derived values computed, never retyped; asserts
  guard impossible geometry. Changing one parameter must reflow everything.
- Every visual output (drawing, pattern sheet, render) is rendered to PNG and
  **looked at** with the Read tool before the user sees it.
- BOM masses and material consumption come from the parametric computation,
  cross-checked against an independent measure (`Shape.volume`, layout area).
- Analysis numbers pass the sanity checklist (reactions, rigid-body modes,
  hand-estimate agreement) before being reported.
- Stack-specific traps (Blender exit codes, projection residuals) are listed in
  the stack recipes — read them before the relevant stage.

## 7 · Iteration protocol

User feedback → change parameters (never hardcode inside builders) → `make` → show.
Keep the dialogue in Czech, short iterations, one nástřel at a time. Record design
decisions in the project README; record newly discovered tool gotchas in the project
CLAUDE.md ("Gotchas learned here").

## 8 · Degrade & uncertainty

Missing tool ⇒ skip that stage gracefully and say so in the build sheet (exact Czech
sentences in [references/core/toolchain.md](references/core/toolchain.md)). Never install
system packages (brew) without asking. The build sheet always ends with a
"Předpoklady a nejistoty" section listing every assumption made.

## 9 · Retrospective (end of project)

After the user approves the build sheet, write `RETRO.md` into the project:
what worked, what ground (ordered by severity), and every gotcha already
recorded in the project CLAUDE.md. Then offer to turn the findings into pack
patches — templates, stack recipes, and vertical playbooks improve only
through this loop (MIGRATIONS.md in the pack repo tracks what changed between
versions for running projects). Vertical lessons with no playbook yet ⇒
propose one from [verticals/_template.md](references/verticals/_template.md).
