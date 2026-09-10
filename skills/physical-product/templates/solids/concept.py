"""Concept previews — every variant is a PARAMETER SET, not separate geometry.

The concept gate (SKILL.md §1 step 3) wants two or three variants with quick
previews and comparable facts. Each variant here is a dict of model.py
parameters applied through ROBION_PARAMS (the same mechanism as Robion's
sliders), so the cards the user picks from come from the model that later
feeds drawings, BOM and analysis — nothing is thrown away after the freeze.

Per variant: export parts, render one quick hero shot (VIZ_SAMPLES /
VIZ_SHOTS from viz.py), collect facts. Outputs:
  out/concept/<id>/parts/*.step|stl   out/concept/<id>/viz_hero.png
  out/concept/facts.json              {id: {title, params, mass_kg, parts, …}}

Facts come from `model.facts()` when the model defines it (recommended:
return a flat dict of the numbers the cards compare — mass, member count,
weld joints, stiffness ratio); otherwise mass and part count are computed
from PARTS. The variant ids double as the `choices` option values and as
`concept.variants[].id` in the design record (snake_case).

Run: uv run concept.py   (make concept). Without Chrome (viz.py exit 2) the
renders are skipped and facts.json is still written.
"""

from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "out" / "concept"
CONCEPT_SAMPLES = "48"          # quick previews; the hero render keeps the default

# EDIT-ME — the product's variants. L10N: titles are shown on the cards.
# Demo: three plate thicknesses of the template bracket.
VARIANTS: dict[str, dict] = {
    "thin": {"title": "Thin plate (4 mm)", "params": {"thickness": 4.0}},
    "standard": {"title": "Standard plate (5 mm)", "params": {}},
    "heavy": {"title": "Heavy plate (6 mm)", "params": {"thickness": 6.0}},
}

_FACTS_SNIPPET = """
import json, model
if hasattr(model, "facts"):
    print(json.dumps(model.facts(), ensure_ascii=False))
else:
    mass, _cog = model.mass_properties()
    parts = sum(s.count for s in model.PARTS.values() if not getattr(s, "reference", False))
    print(json.dumps({"mass_kg": round(mass, 2), "parts": parts}))
"""


def _run(cmd: list[str], env: dict[str, str], capture: bool = False) -> str:
    result = subprocess.run(cmd, cwd=ROOT, env=env, check=True, text=True,
                            capture_output=capture)
    return result.stdout if capture else ""


def render_variant(vid: str, variant: dict) -> dict:
    env = {**os.environ, "ROBION_PARAMS": json.dumps(variant["params"])}
    vdir = OUT / vid
    vdir.mkdir(parents=True, exist_ok=True)

    _run([sys.executable, "model.py", "export"], env)
    shutil.rmtree(vdir / "parts", ignore_errors=True)
    shutil.copytree(ROOT / "out" / "parts", vdir / "parts")
    facts = json.loads(_run([sys.executable, "-c", _FACTS_SNIPPET], env, capture=True))

    viz = subprocess.run(
        [sys.executable, "viz.py", str(vdir)], cwd=ROOT, text=True, capture_output=True,
        env={**env, "VIZ_SAMPLES": CONCEPT_SAMPLES, "VIZ_SHOTS": "viz_hero"},
    )
    if viz.returncode == 0 and (vdir / "viz_hero.png").exists():
        facts["image"] = str((vdir / "viz_hero.png").relative_to(ROOT))
    elif viz.returncode == 2:  # viz.py: Chrome not found
        print(f"  Chrome not found — variant {vid} exported without a render", file=sys.stderr)
    else:
        raise SystemExit(f"viz.py failed for variant {vid} — see {vdir / 'viz.log'}")
    print(f"variant {vid}: {facts}")
    return {"title": variant["title"], "params": variant["params"], **facts}


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    facts = {vid: render_variant(vid, v) for vid, v in VARIANTS.items()}
    (OUT / "facts.json").write_text(json.dumps(facts, ensure_ascii=False, indent=2))
    # leave out/parts as the model's own defaults, not the last variant
    env = {k: v for k, v in os.environ.items() if k != "ROBION_PARAMS"}
    _run([sys.executable, "model.py", "export"], env)
    print(f"wrote {OUT / 'facts.json'}")


if __name__ == "__main__":
    main()
