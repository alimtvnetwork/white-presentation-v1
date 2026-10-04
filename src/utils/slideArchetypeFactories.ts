// lint-allow: file-size reason="unified slide archetype registry and default factories" max=900
import {
  SlideType, SlideData, NextGenSlideType, MetricGridSlideData, ProblemSolutionSlideData,
  QuadrantMatrixSlideData, MarketOpportunitySlideData, TimelineRoadmapSlideData,
  FeatureGridSlideData, ArchitectureDiagramSlideData, QuoteCalloutSlideData,
  StatsCalloutSlideData, TeamGridSlideData, CaseStudySlideData,
  ComparisonColumnsSlideData, ProcessCycleSlideData, CodeTerminalSlideData,
  CallToActionSlideData,
} from '../types/presentation';
import { EXTENDED_FACTORIES, EXTENDED_ARCHETYPE_OPTIONS, ArchetypeOption } from './extendedSlideFactories';
import { EXPANDED_FACTORIES, EXPANDED_ARCHETYPE_OPTIONS } from './expandedSlideFactories';
import { ENTERPRISE_FACTORIES, ENTERPRISE_ARCHETYPE_OPTIONS } from './enterpriseSlideFactories';
import { KINETIC_SUITE_ARCHETYPE_OPTIONS, createKineticSuiteSlide } from './kineticSuiteSlideFactories';
import {
  NEXTGEN_ARCHETYPE_OPTIONS,
  NEXTGEN_FACTORIES,
  NEXT_GEN_ARCHETYPE_OPTIONS,
  NEXT_GEN_SLIDE_FACTORIES,
  createThreeHorizonsStrategySlide,
  createAiAgentFleetTopologySlide,
  createApiRateLimitGatewaySlide,
  createMultiCloudDrFailoverSlide,
  createFintechPaymentClearingSlide,
  createEsgDecarbonizationRoadmapSlide,
  createModelContextProtocolMeshSlide,
  createDataCleanRoomSlide,
  createDeveloperPlatformIdpSlide,
  createExecutiveMaSynergySlide,
  createCyberThreatKillChainSlide,
  createSupplyChainDigitalTwinSlide,
  createVoiceAiConversationalMeshSlide,
  createComplianceSoc2ReadinessLadderSlide,
  createValueStreamDoraFlywheelSlide,
} from './nextGenSlideFactories';
import {
  MODERN_FACTORIES,
  MODERN_ARCHETYPE_OPTIONS,
  createModernSlide,
} from './modern/registry';
import {
  CUSTOMIZATION_FACTORIES,
  createNeuralVectorSearchTopologySlide,
  createModelQuantizationSpeculativeDecodingSlide,
  createLlmFirewallRedTeamMatrixSlide,
  createGlobalAnycastTrafficDirectorSlide,
  createCqrsEventSourcingFabricSlide,
  createSbomSlsaProvenanceAttestationSlide,
  createPostMergerIntegrationRoadmapSlide,
  createScope3CarbonSupplyChainAuditSlide,
  createCspmCiemCloudEntitlementGraphSlide,
  createConfidentialComputingEnclaveSlide,
  createPredictiveAutoscalingPodMatrixSlide,
  createCapexOpexCapitalAllocationSlide,
  createTransferPricingTaxTopologySlide,
  createSalesQuotaCompensationMatrixSlide,
  createExecutiveSuccessionLeadershipBenchSlide,
} from './customizationSlideFactories';
export * from './extendedSlideFactories';
export * from './expandedSlideFactories';
export * from './enterpriseSlideFactories';
export * from './kineticSuiteSlideFactories';
export * from './nextGenSlideFactories';
export * from './modern/registry';
export * from './customizationSlideFactories';
export * from './globalPptExpansionFactories';
export * from './kineticRevolutionFactories';
export * from './globalPptMasteryFactories';
export * from './globalPptNextGenFactories';
export * from './globalPptEvolutionFactories';
export * from './suite2026SlideFactories';
export * from './suite2027SlideFactories';
export * from './suite2028SlideFactories';
export * from './suite2029SlideFactories';
export * from './suite2030SlideFactories';
import { EXPANSION_FACTORIES } from './globalPptExpansionFactories';
import { KINETIC_REVOLUTION_FACTORIES, KINETIC_REVOLUTION_ARCHETYPE_OPTIONS } from './kineticRevolutionFactories';
import { GLOBAL_PPT_MASTERY_FACTORIES, GLOBAL_PPT_MASTERY_ARCHETYPE_OPTIONS } from './globalPptMasteryFactories';
import { GLOBAL_PPT_NEXTGEN_FACTORIES, GLOBAL_PPT_NEXTGEN_ARCHETYPE_OPTIONS } from './globalPptNextGenFactories';
import { GLOBAL_PPT_EVOLUTION_FACTORIES, GLOBAL_PPT_EVOLUTION_ARCHETYPE_OPTIONS } from './globalPptEvolutionFactories';
import { SUITE_2026_FACTORIES, SUITE_2026_ARCHETYPE_OPTIONS } from './suite2026SlideFactories';
import {
  SUITE_2027_FACTORIES,
  SUITE_2027_ARCHETYPE_OPTIONS,
  createAiInferenceCostTokenWaterfallSlide,
  createCrossFunctionalRaciMatrixSlide,
  createZeroTrustMicrosegmentationMapSlide,
  createSaasMagicNumberEfficiencyGaugeSlide,
  createSupplyChainGeopoliticalChokepointSlide,
  createIncidentSev1CommandTimelineSlide,
  createCloudFinopsUnitRateOptimizationSlide,
  createProductMarketFitCohortTrianglesSlide,
  createEnterpriseAiGovernanceGuardrailsSlide,
  createDataLakehouseMedallionPipelineSlide,
  createMergerAcquisitionSynergyBridgeSlide,
  createDeveloperProductivitySpaceFrameworkSlide,
  createHybridCloudDrFailoverTopologySlide,
  createCustomerHealthScorecardMatrixSlide,
  createValueStreamBottleneckFlowSlide,
} from './suite2027SlideFactories';
import {
  SUITE_2028_FACTORIES,
  SUITE_2028_ARCHETYPE_OPTIONS,
  createSyntheticDataCurationPipelineSlide,
  createCloudNativeWasmMicroserviceMeshSlide,
  createSovereignAiDatacenterPowerGridSlide,
  createAutonomousCodeSecurityPatchingLoopSlide,
  createCrossCloudMeshLatencyRoutingSlide,
  createEnterpriseGenaiAppObservabilitySlide,
  createZeroDowntimeSchemaEvolutionStepperSlide,
  createEnterpriseSoftwareSupplyChainChokepointSlide,
  createAiAgentMultiTurnOrchestrationDagSlide,
  createEnterpriseDataCleanRoomAuditSlide,
  createHyperscaleK8sCostAllocatorMatrixSlide,
  createCyberResilienceRansomwareReadinessRadarSlide,
  createSaasExpansionRetentionWaterfallGaugeSlide,
  createDeveloperExperienceFrictionIndexHeatmapSlide,
  createGeopoliticalSovereignCloudComplianceCompassSlide,
} from './suite2028SlideFactories';
import {
  SUITE_2029_FACTORIES,
  SUITE_2029_ARCHETYPE_OPTIONS,
} from './suite2029SlideFactories';
import {
  SUITE_2030_FACTORIES,
  SUITE_2030_ARCHETYPE_OPTIONS,
} from './suite2030SlideFactories';

