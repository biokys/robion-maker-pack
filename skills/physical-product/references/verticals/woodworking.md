# Woodworking playbook — furniture & joinery from solid wood and sheet goods

## When this applies

Furniture, shelving, boxes, workshop fixtures — anything cut from sheet goods
(edge-glued panel, plywood, MDF, melamine-faced board) or solid wood.
Combines routinely with metalwork (steel legs + oak top), 3d-print (brackets,
jigs) and cnc-router (flat parts machined instead of sawn). Out of scope:
green woodworking, turning, steam bending — run the spine bare and say so.

## Intake additions

- Visible vs hidden faces: which surfaces show (drives grain direction,
  material grade and joint choice).
- Indoor or outdoor? Outdoor changes material (larch, oak, preservative
  treatment) and glue (D3/D4) — record the choice under "Assumptions".
- Movement context: near heating? bathroom? Solid-wood panels move across the
  grain; wide solid-wood tops need movement-tolerant fastening.
- Finish preference beyond the profile: oil / wax / varnish / stain, and how
  much sheen.

## Stack & stage refinements

Stack: **solids**.

- **Model** — joints are chosen from the profile's `tools`, never from
  ambition: no domino/dowel jig → pocket screws or dowels with a 1:1 drilling
  template; router → dados/rabbets; hand tools only → screwed butt joints with
  cleats. Sheet parts keep constant thickness (they must qualify as flat
  plates for CNC/cutlist). Solid-wood panels: model the top as one part, but
  never design cross-grain glued constraints — fasten wide tops with elongated
  holes or z-clip tabletop fasteners and say so in the plan.
- **Drawings** — every drilled joint gets positions dimensioned from a
  reference edge; small parts and joint clusters earn a **1:1 sheet** (the
  drawing framework supports true scale) that doubles as a drilling template —
  printed via `make drawings-pdf`, taped to the workpiece. State grain
  direction on every visible part.
- **BOM + cut plan** — `cutlist.py` Sheets: `allow_rotation=False` for every
  visible part (grain runs along `width`), factory edges trimmed via `trim`,
  kerf from the actual saw (track saw ~3 mm). Fasteners, glue and finish
  materials belong in the BOM under the names the trade uses.
- **Make plan** — cutting order (rips before crosscuts, matching the cut
  diagram), then joinery, then a dry-fit step BEFORE glue, then finishing.
  Finish interior/hard-to-reach surfaces while still accessible. Finishing
  schedule with grits and cure times: sanding 120 → 180 (→ 240 for solid
  wood under oil), oil in thin coats with the can's cure times, de-nib
  between coats.
- **Analysis** — analytic only for shelves and tables (deflection of the worst
  span under a stated load); FEA is rarely worth it in wood — say so instead
  of running it.

## Materials & stock

- Sheet stock: edge-glued panel (spruce/beech/oak, typ. 18 mm), plywood
  (typ. 6/9/12/18 mm), MDF, melamine-faced board. Solid wood: planed square
  stock and boards.
- Fasteners: wood screws (torx drive), dowels, confirmat screws for
  melamine-faced board; glue PU or PVAc (D3 interior / D4 exterior).
- Name a timber merchant, sawmill or builders' merchant from the user's own
  market — the workshop profile may name preferred suppliers; never invent a
  supplier or a price, and leave the price column per project.

## Last mile

The user works from three artifacts: the cut diagram at the saw, 1:1
templates at the drill, and the numbered assembly plan at the bench.
If the profile lists a CNC router, flat parts can go through
[cnc-router.md](cnc-router.md) instead of the saw — the cut plan then only
covers stock purchasing.

## Safety gates

Machines start on a human click only — this vertical usually has none wired,
but CNC-routed parts inherit the cnc-router gates. Build sheet must warn about:
dust extraction for MDF, PU glue foaming/stains, oily rags self-ignition
(lay them out flat to dry, never bundled up).
