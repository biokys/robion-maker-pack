# Blender headless rendering — hard-won gotchas

All learned the painful way on a real product viz (Blender 5.x, Cycles, macOS).
The `templates/solids/blender_viz.py` encodes these; keep them when modifying it.

## Process & API traps

- **`blender --background --python script.py` exits 0 even when the script throws.**
  Never trust the exit code; the Makefile recipe must capture the log and
  `grep -q Traceback` (the template does). Python prints interleave/buffer oddly
  with Blender's own output — grep, don't eyeball tails.
- **`ShaderNodeMix` has several same-named sockets** (Factor/A/B exist per data
  type). `inputs["A"]` or fixed indices silently hit the wrong socket and your
  colors never apply while everything "works". Select sockets **by `type`**
  (`RGBA`, `VALUE`) — see `mix_rgba()` helper in the template.
- STL import: `bpy.ops.wm.stl_import` (4.x+/5.x) with fallback to legacy
  `bpy.ops.import_mesh.stl` (AttributeError catch).
- `Material.use_nodes` is deprecated in 5.x (auto node trees); guard with
  `if mat.node_tree is None: mat.use_nodes = True`.
- Metal GPU: set cycles prefs in try/except and fall back to CPU silently.
- **`read_factory_settings(use_empty=True)` drops every datablock made before
  it** — materials included. Build materials *after* it (the template's
  `PARTS()` and every `SCENES()[name]["parts"]` entry are zero-arg callables
  called inside `setup_scene()` for that reason; a dict built at import time
  renders grey). A second scene (print orientation, exploded kit) is one more
  `SCENES()` entry with its own parts/shots/explode — not a copy of the script.

## Color & material traps

- **Blender colors are linear-space.** An sRGB-looking value must be much darker
  numerically (linear 0.16 ≈ sRGB 0.45). Mid-brown wood ≈ (0.045…0.17) linear.
  Forgetting this yields washed-out pastel renders.
- A MULTIPLY mix at factor f only scales by `(1-f) + f·B` — a "warm tint" at
  factor 0.4 is nearly invisible. Use factor ≥ 0.7 for visible tints.
- **Bump from a magnified height map sparkles like frost** under grazing light
  (micro-facets from texture noise). Prefer no bump; carry surface feel via
  roughness.
- **Compress the roughness map into a narrow band** (`map*0.2 + 0.55` ⇒
  0.55–0.75). Wide roughness variation = glossy patches that bloom white at
  grazing angles (oiled wood is matte).
- **Box projection breaks on faces perpendicular to a shifted axis**: any
  per-region texture offset (e.g. per-lamella shift along X) scrambles the
  projection on ±X faces into a mosaic. Route those faces to flat values by
  normal: `is_end = |N.x| > 0.5` mixed into flat base color, constant roughness,
  no bump (`end_safe()` pattern in the template). Physically right for end-grain
  anyway.
- Per-part realism: **one mesh per part, one material seed per part** so wood
  grain breaks at joints like a real glued-up assembly. Within a glued panel,
  quantize a coordinate into strips (lamella width) and shift/tint the texture
  per strip via white noise on `floor(y/width)`.

## Geometry & scene

- STLs come in millimetres → scale objects by 0.001; texture coordinates via
  Object space stay in mm (handy for physical strip widths).
- STL vertices are split per-face: add **Weld modifier before Bevel** or the
  bevel does nothing. Bevel ~1.2 mm, 2 segments — CG edges read as machined.
  BUT: **Bevel streaks on densely tessellated faces** (holes, fillets) — it
  slides along skinny interior edges. Default it OFF; enable only for box-like
  parts (template `BEVEL_MM`). Verify by rendering with/without.
- **Force flat shading on imported STLs** (`polygon.use_smooth = False`):
  smooth normals on the long skinny triangles of CAD tessellation paint dark
  streaks across flat faces.
- Aim camera/lights with a track-quaternion helper (`aim()`), positions derived
  from the union bounding box of imported meshes — never hardcode scene centers.
- Three-point rig (key/fill/rim area lights) + world at low strength; a rim light
  behind an opening makes through-holes/tunnels read instantly.
- **Exploded views** (template `EXPLODE` + a shot's `explode` factor): parts
  translate along per-part directions for that render only and snap back after
  (locations restored per shot — later shots are always assembled). Camera,
  lights and floor stay derived from the ASSEMBLED bbox: give the exploded shot
  a larger `distance`, and floating parts above the floor are normal for
  exploded views — don't "fix" them.
- Textures: Poly Haven CC0, URL pattern
  `https://dl.polyhaven.org/file/ph-assets/Textures/jpg/2k/<asset>/<asset>_<map>_2k.jpg`
  — downloaded by a Makefile pattern rule into `assets/`, never fetched by hand.
  Set non-color maps to `Non-Color` colorspace.

## Failure checklist (render looks wrong)

| Symptom | Cause |
|---|---|
| Everything pale/washed out | linear-vs-sRGB colors, or overexposure (lower light energy / exposure) |
| Colors/tints "don't apply" | Mix node wrong socket (select by type), or crashed script + stale PNGs (grep log!) |
| Frost/sparkle patches | bump from magnified height map, or wide roughness range at grazing light |
| Mosaic/checkerboard on side faces | box projection + per-region offset → use end_safe by normal |
| Corduroy-regular "wood" | procedural wave texture — use photo PBR + procedural strips instead |
| Render identical after changes | script crashed (exit 0!) and old files remained — grep the log |
| Black render | no lights linked / film exposure / camera inside geometry |

## Verification

Render → **Read the PNG** → compare against the checklist → only then show the
user. Renders are deterministic (fixed seed): identical bytes = nothing changed.