export const ORIGINAL_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  { type: 'metric-grid', label: 'Metric Grid Matrix', category: 'Strategy & Metrics', desc: '4-6 quantitative KPI cards with delta trends', icon: 'BarChart3' },
  { type: 'stats-callout', label: 'Monumental Stats Callout', category: 'Strategy & Metrics', desc: 'Massive hero metric with 3 comparison proof pills', icon: 'Sparkles' },
  { type: 'market-opportunity', label: 'TAM/SAM/SOM Opportunity', category: 'Strategy & Metrics', desc: '3-tier market sizing valuation stack', icon: 'TrendingUp' },
  { type: 'quadrant-matrix', label: '2x2 Strategic Quadrant', category: 'Strategy & Metrics', desc: 'Market positioning matrix with plotted items', icon: 'Grid' },
  { type: 'problem-solution', label: 'Problem vs Solution', category: 'Story & Conversion', desc: 'Bilateral friction vs sovereign breakthrough comparison', icon: 'GitCompare' },
  { type: 'timeline-roadmap', label: 'Timeline & Milestones', category: 'Product & Architecture', desc: 'Multi-quarter delivery sequence and deliverables', icon: 'Calendar' },
  { type: 'feature-grid', label: '6-Card Bento Feature Grid', category: 'Product & Architecture', desc: 'Visual capability bento matrix with status badges', icon: 'LayoutGrid' },
  { type: 'architecture-diagram', label: 'Multi-Tier Architecture', category: 'Product & Architecture', desc: 'Tiered system layer stack with data flow', icon: 'Layers' },
  { type: 'code-terminal', label: 'CLI Terminal Console', category: 'Product & Architecture', desc: 'macOS styled syntax log and execution console', icon: 'Terminal' },
  { type: 'process-cycle', label: '4-Stage Continuous Flywheel', category: 'Product & Architecture', desc: 'Closed-loop cycle flow around central strategic hub', icon: 'RotateCw' },
  { type: 'team-grid', label: 'Executive Leadership Grid', category: 'Team & Credibility', desc: 'Leadership roster with credentials and tech tags', icon: 'Users' },
  { type: 'case-study', label: 'Enterprise Case Study', category: 'Team & Credibility', desc: 'Client transformation: challenge, solution, and 3 ROI metrics', icon: 'Award' },
  { type: 'quote-callout', label: 'Executive Pull Quote', category: 'Team & Credibility', desc: 'Keynote quote with verified author credentials', icon: 'Quote' },
  { type: 'comparison-columns', label: '3-Column Comparative Matrix', category: 'Story & Conversion', desc: 'Side-by-side capability evaluation matrix', icon: 'Columns3' },
  { type: 'call-to-action', label: 'Closing Call to Action', category: 'Story & Conversion', desc: 'High-impact finale with dual CTAs and contact portal', icon: 'CheckCircle2' },
];

export const CUSTOMIZATION_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  { type: 'neural-vector-search-topology', label: 'Neural Vector Search Topology', category: 'AI Infrastructure', desc: 'HNSW indexing, bi-encoder query embeddings and semantic retrieval', icon: 'Network' },
  { type: 'model-quantization-speculative-decoding', label: 'Model Quantization & Speculative Decoding', category: 'AI Infrastructure', desc: 'AWQ/FP8 hybrid weights and dual-model drafting throughput', icon: 'Cpu' },
  { type: 'llm-firewall-red-team-matrix', label: 'LLM Firewall Red Team Matrix', category: 'AI Infrastructure', desc: 'Adversarial jailbreak defense, PII sanitization and safety guardrails', icon: 'ShieldAlert' },
  { type: 'global-anycast-traffic-director', label: 'Global Anycast Traffic Director', category: 'Platform & Network', desc: 'BGP edge routing, zero-RTT TLS resumption and origin shielding', icon: 'Globe' },
  { type: 'cqrs-event-sourcing-fabric', label: 'CQRS Event Sourcing Fabric', category: 'Platform & Network', desc: 'Immutable append-only ledger and partitioned read-model streams', icon: 'GitBranch' },
  { type: 'sbom-slsa-provenance-attestation', label: 'SBOM & SLSA Level 4 Attestation', category: 'Platform & Network', desc: 'Hermetic build provenance, cryptographic signatures and Kyverno gating', icon: 'FileCheck' },
  { type: 'post-merger-integration-roadmap', label: 'Post-Merger Integration Roadmap', category: 'Corporate Strategy', desc: 'Day-1 cutover, core ERP consolidation and EBITDA synergy realization', icon: 'TrendingUp' },
  { type: 'scope3-carbon-supply-chain-audit', label: 'Scope 3 Carbon Supply Chain Audit', category: 'Corporate Strategy', desc: 'Tier-1/2 supplier emissions ledger, CBAM and CSRD readiness', icon: 'Leaf' },
  { type: 'cspm-ciem-cloud-entitlement-graph', label: 'CSPM & CIEM Cloud Entitlement Graph', category: 'Cloud Telemetry', desc: 'Multi-cloud IAM least-privilege risk topology and toxic path detection', icon: 'Key' },
  { type: 'confidential-computing-enclave', label: 'Confidential Computing Enclave', category: 'Cloud Telemetry', desc: 'AMD SEV-SNP/Intel TDX memory encryption and hardware attestation', icon: 'Lock' },
  { type: 'predictive-autoscaling-pod-matrix', label: 'Predictive Autoscaling Pod Matrix', category: 'Cloud Telemetry', desc: 'Proactive ML workload forecasting and spot instance slicing', icon: 'Server' },
  { type: 'capex-opex-capital-allocation', label: 'Capex vs Opex Capital Allocation', category: 'Enterprise Finance', desc: 'Multi-tranche enterprise investment hurdle rates and depreciation', icon: 'DollarSign' },
  { type: 'transfer-pricing-tax-topology', label: 'Transfer Pricing Tax Topology', category: 'Enterprise Finance', desc: 'OECD BEPS Pillar 2 statutory tax harmonization and cross-border IP flows', icon: 'Receipt' },
  { type: 'sales-quota-compensation-matrix', label: 'Sales Quota & Compensation Matrix', category: 'Enterprise Finance', desc: 'Rep quota attainment tiers, accelerator triggers and commission curves', icon: 'Target' },
  { type: 'executive-succession-leadership-bench', label: 'Executive Succession Leadership Bench', category: 'Corporate Strategy', desc: 'Nine-box grid leadership readiness and emergency transition protocols', icon: 'Users' },
];

export const GLOBAL_PPT_EXPANSION_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  { type: 'executive-mandate-scorecard', label: 'Executive Mandate Scorecard', category: 'Strategy & Metrics', desc: 'C-Suite OKRs, capital allocation & audit committee scorecard', icon: 'Target' },
  { type: 'board-quorum-resolution-ledger', label: 'Board Quorum Resolution Ledger', category: 'Corporate Strategy', desc: 'Binding director resolutions, voting quorum & legal attestations', icon: 'FileText' },
  { type: 'macro-economic-threat-radar', label: 'Macro-Economic Threat Radar', category: 'Strategy & Metrics', desc: 'Environmental threat telemetry, hedging strategies & risk quadrants', icon: 'Compass' },
  { type: 'zero-trust-network-mesh', label: 'Zero-Trust Network Mesh', category: 'Product & Architecture', desc: 'mTLS encapsulation, SPIFFE/SPIRE IDs & hardware enclave attestation', icon: 'Shield' },
  { type: 'distributed-consensus-raft-log', label: 'Distributed Consensus Raft Log', category: 'Product & Architecture', desc: 'Linearizable consensus, leader heartbeat & quorum commit mechanics', icon: 'Layers' },
  { type: 'data-pipeline-lineage-dag', label: 'Data Pipeline Lineage DAG', category: 'Product & Architecture', desc: 'Kafka, Flink, Iceberg lakehouse & sub-second analytics DAG', icon: 'GitMerge' },
  { type: 'code-walkthrough-syntax-lens', label: 'Code Walkthrough Syntax Lens', category: 'Product & Architecture', desc: 'Zero-copy buffer inspection, monadic AppResult & focal line lens', icon: 'Code' },
  { type: 'tier-comparison-feature-matrix', label: 'Tier Comparison Feature Matrix', category: 'Product & Architecture', desc: 'Open Source vs Pro vs Enterprise vs Sovereign capability matrix', icon: 'Grid' },
  { type: 'arr-growth-bridge-waterfall', label: 'ARR Growth Bridge Waterfall', category: 'Strategy & Metrics', desc: 'Starting ARR through New Logos, Expansion, Churn to Ending ARR', icon: 'TrendingUp' },
  { type: 'multi-tier-saas-packaging-table', label: 'Multi-Tier SaaS Packaging Table', category: 'Story & Conversion', desc: 'Developer Starter, Enterprise Platform & Sovereign Infrastructure', icon: 'CreditCard' },
  { type: 'flywheel-growth-momentum-orbit', label: 'Flywheel Growth Momentum Orbit', category: 'Strategy & Metrics', desc: 'Self-reinforcing customer telemetry & compounding gross margin orbit', icon: 'RotateCw' },
  { type: 'enterprise-case-study-hero', label: 'Enterprise Case Study Hero', category: 'Team & Credibility', desc: 'Tier-1 banking case study, verified metrics & executive quote', icon: 'Award' },
  { type: 'client-wall-social-proof-grid', label: 'Client Wall Social Proof Grid', category: 'Team & Credibility', desc: 'Validated across global hyperscalers, defense & healthtech leaders', icon: 'Building' },
  { type: 'incident-retrospective-timeline', label: 'Incident Retrospective Timeline', category: 'Product & Architecture', desc: 'P0 post-mortem, TTD/TTM metrics, root cause analysis & blameless fix', icon: 'Clock' },
  { type: 'interactive-faq-tabbed-deck', label: 'Interactive FAQ Tabbed Deck', category: 'Story & Conversion', desc: 'Tabbed dialogue across Security, Architecture, Commercial & SLA', icon: 'HelpCircle' },
  { type: 'audience-decision-fork-matrix', label: 'Audience Decision Fork Matrix', category: 'Story & Conversion', desc: 'Interactive 3-way strategic trajectory fork with CapEx/OpEx evaluations', icon: 'GitFork' },
];

