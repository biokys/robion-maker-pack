# Build sheet — structure and language

The final deliverable: one artifact page a user can print or hand to a
fabricator, mirroring the project README.md. Compose from
`templates/common/buildsheet.html` through the generator
`templates/solids/buildsheet.py` (`make buildsheet`; `make pdf` runs it
first): the machinery — slot filling, data-URI images, Markdown→HTML for the
analysis reports, BOM and purchasing rows from `model.py` / `cutlist.py`,
drawing figures from the manifest, README and `out/plan.md` mirrors — is
fixed; the CONTENT block (name, concept paragraph, parameter rows, fastener
rows, steps, assumptions) is what a project writes, in the user's language. **Load the `artifact-design` skill before composing
the page** (required for artifacts). The aesthetic is the Robion brand
(robion.app): JetBrains Mono, hairlines instead of borders, dark cockpit palette
with a paper-light print counterpart, and the violet→cyan gradient as the one
saturated accent (section strips, step numbers) — keep the title-block
*structure*, never reintroduce a second accent color. Publish via the Artifact
tool and keep republishing to the same URL across iterations.

**Everything the reader sees on this page is written in the user's language**
(SKILL.md, Language rule). The section names below are English labels for what
each section CONTAINS — translate them, and use the heading a workshop in that
language would actually put on the document.

## Section order (proven structure)

Section names below are the solids defaults — headings, the print-companion
note and the footer source line are slots filled per vertical (table in the
next section).

1. **Title block header** — product name, subtitle, key fields grid:
   footprint/dimensions, height, material, mass, date, version.
2. **Hero render** + supporting shots (tunnel/detail/exploded), each with a
   one-line figcaption stating what it shows.
3. **Concept** — one paragraph of the design idea + parameter table (what's fixed,
   what's derived).
4. **Drawings** — dimensioned drawing PNGs, each in a figure with caption; note
   that dimensions are in mm.
5. **Bill of materials** — per-material tables, columns `Pos. | Part | Size (mm)
   | Qty | Mass | Note`; then a fasteners & finishing table (fasteners, glue,
   finish, felt pads) with quantities and purpose. Purchasing rows come from
   `cutlist.purchase_rows()` (material, stock item, qty, utilization, offcut —
   never retype them), and the section gets a figure embedding `out/cutlist.png`
   (`datauri.data_uri(..., png=True)`, line art) with a one-line figcaption.
6. **Assembly steps** — numbered steps; order so interior surfaces are finished
   while accessible; call out screw sizes and pre-drilling; wood-movement
   provisions (oversized holes) explained.
7. **Surface finishing** — sanding schedule (grits, direction), grain raising,
   oil/paint coats with flash-off and cure times, inter-coat sanding, safety note
   (oil-rag self-ignition), metal finish note.
8. **Analysis** — assumptions, analytic estimates (stress, deflection, f₁, safety
   factors), FEA/modal results table if run, excitation comparison.
9. **Assumptions & uncertainties** — ALWAYS present; every assumed load, dimension
   guess, skipped stage (degrade sentences from toolchain.md), with the parameter
   name that changes it.
10. Footer: source files, `make` commands, material constants used — and the
    Robion credit line linking https://robion.app (already in the template; keep
    it).

## Per-vertical slots (section headings, print note, footer)

The skeleton's headings are `{{SECTION_*}}` slots so a generator fills them like
any other slot — never string-replace rendered headings after the fact (fragile,
and it broke on the first sewn product). Fill them with the TRANSLATED heading:

