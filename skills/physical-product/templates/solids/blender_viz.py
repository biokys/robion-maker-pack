"""Photoreal product renders from per-part STL exports (headless Cycles).

Usage:
    blender --background --python blender_viz.py -- <out_dir>

Configure PARTS and SHOTS below. The scene (camera targets, lights, floor) is
derived from the union bounding box of the imported meshes — no hardcoded
centers. Every gotcha encoded here is documented in the skill's
blender-gotchas.md; read it before "simplifying" anything.

Key invariants:
- STLs are in millimetres -> objects scaled by MM; texture coords use local mm.
- One mesh per part, one material (with its own seed) per part.
- Blender colors are LINEAR (sRGB-looking values must be much darker).
- The caller (Makefile) greps the log for Traceback — blender exits 0 on crash.
"""

from __future__ import annotations

import math
import os
import sys
from pathlib import Path

import bpy
from mathutils import Vector

MM = 0.001  # STL millimetres -> scene metres

RESOLUTION = (1400, 1000)
# VIZ_SAMPLES=48 for quick previews (concept cards); the hero keeps 96
SAMPLES = int(os.environ.get("VIZ_SAMPLES", "96"))
EXPOSURE = -0.3
# Edge rounding: >0 (e.g. 1.2) reads as machined edges on box-like parts, but
# STREAKS on faces with dense tessellation (holes, fillets). 0 disables.
BEVEL_MM = 0.0

# --------------------------------------------------------------------------
# CONFIG — edit per product.
# PARTS: every STL under <out_dir>/parts/ -> material, chosen by the part's
#        name (file stem) in material_for(); powder coat otherwise.
#        A glob, not a fixed list: concept variants with optional members,
#        part families and reference parts render without editing this file.
#        Map a whole family by prefix in `material_for` when names vary.
# Factories: powder_coat(), plastic(rgb), brushed_metal(),
#            oak_sparovka(seed, lamella_mm, texture_dir)
# SHOTS: name -> dict(direction=unit-ish vector from bbox center,
#                    distance=multiple of bbox max size, lens=mm,
#                    target_offset=fraction of bbox size added to target,
#                    explode=factor of bbox size — exploded-view shot)
# EXPLODE: stl filename -> unit direction (world) the part flies apart in;
#          shots with an "explode" factor move each part by
#          direction * factor * bbox_size for that render only, e.g.
#          EXPLODE = {"lid.stl": (0, 0, 1), "base.stl": (0, 0, -0.3)} and
#          SHOTS["viz_exploded"] = {..., "distance": 3.0, "explode": 0.5}.
#          Assembled-position parts (not listed) stay put.
# SCENES: name -> dict(parts=<zero-arg callable returning {stl: material or
#                            (material, euler_degrees)}>, shots=SHOTS-like,
#                      explode=EXPLODE-like). One entry renders exactly like
#          the PARTS/SHOTS/EXPLODE trio below; a second scene reuses the same
#          STLs in another pose — the print orientation (part lying as
#          printed, `viz_print`), an exploded kit, a variant. `parts` MUST be
#          a callable: materials are created after `read_factory_settings`,
#          which drops anything made before it.
# --------------------------------------------------------------------------
TEXTURE_DIR = Path(__file__).resolve().parent / "assets" / "oak_veneer_01"

def material_for(stem: str):
    """Material factory for one exported part (by file stem = PARTS key).
    EDIT-ME per product; the dict lives inside the function because the
    factories are defined further down. Extend for name prefixes (every
    "leg_*" powder-coated, every "shelf_*" oak with its own seed)."""
    by_stem = {
        "bracket": powder_coat,
    }
    return by_stem.get(stem, powder_coat)


def PARTS():
    parts = {}
    for stl in sorted((out_dir() / "parts").glob("*.stl")):
        parts[stl.name] = material_for(stl.stem)()
    if not parts:
        raise RuntimeError(f"no STL files under {out_dir() / 'parts'} — run `make parts`")
    return parts

