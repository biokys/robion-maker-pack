# Template migrations

Templates are copied into product projects at scaffold time, so a running
project does not pick up pack updates by itself. This file lists, per pack
release, what changed in `skills/physical-product/templates/` and how to
migrate an existing project — apply only the sections newer than the pack
version stamped in the project's CLAUDE.md.

Migrating is always optional: projects keep working on the template vintage
they were scaffolded with.

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
