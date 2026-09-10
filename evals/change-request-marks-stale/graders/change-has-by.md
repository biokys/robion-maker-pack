---
type: regex
target: { source: file, path: design.json }
pattern: "\"what\":\\s*\"questions\\.width\"[\\s\\S]{0,400}?\"by\":\\s*\"user\""
match: contains
---

The width change names who decided it (`--by user`): the agent used `change questions.width … --by user`, so the record knows the new value came from the maker.
