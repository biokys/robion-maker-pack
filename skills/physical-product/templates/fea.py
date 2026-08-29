"""Strength + modal analysis: analytic gate, then gmsh + CalculiX via pygccx.

The script REFUSES to run FEA until the governing analytic block is filled
in — ANALYTIC (strength/deflection: beams, brackets, frames) and/or
STABILITY (tip-over: furniture, lamps, shelves). Hand estimates are the
sanity anchor for every FEA number (see the skill's fea-recipe.md,
including the mandatory sanity checks).

UNITS: mm-N-s system. E in MPa, density in t/mm^3 (steel 7.85e-9,
oak ~7.0e-10), forces in N, output frequencies in Hz.

Run:  uv run --extra fea fea.py          # full analysis (needs ccx on PATH)
      uv run fea.py --analytic-only      # print the analytic block only
"""

from __future__ import annotations

import shutil
import sys
from dataclasses import dataclass
from pathlib import Path

OUT = Path(__file__).parent / "out" / "fea"
STEP_FILE = Path(__file__).parent / "out" / "parts" / "bracket.step"


# --------------------------------------------------------------------------
# ANALYTIC ESTIMATES — pick the block(s) governing THIS design and fill EVERY
# field before running FEA (an incomplete present block = refuse). Strength/
# deflection governs beams, brackets, frames under load; tip-over stability
# governs most furniture, lamps and shelves. Set the non-applicable block to
# None. These go into the build sheet verbatim, formulas in the comments.
#
# Fill by COMPUTING from model.py — `import model` and derive: masses from
# spec.builder().volume * density, COG from Shape.center().Z, lever arms
# from parameters. NEVER retype a number that exists in model.py — a
# parameter change must reflow the analytics too, e.g.:
#   STABILITY = Stability(load_case="200 N vodorovně v úchopu",
#       mass_kg=sum(s.builder().volume * s.material.density * s.count
#                   for s in model.PARTS.values()), ...)
# --------------------------------------------------------------------------
@dataclass(frozen=True)
class Analytic:
    load_case: str | None = None          # e.g. "1000 N svisle na konzolu"
    governing_stress_mpa: float | None = None   # sigma = M / W
    allowable_stress_mpa: float | None = None   # S235 ~120 MPa allowable
    deflection_mm: float | None = None          # delta = F L^3 / (3 E I) etc.
    f1_estimate_hz: float | None = None         # f1 ~ 15.76 / sqrt(delta_mm)
    excitation_hz: float | None = None          # footfall ~2 Hz, motor RPM/60


@dataclass(frozen=True)
class Stability:
    load_case: str | None = None          # e.g. "vodorovná síla v úchopu 1.2 m"
    mass_kg: float | None = None                # from model.py bom, exact
    cog_height_mm: float | None = None          # weighted Shape.center() z
    base_half_width_mm: float | None = None     # b: COG -> nearest tipping edge
    force_height_mm: float | None = None        # h: where the push acts
    tip_force_n: float | None = None            # F = m * 9810 * b / h  [N]
    tip_angle_deg: float | None = None          # atan(b / cog_height)


ANALYTIC: Analytic | None = Analytic()   # EDIT-ME (or None if not governing)
STABILITY: Stability | None = None       # EDIT-ME for furniture/lamps/shelves


# --------------------------------------------------------------------------
# FEA setup — EDIT-ME markers show what changes per product.
# --------------------------------------------------------------------------
MATERIAL = {  # EDIT-ME: mm-N-s units!
    "name": "S235",
    "young_mpa": 210_000.0,
    "poisson": 0.3,
    "density_t_mm3": 7.85e-9,
}
MESH_SIZE_MM = 4.0        # EDIT-ME: ~ smallest wall thickness
N_MODES = 8


def _require_complete(block, name: str) -> None:
    missing = [k for k, v in vars(block).items() if v is None]
    if missing:
        raise SystemExit(
            f"{name} block incomplete: " + ", ".join(missing)
            + "\nFill hand estimates first (fea-recipe.md) — FEA without an "
            "analytic anchor is not allowed by this pipeline.")


