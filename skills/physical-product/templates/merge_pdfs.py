"""Merge per-sheet drawing PDFs (from `make drawings-pdf`) into one
printable out/drawings/vykresy_A3.pdf, in drawing-number order.

Sheet order comes from out/drawings/manifest.json, which drawings.py
maintains (sorted by drawing number) — no hand-kept list needed.

With --komplet, also prepend the printed build sheet
(out/vyrobni_list.pdf, an A4 document printed from the build sheet)
into out/<product>_komplet.pdf — one complete PDF.

Run: uv run merge_pdfs.py [--komplet]
"""

import json
import sys
import tomllib
from pathlib import Path

from pypdf import PdfWriter

ROOT = Path(__file__).parent
OUT = ROOT / "out" / "drawings"

SHEET_ORDER: list[str] = [  # fallback only — used when manifest.json is
    "bracket",              # missing (e.g. hand-built sheets); normally
]                           # the manifest wins
KOMPLET_NAME: str | None = None  # None -> "<pyproject name>_komplet.pdf"


def komplet_name() -> str:
    if KOMPLET_NAME:
        return KOMPLET_NAME
    meta = tomllib.loads((ROOT / "pyproject.toml").read_text())
    return f"{meta['project']['name']}_komplet.pdf"


def sheet_stems() -> list[str]:
    manifest = OUT / "manifest.json"
    if manifest.exists():
        return [e["name"] for e in json.loads(manifest.read_text())["sheets"]]
    return SHEET_ORDER


def merge(target: Path, sources: list[Path]) -> None:
    writer = PdfWriter()
    for pdf in sources:
        if not pdf.exists():
            raise SystemExit(f"missing {pdf} — run `make drawings-pdf` "
                             "(and print the build sheet for --komplet)")
        writer.append(str(pdf))
    with target.open("wb") as fh:
        writer.write(fh)
    print(f"wrote {target} ({len(sources)} files, "
          f"{target.stat().st_size / 1e6:.1f} MB)")


if __name__ == "__main__":
    sheets = [OUT / f"{stem}.pdf" for stem in sheet_stems()]
    merge(OUT / "vykresy_A3.pdf", sheets)
    if "--komplet" in sys.argv:
        merge(ROOT / "out" / komplet_name(),
              [ROOT / "out" / "vyrobni_list.pdf", *sheets])
