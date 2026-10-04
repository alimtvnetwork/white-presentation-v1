// lint-allow: file-size reason="Suite 2026 enterprise slide mock data factories" max=850
import type { SlideData } from '../types/presentation';
import type { ArchetypeOption } from './extendedSlideFactories';
import type {
  ExecutivePnlWaterfallTableSlideData,
  CompetitiveFeatureHeatmapSlideData,
  CustomerPersonaArchetypeSplitSlideData,
  GlobalDataJurisdictionBoundarySlideData,
  HardwareInterfaceBlueprintSlideData,
  MultiHorizonValueRealizationBridgeSlideData,
  TwoSidedEcosystemFlywheelSlideData,
  IshikawaRootCauseFishboneSlideData,
  ModularConsumptionPricingCalculatorSlideData,
  LiveProductViewportWalkthroughSlideData,
  EnterpriseRiskTaxonomyHeatmapSlideData,
  GlobalPartnerTieringLadderSlideData,
  TalentCompetencyGapHeatmapSlideData,
  SloErrorBudgetBurnWaterfallSlideData,
  WeightedDecisionTradeoffMatrixSlideData,
  CustomerChurnInterventionLadderSlideData,
} from '../types/suite2026Archetypes';

// =============================================================================
// 1. Executive PnL Waterfall Table Factory
// =============================================================================
export const createExecutivePnlWaterfallTableSlide = (id = `slide-${Date.now()}`): ExecutivePnlWaterfallTableSlideData => ({
  id,
  type: 'executive-pnl-waterfall-table',
  title: 'Executive P&L Waterfall Bridge: FY26 Gross-to-Net Delivery',
  subtitle: 'Audited walk from gross revenue ingress through hosting COGS, engineering OpEx, and adjusted EBITDA realization',
  kicker: 'FINANCIAL PERFORMANCE & P&L BRIDGE',
  fiscalPeriod: 'Q3 FY26',
  reportingCurrency: 'USD ($M)',
  baselineRevenueMillions: 142.5,
  netEbitdaMillions: 33.5,
  hasAuditedFinancials: true,
  stepHighlightRowIds: ['r1', 'r3', 'r7'],
  rows: [
    { id: 'r1', label: 'Gross Contract Revenue', category: 'Revenue', amountMillions: 142.5, variancePercent: 18.4, isPositive: true, isSubtotal: false, hasAuditVerification: true },
    { id: 'r2', label: 'Hosting & Cloud Infrastructure', category: 'COGS', amountMillions: -24.8, variancePercent: -3.2, isPositive: false, isSubtotal: false, hasAuditVerification: true },
    { id: 'r3', label: 'Gross Margin Baseline', category: 'Subtotal', amountMillions: 117.7, variancePercent: 14.1, isPositive: true, isSubtotal: true, hasAuditVerification: true },
    { id: 'r4', label: 'Research & Platform Engineering', category: 'OpEx', amountMillions: -38.2, variancePercent: 4.5, isPositive: false, isSubtotal: false, hasAuditVerification: true },
    { id: 'r5', label: 'Enterprise GTM & Marketing', category: 'OpEx', amountMillions: -31.4, variancePercent: -6.1, isPositive: false, isSubtotal: false, hasAuditVerification: true },
    { id: 'r6', label: 'General & Administrative', category: 'OpEx', amountMillions: -14.6, variancePercent: 1.2, isPositive: false, isSubtotal: false, hasAuditVerification: true },
    { id: 'r7', label: 'Adjusted EBITDA Delivery', category: 'Final', amountMillions: 33.5, variancePercent: 28.6, isPositive: true, isSubtotal: true, hasAuditVerification: true },
  ],
});

// =============================================================================
// 2. Competitive Feature Heatmap Factory
// =============================================================================
export const createCompetitiveFeatureHeatmapSlide = (id = `slide-${Date.now()}`): CompetitiveFeatureHeatmapSlideData => ({
  id,
  type: 'competitive-feature-heatmap',
  title: 'Competitive Capability Heatmap: Autonomous Enterprise Supremacy',
  subtitle: 'Granular capability benchmark across 6 core technical vectors against Tier-1 enterprise market incumbents',
  kicker: 'COMPETITIVE INTELLIGENCE & BENCHMARK',
  marketSegment: 'Enterprise Distributed Autonomous Platforms',
  competitorNames: ['CloudNative Inc', 'HyperScale X', 'Legacy Stack'],
  winRateAdvantagePercent: 34.2,
  hasThirdPartyValidation: true,
  capabilities: [
    { id: 'c1', capabilityName: 'Zero-Downtime Autonomous Canary', category: 'Reliability', ourScore: 98, competitorScores: { 'CloudNative Inc': 74, 'HyperScale X': 68, 'Legacy Stack': 42 }, hasCheckmark: true, isRecommended: true, isIndustryBenchmark: true },
    { id: 'c2', capabilityName: 'Hardware SPIFFE / SPIRE Identity', category: 'Security', ourScore: 96, competitorScores: { 'CloudNative Inc': 62, 'HyperScale X': 81, 'Legacy Stack': 35 }, hasCheckmark: true, isRecommended: true, isIndustryBenchmark: true },
    { id: 'c3', capabilityName: 'Monadic Result Error Contracts', category: 'Architecture', ourScore: 95, competitorScores: { 'CloudNative Inc': 58, 'HyperScale X': 64, 'Legacy Stack': 28 }, hasCheckmark: true, isRecommended: true, isIndustryBenchmark: false },
    { id: 'c4', capabilityName: 'Sub-5ms Global Edge Sharding', category: 'Latency', ourScore: 92, competitorScores: { 'CloudNative Inc': 70, 'HyperScale X': 79, 'Legacy Stack': 50 }, hasCheckmark: true, isRecommended: false, isIndustryBenchmark: true },
    { id: 'c5', capabilityName: 'Post-Quantum NIST FIPS 203/204', category: 'Cryptography', ourScore: 99, competitorScores: { 'CloudNative Inc': 45, 'HyperScale X': 52, 'Legacy Stack': 20 }, hasCheckmark: true, isRecommended: true, isIndustryBenchmark: true },
    { id: 'c6', capabilityName: 'Deterministic Unit Amortization', category: 'FinOps', ourScore: 94, competitorScores: { 'CloudNative Inc': 66, 'HyperScale X': 71, 'Legacy Stack': 48 }, hasCheckmark: true, isRecommended: false, isIndustryBenchmark: false },
  ],
});

