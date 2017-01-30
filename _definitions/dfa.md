---
number: 1.0
source: 2016-06-08-aliquam-post-example
title: Deterministic Finite Automata
synonyms:
  - Deterministic Finite State Machine
  - Deterministic Finite Acceptor
---

A **deterministic finite automata** $$M$$ is a 5-tuple $$(Q, Σ, δ, q_0, F )$$, where  

1. $$Q$$ is a finite set called the **states**,
2. $$Σ$$ is a finite set called the **alphabet**,
3. $$δ : Q × Σ → Q$$ is the **transition function**,
4. $$q_0 ∈ Q$$ is the **start state**, and
5. $$F ⊆ Q$$ is the set of **accept states**.

