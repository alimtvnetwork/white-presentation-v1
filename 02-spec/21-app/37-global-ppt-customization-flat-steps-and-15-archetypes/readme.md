# 37-Global PPT Customization, Flat Steps & 15 Slide Archetypes

> **Specification Identifier:** `02-spec/21-app/37-global-ppt-customization-flat-steps-and-15-archetypes`  
> **Status:** `APPROVED CANONICAL ARCHITECTURAL SPECIFICATION`  
> **Target Release:** `v1.9.0`  
> **Lead Architect:** Chief Software Engineer (Alim Ul Karim)  
> **Created:** 2026-10-03  
> **Domain:** Global PPT Presentation Standards, 13 Canonical Corporate Palettes, Slide-Level Theme Overrides, 4 Inter-Slide Transition Modes, Kinetic Step Progression, Flat High-Density Telemetry, Northern UI/UX Design System (v1.3.3), Zero Yellow-on-Light Contrast Rule, 60/30/10 Visual Balance, 4-Plane Depth Elevation, and 15 Modern Enterprise Slide Archetypes (Archetypes 46 to 60)  

---

## 1. Specification Overview

This specification directory defines the comprehensive architectural blueprint for **Global PPT Customization, Flat Steps & 15 Enterprise Slide Archetypes (Archetypes 46 to 60)**. It codifies enterprise presentation engineering, declarative customization, kinetic intra-slide step progression, strict WCAG AAA color contrast compliance, and deterministic layout scaling anchored to a $1920 \times 1080$ virtual canvas.

The system synthesizes the following foundational architectural pillars:

