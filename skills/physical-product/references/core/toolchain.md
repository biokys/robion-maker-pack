# Toolchain: bootstrap, detection, degrade

## Python environment (uv, per project)

Copy the stack's `templates/<stack>/pyproject.toml`, then `uv sync`. Everything runs through `uv run`
(`uv run model.py export`, `uv run drawings.py`, …) — never system python. The
`gmsh` PyPI wheel bundles the full gmsh library, so meshing needs **no** system
install. If `uv sync` fails on a wheel (build123d/OCP tracks specific CPython
versions), lower the `requires-python` pin (3.12 → 3.11) and retry.

## Binary tools — detection and typical macOS paths

Run `make doctor` (in the template Makefile) to print this table live.

| Tool | Detect | Typical macOS path |
|---|---|---|
| Blender (viz) | `command -v blender` | `/opt/homebrew/bin/blender` (5.x) |
| Chrome (SVG→PNG) | app bundle | `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` |
| OpenSCAD (fallback CAD) | app bundle | `/Applications/OpenSCAD.app/Contents/MacOS/OpenSCAD` |
| kicad-cli (PCB) | app bundle | `/Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli` |
| ccx / CalculiX (FEA solver) | `make doctor` prints the solver the Makefile found (`CCX`: a bare `ccx` on PATH, else any `ccx_<version>` in PATH or under Homebrew, newest wins; `fea.py find_ccx()` uses the same rule). **Never test for a bare `ccx` yourself** — Homebrew installs the versioned `ccx_2.23` without a bare `ccx`; `fea.py`'s `find_ccx()` accepts both | **not installed by default** |

CalculiX install (Apple Silicon, maintained tap): `brew install
costerwi/calculix/calculix-ccx`. **Ask the user before installing anything via
brew.** gmsh needs no install (pip wheel). FreeCAD/ParaView are not part of this
pipeline.

## Degrade matrix

When a tool is missing, skip the stage, continue the pipeline, and state it in
the build sheet's assumptions & uncertainties section — translated into the
user's language, and always naming what was lost and how to get it back:

| Missing | Skip | What the build sheet must say |
|---|---|---|
| ccx | solid FEA (analytic + the beam-element frame model stay) | Solid FEA was not run — the solver (CalculiX) is not installed; strength is verified analytically and, for frames, with the beam-element model (`frame_fea.py`). Install with `brew install costerwi/calculix/calculix-ccx`. |
| Blender | photoreal viz (use CAD screenshots) | No photoreal visualization — Blender is unavailable; technical CAD renders are attached instead. |
| Chrome | SVG→PNG (ship SVG) | Drawings are attached as SVG — conversion to PNG was not possible on this machine. |
| kicad-cli | PCB checks/exports | PCB checks and exports (ERC/DRC/gerbers) must be run by hand in KiCad. |

Slicers (PrusaSlicer, Bambu Studio, Cura) are deliberately not tools of this
pipeline: a printed part is delivered as STL + STEP + a print plan for the
user's slicer, never as G-code.

## Output layout (canonical)

```
project/
├── model.py  drawings.py  blender_viz.py  fea.py
├── pyproject.toml  Makefile  CLAUDE.md  README.md  buildsheet.html
├── assets/            # downloaded textures (Makefile fetches, CC0 only)
└── out/               # ALL generated files; `make clean` removes it
    ├── parts/*.step  parts/*.stl
    ├── drawings/*.svg  drawings/*.png
    ├── viz_*.png
    ├── fea/
    └── bom.md
```
