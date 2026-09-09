---
type: regex
target: { source: file, path: design.json }
pattern: "\"at\":\\s*\"2026-09-08T1[0-2]:[0-5]0:00Z\""
match: not_contains
---

The change's `at` is the clock, not a copy of the fixture's stamps (`11:00`, `11:30`, `12:00` on 2026-09-08).
