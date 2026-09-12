#!/usr/bin/env python3
r"""The only writer of design.json — the design record Robion draws its design panel from.

Every move of a design goes through one call here; the script stamps the clock, keeps the
record valid and commits each gate, so the record tells the truth about when things happened.
Standard library only: it runs before `uv sync`, in a bare terminal and inside evals.

THE GATE PROTOCOL (Robion ≥ 0.15, ROBION_DESIGN_ASKS=1 in the environment)

  A gate is ONE command. It stores an `ask` on the stage, the design panel renders it, the
  maker answers there, Robion writes the reply back with `reply` and types one line into
  this session: `Robion: the reply to the "<stage>" gate is recorded …` — then run `show`
  and continue. Never ask the maker a question in the chat; not replying is waiting.

    python3 design_record.py init --name "Workbench" --slug workbench --language cs \
        --idea "…the user's words…" --summary "…the spec…" --verticals woodworking --stack solids \
        --attachment .robion/uploads/photo.jpg         # copied into idea/, idea done, brief working
    python3 design_record.py gate brief ask.json      # kind "questions": the question round
    python3 design_record.py concept variants.json --recommended b
    python3 design_record.py gate concept ask.json    # kind "choices": cards from concept.variants
    python3 design_record.py stage model working --estimate "asi 2 minuty"
    python3 design_record.py gate model ask.json      # kind "approve": show + Continue
    python3 design_record.py show                     # where am I, what was replied, the rules
    python3 design_record.py change model.gap --from 5 --to 5.6 --invalidates preview --by claude --reason "…"
    python3 design_record.py stage drawings done --artifact out/drawings/drawings_A3.pdf --no-commit
    python3 design_record.py commit -m "production: drawings, bom, plan, analysis"
    python3 design_record.py check --strict

  ask.json — {"kind": "questions" | "choices" | "approve", "title": "…", "note": "…",
     "questions": [{"id": "width", "group": "dimensions", "label": "Šířka", "type": "select",
                    "options": [{"value": 1600, "label": "1600 mm", "hint": "…"}], "default": 1600,
                    "unit": "mm", "hint": "…"}],          # types: select | toggle | number | text
     "choices": {"recommended": "b"},                     # cards come from concept.variants
     "show": [{"type": "gallery", "images": ["out/viz_hero.png"]},
              {"type": "image", "path": "out/fea/stress.png", "caption": "…"},
              {"type": "table", "columns": ["…"], "rows": [["…"]]},
              {"type": "file", "path": "out/build_sheet.html", "label": "…"}],
     "next": {"stage": "concept", "estimate": "asi 5 minut"}}   # what the reply starts
  reply.json — {"kind": "questions", "answers": {"width": 1800, "finish": "decide_for_me"}, "note": "…"}
             | {"kind": "choices", "chosen": "b"} | {"kind": "approve", "approved": true, "note": "…"}
             ("via": "app" by default; write "chat" when you record a reply given in the terminal)

  What a reply does: questions → answers recorded (decidedBy user | default | claude for
  decide_for_me — then `answer <id> --by claude --reason …` is yours), stage done, `next` working;
  choices → concept frozen, `next` (default model) working; approve → done + `next` working, or
  `approved: false` + note → the stage is working again (rework). A second reply to a stage
  without an open ask exits 2 and writes nothing.

  Statuses: pending | working | needs_you | done | stale | skipped. One `needs_you` at a time and
  nothing works beside it; several `working` only for drawings, bom, plan, analysis (subagents
  write with --no-commit under the file lock, the main thread runs `commit -m`).

Older commands stay: answers/answer, freeze, next (agent-side gates only: it closes the current
stage as done without a reply), merge, check. Rules mirror the app's schema (Robion
packages/shared/src/design.ts) and references/core/design-record.md. There is deliberately no way
to pass a timestamp.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from contextlib import contextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Iterator

VERSION = "0.28.1"
TOOL = f"design_record.py/{VERSION}"
FILE = "design.json"
LOCK_FILE = "design.json.lock"
IDEA_DIR = "idea"
MAX_BYTES = 512_000

STAGES = [
    "idea",
    "brief",
    "concept",
    "model",
    "preview",
    "drawings",
    "bom",
    "plan",
    "analysis",
    "buildsheet",
]
STATUSES = ["pending", "working", "needs_you", "done", "stale", "skipped"]
DECIDED_BY = ["user", "default", "claude"]
ASK_KINDS = ["questions", "choices", "approve"]
QUESTION_TYPES = ["select", "toggle", "number", "text"]
SHOW_TYPES = ["gallery", "image", "table", "file"]
PARALLEL = {"drawings", "bom", "plan", "analysis"}
DECIDE_FOR_ME = "decide_for_me"
ID_RE = re.compile(r"^[a-z][a-z0-9_]*$")
ID_MAX = 40
LABEL_MAX = 200
TEXT_MAX = 4000
TABLE_ROWS_MAX = 64
COMMIT_ON = {"done", "skipped"}
EXIT_NO_ASK = 2

NUDGE = 'Robion: the reply to the "{stage}" gate is recorded in design.json (python3 design_record.py show). Continue.'

RULES = [
    "A gate = one command: `gate <stage> ask.json` (questions | choices | approve). Never ask in the chat; not replying is waiting.",
    'The reply arrives as one prompt line ("Robion: the reply to …"): run `show`, then continue from the stage it started.',
    "Before producing a stage: `stage <id> working --estimate …`; before a stop for the maker: `gate`. `done` is written by the reply, or by you for agent-side stages.",
    "A change after a gate: `change <what> --from … --to … --invalidates … --by user|claude` first, then regenerate the stale stages.",
    "drawings, bom, plan and analysis may work in parallel (subagents write with --no-commit); the main thread runs `commit -m` once.",
    "Only this script writes design.json; `check --strict` before every gate; `--help` is the reference.",
]


class RecordError(Exception):
    """A rule the record would break; the message says what to do instead."""


class NoOpenAsk(RecordError):
    """`reply` on a stage that has no ask: nothing is written, exit code 2."""


# ---------------------------------------------------------------- helpers


def now() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def check_id(value: str, what: str) -> str:
    if not ID_RE.match(value) or len(value) > ID_MAX:
        raise RecordError(
            f"{what} '{value}' must be lowercase snake_case, [a-z][a-z0-9_]*, at most {ID_MAX} characters"
        )
    return value


def check_stage(value: str) -> str:
    if value not in STAGES:
        raise RecordError(f"unknown stage '{value}'; the ten stages are: {', '.join(STAGES)}")
    return value


def check_path(value: str, what: str, warn_missing: bool = True) -> str:
    if value.startswith("/") or any(seg == ".." for seg in value.split("/")):
        raise RecordError(f"{what} '{value}' must be project-relative (no leading '/', no '..')")
    if warn_missing and not Path(value).exists():
        print(f"warning: {what} '{value}' does not exist (yet)", file=sys.stderr)
    return value


def check_text(value: Any, what: str, limit: int = LABEL_MAX) -> str:
    if not isinstance(value, str) or not value.strip():
        raise RecordError(f"{what} must be a non-empty string")
    if len(value) > limit:
        raise RecordError(f"{what} is {len(value)} characters; keep it under {limit}")
    return value


def parse_value(raw: str | None) -> Any:
    """`--value 1800` stays a number, `true`/`false` a boolean, `a,b` a list, else text."""
    if raw is None:
        return None
    text = raw.strip()
    if text.lower() in ("true", "false"):
        return text.lower() == "true"
    try:
        if re.fullmatch(r"-?\d+", text):
            return int(text)
        if re.fullmatch(r"-?\d+\.\d+", text):
            return float(text)
    except ValueError:
        pass
    if "," in text and " " not in text.strip(","):
        return [parse_value(part) for part in text.split(",") if part.strip()]
    return text


def prune(value: Any) -> Any:
    """No `null` in the record: an unknown field is left out."""
    if isinstance(value, dict):
        return {k: prune(v) for k, v in value.items() if v is not None}
    if isinstance(value, list):
        return [prune(v) for v in value]
    return value


def read_json(file: str, what: str) -> Any:
    path = Path(file)
    if not path.exists():
        raise RecordError(f"{what} '{file}' does not exist")
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        raise RecordError(f"{what} '{file}' is not valid JSON: {error}") from error


def load(path: Path) -> dict[str, Any]:
    if not path.exists():
        raise RecordError(f"{path} does not exist — run `init` first")
    try:
        record = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        raise RecordError(f"{path} is not valid JSON: {error}") from error
    if not isinstance(record, dict):
        raise RecordError(f"{path} must hold a JSON object")
    return record


def save(path: Path, record: dict[str, Any]) -> None:
    record["updated"] = now()
    record["tool"] = TOOL
    validate(record)
    text = json.dumps(prune(record), ensure_ascii=False, indent=2) + "\n"
    if len(text.encode("utf-8")) > MAX_BYTES:
        raise RecordError(f"the record would exceed {MAX_BYTES} bytes — it is a summary, not a log")
    # Atomic: Robion watches the directory and reads a whole file or nothing.
    fd, tmp = tempfile.mkstemp(prefix=".design.", suffix=".json", dir=str(path.parent))
    with os.fdopen(fd, "w", encoding="utf-8") as handle:
        handle.write(text)
    os.replace(tmp, path)


@contextmanager
def locked(path: Path) -> Iterator[None]:
    """One writer at a time: parallel subagents serialize on a sidecar lock file."""
    try:
        import fcntl
    except ImportError:  # not POSIX: no lock, single writer assumed
        yield
        return
    lock_path = path.parent / LOCK_FILE
    with open(lock_path, "a+", encoding="utf-8") as handle:
        fcntl.flock(handle, fcntl.LOCK_EX)
        try:
            yield
        finally:
            fcntl.flock(handle, fcntl.LOCK_UN)


def stage_of(record: dict[str, Any], stage_id: str) -> dict[str, Any]:
    for stage in record.setdefault("stages", []):
        if stage.get("id") == stage_id:
            return stage
    raise RecordError(f"stage '{stage_id}' is not in the record — `check` and repair it")


def current_stages(record: dict[str, Any]) -> list[dict[str, Any]]:
    return [stage for stage in record.get("stages", []) if stage.get("status") in ("working", "needs_you")]


def current_stage(record: dict[str, Any]) -> dict[str, Any] | None:
    """The stage that waits for the maker, else the first stage being worked on."""
    current = current_stages(record)
    for stage in current:
        if stage.get("status") == "needs_you":
            return stage
    return current[0] if current else None


def following_stage(record: dict[str, Any], stage_id: str) -> str | None:
    """The next stage in order that is still ahead (pending or stale)."""
    index = STAGES.index(stage_id)
    for candidate in STAGES[index + 1 :]:
        try:
            status = stage_of(record, candidate).get("status")
        except RecordError:
            continue
        if status in ("pending", "stale"):
            return candidate
    return None


def question_of(record: dict[str, Any], question_id: str) -> dict[str, Any] | None:
    for question in record.setdefault("questions", []):
        if question.get("id") == question_id:
            return question
    return None


def variant_of(record: dict[str, Any], variant_id: str) -> dict[str, Any] | None:
    for variant in record.setdefault("concept", {}).setdefault("variants", []):
        if variant.get("id") == variant_id:
            return variant
    return None


def variant_ids(record: dict[str, Any]) -> list[str]:
    return [str(v.get("id", "")) for v in (record.get("concept") or {}).get("variants", [])]


# ---------------------------------------------------------------- validation


def validate_question_shape(question: dict[str, Any], where: str) -> None:
    qid = check_id(str(question.get("id", "")), f"{where} question id")
    check_text(question.get("label"), f"question '{qid}' label")
    qtype = question.get("type")
    if qtype is not None and qtype not in QUESTION_TYPES:
        raise RecordError(f"question '{qid}': type must be one of {', '.join(QUESTION_TYPES)}")
    options = question.get("options")
    if options is not None:
        if not isinstance(options, list) or not options:
            raise RecordError(f"question '{qid}': options must be a non-empty list")
        values: list[Any] = []
        for option in options:
            if not isinstance(option, dict) or "value" not in option:
                raise RecordError(f"question '{qid}': every option needs a value and a label")
            check_text(option.get("label"), f"question '{qid}' option label")
            if option["value"] == DECIDE_FOR_ME:
                raise RecordError(
                    f"question '{qid}': '{DECIDE_FOR_ME}' is reserved — Robion adds it as the first choice itself"
                )
            values.append(option["value"])
        if len(set(map(str, values))) != len(values):
            raise RecordError(f"question '{qid}': option values must be unique")
        if qtype == "select" and "default" not in question:
            raise RecordError(f"question '{qid}': a select needs a default (the recommended option)")
        if "default" in question and str(question["default"]) not in set(map(str, values)):
            raise RecordError(f"question '{qid}': default {question['default']!r} is not one of the options")
    elif qtype == "select":
        raise RecordError(f"question '{qid}': a select needs options")
    if qtype == "toggle" and "default" in question and not isinstance(question["default"], bool):
        raise RecordError(f"question '{qid}': a toggle default must be true or false")
    if qtype == "number" and "default" in question and not isinstance(question["default"], (int, float)):
        raise RecordError(f"question '{qid}': a number default must be a number")


def validate_show(show: Any, where: str) -> None:
    if not isinstance(show, list):
        raise RecordError(f"{where}: show must be a list")
    for item in show:
        kind = item.get("type") if isinstance(item, dict) else None
        if kind not in SHOW_TYPES:
            raise RecordError(f"{where}: show type must be one of {', '.join(SHOW_TYPES)}")
        if kind == "gallery":
            if "images" not in item and isinstance(item.get("paths"), list):
                item["images"] = item.pop("paths")  # the alias agents reach for; normalized
            images = item.get("images")
            if not isinstance(images, list) or not images:
                raise RecordError(f"{where}: a gallery needs images")
            for image in images:
                check_path(str(image), f"{where} gallery image")
        elif kind in ("image", "file"):
            check_path(str(item.get("path", "")), f"{where} {kind} path")
        elif kind == "table":
            columns, rows = item.get("columns"), item.get("rows")
            if not isinstance(columns, list) or not columns or not isinstance(rows, list):
                raise RecordError(f"{where}: a table needs columns and rows")
            if len(rows) > TABLE_ROWS_MAX:
                raise RecordError(f"{where}: a table holds at most {TABLE_ROWS_MAX} rows — point at a file instead")
            for row in rows:
                if not isinstance(row, list) or len(row) != len(columns):
                    raise RecordError(f"{where}: every table row needs {len(columns)} cells")


def validate_ask(record: dict[str, Any], stage: dict[str, Any]) -> None:
    ask = stage.get("ask")
    if ask is None:
        return
    where = f"stage '{stage.get('id')}' ask"
    if stage.get("status") != "needs_you":
        raise RecordError(f"{where}: an ask lives only on a needs_you stage")
    kind = ask.get("kind")
    if kind not in ASK_KINDS:
        raise RecordError(f"{where}: kind must be one of {', '.join(ASK_KINDS)}")
    if ask.get("title") is not None:
        check_text(ask["title"], f"{where} title")
    if kind == "questions":
        questions = ask.get("questions")
        if not isinstance(questions, list) or not questions:
            raise RecordError(f"{where}: kind questions needs at least one question")
        seen: set[str] = set()
        for question in questions:
            validate_question_shape(question, where)
            if question["id"] in seen:
                raise RecordError(f"{where}: question id '{question['id']}' repeats")
            seen.add(question["id"])
    elif kind == "choices":
        ids = variant_ids(record)
        if not ids:
            raise RecordError(f"{where}: kind choices needs concept.variants — run `concept variants.json` first")
        recommended = (ask.get("choices") or {}).get("recommended")
        if recommended is not None and recommended not in ids:
            raise RecordError(f"{where}: recommended '{recommended}' names no variant")
    if ask.get("show") is not None:
        validate_show(ask["show"], where)
    nxt = ask.get("next")
    if nxt is not None:
        check_stage(str(nxt.get("stage", "")))
        if nxt.get("estimate") is not None:
            check_text(nxt["estimate"], f"{where} next.estimate")


def validate(record: dict[str, Any], strict: bool = False) -> list[str]:
    """Raise on a rule the app rejects; return warnings for the rest."""
    warnings: list[str] = []
    if record.get("version") != 1:
        raise RecordError("version must be 1")
    product = record.get("product") or {}
    if not product.get("name"):
        raise RecordError("product.name is required")
    if not (record.get("idea") or {}).get("text"):
        raise RecordError("idea.text is required")
    stages = record.get("stages", [])
    ids = [stage.get("id") for stage in stages]
    for stage_id in ids:
        check_stage(str(stage_id))
    if len(set(ids)) != len(ids):
        raise RecordError("stage ids must be unique")
    for stage in stages:
        if stage.get("status") not in STATUSES:
            raise RecordError(f"stage '{stage.get('id')}': status must be one of {', '.join(STATUSES)}")
        if not stage.get("label"):
            raise RecordError(f"stage '{stage.get('id')}': label is required")
        for artifact in stage.get("artifacts") or []:
            check_path(str(artifact), f"stage '{stage.get('id')}' artifact", warn_missing=strict)
        validate_ask(record, stage)
    waiting = [stage["id"] for stage in stages if stage.get("status") == "needs_you"]
    working = [stage["id"] for stage in stages if stage.get("status") == "working"]
    if len(waiting) > 1:
        raise RecordError(f"only one stage may be needs_you at a time, found: {', '.join(waiting)}")
    if waiting and working:
        raise RecordError(
            f"stage '{waiting[0]}' waits for the maker while {', '.join(working)} is working — "
            "close the work (done/skipped) before a gate, or reply to the gate before working"
        )
    if len(working) > 1 and not all(stage_id in PARALLEL for stage_id in working):
        raise RecordError(
            f"only {', '.join(sorted(PARALLEL))} may work in parallel, found: {', '.join(working)} — "
            "record the outcome of the earlier one first (done/skipped) or use `next <id>`"
        )
    missing = [stage_id for stage_id in STAGES if stage_id not in ids]
    if missing:
        warnings.append(f"stages missing: {', '.join(missing)}")
    seen: set[str] = set()
    for question in record.get("questions", []):
        qid = check_id(str(question.get("id", "")), "question id")
        if qid in seen:
            raise RecordError(f"question id '{qid}' is not unique")
        seen.add(qid)
        if not question.get("label"):
            raise RecordError(f"question '{qid}': label is required")
        by = question.get("decidedBy")
        if by is not None and by not in DECIDED_BY:
            raise RecordError(f"question '{qid}': decidedBy must be one of {', '.join(DECIDED_BY)}")
        if by == "claude" and question.get("answer") is not None and not question.get("reason"):
            raise RecordError(f"question '{qid}': an answer decided by claude needs a reason")
        if strict and by == "claude" and question.get("answer") is None:
            warnings.append(f"question '{qid}' is delegated to you and not decided yet (answer <id> --by claude --reason …)")
    concept = record.get("concept") or {}
    vids = [check_id(str(v.get("id", "")), "variant id") for v in concept.get("variants", [])]
    if len(set(vids)) != len(vids):
        raise RecordError("variant ids must be unique")
    for field in ("recommended", "chosen"):
        value = concept.get(field)
        if value is not None and value not in vids:
            raise RecordError(f"concept.{field} '{value}' names no variant")
    for variant in concept.get("variants", []):
        if variant.get("image"):
            check_path(str(variant["image"]), f"variant '{variant.get('id')}' image", warn_missing=strict)
    for change in record.get("changes", []):
        for stage_id in change.get("invalidates") or []:
            check_stage(str(stage_id))
    if strict:
        stamps = [stage.get("updatedAt") for stage in stages if stage.get("updatedAt")]
        stamps += [change.get("at") for change in record.get("changes", []) if change.get("at")]
        for stamp in stamps:
            if not re.fullmatch(r"\d{4}-\d\d-\d\dT\d\d:\d\d:\d\dZ", str(stamp)):
                warnings.append(f"timestamp '{stamp}' is not the script's ISO format — was it written by hand?")
        for stage in stages:
            if stage.get("status") == "working" and not stage.get("startedAt"):
                warnings.append(f"stage '{stage['id']}' is working without startedAt")
    return warnings


# ---------------------------------------------------------------- git


def git(args: list[str], check: bool = True) -> subprocess.CompletedProcess[str]:
    return subprocess.run(["git", *args], capture_output=True, text=True, check=check)


def commit(message: str, no_commit: bool) -> None:
    """`git add -A` (minus the lock file) + commit; silently skipped without git or when nothing changed."""
    if no_commit:
        return
    try:
        if git(["rev-parse", "--is-inside-work-tree"], check=False).returncode != 0:
            git(["init", "--initial-branch=main"])
        git(["add", "-A"])
        # The lock file is scratch: never part of a gate commit (git reset ignores an absent path).
        git(["reset", "-q", "--", LOCK_FILE], check=False)
        staged = git(["diff", "--cached", "--quiet"], check=False)
        if staged.returncode == 0:
            return
        git(["-c", "user.name=design_record", "-c", "user.email=design@robion.app", "commit", "-q", "-m", message])
    except (OSError, subprocess.CalledProcessError) as error:
        print(f"warning: git commit skipped: {error}", file=sys.stderr)


# ---------------------------------------------------------------- record moves


def set_status(
    record: dict[str, Any],
    stage_id: str,
    status: str,
    *,
    estimate: str | None = None,
    note: str | None = None,
    artifacts: list[str] | None = None,
    only_if_current: bool = False,
) -> None:
    stage = stage_of(record, check_stage(stage_id))
    if only_if_current and stage.get("status") not in ("working", "needs_you"):
        return
    others = [s for s in current_stages(record) if s["id"] != stage_id]
    if status == "needs_you" and others:
        names = ", ".join(f"{s['id']} ({s['status']})" for s in others)
        raise RecordError(
            f"cannot wait on '{stage_id}' while {names} — close the work first (`stage <id> done|skipped`) "
            "or reply to the open gate"
        )
    if status == "working":
        waiting = [s for s in others if s["status"] == "needs_you"]
        if waiting:
            raise RecordError(
                f"stage '{waiting[0]['id']}' waits for the maker — reply to its gate first "
                f"(`reply {waiting[0]['id']} reply.json`) or close it (`stage {waiting[0]['id']} done|skipped`)"
            )
        working = [s["id"] for s in others if s["status"] == "working"]
        if working and not (stage_id in PARALLEL and all(w in PARALLEL for w in working)):
            raise RecordError(
                f"stage '{working[0]}' is still working — record its outcome first "
                f"(`stage {working[0]} done|skipped`) or use `next {stage_id}`; "
                f"only {', '.join(sorted(PARALLEL))} run side by side"
            )
    stamp = now()
    stage["status"] = status
    stage["updatedAt"] = stamp
    if status == "working":
        stage["startedAt"] = stamp
        if estimate:
            stage["estimate"] = estimate
    if status != "needs_you":
        stage.pop("ask", None)
    if note:
        stage["note"] = note
    if artifacts:
        existing = list(stage.get("artifacts") or [])
        for artifact in artifacts:
            check_path(artifact, "artifact")
            if artifact not in existing:
                existing.append(artifact)
        stage["artifacts"] = existing


def upsert_question(record: dict[str, Any], item: dict[str, Any], *, require_decision: bool) -> dict[str, Any]:
    qid = check_id(str(item.get("id", "")), "question id")
    question = question_of(record, qid)
    if question is None:
        question = {"id": qid}
        record["questions"].append(question)
    for key in ("group", "label", "type", "options", "default", "hint", "unit", "answer", "decidedBy", "reason"):
        if item.get(key) is not None:
            question[key] = item[key]
    if not question.get("label"):
        raise RecordError(f"question '{qid}' needs a label")
    if require_decision:
        if question.get("decidedBy") is None:
            raise RecordError(f"question '{qid}' needs decidedBy (user | default | claude)")
        question["answeredAt"] = now()
    return question


def apply_answer(record: dict[str, Any], item: dict[str, Any]) -> None:
    upsert_question(record, item, require_decision=True)


def store_attachments(paths: list[str]) -> list[str]:
    """Photos from Robion's uploads are copied into the committed idea/ directory."""
    stored: list[str] = []
    for raw in paths:
        check_path(raw, "attachment", warn_missing=False)
        source = Path(raw)
        if raw.startswith(f"{IDEA_DIR}/") or not source.is_file():
            if not source.exists():
                print(f"warning: attachment '{raw}' does not exist (yet)", file=sys.stderr)
            stored.append(raw)
            continue
        Path(IDEA_DIR).mkdir(exist_ok=True)
        target = Path(IDEA_DIR) / source.name
        counter = 1
        while target.exists() and target.stat().st_size != source.stat().st_size:
            target = Path(IDEA_DIR) / f"{source.stem}-{counter}{source.suffix}"
            counter += 1
        if not target.exists():
            shutil.copy2(source, target)
        stored.append(target.as_posix())
    return stored


