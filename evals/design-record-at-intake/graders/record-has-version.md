---
type: regex
target: { source: file, path: design.json }
pattern: "\"version\":\\s*1[,\\s]"
match: contains
---

The record carries the schema version.
