"""Tests for templates/common/design_record.py — the gate protocol the Robion design panel trusts.

Run from the pack root:  python3 -m unittest skills/physical-product/templates/test_design_record.py -v
Lives one level above common/ on purpose: the skill and CI copy common/ flat into every project.
"""

from __future__ import annotations

import contextlib
import io
import json
import os
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

HERE = Path(__file__).resolve().parent
SCRIPT = HERE / "common" / "design_record.py"
sys.path.insert(0, str(SCRIPT.parent))
import design_record as dr  # noqa: E402

PLUGIN_JSON = HERE.parent.parent.parent / ".claude-plugin" / "plugin.json"
MARKETPLACE_JSON = HERE.parent.parent.parent / ".claude-plugin" / "marketplace.json"


def write_json(name: str, payload) -> str:
    Path(name).write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")
    return name


QUESTIONS = [
    {"id": "width", "group": "dimensions", "label": "Width", "type": "select",
     "options": [{"value": 1600, "label": "1600 mm"}, {"value": 1800, "label": "1800 mm"}], "default": 1600},
    {"id": "casters", "group": "function", "label": "Casters", "type": "toggle", "default": False},
    {"id": "finish", "group": "materials", "label": "Finish", "type": "select",
     "options": [{"value": "oil", "label": "Hard wax oil"}, {"value": "lacquer", "label": "Lacquer"}], "default": "oil"},
    {"id": "notes", "group": "function", "label": "Anything else", "type": "text"},
]
VARIANTS = [
    {"id": "a", "title": "Four legs", "summary": "simple", "facts": {"mass_kg": 62}},
    {"id": "b", "title": "Stretchers", "summary": "stiff", "facts": {"mass_kg": 71}},
]