# ---------------------------------------------------------------- commands


def cmd_init(args: argparse.Namespace) -> None:
    path = Path(FILE)
    if path.exists() and not args.force:
        raise RecordError(f"{FILE} already exists — `check` it, or pass --force to start over")
    labels: dict[str, str] = {}
    for item in args.label or []:
        key, sep, label = item.partition("=")
        if not sep:
            raise RecordError(f"--label expects STAGE=LABEL, got '{item}'")
        labels[check_stage(key)] = label
    stamp = now()
    record: dict[str, Any] = {
        "version": 1,
        "product": prune({"name": args.name, "slug": args.slug, "language": args.language}),
        "idea": {"text": args.idea, "attachments": store_attachments(args.attachment or [])},
        "spec": prune(
            {
                "summary": args.summary,
                "verticals": [v for v in (args.verticals or "").split(",") if v],
                "stack": args.stack,
                "open": args.open or [],
            }
        ),
        "questions": [],
        "concept": {"variants": []},
        "stages": [
            {
                "id": stage_id,
                "label": labels.get(stage_id, stage_id),
                "status": "done" if stage_id == "idea" else "working" if stage_id == "brief" else "pending",
                **({"updatedAt": stamp} if stage_id in ("idea", "brief") else {}),
                **({"startedAt": stamp} if stage_id == "brief" else {}),
            }
            for stage_id in STAGES
        ],
        "changes": [],
    }
    with locked(path):
        save(path, record)
        commit("idea: recorded", args.no_commit)
    print(f"{FILE} written: idea done, brief working — compose the question round, then `gate brief ask.json`")


