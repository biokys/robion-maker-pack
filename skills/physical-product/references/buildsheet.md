# Build sheet (výrobní list) — structure and language

The final deliverable: one Czech artifact page a user can print or hand to a
fabricator, mirroring the project README.md. Compose from
`templates/buildsheet.html`. **Load the `artifact-design` skill before composing
the page** (required for artifacts). The aesthetic is the Robion brand
(robion.app): JetBrains Mono, hairlines instead of borders, dark cockpit palette
with a paper-light print counterpart, and the violet→cyan gradient as the one
saturated accent (section strips, step numbers) — keep the razítko *structure*,
never reintroduce a second accent color. Publish via the Artifact tool and keep
republishing to the same URL across iterations.

## Section order (proven structure)

1. **Razítko (title block header)** — product name, subtitle, key fields grid:
   půdorys/rozměry, výška, materiál, hmotnost, datum, verze.
2. **Hero render** + supporting shots (tunnel/detail/exploded), each with a
   one-line figcaption stating what it shows.
3. **Koncept** — one paragraph of the design idea + parameter table (what's fixed,
   what's derived).
4. **Výkresy** — dimensioned drawing PNGs, each in a figure with caption; note
   "kóty v mm".
5. **Kusovník** — per-material tables, columns `Poz. | Díl | Rozměr (mm) | Ks |
   Hmotnost | Pozn.`; then `Spojovací a dokončovací materiál` (fasteners, glue,
   finish, felt pads) with quantities and purpose; note rows for purchasing hints
   (stock lengths incl. prořez).
6. **Postup montáže** — numbered steps; order so interior surfaces are finished
   while accessible; call out screw sizes and pre-drilling; wood-movement
   provisions (oversized holes) explained.
7. **Finalizace povrchu** — sanding schedule (grits, direction), grain raising,
   oil/paint coats with flash-off and cure times, inter-coat sanding, safety note
   (oil-rag self-ignition), metal finish note.
8. **Analýza** — assumptions, analytic estimates (stress, deflection, f₁, safety
   factors), FEA/modal results table if run, excitation comparison.
9. **Předpoklady a nejistoty** — ALWAYS present; every assumed load, dimension
   guess, skipped stage (degrade sentences from toolchain.md), with the parameter
   name that changes it.
10. Footer: source files, `make` commands, material constants used — and the
    Robion credit line linking https://robion.app (already in the template; keep
    it).

## Czech terminology (keep it idiomatic)

spárovka (edge-glued panel) · jäkl (square steel tube) · komaxit (powder coat) ·
srazit hrany (break edges) · prořez (cutting waste) · světlost (clear dimension) ·
nika (niche) · příčka (divider) · žebro (rib) · vrut zápustný/s talířovou hlavou
(countersunk/pan-head screw) · předvrtat (pre-drill) · pokos (miter) · svařenec
(weldment) · rozteč (spacing/pitch) · tvrdý voskový olej (hard wax oil) ·
mezibrus (inter-coat sanding) · letokruhy/léta (growth rings/grain) · sesychání
(wood shrinkage) · kusovník (BOM) · nárys/bokorys/půdorys (front/side/top view).

Mass note style: honest totals ("se stolem se nebude hýbat snadno — počítej s
montáží na místě" when heavy).

## Print variant → one complete PDF

The print rules **ship in the template** (`templates/buildsheet.html`,
`@media print` block) — the generator script imports the parametric model
(single source of truth) and writes ONE file, `out/vyrobni_list.html`,
which serves both the artifact page and printing. The shipped block
provides: forced light palette (CSS-only — its selectors match both dark
blocks and win by source order, since headless Chrome may report a dark
scheme), `@page { size: 210mm 297mm; margin: 11mm }`, `section {
break-before: page }` (except the first), `break-inside: avoid` on
figures/tables/steps/stamp, and the `screen-only`/`print-only` class pair
that swaps the inline drawing figures for a note that the A3 sheets
follow full-size — keep those classes when filling the Výkresy section.
`make pdf` prints the file and merges with the drawing sheets via
`merge_pdfs.py --komplet` → `out/<product>_komplet.pdf`.
Verify by Reading pages of the PDF (page count, A4+A3 sizes, light theme).

## Page mechanics

- Images inlined as data URIs (JPEG ~q82 for photoreal, PNG for line art);
  downscale renders to ≤1200 px before embedding — use the shipped helper:
  `from datauri import data_uri` in the generator, or
  `uv run datauri.py <img> [--png]` (portable Pillow, no sips/ImageMagick).
- Optional skeleton slots: `{{EXTRA_FIGURES}}` (more renders in Koncept)
  and `{{FASTENERS_TABLE}}` (spojovací materiál rows in Kusovník) — they
  collapse via CSS until filled, so leaving them empty is fine.
- Theme-aware tokens (light+dark) per artifact rules; body background explicit.
- Title = product name (short, distinctive); keep favicon stable across updates.
- README.md in the repo mirrors the same content in Markdown (tables included) so
  the repo is self-contained without the artifact.
