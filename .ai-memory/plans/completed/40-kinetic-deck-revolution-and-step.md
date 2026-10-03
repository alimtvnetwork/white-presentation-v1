# Plan: 40-Kinetic Deck Revolution, Global PPT Synthesis & 15 Slide Archetypes

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
> learn /learn if you have to learn something and /plan stuff before working please./plan/plan/plan/plan/plan/plan/plan/plan/plan/plan/plan

---

## 1. Executive Summary & Architectural Scope
This plan orchestrates the evolution of the White Presentation Engine to align with Global PPT corporate presentation standards, incorporate the newly codified `02-coding-guidelines/24-app-ui-design-system/` principles, deeply optimize flat slides and interactive step-by-step slides, author comprehensive Chapter 40 specifications, and construct 15 brand-new, enterprise-grade slide archetypes across AI infrastructure, cloud telemetry, cybersecurity, financial SaaS, and executive strategy.

---

## 2. Discrete Actionable Work Breakdown

| Task-ID | Module / Title | Primary Deliverable | Target Files |
|:---|:---|:---|:---|
| **Task-01** | Global PPT Themes & Kinetic Motion | Ingest and adapt 20 themes with strict 60/30/10 custom property tokens and 5 new hardware-accelerated kinetic animations. | `src/styles/animations.less`, `src/styles/variables.less`, `src/styles/presentation.less`, `src/themes/themeRuntime.ts` |
| **Task-02** | Design System & Guidelines Adherence | Enforce 60/30/10 balance, 4-plane depth hierarchy, fluid typography scales, positive booleans, Zero Yellow-on-Light contrast, and Chief Software Engineer persona. | `src/components/`, `src/themes/`, `src/types/` |
| **Task-03** | Chapter 40 Specification Suite | Author canonical Chapter 40 specs in `02-spec/21-app/40-kinetic-deck-revolution-and-step/` and register in `02-spec/21-app/readme.md`. | `02-spec/21-app/40-kinetic-deck-revolution-and-step/*`, `02-spec/21-app/readme.md` |
| **Task-04** | 15 Brand-New Slide Archetypes | Implement 15 high-impact slide archetypes (8 Kinetic Multi-Step Workflows + 7 Flat Sovereign Overviews) with full renderer, factories, creator modal, and initial deck registration. | `src/types/kineticRevolutionArchetypes.ts`, `src/components/slides/revolution/*`, `src/utils/kineticRevolutionFactories.ts`, `src/components/builder/SlideCreatorModal.tsx`, `src/stores/initialDeck.ts` |
| **Task-05** | Flat & Step Slide Optimization | Consolidate `getSlideMaxSteps` calculation as single source of truth, wire interactive step click navigation (`onClick={() => jumpToStep(idx)}`), and refine 3-phase step lifecycle styling. | `src/utils/stepProgression.ts`, `src/stores/deckStore.ts`, `src/components/slides/` |

---

## 3. The 15 New Slide Archetypes

1. `gpu-cluster-fabric-interconnect` (Kinetic 4-Step): 8x GPU nodes, NVSwitch, 3.2 Tbps InfiniBand rails, RoCEv2 telemetry.
2. `rag-needle-haystack-benchmark` (Kinetic 4-Step): Context retrieval depth matrix (8K-2M tokens), accuracy heatmaps.
3. `ebpf-kernel-telemetry-observability` (Flat Sovereign): Linux kernel probe mesh (kprobes, tracepoints, socket filters), microsecond syscall latency.
4. `ai-inference-token-economics` (Kinetic 4-Step): TTFT, ITL, KV cache memory footprint, gross margins per 1M tokens.
5. `micro-frontend-federation-matrix` (Flat Sovereign): Composable host shell, 4 federated remote domains, shared runtime bus.
6. `progressive-delivery-canary-gate` (Kinetic 4-Step): Automated canary traffic shift (5% -> 25% -> 50% -> 100%), Prometheus error budgets.
7. `data-mesh-federated-governance` (Flat Sovereign): 4 decentralized domain data products (Customer, Billing, Telemetry, Logistics) with computational contracts.
8. `threat-exposure-ctem-matrix` (Kinetic 4-Step): 5-stage Gartner CTEM cycle, EPSS exploit telemetry, remediation velocity.
9. `subsea-cable-global-backbone` (Flat Sovereign): Trans-oceanic submarine fiber routing map, DWDM terabit capacity, latency benchmarks.
10. `multi-agent-reflection-deliberation` (Kinetic 4-Step): Planner, Executor, Critic, Verifier reasoning trees, confidence convergence curves.
11. `semantic-cache-hit-topology` (Flat Sovereign): Vector embedding similarity cache layer, cosine threshold, 85% latency reduction.
12. `saas-net-revenue-retention-cohort` (Kinetic 4-Step): Compounding customer cohorts from 100% baseline to 146% NRR with upsell/churn splits.
13. `confidential-mpc-key-vault` (Flat Sovereign): Distributed cryptographic threshold key-share custody ($t$-of-$n$ shards, Intel SGX / Nitro enclaves).
14. `developer-friction-dx-telemetry` (Kinetic 4-Step): DX friction stages from local IDE save to CI/CD pipeline and production deployment.
15. `boardroom-m-and-a-synergy-realization` (Flat Sovereign): M&A integration milestones, Day-100 target gates, EBITDA synergy capture ($46.8M run-rate).

---

## 4. Verification & Validation Protocol
- Run targeted static checks and linters.
- Zero Yellow-on-Light contrast verification.
- Positive boolean schema check.
- Single atomic GitMap commit upon completion: `gitmap cpf "presentation - implement chapter 40 kinetic deck revolution and 15 slide archetypes"`.
