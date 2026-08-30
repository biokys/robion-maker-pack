# Woodworking playbook — furniture & joinery from solid wood and sheet goods

## When this applies

Furniture, shelving, boxes, workshop fixtures — anything cut from sheet goods
(spárovka, překližka, MDF, lamino) or solid wood (masiv). Combines routinely
with metalwork (steel legs + oak top), 3d-print (brackets, jigs) and
cnc-router (flat parts machined instead of sawn). Out of scope: green
woodworking, turning, steam bending — run the spine bare and say so.

## Intake additions

- Visible vs hidden faces: which surfaces show (drives grain direction,
  material grade and joint choice).
- Indoor or outdoor? Outdoor changes material (modřín, dub, impregnace) and
  glue (D3/D4) — record the choice under "Předpoklady".
- Movement context: near heating? bathroom? Solid-wood panels move across the
  grain; wide masiv tops need movement-tolerant fastening.
- Finish preference beyond the profile: olej / vosk / lak / mořidlo, and how
  much sheen.

## Stack & stage refinements

Stack: **solids**.

- **Model** — joints are chosen from the profile's `tools`, never from
  ambition: no domino/dowel jig → pocket screws or dowels with a 1:1 drilling
  template; router → dados/rabbets; hand tools only → screwed butt joints with
  cleats. Sheet parts keep constant thickness (they must qualify as flat
  plates for CNC/cutlist). Solid-wood panels: model the top as one part, but
  never design cross-grain glued constraints — fasten wide tops with elongated
  holes or z-clips ("úchytky na desku") and say so in the plan.
- **Drawings** — every drilled joint gets positions dimensioned from a
  reference edge; small parts and joint clusters earn a **1:1 sheet** (the
  drawing framework supports true scale) that doubles as a drilling template —
  printed via `make drawings-pdf`, taped to the workpiece. State grain
  direction on every visible part ("směr let").
- **BOM + cut plan** — `cutlist.py` Sheets: `allow_rotation=False` for every
  visible part (grain runs along `width`), factory edges trimmed via `trim`,
  kerf from the actual saw (track saw ~3 mm). Fasteners, glue and finish
  materials belong in the BOM with Czech names.
- **Make plan** — cutting order (rips before crosscuts, matching the cut
  diagram), then joinery, then a dry-fit step ("suchá montáž") BEFORE glue,
  then finishing. Finish interior/hard-to-reach surfaces while still
  accessible. Finishing schedule with grits and cure times: sanding 120 → 180
  (→ 240 for masiv under oil), oil in thin coats with the can's cure times,
  de-nib between coats.
- **Analysis** — analytic only for shelves and tables (deflection of the worst
  span under a stated load); FEA is rarely worth it in wood — say so instead
  of running it.

## Materials & suppliers (CZ)

- Sheet stock: spárovka (smrk/buk/dub, typ. 18 mm), překližka (typ. 6/9/12/18
  mm), MDF, lamino. Solid wood: hoblované hranoly a fošny.
- Suppliers a BOM may name: JAF Holz, Dřevo Trust, local pila/dřevocentrum;
  hobbymarkety (Hornbach, Bauhaus) for small quantities and fasteners. Prices
  vary — leave the price column per project, never invent one.
- Fasteners: vruty (torx), kolíky, konfirmáty for lamino; glue PU or PVAc
  (D3 interiér / D4 exteriér).

## Last mile

The user works from three artifacts: the cut diagram ("nářezový plán") at the
saw, 1:1 templates at the drill, and the numbered assembly plan at the bench.
If the profile lists a CNC router, flat parts can go through
[cnc-router.md](cnc-router.md) instead of the saw — the cut plan then only
covers stock purchasing.

## Safety gates

Machines start on a human click only — this vertical usually has none wired,
but CNC-routed parts inherit the cnc-router gates. Build sheet must warn about:
dust extraction for MDF, PU glue foaming/stains, oily rags self-ignition
("hadry od oleje nechat rozprostřené, ne v kouli").
