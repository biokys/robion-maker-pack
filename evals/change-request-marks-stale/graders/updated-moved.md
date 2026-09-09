---
type: regex
target: { source: file, path: design.json }
pattern: "\"updated\":\\s*\"2026-09-08T12:00:00Z\""
match: not_contains
---

The record's `updated` stamp moved with the write.