SHOTS = {
    "viz_hero": {"direction": (-0.7, -1.0, 0.55), "distance": 2.2, "lens": 50},
    "viz_detail": {"direction": (0.3, -1.0, 0.25), "distance": 1.4, "lens": 60},
}
# VIZ_SHOTS=viz_hero renders a subset (concept previews, quick checks)
_only = os.environ.get("VIZ_SHOTS")
if _only:
    SHOTS = {k: v for k, v in SHOTS.items() if k in _only.split(",")}

EXPLODE: dict[str, tuple[float, float, float]] = {}


def SCENES():
    return {
        "main": {"parts": PARTS, "shots": SHOTS, "explode": EXPLODE},
        # "print": {"parts": lambda: {"bracket_print.stl": (powder_coat(), (0, 0, 0))},
        #           "shots": {"viz_print": {"direction": (-0.7, -1.0, 0.7), "distance": 2.0, "lens": 50}},
        #           "explode": {}},
    }


# --------------------------------------------------------------------------
# Helpers (keep verbatim — battle-tested)
# --------------------------------------------------------------------------
def out_dir() -> Path:
    argv = sys.argv
    if "--" in argv and argv.index("--") + 1 < len(argv):
        return Path(argv[argv.index("--") + 1])
    return Path("out")


def import_stl(path: Path):
    before = set(bpy.data.objects)
    try:
        bpy.ops.wm.stl_import(filepath=str(path))       # Blender 4.x/5.x
    except AttributeError:
        bpy.ops.import_mesh.stl(filepath=str(path))     # legacy
    new = set(bpy.data.objects) - before
    if not new:
        raise RuntimeError(f"nothing imported from {path}")
    obj = new.pop()
    obj.scale = (MM, MM, MM)
    # Long skinny STL triangles + smooth shading = dark streaks on flat faces;
    # force flat shading and let the Bevel modifier provide the edge highlights.
    for polygon in obj.data.polygons:
        polygon.use_smooth = False
    if BEVEL_MM > 0:
        # STL vertices are split per face: Weld first or the Bevel does nothing.
        weld = obj.modifiers.new("Weld", "WELD")
        weld.merge_threshold = 0.01                      # local units = mm
        bevel = obj.modifiers.new("Bevel", "BEVEL")
        bevel.width = BEVEL_MM
        bevel.segments = 2
    return obj


def aim(obj, target):
    direction = Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def node_material(name):
    mat = bpy.data.materials.new(name)
    if mat.node_tree is None:      # Blender < 5 needs the explicit switch
        mat.use_nodes = True
    return mat


def _mix_rgba(nodes, blend_type, factor):
    """ShaderNodeMix has same-named sockets per data type — pick by TYPE."""
    node = nodes.new("ShaderNodeMix")
    node.data_type = "RGBA"
    node.blend_type = blend_type
    factor_in = next(s for s in node.inputs
                     if s.name == "Factor" and s.type == "VALUE")
    factor_in.default_value = factor
    color_a, color_b = [s for s in node.inputs if s.type == "RGBA"]
    color_out = next(s for s in node.outputs if s.type == "RGBA")
    return factor_in, color_a, color_b, color_out


def scene_bbox(objects):
    lo = Vector((1e9,) * 3)
    hi = Vector((-1e9,) * 3)
    for obj in objects:
        for corner in obj.bound_box:
            w = obj.matrix_world @ Vector(corner)
            lo = Vector(map(min, lo, w))
            hi = Vector(map(max, hi, w))
    return lo, hi


# --------------------------------------------------------------------------
# Material factories
# --------------------------------------------------------------------------
def powder_coat(rgb=(0.010, 0.010, 0.011)):
    mat = node_material("PowderCoat")
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (*rgb, 1.0)
    bsdf.inputs["Metallic"].default_value = 0.1
    bsdf.inputs["Roughness"].default_value = 0.6
    return mat