export const ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  ...ORIGINAL_ARCHETYPE_OPTIONS,
  ...EXTENDED_ARCHETYPE_OPTIONS,
  ...EXPANDED_ARCHETYPE_OPTIONS,
  ...ENTERPRISE_ARCHETYPE_OPTIONS,
  ...KINETIC_SUITE_ARCHETYPE_OPTIONS,
  ...NEXTGEN_ARCHETYPE_OPTIONS,
  ...MODERN_ARCHETYPE_OPTIONS,
  ...CUSTOMIZATION_ARCHETYPE_OPTIONS,
  ...GLOBAL_PPT_EXPANSION_ARCHETYPE_OPTIONS,
  ...KINETIC_REVOLUTION_ARCHETYPE_OPTIONS,
  ...GLOBAL_PPT_MASTERY_ARCHETYPE_OPTIONS,
  ...GLOBAL_PPT_NEXTGEN_ARCHETYPE_OPTIONS,
  ...GLOBAL_PPT_EVOLUTION_ARCHETYPE_OPTIONS,
  ...SUITE_2026_ARCHETYPE_OPTIONS,
  ...SUITE_2027_ARCHETYPE_OPTIONS,
  ...SUITE_2028_ARCHETYPE_OPTIONS,
  ...SUITE_2029_ARCHETYPE_OPTIONS,
  ...SUITE_2030_ARCHETYPE_OPTIONS,
];

// =============================================================================
// Slide Archetype Categories & Unified Master Registry
// =============================================================================
export const SLIDE_ARCHETYPE_CATEGORIES = [
  'Strategy & Metrics',
  'Story & Conversion',
  'Product & Architecture',
  'Team & Credibility',
  'Enterprise',
  'Kinetic Suite',
  'next-gen',
] as const;

export type SlideArchetypeCategory = (typeof SLIDE_ARCHETYPE_CATEGORIES)[number];

export interface SlideArchetypeDefinition {
  type: NextGenSlideType | SlideType | string;
  title: string;
  category: string;
  description: string;
  factory: (id?: string) => SlideData;
}

