/**
 * Robion viz engine — photoreal product renders in the browser.
 *
 * The same bundle serves three callers: `viz.py` in a product project (headless
 * Chrome driven over the DevTools protocol), the Robion desktop viewport and the
 * gallery on robion.app. It is a port of the pack's former `blender_viz.py`
 * scene: Z-up, millimetre STLs scaled to metres, a floor at the lowest point of
 * the assembled bounding box, a three-point rig of area lights plus a soft world,
 * one material per part, shots defined by a direction / distance / lens triple.
 *
 * Entry point: `RobionViz.run(config, onProgress)` → `{ scenes: { <scene>: {
 * <shot>: dataURL } }, stats }`. `window.__viz` mirrors status/results for a
 * driver that can only poll. The config contract is documented in viz.py.
 */
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { WebGLPathTracer, GradientEquirectTexture, DenoiseMaterial } from 'three-gpu-pathtracer';

const MM = 0.001; // STL millimetres → scene metres
// Blender area-light watts → radiance for the path tracer: L = P / (π·A), then a
// calibration factor so the default rig matches the Cycles reference (IkeaMiska
// hero, 2026-09-10). Adjust here, never per project.
const LIGHT_SCALE = 0.35;

THREE.Object3D.DEFAULT_UP.set(0, 0, 1);

const DEFAULTS = {
  resolution: [1400, 1000],
  samples: 96,
  bounces: 4,
  exposure: -0.3, // stops, as Blender's film exposure
  denoise: true,
  // STL triangles share no vertices: crease by angle like Blender's auto-smooth;
  // 0 = flat shading everywhere (the Blender template's default).
  crease_deg: 30,
  floor: { rgb: [0.28, 0.25, 0.22], roughness: 0.85 },
  world: { rgb: [0.75, 0.73, 0.70], strength: 0.35 },
  lights: [
    // Blender template: position (× bbox diagonal), size (× diagonal), power W (× size²/0.6)
    { name: 'key', position: [1.4, -1.6, 1.9], size: 1.6, power: 280 },
    { name: 'fill', position: [-1.6, -0.9, 1.3], size: 2.0, power: 90 },
    { name: 'rim', position: [0.0, 1.7, 0.5], size: 1.2, power: 60 },
  ],
};

function linearColor(rgb) {
  // Blender colours are linear; three's Color(r, g, b) is linear too (working space).
  return new THREE.Color(rgb[0], rgb[1], rgb[2]);
}

