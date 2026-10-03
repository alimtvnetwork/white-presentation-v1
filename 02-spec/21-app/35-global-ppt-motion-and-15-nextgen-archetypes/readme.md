# 35-Global PPT Motion, Design System & 15 Next-Gen Archetypes

> **Specification Identifier:** `02-spec/21-app/35-global-ppt-motion-and-15-nextgen-archetypes`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.7.0`  
> **Lead Architect:** Chief Software Engineer (Alim Ul Karim)  
> **Created:** 2026-10-03  
> **Domain:** Global PPT Presentation Standards, Kinetic Step Progression, Northern UI/UX Design System, Zero Yellow-on-Light Contrast Rule, 60/30/10 Visual Balance, 4-Plane Depth Elevation, and 15 Next-Gen Enterprise & Operational Slide Archetypes  

---

## 1. Specification Overview

This specification directory defines the comprehensive architectural blueprint for the **Global PPT Motion System** and **15 Next-Gen Enterprise & Operational Slide Archetypes**. It codifies high-authority presentation engineering, kinetic intra-slide step progression, strict WCAG AAA color contrast compliance, and deterministic layout scaling anchored to a $1920 \times 1080$ virtual canvas.

The system synthesizes the following foundational architectural pillars:

1. **Global PPT Corporate Standards:** Unifies high-contrast corporate presentation physics, fluid spring motion curves, space-separated HSL triplet theme tokens, and non-destructive hover mechanics across 10 production themes.
2. **Northern UI/UX Design Standard (v1.3.3):** Mandates $\ge 14\text{px}-16\text{px}$ uppercase pill badges, fluid typography clamps (`clamp()`), and 60/30/10 color distribution (60% background canvas, 30% surface structural cards, 10% high-contrast brand accents).
3. **Zero Yellow-on-Light Contrast Rule ($C_R \ge 5.2:1$ / $7.0:1$):** Mathematically eliminates illegible yellow, gold, and light amber text on light backgrounds through runtime luminance auto-inversion and high-contrast text tokens.
4. **Pure Live DOM Typography Mandate:** Enforces 100% native HTML DOM elements (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<div>`) for all text. Zero rasterized bitmap text (PNG/JPEG/WebP) and zero `<canvas>` 2D bitmap text.
5. **CODE-RED-006R Strict Sizing Cap:** Every `.tsx` component file must strictly remain $\le 100$ physical lines of code, delegating granular visual elements to dedicated leaf subcomponents housed in archetype subdirectories.
6. **Rule R1 Zero Build / Zero Test Routine Turns:** Prohibits project-wide compiler runs (`npm run build`, `pnpm build`) and heavy test suites during development turns, enforcing sub-second AST static checks and Python line verification.
7. **Executive Persona Standardization:** Universally standardizes Alim Ul Karim as **"Chief Software Engineer"** across all slides, reviewer badges, and cryptographic audit tags (Rule R11).

---

## 2. Specification Document Index

| Document | Title & Primary Scope | Author & Assigned Scope | Deliverables & Canonical Standards |
|:---|:---|:---|:---|
| [01-overview.md](01-overview.md) | **Global PPT Motion Synthesis & Architecture Overview** | Spec Author 01 | Executive foundations, 60/30/10 visual balance, 4-plane elevation system, fluid `clamp()` typography curves, 3-phase step lifecycle (`completed`, `active`, `future`), and executive persona governance. |
| [02-data-contracts.md](02-data-contracts.md) | **Canonical TypeScript Interfaces & Production Data Contracts** | Spec Author 02 | 15 TypeScript interfaces extending `BaseSlide`, 100% affirmative positive booleans, step count calculation engines, $1920 \times 1080$ coordinate budgets, ASCII layout wireframes, and production JSON fixtures. |
| [03-theme-motion-and-flat-progression.md](03-theme-motion-and-flat-progression.md) | **Visual Design System, Theming & Kinetic Physics** | Spec Author 01 | Space-separated HSL triplet token architecture, 10 production themes, light-theme `--pres-accent-text` AAA contrast tokens, concentric halo rings, spring physics constants, and reusable kinetic step classes. |
| [04-verification-gates.md](04-verification-gates.md) | **12-Dimensional Automated Quality Verification Matrix** | Spec Author 02 | Automated 12-dimensional verification gates, sub-100-line AST checks, affirmative boolean guard rules, pure live DOM audit scripts, WCAG contrast verification, and requirements traceability matrix. |

