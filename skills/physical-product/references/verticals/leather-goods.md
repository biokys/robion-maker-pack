# Leather goods playbook — cut & stitched leather work

## When this applies

Wallets, belts, pouches, knife sheaths, bags, straps, tool rolls — anything
cut from leather and assembled by saddle stitching, riveting or gluing.
Combines with sewing (fabric lining) and metalwork (buckles made, not bought
— rare). Out of scope: molded/wet-formed leather and garment leatherwork —
run the spine bare and say so.

## Intake additions

- Leather on hand or planned: type (vegetable vs chrome tanned — veg tan
  burnishes and tools, chrome doesn't), thickness in mm, and how much of the
  hide is usable (leather has quality zones — bellies stretch).
- Tools: pricking irons (which spacing?), round/rotary knife, edge beveler,
  groover, rivet/snap setters. Stitching by hand is the default assumption.
- Typical thickness by product (guidance, confirm with the user): wallets
  0.8–1.4 mm, belts 3–4 mm, bags 1.6–2.4 mm; layered parts add up — check
  fold and seam bulk early.

## Stack & stage refinements

Stack: **patterns2d**.

- **Pattern** — builders return the STITCH line and `allowance` is the
  stitch-to-edge distance (typ. 3–4 mm, match the groover) — the cutting line
  lands exactly where the edge should be. Edges that are glued/burnished
  only: `allowance=0` and the builder returns the cut line. Fold lines
  (wallet spines) drawn like fold axes; mark skiving zones (where the
  leather is thinned) in piece notes. Stitch-hole spacing is the iron's, not
  the pattern's — the pattern carries the stitch LINE, the make plan says
  which iron.
- **Marker** — hides aren't rolls: treat `fabric_width` as a nominal working
  width and present the layout as a cutting GUIDE, not gospel; the plan tells
  the user to place load-bearing pieces (straps, belts) along the backbone
  and keep bellies for stiffened or hidden parts.
- **Print** — leather patterns are cut around templates: the plan's first
  step after the control square is gluing the printed pattern to cardboard
  (a hard template) and cutting around it with an awl trace.
- **BOM** — leather area with a waste factor (cut generously, 20–30 % on
  hides), thread (waxed polyester/linen, length ≈ 4× seam length per the
  saddle-stitch rule of thumb), hardware with sizes (buckle bar width =
  strap width), edge paint or gum tragacanth, contact cement.
- **Make plan** — order: cut → skive → glue laminations → groove stitch
  lines → punch holes (irons, on a punching pad) → stitch (saddle stitch,
  two needles) → edge: bevel → sand → burnish (veg tan) or edge paint.
  Hardware before closing seams that block access.
- **Analysis** — none; the gate is a test piece for new thickness/hardware
  combos.

## Materials & stock

Cowhide by tannage (vegetable or chrome) and thickness in mm, sold as whole
hides, sides or shoulders — area priced per square foot or square decimetre.
Waxed polyester or linen thread, edge paint or gum tragacanth, contact
cement. Hardware by size: buckles (bar width = strap width), rivets, snaps,
D-rings. Name a tannery, leather merchant or haberdashery from the user's own
market — the workshop profile may name preferred suppliers; never invent a
supplier or a price. Leave prices per project.

## Last mile

The user cuts around hard templates, punches and stitches by hand following
the numbered plan. Photos of the stitching order help more than dimensions —
put an exploded assembly sketch (piece stacking order) in the build sheet
when layers exceed two.

## Safety gates

No machines. Build sheet must warn about: round-knife technique (cut away
from the holding hand), contact cement ventilation, and that dyes/edge paint
stain permanently — test on scrap.
