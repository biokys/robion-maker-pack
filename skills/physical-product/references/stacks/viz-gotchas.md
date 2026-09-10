# Photoreal viz — hard-won gotchas

The viz stage is `templates/solids/viz.py` (Python driver) + `templates/common/viz/`
(the engine: three.js + three-gpu-pathtracer, one prebuilt `render.bundle.js`).
`viz.py` serves the project over loopback, launches headless Chrome with the GPU on,
drives it over the DevTools protocol and writes `out/viz_<shot>.png` + `out/viz.log`.
The same engine renders in Robion's viewport and on robion.app. Everything below was
learned on real products (macOS, Apple Silicon, Chrome 140+) and is encoded in the
templates; keep it when modifying them.

## Process & driver

- **Exit codes are real** (unlike Blender's): 0 rendered, 1 failed (read
  `out/viz.log`, the engine's status line is the last thing in it), 2 Chrome not
  found. `concept.py` treats 2 as "no preview", anything else as a failure.
- **The GPU must be on.** The path tracer is WebGL2 compute-heavy; SwiftShader
  (software GL) needs minutes per image and looks identical, so a "slow but fine"
  render is the symptom. `viz.log` prints the `gpu:` line — expect `ANGLE Metal`
  on macOS, a Vulkan/EGL device on Linux. `VIZ_CHROME_FLAGS` appends flags for odd
  machines; the Linux defaults (`--use-angle=vulkan`) are unverified on a headless
  NVIDIA box — check the `gpu:` line first.
- **Chrome is found via `CHROME`** (the Makefile passes its variable), else the
  platform's usual paths. No Chrome → exit 2 and the build sheet's degrade
  sentence; never fall back to a screenshot of the viewport silently.
- **Files must live under the project dir**: the loopback server only serves the
  project (`out/`, `assets/`, `viz/`). `served_path()` refuses anything else — a
  texture in `~/Downloads` is the usual cause.
- **Quick previews:** `VIZ_SAMPLES=32 VIZ_SHOTS=viz_hero` (what `concept.py`
  does). 96 samples ≈ 30 s for a hero on an M4 Pro; a close-up full of glossy
  metal takes 2×. `--dry-run` writes `out/viz_scene.json` (what CI checks).

## Geometry & shading

- **STL triangles share no vertices.** Without merging, every triangle shades flat
  and curved surfaces look faceted. The engine creases normals by angle
  (`VIZ_CREASE`, default 30°): flatter edges are smoothed, sharper ones stay.
  Boxy sheet-metal parts can use 0 (flat everywhere); revolved parts need 30.
- **Shadow-terminator scallops at junctions** (dark half-discs where struts meet
  a ring, seen at close range): creased normals at 45° blend the cylinder into the
  ring's underside. 30° fixed it on the lattice stand; flat (0) always fixes it at
  the cost of faceting curved surfaces. Check close-up shots, not only the hero.
- **Millimetres in, metres out.** STLs are mm; the engine scales groups by 0.001.
  Texture coordinates stay in local mm so lamella widths are physical.
- **Z is up**, as in the CAD and the old Blender scene: shot `direction` vectors
  are the same numbers as before; the engine sets three.js's default up to Z.
- **Absolute shots and lights**: `position_mm` + `target_mm` on a shot, `LIGHTS`
  with `position_mm`/`target_mm`/`size_mm`/`power` or `kind: 'sun'`, `FLOOR`
  (`False` = none) and `WORLD` — for a wall piece or a scene ported from a
  hand-built Blender file. Parts take a third tuple element `offset_mm`.
- **Shots scale by the bbox diagonal** (`distance`, `target_offset`, `explode`),
  never by the largest side; camera near/far follow the scene size so a 66 mm
  part does not clip into a grey band on the close shot.
- **Exploded views**: parts translate along `EXPLODE` directions for that shot
  only and snap back; the floor, lights and camera stay derived from the
  ASSEMBLED bbox, so give the exploded shot a larger `distance`.

## Materials & light

- **Colours are linear.** `plastic((0.55, 0.52, 0.48))` is a light PETG, not a
  dark one; mid-brown wood ≈ 0.045…0.17. sRGB-looking numbers give pastel renders.
- **Lights are the Blender rig, converted**: three area lights (key/fill/rim)
  whose watts become radiance `P / (π·A)` times `LIGHT_SCALE` (calibrated once
  against the Cycles reference; change it in the engine, never per project) plus
  a soft gradient world. `EXPOSURE` is stops, like Blender's film exposure.
- **Any material is one dict**: `pbr(...)` in viz.py exposes the engine's whole
  physical model (colour, roughness, metalness, clearcoat, transmission + ior +
  thickness for glass/acrylic, sheen for fabric, emissive, opacity, iridescence)
  plus box-projected maps (`diff`, `rough`, `metal`, `normal`, `emissive_map`,
  `scale` = repeats per mm) on any part. The named factories are presets over the
  same fields; a project-specific look (birch ply, anodised aluminium, leather)
  is a `pbr(...)` call, never a new engine feature.
- **Wood is procedural over a photo**: `oak_sparovka(seed, lamella_mm)` box-maps
  the diffuse map in local mm, shifts it per lamella strip along the grain and
  jitters the tone per strip (vertex colours); end grain (|Nx| > 0.5) becomes a
  flat darker material. Roughness is a constant (0.65) — no roughness map, no
  bump: a magnified map sparkles like frost under grazing light.
- **One seed per wood part** so the grain breaks at joints like a real glue-up.
- **Textures are Poly Haven CC0**, fetched by the Makefile pattern rule into
  `assets/` (`make assets/<asset>/<asset>_diff_2k.jpg`); never hand-download.
- **Anisotropic brushed metal and edge bevels have no equivalent yet**:
  `brushed_metal` is metalness 1 / roughness 0.35; machined-edge highlights on
  box-like parts need a chamfer in the model, not a render trick.
- **Never re-enable tiled rendering** (`tiles` > 1): with three-gpu-pathtracer
  0.0.24 a textured material turns black after ~40 samples when the frame is
  rendered in tiles; the engine renders one tile. `VIZ_DEBUG='{"tiles": 2}'`
  reproduces it.
- **Cold shader cache = black dielectrics (macOS, ANGLE Metal, Chrome 152).** The
  first, uncached compile of the path tracer's shader renders clearcoat, glass
  and textured materials black; the program Chrome loads from its GPU cache on
  the next launch is correct (SwiftShader renders it right the first time, so the
  shader itself is fine). `viz.py` therefore keeps a persistent profile
  (`~/.cache/robion-viz-chrome`, `VIZ_PROFILE_DIR` overrides) and, once per
  Chrome + engine build, runs a throwaway warm-up launch (one 64×64 sample, then
  a graceful `Browser.close` so the cache is written) before the real render.
  `VIZ_PROFILE_DIR=""` forces a temp profile and re-warms every run.
- **Vertex colours are RGBA** in the engine: the path tracer's geometry merge
  mishandles RGB colour attributes (the merged buffer stays zero → black part).
- **Denoiser**: the engine's bilateral denoise runs on every displayed sample;
  it softens fine grain at low sample counts. Glossy metal at 64 samples is
  slightly grainier than Cycles + OIDN — raise `VIZ_SAMPLES` for the hero.

## Failure checklist (render looks wrong)

| Symptom | Cause |
|---|---|
| Everything pale/washed out | linear-vs-sRGB colours, or `EXPOSURE` too high |
| Faceted curved surfaces | `VIZ_CREASE` 0 on a revolved part → 30 |
| Dark scallops where members meet | crease too large (45) → 30 or 0; check the close-up |
| Frost/sparkle patches | roughness map or bump reintroduced — keep constants |
| Clearcoat, glass or textured part black, plain parts fine | cold shader cache (delete `~/.cache/robion-viz-chrome` and rerun: the warm-up must log once), tiled rendering (`VIZ_DEBUG` unset?) |
| Mosaic on side faces of wood | end-grain routing off — faces with |Nx| > 0.5 must go to the flat material |
| Render takes minutes and `gpu:` says SwiftShader | GPU off: flags per OS, `VIZ_CHROME_FLAGS`, a headless box without a GPU |
| Black render | camera inside geometry (`distance` too small) or no parts matched |
| Same image after changes | `out/parts` not re-exported (`make viz` depends on parts) or a stale `VIZ_SHOTS` |
| `outside the project dir` in viz.log | a texture/STL path outside the project — move it under `assets/` |

## Verification

Render → **Read the PNG** (hero AND close-up) → compare against the checklist →
only then show the user. Renders are deterministic for a given sample count.
