# Product pipeline. All targets are regenerable; out/ is disposable.
# Machine defaults are overridable: `make viz CHROME=/path/to/chrome`.
UV ?= uv
# LEAF=1 (production subagents running side by side): no parts re-export, no uv
# re-sync — the main thread ran `make parts check` and `uv sync` before the fan-out.
RUN := $(UV) run$(if $(LEAF), --no-sync,)
DEPS_PARTS := $(if $(LEAF),,parts)
# CalculiX: Homebrew installs the versioned `ccx_2.23` and no bare `ccx`. Take whatever is
# there — a bare `ccx` on PATH, else any `ccx_*` in the PATH directories or the Homebrew
# prefixes, newest version last. Override by hand: `make fea CCX=/path/to/ccx`. fea.py
# honours the same variable (find_ccx), so the two never disagree again.
CCX ?= $(shell command -v ccx 2>/dev/null || ls $(addsuffix /ccx_*,$(subst :, ,$(PATH))) \
	/opt/homebrew/bin/ccx_* /usr/local/bin/ccx_* 2>/dev/null | sort -V | tail -1)
CHROME ?= /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
KICAD_CLI ?= /Applications/KiCad/KiCad.app/Contents/MacOS/kicad-cli
OUT := out

all: parts check drawings bom cutlist

parts:
	$(RUN) model.py export

bom:
	$(RUN) model.py bom

# assembly gate: mass/COG + pairwise interference + declared clearances;
# fails fast before the expensive drawing stage
check:
	$(RUN) model.py check

# cutting plan: purchasing tables + cut diagrams from STOCK in cutlist.py
cutlist:
	$(RUN) cutlist.py >/dev/null

$(OUT)/cutlist.png: $(OUT)/cutlist.svg $(OUT)/cutlist.html
	"$(CHROME)" --headless --screenshot=$@ \
		--window-size=$$(sed -n 's/.*data-window-size="\([0-9,]*\)".*/\1/p' \
			$(OUT)/cutlist.html) \
		--default-background-color=FFFFFFFF --hide-scrollbars \
		"file://$(CURDIR)/$(OUT)/cutlist.html"

cutlist-png: cutlist $(OUT)/cutlist.png

drawings: $(DEPS_PARTS)
	$(RUN) drawings.py

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
	$(RUN) merge_pdfs.py

# One complete PDF: A4 build sheet + all A3 drawing sheets. The build-sheet
# HTML carries its own @media print rules (A4 pages, forced light palette)
# — see templates/common/buildsheet.html and the skill's buildsheet.md.
pdf: drawings-pdf buildsheet
	"$(CHROME)" --headless --no-pdf-header-footer \
		--print-to-pdf=$(OUT)/build_sheet.pdf \
		"file://$(CURDIR)/$(OUT)/build_sheet.html" 2>/dev/null
	$(RUN) merge_pdfs.py --complete

# build sheet from the model, cut plan, analysis reports and figures:
# out/build_sheet.html (artifact + print source), out/plan.md, README.md
buildsheet: $(if $(LEAF),,bom cutlist)
	$(RUN) buildsheet.py

# Photoreal renders: viz.py drives headless Chrome (GPU path tracer) over the
# DevTools protocol; the exit code is trustworthy (2 = Chrome not found).
viz: $(DEPS_PARTS)
	CHROME="$(CHROME)" $(UV) run viz.py $(OUT)

# beam-element frame model (numpy, no solver): out/fea/stress.png + report
frame-fea:
	$(RUN) frame_fea.py

fea:
	@test -n "$(CCX)" \
		&& CCX="$(CCX)" $(RUN) --extra fea fea.py \
		|| { echo 'CalculiX not found (no ccx or ccx_* on PATH / under Homebrew) -> analytic-only.'; \
		     echo 'Install (ask user first): brew install costerwi/calculix/calculix-ccx'; \
		     $(RUN) fea.py --analytic-only; }

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
	@$(RUN) python -c "import build123d,sys;print('  build123d OK', build123d.__version__)" 2>/dev/null || echo "  build123d MISSING (uv sync)"
	@$(RUN) python -c "import build123d_drafting;print('  b3d-drafting OK')" 2>/dev/null || echo "  b3d-drafting MISSING (dims degrade to ExtensionLine)"
	@test -f assets/osifont/osifont.ttf && echo "  osifont   OK" || echo "  osifont   MISSING (make font; drawings fall back to Arial)"
	@$(RUN) python -c "import b123d_recognisers;print('  recognisers OK')" 2>/dev/null || echo "  recognisers MISSING (uv sync --extra recognise; auto_holes degrades)"
	@test -x "$(CHROME)" && echo "  chrome    OK" || echo "  chrome    MISSING"
	@test -n "$(CCX)" && echo "  ccx       OK ($(CCX))" || echo "  ccx       MISSING (no ccx / ccx_* on PATH or under Homebrew; FEA -> analytic only)"
	@$(RUN) --extra fea python -c "import gmsh;print('  gmsh      OK')" 2>/dev/null || echo "  gmsh      MISSING (uv sync --extra fea)"
	@test -x "$(KICAD_CLI)" && echo "  kicad-cli OK" || echo "  kicad-cli MISSING"

# concept previews: every variant = a parameter set (ROBION_PARAMS) ->
# out/concept/<id>/ (parts + quick render) and out/concept/facts.json
concept:
	$(RUN) concept.py

clean:
	rm -rf $(OUT)

.PHONY: buildsheet frame-fea concept all parts bom check cutlist cutlist-png drawings drawings-png drawings-pdf pdf viz fea font l10n doctor clean
