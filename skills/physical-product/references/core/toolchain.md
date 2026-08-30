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
| ccx / CalculiX (FEA solver) | `command -v ccx` | **not installed by default** |

CalculiX install (Apple Silicon, maintained tap): `brew install
costerwi/calculix/calculix-ccx`. **Ask the user before installing anything via
brew.** gmsh needs no install (pip wheel). FreeCAD/ParaView are not part of this
pipeline.

## Degrade matrix

When a tool is missing, skip the stage, continue the pipeline, and put the exact
sentence into the build sheet's "Předpoklady a nejistoty":

| Missing | Skip | Build-sheet sentence (Czech) |
|---|---|---|
| ccx | FEA (analytic stays) | „Pevnostní a modální analýza je pouze analytický odhad — FEA solver (CalculiX) není nainstalován; instalace: `brew install costerwi/calculix/calculix-ccx`." |
| Blender | photoreal viz (use CAD screenshots) | „Fotorealistická vizualizace chybí — Blender není k dispozici; přiloženy jsou technické rendery z CAD." |
| Chrome | SVG→PNG (ship SVG) | „Výkresy jsou přiloženy jako SVG — převod do PNG nebyl na tomto stroji možný." |
| kicad-cli | PCB checks/exports | „Kontroly a exporty PCB (ERC/DRC/gerbery) je nutné spustit ručně v KiCadu." |

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
