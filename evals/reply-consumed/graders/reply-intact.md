---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"brief\"[\\s\\S]{0,600}?\"reply\":\\s*\\{[\\s\\S]{0,200}?\"kind\":\\s*\"questions\""
match: contains
---

The brief stage still carries the reply Robion recorded — the agent did not rewrite the record by hand or re-open the gate.
