# Subtask 02: 15 Slide Archetypes, Component Architecture & Verification Plan

> **Subtask Identifier:** `.ai-memory/plans/subtasks/40-kinetic-deck-revolution-and-step/02-archetypes-and-components.md`  
> **Module:** `40-kinetic-deck-revolution-and-step`  
> **Status:** `IN PROGRESS (SPECIFIED & READY FOR WORKER EXECUTION)`  
> **Target Release:** `v2.1.0`  
> **Author:** Spec Subagent 02 (Contracts & Verification Architect)  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  

---

## 1. Executive Summary & Scope

This subtask plans and governs the architectural implementation of the **15 brand-new slide archetypes** for Module 40. The 15 archetypes are partitioned into:
- **8 Kinetic Multi-Step Workflows:** Interactive 4-step progressive pipelines featuring intra-slide step progression, direct step jumping (`onClick={() => jumpToStep(idx)}`), and 3-phase kinetic lifecycle styling (`completed`, `active`, `future`).
- **7 Flat Sovereign Overviews:** High-density, single-step panoramic telemetry and system architecture boards presenting complete operational domains without pagination or ghost steps.

---

## 2. The 15 Archetype Inventory & Taxonomy

| # | Archetype Identifier | Category | Mode | Declared Steps | Primary Focus & Domain |
|:---:|:---|:---:|:---:|:---:|:---|
| 01 | `gpu-cluster-fabric-interconnect` | AI Infra | Kinetic | 4 | 8x GPU nodes, NVSwitch spine crossbar, 3.2 Tbps RoCEv2 rails, tensor all-reduce |
| 02 | `rag-needle-haystack-benchmark` | Evaluation | Kinetic | 4 | 8K to 2M token context window, needle retrieval depth matrix, accuracy heatmaps |
| 03 | `ebpf-kernel-telemetry-observability` | Kernel | Flat | 1 | Linux eBPF kprobes, tracepoints, socket filters, $<15\text{ns}$ syscall overhead |
| 04 | `ai-inference-token-economics` | Financial AI | Kinetic | 4 | TTFT, ITL, Paged KV Cache VRAM footprint, gross margins ($0.12/1M tokens) |
| 05 | `micro-frontend-federation-matrix` | Frontend | Flat | 1 | Module Federation v2, 4 remote domains, shared runtime bus, $<45\text{KB}$ overhead |
| 06 | `progressive-delivery-canary-gate` | Cloud | Kinetic | 4 | Argo Rollouts canary traffic shift (5% -> 25% -> 50% -> 100%), error budgets |
| 07 | `data-mesh-federated-governance` | Data Eng | Flat | 1 | 4 domain data products, Open Data Contracts (ODCS), automated lineage graphs |
| 08 | `threat-exposure-ctem-matrix` | Security | Kinetic | 4 | Gartner CTEM framework, EPSS exploit prediction radar, automated breach validation |
| 09 | `subsea-cable-global-backbone` | Telecom | Flat | 1 | Trans-oceanic DWDM subsea fiber routing, 320 Tbps capacity, $<65\text{ms}$ RTT |
| 10 | `multi-agent-reflection-deliberation`| Agents | Kinetic | 4 | Planner, Executor, Critic, Verifier reasoning trees, confidence convergence |
| 11 | `semantic-cache-hit-topology` | AI Edge | Flat | 1 | Exact match L1 + vector cosine ANN L2 cache, 85% inference cost reduction |
| 12 | `saas-net-revenue-retention-cohort` | FinTech | Kinetic | 4 | 100% starting ARR baseline compounding to 146% NRR across 4 quarters |
| 13 | `confidential-mpc-key-vault` | Crypto | Flat | 1 | 3-of-5 threshold MPC custody, Intel SGX / AWS Nitro enclaves, zero key assembly |
| 14 | `developer-friction-dx-telemetry` | DevRel | Kinetic | 4 | Inner and outer SDLC friction telemetry, DORA Elite metrics, sub-second HMR |
| 15 | `boardroom-m-and-a-synergy-realization`| Governance | Flat | 1 | Day-100 M&A integration milestones, $46.8M run-rate EBITDA synergy capture |

---

## 3. Component Decomposition Architecture (CODE-RED-006R Strict Sizing)

Every slide component in `src/components/slides/revolution/` must strictly observe the **$\le 100$ Physical Line Cap**. To achieve this without truncating presentation functionality, each archetype follows a strict two-tier decomposition pattern:

```
src/components/slides/revolution/
├── GpuClusterFabricSlide.tsx              (<= 100 lines: Orchestrator connecting store & theme)
│   ├── GpuNodeMatrixGrid.tsx             (<= 100 lines: Leaf node rendering 8 GPU cards)
│   ├── GpuFabricSpineRail.tsx            (<= 100 lines: Leaf node rendering NVSwitch & RoCEv2)
│   └── GpuTelemetryBottomBar.tsx         (<= 100 lines: Leaf node rendering bandwidth metrics)
├── RagNeedleHaystackSlide.tsx            (<= 100 lines: Orchestrator)
│   ├── RagHeatmapCanvasGrid.tsx          (<= 100 lines: Heatmap matrix 8K to 2M)
│   └── RagNeedleInspectorPane.tsx        (<= 100 lines: Active needle probe detail)
├── EbpfKernelTelemetrySlide.tsx          (<= 100 lines: Orchestrator)
│   ├── EbpfProbeMatrix.tsx               (<= 100 lines: Probe cards grid)
│   └── EbpfRingBufferConsole.tsx         (<= 100 lines: Subsystem buffer metrics)
... (Applied systematically across all 15 archetypes)
```

---

## 4. Phased Implementation Waves

### Wave 1: Type Contracts & Step Progress Engine
- **Target File:** `src/types/kineticRevolutionArchetypes.ts`
- **Actions:**
  1. Author `KineticRevolution15SlideType` discriminated union.
  2. Implement TypeScript interfaces for all 15 archetypes extending `BaseSlide`.
  3. Validate 100% positive booleans (`isActive`, `isCompleted`, `isVerified`, `hasGlow`, `hasAdaptiveRoutingEnabled`).
  4. Implement `calculateKineticRevolution15StepCount` and `isKineticRevolution15Slide` type guards.
  5. Integrate into `src/stores/deckStore.ts` inside `computeSlideMaxSteps`.

### Wave 2: Kinetic 4-Step Slide Components (8 Archetypes)
- **Target Directory:** `src/components/slides/revolution/`
- **Actions:**
  1. Construct orchestrators and leaf presentation components for Archetypes 01, 02, 04, 06, 08, 10, 12, 14.
  2. Wire `activeStep` and `maxSteps` into visual stage rails.
  3. Attach tactile direct step jumping (`onClick={() => jumpToStep(idx)}`).
  4. Apply 3-phase kinetic styling (`completed` 0.75 opacity + checkmark, `active` 1.0 opacity + halo, `future` 0.35 opacity).

### Wave 3: Flat Sovereign Slide Components (7 Archetypes)
- **Target Directory:** `src/components/slides/revolution/`
- **Actions:**
  1. Construct orchestrators and leaf presentation components for Archetypes 03, 05, 07, 09, 11, 13, 15.
  2. Implement dense panoramic Bento grids and live telemetry charts on the $1920 \times 1080$ canvas.
  3. Guarantee strict 1-step evaluation with zero ghost steps.

### Wave 4: Factory Generation & Modal/Renderer Registration
- **Target Files:**
  - `src/utils/kineticRevolutionFactories.ts`
  - `src/components/slides/SlideRenderer.tsx`
  - `src/components/builder/SlideCreatorModal.tsx`
  - `src/stores/initialDeck.ts`
- **Actions:**
  1. Author default JSON fixture generators for all 15 archetypes.
  2. Add switch cases to `SlideRenderer.tsx` rendering each new slide.
  3. Register all 15 archetypes with icons and category metadata in `SlideCreatorModal.tsx`.
  4. Seed showcase slides into `initialDeck.ts`.

### Wave 5: 12-Gate Quality Verification & Static Attestation
- **Actions:**
  1. Run `npx tsc --noEmit` and resolve all type discrepancies.
  2. Verify zero negative booleans (`disabled`, `hidden`, `isNotActive`).
  3. Verify zero yellow/amber text on light themes.
  4. Verify Alim Ul Karim is designated exclusively as "Chief Software Engineer".
  5. Hand off to Lead Orchestrator for single atomic GitMap release commit.

---

## 5. Non-Negotiable Worker Boundaries & Safety Directives

1. **TOTAL BAN ON GIT COMMANDS:** Subagent workers must NEVER run `git add`, `git commit`, `git push`, `git checkout`, or `git status`.
2. **TOTAL BAN ON COMMITS:** Workers must leave the repository staged/clean for the Lead Orchestrator to commit atomically via `gitmap cpf`.
3. **PRESERVE ALL WHITESPACE & SEMANTICS:** Strict adherence to existing coding guidelines, Less styles, and TypeScript standards.
4. **PURE LIVE DOM TYPOGRAPHY:** Zero canvas text blits, zero pre-rendered slide images.

---

## 6. Verification & Signoff Criteria

- [ ] `src/types/kineticRevolutionArchetypes.ts` exports contracts for all 15 archetypes.
- [ ] `calculateKineticRevolution15StepCount` correctly returns 4 for kinetic workflows and 1 for flat sovereign overviews.
- [ ] Every `.tsx` file in `src/components/slides/revolution/` contains $\le 100$ physical lines.
- [ ] All functions contain $\le 15$ physical lines.
- [ ] 100% positive boolean identifiers across all contracts and props.
- [ ] All 15 archetypes selectable in `SlideCreatorModal.tsx` and rendered in `SlideRenderer.tsx`.
- [ ] Zero WCAG AAA contrast violations in light and dark themes.
- [ ] Alim Ul Karim titled strictly as "Chief Software Engineer".
- [ ] Static type check `npx tsc --noEmit` passes with exit code 0.