class RecordCase(unittest.TestCase):
    def setUp(self) -> None:
        self.tmp = tempfile.TemporaryDirectory()
        self.cwd = os.getcwd()
        os.chdir(self.tmp.name)

    def tearDown(self) -> None:
        os.chdir(self.cwd)
        self.tmp.cleanup()

    # -- helpers -------------------------------------------------------

    def run_cmd(self, *args: str) -> tuple[int, str, str]:
        out, err = io.StringIO(), io.StringIO()
        with contextlib.redirect_stdout(out), contextlib.redirect_stderr(err):
            try:
                code = dr.main(list(args))
            except SystemExit as stop:  # check --strict exits through sys.exit
                code = int(stop.code or 0)
        return code, out.getvalue(), err.getvalue()

    def ok(self, *args: str) -> str:
        code, out, err = self.run_cmd(*args)
        self.assertEqual(code, 0, f"{args} failed: {err or out}")
        return out

    def fails(self, *args: str, code: int = 1, contains: str = "") -> str:
        actual, out, err = self.run_cmd(*args)
        self.assertEqual(actual, code, f"{args}: expected exit {code}, got {actual}: {out}{err}")
        if contains:
            self.assertIn(contains, err)
        return err

    def record(self) -> dict:
        return json.loads(Path("design.json").read_text(encoding="utf-8"))

    def stage(self, stage_id: str) -> dict:
        return next(s for s in self.record()["stages"] if s["id"] == stage_id)

    def question(self, qid: str) -> dict:
        return next(q for q in self.record()["questions"] if q["id"] == qid)

    def git_log(self) -> str:
        return subprocess.run(["git", "log", "--format=%s"], capture_output=True, text=True, check=True).stdout

    def init(self, *extra: str) -> None:
        self.ok("init", "--name", "Workbench", "--slug", "workbench", "--language", "en",
                "--idea", "a sturdy bench", "--summary", "spec", "--verticals", "woodworking", "--stack", "solids", *extra)

    def brief_gate(self, **overrides) -> None:
        ask = {"kind": "questions", "title": "A few questions", "questions": QUESTIONS,
               "next": {"stage": "concept", "estimate": "about 5 minutes"}}
        ask.update(overrides)
        self.ok("gate", "brief", write_json("ask.json", ask))

    def to_model_working(self) -> None:
        """init → brief answered → concept frozen → model working."""
        self.init()
        self.brief_gate()
        self.ok("reply", "brief", write_json("reply.json", {"kind": "questions", "answers": {"width": 1800}}))
        self.ok("concept", write_json("variants.json", VARIANTS), "--recommended", "b")
        self.ok("gate", "concept", write_json("ask.json", {"kind": "choices"}))
        self.ok("reply", "concept", write_json("reply.json", {"kind": "choices", "chosen": "b"}))

    # -- init ----------------------------------------------------------

    def test_init_states_and_versions(self) -> None:
        self.init()
        record = self.record()
        statuses = {s["id"]: s["status"] for s in record["stages"]}
        self.assertEqual(statuses["idea"], "done")
        self.assertEqual(statuses["brief"], "working")
        self.assertTrue(self.stage("brief").get("startedAt"))
        self.assertTrue(all(statuses[s] == "pending" for s in dr.STAGES[2:]))
        self.assertEqual(record["tool"], dr.TOOL)
        self.assertEqual(json.loads(PLUGIN_JSON.read_text())["version"], dr.VERSION)
        self.assertEqual(json.loads(MARKETPLACE_JSON.read_text())["plugins"][0]["version"], dr.VERSION)
        self.assertIn("idea: recorded", self.git_log())
        self.fails("init", "--name", "x", "--idea", "y", contains="already exists")

    def test_attachments_are_copied_into_idea(self) -> None:
        Path(".robion/uploads").mkdir(parents=True)
        Path(".robion/uploads/photo.jpg").write_bytes(b"jpeg")
        Path(".robion/uploads/sketch.png").write_bytes(b"png")
        self.init("--attachment", ".robion/uploads/photo.jpg")
        self.assertEqual(self.record()["idea"]["attachments"], ["idea/photo.jpg"])
        self.assertEqual(Path("idea/photo.jpg").read_bytes(), b"jpeg")
        self.ok("attach", ".robion/uploads/sketch.png")
        self.assertEqual(self.record()["idea"]["attachments"], ["idea/photo.jpg", "idea/sketch.png"])
        self.assertIn("idea: attachment", self.git_log())
        tracked = subprocess.run(["git", "ls-files", "idea"], capture_output=True, text=True, check=True).stdout
        self.assertIn("idea/photo.jpg", tracked)

    # -- questions gate --------------------------------------------------

    def test_gate_questions_then_reply(self) -> None:
        self.init()
        self.brief_gate()
        brief = self.stage("brief")
        self.assertEqual(brief["status"], "needs_you")
        self.assertEqual(brief["ask"]["kind"], "questions")
        self.assertEqual(len(brief["ask"]["questions"]), 4)
        self.assertEqual(brief["ask"]["questions"][3]["type"], "text")
        self.assertTrue(brief["ask"]["askedAt"].endswith("Z"))
        open_questions = self.record()["questions"]
        self.assertEqual([q["id"] for q in open_questions], ["width", "casters", "finish", "notes"])
        self.assertTrue(all("decidedBy" not in q for q in open_questions))
        self.assertIn("brief: asked (questions)", self.git_log())

        reply = {"kind": "questions", "answers": {"width": 1800, "finish": "decide_for_me", "notes": "no drawers"}, "note": "thanks"}
        out = self.ok("reply", "brief", write_json("reply.json", reply), "--json")
        result = json.loads(out)
        self.assertEqual(result["next"], "concept")
        self.assertEqual(result["decided"], {"user": ["width", "notes"], "default": ["casters"], "claude": ["finish"]})
        self.assertEqual(self.question("width"), {**self.question("width"), "answer": 1800, "decidedBy": "user"})
        self.assertEqual(self.question("casters")["answer"], False)
        self.assertEqual(self.question("casters")["decidedBy"], "default")
        finish = self.question("finish")
        self.assertEqual(finish["decidedBy"], "claude")
        self.assertNotIn("answer", finish)
        self.assertEqual(self.question("notes")["answer"], "no drawers")
        brief = self.stage("brief")
        self.assertEqual(brief["status"], "done")
        self.assertNotIn("ask", brief)
        self.assertEqual(brief["reply"]["answers"]["finish"], "decide_for_me")
        self.assertEqual(brief["reply"]["note"], "thanks")
        self.assertEqual(brief["reply"]["via"], "app")
        concept = self.stage("concept")
        self.assertEqual(concept["status"], "working")
        self.assertEqual(concept["estimate"], "about 5 minutes")
        self.assertIn("brief: answered (2 user, 1 default, 1 claude)", self.git_log())
        code, out, _ = self.run_cmd("check", "--strict")
        self.assertEqual(code, 1)
        self.assertIn("finish", out)
        self.ok("answer", "finish", "--value", "oil", "--by", "claude", "--reason", "repairable")
        self.assertEqual(self.run_cmd("check", "--strict")[0], 0)

    def test_reply_without_next_keeps_working(self) -> None:
        self.init()
        self.brief_gate(next=None)
        self.ok("reply", "brief", write_json("reply.json", {"kind": "questions", "answers": {}}))
        self.assertEqual(self.stage("brief")["status"], "working")

    def test_reply_accepts_option_labels_and_list_form(self) -> None:
        self.init()
        self.brief_gate()
        reply = {"kind": "questions", "via": "chat", "answers": [{"id": "width", "value": "1800 mm"}, {"id": "casters", "value": "yes"}]}
        self.ok("reply", "brief", write_json("reply.json", reply))
        self.assertEqual(self.question("width")["answer"], 1800)
        self.assertEqual(self.question("casters")["answer"], True)
        self.assertEqual(self.stage("brief")["reply"]["via"], "chat")

    def test_gate_refusals(self) -> None:
        self.init()
        self.fails("gate", "nowhere", write_json("ask.json", {"kind": "questions", "questions": QUESTIONS}), contains="unknown stage")
        self.fails("gate", "brief", write_json("ask.json", {"kind": "poll"}), contains="kind must be one of")
        bad = [{"id": "x", "label": "X", "options": [{"value": "decide_for_me", "label": "?"}, {"value": 1, "label": "1"}], "default": 1}]
        self.fails("gate", "brief", write_json("ask.json", {"kind": "questions", "questions": bad}), contains="reserved")
        bad = [{"id": "x", "label": "X", "type": "select", "options": [{"value": 1, "label": "1"}, {"value": 2, "label": "2"}]}]
        self.fails("gate", "brief", write_json("ask.json", {"kind": "questions", "questions": bad}), contains="needs a default")
        bad = [{"id": "x", "label": "X", "options": [{"value": 1, "label": "1"}], "default": 3}]
        self.fails("gate", "brief", write_json("ask.json", {"kind": "questions", "questions": bad}), contains="not one of the options")
        bad = [{"id": "Bad-Id", "label": "X", "type": "text"}]
        self.fails("gate", "brief", write_json("ask.json", {"kind": "questions", "questions": bad}), contains="snake_case")
        self.fails("gate", "brief", write_json("ask.json", {"kind": "questions", "questions": QUESTIONS, "next": {"stage": "later"}}), contains="unknown stage")
        self.fails("gate", "brief", write_json("ask.json", {"kind": "choices"}), contains="needs concept.variants")
        # brief is working: no other stage may wait for the maker
        self.fails("gate", "concept", write_json("ask.json", {"kind": "approve"}), contains="cannot wait on 'concept'")
        self.assertNotIn("ask", self.stage("brief"))
        self.brief_gate()
        self.fails("gate", "brief", write_json("ask.json", {"kind": "approve"}), contains="already has an open ask")
        self.fails("next", "concept", contains="waits for the maker")

    def test_reply_errors_write_nothing(self) -> None:
        self.init()
        self.brief_gate()
        before = Path("design.json").read_bytes()
        self.fails("reply", "brief", write_json("reply.json", {"kind": "approve", "approved": True}), contains="the reply says 'approve'")
        self.fails("reply", "brief", write_json("reply.json", {"kind": "questions", "answers": {"depth": 3}}), contains="not asked")
        self.fails("reply", "brief", write_json("reply.json", {"kind": "questions", "answers": {"casters": "maybe"}}), contains="true or false")
        self.fails("reply", "brief", write_json("reply.json", {"kind": "questions", "answers": {"width": 1700}}), contains="not one of the options")
        self.assertEqual(Path("design.json").read_bytes(), before)
        self.ok("reply", "brief", write_json("reply.json", {"kind": "questions", "answers": {}}))
        after = Path("design.json").read_bytes()
        self.fails("reply", "brief", "reply.json", code=2, contains="no open ask on 'brief'")
        self.assertEqual(Path("design.json").read_bytes(), after)
        self.fails("reply", "model", "reply.json", code=2)

    # -- concept gate ------------------------------------------------------

    def test_choices_gate_freezes_and_starts_model(self) -> None:
        self.init()
        self.brief_gate()
        self.ok("reply", "brief", write_json("reply.json", {"kind": "questions", "answers": {}}))
        self.ok("concept", write_json("variants.json", VARIANTS), "--recommended", "b")
        self.assertEqual(self.stage("concept")["status"], "working")
        self.ok("gate", "concept", write_json("ask.json", {"kind": "choices", "show": [{"type": "gallery", "images": ["out/concept_a.png"]}]}))
        ask = self.stage("concept")["ask"]
        self.assertEqual(ask["choices"]["recommended"], "b")
        self.assertEqual(ask["next"]["stage"], "model")
        self.fails("reply", "concept", write_json("reply.json", {"kind": "choices", "chosen": "z"}), contains="names no variant")
        self.ok("reply", "concept", write_json("reply.json", {"kind": "choices", "chosen": "a"}))
        record = self.record()
        self.assertEqual(record["concept"]["chosen"], "a")
        self.assertTrue(record["concept"]["frozenAt"])
        self.assertEqual(self.stage("concept")["status"], "done")
        self.assertEqual(self.stage("model")["status"], "working")
        self.assertIn("concept: frozen (a)", self.git_log())

    # -- approve gate ------------------------------------------------------

    def test_approve_gate_and_rework(self) -> None:
        self.to_model_working()
        Path("out").mkdir()
        Path("out/viz_hero.png").write_bytes(b"png")
        ask = {"kind": "approve", "show": [{"type": "gallery", "images": ["out/viz_hero.png"]}, {"type": "table", "columns": ["part", "mass"], "rows": [["leg", 1.2]]}]}
        self.ok("gate", "model", write_json("ask.json", ask))
        self.assertEqual(self.stage("model")["ask"]["next"]["stage"], "preview")
        self.fails("reply", "model", write_json("reply.json", {"kind": "approve", "approved": False}), contains="needs a note")
        self.ok("reply", "model", write_json("reply.json", {"kind": "approve", "approved": False, "note": "legs thicker"}))
        model = self.stage("model")
        self.assertEqual(model["status"], "working")
        self.assertEqual(model["note"], "legs thicker")
        self.assertEqual(model["reply"]["approved"], False)
        self.assertIn("model: rework requested", self.git_log())
        self.ok("gate", "model", write_json("ask.json", {"kind": "approve", "next": {"stage": "preview", "estimate": "a minute"}}))
        self.ok("reply", "model", write_json("reply.json", {"kind": "approve", "approved": True}))
        self.assertEqual(self.stage("model")["status"], "done")
        self.assertEqual(self.stage("preview")["status"], "working")
        self.assertEqual(self.stage("preview")["estimate"], "a minute")
        self.assertIn("model: approved", self.git_log())

    def test_bad_show_is_refused(self) -> None:
        self.to_model_working()
        self.fails("gate", "model", write_json("ask.json", {"kind": "approve", "show": [{"type": "video", "path": "x"}]}), contains="show type")
        rows = [["a", 1]] * 65
        self.fails("gate", "model", write_json("ask.json", {"kind": "approve", "show": [{"type": "table", "columns": ["p", "m"], "rows": rows}]}), contains="at most 64 rows")
        self.fails("gate", "model", write_json("ask.json", {"kind": "approve", "show": [{"type": "file", "path": "/etc/passwd"}]}), contains="project-relative")

    # -- change ------------------------------------------------------------

    def test_change_needs_by_and_never_leaves_no_current_stage(self) -> None:
        self.to_model_working()
        self.ok("stage", "model", "done", "--artifact", "model.py")
        self.ok("stage", "preview", "working")
        self.ok("gate", "preview", write_json("ask.json", {"kind": "approve"}))
        self.fails("change", "questions.width", "--from", "1800", "--to", "1600", contains="needs --by")
        self.fails("change", "questions.width", "--from", "1800", "--to", "1600", "--by", "claude", contains="needs --reason")
        self.ok("change", "questions.width", "--from", "1800", "--to", "1600", "--by", "user", "--invalidates", "model,preview")
        self.assertEqual(self.question("width")["answer"], 1600)
        self.assertEqual(self.question("width")["decidedBy"], "user")
        self.assertNotIn("ask", self.stage("preview"))
        self.assertEqual(self.stage("preview")["status"], "stale")
        # the invalidated current stage left nothing current: the first stale stage works again
        self.assertEqual(self.stage("model")["status"], "working")
        self.assertIn("regenerating after change", self.stage("model")["note"])
        change = self.record()["changes"][-1]
        self.assertEqual(change["by"], "user")
        self.assertEqual(change["invalidates"], ["model", "preview"])
        self.assertIn("change: questions.width 1800 -> 1600", self.git_log())

    # -- parallel production ---------------------------------------------

    def test_parallel_working_only_for_production_stages(self) -> None:
        self.to_model_working()
        self.ok("stage", "model", "done")
        self.ok("stage", "preview", "done")
        for stage_id in ("drawings", "bom", "plan", "analysis"):
            self.ok("stage", stage_id, "working", "--estimate", "a while", "--no-commit")
        self.assertEqual({s["status"] for s in self.record()["stages"] if s["id"] in dr.PARALLEL}, {"working"})
        self.fails("stage", "buildsheet", "working", contains="run side by side")
        self.fails("gate", "buildsheet", write_json("ask.json", {"kind": "approve"}), contains="cannot wait on 'buildsheet'")
        self.fails("next", "buildsheet", contains="several stages are working")
        for stage_id in ("drawings", "bom", "plan", "analysis"):
            self.ok("stage", stage_id, "done", "--no-commit", "--artifact", f"out/{stage_id}.md")
        self.assertNotIn(f"{stage_id}: done", self.git_log())
        self.ok("commit", "-m", "production: drawings, bom, plan, analysis")
        self.assertIn("production: drawings, bom, plan, analysis", self.git_log())
        self.ok("stage", "buildsheet", "working")

    def test_lock_serializes_parallel_writers(self) -> None:
        self.to_model_working()
        self.ok("stage", "model", "done")
        self.ok("stage", "preview", "done")
        env = {**os.environ, "PYTHONDONTWRITEBYTECODE": "1"}

        def loop(stage_id: str) -> str:
            return (
                "import subprocess, sys\n"
                f"for i in range(15):\n"
                f"    for status in ('working', 'done'):\n"
                f"        r = subprocess.run([sys.executable, {str(SCRIPT)!r}, 'stage', {stage_id!r}, status, '--no-commit'], capture_output=True, text=True)\n"
                "        assert r.returncode == 0, r.stderr\n"
            )

        procs = [subprocess.Popen([sys.executable, "-c", loop(s)], cwd=self.tmp.name, env=env, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True) for s in ("drawings", "bom")]
        for proc in procs:
            _, err = proc.communicate(timeout=120)
            self.assertEqual(proc.returncode, 0, err)
        record = self.record()  # parses, so no torn write
        self.assertEqual(self.stage("drawings")["status"], "done")
        self.assertEqual(self.stage("bom")["status"], "done")
        self.assertEqual(self.run_cmd("check", "--strict")[0], 0)
        self.assertEqual([p.name for p in Path(".").glob(".design.*")], [])
        self.assertTrue(record["tool"].startswith("design_record.py/"))

    def test_lock_file_is_not_committed(self) -> None:
        self.init()
        tracked = subprocess.run(["git", "ls-files"], capture_output=True, text=True, check=True).stdout.split()
        self.assertIn("design.json", tracked)
        self.assertNotIn(dr.LOCK_FILE, tracked)

    # -- show / check ------------------------------------------------------

    def test_show_reports_the_ask_the_reply_and_the_rules(self) -> None:
        self.init()
        self.brief_gate()
        out = self.ok("show")
        self.assertIn("Current: brief needs_you", out)
        self.assertIn("Open ask: questions on brief (4 questions: width, casters, finish, notes); next concept", out)
        self.assertIn("Rules:", out)
        self.assertIn("Never ask in the chat", out)
        info = json.loads(self.ok("show", "--json"))
        self.assertEqual(info["ask"]["stage"], "brief")
        self.assertEqual(info["current"][0]["id"], "brief")
        self.ok("reply", "brief", write_json("reply.json", {"kind": "questions", "answers": {"finish": "decide_for_me"}, "note": "hurry"}))
        out = self.ok("show")
        self.assertIn("Current: concept working", out)
        self.assertIn("Last reply: brief questions", out)
        self.assertIn('note: "hurry"', out)
        self.assertIn("Delegated to you", out)
        self.assertIn("finish", out)

    def test_check_json(self) -> None:
        self.init()
        info = json.loads(self.ok("check", "--json"))
        self.assertTrue(info["ok"])
        self.assertEqual(info["current"], ["brief"])

    def test_legacy_flow_still_works(self) -> None:
        """A 0.25 session: answers file, freeze from the chat, next as an agent-side gate."""
        self.init()
        self.ok("answers", write_json("answers.json", [{"id": "width", "label": "Width", "answer": 1800, "decidedBy": "user"}]))
        self.ok("stage", "brief", "done")
        self.ok("concept", write_json("variants.json", VARIANTS))
        self.ok("stage", "concept", "needs_you")
        self.ok("freeze", "a")
        self.assertEqual(self.stage("concept")["status"], "done")
        self.ok("next", "model", "--estimate", "a minute")
        self.ok("next", "preview", "--artifact", "model.py")
        self.assertEqual(self.stage("model")["status"], "done")
        self.assertEqual(self.stage("model")["artifacts"], ["model.py"])
        self.assertIn("model: done", self.git_log())


if __name__ == "__main__":
    unittest.main()
