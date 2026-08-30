# Pattern pipeline. All targets are regenerable; out/ is disposable.
UV ?= uv
CHROME ?= /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
OUT := out

all: pattern check bom

pattern:
	$(UV) run pattern.py export

bom:
	$(UV) run pattern.py bom

# validity gate: closed outlines, notches on stitch lines, fits the fabric
check:
	$(UV) run pattern.py check

# A4 tiling at true 1:1 (out/print/strih_A4.html)
tile: pattern
	$(UV) run tile_a4.py

# printable pattern: Chrome prints the tiling at exact scale
pdf: tile
	"$(CHROME)" --headless --no-pdf-header-footer \
		--print-to-pdf=$(OUT)/print/strih_A4.pdf \
		"file://$(CURDIR)/$(OUT)/print/strih_A4.html" 2>/dev/null
	@echo "  pdf $(OUT)/print/strih_A4.pdf"

# marker PNG for the Read-before-showing gate
$(OUT)/layout.png: $(OUT)/layout.svg $(OUT)/layout.html
	"$(CHROME)" --headless --screenshot=$@ \
		--window-size=$$(sed -n 's/.*data-window-size="\([0-9,]*\)".*/\1/p' \
			$(OUT)/layout.html) \
		--default-background-color=FFFFFFFF --hide-scrollbars \
		"file://$(CURDIR)/$(OUT)/layout.html"

layout-png: pattern $(OUT)/layout.png

doctor:
	@echo "tool availability:"
	@$(UV) --version >/dev/null 2>&1 && echo "  uv        OK" || echo "  uv        MISSING"
	@$(UV) run python -c "import shapely;print('  shapely   OK', shapely.__version__)" 2>/dev/null || echo "  shapely   MISSING (uv sync)"
	@test -x "$(CHROME)" && echo "  chrome    OK" || echo "  chrome    MISSING (PDF/PNG steps degrade to SVG)"

clean:
	rm -rf $(OUT)

.PHONY: all pattern bom check tile pdf layout-png doctor clean
