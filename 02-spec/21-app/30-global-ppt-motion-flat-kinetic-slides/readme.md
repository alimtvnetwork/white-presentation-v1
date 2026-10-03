# 30-Global PPT Motion, Flat Kinetic Slides & Enterprise Synthesis: Master Specification Suite

> **Specification Suite Identifier:** `02-spec/21-app/30-global-ppt-motion-flat-kinetic-slides`  
> **Status:** `APPROVED CANONICAL ARCHITECTURE`  
> **Target Release:** `v1.4.0`  
> **Lead Architecture:** Alim Ul Karim, Chief Software Engineer  
> **Domain:** Global PPT Institutional Authority, Flat Slide Show Kinetic Step Progression, 15 Extended Slide Archetypes, HSL Triplet Tokens, Capsule Badges, Bubble Physics & Quality Governance  

---

## 1. Executive Summary & Architectural Synthesis

The **30-Global PPT Motion, Flat Kinetic Slides & Enterprise Synthesis** specification suite formalizes the deep unification of two presentation philosophies:

1. **Global PPT Institutional Authority (`global-ppt-v1`)**:
   - Executive-level boardroom authority, typographic clarity, and bilateral corporate narrative structures.
   - 10 authentic Global PPT master color themes defined strictly via unadorned **HSL triplet tokens** (`H S% L%`).
   - `.capsule-*` class hierarchy (`capsule-gold`, `capsule-ember`, `capsule-cream`, `capsule-ink`, `capsule-outline`, `capsule-meta`) with light-theme contrast inversions for `paper-ink` and `github-light`.
   - Optical micro-shadow tokens (`--text-shadow-weight-*`) for sub-pixel typography sharpness.
   - Fixed high-contrast dark Presenter HUD chrome tokens (`--chrome-*`).
   - Bubble physics simulation engine with 4 tuned presets (`servicesDefault`, `calm`, `dense`, `lively`) and pairwise force relaxation.

2. **Flat Slide Show Kinetic Step Progression (`flat-slide-show`)**:
   - Intra-slide micro-stages with a 3-phase kinetic lifecycle (`past` / `completed` at 0.75 opacity, `active` at 1.00 with glowing halo and spring physics, and `future` at 0.40 with $1.25\text{px}$ optical blur).
   - Damped harmonic spring physics ($k = 420\text{ N/m}$, $c = 17\text{ N}\cdot\text{s/m}$, $m = 0.8\text{ kg}$).
   - Pure live DOM typography: zero rasterized text graphics, 100% selectable and screen-reader accessible.
   - 15 Extended Slide Archetypes with active step consumption and zero phantom steps.

---

## 2. Specification Suite Document Index

| Document | File Path | Scope & Core Technical Coverage | Author |
|:---|:---|:---|:---:|
| **01-Overview** | [01-overview.md](01-overview.md) | Narrative arc architecture, 60/30/10 visual balance rules, 4-plane depth hierarchy, pure live DOM typography mandate, fluid typographic scaling on the 1920x1080 canvas, and persona standardization guidelines. | Spec Author 01 |
| **02-Data Contracts** | [02-data-contracts.md](02-data-contracts.md) | Canonical TypeScript schemas, discriminated union definitions, ASCII wireframes, pixel coordinate budgets, step count formulas, and JSON fixtures for all 15 extended slide archetypes. | Spec Author 01 |
| **03-Visual & Motion** | [03-visual-and-motion.md](03-visual-and-motion.md) | 10 Global PPT Master Color Themes with authentic HSL triplet tokens, light-theme capsule contrast inversions, dynamic micro-shadow contrast architecture, bubble physics presets, transition curves, and 3-phase step lifecycle. | Spec Author 02 |
| **04-Verification Gates** | [04-verification-gates.md](04-verification-gates.md) | 12-dimensional automated quality verification matrix: component sizing cap ($\le 100$ lines), positive boolean enforcement via `booleanGuards.ts`, persona standardization, pure live DOM text, active step progression, WCAG 2.1 AA contrast, secrets quarantine, file caps, atomic commits, canvas geometry, and acoustic safety. | Spec Author 02 |

---

## 3. The 15 Extended Slide Archetypes

