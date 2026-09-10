#!/usr/bin/env python3
"""The only writer of design.json — the design record Robion draws its design panel from.

Every move of a design goes through one call here; the script stamps the clock, keeps the
record valid (ten fixed stages, one current stage, ids the app accepts) and commits each gate,
so the record tells the truth about when things happened. Standard library only: it runs
before `uv sync`, in a bare terminal and inside evals.

    python3 design_record.py init --name "Workbench" --slug workbench --language cs \
        --idea "…the user's words…" --summary "…the spec…" --verticals woodworking --stack solids
    python3 design_record.py answers answers.json          # [{id, group, label, answer, default, decidedBy, reason}]
    python3 design_record.py answer width --value 1800 --by user --label Šířka
    python3 design_record.py concept variants.json --recommended b
    python3 design_record.py freeze b
    python3 design_record.py stage model working --estimate "asi 2 minuty"
    python3 design_record.py stage model done --artifact model.py
    python3 design_record.py next preview --estimate "asi 3 minuty"
    python3 design_record.py change questions.width --from 1600 --to 1800 --invalidates model,preview
    python3 design_record.py merge patch.json
    python3 design_record.py check --strict

Rules mirror the app's schema (packages/shared/src/design.ts in Robion) and the pack's
references/core/design-record.md. There is deliberately no way to pass a timestamp.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

TOOL = "design_record.py/0.24.1"
FILE = "design.json"
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
ID_RE = re.compile(r"^[a-z][a-z0-9_]*$")
ID_MAX = 40
COMMIT_ON = {"done", "skipped"}


class RecordError(Exception):
    """A rule the record would break; the message says what to do instead."""


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
    if "," in text and not " " in text.strip(","):
        return [parse_value(part) for part in text.split(",") if part.strip()]
    return text


def prune(value: Any) -> Any:
    """No `null` in the record: an unknown field is left out."""
    if isinstance(value, dict):
        return {k: prune(v) for k, v in value.items() if v is not None}
    if isinstance(value, list):
        return [prune(v) for v in value]
    return value


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


def stage_of(record: dict[str, Any], stage_id: str) -> dict[str, Any]:
    for stage in record.setdefault("stages", []):
        if stage.get("id") == stage_id:
            return stage
    raise RecordError(f"stage '{stage_id}' is not in the record — `check` and repair it")


def current_stage(record: dict[str, Any]) -> dict[str, Any] | None:
    for stage in record.get("stages", []):
        if stage.get("status") in ("working", "needs_you"):
            return stage
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


# ---------------------------------------------------------------- validation


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
    current = [stage["id"] for stage in stages if stage.get("status") in ("working", "needs_you")]
    if len(current) > 1:
        raise RecordError(
            f"only one stage may be working or needs_you at a time, found: {', '.join(current)} — "
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
        if by == "claude" and not question.get("reason"):
            raise RecordError(f"question '{qid}': decidedBy claude needs a reason")
    concept = record.get("concept") or {}
    variant_ids = [check_id(str(v.get("id", "")), "variant id") for v in concept.get("variants", [])]
    if len(set(variant_ids)) != len(variant_ids):
        raise RecordError("variant ids must be unique")
    for field in ("recommended", "chosen"):
        value = concept.get(field)
        if value is not None and value not in variant_ids:
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
    """`git add -A` + commit; silently skipped without git or when nothing changed."""
    if no_commit:
        return
    try:
        if git(["rev-parse", "--is-inside-work-tree"], check=False).returncode != 0:
            git(["init", "--initial-branch=main"])
        git(["add", "-A"])
        staged = git(["diff", "--cached", "--quiet"], check=False)
        if staged.returncode == 0:
            return
        git(["-c", "user.name=design_record", "-c", "user.email=design@robion.app", "commit", "-q", "-m", message])
    except (OSError, subprocess.CalledProcessError) as error:
        print(f"warning: git commit skipped: {error}", file=sys.stderr)


# ---------------------------------------------------------------- commands


def cmd_init(args: argparse.Namespace) -> None:
    path = Path(FILE)
    if path.exists() and not args.force:
        raise RecordError(f"{FILE} already exists — `check` it, or pass --force to start over")
    labels = dict(item.split("=", 1) for item in args.label or [])
    for key in labels:
        check_stage(key)
    stamp = now()
    record: dict[str, Any] = {
        "version": 1,
        "product": prune({"name": args.name, "slug": args.slug, "language": args.language}),
        "idea": {"text": args.idea, "attachments": [check_path(a, "attachment") for a in args.attachment or []]},
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
                "status": "done" if stage_id == "idea" else "needs_you" if stage_id == "brief" else "pending",
                **({"updatedAt": stamp} if stage_id in ("idea", "brief") else {}),
            }
            for stage_id in STAGES
        ],
        "changes": [],
    }
    save(path, record)
    commit("idea: recorded", args.no_commit)
    print(f"{FILE} written: idea done, brief needs_you")


def apply_answer(record: dict[str, Any], item: dict[str, Any]) -> None:
    qid = check_id(str(item.get("id", "")), "question id")
    question = question_of(record, qid)
    if question is None:
        question = {"id": qid}
        record["questions"].append(question)
    for key in ("group", "label", "answer", "default", "decidedBy", "reason"):
        if item.get(key) is not None:
            question[key] = item[key]
    if not question.get("label"):
        raise RecordError(f"question '{qid}' needs a label")
    if question.get("decidedBy") is None:
        raise RecordError(f"question '{qid}' needs decidedBy (user | default | claude)")
    question["answeredAt"] = now()


def cmd_answers(args: argparse.Namespace) -> None:
    path = Path(FILE)
    record = load(path)
    items = json.loads(Path(args.file).read_text(encoding="utf-8"))
    if not isinstance(items, list):
        raise RecordError("the answers file must hold a JSON array of questions")
    for item in items:
        apply_answer(record, item)
    save(path, record)
    print(f"{len(items)} answer(s) recorded")


def cmd_answer(args: argparse.Namespace) -> None:
    path = Path(FILE)
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
    record = load(path)
    variants = json.loads(Path(args.file).read_text(encoding="utf-8"))
    if not isinstance(variants, list) or not variants:
        raise RecordError("the variants file must hold a non-empty JSON array")
    for variant in variants:
        check_id(str(variant.get("id", "")), "variant id")
        if not variant.get("title"):
            raise RecordError(f"variant '{variant.get('id')}' needs a title")
    concept = record.setdefault("concept", {})
    concept["variants"] = variants
    if args.recommended:
        concept["recommended"] = args.recommended
    concept.pop("chosen", None)
    concept.pop("frozenAt", None)
    set_status(record, "brief", "done", only_if_current=True)
    set_status(record, "concept", "needs_you")
    save(path, record)
    print(f"{len(variants)} variant(s) recorded, concept needs_you")


def cmd_freeze(args: argparse.Namespace) -> None:
    path = Path(FILE)
    record = load(path)
    if variant_of(record, args.variant) is None:
        raise RecordError(f"variant '{args.variant}' is not in the concept — record the variants first")
    concept = record["concept"]
    concept["chosen"] = args.variant
    concept["frozenAt"] = now()
    set_status(record, "concept", "done")
    save(path, record)
    commit(f"concept: frozen ({args.variant})", args.no_commit)
    print(f"concept frozen on '{args.variant}'")


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
    current = current_stage(record)
    if status in ("working", "needs_you") and current is not None and current["id"] != stage_id:
        raise RecordError(
            f"stage '{current['id']}' is still {current['status']} — record its outcome first "
            f"(`stage {current['id']} done|skipped`) or use `next {stage_id}`"
        )
    stamp = now()
    stage["status"] = status
    stage["updatedAt"] = stamp
    if status == "working":
        stage["startedAt"] = stamp
        if estimate:
            stage["estimate"] = estimate
    if note:
        stage["note"] = note
    if artifacts:
        existing = list(stage.get("artifacts") or [])
        for artifact in artifacts:
            check_path(artifact, "artifact")
            if artifact not in existing:
                existing.append(artifact)
        stage["artifacts"] = existing


def cmd_stage(args: argparse.Namespace) -> None:
    path = Path(FILE)
    record = load(path)
    set_status(record, args.id, args.status, estimate=args.estimate, note=args.note, artifacts=args.artifact)
    save(path, record)
    if args.status in COMMIT_ON:
        commit(f"{args.id}: {args.status}" + (f" — {args.note}" if args.note else ""), args.no_commit)
    print(f"stage '{args.id}' → {args.status}")


def cmd_next(args: argparse.Namespace) -> None:
    path = Path(FILE)
    record = load(path)
    current = current_stage(record)
    if current is not None and current["id"] != args.id:
        # the artifacts belong to the stage being closed — what it produced
        set_status(record, current["id"], "done", artifacts=args.artifact)
        commit_message = f"{current['id']}: done"
    else:
        commit_message = None
    set_status(record, args.id, "working", estimate=args.estimate, note=args.note)
    save(path, record)
    if commit_message:
        commit(commit_message, args.no_commit)
    print(f"stage '{args.id}' → working" + (f" ({current['id']} done)" if commit_message else ""))


def cmd_change(args: argparse.Namespace) -> None:
    path = Path(FILE)
    record = load(path)
    what = args.what
    invalidates = [check_stage(s) for s in (args.invalidates or "").split(",") if s]
    entry = prune(
        {
            "at": now(),
            "what": what,
            "from": parse_value(args.from_value),
            "to": parse_value(args.to),
            "invalidates": invalidates,
            "note": args.note,
            "cost": args.cost,
        }
    )
    record.setdefault("changes", []).append(entry)
    head, _, tail = what.partition(".")
    if head == "questions" and tail:
        question = question_of(record, tail)
        if question is None:
            raise RecordError(f"question '{tail}' is not in the record")
        question["answer"] = parse_value(args.to)
        question["decidedBy"] = args.by or "user"
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
    for fact in args.fact or []:
        key, _, value = fact.partition("=")
        chosen = record.get("concept", {}).get("chosen")
        variant = variant_of(record, chosen) if chosen else None
        if variant is None:
            raise RecordError("--fact needs a chosen variant")
        variant.setdefault("facts", {})[key] = parse_value(value)
    save(path, record)
    commit(f"change: {what} {args.from_value or ''} -> {args.to or ''}".strip(), args.no_commit)
    print(f"change recorded: {what}" + (f", stale: {', '.join(invalidates)}" if invalidates else ""))


def deep_merge(base: Any, patch: Any) -> Any:
    if isinstance(base, dict) and isinstance(patch, dict):
        for key, value in patch.items():
            base[key] = deep_merge(base.get(key), value) if key in base else value
        return base
    return patch


def cmd_merge(args: argparse.Namespace) -> None:
    path = Path(FILE)
    record = load(path)
    patch = json.loads(Path(args.file).read_text(encoding="utf-8"))
    if not isinstance(patch, dict):
        raise RecordError("the patch must be a JSON object")
    for key in ("version", "tool", "updated"):
        patch.pop(key, None)
    deep_merge(record, patch)
    save(path, record)
    print("patch merged")


def cmd_check(args: argparse.Namespace) -> None:
    record = load(Path(FILE))
    warnings = validate(record, strict=args.strict)
    for warning in warnings:
        print(f"warning: {warning}")
    current = current_stage(record)
    print(f"ok: {len(record.get('stages', []))} stages, current {current['id'] + ' ' + current['status'] if current else 'none'}, "
          f"{len(record.get('questions', []))} answers, {len(record.get('changes', []))} changes")
    if warnings and args.strict:
        sys.exit(1)


# ---------------------------------------------------------------- cli


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--no-commit", action="store_true", help="never touch git")
    sub = parser.add_subparsers(dest="command", required=True)

    p = sub.add_parser("init", help="create the record: idea done, brief needs_you")
    p.add_argument("--name", required=True)
    p.add_argument("--slug")
    p.add_argument("--language")
    p.add_argument("--idea", required=True, help="the user's own words")
    p.add_argument("--summary", help="the spec, in the user's language")
    p.add_argument("--verticals", help="comma-separated playbook names")
    p.add_argument("--stack")
    p.add_argument("--open", action="append", help="what the brief leaves open (repeatable)")
    p.add_argument("--attachment", action="append", help="project-relative path (repeatable)")
    p.add_argument("--label", action="append", metavar="STAGE=LABEL", help="stage label in the user's language")
    p.add_argument("--force", action="store_true")
    p.set_defaults(func=cmd_init)

    p = sub.add_parser("answers", help="record a batch of answers from a JSON file")
    p.add_argument("file")
    p.set_defaults(func=cmd_answers)

    p = sub.add_parser("answer", help="record one answer")
    p.add_argument("id")
    p.add_argument("--value", required=True)
    p.add_argument("--by", required=True, choices=DECIDED_BY)
    p.add_argument("--label")
    p.add_argument("--group")
    p.add_argument("--default")
    p.add_argument("--reason")
    p.set_defaults(func=cmd_answer)

    p = sub.add_parser("concept", help="record the variants; concept → needs_you")
    p.add_argument("file", help="JSON array of {id, title, summary, image, facts}")
    p.add_argument("--recommended")
    p.set_defaults(func=cmd_concept)

    p = sub.add_parser("freeze", help="the user chose a variant; concept → done")
    p.add_argument("variant")
    p.set_defaults(func=cmd_freeze)

    p = sub.add_parser("stage", help="move one stage")
    p.add_argument("id")
    p.add_argument("status", choices=STATUSES)
    p.add_argument("--estimate", help="rough duration in the user's language (with working)")
    p.add_argument("--note")
    p.add_argument("--artifact", action="append", help="project-relative file (repeatable)")
    p.set_defaults(func=cmd_stage)

    p = sub.add_parser("next", help="the current stage is done; this one starts working")
    p.add_argument("id")
    p.add_argument("--estimate")
    p.add_argument("--note")
    p.add_argument("--artifact", action="append",
                   help="project-relative file the stage being CLOSED produced (repeatable)")
    p.set_defaults(func=cmd_next)

    p = sub.add_parser("change", help="a change after a gate: log it, mark stages stale")
    p.add_argument("what", help="questions.<id> | concept.chosen | model.<param> | spec.summary")
    p.add_argument("--from", dest="from_value")
    p.add_argument("--to")
    p.add_argument("--invalidates", help="comma-separated stage ids")
    p.add_argument("--cost")
    p.add_argument("--note")
    p.add_argument("--by", choices=DECIDED_BY)
    p.add_argument("--reason")
    p.add_argument("--fact", action="append", metavar="KEY=VALUE", help="refresh a fact of the chosen variant")
    p.set_defaults(func=cmd_change)

    p = sub.add_parser("merge", help="deep-merge a JSON patch (spec, labels, artifacts)")
    p.add_argument("file")
    p.set_defaults(func=cmd_merge)

    p = sub.add_parser("check", help="validate; --strict also checks timestamps")
    p.add_argument("--strict", action="store_true")
    p.set_defaults(func=cmd_check)

    args = parser.parse_args(argv)
    try:
        args.func(args)
    except RecordError as error:
        print(f"error: {error}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
