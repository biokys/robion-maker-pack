# KiCad pipeline (products with electronics)

Applies only when the product contains a PCB. `kicad-cli` validates and
exports headlessly but **does not author** schematics or layouts. Authoring
is either interactive KiCad work or — proven on the first real board —
scripted and deterministic, the same shape as the solids stack:

- **The circuit as data** — `board/circuit.py`, plain dataclasses: each
  component with symbol, footprint, MPN (and distributor number), and a
  pin → net-name map (`"NC"` for no-connect). Design values derived from the
  datasheets live in its docstring, next to the numbers they justify.
- **A generated schematic** — `gen_schematic.py` writes the `.kicad_sch`
  s-expression text (KiCad has no schematic Python API); a small local
  s-expression parser reads it back for symbol UUIDs.
- **A generated board** — `gen_board.py` on the pcbnew Python API, run with
  KiCad's bundled interpreter, exposed in the Makefile as `KICAD_PY ?=
  /Applications/KiCad/KiCad.app/Contents/Frameworks/Python.framework/Versions/Current/bin/python3`:
  outline, footprints, nets, pours, keep-outs. Not routing.
- **Autorouting** — Freerouting via `route.py` (DSN export → jar → SES
  import), `JAVA` and `FREEROUTING_JAR` as Makefile variables.

Either way, plan user checkpoints after the schematic and after the layout —
this is the least-automated stage, and routing is the expensive one (SKILL.md
§5: only after the concept freeze). Typical macOS binary:
`/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli` — expose as
`KICAD_CLI ?=` in the Makefile.

## Enclosure → board: one source of truth

The enclosure model owns the board outline and everything that pokes through
a wall. `model.py export` writes `out/pcb_layout.json` (outline segments,
connector / button / display positions, mounting holes); `gen_board.py`
builds the outline and places those footprints from it, so a moved button
reflows the board instead of being retyped in two places. Rules that follow:

- `make board` depends on `make parts` — the JSON is a model export.
- The generator writes the placed, unrouted board into `out/pcb/` and
  replaces `board/<name>.kicad_pcb` only when it is missing or
  `REGEN_BOARD=1` is set — a hand-checked routing is never clobbered by a
  routine `make`.
- Mounting-hole and connector XY are parameters shared by both sides; never
  a hand-typed offset on the board side.

## Verification chain

Netlist checked pin by pin against the circuit data → ERC → placement → DRC
→ route → DRC again → fabrication outputs → enclosure fit against the
exported STEP. Zero violations before "done"; waivers are listed with
reasons (from the first board: ERC `pin_to_pin` on an address strap tied to
GND — intended, waived in the build sheet). Routing is the one step still
read by a human before fabrication.

## Headless flow (after each authoring round)

```sh
# electrical rules check on the schematic
"$KICAD_CLI" sch erc board/board.kicad_sch --exit-code-violations
# design rules check on the layout
"$KICAD_CLI" pcb drc board/board.kicad_pcb --exit-code-violations
# fabrication outputs
"$KICAD_CLI" pcb export gerbers board/board.kicad_pcb -o out/pcb/gerbers/
"$KICAD_CLI" pcb export drill   board/board.kicad_pcb -o out/pcb/gerbers/
"$KICAD_CLI" pcb export pos     board/board.kicad_pcb -o out/pcb/board-pos.csv \
    --format csv --units mm --use-drill-file-origin
# board as STEP for the mechanical assembly (component models substituted)
"$KICAD_CLI" pcb export step board/board.kicad_pcb -o out/pcb/board.step --subst-models --force
# renders for the build sheet, both sides
"$KICAD_CLI" pcb render board/board.kicad_pcb -o out/pcb/board_top.png    --side top
"$KICAD_CLI" pcb render board/board.kicad_pcb -o out/pcb/board_bottom.png --side bottom
# BOM (merge into the product BOM)
"$KICAD_CLI" sch export bom board/board.kicad_sch -o out/pcb/bom.csv
```

## Enclosure fit loop

1. Export the board STEP (above) — includes component 3D models where
   footprints have them.
2. `import_step("out/pcb/board.step")` in `model.py`; place it in the
   assembly at the position the layout JSON was generated from — one origin
   for both sides.
3. Check clearances (connector cutouts, tallest component vs lid) with boolean
   intersection — an empty intersection is the pass criterion, assert it.
   Mind the located-Compound trap in [solids.md](solids.md): move the
   imported solids explicitly before any boolean.

## Traps

- pcbnew Python hangs at interpreter exit without a wxApp — end every script
  with `os._exit(0)` after flushing its outputs. `timeout` does not exist on
  macOS (no coreutils) — don't wrap the call in it.
- KiCad local labels prefix nets with "/" (`/GND`); name nets the same way in
  the board generator, or "Update PCB from Schematic" will not match.
- Freerouting treats copper zones as planes and leaves the GND pads unrouted —
  strip `(plane …)` from the DSN before routing and let the pour connect them
  afterwards. Freerouting 2.x needs Java 21+; 1.9.0 runs on Java 17.
  `--help` opens a GUI and never exits — never probe it from a script.
- Routing takes ~10 minutes and the result depends on placement: route once
  per freeze (SKILL.md §5), and say which routing a change invalidates before
  re-running it (§7).

## Build sheet integration

PCB section gets: board renders (top and bottom), ERC/DRC status (clean /
list of violations, waivers with reasons), gerber location, PCB BOM merged
into the BOM as its own table (pos., reference, value, package, qty).