1. **`personal-vpn`**: Consumer Infrastructure & Network Node (FreeBSD, WireGuard, OpenVPN, 300+ servers, 29 countries).
2. **`meeting-transcript`**: Real-time Meeting Transcript & Audio Diarization (speaker turns, waveform, 3-device fan-out perspective).
3. **`llm-benchmark`**: LLM Token Stream & Model Arena (live token stream, TTFT/latency KPIs, on-device private processing).
4. **`services-gravity`**: Services Bubble Gravity & Orbital Solar System (center sun, rotating satellites, interactive physics).
5. **`seo-dominance`**: SEO Evolution & Search Dominance (4-era difficulty ladder 2015-2025, organic CTR drop, 3x2 technical audit).
6. **`staff-aug-pipeline`**: Staff Augmentation / Candidate Vetting Pipeline (6-stage bilateral vetting funnel, 1000:3 ratio).
7. **`craftsmanship-benchmark`**: Precision Craftsmanship & Luxury Standard (Rolex framing, gold halo, Federer vs Kohli prestige).
8. **`weekly-cadence`**: Global Remote Work Culture & Timezone Heatmap (Sun–Thu operating rhythm, deep-work blocks).
9. **`competitive-moat`**: Multi-Dimensional Competitive Moat (shimmer headline, hover capsule pills, modal expand cards).
10. **`rapid-feedback`**: Rapid Iteration & Sprint Feedback Loop (4 circular stages, dynamic SVG jumping arched arrows).
11. **`interactive-poll`**: Interactive Live Audience Polling (real-time percentage bars, vote counts, live selection highlight).
12. **`live-qa`**: Live Q&A Curation Stream (upvote stream sorting, question submission input, live upvote counter).
13. **`embed-stage`**: Interactive Web Embed & Sandboxed Stage (secure sandboxed iframe, 16:9 stage container, telemetry badge).
14. **`countdown-launch`**: Event & Product Launch Countdown (color-shifting countdown gradient green → amber → red, t-minus clock).
15. **`executive-takeaways`**: Bipartite Executive Briefing / Decision Protocol (split view: synopsis & ROI on left, action matrix on right).

---

## 4. Implementation Roadmap & Source File Mapping

```
Codebase Implementation Mapping:
├── Color Theming, Capsule System & Physics (Task-02 - Worker 01)
│   ├── src/styles/variables.less          (HSL triplet tokens, --chrome-* tokens, micro-shadows)
│   ├── src/styles/presentation.less       (.capsule-* classes and light-theme contrast overrides)
│   ├── src/themes/gradientTokens.ts       (10 HSL themes + 10-step ramps + aliases)
│   ├── src/themes/themeRuntime.ts         (CSS custom properties injection & persistence)
│   ├── src/utils/motionPhysics.ts         (Bubble physics presets & simulation helpers)
│   └── src/components/canvas/SlideBackground.tsx (Micro-shadows, radial wash, dot-matrix)
├── Store, Types & Extended Slide Factories (Task-03 - Worker 01)
│   ├── src/types/extendedArchetypes.ts    (TypeScript discriminated unions & schemas for 15 archetypes)
│   ├── src/types/presentation.ts          (Register types in SlideType and SlideData)
│   ├── src/stores/deckStore.ts            (Intra-slide activeStep management & stepCount formulas)
│   └── src/utils/extendedSlideFactories.ts (Factory defaults & step calculation)
├── First Wave Slide Components (Task-04 - Worker 02)
│   ├── src/components/slides/PersonalVpnSlide.tsx + vpn/
│   ├── src/components/slides/MeetingTranscriptSlide.tsx + transcript/
│   ├── src/components/slides/LlmBenchmarkSlide.tsx + llm/
│   ├── src/components/slides/ServicesGravitySlide.tsx + gravity/
│   ├── src/components/slides/SeoDominanceSlide.tsx + seo/
│   ├── src/components/slides/StaffAugPipelineSlide.tsx + staff/
│   └── src/components/slides/CraftsmanshipBenchmarkSlide.tsx + craft/
├── Second Wave Slide Components & Renderer (Task-05 - Worker 02)
│   ├── src/components/slides/WeeklyCadenceSlide.tsx + cadence/
│   ├── src/components/slides/CompetitiveMoatSlide.tsx + moat/
│   ├── src/components/slides/RapidFeedbackSlide.tsx + feedback/
│   ├── src/components/slides/InteractivePollSlide.tsx + poll/
│   ├── src/components/slides/LiveQaSlide.tsx + qa/
│   ├── src/components/slides/EmbedStageSlide.tsx + embed/
│   ├── src/components/slides/CountdownLaunchSlide.tsx + countdown/
│   ├── src/components/slides/ExecutiveTakeawaysSlide.tsx + executive/
│   ├── src/components/slides/ExtendedSlideRenderer.tsx (Routing for all 15 archetypes)
│   ├── src/components/slides/SlideRenderer.tsx (Fallback delegate)
│   └── src/stores/initialDeck.ts          (Deck registration with authentic steps)
└── Coding Guidelines Remediation & Quality Gates (Task-06 - Lead Orchestrator)
    ├── src/utils/booleanGuards.ts         (Affirmative boolean helpers)
    └── affected component files          (Elimination of raw negations, <= 100 lines verification)
```
