# Plan 51: Suite 2033 Global PPT Flat Step & 15-Slide Expansion

## User Request (Verbatim)
```text
# High Priority Instruction

Okay. So in the work presentation, you have a lot of things, a lot of customization, a lot of factors are missing from, let's say, global PPT, how the color themes, animation goes. You didn't, let's say, adapt much. Also, you can look into the coding guideline properly. There is a new design systems, those are added. I request you to understand those, try to update your spec regarding the new design concepts and see how you can improve and add more slides. I've been asking. So you should look into the flat slide, global PPT, step-by-step slide. You should do all these things, and probably you should try to improve at least, let's say, 15 slides, new 15 types of slides, try to improve in your system. Okay? That's the first thing you should work on. Go deep, point deep, and then

# Actionable Items Must Follow Non-Negotiable

1. Review and adapt the global PPT color themes and animations.
2. Examine and adhere to the new coding guidelines and design systems.
3. Update your specifications with the new design concepts.
4. Improve and add at least 15 new types of slides.
5. Analyze flat slides and step-by-step slides for improvements.

Must follow and spawn agent using 

@[.agents/skills/execute-parent-task-with-n-steps-v6]
```

## Status
- **Status:** PENDING
- **Created Date:** 2026-10-05

## Deliverables & Architectural Scope
1. **Global PPT Theme & Animation Synthesis**:
   - Synthesize Global PPT corporate presentation standards with the White Presentation reactive runtime engine.
   - Dual-mode semantic token architecture eliminating dark slabs on light themes (substituting `text-white`, `bg-slate-900` with `var(--pres-text)`, `var(--pres-bg-card)`, `var(--pres-border)`).
   - Strict 60/30/10 spatial balance and non-overlapping 4-plane depth hierarchy (Plane 0 Canvas base, Plane 1 Raised Bento, Plane 2 Elevated Active Focal Step, Plane 3 Floating HUD).
   - Northern UI/UX typography standard v1.3.3 (inviolable physical floor $\ge 14\text{px}$, Ubuntu display titles, Poppins narrative body, JetBrains Mono telemetry).
   - Pure DOM live typography mandate (zero canvas 2D text, zero rasterized slide screenshots).
   - 4 hardware-accelerated GPU kinetic motion keyframes in `src/styles/animations.less`:
     - `radarSweepPulse`
     - `pipelineDataFlow`
     - `cascadeRampGlow`
     - `metricPulseBeacon`
2. **Deterministic 3-Phase Kinetic Step Progression vs Flat Sovereign Clarity**:
   - 8 Kinetic Multi-Step Workflows (4 steps each): Deterministic evaluation of `completed` ($0.75$ opacity + checkmark), `active` ($1.00$ opacity + $1.02\text{x}$ scale + halo glow), `future` ($0.38$ opacity + $1.25\text{px}$ optical blur + click-to-jump interactive affordance).
   - 7 Flat Sovereign Overviews (1 step each): Single-step view ($1$ step) with all structural cards rendered at full $1.00$ opacity.
