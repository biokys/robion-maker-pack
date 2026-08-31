# KiCad pipeline (products with electronics)

Applies only when the product contains a PCB. Honest scope: `kicad-cli` validates
and exports headlessly, but **does not author** schematics/layouts — authoring is
interactive KiCad work or careful `.kicad_sch`/`.kicad_pcb` file editing. Plan user
checkpoints after schematic and after layout; this is the least-automated stage.

Typical macOS binary:
`/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli` — expose as
`KICAD_CLI ?=` in the Makefile.

## Headless flow (after each authoring round)

```sh
# electrical rules check on the schematic
"$KICAD_CLI" sch erc board/board.kicad_sch --exit-code-violations
# design rules check on the layout
"$KICAD_CLI" pcb drc board/board.kicad_pcb --exit-code-violations
# fabrication outputs
"$KICAD_CLI" pcb export gerbers board/board.kicad_pcb -o out/pcb/gerbers/
"$KICAD_CLI" pcb export drill   board/board.kicad_pcb -o out/pcb/gerbers/
# board as STEP for the mechanical assembly
"$KICAD_CLI" pcb export step board/board.kicad_pcb -o out/pcb/board.step
# render for the build sheet
"$KICAD_CLI" pcb render board/board.kicad_pcb -o out/pcb/board.png
# BOM (merge into the product BOM)
"$KICAD_CLI" sch export bom board/board.kicad_sch -o out/pcb/bom.csv
```

## Enclosure fit loop

1. Export board STEP (above) — includes component 3D models where footprints
   have them.
2. `import_step("out/pcb/board.step")` in `model.py`; place it in the assembly
   with its mounting-hole positions as parameters shared between the PCB and the
   enclosure model (single source of truth: define hole XY in Python, generate
   both the enclosure bosses and a KiCad-importable note from it).
3. Check clearances (connector cutouts, tallest component vs lid) with boolean
   intersection — an empty intersection is the pass criterion, assert it.

## Build sheet integration

PCB section gets: board render, ERC/DRC status (clean / list of violations),
gerber location, PCB BOM merged into the BOM as its own table (Pos., reference,
hodnota, pouzdro, ks).
