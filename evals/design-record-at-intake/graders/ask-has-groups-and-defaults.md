---
type: regex
target: { source: file, path: design.json }
pattern: "\"ask\":\\s*\\{[\\s\\S]*?\"questions\":\\s*\\[[\\s\\S]*?\"group\":\\s*\"([a-z_]+)\"[\\s\\S]*?\"default\":[\\s\\S]*?\"group\":\\s*\"(?!\\1\")[a-z_]+\""
match: contains
---

The ask batches the questions into groups (at least two distinct `group` values) and the selects carry a recommended `default` (design-record.md, kind `questions`).
