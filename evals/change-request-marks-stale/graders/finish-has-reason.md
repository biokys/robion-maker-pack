---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"finish\"[\\s\\S]{0,600}?\"reason\":\\s*\"[^\"]{10,}"
match: contains
---

The finish decided by Claude carries a non-trivial `reason` (key order in the record does not matter).
