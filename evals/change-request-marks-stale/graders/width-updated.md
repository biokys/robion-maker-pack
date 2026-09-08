---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"width\"[\\s\\S]{0,300}?\"answer\":\\s*\"?1800"
match: contains
---

The width answer itself is updated to 1800 (the record is the source of truth, not the change log alone).
