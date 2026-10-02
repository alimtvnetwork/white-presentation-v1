# 29-Corporate PPT & Kinetic Flat Slides: Specification Suite & Master Index

> **Specification Suite Identifier:** `02-spec/21-app/29-corporate-ppt-kinetic-flat-slides`  
> **Status:** `APPROVED CANONICAL ARCHITECTURE`  
> **Target Release:** `v1.3.0`  
> **Lead Architecture:** Spec Author 01 & Spec Author 02  
> **Updated:** 2026-10-02  
> **Domain:** Global PPT Institutional Authority, Flat Slide Show Kinetic Step Progression, 15 Enterprise Slide Archetypes, Theming, Motion Physics & Quality Governance  

---

## 1. Executive Summary & Architectural Synthesis

The **29-Corporate PPT & Kinetic Flat Slides** specification suite standardizes the synthesis between two premier presentation philosophies within the White Presentation System:

1. **Global PPT Institutional Authority (`global-ppt-v1`):**
   - High-stakes boardroom credibility, executive typographic hierarchy, and bilateral corporate narrative structures.
   - 10 authentic Global PPT master color themes defined with authentic HSL triplet tokens (`bright-gold`, `noir-gold`, `vscode-dark`, `dracula`, `monokai`, `github-light`, `paper-ink`, `macos-sonoma`, `windows-11`, `navy-blue`).
   - Dynamic optical micro-shadows (`rgb(0 0 0) 1px 0.7px 0px` for dark themes, `rgb(255 255 255) 1px 0.7px 0px` for light themes) for sub-pixel text sharpness.
   - Fixed high-contrast dark presenter HUD with capsule inversion for light themes.
   - Persona standardization: **Alim Ul Karim** is strictly designated as **Chief Software Engineer**.

2. **Flat Slide Show Kinetic Step Progression (`flat-slide-show`):**
   - Intra-slide micro-stages with a 3-phase kinetic lifecycle (`past`, `active`, `future` with optical $1.25\text{px}$ blur).
   - Damped harmonic spring physics ($k = 420\text{ N/m}$, $c = 17\text{ N}\cdot\text{s/m}$, $m = 0.8\text{ kg}$).
   - Framer Motion `layoutId="active-step-halo"` for seamless shared layout step tracking.
   - Pure live DOM typography: zero rasterized text graphics, 100% selectable and screen-reader accessible.
   - 15 Enterprise Slide Archetypes + Archetype 17 (`TimelineRailSlide`) with active step consumption and zero phantom steps.
   - Client-side WebAudio synthesizer sound engine requiring zero external audio media files.