---

## 3. Master Catalog: 15 Next-Gen Slide Archetypes

The 15 slide archetypes in this suite are categorized into two complementary functional disciplines: **Multi-Step Kinetic Operational Workflows** (Archetypes 01 through 08) that progress interactively across discrete phases, and **High-Density Flat Sovereign Telemetry Overviews** (Archetypes 09 through 15) that project dense operational status at a single glance.

| # | Type Identifier | Component Name | TypeScript Interface | Business Function & Strategic Intent | Layout Category | Step Count Formula | Focus Dynamic |
|:---:|:---|:---|:---|:---|:---:|:---:|:---|
| 01 | `executive-storytelling-hook` | `ExecutiveStorytellingHookSlide` | `ExecutiveStorytellingHookSlideData` | Frames boardroom keynote tension, strategic paradoxes, and catalyst metrics to capture executive alignment in the opening 60 seconds. | Narrative Hook | $3$ Steps | Status Quo $\to$ Inevitable Inflection $\to$ Sovereign Opportunity |
| 02 | `leadership-synergy-duo` | `LeadershipSynergyDuoSlide` | `LeadershipSynergyDuoSlideData` | Profiles co-equal executive and technical leadership synergy (e.g. Chief Software Engineer & Strategic Product Director) with collaborative telemetry. | Leadership Profile | $2$ Steps | Executive 1 Focus $\to$ Executive 2 Focus (Unified Dynamic) |
| 03 | `operational-work-culture` | `OperationalWorkCultureSlide` | `OperationalWorkCultureSlideData` | Encodes engineering values, blameless rituals, and high-velocity cultural tenets into verifiable operational telemetry. | Culture Matrix | $\max(\text{tenets.length}, 1) = 4$ | Tenet 1 $\to$ Tenet 2 $\to$ Tenet 3 $\to$ Tenet 4 (Progressive Unpack) |
| 04 | `bento-capabilities-matrix` | `BentoCapabilitiesMatrixSlide` | `BentoCapabilitiesMatrixSlideData` | Organizes platform capabilities, AI engines, and enterprise integrations into an Apple/Linear-inspired asymmetric bento mosaic. | Bento Mosaic | $4$ Steps | Hero Cell $\to$ Primary Pillar $\to$ Telemetry Strip $\to$ Micro Metrics |
| 05 | `opportunity-cost-waterfall` | `OpportunityCostWaterfallSlide` | `OpportunityCostWaterfallSlideData` | Quantifies financial friction, legacy technical debt, and net ROI acceleration via an accounting-grade waterfall chart. | Financial Waterfall | $\max(\text{bars.length}, 1) = 5$ | Baseline Cost $\to$ Friction Losses $\to$ Modern Gains $\to$ Net Value |
| 06 | `benchmark-regional-pricing` | `BenchmarkRegionalPricingSlide` | `BenchmarkRegionalPricingSlideData` | Compares multi-region cloud economics, enterprise compute tiers, and SLA guarantees across global edge geographic zones. | Regional Pricing Table | $\max(\text{regions.length}, 1) = 3$ | US-East Baseline $\to$ EU-Central Expansion $\to$ APAC-South Mesh |
| 07 | `sprint-onboarding-roadmap` | `SprintOnboardingRoadmapSlide` | `SprintOnboardingRoadmapSlideData` | Directs developer/executive Day 1 to Day 90 onboarding milestones, Golden Paths, mentor pairing, and autonomy verification gates. | Onboarding Roadmap | $\max(\text{milestones.length}, 1) = 5$ | Day 1 $\to$ Day 14 $\to$ Day 30 $\to$ Day 60 $\to$ Day 90 Cutover |
| 08 | `simulated-browser-showcase` | `SimulatedBrowserShowcaseSlide` | `SimulatedBrowserShowcaseSlideData` | Renders a high-fidelity simulated browser window with macOS chrome controls, URL bar, SSL badge, and live interactive DOM application telemetry. | Browser Simulation | $3$ Steps | Window Chrome $\to$ Viewport Workspace $\to$ Interactive Telemetry Panel |
| 09 | `client-testimonial-wall` | `ClientTestimonialWallSlide` | `ClientTestimonialWallSlideData` | Displays verified enterprise customer testimonials, quantitative ROI metrics, and cryptographic customer authenticity seals. | Social Proof Masonry | $1$ Step (Flat) | High-Density Customer Quotes & Proof Points |
| 10 | `global-edge-mesh` | `GlobalEdgeMeshSlide` | `GlobalEdgeMeshSlideData` | Projects real-time Anycast edge network nodes, sub-50ms round-trip latency paths, and autonomous route failover health. | Infrastructure Topology | $1$ Step (Flat) | Global Edge POP Telemetry & Anycast Latency Map |
| 11 | `ai-governance-safety-governor` | `AiGovernanceSafetyGovernorSlide` | `AiGovernanceSafetyGovernorSlideData` | Inspects real-time LLM inference safety, prompt injection firewalls, hallucination filters, and regulatory audit logging gates. | AI Governance Pipeline | $1$ Step (Flat) | Multi-Stage AI Safety Guardrails & Audit Ledger |
| 12 | `developer-velocity-flywheel` | `DeveloperVelocityFlywheelSlide` | `DeveloperVelocityFlywheelSlideData` | Visualizes self-reinforcing developer velocity: fast local loops, instant CI/CD gates, preview environments, and live observability. | Velocity Flywheel | $1$ Step (Flat) | Continuous DORA Acceleration & Cycle Time Feedback |
| 13 | `strategic-decarbonization-esg` | `StrategicDecarbonizationEsgSlide` | `StrategicDecarbonizationEsgSlideData` | Details Science-Based Targets initiative (SBTi) Scope 1-3 greenhouse gas reductions, datacenter PUE efficiency, and carbon credit offsets. | ESG Sustainability | $1$ Step (Flat) | Net-Zero Decarbonization Wedges & SBTi Telemetry |
| 14 | `market-tension-quadrant` | `MarketTensionQuadrantSlide` | `MarketTensionQuadrantSlideData` | Positions platform capabilities on a 2x2 strategic quadrant (Execution Velocity vs. Architectural Governance) with competitor trajectories. | 2x2 Strategic Quadrant | $1$ Step (Flat) | Competitive Landscape & Sovereign Leadership Vector |
| 15 | `executive-close-contact` | `ExecutiveCloseContactSlide` | `ExecutiveCloseContactSlideData` | Boardroom closing slide delivering key decision requests, next steps timeline, QR verification badge, and executive contact credentials. | Executive Action Close | $1$ Step (Flat) | Strategic Call to Action & Executive Signoff |

