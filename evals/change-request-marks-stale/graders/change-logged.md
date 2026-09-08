---
type: regex
target: { source: file, path: design.json }
pattern: "\"what\":\\s*\"questions\\.width\""
match: contains
---

The change log names the changed field with a dotted path (`questions.width`).