def cmd_attach(args: argparse.Namespace) -> None:
    path = Path(FILE)
    with locked(path):
        record = load(path)
        attachments = list((record.get("idea") or {}).get("attachments") or [])
        for stored in store_attachments(args.path):
            if stored not in attachments:
                attachments.append(stored)
        record.setdefault("idea", {})["attachments"] = attachments
        save(path, record)
        commit("idea: attachment", args.no_commit)
    print(f"{len(attachments)} attachment(s) on the idea")


def cmd_answers(args: argparse.Namespace) -> None:
    path = Path(FILE)
    items = read_json(args.file, "answers file")
    if not isinstance(items, list):
        raise RecordError("the answers file must hold a JSON array of questions")
    with locked(path):
        record = load(path)
        for item in items:
            apply_answer(record, item)
        save(path, record)
    print(f"{len(items)} answer(s) recorded")


def cmd_answer(args: argparse.Namespace) -> None:
    path = Path(FILE)
    if args.by == "claude" and not args.reason:
        raise RecordError("an answer decided by claude needs --reason")
    with locked(path):
        record = load(path)
        apply_answer(
            record,
            {
                "id": args.id,
                "group": args.group,
                "label": args.label,
                "answer": parse_value(args.value),
                "default": parse_value(args.default),
                "decidedBy": args.by,
                "reason": args.reason,
            },
        )
        save(path, record)
    print(f"answer '{args.id}' recorded ({args.by})")