// =============================================================================
// 3. Customer Persona Archetype Split Factory
// =============================================================================
export const createCustomerPersonaArchetypeSplitSlide = (id = `slide-${Date.now()}`): CustomerPersonaArchetypeSplitSlideData => ({
  id,
  type: 'customer-persona-archetype-split',
  title: 'Bilateral Customer Archetype Split: Technical vs Risk Stakeholders',
  subtitle: 'Comparative analysis of buyer motivations, operational friction points, and value drivers across primary personas',
  kicker: 'STAKEHOLDER SEGMENTATION & PERSONAS',
  primaryPersonaTitle: 'Autonomous Platform Architect',
  secondaryPersonaTitle: 'Chief Information Security Officer',
  marketShareSplit: '65% Architecture Champions / 35% Risk & Governance Officers',
  hasValidatedInterviews: true,
  dimensions: [
    { id: 'd1', dimensionName: 'Primary Operational Mandate', primaryPersonaValue: 'Sub-second CI/CD iteration & zero runtime regression', secondaryPersonaValue: 'Continuous cryptographic compliance & zero audit gaps', isPositive: true, isDifferentiator: true, hasQuantitativeMetric: true },
    { id: 'd2', dimensionName: 'Key Evaluation Metric', primaryPersonaValue: 'P99 cluster tail latency < 12ms', secondaryPersonaValue: '100% SPIFFE identity verification & SBOM attestation', isPositive: true, isDifferentiator: true, hasQuantitativeMetric: true },
    { id: 'd3', dimensionName: 'Greatest System Frustration', primaryPersonaValue: 'Fragile manual mocks & flaking end-to-end tests', secondaryPersonaValue: 'Opaque black-box models lacking audit trails', isPositive: false, isDifferentiator: true, hasQuantitativeMetric: false },
    { id: 'd4', dimensionName: 'Procurement Conversion Trigger', primaryPersonaValue: 'Direct developer ergonomic trial & CLI tooling', secondaryPersonaValue: 'SOC2 Type II, ISO 27001 & NIST 800-53 cert pack', isPositive: true, isDifferentiator: false, hasQuantitativeMetric: true },
  ],
});

// =============================================================================
// 4. Global Data Jurisdiction Boundary Factory
// =============================================================================
export const createGlobalDataJurisdictionBoundarySlide = (id = `slide-${Date.now()}`): GlobalDataJurisdictionBoundarySlideData => ({
  id,
  type: 'global-data-jurisdiction-boundary',
  title: 'Global Data Jurisdiction Boundary: Sovereign Enclave Topology',
  subtitle: 'Distributed geographic enclaves enforcing cryptographic data residency, local legal jurisdiction, and hardware isolation',
  kicker: 'DATA SOVEREIGNTY & JURISDICTION COMPLIANCE',
  complianceFramework: 'EU GDPR & US FedRAMP High Sovereign Enclave',
  globalCoveragePercent: 99.98,
  hasZeroTrustBoundaryActive: true,
  enclaves: [
    { id: 'e1', enclaveName: 'Frankfurt Sovereign Vault', geographicRegion: 'EU Central (DE)', jurisdictionLaw: 'EU GDPR / BDSG Art 25', dataClassification: 'Tier 1 Highly Confidential', latencyTargetMs: 8, isCompliant: true, hasActiveBoundary: true, hasHardwareIsolation: true },
    { id: 'e2', enclaveName: 'Ashburn GovCloud Enclave', geographicRegion: 'US East (VA)', jurisdictionLaw: 'FedRAMP High / ITAR', dataClassification: 'Restricted Defense Data', latencyTargetMs: 12, isCompliant: true, hasActiveBoundary: true, hasHardwareIsolation: true },
    { id: 'e3', enclaveName: 'Singapore Financial Edge', geographicRegion: 'APAC South (SG)', jurisdictionLaw: 'MAS TRM / PDPA Guidelines', dataClassification: 'Financial Clearing Core', latencyTargetMs: 15, isCompliant: true, hasActiveBoundary: true, hasHardwareIsolation: true },
    { id: 'e4', enclaveName: 'Tokyo Sovereign Cluster', geographicRegion: 'APAC East (JP)', jurisdictionLaw: 'APPI Cross-Border Standard', dataClassification: 'Proprietary IP Assets', latencyTargetMs: 14, isCompliant: true, hasActiveBoundary: true, hasHardwareIsolation: true },
  ],
});

