---
type: regex
target: { source: file, path: design.json }
pattern: "\"tool\":\\s*\"design_record\\.py/"
match: contains
---

The change went through `design_record.py change …` (the `tool` stamp) — the project predates the script (pack 0.22.0), so the agent copied it from the pack's `templates/common/` first, as MIGRATIONS v0.24.0 says.
