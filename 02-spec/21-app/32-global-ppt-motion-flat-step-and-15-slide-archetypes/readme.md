# 32-Global PPT Motion, Flat Step & 15 Slide Archetypes: Master Specification Suite

> **Specification Suite Identifier:** `02-spec/21-app/32-global-ppt-motion-flat-step-and-15-slide-archetypes`  
> **Status:** `APPROVED CANONICAL ARCHITECTURE`  
> **Target Release:** `v1.5.0`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Global PPT Institutional Authority, Flat Slide Show Kinetic Step Progression, 15 Kinetic Slide Archetypes, Space-Separated HSL Triplet Tokens, Capsule Hierarchy, Framer Motion Spring Physics, Directional Transitions, Bubble Physics & Quality Governance  

---

## 1. Executive Summary & Architectural Synthesis

The **32-Global PPT Motion, Flat Step & 15 Slide Archetypes** specification suite formalizes the deep unification of two foundational presentation engineering paradigms:

1. **Global PPT Institutional Authority (`global-ppt-v1`)**:
   - Executive-level boardroom authority, typographic clarity, and bilateral corporate narrative structures.
   - 10 authentic Global PPT master color themes defined strictly via unadorned, space-separated **HSL triplet tokens** (`H S% L%`), unlocking direct alpha compositing (`hsl(var(--pres-accent) / <alpha>)`).
   - `.capsule-*` class hierarchy (`capsule-gold`, `capsule-ember`, `capsule-cream`, `capsule-ink`, `capsule-outline`, `capsule-meta`) with light-theme contrast auto-inversions for `paper-ink` and `github-light`.
   - Optical micro-shadow tokens (`--text-shadow-weight-*`) providing sub-pixel typography sharpness across high-DPI displays and conference room projectors.
   - Fixed high-contrast dark Presenter HUD chrome tokens (`--chrome-*`).
   - Bubble physics simulation engine with 4 tuned presets (`servicesDefault`, `calm`, `dense`, `lively`) and pairwise force relaxation.

2. **Flat Slide Show Kinetic Step Progression (`flat-slide-show`)**:
   - Intra-slide micro-stages with a deterministic **3-Phase Kinetic Lifecycle**:
     - `completed` (opacity $0.75$, scale $0.99$, desaturated $10\%$, verified checkmark badge, macro context preserved).
     - `active` (opacity $1.00$, scale $1.02$, elevated with glowing accent halo `layoutId="active-step-halo"` and spring snap).
     - `future` (opacity $0.40$, scale $0.97$, optical Gaussian blur at $1.25\text{px}$, pointer-events disabled).
   - Damped harmonic spring physics ($k = 420\text{ N/m}$, $c = 17\text{ N}\cdot\text{s/m}$, $m = 0.8\text{ kg}$, damping ratio $\zeta = 0.85$).
   - Dynamic kinetic keyframes (`@keyframes haloPulse`, `svgStrokeDash`, `bentoReveal`, `cardPop3D`, `audioWaveformPulse`, `dagNodeTraverse`, `canaryGaugeSweep`).
   - Directional slide transitions ($\pm 80\text{px}$) with kinetic motion variant CSS classes (`[data-motion-variant="lift"]`, `[data-motion-variant="slide"]`, `[data-motion-variant="parallax"]`).
   - **Pure Live DOM Typography Mandate**: zero rasterized text graphics, 100% accessible, selectable, and screen-reader compliant.
   - 15 Kinetic Slide Archetypes with active step consumption and zero phantom steps.

---

## 2. Specification Suite Document Index