// =============================================================================
// 5. Hardware Interface Blueprint Factory
// =============================================================================
export const createHardwareInterfaceBlueprintSlide = (id = `slide-${Date.now()}`): HardwareInterfaceBlueprintSlideData => ({
  id,
  type: 'hardware-interface-blueprint',
  title: 'Hardware Interface Blueprint: Silicon Accelerator Pinout Specification',
  subtitle: 'Physical form-factor blueprint documenting high-speed PCIe Gen 6.0 optical links, power envelopes, and thermal zones',
  kicker: 'HARDWARE ARCHITECTURE & SILICON SPECIFICATION',
  boardRevision: 'Rev 4.2 Silicon Interconnect',
  formFactor: 'OAM PCIe Gen 6.0 Fabric Module',
  hasThermalCertification: true,
  pinpoints: [
    { id: 'p1', interfaceName: 'PCIe Gen 6.0 x16 Primary Bus', pinoutStandard: 'CEM 6.0 Pin Group A', bandwidthGigabits: 256, operatingVoltage: '12V DC ± 2%', isHighSpeed: true, hasOpticalIsolation: true, isProductionReady: true },
    { id: 'p2', interfaceName: 'NVLink-C2C Chiplet Coherence', pinoutStandard: 'Direct Micro-Bump Array', bandwidthGigabits: 900, operatingVoltage: '0.85V Core', isHighSpeed: true, hasOpticalIsolation: false, isProductionReady: true },
    { id: 'p3', interfaceName: 'QSFP-DD 800G Optical Transceiver', pinoutStandard: 'MSA 8-Lane Dual Density', bandwidthGigabits: 800, operatingVoltage: '3.3V Logic', isHighSpeed: true, hasOpticalIsolation: true, isProductionReady: true },
    { id: 'p4', interfaceName: 'Baseboard Management Controller (BMC)', pinoutStandard: 'I2C / SPI / UART Header', bandwidthGigabits: 1, operatingVoltage: '3.3V Aux', isHighSpeed: false, hasOpticalIsolation: true, isProductionReady: true },
  ],
});

// =============================================================================
// 6. Multi-Horizon Value Realization Bridge Factory
// =============================================================================
export const createMultiHorizonValueRealizationBridgeSlide = (id = `slide-${Date.now()}`): MultiHorizonValueRealizationBridgeSlideData => ({
  id,
  type: 'multi-horizon-value-realization-bridge',
  title: 'Multi-Horizon Value Realization Bridge: 3-Year Enterprise ROI',
  subtitle: 'Staged progression bridging initial operational stabilization to compounding platform scale and enterprise equity value',
  kicker: 'STRATEGIC VALUE CREATION & CAPITAL REALIZATION',
  programHorizonTitle: 'Autonomous Enterprise Transformation Horizon',
  cumulativeValueTargetMillions: 84.5,
  hasBoardApproval: true,
  horizons: [
    { id: 'h1', horizonIndex: 1, horizonLabel: 'Horizon 1: Foundation & Hygiene', targetTimeline: 'Months 1-6 (FY26 Q1-Q2)', realizedValueMillions: 14.2, strategicObjective: 'Automated CI/CD linters, zero flaking tests & 100% schema consistency', isUnlocked: true, isPositive: true, hasExecutiveSignoff: true },
    { id: 'h2', horizonIndex: 2, horizonLabel: 'Horizon 2: Scale & Acceleration', targetTimeline: 'Months 7-18 (FY26 Q3-Q4)', realizedValueMillions: 32.8, strategicObjective: 'Decoupled domain services, multi-region failover & automated SIEM triage', isUnlocked: true, isPositive: true, hasExecutiveSignoff: true },
    { id: 'h3', horizonIndex: 3, horizonLabel: 'Horizon 3: Autonomous Dominance', targetTimeline: 'Months 19-36 (FY27-FY28)', realizedValueMillions: 37.5, strategicObjective: 'Self-healing cluster mesh, zero-latency edge caching & predictive autoscaling', isUnlocked: false, isPositive: true, hasExecutiveSignoff: false },
  ],
});

