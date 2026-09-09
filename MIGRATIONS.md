# Template migrations

Templates are copied into product projects at scaffold time, so a running
project does not pick up pack updates by itself. This file lists, per pack
release, what changed in `skills/physical-product/templates/` and how to
migrate an existing project — apply only the sections newer than the pack
version stamped in the project's CLAUDE.md.

Migrating is always optional: projects keep working on the template vintage
they were scaffolded with.

## v0.23.0

**Status discipline and no more map on the panel.** A review of the Robion
0.13 design panel (2026-09-09) showed the record's stages were written all
`pending` and never `needs_you`, so the app's map said "not started" exactly
while the agent waited for the user; and the `design_map` steps control on the
`brief` panel drew a second, contradicting map under the app's own. Spine
changes:

- §1: the record is created with `idea` done and `brief` needs_you; before
  every stop-and-wait the waiting stage is `needs_you`, while producing
  `working` (+ `startedAt`, `estimate`), after approval `done`.
- §1/§5: the `steps` design map is gone — Robion draws the map from the record.
  The `brief` panel carries the questions (every select with `default`),
  the concept `choices` cards (`width: 'full'`, send gated by `enabledWhen`)
  and next-step `send` buttons (continue / wait / back) at every gate and
  after a change request. Every call after the first is `mode: 'merge'`.
- design-record.md: variant ids follow the question-id rule (snake_case,
  <= 40 chars); `estimate` / `startedAt` on stages, `cost` on changes; a change
  arriving from the app also re-defines the affected control; omit unknown
  fields instead of `null`; never paste the record into the chat.
- Evals: graders for `idea: done` / `brief: needs_you` after intake; the
  change-request graders no longer depend on JSON key order or on the agent
  refraining from cheap regeneration.

Template change: both `CLAUDE.md.template` files gained a **Design record**
section so a session that does not trigger the skill still knows the file.

**Migrate:** optional — copy the "Design record" section into the project's
CLAUDE.md; on the next gate set the current stage's status per the discipline
above; `remove_controls` the `design_map` key from the `brief` panel.

## v0.22.2

The design map example named a panel icon Robion does not have (`route`); it is
`layers` now. Nothing to migrate.

## v0.22.1

**Robion 0.13 widgets and the app's change requests.** `design-record.md`
names the `choices` control for the concept gate (variant cards with image,
description and fact chips; a `gallery` for views, a `table` for BOM and cut
lists) and describes the prompt Robion's design panel sends when the user
edits a recorded answer — handled as an ordinary change request. No template
change; nothing to migrate.

## v0.22.0

**The design record.** A project's memory used to live only in the transcript
and whatever the README captured — lost on a fresh session, impossible to
edit, invisible to the app. Every project now keeps `design.json` in its root:
the idea, the spec, every answer with who decided it (`user`, `default`,
`claude` + reason), the concept variants and the chosen one, the ten stages
with their status (`pending | working | needs_you | done | stale | skipped`)
and a change log. Rules, schema and stage ids:
`references/core/design-record.md`. Spine changes in SKILL.md:

- §1: the record is created right after the brief analysis and updated at
  every gate; each answer records who decided it. The Robion `brief` panel
  carries a `steps` design map at the top, *decide for me* as the first
  option of every select, and stays for the life of the project — a value
  the user changes later is a change request.
- §5: passing a gate = the stage `done` in the record and the map's `current`
  advanced (one `set_controls` merge of `design_map`); a skipped stage is
  `skipped`, never removed.
- §7: a change after the freeze is logged in the record and marks the
  invalidated stages `stale` before anything regenerates.

Evals: `evals/` gains two cases (record exists after intake; a change request
marks stages stale and a "decide for me" answer is recorded with a reason).
They run with the early-access `claude plugin eval`.

This is the first step of Robion's design panel (contract v2, CONTRACT.md §4):
the app will read the record, render the map with stale / needs-you states,
and let the user edit an answer in place.

Template change: none.

