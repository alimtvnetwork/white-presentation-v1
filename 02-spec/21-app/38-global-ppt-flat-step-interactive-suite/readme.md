# 38-Global PPT Flat Step Interactive Suite

> **Specification Identifier:** `02-spec/21-app/38-global-ppt-flat-step-interactive-suite`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.9.0`  
> **Lead Architect:** Chief Software Engineer (Alim Ul Karim)  
> **Created:** 2026-10-03  
> **Domain:** Global PPT Presentation Standards, Flat Slide System Synthesis, 6-Tier HSL Token Contract with Variable Clean-Pass, Dark HUD Chrome Isolation, 3D Perspective Flip, Pure DOM Live Typography in 1920x1080 Canvas, 7 New Corporate Palettes, and 15 Modern Enterprise Slide Archetypes  

---

## 1. Specification Overview

This specification directory defines the comprehensive architectural blueprint for the **Global PPT Flat Step Interactive Suite (Module 38)**. It establishes an enterprise presentation framework synthesizing the narrative power of `global-ppt-v1` with the declarative agility, JSON-first contracts, and low-latency stepping of `flat-slide-show`.

The system synthesizes the following foundational architectural pillars:

1. **Global PPT & Flat Slide Show Synthesis:** Unifies narrative boardroom pacing, high-stakes pitch structure, and executive typography pairing (`Ubuntu` italic display headlines + `Poppins` interface prose) with declarative JSON schemas, responsive step progression, and non-blocking telemetry.
2. **6-Tier HSL Token Contract with Variable Clean-Pass:** Implements unadorned space-separated HSL triplets (`H S% L%`) across 6 architectural tiers, coupled with an active variable teardown pass on `#presentation-root` that eliminates style bleed between slide transitions.
3. **Permanent Dark HUD Chrome Isolation:** Decouples presentation controls (`NavigationControls.tsx`, `ThemePopover`, modal dialogues) into a permanent dark slate carbon glass layer (`--chrome-*`, $C_R \ge 12:1$) that guarantees pristine readability across light and dark slide canvases.
4. **Hardware-Accelerated 3D Perspective Flip:** Integrates a $1200\text{px}$ 3D perspective viewport enabling realistic card flips (`rotateY(180deg)`), horizontal transformation pans, and harmonic spring snap reveals.
5. **Pure Live DOM Typography Mandate:** Enforces 100% native HTML elements (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<div>`) across the entire presentation canvas. Zero rasterized bitmap images (PNG/JPEG/WebP) and zero `<canvas>` 2D bitmap text.
6. **Zero Yellow-on-Light Contrast Rule ($C_R \ge 7.0:1$):** Automatically inverts high-luminance accent colors (yellow, gold, cyan) to deep umber or royal navy ink on light surfaces, ensuring full WCAG AAA accessibility.
7. **Interactive Step Progression & Branching Navigation:** Supports intra-slide multi-stage workflows, direct step jumps (`1`–`9`), and executive decision branching shortcuts (`Y` / `N`).
8. **CODE-RED-006R Strict Sizing Cap:** Every `.tsx` component file must strictly remain $\le 100$ physical lines of code, delegating granular visual elements to dedicated leaf subcomponents.
9. **Rule R1 Zero Build / Zero Test Routine Turns:** Prohibits project-wide compiler runs (`npm run build`, `pnpm build`) and heavy test suites during development turns, enforcing sub-second AST static checks and Python line verification.
10. **Executive Persona Standardization:** Universally standardizes Alim Ul Karim as **"Chief Software Engineer"** across all slides, reviewer badges, and cryptographic audit tags (Rule R11).

---

## 2. Specification Document Index

| Document | Title & Primary Scope | Author & Assigned Scope | Deliverables & Canonical Standards |
|:---|:---|:---|:---|
| [01-overview.md](01-overview.md) | **System Architecture & Synthesis Overview** | Spec Subagent 01 | Executive foundations, synthesis of `global-ppt-v1` and `flat-slide-show`, 6-tier HSL token contract, variable clean-pass, dark HUD chrome isolation, 3D perspective flip, pure DOM live typography, and 15 new archetypes catalog. |
| [02-data-contracts.md](02-data-contracts.md) | **Canonical TypeScript Interfaces & Production Schemas** | Spec Subagent 01 | Discriminated union types `FlatGlobalSuiteSlideType` and `FlatGlobalSuiteSlideData`, step count engine `calculateFlatGlobalSuiteStepCount`, coordinate budgets ($1920 \times 1080$), ASCII wireframes, and production JSON fixtures for Archetypes 1 to 8. |
| [03-theme-motion-and-flat-progression.md](03-theme-motion-and-flat-progression.md) | **Visual Design System, Theming & Kinetic Physics** | Spec Subagent 02 | 7 new corporate theme presets, 10-step precision gradient ramps ($S_0$–$S_9$), variable clean-pass teardown engine, CSS keyframes (`perspectiveFlip3D`, `railPulse`), and spring dynamics ($k=420, c=17$). |
| [04-verification-gates.md](04-verification-gates.md) | **12-Dimensional Automated Quality Verification Matrix** | Spec Subagent 02 | Automated 12-dimensional verification gates, sub-100-line AST checks, affirmative boolean guard rules, pure live DOM audit scripts, WCAG contrast verification, 15x12 requirements traceability matrix, and remediation runbook. |

---

## 3. Master Catalog: 15 Modern Enterprise Slide Archetypes

The 15 slide archetypes in Module 38 are structured into two complementary functional disciplines: **Multi-Step Kinetic Operational Workflows** (Archetypes 1 through 8) that progress interactively across 4 discrete stages, and **High-Density Flat Sovereign Telemetry Overviews** (Archetypes 9 through 15) that project dense operational status at a single glance.

### Group A: Interactive Multi-Step Progression Workflows (4 Steps Each, Kinetic 3-Phase Lifecycle)

| # | Type Identifier | Component Name | TypeScript Interface | Business Function & Strategic Intent | Layout Category | Step Count Formula | Focus Dynamic |
|:---:|:---|:---|:---|:---|:---:|:---:|:---|
| 01 | `interactive-branching-close` | `InteractiveBranchingCloseSlide` | `InteractiveBranchingCloseSlideData` | Executive decision closing slide providing keyboard `Y`/`N` branching pathways, 3D card flip, and tailored commitment agendas. | Boardroom Close | $\max(\text{decisionStages.length}, 1) = 4$ | Context $\to$ Comparison $\to$ Branch Selected $\to$ Signoff |
| 02 | `before-after-showcase-pan` | `BeforeAfterShowcasePanSlide` | `BeforeAfterShowcasePanSlideData` | Interactive comparative breakdown showing legacy monolithic bottlenecks vs unified autonomous mesh with horizontal panning. | Transformation | $\max(\text{transformationStages.length}, 1) = 4$ | Audit Baseline $\to$ Decoupling $\to$ Mesh Cutover $\to$ GA |
| 03 | `search-serp-proof-lightbox` | `SearchSerpProofLightboxSlide` | `SearchSerpProofLightboxSlideData` | Verifiable organic search authority & #1 Google SERP proof with interactive modal lightbox inspection. | Marketing & SEO | $\max(\text{lightboxStages.length}, 1) = 4$ | Keyword Selection $\to$ Position $\to$ CTR $\to$ Payback |
| 04 | `cognitive-inversion-punchline` | `CognitiveInversionPunchlineSlide` | `CognitiveInversionPunchlineSlideData` | Strategic narrative slide shattering industry orthodoxy through empirical tension and a spring-snapped inversion punchline. | Thought Leadership | $\max(\text{punchlineStages.length}, 1) = 4$ | Orthodox Myth $\to$ Tension $\to$ Inversion $\to$ Breakthrough |
| 05 | `talent-pyramid-funnel-svg` | `TalentPyramidFunnelSvgSlide` | `TalentPyramidFunnelSvgSlideData` | Top 1% engineering vetting funnel rendering an SVG polygon pyramid tracing candidate volume down to principal staff. | Engineering Team | $\max(\text{funnelTiers.length}, 1) = 4$ | Ingress $\to$ Systems Deep-Dive $\to$ Arch Defense $\to$ Staff |
| 06 | `hexagonal-tech-cluster` | `HexagonalTechClusterSlide` | `HexagonalTechClusterSlideData` | Honeycomb hexagonal coordinate mesh mapping distributed microservices, Kafka event streams, and dependency clusters. | Tech Architecture | $\max(\text{inspectionPhases.length}, 1) = 4$ | Gateway $\to$ Event Fabric $\to$ Compute $\to$ Persistence |
| 07 | `connected-roadmap-rail-pulse` | `ConnectedRoadmapRailPulseSlide` | `ConnectedRoadmapRailPulseSlideData` | Multi-quarter strategic platform roadmap visualized as a high-speed transit rail with a traveling laser pulse indicator. | Product Roadmap | $\max(\text{milestoneStations.length}, 1) = 4$ | Q1 Foundation $\to$ Q2 Scale $\to$ Q3 AI Agents $\to$ Q4 Sovereign |
| 08 | `campaign-performance-lightbox` | `CampaignPerformanceLightboxSlide` | `CampaignPerformanceLightboxSlideData` | Multi-channel attribution matrix and CAC/LTV payback waterfall with interactive lightbox inspection drill-downs. | Revenue Operations | $\max(\text{campaignChannels.length}, 1) = 4$ | Spend Aggregation $\to$ Channel Audit $\to$ Payback $\to$ Signoff |

### Group B: High-Density Flat Sovereign Telemetry Overviews (Flat 1-Step Density)

| # | Type Identifier | Component Name | TypeScript Interface | Business Function & Strategic Intent | Layout Category | Step Count Formula | Focus Dynamic |
|:---:|:---|:---|:---|:---|:---:|:---:|:---|
| 09 | `cloud-infrastructure-topology` | `CloudInfrastructureTopologySlide` | `CloudInfrastructureTopologySlideData` | Multi-region cloud VPC, edge CDN, and failover health matrix tracking cross-datacenter latency and uptime SLAs. | Cloud Infrastructure | $1$ Step (Flat) | Multi-Region VPC & Edge CDN Mesh Health |
| 10 | `compliance-matrix-audit-grid` | `ComplianceMatrixAuditGridSlide` | `ComplianceMatrixAuditGridSlideData` | Global compliance ledger tracking SOC2, ISO 27001, FedRAMP, and GDPR security control attestations. | Governance & Security | $1$ Step (Flat) | Global Multi-Standard Security & Audit Controls |
| 11 | `unit-economics-waterfall-card` | `UnitEconomicsWaterfallCardSlide` | `UnitEconomicsWaterfallCardSlideData` | SaaS contribution margin, ARR expansion, COGS, CAC, and enterprise payback economics waterfall. | Financial Strategy | $1$ Step (Flat) | Gross Margin, Expansion NRR & Payback Horizon |
| 12 | `executive-board-governance-deck` | `ExecutiveBoardGovernanceDeckSlide` | `ExecutiveBoardGovernanceDeckSlideData` | Quarterly boardroom governance scorecard tracking quorum, committee resolutions, and strategic motions. | Boardroom Governance | $1$ Step (Flat) | Board Quorum, Committee Resolutions & Signoffs |
| 13 | `developer-platform-api-surface` | `DeveloperPlatformApiSurfaceSlide` | `DeveloperPlatformApiSurfaceSlideData` | High-density developer API telemetry matrix tracking gRPC/REST endpoints, latency distributions, and rate limits. | Developer Experience | $1$ Step (Flat) | Endpoint SLA, P99 Latency & Public API Health |
| 14 | `esg-environmental-footprint` | `EsgEnvironmentalFootprintSlide` | `EsgEnvironmentalFootprintSlideData` | Corporate sustainability audit tracking Scope 1/2/3 carbon emissions, datacenter PUE ratings, and renewable offsets. | ESG Sustainability | $1$ Step (Flat) | Scope 1/2/3 Accounting & Carbon Neutral Certification |
| 15 | `global-partner-ecosystem-grid` | `GlobalPartnerEcosystemGridSlide` | `GlobalPartnerEcosystemGridSlideData` | Global strategic alliance network tracking Tier-1 cloud partnerships, SI integration channels, and co-selling revenues. | Partner Ecosystem | $1$ Step (Flat) | Tier-1 Alliances, SI Ecosystem & Co-Sell ARR |

---

## 4. Architectural Guarantees & Non-Negotiable Boundaries

All subagents, lead orchestrators, and automated linters enforcing this specification must verify compliance with the following non-negotiable architectural mandates:

1. **Deterministic Viewport Anchoring:** All slides render within an absolute $1920\text{px} \times 1080\text{px}$ coordinate canvas. Content must fit within $x \in [80, 1840]\text{px}$ and $y \in [60, 1040]\text{px}$, preventing clipping, overflow scrollbars, and aspect-ratio skewing.
2. **Zero In-Place Object Mutation:** State transitions and step updates must return new immutable objects. Modifying slide props or theme tokens in-place is strictly prohibited.
3. **100% Affirmative Boolean Semantics:** Every boolean field must use positive identifiers (`isEnabled`, `isVisible`, `isActive`, `hasPresenterNotes`, `canBranch`). Negative booleans (`disabled`, `hidden`, `isNotActive`) and explicit truth comparisons (`== true`, `=== false`) are prohibited.
4. **WCAG AAA Compliance:** Body text ($< 18\text{pt} / 24\text{px}$) must satisfy a minimum contrast ratio of $4.5:1$ (AA) with a target of $7.0:1$ (AAA). Yellow text on light surfaces is strictly banned ($C_R < 4.5:1$).
5. **Pure Live DOM Typography Mandate:** All text must be pure selectable HTML elements (`<h1>`, `<h2>`, `<p>`, `<span>`, `<code>`). Zero rasterized image text and zero `<canvas>` 2D context text (`fillText`, `strokeText`).
6. **Variable Clean-Pass Enforcement:** Transitioning slides must actively purge managed CSS custom properties (`--pres-*`, `--gradient-*`, `--accent-*`) prior to attaching new tokens.
7. **Permanent Dark Chrome HUD:** Presentation navigation controls must strictly bind to `--chrome-*` tokens, isolated from slide canvas tokens.
8. **CODE-RED-006R Line Cap Enforcement:** No `.tsx` file shall exceed 100 physical lines. All slide components must decompose into discrete subcomponents located in dedicated subdirectories under `src/components/slides/<archetype>/`.
9. **Strict Rule R1 Zero Build Mandate:** No routine agent turn or verification step may execute `npm run build`, `npm test`, or full compiler pipelines. Only targeted static checks (`python 03-ai-scripts/05-guideline-autofixer.py`, Python line checkers) are permitted.
10. **Standardized Persona Governance:** Alim Ul Karim must be designated exclusively as **"Chief Software Engineer"** in all mock metadata, presenter notes, and audit blocks (Rule R11).
