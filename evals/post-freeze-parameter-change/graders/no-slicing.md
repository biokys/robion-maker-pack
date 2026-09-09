---
type: regex
target: files
pattern: "\\.(gcode|3mf)$|slicing/|out/slice|slice\\.py"
match: not_contains
---

Fixing a clearance is not a reason to slice.
