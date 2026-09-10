# Robion viz engine

Photoreal product renders in the browser: three.js + three-gpu-pathtracer, a port of
the pack's former Blender scene (Z-up, mm → m, floor, three-point area-light rig, one
material per part, shots from direction / distance / lens).

`src/render.js` is the source; `npm run build` bundles it with esbuild into
`skills/physical-product/templates/common/viz/render.bundle.js` (committed, so a
product project needs no Node). `src/index.html` is copied alongside.

Callers:

- `templates/solids/viz.py` — headless Chrome over the DevTools protocol
  (`window.vizRun(config)` → `window.__viz`).
- Robion's desktop viewport and the gallery on robion.app load the same bundle and
  call `RobionViz.run(config)`.

The config contract (parts, materials, shots, explode, resolution, samples, crease
angle) is documented in `viz.py`; the traps in
`skills/physical-product/references/stacks/viz-gotchas.md`.

After editing `src/`: `npm run build`, re-render a real project (`make viz`), Read the
PNGs, commit the bundle with the source.