def cmd_concept(args: argparse.Namespace) -> None:
    path = Path(FILE)
    variants = read_json(args.file, "variants file")
    if not isinstance(variants, list) or not variants:
        raise RecordError("the variants file must hold a non-empty JSON array")
    for variant in variants:
        check_id(str(variant.get("id", "")), "variant id")
        if not variant.get("title"):
            raise RecordError(f"variant '{variant.get('id')}' needs a title")
    with locked(path):
        record = load(path)
        concept = record.setdefault("concept", {})
        concept["variants"] = variants
        if args.recommended:
            concept["recommended"] = args.recommended
        concept.pop("chosen", None)
        concept.pop("frozenAt", None)
        save(path, record)
    print(f"{len(variants)} variant(s) recorded — now `gate concept ask.json` with kind choices")


def cmd_freeze(args: argparse.Namespace) -> None:
    path = Path(FILE)
    with locked(path):
        record = load(path)
        if variant_of(record, args.variant) is None:
            raise RecordError(f"variant '{args.variant}' is not in the concept — record the variants first")
        concept = record["concept"]
        concept["chosen"] = args.variant
        concept["frozenAt"] = now()
        set_status(record, "brief", "done", only_if_current=True)
        set_status(record, "concept", "done")
        save(path, record)
        commit(f"concept: frozen ({args.variant})", args.no_commit)
    print(f"concept frozen on '{args.variant}'")


