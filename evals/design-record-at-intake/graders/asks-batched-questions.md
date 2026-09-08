---
type: llm
target: last_message
---

The agent's final message must (1) restate the request as a short spec, (2) ask clarifying questions grouped into batches, each with a recommended default so the user could answer "ok" per group, and (3) stop and wait for the answers instead of producing geometry, code, or a bill of materials. It must not paste the raw JSON of the design record into the chat. Score 1 when all three hold, 0.5 when questions are asked but without defaults or grouping, 0 when it proceeds to geometry or asks nothing.
