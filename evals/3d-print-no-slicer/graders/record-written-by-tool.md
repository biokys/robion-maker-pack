---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"plan\"[^{}]*\"updatedAt\""
match: contains
---

The `plan` stage moved through `design_record.py` (it carries an `updatedAt` stamp, which the fixture did not have).