def cmd_stage(args: argparse.Namespace) -> None:
    path = Path(FILE)
    with locked(path):
        record = load(path)
        set_status(record, args.id, args.status, estimate=args.estimate, note=args.note, artifacts=args.artifact)
        save(path, record)
        if args.status in COMMIT_ON:
            commit(f"{args.id}: {args.status}" + (f" — {args.note}" if args.note else ""), args.no_commit)
    print(f"stage '{args.id}' → {args.status}")


def cmd_next(args: argparse.Namespace) -> None:
    path = Path(FILE)
    with locked(path):
        record = load(path)
        current = current_stages(record)
        if len(current) > 1:
            raise RecordError(
                f"several stages are working ({', '.join(s['id'] for s in current)}) — close each with `stage <id> done`"
            )
        closing = current[0] if current and current[0]["id"] != args.id else None
        if closing is not None and closing.get("status") == "needs_you":
            raise RecordError(
                f"stage '{closing['id']}' waits for the maker — `next` cannot answer for them; "
                f"reply to the gate (`reply {closing['id']} reply.json`) or close it explicitly"
            )
        commit_message = None
        if closing is not None:
            # the artifacts belong to the stage being closed — what it produced
            set_status(record, closing["id"], "done", artifacts=args.artifact)
            commit_message = f"{closing['id']}: done"
        set_status(record, args.id, "working", estimate=args.estimate, note=args.note)
        save(path, record)
        if commit_message:
            commit(commit_message, args.no_commit)
    print(f"stage '{args.id}' → working" + (f" ({closing['id']} done)" if closing else ""))


def cmd_gate(args: argparse.Namespace) -> None:
    path = Path(FILE)
    spec = read_json(args.file, "ask file")
    if not isinstance(spec, dict):
        raise RecordError("the ask file must hold a JSON object")
    kind = spec.get("kind")
    if kind not in ASK_KINDS:
        raise RecordError(f"ask.kind must be one of {', '.join(ASK_KINDS)}")
    stage_id = check_stage(args.stage)
    with locked(path):
        record = load(path)
        stage = stage_of(record, stage_id)
        for other in record.get("stages", []):
            if other.get("ask") is not None:
                raise RecordError(
                    f"stage '{other['id']}' already has an open ask — one gate at a time; "
                    f"wait for the reply, or `reply {other['id']} reply.json` yourself when it came in the chat"
                )
        ask: dict[str, Any] = {"kind": kind, "askedAt": now()}
        for key in ("title", "note"):
            if spec.get(key) is not None:
                ask[key] = spec[key]
        if kind == "questions":
            questions = spec.get("questions")
            if not isinstance(questions, list) or not questions:
                raise RecordError("kind questions needs a non-empty questions list")
            normalized: list[dict[str, Any]] = []
            for raw in questions:
                if not isinstance(raw, dict):
                    raise RecordError("every question must be an object")
                question = dict(raw)
                if question.get("type") is None:
                    question["type"] = "select" if question.get("options") else "text"
                validate_question_shape(question, f"stage '{stage_id}' ask")
                normalized.append(question)
                open_question = {k: v for k, v in question.items() if k in ("id", "group", "label", "type", "options", "default", "hint", "unit")}
                upsert_question(record, open_question, require_decision=False)
            ask["questions"] = normalized
        elif kind == "choices":
            choices = dict(spec.get("choices") or {})
            recommended = choices.get("recommended", (record.get("concept") or {}).get("recommended"))
            if recommended is not None:
                if recommended not in variant_ids(record):
                    raise RecordError(f"recommended '{recommended}' names no variant")
                record.setdefault("concept", {})["recommended"] = recommended
                choices["recommended"] = recommended
            ask["choices"] = choices
        if spec.get("show") is not None:
            ask["show"] = spec["show"]
        nxt = spec.get("next")
        if nxt is None and kind == "choices":
            nxt = {"stage": "model"}
        if nxt is None and kind == "approve":
            following = following_stage(record, stage_id)
            if following:
                nxt = {"stage": following}
        if nxt is not None:
            if not isinstance(nxt, dict):
                raise RecordError("ask.next must be an object {stage, estimate}")
            check_stage(str(nxt.get("stage", "")))
            ask["next"] = prune({"stage": nxt["stage"], "estimate": nxt.get("estimate")})
        set_status(record, stage_id, "needs_you")
        stage["ask"] = ask
        save(path, record)
        commit(f"{stage_id}: asked ({kind})", args.no_commit)
    detail = f"{len(ask.get('questions', []))} questions" if kind == "questions" else kind
    print(f"stage '{stage_id}' → needs_you ({detail}) — the design panel shows it; wait for the reply")