function seededRandom(seed) {
  // Deterministic 1-D white noise, as ShaderNodeTexWhiteNoise in the Blender template.
  let x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

// --------------------------------------------------------------------------
// Materials — any physically based material from a plain dict
//
// A spec is `{type, ...fields}`. `type` picks a preset (defaults below); every
// field overrides it, so the Python side can describe anything the path tracer
// renders: colour, roughness, metalness, clearcoat, transmission/ior/thickness
// (glass, acrylic), sheen (fabric), emissive, opacity, iridescence — and texture
// maps (`diff`, `rough`, `metal`, `normal`, `emissive_map`) box-projected onto the
// part in local millimetres (`scale` = texture repeats per mm). Wood adds
// lamella strips and end-grain routing on top of the same machinery.
// --------------------------------------------------------------------------
const PRESETS = {
  pbr: {},
  powder_coat: { rgb: [0.010, 0.010, 0.011], metalness: 0.1, roughness: 0.6 },
  plastic: { rgb: [0.08, 0.08, 0.09], metalness: 0, roughness: 0.35 },
  brushed_metal: { rgb: [0.55, 0.55, 0.57], metalness: 1, roughness: 0.35 },
  glass: { rgb: [1, 1, 1], roughness: 0.02, metalness: 0, transmission: 1, ior: 1.5, thickness_mm: 4 },
  wood: {
    roughness: 0.65, metalness: 0, scale: 0.0013, lamella_mm: 40, end: 'x',
    warm_rgb: [0.80, 0.58, 0.38], warm_factor: 0.75, end_rgb: [0.21, 0.12, 0.065], end_roughness: 0.6,
  },
};

async function loadTexture(url, colorSpace) {
  const texture = await new THREE.TextureLoader().loadAsync(url);
  texture.colorSpace = colorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

const MAP_SLOTS = {
  diff: ['map', 'srgb'], rough: ['roughnessMap', ''], metal: ['metalnessMap', ''],
  normal: ['normalMap', ''], emissive_map: ['emissiveMap', 'srgb'],
};

function resolveSpec(spec) {
  return { ...(PRESETS[spec.type] ?? PRESETS.pbr), ...spec };
}

/** A MeshPhysicalMaterial from the resolved spec's scalar fields. */
function physicalMaterial(m) {
  let color = m.rgb ? linearColor(m.rgb) : new THREE.Color(1, 1, 1);
  if (m.warm_rgb) {
    // Blender MULTIPLY mix at factor f: colour × ((1 − f) + f·warm)
    const f = m.warm_factor ?? 0.75;
    color = color.multiply(new THREE.Color(1 - f + f * m.warm_rgb[0], 1 - f + f * m.warm_rgb[1], 1 - f + f * m.warm_rgb[2]));
  }
  const material = new THREE.MeshPhysicalMaterial({
    color, roughness: m.roughness ?? 0.5, metalness: m.metalness ?? 0,
  });
  if (m.clearcoat != null) { material.clearcoat = m.clearcoat; material.clearcoatRoughness = m.clearcoat_roughness ?? 0.1; }
  if (m.transmission != null) {
    material.transmission = m.transmission;
    material.ior = m.ior ?? 1.5;
    material.thickness = (m.thickness_mm ?? 1) * MM;
    if (m.attenuation_rgb) { material.attenuationColor = linearColor(m.attenuation_rgb); material.attenuationDistance = (m.attenuation_mm ?? 10) * MM; }
  }
  if (m.sheen != null) { material.sheen = m.sheen; material.sheenRoughness = m.sheen_roughness ?? 0.5; if (m.sheen_rgb) material.sheenColor = linearColor(m.sheen_rgb); }
  if (m.emissive_rgb) { material.emissive = linearColor(m.emissive_rgb); material.emissiveIntensity = m.emissive_intensity ?? 1; }
  if (m.opacity != null && m.opacity < 1) { material.opacity = m.opacity; material.transparent = true; }
  if (m.iridescence != null) material.iridescence = m.iridescence;
  if (m.specular_intensity != null) material.specularIntensity = m.specular_intensity;
  if (m.double_sided) material.side = THREE.DoubleSide;
  return material;
}

async function applyMaps(material, m, base) {
  for (const [field, [property, colorSpace]] of Object.entries(MAP_SLOTS)) {
    if (!m[field]) continue;
    material[property] = await loadTexture(base + m[field], colorSpace === 'srgb' ? THREE.SRGBColorSpace : THREE.NoColorSpace);
    if (field === 'normal') material.normalScale = new THREE.Vector2(m.normal_scale ?? 1, m.normal_scale ?? 1);
  }
}

function hasMaps(m) {
  return Object.keys(MAP_SLOTS).some((field) => m[field]);
}

/**
 * Box-projected UVs in local millimetres (STLs carry none): each triangle maps
 * through the plane its normal is closest to. Wood options on top: `lamella_mm`
 * strips across local Y shift the photo along the grain (X) and jitter the tone
 * per strip (vertex colours); `end` routes end-grain faces to a second, flat
 * material — 'x' = faces along ±X (an edge-glued panel), 'z' = everything that is
 * not a top/bottom face (plywood edges show the plies). Returns { side, end }.
 */
function boxProjected(geometry, m) {
  const scale = m.scale ?? 0.001;
  const lamella = m.lamella_mm ?? 0;
  const seedBase = 101.3 * (m.seed ?? 0) + 0.17;
  const pos = geometry.attributes.position;
  const nrm = geometry.attributes.normal;
  const side = { position: [], normal: [], uv: [], color: [] };
  const end = { position: [], normal: [] };
  for (let i = 0; i < pos.count; i += 3) {
    let nx = 0, ny = 0, nz = 0;
    for (let k = 0; k < 3; k++) { nx += nrm.getX(i + k); ny += nrm.getY(i + k); nz += nrm.getZ(i + k); }
    const len = Math.hypot(nx, ny, nz) || 1;
    const ax = Math.abs(nx) / len, ay = Math.abs(ny) / len, az = Math.abs(nz) / len;
    const isEnd = m.end === 'z' ? az < 0.8 : m.end === 'x' ? ax > 0.5 : false;
    if (isEnd) {
      for (let k = 0; k < 3; k++) {
        end.position.push(pos.getX(i + k), pos.getY(i + k), pos.getZ(i + k));
        end.normal.push(nrm.getX(i + k), nrm.getY(i + k), nrm.getZ(i + k));
      }
      continue;
    }
    // strip index from the triangle centroid so a triangle never straddles two shifts
    let cy = 0;
    for (let k = 0; k < 3; k++) cy += pos.getY(i + k) / 3;
    const strip = (lamella > 0 ? Math.floor(cy / lamella) : 0) + seedBase;
    const shift = lamella > 0 ? seededRandom(strip) * 400.0 : 0;
    const tone = (lamella > 0 ? 0.88 + 0.24 * seededRandom(strip + 0.44) : 1) * (m.lighten ?? 1);
    for (let k = 0; k < 3; k++) {
      const x = pos.getX(i + k), y = pos.getY(i + k), z = pos.getZ(i + k);
      side.position.push(x, y, z);
      side.normal.push(nrm.getX(i + k), nrm.getY(i + k), nrm.getZ(i + k));
      // the face's two in-plane axes; grain (X) shifted per strip, rotated 90°
      // like the Blender mapping node so the grain runs along X
      let u, v;
      if (az >= ax && az >= ay) { u = y; v = x + shift; }
      else if (ay >= ax) { u = z; v = x + shift; }
      else { u = y; v = z; }
      side.uv.push(u * scale, v * scale);
      side.color.push(tone, tone, tone, 1); // RGBA: the path tracer's merge mishandles RGB colour attributes
    }
  }
  const make = (data, withUv) => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(data.position, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(data.normal, 3));
    if (withUv) {
      g.setAttribute('uv', new THREE.Float32BufferAttribute(data.uv, 2));
      g.setAttribute('color', new THREE.Float32BufferAttribute(data.color, 4));
    }
    return g;
  };
  return { side: make(side, true), end: end.position.length ? make(end, false) : null };
}

/** Build the mesh(es) for one part; a part with end-grain routing yields two. */
async function buildPart(geometry, spec, base) {
  const m = resolveSpec(spec ?? {});
  if (!hasMaps(m) && !m.end) return [new THREE.Mesh(geometry, physicalMaterial(m))];
  const { side, end } = boxProjected(geometry, m);
  const material = physicalMaterial(m);
  material.vertexColors = m.vertex_colors !== false && (m.lamella_mm > 0 || m.lighten != null);
  await applyMaps(material, m, base);
  const meshes = [new THREE.Mesh(side, material)];
  if (end) {
    meshes.push(new THREE.Mesh(end, physicalMaterial({
      ...(m.end_material ?? {}), rgb: m.end_material?.rgb ?? m.end_rgb ?? [0.21, 0.12, 0.065],
      roughness: m.end_material?.roughness ?? m.end_roughness ?? 0.6,
    })));
  }
  return meshes;
}

// --------------------------------------------------------------------------
// Scene assembly
// --------------------------------------------------------------------------
async function loadParts(sceneSpec, config, report) {
  const loader = new STLLoader();
  const groups = [];
  for (const part of sceneSpec.parts) {
    report(`loading ${part.file}`);
    const raw = await loader.loadAsync(config.base + part.url);
    const geometry = config.crease_deg > 0 ? toCreasedNormals(raw, (config.crease_deg * Math.PI) / 180) : raw;
    const group = new THREE.Group();
    group.name = part.file;
    for (const mesh of await buildPart(geometry, part.material ?? {}, config.base)) group.add(mesh);
    group.scale.setScalar(MM);
    if (part.offset) group.position.set(part.offset[0] * MM, part.offset[1] * MM, part.offset[2] * MM);
    if (part.euler) {
      const [x, y, z] = part.euler.map((deg) => (deg * Math.PI) / 180);
      group.rotation.set(x, y, z, 'XYZ');
    }
    groups.push(group);
  }
  return groups;
}

function sceneBounds(groups) {
  const box = new THREE.Box3();
  for (const g of groups) { g.updateMatrixWorld(true); box.expandByObject(g); }
  const size = box.getSize(new THREE.Vector3());
  return { box, center: box.getCenter(new THREE.Vector3()), diagonal: Math.max(size.length(), 1e-3) };
}

function addEnvironment(scene, bounds, config) {
  const floorSpec = { ...DEFAULTS.floor, ...(config.floor ?? {}) };
  if (config.floor !== null) addFloor(scene, bounds, floorSpec);

  const world = { ...DEFAULTS.world, ...(config.world ?? {}) };
  const sky = new GradientEquirectTexture();
  const c = world.rgb.map((x) => x * world.strength);
  const spread = world.gradient ?? 0.25;
  sky.topColor.setRGB(c[0] * (1 + spread), c[1] * (1 + spread), c[2] * (1 + spread));
  sky.bottomColor.setRGB(c[0] * (1 - spread * 0.8), c[1] * (1 - spread * 0.8), c[2] * (1 - spread * 0.8));
  sky.update();
  scene.environment = sky;
  scene.background = sky;

  const s = bounds.diagonal;
  for (const spec of config.lights ?? DEFAULTS.lights) {
    if (spec.kind === 'sun') {
      // a directional light: `direction` = where the light travels (Blender: -Z rotated)
      const light = new THREE.DirectionalLight(0xffffff, spec.intensity ?? 3);
      const dir = new THREE.Vector3(...(spec.direction ?? [0.2, -0.2, -1])).normalize();
      light.position.copy(bounds.center).addScaledVector(dir, -s * 4);
      light.target.position.copy(bounds.center);
      scene.add(light); scene.add(light.target);
      continue;
    }
    const absolute = spec.position_mm != null;
    const side = absolute ? (spec.size_mm ?? 500) * MM : spec.size * s;
    const power = absolute ? (spec.power ?? 100) : (spec.power * s * s) / 0.6;
    const radiance = (power / (Math.PI * side * side)) * LIGHT_SCALE;
    const light = new THREE.RectAreaLight(0xffffff, radiance, side, side);
    if (absolute) light.position.set(spec.position_mm[0] * MM, spec.position_mm[1] * MM, spec.position_mm[2] * MM);
    else light.position.copy(bounds.center).add(new THREE.Vector3(...spec.position).multiplyScalar(s));
    const target = spec.target_mm ? new THREE.Vector3(spec.target_mm[0] * MM, spec.target_mm[1] * MM, spec.target_mm[2] * MM) : bounds.center;
    light.lookAt(target);
    scene.add(light);
  }
}

function addFloor(scene, bounds, floorSpec) {
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(bounds.diagonal * 12, bounds.diagonal * 12),
    new THREE.MeshPhysicalMaterial({ color: linearColor(floorSpec.rgb), roughness: floorSpec.roughness, metalness: 0 }),
  );
  floor.position.set(bounds.center.x, bounds.center.y, bounds.box.min.z - (floorSpec.below_mm ?? 0) * MM);
  scene.add(floor);
}

