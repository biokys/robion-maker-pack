---
type: regex
target: { source: file, path: design.json }
pattern: "\"changes\":\\s*\\[\\s*\\{"
match: contains
---

The edit after the freeze is a `changes` entry (SKILL.md §7, design-record.md change protocol) — the real run left `changes: []` after the same kind of fix.
