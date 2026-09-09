---
type: regex
target: { source: file, path: design.json }
pattern: "\"invalidates\":\\s*\\[[^\\]]*\"preview\""
match: contains
---

A wider case changes the renders: the change lists `preview` among the invalidated stages (the model regenerates cheaply and may be `done` again, so the stage status itself is not graded).
