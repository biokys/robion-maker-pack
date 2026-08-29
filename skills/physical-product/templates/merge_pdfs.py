"""Merge per-sheet drawing PDFs (from `make drawings-pdf`) into one
printable out/drawings/vykresy_A3.pdf, in drawing-number order.

With --komplet, also prepend the printed build sheet
(out/vyrobni_list.pdf, an A4 document printed from the build sheet's
.print.html variant) into out/<product>_komplet.pdf — one complete PDF.

Run: uv run merge_pdfs.py [--komplet]
"""

import sys
from pathlib import Path

from pypdf import PdfWriter

ROOT = Path(__file__).parent
OUT = ROOT / "out" / "drawings"

SHEET_ORDER = [  # EDIT-ME: sheet stems in drawing-number order
    "bracket",
]
KOMPLET_NAME = "product_komplet.pdf"  # EDIT-ME


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
    sheets = [OUT / f"{stem}.pdf" for stem in SHEET_ORDER]
    merge(OUT / "vykresy_A3.pdf", sheets)
    if "--komplet" in sys.argv:
        merge(ROOT / "out" / KOMPLET_NAME,
              [ROOT / "out" / "vyrobni_list.pdf", *sheets])
