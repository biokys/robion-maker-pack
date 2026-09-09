# The app ↔ skill contract

This file is the single source of truth for the conventions shared between the
Robion app and the Maker Pack skills. The pack's **major version tracks the
contract version**: pack `1.x` implements contract **v1**. Versions `0.x` are
pre-releases that already implement contract v1. The app declares which contract
major it supports and compares it against the installed pack.

Everything below is contract **v1** — it describes conventions that exist in both
codebases today.

## 1 · The `PARTS` registry (build123d scripts)

A model script is a plain Python file that imports `build123d`. The app renders it
by executing it **as a module** (`runpy`, `run_name="__robion__"`), so
`if __name__ == "__main__":` blocks — CLI exports, argument parsing — do not fire.

Shape discovery, in order:

1. A module-level dict named `PARTS`. Keys are part names; each value is either an
   object with a callable `.builder` attribute returning one build123d `Shape`, or
   a bare callable. One builder per part; builders must not depend on each other's
   side effects. Parts should carry a material record (see
   `skills/physical-product/templates/solids/model.py`) — the app may use material data
   for viewport coloring in the future.
2. Fallback, only when `PARTS` is absent or yields nothing: module-level `Shape`
   values and finished `Builder` objects.

A script that defines neither fails to render ("no build123d shapes found").

## 2 · Live parameters (the customizer)

When the user drags a `param` control, the app re-runs the model with the current
values:

- **build123d / Python** — the values arrive as the `ROBION_PARAMS` environment
  variable: one JSON object, e.g. `{"wall": 2.4, "holes": 4}`. A script opts into
  live tuning by reading it and overriding its module-level parameters **before**
  derived values are computed. The template's `_apply_robion_params()` (in
  `templates/solids/model.py` since pack 0.2.0; `templates/patterns2d/pattern.py`
  implements the same contract) is the reference implementation: it
  overrides only existing scalar parameters, preserves each parameter's type,
  warns on stderr about unknown keys, and is a no-op without the variable.
- **OpenSCAD** — the values arrive as `-D key=value` definitions (arrays are
  rendered as OpenSCAD vectors).

## 3 · Canonical project layout

```
project/
├── model.py  drawings.py  blender_viz.py  fea.py
├── pyproject.toml  Makefile  CLAUDE.md  README.md  buildsheet.html
├── assets/            # downloaded textures (CC0 only)
└── out/               # ALL generated files; `make clean` removes it
    ├── parts/*.step  parts/*.stl        # per-part exports, never one merged body
    ├── drawings/*.svg  *.png  *.pdf
    ├── viz_*.png
    ├── fea/
    └── bom.md
```

Rules that hold across every stage:

- Millimetres everywhere (CAD, drawings, Blender scale 0.001, FEA mm-N-s).
- STEP is the interchange format between stages; STL only where meshes are
  required (Blender, 3D printing).
- Deterministic outputs: everything under `out/` is regenerable from source;
  generated files are never edited by hand.
- Parameters are the single source of truth: derived values are computed, never
  retyped; asserts guard impossible geometry.

## 4 · Reserved for contract v2 (not yet binding)

- `bom.json` — a structured BOM (items, material, mass, price, supplier,
  bought-state) replacing `bom.md` as the machine-readable artifact.
- The workshop profile — `~/.robion/workshop.yaml`, a persistent description of
  the user's machines, tools and materials. A **content-level convention since
  pack 0.3.0** (schema and rules:
  `skills/physical-product/references/core/workshop-profile.md`); contract v2 will
  make it app-binding (the app may read it — e.g. the printer bed for the
  viewport outline).
- `design.json` — the design record in the project root: idea, spec, every
  answer with who decided it, the chosen concept, per-stage status
  (`pending | working | needs_you | done | stale | skipped`) and a change log.
  A **content-level convention since pack 0.22.0** (schema, stage ids and
  rules: `skills/physical-product/references/core/design-record.md`; the
  Robion 0.13 reads it: the design panel and the phone's design tab render
  the map with the stale / needs-you states, and an answer the user edits
  there reaches the agent as a change request). The stage ids and statuses
  are therefore binding from pack 0.23 on, ahead of the contract bump.