export const SLIDE_ARCHETYPE_FACTORIES: Record<string, SlideArchetypeDefinition> = {
  'three-horizons-strategy-matrix': {
    type: 'three-horizons-strategy-matrix',
    title: 'Three Horizons Strategy Matrix',
    category: 'next-gen',
    description: 'McKinsey Growth Portfolios (H1/H2/H3) with Capital Allocation & Stage-Gate Metrics',
    factory: createThreeHorizonsStrategySlide,
  },
  'ai-agent-fleet-topology': {
    type: 'ai-agent-fleet-topology',
    title: 'AI Agent Fleet Topology',
    category: 'next-gen',
    description: 'Supervisor Controller, Dispatcher & Sandboxed Multi-Agent Swarms with Safety Interlocks',
    factory: createAiAgentFleetTopologySlide,
  },
  'api-rate-limit-gateway': {
    type: 'api-rate-limit-gateway',
    title: 'API Rate Limit Gateway',
    category: 'next-gen',
    description: 'Token-Bucket Quotas, Redis Sliding-Window Sync & HTTP 429 Degradation Circuit Breaker',
    factory: createApiRateLimitGatewaySlide,
  },
  'multi-cloud-dr-failover-mesh': {
    type: 'multi-cloud-dr-failover-mesh',
    title: 'Multi-Cloud DR Failover Mesh',
    category: 'next-gen',
    description: 'Active-Active BGP Traffic Shifting, Raft Quorum Consensus & Sub-15s RTO Recovery',
    factory: createMultiCloudDrFailoverSlide,
  },
  'fintech-payment-clearing-engine': {
    type: 'fintech-payment-clearing-engine',
    title: 'FinTech Payment Clearing Engine',
    category: 'next-gen',
    description: 'ISO 20022 Messaging, Sub-15ms ML Fraud Scoring & FedNow Instant Settlement Rails',
    factory: createFintechPaymentClearingSlide,
  },
  'esg-decarbonization-roadmap': {
    type: 'esg-decarbonization-roadmap',
    title: 'ESG Decarbonization Roadmap',
    category: 'next-gen',
    description: 'SBTi Net-Zero 1.5°C Trajectory Across Scope 1-3 Reduction Wedges & Renewable PPAs',
    factory: createEsgDecarbonizationRoadmapSlide,
  },
  'model-context-protocol-mesh': {
    type: 'model-context-protocol-mesh',
    title: 'Model Context Protocol (MCP) Mesh',
    category: 'next-gen',
    description: 'JSON-RPC 2.0 Host Handshake, Gateway Discovery & Sandboxed Tool Execution Stream',
    factory: createModelContextProtocolMeshSlide,
  },
  'data-clean-room-collaboration': {
    type: 'data-clean-room-collaboration',
    title: 'Data Clean Room Collaboration',
    category: 'next-gen',
    description: 'Confidential Computing Enclave, Differential Privacy Budget & Zero Raw PII Egress',
    factory: createDataCleanRoomSlide,
  },
  'developer-platform-idp-hub': {
    type: 'developer-platform-idp-hub',
    title: 'Developer Platform IDP Hub',
    category: 'next-gen',
    description: 'Self-Service Golden Paths, Spotify Backstage Software Catalog & 42s Onboarding',
    factory: createDeveloperPlatformIdpSlide,
  },
  'executive-mergers-acquisitions-synergy': {
    type: 'executive-mergers-acquisitions-synergy',
    title: 'Executive M&A Synergy Waterfall',
    category: 'next-gen',
    description: 'M&A Valuation Waterfall, EBITDA Synergies, Workstream Health & Accretive EPS',
    factory: createExecutiveMaSynergySlide,
  },
  'cyber-threat-kill-chain-matrix': {
    type: 'cyber-threat-kill-chain-matrix',
    title: 'Cyber Threat Kill Chain Matrix',
    category: 'next-gen',
    description: 'Lockheed Martin 7-Stage Kill Chain Defense, MITRE ATT&CK & Automated SOAR Playbooks',
    factory: createCyberThreatKillChainSlide,
  },
  'supply-chain-digital-twin-lattice': {
    type: 'supply-chain-digital-twin-lattice',
    title: 'Supply Chain Digital Twin Lattice',
    category: 'next-gen',
    description: 'Multimodal Corridors, Chokepoint Anomaly Detection & Autonomous Rerouting Simulation',
    factory: createSupplyChainDigitalTwinSlide,
  },
  'voice-ai-realtime-conversational-mesh': {
    type: 'voice-ai-realtime-conversational-mesh',
    title: 'Voice AI Conversational Mesh',
    category: 'next-gen',
    description: 'Sub-300ms Full-Duplex VAD, Streaming Conformer ASR, LLM Reasoning & Neural TTS',
    factory: createVoiceAiConversationalMeshSlide,
  },
  'compliance-audit-soc2-readiness-ladder': {
    type: 'compliance-audit-soc2-readiness-ladder',
    title: 'SOC 2 Readiness Ladder',
    category: 'next-gen',
    description: 'Continuous 5 Trust Criteria Ladder Traversing Gap Analysis to Clean Type II Report',
    factory: createComplianceSoc2ReadinessLadderSlide,
  },
  'value-stream-engineering-dora-flywheel': {
    type: 'value-stream-engineering-dora-flywheel',
    title: 'Value Stream & DORA Flywheel',
    category: 'next-gen',
    description: 'Elite DORA Metrics, Flow Efficiency Framework & Engineering Revenue Acceleration',
    factory: createValueStreamDoraFlywheelSlide,
  },
  'neural-vector-search-topology': {
    type: 'neural-vector-search-topology',
    title: 'Neural Vector Search Topology',
    category: 'AI Infrastructure',
    description: 'HNSW indexing, bi-encoder query embeddings and semantic retrieval',
    factory: createNeuralVectorSearchTopologySlide,
  },
  'model-quantization-speculative-decoding': {
    type: 'model-quantization-speculative-decoding',
    title: 'Model Quantization & Speculative Decoding',
    category: 'AI Infrastructure',
    description: 'AWQ/FP8 hybrid weights and dual-model drafting throughput',
    factory: createModelQuantizationSpeculativeDecodingSlide,
  },
  'llm-firewall-red-team-matrix': {
    type: 'llm-firewall-red-team-matrix',
    title: 'LLM Firewall Red Team Matrix',
    category: 'AI Infrastructure',
    description: 'Adversarial jailbreak defense, PII sanitization and safety guardrails',
    factory: createLlmFirewallRedTeamMatrixSlide,
  },
  'global-anycast-traffic-director': {
    type: 'global-anycast-traffic-director',
    title: 'Global Anycast Traffic Director',
    category: 'Platform & Network',
    description: 'BGP edge routing, zero-RTT TLS resumption and origin shielding',
    factory: createGlobalAnycastTrafficDirectorSlide,
  },
  'cqrs-event-sourcing-fabric': {
    type: 'cqrs-event-sourcing-fabric',
    title: 'CQRS Event Sourcing Fabric',
    category: 'Platform & Network',
    description: 'Immutable append-only ledger and partitioned read-model streams',
    factory: createCqrsEventSourcingFabricSlide,
  },
  'sbom-slsa-provenance-attestation': {
    type: 'sbom-slsa-provenance-attestation',
    title: 'SBOM & SLSA Level 4 Attestation',
    category: 'Platform & Network',
    description: 'Hermetic build provenance, cryptographic signatures and Kyverno gating',
    factory: createSbomSlsaProvenanceAttestationSlide,
  },
  'post-merger-integration-roadmap': {
    type: 'post-merger-integration-roadmap',
    title: 'Post-Merger Integration Roadmap',
    category: 'Corporate Strategy',
    description: 'Day-1 cutover, core ERP consolidation and EBITDA synergy realization',
    factory: createPostMergerIntegrationRoadmapSlide,
  },
  'scope3-carbon-supply-chain-audit': {
    type: 'scope3-carbon-supply-chain-audit',
    title: 'Scope 3 Carbon Supply Chain Audit',
    category: 'Corporate Strategy',
    description: 'Tier-1/2 supplier emissions ledger, CBAM and CSRD readiness',
    factory: createScope3CarbonSupplyChainAuditSlide,
  },
  'cspm-ciem-cloud-entitlement-graph': {
    type: 'cspm-ciem-cloud-entitlement-graph',
    title: 'CSPM & CIEM Cloud Entitlement Graph',
    category: 'Cloud Telemetry',
    description: 'Multi-cloud IAM least-privilege risk topology and toxic path detection',
    factory: createCspmCiemCloudEntitlementGraphSlide,
  },
  'confidential-computing-enclave': {
    type: 'confidential-computing-enclave',
    title: 'Confidential Computing Enclave',
    category: 'Cloud Telemetry',
    description: 'AMD SEV-SNP/Intel TDX memory encryption and hardware attestation',
    factory: createConfidentialComputingEnclaveSlide,
  },
  'predictive-autoscaling-pod-matrix': {
    type: 'predictive-autoscaling-pod-matrix',
    title: 'Predictive Autoscaling Pod Matrix',
    category: 'Cloud Telemetry',
    description: 'Proactive ML workload forecasting and spot instance slicing',
    factory: createPredictiveAutoscalingPodMatrixSlide,
  },
  'capex-opex-capital-allocation': {
    type: 'capex-opex-capital-allocation',
    title: 'Capex vs Opex Capital Allocation',
    category: 'Enterprise Finance',
    description: 'Multi-tranche enterprise investment hurdle rates and depreciation',
    factory: createCapexOpexCapitalAllocationSlide,
  },
  'transfer-pricing-tax-topology': {
    type: 'transfer-pricing-tax-topology',
    title: 'Transfer Pricing Tax Topology',
    category: 'Enterprise Finance',
    description: 'OECD BEPS Pillar 2 statutory tax harmonization and cross-border IP flows',
    factory: createTransferPricingTaxTopologySlide,
  },
  'sales-quota-compensation-matrix': {
    type: 'sales-quota-compensation-matrix',
    title: 'Sales Quota & Compensation Matrix',
    category: 'Enterprise Finance',
    description: 'Rep quota attainment tiers, accelerator triggers and commission curves',
    factory: createSalesQuotaCompensationMatrixSlide,
  },
  'executive-succession-leadership-bench': {
    type: 'executive-succession-leadership-bench',
    title: 'Executive Succession Leadership Bench',
    category: 'Corporate Strategy',
    description: 'Nine-box grid leadership readiness and emergency transition protocols',
    factory: createExecutiveSuccessionLeadershipBenchSlide,
  },
  'ai-inference-cost-token-waterfall': {
    type: 'ai-inference-cost-token-waterfall',
    title: 'AI Inference Cost Token Waterfall',
    category: 'Strategy & Metrics',
    description: 'LLM token economics waterfall tracking prompt context, KV cache, speculative decoding, and unit margin',
    factory: createAiInferenceCostTokenWaterfallSlide,
  },
  'cross-functional-raci-matrix': {
    type: 'cross-functional-raci-matrix',
    title: 'Cross-Functional RACI Matrix',
    category: 'Corporate Strategy',
    description: 'Executive initiative governance matrix assigning Responsible, Accountable, Consulted, and Informed roles',
    factory: createCrossFunctionalRaciMatrixSlide,
  },
  'zero-trust-microsegmentation-map': {
    type: 'zero-trust-microsegmentation-map',
    title: 'Zero-Trust Microsegmentation Map',
    category: 'Platform & Network',
    description: 'Workload microsegmentation and eBPF packet inspection topology with automated threat quarantine',
    factory: createZeroTrustMicrosegmentationMapSlide,
  },
  'saas-magic-number-efficiency-gauge': {
    type: 'saas-magic-number-efficiency-gauge',
    title: 'SaaS Magic Number Efficiency Gauge',
    category: 'Strategy & Metrics',
    description: 'Bessemer capital efficiency dials visualizing SaaS Magic Number, CAC payback, and Rule of 40 performance',
    factory: createSaasMagicNumberEfficiencyGaugeSlide,
  },
  'supply-chain-geopolitical-chokepoint': {
    type: 'supply-chain-geopolitical-chokepoint',
    title: 'Supply Chain Geopolitical Chokepoints',
    category: 'Corporate Strategy',
    description: 'Global maritime trade choke analysis measuring semiconductor supply disruption and alternate routings',
    factory: createSupplyChainGeopoliticalChokepointSlide,
  },
  'incident-sev1-command-timeline': {
    type: 'incident-sev1-command-timeline',
    title: 'Incident SEV-1 Command Timeline',
    category: 'Platform & Network',
    description: 'Mission-critical incident response sequence with blast radius triage, AST rollback, and MTTR compliance',
    factory: createIncidentSev1CommandTimelineSlide,
  },
  'cloud-finops-unit-rate-optimization': {
    type: 'cloud-finops-unit-rate-optimization',
    title: 'Cloud FinOps Unit Rate Optimization',
    category: 'Strategy & Metrics',
    description: 'Multi-cloud unit rate cost bridge identifying idle workloads, spot arbitrage, and annualized savings',
    factory: createCloudFinopsUnitRateOptimizationSlide,
  },
  'product-market-fit-cohort-triangles': {
    type: 'product-market-fit-cohort-triangles',
    title: 'PMF Cohort Retention Triangles',
    category: 'Strategy & Metrics',
    description: 'Longitudinal user retention triangle proving asymptotic plateauing and net negative churn',
    factory: createProductMarketFitCohortTrianglesSlide,
  },
  'enterprise-ai-governance-guardrails': {
    type: 'enterprise-ai-governance-guardrails',
    title: 'Enterprise AI Governance Guardrails',
    category: 'Platform & Network',
    description: 'Four-stage AI compliance pipeline enforcing prompt shielding, factuality gates, and Merkle audit ledgers',
    factory: createEnterpriseAiGovernanceGuardrailsSlide,
  },
  'data-lakehouse-medallion-pipeline': {
    type: 'data-lakehouse-medallion-pipeline',
    title: 'Data Lakehouse Medallion Pipeline',
    category: 'Product & Architecture',
    description: 'Streaming Bronze-to-Gold Iceberg data refinery with automated schema evolution and sub-second serving',
    factory: createDataLakehouseMedallionPipelineSlide,
  },
  'merger-acquisition-synergy-bridge': {
    type: 'merger-acquisition-synergy-bridge',
    title: 'M&A Synergy Realization Bridge',
    category: 'Corporate Strategy',
    description: 'Post-merger value accretion waterfall stepping from baseline EBITDA to full cross-sell enterprise valuation',
    factory: createMergerAcquisitionSynergyBridgeSlide,
  },
  'developer-productivity-space-framework': {
    type: 'developer-productivity-space-framework',
    title: 'Developer Productivity SPACE Framework',
    category: 'Team & Credibility',
    description: 'Multidimensional engineering health framework assessing satisfaction, performance, activity, and flow',
    factory: createDeveloperProductivitySpaceFrameworkSlide,
  },
  'hybrid-cloud-dr-failover-topology': {
    type: 'hybrid-cloud-dr-failover-topology',
    title: 'Hybrid Cloud DR Failover Topology',
    category: 'Platform & Network',
    description: 'Automated disaster recovery regional swing with Anycast DNS routing and zero-data-loss replica promotion',
    factory: createHybridCloudDrFailoverTopologySlide,
  },
  'customer-health-scorecard-matrix': {
    type: 'customer-health-scorecard-matrix',
    title: 'Customer Health Scorecard Matrix',
    category: 'Story & Conversion',
    description: 'Tier-1 enterprise account health scorecard tracking feature adoption, executive alignment, and renewal ARR',
    factory: createCustomerHealthScorecardMatrixSlide,
  },
  'value-stream-bottleneck-flow': {
    type: 'value-stream-bottleneck-flow',
    title: 'Value Stream Bottleneck Flow',
    category: 'Product & Architecture',
    description: 'Software delivery value stream mapping identifying CI/CD delays, queue wait times, and flow efficiency',
    factory: createValueStreamBottleneckFlowSlide,
  },
};

