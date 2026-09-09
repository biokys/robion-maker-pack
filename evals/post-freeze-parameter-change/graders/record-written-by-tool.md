---
type: regex
target: { source: file, path: design.json }
pattern: "\"at\":\\s*\"\\d{4}-\\d\\d-\\d\\dT"
match: contains
---

The change entry carries an `at` stamp — written by `python3 design_record.py change model.gap --from 5.0 --to 5.6 --invalidates preview …`, not pasted.
