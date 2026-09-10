"""Space-frame finite-element analysis — beam elements, solved with numpy.

For a frame of slender members (welded or bolted hollow sections, flat bars,
round tubes: stands, racks, gates, table frames) this is the appropriate
model: Euler–Bernoulli beam elements (2 nodes × 6 DOF) on the member
centrelines, rigid joints where they are welded. It captures what the hand
formulas in fea.py cannot — joint fixity, torsion of the rails, weak-axis
bending of flat bars, load redistribution — and needs no external solver
(CalculiX / `fea.py` stays the path for solid parts and local weld detail).

Keep the analytic gate in fea.py: those numbers are the sanity anchor for
this model (§ Sanity checks below). Every geometry number derives from
model.py; every load from the assumptions block in fea.py.

Outputs (out/fea/): stress.png (von Mises on the deformed shape, one panel
per load case), frame_report.md (table), frame_results.json.
Run: uv run frame_fea.py   (make frame-fea)

EDIT-ME markers: sections, build_mesh(), load_cases(). The demo below is a
four-leg table frame with two cross rails — replace it with the product.
"""

from __future__ import annotations

import json
import math
import shutil
from dataclasses import dataclass
from pathlib import Path

import numpy as np

OUT = Path(__file__).parent / "out" / "fea"

# --------------------------------------------------------------------------
# Material and assumptions — import from fea.py in a real project so both
# analyses share one source (E_STEEL, ALLOWABLE, F_Y, loads).
# --------------------------------------------------------------------------
E = 210_000.0            # MPa
NU = 0.3
G_MOD = E / (2 * (1 + NU))
ALLOWABLE = 120.0        # MPa, S235 working stress (fea-recipe.md)
F_Y = 235.0              # MPa, S235 yield
G = 9.81
DEFORM_SCALE_MM = 45.0   # the largest displacement is drawn this big


@dataclass(frozen=True)
class Section:
    name: str
    A: float
    Iy: float          # bending in the local x–z plane (vertical loads on horizontals)
    Iz: float          # bending in the local x–y plane
    J: float
    Wy: float
    Wz: float
    tau_per_T: float   # max shear stress per unit torque


def shs_section(a: float, t: float) -> Section:
    """Square hollow section a×a×t (sharp corners; real profiles ~3 % lighter)."""
    area = a * a - (a - 2 * t) ** 2
    inertia = (a ** 4 - (a - 2 * t) ** 4) / 12
    am = (a - t) ** 2                          # area enclosed by the mid-line
    j = 4 * am * am * t / (4 * (a - t))        # Bredt, thin closed section
    return Section(f"SHS {a:g}×{a:g}×{t:g}", area, inertia, inertia, j,
                   inertia / (a / 2), inertia / (a / 2), 1 / (2 * am * t))


def chs_section(d: float, t: float) -> Section:
    """Round tube d×t."""
    ro, ri = d / 2, d / 2 - t
    area = math.pi * (ro ** 2 - ri ** 2)
    inertia = math.pi * (ro ** 4 - ri ** 4) / 4
    return Section(f"CHS {d:g}×{t:g}", area, inertia, inertia, 2 * inertia,
                   inertia / ro, inertia / ro, ro / (2 * inertia))


def flat_section(w: float, t: float) -> Section:
    """Flat bar standing on edge: height w along local z, thickness t along y."""
    iy, iz = t * w ** 3 / 12, w * t ** 3 / 12
    j = w * t ** 3 / 3 * (1 - 0.63 * t / w)
    return Section(f"flat {w:g}×{t:g}", w * t, iy, iz, j, iy / (w / 2),
                   iz / (t / 2), 3 / (w * t * t))


