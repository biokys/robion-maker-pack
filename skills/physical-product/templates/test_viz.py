"""Unit tests for templates/solids/viz.py — the parts that need no Chrome:
scene config, material factories, Chrome discovery, DevTools URL parsing,
argument handling. Run: python3 -m unittest skills/physical-product/templates/test_viz.py
"""

from __future__ import annotations

import importlib.util
import json
import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

TEMPLATES = Path(__file__).resolve().parent
VIZ_PY = TEMPLATES / "solids" / "viz.py"


def load_viz(project_dir: Path):
    """Import viz.py as if it lived in `project_dir` (resolved, as __file__ is)."""
    spec = importlib.util.spec_from_file_location("viz_under_test", VIZ_PY)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    project_dir = project_dir.resolve()
    module.PROJECT_DIR = project_dir
    module.ENGINE_DIR = project_dir / "viz"
    module.TEXTURE_DIR = project_dir / "assets" / "oak_veneer_01"
    return module


def argv(*args):
    """viz.py reads sys.argv when out_dir() is called, so patch it around the call."""
    return mock.patch.object(sys, "argv", ["viz.py", *args])


class SceneConfigTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.project = Path(self.tmp.name)
        parts = self.project / "out" / "parts"
        parts.mkdir(parents=True)
        for name in ("bracket", "lid"):
            (parts / f"{name}.stl").write_bytes(b"solid x\nendsolid x\n")
        os.chdir(self.project)  # out_dir() defaults to a relative "out"
        self.argv = argv("out")
        self.argv.start()

    def tearDown(self):
        self.argv.stop()
        os.chdir("/")
        self.tmp.cleanup()

    def test_config_lists_every_stl_with_served_urls(self):
        viz = load_viz(self.project)
        config = viz.scene_config()
        self.assertEqual(config["resolution"], [1400, 1000])
        self.assertEqual(config["crease_deg"], 30.0)
        parts = config["scenes"]["main"]["parts"]
        self.assertEqual([p["file"] for p in parts], ["bracket.stl", "lid.stl"])
        self.assertEqual(parts[0]["url"], "out/parts/bracket.stl")
        self.assertEqual(parts[0]["material"]["type"], "powder_coat")  # the default
        self.assertIsNone(parts[0]["euler"])
        self.assertIn("viz_hero", config["scenes"]["main"]["shots"])
        json.dumps(config)  # must be plain JSON for the engine

    def test_tuple_entries_carry_euler_and_explode_lists(self):
        viz = load_viz(self.project)
        scenes = {"print": {
            "parts": lambda: {"lid.stl": (viz.plastic((0.1, 0.2, 0.3)), (90, 0, 0))},
            "shots": {"viz_print": {"direction": (0, -1, 1), "distance": 2.0, "lens": 50, "explode": 0.5}},
            "explode": {"lid.stl": (0, 0, 1)},
        }}
        config = viz.scene_config(scenes)
        part = config["scenes"]["print"]["parts"][0]
        self.assertEqual(part["euler"], [90, 0, 0])
        self.assertEqual(part["material"], {"type": "plastic", "rgb": [0.1, 0.2, 0.3], "roughness": 0.35})
        self.assertEqual(config["scenes"]["print"]["explode"], {"lid.stl": [0, 0, 1]})

    def test_offsets_absolute_shots_and_environment_reach_the_config(self):
        viz = load_viz(self.project)
        viz.FLOOR = False
        viz.LIGHTS = [{"kind": "sun", "direction": [0, 0, -1], "intensity": 2}]
        scenes = {"wall": {
            "parts": lambda: {"lid.stl": (viz.plastic(), None, (15, 30, 28))},
            "shots": {"viz_hero": {"position_mm": [130, -60, 1950], "target_mm": [515, 405, 30], "lens": 46}},
        }}
        config = viz.scene_config(scenes)
        self.assertEqual(config["scenes"]["wall"]["parts"][0]["offset"], [15, 30, 28])
        self.assertIsNone(config["scenes"]["wall"]["parts"][0]["euler"])
        self.assertEqual(config["scenes"]["wall"]["shots"]["viz_hero"]["position_mm"], [130, -60, 1950])
        self.assertIsNone(config["floor"])
        self.assertEqual(config["lights"][0]["kind"], "sun")

    def test_no_parts_is_an_error_that_names_the_fix(self):
        viz = load_viz(self.project)
        for stl in (self.project / "out" / "parts").glob("*.stl"):
            stl.unlink()
        with self.assertRaisesRegex(RuntimeError, "make parts"):
            viz.PARTS()

    def test_oak_texture_is_served_relative_to_the_project(self):
        viz = load_viz(self.project)
        texture_dir = self.project.resolve() / "assets" / "oak_veneer_01"
        texture_dir.mkdir(parents=True)
        (texture_dir / "oak_veneer_01_diff_2k.jpg").write_bytes(b"jpg")
        oak = viz.oak_sparovka(seed=2, texture_dir=texture_dir)
        self.assertEqual(oak["type"], "wood")
        self.assertEqual(oak["diff"], "assets/oak_veneer_01/oak_veneer_01_diff_2k.jpg")
        self.assertEqual(oak["seed"], 2)
        self.assertIsNone(viz.oak_sparovka(texture_dir=self.project / "missing")["diff"])

    def test_pbr_describes_any_material_and_serves_its_maps(self):
        viz = load_viz(self.project)
        maps = self.project.resolve() / "assets" / "leather"
        maps.mkdir(parents=True)
        (maps / "leather_diff.jpg").write_bytes(b"jpg")
        (maps / "leather_nor.jpg").write_bytes(b"jpg")
        leather = viz.pbr(rgb=[0.2, 0.1, 0.05], roughness=0.8, sheen=0.3,
                          diff=str(maps / "leather_diff.jpg"), normal=str(maps / "leather_nor.jpg"), scale=0.002)
        self.assertEqual(leather["type"], "pbr")
        self.assertEqual(leather["diff"], "assets/leather/leather_diff.jpg")
        self.assertEqual(leather["normal"], "assets/leather/leather_nor.jpg")
        self.assertEqual(leather["sheen"], 0.3)
        glass = viz.glass(rgb=(0.9, 1.0, 0.95), thickness_mm=3)
        self.assertEqual((glass["type"], glass["transmission"], glass["thickness_mm"]), ("glass", 1.0, 3))
        json.dumps([leather, glass])

    def test_files_outside_the_project_are_refused(self):
        viz = load_viz(self.project)
        with self.assertRaisesRegex(RuntimeError, "outside the project dir"):
            viz.served_path(Path("/etc/hosts"))

    def test_dry_run_writes_the_scene_and_exits_zero(self):
        viz = load_viz(self.project)
        with argv("--dry-run", "out"):
            self.assertEqual(viz.main(), 0)
        written = json.loads((self.project / "out" / "viz_scene.json").read_text())
        self.assertEqual(len(written["scenes"]["main"]["parts"]), 2)
        self.assertTrue((self.project / "out" / "viz.log").exists())

    def test_out_dir_accepts_the_blender_style_separator(self):
        viz = load_viz(self.project)
        with argv("--", "out/concept/v1"):
            self.assertEqual(viz.out_dir(), Path("out/concept/v1"))
        with argv("out/x"):
            self.assertEqual(viz.out_dir(), Path("out/x"))
        with argv():
            self.assertEqual(viz.out_dir(), Path("out"))


