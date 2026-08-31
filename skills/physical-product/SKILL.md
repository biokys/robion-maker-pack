---
name: physical-product
description: "Design a complete physical product end-to-end — furniture and joinery, welded steel frames, aluminium T-slot structures, 3D prints, laser-cut and sheet-metal parts, CNC-routed parts, electronics with a PCB, sewn and leather goods, van build-outs, fitness gear, animal housing, upholstered pieces, aquarium stands: parametric model or cutting pattern, dimensioned production drawings, photoreal renders, BOM, cut plans (bar/sheet nesting, bend development), assembly & finishing plan, strength/modal analysis (FEA), and a published build sheet in the user's own language. Triggers on requests IN ANY LANGUAGE to design, build or make: a table, shelf, bracket, enclosure, box, gate, fence, rack, frame, stand, fixture, sewing pattern, bag, apron, wallet, camper conversion, pull-up bar, plyo box, beehive, chicken coop, rabbit hutch, nest box, upholstered bench, aquarium stand, sheet-metal case; also: production drawing, BOM, cutting plan, bend development, strength calculation, natural frequency, welded structure, T-slot/V-slot structure, parametric 3D model, build sheet, technical drawing, FEA."
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

**Language rule.** This pack is English and language-neutral by design; the
product it produces is not. Work out the user's language from how they write
to you (`language:` in the workshop profile overrides it), then:

- **Deliverables in the user's language** — build sheet, README, drawing text
  and title blocks, BOM and cut-plan tables, assembly steps, safety warnings,
  dialogue. Use the vocabulary a workshop in that language actually speaks,
  not a word-by-word translation of the English term: trade names for stock,
  joints and operations differ from dictionary equivalents, and a literal
  translation reads foreign to the person holding the drawing.
- **Everything else in English** — code, comments, identifiers, commit
  messages, file names, and this pack itself.
- **Localize once, at scaffold time.** Templates ship English user-facing
  strings tagged `L10N:`; `make l10n` lists every one. Translate them right
  after copying the templates, before the first `make` — a half-translated
  build sheet is worse than an English one.
- **Market facts are not translation.** Suppliers, stock sizes actually sold,
  standards and currency belong to the user's market, not to the pack: take
  them from the workshop profile or ask. Never invent a supplier or a price.

## 1 · Intake

**Workshop profile first:** read `~/.robion/workshop.yaml` before asking
anything — it answers machines, tools and materials once for all projects.
Missing file ⇒ run the one-time workshop interview and create it:
[references/core/workshop-profile.md](references/core/workshop-profile.md).

Then ask what the profile can't know (batched, in the user's language) — but
never stall: if the user can't answer, assume a sensible value and record it
in the build sheet's assumptions section:

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
| a welded or bolted steel frame — gate, fence, rack, stand, bracket | [verticals/metalwork.md](references/verticals/metalwork.md) |
| a frame bolted from aluminium T-slot extrusions — shelving, stand, machine frame | [verticals/aluminum-profiles.md](references/verticals/aluminum-profiles.md) |
| a 3D-printed part or enclosure | [verticals/3d-print.md](references/verticals/3d-print.md) |
| flat parts laser-cut from plywood/acrylic/steel | [verticals/laser.md](references/verticals/laser.md) |
| flat parts machined on a CNC router | [verticals/cnc-router.md](references/verticals/cnc-router.md) |
| contains a PCB / electronics | [verticals/electronics.md](references/verticals/electronics.md) |
| sewn from fabric or canvas — bag, apron, cover, simple garment | [verticals/sewing.md](references/verticals/sewing.md) |
| cut & stitched from leather — wallet, belt, pouch, bag | [verticals/leather-goods.md](references/verticals/leather-goods.md) |
| furniture built into a vehicle — camper module, van build-out | [verticals/van-conversion.md](references/verticals/van-conversion.md) |
| training gear carrying a moving human — pull-up bar, plyo box, rack | [verticals/fitness-equipment.md](references/verticals/fitness-equipment.md) |
| housing for animals — beehive, chicken coop, rabbit hutch, nest box | [verticals/animal-housing.md](references/verticals/animal-housing.md) |
| padded & covered furniture — upholstered bench, seat pads, pet bed | [verticals/upholstery.md](references/verticals/upholstery.md) |
| a stand, cabinet or hood for an aquarium/terrarium | [verticals/aquarium-terrarium.md](references/verticals/aquarium-terrarium.md) |
| thin-sheet parts with straight bends — sheet-metal case, cover, bracket | [verticals/sheet-metal.md](references/verticals/sheet-metal.md) |

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

New project: `git init` first (design iterations, retro and template
migrations all lean on the history — a project without it can't answer
"what changed"), then copy `templates/common/` plus the chosen stack's
`templates/<stack>/` files flat into the repo root, **rename `[project].name`
in pyproject.toml to the product slug**, **run `make l10n` and translate every
listed string into the user's language** (the templates ship English — see the
Language rule), fill the `{{PACK_VERSION}}` stamp in
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
| 4 | **BOM + cut plan** | bill of materials, cutting plan / marker layout | masses & consumption cross-checked |
| 5 | **Make plan** | numbered assembly/sewing/welding steps + finishing schedule | ordered so it's actually executable |
| 6 | **Analysis** (when load-bearing) | analytic estimates first, FEA to verify | sanity checks pass before numbers reach the user |
| 7 | **Build sheet** | build sheet per [core/buildsheet.md](references/core/buildsheet.md) | user approves; mirror into README |

**Robion cockpit — build it unprompted.** When the `set_controls` MCP tool
exists, the cockpit is part of stage 1, not an optional extra (read
`controls_help` first):

- `param: true` sliders **named exactly after the parameters in the model
  script** — the viewport and every run-button then receive them as
  `ROBION_PARAMS` automatically.
- Solids: `viewport: {path: 'model.py'}` — the live 3D; sliders re-render it in
  ~0.4 s. Patterns2d: no live viewport — `image` tiles of `out/layout.png` and
  `out/pieces/*.png` plus a `{kind:'run', command:'make previews'}` button
  that re-renders them after slider changes.
- A hero button: `{kind:'run', command:'make viz', output:'out/viz_hero.png',
  autoClose: true}` — Blender photoreal on solids, a flat parametric
  illustration (viz.py) on patterns2d.
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
Keep the dialogue in the user's language, short iterations, one proposal at a time.
Record design decisions in the project README; record newly discovered tool gotchas
in the project CLAUDE.md ("Gotchas learned here").

## 8 · Degrade & uncertainty

Missing tool ⇒ skip that stage gracefully and say so in the build sheet (the
sentence to localize per tool is in
[references/core/toolchain.md](references/core/toolchain.md)). Never install
system packages (brew) without asking. The build sheet always ends with an
assumptions & uncertainties section listing every assumption made.

## 9 · Retrospective (end of project)

After the user approves the build sheet, write `RETRO.md` into the project:
what worked, what ground (ordered by severity), and every gotcha already
recorded in the project CLAUDE.md. Then offer to turn the findings into pack
patches — templates, stack recipes, and vertical playbooks improve only
through this loop (MIGRATIONS.md in the pack repo tracks what changed between
versions for running projects). Vertical lessons with no playbook yet ⇒
propose one from [verticals/_template.md](references/verticals/_template.md).