# --------------------------------------------------------------------------
# Mesh on the member centrelines
# --------------------------------------------------------------------------
class Mesh:
    """Nodes merged by coordinate (0.001 mm), so members that meet share a
    node. Break a member at every junction (a rail at every slat) — a node
    that merely lies on another member is NOT connected to it."""

    def __init__(self) -> None:
        self.index: dict[tuple, int] = {}
        self.coords: list[np.ndarray] = []
        self.elements: list[tuple[int, int, Section, str, tuple]] = []

    def node(self, p) -> int:
        key = tuple(round(float(c), 3) for c in p)
        if key not in self.index:
            self.index[key] = len(self.coords)
            self.coords.append(np.array(key))
        return self.index[key]

    def member(self, points, n: int, section: Section, name: str, zref) -> None:
        """Polyline through `points`, each segment split into n elements.
        `zref` orients the section: the local z axis (the "height" of a flat
        bar) is the projection of zref — (0,0,1) for horizontals, e.g.
        (1,0,0) for vertical legs. `name` labels the member in the report."""
        for p1, p2 in zip(points, points[1:]):
            p1, p2 = np.asarray(p1, float), np.asarray(p2, float)
            for i in range(n):
                a = p1 + (p2 - p1) * i / n
                b = p1 + (p2 - p1) * (i + 1) / n
                self.elements.append((self.node(a), self.node(b), section, name, zref))

    def nodes_where(self, predicate) -> list[int]:
        return [i for i, p in enumerate(self.coords) if predicate(p)]


# EDIT-ME — demo geometry: a four-leg frame 600 × 600 × 500 (centrelines) from
# SHS 30×30×2 with two flat-bar cross rails. In a real project derive every
# number from model.py (`import model`; footprint, height, profile, positions).
FRAME_W, FRAME_H, PROFILE, WALL = 600.0, 500.0, 30.0, 2.0
CROSS_Y = (200.0, 400.0)


def build_mesh() -> Mesh:
    m = Mesh()
    c = PROFILE / 2
    zt = FRAME_H - c
    shs = shs_section(PROFILE, WALL)
    flat = flat_section(40.0, 8.0)
    side = [c, *CROSS_Y, FRAME_W - c]
    m.member([(c, y, zt) for y in side], 4, shs, "side rail", (0, 0, 1))
    m.member([(FRAME_W - c, y, zt) for y in side], 4, shs, "side rail", (0, 0, 1))
    m.member([(c, c, zt), (FRAME_W - c, c, zt)], 12, shs, "end rail", (0, 0, 1))
    m.member([(c, FRAME_W - c, zt), (FRAME_W - c, FRAME_W - c, zt)], 12, shs, "end rail", (0, 0, 1))
    for x, y in ((c, c), (FRAME_W - c, c), (c, FRAME_W - c), (FRAME_W - c, FRAME_W - c)):
        m.member([(x, y, 0), (x, y, zt)], 6, shs, "leg", (1, 0, 0))
    for y in CROSS_Y:
        m.member([(c, y, zt), (FRAME_W - c, y, zt)], 16, flat, "cross rail", (0, 0, 1))
    return m


# --------------------------------------------------------------------------
# Beam element (Przemieniecki), 12 DOF: [u v w θx θy θz] per node
# --------------------------------------------------------------------------
def local_stiffness(L: float, s: Section) -> np.ndarray:
    k = np.zeros((12, 12))
    ea, gj = E * s.A / L, G_MOD * s.J / L
    k[np.ix_([0, 6], [0, 6])] = ea * np.array([[1, -1], [-1, 1]])
    k[np.ix_([3, 9], [3, 9])] = gj * np.array([[1, -1], [-1, 1]])
    b = E * s.Iz / L ** 3                       # bending in x–y (v, θz)
    k[np.ix_([1, 5, 7, 11], [1, 5, 7, 11])] = b * np.array(
        [[12, 6 * L, -12, 6 * L], [6 * L, 4 * L * L, -6 * L, 2 * L * L],
         [-12, -6 * L, 12, -6 * L], [6 * L, 2 * L * L, -6 * L, 4 * L * L]])
    b = E * s.Iy / L ** 3                       # bending in x–z (w, θy); θy = −dw/dx
    k[np.ix_([2, 4, 8, 10], [2, 4, 8, 10])] = b * np.array(
        [[12, -6 * L, -12, -6 * L], [-6 * L, 4 * L * L, 6 * L, 2 * L * L],
         [-12, 6 * L, 12, 6 * L], [-6 * L, 2 * L * L, 6 * L, 4 * L * L]])
    return k


