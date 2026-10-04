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
     1. `strategic-initiative-cascade`: Multi-year strategic horizons cascade (`cascadeHorizons`), high-level OKR mapping, and staged capital allocation.
     2. `ai-agent-orchestration-pipeline`: 4-phase autonomous multi-agent reasoning, swarm debate, sandboxed tool execution, and consensus verification (`orchestrationPhases`).
     3. `ma-synergy-realization-bridge`: Post-merger integration financial bridge tracking cumulative EBITDA accretion across 4 chronological waves (`synergyWaves`).
     4. `zero-day-incident-containment-loop`: Mission-critical cybersecurity crisis containment loop tracking MTTD/MTTR across 4 stages (`containmentSteps`).
     5. `cloud-migration-wave-stepper`: Enterprise multi-datacenter cloud migration stepper tracking workload cutover across 4 migration waves (`migrationWaves`).
     6. `customer-lifecycle-expansion-funnel`: Product-led growth customer journey from initial activation through enterprise expansion to global advocacy (`expansionStages`).
     7. `data-lineage-governance-flow`: End-to-end data provenance and regulatory compliance flow across 4 cryptographic hops (`governanceHops`).
     8. `product-release-burn-up-cadence`: Enterprise software delivery burn-up cadence and quality-gated release tracker across 4 quality gates (`releaseGates`).
   - **7 Flat Sovereign Overviews (1 Step Each)**:
     9. `global-infrastructure-topology-cockpit`: Multi-region sovereign datacenter clusters, Anycast BGP edge routing, and global backbone health overview.
     10. `saas-unit-economics-breakdown`: Investor-grade SaaS financial mechanics breakdown: CAC, LTV, Magic Number, Rule of 40, and cohort payback.
     11. `esg-sustainability-governance-matrix`: Comprehensive 3-pillar ESG framework compliance tracking: Environmental, Social, and Governance.
     12. `cap-table-ownership-waterfall`: Post-financing equity cap table, shareholder class dilution, and liquidation preference waterfall stack.
     13. `ai-model-evaluation-benchmark-radar`: Multi-axis LLM frontier model evaluation across 6 critical benchmark axes: Reasoning, Coding, Math, IFEval, Hallucination, and Tools.
     14. `enterprise-security-posture-radar`: CISO executive board radar mapping compliance across 6 core defense vectors and active certifications.
     15. `partner-ecosystem-value-map`: Global alliance and partner ecosystem value realization map across GSIs, Hyperscalers, ISVs, and Channel Resellers.
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
- [x] Author `02-spec/21-app/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/02-component-spec.md`
- [x] Author modular subtask plans in `.ai-memory/plans/subtasks/51-suite2033-global-ppt-flat-step-and-15-slide-expansion/`
- [ ] Add 4 GPU keyframes to `src/styles/animations.less`
- [ ] Add Suite 2033 TypeScript interfaces to `src/types/suite2033SlideTypes.ts`
- [ ] Implement 15 Suite 2033 slide components under `src/components/presentation/slides/suite2033/`
- [ ] Implement `src/components/presentation/slides/suite2033/Suite2033SlideRenderer.tsx` and wire cascade
- [ ] Register sample slides in `src/stores/deckSegments/suite2033Segment.ts` and `src/stores/initialDeck.ts`