**Migrate:** optional — write `design.json` for a running project from the
decisions in its README (schema in `design-record.md`, stages already passed
as `done`), then build the `design_map` control on the `brief` panel.

## v0.21.0

**Intake is a gate now.** The first electronics product (AirQualityBox
retrospective, 2026-09-08) showed that "never stall" plus an autonomous run
skipped the "user approves the geometry" gates: two hours of routing,
renders and drawings were built on a shape and UI the user wanted to
change. Spine changes in SKILL.md:

- §1 Intake is a brief analysis (spec restated, vertical routed) followed by
  a mandatory question round — batched groups with recommended defaults, a
  `brief` controls panel in Robion — and a concept gate (block layout, part
  list, quick previews) that freezes shape, UI and connector positions.
  "Never stall" applies only to facts the user cannot know; taste decisions
  are never assumed.
- §5 is cost-aware: cheap artifacts (model, check, previews, placement,
  ERC) iterate freely; expensive ones (routing, renders, drawings, cut
  plans, FEA, build sheet) run only after the freeze. Autonomous runs over
  ~20 minutes post a status.
- §7: a change request after the freeze names the expensive artifacts it
  invalidates before regenerating them.

References: `verticals/electronics.md` intake additions (UI, power,
electronics route) and concept-first ordering; `stacks/pcb.md` rewritten
around scripted authoring (circuit as data → generated schematic and
pcbnew board → Freerouting), the enclosure → `out/pcb_layout.json` → board
chain, the verification chain and the traps learned (pcbnew exit hang, "/"
net prefix, Freerouting planes and Java versions); `stacks/solids.md`
build123d 0.11 traps (booleans on a located Compound, Compound
re-parenting, axis-aligned `project_to_viewport`).

Template change: both `CLAUDE.md.template` files gained a **Cost of a
change** section listing that stack's cheap vs expensive make targets — the
thing §7 points at when a change comes in after the freeze.

**Migrate:** optional — append the "Cost of a change" section from the
template to your project's CLAUDE.md and fill in the project's own chain (a
PCB project adds placement → routing → fab outputs).

## v0.20.0

**The pack is now language-neutral English.** It used to be written for a
single market: templates emitted one language's strings, playbooks named
that market's suppliers, and output files carried its file names. Nothing
about the engineering was market-specific — only the wrapping was — so all
of it moved out of the pack and into two places that legitimately know it:
the user's workshop profile, and a localization step at scaffold time.

- SKILL.md Language rule rewritten: the pack is English; deliverables are
  written in the user's language, determined from how they write (or
  `language:` in the workshop profile). Market facts (suppliers, stock
  sizes actually sold, standards, currency) come from the profile or from
  asking — they are not translation and must never be invented. Triggers
  and routing rows are English and match requests in any language.
