# The app ↔ skill contract

This file is the single source of truth for the conventions shared between the
Robion app and the Maker Pack skills. The pack's **major version tracks the
contract version**: pack `1.x` implements contract **v1**. Versions `0.x` are
pre-releases that already implement contract v1. The app declares which contract
major it supports and compares it against the installed pack.

Sections 1–3 are contract **v1**; section 4 (the design record) is contract **v2**,
binding from pack 0.26 and Robion 0.15. Everything describes conventions that exist
in both codebases today.

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
  overrides only existing scalar parameters, preserves each parameter's type (an
  integer default that receives a fractional value becomes a float, with a warning —
  dimensions belong in floats, counts in ints),
  warns on stderr about unknown keys, and is a no-op without the variable.
- **OpenSCAD** — the values arrive as `-D key=value` definitions (arrays are
  rendered as OpenSCAD vectors).

## 3 · Canonical project layout

```
project/
├── model.py  drawings.py  viz.py  fea.py
├── pyproject.toml  Makefile  CLAUDE.md  README.md  buildsheet.html
├── viz/               # render engine copied from the pack (index.html + render.bundle.js)
├── assets/            # downloaded textures (CC0 only)
└── out/               # ALL generated files; `make clean` removes it
    ├── parts/*.step  parts/*.stl        # per-part exports, never one merged body
    ├── drawings/*.svg  *.png  *.pdf
    ├── viz_*.png
    ├── fea/
    └── bom.md
```

Rules that hold across every stage:

- Millimetres everywhere (CAD, drawings, viz scale 0.001, FEA mm-N-s).
- STEP is the interchange format between stages; STL only where meshes are
  required (viz, 3D printing).
- Deterministic outputs: everything under `out/` is regenerable from source;
  generated files are never edited by hand.
- Parameters are the single source of truth: derived values are computed, never
  retyped; asserts guard impossible geometry.

## 4 · The design record — contract v2 (binding from pack 0.26 / Robion 0.15)

`design.json` in the project root is the design record and the wire format of
Robion's design wizard. It is written only by the project's `design_record.py`
(from `templates/common/`, tested by `templates/test_design_record.py`); the
app reads it (`packages/shared/src/design.ts`) and writes back only by running
that script. Binding:

- **Stage ids and statuses.** Ten fixed ids — `idea brief concept model preview
  drawings bom plan analysis buildsheet` — with `status` ∈ `pending | working |
  needs_you | done | stale | skipped`. At most one stage is `needs_you`, nothing
  is `working` beside it; several `working` only among `drawings, bom, plan,
  analysis`.
- **Asks.** A `needs_you` stage carries `ask: {kind: questions | choices |
  approve, askedAt, title?, questions?, choices?, show?, next?, note?}` as
  documented in `references/core/design-record.md`; question ids and variant
  ids are `[a-z][a-z0-9_]*` ≤ 40 characters; the value `decide_for_me` is
  reserved for the app; `show` entries are `gallery | image | table (≤ 64 rows)
  | file` with project-relative paths.
- **Replies.** The app runs `python3 design_record.py reply <stage> <file>
  [--json]` in the project directory with `{kind, answers | chosen | approved,
  note?, via?}`; the state machine (what each reply writes and commits, exit
  code 2 for "no open ask", 1 for an invalid reply, nothing written on error)
  is the table in design-record.md. After a reply the app types one line into
  the agent's session: `Robion: the reply to the "<stage>" gate is recorded in
  design.json (python3 design_record.py show). Continue.`
- **Stamps.** Every write sets `updated` and `tool` (`design_record.py/<pack
  version>`), stage moves set `stages[].updatedAt` (`startedAt` on `working`),
  asks `askedAt`, replies `reply.at`; every gate, reply and change is a git
  commit made by the script.
- **Capability flag.** Robion exports `ROBION_DESIGN_ASKS=1` into the agent's
  environment when it renders asks and runs replies; without it the skill
  prints the ask in the chat and records the reply itself.
- **Attachments.** Photos of the idea live in the committed `idea/` directory
  (`init --attachment`, `attach` copy them from `.robion/uploads/`).

The `brief` controls panel with `page: '<stage id>'` (pack 0.23–0.25) is the
v1 fallback: Robion keeps rendering it for records without an `ask`.

## 5 · Reserved for a later contract (not yet binding)

- `bom.json` — a structured BOM (items, material, mass, price, supplier,
  bought-state) replacing `bom.md` as the machine-readable artifact.
- The workshop profile — `~/.robion/workshop.yaml`, a persistent description of
  the user's machines, tools and materials. A **content-level convention since
  pack 0.3.0** (schema and rules:
  `skills/physical-product/references/core/workshop-profile.md`); a later
  contract will make it app-binding (the app may read it — e.g. the printer
  bed for the viewport outline).