1. **Global PPT Customization & 13 Corporate Master Themes:** Unifies high-contrast corporate presentation physics, fluid spring motion curves, space-separated HSL triplet theme tokens, and non-destructive hover mechanics across 13 canonical corporate themes, with full support for slide-level theme overrides (`slide.themeId`).
2. **Dynamic Inter-Slide Animation Engine:** Provides 4 selectable slide transitions (`slide`, `fade`, `zoom`, `rise`) governed by cubic-bezier physics (`cubic-bezier(0.22, 1, 0.36, 1)`) and hardware-accelerated GPU compositing.
3. **Northern UI/UX Design Standard (v1.3.3):** Mandates $\ge 14\text{px}-16\text{px}$ uppercase monospace pill badges, fluid typography clamps (`clamp()`), and 60/30/10 color distribution (60% background canvas, 30% surface structural cards, 10% high-contrast brand accents).
4. **Zero Yellow-on-Light Contrast Rule ($C_R \ge 5.2:1$ / $7.0:1$):** Mathematically eliminates illegible yellow, gold, and light amber text on light backgrounds through runtime luminance auto-inversion and high-contrast dual-mode text tokens.
5. **Pure Live DOM Typography Mandate:** Enforces 100% native HTML DOM elements (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<code>`, `<div>`) for all text. Zero rasterized bitmap text (PNG/JPEG/WebP) and zero `<canvas>` 2D bitmap text (`fillText`, `strokeText`).
6. **Flat & Step-by-Step Interactive Progression Engine:** Guarantees robust intra-slide step navigation with fixed boundary handling in `NavigationControls.tsx`, seamless keyboard shortcuts, and unified step count calculation across multi-step kinetic workflows and flat telemetry overviews.
7. **CODE-RED-006R Strict Sizing Cap:** Every `.tsx` component file must strictly remain $\le 100$ physical lines of code, delegating granular visual elements to dedicated leaf subcomponents housed in archetype subdirectories.
8. **Rule R1 Zero Build / Zero Test Routine Turns:** Prohibits project-wide compiler runs (`npm run build`, `pnpm build`) and heavy test suites during development turns, enforcing sub-second AST static checks and Python line verification.
9. **Executive Persona Standardization:** Universally standardizes Alim Ul Karim as **"Chief Software Engineer"** across all slides, reviewer badges, and cryptographic audit tags (Rule R11).

---

## 2. Specification Document Index

| Document | Title & Primary Scope | Author & Assigned Scope | Deliverables & Canonical Standards |
|:---|:---|:---|:---|
| [01-overview.md](01-overview.md) | **Global PPT Customization & Architecture Overview** | Spec Author 01 | Executive foundations, 60/30/10 visual balance, 4-plane elevation system, fluid `clamp()` typography curves, 3-phase step lifecycle (`completed`, `active`, `future`), and executive persona governance. |
| [02-data-contracts.md](02-data-contracts.md) | **Canonical TypeScript Interfaces & Production Data Contracts** | Spec Author 02 | 15 TypeScript interfaces extending `BaseSlide`, 100% affirmative positive booleans, step count calculation engine `calculateCustomizationSlideStepCount`, $1920 \times 1080$ coordinate budgets, ASCII layout wireframes, and production JSON fixtures. |
| [03-theme-motion-and-flat-progression.md](03-theme-motion-and-flat-progression.md) | **Visual Design System, Theming & Kinetic Physics** | Spec Author 01 | Space-separated HSL triplet token architecture, 13 canonical corporate themes, slide-level overrides, 4 inter-slide transitions, spring physics constants, and reusable kinetic step classes. |
| [04-verification-gates.md](04-verification-gates.md) | **12-Dimensional Automated Quality Verification Matrix** | Spec Author 02 | Automated 12-dimensional verification gates, sub-100-line AST checks, affirmative boolean guard rules, pure live DOM audit scripts, WCAG contrast verification, 15x12 requirements traceability matrix, and remediation runbook. |

---

## 3. Master Catalog: 15 New Enterprise Slide Archetypes (Archetypes 46 to 60)

The 15 modern enterprise slide archetypes in this suite are categorized into two complementary functional disciplines: **Multi-Step Kinetic Operational Workflows** (Archetypes 46 through 53) that progress interactively across 4 discrete phases, and **High-Density Flat Sovereign Telemetry Overviews** (Archetypes 54 through 60) that project dense operational status at a single glance.

### Group A: Interactive Multi-Step Progression Workflows (4 Steps Each, Kinetic 3-Phase Lifecycle)

| # | Type Identifier | Component Name | TypeScript Interface | Business Function & Strategic Intent | Layout Category | Step Count Formula | Focus Dynamic |
|:---:|:---|:---|:---|:---|:---:|:---:|:---|
| 46 | `neural-vector-search-topology` | `NeuralVectorSearchTopologySlide` | `NeuralVectorSearchTopologySlideData` | High-dimensional embedding pipeline tracking chunking, dense vector indexing, HNSW graph search, and re-ranking telemetry. | AI Infrastructure | $\max(\text{stages.length}, 1) = 4$ | Ingestion $\to$ HNSW Indexing $\to$ Approximate K-NN $\to$ Cross-Encoder Re-rank |
| 47 | `model-quantization-speculative-decoding` | `ModelQuantizationSpeculativeDecodingSlide` | `ModelQuantizationSpeculativeDecodingSlideData` | LLM optimization engine visualizing INT4/FP8 weight quantization, draft model generation, and target verification speedup. | AI Optimization | $\max(\text{stages.length}, 1) = 4$ | Base Weights $\to$ INT4 Matrix $\to$ Draft Token Engine $\to$ Target Verification |
| 48 | `llm-firewall-red-team-matrix` | `LlmFirewallRedTeamMatrixSlide` | `LlmFirewallRedTeamMatrixSlideData` | Real-time GenAI security firewall auditing prompt injection, jailbreak attempts, PII masking, and output safety policy enforcement. | AI Security | $\max(\text{stages.length}, 1) = 4$ | Prompt Triage $\to$ Vector Semantic Guard $\to$ PII Anonymizer $\to$ Output Safety SLA |
| 49 | `global-anycast-traffic-director` | `GlobalAnycastTrafficDirectorSlide` | `GlobalAnycastTrafficDirectorSlideData` | Planetary BGP Anycast routing mesh tracking edge PoP health, automated DDoS scrubbing, sub-millisecond DNS steering, and failover. | Global Network | $\max(\text{stages.length}, 1) = 4$ | Edge Ingress $\to$ DDoS Scrubbing $\to$ BGP Latency Steering $\to$ Origin Cutover |
| 50 | `cqrs-event-sourcing-fabric` | `CqrsEventSourcingFabricSlide` | `CqrsEventSourcingFabricSlideData` | Distributed event-sourced architecture visualizing command bus validation, append-only Kafka commit log, and materialized projection stores. | Event Fabric | $\max(\text{stages.length}, 1) = 4$ | Command Validation $\to$ Immutable Log $\to$ Projection Engine $\to$ Read View Finality |
| 51 | `sbom-slsa-provenance-attestation` | `SbomSlsaProvenanceAttestationSlide` | `SbomSlsaProvenanceAttestationSlideData` | End-to-end cryptographic software supply chain pipeline verifying hermetic builds, Cosign signatures, SLSA Level 3, and vulnerability gates. | Supply Chain Security | $\max(\text{stages.length}, 1) = 4$ | Source Commit $\to$ Hermetic Builder $\to$ Cosign Signature $\to$ Binary Attestation |
| 52 | `post-merger-integration-roadmap` | `PostMergerIntegrationRoadmapSlide` | `PostMergerIntegrationRoadmapSlideData` | Strategic M&A integration framework coordinating Day-1 operational cutover, identity federation, tech stack harmonization, and synergy capture. | Corporate Strategy | $\max(\text{stages.length}, 1) = 4$ | Day-1 Continuity $\to$ Identity Federation $\to$ Stack Harmonization $\to$ Synergy Target |
| 53 | `scope3-carbon-supply-chain-audit` | `Scope3CarbonSupplyChainAuditSlide` | `Scope3CarbonSupplyChainAuditSlideData` | ESG sustainability audit tracing supplier emissions, logistics freight carbon, CBAM regulatory filings, and offset certification. | ESG & Compliance | $\max(\text{stages.length}, 1) = 4$ | Scope 1/2 Baseline $\to$ Tier-1/2 Telemetry $\to$ CBAM Carbon Tax $\to$ Offset Audit |

### Group B: High-Density Flat Sovereign Telemetry Overviews (Flat 1-Step Density)

| # | Type Identifier | Component Name | TypeScript Interface | Business Function & Strategic Intent | Layout Category | Step Count Formula | Focus Dynamic |
|:---:|:---|:---|:---|:---|:---:|:---:|:---|
| 54 | `cspm-ciem-cloud-entitlement-graph` | `CspmCiemCloudEntitlementGraphSlide` | `CspmCiemCloudEntitlementGraphSlideData` | Multi-cloud entitlement matrix tracking least-privilege IAM drift, excessive role grants, dormant credentials, and blast radius isolation. | Cloud Security | $1$ Step (Flat) | Multi-Cloud Entitlement Graph & Excessive Role Remediation |
| 55 | `confidential-computing-enclave` | `ConfidentialComputingEnclaveSlide` | `ConfidentialComputingEnclaveSlideData` | Silicon-level enclave topology mapping AMD SEV-SNP / Intel SGX cryptographic memory isolation, attestation certificates, and zero-trust runtime. | Hardware Security | $1$ Step (Flat) | Hardware Enclave Memory Isolation & Cryptographic Attestation |
| 56 | `predictive-autoscaling-pod-matrix` | `PredictiveAutoscalingPodMatrixSlide` | `PredictiveAutoscalingPodMatrixSlideData` | Autonomous Kubernetes cluster workload scheduler tracking predictive ML traffic forecasts, spot instance slicing, and node reclamation SLAs. | Cloud Infrastructure | $1$ Step (Flat) | ML Traffic Forecast vs Scheduled Pod Rebalancing & Spot SLA |
| 57 | `capex-opex-capital-allocation` | `CapexOpexCapitalAllocationSlide` | `CapexOpexCapitalAllocationSlideData` | Multi-year corporate capital allocation analysis comparing infrastructure CapEx depreciation against Cloud OpEx runtime economics. | Corporate Finance | $1$ Step (Flat) | CapEx Depreciation Horizon vs Elastic OpEx Cloud Allocation |
| 58 | `transfer-pricing-tax-topology` | `TransferPricingTaxTopologySlide` | `TransferPricingTaxTopologySlideData` | Global multinational entity structure auditing cross-border IP royalties, OECD Pillar Two global minimum tax, and arm's-length transfer pricing. | Tax & Corporate Governance | $1$ Step (Flat) | OECD Pillar Two Compliance, IP Royalties & Sovereign Tax Reserves |
| 59 | `sales-quota-compensation-matrix` | `SalesQuotaCompensationMatrixSlide` | `SalesQuotaCompensationMatrixSlideData` | Enterprise sales performance cockpit visualizing team quota attainment, accelerators, pipeline coverage ratios, and CAC payback economics. | Revenue Operations | $1$ Step (Flat) | Quota Attainment Distribution, Pipeline Coverage & OTE Incentives |
| 60 | `executive-succession-leadership-bench` | `ExecutiveSuccessionLeadershipBenchSlide` | `ExecutiveSuccessionLeadershipBenchSlideData` | Boardroom leadership governance framework visualizing 9-box executive bench strength, retention risk, and emergency transition readiness. | Board Governance | $1$ Step (Flat) | 9-Box Talent Placement, Leadership Pipeline & Emergency Succession |

---

## 4. Architectural Guarantees & Non-Negotiable Boundaries

All subagents, lead orchestrators, and automated linters enforcing this specification must verify compliance with the following non-negotiable architectural mandates:

1. **Deterministic Viewport Anchoring:** All slides render within an absolute $1920\text{px} \times 1080\text{px}$ coordinate canvas. Content must fit within $x \in [80, 1840]\text{px}$ and $y \in [60, 1040]\text{px}$, preventing clipping, overflow scrollbars, and aspect-ratio skewing.
2. **Zero In-Place Object Mutation:** State transitions and step updates must return new immutable objects. Modifying slide props or theme tokens in-place is strictly prohibited.
3. **100% Affirmative Boolean Semantics:** Every boolean field must use positive identifiers (`isEnabled`, `isVisible`, `isActive`, `hasPresenterNotes`). Negative booleans (`disabled`, `hidden`, `isNotActive`) and explicit truth comparisons (`== true`, `=== false`) are prohibited.
4. **WCAG AAA Compliance:** Body text ($< 18\text{pt} / 24\text{px}$) must satisfy a minimum contrast ratio of $4.5:1$ (AA) with a target of $7.0:1$ (AAA). Yellow text on light surfaces is strictly banned ($C_R < 4.5:1$).
5. **Pure Live DOM Typography Mandate:** All text must be pure selectable HTML elements (`<h1>`, `<h2>`, `<p>`, `<span>`, `<code>`). Zero rasterized image text and zero `<canvas>` 2D context text (`fillText`, `strokeText`).
6. **CODE-RED-006R Line Cap Enforcement:** No `.tsx` file shall exceed 100 physical lines. All slide components must decompose into discrete subcomponents located in dedicated subdirectories under `src/components/slides/<archetype>/`.
7. **Strict Rule R1 Zero Build Mandate:** No routine agent turn or verification step may execute `npm run build`, `npm test`, or full compiler pipelines. Only targeted static checks (`python 03-ai-scripts/05-guideline-autofixer.py`, Python line checkers) are permitted.
8. **Standardized Persona Governance:** Alim Ul Karim must be designated exclusively as **"Chief Software Engineer"** in all mock metadata, presenter notes, and audit blocks (Rule R11).