def coerce_answer(question: dict[str, Any], value: Any) -> Any:
    """A reply value in the question's type; labels of options are accepted for replies from the chat."""
    qid = question["id"]
    qtype = question.get("type", "text")
    if value == DECIDE_FOR_ME:
        return value
    options = question.get("options")
    if options:
        for option in options:
            if value == option["value"] or str(value) == str(option["value"]) or value == option.get("label"):
                return option["value"]
        raise RecordError(f"question '{qid}': {value!r} is not one of the options")
    if qtype == "toggle":
        if isinstance(value, bool):
            return value
        if str(value).lower() in ("true", "false", "yes", "no"):
            return str(value).lower() in ("true", "yes")
        raise RecordError(f"question '{qid}': a toggle takes true or false")
    if qtype == "number":
        if isinstance(value, bool) or not isinstance(value, (int, float)):
            parsed = parse_value(str(value))
            if isinstance(parsed, bool) or not isinstance(parsed, (int, float)):
                raise RecordError(f"question '{qid}': a number is expected, got {value!r}")
            return parsed
        return value
    if isinstance(value, (dict, list)):
        raise RecordError(f"question '{qid}': a text answer must be a string")
    text = str(value)
    if len(text) > TEXT_MAX:
        raise RecordError(f"question '{qid}': the answer is longer than {TEXT_MAX} characters")
    return text


def cmd_reply(args: argparse.Namespace) -> None:
    path = Path(FILE)
    body = read_json(args.file, "reply file")
    if not isinstance(body, dict):
        raise RecordError("the reply file must hold a JSON object")
    stage_id = check_stage(args.stage)
    with locked(path):
        record = load(path)
        stage = stage_of(record, stage_id)
        ask = stage.get("ask")
        if ask is None:
            last = (stage.get("reply") or {}).get("at")
            raise NoOpenAsk(f"no open ask on '{stage_id}'" + (f" (last reply {last})" if last else ""))
        kind = body.get("kind", ask["kind"])
        if kind != ask["kind"]:
            raise RecordError(f"the open ask on '{stage_id}' is '{ask['kind']}', the reply says '{kind}'")
        via = body.get("via", "app")
        if via not in ("app", "chat"):
            raise RecordError("via must be app or chat")
        note = body.get("note")
        if note is not None and (not isinstance(note, str) or len(note) > TEXT_MAX):
            raise RecordError(f"note must be a string under {TEXT_MAX} characters")
        reply: dict[str, Any] = {"kind": kind, "at": now(), "askedAt": ask.get("askedAt"), "via": via, "note": note}
        nxt = ask.get("next") or {}
        result: dict[str, Any] = {"stage": stage_id, "kind": kind}
        if kind == "questions":
            raw_answers = body.get("answers")
            if isinstance(raw_answers, list):
                raw_answers = {item.get("id"): item.get("value") for item in raw_answers if isinstance(item, dict)}
            if not isinstance(raw_answers, dict):
                raise RecordError("a questions reply needs an answers object {id: value}")
            asked = {q["id"]: q for q in ask.get("questions", [])}
            unknown = [qid for qid in raw_answers if qid not in asked]
            if unknown:
                raise RecordError(f"answers name questions that were not asked: {', '.join(map(str, unknown))}")
            decided: dict[str, list[str]] = {"user": [], "default": [], "claude": []}
            recorded: dict[str, Any] = {}
            for qid, question in asked.items():
                if qid in raw_answers:
                    value = coerce_answer(question, raw_answers[qid])
                elif "default" in question:
                    value = question["default"]
                elif question.get("type") == "toggle":
                    value = False
                elif question.get("type", "text") == "text":
                    value = ""  # left blank: nothing to add
                else:
                    raise RecordError(f"question '{qid}' has no answer and no default")
                if value == DECIDE_FOR_ME:
                    by = "claude"
                elif qid in raw_answers and str(value) != str(question.get("default")):
                    by = "user"
                else:
                    by = "default"
                decided[by].append(qid)
                recorded[qid] = value
                item = {"id": qid, "decidedBy": by, "answer": None if by == "claude" else value}
                if by == "claude":
                    question_of(record, qid) and question_of(record, qid).pop("answer", None)  # type: ignore[union-attr]
                    question_of(record, qid) and question_of(record, qid).pop("reason", None)  # type: ignore[union-attr]
                upsert_question(record, item, require_decision=True)
            reply["answers"] = recorded
            result["decided"] = {by: ids for by, ids in decided.items() if ids}
            summary = ", ".join(f"{len(ids)} {by}" for by, ids in decided.items() if ids)
            message = f"{stage_id}: answered ({summary})"
            stage.pop("ask", None)
            if nxt.get("stage"):
                set_status(record, stage_id, "done")
                set_status(record, nxt["stage"], "working", estimate=nxt.get("estimate"))
                result["next"] = nxt["stage"]
            else:
                set_status(record, stage_id, "working")
        elif kind == "choices":
            chosen = body.get("chosen")
            if chosen not in variant_ids(record):
                raise RecordError(f"chosen '{chosen}' names no variant ({', '.join(variant_ids(record)) or 'none recorded'})")
            concept = record.setdefault("concept", {})
            concept["chosen"] = chosen
            concept["frozenAt"] = now()
            reply["chosen"] = chosen
            message = f"{stage_id}: frozen ({chosen})"
            stage.pop("ask", None)
            set_status(record, "brief", "done", only_if_current=True)
            set_status(record, stage_id, "done")
            next_stage = nxt.get("stage") or "model"
            set_status(record, next_stage, "working", estimate=nxt.get("estimate"))
            result["next"] = next_stage
        else:  # approve
            approved = body.get("approved")
            if not isinstance(approved, bool):
                raise RecordError("an approve reply needs approved: true or false")
            reply["approved"] = approved
            stage.pop("ask", None)
            if approved:
                set_status(record, stage_id, "done")
                message = f"{stage_id}: approved"
                if nxt.get("stage"):
                    set_status(record, nxt["stage"], "working", estimate=nxt.get("estimate"))
                    result["next"] = nxt["stage"]
            else:
                if not note:
                    raise RecordError("approved: false needs a note saying what to change")
                set_status(record, stage_id, "working", note=note)
                message = f"{stage_id}: rework requested"
        stage["reply"] = prune(reply)
        save(path, record)
        commit(message, args.no_commit)
    result["status"] = stage_of(record, stage_id)["status"]
    if args.json:
        print(json.dumps(result, ensure_ascii=False))
    else:
        print(message + (f" — {result['next']} working" if result.get("next") else ""))