def rotation(p1, p2, zref) -> np.ndarray:
    x = p2 - p1
    x = x / np.linalg.norm(x)
    y = np.cross(np.asarray(zref, float), x)
    if np.linalg.norm(y) < 1e-9:
        raise ValueError("zref is parallel to the member — pick another reference axis")
    y = y / np.linalg.norm(y)
    return np.vstack((x, y, np.cross(x, y)))


def element_matrices(mesh: Mesh, e):
    n1, n2, s, _name, zref = e
    p1, p2 = mesh.coords[n1], mesh.coords[n2]
    L = float(np.linalg.norm(p2 - p1))
    R = rotation(p1, p2, zref)
    T = np.zeros((12, 12))
    for i in range(4):
        T[3 * i:3 * i + 3, 3 * i:3 * i + 3] = R
    return L, local_stiffness(L, s), T


def assemble(mesh: Mesh) -> np.ndarray:
    n = 6 * len(mesh.coords)
    K = np.zeros((n, n))
    for e in mesh.elements:
        _L, k, T = element_matrices(mesh, e)
        dofs = [6 * e[0] + i for i in range(6)] + [6 * e[1] + i for i in range(6)]
        K[np.ix_(dofs, dofs)] += T.T @ k @ T
    return K


# --------------------------------------------------------------------------
# Supports and load cases — EDIT-ME
# --------------------------------------------------------------------------
def fixed_dofs(mesh: Mesh) -> list[int]:
    """Pinned feet: every node on the floor (z = 0) loses its translations.
    Bolted-down feet would also fix the rotations (add d in range(6))."""
    return [6 * i + d for i in mesh.nodes_where(lambda p: abs(p[2]) < 1e-6)
            for d in range(3)]


def load_cases(mesh: Mesh) -> dict[str, tuple[str, np.ndarray]]:
    """{id: (title, global force vector)}. Lump distributed loads onto the
    nodes of a fine mesh (16+ elements per loaded member). Forces in N,
    moments in N·mm; index 6*node + [0 Fx, 1 Fy, 2 Fz, 3 Mx, 4 My, 5 Mz].
    L10N: titles reach the plot and the build sheet."""
    n = 6 * len(mesh.coords)
    zt = FRAME_H - PROFILE / 2
    cases = {}
    # demo 1: 150 kg spread over the interior nodes of both cross rails
    f = np.zeros(n)
    load_n = 150.0 * G
    nodes = mesh.nodes_where(lambda p: p[1] in CROSS_Y and abs(p[2] - zt) < 1e-6
                             and PROFILE / 2 + 1 < p[0] < FRAME_W - PROFILE / 2 - 1)
    for i in nodes:
        f[6 * i + 2] -= load_n / len(nodes)
    cases["lc1"] = ("150 kg on the cross rails", f)
    # demo 2: the same plus 300 N horizontal at the four top corners (sway)
    f = f.copy()
    corners = mesh.nodes_where(lambda p: abs(p[2] - zt) < 1e-6
                               and p[0] in (PROFILE / 2, FRAME_W - PROFILE / 2)
                               and p[1] in (PROFILE / 2, FRAME_W - PROFILE / 2))
    for i in corners:
        f[6 * i + 1] += 300.0 / len(corners)
    cases["lc2"] = ("150 kg + 300 N leaning load", f)
    return cases


