"""Embed images into the build sheet as data URIs (buildsheet.md rules:
downscale to <=1200 px, JPEG q82 for photoreal renders, PNG for line art).

CLI:    uv run datauri.py <image> [--png] [--max 1200]   # URI on stdout
Import: from datauri import data_uri                     # for the generator

Portable (Pillow) — no sips/ImageMagick dependency.
"""

from __future__ import annotations

import base64
import io
import sys
from pathlib import Path

from PIL import Image

MAX_PX = 1200
JPEG_QUALITY = 82


def data_uri(path: str | Path, max_px: int = MAX_PX, png: bool = False) -> str:
    """Downscaled base64 data URI. `png=True` keeps lossless PNG (line art,
    drawings); default is JPEG q82 on white (photoreal renders)."""
    img = Image.open(path)
    img.thumbnail((max_px, max_px))          # in-place, keeps aspect ratio
    buf = io.BytesIO()
    if png:
        img.save(buf, "PNG", optimize=True)
        mime = "image/png"
    else:
        if img.mode in ("RGBA", "P", "LA"):  # JPEG has no alpha -> white bg
            background = Image.new("RGB", img.size, (255, 255, 255))
            background.paste(img.convert("RGBA"),
                             mask=img.convert("RGBA").split()[-1])
            img = background
        img.save(buf, "JPEG", quality=JPEG_QUALITY)
        mime = "image/jpeg"
    return f"data:{mime};base64,{base64.b64encode(buf.getvalue()).decode()}"


if __name__ == "__main__":
    argv = sys.argv[1:]
    max_px = MAX_PX
    if "--max" in argv:
        i = argv.index("--max")
        max_px = int(argv[i + 1])
        del argv[i:i + 2]
    png = "--png" in argv
    argv = [a for a in argv if not a.startswith("--")]
    if len(argv) != 1:
        raise SystemExit("usage: uv run datauri.py <image> [--png] [--max N]")
    print(data_uri(argv[0], max_px=max_px, png=png))
