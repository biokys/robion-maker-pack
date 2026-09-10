# Robion Maker Pack

Claude Code skills that take a physical product from idea to a
manufacturing-ready package: parametric CAD (build123d) or a parametric cutting
pattern, dimensioned production drawings, photoreal Blender renders, a bill of
materials, cut plans, an assembly & finishing plan, strength/modal analysis
(beam-element frame model built in, solid FEA via CalculiX), an optional
KiCad PCB, and a printable build sheet.

The pack is the process content behind [Robion](https://robion.app) — a macOS
cockpit for Claude Code agents — but it is standard Claude Code content and works
in any Claude Code session, with or without the app.

## Install

```sh
claude plugin marketplace add biokys/robion-maker-pack
claude plugin install maker@robion-maker-pack
```

Skills are namespaced `maker:<skill>`; they also trigger automatically from
natural requests ("design me a bracket / shelf / enclosure…").

## What's inside

One skill, `physical-product`, layered so that every project loads only what
it needs:

| Layer | Where | What it is |
|---|---|---|
| **Spine** | `SKILL.md` | Intake, vertical routing, the stage pipeline with gates, verification habits. Every project walks it. |
| **Verticals** | `references/verticals/` | Playbooks for WHAT is being made — 14 of them: woodworking, metalwork, sheet-metal, 3d-print, laser, cnc-router, electronics, sewing, leather-goods, upholstery, van-conversion, fitness-equipment, animal-housing, aquarium-terrarium. Pure content — the anatomy is fixed by `_template.md`. |
| **Stacks** | `references/stacks/` | Recipes for HOW artifacts are produced: `solids` (build123d), `patterns2d` (2D cutting patterns), `pcb` (KiCad). |
| **Core** | `references/core/` | Shared conventions: the workshop profile, the design record, toolchain & degrade rules, the build sheet. |
| **Templates** | `templates/` | Project scaffold: `common/` + one stack directory, copied flat into a new project. |

How it scales — the three growth rules:

1. **A new vertical is content only** — one playbook in `references/verticals/`
   (per `_template.md`) plus supplier/material knowledge. It never touches
   other verticals, the app, or the templates.
2. **A new stack is added when a product's source-of-truth geometry is a new
   kind** (solids → 2D patterns was the first split): one recipe in
   `references/stacks/` + one `templates/<stack>/` directory + a CI job.
3. **Spine changes are rare and versioned** — they bump the pack and, when
   app-visible, the contract ([CONTRACT.md](CONTRACT.md)).

## What you need

The skills degrade gracefully when a tool is missing (the build sheet records
exactly what was skipped). For the full pipeline on macOS:

- Python via [uv](https://docs.astral.sh/uv/) — build123d, drawings, FEA meshing
- [Blender](https://www.blender.org) — photoreal renders
- [KiCad](https://www.kicad.org) — only for products with electronics
- CalculiX (`ccx`) — only for solid FEA; frames of slender members use the
  built-in beam-element model (`frame_fea.py`, numpy) without any solver
- [OpenSCAD](https://openscad.org) — fallback CAD for trivial parts

## With Robion

Inside [Robion](https://robion.app), the skill drives a wizard: the design
panel draws the map of stages, the question round, the concept cards and every
approval straight from the project's `design.json` (one `gate` command per
stop; Robion writes the maker's reply back with `reply`), the 3D model panel
is a slider-driven customizer, drawings and renders open in the media panel,
KiCad DRC/ERC checks run live — and the same wizard sits on your phone. The
conventions the app relies on are documented in [CONTRACT.md](CONTRACT.md).

## Notes

- Deliverables (build sheet, drawings, BOM, assembly steps) are written in
  the user's language. The templates ship English strings tagged `L10N`;
  `make l10n` lists everything to translate at scaffold time.
- The skills remember your workshop (machines, tools, materials on hand) in
  `~/.robion/workshop.yaml` — created once by a short interview, read at every
  project intake, yours to hand-edit.
- Every project keeps a design record in `design.json` — the idea, the answers
  and who decided them, the chosen concept, the state of each stage, the open
  ask and a change log. It is written only by the project's own
  `design_record.py` (stamped by the clock, validated, committed at every
  gate), so the next session reads it instead of the lost transcript and
  Robion draws the design panel from it. `python3 -m unittest
  skills/physical-product/templates/test_design_record.py` checks the script.
- 3D-printed parts are delivered as STL + STEP plus a print plan in the words
  of your slicer; the pack never slices and never produces G-code.
- Releases are git tags; the marketplace pins the plugin version per release.
  Template changes between versions and how to migrate a running project:
  [MIGRATIONS.md](MIGRATIONS.md).
- MIT licensed.
