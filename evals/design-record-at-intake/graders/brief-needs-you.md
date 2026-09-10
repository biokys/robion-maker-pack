---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"brief\"[\\s\\S]{0,240}?\"status\":\\s*\"needs_you\"[\\s\\S]{0,4000}?\"ask\":\\s*\\{[\\s\\S]{0,80}?\"kind\":\\s*\"questions\""
match: contains
---

The record written before the question round says the agent is waiting on the user through a gate: `brief` is `needs_you` and carries an `ask` of kind `questions` (design-record.md, the gate protocol).
