---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"brief\"[\\s\\S]{0,240}?\"status\":\\s*\"needs_you\""
match: contains
---

The record written before the question round says the agent is waiting on the user: `brief` is `needs_you` (design-record.md, status discipline).
