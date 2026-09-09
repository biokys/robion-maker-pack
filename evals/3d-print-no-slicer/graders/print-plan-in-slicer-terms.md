---
type: llm
target: last_message
---

The agent's final message (or the build sheet / README it points to and summarizes) must contain a print plan per part: the STL to load, print orientation, layer height, walls, infill, supports (none or where), brim or not, and post-processing (the M2.5 heat-set inserts) — in the words of the user's slicer (Bambu Studio: "wall loops"), and it must tell the user to load the STL into their own slicer and check the preview. It must not offer or mention producing G-code, running a slicer, or a `make slice` step, and it must not state a print time or filament weight as a fact — "from your slicer" or an explicitly rough range is fine. Score 1 when the plan is complete and the slicing is left to the user, 0.5 when the plan is partial or a time is quoted as a fact, 0 when the agent sliced, produced G-code or has no per-part plan.
