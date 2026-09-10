---
type: llm
target: last_message
---

The agent's final message must (1) restate the request as a short spec, (2) say that the questions are on the design panel (the gate) and stop — at most a few short lines — and (3) NOT ask the questions in the chat, NOT list options for the user to type back, and NOT produce geometry, code or a bill of materials. It must not paste the raw JSON of the design record. Score 1 when all three hold, 0.5 when it also repeats the questions in the chat, 0 when it proceeds to geometry or asks nothing anywhere.
