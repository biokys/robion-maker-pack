"""Parametric product model — single source of truth for geometry and BOM.

Conventions (do not break):
- All dimensions in millimetres. Parameters live in the PARAMETERS block only;
  everything else is derived. Asserts guard impossible geometry.
- Every builder returns its part in ASSEMBLY coordinates (where the part sits
  in the finished product) — viz, drawings sections and fit checks all rely
  on it; never build parts around their own origin "to be re-placed later".
- One builder function per part, registered in PARTS with a material record.
  Downstream stages (drawings, Blender viz, FEA) consume per-part exports —
  never one merged body. Part families (e.g. 25 unique lamellas) share a
  PartSpec `group` — the BOM aggregates them into one row; VIZ_COMPOUNDS can
  merge many parts into one STL for rendering.
- BOM masses come from exact Shape.volume — no hand-typed weights.
- Robion's live customizer overrides parameters via ROBION_PARAMS (applied
  right after the PARAMETERS block, so derived values and asserts see them).

CLI (via uv):
    uv run model.py export   # STEP + STL per part into out/parts/
    uv run model.py bom      # BOM table into out/bom.md (+ stdout)
    uv run model.py check    # mass/COG + interference + clearance gate
    uv run model.py show     # list parts and computed masses
"""

from __future__ import annotations

import itertools
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
    local_name: str          # L10N, goes into the BOM
    density: float           # kg/mm^3
    finish: str              # L10N finishing note

STEEL = Material("steel S235", 7.85e-6, "black powder coat")
OAK = Material("oak (edge-glued panel)", 7.0e-7, "hard wax oil, 2 coats")


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
    local_name: str
    count: int = 1
    note: str = ""
    # Part family: specs sharing a group collapse into ONE BOM row
    # (counts and masses summed, local_name/material from the first member) —
    # e.g. group="lamela" on 25 unique lamella specs.
    group: str | None = None

PARTS: dict[str, PartSpec] = {
    "bracket": PartSpec(build_bracket, STEEL, "angle bracket", count=2,
                        note=f"sheet {thickness:g} mm, holes Ø{hole_diameter:g}"),
}

# Viz-only merged exports: <stl name> -> [PARTS keys] OR a zero-arg callable
# returning any Shape. `export` additionally writes out/parts/<name>.stl —
# blender_viz.py then maps ONE material to the whole export instead of
# needing an entry per part. The callable form covers what a key list
# cannot: N shifted copies of one part
#   "rings": lambda: Compound(children=[Pos(0, 0, i * ring_pitch)
#                                       * build_ring() for i in range(58)])
# and purchased hardware modeled only for the render (rods, socket,
# bulb) that has no PARTS entry. Empty = no merged exports.
VIZ_COMPOUNDS: dict[str, list[str] | Callable[[], Shape]] = {}

# --- assembly check configuration (uv run model.py check) ------------------
INTERFERENCE_TOL_MM3 = 1.0    # boolean noise floor, mm^3
# Intentional overlaps (press fits, threaded joints): {sorted key pair: max mm^3}
ALLOWED_INTERFERENCE: dict[tuple[str, str], float] = {}
# Required minimum gaps (sliding parts, cable paths): {sorted key pair: mm}
MIN_CLEARANCE: dict[tuple[str, str], float] = {}


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
    for name, source in VIZ_COMPOUNDS.items():
        merged = source() if callable(source) else Compound(
            children=[PARTS[k].builder() for k in source])
        export_stl(merged, str(OUT_DIR / f"{name}.stl"))
        print(f"exported viz compound {name}")


def bom_rows() -> list[tuple[int, str, str, int, float, str]]:
    """BOM rows (pos, name, material, count, mass_kg_per_piece, note),
    with PartSpec groups collapsed into single rows (counts summed, mass =
    total group mass / total count). Shared by bom() and the drawings'
    parts_rows() so balloon numbers always match."""
    order: list[str] = []                      # group name or part key
    members: dict[str, list[PartSpec]] = {}
    for key, spec in PARTS.items():
        bucket = spec.group or key
        if bucket not in members:
            order.append(bucket)
            members[bucket] = []
        members[bucket].append(spec)
    rows = []
    for i, bucket in enumerate(order, start=1):
        specs = members[bucket]
        first = specs[0]
        count = sum(s.count for s in specs)
        mass = sum(s.builder().volume * s.material.density * s.count
                   for s in specs) / count
        name = first.group or first.local_name
        rows.append((i, name, first.material.local_name, count, mass,
                     first.note))
    return rows


def bom() -> str:
    # L10N: BOM table headers and the total line reach the reader
    rows = ["| Pos. | Part | Material | Qty | Mass | Note |",
            "|---|---|---|---|---|---|"]
    total = 0.0
    for i, name, material, count, mass, note in bom_rows():
        total += mass * count
        rows.append(f"| {i} | {name} | {material} "
                    f"| {count} | {mass:.2f} kg/pc | {note} |")
    rows.append(f"\nTotal mass of parts: **{total:.2f} kg** "
                "(fasteners not included).")
    table = "\n".join(rows)
    out = Path(__file__).parent / "out" / "bom.md"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(table + "\n")
    return table


