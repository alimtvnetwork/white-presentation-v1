# 36-Global PPT Motion, Flat Kinetic & 15 Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/36-global-ppt-motion-flat-kinetic-and-15-slide-archetypes`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.8.0`  
> **Lead Architect:** Chief Software Engineer (Alim Ul Karim)  
> **Created:** 2026-10-03  
> **Domain:** Global PPT Presentation Standards, Kinetic Step Progression, Flat High-Density Telemetry, Northern UI/UX Design System, Zero Yellow-on-Light Contrast Rule, 60/30/10 Visual Balance, 4-Plane Depth Elevation, and 15 Modern Enterprise & Operational Slide Archetypes (Archetypes 31 to 45)  

---

## 1. Specification Overview

This specification directory defines the comprehensive architectural blueprint for the **Global PPT Motion System** and **15 Modern Slide Archetypes (Archetypes 31 to 45)**. It codifies high-authority presentation engineering, kinetic intra-slide step progression, strict WCAG AAA color contrast compliance, and deterministic layout scaling anchored to a $1920 \times 1080$ virtual canvas.

The system synthesizes the following foundational architectural pillars:

1. **Global PPT Corporate Standards:** Unifies high-contrast corporate presentation physics, fluid spring motion curves, space-separated HSL triplet theme tokens, and non-destructive hover mechanics across 10 production themes.
2. **Northern UI/UX Design Standard (v1.3.3):** Mandates $\ge 14\text{px}-16\text{px}$ uppercase pill badges, fluid typography clamps (`clamp()`), and 60/30/10 color distribution (60% background canvas, 30% surface structural cards, 10% high-contrast brand accents).
3. **Zero Yellow-on-Light Contrast Rule ($C_R \ge 5.2:1$ / $7.0:1$):** Mathematically eliminates illegible yellow, gold, and light amber text on light backgrounds through runtime luminance auto-inversion and high-contrast text tokens.
4. **Pure Live DOM Typography Mandate:** Enforces 100% native HTML DOM elements (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<div>`) for all text. Zero rasterized bitmap text (PNG/JPEG/WebP) and zero `<canvas>` 2D bitmap text (`fillText`, `strokeText`).
5. **CODE-RED-006R Strict Sizing Cap:** Every `.tsx` component file must strictly remain $\le 100$ physical lines of code, delegating granular visual elements to dedicated leaf subcomponents housed in archetype subdirectories.
6. **Rule R1 Zero Build / Zero Test Routine Turns:** Prohibits project-wide compiler runs (`npm run build`, `pnpm build`) and heavy test suites during development turns, enforcing sub-second AST static checks and Python line verification.
7. **Executive Persona Standardization:** Universally standardizes Alim Ul Karim as **"Chief Software Engineer"** across all slides, reviewer badges, and cryptographic audit tags (Rule R11).

---

## 2. Specification Document Index

| Document | Title & Primary Scope | Author & Assigned Scope | Deliverables & Canonical Standards |
|:---|:---|:---|:---|
| [01-overview.md](01-overview.md) | **Global PPT Motion Synthesis & Architecture Overview** | Spec Author 01 | Executive foundations, 60/30/10 visual balance, 4-plane elevation system, fluid `clamp()` typography curves, 3-phase step lifecycle (`completed`, `active`, `future`), and executive persona governance. |
| [02-data-contracts.md](02-data-contracts.md) | **Canonical TypeScript Interfaces & Production Data Contracts** | Spec Author 02 | 15 TypeScript interfaces extending `BaseSlide`, 100% affirmative positive booleans, step count calculation engine `calculateModernSlideStepCount`, $1920 \times 1080$ coordinate budgets, ASCII layout wireframes, and production JSON fixtures. |
| [03-theme-motion-and-flat-progression.md](03-theme-motion-and-flat-progression.md) | **Visual Design System, Theming & Kinetic Physics** | Spec Author 01 | Space-separated HSL triplet token architecture, 10 production themes, light-theme `--pres-accent-text` AAA contrast tokens, concentric halo rings, spring physics constants, and reusable kinetic step classes. |
| [04-verification-gates.md](04-verification-gates.md) | **12-Dimensional Automated Quality Verification Matrix** | Spec Author 02 | Automated 12-dimensional verification gates, sub-100-line AST checks, affirmative boolean guard rules, pure live DOM audit scripts, WCAG contrast verification, 15x12 requirements traceability matrix, and remediation runbook. |

---

## 3. Master Catalog: 15 Modern Slide Archetypes (Archetypes 31 to 45)

The 15 modern slide archetypes in this suite are categorized into two complementary functional disciplines: **Multi-Step Kinetic Operational Workflows** (Archetypes 31 through 38) that progress interactively across discrete phases, and **High-Density Flat Sovereign Telemetry Overviews** (Archetypes 39 through 45) that project dense operational status at a single glance.

| # | Type Identifier | Component Name | TypeScript Interface | Business Function & Strategic Intent | Layout Category | Step Count Formula | Focus Dynamic |
|:---:|:---|:---|:---|:---|:---:|:---:|:---|
| 31 | `enterprise-cloud-migration-funnel` | `EnterpriseCloudMigrationFunnelSlide` | `EnterpriseCloudMigrationFunnelSlideData` | 4-phase enterprise cloud migration funnel tracking workload discovery, wave planning, landing zone cutover, and cloud-native modernization with TCO savings. | Migration Funnel | $\max(\text{phases.length}, 1) = 4$ | Discovery $\to$ Wave Plan $\to$ Cutover $\to$ Modernization |
| 32 | `zero-trust-identity-perimeter` | `ZeroTrustIdentityPerimeterSlide` | `ZeroTrustIdentityPerimeterSlideData` | Defense-in-depth zero-trust security mesh enforcing hardware-bound identity, device posture, contextual authorization, and micro-segmentation. | Security Mesh Perimeter | $\max(\text{layers.length}, 1) = 4$ | Identity $\to$ Contextual Auth $\to$ Micro-Segmentation $\to$ Adaptive Telemetry |
| 33 | `ai-data-flywheel-lifecycle` | `AiDataFlywheelLifecycleSlide` | `AiDataFlywheelLifecycleSlideData` | Self-reinforcing generative AI flywheel tracking data harvesting, fine-tuning checkpoints, high-throughput inference gateways, and active human feedback. | Cyclic Flywheel Lifecycle | $\max(\text{stages.length}, 1) = 4$ | Data Harvesting $\to$ Fine-Tuning & DPO $\to$ Edge Inference $\to$ Active Feedback |
| 34 | `incident-command-war-room` | `IncidentCommandWarRoomSlide` | `IncidentCommandWarRoomSlideData` | Mission-critical P0/SEV-1 incident command war room visualizing blast radius, incident timeline, MTTR reduction, and blameless post-mortem signoff. | Command War Room | $\max(\text{phases.length}, 1) = 4$ | Alert Triage $\to$ Blast Containment $\to$ Canary Patch $\to$ Post-Mortem Signoff |
| 35 | `regulatory-gdpr-data-lineage` | `RegulatoryGdprDataLineageSlide` | `RegulatoryGdprDataLineageSlideData` | End-to-end GDPR/CCPA data provenance and cryptographic lineage tracker auditing user consent, cross-border tokenized pipelines, and right-to-erasure SLA. | Compliance Lineage Pipeline | $\max(\text{nodes.length}, 1) = 4$ | Consent Ingestion $\to$ Cross-Border Mesh $\to$ Tokenization Vault $\to$ Erasure Ledger |
| 36 | `saas-unit-economics-breakdown` | `SaaSUnitEconomicsBreakdownSlide` | `SaaSUnitEconomicsBreakdownSlideData` | Financial analysis of enterprise SaaS efficiency decomposing CAC, payback periods, Net Revenue Retention (NRR), Gross Margin COGS, and Rule of 40 performance. | Financial Breakdown | $\max(\text{pillars.length}, 1) = 4$ | CAC Payback $\to$ NRR Expansion $\to$ Gross Margin COGS $\to$ Rule of 40 |
| 37 | `global-fintech-ledger-settlement` | `GlobalFintechLedgerSettlementSlide` | `GlobalFintechLedgerSettlementSlideData` | High-throughput distributed double-entry financial settlement ledger managing real-time multi-currency FX netting, ISO 20022 messaging, and atomic finality. | Financial Ledger Pipeline | $\max(\text{steps.length}, 1) = 4$ | Ingestion Hashing $\to$ Multi-Currency Netting $\to$ ISO 20022 $\to$ Atomic Settlement |
| 38 | `multi-tenant-database-sharding` | `MultiTenantDatabaseShardingSlide` | `MultiTenantDatabaseShardingSlideData` | Distributed database architecture visualizing consistent hash-ring routing, tenant shard partitioning, read-replica lag, and Raft consensus failover. | Database Sharding Topology | $\max(\text{tiers.length}, 1) = 4$ | Hash Router $\to$ Shard Partitions $\to$ Read Replicas $\to$ Raft Consensus |
| 39 | `continuous-compliance-posture` | `ContinuousCompliancePostureSlide` | `ContinuousCompliancePostureSlideData` | Real-time governance telemetry dashboard tracking automated drift detection across SOC 2 Type II, ISO 27001, HIPAA, and PCI-DSS with audit-ready proof. | Governance Telemetry Dashboard | $1$ Step (Flat) | Real-Time Continuous Audit & Control Telemetry |
| 40 | `developer-platform-catalog-mesh` | `DeveloperPlatformCatalogMeshSlide` | `DeveloperPlatformCatalogMeshSlideData` | Internal Developer Platform (IDP) catalog and golden path mesh mapping production microservices, gRPC/OpenAPI contracts, and developer velocity SLAs. | Platform Catalog Mesh | $1$ Step (Flat) | Microservices Catalog, Golden Paths & Platform Health |
| 41 | `boardroom-market-inflection-thesis` | `BoardroomMarketInflectionThesisSlide` | `BoardroomMarketInflectionThesisSlideData` | High-stakes executive strategy thesis framing Total Addressable Market (TAM) expansion, disruptive market forces, competitive defensibility moats, and CAGR. | Strategic Executive Thesis | $1$ Step (Flat) | TAM Expansion, Disruption Wedge & 3-Year CAGR |
| 42 | `asymmetric-threat-defense-matrix` | `AsymmetricThreatDefenseMatrixSlide` | `AsymmetricThreatDefenseMatrixSlideData` | Comprehensive MITRE ATT&CK enterprise cyber defense matrix mapping hostile vectors against autonomous eBPF containment and air-gapped isolation controls. | Cyber Defense Matrix | $1$ Step (Flat) | Hostile Vector Mapping & Sub-Second Autonomous Containment |
| 43 | `hardware-accelerator-die-topology` | `HardwareAcceleratorDieTopologySlide` | `HardwareAcceleratorDieTopologySlideData` | Silicon-level semiconductor package microarchitecture visualizing HBM3e high-bandwidth memory stacks, tensor compute clusters, and TDP thermal distribution. | Semiconductor Die Topology | $1$ Step (Flat) | Silicon Micro-Architecture, HBM3e Mesh & Thermal TDP |
| 44 | `customer-experience-journey-delta` | `CustomerExperienceJourneyDeltaSlide` | `CustomerExperienceJourneyDeltaSlideData` | Customer experience transformation matrix comparing legacy fragmented touchpoints against frictionless autonomous journeys, quantifying CSAT and NPS gains. | CX Journey Delta Matrix | $1$ Step (Flat) | Legacy Friction vs Sovereign Experience Delta & CSAT Uplift |
| 45 | `executive-board-mandate-cta` | `ExecutiveBoardMandateCtaSlide` | `ExecutiveBoardMandateCtaSlideData` | Decisive boardroom closing slide encapsulating board mandate resolutions, phased capital allocation, regulatory milestone roadmap, and cryptographic signoff. | Executive Board Mandate | $1$ Step (Flat) | Board Resolution, Capital Tranches & Executive Action CTA |

---

## 4. Architectural Guarantees & Non-Negotiable Boundaries

All subagents, lead orchestrators, and automated linters enforcing this specification must verify compliance with the following non-negotiable architectural mandates:

1. **Deterministic Viewport Anchoring:** All slides render within an absolute $1920\text{px} \times 1080\text{px}$ coordinate canvas. Content must fit within $x \in [80, 1840]\text{px}$ and $y \in [60, 1040]\text{px}$, preventing clipping, overflow scrollbars, and aspect-ratio skewing.
2. **Zero In-Place Object Mutation:** State transitions and step updates must return new immutable objects. Modifying slide props or theme tokens in-place is strictly prohibited.
3. **100% Affirmative Boolean Semantics:** Every boolean field must use positive identifiers (`isEnabled`, `isVisible`, `isActive`, `hasPresenterNotes`). Negative booleans (`disabled`, `hidden`, `isNotActive`) and explicit truth comparisons (`== true`, `=== false`) are prohibited.
4. **WCAG AAA Compliance:** Body text ($< 18\text{pt} / 24\text{px}$) must satisfy a minimum contrast ratio of $4.5:1$ (AA) with a target of $7.0:1$ (AAA). Yellow text on light surfaces is strictly banned ($C_R < 4.5:1$).
5. **Pure Live DOM Typography Mandate:** All text must be pure selectable HTML elements (`<h1>`, `<h2>`, `<p>`, `<span>`, `<code>`). Zero rasterized image text and zero `<canvas>` 2D context text (`fillText`, `strokeText`).
6. **CODE-RED-006R Line Cap Enforcement:** No `.tsx` file shall exceed 100 physical lines. All slide components must decompose into discrete subcomponents located in dedicated subdirectories under `src/components/slides/<archetype>/`.
7. **Strict Rule R1 Zero Build Mandate:** No routine agent turn or verification step may execute `npm run build`, `npm test`, or full compiler pipelines. Only targeted static checks (`npx tsc --noEmit`, Python line checkers) are permitted.
8. **Standardized Persona Governance:** Alim Ul Karim must be designated exclusively as **"Chief Software Engineer"** in all mock metadata, presenter notes, and audit blocks (Rule R11).
