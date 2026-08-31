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
# (NB: `pdf` is the PATTERN here — the výrobní list has buildsheet-pdf)
pdf: tile
	"$(CHROME)" --headless --no-pdf-header-footer \
		--print-to-pdf=$(OUT)/print/strih_A4.pdf \
		"file://$(CURDIR)/$(OUT)/print/strih_A4.html" 2>/dev/null
	@echo "  pdf $(OUT)/print/strih_A4.pdf"

# build sheet PDF (out/vyrobni_list.html carries its own @media print rules)
buildsheet-pdf:
	"$(CHROME)" --headless --no-pdf-header-footer \
		--print-to-pdf=$(OUT)/vyrobni_list.pdf \
		"file://$(CURDIR)/$(OUT)/vyrobni_list.html" 2>/dev/null
	@echo "  pdf $(OUT)/vyrobni_list.pdf"

# marker PNG for the Read-before-showing gate
$(OUT)/layout.png: $(OUT)/layout.svg $(OUT)/layout.html
	"$(CHROME)" --headless --screenshot=$@ \
		--window-size=$$(sed -n 's/.*data-window-size="\([0-9,]*\)".*/\1/p' \
			$(OUT)/layout.html) \
		--default-background-color=FFFFFFFF --hide-scrollbars \
		"file://$(CURDIR)/$(OUT)/layout.html"

layout-png: pattern $(OUT)/layout.png

# per-piece PNGs (Read gate + cockpit tiles) via the pixel wrappers export()
# writes — a bare mm-sized SVG screenshots cropped (Chrome ~3.78 px/mm)
pieces-png: pattern
	@for f in $(OUT)/pieces/*.html; do \
		"$(CHROME)" --headless --screenshot=$${f%.html}.png \
			--window-size=$$(sed -n 's/.*data-window-size="\([0-9,]*\)".*/\1/p' $$f) \
			--default-background-color=FFFFFFFF --hide-scrollbars \
			"file://$(CURDIR)/$$f" 2>/dev/null || exit 1; \
		echo "  png $${f%.html}.png"; done

# everything the cockpit image tiles show: marker + per-piece PNGs
previews: layout-png pieces-png

# hero: flat parametric illustration derived from pattern.py (viz.py)
viz:
	$(UV) run viz.py
	"$(CHROME)" --headless --screenshot=$(OUT)/viz_hero.png \
		--window-size=$$(sed -n 's/.*data-window-size="\([0-9,]*\)".*/\1/p' \
			$(OUT)/viz_hero.html) \
		--default-background-color=FFFFFFFF --hide-scrollbars \
		"file://$(CURDIR)/$(OUT)/viz_hero.html" 2>/dev/null
	@echo "  png $(OUT)/viz_hero.png"

doctor:
	@echo "tool availability:"
	@$(UV) --version >/dev/null 2>&1 && echo "  uv        OK" || echo "  uv        MISSING"
	@$(UV) run python -c "import shapely;print('  shapely   OK', shapely.__version__)" 2>/dev/null || echo "  shapely   MISSING (uv sync)"
	@test -x "$(CHROME)" && echo "  chrome    OK" || echo "  chrome    MISSING (PDF/PNG steps degrade to SVG)"

clean:
	rm -rf $(OUT)

.PHONY: all pattern bom check tile pdf buildsheet-pdf layout-png pieces-png \
	previews viz doctor clean
