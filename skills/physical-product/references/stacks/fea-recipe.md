# Analysis recipe: analytic-first, then FEA (pygccx + gmsh + CalculiX)

## A · Analytic estimates — MANDATORY, before any mesh

These numbers always appear in the build sheet, even when FEA runs (they are the
sanity anchor for it). Work through:

1. **Load cases + boundary conditions** in one sentence each (e.g. "osoba sedne na
   střed desky: 1000 N staticky, deska podepřená rámy na koncích").
2. **Governing member stress**: identify the weakest member; σ = M/W with
   W = bh²/6 (rectangle) or table value (tube). Compare to allowable
   (steel S235: f_y = 235 MPa, use ~120 MPa allowable; dry oak bending ~40 MPa
   allowable along grain). Report safety factor.
3. **Deflection**: beam formulas (center load, simple support: δ = FL³/48EI;
   fixed-fixed: δ = FL³/192EI). E: steel 210 000 MPa, oak ~11 000 MPa along grain.
4. **First natural frequency** from static self-weight deflection:
   **f₁ ≈ 15.76 / √δ_mm [Hz]** (δ_mm = midspan deflection under self weight in mm).
   Or beam formula f₁ = (λ²/2π)·√(EI/(m̄L⁴)). Compare against excitation
   (footfall ~2 Hz, motors = RPM/60): want f₁ well above, or note resonance risk.
5. **Mass** from the BOM.
6. Targets: static SF ≥ 2–3 for furniture; note if user specifies otherwise.

If loads are unknown: assume standard values (person 1000 N, shelf 25 kg/m,
leaning load 300 N horizontal) and record in "Předpoklady".

## B · FEA pipeline (when toolchain present and stakes warrant it)

Stack: **STEP (from build123d) → gmsh (pip wheel, Python API) → CalculiX `ccx` via
pygccx → results table**. `templates/solids/fea.py` is the skeleton — it *refuses to run*
until the analytic-estimate header fields are filled in.

### Units — mm-N-s system (CRITICAL, silent wrongness otherwise)

| Quantity | Unit | Steel | Oak (along grain) |
|---|---|---|---|
| length | mm | — | — |
| force | N | — | — |
| stress, E | MPa | E = 210 000 | E ≈ 11 000 |
| density | **t/mm³** | 7.85e-9 | 7.0e-10 |
| frequency out | Hz | — | — |

(Density in t/mm³ = kg/m³ × 1e-12.)

### Steps

1. Export the analysed part/assembly as STEP from `model.py` (defeature first:
   suppress cosmetic fillets/small holes — solid tets only, thin sheet gets
   expensive; pygccx supports solid elements only).
2. gmsh: import STEP, define **physical groups** for BC faces and load faces
   (select by bounding-box or normal), mesh with 2nd-order tets (C3D10), target
   element size ≈ smallest wall thickness.
3. pygccx: material (E, ν, density), SPC on the support group, loads (force or
   gravity `*DLOAD GRAV`), steps: `*STATIC` and `*FREQUENCY` (request 6–10 modes).
4. Read results (.frd via pygccx): max von Mises, max displacement, first ~5
   natural frequencies → Czech markdown table into `out/fea/`; optional pyvista
   screenshots of mode shapes.

### Sanity checks — before reporting anything

- Σ reaction forces = Σ applied loads (within ~1 %).
- Peak stress: refine mesh locally once; if peak moves >20 %, refine again or
  report as singularity (sharp corner) with nearby averaged stress.
- Free-free modal run shows ~6 near-zero rigid-body modes (validates mesh/mass).
- FEA f₁ within ~2× of the hand estimate — else find the modelling error before
  trusting either number.
- Constrained-enough check: no unintended mechanisms (huge displacements).

## C · Install / verify / degrade

- gmsh: comes with the uv environment (pip wheel bundles the library) — no system
  install.
- ccx: check `command -v ccx`. If missing, offer the user:
  `brew install costerwi/calculix/calculix-ccx` (maintained tap, Apple Silicon
  tested). **Never install without asking.** Docker image is the fallback of last
  resort.
- ccx missing → run part A only and put the degrade sentence from toolchain.md
  into the build sheet. Analytic numbers are a deliverable on their own.
