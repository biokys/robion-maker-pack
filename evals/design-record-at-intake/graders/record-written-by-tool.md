---
type: regex
target: { source: file, path: design.json }
pattern: "\"tool\":\\s*\"design_record\\.py/"
match: contains
---

The record was written by `design_record.py` (the `tool` stamp), not by hand — the only writer since pack 0.24.0 (design-record.md).