# --------------------------------------------------------------------------
# Solve, recover, check
# --------------------------------------------------------------------------
def solve(mesh: Mesh, K: np.ndarray, f: np.ndarray):
    fixed = fixed_dofs(mesh)
    free = np.array(sorted(set(range(len(f))) - set(fixed)))
    u = np.zeros(len(f))
    u[free] = np.linalg.solve(K[np.ix_(free, free)], f[free])
    reactions = (K @ u - f)[fixed]
    return u, reactions


def element_stress(mesh: Mesh, e, u: np.ndarray) -> float:
    """Worst von Mises at either end: |N|/A + |My|/Wy + |Mz|/Wz combined
    with the torsional shear (rigid-joint model: peaks sit at the joints)."""
    _L, k, T = element_matrices(mesh, e)
    dofs = [6 * e[0] + i for i in range(6)] + [6 * e[1] + i for i in range(6)]
    fl = k @ (T @ u[dofs])
    s = e[2]
    worst = 0.0
    for o in (0, 6):
        sigma = abs(fl[o]) / s.A + abs(fl[o + 4]) / s.Wy + abs(fl[o + 5]) / s.Wz
        tau = abs(fl[o + 3]) * s.tau_per_T
        worst = max(worst, math.sqrt(sigma ** 2 + 3 * tau ** 2))
    return worst


def run() -> dict:
    mesh = build_mesh()
    K = assemble(mesh)
    results = {}
    for cid, (title, f) in load_cases(mesh).items():
        u, r = solve(mesh, K, f)
        stresses = np.array([element_stress(mesh, e, u) for e in mesh.elements])
        worst = int(np.argmax(stresses))
        disp = np.linalg.norm(u.reshape(-1, 6)[:, :3], axis=1)
        applied = f.reshape(-1, 6)[:, :3].sum(axis=0)
        react = r.reshape(-1, 3).sum(axis=0)
        # sanity check 1 (fea-recipe.md): Σ reactions = Σ loads
        balance = bool(np.allclose(applied + react, 0,
                                   atol=1e-6 * max(1.0, float(abs(applied).max()))))
        results[cid] = {
            "title": title, "u": u, "stress": stresses,
            "max_stress": float(stresses[worst]), "where": mesh.elements[worst][3],
            "max_disp": float(disp.max()),
            "sum_load": applied.tolist(), "sum_reaction": react.tolist(),
            "balance_ok": balance,
        }
    return {"mesh": mesh, "cases": results}


