"""Parametric product model — single source of truth for geometry and BOM.

Conventions (do not break):
- All dimensions in millimetres. Parameters live in the PARAMETERS block only;
  everything else is derived. Asserts guard impossible geometry.
- One builder function per part, registered in PARTS with a material record.
  Downstream stages (drawings, Blender viz, FEA) consume per-part exports —
  never one merged body.
- BOM masses come from exact Shape.volume — no hand-typed weights.
- Robion's live customizer overrides parameters via ROBION_PARAMS (applied
  right after the PARAMETERS block, so derived values and asserts see them).

CLI (via uv):
    uv run model.py export   # STEP + STL per part into out/parts/
    uv run model.py bom      # Czech kusovnik table into out/bom.md (+ stdout)
    uv run model.py show     # list parts and computed masses
"""

from __future__ import annotations

import json
import os
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Callable

from build123d import *  # noqa: F403 - conventional for build123d scripts


def _apply_robion_params() -> None:
    """Apply live-customizer overrides from Robion (CONTRACT.md §2).

    Robion re-runs this script with ROBION_PARAMS set to one JSON object,
    e.g. {"thickness": 6.0}. Only existing scalar parameters are overridden
    and each keeps its original type; anything else warns on stderr. Without
    the variable this is a no-op, so plain CLI runs are unaffected.
    """
    raw = os.environ.get("ROBION_PARAMS", "")
    if not raw:
        return
    try:
        overrides = json.loads(raw)
    except json.JSONDecodeError as err:
        print(f"ROBION_PARAMS ignored — invalid JSON: {err}", file=sys.stderr)
        return
    if not isinstance(overrides, dict):
        print("ROBION_PARAMS ignored — expected a JSON object", file=sys.stderr)
        return
    params = globals()
    for key, value in overrides.items():
        if key.startswith("_") or not isinstance(params.get(key), (bool, int, float, str)):
            print(f"ROBION_PARAMS: no parameter named {key!r}", file=sys.stderr)
            continue
        try:
            params[key] = type(params[key])(value)
        except (TypeError, ValueError):
            print(f"ROBION_PARAMS: cannot apply {key}={value!r}", file=sys.stderr)


# --------------------------------------------------------------------------
# PARAMETERS (single source of truth) — replace the demo bracket with the
# real product's parameters. Fixed inputs from the user first, then choices.
# --------------------------------------------------------------------------
bracket_width = 60.0
bracket_leg_a = 100.0
bracket_leg_b = 80.0
thickness = 5.0
hole_diameter = 8.0
hole_edge_offset = 20.0
fillet_radius = 6.0

_apply_robion_params()  # slider overrides land here, before anything derives

# Derived values + guards ---------------------------------------------------
hole_positions_a = [
    (hole_edge_offset, 0),
    (bracket_leg_a - hole_edge_offset, 0),
]
assert thickness > 0 and bracket_width > 0
assert hole_edge_offset > hole_diameter, "hole would break the edge"

OUT_DIR = Path(__file__).parent / "out" / "parts"


# --------------------------------------------------------------------------
# Materials — density in g/mm^3? NO: kg/mm^3 keeps masses in kg directly.
# (steel 7.85e-6 kg/mm^3, oak 7.0e-7, aluminium 2.7e-6, PLA 1.24e-6)
# --------------------------------------------------------------------------
@dataclass(frozen=True)
class Material:
    czech_name: str          # goes into the kusovnik
    density: float           # kg/mm^3
    finish: str              # Czech finishing note

STEEL = Material("ocel S235", 7.85e-6, "černý komaxit")
OAK = Material("dub (spárovka)", 7.0e-7, "tvrdý voskový olej, 2 vrstvy")


# --------------------------------------------------------------------------
# Part builders — one function per part, pure (parameters -> Part)
# --------------------------------------------------------------------------
def build_bracket() -> Part:
    """Demo part: L-bracket with two mounting holes and a reinforcing fillet."""
    with BuildPart() as bracket:
        Box(bracket_leg_a, bracket_width, thickness,
            align=(Align.MIN, Align.MIN, Align.MIN))
        Box(thickness, bracket_width, bracket_leg_b,
            align=(Align.MIN, Align.MIN, Align.MIN))
        # inner corner reinforcement: pick the concave edge nearest the corner
        inner = min(
            bracket.edges().filter_by(Axis.Y),
            key=lambda e: (e.center()
                           - Vector(thickness, bracket_width / 2, thickness)
                           ).length,
        )
        fillet(inner, radius=fillet_radius)
        # mounting holes down through the horizontal leg, centered across width
        with Locations(*[(x, bracket_width / 2, thickness)
                         for x, _ in hole_positions_a]):
            Hole(radius=hole_diameter / 2, depth=thickness)
    return bracket.part


@dataclass(frozen=True)
class PartSpec:
    builder: Callable[[], Part]
    material: Material
    czech_name: str
    count: int = 1
    note: str = ""

PARTS: dict[str, PartSpec] = {
    "bracket": PartSpec(build_bracket, STEEL, "úhelník", count=2,
                        note=f"plech {thickness:g} mm, otvory Ø{hole_diameter:g}"),
}


# --------------------------------------------------------------------------
# Pipeline commands
# --------------------------------------------------------------------------
def export_parts() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for name, spec in PARTS.items():
        part = spec.builder()
        export_step(part, str(OUT_DIR / f"{name}.step"))
        export_stl(part, str(OUT_DIR / f"{name}.stl"))
        print(f"exported {name}: {part.volume * spec.material.density:.3f} kg")


def bom() -> str:
    rows = ["| Poz. | Díl | Materiál | Ks | Hmotnost | Pozn. |",
            "|---|---|---|---|---|---|"]
    total = 0.0
    for i, (name, spec) in enumerate(PARTS.items(), start=1):
        mass = spec.builder().volume * spec.material.density
        total += mass * spec.count
        rows.append(
            f"| {i} | {spec.czech_name} | {spec.material.czech_name} "
            f"| {spec.count} | {mass:.2f} kg/ks | {spec.note} |")
    rows.append(f"\nCelková hmotnost dílů: **{total:.2f} kg** "
                "(bez spojovacího materiálu).")
    table = "\n".join(rows)
    out = Path(__file__).parent / "out" / "bom.md"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(table + "\n")
    return table


if __name__ == "__main__":
    command = sys.argv[1] if len(sys.argv) > 1 else "show"
    if command == "export":
        export_parts()
    elif command == "bom":
        print(bom())
    elif command == "show":
        for name, spec in PARTS.items():
            part = spec.builder()
            print(f"{name}: volume {part.volume:.0f} mm^3, "
                  f"mass {part.volume * spec.material.density:.3f} kg, "
                  f"bbox {part.bounding_box().size}")
    else:
        raise SystemExit(f"unknown command: {command} (export|bom|show)")
