# Sewing playbook — sewn goods from fabric, canvas and leather

## When this applies

Products cut from flexible sheet goods and sewn: bags, aprons ("zástěra"),
covers, cushions, organizers, pouches, simple unfitted garments. Leather goods
follow the same pipeline (allowance and assembly differ — noted inline).
Honest boundary: **fitted garment drafting (tailoring) is iterative fit work**
— the pipeline produces the pattern, but a fitted garment needs a test garment
("zkušební šití z levné látky") as a mandatory gate; never promise fit from
measurements alone.

## Intake additions

- Fabric reality: what's on hand or planned — material, **usable width**
  (typical 140–150 cm; leather = hides, no width), directional print or nap
  ("směr vzoru")? Washable → note pre-shrinking ("srazit předem") in the plan.
- Machine: domestic machine, overlock available? (drives seam finish
  choices) — lives in the workshop profile (`machines.sewing`,
  `machines.overlock`, `notions_on_hand`); ask only what it doesn't answer.
- For garments: measurements (mm, over the actual person), desired ease, and
  the fit-gate agreement above.
- Hardware/notions: zips (exact length matters), buckles, webbing, interfacing
  ("výztuha").

## Stack & stage refinements

Stack: **patterns2d** ([../stacks/patterns2d.md](../stacks/patterns2d.md)) —
`pattern.py` is the source of truth, pieces are 2D polygons in mm.

- **Model (pattern)** — builders return the STITCH line; seam allowance is
  applied programmatically per piece (default 10 mm; hems 25–40 mm — model the
  hem as a deeper allowance or an explicit fold extension and say which;
  leather: 0 for edges that get glued/burnished). Symmetric pieces built as
  halves on the fold axis and auto-unfolded by the template. Notches at every
  seam-matching point — two pieces sewn together carry notches at the same
  arc positions; on `allowance=0` edges notches are invisible — use
  `PieceSpec.marks` instead. Internal markings (stitching channels, fold
  lines, placement of pockets/appliqués) always go into `marks` +
  `mark_labels` so they print on the 1:1 sheets.
- **See it** — the marker and per-piece PNGs in the cockpit as image tiles
  plus the `make viz` hero illustration; there is no live viewport — sliders
  set `ROBION_PARAMS`, and a `make previews` run-button re-renders the tiles.
- **Pattern sheets** — 1:1 print via `make pdf` (A4 tiling with a 100 mm
  control square — the plan's step 1 is measuring it after printing). Big
  pieces for plotter-less users are the point of the tiling.
- **BOM** — fabric consumption from the marker + purchase margin parameter,
  plus notions with sizes (zip length, webbing meters, thread). Directional
  fabric ⇒ layout must not rotate pieces — consumption goes up; that's real,
  don't hide it.
- **Make plan** — cutting instructions (which pieces from which fold), then
  the sewing order as numbered Czech steps, pressing ("přežehlit") between
  steps, seam finishes per machine (overlock / zigzag / French seam), and
  hardware installation steps. Leather: cutting with a knife, edge finishing,
  glue-then-stitch order.
- **Analysis** — none; the fit gate replaces it for garments.

## Materials & suppliers (CZ)

Kanvas/kepr, bavlněné plátno, softshell, kůže/koženka; výztuhy (ronar,
vlizelín). Suppliers a BOM may name: Látky Mráz, Stoklasa (galanterie,
hardware), local galanterie. Leave prices per project.

## Last mile

The user prints the pattern 1:1 (control square first!), tapes pages by the
registration marks, cuts fabric per the cutting instructions, and sews by the
numbered order. For garments: the first run is the test garment, feedback
loops back into measurements/ease parameters — that's one iteration of the
spine, not a new project.

## Safety gates

No machines to gate. The build sheet must state: pattern is untested until the
control square measured 100 mm and (for garments) the test garment fit — both
are user-side gates, list them as such.
