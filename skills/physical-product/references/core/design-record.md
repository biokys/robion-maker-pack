# Design record — the project's memory and the gate protocol

One file in the project root answers "where is this design, what did the user
decide, what did I decide for them, what is out of date, and what is the maker
being asked right now" — for this session, for the next one, and for Robion's
design panel:

```
<project>/design.json
```

The transcript is not that memory: it is lost on a fresh session, it fills up
with render output, and nobody can edit an answer in it. The record is a plain
JSON file, committed with the sources, and **written only by
`design_record.py`** (the pack's `templates/common/design_record.py`, copied
into the project as its first file). The script stamps every move with the
clock, keeps the record valid, refuses contradictory states and commits every
gate. Never edit `design.json` by hand; there is no flag to pass a time.
`python3 design_record.py --help` is the command reference — it is enough to
re-anchor after a compaction, together with `show`.

| Moment | Command |
|---|---|
| brief analysis done | `init --name … --idea "…" --summary "…" --verticals … --stack … --attachment .robion/uploads/… --label brief=…` → idea done, brief working |
| about to ask the maker anything | `gate <stage> ask.json` → the stage is `needs_you`, the panel renders the ask |
| the maker replied (Robion does this; you do it only in a bare terminal) | `reply <stage> reply.json [--json]` |
| where am I, what came back | `show [--json]` |
| a stage starts | `stage <id> working --estimate "…"` |
| an agent-side stage is verified | `stage <id> done --artifact out/… [--note …]`; `skipped --note …` when the stack has no equivalent |
| variants ready for the cards | `concept variants.json --recommended <id>`, then `gate concept` (kind choices) |
| a delegated question | `answer <id> --value … --by claude --reason "…"` |
| anything changed after a gate | `change <what> --from … --to … --invalidates a,b --by user\|claude [--reason …] [--cost …] [--fact key=value]` |
| photos added later | `attach <path> …` (copied into `idea/`) |
| parallel production (subagents) | every write `--no-commit`, then the main thread `commit -m "…"` |
| repair / extra fields | `merge patch.json`, `check --strict` |

## The gate protocol

A gate is one command. `gate` stores an **ask** on the stage and sets it
`needs_you`; Robion's design panel (desktop and phone) renders the ask from the
record; the maker answers there; Robion runs `reply` in the project and types
one line into your session:

```
Robion: the reply to the "<stage>" gate is recorded in design.json (python3 design_record.py show). Continue.
```

Run `show`, continue from the stage the reply started. Not replying is
waiting — there are no "wait" or "back" buttons; the maker changes an earlier
answer through the change protocol (below), and a free-text prompt while a
gate is open is a note or a change request.

Three kinds of ask (`ask.json`):

- **`questions`** — the question round, or any later batch: `questions: [{id,
  group, label, type, options, default, hint, unit}]`, types `select` (`options`
  = `[{value, label, hint}]`, `default` mandatory and one of the values),
  `toggle`, `number` (`unit`), `text`. The value `decide_for_me` is reserved:
  the panel adds "decide for me" as the first choice of every question itself.
  `gate` also lists the questions in `record.questions` as open; the reply fills
  them in. `next: {stage, estimate}` names the stage the reply starts (the
  question round: `concept`).
- **`choices`** — the concept gate: cards from `concept.variants` (record them
  first with `concept variants.json`), `choices: {recommended}`; optional
  `show`. The reply freezes the chosen variant; `next` defaults to `model`.
- **`approve`** — a produced stage: `show: [{type: gallery, images: […]}, {type:
  image, path, caption}, {type: table, columns, rows ≤ 64}, {type: file, path,
  label}]`, all paths project-relative; `next` defaults to the following stage
  still ahead. The reply is `approved: true`, or `false` with a note.

What `reply` does — this table is the contract; Robion relies on it:

| kind | reply | record | commit |
|---|---|---|---|
| questions | `answers: {id: value}` | every asked question gets `answer` (the value, or `default` when absent — a blank `text` is `""`, an absent `toggle` `false`), `decidedBy` = `user` (value ≠ default) / `default` / `claude` (`decide_for_me`: no `answer`, no `reason` yet — yours to decide with `answer … --by claude --reason`), `answeredAt`; with `next`: stage `done`, `next.stage` `working` (+ `startedAt`, `estimate`); without: stage `working` | `<stage>: answered (7 user, 3 default, 2 claude)` |
| choices | `chosen` | `concept.chosen`, `frozenAt`; `concept` done, `brief` done if still open; `next.stage` (default `model`) working | `concept: frozen (b)` |
| approve | `approved: true` | stage done; `next.stage` working when there is one (none after `buildsheet`) | `<stage>: approved` |
| approve | `approved: false` + `note` | stage working again, `note` on the stage (rework) | `<stage>: rework requested` |
| any | no open ask on that stage | **nothing written**, exit code 2 | — |
| any | wrong kind, unknown id, value outside the options | nothing written, exit code 1 | — |

Every reply removes the `ask`, writes `stage.reply = {kind, at, askedAt, via,
note, answers | chosen | approved}` and commits once.

