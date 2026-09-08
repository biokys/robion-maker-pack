---
type: regex
target: files
pattern: "model\\.py|pattern\\.py|\\.scad$|\\.step$"
match: not_contains
---

Intake is a gate: no model script or geometry may exist before the question round is answered.
