"""Cutting plan — which stock to buy and how to cut it.

- STOCK maps a stock name (L10N) -> Bar (1D) or Sheet (2D) with usable size,
  saw kerf and the PARTS keys cut from it. Geometry stays in model.py;
  cutlist.py owns only the stock/purchasing knowledge.
- Piece sizes come from part bounding boxes (longest axis for bars, two
  largest axes for sheets); explicit overrides cover miters and flat
  developments.
- Packing: first-fit-decreasing (bars) and shelf FFD (sheets) — simple,
  deterministic, dependency-free. NOT optimal: treat the result as an
  upper bound for purchasing, not as professional nesting. All sheet cuts
  are guillotine-executable (full-width rips, then crosscuts).
- Kerf: placing a piece consumes piece + kerf; the trailing kerf after the
  last piece is not required (the final cut runs into the offcut).

Outputs (uv run cutlist.py):
    out/cutlist.md    cut tables + purchasing summary (+ stdout)
    out/cutlist.svg   one labeled diagram per stock unit
    out/cutlist.html  Chrome screenshot wrapper (make cutlist-png)

The buildsheet generator imports purchase_rows() instead of parsing the md.
"""

from __future__ import annotations

import html
import sys
from dataclasses import dataclass, field
from pathlib import Path

import model

OUT = Path(__file__).parent / "out"
EPS = 1e-6


@dataclass(frozen=True)
class Extra:
    """A piece with no PARTS entry (bought profile cut to length etc.)."""
    label: str                          # L10N, shown in tables/SVG
    size: float | tuple[float, float]   # length (bar) or (w, h) (sheet)
    count: int = 1


@dataclass(frozen=True)
class Bar:
    """1D stock (bar, tube, hollow section, strip)."""
    length: float                   # stock length, mm (e.g. 6000)
    kerf: float = 3.0               # saw kerf per cut, mm
    parts: tuple = ()               # "key" | ("key", length) | Extra(...)
    profile: tuple[float, float] | None = None  # sanity-check bbox 2nd/3rd
    price: float | None = None      # per stock unit (purchasing summary)


@dataclass(frozen=True)
class Sheet:
    """2D stock (board, panel, plywood). width = grain direction."""
    width: float
    height: float
    kerf: float = 4.0
    parts: tuple = ()               # "key" | ("key", (w, h)) | Extra(...)
    thickness: float | None = None  # sanity-check bbox smallest dim
    trim: float = 0.0               # edge trim per side (factory edges)
    allow_rotation: bool = True     # False: long side always along width
    price: float | None = None


# --------------------------------------------------------------------------
# CONFIG — edit per product. DEMO teaches the three non-obvious mechanisms:
# a size override (the bracket is bent sheet — its flat development, not bbox),
# Extra pieces, and the thickness/profile sanity declarations.
# --------------------------------------------------------------------------
STOCK: dict[str, Bar | Sheet] = {
    "sheet 5 mm": Sheet(width=600, height=200, kerf=2.0, thickness=5.0,
                        parts=(("bracket", (175.0, 60.0)),)),
    "square tube 20×20×2": Bar(length=6000, kerf=3.0, profile=(20, 20),
                        parts=(Extra("brace (demo)", 500.0, count=4),)),
}

# Parts deliberately NOT cut from stock (3D print, purchased finished):
# key -> reason (L10N); listed in the md, suppresses the coverage warning.
NO_STOCK: dict[str, str] = {}


def group_keys(name: str) -> list[str]:
    """All PARTS keys whose spec.group == name — declare a 25-lamella
    family as parts=(*group_keys("slat"),)."""
    return [k for k, s in model.PARTS.items() if s.group == name]


# --------------------------------------------------------------------------
# Packing
# --------------------------------------------------------------------------
@dataclass(frozen=True)
class Piece:
    label: str
    a: float            # bars: length | sheets: long side
    b: float = 0.0      # sheets: short side


@dataclass
class BarUnit:
    cuts: list = field(default_factory=list)
    used: float = 0.0   # pieces + inter-piece kerfs (trailing kerf refunded)


@dataclass
class Placement:
    piece: Piece
    x: float
    y: float
    w: float
    h: float


@dataclass
class SheetUnit:
    placements: list = field(default_factory=list)
    shelves: list = field(default_factory=list)   # [{y, h, x}]


_BBOX_CACHE: dict[str, tuple[float, float, float]] = {}


def _bbox_dims(key: str) -> tuple[float, float, float]:
    if key not in _BBOX_CACHE:
        size = model.PARTS[key].builder().bounding_box().size
        _BBOX_CACHE[key] = tuple(sorted((size.X, size.Y, size.Z),
                                        reverse=True))
    return _BBOX_CACHE[key]


