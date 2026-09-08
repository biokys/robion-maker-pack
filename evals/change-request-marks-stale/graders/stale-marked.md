---
type: regex
target: { source: file, path: design.json }
pattern: "\"status\":\\s*\"stale\""
match: contains
---

At least one previously done stage (model, preview) is marked `stale` after the width change.
