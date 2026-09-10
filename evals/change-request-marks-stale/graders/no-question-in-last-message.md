---
type: llm
target: last_message
---

The agent's final message must not ask the user a question in the chat and must not offer a list of options to type back. When it needs a decision (for example whether to regenerate the expensive stages now), the record carries an ask (`gate … approve`) and the message only says so. Score 1 when no question is asked in the chat, 0 when one is.