def _die(msg: str):
    raise SystemExit(f"ERROR: {msg}")


def expand_pieces(name: str, stock: Bar | Sheet,
                  covered: set[str]) -> list[Piece]:
    """Resolve part refs -> Piece list; sanity checks and coverage."""
    pieces: list[Piece] = []
    for ref in stock.parts:
        if isinstance(ref, Extra):
            key, override, label, count = None, ref.size, ref.label, ref.count
        else:
            key, override = (ref, None) if isinstance(ref, str) else ref
            spec = model.PARTS.get(key)
            if spec is None:
                _die(f"stock '{name}' references unknown part {key!r} "
                     f"(valid: {', '.join(model.PARTS)})")
            if key in covered:
                _die(f"part {key!r} is covered by two stock entries — "
                     "would double-purchase")
            covered.add(key)
            label, count = spec.local_name, spec.count
        if isinstance(stock, Bar):
            if key is not None:
                dims = _bbox_dims(key)
                if override is None:
                    override = dims[0]
                    if stock.profile and (
                            abs(dims[1] - stock.profile[0]) > 0.5
                            or abs(dims[2] - stock.profile[1]) > 0.5):
                        print(f"WARNING: {key} cross-section "
                              f"{dims[1]:g}×{dims[2]:g} != stock '{name}' "
                              f"profile {stock.profile} — add a (key, "
                              "length) override if intended",
                              file=sys.stderr)
                elif override < dims[0] - 0.5:
                    print(f"WARNING: {key} override {override:g} shorter "
                          f"than bbox {dims[0]:g} — probable mistake",
                          file=sys.stderr)
            pieces += [Piece(label, float(override))] * count
        else:
            if key is not None:
                dims = _bbox_dims(key)
                if override is None:
                    override = (dims[0], dims[1])
                    if stock.thickness and abs(
                            dims[2] - stock.thickness) > 0.5:
                        print(f"WARNING: {key} thickness {dims[2]:g} != "
                              f"stock '{name}' {stock.thickness:g} — add a "
                              "(key, (w, h)) override if intended (flat development?)",
                              file=sys.stderr)
            w, h = float(override[0]), float(override[1])
            pieces += [Piece(label, max(w, h), min(w, h))] * count
    return pieces


def pack_bars(pieces: list[Piece], bar: Bar) -> list[BarUnit]:
    units: list[BarUnit] = []
    for p in sorted(pieces, key=lambda p: (-p.a, p.label)):
        if p.a > bar.length + EPS:
            _die(f"'{p.label}' ({p.a:g} mm) does not fit stock "
                 f"({bar.length:g} mm) — use longer stock or an override")
        for u in units:
            if u.used + bar.kerf + p.a <= bar.length + EPS:
                u.cuts.append(p)
                u.used += bar.kerf + p.a
                break
        else:
            units.append(BarUnit([p], p.a))
    return units


def pack_sheets(pieces: list[Piece], st: Sheet) -> list[SheetUnit]:
    uw, uh = st.width - 2 * st.trim, st.height - 2 * st.trim

    def orientations(p: Piece):
        opts = [(p.a, p.b)]                 # long side along width/grain
        if st.allow_rotation and p.a != p.b:
            opts.append((p.b, p.a))
        return opts

    def fits_empty(p: Piece) -> bool:
        return any(w <= uw + EPS and h <= uh + EPS
                   for w, h in orientations(p))

    units: list[SheetUnit] = []
    for p in sorted(pieces, key=lambda p: (-p.b, -p.a, p.label)):
        if not fits_empty(p):
            rot = "" if st.allow_rotation else " (rotation disabled)"
            _die(f"'{p.label}' ({p.a:g}×{p.b:g}) does not fit stock "
                 f"({uw:g}×{uh:g} usable){rot}")
        placed = False
        for u in units:
            for shelf in u.shelves:         # existing shelves first
                for w, h in orientations(p):
                    if (h <= shelf["h"] + EPS
                            and shelf["x"] + w <= uw + EPS):
                        u.placements.append(
                            Placement(p, shelf["x"], shelf["y"], w, h))
                        shelf["x"] += w + st.kerf
                        placed = True
                        break
                if placed:
                    break
            if placed:
                break
            y_next = (u.shelves[-1]["y"] + u.shelves[-1]["h"] + st.kerf
                      if u.shelves else 0.0)
            for w, h in orientations(p):
                if y_next + h <= uh + EPS and w <= uw + EPS:
                    u.shelves.append({"y": y_next, "h": h, "x": w + st.kerf})
                    u.placements.append(Placement(p, 0.0, y_next, w, h))
                    placed = True
                    break
            if placed:
                break
        if not placed:
            u = SheetUnit()
            w, h = next((w, h) for w, h in orientations(p)
                        if w <= uw + EPS and h <= uh + EPS)
            u.shelves.append({"y": 0.0, "h": h, "x": w + st.kerf})
            u.placements.append(Placement(p, 0.0, 0.0, w, h))
            units.append(u)
    return units