# --------------------------------------------------------------------------
# Plot + report (L10N: every visible string)
# --------------------------------------------------------------------------
def plot(mesh: Mesh, cases: dict, path: Path, suptitle: str) -> None:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib import cm, colors
    from mpl_toolkits.mplot3d.art3d import Line3DCollection

    vmax = max(max(c["max_stress"] for c in cases.values()), ALLOWABLE * 1.1)
    norm = colors.Normalize(vmin=0, vmax=vmax)
    cmap = matplotlib.colormaps["turbo"]
    ncol = min(3, len(cases))
    nrow = math.ceil(len(cases) / ncol)
    fig = plt.figure(figsize=(5.7 * ncol, 6.2 * nrow + 1.2), dpi=150)
    fig.subplots_adjust(left=0.0, right=0.9, bottom=0.0, top=0.82, wspace=0.0, hspace=0.05)
    lo = np.min(mesh.coords, axis=0)
    hi = np.max(mesh.coords, axis=0)
    size = float((hi - lo).max())
    for idx, (cid, c) in enumerate(cases.items()):
        ax = fig.add_subplot(nrow, ncol, idx + 1, projection="3d")
        scale = DEFORM_SCALE_MM / max(c["max_disp"], 1e-9)
        d = c["u"].reshape(-1, 6)[:, :3] * scale
        segs0 = [[mesh.coords[e[0]], mesh.coords[e[1]]] for e in mesh.elements]
        segs1 = [[mesh.coords[e[0]] + d[e[0]], mesh.coords[e[1]] + d[e[1]]] for e in mesh.elements]
        ax.add_collection3d(Line3DCollection(segs0, colors="#b8bcc4", linewidths=0.9))
        lc = Line3DCollection(segs1, cmap=cmap, norm=norm, linewidths=3.4)
        lc.set_array(c["stress"])
        ax.add_collection3d(lc)
        ax.set_xlim(lo[0], lo[0] + size); ax.set_ylim(lo[1], lo[1] + size)
        ax.set_zlim(lo[2], lo[2] + size * 0.9)
        try:
            ax.set_box_aspect((1, 1, 0.9), zoom=1.08)
        except TypeError:
            ax.set_box_aspect((1, 1, 0.9))
        ax.view_init(elev=26, azim=-58)
        ax.set_axis_off()
        ax.set_title(f"{cid.upper()} · {c['title']}\n"
                     f"max {c['max_stress']:.0f} MPa ({c['where']}) · SF {ALLOWABLE / c['max_stress']:.1f} vs allowable\n"
                     f"max displacement {c['max_disp']:.2f} mm, drawn {scale:.0f}×",
                     fontsize=9, pad=0, y=1.04)
    sm = cm.ScalarMappable(norm=norm, cmap=cmap)
    cax = fig.add_axes([0.915, 0.14, 0.014, 0.56])
    cb = fig.colorbar(sm, cax=cax)
    cb.set_label("von Mises stress (MPa)")
    cb.set_ticks(sorted(set(list(range(0, int(vmax) + 1, 20)) + [int(ALLOWABLE)])))
    cb.ax.axhline(ALLOWABLE, color="k", ls="--", lw=1)
    cb.ax.text(0.5, ALLOWABLE + vmax * 0.018, "allowable", ha="center", va="bottom",
               fontsize=7.5, transform=cb.ax.get_yaxis_transform())
    fig.suptitle(suptitle, fontsize=11, y=0.97)
    fig.savefig(path, bbox_inches="tight", pad_inches=0.15, facecolor="white")
    plt.close(fig)


def report(cases: dict) -> str:
    lines = ["## Beam-element frame model (frame_fea.py)", "",
             "Euler–Bernoulli beam elements on the member centrelines, rigid "
             "(welded) joints, feet pinned on the floor.", "",
             "| Case | Load | max σ (MPa) | where | SF allowable | SF yield | max displacement (mm) | equilibrium |",
             "|---|---|---|---|---|---|---|---|"]
    for cid, c in cases.items():
        lines.append(f"| {cid.upper()} | {c['title']} | {c['max_stress']:.0f} | {c['where']} "
                     f"| {ALLOWABLE / c['max_stress']:.1f} | {F_Y / c['max_stress']:.1f} "
                     f"| {c['max_disp']:.2f} | {'Σ reactions = Σ loads' if c['balance_ok'] else 'FAILED'} |")
    return "\n".join(lines) + "\n"


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    res = run()
    for cid, c in res["cases"].items():
        print(f"{cid}: max {c['max_stress']:.1f} MPa in {c['where']}, disp {c['max_disp']:.3f} mm, "
              f"balance {'OK' if c['balance_ok'] else 'FAIL'}")
    if not all(c["balance_ok"] for c in res["cases"].values()):
        raise SystemExit("equilibrium check failed — a support or load is wrong")
    plot(res["mesh"], res["cases"], OUT / "stress.png",
         "Beam-element model — grey: unloaded shape, colour: von Mises on the deformed shape")
    md = report(res["cases"])
    (OUT / "frame_report.md").write_text(md)
    (OUT / "frame_results.json").write_text(json.dumps(
        {cid: {k: v for k, v in c.items() if k not in ("u", "stress")}
         for cid, c in res["cases"].items()}, ensure_ascii=False, indent=1))
    print(md)
    print(f"wrote {OUT / 'stress.png'}")
