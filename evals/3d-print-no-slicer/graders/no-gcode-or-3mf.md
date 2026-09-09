---
type: regex
target: files
pattern: "\\.(gcode|bgcode|3mf)$"
match: not_contains
---

Robion never slices: no G-code and no 3MF in the workspace (3d-print.md, print plan).
