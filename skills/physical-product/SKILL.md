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

The skill is layered — load only what the stage needs, when it needs it:

- **This file** — the spine: talking to the maker, intake, routing, stages, gates.
- **`references/core/design-record.md`** — the design record and the gate
  protocol; read once at intake. `python3 design_record.py --help` repeats the
  commands and the rules and is enough after a compaction.
- **`references/verticals/`** — playbooks: WHAT is being made. Read the routed
  ones after the brief analysis; they refine stages, never replace the spine.
- **`references/stacks/`** — recipes: HOW artifacts get produced (solids =
  build123d, patterns2d = 2D cutting patterns, pcb = KiCad). Read the section
  for the stage you are starting, not the whole file up front.
- **`references/core/`** — workshop profile, toolchain & degrade, build sheet
  (read at the build-sheet stage), fit partners (real dimensions of what the
  product mates with).

**Language rule.** This pack is English and language-neutral; the product it
produces is not. Work out the user's language from how they write to you
(`language:` in the workshop profile overrides it), then: deliverables in the
user's language (build sheet, README, drawing text and title blocks, BOM and
cut-plan tables, assembly steps, safety warnings, dialogue, every `label`,
`title`, `hint`, `estimate` and `note` in the record) with the vocabulary a
workshop in that language actually speaks; everything else in English (code,
comments, identifiers, commit messages, this pack). Localize once, at scaffold
time: templates ship English strings tagged `L10N:`, `make l10n` lists them —
translate them before the first `make`. Market facts (suppliers, stock sizes,
standards, currency) come from the workshop profile or a question, never from
the dictionary; never invent a supplier or a price.

## 0 · Talking to the maker

The maker reads Robion's design panel and the phone, not this terminal. The
panel is drawn from `design.json`; what you write there is what they see.

- **Every stop for a decision is a gate = one command:** `python3
  design_record.py gate <stage> ask.json` (kind `questions`, `choices` or
  `approve` — design-record.md). The panel renders the questions, the concept
  cards or the approval screen from the record. **Never ask a question in the
  chat**, never a numbered list of options for the maker to type back, never
  an `AskUserQuestion` for a design decision.
- **Not replying is waiting.** After `gate`, write at most three short lines
  (what is ready, where to look) and stop. The reply arrives as one prompt
  line — `Robion: the reply to the "<stage>" gate is recorded in design.json
  (python3 design_record.py show). Continue.` — run `show`, read what was
  decided and from which stage to continue, and go on. A free-text prompt
  from the maker while a gate is open is a change request or a note (§7).
- **Terse replies.** No "Insight" blocks, no restating the record — the maker
  sees it in the panel. Numbers go into the record and the artifacts.
- **Deliverables are local files.** Show them with `open_file` (the build
  sheet is `out/build_sheet.html`, renders and drawings are PNGs the panel
  lists as artifacts). Never publish them with the Artifact tool unless the
  maker asks for a link.
