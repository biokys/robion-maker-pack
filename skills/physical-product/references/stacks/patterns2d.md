# Patterns2d stack — parametric 2D cutting patterns

The stack for products cut from flexible sheet goods (fabric, leather, foam)
and assembled by sewing/gluing. The source of truth is `pattern.py`: pieces as
2D polygons in millimetres, everything downstream derived — per-piece SVGs,
the marker layout, fabric consumption, and 1:1 A4-tiled print sheets.

## Anatomy (mirrors the solids conventions)

- **Parameters block** at the top (mm), derived values + asserts below,
  `ROBION_PARAMS` overrides applied between them — identical contract to
  `model.py` (CONTRACT.md §2), so Robion sliders work unchanged.
- **`PIECES` registry** — the `PARTS` analog: one builder per piece returning
  the closed **stitch-line** polygon; a `PieceSpec` carries `cut` count,
  `on_fold`, `grain`, seam `allowance` (None → default), `notches`, `notes`.
  Builders never depend on each other's side effects.
- Symmetric pieces: build the half with the fold axis on x=0 and set
  `on_fold=True` — the template unfolds (mirrors) it and draws the center
  line. Pieces are cut flat; no fabric-fold alignment errors.
- Seam allowance: shapely mitre buffer of the stitch polygon → the cutting
  line. `allowance=0` means the builder returned the cutting line itself
  (leather edges, hemless pieces).
- Helpers in the template: `bezier()` (sampled cubic), `mirror_x()`,
  validity checks via shapely.

## Outputs (canonical)

```
out/
├── pieces/<key>.svg     # 1:1 per piece: cut line, dashed stitch line,
│                        # grainline arrow, notches, label + cut count
├── layout.svg (+ .html) # the marker: pieces packed onto fabric width,
│                        # consumed length + efficiency
├── bom.md               # fabric consumption + notions (Czech)
└── print/strih_A4.html  # A4-tiled 1:1 pattern (make pdf → strih_A4.pdf)
```

## Commands

```sh
uv run pattern.py export   # pieces + layout SVGs
uv run pattern.py bom      # out/bom.md (+ stdout)
uv run pattern.py check    # validity gate: closed, simple, fits fabric width
uv run pattern.py show     # list pieces and sizes
uv run tile_a4.py          # out/print/strih_A4.html (A4 tiling, 1:1)
make pdf                   # Chrome-print the tiling → strih_A4.pdf
make layout-png            # marker PNG for the Read-before-showing gate
```

## Rules

- The marker packs piece bounding boxes (shelf FFD, deterministic) — an upper
  bound for purchasing, not professional marker making; say so in the BOM.
  `grain="lengthwise"` pieces never rotate; `grain="any"` may rotate 90°.
- The A4 tiling prints at TRUE scale only via the `@page` size and mm-sized
  SVG — page 1 carries a 100 mm control square; the make plan's first step is
  measuring it.
- Every layout/piece SVG gets rendered to PNG and **Read** before the user
  sees it — same habit as drawings.
- Degrade: no Chrome ⇒ ship the SVGs and say the PDF step was skipped (Czech
  sentence per [../core/toolchain.md](../core/toolchain.md) conventions).

## Scaffold specifics

Templates: `templates/common/` + `templates/patterns2d/` (pattern.py,
tile_a4.py, Makefile, pyproject.toml, CLAUDE.md.template → CLAUDE.md). Deps:
shapely (offsets/validity) + pillow (datauri for the build sheet). No fonts,
no build123d, no FEA extras.
