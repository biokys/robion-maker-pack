"""Build sheet generator — fills buildsheet.html from the parametric model,
the cut plan, the analysis reports and the rendered figures.

The build sheet (references/core/buildsheet.md) is a BUILD ARTIFACT: a
several-hundred-kB monolith with inlined images that nobody can patch by
hand. Every update goes through this script and a re-run:

  out/build_sheet.html   the artifact page; `make pdf` prints the same file
  out/plan.md            assembly + finishing steps as Markdown
  README.md              Markdown mirror of the whole sheet (repo-complete)

Machinery (keep): slot substitution incl. the comment-wrapped slots of the
skeleton, data-URI images via datauri.py, a Markdown->HTML converter for the
analysis reports, BOM/purchasing rows from model.py / cutlist.py, drawing
figures from out/drawings/manifest.json, graceful fallbacks when a stage was
skipped (no render yet, analysis not filled in).

Content (EDIT-ME, L10N): every string in the CONTENT section reaches the
reader — write it in the user's language, in the words a workshop uses.
Numbers never get retyped: pull them from model.py.

Run: uv run buildsheet.py   (make buildsheet; `make pdf` runs it first)
"""

from __future__ import annotations

import datetime
import html
import json
import re
from pathlib import Path

import cutlist
import model
from datauri import data_uri

ROOT = Path(__file__).parent
OUT = ROOT / "out"
VERSION = "1.0"

# ==========================================================================
# CONTENT — EDIT-ME per product (L10N: all of it is read by the user)
# Demo text describes the template bracket.
# ==========================================================================
PRODUCT_NAME = "Angle bracket"
SUBTITLE = (f"Steel L-bracket {model.bracket_leg_a:g} × {model.bracket_leg_b:g} × "
            f"{model.bracket_width:g} mm, plate {model.thickness:g} mm")
# heading slots per vertical (buildsheet.md, per-vertical table)
SECTION_DRAWINGS = "Drawings"
SECTION_ASSEMBLY = "Assembly steps"
SECTION_FINISHING = "Surface finishing"
SECTION_ANALYSIS = "Analysis"
PRINT_NOTE = ("The A3 production drawings follow this document at full size "
              "(scale per each sheet's title block).")
FOOTER_SOURCES = ("Source: <code>model.py</code> · drawings: <code>make drawings</code> · "
                  "visualization: <code>make viz</code> · BOM: <code>make bom</code> · "
                  "cut plan: <code>make cutlist</code> · analysis: <code>make fea</code> · "
                  "this sheet: <code>make buildsheet</code>")


def concept_paragraph() -> str:
    return (f"An L-bracket bent from {model.thickness:g} mm steel plate, legs "
            f"{model.bracket_leg_a:g} and {model.bracket_leg_b:g} mm, {model.bracket_width:g} mm "
            f"wide, two Ø{model.hole_diameter:g} mounting holes {model.hole_edge_offset:g} mm "
            "from the ends, inner corner reinforced by a fillet. Powder-coated black.")


def parameter_rows() -> list[tuple[str, str, str]]:
    """(parameter, value, origin) — what is fixed by the brief, what derives."""
    return [
        ("leg a", f"{model.bracket_leg_a:g} mm", "brief (fixed)"),
        ("leg b", f"{model.bracket_leg_b:g} mm", "brief (fixed)"),
        ("width", f"{model.bracket_width:g} mm", "brief"),
        ("plate thickness", f"{model.thickness:g} mm", "choice, verified by the analysis"),
        ("hole pitch", f"{model.bracket_leg_a - 2 * model.hole_edge_offset:g} mm",
         f"derived: {model.bracket_leg_a:g} − 2×{model.hole_edge_offset:g}"),
    ]


def size_by_row(name: str) -> str:
    """Size column of the BOM per part / group name (from model.py values)."""
    return {
        "angle bracket": f"{model.bracket_leg_a:g} × {model.bracket_leg_b:g} × "
                         f"{model.bracket_width:g}, t {model.thickness:g}",
    }.get(name, "")


