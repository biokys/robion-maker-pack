"""Photoreal product renders from per-part STL exports — headless Chrome + the
Robion viz engine (three.js + a GPU path tracer, `viz/render.bundle.js`).

Usage:
    uv run viz.py [--] <out_dir>          # renders every SCENES() entry
    uv run viz.py --dry-run [--] <out_dir> # writes <out_dir>/viz_scene.json only
    VIZ_SAMPLES=32 VIZ_SHOTS=viz_hero uv run viz.py out   # quick preview

Configure `material_for`, SHOTS, EXPLODE and SCENES below. The scene (camera
targets, lights, floor) is derived from the union bounding box of the parts —
no hardcoded centers. The same engine renders in Robion's viewport and on
robion.app, so a project's look is identical everywhere.

Key invariants:
- STLs are in millimetres; the engine scales to metres and keeps texture
  coordinates in local mm (lamella widths are physical).
- One material per part; wood parts get their own seed so grain breaks at joints.
- Colours are LINEAR (an sRGB-looking value must be much darker numerically).
- Exit code is trustworthy: 0 rendered, 1 failed (see <out_dir>/viz.log),
  2 Chrome not found (the build sheet states the degrade).
"""

from __future__ import annotations

import base64
import hashlib
import http.server
import json
import os
import platform
import re
import shutil
import subprocess
import sys
import tempfile
import threading
import time
from pathlib import Path

PROJECT_DIR = Path(__file__).resolve().parent
ENGINE_DIR = PROJECT_DIR / "viz"                     # index.html + render.bundle.js

RESOLUTION = (1400, 1000)
# VIZ_SAMPLES=32 for quick previews (concept cards); the hero keeps 96
SAMPLES = int(os.environ.get("VIZ_SAMPLES", "96"))
BOUNCES = 4
EXPOSURE = -0.3           # stops, like Blender's film exposure
DENOISE = True
# Smooth shading across edges flatter than this angle (STL triangles share no
# vertices); 0 = flat shading everywhere. Curved parts need it, boxy parts don't.
CREASE_DEG = float(os.environ.get("VIZ_CREASE", "30"))
TIMEOUT_S = int(os.environ.get("VIZ_TIMEOUT", "900"))

# --------------------------------------------------------------------------
# CONFIG — edit per product.
# PARTS: every STL under <out_dir>/parts/ -> material, chosen by the part's
#        name (file stem) in material_for(); powder coat otherwise.
#        A glob, not a fixed list: concept variants with optional members,
#        part families and reference parts render without editing this file.
#        Map a whole family by prefix in `material_for` when names vary.
# Factories: powder_coat(), plastic(rgb), brushed_metal(), glass(),
#            oak_sparovka(seed, lamella_mm, texture_dir), pbr(**any field)
# SHOTS: name -> dict(direction=unit-ish vector from bbox center (Z up),
#                    distance=multiple of the bbox diagonal, lens=mm,
#                    target_offset=fraction of the diagonal added to the target,
#                    explode=factor of the diagonal — exploded-view shot)
# EXPLODE: stl filename -> unit direction (world) the part flies apart in;
#          shots with an "explode" factor move each part by
#          direction * factor * diagonal for that render only, e.g.
#          EXPLODE = {"lid.stl": (0, 0, 1), "base.stl": (0, 0, -0.3)} and
#          SHOTS["viz_exploded"] = {..., "distance": 3.0, "explode": 0.5}.
#          Assembled-position parts (not listed) stay put.
# SHOTS may also place the camera absolutely: position_mm + target_mm (+ lens).
# SCENES: name -> dict(parts=<zero-arg callable returning {stl: material or
#                            (material, euler_degrees[, offset_mm])}>, shots=SHOTS-like,
#                      explode=EXPLODE-like). One entry renders exactly like
#          the PARTS/SHOTS/EXPLODE trio below; a second scene reuses the same
#          STLs in another pose — the print orientation (part lying as
#          printed, `viz_print`), an exploded kit, a variant.
# --------------------------------------------------------------------------
TEXTURE_DIR = PROJECT_DIR / "assets" / "oak_veneer_01"
# Scene environment, None = the engine's defaults (studio floor at the lowest
# point, soft world, key/fill/rim area lights scaled by the bbox diagonal).
# FLOOR = {"rgb": [r, g, b], "roughness": 0.9, "below_mm": 0} or False for none;
# WORLD = {"rgb": [...], "strength": 0.35, "gradient": 0.25};
# LIGHTS = [{"kind": "sun", "direction": [x, y, z], "intensity": 3},
#           {"position_mm": [...], "target_mm": [...], "size_mm": 800, "power": 400}]
FLOOR = None
WORLD = None
LIGHTS = None


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
# Material factories — plain dicts the engine turns into physically based
# materials. `pbr(...)` describes ANY material: every keyword is a field of the
# engine's physical model (colours linear 0–1, lengths in mm):
#   rgb, roughness, metalness, clearcoat, clearcoat_roughness, transmission,
#   ior, thickness_mm, attenuation_rgb, attenuation_mm, sheen, sheen_rgb,
#   sheen_roughness, emissive_rgb, emissive_intensity, opacity, iridescence,
#   specular_intensity, double_sided,
#   diff / rough / metal / normal / emissive_map = texture files under the
#   project (box-projected in local mm, `scale` = repeats per mm, `normal_scale`),
#   end = 'x' | 'z' + end_rgb / end_roughness (route end-grain faces to a flat
#   material), lamella_mm + seed (glue-up strips), lighten.
# The named factories below are presets over the same fields.
# --------------------------------------------------------------------------
def pbr(**fields):
    """Any material. Texture paths are project-relative files (served locally)."""
    for key in ("diff", "rough", "metal", "normal", "emissive_map"):
        if fields.get(key):
            fields[key] = served_path(Path(fields[key]))
    return {"type": fields.pop("type", "pbr"), **fields}