| Document | File Path | Scope & Core Technical Coverage | Author |
|:---|:---|:---|:---:|
| **01-Overview** | [01-overview.md](01-overview.md) | Narrative arc architecture, 60/30/10 visual balance rules, 4-plane depth hierarchy, pure live DOM typography mandate, fluid typographic scaling on the 1920x1080 canvas, and persona standardization guidelines. | Spec Subagent 01 |
| **02-Data Contracts** | [02-data-contracts.md](02-data-contracts.md) | Canonical TypeScript schemas, discriminated union definitions, ASCII wireframes, pixel coordinate budgets, step count formulas, and JSON fixtures for all 15 kinetic slide archetypes. | Spec Subagent 01 |
| **03-Visual & Motion** | [03-visual-and-motion.md](03-visual-and-motion.md) | 10 Global PPT Master Color Themes with authentic HSL triplet tokens, 10 canonical legacy aliases, light-theme capsule contrast inversions, dynamic micro-shadow contrast architecture, Framer Motion spring physics ($k=420, c=17, m=0.8, \zeta=0.85$), dynamic kinetic keyframes (`haloPulse`, `svgStrokeDash`, `bentoReveal`, etc.), directional slide transitions ($\pm 80\text{px}$), kinetic variant CSS classes, bubble physics presets, transition curves, 3-phase step lifecycle, and WebAudio synthesizer sound engine. | Spec Subagent 02 |
| **04-Verification Gates** | [04-verification-gates.md](04-verification-gates.md) | 12-dimensional automated quality verification matrix: Hard Rule CODE-RED-006R ($\le 100$ lines per `.tsx` component), Rule R1 Zero Builds / Test Suites ban, fast targeted checks (Python line counter, `npx tsc --noEmit`), affirmative boolean rules (`booleanGuards.ts`), persona standardization ("Chief Software Engineer"), pure live DOM text, active step progression, WCAG 2.1 AA contrast, secrets quarantine, relative path compliance, atomic GitMap commits, canvas geometry, and acoustic safety. | Spec Subagent 02 |

---

## 3. The 15 Kinetic Slide Archetypes

### Part I: Multi-Step Operational Workflows (8 Archetypes)
1. **`executive-governance-matrix`**: Board Committee Oversight & Governance Pillars (Sequential committee charter, quorum & compliance focus, 4 steps).
2. **`okr-cascade-alignment`**: Company Vision to Quarterly Key Results (Strategic cascade down from Company Goal to Team Initiative, 3 steps).
3. **`competitive-battlecard`**: Competitor Parity Matrix & Strategic Moats (Strategic moat evaluation, objection handling & win rate, 3 steps).
4. **`launch-readiness-checklist`**: Production Stage-Gate & Go/No-Go Blocker Check (5-phase operational signoff & automated security gates, 5 steps).
5. **`developer-gateway-sandbox`**: API Gateway Routing, Auth & Mock Telemetry (Stepwise request ingress, policy auth & mock payload drawer, 4 steps).
6. **`rag-pipeline-topology`**: Retrieval-Augmented Generation 5-Stage DAG (5-stage RAG DAG traversal: Ingestion to LLM Context, 5 steps).
7. **`soc-incident-war-room`**: Real-time Incident Triage & MITRE Containment (4-phase incident triage, MITRE kill chain & quarantine).
8. **`merkle-tree-state-ledger`**: Cryptographic State Ledger & Root Verification (Cryptographic hash tree verification from leaf to root).

### Part II: High-Density Flat Sovereign Overviews (7 Archetypes)
9. **`cloud-cost-finops-optimizer`**: Multi-Cloud Unit Economics & Wastage Levers (High-density multi-cloud spend, unit cost & optimization ROI, 1 step).
10. **`customer-sentiment-radar`**: Multi-Axis NPS/CSAT Radar & Cohort Insights (6-dimension radar diagram, NPS distribution & verbatim quotes, 1 step).
11. **`investor-cap-table-waterfall`**: Venture Capital Equity Tranches & Waterfall Model (Equity tranches, liquidation preference & exit waterfall, 1 step).
12. **`realtime-event-stream-fabric`**: Pub/Sub Streaming Fabric, Partitions & Lag (Topic partition throughput, consumer group lag & dead-letters, 1 step).
13. **`supply-chain-risk-matrix`**: Tier 1/2/3 Vendor Vulnerability & Buffer Telemetry (Tier 1-3 supplier risk scoring, geopolitical buffer telemetry, 1 step).
14. **`talent-competency-radar`**: Engineering Seniority Matrix L4-L8 Radar (Engineering seniority level progression & competency radar).
15. **`sustainability-esg-scorecard`**: Scope 1/2/3 Emissions & Clean Energy PPA Scorecard (Scope 1/2/3 greenhouse gas emissions & renewable energy PPA, 1 step).

