---
name: batched-loop-orchestration
description: Batched Loop & Execution Wave Orchestration workflow for multi-agent autonomous spec generation, file analysis, and code refactoring.
---

# Batched Loop & Execution Wave Orchestration Workflow

## Overview
Autonomously orchestrate and execute pending tasks by decomposing them into subtasks and running a continuous N-step self-loop until completion.

- `N = 800` (Total self-loop steps budget)
- `A = 2` (Number of spawned autonomous subagents)
- `H = 2` (Number of hands / parallel operations per agent)
- `PHASE_1_STEPS = N / 2` (Steps 1 .. N/2: Planning, Detailed Spec, and Lean Subtask Generation)
- `PHASE_2_STEPS = N / 2` (Steps N/2+1 .. N: Parallel Execution, Self-Looping, Targeted Quality Linting)

## Non-Negotiable Rules
1. Maximum 3 sub-agents running concurrently at any time.
2. TOTAL BAN on test running (`go test`, `pytest`, `06-cicd-local-runner.py`) and build checking during routine execution.
3. At the end of every loop, output explicit task statistics (done, pending, remaining list).
4. Strictly relative Git paths only — no absolute OS paths or `file:///` URIs in plans or specs.
5. All AI scripts created strictly inside `03-ai-scripts/`.
6. Consolidate completed subtasks into `.ai-memory/plans/completed/xx-<slug>.md` upon completion.
7. Final step git commit and push grouped atomically via GitMap (`gitmap cpf`, `gitmap cpb`, `gitmap cpr`).