def powder_coat(rgb=(0.010, 0.010, 0.011)):
    return pbr(type="powder_coat", rgb=list(rgb), metalness=0.1, roughness=0.6)


def plastic(rgb=(0.08, 0.08, 0.09), roughness=0.35):
    return pbr(type="plastic", rgb=list(rgb), roughness=roughness)


def brushed_metal(rgb=(0.55, 0.55, 0.57)):
    return pbr(type="brushed_metal", rgb=list(rgb), metalness=1, roughness=0.35)


def glass(rgb=(1.0, 1.0, 1.0), roughness=0.02, ior=1.5, thickness_mm=4.0):
    """Clear glass / acrylic: a transmissive dielectric; tint via rgb."""
    return pbr(type="glass", rgb=list(rgb), roughness=roughness, transmission=1.0,
               ior=ior, thickness_mm=thickness_mm)


def oak_sparovka(seed=0, lamella_mm=40.0, texture_dir=TEXTURE_DIR):
    """Photo-based oak edge-glued panel (Poly Haven oak_veneer_01, CC0).

    The diffuse map carries fibre realism; the glued-lamella structure is
    procedural in the engine: each strip across local Y shifts the photo along
    the grain and gets a tone jitter. End faces (|Nx| > 0.5) render as flat
    crosscut tone. Give each wood PART its own seed. Requires
    <texture_dir>/oak_veneer_01_diff_2k.jpg (Makefile `assets/...` rule).
    """
    diff = Path(texture_dir) / "oak_veneer_01_diff_2k.jpg"
    return pbr(type="wood", seed=seed, lamella_mm=lamella_mm,
               diff=str(diff) if diff.exists() else None,
               scale=0.0013, roughness=0.65,
               warm_rgb=[0.80, 0.58, 0.38], warm_factor=0.75, end="x",
               end_rgb=[0.21, 0.12, 0.065], end_roughness=0.6)


# --------------------------------------------------------------------------
# Helpers (keep verbatim — battle-tested)
# --------------------------------------------------------------------------
def out_dir() -> Path:
    argv = [a for a in sys.argv[1:] if not a.startswith("--")]
    return Path(argv[0]) if argv else Path("out")


def served_path(path: Path) -> str:
    """URL path (relative to the project dir) for a file the local server serves."""
    resolved = Path(path).resolve()
    try:
        return resolved.relative_to(PROJECT_DIR).as_posix()
    except ValueError as err:
        raise RuntimeError(f"{path} is outside the project dir {PROJECT_DIR}; "
                           "the viz server only serves project files") from err