def fastener_rows() -> list[tuple[str, str, str]]:
    """(item, quantity, purpose) — fasteners, adhesives, finish, felt pads."""
    return [
        (f"Hex bolt M{model.hole_diameter - 2:g}×20, 8.8, washer + lock nut",
         f"{2 * model.PARTS['bracket'].count} pcs", "mounting through the Ø holes"),
        ("Powder coat, black, 60–80 µm", "1 batch", "surface finish (coating shop)"),
    ]


ASSEMBLY_STEPS = [
    "Cut the plate blank to the flat development from the cut plan; deburr.",
    "Drill the mounting holes on the drill press before bending (flat = square).",
    "Bend 90° on the press brake; check the inner radius against the drawing.",
    "Weld / grind the reinforcing fillet if it is not formed; break all edges.",
]

FINISHING_STEPS = [
    "Degrease; blast or phosphate before coating (the coater does this).",
    "Powder coat black, 60–80 µm; cure per the coater's schedule.",
    "Touch up transport damage with zinc primer + matching paint.",
]


def assumption_items() -> list[str]:
    """Every assumption with the parameter that changes it, plus the degrade
    sentences of skipped stages (references/core/toolchain.md)."""
    items = [
        f"Plate thickness {model.thickness:g} mm assumed available in S235 "
        "(<code>thickness</code>).",
        "Mounting substrate not specified — bolts sized for steel-to-steel "
        "(<code>fastener_rows</code>).",
    ]
    if not (OUT / "viz_hero.png").exists():
        items.append("No photoreal visualization — Blender is unavailable; technical "
                     "CAD renders are attached instead.")
    return items


# ==========================================================================
# MACHINERY — keep
# ==========================================================================
def esc(s) -> str:
    return html.escape(str(s), quote=False)


def figure(path: Path, caption_b: str, caption: str, png: bool = False) -> str:
    return (f'<figure><img src="{data_uri(path, png=png)}" alt="{esc(caption_b)}">'
            f"<figcaption><b>{esc(caption_b)}</b> {esc(caption)}</figcaption></figure>")


def steps_html(steps: list[str]) -> str:
    return "".join(f"<li>{esc(s)}</li>" for s in steps)


def md_to_html(md: str) -> str:
    """Small converter for the analysis reports: ## headings, - bullets,
    | tables |, paragraphs. No inline markup."""
    out, ul, table = [], [], []

    def flush():
        nonlocal ul, table
        if ul:
            out.append("<ul>" + "".join(f"<li>{esc(x)}</li>" for x in ul) + "</ul>")
            ul = []
        if table:
            rows = [r for r in table if not re.fullmatch(r"\|[-| ]+\|", r.strip())]
            cells = lambda r: [c.strip() for c in r.strip().strip("|").split("|")]
            th = "".join(f"<th>{esc(c)}</th>" for c in cells(rows[0]))
            trs = "".join("<tr>" + "".join(f"<td>{esc(c)}</td>" for c in cells(r)) + "</tr>"
                          for r in rows[1:])
            out.append(f'<div class="table-wrap"><table><thead><tr>{th}</tr></thead>'
                       f"<tbody>{trs}</tbody></table></div>")
            table = []

    for line in md.splitlines():
        if line.startswith("## "):
            flush(); out.append(f"<h3>{esc(line[3:])}</h3>")
        elif line.startswith("- "):
            ul.append(line[2:])
        elif line.startswith("|"):
            table.append(line)
        elif line.strip():
            flush(); out.append(f"<p>{esc(line)}</p>")
        else:
            flush()
    flush()
    return "\n".join(out)


def analysis_html() -> str:
    """fea.py analytic report (when its blocks are filled) + the frame model
    table and stress plot when frame_fea.py ran."""
    parts = []
    try:
        import fea
        parts.append(md_to_html(fea.analytic_report()))
    except SystemExit as err:            # incomplete ANALYTIC/STABILITY block
        parts.append(f"<p>{esc('Analysis not filled in yet: ' + str(err).splitlines()[0])}</p>")
    frame_md = OUT / "fea" / "frame_report.md"
    stress = OUT / "fea" / "stress.png"
    if frame_md.exists():
        parts.append(md_to_html(frame_md.read_text()))
    if stress.exists():
        parts.append(figure(stress, "Von Mises stress on the deformed shape.",
                            "Beam-element model, one panel per load case; grey = unloaded shape.",
                            png=True))
    return "\n".join(parts)