def cmd_change(args: argparse.Namespace) -> None:
    path = Path(FILE)
    what = args.what
    invalidates = [check_stage(s) for s in (args.invalidates or "").split(",") if s]
    head, _, tail = what.partition(".")
    if head == "questions" and tail and not args.by:
        raise RecordError("changing a recorded answer needs --by user|claude (who decided the new value)")
    if args.by == "claude" and not args.reason:
        raise RecordError("a change decided by claude needs --reason")
    with locked(path):
        record = load(path)
        entry = prune(
            {
                "at": now(),
                "what": what,
                "from": parse_value(args.from_value),
                "to": parse_value(args.to),
                "invalidates": invalidates,
                "note": args.note,
                "cost": args.cost,
                "by": args.by,
            }
        )
        record.setdefault("changes", []).append(entry)
        if head == "questions" and tail:
            question = question_of(record, tail)
            if question is None:
                raise RecordError(f"question '{tail}' is not in the record")
            question["answer"] = parse_value(args.to)
            question["decidedBy"] = args.by
            if args.reason:
                question["reason"] = args.reason
            question["answeredAt"] = now()
        elif what == "concept.chosen":
            if variant_of(record, str(args.to)) is None:
                raise RecordError(f"variant '{args.to}' is not in the concept")
            record["concept"]["chosen"] = args.to
        for stage_id in invalidates:
            stage = stage_of(record, stage_id)
            if stage.get("status") != "done":
                print(f"warning: stage '{stage_id}' is {stage.get('status')}, not done — marked stale anyway", file=sys.stderr)
            stage["status"] = "stale"
            stage["updatedAt"] = now()
            stage.pop("ask", None)
        for fact in args.fact or []:
            key, _, value = fact.partition("=")
            chosen = record.get("concept", {}).get("chosen")
            variant = variant_of(record, chosen) if chosen else None
            if variant is None:
                raise RecordError("--fact needs a chosen variant")
            variant.setdefault("facts", {})[key] = parse_value(value)
        restarted = None
        if invalidates and not current_stages(record):
            for stage_id in STAGES:
                if stage_of(record, stage_id).get("status") == "stale":
                    set_status(record, stage_id, "working", note=f"regenerating after change: {what}")
                    restarted = stage_id
                    break
        save(path, record)
        commit(f"change: {what} {args.from_value or ''} -> {args.to or ''}".strip(), args.no_commit)
    print(
        f"change recorded: {what}"
        + (f", stale: {', '.join(invalidates)}" if invalidates else "")
        + (f", {restarted} working" if restarted else "")
    )


def deep_merge(base: Any, patch: Any) -> Any:
    if isinstance(base, dict) and isinstance(patch, dict):
        for key, value in patch.items():
            base[key] = deep_merge(base.get(key), value) if key in base else value
        return base
    return patch


def cmd_merge(args: argparse.Namespace) -> None:
    path = Path(FILE)
    patch = read_json(args.file, "patch file")
    if not isinstance(patch, dict):
        raise RecordError("the patch must be a JSON object")
    for key in ("version", "tool", "updated"):
        patch.pop(key, None)
    with locked(path):
        record = load(path)
        deep_merge(record, patch)
        save(path, record)
    print("patch merged")


def cmd_commit(args: argparse.Namespace) -> None:
    path = Path(FILE)
    with locked(path):
        record = load(path)
        validate(record)
        commit(args.message, no_commit=False)
    print("committed")


def summary(record: dict[str, Any]) -> dict[str, Any]:
    current = current_stages(record)
    stale = [s["id"] for s in record.get("stages", []) if s.get("status") == "stale"]
    delegated = [
        q["id"] for q in record.get("questions", []) if q.get("decidedBy") == "claude" and q.get("answer") is None
    ]
    replies = [(s["id"], s["reply"]) for s in record.get("stages", []) if s.get("reply")]
    replies.sort(key=lambda item: item[1].get("at", ""))
    last_reply = {"stage": replies[-1][0], **replies[-1][1]} if replies else None
    ask_stage = next((s for s in record.get("stages", []) if s.get("ask")), None)
    timeline = []
    for s in record.get("stages", []):
        started, updated = s.get("startedAt"), s.get("updatedAt")
        minutes = None
        if started and updated and s.get("status") not in ("working", "pending"):
            try:
                a = datetime.strptime(started, "%Y-%m-%dT%H:%M:%SZ")
                b = datetime.strptime(updated, "%Y-%m-%dT%H:%M:%SZ")
                minutes = max(0, round((b - a).total_seconds() / 60))
            except ValueError:
                minutes = None
        timeline.append(prune({"id": s["id"], "status": s.get("status"), "startedAt": started,
                               "finishedAt": updated if s.get("status") in ("done", "skipped", "stale") else None,
                               "minutes": minutes, "estimate": s.get("estimate")}))
    return {
        "timeline": timeline,
        "product": record.get("product"),
        "updated": record.get("updated"),
        "tool": record.get("tool"),
        "current": [
            prune({"id": s["id"], "status": s["status"], "since": s.get("startedAt") if s["status"] == "working" else (s.get("ask") or {}).get("askedAt"), "estimate": s.get("estimate")})
            for s in current
        ],
        "ask": prune({"stage": ask_stage["id"], **ask_stage["ask"]}) if ask_stage else None,
        "lastReply": last_reply,
        "stale": stale,
        "delegated": delegated,
        "changes": len(record.get("changes", [])),
        "lastChange": (record.get("changes") or [None])[-1],
    }


def cmd_show(args: argparse.Namespace) -> None:
    record = load(Path(FILE))
    info = summary(record)
    if args.json:
        print(json.dumps(prune(info), ensure_ascii=False, indent=2))
        return
    product = info["product"] or {}
    print(f"{product.get('name', '?')} ({product.get('language', '?')}) — {FILE} by {info['tool']}, updated {info['updated']}")
    if info["current"]:
        for entry in info["current"]:
            line = f"Current: {entry['id']} {entry['status']}"
            if entry.get("since"):
                line += f" since {entry['since']}"
            if entry.get("estimate"):
                line += f" ({entry['estimate']})"
            print(line)
    else:
        done = all(s.get("status") in ("done", "skipped") for s in record.get("stages", []))
        print("Current: none — " + ("every stage is done" if done else "nothing is working or waiting; start the next stage"))
    ask = info["ask"]
    if ask:
        detail = ""
        if ask["kind"] == "questions":
            detail = f" ({len(ask.get('questions', []))} questions: {', '.join(q['id'] for q in ask.get('questions', []))})"
        elif ask["kind"] == "choices":
            detail = f" (variants {', '.join(variant_ids(record))}; recommended {ask.get('choices', {}).get('recommended', '-')})"
        nxt = ask.get("next")
        print(f"Open ask: {ask['kind']} on {ask['stage']}{detail}" + (f"; next {nxt['stage']}" if nxt else "") + " — waiting for the maker")
    last = info["lastReply"]
    if last:
        line = f"Last reply: {last['stage']} {last['kind']} at {last.get('at')} via {last.get('via', 'app')}"
        if last["kind"] == "questions":
            counts: dict[str, int] = {}
            for qid in last.get("answers", {}):
                question = question_of(record, qid) or {}
                counts[question.get("decidedBy", "?")] = counts.get(question.get("decidedBy", "?"), 0) + 1
            line += " — " + ", ".join(f"{n} {by}" for by, n in counts.items())
        elif last["kind"] == "choices":
            line += f" — chosen {last.get('chosen')}"
        else:
            line += " — approved" if last.get("approved") else " — rework requested"
        if last.get("note"):
            line += f'; note: "{last["note"]}"'
        print(line)
    if info["delegated"]:
        print(f"Delegated to you (decide, then `answer <id> --value … --by claude --reason …`): {', '.join(info['delegated'])}")
    if info["stale"]:
        print(f"Stale: {', '.join(info['stale'])}")
    if info["lastChange"]:
        change = info["lastChange"]
        print(f"Changes: {info['changes']} (last: {change.get('what')} {change.get('from', '')} -> {change.get('to', '')} at {change.get('at')})")
    timed = [t for t in info["timeline"] if t.get("minutes") is not None]
    if timed:
        print("Timeline (stage: minutes from `working` to the last move, estimate):")
        for entry in timed:
            print(f"  {entry['id']:<10} {entry['minutes']:>4} min" + (f"  (estimate {entry['estimate']})" if entry.get("estimate") else ""))
    print("Rules:")
    for index, rule in enumerate(RULES, 1):
        print(f"  {index}. {rule}")