function placeCamera(camera, shot, bounds, aspect) {
  const s = bounds.diagonal;
  const target = shot.target_mm ? new THREE.Vector3(shot.target_mm[0] * MM, shot.target_mm[1] * MM, shot.target_mm[2] * MM) : bounds.center.clone();
  if (shot.target_offset) target.add(new THREE.Vector3(...shot.target_offset).multiplyScalar(s));
  const direction = shot.position_mm
    ? new THREE.Vector3(shot.position_mm[0] * MM, shot.position_mm[1] * MM, shot.position_mm[2] * MM).sub(target)
    : new THREE.Vector3(...shot.direction).normalize().multiplyScalar(s * shot.distance);
  camera.aspect = aspect;
  camera.filmGauge = 36; // Blender's default sensor width, auto fit
  camera.near = Math.max(s * 0.01, 1e-5);
  camera.far = Math.max(s * 200, 10);
  camera.position.copy(target).add(direction);
  camera.setFocalLength(shot.lens);
  camera.lookAt(target);
  camera.updateProjectionMatrix();
}

// --------------------------------------------------------------------------
// Rendering
// --------------------------------------------------------------------------
function makeRenderer(config) {
  const [w, h] = config.resolution;
  const renderer = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = Math.pow(2, config.exposure);
  renderer.setPixelRatio(1);
  renderer.setSize(w, h);
  return renderer;
}