- Workshop profile gained `language`, `country`, `currency` and
  `suppliers`; the schema example is English, with the structure/content
  split spelled out (a real profile is written in its owner's words).
- Every reference and playbook rewritten in English, engineering content
  unchanged. `## Materials & suppliers (CZ)` became `## Materials & stock`:
  stock forms, standard sizes and grades kept, market vendors dropped.

Template changes (all of them mechanical, none behavioural):

- **User-facing strings are English and tagged `L10N:`**; new `make l10n`
  lists every one, plus the buildsheet slots. Translate them right after
  scaffolding, before the first `make` — SKILL.md §4 now says so.
- **Renamed identifiers:** `PartSpec.czech_name` → `local_name`;
  `merge_pdfs.komplet_name()` → `complete_name()` (`--komplet` →
  `--complete`, `KOMPLET_NAME` → `COMPLETE_NAME`); patterns2d `PIECES`
  demo keys → `front_panel` / `pocket` / `strap_neck` / `strap_waist`;
  `pattern._cz()` → `_num()`.
- **Renamed outputs:** `out/vyrobni_list.*` → `out/build_sheet.*`,
  `out/print/strih_A4.*` → `pattern_A4.*`, `out/drawings/vykresy_A3.pdf` →
  `drawings_A3.pdf`, `<product>_komplet.pdf` → `_complete.pdf`.
- **Renamed buildsheet slots:** `{{SEKCE_VYKRESY}}` → `{{SECTION_DRAWINGS}}`,
  `{{SEKCE_POSTUP}}` → `{{SECTION_ASSEMBLY}}`, `{{SEKCE_FINALIZACE}}` →
  `{{SECTION_FINISHING}}`, `{{SEKCE_ANALYZA}}` → `{{SECTION_ANALYSIS}}`,
  `{{TISK_POZNAMKA}}` → `{{PRINT_NOTE}}`, `{{FOOTER_ZDROJE}}` →
  `{{FOOTER_SOURCES}}`, plus the content slots ({{NAZEV_VYROBKU}} →
  {{PRODUCT_NAME}} and so on — `make l10n` prints the full list).

**Migrate:** nothing is required — a running project keeps its own language
and its own file names, and the old template vintage still works. When you
DO pull this in: rename `czech_name` → `local_name` in model.py and
cutlist.py together, re-copy the Makefile for `l10n`, and if you re-copy
buildsheet.html, rename the slots in your generator to match. Translate the
newly-English template strings back into your project's language — that is
what `make l10n` is for.

## v0.19.0

New vertical playbook `references/verticals/aluminum-profiles.md` (frames
bolted from T-slot extrusions: systems/slot compatibility, joint matrix,
slide-in-nut assembly order, effective-density mass from catalog kg/m,
tilted-shelf pattern, racking/bracing, suppliers) — informed by the
first real profile build; SKILL.md routing row + triggers, metalwork
playbook scoped to steel with a cross-link. From the same retrospective:
stacks/solids.md OpenSCAD-fallback rules (echo-eval loop, CSG
non-2-manifold/coplanar traps, camera semantics, and the mesh-probe
verify script replacing `make check` on that path), `git init` added to
the scaffold step, and core/buildsheet.md notes (the rendered build sheet
is a build artifact — regenerate, never hand-patch).

Template change: `templates/common/buildsheet.html` — `ol.steps li`
switched from flex to block with an absolutely positioned number. In a
flex/grid container every inline child (`<code>`, `<span>`) becomes its
own item, so any step mentioning a screw size fragmented into gapped
columns.

**Migrate:** re-copy the `ol.steps` CSS block (or re-copy
buildsheet.html and re-fill the slots); projects that worked around the
broken steps with wrapper `<div>`s can keep them — they render the same.

## v0.18.0

Retrospective fixes from the first real patterns2d product (roll-up tool
pouch):

- pattern.py: internal piece markings — `PieceSpec.marks` (dashed internal
  segments: stitching channels, fold lines, placement outlines) +
  `mark_labels` (localized captions), drawn by `piece_markup` so they reach the
  marker AND the 1:1 print; `check()` verifies marks stay inside the piece
  and refuses `notches` on an `allowance=0` piece (the tick degenerates to
  an invisible point there — a bound/hemless edge is the normal sewn case).
  The demo apron marks the pocket placement.
- pattern.py `export()` writes a pixel `.html` wrapper next to every piece
  SVG (Chrome renders mm-sized SVG at ~3.78 px/mm — direct screenshots
  crop); Makefile: new `pieces-png`, aggregate `previews` (= the cockpit
  image tiles + the Read gate) and `buildsheet-pdf` (`pdf` stays the
  PATTERN print).
- New `viz.py` template — flat parametric hero illustration derived from
  pattern.py (`make viz` → `out/viz_hero.png`); the patterns2d analog of
  blender_viz.py.
- Decimal comma in user-facing numbers (bom.md, the marker annotation).
- templates/common/buildsheet.html: per-vertical headings are slots now
  (named `{{SEKCE_*}}` / `{{TISK_POZNAMKA}}` / `{{FOOTER_ZDROJE}}` in this
  version — renamed in v0.20.0); values per vertical in
  references/core/buildsheet.md.

**Migrate (patterns2d projects):** re-copy pattern.py's PieceSpec/BuiltPiece/
`_build`/`piece_markup`/`check` blocks (keep your PARAMETERS and builders),
move any hand-drawn internal markings into `marks`/`mark_labels`, re-copy the
Makefile, copy viz.py and replace its `scene()` with your product.
**Migrate (all projects):** when regenerating the build sheet from the new
skeleton, fill the six new slots per the table in core/buildsheet.md; the old
skeleton keeps working unchanged.

## v0.17.0

No template changes (content only): seven new vertical playbooks —
leather-goods, van-conversion, fitness-equipment, animal-housing,
upholstery, aquarium-terrarium, sheet-metal (rozvin via bend allowance on
the solids stack). Upholstery defines the pack-wide two-stack sub-scaffold
convention (secondary stack in a subdirectory); SKILL.md routing and
triggers grew accordingly.

## v0.16.0

- Pack restructured into core/stacks/verticals: references moved to
  `references/{core,stacks,verticals}/`, templates split into
  `templates/common/` + `templates/solids/` (contents unchanged) and the new
  `templates/patterns2d/` stack (pattern.py, tile_a4.py — parametric 2D
  cutting patterns, marker layout, 1:1 A4 tiling). Seven vertical playbooks
  in `references/verticals/` (woodworking, metalwork, 3d-print, laser,
  cnc-router, electronics, sewing) + `_template.md` for new ones. Scaffold
  rule changed: copy `templates/common/` + `templates/<stack>/`.

**Migrate:** nothing — running projects are unaffected (template files were
moved, not changed; projects always held flat copies).

## v0.15.0

- New `cutlist.py` template — nářezový plán: STOCK declaration (Bar/Sheet
  with kerf/trim/rotation, overrides, Extra pieces, NO_STOCK), FFD + shelf
  packing, `out/cutlist.{md,svg}` + purchasing summary and
  `purchase_rows()` for the buildsheet; Makefile `cutlist`/`cutlist-png`
  targets, `all` includes cutlist (empty STOCK exits clean).

**Migrate:** copy cutlist.py, declare STOCK from the workshop profile,
re-copy the Makefile cutlist targets; feed the buildsheet purchasing rows
from `cutlist.purchase_rows()`.

## v0.14.0

- drawings.py machine lint at every `write()`: dim-truth (label vs
  measured anchor distance; `(ref)`, `~`, `×`, `°` labels skipped) and
  text-collision checks (label×label, strokes/edges through labels), plus
  `uv run drawings.py lint-selftest`.
- New `Sheet.detail(view, center, radius, "2:1", ...)` circular detail
  views with `Detail.pt()` anchors; `Sheet.auto_holes(view, part)` via
  the new optional `recognise` extra (b123d-recognisers); `hole_note`
  gained depth/cbore/csink pass-through.

**Migrate:** re-copy drawings.py (keep your sheet functions; the Sheet
API is backward compatible), add the `recognise` extra to pyproject if
auto_holes is wanted, and fix any lint WARNINGs the first run prints —
they are real findings, not noise.

## v0.13.0

No template changes (pack-side CI only).

## v0.12.0

- model.py: `check` CLI command (pairwise interference with
  ALLOWED_INTERFERENCE whitelist, optional MIN_CLEARANCE pairs) and
  `mass_properties()`; Makefile `check` target wired into `all`.

**Migrate:** re-copy model.py's check block (config constants +
`_built_parts`/`mass_properties`/`check` + the CLI branch) and the
Makefile `check` target; derive fea.py STABILITY from
`model.mass_properties()`.