def hero_figure() -> tuple[str, str, str]:
    """(data URI, alt, caption) — the Blender hero, else the first drawing."""
    hero = OUT / "viz_hero.png"
    if hero.exists():
        return data_uri(hero), PRODUCT_NAME, "Photoreal render of the finished product."
    manifest = json.loads((OUT / "drawings" / "manifest.json").read_text())["sheets"]
    first = OUT / "drawings" / f"{manifest[0]['name']}.png"
    return (data_uri(first, png=True), PRODUCT_NAME,
            "No render yet — the first drawing sheet stands in (run `make viz`).")


def fill(template: str, slots: dict[str, str]) -> str:
    """Substitute {{SLOT}} tokens; slots wrapped in HTML comments in the
    skeleton (<!-- {{SLOT}} note -->) are unwrapped first."""
    page = re.sub(r"<!--\s*(\{\{[A-Z_]+\}\})[^>]*-->", r"\1", template)
    for key, value in slots.items():
        page = page.replace("{{" + key + "}}", value)
    left = sorted(set(re.findall(r"\{\{[A-Z_]+\}\}", page)))
    assert not left, f"unfilled slots: {left}"
    return page


def build() -> None:
    today = datetime.date.today().isoformat()
    total_kg, _cog = model.mass_properties()
    bom = model.bom_rows()
    unit = model.mass_unit(total_kg)  # grams for a light thing, kilograms otherwise
    manifest = json.loads((OUT / "drawings" / "manifest.json").read_text())["sheets"]
    plans, _uncovered = cutlist.plan_all()
    purchase = cutlist.purchase_rows(plans)
    hero_uri, hero_alt, hero_caption = hero_figure()
    extra = "".join(figure(OUT / name, cap, txt)
                    for name, cap, txt in (("viz_detail.png", "Detail.", "Close-up of the joint."),)
                    if (OUT / name).exists())
    cut_png = OUT / "cutlist.png"

    slots = {
        "PRODUCT_NAME": esc(PRODUCT_NAME), "SUBTITLE": esc(SUBTITLE), "VERSION": VERSION,
        "DIMENSIONS": esc(f"{model.bracket_leg_a:g} × {model.bracket_leg_b:g} × {model.bracket_width:g} mm"),
        "MATERIAL": esc(", ".join(sorted({s.material.local_name for s in model.PARTS.values()
                                          if not getattr(s, "reference", False)}))),
        "MASS": f"{model.format_mass(total_kg, unit)} (parts only)",
        "DATE": today,
        "CONCEPT_PARAGRAPH": esc(concept_paragraph()),
        "PARAMETER_ROWS": "".join(
            f'<tr><td>{esc(n)}</td><td class="size">{esc(v)}</td><td>{esc(o)}</td></tr>'
            for n, v, o in parameter_rows()),
        "HERO_DATA_URI": hero_uri, "HERO_ALT": esc(hero_alt), "HERO_CAPTION": esc(hero_caption),
        "EXTRA_FIGURES": extra,
        "SECTION_DRAWINGS": SECTION_DRAWINGS,
        "DRAWING_FIGURES": "".join(
            figure(OUT / "drawings" / f"{e['name']}.png", e["number"],
                   f"{e['title']} · scale {e['scale']} on A3", png=True)
            for e in manifest if (OUT / "drawings" / f"{e['name']}.png").exists()),
        "PRINT_NOTE": esc(PRINT_NOTE),
        "BOM_MATERIAL_CAPTION": esc(f"Parts — total {model.format_mass(total_kg, unit)}"),
        "BOM_ROWS": "".join(
            f'<tr><td class="num">{i}</td><td>{esc(name)}</td><td class="size">{esc(size_by_row(name))}</td>'
            f'<td class="num">{count}</td><td class="num">{model.format_mass(mass, unit)}/pc</td><td>{esc(note)}</td></tr>'
            for i, name, _mat, count, mass, note in bom),
        "PURCHASE_ROWS": "".join(
            f'<tr><td>{esc(n)}</td><td>{esc(kind)}</td><td class="num">{q} pcs</td>'
            f'<td class="num">{util:.0%}</td><td class="size">{esc(offcut)}</td></tr>'
            for n, kind, q, util, offcut, _price in purchase),
        "CUTLIST_DATA_URI": data_uri(cut_png, png=True) if cut_png.exists() else "",
        "CUTLIST_CAPTION": esc("Pieces on the stock units; hatched = waste."
                               if cut_png.exists() else "Run `make cutlist-png` for the diagram."),
        "FASTENERS_TABLE": "".join(
            f'<tr><td>{esc(a)}</td><td class="num">{esc(b)}</td><td>{esc(c)}</td></tr>'
            for a, b, c in fastener_rows()),
        "SECTION_ASSEMBLY": SECTION_ASSEMBLY, "ASSEMBLY_STEPS": steps_html(ASSEMBLY_STEPS),
        "SECTION_FINISHING": SECTION_FINISHING, "FINISHING_STEPS": steps_html(FINISHING_STEPS),
        "SECTION_ANALYSIS": SECTION_ANALYSIS, "ANALYSIS": analysis_html(),
        "ASSUMPTION_ITEMS": "".join(f"<li>{x}</li>" for x in assumption_items()),
        "FOOTER_SOURCES": FOOTER_SOURCES,
    }
    OUT.mkdir(exist_ok=True)
    (OUT / "build_sheet.html").write_text(fill((ROOT / "buildsheet.html").read_text(), slots))

    plan_md = [f"# {SECTION_ASSEMBLY}", ""] + [f"{i}. {s}" for i, s in enumerate(ASSEMBLY_STEPS, 1)]
    plan_md += ["", f"# {SECTION_FINISHING}", ""] + [f"{i}. {s}" for i, s in enumerate(FINISHING_STEPS, 1)]
    (OUT / "plan.md").write_text("\n".join(plan_md) + "\n")

    strip = lambda s: re.sub(r"<[^>]+>", "", s)
    readme = [f"# {PRODUCT_NAME}", "", f"{SUBTITLE} · v{VERSION} · {today}", "",
              f"- Dimensions: {slots['DIMENSIONS']}", f"- Material: {slots['MATERIAL']}",
              f"- Mass: {slots['MASS']}", ""]
    if (OUT / "viz_hero.png").exists():
        readme += ["![Visualization](out/viz_hero.png)", ""]
    readme += ["## Concept", "", concept_paragraph(), "", "| Parameter | Value | Origin |", "|---|---|---|"]
    readme += [f"| {n} | {v} | {o} |" for n, v, o in parameter_rows()]
    readme += ["", f"## {SECTION_DRAWINGS}", "", "Full set: `out/drawings/drawings_A3.pdf` (A3, true scale).", ""]
    readme += [f"- {e['number']} {e['title']} ({e['scale']}) — `out/drawings/{e['name']}.png`" for e in manifest]
    readme += ["", "## Bill of materials", "", (OUT / "bom.md").read_text().strip(), "",
               "### Purchasing", "", "| Material | Stock item | Buy | Utilization | Largest offcut |", "|---|---|---|---|---|"]
    readme += [f"| {n} | {kind} | {q} pcs | {util:.0%} | {offcut} |" for n, kind, q, util, offcut, _p in purchase]
    if cut_png.exists():
        readme += ["", "![Cutting plan](out/cutlist.png)"]
    readme += ["", "### Fasteners & finishing materials", "", "| Item | Quantity | Purpose |", "|---|---|---|"]
    readme += [f"| {a} | {b} | {c} |" for a, b, c in fastener_rows()]
    readme += ["", "\n".join(plan_md), "", f"# {SECTION_ANALYSIS}", "", strip(analysis_html()), "",
               "# Assumptions & uncertainties", ""]
    readme += [f"- {strip(x)}" for x in assumption_items()]
    readme += ["", "---", "", strip(FOOTER_SOURCES), ""]
    (ROOT / "README.md").write_text("\n".join(readme))
    size_kb = (OUT / "build_sheet.html").stat().st_size / 1e3
    print(f"wrote {OUT / 'build_sheet.html'} ({size_kb:.0f} kB), {OUT / 'plan.md'}, README.md")


if __name__ == "__main__":
    build()