export const SLIDE_ARCHETYPE_FACTORIES_LIST = Object.values(SLIDE_ARCHETYPE_FACTORIES);

export const createMetricGridSlide = (id = `slide-${Date.now()}`): MetricGridSlideData => ({
  id, type: 'metric-grid', kicker: 'FINANCIAL PERFORMANCE',
  title: 'Sovereign Infrastructure at Unprecedented Scale',
  subtitle: 'FY2026 operational milestones demonstrating exponential platform efficiency',
  columns: 3, footerNote: 'All metrics verified via cryptographically signed audit logs.',
  metrics: [
    { id: 'm1', value: '$48.2M', label: 'Annual Run Rate', change: '+324% YoY', trend: 'up', timeframe: 'Q4 FY26' },
    { id: 'm2', value: '99.999%', label: 'Verified Uptime', change: '+0.05% vs SLA', trend: 'up', timeframe: 'L12M' },
    { id: 'm3', value: '4.2x', label: 'Compute Throughput', change: '+420% YoY', trend: 'up', timeframe: '2026' },
    { id: 'm4', value: '14.8M', label: 'Active API Nodes', change: '+180% MoM', trend: 'up', timeframe: 'Live' },
    { id: 'm5', value: '< 12ms', label: 'P99 Edge Latency', change: '-45% vs Cloud', trend: 'down', timeframe: 'Global' },
    { id: 'm6', value: '98.4%', label: 'Gross Retention', change: '+14% vs Index', trend: 'up', timeframe: 'Annual' },
  ],
});

export const createProblemSolutionSlide = (id = `slide-${Date.now()}`): ProblemSolutionSlideData => ({
  id, type: 'problem-solution', kicker: 'MARKET DISRUPTION',
  title: 'Breaking The Legacy Architectural Ceiling',
  subtitle: 'Why status-quo cloud frameworks collapse under enterprise multi-agent workloads',
  verdict: 'Result: 12x velocity multiplier with 100% brand consistency.',
  problem: {
    tag: 'STATUS QUO / LEGACY', headline: 'Fragile Cloud Spaghetti',
    items: [
      { title: 'Cascading Runtime Failures', description: 'Fragile orchestration pipelines with unpredictable timeouts.' },
      { title: 'Vendor Lock-in', description: 'Runaway compute expenditures with proprietary cloud APIs.' },
      { title: 'Opaque Black-box Governance', description: 'Zero verifiable audit trails or deterministic replay.' },
    ],
  },
  solution: {
    tag: 'SOVEREIGN ARCHITECTURE', headline: 'Deterministic Engineering',
    items: [
      { title: 'Compiled State Machines', description: 'Bit-for-bit reproducible canvas state with zero drift.' },
      { title: 'Air-Gapped Portability', description: 'Runs identically on edge, bare metal, or cloud.' },
      { title: 'Sub-12ms Execution Loops', description: 'High-speed local caching and hardware acceleration.' },
    ],
  },
});

export const createQuadrantMatrixSlide = (id = `slide-${Date.now()}`): QuadrantMatrixSlideData => ({
  id, type: 'quadrant-matrix', kicker: 'COMPETITIVE LANDSCAPE',
  title: 'Market Positioning & Architectural Sovereignty',
  subtitle: 'Mapping deterministic precision against enterprise execution speed',
  xAxis: { low: 'Slow / Manual', high: 'Autonomous / Instant' },
  yAxis: { low: 'Fragile / Cloud-Locked', high: 'Sovereign / Deterministic' },
  quadrants: {
    topRight: { label: 'Sovereign Leaders', description: 'Compiled runtimes with zero drift' },
    topLeft: { label: 'Air-Gapped Legacy', description: 'High sovereignty but slow cycles' },
    bottomRight: { label: 'Cloud SaaS Fast-Movers', description: 'High velocity with severe lock-in' },
    bottomLeft: { label: 'Legacy Bureaucracy', description: 'Manual slide creation overhead' },
  },
  items: [
    { id: 'q1', name: 'Riseup White Engine', x: 88, y: 92, isHighlight: true, tag: 'Leader' },
    { id: 'q2', name: 'Legacy Office Suites', x: 20, y: 35, isHighlight: false, tag: 'Traditional' },
    { id: 'q3', name: 'Proprietary Cloud Web Apps', x: 75, y: 30, isHighlight: false, tag: 'SaaS' },
    { id: 'q4', name: 'Open-Source Markdown Tools', x: 38, y: 78, isHighlight: false, tag: 'Niche' },
  ],
});