class ChromeDiscoveryTest(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.project = Path(self.tmp.name)
        self.viz = load_viz(self.project)

    def tearDown(self):
        self.tmp.cleanup()

    def test_explicit_chrome_wins_when_it_exists(self):
        binary = self.project / "chrome"
        binary.write_text("")
        self.assertEqual(self.viz.find_chrome({"CHROME": str(binary)}), str(binary))
        self.assertIsNone(self.viz.find_chrome({"CHROME": str(self.project / "nope")}))

    def test_platform_candidates_are_probed_in_order(self):
        with mock.patch.dict(self.viz.CHROME_CANDIDATES, {"TestOS": [str(self.project / "a"), str(self.project / "b")]}):
            self.assertIsNone(self.viz.find_chrome({}, system="TestOS"))
            (self.project / "b").write_text("")
            self.assertEqual(self.viz.find_chrome({}, system="TestOS"), str(self.project / "b"))

    def test_flags_keep_the_gpu_on_and_accept_overrides(self):
        with mock.patch.dict(os.environ, {"VIZ_CHROME_FLAGS": "--foo --bar=1"}):
            flags = self.viz.chrome_flags(1400, 1000, "/tmp/p", system="Darwin")
        self.assertIn("--headless=new", flags)
        self.assertIn("--remote-debugging-port=0", flags)
        self.assertIn("--window-size=1400,1000", flags)
        self.assertIn("--use-angle=metal", flags)
        self.assertEqual(flags[-2:], ["--foo", "--bar=1"])
        self.assertIn("--use-angle=vulkan", self.viz.chrome_flags(1, 1, "/tmp/p", system="Linux"))

    def test_devtools_url_parsing(self):
        line = "\nDevTools listening on ws://127.0.0.1:51234/devtools/browser/abc-def\n"
        self.assertEqual(self.viz.parse_devtools_url(line), "ws://127.0.0.1:51234/devtools/browser/abc-def")
        self.assertIsNone(self.viz.parse_devtools_url("[1:1:0910/120000.000:INFO] something else"))


if __name__ == "__main__":
    unittest.main()
