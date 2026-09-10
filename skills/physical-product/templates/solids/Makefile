# Product pipeline. All targets are regenerable; out/ is disposable.
# Machine defaults are overridable: `make viz BLENDER=/path/to/blender`.
UV ?= uv
BLENDER ?= blender
CHROME ?= /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
KICAD_CLI ?= /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli
OUT := out

all: parts check drawings bom cutlist

parts:
	$(UV) run model.py export

bom:
	$(UV) run model.py bom

# assembly gate: mass/COG + pairwise interference + declared clearances;
# fails fast before the expensive drawing stage
check:
	$(UV) run model.py check

# cutting plan: purchasing tables + cut diagrams from STOCK in cutlist.py
cutlist:
	$(UV) run cutlist.py >/dev/null

$(OUT)/cutlist.png: $(OUT)/cutlist.svg $(OUT)/cutlist.html
	"$(CHROME)" --headless --screenshot=$@ \
		--window-size=$$(sed -n 's/.*data-window-size="\([0-9,]*\)".*/\1/p' \
			$(OUT)/cutlist.html) \
		--default-background-color=FFFFFFFF --hide-scrollbars \
		"file://$(CURDIR)/$(OUT)/cutlist.html"

cutlist-png: cutlist $(OUT)/cutlist.png

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
# wrappers), merged into drawings_A3.pdf in drawing-number order.
drawings-pdf: drawings
	@for f in $(OUT)/drawings/*.print.html; do \
		"$(CHROME)" --headless --no-pdf-header-footer \
			--print-to-pdf=$${f%.print.html}.pdf "file://$(CURDIR)/$$f" \
			2>/dev/null; \
		echo "  pdf $${f%.print.html}.pdf"; done
	$(UV) run merge_pdfs.py

# One complete PDF: A4 build sheet + all A3 drawing sheets. The build-sheet
# HTML carries its own @media print rules (A4 pages, forced light palette)
# — see templates/common/buildsheet.html and the skill's buildsheet.md.
pdf: drawings-pdf buildsheet
	"$(CHROME)" --headless --no-pdf-header-footer \
		--print-to-pdf=$(OUT)/build_sheet.pdf \
		"file://$(CURDIR)/$(OUT)/build_sheet.html" 2>/dev/null
	$(UV) run merge_pdfs.py --complete

# build sheet from the model, cut plan, analysis reports and figures:
# out/build_sheet.html (artifact + print source), out/plan.md, README.md
buildsheet: bom cutlist
	$(UV) run buildsheet.py

# Blender exits 0 even when the python script throws — the grep IS the check.
viz: parts
	$(BLENDER) --background --python blender_viz.py -- $(OUT) 2>&1 \
		| tee $(OUT)/viz.log \
		| grep -E 'Saved|Traceback|Error' || true
	@! grep -q Traceback $(OUT)/viz.log || \
		{ echo 'BLENDER SCRIPT CRASHED — see $(OUT)/viz.log'; exit 1; }

# beam-element frame model (numpy, no solver): out/fea/stress.png + report
frame-fea:
	$(UV) run frame_fea.py

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

# ISO 3098 technical lettering for drawings (GPL + font exception).
# drawings.py picks it up automatically when present; without it dims fall
# back to Arial italic (then use Ø instead of ⌀ in labels).
font: assets/osifont/osifont.ttf
assets/osifont/osifont.ttf:
	mkdir -p $(dir $@)
	curl -fsSL -o $@ \
		https://github.com/hikikomori82/osifont/raw/master/osifont.ttf

# Localization checklist: every user-facing string the pipeline emits.
# Run right after scaffolding and translate each hit into the user's
# language (see the skill's Language rule) — code and comments stay English.
l10n:
	@echo "user-facing strings to translate (L10N markers + template slots):"
	@grep -rn "L10N" *.py *.html 2>/dev/null || true
	@echo "--- buildsheet.html visible strings (translate in the skeleton) ---"
	@grep -oE "<(dt|th|caption|h2|b)>[^<{]+" buildsheet.html 2>/dev/null | sed "s/^<[a-z0-9]*>/  /" | sort -u || true
	@grep -oE "<p class=\"lede\">[^{<]+" buildsheet.html 2>/dev/null | sed "s/^<p[^>]*>/  /" || true
	@echo "--- buildsheet slots (filled by buildsheet.py; CONTENT block is L10N) ---"
	@grep -o "{{[A-Z_]*}}" buildsheet.html 2>/dev/null | sort -u || true
	@echo "--- also translate: PARTS local_name/note, Material names, STOCK keys ---"

doctor:
	@echo "tool availability:"
	@$(UV) --version >/dev/null 2>&1 && echo "  uv        OK" || echo "  uv        MISSING"
	@$(UV) run python -c "import build123d,sys;print('  build123d OK', build123d.__version__)" 2>/dev/null || echo "  build123d MISSING (uv sync)"
	@$(UV) run python -c "import build123d_drafting;print('  b3d-drafting OK')" 2>/dev/null || echo "  b3d-drafting MISSING (dims degrade to ExtensionLine)"
	@test -f assets/osifont/osifont.ttf && echo "  osifont   OK" || echo "  osifont   MISSING (make font; drawings fall back to Arial)"
	@$(UV) run python -c "import b123d_recognisers;print('  recognisers OK')" 2>/dev/null || echo "  recognisers MISSING (uv sync --extra recognise; auto_holes degrades)"
	@command -v "$(BLENDER)" >/dev/null && echo "  blender   OK" || echo "  blender   MISSING"
	@test -x "$(CHROME)" && echo "  chrome    OK" || echo "  chrome    MISSING"
	@command -v ccx >/dev/null && echo "  ccx       OK" || echo "  ccx       MISSING (FEA -> analytic only)"
	@$(UV) run --extra fea python -c "import gmsh;print('  gmsh      OK')" 2>/dev/null || echo "  gmsh      MISSING (uv sync --extra fea)"
	@test -x "$(KICAD_CLI)" && echo "  kicad-cli OK" || echo "  kicad-cli MISSING"

# concept previews: every variant = a parameter set (ROBION_PARAMS) ->
# out/concept/<id>/ (parts + quick render) and out/concept/facts.json
concept:
	$(UV) run concept.py

clean:
	rm -rf $(OUT)

.PHONY: buildsheet frame-fea concept all parts bom check cutlist cutlist-png drawings drawings-png drawings-pdf pdf viz fea font l10n doctor clean
