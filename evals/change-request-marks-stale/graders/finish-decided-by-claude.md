---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"finish\"[\\s\\S]{0,600}?\"decidedBy\":\\s*\"claude\"[\\s\\S]{0,300}?\"reason\":\\s*\"[^\"]{10,}"
match: contains
---

"Pick the finish yourself" is recorded as `decidedBy: claude` with a non-trivial `reason`.
