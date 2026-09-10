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
- **`references/core/`** — shared conventions (workshop profile, design record,
  toolchain & degrade, build sheet, fit partners = real dimensions of what the
  product mates with).

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

## 1 · Intake = brief analysis, then a question round (mandatory gate)

**Workshop profile first:** read `~/.robion/workshop.yaml` before asking
anything — it answers machines, tools and materials once for all projects.
Missing file ⇒ run the one-time workshop interview and create it:
[references/core/workshop-profile.md](references/core/workshop-profile.md).

**Design record second:** the project keeps its memory in `design.json` —
idea, spec, every answer and who decided it, the chosen concept, the state of
each stage, every change after a gate. It is written only by
`design_record.py` (copied from the pack's `templates/common/` as the project's
first file): one call per move, the script stamps the clock, keeps the record
valid and commits every gate. Never edit `design.json` by hand. Before every
stop-and-wait the waiting stage is `needs_you`, while you produce one it is
`working`, after approval `done`; Robion draws the map of stages from it.
Rules, commands, the brief panel:
[references/core/design-record.md](references/core/design-record.md).

Then STOP before any geometry. Three steps, dialogue in the user's language:

1. **Brief analysis** — reading only (the profile, the playbooks); the only
   files this step writes are the record and its script: restate the request
   as a spec — function, users, must-haves, constraints, what the brief leaves
   open. Route the vertical(s) now (§2; electronics inside ⇒ the pcb stack
   applies) so each playbook's *Intake additions* join the question round.
   Post the spec, copy `templates/common/design_record.py` and `.gitignore`
   into the working directory, then
   `python3 design_record.py init --name … --slug … --language … --idea "…"
   --summary "…" --verticals … --stack … --label brief=… …` — it writes the
   record with `idea` done, `brief` needs_you (you are about to wait for the
   answers) and the rest `pending`, and makes the first commit.
2. **Question round** — ask everything the spec leaves open, batched into
   groups, each question with a recommended default so the user can answer
   "ok" per group. The generic groups:
   - function and load case: what it carries/does, worst realistic load,
     static or dynamic (vibration source nearby?);
   - dimensions: which are fixed (space constraints, stock on hand) vs
     derived;
   - form factor and ergonomics: handheld / desk / wall, orientation, size
     or thickness limits;
   - user interface, where there is one: controls, what each does, labels
     and their language, display;
   - connectors and openings, and which face each sits on;
   - materials and colours for THIS project beyond the profile (stock on
     hand matters most);
   - manufacturing reality beyond the profile: who makes the parts the user
     can't, anything borrowed or one-off for this build;
   - aesthetic reference (photo) if looks matter;
   - depth wanted: quick concept vs full package with FEA;
   - what is fixed vs negotiable;
   - plus the *Intake additions* of every playbook routed in step 1.

   More questions are fine here — it is the cheapest place to ask. In Robion
   the preferred medium is a `brief` controls panel (task scope): `select` /
   `toggle` / `text` controls, every select with `default` = the recommended
   value and *decide for me* as its first option, every control with
   `page: 'brief'`, and one `send` button that returns the answers as the next
   prompt (the concept gate adds `choices` cards with `page: 'concept'` on the
   same panel; every later call on it is `mode: 'merge'` — design-record.md). Robion draws the map of stages from the record, so the
   panel carries no map. Keep that panel for the life of the project: a value
   the user changes later arrives as a controls diff with their next prompt
   and is a change request (§7). **Wait for the answers.** "Never stall" applies only to facts the
   user cannot know (a material constant, a standard, a catalogue size) —
   assume those and record them in the build sheet's assumptions section.
   Taste decisions — shape, ergonomics, UI, labels, colour — are never
   assumed, in any mode, autonomous runs included. Record every answer with
   who decided it: `python3 design_record.py answers answers.json` (`user`,
   `default`, or `claude` plus the reason), then move on — the concept
   command below closes `brief`.
3. **Concept gate** — a 2D block layout (component rectangles, key
   dimensions), the part list with alternatives, quick previews — and an
   explicit approval before the schematic or the detailed model exists.
   On the solids stack the variants are parameter sets of one early
   `model.py` (`templates/solids/concept.py`: `make concept` exports,
   renders and collects the facts per variant), so nothing built for the
   cards is thrown away after the freeze.
   Approval freezes shape, UI and connector positions; §5 keys the expensive
   stages on that freeze. Post the variants as `choices` cards and record
   them: `python3 design_record.py concept variants.json --recommended b`
   (brief done, concept needs_you); on approval `python3 design_record.py
   freeze <variant>` — the `concept` stage is done only then.

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

New project: the repository exists since `design_record.py init` (design
iterations, retro and template migrations all lean on the history — every
gate is a commit). Copy `templates/common/` plus the chosen stack's
`templates/<stack>/` files flat into the repo root (skip the two files already
there), **rename `[project].name`
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

## 5 · Stage pipeline — cost-aware ordering

Run stages in order; each has a gate. Skipping a stage is fine when the user
says so — note it in the build sheet: `python3 design_record.py stage <id>
skipped --note …`. Starting a stage: `python3 design_record.py stage <id>
working --estimate "…"` (or `next <id>`, which also closes the current one);
before every stop for the user: `stage <id> needs_you`; passing the gate:
`stage <id> done --artifact out/…`. The script stamps the times; Robion draws
the map from these statuses — nothing to update on the panel. At every gate
that waits, offer the next step as `send` buttons on the `brief` panel
(Continue / Wait, `page: '<stage id>'`) so the user never needs the terminal
to answer
([references/core/design-record.md](references/core/design-record.md)). Concrete commands live in the stack
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

**Artifacts have very different regeneration costs.** Cheap (seconds —
regenerate freely): the parametric model, `make check`, previews and the live
viewport, board outline and placement, ERC. Expensive (minutes to an hour,
and order-dependent — every moved button rebuilds them): routing, photoreal
renders, dimensioned drawings, cut plans, FEA, the build sheet. Run the
expensive stages only after shape, UI and connector positions are frozen at
the concept gate (§1); until then iterate on the cheap ones. During any
autonomous run longer than ~20 minutes, post a short status: what was
decided, what is being built, what the next gate is.

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
- The `brief` panel (answers, concept cards, next-step buttons) stays alongside
  the cockpit; never fold it into the cockpit or remove it.

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

Change requests after the concept freeze: state which expensive artifacts the
change invalidates (routing? renders? drawings?) before regenerating them —
the project CLAUDE.md's "Cost of a change" section lists the chain. Log the
change first — `python3 design_record.py change <what> --from … --to …
--invalidates …` marks the stages `stale` (change protocol in
design-record.md); they are `done` again only once regenerated. A parameter
edit forced by `make check` after the freeze is a change too.

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
