# Plan: 43-Global PPT Evolution, Step Engine Mastery & 15 Slide Expansion

## User Request (Verbatim)
> # High Priority Instruction
> 
> Okay. So in the work presentation, you have a lot of things, a lot of customization, a lot of factors are missing from, let's say, global PPT, how the color themes, animation goes. You didn't, let's say, adapt much. Also, you can look into the coding guideline properly. There is a new design systems, those are added. I request you to understand those, try to update your spec regarding the new design concepts and see how you can improve and add more slides. I've been asking. So you should look into the flat slide, global PPT, step-by-step slide. You should do all these things, and probably you should try to improve at least, let's say, 15 slides, new 15 types of slides, try to improve in your system. Okay? That's the first thing you should work on. Go deep, point deep, and then
> 
> # Actionable Items Must Follow Non-Negotiable
> 
> 1. Review and adapt the global PPT color themes and animations.
> 2. Examine and adhere to the new coding guidelines and design systems.
> 3. Update your specifications with the new design concepts.
> 4. Improve and add at least 15 new types of slides.
> 5. Analyze flat slides and step-by-step slides for improvements.
> 
> Must follow and spawn agent using 
> 
> @[.agents/skills/execute-parent-task-with-n-steps-v6]
> 
> ## Additional Instructions
> 
> learn /learn if you have to learn something and /plan stuff before working please./plan/plan/plan

---

## 1. Executive Summary & Architecture Strategy
This plan achieves complete alignment of the White Presentation platform with Global PPT enterprise presentation conventions, incorporates the newly codified `02-spec/02-coding-guidelines/24-app-ui-design-system/01-design-principles.md` standards, deeply optimizes flat slides and interactive multi-step slides, authors canonical Chapter 43 specifications under `02-spec/21-app/43-global-ppt-evolution-step-engine-and-15-slide-expansion/`, registers 2 new high-contrast Global PPT light themes, and implements 15 brand-new, enterprise-grade slide archetypes across quantum-safe cryptography, AI agent hierarchical memory, active-active distributed sharding, zero-trust API mesh, autonomous vulnerability remediation, edge compute orchestration, cloud FinOps, and executive board AI governance.

### Architectural Core Principles
1. **60/30/10 Visual Spatial Balance:** 60% dominant canvas field wash (`--pres-bg`), 30% structural glassmorphic panels and Bento containers (`--pres-bg-card`, `--pres-border`), 10% vivid focal accents (`--pres-accent`).
2. **4-Plane Depth Hierarchy:** Strict separation between Plane 0 (Canvas Base, `translateZ(0px)`), Plane 1 (Raised Bento Panels, `translateZ(8px)`), Plane 2 (Elevated Active Focus, `translateZ(24px)`), and Plane 3 (Floating HUD / Modals, `translateZ(48px)`).
3. **Fluid Clamp Typography Scale Floor $\ge 14\text{px}$:** All kickers, step badges, and metadata pills use $\ge 14\text{px}$ floor (`clamp(14px, 1.125vw, 16px)`). Live pure DOM typography only.
4. **Tactile Physics & Magnetic Affordance:** Standardize `.step-interactive` hover lift, active press states, directional audio feedback, and 3-phase step lifecycle styling (`step-phase-past`, `step-phase-active`, `step-phase-future`).
5. **Zero Yellow-on-Light & WCAG AAA Contrast:** Every theme accent color resolves to $\ge 4.5:1$ contrast ratio against light backgrounds.
6. **Executive Persona Governance (CODE-RED-011):** Any mention of Alim Ul Karim is strictly styled as `"Chief Software Engineer"`.

---

## 2. Actionable Work Breakdown