| Slot | solids (default) | sewing / patterns2d |
|---|---|---|
| `{{SECTION_DRAWINGS}}` | Drawings | Pattern pieces |
| `{{SECTION_ASSEMBLY}}` | Assembly steps | Sewing order |
| `{{SECTION_FINISHING}}` | Surface finishing | Care & waterproofing |
| `{{SECTION_ANALYSIS}}` | Analysis | Verification gates |
| `{{PRINT_NOTE}}` | The A3 production drawings follow this document at full size (scale per each sheet's title block). | The pattern prints separately from `pattern_A4.pdf` at 1:1 — measure the 100 × 100 mm control square before cutting. |
| `{{FOOTER_SOURCES}}` | Source: `model.py` · drawings: `make drawings` · visualization: `make viz` · BOM: `make bom` | Source: `pattern.py` · 1:1 pattern: `make pdf` · illustration: `make viz` · BOM: `make bom` |

Other verticals compose their own values in the same spirit (a leather playbook
says "Sewing & gluing order", a weldment "Welding sequence"); Concept, Bill of
materials and Assumptions & uncertainties stay fixed — they are universal.

## Vocabulary (keep it idiomatic)

Translate the CONCEPT, never the English words. These are the terms a dictionary
gets wrong and a workshop notices immediately — find what the trade actually
calls each one in the user's language before writing the sheet:

edge-glued panel · square steel tube · powder coat · break the edges · cutting
waste · clear dimension · niche · divider · rib · countersunk / pan-head screw ·
pre-drill · miter · weldment · spacing (pitch) · hard wax oil · inter-coat
sanding · growth rings (grain direction) · wood shrinkage · bill of materials ·
front / side / top view.

Whole trades carry their own register — joinery, metalwork and sewing name the
same operation differently. When unsure, ask the user what they call it; their
word goes on the sheet.

Mass note style: honest totals — when a piece is heavy, say plainly that it
won't be moved easily and should be assembled in place.

## Print variant → one complete PDF

The print rules **ship in the template** (`templates/common/buildsheet.html`,
`@media print` block) — the generator script imports the parametric model
(single source of truth) and writes ONE file, `out/build_sheet.html`,
which serves both the artifact page and printing. The shipped block
provides: forced light palette (CSS-only — its selectors match both dark
blocks and win by source order, since headless Chrome may report a dark
scheme), `@page { size: 210mm 297mm; margin: 11mm }`, `section {
break-before: page }` (except the first), `break-inside: avoid` on
figures/tables/steps/stamp, and the `screen-only`/`print-only` class pair
that swaps the inline drawing figures for the `{{PRINT_NOTE}}` print
note — keep those classes when filling the drawings/pattern section.

Per stack:

- **solids** — `make pdf` prints the file and merges with the drawing
  sheets via `merge_pdfs.py --complete` → `out/<product>_complete.pdf`.
- **patterns2d** — `make pdf` prints the PATTERN tiling (`pattern_A4.pdf`),
  not the build sheet; the build sheet prints via `make buildsheet-pdf` →
  `out/build_sheet.pdf`. The print companion of a sewn product is the 1:1
  pattern, not A3 drawings — ship the two PDFs side by side, never merge
  them (a merged document invites "fit to page", which destroys the 1:1
  scale the control square guards).

Verify by Reading pages of the PDF (page count, sizes, light theme).

## Page mechanics

- Images inlined as data URIs (JPEG ~q82 for photoreal, PNG for line art);
  downscale renders to ≤1200 px before embedding — use the shipped helper:
  `from datauri import data_uri` in the generator, or
  `uv run datauri.py <img> [--png]` (portable Pillow, no sips/ImageMagick).
- Optional skeleton slots: `{{EXTRA_FIGURES}}` (more renders in Concept)
  and `{{FASTENERS_TABLE}}` (fasteners rows in the BOM) — they
  collapse via CSS until filled, so leaving them empty is fine. Slots that
  sit inside HTML comments in the skeleton (`<!-- {{BOM_ROWS}} -->`) are
  unwrapped by the generator's `fill()` before substitution — a plain
  string replace would leave the rows commented out.
- `{{PARAMETER_ROWS}}` (Concept: fixed vs derived), `{{PURCHASE_ROWS}}` and
  `{{CUTLIST_DATA_URI}}` / `{{CUTLIST_CAPTION}}` (BOM: purchasing table and
  the cut-plan figure) are filled from `cutlist.purchase_rows()` and
  `out/cutlist.png`; the generator degrades to a note when the PNG is
  missing.
- Theme-aware tokens (light+dark) per artifact rules; body background explicit.
- Title = product name (short, distinctive); keep favicon stable across updates.
- `out/build_sheet.html` is a BUILD ARTIFACT: with inlined data URIs it is
  a several-hundred-kB monolith no one can hand-edit or patch reliably —
  every update goes through the generator script and a re-run, never
  through editing or string-patching the rendered file.
- README.md in the repo mirrors the same content in Markdown (tables included) so
  the repo is self-contained without the artifact.
