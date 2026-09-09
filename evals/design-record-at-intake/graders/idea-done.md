---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"idea\"[\\s\\S]{0,240}?\"status\":\\s*\"done\""
match: contains
---

The idea stage is `done` as soon as the record exists.