// =============================================================================
// 7. Two-Sided Ecosystem Flywheel Factory
// =============================================================================
export const createTwoSidedEcosystemFlywheelSlide = (id = `slide-${Date.now()}`): TwoSidedEcosystemFlywheelSlideData => ({
  id,
  type: 'two-sided-ecosystem-flywheel',
  title: 'Two-Sided Ecosystem Flywheel: Developer Supply & Enterprise Demand',
  subtitle: 'Self-reinforcing platform dynamics demonstrating compounding velocity across modular builder supply and high-ACV enterprise consumption',
  kicker: 'PLATFORM NETWORK EFFECTS & COMPOUNDING SCALE',
  flywheelTheme: 'Developer Ecosystem & Enterprise Procurement Engine',
  supplySideLabel: 'Developer Platform & Component Creators',
  demandSideLabel: 'Enterprise Workloads & Global Consumers',
  isFlywheelAccelerating: true,
  supplyStages: [
    { id: 's1', stageIndex: 1, stageTitle: 'Modular SDK Tooling', metricLabel: '24,000 Verified SDK Downloads', velocityMultiplier: 1.5, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
    { id: 's2', stageIndex: 2, stageTitle: 'Component Registry Expansion', metricLabel: '850+ Production Connectors', velocityMultiplier: 2.2, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
    { id: 's3', stageIndex: 3, stageTitle: 'Ecosystem Developer Density', metricLabel: '12,500 Active Platform Builders', velocityMultiplier: 3.4, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
    { id: 's4', stageIndex: 4, stageTitle: 'Sovereign Protocol Standardization', metricLabel: 'Industry RFC Standard Adopted', velocityMultiplier: 4.8, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
  ],
  demandStages: [
    { id: 'd1', stageIndex: 1, stageTitle: 'Enterprise Demand Aggregation', metricLabel: '$140M Pipeline Volume', velocityMultiplier: 1.6, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
    { id: 'd2', stageIndex: 2, stageTitle: 'Transaction Liquidity Surge', metricLabel: '185,000 TPS Peak Scale', velocityMultiplier: 2.4, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
    { id: 'd3', stageIndex: 3, stageTitle: 'Data Gravity Accrual', metricLabel: '4.8 PB Vectorized Context', velocityMultiplier: 3.8, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
    { id: 'd4', stageIndex: 4, stageTitle: 'Autonomous Revenue Flywheel', metricLabel: '142% Net Revenue Retention', velocityMultiplier: 5.2, isSelfReinforcing: true, hasActiveSynergy: true, isPositive: true },
  ],
});

// =============================================================================
// 8. Ishikawa Root Cause Fishbone Factory
// =============================================================================
export const createIshikawaRootCauseFishboneSlide = (id = `slide-${Date.now()}`): IshikawaRootCauseFishboneSlideData => ({
  id,
  type: 'ishikawa-root-cause-fishbone',
  title: 'Ishikawa Root Cause Fishbone: P99 Edge Latency Degradation',
  subtitle: 'Structured cause-and-effect decomposition across 6 system categories isolating primary drivers of SLA breach',
  kicker: 'INCIDENT INVESTIGATION & CAUSE-AND-EFFECT MAPPING',
  incidentProblemStatement: 'Critical Latency Spike in P99 Global Edge Routing (Exceeded 250ms SLA Threshold)',
  incidentSeverityLevel: 'P1 Severity Incident Postmortem',
  hasRootCauseIdentified: true,
  spines: [
    { id: 'sp1', spineCategory: 'Network & Transit', primaryCause: 'BGP Route Flapping at Transit Provider', contributingFactors: ['Sub-optimal peering path selected', 'Keepalive timeout set too aggressively', 'Lack of multi-homed Anycast failover'], severityRating: 4, isCriticalPath: true, hasRemediationPlan: true, isPositive: false },
    { id: 'sp2', spineCategory: 'Database & State', primaryCause: 'Unindexed Global Secondary Index Scan', contributingFactors: ['Lock contention on tenant partition table', 'Cache invalidation cascade storm', 'Read replica replication lag > 4s'], severityRating: 5, isCriticalPath: true, hasRemediationPlan: true, isPositive: false },
    { id: 'sp3', spineCategory: 'Compute Runtime', primaryCause: 'Go Runtime Garbage Collection Pauses', contributingFactors: ['Unbounded pointer allocation in request loop', 'Excessive escape to heap on large payloads', 'GOGC threshold misconfigured on 64-core hosts'], severityRating: 3, isCriticalPath: false, hasRemediationPlan: true, isPositive: true },
    { id: 'sp4', spineCategory: 'Process & Monitoring', primaryCause: 'Telemetry Metric Drop Under Peak Load', contributingFactors: ['Prometheus scrape buffer overflowed', 'Alerting delay exceeded 180 seconds', 'Canary gate lacked synthetic latency check'], severityRating: 3, isCriticalPath: false, hasRemediationPlan: true, isPositive: true },
  ],
});

// =============================================================================
// 9. Modular Consumption Pricing Calculator Factory
// =============================================================================
export const createModularConsumptionPricingCalculatorSlide = (id = `slide-${Date.now()}`): ModularConsumptionPricingCalculatorSlideData => ({
  id,
  type: 'modular-consumption-pricing-calculator',
  title: 'Modular Consumption Pricing: Transparent Unit Economics',
  subtitle: 'Multi-tier usage pricing model with predictable tiered discounts, committed use baselines, and enterprise SLAs',
  kicker: 'COMMERCIAL PACKAGING & CONSUMPTION CALCULATOR',
  currencyCode: 'USD',
  billingFrequency: 'Monthly Billed with True-Up Rights',
  estimatedMonthlyUsage: 250000000,
  hasCustomEnterpriseContract: true,
  tiers: [
    { id: 't1', tierName: 'Standard Shard Ingress', unitMetricName: 'Per 1M Ingress API Requests', costPerUnitUsd: 0.15, minimumCommitment: 1000, isRecommended: false, isSubtotal: false, hasVolumeDiscount: false },
    { id: 't2', tierName: 'Vector Context Memory Queries', unitMetricName: 'Per 1M Semantic Lookups', costPerUnitUsd: 0.45, minimumCommitment: 2500, isRecommended: true, isSubtotal: false, hasVolumeDiscount: true },
    { id: 't3', tierName: 'Autonomous Agent Compute Minutes', unitMetricName: 'Per 1K Worker Executions', costPerUnitUsd: 1.20, minimumCommitment: 5000, isRecommended: true, isSubtotal: false, hasVolumeDiscount: true },
    { id: 't4', tierName: 'Hardware Sovereign Security Enclave', unitMetricName: 'Per Dedicated Host Shard', costPerUnitUsd: 450.0, minimumCommitment: 1, isRecommended: false, isSubtotal: true, hasVolumeDiscount: true },
  ],
});

// =============================================================================
// 10. Live Product Viewport Walkthrough Factory
// =============================================================================
export const createLiveProductViewportWalkthroughSlide = (id = `slide-${Date.now()}`): LiveProductViewportWalkthroughSlideData => ({
  id,
  type: 'live-product-viewport-walkthrough',
  title: 'Live Product Viewport: Autonomous Enterprise Orchestration Console',
  subtitle: 'Interactive step-by-step product walkthrough demonstrating mission-critical workflow transitions and verifiable UI state fidelity',
  kicker: 'LIVE PRODUCT DEMONSTRATION & INTERACTION HARNESS',
  productVersionName: 'v4.18.0-Enterprise',
  walkthroughPersona: 'Site Reliability Engineering Director',
  hasInteractiveDemoEnabled: true,
  steps: [
    { id: 's1', stepIndex: 1, screenTitle: 'Unified Fleet Telemetry', interactionDescription: 'Real-time telemetry streaming from 4,096 distributed cluster nodes with instant anomaly detection', elementSelector: '#telemetry-cluster-heatmap', isCompleted: true, hasCheckmark: true, isPositive: true },
    { id: 's2', stepIndex: 2, screenTitle: 'Cryptographic Policy Gate', interactionDescription: 'Hardware-verified SPIFFE/SPIRE mutual TLS attestation preventing unauthorized ingress traffic', elementSelector: '#zero-trust-gate-panel', isCompleted: false, hasCheckmark: true, isPositive: true },
    { id: 's3', stepIndex: 3, screenTitle: 'Canary Deployment Pipeline', interactionDescription: 'Progressive 5% blue-green canary traffic ramp with automated latency circuit-breaker monitoring', elementSelector: '#canary-deployment-rail', isCompleted: false, hasCheckmark: true, isPositive: true },
    { id: 's4', stepIndex: 4, screenTitle: 'Automated Rollback Ledger', interactionDescription: 'Deterministic zero-downtime rollback triggered under 180ms with immutable audit cryptographic signoff', elementSelector: '#immutable-audit-ledger', isCompleted: false, hasCheckmark: true, isPositive: true },
  ],
});

// =============================================================================
// 11. Enterprise Risk Taxonomy Heatmap Factory
// =============================================================================
export const createEnterpriseRiskTaxonomyHeatmapSlide = (id = `slide-${Date.now()}`): EnterpriseRiskTaxonomyHeatmapSlideData => ({
  id,
  type: 'enterprise-risk-taxonomy-heatmap',
  title: 'Enterprise Risk Taxonomy: Boardroom Governance & Residual Exposure',
  subtitle: 'Systematic risk register across technology, regulatory compliance, and operational resilience evaluated against Board tolerances',
  kicker: 'ENTERPRISE RISK GOVERNANCE & TAXONOMY',
  auditYear: 'FY2026 Annual Audit',
  governanceCommittee: 'Supervisory Board Audit & Technology Committee',
  hasExecutiveReviewCompleted: true,
  risks: [
    { id: 'rk1', riskName: 'Autonomous Agent Prompt Injection', taxonomyCategory: 'AI Safety & Security', likelihoodScore: 4, impactScore: 5, mitigationControl: 'Hardware-enforced sandboxed LLM firewall & AST sanitizer', isResidualRiskAcceptable: true, isBoardEscalated: true, hasAuditProof: true },
    { id: 'rk2', riskName: 'Multi-Region Cloud Provider Outage', taxonomyCategory: 'Infrastructure Resilience', likelihoodScore: 2, impactScore: 5, mitigationControl: 'Active-Active cross-cloud Raft consensus failover < 15s', isResidualRiskAcceptable: true, isBoardEscalated: false, hasAuditProof: true },
    { id: 'rk3', riskName: 'EU AI Act High-Risk Classification', taxonomyCategory: 'Regulatory Compliance', likelihoodScore: 4, impactScore: 4, mitigationControl: 'Automated human-in-the-loop audit logs & bias evaluation harness', isResidualRiskAcceptable: true, isBoardEscalated: true, hasAuditProof: true },
    { id: 'rk4', riskName: 'Critical Software Supply Chain Tampering', taxonomyCategory: 'Cybersecurity', likelihoodScore: 3, impactScore: 5, mitigationControl: 'SLSA Level 4 provenance attestation & hermetic Nix build chains', isResidualRiskAcceptable: true, isBoardEscalated: true, hasAuditProof: true },
  ],
});

// =============================================================================
// 12. Global Partner Tiering Ladder Factory
// =============================================================================
export const createGlobalPartnerTieringLadderSlide = (id = `slide-${Date.now()}`): GlobalPartnerTieringLadderSlideData => ({
  id,
  type: 'global-partner-tiering-ladder',
  title: 'Global Partner Tiering Ladder: Strategic Alliances & Ecosystem GTM',
  subtitle: 'Hierarchical channel structure outlining revenue thresholds, margin rebates, and co-selling executive enablement',
  kicker: 'PARTNER PROGRAM & CHANNEL EXPANSION',
  ecosystemProgramName: 'Global Autonomous Cloud Alliance',
  partnerCountGlobal: 1420,
  hasChannelIncentiveActive: true,
  tiers: [
    { id: 'pt1', tierName: 'Certified Integration Partner', revenueCommitmentMillions: 0.5, rebatePercent: 12.0, technicalCertificationCount: 2, isRecommended: false, hasDedicatedPartnerManager: false, hasExecutiveAccess: false },
    { id: 'pt2', tierName: 'Premier Solutions Provider', revenueCommitmentMillions: 2.5, rebatePercent: 18.5, technicalCertificationCount: 8, isRecommended: true, hasDedicatedPartnerManager: true, hasExecutiveAccess: false },
    { id: 'pt3', tierName: 'Strategic Global System Integrator', revenueCommitmentMillions: 10.0, rebatePercent: 26.0, technicalCertificationCount: 25, isRecommended: true, hasDedicatedPartnerManager: true, hasExecutiveAccess: true },
    { id: 'pt4', tierName: 'Sovereign Cloud Principal Alliances', revenueCommitmentMillions: 25.0, rebatePercent: 32.0, technicalCertificationCount: 50, isRecommended: false, hasDedicatedPartnerManager: true, hasExecutiveAccess: true },
  ],
});

// =============================================================================
// 13. Talent Competency Gap Heatmap Factory
// =============================================================================
export const createTalentCompetencyGapHeatmapSlide = (id = `slide-${Date.now()}`): TalentCompetencyGapHeatmapSlideData => ({
  id,
  type: 'talent-competency-gap-heatmap',
  title: 'Talent Competency Gap Heatmap: Engineering Workforce Transformation',
  subtitle: 'Workforce readiness matrix analyzing current team proficiency vs target headcount across 5 strategic systems engineering domains',
  kicker: 'ORGANIZATIONAL TALENT & COMPETENCY ARCHITECTURE',
  workforcePlanningCycle: '2026-2027 Engineering Transformation',
  businessUnitName: 'Core Systems, AI Infrastructure & Platform Architecture',
  hasRetentionStrategyActive: true,
  domains: [
    { id: 'tc1', domainName: 'Distributed Consensus & Rust Systems', targetHeadcount: 42, actualHeadcount: 28, proficiencyScore: 84, isCriticalCompetency: true, hasUpskillingProgramActive: true, isPositive: true },
    { id: 'tc2', domainName: 'Post-Quantum Cryptography & Security', targetHeadcount: 24, actualHeadcount: 14, proficiencyScore: 78, isCriticalCompetency: true, hasUpskillingProgramActive: true, isPositive: false },
    { id: 'tc3', domainName: 'Autonomous Agent LLM Orchestration', targetHeadcount: 50, actualHeadcount: 46, proficiencyScore: 92, isCriticalCompetency: true, hasUpskillingProgramActive: false, isPositive: true },
    { id: 'tc4', domainName: 'Zero-Downtime Site Reliability & FinOps', targetHeadcount: 36, actualHeadcount: 32, proficiencyScore: 88, isCriticalCompetency: false, hasUpskillingProgramActive: true, isPositive: true },
    { id: 'tc5', domainName: 'Hardware Acceleration & Silicon Interconnect', targetHeadcount: 18, actualHeadcount: 8, proficiencyScore: 65, isCriticalCompetency: true, hasUpskillingProgramActive: true, isPositive: false },
  ],
});

// =============================================================================
// 14. SLO Error Budget Burn Waterfall Factory
// =============================================================================
export const createSloErrorBudgetBurnWaterfallSlide = (id = `slide-${Date.now()}`): SloErrorBudgetBurnWaterfallSlideData => ({
  id,
  type: 'slo-error-budget-burn-waterfall',
  title: 'SLO Error Budget Burn Waterfall: Production Reliability Accounting',
  subtitle: 'Granular consumption breakdown of quarterly error budget across specific production incidents, rollbacks, and network events',
  kicker: 'SITE RELIABILITY ENGINEERING & SLO GOVERNANCE',
  serviceLevelObjectiveName: 'Global Ingress API 99.99% Availability Commitment',
  targetReliabilityPercent: 99.99,
  remainingBudgetPercent: 34.5,
  hasBreachedSloTarget: false,
  incidents: [
    { id: 'inc1', incidentTitle: 'Regional BGP Peering Flap', serviceImpacted: 'Edge Transit Mesh', burnRateMultiplier: 14.2, budgetDepletedPercent: 28.5, durationMinutes: 18, isBudgetExhausted: false, hasAutomaticRollbackExecuted: true, isPositive: false },
    { id: 'inc2', incidentTitle: 'Database Connection Pool Exhaustion', serviceImpacted: 'Metadata Shard Cluster', burnRateMultiplier: 8.4, budgetDepletedPercent: 19.0, durationMinutes: 12, isBudgetExhausted: false, hasAutomaticRollbackExecuted: true, isPositive: false },
    { id: 'inc3', incidentTitle: 'Cache Invalidation Cascading Storm', serviceImpacted: 'Vector Search Engine', burnRateMultiplier: 6.1, budgetDepletedPercent: 14.0, durationMinutes: 9, isBudgetExhausted: false, hasAutomaticRollbackExecuted: false, isPositive: false },
    { id: 'inc4', incidentTitle: 'Remaining Resiliency Buffer', serviceImpacted: 'All Protected Endpoints', burnRateMultiplier: 1.0, budgetDepletedPercent: 38.5, durationMinutes: 0, isBudgetExhausted: false, hasAutomaticRollbackExecuted: false, isPositive: true },
  ],
});

// =============================================================================
// 15. Weighted Decision Tradeoff Matrix Factory
// =============================================================================
export const createWeightedDecisionTradeoffMatrixSlide = (id = `slide-${Date.now()}`): WeightedDecisionTradeoffMatrixSlideData => ({
  id,
  type: 'weighted-decision-tradeoff-matrix',
  title: 'Weighted Decision Tradeoff Matrix: Core Architecture Selection',
  subtitle: 'Mathematical evaluation matrix comparing architectural options against prioritized criteria with explicit consensus signoff',
  kicker: 'ARCHITECTURAL GOVERNANCE & DECISION MATRIX',
  evaluationContext: 'Global Consensus Engine for Distributed State Replication',
  selectedDecisionOutcome: 'Option Alpha: Custom Rust Raft with Zero-Copy WAL',
  hasConsensusReached: true,
  criteria: [
    { id: 'cr1', criterionName: 'P99 Transaction Latency (< 10ms)', weightPercent: 30, isMandatoryCriterion: true },
    { id: 'cr2', criterionName: 'Byzantine Fault Tolerance & Partition Safety', weightPercent: 25, isMandatoryCriterion: true },
    { id: 'cr3', criterionName: 'Operational Simplicity & Developer Ergonomics', weightPercent: 20, isMandatoryCriterion: false },
    { id: 'cr4', criterionName: 'Memory Footprint & Zero-Allocation Path', weightPercent: 15, isMandatoryCriterion: false },
    { id: 'cr5', criterionName: 'Ecosystem Community & Maintenance Longevity', weightPercent: 10, isMandatoryCriterion: false },
  ],
  options: [
    { optionName: 'Option Alpha: Rust Raft (Chosen)', scores: { cr1: 96, cr2: 94, cr3: 82, cr4: 98, cr5: 88 }, totalWeightedScore: 92.4, isRecommended: true, hasExecutiveSponsor: true },
    { optionName: 'Option Beta: Raft in Go with Sharding', scores: { cr1: 82, cr2: 92, cr3: 90, cr4: 72, cr5: 95 }, totalWeightedScore: 85.9, isRecommended: false, hasExecutiveSponsor: true },
    { optionName: 'Option Gamma: Managed Cloud Service', scores: { cr1: 75, cr2: 88, cr3: 94, cr4: 65, cr5: 90 }, totalWeightedScore: 81.3, isRecommended: false, hasExecutiveSponsor: false },
  ],
});

// =============================================================================
// 16. Customer Churn Intervention Ladder Factory
// =============================================================================
export const createCustomerChurnInterventionLadderSlide = (id = `slide-${Date.now()}`): CustomerChurnInterventionLadderSlideData => ({
  id,
  type: 'customer-churn-intervention-ladder',
  title: 'Customer Churn Intervention Ladder: Proactive Retention Playbook',
  subtitle: 'Staged operational protocol triggering automated customer success interventions based on real-time telemetry health scores',
  kicker: 'REVENUE PROTECTION & RETENTION PLAYBOOK',
  customerSegmentName: 'Tier 1 Strategic Enterprise Accounts ($500K+ ARR)',
  netRevenueRetentionTarget: 138.5,
  hasPredictiveModelActive: true,
  stages: [
    { id: 'st1', stageIndex: 1, stageName: 'Green: Healthy Steady State', healthScoreThreshold: 85, interventionTrigger: 'Telemetry telemetry shows active weekly releases & growing query volume', annualRecurringRevenuePreserved: 64200000, isPositive: true, hasCustomerSuccessEscalation: false, hasCheckmark: true },
    { id: 'st2', stageIndex: 2, stageName: 'Yellow: Usage Velocity Stagnation', healthScoreThreshold: 70, interventionTrigger: '30-day drop in API token usage > 15% or key sponsor transition', annualRecurringRevenuePreserved: 18500000, isPositive: true, hasCustomerSuccessEscalation: true, hasCheckmark: true },
    { id: 'st3', stageIndex: 3, stageName: 'Orange: High Churn Probability', healthScoreThreshold: 50, interventionTrigger: 'Executive sponsor departure or unclosed P1 support ticket > 48h', annualRecurringRevenuePreserved: 8200000, isPositive: false, hasCustomerSuccessEscalation: true, hasCheckmark: true },
    { id: 'st4', stageIndex: 4, stageName: 'Red: Critical Account Rescue', healthScoreThreshold: 30, interventionTrigger: 'Direct RFP initiated with competitor or contract cancellation notice', annualRecurringRevenuePreserved: 3400000, isPositive: false, hasCustomerSuccessEscalation: true, hasCheckmark: false },
  ],
});

// =============================================================================
// Master Registry of Suite 2026 Factories
// =============================================================================
export const SUITE_2026_FACTORIES: Record<string, (id?: string) => SlideData> = {
  'executive-pnl-waterfall-table': createExecutivePnlWaterfallTableSlide,
  'competitive-feature-heatmap': createCompetitiveFeatureHeatmapSlide,
  'customer-persona-archetype-split': createCustomerPersonaArchetypeSplitSlide,
  'global-data-jurisdiction-boundary': createGlobalDataJurisdictionBoundarySlide,
  'hardware-interface-blueprint': createHardwareInterfaceBlueprintSlide,
  'multi-horizon-value-realization-bridge': createMultiHorizonValueRealizationBridgeSlide,
  'two-sided-ecosystem-flywheel': createTwoSidedEcosystemFlywheelSlide,
  'ishikawa-root-cause-fishbone': createIshikawaRootCauseFishboneSlide,
  'modular-consumption-pricing-calculator': createModularConsumptionPricingCalculatorSlide,
  'live-product-viewport-walkthrough': createLiveProductViewportWalkthroughSlide,
  'enterprise-risk-taxonomy-heatmap': createEnterpriseRiskTaxonomyHeatmapSlide,
  'global-partner-tiering-ladder': createGlobalPartnerTieringLadderSlide,
  'talent-competency-gap-heatmap': createTalentCompetencyGapHeatmapSlide,
  'slo-error-budget-burn-waterfall': createSloErrorBudgetBurnWaterfallSlide,
  'weighted-decision-tradeoff-matrix': createWeightedDecisionTradeoffMatrixSlide,
  'customer-churn-intervention-ladder': createCustomerChurnInterventionLadderSlide,
};

// =============================================================================
// Archetype Options Catalog
// =============================================================================
export const SUITE_2026_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  {
    type: 'executive-pnl-waterfall-table',
    label: 'Executive P&L Waterfall Table',
    category: 'Corporate Strategy',
    desc: 'Audited gross-to-net financial bridge displaying revenue, COGS, OpEx, and EBITDA with variance pills',
    icon: 'TrendingUp',
  },
  {
    type: 'competitive-feature-heatmap',
    label: 'Competitive Feature Heatmap',
    category: 'Corporate Strategy',
    desc: 'Comprehensive multi-vendor capability matrix with comparative scores, benchmarks, and win-rate proof',
    icon: 'Grid',
  },
  {
    type: 'customer-persona-archetype-split',
    label: 'Customer Persona Archetype Split',
    category: 'Story & Conversion',
    desc: 'Bilateral customer archetype comparison highlighting divergent buyer priorities, metrics, and conversion paths',
    icon: 'Users',
  },
  {
    type: 'global-data-jurisdiction-boundary',
    label: 'Global Data Jurisdiction Boundary',
    category: 'Platform & Network',
    desc: 'Sovereign enclave topology mapping regulatory frameworks, data classifications, and hardware isolation',
    icon: 'Globe',
  },
  {
    type: 'hardware-interface-blueprint',
    label: 'Hardware Interface Blueprint',
    category: 'Product & Architecture',
    desc: 'Silicon accelerator hardware blueprint with pinout diagrams, bus standards, bandwidth, and thermal ratings',
    icon: 'Cpu',
  },
  {
    type: 'multi-horizon-value-realization-bridge',
    label: 'Multi-Horizon Value Realization Bridge',
    category: 'Corporate Strategy',
    desc: 'Three-year strategic growth bridge visualizing phased milestones, unlocks, and cumulative ROI targets',
    icon: 'Layers',
  },
  {
    type: 'two-sided-ecosystem-flywheel',
    label: 'Two-Sided Ecosystem Flywheel',
    category: 'Corporate Strategy',
    desc: 'Self-reinforcing network dynamics connecting developer supply-side creation with enterprise demand liquidity',
    icon: 'RotateCw',
  },
  {
    type: 'ishikawa-root-cause-fishbone',
    label: 'Ishikawa Root Cause Fishbone',
    category: 'Platform & Network',
    desc: 'Structured 6-category incident root cause decomposition isolating critical paths and remediation plans',
    icon: 'GitFork',
  },
  {
    type: 'modular-consumption-pricing-calculator',
    label: 'Modular Consumption Pricing Calculator',
    category: 'Story & Conversion',
    desc: 'Interactive consumption-based unit pricing model with tier commitments, volume discounts, and monthly projections',
    icon: 'Calculator',
  },
  {
    type: 'live-product-viewport-walkthrough',
    label: 'Live Product Viewport Walkthrough',
    category: 'Product & Architecture',
    desc: 'Interactive step-by-step product walkthrough demonstrating mission-critical workflow transitions and UI state',
    icon: 'Laptop',
  },
  {
    type: 'enterprise-risk-taxonomy-heatmap',
    label: 'Enterprise Risk Taxonomy Heatmap',
    category: 'Corporate Strategy',
    desc: 'Boardroom-level risk taxonomy evaluating likelihood vs impact, control effectiveness, and residual risk posture',
    icon: 'AlertTriangle',
  },
  {
    type: 'global-partner-tiering-ladder',
    label: 'Global Partner Tiering Ladder',
    category: 'Corporate Strategy',
    desc: 'Hierarchical partner alliance ladder detailing revenue commitments, margin incentives, and executive access',
    icon: 'Award',
  },
  {
    type: 'talent-competency-gap-heatmap',
    label: 'Talent Competency Gap Heatmap',
    category: 'Team & Credibility',
    desc: 'Workforce competency gap analysis tracking current proficiency against target headcount in key engineering domains',
    icon: 'Target',
  },
  {
    type: 'slo-error-budget-burn-waterfall',
    label: 'SLO Error Budget Burn Waterfall',
    category: 'Platform & Network',
    desc: 'Production reliability accounting showing quarterly error budget consumption by specific service incidents',
    icon: 'Activity',
  },
  {
    type: 'weighted-decision-tradeoff-matrix',
    label: 'Weighted Decision Tradeoff Matrix',
    category: 'Product & Architecture',
    desc: 'Mathematical evaluation matrix comparing architectural options against weighted criteria with executive consensus',
    icon: 'Sliders',
  },
  {
    type: 'customer-churn-intervention-ladder',
    label: 'Customer Churn Intervention Ladder',
    category: 'Story & Conversion',
    desc: 'Staged operational retention protocol triggering interventions and escalations to preserve high-value ARR',
    icon: 'ShieldCheck',
  },
];
