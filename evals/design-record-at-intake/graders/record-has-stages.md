---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"buildsheet\""
match: contains
---

The record lists all ten stages with the fixed ids (design-record.md); `buildsheet` is the last one.
