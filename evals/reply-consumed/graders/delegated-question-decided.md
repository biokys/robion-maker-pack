---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"finish\"[\\s\\S]{0,600}?\"decidedBy\":\\s*\"claude\"[\\s\\S]{0,300}?\"reason\":\\s*\"[^\"]{8,}\""
match: contains
---

The delegated question (`finish`, decide_for_me) was decided by the agent with `answer finish --value … --by claude --reason …` — the reason is recorded, as design-record.md requires before the concept.
