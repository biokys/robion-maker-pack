---
name: "A change request marks later stages stale; decide-for-me is recorded with a reason"
runs: 2
max_turns: 12
timeout_seconds: 420
plugins: ["../.."]
allowed_tools: ["Read", "Write", "Edit", "Glob", "Grep", "Bash"]
tags: ["design-record", "change"]
---

Change the width of the bench from 1600 to 1800 mm. And pick the finish yourself, I don't care.