@dataclass
class StockPlan:
    name: str
    stock: Bar | Sheet
    units: list

    @property
    def utilization(self) -> float:
        if isinstance(self.stock, Bar):
            net = sum(p.a for u in self.units for p in u.cuts)
            gross = len(self.units) * self.stock.length
        else:
            net = sum(pl.w * pl.h for u in self.units for pl in u.placements)
            gross = len(self.units) * self.stock.width * self.stock.height
        return net / gross if gross else 0.0

    @property
    def largest_offcut(self) -> str:
        if isinstance(self.stock, Bar):
            rest = max(self.stock.length - u.used for u in self.units)
            return f"{_mm(rest)} mm"
        st = self.stock
        uw, uh = st.width - 2 * st.trim, st.height - 2 * st.trim
        best = (0.0, "—")
        for u in self.units:
            y_end = (u.shelves[-1]["y"] + u.shelves[-1]["h"]
                     if u.shelves else 0.0)
            top = (uh - y_end) * uw
            if top > best[0]:
                best = (top, f"{_mm(uw)} × {_mm(uh - y_end)} mm")
            for shelf in u.shelves:
                tail = (uw - shelf["x"] + st.kerf) * shelf["h"]
                if tail > best[0]:
                    best = (tail,
                            f"{_mm(uw - shelf['x'] + st.kerf)} × "
                            f"{_mm(shelf['h'])} mm")
        return best[1]


def plan_all() -> tuple[list[StockPlan], list[str]]:
    """Pack every stock entry; returns (plans, uncovered PARTS keys)."""
    covered: set[str] = set()
    plans = []
    for name, stock in STOCK.items():
        pieces = expand_pieces(name, stock, covered)
        units = (pack_bars(pieces, stock) if isinstance(stock, Bar)
                 else pack_sheets(pieces, stock))
        plans.append(StockPlan(name, stock, units))
    uncovered = [k for k in model.PARTS
                 if k not in covered and k not in NO_STOCK]
    if uncovered:
        print("WARNING: parts not covered by any stock: "
              + ", ".join(uncovered), file=sys.stderr)
    return plans, uncovered


# --------------------------------------------------------------------------
# Markdown
# --------------------------------------------------------------------------
def _mm(x: float) -> str:
    s = f"{x:,.1f}".rstrip("0").rstrip(".") if x % 1 else f"{x:,.0f}"
    return s.replace(",", " ")


def _merged(rows: list[tuple[str, str]]):
    """[(label, size)] -> [(from, to, label, size, count)] merging runs."""
    out = []
    for label, size in rows:
        if out and out[-1][2] == label and out[-1][3] == size:
            prev = out[-1]
            out[-1] = (prev[0], prev[1] + 1, label, size, prev[4] + 1)
        else:
            start = (out[-1][1] + 1) if out else 1
            out.append((start, start, label, size, 1))
    return out