def scene_config(scenes: dict | None = None) -> dict:
    """The engine's config: every scene resolved to served part URLs and plain dicts."""
    resolved = {}
    for name, definition in (scenes or SCENES()).items():
        parts = []
        for stl_name, entry in definition["parts"]().items():
            material, euler, offset = (*entry, None, None)[:3] if isinstance(entry, tuple) else (entry, None, None)
            parts.append({
                "file": stl_name,
                "url": served_path(out_dir() / "parts" / stl_name),
                "material": material,
                "euler": list(euler) if euler is not None else None,
                "offset": list(offset) if offset is not None else None,
            })
        resolved[name] = {
            "parts": parts,
            "shots": {k: dict(v) for k, v in (definition.get("shots") or SHOTS).items()},
            "explode": {k: list(v) for k, v in (definition.get("explode") or EXPLODE).items()},
        }
    config = {
        "resolution": list(RESOLUTION), "samples": SAMPLES, "bounces": BOUNCES,
        "exposure": EXPOSURE, "denoise": DENOISE, "crease_deg": CREASE_DEG, "scenes": resolved,
    }
    if FLOOR is not None:
        config["floor"] = None if FLOOR is False else FLOOR
    if WORLD is not None:
        config["world"] = WORLD
    if LIGHTS is not None:
        config["lights"] = LIGHTS
    # VIZ_DEBUG='{"tiles": 1}' merges engine knobs for diagnosing a render
    config.update(json.loads(os.environ.get("VIZ_DEBUG", "{}")))
    return config


CHROME_CANDIDATES = {
    "Darwin": [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
    ],
    "Linux": ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome"],
    "Windows": [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    ],
}


def find_chrome(env: dict | None = None, system: str | None = None) -> str | None:
    """CHROME from the environment (the Makefile passes its CHROME), else the
    platform's usual locations; None when nothing runs."""
    env = os.environ if env is None else env
    explicit = env.get("CHROME")
    if explicit:
        if Path(explicit).exists() or shutil.which(explicit):
            return explicit
        return None
    for candidate in CHROME_CANDIDATES.get(system or platform.system(), []):
        if Path(candidate).exists():
            return candidate
        found = shutil.which(candidate)
        if found:
            return found
    return None


def chrome_flags(width: int, height: int, profile_dir: str, system: str | None = None) -> list[str]:
    """Headless with the GPU on: the path tracer is WebGL2 and software GL takes
    minutes per image. VIZ_CHROME_FLAGS appends/overrides for odd machines."""
    # VIZ_HEADLESS=old|0 for diagnosing GPU/driver differences between Chrome modes
    headless = os.environ.get("VIZ_HEADLESS", "new")
    flags = [
        *(["--headless=" + headless] if headless != "0" else []),
        "--remote-debugging-port=0", f"--user-data-dir={profile_dir}",
        "--no-first-run", "--no-default-browser-check", "--disable-extensions",
        "--hide-scrollbars", f"--window-size={width},{height}",
        "--enable-gpu", "--ignore-gpu-blocklist", "--enable-unsafe-swiftshader",
    ]
    system = system or platform.system()
    if system == "Darwin":
        flags.append("--use-angle=metal")
    elif system == "Linux":
        flags += ["--use-gl=angle", "--use-angle=vulkan", "--enable-features=Vulkan"]
    extra = os.environ.get("VIZ_CHROME_FLAGS")
    if extra:
        flags += extra.split()
    return flags


DEVTOOLS_RE = re.compile(r"DevTools listening on (ws://\S+)")


def parse_devtools_url(line: str) -> str | None:
    match = DEVTOOLS_RE.search(line)
    return match.group(1) if match else None


class Log:
    """Print + append to <out_dir>/viz.log so a crash leaves evidence."""

    def __init__(self, path: Path):
        path.parent.mkdir(parents=True, exist_ok=True)
        self.file = open(path, "w", encoding="utf-8")

    def __call__(self, message: str):
        stamp = time.strftime("%H:%M:%S")
        line = f"{stamp} {message}"
        print(line, flush=True)
        self.file.write(line + "\n")
        self.file.flush()


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *_args):  # keep the render log readable
        pass