export const createMarketOpportunitySlide = (id = `slide-${Date.now()}`): MarketOpportunitySlideData => ({
  id, type: 'market-opportunity', kicker: 'MARKET SIZING',
  title: 'Total Addressable Market Opportunity',
  subtitle: 'Capitalizing on the global transition toward programmatic enterprise presentation systems',
  methodology: 'Gartner & IDC Enterprise Software Sizing Report FY2026.',
  tiers: [
    { tier: 'TAM', label: 'Total Addressable Market', value: '$24.8B', growthRate: '+18.4% CAGR', description: 'Global enterprise visual communications software spend.', badge: 'Global Scope' },
    { tier: 'SAM', label: 'Serviceable Addressable Market', value: '$8.2B', growthRate: '+24.1% CAGR', description: 'Developer and engineering-first presentation workflows.', badge: 'Target Segment' },
    { tier: 'SOM', label: 'Serviceable Obtainable Market', value: '$1.4B', growthRate: '+42.5% CAGR', description: 'Sovereign high-velocity autonomous slide compilation for tech.', badge: 'Near-Term Focus' },
  ],
});

export const createTimelineRoadmapSlide = (id = `slide-${Date.now()}`): TimelineRoadmapSlideData => ({
  id, type: 'timeline-roadmap', kicker: 'PRODUCT ROADMAP',
  title: 'Strategic Execution & Platform Delivery Milestones',
  subtitle: 'Structured path toward complete presentation engine sovereignty',
  footnote: 'Milestone completion tracked via cryptographic commit evidence.',
  milestones: [
    { period: 'Q1 FY26', title: 'Core Canvas Foundation', status: 'completed', deliverables: ['1080p Pure Live DOM viewport', '10-Step precision color ramps', 'Instant hotkeys'], owner: 'Architecture' },
    { period: 'Q2 FY26', title: 'Expanded Slide Archetypes', status: 'completed', deliverables: ['15 production archetypes', 'Split-DB metadata indexing', 'Creation modal'], owner: 'Frontend Lead' },
    { period: 'Q3 FY26', title: 'Autonomous Multi-Agent Loop', status: 'in-progress', deliverables: ['Subagent task dispatching', 'Automated contrast validation', 'Self-healing'], owner: 'AI Engine' },
    { period: 'Q4 FY26', title: 'Air-Gapped Sovereign Mesh', status: 'upcoming', deliverables: ['Zero-egress local encryption', 'Enterprise SSO & RBAC', 'Offline 4K export'], owner: 'Core Systems' },
  ],
});

export const createFeatureGridSlide = (id = `slide-${Date.now()}`): FeatureGridSlideData => ({
  id, type: 'feature-grid', kicker: 'CORE CAPABILITIES',
  title: 'Enterprise-Grade Presentation Capabilities',
  subtitle: 'Architected for uncompromising fidelity, sub-millisecond responsiveness, and total sovereignty',
  columns: 3,
  features: [
    { id: 'f1', title: 'Pure Live DOM Typography', description: 'Zero blurry images. Every glyph, table, and number renders as crisp native DOM elements.', icon: 'Type', badge: 'High Fidelity', isHighlight: true },
    { id: 'f2', title: '10 Precision Color Themes', description: '10-step mathematically validated gradient ramps with WCAG AAA contrast guarantees.', icon: 'Palette', badge: 'Validated' },
    { id: 'f3', title: 'In-Place Inline Editing', description: 'Click any headline, metric, or card to edit directly on the 1080p virtual canvas.', icon: 'Edit3', badge: 'Realtime' },
    { id: 'f4', title: 'Zero-Egress Data Security', description: '100% client-side persistence in Split SQLite DB with zero cloud tracking or telemetry.', icon: 'ShieldCheck', badge: 'Air-Gapped' },
    { id: 'f5', title: 'Presenter HUD & Audio Cues', description: 'Floating ergonomic control dock with spatial audio feedback and live webcam feed.', icon: 'Mic', badge: 'Interactive' },
    { id: 'f6', title: 'Instant 4K Presentation Export', description: 'Export presentations to lossless vector formats or standalone offline web bundles.', icon: 'Download', badge: 'Lossless' },
  ],
});

export const createArchitectureDiagramSlide = (id = `slide-${Date.now()}`): ArchitectureDiagramSlideData => ({
  id, type: 'architecture-diagram', kicker: 'SYSTEM DESIGN',
  title: 'Sovereign Multi-Tier Architecture',
  subtitle: 'Deconstructed layers driving sub-12ms render cycles and zero runtime drift',
  protocolFlow: 'Client Hotkeys -> State Dispatch -> GPU CSS Transform -> Split-DB WAL Commit',
  layers: [
    { layerNumber: 1, name: 'Presentation Surface', badge: 'UI & DOM Layer', description: 'Pure Live DOM typography, 1920x1080 canvas container, CSS GPU transforms.', components: ['SlideRenderer', 'LiveDOMText', 'ThemeEngine', 'PresenterDock'] },
    { layerNumber: 2, name: 'State & Orchestration', badge: 'Runtime Layer', description: 'Zustand stores, inline editable state handlers, spatial sound synthesizers.', components: ['deckStore', 'editStore', 'soundEngine', 'hotkeyRouter'] },
    { layerNumber: 3, name: 'Persistence & Governance', badge: 'Data Tier', description: 'Split-DB architecture, SQLite WAL mode, Casbin RBAC, cryptographic ledger.', components: ['presentation.db', 'installation.db', 'EvidenceGate', 'AuditTrail'] },
  ],
});

export const createQuoteCalloutSlide = (id = `slide-${Date.now()}`): QuoteCalloutSlideData => ({
  id, type: 'quote-callout', kicker: 'KEYNOTE TESTIMONY',
  title: 'The Mandate for Deterministic Architecture',
  quote: 'True enterprise autonomy is achieved not by adding more layers of tooling, but by eliminating runtime indeterminism at the architectural foundation. When your presentation engine runs with compiled precision, every slide becomes an undeniable proof of sovereign capability.',
  author: { name: 'Alim Ul Karim', role: 'Chief Software Engineer', company: 'Enterprise Systems & Autonomous Runtimes', avatarUrl: '/assets/screenshots/hero-speaker-clean.png' },
  contextBadge: 'Architecture Keynote', footnote: 'Delivered at Enterprise Systems Summit 2026',
});

export const createStatsCalloutSlide = (id = `slide-${Date.now()}`): StatsCalloutSlideData => ({
  id, type: 'stats-callout', kicker: 'CORE METRIC BREAKTHROUGH',
  title: 'Unrivaled Throughput Acceleration',
  subtitle: 'Benchmarking autonomous canvas compilation against standard cloud renderers',
  statValue: '10.4x', statLabel: 'FASTER EXECUTION SPEED',
  description: 'Measured across 500,000 automated slide generation and compilation cycles with zero layout shift or fractional pixel jitter.',
  comparison: { baselineLabel: 'Standard Cloud SaaS', baselineValue: '124.0s / 10 slides', deltaLabel: '89.6% reduction in latency' },
  highlightPills: ['Sub-12ms Render Time', '0.00% Visual Drift Rate', '100% Deterministic DOM'],
});