3. **15 Brand-New Slide Archetypes (Suite 2033 Catalog)**:
   - **8 Kinetic Multi-Step Workflows (4 Steps Each)**:
     1. `radar-threat-sweep-matrix`: 4-stage cyber threat surveillance, heuristic anomaly scoring, zero-trust containment, and sovereign audit telemetry.
     2. `pipeline-etl-lineage-flow`: 4-stage streaming data pipeline from multi-region ingestion and schema validation to stream processing and target lakehouse sync.
     3. `cascade-ramp-liquidity-waterfall`: 4-tier institutional capital liquidity waterfall across senior debt, mezzanine facility, preferred equity, and common surplus runway.
     4. `telemetry-beacon-mesh`: 4-phase distributed edge telemetry covering cluster health discovery, quorum heartbeats, consensus verification, and failover route re-balancing.
     5. `cloud-migration-wave-stream`: 4-wave enterprise workload cloud migration covering dependency discovery, container refactoring, pilot cutover, and legacy decommissioning.
     6. `agentic-dialectic-workflow`: 4-phase autonomous multi-agent reasoning covering hypothesis formation, adversarial debate, formal proof synthesis, and execution dispatch.
     7. `supply-chain-resilience-corridor`: 4-corridor supply chain continuity covering tier-1 supplier sourcing, multimodal freight transit, hub redundancy, and final-mile SLA assurance.
     8. `saas-expansion-retention-funnel`: 4-milestone post-sales customer expansion covering initial time-to-value, enterprise adoption, cross-sell expansion, and lighthouse advocacy.
   - **7 Flat Sovereign Overviews (1 Step Each)**:
     9. `sovereign-cloud-topology-matrix`: Single-step visual topology mapping multi-region cloud infrastructures across sovereign data zones, isolation enclaves, and regulatory flags.
     10. `board-capital-allocation-mosaic`: Board-level capital deployment strategy covering R&D reinvestment, strategic M&A reserves, share buybacks, and operational cash runway.
     11. `zero-trust-identity-perimeter`: Comprehensive zero-trust identity architecture mapping biometric tokens, continuous posture checks, adaptive risk engines, and micro-segmentation.
     12. `competitive-moat-radar-benchmark`: Multi-axis enterprise competitive defensibility scorecard assessing IP defensibility, network effects, distribution, and margin strength.
     13. `executive-talent-matrix-grid`: 9-box executive talent calibration grid mapping performance vs potential, succession readiness, retention flags, and leadership bench strength.
     14. `product-synergy-ecosystem-canvas`: Multi-product suite flywheel illustrating core platform modules, cross-product attach rates, shared API data flywheels, and switching costs.
     15. `esg-carbon-accounting-ledger`: Scope 1-3 corporate emissions accounting scorecard, decarbonization trajectory, renewable energy procurement, and disclosure readiness.
4. **Specification Deliverables**:
   - `02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/01-architecture-spec.md`
   - `02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/02-component-spec.md`
   - `02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/readme.md`
   - Master catalog entry in `02-spec/21-app/readme.md`

## Architectural Constraints & Quality Gates
- **CODE-RED-006R:** Maximum $\le 100$ lines per `.tsx` component file. Extract sub-panels and cards to subcomponents.
- **CODE-RED-011:** Executive Persona Attribution: Lead Architecture Alim Ul Karim, Chief Software Engineer.
- **Northern UI/UX v1.3.3:** Strict typography floor $\ge 14\text{px}$; mono telemetry badges $\ge 16\text{px}$. Pure DOM live text.
- **Zero Dark Slabs on Light Themes:** Replace `text-white`, `bg-slate-900` with `var(--pres-text)`, `var(--pres-bg-card)`, `var(--pres-border)`.
- **Zero Yellow-on-Light Contrast Rule:** Auto-invert yellow/amber text on light themes to deep amber-brown (`hsl(28 95% 26%)`) or slate ink.
- **No-Build / No-Test Rule during Planning & Spec Authoring:** All spec tasks execute without running build commands or tests.

## Execution Checklist
- [x] Create `02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/01-architecture-spec.md`
- [x] Create `02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/readme.md`
- [x] Update `02-spec/21-app/readme.md` to add row 68 for Chapter 51
- [x] Create `.ai-memory/plans/pending/51-suite2033-global-ppt-flat-step-and-15-slide-expansion.md`
- [ ] Update `.ai-memory/plans/readme.md` to register pending plan 51
- [ ] Author `02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/02-component-spec.md`
- [ ] Add 4 GPU keyframes to `src/styles/animations.less`
- [ ] Add Suite 2033 TypeScript interfaces to `src/types/suite2033Archetypes.ts`
- [ ] Implement 15 Suite 2033 slide components under `src/components/slides/suite2033/`
- [ ] Implement `src/components/slides/Suite2033SlideRenderer.tsx` and wire cascade into `PresentationView.tsx`
- [ ] Register sample slides in `src/stores/deckSegments/suite2033Segment.ts` and `initialDeck.ts`