def serve_project() -> tuple[http.server.ThreadingHTTPServer, str]:
    """Serve the project dir on a loopback port: viz/ (engine), out/ (parts), assets/."""
    handler = lambda *a, **k: QuietHandler(*a, directory=str(PROJECT_DIR), **k)  # noqa: E731
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    return server, f"http://127.0.0.1:{server.server_address[1]}/"


class Chrome:
    """A headless Chrome and one DevTools session on the engine page."""

    def __init__(self, binary: str, base_url: str, width: int, height: int, log: Log):
        self.log = log
        # A persistent profile keeps Chrome's GPU shader cache warm between runs
        # (the path tracer's shader is large); VIZ_PROFILE_DIR overrides, "" = temp.
        default_profile = Path.home() / ".cache" / "robion-viz-chrome"
        self.profile = os.environ.get("VIZ_PROFILE_DIR", str(default_profile)) or tempfile.mkdtemp(prefix="robion-viz-")
        self.temp_profile = not os.environ.get("VIZ_PROFILE_DIR", str(default_profile))
        Path(self.profile).mkdir(parents=True, exist_ok=True)
        self.process = subprocess.Popen(
            [binary, *chrome_flags(width, height, self.profile)],
            stdout=subprocess.DEVNULL, stderr=subprocess.PIPE, text=True,
        )
        ws_url = None
        deadline = time.time() + 30
        while time.time() < deadline and ws_url is None:
            line = self.process.stderr.readline()
            if not line:
                if self.process.poll() is not None:
                    break
                continue
            ws_url = parse_devtools_url(line)
        if ws_url is None:
            self.close()
            raise RuntimeError("Chrome did not announce a DevTools endpoint (see viz.log)")
        # stderr keeps flowing; drain it so Chrome never blocks on a full pipe
        threading.Thread(target=self._drain, daemon=True).start()

        from websockets.sync.client import connect  # imported late: dry runs need no websockets
        self.ws = connect(ws_url, max_size=None, open_timeout=30)
        self.next_id = 0
        self.session = None
        target = self.call("Target.createTarget", url=base_url + "viz/index.html")["targetId"]
        self.session = self.call("Target.attachToTarget", targetId=target, flatten=True)["sessionId"]
        self.wait_for("typeof RobionViz !== 'undefined'", timeout=30)

    def _drain(self):
        for _ in self.process.stderr:
            pass

    def call(self, method: str, **params):
        self.next_id += 1
        message = {"id": self.next_id, "method": method, "params": params}
        if self.session and not method.startswith("Target."):
            message["sessionId"] = self.session
        self.ws.send(json.dumps(message))
        while True:
            reply = json.loads(self.ws.recv(timeout=TIMEOUT_S))
            if reply.get("id") == self.next_id:
                if "error" in reply:
                    raise RuntimeError(f"{method}: {reply['error']}")
                return reply.get("result", {})

    def evaluate(self, expression: str, await_promise: bool = False):
        result = self.call("Runtime.evaluate", expression=expression, returnByValue=True,
                           awaitPromise=await_promise)
        if "exceptionDetails" in result:
            details = result["exceptionDetails"]
            text = details.get("exception", {}).get("description") or details.get("text")
            raise RuntimeError(f"page error: {text}")
        return result.get("result", {}).get("value")

    def wait_for(self, expression: str, timeout: float):
        deadline = time.time() + timeout
        while time.time() < deadline:
            if self.evaluate(expression):
                return
            time.sleep(0.2)
        raise RuntimeError(f"timeout waiting for {expression}")

    def close(self):
        try:
            if getattr(self, "ws", None):
                try:
                    self.session = None
                    self.call("Browser.close")  # graceful: Chrome flushes its GPU shader cache
                    self.process.wait(timeout=10)
                except Exception:  # noqa: BLE001 — fall through to terminate
                    pass
                self.ws.close()
        finally:
            if self.process.poll() is None:
                self.process.terminate()
                try:
                    self.process.wait(timeout=10)
                except subprocess.TimeoutExpired:
                    self.process.kill()
            if self.temp_profile:
                shutil.rmtree(self.profile, ignore_errors=True)