**Bare terminal** (no `ROBION_DESIGN_ASKS` in the environment): run `gate` all
the same, print the ask as text in the chat, and when the maker answers write
`reply.json` yourself with `"via": "chat"` (option labels are accepted as
values). The record — and the panel, when one appears later — stays truthful.

## Rules

- **Create it at the end of the brief analysis** (SKILL.md §1 step 1), before
  the question round. The project directory exists by then; scaffolding (§4)
  comes later and never touches this file.
- **Photos belong to the idea.** Every image the user attached (`[Attached
  image: …]` lines; Robion keeps them in `.robion/uploads/`, which is
  git-ignored) is passed to `init --attachment` or `attach`; the script copies
  it into the committed `idea/` directory and records that path, so the app
  shows it under the idea in every session. A photo sent later that changes the
  brief is also a change request.
- **Status discipline — the map is only as true as these moves.** Before you
  produce a stage it is `working` (with an `estimate` in the user's language;
  the script stamps `startedAt`); before every stop for the maker it is
  `needs_you` **through `gate`** (a `needs_you` without an ask leaves the panel
  with nothing to answer); `done` is written by the reply for maker gates and
  by you (`stage <id> done`) for agent-side stages. At creation: `idea` done,
  `brief` working, the rest `pending`.
- **One gate at a time.** At most one stage is `needs_you`, and nothing is
  `working` beside it; several stages `working` at once only for `drawings`,
  `bom`, `plan`, `analysis` (the production half, subagents) — the script
  refuses everything else.
- **Every answer records who decided.** `decidedBy: user` when the maker chose
  a value, `default` when they accepted the recommendation, `claude` when they
  delegated (`decide_for_me`) or you chose a fact they cannot know — then
  `reason` is mandatory and the same sentence goes into the build sheet's
  assumptions section. `check --strict` lists delegated questions still
  undecided.
- **Stage ids are fixed** (below); the app's map relies on them. Labels are
  yours, in the user's language. A stage the stack has no equivalent for
  (analysis on a sewn bag) is `skipped` with a note, never removed.
- **A change after a gate is logged, not silently absorbed** (`change …`,
  protocol below). Stale means "was done, inputs changed since"; it becomes
  `done` again only after the stage is regenerated.
- **Structure in English, content in the user's language.** Keys, ids, enums
  and timestamps are the standard; `label`, `title`, `hint`, `summary`,
  `answer`, `reason`, `note`, `estimate` are written the way the user speaks.
- **Ids** — `questions[].id`, `concept.variants[].id`, `recommended`, `chosen`
  — lowercase snake_case (`[a-z][a-z0-9_]*`), at most 40 characters, stable
  across the project: `a`, `b`, `frame_stretchers` — never `A`, `v-1`.
- **Paths are project-relative** and point at real files (`out/viz_hero.png`,
  `model.py`, `idea/photo.jpg`); the app shows them as thumbnails and links.
- **Never store secrets, absolute paths, or the transcript.** The record is
  small — one screen of JSON, not a log; big tables go into a `file`.
- **Omit what you do not know.** The script prunes `null`; an absent key reads
  as "not yet". Never paste the record into the chat — the maker sees it in
  the panel.

## Schema by example

