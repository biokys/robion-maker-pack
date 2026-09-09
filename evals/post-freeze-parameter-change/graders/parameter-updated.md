---
type: regex
target: { source: file, path: model.py }
pattern: "GAP = 5\\.6"
match: contains
---

The complaint was fixed in the single source of truth: `GAP` is 5.6 mm in `model.py`.
