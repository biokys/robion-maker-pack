# Robion Maker Pack

Claude Code skills that take a physical product from idea to a
manufacturing-ready package: parametric CAD (build123d), dimensioned production
drawings, photoreal Blender renders, a bill of materials, an assembly & finishing
plan, strength/modal analysis (FEA), an optional KiCad PCB, and a printable build
sheet.

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

| Skill | What it does |
|---|---|
| `physical-product` | The end-to-end playbook: intake → parametric model → drawings → renders → BOM → assembly & finishing plan → analysis → optional PCB → build sheet. Ships a full project scaffold (`templates/`) and stage-by-stage recipes (`references/`). |

Vertical playbooks (`maker-3d-print`, `maker-woodworking`, `maker-laser`,
`maker-cnc`, `maker-electronics`) land here wave by wave — see the roadmap on
[robion.app](https://robion.app).

## What you need

The skills degrade gracefully when a tool is missing (the build sheet records
exactly what was skipped). For the full pipeline on macOS:

- Python via [uv](https://docs.astral.sh/uv/) — build123d, drawings, FEA meshing
- [Blender](https://www.blender.org) — photoreal renders
- [KiCad](https://www.kicad.org) — only for products with electronics
- CalculiX (`ccx`) — only for FEA verification
- [OpenSCAD](https://openscad.org) — fallback CAD for trivial parts

## With Robion

Inside [Robion](https://robion.app), every artifact the skills produce shows up
live: the 3D model panel with a slider-driven customizer, drawings and renders in
the media panel, KiCad DRC/ERC checks — and the cockpit on your phone. The
conventions the app relies on are documented in [CONTRACT.md](CONTRACT.md).

## Notes

- Deliverables are written in the user's language; the current templates
  (title blocks, build sheet, BOM fields) show Czech.
- The skills remember your workshop (machines, tools, materials on hand) in
  `~/.robion/workshop.yaml` — created once by a short interview, read at every
  project intake, yours to hand-edit.
- Releases are git tags; the marketplace pins the plugin version per release.
  Template changes between versions and how to migrate a running project:
  [MIGRATIONS.md](MIGRATIONS.md).
- MIT licensed.