# L10N: every user-facing string from here to the end of purchase_rows()
# reaches the reader — translate them all at scaffold time (`make l10n`).
def render_markdown(plans: list[StockPlan], uncovered: list[str]) -> str:
    lines = ["# Cutting plan", ""]
    if not plans:
        lines += ["No stock declared (STOCK is empty).", ""]
    for plan in plans:
        st = plan.stock
        if isinstance(st, Bar):
            lines += [f"## {plan.name} — bar {_mm(st.length)} mm, "
                      f"kerf {_mm(st.kerf)} mm", ""]
            for i, u in enumerate(plan.units, 1):
                rest = st.length - u.used
                lines += [f"### Bar {i}/{len(plan.units)} — used "
                          f"{_mm(u.used)} mm, offcut {_mm(rest)} mm", "",
                          "| Cut | Part | Length (mm) | Qty |", "|---|---|---|---|"]
                for a, b, label, size, n in _merged(
                        [(p.label, _mm(p.a)) for p in u.cuts]):
                    rng = f"{a}" if a == b else f"{a}–{b}"
                    lines.append(f"| {rng} | {label} | {size} | {n} |")
                lines.append("")
        else:
            lines += [f"## {plan.name} — sheet {_mm(st.width)} × "
                      f"{_mm(st.height)} mm, kerf {_mm(st.kerf)} mm",
                      ""]
            for i, u in enumerate(plan.units, 1):
                net = sum(pl.w * pl.h for pl in u.placements)
                util = net / (st.width * st.height)
                lines += [f"### Sheet {i}/{len(plan.units)} — utilization "
                          f"{util:.0%}", "",
                          "| Strip | Part | Size (mm) | Qty |",
                          "|---|---|---|---|"]
                rows = []
                for pl in u.placements:
                    shelf_no = next(j + 1 for j, s in enumerate(u.shelves)
                                    if s["y"] == pl.y)
                    rows.append((shelf_no, pl.piece.label,
                                 f"{_mm(pl.w)} × {_mm(pl.h)}"))
                seen: dict[tuple, int] = {}
                for r in rows:
                    seen[r] = seen.get(r, 0) + 1
                for (shelf_no, label, size), n in seen.items():
                    lines.append(f"| {shelf_no} | {label} | {size} | {n} |")
                lines.append("")
    if plans:
        has_price = any(p.stock.price for p in plans)
        head = "| Material | Stock item | Buy | Utilization | Largest offcut |"
        sep = "|---|---|---|---|---|"
        if has_price:
            head += " Price |"
            sep += "---|"
        lines += ["## Purchasing summary", "", head, sep]
        for name, kind, n, util, offcut, price in purchase_rows(plans):
            row = f"| {name} | {kind} | {n} pcs | {util:.0%} | {offcut} |"
            if has_price:
                row += (f" {_mm(price * n)} |" if price else " — |")
            lines.append(row)
        lines.append("")
    if NO_STOCK or uncovered:
        lines += ["## Parts outside the cutting plan", "", "| Part | Reason |",
                  "|---|---|"]
        for key, reason in NO_STOCK.items():
            lines.append(f"| {model.PARTS[key].local_name} | {reason} |")
        for key in uncovered:
            lines.append(f"| {model.PARTS[key].local_name} | "
                         "— MISSING FROM THE PLAN |")
        lines.append("")
    lines += ["The plan is a deterministic first-fit estimate — real "
              "consumption is an upper bound; professional nesting may save "
              "a piece. Cuts are treated as through (guillotine) cuts; "
              "utilization = net part area/length over stock bought.", ""]
    return "\n".join(lines)


def purchase_rows(plans: list[StockPlan] | None = None):
    """(material, stock item, qty, utilization, largest offcut, price|None)
    — for the buildsheet generator (mirrors the purchasing-summary table)."""
    if plans is None:
        plans, _ = plan_all()
    rows = []
    for p in plans:
        st = p.stock
        kind = (f"bar {_mm(st.length)} mm" if isinstance(st, Bar)
                else f"sheet {_mm(st.width)} × {_mm(st.height)} mm")
        rows.append((p.name, kind, len(p.units), p.utilization,
                     p.largest_offcut, st.price))
    return rows


# --------------------------------------------------------------------------
# SVG (hand-written — per-piece fills and crisp text; see the pack's
# drafting docs for why ExportSVG is wrong for this infographic)
# --------------------------------------------------------------------------
_CANVAS_W, _MARGIN, _BAR_H, _TITLE_H = 1400, 20, 42, 26
_FONT = "ui-monospace, 'JetBrains Mono', Menlo, monospace"
_PALETTE = ["#7d6bfa", "#2ec9f0", "#e0a458", "#69b578", "#c96480",
            "#8d99ae", "#b48ead", "#d08770"]


def _esc(s: str) -> str:
    return html.escape(s, quote=True)


def _rect(x, y, w, h, fill, extra="", title=""):
    t = f"<title>{_esc(title)}</title>" if title else ""
    return (f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" '
            f'height="{h:.1f}" fill="{fill}" stroke="#333" '
            f'stroke-width="1" {extra}>{t}</rect>')


def _svg_text(x, y, s, size=13, anchor="middle", color="#111"):
    return (f'<text x="{x:.1f}" y="{y:.1f}" font-family="{_FONT}" '
            f'font-size="{size}" text-anchor="{anchor}" '
            f'fill="{color}">{_esc(s)}</text>')