export const createTeamGridSlide = (id = `slide-${Date.now()}`): TeamGridSlideData => ({
  id, type: 'team-grid', kicker: 'CORE LEADERSHIP',
  title: 'World-Class Engineering & Architecture Leadership',
  subtitle: 'Proven pioneers in distributed systems, compilers, and declarative UI runtimes',
  members: [
    { id: 'tm1', name: 'Alim Ul Karim', role: 'Chief Software Engineer', avatarUrl: '/assets/screenshots/hero-speaker-clean.png', pedigree: 'Lead Architect', specialty: 'Distributed Runtimes & Presentation Systems', tags: ['Distributed Systems', 'Core Architecture', 'Compiler Design'] },
    { id: 'tm2', name: 'Elena Rostova', role: 'Principal Frontend Architect', avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300', pedigree: 'WebGL Expert', specialty: '60fps Canvas Math & High-Fidelity Motion', tags: ['DOM Typography', 'GPU Transforms', 'Design Tokens'] },
    { id: 'tm3', name: 'Marcus Vance', role: 'Head of Systems & Performance', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300', pedigree: 'Systems Specialist', specialty: 'Low-Latency Concurrency & Split-DB Persistence', tags: ['SQLite WAL', 'Memory Optimization', 'Cache Engine'] },
    { id: 'tm4', name: 'Dr. Sarah Chen', role: 'AI Research Lead', avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300', pedigree: 'PhD Distributed AI', specialty: 'Multi-Agent Orchestration & Formal Verification', tags: ['Agent Swarms', 'Automated QA', 'Verification'] },
  ],
});

export const createCaseStudySlide = (id = `slide-${Date.now()}`): CaseStudySlideData => ({
  id, type: 'case-study', kicker: 'ENTERPRISE CASE STUDY',
  title: 'Global Fintech Corp Accelerates Deck Velocity by 12x',
  subtitle: 'How a Tier-1 financial institution eliminated deck friction with our sovereign engine',
  clientName: 'Apex Capital International', clientIndustry: 'Institutional Asset Management',
  challenge: 'Executive investment teams spent 48 hours per week manually adjusting PowerPoint formatting, suffering frequent font corruptions and zero version control.',
  solution: 'Implemented White Presentation Engine with automated data connectors, deterministic 1080p canvas layout, and air-gapped local Split-DB storage.',
  testimonialQuote: 'The White Presentation Engine transformed our investor briefings into a deterministic, high-impact competitive advantage.',
  testimonialAuthor: 'Director of Enterprise Architecture, Apex Capital',
  metrics: [
    { value: '12x', label: 'Faster Deck Assembly', detail: 'From 48h to 4h turnaround' },
    { value: '100%', label: 'Brand Compliance', detail: 'Zero typography deviations' },
    { value: '$1.4M', label: 'Annual Cost Savings', detail: 'Eliminated external design agency spend' },
  ],
});

export const createComparisonColumnsSlide = (id = `slide-${Date.now()}`): ComparisonColumnsSlideData => ({
  id, type: 'comparison-columns', kicker: 'COMPARATIVE EVALUATION',
  title: 'Choosing The Right Architectural Foundation',
  subtitle: 'Feature-by-feature evaluation against traditional slide tools and cloud presentation SaaS',
  columns: [
    { id: 'col-legacy', title: 'Traditional Slides', subtitle: 'Binary files & manual editing', badge: 'Legacy Desktop', isFeatured: false, summary: 'High maintenance burden with zero automation potential.', attributes: [{ label: 'Pure Live DOM Typography', value: 'Rasterized / Fixed', isPositive: false }, { label: 'Programmatic Compilation', value: 'Manual only', isPositive: false }, { label: '10-Step Precision Palette', value: 'Limited presets', isPositive: false }, { label: 'Inline Canvas Editing', value: 'Clunky modal boxes', isPositive: false }, { label: 'Air-Gapped Sovereign Storage', value: 'File-based only', isPositive: true }] },
    { id: 'col-cloud', title: 'Cloud Presentation SaaS', subtitle: 'Hosted proprietary web apps', badge: '$40/user/mo', isFeatured: false, summary: 'Recurring subscription cost with corporate data egress risks.', attributes: [{ label: 'Pure Live DOM Typography', value: 'SVG / Canvas shim', isPositive: false }, { label: 'Programmatic Compilation', value: 'Limited API tier', isPositive: false }, { label: '10-Step Precision Palette', value: 'Generic tokens', isPositive: false }, { label: 'Inline Canvas Editing', value: 'Full support', isPositive: true }, { label: 'Air-Gapped Sovereign Storage', value: 'Cloud lock-in', isPositive: false }] },
    { id: 'col-sovereign', title: 'Sovereign White Engine', subtitle: 'Deterministic React & TypeScript', badge: 'Enterprise Sovereign', isFeatured: true, summary: 'Maximum engineering velocity, sovereign ownership, and zero defects.', attributes: [{ label: 'Pure Live DOM Typography', value: '100% Native Elements', isPositive: true }, { label: 'Programmatic Compilation', value: 'Sub-12ms CLI Build', isPositive: true }, { label: '10-Step Precision Palette', value: 'WCAG AAA Verified', isPositive: true }, { label: 'Inline Canvas Editing', value: 'Instant on-canvas', isPositive: true }, { label: 'Air-Gapped Sovereign Storage', value: '100% Zero-Egress', isPositive: true }] },
  ],
});

export const createProcessCycleSlide = (id = `slide-${Date.now()}`): ProcessCycleSlideData => ({
  id, type: 'process-cycle', kicker: 'OPERATIONAL FLYWHEEL',
  title: 'The Compounding Sovereign Lifecycle Loop',
  subtitle: 'Continuous four-phase delivery cycle driving self-improving platform acceleration',
  centerHubTitle: 'Sovereign Core', centerHubSubtitle: 'Self-Optimizing Engine',
  flywheelOutcome: 'Compounds platform velocity with every presentation cycle.',
  stages: [
    { step: 1, label: 'Stage 01', title: 'Discover & Plan', description: 'Rigorous specification auditing and architectural boundary decomposition.', metricBadge: '100% Coverage' },
    { step: 2, label: 'Stage 02', title: 'Build & Compose', description: 'Pure DOM component synthesis adhering to strict modular limits.', metricBadge: '< 100 Lines' },
    { step: 3, label: 'Stage 03', title: 'Audit & Verify', description: 'Automated contrast validation, zero-debt linters, and type checking.', metricBadge: 'WCAG AAA' },
    { step: 4, label: 'Stage 04', title: 'Deploy & Scale', description: 'Deterministic local persistence and global presentation dissemination.', metricBadge: 'Zero Egress' },
  ],
});

export const createCodeTerminalSlide = (id = `slide-${Date.now()}`): CodeTerminalSlideData => ({
  id, type: 'code-terminal', kicker: 'DEVELOPER INTERFACE',
  title: 'Instantaneous Programmatic Compilation via CLI',
  subtitle: 'High-speed presentation compilation and archetype generation in milliseconds',
  terminalTitle: 'terminal@white-engine: ~/presentations/corporate-deck', activeTab: 'build-output.log',
  tabs: ['build-output.log', 'archetypes.config.json', 'theme-tokens.ts'],
  footnoteNote: 'Pure DOM compilation executed in sub-10ms without external dependencies.',
  lines: [
    { lineNumber: 1, type: 'command', text: '$ pnpm run build:slides --theme=white-brand --archetypes=15' },
    { lineNumber: 2, type: 'comment', text: '# Initializing sovereign compilation pipeline...' },
    { lineNumber: 3, type: 'output', text: '[INFO] Ingesting specification matrix from 02-spec/21-app/24-expanded-slide-system...' },
    { lineNumber: 4, type: 'success', text: '[OK]   Compiled 15/15 slide archetypes in 8.4ms (zero bundle warnings)' },
    { lineNumber: 5, type: 'success', text: '[OK]   WCAG AAA contrast verified across 10 theme color ramps' },
    { lineNumber: 6, type: 'success', text: '[OK]   Canvas bound locked to 1920x1080 @ 60fps GPU acceleration' },
    { lineNumber: 7, type: 'success', text: '[SUCCESS] Presentation compiled to build/index.html (Status: ZERO DEFECTS)' },
  ],
});

export const createCallToActionSlide = (id = `slide-${Date.now()}`): CallToActionSlideData => ({
  id, type: 'call-to-action', kicker: 'NEXT STEPS & ENGAGEMENT',
  title: 'Ready To Modernize Your Enterprise Presentations?',
  subtitle: 'Deploy sovereign declarative slide engineering across your organization today',
  headline: 'Accelerate Your Architectural Velocity Today',
  body: 'Experience the power of deterministic presentation engineering with pure live DOM typography and mathematical precision.',
  primaryAction: { label: 'Schedule Executive Demo', href: 'https://white-pres.dev/demo' },
  secondaryAction: { label: 'Browse Archetype Catalog', href: 'https://white-pres.dev/archetypes' },
  contactInfo: { email: 'chief@riseup.enterprise', website: 'https://white-pres.dev', location: 'Singapore & North America', handle: '@riseup_arch' },
  qrCodeUrl: '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png',
  guaranteePill: '100% Deterministic • Zero Data Egress • Sovereign Code',
});

const getBuiltInArchetypeMap = (): Record<string, (sid: string) => SlideData> => ({
  'metric-grid': createMetricGridSlide,
  'stats-callout': createStatsCalloutSlide,
  'market-opportunity': createMarketOpportunitySlide,
  'quadrant-matrix': createQuadrantMatrixSlide,
  'problem-solution': createProblemSolutionSlide,
  'timeline-roadmap': createTimelineRoadmapSlide,
  'feature-grid': createFeatureGridSlide,
  'architecture-diagram': createArchitectureDiagramSlide,
  'code-terminal': createCodeTerminalSlide,
  'process-cycle': createProcessCycleSlide,
  'team-grid': createTeamGridSlide,
  'case-study': createCaseStudySlide,
  'quote-callout': createQuoteCalloutSlide,
  'comparison-columns': createComparisonColumnsSlide,
  'call-to-action': createCallToActionSlide,
  steps: (sid) => ({ id: sid, type: 'steps', title: 'Execution Roadmap', kicker: 'AUTONOMOUS WORKFLOW', heading: 'Three phases, one goal', steps: [{ label: 'Discover', title: 'Analyze', detail: 'Evaluate architecture.' }, { label: 'Prototype', title: 'Build', detail: 'Develop minimal slice.' }, { label: 'Ship', title: 'Verify', detail: 'Execute gates.' }] }),
  'steps-chain': (sid) => ({ id: sid, type: 'steps-chain', title: 'Implementation Architecture', subtitle: '4-phase deployment timeline', steps: [{ stepNumber: 1, title: 'Intake & Discovery' }, { stepNumber: 2, title: 'Engine Synthesis' }, { stepNumber: 3, title: 'Interactive Staging' }, { stepNumber: 4, title: 'Enterprise Release' }] }),
  'competitive-edge': (sid) => ({ id: sid, type: 'competitive-edge', title: 'Competitive Advantage', subtitle: 'Measurable enterprise superiority matrix', headers: ['Capability', 'Legacy Models', 'Riseup Standard'], rows: [{ feature: 'Autonomous Loop QA', competitor: 'Manual review', us: '100% Deterministic CI' }] }),
  'tech-stack': (sid) => ({ id: sid, type: 'tech-stack', title: 'Production Architecture', subtitle: 'Battle-tested engineering stack', categories: [{ name: 'Core Engine', icon: 'cpu', technologies: [{ name: 'React 19', level: 'Core' }] }] }),
  pricing: (sid) => ({ id: sid, type: 'pricing', title: 'Sovereign Investment Tiers', subtitle: 'Transparent pricing', tiers: [{ name: 'Enterprise', price: '$4,900', cadence: 'Annual License', isFeatured: true, features: ['15 Archetypes'], ctaLabel: 'Deploy Sovereign' }] }),
  'before-after': (sid) => ({ id: sid, type: 'before-after', title: 'Operational Transformation', kicker: 'STRATEGIC SHIFT', before: { title: 'Legacy Workflow', points: ['Manual formatting'] }, after: { title: 'Sovereign Workflow', points: ['Deterministic DOM'] } }),
  persona: (sid) => ({ id: sid, type: 'persona', title: 'Technical Leadership', name: 'Alim Ul Karim', role: 'Chief Software Engineer', avatarUrl: '/assets/screenshots/hero-speaker-clean.png', metrics: [{ value: '15+ Yrs', label: 'Systems' }], bioBullets: ['Lead architect of sovereign runtimes.'] }),
});

const createFallbackTitleSlide = (id: string): SlideData => ({
  id,
  type: 'title',
  title: 'New Strategic Keynote',
  subtitle: 'High-leverage enterprise presentation',
  presenter: { name: 'Alim Ul Karim', role: 'Chief Software Engineer', company: 'Riseup Asia LLC' },
});

export const createArchetypeSlide = (type: SlideType, id = `slide-${Date.now()}`): SlideData => {
  if (type in SUITE_2030_FACTORIES) {
    return SUITE_2030_FACTORIES[type as keyof typeof SUITE_2030_FACTORIES](id);
  }
  if (type in SUITE_2029_FACTORIES) {
    return SUITE_2029_FACTORIES[type as keyof typeof SUITE_2029_FACTORIES](id);
  }
  if (type in SUITE_2028_FACTORIES) {
    return SUITE_2028_FACTORIES[type as keyof typeof SUITE_2028_FACTORIES](id);
  }
  if (type in SUITE_2027_FACTORIES) {
    return SUITE_2027_FACTORIES[type as keyof typeof SUITE_2027_FACTORIES](id);
  }
  if (type in SUITE_2026_FACTORIES) {
    return SUITE_2026_FACTORIES[type as keyof typeof SUITE_2026_FACTORIES](id);
  }
  if (type in GLOBAL_PPT_EVOLUTION_FACTORIES) {
    return GLOBAL_PPT_EVOLUTION_FACTORIES[type](id);
  }
  if (type in GLOBAL_PPT_NEXTGEN_FACTORIES) {
    return GLOBAL_PPT_NEXTGEN_FACTORIES[type](id);
  }
  if (type in GLOBAL_PPT_MASTERY_FACTORIES) {
    return GLOBAL_PPT_MASTERY_FACTORIES[type](id);
  }
  if (type in KINETIC_REVOLUTION_FACTORIES) {
    return KINETIC_REVOLUTION_FACTORIES[type as keyof typeof KINETIC_REVOLUTION_FACTORIES](id);
  }
  if (type in EXPANSION_FACTORIES) {
    return EXPANSION_FACTORIES[type](id);
  }
  if (type in CUSTOMIZATION_FACTORIES) {
    return CUSTOMIZATION_FACTORIES[type as keyof typeof CUSTOMIZATION_FACTORIES](id);
  }
  if (type in MODERN_FACTORIES) {
    return MODERN_FACTORIES[type as keyof typeof MODERN_FACTORIES](id);
  }
  if (type in SLIDE_ARCHETYPE_FACTORIES) {
    return SLIDE_ARCHETYPE_FACTORIES[type].factory(id);
  }
  if (type in NEXTGEN_FACTORIES) {
    return NEXTGEN_FACTORIES[type as keyof typeof NEXTGEN_FACTORIES](id);
  }
  const kineticSlide = createKineticSuiteSlide(type as any, id);
  if (kineticSlide) {
    return kineticSlide;
  }
  if (type in ENTERPRISE_FACTORIES) {
    return ENTERPRISE_FACTORIES[type as keyof typeof ENTERPRISE_FACTORIES](id);
  }
  if (type in EXTENDED_FACTORIES) {
    return EXTENDED_FACTORIES[type as keyof typeof EXTENDED_FACTORIES](id);
  }
  if (type in EXPANDED_FACTORIES) {
    return EXPANDED_FACTORIES[type as keyof typeof EXPANDED_FACTORIES](id);
  }
  const builtInMap = getBuiltInArchetypeMap();
  const factory = builtInMap[type];
  return factory ? factory(id) : createFallbackTitleSlide(id);
};