function makePathTracer(renderer, config) {
  const pathTracer = new WebGLPathTracer(renderer);
  pathTracer.bounces = config.bounces;
  // glass shells refract four times before any light arrives: extra bounces for transmission
  pathTracer.transmissiveBounces = config.transmissive_bounces ?? 8;
  pathTracer.filterGlossyFactor = 0.5;
  pathTracer.multipleImportanceSampling = true;
  pathTracer.renderScale = 1;
  // One tile: tiled rendering (2×2) drops textured materials to black after ~40
  // samples in three-gpu-pathtracer 0.0.24; tiles only buy UI responsiveness.
  pathTracer.tiles.set(config.tiles ?? 1, config.tiles ?? 1);
  pathTracer.dynamicLowRes = false;
  pathTracer.minSamples = 1;
  if (config.denoise) {
    const quad = new FullScreenQuad(new DenoiseMaterial({
      map: null, blending: THREE.CustomBlending,
      premultipliedAlpha: renderer.getContextAttributes().premultipliedAlpha,
    }));
    quad.material.sigma = 5; quad.material.kSigma = 1; quad.material.threshold = 0.03;
    pathTracer.renderToCanvasCallback = (target, r) => {
      quad.material.map = target.texture;
      const autoClear = r.autoClear;
      r.autoClear = false;
      quad.render(r);
      r.autoClear = autoClear;
    };
  }
  return pathTracer;
}