def analytic_report() -> str:
    if ANALYTIC is None and STABILITY is None:
        raise SystemExit(
            "No analytic block: fill ANALYTIC (strength/deflection) and/or "
            "STABILITY (tip-over) — one of them governs every product.")
    parts = []
    if ANALYTIC is not None:
        _require_complete(ANALYTIC, "ANALYTIC")
        sf = ANALYTIC.allowable_stress_mpa / ANALYTIC.governing_stress_mpa
        parts.append(
            "## Analytický odhad\n\n"
            f"- Zatěžovací stav: {ANALYTIC.load_case}\n"
            f"- Napětí v kritickém průřezu: "
            f"{ANALYTIC.governing_stress_mpa:.1f} MPa "
            f"(dovolené {ANALYTIC.allowable_stress_mpa:.0f} MPa, "
            f"bezpečnost {sf:.1f})\n"
            f"- Průhyb: {ANALYTIC.deflection_mm:.2f} mm\n"
            f"- 1. vlastní frekvence (odhad): "
            f"{ANALYTIC.f1_estimate_hz:.1f} Hz "
            f"(buzení ~{ANALYTIC.excitation_hz:.1f} Hz)\n")
    if STABILITY is not None:
        _require_complete(STABILITY, "STABILITY")
        parts.append(
            "## Stabilita proti překlopení\n\n"
            f"- Zatěžovací stav: {STABILITY.load_case}\n"
            f"- Hmotnost {STABILITY.mass_kg:.1f} kg, těžiště "
            f"{STABILITY.cog_height_mm:.0f} mm nad podlahou\n"
            f"- Rameno ke klopné hraně b = "
            f"{STABILITY.base_half_width_mm:.0f} mm\n"
            f"- Klopná síla ve výšce {STABILITY.force_height_mm:.0f} mm: "
            f"{STABILITY.tip_force_n:.0f} N; úhel překlopení "
            f"{STABILITY.tip_angle_deg:.1f}°\n")
    return "\n".join(parts)


def run_fea() -> str:
    """STEP -> gmsh mesh -> pygccx static + *FREQUENCY -> Czech results table.

    Skeleton only: gmsh physical-group selection and pygccx API calls carry
    EDIT-ME markers; consult pygccx examples for the current API
    (https://github.com/calculix/pygccx) at implementation time.
    """
    import gmsh  # provided by the uv 'fea' extra (wheel bundles the library)

    if shutil.which("ccx") is None:
        return ("## FEA\n\nPevnostní a modální analýza je pouze analytický "
                "odhad — FEA solver (CalculiX) není nainstalován; instalace: "
                "`brew install costerwi/calculix/calculix-ccx`.\n")

    OUT.mkdir(parents=True, exist_ok=True)
    gmsh.initialize()
    try:
        gmsh.open(str(STEP_FILE))
        # EDIT-ME: physical groups for supports and load faces — select faces
        # by bounding box, e.g.:
        # support = gmsh.model.getEntitiesInBoundingBox(..., dim=2)
        # gmsh.model.addPhysicalGroup(2, [tag for _, tag in support], name="FIX")
        gmsh.option.setNumber("Mesh.MeshSizeMax", MESH_SIZE_MM)
        gmsh.option.setNumber("Mesh.ElementOrder", 2)  # C3D10 quadratic tets
        gmsh.model.mesh.generate(3)
        gmsh.write(str(OUT / "mesh.inp"))
    finally:
        gmsh.finalize()

    # EDIT-ME: pygccx model — material, SPC on "FIX", loads, steps:
    #   static step + frequency step (N_MODES); solve; read .frd results.
    # Sanity checks before reporting (fea-recipe.md):
    #   sum(reactions) == sum(loads); f1_FEA within ~2x of ANALYTIC.f1;
    #   free-free run -> ~6 rigid-body modes.
    raise NotImplementedError(
        "Wire pygccx here per fea-recipe.md; keep the sanity checks.")


if __name__ == "__main__":
    report = analytic_report()
    if "--analytic-only" not in sys.argv:
        report += "\n" + run_fea()
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "report.md").write_text(report)
    print(report)
