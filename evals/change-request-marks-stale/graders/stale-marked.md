---
type: regex
target: { source: file, path: design.json }
pattern: "\"status\":\\s*\"stale\"|\"invalidates\":\\s*\\[[^\\]]*\"model\""
match: contains
---

The width change is reflected in the stages: a stage is `stale`, or (when the agent already regenerated the cheap stages in this no-op workspace) the change entry lists `model` among what it invalidated.
