# Product pipeline. All targets are regenerable; out/ is disposable.
# Machine defaults are overridable: `make viz BLENDER=/path/to/blender`.
UV ?= uv
BLENDER ?= blender
CHROME ?= /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
KICAD_CLI ?= /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli
OUT := out

all: parts drawings bom

parts:
	$(UV) run model.py export

bom:
	$(UV) run model.py bom

drawings: parts
	$(UV) run drawings.py

# Drawings render to PNG via headless Chrome through the scaling .html
# wrapper drawings.py emits (a bare SVG renders 1 px/unit and crops).
# ALWAYS Read every PNG before showing the user.
$(OUT)/drawings/%.png: $(OUT)/drawings/%.svg $(OUT)/drawings/%.html
	"$(CHROME)" --headless --screenshot=$@ --window-size=1900,1250 \
		--default-background-color=FFFFFFFF --hide-scrollbars \
		"file://$(CURDIR)/$(OUT)/drawings/$*.html"

drawings-png: drawings
	@for f in $(OUT)/drawings/*.html; do \
		case $$f in *.print.html) continue;; esac; \
		$(MAKE) --no-print-directory $${f%.html}.png; done

# Printable vector PDFs: one true-scale A3 sheet each (via the .print.html
# wrappers), merged into vykresy_A3.pdf in drawing-number order.
drawings-pdf: drawings
	@for f in $(OUT)/drawings/*.print.html; do \
		"$(CHROME)" --headless --no-pdf-header-footer \
			--print-to-pdf=$${f%.print.html}.pdf "file://$(CURDIR)/$$f" \
			2>/dev/null; \
		echo "  pdf $${f%.print.html}.pdf"; done
	$(UV) run merge_pdfs.py

# One complete PDF: A4 build sheet + all A3 drawing sheets. Requires the
# build-sheet generator to emit out/vyrobni_list.print.html (light theme
# forced, @page A4) — see the skill's buildsheet.md.
pdf: drawings-pdf
	"$(CHROME)" --headless --no-pdf-header-footer \
		--print-to-pdf=$(OUT)/vyrobni_list.pdf \
		"file://$(CURDIR)/$(OUT)/vyrobni_list.print.html" 2>/dev/null
	$(UV) run merge_pdfs.py --komplet

# Blender exits 0 even when the python script throws — the grep IS the check.
viz: parts
	$(BLENDER) --background --python blender_viz.py -- $(OUT) 2>&1 \
		| tee $(OUT)/viz.log \
		| grep -E 'Saved|Traceback|Error' || true
	@! grep -q Traceback $(OUT)/viz.log || \
		{ echo 'BLENDER SCRIPT CRASHED — see $(OUT)/viz.log'; exit 1; }

fea:
	@command -v ccx >/dev/null \
		&& $(UV) run --extra fea fea.py \
		|| { echo 'ccx (CalculiX) not installed -> analytic-only.'; \
		     echo 'Install (ask user first): brew install costerwi/calculix/calculix-ccx'; \
		     $(UV) run fea.py --analytic-only; }

# CC0 PBR textures from Poly Haven, fetched on demand:
#   make assets/<asset>/<asset>_diff_2k.jpg   (also rough/nor_gl/disp maps)
assets/%.jpg:
	mkdir -p $(dir $@)
	curl -fsSL -o $@ \
		https://dl.polyhaven.org/file/ph-assets/Textures/jpg/2k/$(notdir $(patsubst %/,%,$(dir $@)))/$(notdir $@)

doctor:
	@echo "tool availability:"
	@$(UV) --version >/dev/null 2>&1 && echo "  uv        OK" || echo "  uv        MISSING"
	@$(UV) run python -c "import build123d,sys;print('  build123d OK', build123d.__version__)" 2>/dev/null || echo "  build123d MISSING (uv sync)"
	@$(UV) run python -c "import build123d_drafting;print('  b3d-drafting OK')" 2>/dev/null || echo "  b3d-drafting MISSING (dims degrade to ExtensionLine)"
	@command -v "$(BLENDER)" >/dev/null && echo "  blender   OK" || echo "  blender   MISSING"
	@test -x "$(CHROME)" && echo "  chrome    OK" || echo "  chrome    MISSING"
	@command -v ccx >/dev/null && echo "  ccx       OK" || echo "  ccx       MISSING (FEA -> analytic only)"
	@$(UV) run --extra fea python -c "import gmsh;print('  gmsh      OK')" 2>/dev/null || echo "  gmsh      MISSING (uv sync --extra fea)"
	@test -x "$(KICAD_CLI)" && echo "  kicad-cli OK" || echo "  kicad-cli MISSING"

clean:
	rm -rf $(OUT)

.PHONY: all parts bom drawings drawings-png drawings-pdf pdf viz fea doctor clean