## v0.11.0

- CLAUDE.md.template gained the pack-version stamp line; SKILL.md gained
  the end-of-project retrospective step; new references/cnc-router.md.

**Migrate:** add `Pack: robion-maker-pack v<version>` + MIGRATIONS.md
pointer to the project CLAUDE.md.

## v0.10.0

- `VIZ_COMPOUNDS` values may be a zero-arg callable returning any Shape
  (N shifted copies, purchased hardware) — the key-list form still works.
- `merge_pdfs.py` derives `<name>_komplet.pdf` from `[project].name` in
  pyproject.toml; `KOMPLET_NAME` is only an override.
- fea.py rule: fill ANALYTIC/STABILITY by computing from model.py.

**Migrate:** replace hand-merged viz exports with a `VIZ_COMPOUNDS` callable;
set `[project].name` to the product slug (or keep `KOMPLET_NAME`); replace any
retyped numbers in fea.py blocks with `import model` derivations.

## v0.9.0

- View placement rewritten to use ACTUAL projected edge bboxes:
  `Sheet.add_views(part, kinds)` and `Sheet.place_view(view, side, of)`
  replace `layout_views()` (removed) and hand-computed `shift=` tuples —
  the old model-span math threw views off-sheet for parts modeled away
  from the origin.
- Lettering: osifont (ISO 3098, has ⌀ and Czech diacritics) fetched by
  `make font`, auto-detected via `FONT_PATH`; Arial-italic fallback → use
  Ø (U+00D8) in labels there.