def plastic(rgb=(0.08, 0.08, 0.09), roughness=0.35):
    mat = node_material("Plastic")
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (*rgb, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    return mat


def brushed_metal(rgb=(0.55, 0.55, 0.57)):
    mat = node_material("BrushedMetal")
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (*rgb, 1.0)
    bsdf.inputs["Metallic"].default_value = 1.0
    bsdf.inputs["Roughness"].default_value = 0.35
    try:  # anisotropy input name is stable in 4.x/5.x
        bsdf.inputs["Anisotropic"].default_value = 0.6
    except KeyError:
        pass
    return mat


def floor_material():
    mat = node_material("Floor")
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (0.28, 0.25, 0.22, 1.0)
    bsdf.inputs["Roughness"].default_value = 0.85
    return mat


def oak_sparovka(seed=0, lamella_mm=40.0, texture_dir=TEXTURE_DIR):
    """Photo-based oak edge-glued panel (Poly Haven oak_veneer_01, CC0).

    PBR maps carry fibre realism; the glued-lamella structure is procedural:
    each strip across local Y gets a random shift of the photo along the grain
    plus a tone jitter. End faces (|Nx|>0.5) are routed to flat values — the
    box projection is scrambled there by the per-strip shift, and real
    crosscut oak is calm anyway. Give each wood PART its own seed.
    Requires <texture_dir>/oak_veneer_01_{diff,rough}_2k.jpg (Makefile rule).
    """
    mat = node_material(f"Oak.{seed}")
    nodes, links = mat.node_tree.nodes, mat.node_tree.links
    bsdf = nodes["Principled BSDF"]

    def image(filename, non_color):
        img = bpy.data.images.load(str(texture_dir / filename),
                                   check_existing=True)
        if non_color:
            img.colorspace_settings.name = "Non-Color"
        node = nodes.new("ShaderNodeTexImage")
        node.image = img
        node.projection = "BOX"
        node.projection_blend = 0.3
        return node

    coords = nodes.new("ShaderNodeTexCoord")
    separate = nodes.new("ShaderNodeSeparateXYZ")
    links.new(coords.outputs["Object"], separate.inputs["Vector"])

    lamella = nodes.new("ShaderNodeMath"); lamella.operation = "DIVIDE"
    lamella.inputs[1].default_value = lamella_mm
    links.new(separate.outputs["Y"], lamella.inputs[0])
    index = nodes.new("ShaderNodeMath"); index.operation = "FLOOR"
    links.new(lamella.outputs[0], index.inputs[0])
    seeded = nodes.new("ShaderNodeMath"); seeded.operation = "ADD"
    seeded.inputs[1].default_value = 101.3 * seed + 0.17
    links.new(index.outputs[0], seeded.inputs[0])

    def strip_random(offset):
        shift = nodes.new("ShaderNodeMath"); shift.operation = "ADD"
        shift.inputs[1].default_value = offset
        links.new(seeded.outputs[0], shift.inputs[0])
        noise = nodes.new("ShaderNodeTexWhiteNoise")
        noise.noise_dimensions = "1D"
        links.new(shift.outputs[0], noise.inputs["W"])
        return noise.outputs["Value"]

    shift = nodes.new("ShaderNodeMath"); shift.operation = "MULTIPLY"
    shift.inputs[1].default_value = 400.0
    links.new(strip_random(0.0), shift.inputs[0])
    shifted_x = nodes.new("ShaderNodeMath"); shifted_x.operation = "ADD"
    links.new(separate.outputs["X"], shifted_x.inputs[0])
    links.new(shift.outputs[0], shifted_x.inputs[1])

    combine = nodes.new("ShaderNodeCombineXYZ")
    links.new(shifted_x.outputs[0], combine.inputs["X"])
    links.new(separate.outputs["Y"], combine.inputs["Y"])
    links.new(separate.outputs["Z"], combine.inputs["Z"])
    mapping = nodes.new("ShaderNodeMapping")
    mapping.inputs["Scale"].default_value = (0.0013, 0.0013, 0.0013)
    mapping.inputs["Rotation"].default_value = (0.0, 0.0, 1.5708)
    links.new(combine.outputs["Vector"], mapping.inputs["Vector"])

    diffuse = image("oak_veneer_01_diff_2k.jpg", non_color=False)
    rough = image("oak_veneer_01_rough_2k.jpg", non_color=True)
    links.new(mapping.outputs["Vector"], diffuse.inputs["Vector"])
    links.new(mapping.outputs["Vector"], rough.inputs["Vector"])

    # subtle per-strip tone jitter
    value = nodes.new("ShaderNodeMath"); value.operation = "MULTIPLY"
    value.inputs[1].default_value = 0.24
    links.new(strip_random(0.44), value.inputs[0])
    tone = nodes.new("ShaderNodeMath"); tone.operation = "ADD"
    tone.inputs[1].default_value = 0.88
    links.new(value.outputs[0], tone.inputs[0])
    hsv = nodes.new("ShaderNodeHueSaturation")
    links.new(tone.outputs[0], hsv.inputs["Value"])
    links.new(diffuse.outputs["Color"], hsv.inputs["Color"])

    # warm oiled tint (factor >= 0.7 or it is invisible)
    _, warm_a, warm_b, warm_out = _mix_rgba(nodes, "MULTIPLY", 0.75)
    warm_b.default_value = (0.80, 0.58, 0.38, 1.0)
    links.new(hsv.outputs["Color"], warm_a)

    # end faces -> flat crosscut tone / constant roughness (no bump at all)
    geometry = nodes.new("ShaderNodeNewGeometry")
    normal_xyz = nodes.new("ShaderNodeSeparateXYZ")
    links.new(geometry.outputs["Normal"], normal_xyz.inputs["Vector"])
    normal_abs = nodes.new("ShaderNodeMath"); normal_abs.operation = "ABSOLUTE"
    links.new(normal_xyz.outputs["X"], normal_abs.inputs[0])
    is_end = nodes.new("ShaderNodeMath"); is_end.operation = "GREATER_THAN"
    is_end.inputs[1].default_value = 0.5
    links.new(normal_abs.outputs[0], is_end.inputs[0])

    base_factor, base_a, base_b, base_out = _mix_rgba(nodes, "MIX", 0.0)
    links.new(is_end.outputs[0], base_factor)
    links.new(warm_out, base_a)
    base_b.default_value = (0.21, 0.12, 0.065, 1.0)
    links.new(base_out, bsdf.inputs["Base Color"])

    inv_end = nodes.new("ShaderNodeMath"); inv_end.operation = "SUBTRACT"
    inv_end.inputs[0].default_value = 1.0
    links.new(is_end.outputs[0], inv_end.inputs[1])

    # roughness compressed into a matte band: map*0.2 + 0.55 => 0.55..0.75
    band = nodes.new("ShaderNodeMath"); band.operation = "MULTIPLY_ADD"
    band.inputs[1].default_value = 0.2
    band.inputs[2].default_value = 0.55
    links.new(rough.outputs["Color"], band.inputs[0])
    side = nodes.new("ShaderNodeMath"); side.operation = "MULTIPLY"
    links.new(band.outputs[0], side.inputs[0])
    links.new(inv_end.outputs[0], side.inputs[1])
    end = nodes.new("ShaderNodeMath"); end.operation = "MULTIPLY"
    end.inputs[1].default_value = 0.6
    links.new(is_end.outputs[0], end.inputs[0])
    total = nodes.new("ShaderNodeMath"); total.operation = "ADD"
    links.new(side.outputs[0], total.inputs[0])
    links.new(end.outputs[0], total.inputs[1])
    links.new(total.outputs[0], bsdf.inputs["Roughness"])
    return mat


# --------------------------------------------------------------------------
# Scene assembly
# --------------------------------------------------------------------------
def add_area_light(name, location, target, size, energy):
    light = bpy.data.lights.new(name, type="AREA")
    light.size = size
    light.energy = energy
    obj = bpy.data.objects.new(name, light)
    obj.location = location
    bpy.context.collection.objects.link(obj)
    aim(obj, target)


def setup_scene(parts=None):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    scene = bpy.context.scene

    parts_dir = out_dir() / "parts"
    imported: dict[str, bpy.types.Object] = {}
    for stl_name, entry in (parts or PARTS)().items():
        material, euler = entry if isinstance(entry, tuple) else (entry, None)
        obj = import_stl(parts_dir / stl_name)
        obj.data.materials.append(material)
        if euler is not None:
            obj.rotation_euler = tuple(math.radians(a) for a in euler)
        imported[stl_name] = obj

    bpy.context.view_layer.update()
    lo, hi = scene_bbox(imported.values())
    center = (lo + hi) / 2
    size = max((hi - lo).length, 1e-3)

    bpy.ops.mesh.primitive_plane_add(size=size * 12,
                                     location=(center.x, center.y, lo.z))
    bpy.context.active_object.data.materials.append(floor_material())

    world = bpy.data.worlds.new("World")
    scene.world = world
    if world.node_tree is None:
        world.use_nodes = True
    background = world.node_tree.nodes["Background"]
    background.inputs["Color"].default_value = (0.75, 0.73, 0.70, 1.0)
    background.inputs["Strength"].default_value = 0.35

    add_area_light("Key", center + Vector((1.4, -1.6, 1.9)) * size,
                   center, size * 1.6, 280 * size ** 2 / 0.6)
    add_area_light("Fill", center + Vector((-1.6, -0.9, 1.3)) * size,
                   center, size * 2.0, 90 * size ** 2 / 0.6)
    add_area_light("Rim", center + Vector((0.0, 1.7, 0.5)) * size,
                   center, size * 1.2, 60 * size ** 2 / 0.6)

    scene.render.engine = "CYCLES"
    scene.cycles.samples = SAMPLES
    scene.render.resolution_x, scene.render.resolution_y = RESOLUTION
    scene.view_settings.exposure = EXPOSURE
    try:  # GPU is an optimization; CPU renders too
        prefs = bpy.context.preferences.addons["cycles"].preferences
        prefs.compute_device_type = "METAL"
        prefs.get_devices()
        for device in prefs.devices:
            device.use = True
        scene.cycles.device = "GPU"
    except Exception as exc:
        print(f"GPU setup failed, CPU fallback: {exc}")
    return scene, center, size, imported


def render_shots(scene, center, size, objects, shots=None, explode=None):
    shots = SHOTS if shots is None else shots
    explode = EXPLODE if explode is None else explode
    camera = bpy.data.objects.new("Camera", bpy.data.cameras.new("Camera"))
    bpy.context.collection.objects.link(camera)
    scene.camera = camera
    for name, shot in shots.items():
        # exploded-view shot: move parts along EXPLODE directions, render,
        # restore — later shots always start from the assembled positions
        factor = shot.get("explode", 0.0)
        original = {stl: obj.location.copy() for stl, obj in objects.items()}
        if factor:
            for stl, obj in objects.items():
                obj.location += (Vector(explode.get(stl, (0, 0, 0)))
                                 * factor * size)
        direction = Vector(shot["direction"]).normalized()
        camera.location = center + direction * size * shot["distance"]
        camera.data.lens = shot["lens"]
        # Blender's default clip range (0.1 m … 1 km) is made for rooms: a close shot of a
        # 66 mm part clips the geometry into a grey band. Scale it to the scene instead.
        camera.data.clip_start = max(size * 0.01, 1e-5)
        camera.data.clip_end = max(size * 200.0, 10.0)
        target = center + Vector(shot.get("target_offset", (0, 0, 0))) * size
        aim(camera, target)
        scene.render.filepath = str(out_dir() / f"{name}.png")
        bpy.ops.render.render(write_still=True)
        print(f"rendered {scene.render.filepath}")
        if factor:
            for stl, obj in objects.items():
                obj.location = original[stl]


if __name__ == "__main__":
    for scene_name, definition in SCENES().items():
        print(f"scene {scene_name}")
        scene, center, size, objects = setup_scene(definition["parts"])
        render_shots(scene, center, size, objects,
                     definition.get("shots"), definition.get("explode"))
