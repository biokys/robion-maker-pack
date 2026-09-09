---
type: regex
target: files
pattern: "slicing/|out/slice|slice\\.py|slicer-called\\.log"
match: not_contains
---

No slicer script, no `slicing/` or `out/slice/` folder, and the fake slicer CLIs on PATH were never invoked (they would have written `slicer-called.log`).