```
+---------------------------------------------------------------------------------------------------+
|                        WHITE PRESENTATION SYNTHESIS ARCHITECTURE                                  |
+---------------------------------------------------------------------------------------------------+
|  [Global PPT Authority]        --> 10 HSL Master Palettes, Fixed Dark HUD, Micro-Shadows         |
|  [Flat Slide Progression]      --> 3-Phase Item Lifecycle (Completed, Active, Future 1.25px Blur)|
|  [15 Enterprise Archetypes]    --> Zero Phantom Steps; All 15 Archetypes Consume activeStep       |
|  [Archetype 17 Timeline Rail]  --> Continuous Horizontal SVG Rail + TimelineRailNode Beacon       |
|  [Design System & Guidelines]  --> 60/30/10 Balance, 4-Plane Depth, Positive Booleans, <=100 Lines|
|  [Quality Verification Matrix] --> 12 Automated Verification Gates, Zero Git Lock Contention      |
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Specification Suite Document Index

This specification directory is organized into four exhaustive, mutually reinforcing canonical architectural documents:

| Document | File Path | Scope & Core Technical Coverage | Author |
|:---|:---|:---|:---:|
| **01-Overview** | [01-overview.md](01-overview.md) | Narrative arc architecture, 60/30/10 visual balance rules, 4-plane depth hierarchy, pure live DOM typography mandate, fluid typographic scaling on the 1920x1080 canvas, and persona standardization guidelines. | Spec Author 01 |
| **02-Data Contracts** | [02-data-contracts.md](02-data-contracts.md) | Canonical TypeScript schemas, discriminated union definitions, ASCII wireframes, pixel coordinate budgets, step count formulas, and JSON fixtures for all 15 enterprise slide archetypes + Archetype 17 (`TimelineRailSlide`). | Spec Author 01 |
| **03-Visual & Motion** | [03-visual-and-motion.md](03-visual-and-motion.md) | 10 Global PPT Master Color Themes with authentic HSL triplet tokens, dynamic micro-shadow contrast architecture, damped harmonic spring physics ($k=420, c=17, m=0.8$), transition curves (`EXPO_OUT`, `OVERSHOOT`), Framer Motion `layoutId` step halos, 3-phase step lifecycle, and the client-side WebAudio synthesizer sound engine. | Spec Author 02 |
| **04-Verification Gates** | [04-verification-gates.md](04-verification-gates.md) | 12-dimensional automated quality verification matrix: component sizing cap ($\le 100$ lines), positive boolean enforcement via `booleanGuards.ts`, persona standardization, pure live DOM text, active step progression, WCAG 2.1 AA contrast, secrets quarantine, file caps, atomic commits, canvas geometry, subagent isolation, and acoustic safety. | Spec Author 02 |

---

## 3. The 15 Enterprise Slide Archetypes + Archetype 17

Every archetype features full intra-slide kinetic step progression, consuming `activeStep` from `deckStore` to drive the 3-phase visual lifecycle:

1. **`executive-summary`**: High-level corporate strategy briefing, 3 core pillars, executive takeaway banner.
2. **`system-architecture-flow`**: Distributed cloud/system topology, microservices, animated SVG packet rails.
3. **`roi-metric-calculator`**: Financial return model, baseline vs modernized yield, interactive payback timeline.
4. **`customer-journey-map`**: 5-stage customer experience lifecycle, touchpoint channels, sentiment curve, friction alerts.
5. **`matrix-comparison-grid`**: Feature comparison matrix across competitors with sovereign platform highlighted column.
6. **`tech-stack-grid`**: Layered architectural stack (Client, Gateway, Services, DB, Infra) with status chips.
7. **`team-hierarchy-org`**: Executive leadership structure and cross-functional squads with SVG reporting lines.
8. **`security-compliance-matrix`**: Regulatory posture (SOC2 Type II, ISO 27001, HIPAA, GDPR) with audit proof.
9. **`product-roadmap-timeline`**: Multi-quarter strategic roadmap (Q1-Q4) across parallel delivery swimlanes.
10. **`interactive-faq-flow`**: Executive Q&A hub with step-by-step accordion reveals and technical deep-dives.
11. **`key-metric-scorecard`**: 4-quadrant executive KPI scorecard with trend badges and historical mini-sparklines.
12. **`case-study-impact`**: Enterprise client transformation story (Challenge bottleneck, Solution, Yield).
13. **`dual-column-pros-cons`**: Bilateral trade-off analysis (Build vs Buy) with weighted operational scores.
14. **`interactive-code-playground`**: Split-pane syntax-highlighted code editor with live execution console drawer.
15. **`closing-cta-showcase`**: High-authority conclusion slide, dual action buttons, presenter bio, verified QR stamp.
16. **`timeline-rail` (Archetype 17)**: Continuous horizontal SVG timeline rail with step beacons, milestone cards, and animated progress connectors.

---

## 4. The 10 Global PPT Master Color Themes

Authentic HSL triplet tokens (space-separated `H S% L%`) provide dynamic opacity compositing via `hsl(var(--pres-accent-hsl) / <alpha>)`:

| Theme ID | Name | Polarity | Canvas Hex | Accent Hex | Header Micro-Shadow | Primary Use Case |
|:---|:---|:---:|:---:|:---:|:---|:---|
| `bright-gold` | Prestige Executive Keynote | Dark | `#0B0E14` | `#EAB308` | `rgb(0 0 0) 1px 0.7px 0px` | Executive Boardroom & Keynotes |
| `noir-gold` | Minimalist Matte & Gold | Dark | `#080808` | `#D4AF37` | `rgb(0 0 0) 1px 0.7px 0px` | Luxury Agency & Boutique Pitches |
| `vscode-dark` | Developer Workstation | Dark | `#1E1E1E` | `#007ACC` | `rgb(0 0 0) 1px 0.7px 0px` | Cloud Architecture & Tech Keynotes |
| `dracula` | Gothic Vampire Dark | Dark | `#282A36` | `#BD93F9` | `rgb(0 0 0) 1px 0.7px 0px` | Developer Tooling & Hackathons |
| `monokai` | Pro Code High-Contrast | Dark | `#272822` | `#A6E22E` | `rgb(0 0 0) 1px 0.7px 0px` | Engineering Deep-Dives |
| `github-light` | Pristine Open-Source White | Light | `#FFFFFF` | `#0969DA` | `rgb(255 255 255) 1px 0.7px 0px` | Public Documentation & Demos |
| `paper-ink` | Archival Cream Parchment | Light | `#FAF7F0` | `#1D4ED8` | `rgb(255 255 255) 1px 0.7px 0px` | Academic Whitepapers & Investment Memos |
| `macos-sonoma` | Cupertino Dusky Glass | Dark | `#12151D` | `#5E9EFF` | `rgb(0 0 0) 1px 0.7px 0px` | Product Design & UI Keynotes |
| `windows-11` | Fluent Mica Dark Slate | Dark | `#1A1D24` | `#60CDFF` | `rgb(0 0 0) 1px 0.7px 0px` | Enterprise Windows & SaaS Briefings |
| `navy-blue` | Sovereign Maritime Navy | Dark | `#050B18` | `#3B82F6` | `rgb(0 0 0) 1px 0.7px 0px` | Defense, Financial & Institutional |