---

## 4. Architectural Guarantees & Non-Negotiable Boundaries

All subagents, lead orchestrators, and automated linters enforcing this specification must verify compliance with the following non-negotiable architectural mandates:

1. **Deterministic Viewport Anchoring:** All slides render within an absolute $1920\text{px} \times 1080\text{px}$ coordinate canvas. Content must fit within $x \in [80, 1840]\text{px}$ and $y \in [60, 1040]\text{px}$, preventing clipping, overflow scrollbars, and aspect-ratio skewing.
2. **Zero In-Place Object Mutation:** State transitions and step updates must return new immutable objects. Modifying slide props or theme tokens in-place is strictly prohibited.
3. **100% Affirmative Boolean Semantics:** Every boolean field must use positive identifiers (`isEnabled`, `isVisible`, `isInteractive`, `hasDotMatrix`). Negative booleans (`disabled`, `hidden`, `isNotActive`) and double negatives (`!isNotActive`) are prohibited.
4. **WCAG AAA Compliance:** Body text ($< 18\text{pt} / 24\text{px}$) must satisfy a minimum contrast ratio of $4.5:1$ (AA) with a target of $7.0:1$ (AAA). Yellow text on light surfaces is strictly banned ($C_R < 4.5:1$).
5. **CODE-RED-006R Line Cap Enforcement:** No `.tsx` file shall exceed 100 physical lines. All slide components must decompose into discrete subcomponents located in dedicated subdirectories under `src/components/slides/<archetype>/`.
6. **Strict Rule R1 Zero Build Mandate:** No routine agent turn or verification step may execute `npm run build`, `npm test`, or full compiler pipelines. Only targeted static checks (`npx tsc --noEmit`, Python line checkers) are permitted.
7. **Standardized Persona Governance:** Alim Ul Karim must be designated exclusively as **"Chief Software Engineer"** in all mock metadata, presenter notes, and audit blocks (Rule R11).
