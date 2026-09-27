---
name: ci-cd-fix
description: Autonomously diagnose, fix, and verify CI/CD pipelines using local runner scripts, 4-part RCA, and self-looping.
---

# Instruction (must follow): Autonomous CI/CD Fix Loop (with Local Runner & RCA)

> [!IMPORTANT]
> Prompt Version: 2.5.0
> Synchronization: Main Meta-Repo & Connected Workspaces
>
> **Top-Instruction Priority Mandate (Preamble Precedence):**
> Whatever directives, constraints, checklists, or instructions are given before this section or prompt (including in the prompt preamble, header blocks, or incoming user request) are HIGHEST PRIORITY and MUST BE FOLLOWED as strictly NON-NEGOTIABLE. They supersede and strictly override any conflicting general advice, default conventions, or lower-level guidelines below.

Trigger Keywords & Aliases: `fix with RCA`, `fix`, `fix, fix`, `CI/CD fix`, `cicd fix`

/goal Autonomously diagnose, update or create the local Python CI/CD runner script (`03-ai-scripts/06-cicd-local-runner.py`) from repository workflows or screenshot pipeline names, and fix all failures by executing a singly-done self-looping sequence (zeroing in on one failure at a time) until the runner exits with code 0 without stopping.

/learn Ingest recent RCAs from `.ai-memory/cicd-issues/`, `.ai-memory/issues/`, `02-spec/02-coding-guidelines/02-canonical-size-tier.md`, `02-spec/02-coding-guidelines/01-cross-language/readme.md`, and `02-spec/03-error-manage/` before touching any code so past mistakes are never repeated.

---

## Variables — Configurable at Runtime

```text
N = 200  (Total self-loop steps budget)
PHASE_1_STEPS = N / 2  (Steps 1 .. N/2: Discovery, Runner Matrix Verification)
PHASE_2_STEPS = N / 2  (Steps N/2+1 .. N: Singly-Done Self-Loop Fixing, Green Gate Verification)
```

Both N, PHASE_1_STEPS, and PHASE_2_STEPS are read-only after the user sets them.

---

## Strict In-Repository Execution & `.ai-memory/` Bounding Mandate

> [!IMPORTANT]
> 1. **In-Codebase Execution Only:** Execute strictly within the repository root.
> 2. **Strict Folder Bounding (`.ai-memory/`):** All AI scripts, local runners, autofixers, helper utilities, memory issue logs, and planning files MUST be inside `.ai-memory/` or `03-ai-scripts/`.
> 3. **Strict Relative Git Paths:** All file paths, markdown links, citations, and subtask paths inside plans, RCA logs, scripts, and comments MUST be strictly relative paths from the git root. NEVER write absolute OS paths or absolute `file:///` URIs.
> 4. **No External or Random File Creation:** NEVER write scripts, temporary test scripts, or scratch files to root, `/tmp`, global system paths, or outside the repository boundary.
> 5. **Cross-Platform Python CI Mandate:** All newly created or refactored CI/CD verification tools, determinism checks, fixtures, and linter jobs MUST be implemented in pure, cross-platform Python (`.py`).
> 6. **Zero-Storage GitHub Actions Mandate:** Workflows MUST NOT upload test outputs or coverage files via `actions/upload-artifact`. All reports emitted directly to console or step summary.
> 7. **No Version Bumping Without Explicit Request:** Do not cut releases or bump package versions during routine development or fixes.
