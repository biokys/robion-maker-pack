"""Strength + modal analysis: analytic gate, then gmsh + CalculiX via pygccx.

The script REFUSES to run FEA until the ANALYTIC block is filled in — hand
estimates are the sanity anchor for every FEA number (see the skill's
fea-recipe.md, including the mandatory sanity checks).

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
# ANALYTIC ESTIMATES — fill EVERY field before running FEA (None = refuse).
# These go into the build sheet verbatim, with the formulas in comments.
# --------------------------------------------------------------------------
@dataclass(frozen=True)
class Analytic:
    load_case: str | None = None          # e.g. "1000 N svisle na konzolu"
    governing_stress_mpa: float | None = None   # sigma = M / W
    allowable_stress_mpa: float | None = None   # S235 ~120 MPa allowable
    deflection_mm: float | None = None          # delta = F L^3 / (3 E I) etc.
    f1_estimate_hz: float | None = None         # f1 ~ 15.76 / sqrt(delta_mm)
    excitation_hz: float | None = None          # footfall ~2 Hz, motor RPM/60

ANALYTIC = Analytic()  # EDIT-ME


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


def analytic_report() -> str:
    missing = [k for k, v in vars(ANALYTIC).items() if v is None]
    if missing:
        raise SystemExit(
            "ANALYTIC block incomplete: "
            + ", ".join(missing)
            + "\nFill hand estimates first (fea-recipe.md) — FEA without an "
            "analytic anchor is not allowed by this pipeline.")
    sf = ANALYTIC.allowable_stress_mpa / ANALYTIC.governing_stress_mpa
    return (
        "## Analytický odhad\n\n"
        f"- Zatěžovací stav: {ANALYTIC.load_case}\n"
        f"- Napětí v kritickém průřezu: {ANALYTIC.governing_stress_mpa:.1f} MPa "
        f"(dovolené {ANALYTIC.allowable_stress_mpa:.0f} MPa, "
        f"bezpečnost {sf:.1f})\n"
        f"- Průhyb: {ANALYTIC.deflection_mm:.2f} mm\n"
        f"- 1. vlastní frekvence (odhad): {ANALYTIC.f1_estimate_hz:.1f} Hz "
        f"(buzení ~{ANALYTIC.excitation_hz:.1f} Hz)\n")


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