```json
{
  "version": 1,
  "updated": "2026-09-10T14:02:00Z",
  "tool": "design_record.py/0.26.0",
  "product": { "name": "Workbench 1800", "slug": "workbench-1800", "language": "en" },
  "idea": { "text": "a sturdy workbench for hand planing, about 1.8 m, beech if affordable",
            "attachments": ["idea/bench-photo.jpg"] },
  "spec": { "summary": "Free-standing workbench, 1800 × 800 × 900 mm, solid beech top 40 mm; …",
            "verticals": ["woodworking"], "stack": "solids", "open": ["drawer yes/no", "finish", "casters"] },
  "questions": [
    { "id": "width", "group": "dimensions", "label": "Width", "type": "select",
      "options": [{ "value": 1600, "label": "1600 mm" }, { "value": 1800, "label": "1800 mm" }],
      "default": 1600, "answer": 1800, "decidedBy": "user", "answeredAt": "2026-09-10T13:41:00Z" },
    { "id": "finish", "group": "materials", "label": "Finish", "type": "select",
      "options": [{ "value": "oil", "label": "hard wax oil" }, { "value": "lacquer", "label": "lacquer" }],
      "default": "oil", "answer": "oil", "decidedBy": "claude",
      "reason": "delegated; oil is repairable on a work surface and is in the workshop profile",
      "answeredAt": "2026-09-10T13:45:00Z" }
  ],
  "concept": {
    "variants": [
      { "id": "a", "title": "Four legs, apron", "summary": "Simplest build, softer against racking.", "image": "out/concept/a/viz_hero.png", "facts": { "mass_kg": 62, "build_h": 6 } },
      { "id": "b", "title": "Frame with stretchers", "summary": "Stretchers low plus a centre rail — stiffest for planing.", "image": "out/concept/b/viz_hero.png", "facts": { "mass_kg": 71, "build_h": 8 } }
    ],
    "recommended": "b", "chosen": "b", "frozenAt": "2026-09-10T14:02:00Z"
  },
  "stages": [
    { "id": "idea",       "label": "Idea",             "status": "done",  "updatedAt": "2026-09-10T13:30:00Z" },
    { "id": "brief",      "label": "Brief",            "status": "done",  "updatedAt": "2026-09-10T13:41:00Z",
      "reply": { "kind": "questions", "at": "2026-09-10T13:41:00Z", "askedAt": "2026-09-10T13:33:00Z", "via": "app",
                 "answers": { "width": 1800, "finish": "decide_for_me" } } },
    { "id": "concept",    "label": "Concept",          "status": "done",  "updatedAt": "2026-09-10T14:02:00Z",
      "reply": { "kind": "choices", "at": "2026-09-10T14:02:00Z", "askedAt": "2026-09-10T13:58:00Z", "via": "app", "chosen": "b" } },
    { "id": "model",      "label": "Model",            "status": "needs_you", "startedAt": "2026-09-10T14:02:00Z", "estimate": "about 5 minutes",
      "artifacts": ["model.py"], "updatedAt": "2026-09-10T14:09:00Z",
      "ask": { "kind": "approve", "askedAt": "2026-09-10T14:09:00Z", "title": "The live model",
               "show": [{ "type": "gallery", "images": ["out/viz_quick.png"] }],
               "next": { "stage": "preview", "estimate": "about 2 minutes" } } },
    { "id": "preview",    "label": "Previews",         "status": "pending" },
    { "id": "drawings",   "label": "Drawings",         "status": "pending" },
    { "id": "bom",        "label": "Materials & cuts", "status": "pending" },
    { "id": "plan",       "label": "Build plan",       "status": "pending" },
    { "id": "analysis",   "label": "Strength",         "status": "pending" },
    { "id": "buildsheet", "label": "Build sheet",      "status": "pending" }
  ],
  "changes": [
    { "at": "2026-09-10T13:58:00Z", "what": "questions.width", "from": 1600, "to": 1800, "by": "user",
      "invalidates": [], "note": "before the concept; sketches redrawn" }
  ]
}
```

Field notes:

- `stages[].status` ∈ `pending | working | needs_you | done | stale | skipped`;
  `needs_you` carries the `ask`; `reply` is the last reply the stage got.
- `stages[].artifacts` — the files the stage produced (project-relative);
  `estimate` — free text in the user's language, set with `working`;
  `startedAt`, `updatedAt`, `updated`, `tool` — written by the script.
- `changes[].what` — a dotted path (`questions.width`, `concept.chosen`,
  `model.gap`, `spec.summary`); `by` — who decided the new value; `cost` — the
  regeneration in words ("model and previews, ~10 minutes").
- `concept.variants[].facts` — a flat object of numbers the maker compares
  (mass, hours, stiffness ratio; cost only when the profile gives prices).

## The ten stages

| id | SKILL.md | Gate |
|---|---|---|
| `idea` | §1, the user's words | done as soon as the record exists |
| `brief` | §1 step 1–2 (brief analysis + question round) | maker: `questions` |
| `concept` | §1 step 3 (concept gate) | maker: `choices` |
| `model` | §5 stage 1 | maker: `approve` (the cockpit viewport is the live geometry) |
| `preview` | §5 stage 2 | maker: `approve` + `gallery` |
| `drawings` | §5 stage 3 (drawings or pattern sheets) | agent: every PNG read and checked |
| `bom` | §5 stage 4 (BOM + cut plan / marker) | agent: masses cross-checked |
| `plan` | §5 stage 5 (assembly / sewing / welding plan) | agent: executable order |
| `analysis` | §5 stage 6 (analytic + FEA; `skipped` when not load-bearing) | agent: sanity checks pass |
| `buildsheet` | §5 stage 7 | maker: `approve` + `file` |

## Change protocol (§7 in record terms)

1. Identify what changed: an answer, the chosen concept, a spec sentence, a
   parameter after the freeze — `make check` forcing `gap` 5.0 → 5.6 mm is a
   change too. One command records it: `python3 design_record.py change
   model.gap --from 5.0 --to 5.6 --invalidates preview --by claude --reason
   "clearance to the USB shell" --fact outer_mm="100 x 71 x 26"` (a
   `questions.<id>` change rewrites the answer, `decidedBy` and `answeredAt`;
   `--fact` keeps the chosen variant's card true).
2. `invalidates` lists every `done` stage whose inputs it touches — by default
   every done stage after the changed one (linear); keep a later stage `done`
   only when you can say why it is unaffected (a finish change does not
   invalidate the cut plan). Put the rough cost in `cost`.
3. The script sets those stages `stale`, drops any open ask on them and, when
   nothing is current any more, sets the first stale stage working. Continue
   from there; when the regeneration is expensive, `gate` first (kind
   `approve`, the cost in `note`) so the maker decides whether to run it now.

The panel shows the stale stages and the change; there is nothing to update
on any controls panel — the cockpit sliders read the model, the record reads
the script.
