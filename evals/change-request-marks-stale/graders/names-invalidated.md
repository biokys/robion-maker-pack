---
type: llm
target: last_message
---

Before regenerating anything expensive, the agent tells the user which stages or artifacts the width change invalidates (at least the model and the previews) and either asks for a go on the expensive ones or explains what it regenerates now and what waits. It also states which finish it chose and why, in one sentence. Score 1 when both the invalidation list and the finish decision are stated, 0.5 when only one of them, 0 when it silently regenerates or says nothing about what is out of date.