- **Bare terminal** (no `ROBION_DESIGN_ASKS` in the environment: an older
  Robion or plain Claude Code): still run `gate`, then print the ask as text
  in the chat and record the maker's answer yourself with `reply <stage>
  reply.json` (`"via": "chat"`). The record stays the same either way.

## 1 · Intake = brief analysis, then the question round (mandatory gate)

**Workshop profile first:** read `~/.robion/workshop.yaml` before anything —
it answers machines, tools and materials once for all projects. Missing file ⇒
the workshop questions ([references/core/workshop-profile.md](references/core/workshop-profile.md))
join the first question round as their own group, and you write the profile
from the reply before the concept — no separate interview in the chat.

**Design record second:** the project keeps its memory in `design.json` —
idea, spec, every answer and who decided it, the chosen concept, the state of
each stage, every change after a gate. It is written only by
`design_record.py` (copied from the pack's `templates/common/` as the project's
first file, with `.gitignore`): one call per move; the script stamps the clock,
keeps the record valid and commits every gate. Never edit `design.json` by
hand. Read [references/core/design-record.md](references/core/design-record.md) now, once.

Then STOP before any geometry. Three steps, dialogue in the user's language:

1. **Brief analysis** — reading only (the profile, the playbooks); the only
   files this step writes are the record and its script. Restate the request
   as a spec — function, users, must-haves, constraints, what the brief leaves
   open. Route the vertical(s) now (§2; electronics inside ⇒ the pcb stack
   applies) so each playbook's *Intake additions* join the question round.
   Photos the user attached arrive as `[Attached image: <path>]` lines after
   the prompt (Robion puts them in `.robion/uploads/`): look at every one
   before writing the spec — the aesthetic reference, a sketch, the space the
   thing goes into, the stock on hand — and say what you took from each. Then
   copy `templates/common/design_record.py` and `.gitignore` into the working
   directory and run
   `python3 design_record.py init --name … --slug … --language … --idea "…"
   --attachment .robion/uploads/<file> … --summary "…" --verticals … --stack …
   --label brief=… …` — `idea` is done, `brief` is working (you are composing
   the questions), photos are copied into the committed `idea/` directory, and
   the first commit exists.
2. **Question round** — everything the spec leaves open, as one `ask.json` of
   kind `questions`, batched into groups, every question with a recommended
   `default` (the panel adds *decide for me* as the first choice itself; the
   value `decide_for_me` is reserved). The generic groups:
   - function and load case: what it carries/does, worst realistic load,
     static or dynamic (vibration source nearby?);
   - dimensions: which are fixed (space constraints, stock on hand) vs derived;
   - form factor and ergonomics: handheld / desk / wall, orientation, size or
     thickness limits;
   - user interface, where there is one: controls, labels and their language, display;
   - connectors and openings, and which face each sits on;
   - materials and colours for THIS project beyond the profile (stock on hand
     matters most);
   - manufacturing reality beyond the profile: who makes the parts the user
     can't, anything borrowed or one-off for this build;
   - aesthetic reference (photo) if looks matter;
   - depth wanted: quick concept vs full package with FEA;
   - what is fixed vs negotiable;
   - plus the *Intake additions* of every playbook routed in step 1.

   More questions are fine here — it is the cheapest place to ask. Types:
   `select` (options with `value` + `label`, `default` mandatory), `toggle`,
   `number` (with `unit`), `text`. Then `python3 design_record.py gate brief
   ask.json` with `"next": {"stage": "concept", "estimate": "…"}`, one line in
   the chat, stop. **Wait for the reply.** "Never stall" applies only to facts
   the user cannot know (a material constant, a standard, a catalogue size) —
   assume those and record them in the build sheet's assumptions section.
   Taste decisions — shape, ergonomics, UI, labels, colour — are never
   assumed, in any mode, autonomous runs included. The reply records every
   answer with who decided it; questions answered *decide for me* come back as
   `decidedBy: claude` without an answer — decide each one before the concept
   with `answer <id> --value … --by claude --reason "…"` and repeat the reason
   in the build sheet's assumptions.
3. **Concept gate** — a 2D block layout (component rectangles, key
   dimensions), the part list with alternatives, quick previews — and an
   explicit approval before the schematic or the detailed model exists. On the
   solids stack the variants are parameter sets of one early `model.py`
   (`templates/solids/concept.py`: `make concept` exports, renders and
   collects the facts per variant), so nothing built for the cards is thrown
   away after the freeze. Record them — `python3 design_record.py concept
   variants.json --recommended b` — then `gate concept ask.json` with kind
   `choices` (the cards come from `concept.variants`; add a `show` gallery when
   the previews deserve a bigger view). The reply freezes the chosen variant
   and starts `model`. Approval freezes shape, UI and connector positions; §5
   keys the expensive stages on that freeze.

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

Run the stages in order; each has a gate. Before producing a stage: `python3
design_record.py stage <id> working --estimate "…"` (the panel shows the
estimate and the clock). Two kinds of gate:

- **Maker gates** (model, preview, build sheet — and any stage the maker asked
  to see): `python3 design_record.py gate <id> ask.json` with kind `approve`
  and a `show` list — the renders as a `gallery`, a drawing or a stress plot as
  an `image`, the BOM as a `table` (≤ 64 rows) or a `file`, the build sheet as
  a `file`. The reply marks the stage done and starts the next one (`next`
  defaults to the following stage; pass an `estimate`). `approved: false`
  comes back with a note: the stage is working again — fix, then gate again.
- **Agent-side gates** (drawings, BOM, plan, analysis): you verify (§6) and
  close the stage yourself: `stage <id> done --artifact out/… [--note …]`. Show
  the result in one line and move on; the maker sees the artifacts on the
  panel's map. Skipping a stage the stack has no equivalent for: `stage <id>
  skipped --note …`, never removed.

| # | Stage | Deliverable | Gate |
|---|---|---|---|
| 1 | **Model** | parametric source of truth (`model.py` / `pattern.py`) | maker: `approve` — the cockpit viewport is the live geometry |
| 2 | **See it** | live viewport / rendered previews | maker: `approve` + `gallery` of the renders |
| 3 | **Drawings / pattern sheets** | dimensioned drawings or 1:1 pattern pages | agent: every PNG Read and checked |
| 4 | **BOM + cut plan** | bill of materials, cutting plan / marker layout | agent: masses & consumption cross-checked |
| 5 | **Make plan** | numbered assembly/sewing/welding steps + finishing schedule | agent: ordered so it is executable |
| 6 | **Analysis** (when load-bearing) | analytic estimates first, FEA to verify | agent: sanity checks pass before numbers reach the maker |
| 7 | **Build sheet** | build sheet per [core/buildsheet.md](references/core/buildsheet.md) | maker: `approve` + `file` `out/build_sheet.html`; mirror into README |

Concrete commands live in the stack recipe ([solids](references/stacks/solids.md),
[patterns2d](references/stacks/patterns2d.md)) — read the section of the
stage you are starting; the vertical playbook refines what each stage must cover.

**Production half — four subagents, one commit (solids).** Drawings, BOM + cut plan,
the make plan and the analysis do not depend on each other; after the `preview` reply
(`model` and `preview` done) they run side by side, each in its own context, so the main
thread never fills up with render logs and drawing lint:

1. Once, in the main thread: `uv sync`, `make parts check`, then
   `python3 design_record.py stage drawings working --estimate "…" --no-commit` and the
   same for `bom`, `plan`, `analysis` (the record allows these four to work at once).
2. In ONE turn, four Agent-tool subagents — `model: sonnet` for drawings, bom and plan;
   analysis without a `model` (it inherits yours). Every brief is the same template:
   the product name and the user's language; `design.json` (read it, `python3
   design_record.py show` too) and `model.py` as the source of truth; the section of the
   stack recipe for that stage pasted in (not the file name); the stage's exclusive
   output — `out/drawings/` · `out/bom.md` + `out/cutlist.*` · `out/plan.md` (the numbered
   steps and the finishing schedule, the build sheet copies them) · `out/fea/` — and
   nothing outside it; leaf targets only, `make <target> LEAF=1` (`drawings-png`,
   `drawings-pdf`, `bom`, `cutlist`, `cutlist-png`, `frame-fea`, `fea`; never `parts`,
   never `viz`, never `uv sync`); §6 verification (Read every PNG); the closing command
   `python3 design_record.py stage <id> done --no-commit --artifact out/…` (or `skipped
   --note …`); **never** `git`, never `design_record.py` on another stage, never a
   question — an unknown fact becomes a line in `out/<stage>_assumptions.md`. The
   subagent returns at most ten lines: files written, the numbers the build sheet needs
   (mass, governing stress and safety factor, sheet count), its assumptions.
3. Back in the main thread: `python3 design_record.py check --strict`, one PNG per stage
   Read yourself, the assumptions folded into the build sheet's section, then one commit:
   `python3 design_record.py commit -m "production: drawings, bom, plan, analysis"`. A
   stage still `working` after the subagents returned means one died — rerun that one.
   Then `stage buildsheet working`, `make buildsheet`, `gate buildsheet ask.json`.

A post-freeze change reruns only the stale stages the same way. Patterns2d and pcb stay
sequential for now (their stages share files).

**Artifacts have very different regeneration costs.** Cheap (seconds —
regenerate freely): the parametric model, `make check`, previews and the live
viewport, board outline and placement, ERC. Expensive (minutes to an hour,
and order-dependent — every moved button rebuilds them): routing, photoreal
renders, dimensioned drawings, cut plans, FEA, the build sheet. Run the
expensive stages only after shape, UI and connector positions are frozen at
the concept gate (§1); until then iterate on the cheap ones. A run longer than
~20 minutes without a gate: keep the record's `working` stage and `estimate`
current — that is the status message; the chat needs none.

**Robion cockpit — build it unprompted.** When the `set_controls` MCP tool
exists, the cockpit is part of stage 1, not an optional extra (read
`controls_help` first). It is a task-scoped panel named `model`:

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
- A `set` preset button restoring the defaults (defined in the same call as
  the sliders it targets).

The questions, the concept cards and the gates are **not** controls: they live
in the record and the design panel draws them. Keep the cockpit current as
stages advance (BOM stage: a shopping `checklist`; plans: image tiles of the
sheets). No `set_controls` tool ⇒ skip silently, never mention it.

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

User feedback → change parameters (never hardcode inside builders) → `make` →
show. Short iterations, one proposal at a time, in the user's language. Record
design decisions in the project README; record newly discovered tool gotchas
in the project CLAUDE.md ("Gotchas learned here").

A change after a gate is logged first, never silently absorbed: `python3
design_record.py change <what> --from … --to … --invalidates a,b --by user|claude
[--reason …] [--cost …]` — a recorded answer (`questions.<id>`), the chosen
concept, a spec sentence, or a parameter after the freeze (`model.<param>`; a
value forced by `make check` is a change too, `--by claude --reason`). The
script marks the stages `stale` and, when nothing is current any more, sets the
first stale stage working. State which expensive artifacts are affected before
regenerating them (the project CLAUDE.md "Cost of a change" section lists the
chain); when the regeneration is long, `gate` first with kind `approve` so the
maker decides. Stale stages are `done` again only once regenerated.

A change from the app arrives as a prompt naming the question's label and id,
the old and the new value (the maker edited an answer in the panel), or as a
free-text note while a gate is open. Same protocol: `change … --by user` first,
then regenerate from the first stale stage. The panel updates itself from the
record — there is nothing to fix on any controls.

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