def cmd_check(args: argparse.Namespace) -> None:
    record = load(Path(FILE))
    warnings = validate(record, strict=args.strict)
    current = current_stages(record)
    if args.json:
        print(json.dumps({"ok": not (warnings and args.strict), "warnings": warnings, "current": [s["id"] for s in current]}, ensure_ascii=False))
    else:
        for warning in warnings:
            print(f"warning: {warning}")
        label = ", ".join(f"{s['id']} {s['status']}" for s in current) or "none"
        print(
            f"ok: {len(record.get('stages', []))} stages, current {label}, "
            f"{len(record.get('questions', []))} questions, {len(record.get('changes', []))} changes"
        )
    if warnings and args.strict:
        sys.exit(1)


# ---------------------------------------------------------------- cli


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--no-commit", action="store_true", help="never touch git")
    common = argparse.ArgumentParser(add_help=False)
    common.add_argument("--no-commit", action="store_true", default=argparse.SUPPRESS, help="never touch git")
    sub = parser.add_subparsers(dest="command", required=True)

    p = sub.add_parser("init", parents=[common], help="create the record: idea done, brief working")
    p.add_argument("--name", required=True)
    p.add_argument("--slug")
    p.add_argument("--language")
    p.add_argument("--idea", required=True, help="the user's own words")
    p.add_argument("--summary", help="the spec, in the user's language")
    p.add_argument("--verticals", help="comma-separated playbook names")
    p.add_argument("--stack")
    p.add_argument("--open", action="append", help="what the brief leaves open (repeatable)")
    p.add_argument("--attachment", action="append", help="photo of the idea; copied into idea/ (repeatable)")
    p.add_argument("--label", action="append", metavar="STAGE=LABEL", help="stage label in the user's language")
    p.add_argument("--force", action="store_true")
    p.set_defaults(func=cmd_init)

    p = sub.add_parser("attach", parents=[common], help="add photos to the idea (copied into idea/)")
    p.add_argument("path", nargs="+")
    p.set_defaults(func=cmd_attach)

    p = sub.add_parser("gate", parents=[common], help="stop for the maker: store the ask, stage → needs_you")
    p.add_argument("stage")
    p.add_argument("file", help="ask.json — see --help of the script for the shape")
    p.set_defaults(func=cmd_gate)

    p = sub.add_parser("reply", parents=[common], help="record the maker's reply to the open ask (Robion runs this)")
    p.add_argument("stage")
    p.add_argument("file", help="reply.json")
    p.add_argument("--json", action="store_true", help="machine-readable result on stdout")
    p.set_defaults(func=cmd_reply)

    p = sub.add_parser("show", help="where the design is, the open ask or last reply, the rules")
    p.add_argument("stage", nargs="?", help="ignored for now; the summary covers the whole record")
    p.add_argument("--json", action="store_true")
    p.set_defaults(func=cmd_show)

    p = sub.add_parser("answers", parents=[common], help="record a batch of answers from a JSON file")
    p.add_argument("file")
    p.set_defaults(func=cmd_answers)

    p = sub.add_parser("answer", parents=[common], help="record one answer (a delegated question needs --reason)")
    p.add_argument("id")
    p.add_argument("--value", required=True)
    p.add_argument("--by", required=True, choices=DECIDED_BY)
    p.add_argument("--label")
    p.add_argument("--group")
    p.add_argument("--default")
    p.add_argument("--reason")
    p.set_defaults(func=cmd_answer)

    p = sub.add_parser("concept", parents=[common], help="record the variants (then `gate concept` with kind choices)")
    p.add_argument("file", help="JSON array of {id, title, summary, image, facts}")
    p.add_argument("--recommended")
    p.set_defaults(func=cmd_concept)

    p = sub.add_parser("freeze", parents=[common], help="the maker chose a variant in the chat; concept → done")
    p.add_argument("variant")
    p.set_defaults(func=cmd_freeze)

    p = sub.add_parser("stage", parents=[common], help="move one stage")
    p.add_argument("id")
    p.add_argument("status", choices=STATUSES)
    p.add_argument("--estimate", help="rough duration in the user's language (with working)")
    p.add_argument("--note")
    p.add_argument("--artifact", action="append", help="project-relative file (repeatable)")
    p.set_defaults(func=cmd_stage)

    p = sub.add_parser("next", parents=[common], help="agent-side gate: the current stage is done, this one starts working")
    p.add_argument("id")
    p.add_argument("--estimate")
    p.add_argument("--note")
    p.add_argument("--artifact", action="append", help="project-relative file the stage being CLOSED produced (repeatable)")
    p.set_defaults(func=cmd_next)

    p = sub.add_parser("change", parents=[common], help="a change after a gate: log it, mark stages stale")
    p.add_argument("what", help="questions.<id> | concept.chosen | model.<param> | spec.summary")
    p.add_argument("--from", dest="from_value")
    p.add_argument("--to")
    p.add_argument("--invalidates", help="comma-separated stage ids")
    p.add_argument("--cost")
    p.add_argument("--note")
    p.add_argument("--by", choices=DECIDED_BY, help="required for questions.<id>")
    p.add_argument("--reason")
    p.add_argument("--fact", action="append", metavar="KEY=VALUE", help="refresh a fact of the chosen variant")
    p.set_defaults(func=cmd_change)

    p = sub.add_parser("merge", parents=[common], help="deep-merge a JSON patch (spec, labels, artifacts)")
    p.add_argument("file")
    p.set_defaults(func=cmd_merge)

    p = sub.add_parser("commit", help="commit the working tree under one message (after --no-commit writes)")
    p.add_argument("-m", "--message", required=True)
    p.set_defaults(func=cmd_commit)

    p = sub.add_parser("check", help="validate; --strict also checks timestamps and delegated questions")
    p.add_argument("--strict", action="store_true")
    p.add_argument("--json", action="store_true")
    p.set_defaults(func=cmd_check)

    args = parser.parse_args(argv)
    try:
        args.func(args)
    except NoOpenAsk as error:
        print(f"error: {error}", file=sys.stderr)
        return EXIT_NO_ASK
    except RecordError as error:
        print(f"error: {error}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