def render_svg(plans: list[StockPlan]) -> tuple[str, int, int]:
    colors: dict[str, str] = {}

    def color(label: str) -> str:
        if label not in colors:
            colors[label] = _PALETTE[len(colors) % len(_PALETTE)]
        return colors[label]

    body: list[str] = []
    y = _MARGIN
    body.append(_svg_text(_MARGIN, y + 14, "Cutting plan", 18, "start"))
    y += 34
    inner = _CANVAS_W - 2 * _MARGIN
    for plan in plans:
        st = plan.stock
        scale = inner / (st.length if isinstance(st, Bar) else st.width)
        for i, u in enumerate(plan.units, 1):
            if isinstance(st, Bar):
                title = (f"{plan.name} — bar {i}/{len(plan.units)} "
                         f"({_mm(st.length)} mm)")
            else:
                title = (f"{plan.name} — sheet {i}/{len(plan.units)} "
                         f"({_mm(st.width)} × {_mm(st.height)} mm)")
            body.append(_svg_text(_MARGIN, y + 16, title, 14, "start",
                                  "#333"))
            y += _TITLE_H
            legend: dict[str, int] = {}

            def piece_label(cx, cy, label, w_px, h_px):
                """Full label when it fits, else an index + legend entry."""
                if len(label) * 0.6 * 13 + 8 < w_px and h_px > 20:
                    body.append(_svg_text(cx, cy + 4, label))
                elif w_px > 18 and h_px > 16:
                    idx = legend.setdefault(label, len(legend) + 1)
                    body.append(_svg_text(cx, cy + 4, str(idx)))
                else:
                    legend.setdefault(label, len(legend) + 1)

            if isinstance(st, Bar):
                h_px = _BAR_H
                body.append(_rect(_MARGIN, y, st.length * scale, h_px,
                                  "url(#waste)"))
                x = 0.0
                for p in u.cuts:
                    w_px = p.a * scale
                    label = f"{p.label} · {_mm(p.a)}"
                    body.append(_rect(_MARGIN + x * scale, y, w_px, h_px,
                                      color(p.label), title=label))
                    piece_label(_MARGIN + x * scale + w_px / 2,
                                y + h_px / 2, label, w_px, h_px)
                    x += p.a
                    body.append(_rect(_MARGIN + x * scale, y,
                                      max(st.kerf * scale, 1.5), h_px,
                                      "#222"))
                    x += st.kerf
                rest = st.length - u.used
                if rest * scale > 60:
                    body.append(_svg_text(
                        _MARGIN + (st.length - rest / 2) * scale,
                        y + h_px / 2 + 4, f"offcut {_mm(rest)}", 12,
                        color="#666"))
                y += h_px + 6
            else:
                h_px = st.height * scale
                body.append(_rect(_MARGIN, y, st.width * scale, h_px,
                                  "url(#waste)"))
                for pl in u.placements:
                    px = _MARGIN + (st.trim + pl.x) * scale
                    # SVG y grows down; sheet y grows up from the bottom
                    py = y + h_px - (st.trim + pl.y + pl.h) * scale
                    label = (f"{pl.piece.label} · "
                             f"{_mm(pl.w)}×{_mm(pl.h)}")
                    body.append(_rect(px, py, pl.w * scale, pl.h * scale,
                                      color(pl.piece.label), title=label))
                    piece_label(px + pl.w * scale / 2,
                                py + pl.h * scale / 2, label,
                                pl.w * scale, pl.h * scale)
                y += h_px + 6
            if legend:
                items = sorted(legend.items(), key=lambda kv: kv[1])
                body.append(_svg_text(
                    _MARGIN, y + 12,
                    "   ".join(f"{n} = {t}" for t, n in items), 12,
                    "start", "#555"))
                y += 20
            y += 8
    height = int(y + _MARGIN)
    svg = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{_CANVAS_W}" '
        f'height="{height}" viewBox="0 0 {_CANVAS_W} {height}">'
        '<defs><pattern id="waste" width="8" height="8" '
        'patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'
        '<rect width="8" height="8" fill="#f2f2f2"/>'
        '<line x1="0" y1="0" x2="0" y2="8" stroke="#ccc" '
        'stroke-width="2"/></pattern></defs>'
        f'<rect width="{_CANVAS_W}" height="{height}" fill="#fff"/>'
        + "".join(body) + "</svg>\n")
    return svg, _CANVAS_W, height


if __name__ == "__main__":
    plans, uncovered = plan_all()
    OUT.mkdir(parents=True, exist_ok=True)
    md = render_markdown(plans, uncovered)
    (OUT / "cutlist.md").write_text(md)
    svg, w, h = render_svg(plans)
    (OUT / "cutlist.svg").write_text(svg)
    (OUT / "cutlist.html").write_text(
        f'<!doctype html><html><body style="margin:0" '
        f'data-window-size="{w},{h}">'
        '<img src="cutlist.svg" style="display:block;width:'
        f'{w}px"></body></html>\n')
    print(md)
    print(f"wrote {OUT / 'cutlist.md'}, cutlist.svg, cutlist.html",
          file=sys.stderr)