- `PartSpec.group` collapses part families into one BOM row; shared
  `model.bom_rows()` feeds `bom()` and `drawings.parts_rows()`.
- `VIZ_COMPOUNDS` (key-list form) for merged viz STLs; builders must
  return parts in ASSEMBLY coordinates (now an explicit convention).
- fea.py: second analytic block `Stability` (tip-over) beside `Analytic`.
- buildsheet.html: optional `{{EXTRA_FIGURES}}` / `{{FASTENERS_TABLE}}`
  slots (collapse until filled); new `datauri.py` helper (Pillow) replaces
  sips; `pillow` added to dependencies.
- New view kind `"bottom"`; parts-table height reserved by frame centering.
- Makefile: `font` target + doctor lines for osifont.

**Migrate:** replace `View(part, kind, shift=(dx, dy))` layouts with
`s.add_views(...)` / `s.place_view(...)`; run `make font`; swap `sips`
usage for `uv run datauri.py`; add `pillow>=10` to dependencies; if the
BOM has repeated families, add `group=` to their PartSpecs.

## v0.8.0

- buildsheet.html carries its own `@media print` block (A4 pages, light
  palette via cascade, screen-only/print-only swap) — ONE file serves the
  artifact page and `make pdf`; the derived `.print.html` variant is gone
  and the Makefile `pdf` target prints `out/vyrobni_list.html`.

**Migrate:** drop the project's `.print.html` generator branch; make the
generator write only `out/vyrobni_list.html`; update Makefile `pdf` target
path (or re-copy the template Makefile).

## v0.7.0

- blender_viz.py: exploded-view shots — per-part `EXPLODE` directions +
  an `"explode": factor` key on any SHOTS entry; locations restore after
  each shot.

**Migrate:** re-copy blender_viz.py helpers or port the EXPLODE block +
`render_shots` changes; keep your PARTS()/SHOTS config.

## v0.6.0

- drawings.py adopted `build123d-drafting-helpers` (pinned `<0.15`):
  named-side `dim(p1, p2, side, offset, label)` replaces the signed-offset
  ExtensionLine rule; new `hole_note` / `center_mark` / `centerline` /
  `note` / `section_indicator` / `balloon` / `parts_table`; new `marks`
  layer; `section_faces(solid, axis, coord)` generalized to X/Y/Z.
- `write(dxf=True)` layered DXF (model mm, 1:1); `manifest.json` drives
  merge_pdfs.py sheet order (SHEET_ORDER is a fallback); scale accepts
  ratios ("2:1"); DATE defaults to today.
- Makefile: `drawings-png` glob fixed (previously skipped any sheet whose
  name ended in "t" — including the demo).

**Migrate:** add `build123d-drafting-helpers>=0.14.2,<0.15` to
dependencies; change `dim()` calls from signed offsets to named sides;
re-copy the Makefile `drawings-png` recipe; delete manual SHEET_ORDER
maintenance (keep the list as fallback only).