def _built_parts() -> dict[str, Part]:
    """Build every PARTS entry once (shared across the check passes)."""
    return {name: spec.builder() for name, spec in PARTS.items()}


def mass_properties(shapes: dict[str, Part] | None = None):
    """(total_kg, cog: Vector). Mass is exact (volume × density × count).

    COG counts count>1 parts at their single modeled position N times:
    Z is exact when the duplicates sit at the same height (legs, lamellas
    — the case fea.py STABILITY reads), X/Y are approximate. For exact XY,
    model each instance as its own PARTS entry sharing a `group`.
    """
    shapes = shapes or _built_parts()
    total, moment = 0.0, Vector(0, 0, 0)
    for name, spec in PARTS.items():
        mass = shapes[name].volume * spec.material.density * spec.count
        total += mass
        moment += shapes[name].center(CenterOf.MASS) * mass
    return total, moment / total


def _bboxes_overlap(a, b, pad: float = 0.1) -> bool:
    return (a.min.X - pad < b.max.X and b.min.X - pad < a.max.X
            and a.min.Y - pad < b.max.Y and b.min.Y - pad < a.max.Y
            and a.min.Z - pad < b.max.Z and b.min.Z - pad < a.max.Z)


def check() -> list[str]:
    """Assembly sanity gate: mass/COG report, pairwise interference,
    declared clearances. Returns violation strings (empty = pass).

    Copies of a count>1 part are NOT checked against each other — only one
    instance is modeled.
    """
    for cfg_name, cfg in (("ALLOWED_INTERFERENCE", ALLOWED_INTERFERENCE),
                          ("MIN_CLEARANCE", MIN_CLEARANCE)):
        for pair in cfg:
            unknown = [k for k in pair if k not in PARTS]
            assert not unknown, f"{cfg_name}: unknown part(s) {unknown}"
            assert tuple(sorted(pair)) == pair, \
                f"{cfg_name}: key {pair} must be alphabetically sorted"
    shapes = _built_parts()
    instances = sum(s.count for s in PARTS.values())
    print(f"assembly check: {len(shapes)} part(s), {instances} instance(s)")
    total, cog = mass_properties(shapes)
    print(f"mass {total:.3f} kg   COG ({cog.X:.1f}, {cog.Y:.1f}, "
          f"{cog.Z:.1f}) mm")
    multi = [f"{n} (x{s.count})" for n, s in PARTS.items() if s.count > 1]
    if multi:
        print("  caveat: count>1 parts counted at their modeled position: "
              + ", ".join(multi)
              + " — COG X/Y approximate, Z exact for same-height duplicates")

    violations: list[str] = []
    bbs = {n: s.bounding_box() for n, s in shapes.items()}
    checked = skipped = 0
    for a, b in itertools.combinations(shapes, 2):
        if not _bboxes_overlap(bbs[a], bbs[b]):
            skipped += 1
            continue
        checked += 1
        inter = shapes[a] & shapes[b]
        vol = 0.0 if inter is None else inter.volume
        allowed = ALLOWED_INTERFERENCE.get(tuple(sorted((a, b))),
                                           INTERFERENCE_TOL_MM3)
        if vol > allowed:
            violations.append(f"INTERFERENCE {a} x {b}: {vol:.1f} mm^3 "
                              f"overlap (allowed {allowed:g})")
    print(f"interference: {checked} pair(s) checked, {skipped} skipped by "
          f"bbox prefilter — {'OK' if not violations else 'see below'}")

    if MIN_CLEARANCE:
        for (a, b), required in MIN_CLEARANCE.items():
            d, p1, _ = shapes[a].distance_to_with_closest_points(shapes[b])
            if d < required:
                touch = " — parts touch/intersect" if d == 0.0 else ""
                violations.append(
                    f"CLEARANCE {a} x {b}: {d:.1f} mm < {required:g} mm "
                    f"required, near ({p1.X:.1f}, {p1.Y:.1f}, "
                    f"{p1.Z:.1f}){touch}")
        print(f"clearance: {len(MIN_CLEARANCE)} pair(s) checked")
    else:
        print("clearance: no MIN_CLEARANCE configured — skipped")

    for violation in violations:
        print(violation)
    print("CHECK OK" if not violations
          else f"CHECK FAILED: {len(violations)} violation(s)")
    return violations


if __name__ == "__main__":
    command = sys.argv[1] if len(sys.argv) > 1 else "show"
    if command == "export":
        export_parts()
    elif command == "bom":
        print(bom())
    elif command == "check":
        raise SystemExit(1 if check() else 0)
    elif command == "show":
        for name, spec in PARTS.items():
            part = spec.builder()
            print(f"{name}: volume {part.volume:.0f} mm^3, "
                  f"mass {part.volume * spec.material.density:.3f} kg, "
                  f"bbox {part.bounding_box().size}")
    else:
        raise SystemExit(f"unknown command: {command} (export|bom|check|show)")
