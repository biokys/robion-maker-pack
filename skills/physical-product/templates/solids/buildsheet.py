"""Build sheet generator — fills buildsheet.html from the parametric model,
the cut plan, the make plan, the hardware list, the analysis reports, the
rendered figures and — when the product has one — a sewn-cover sub-project.

The build sheet (references/core/buildsheet.md) is a BUILD ARTIFACT: a
several-hundred-kB monolith with inlined images that nobody can patch by
hand. Every update goes through this script and a re-run:

  out/build_sheet.html   the artifact page; `make pdf` prints the same file
  README.md              Markdown mirror of the whole sheet (repo-complete)

Inputs that other stages own — this script READS them, never writes them:

  out/plan.md                 make-plan stage: numbered steps + finishing schedule
  out/hardware.md             BOM stage: fasteners, adhesives, finish — Markdown
                              tables `item | specification or purpose | quantity`
  out/<stage>_assumptions.md  what each production subagent had to assume
  design.json                 answers Claude decided for the maker (with reasons)
  <SUBPROJECT>/out/           bom.md, plan.md, assumptions.md, layout.png of a
                              patterns2d sub-project (upholstery: `covers/`)

Machinery (keep): slot substitution incl. the comment-wrapped slots of the
skeleton, data-URI images via datauri.py, a Markdown->HTML converter
(headings, paragraphs, bullets, numbered steps, tables, inline markup),
BOM/purchasing rows from model.py / cutlist.py, drawing figures from
out/drawings/manifest.json, graceful fallbacks when a stage was skipped (no
render yet, no plan yet, analysis not filled in).

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

# The make-plan stage writes out/plan.md. Its `## ` sections whose heading
# matches FINISHING_HEADING render under SECTION_FINISHING, everything else
# under SECTION_ASSEMBLY. L10N: match the heading the plan actually uses
# (Czech: r"povrch", German: r"oberfläche").
FINISHING_HEADING = re.compile(r"finish", re.IGNORECASE)
PLAN_MISSING = "No make plan yet — the plan stage writes out/plan.md."

# Optional sub-project on the patterns2d stack (a sewn cover, upholstery.md):
# its BOM, plan, assumptions and marker layout fold into this sheet. A
# directory that does not exist degrades silently — nothing is rendered.
SUBPROJECT = ROOT / "covers"
SUBPROJECT_TITLE = "Cover (covers/)"                # heading for its plan and assumptions
SUBPROJECT_STOCK = "fabric by the metre"            # purchasing table: stock-item wording
SUBPROJECT_LAYOUT_CAPTION = ("Marker layout of the cover pieces; the 1:1 pattern prints "
                             "from covers/out/print/pattern_A4.pdf.")

# Notes that belong beside the drawings but outside their figure grid — CNC
# data (cnc-router.md), pattern info: (heading, Markdown file), rendered when
# the file exists.
DRAWINGS_NOTES: list[tuple[str, Path]] = [("CNC data", OUT / "cam" / "README.md")]

# Per-stage assumption files the production subagents leave behind (SKILL.md
# §5), rendered under these headings after the general list.
ASSUMPTION_SOURCES: list[tuple[str, Path]] = [
    ("Drawings", OUT / "drawings_assumptions.md"),
    ("Bill of materials & cut plan", OUT / "bom_assumptions.md"),
    ("Make plan", OUT / "plan_assumptions.md"),
    ("Analysis", OUT / "analysis_assumptions.md"),
    (SUBPROJECT_TITLE, SUBPROJECT / "out" / "assumptions.md"),
]
CHANGE_LABEL = "Change"                             # design.json change-log entries


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


def fallback_fastener_rows() -> list[tuple[str, str, str]]:
    """(item, quantity, purpose) — used only while out/hardware.md does not
    exist (a project whose BOM stage wrote no hardware list)."""
    return [
        (f"Hex bolt M{model.hole_diameter - 2:g}×20, 8.8, washer + lock nut",
         f"{2 * model.PARTS['bracket'].count} pcs", "mounting through the Ø holes"),
        ("Powder coat, black, 60–80 µm", "1 batch", "surface finish (coating shop)"),
    ]


def assumption_items() -> list[str]:
    """Every assumption with the parameter that changes it, plus the degrade
    sentences of skipped stages (references/core/toolchain.md). The per-stage
    files and the design record are appended by assumptions_html()."""
    items = [
        f"Plate thickness {model.thickness:g} mm assumed available in S235 "
        "(<code>thickness</code>).",
        "Mounting substrate not specified — bolts sized for steel-to-steel "
        "(<code>fallback_fastener_rows</code>).",
    ]
    if not (OUT / "viz_hero.png").exists():
        items.append("No photoreal visualization — Chrome (the render engine's host) is "
                     "unavailable; technical CAD renders are attached instead.")
    return items


# ==========================================================================
# MACHINERY — keep
# ==========================================================================
def esc(s) -> str:
    return html.escape(str(s), quote=False)


def inline(md: str) -> str:
    """Escape, then **bold**, *em* and `code` inline markup."""
    s = esc(md)
    s = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", s)
    s = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", s)
    s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
    return s


def figure(path: Path, caption_b: str, caption: str, png: bool = False) -> str:
    return (f'<figure><img src="{data_uri(path, png=png)}" alt="{esc(caption_b)}">'
            f"<figcaption><b>{esc(caption_b)}</b> {esc(caption)}</figcaption></figure>")


def md_to_html(md: str, base_level: int = 3, steps: bool = True) -> str:
    """Markdown subset -> HTML: headings (# … ####, `#` -> h<base_level>),
    paragraphs, - bullets with indented continuation lines and nested
    bullets, 1. ordered items as <ol class="steps"> (the sheet's numbered-step
    style; steps=False for plain reports), | tables |, inline markup."""
    out: list[str] = []
    para: list[str] = []
    ul: list[str] = []          # top-level bullets; nested bullets joined in
    ol: list[str] = []
    table: list[str] = []

    def flush_para():
        nonlocal para
        if para:
            out.append("<p>" + inline(" ".join(x.strip() for x in para)) + "</p>")
            para = []

    def flush_lists():
        nonlocal ul, ol, table
        if ul:
            out.append("<ul>" + "".join(f"<li>{inline(x)}</li>" for x in ul) + "</ul>")
            ul = []
        if ol:
            cls = ' class="steps"' if steps else ""
            out.append(f"<ol{cls}>" + "".join(f"<li>{inline(x)}</li>" for x in ol) + "</ol>")
            ol = []
        if table:
            rows = [r for r in table if not re.fullmatch(r"\|[-:| ]+\|", r.strip())]
            cells = lambda r: [c.strip() for c in r.strip().strip("|").split("|")]  # noqa: E731
            th = "".join(f"<th>{inline(c)}</th>" for c in cells(rows[0]))
            trs = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in cells(r)) + "</tr>"
                          for r in rows[1:])
            out.append(f'<div class="table-wrap"><table><thead><tr>{th}</tr></thead>'
                       f"<tbody>{trs}</tbody></table></div>")
            table = []

    for raw in md.splitlines():
        line = raw.rstrip()
        m = re.match(r"^(#{1,4})\s+(.*)", line)
        if m:
            flush_para(); flush_lists()
            level = min(6, base_level + len(m.group(1)) - 1)
            out.append(f"<h{level}>{inline(m.group(2))}</h{level}>")
        elif line.strip() == "---":
            flush_para(); flush_lists()
        elif line.startswith("|"):
            flush_para()
            table.append(line)
        elif re.match(r"^- ", line):
            flush_para()
            if ol:                      # a bullet under a numbered item
                ol[-1] += " " + line[2:].strip()
            else:
                ul.append(line[2:].strip())
        elif re.match(r"^\d+\.\s", line):
            flush_para()
            if ul:
                flush_lists()
            ol.append(re.sub(r"^\d+\.\s+", "", line))
        elif line[:1] in (" ", "\t") and (ol or ul):
            text = re.sub(r"^- ", "· ", line.strip())
            (ol if ol else ul)[-1] += " " + text
        elif line.strip():
            if table or ul or ol:
                flush_lists()
            para.append(line)
        else:
            flush_para(); flush_lists()
    flush_para(); flush_lists()
    return "\n".join(out)


def read(path: Path) -> str:
    return path.read_text() if path.exists() else ""


def split_sections(md: str) -> list[tuple[str, str]]:
    """[(heading, body)] split at `## ` headings; the preamble has heading ''
    and the document title (`# `) is dropped."""
    parts: list[tuple[str, str]] = []
    head, body = "", []
    for line in md.splitlines():
        if line.startswith("## "):
            parts.append((head, "\n".join(body)))
            head, body = line[3:].strip(), []
        elif line.startswith("# "):
            continue
        else:
            body.append(line)
    parts.append((head, "\n".join(body)))
    return parts


def md_tables(md: str) -> list[list[list[str]]]:
    """Every Markdown table in a text as rows of cells (header row first,
    the |---| separator dropped)."""
    tables, cur = [], []
    for line in md.splitlines() + [""]:
        if line.startswith("|"):
            cur.append(line)
        elif cur:
            rows = [[c.strip() for c in r.strip().strip("|").split("|")]
                    for r in cur if not re.fullmatch(r"\|[-:| ]+\|", r.strip())]
            if len(rows) >= 2:
                tables.append(rows)
            cur = []
    return tables


def plan_html() -> tuple[str, str]:
    """(assembly html, finishing html) rendered from out/plan.md — the
    make-plan stage owns that file — plus the sub-project's plan."""
    plan = read(OUT / "plan.md")
    if not plan:
        return f"<p>{esc(PLAN_MISSING)}</p>", ""
    assembly, finishing = [], []
    for head, body in split_sections(plan):
        if head and FINISHING_HEADING.search(head):
            finishing.append(md_to_html(body, base_level=4))
        else:
            assembly.append((f"<h3>{inline(head)}</h3>\n" if head else "")
                            + md_to_html(body, base_level=4))
    sewing = read(SUBPROJECT / "out" / "plan.md")
    if sewing:
        assembly.append(f"<h3>{esc(SUBPROJECT_TITLE)}</h3>")
        for head, body in split_sections(sewing):
            if head:
                assembly.append(f"<h4>{inline(head)}</h4>")
            assembly.append(md_to_html(body, base_level=5))
    return "\n".join(assembly), "\n".join(finishing)


def fastener_rows() -> list[tuple[str, str, str]]:
    """(item, quantity, purpose) from every table of out/hardware.md — columns
    by position: item | specification or purpose | quantity (further columns
    ignored; a two-column `item | quantity` table also works) — then the
    two-column notions tables of the sub-project's bom.md. Falls back to
    fallback_fastener_rows() while hardware.md does not exist."""
    hardware = read(OUT / "hardware.md")
    rows: list[tuple[str, str, str]] = []
    if hardware:
        for header, *body in md_tables(hardware):
            for r in body:
                if len(r) >= 3:
                    rows.append((r[0], r[2], r[1]))
                elif len(r) == 2:
                    rows.append((r[0], r[1], ""))
    else:
        rows = list(fallback_fastener_rows())
    for header, *body in md_tables(read(SUBPROJECT / "out" / "bom.md")):
        if len(header) == 2:
            rows += [(r[0], r[1], SUBPROJECT_TITLE) for r in body if len(r) == 2]
    return rows


def purchase_rows_all(plans) -> list[tuple[str, str, str, str, str]]:
    """(material, stock item, buy, utilization, largest offcut) as display
    strings: the cut plan's rows, then the fabric of the sub-project (first
    table of its bom.md with at least four columns: material | width | usage
    | buy — what pattern.py writes)."""
    rows = [(n, kind, f"{q} pcs", f"{util:.0%}", offcut)
            for n, kind, q, util, offcut, _price in cutlist.purchase_rows(plans)]
    for table in md_tables(read(SUBPROJECT / "out" / "bom.md")):
        if len(table[0]) >= 4:
            for r in table[1:]:
                util = re.search(r"(\d+)\s*%", r[2])
                rows.append((r[0], f"{SUBPROJECT_STOCK}, {r[1]}", r[3],
                             f"{util.group(1)} %" if util else "—", "—"))
            break
    return rows


def drawings_extra_html() -> str:
    blocks = []
    for title, path in DRAWINGS_NOTES:
        text = read(path)
        if text:
            blocks.append(f"<h3>{esc(title)}</h3>" + md_to_html(text, base_level=4, steps=False))
    return "\n".join(blocks)


def record_assumptions() -> list[str]:
    """Answers Claude decided for the maker (design-record.md: `reason` is
    mandatory and belongs on this sheet) and changes Claude made after a
    gate — from design.json."""
    text = read(ROOT / "design.json")
    if not text:
        return []
    record = json.loads(text)
    items = []
    for q in record.get("questions", []):
        if q.get("decidedBy") == "claude" and q.get("reason"):
            items.append(f"<b>{esc(q.get('label') or q.get('id', ''))}</b>: "
                         f"{esc(q.get('answer', ''))} — {esc(q['reason'])}")
    for ch in record.get("changes", []):
        # an answer change already shows up through the question's own reason
        if ch.get("by") == "claude" and not str(ch.get("what", "")).startswith("questions."):
            note = f" — {esc(ch['note'])}" if ch.get("note") else ""
            items.append(f"<b>{esc(CHANGE_LABEL)} {esc(ch.get('what', ''))}</b>: "
                         f"{esc(ch.get('from', ''))} → {esc(ch.get('to', ''))}{note}")
    return items


def assumptions_html() -> str:
    """The general list (+ the record's decisions), then each stage's
    assumption file under its own heading."""
    items = assumption_items() + record_assumptions()
    blocks = ["<ul>" + "".join(f"<li>{x}</li>" for x in items) + "</ul>"]
    for title, path in ASSUMPTION_SOURCES:
        text = read(path)
        if text:
            blocks.append(f"<h3>{esc(title)}</h3>" + md_to_html(text, base_level=4, steps=False))
    return "\n".join(blocks)


def analysis_html() -> str:
    """fea.py analytic report (when its blocks are filled) + the frame model
    table and stress plot when frame_fea.py ran."""
    parts = []
    try:
        import fea
        parts.append(md_to_html(fea.analytic_report(), steps=False))
    except SystemExit as err:            # incomplete ANALYTIC/STABILITY block
        parts.append(f"<p>{esc('Analysis not filled in yet: ' + str(err).splitlines()[0])}</p>")
    frame_md = OUT / "fea" / "frame_report.md"
    stress = OUT / "fea" / "stress.png"
    if frame_md.exists():
        parts.append(md_to_html(frame_md.read_text(), steps=False))
    if stress.exists():
        parts.append(figure(stress, "Von Mises stress on the deformed shape.",
                            "Beam-element model, one panel per load case; grey = unloaded shape.",
                            png=True))
    return "\n".join(parts)


def drawing_manifest() -> list[dict]:
    path = OUT / "drawings" / "manifest.json"
    return json.loads(path.read_text())["sheets"] if path.exists() else []


def hero_figure() -> tuple[str, str, str]:
    """(data URI, alt, caption) — the viz hero, else the first drawing."""
    hero = OUT / "viz_hero.png"
    if hero.exists():
        return data_uri(hero), PRODUCT_NAME, "Photoreal render of the finished product."
    manifest = drawing_manifest()
    first = OUT / "drawings" / f"{manifest[0]['name']}.png" if manifest else None
    if first is None or not first.exists():
        return "", PRODUCT_NAME, "No render and no drawing PNG yet (run `make viz` or `make drawings-png`)."
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
    manifest = drawing_manifest()
    plans, _uncovered = cutlist.plan_all()
    purchase = purchase_rows_all(plans)
    hero_uri, hero_alt, hero_caption = hero_figure()
    extra = "".join(figure(OUT / name, cap, txt)
                    for name, cap, txt in (("viz_detail.png", "Detail.", "Close-up of the joint."),)
                    if (OUT / name).exists())
    cut_png = OUT / "cutlist.png"
    drawing_figs = "".join(
        figure(OUT / "drawings" / f"{e['name']}.png", e["number"],
               f"{e['title']} · scale {e['scale']} on A3", png=True)
        for e in manifest if (OUT / "drawings" / f"{e['name']}.png").exists())
    layout_png = SUBPROJECT / "out" / "layout.png"
    if layout_png.exists():
        drawing_figs += figure(layout_png, SUBPROJECT_TITLE, SUBPROJECT_LAYOUT_CAPTION, png=True)
    assembly_html, finishing_html = plan_html()
    fasteners = fastener_rows()

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
        "DRAWING_FIGURES": drawing_figs,
        "DRAWINGS_EXTRA": drawings_extra_html(),
        "PRINT_NOTE": esc(PRINT_NOTE),
        "BOM_MATERIAL_CAPTION": esc(f"Parts — total {model.format_mass(total_kg, unit)}"),
        "BOM_ROWS": "".join(
            f'<tr><td class="num">{i}</td><td>{esc(name)}</td><td class="size">{esc(size_by_row(name))}</td>'
            f'<td class="num">{count}</td><td class="num">{model.format_mass(mass, unit)}/pc</td><td>{esc(note)}</td></tr>'
            for i, name, _mat, count, mass, note in bom),
        "PURCHASE_ROWS": "".join(
            f'<tr><td>{inline(n)}</td><td>{inline(kind)}</td><td class="num">{inline(q)}</td>'
            f'<td class="num">{inline(util)}</td><td class="size">{inline(offcut)}</td></tr>'
            for n, kind, q, util, offcut in purchase),
        "CUTLIST_DATA_URI": data_uri(cut_png, png=True) if cut_png.exists() else "",
        "CUTLIST_CAPTION": esc("Pieces on the stock units; hatched = waste."
                               if cut_png.exists() else "Run `make cutlist-png` for the diagram."),
        # the quantity cell wraps (class qty, not num): a long quantity would
        # otherwise push the purpose column off the page
        "FASTENERS_TABLE": "".join(
            f'<tr><td>{inline(a)}</td><td class="qty">{inline(b)}</td><td>{inline(c)}</td></tr>'
            for a, b, c in fasteners),
        "SECTION_ASSEMBLY": SECTION_ASSEMBLY, "ASSEMBLY_STEPS": assembly_html,
        "SECTION_FINISHING": SECTION_FINISHING, "FINISHING_STEPS": finishing_html,
        "SECTION_ANALYSIS": SECTION_ANALYSIS, "ANALYSIS": analysis_html(),
        "ASSUMPTION_ITEMS": assumptions_html(),
        "FOOTER_SOURCES": FOOTER_SOURCES,
    }
    OUT.mkdir(exist_ok=True)
    (OUT / "build_sheet.html").write_text(fill((ROOT / "buildsheet.html").read_text(), slots))

    # README mirror (Markdown; the plan and the reports are linked, not copied)
    strip = lambda s: re.sub(r"<[^>]+>", "", s)  # noqa: E731
    readme = [f"# {PRODUCT_NAME}", "", f"{SUBTITLE} · v{VERSION} · {today}", "",
              f"- Dimensions: {slots['DIMENSIONS']}", f"- Material: {slots['MATERIAL']}",
              f"- Mass: {slots['MASS']}", ""]
    if (OUT / "viz_hero.png").exists():
        readme += ["![Visualization](out/viz_hero.png)", ""]
    readme += ["## Concept", "", concept_paragraph(), "", "| Parameter | Value | Origin |", "|---|---|---|"]
    readme += [f"| {n} | {v} | {o} |" for n, v, o in parameter_rows()]
    readme += ["", f"## {SECTION_DRAWINGS}", "", "Full set: `out/drawings/drawings_A3.pdf` (A3, true scale).", ""]
    readme += [f"- {e['number']} {e['title']} ({e['scale']}) — `out/drawings/{e['name']}.png`" for e in manifest]
    for title, path in DRAWINGS_NOTES:
        if path.exists():
            readme += ["", f"### {title}", "", read(path).strip()]
    readme += ["", "## Bill of materials", "", read(OUT / "bom.md").strip(), "",
               "### Purchasing", "", "| Material | Stock item | Buy | Utilization | Largest offcut |", "|---|---|---|---|---|"]
    readme += [f"| {n} | {kind} | {q} | {util} | {offcut} |" for n, kind, q, util, offcut in purchase]
    if cut_png.exists():
        readme += ["", "![Cutting plan](out/cutlist.png)"]
    readme += ["", "### Fasteners & finishing materials", "", "| Item | Quantity | Purpose |", "|---|---|---|"]
    readme += [f"| {a} | {b} | {c} |" for a, b, c in fasteners]
    readme += ["", f"## {SECTION_ASSEMBLY}", ""]
    if (OUT / "plan.md").exists():
        readme += ["Numbered steps and the finishing schedule: `out/plan.md`."]
    else:
        readme += [PLAN_MISSING]
    if (SUBPROJECT / "out" / "plan.md").exists():
        readme += [f"{SUBPROJECT_TITLE}: `{(SUBPROJECT / 'out' / 'plan.md').relative_to(ROOT)}`."]
    readme += ["", f"## {SECTION_ANALYSIS}", "", strip(analysis_html()), "",
               "## Assumptions & uncertainties", ""]
    readme += [f"- {strip(x)}" for x in assumption_items() + record_assumptions()]
    stage_files = [str(p.relative_to(ROOT)) for _t, p in ASSUMPTION_SOURCES if p.exists()]
    if stage_files:
        readme += ["", "Per-stage assumptions: " + ", ".join(f"`{p}`" for p in stage_files) + "."]
    readme += ["", "---", "", strip(FOOTER_SOURCES), ""]
    (ROOT / "README.md").write_text("\n".join(readme))
    size_kb = (OUT / "build_sheet.html").stat().st_size / 1e3
    print(f"wrote {OUT / 'build_sheet.html'} ({size_kb:.0f} kB), README.md")


if __name__ == "__main__":
    build()