def render(config: dict, chrome: Chrome, target_dir: Path, log: Log) -> dict:
    """Run the engine, stream its status into the log, write one PNG per shot."""
    chrome.evaluate(f"window.vizRun({json.dumps(config)}); true")
    last_status = None
    deadline = time.time() + TIMEOUT_S
    while time.time() < deadline:
        state = chrome.evaluate("JSON.stringify({status: __viz.status, done: __viz.done, error: __viz.error})")
        state = json.loads(state)
        if state["status"] != last_status:
            log(f"engine: {state['status']}")
            last_status = state["status"]
        if state["done"]:
            if state["error"]:
                raise RuntimeError(state["error"])
            break
        time.sleep(0.5)
    else:
        raise RuntimeError(f"render exceeded {TIMEOUT_S} s (VIZ_TIMEOUT)")
    stats = json.loads(chrome.evaluate("JSON.stringify(__viz.stats)"))
    log(f"gpu: {stats.get('gpu')}")
    for scene_name, scene in config["scenes"].items():
        for shot_name in scene["shots"]:
            data_url = chrome.evaluate(f"__viz.results[{json.dumps(scene_name)}][{json.dumps(shot_name)}]")
            if not data_url:
                raise RuntimeError(f"no image for {scene_name}/{shot_name}")
            png = base64.b64decode(data_url.split(",", 1)[1])
            path = target_dir / f"{shot_name}.png"
            path.write_bytes(png)
            shot_stats = stats.get(f"{scene_name}/{shot_name}", {})
            log(f"rendered {path} ({shot_stats.get('samples')} samples, {shot_stats.get('ms')} ms)")
    return stats


def shader_cache_marker(chrome: Chrome, binary: str) -> Path:
    """Marker in the profile dir: this engine bundle was compiled once by this Chrome."""
    bundle = (ENGINE_DIR / "render.bundle.js").read_bytes()
    key = hashlib.sha256(bundle + binary.encode()).hexdigest()[:16]
    return Path(chrome.profile) / f"shader-warm-{key}"


def warm_shader_cache(binary: str, base_url: str, config: dict, log: Log) -> None:
    """ANGLE/Metal (Chrome 152, macOS) renders dielectric and textured materials
    black on the first, uncached compile of the path tracer's shader; the program
    loaded from Chrome's GPU cache on the next launch is correct. So: compile once
    in a throwaway launch (one 64x64 sample of the first scene), close Chrome so
    the cache is written, and remember it per bundle + Chrome in the profile."""
    probe = Chrome(binary, base_url, 64, 64, log)
    try:
        marker = shader_cache_marker(probe, binary)
        if marker.exists():
            return
        log("shader cache cold: warming up (one-off per Chrome + engine version)")
        first = next(iter(config["scenes"]))
        warm = {**config, "resolution": [64, 64], "samples": 1, "denoise": False,
                "scenes": {first: config["scenes"][first]}}
        render(warm, probe, Path(tempfile.mkdtemp(prefix="robion-viz-warm-")), log)
        marker.touch()
    finally:
        probe.close()


def main() -> int:
    target_dir = out_dir()
    log = Log(target_dir / "viz.log")
    config = scene_config()
    if "--dry-run" in sys.argv:
        path = target_dir / "viz_scene.json"
        path.write_text(json.dumps(config, indent=2))
        log(f"dry run: scene written to {path}")
        return 0
    if not (ENGINE_DIR / "render.bundle.js").exists():
        log(f"engine missing: {ENGINE_DIR / 'render.bundle.js'} (copy templates/common/viz/)")
        return 1
    binary = find_chrome()
    if binary is None:
        log("Chrome not found — set CHROME=/path/to/chrome; no photoreal visualization")
        return 2
    server, base_url = serve_project()
    chrome = None
    try:
        config["base"] = base_url
        log(f"chrome: {binary}")
        warm_shader_cache(binary, base_url, config, log)
        chrome = Chrome(binary, base_url, *RESOLUTION, log)
        stats = render(config, chrome, target_dir, log)
        log(f"done in {stats.get('total_ms')} ms")
        return 0
    except Exception as err:  # noqa: BLE001 — every failure must land in viz.log
        log(f"FAILED: {err}")
        return 1
    finally:
        if chrome is not None:
            chrome.close()
        server.shutdown()


if __name__ == "__main__":
    sys.exit(main())