---

## 5. Implementation Roadmap & Source File Mapping

The specifications map directly to the active engineering tasks in `.ai-memory/plans/pending/29-corporate-ppt-kinetic-flat-slides.md`:

```
Codebase Implementation Mapping:
├── Color Theming & Motion Engine (Task-02 - Worker 01)
│   ├── src/themes/gradientTokens.ts       (10 HSL themes + 10-step ramps + aliases)
│   ├── src/themes/themeRuntime.ts         (CSS custom properties injection & persistence)
│   ├── src/audio/soundEngine.ts           (Synthesized WebAudio sound cues & ducking)
│   ├── src/utils/motionPhysics.ts         (Harmonic spring constants & transition curves)
│   └── src/components/canvas/SlideBackground.tsx (Micro-shadows, radial wash, dot-matrix)
├── Store & Step Progression (Task-03 - Worker 01)
│   └── src/stores/deckStore.ts            (Intra-slide activeStep management & stepCount formulas)
├── 15 Slide Components Upgrade (Task-04 - Worker 02)
│   ├── src/components/slides/*.tsx        (15 enterprise slide files with 3-phase lifecycle)
│   └── src/utils/enterpriseSlideFactories.ts (Factory defaults & step calculation)
├── Archetype 17 Implementation (Task-05 - Worker 02)
│   ├── src/components/slides/TimelineRailSlide.tsx (Horizontal SVG rail layout <= 100 lines)
│   ├── src/components/slides/rail/        (TimelineRailNode, MilestoneCard subcomponents)
│   ├── src/stores/initialDeck.ts          (Deck registration with authentic steps)
│   └── src/components/canvas/SlideRenderer.tsx (Archetype routing)
└── Coding Guidelines Remediation (Task-06 - Lead Orchestrator)
    ├── src/utils/booleanGuards.ts         (Affirmative boolean helpers: isFalse, hasNot, etc.)
    └── affected component files          (Elimination of raw !is* negations and == true)
```

---

## 6. Execution & Verification Commands

```bash
# Automated 12-Dimensional Gate Verification
python 03-ai-scripts/05-guideline-autofixer.py src --check-only

# Component Line Count Verification (<= 100 lines)
pwsh -Command "Get-ChildItem -Path 'src/components/slides/*.tsx' | Where-Object { (Get-Content $_.FullName | Measure-Object -Line).Lines -gt 100 } | Select-Object Name"

# Persona Standardization Audit
pwsh -Command "Select-String -Path 'src/**/*.ts', 'src/**/*.tsx' -Pattern 'Alim Ul Karim.*(CEO|Founder|Lead Architect)'"

# Atomic Staging & Commit via GitMap (Lead Orchestrator Only)
gitmap cpf "presentation - synthesize global ppt themes motion and 15 slide archetypes with flat progression"
```
