---
name: fix-spec-from-audit
description: Autonomously ingest the latest specification audit file, decompose findings into a 1:1 remediation checklist, spawn parallel subagents to fix specifications, verify compliance, and close the audit gap.
---

# Specification Remediation from Audit Findings — Execution Spec

## Overview
Autonomously ingest the latest specification audit file from `02-spec/25-app-spec-audit/`, decompose every finding into an exhaustive 1:1 remediation checklist, spawn parallel subagents to fix the specifications, verify 100% compliance, and remove the audit gap at the final stage.

## Constants
- `N = 200`
- `PHASE_1_STEPS = N / 2` (Steps 1 .. N/2: Audit Ingestion, Finding Matrix & Subtask Decomposition)
- `PHASE_2_STEPS = N / 2` (Steps N/2+1 .. N: Parallel Remediation, CI Verification & Gap Removal)

## Shared Directory Contract
- **Audit Reports Directory:** `02-spec/25-app-spec-audit/`
- **Default Target Spec Directory:** `02-spec/21-app/`
- **Subtask Tracking:** `.ai-memory/plans/subtasks/xx-spec-fix/`
- **Completed Archive:** `.ai-memory/plans/completed/`
- **Agent State Directory:** `.agents/`

## Pipeline Phases
1. **Phase 1: Audit Ingestion & 1:1 Finding Matrix**
   - Locate latest audit file with highest numerical prefix in `02-spec/25-app-spec-audit/`.
   - Parse bottom Summary Table verbatim.
   - Build 1:1 remediation ledger in `.ai-memory/plans/pending/xx-spec-remediation.md`.
   - Group findings and generate lean subtasks in `.ai-memory/plans/subtasks/xx-spec-fix/`.
   - Mandatory auto-loop directly into Phase 2 without user pause.
2. **Phase 2: Parallel Multi-Agent Remediation**
   - Dispatch up to 2 subagents with minimal context diet.
   - Track isolated agent state in `.agents/xx-<task-name>/state.md`.
   - Reconcile checklist marks `[x]` as subtasks complete.
3. **Phase 3: Quality Gate & Cross-Link Verification**
   - Validate cross-links, markdown formatting, and local CI runner.
4. **Phase 4: Audit Gap Removal & Final Archive**
   - Verify 100% closure.
   - Archive/remove resolved audit file from `02-spec/25-app-spec-audit/` so no gap remains on disk.
   - Consolidate subtasks to `.ai-memory/plans/completed/xx-spec-remediation-completed.md`.
   - Update `.ai-memory/plans/readme.md` and `.ai-memory/what-to-read.md`.
   - Git commit and stage changes.
