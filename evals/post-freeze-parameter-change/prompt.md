---
name: "A parameter edit forced by make check after the freeze is a change: logged first, previews stale"
runs: 2
max_turns: 12
timeout_seconds: 420
plugins: ["../.."]
allowed_tools: ["Read", "Write", "Edit", "Glob", "Grep", "Bash"]
tags: ["design-record", "change", "3d-print"]
---

Run `make check` and fix whatever it complains about.