function renderSamples(pathTracer, samples, report) {
  return new Promise((resolve) => {
    const step = () => {
      pathTracer.renderSample();
      if (pathTracer.samples % 16 === 0) report(`samples ${pathTracer.samples}/${samples}`);
      if (pathTracer.samples < samples) requestAnimationFrame(step); else resolve();
    };
    requestAnimationFrame(step);
  });
}

export async function run(userConfig, onProgress = () => {}) {
  const config = { ...DEFAULTS, ...userConfig };
  const state = { status: 'starting', results: {}, stats: {}, error: null, done: false };
  window.__viz = state;
  const report = (text) => { state.status = text; onProgress(text); };
  try {
    const started = performance.now();
    const renderer = makeRenderer(config);
    const container = config.container ?? document.body;
    container.appendChild(renderer.domElement);
    const pathTracer = makePathTracer(renderer, config);
    state.pathTracer = pathTracer;
    const gl = renderer.getContext();
    const info = gl.getExtension('WEBGL_debug_renderer_info');
    state.stats.gpu = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : 'unknown';

    for (const [sceneName, sceneSpec] of Object.entries(config.scenes)) {
      report(`scene ${sceneName}`);
      const scene = new THREE.Scene();
      state.scene = scene; // scene, groups and pathTracer stay reachable for DevTools debugging
      const groups = await loadParts(sceneSpec, config, report);
      if (!config.floor_first) for (const g of groups) scene.add(g);
      state.groups = groups;
      // Upload textures before the path tracer packs them into its texture
      // array: on the first setScene a not-yet-uploaded map renders black.
      for (const g of groups) g.traverse((o) => { if (o.isMesh && o.material.map) renderer.initTexture(o.material.map); });
      const bounds = sceneBounds(groups); // assembled bbox drives floor, lights, camera
      addEnvironment(scene, bounds, config);
      if (config.floor_first) for (const g of groups) scene.add(g);
      const camera = new THREE.PerspectiveCamera();
      state.results[sceneName] = {};
      for (const [shotName, shot] of Object.entries(sceneSpec.shots)) {
        const factor = shot.explode ?? 0;
        const original = groups.map((g) => g.position.clone());
        if (factor) {
          for (const g of groups) {
            const dir = (sceneSpec.explode ?? {})[g.name] ?? [0, 0, 0];
            g.position.add(new THREE.Vector3(...dir).multiplyScalar(factor * bounds.diagonal));
          }
        }
        placeCamera(camera, shot, bounds, config.resolution[0] / config.resolution[1]);
        report(`${shotName}: building BVH`);
        const t0 = performance.now();
        pathTracer.setScene(scene, camera);
        await renderSamples(pathTracer, config.samples, (s) => report(`${shotName}: ${s}`));
        state.results[sceneName][shotName] = renderer.domElement.toDataURL('image/png');
        state.stats[`${sceneName}/${shotName}`] = { ms: Math.round(performance.now() - t0), samples: pathTracer.samples };
        groups.forEach((g, i) => g.position.copy(original[i]));
      }
      for (const g of groups) scene.remove(g);
    }
    state.stats.total_ms = Math.round(performance.now() - started);
    report('done');
    state.done = true;
    return { scenes: state.results, stats: state.stats };
  } catch (error) {
    state.error = String(error && error.stack ? error.stack : error);
    state.done = true;
    report(`error: ${state.error}`);
    throw error;
  }
}

// Internals for step-by-step debugging from the DevTools console.
export const internals = { THREE, makeRenderer, makePathTracer, loadParts, sceneBounds, addEnvironment, placeCamera, renderSamples, DEFAULTS };
