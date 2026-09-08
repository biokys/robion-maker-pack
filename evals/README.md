# Evals — does the skill keep its discipline?

Scenarios for the early-access `claude plugin eval`. They guard the spine's
conventions across model and pack changes: the design record exists when it
must, a change request marks stages stale, a "decide for me" answer is
recorded with a reason.

Each case is a directory: `prompt.md` (frontmatter + the user's prompt),
`graders/*.md` (one assertion each), and `case.yaml` when the run needs a
scaffolded workspace (an existing project, the workshop profile in `$HOME`).

Run from the pack root:

```
claude plugin eval . --scaffold --ablation none --allow-tools Bash Write Edit \
  --max-cost-usd 6 --json evals/results/last.json
claude plugin eval . --case "design-record-*"        # one case
```

`--scaffold` is required: it runs each case's `scaffold_script` (author-supplied
bash, off by default). Results land in `evals/results/<timestamp>/`
(git-ignored). The runs use a fresh `$HOME`, so the workshop profile each case
needs is written by its scaffold script — the skill would otherwise start the
workshop interview and the intake assertions would fail for the wrong reason.
