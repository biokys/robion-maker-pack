---
type: regex
target: { source: file, path: design.json }
pattern: "\"id\":\\s*\"brief\"[^{}]*\"updatedAt\":\\s*\"\\d{4}-"
match: contains
---

The `brief` stage carries the script's `updatedAt` stamp — a live status move, not a summary written at the end of the run.