---

## 4. Implementation Roadmap & Source File Mapping

```
Codebase Implementation Mapping:
├── Color Theming, Capsule System & Physics
│   ├── src/themes/gradientTokens.ts       (10 HSL master themes + 10-step ramps + 10 canonical aliases)
│   ├── src/themes/themeRuntime.ts         (CSS custom properties injection & runtime persistence)
│   ├── src/styles/variables.less          (Space-separated HSL tokens, --chrome-* tokens, micro-shadows)
│   ├── src/styles/presentation.less       (.capsule-* classes and light-theme contrast auto-inversions)
│   ├── src/styles/animations.less         (Kinetic variant classes and keyframes: haloPulse, svgStrokeDash, etc.)
│   ├── src/utils/motionPhysics.ts         (Spring physics constants, bubble physics presets & simulation)
│   ├── src/audio/soundEngine.ts           (Web Audio API synthesized sound cues, whooshes, clicks)
│   └── src/components/canvas/SlideBackground.tsx (Micro-shadows, radial wash, dot-matrix)
├── Store, Types & Slide Factories
│   ├── src/types/globalPptArchetypes.ts   (TypeScript discriminated unions & schemas for 15 archetypes)
│   ├── src/types/presentation.ts          (Register types in SlideType and SlideData)
│   ├── src/stores/deckStore.ts            (Intra-slide activeStep management & stepCount formulas)
│   └── src/utils/globalPptSlideFactories.ts (Factory defaults & step calculation)
├── 15 Slide Components & Subcomponents (<= 100 lines each)
│   ├── src/components/slides/ExecutiveGovernanceMatrixSlide.tsx + governance/
│   ├── src/components/slides/OkrCascadeAlignmentSlide.tsx + okr/
│   ├── src/components/slides/CloudCostFinOpsOptimizerSlide.tsx + finops/
│   ├── src/components/slides/CustomerSentimentRadarSlide.tsx + sentiment/
│   ├── src/components/slides/CompetitiveBattlecardSlide.tsx + battlecard/
│   ├── src/components/slides/LaunchReadinessChecklistSlide.tsx + readiness/
│   ├── src/components/slides/DeveloperGatewaySandboxSlide.tsx + gateway/
│   ├── src/components/slides/RagPipelineTopologySlide.tsx + rag/
│   ├── src/components/slides/SocIncidentWarRoomSlide.tsx + soc/
│   ├── src/components/slides/MerkleTreeStateLedgerSlide.tsx + merkle/
│   ├── src/components/slides/InvestorCapTableWaterfallSlide.tsx + captable/
│   ├── src/components/slides/RealtimeEventStreamFabricSlide.tsx + eventstream/
│   ├── src/components/slides/SupplyChainRiskMatrixSlide.tsx + supplychain/
│   ├── src/components/slides/TalentCompetencyRadarSlide.tsx + radar/
│   ├── src/components/slides/SustainabilityEsgScorecardSlide.tsx + esg/
│   ├── src/components/slides/GlobalPptSlideRenderer.tsx (Routing for 15 archetypes)
│   ├── src/components/slides/SlideRenderer.tsx (Slide chain delegation)
│   └── src/stores/initialDeck.ts          (Deck registration with authentic steps)
└── Coding Guidelines Remediation & Quality Gates
    ├── src/utils/booleanGuards.ts         (Affirmative boolean helpers)
    └── affected component files          (Strict compliance: CODE-RED-006R, Rule R1, 100% affirmative booleans)
```