| Task-ID | Module / Title | Primary Deliverable | Status | Target Files |
|:---|:---|:---|:---:|:---|
| **Task-01** | Global PPT Themes & Kinetic Motion | Ingest and adapt themes with strict 60/30/10 tokens, unadorned raw HSL triplets, register 2 light themes (`warm-editorial-terracotta`, `sapphire-executive-light`), add 3 new GPU keyframes, 3D card flip utility, and directional sound cues. | **IN_PROGRESS** | `src/themes/`, `src/styles/`, `src/audio/` |
| **Task-02** | Design System & Guidelines Adherence | Enforce 60/30/10 spatial balance, 4-plane depth hierarchy, fluid clamp typography scale ($\ge 14\text{px}$ floor), positive booleans, Zero Yellow-on-Light contrast, and Chief Software Engineer persona governance (CODE-RED-011). | **QUEUED** | `02-spec/02-coding-guidelines/`, `src/components/` |
| **Task-03** | Chapter 43 Specification Suite | Author canonical Chapter 43 specifications under `02-spec/21-app/43-global-ppt-evolution-step-engine-and-15-slide-expansion/` and register in master indices. | **QUEUED** | `02-spec/21-app/43-.../`, `02-spec/21-app/readme.md` |
| **Task-04** | 15 Brand-New Slide Archetypes | Implement 15 high-impact slide archetypes (8 Kinetic Multi-Step Workflows + 7 Flat Sovereign Overviews) with full renderer, factories, creator modal, and initial deck pre-seeding. | **QUEUED** | `src/types/`, `src/components/slides/`, `src/utils/`, `src/stores/` |
| **Task-05** | Flat & Step Slide Optimization | Consolidate step count calculation, fix TS2451 variable collision in `stepProgression.ts`, expand hit targets in `SlideIndicator.tsx`, wire interactive step click navigation, and apply `.step-interactive` tactile physics. | **QUEUED** | `src/utils/stepProgression.ts`, `src/components/canvas/`, `src/components/slides/` |

---

## 3. The 15 New Slide Archetypes (0 Collisions Verified)

### 8 Kinetic Multi-Step Workflows (4 Steps Each)
1. `pqc-migration-orchestration-flow`: CBOM Inventory -> Hybrid KEM Handshake -> ML-KEM/Dilithium -> HSM Attestation.
2. `agent-hierarchical-memory-pipeline`: Scratchpad Ephemeral -> Attention Working Window -> Vectorized Semantic -> Graph-RAG.
3. `active-active-sharding-consensus-mesh`: Shard Routing -> Multi-Raft Paxos Lease -> CRDT State Merge -> Quorum Commit.
4. `zero-trust-api-mesh-authorization`: Envoy Sidecar Interception -> SPIFFE SVID Attestation -> Cedar ABAC -> Enclave Route.
5. `autonomous-vulnerability-remediation-loop`: CVE Telemetry -> Generative Patch Synthesis -> Sandbox Fuzzing -> Canary Promotion.
6. `edge-compute-workload-orchestrator`: Proximity Probing -> Wasm Micro-Kernel Packaging -> Anycast Route Injection -> Edge Convergence.
7. `cloud-finops-unit-amortization-ladder`: Telemetry Ingestion -> Spot Eviction Arbitrage -> Pod Bin-Packing -> Margin Lock.
8. `executive-board-ai-risk-oversight`: Asset Inventory -> Algorithmic Impact Attestation -> Human-in-the-Loop Override -> Board Audit Sign-Off.

### 7 Flat Sovereign Overviews (1 Step Each)
9. `sovereign-qkd-optical-backbone`: Satellite-to-ground photon telemetry, QBER real-time monitor, Alice/Bob detectors.
10. `agent-swarm-memory-registry`: 4-pool swarm collective memory catalog, shared context window, snapshot commit hashes.
11. `hyperscale-database-sharding-topology`: Americas, EMEA, APAC geo-partitioned cluster nodes, Raft leader balancing.
12. `microservices-zero-trust-policy-map`: Workload-to-workload mTLS interconnection graph, cipher suite indicators, Cedar policy.
13. `autonomous-siem-incident-triage-matrix`: Ingestion stream, GenAI correlation cluster, sub-second automated mitigation actions.
14. `edge-infrastructure-fleet-density-matrix`: 280+ PoP density matrix, Anycast latency percentiles, bare-metal utilization.
15. `executive-board-fiduciary-esg-horizon`: ROIC/WACC capital allocation waterfall, CSRD/CBAM compliance, audit committee sign-off.
