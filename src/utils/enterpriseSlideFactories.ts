import type { SlideData } from '../types/presentation';
import type {
  EnterpriseSlideType, ExecutiveSummarySlideData, SystemArchitectureSlideData,
  RoiMetricCalculatorSlideData, CustomerJourneySlideData, MatrixComparisonSlideData,
  TechStackGridSlideData, TeamHierarchySlideData, SecurityComplianceSlideData,
  ProductRoadmapTimelineSlideData, InteractiveFaqSlideData, KeyMetricScorecardSlideData,
  CaseStudyImpactSlideData, DualColumnProsConsSlideData, InteractiveCodePlaygroundSlideData,
  ClosingCtaShowcaseSlideData,
} from '../types/enterpriseArchetypes';
import type { ArchetypeOption } from './extendedSlideFactories';

// 1. Executive Summary
export const createExecutiveSummarySlide = (id = `slide-${Date.now()}`): ExecutiveSummarySlideData => ({
  id, type: 'executive-summary', kicker: 'EXECUTIVE BRIEFING',
  title: 'Enterprise Architecture & Strategic Horizon',
  subtitle: 'Sovereign runtime acceleration and organizational milestones for FY2026',
  overview: 'Enterprise systems migration achieved 100% of sovereign infrastructure and performance milestones across all tiers.',
  highlights: [
    { id: 'eh-1', label: 'Annual Revenue Run-Rate', value: '$84.2M', detail: '+38% YoY ARR growth', isPositiveTrend: true },
    { id: 'eh-2', label: 'Platform Availability', value: '99.999%', detail: 'Exceeded SLA across all regions', isPositiveTrend: true },
    { id: 'eh-3', label: 'P99 Edge Latency', value: '< 8.4ms', detail: 'Sub-10ms global SLA achieved', isPositiveTrend: true },
  ],
  strategicPillars: [
    { title: 'Sovereign Autonomy', description: 'Air-gapped execution with zero cloud vendor telemetry egress.', icon: 'Shield', hasAccent: true },
    { title: 'Deterministic Precision', description: 'Pure Live DOM rendering on fixed 1920x1080 canvas coordinates.', icon: 'Sparkles', hasAccent: false },
    { title: 'Autonomous Velocity', description: 'Parallel AI worker fleets delivering continuous verified migrations.', icon: 'Zap', hasAccent: true },
  ],
  takeawayQuote: 'Deterministic engineering standards convert operational complexity into compounding market dominance.',
});

// 2. System Architecture Flow
export const createSystemArchitectureFlowSlide = (id = `slide-${Date.now()}`): SystemArchitectureSlideData => ({
  id, type: 'system-architecture-flow', kicker: 'TOPOLOGY BLUEPRINT',
  title: 'Multi-Tier Cloud Topology & Live Event Stream Fabric',
  subtitle: 'End-to-end data pipeline from edge ingress to distributed persistent Split-DB shards',
  flowDirection: 'horizontal',
  layers: [
    { id: 'layer-client', layerName: 'Client Surface Tier', description: 'Pure Live DOM typography, 1920x1080 canvas viewport', isHighlighted: false, nodes: [{ id: 'node-canvas', name: 'Virtual Canvas 1080p', type: 'UI Component', icon: 'LayoutGrid', isCluster: false }, { id: 'node-hud', name: 'Presenter HUD & Audio', type: 'Control Dock', icon: 'Mic', isCluster: false }] },
    { id: 'layer-engine', layerName: 'Core Runtime Engine', description: 'Sub-10ms compilation pipeline with state orchestration', isHighlighted: true, nodes: [{ id: 'node-zustand', name: 'Zustand State Store', type: 'State Machine', icon: 'Cpu', isCluster: true }, { id: 'node-router', name: 'Slide Archetype Router', type: 'Compiler Dispatch', icon: 'Layers', isCluster: false }] },
    { id: 'layer-data', layerName: 'Persistence & Governance', description: 'Split SQLite DB with ACID guarantees and zero egress', isHighlighted: false, nodes: [{ id: 'node-split-db', name: 'Split SQLite Database', type: 'Local Storage', icon: 'Database', isCluster: true }, { id: 'node-casbin', name: 'Casbin RBAC Security', type: 'Policy Gate', icon: 'Shield', isCluster: false }] },
  ],
  connections: [
    { fromId: 'node-canvas', toId: 'node-zustand', label: 'Sync State', hasBiDirectional: true },
    { fromId: 'node-zustand', toId: 'node-split-db', label: 'ACID WAL', hasBiDirectional: false },
  ],
});

// 3. ROI Metric Calculator
export const createRoiMetricCalculatorSlide = (id = `slide-${Date.now()}`): RoiMetricCalculatorSlideData => ({
  id, type: 'roi-metric-calculator', kicker: 'CAPITAL EFFICIENCY',
  title: 'Quantified Return on Investment & Payback Horizon',
  subtitle: 'Projected financial yield, software capitalization, and OPEX compression model',
  investmentAmount: 180000, annualReturn: 640000, timeframeMonths: 36, currencySymbol: '$',
  assumptions: [
    { id: 'a1', factor: 'License Elimination', impact: '$240,000/yr savings by replacing per-seat slide tools', isEstimated: false },
    { id: 'a2', factor: 'Velocity Acceleration', impact: '12x faster slide assembly translates to 4,200 eng hours saved', isEstimated: false },
    { id: 'a3', factor: 'Infra Compression', impact: 'Zero egress air-gapped runtimes save $84,000 in cloud bandwidth', isEstimated: true },
  ],
  calculatedMetrics: [
    { label: '3-Year Net ROI', value: '312%', subtext: 'Based on $640k annual gross return', isPrimaryRoi: true },
    { label: 'Payback Period', value: '3.4 Months', subtext: 'Full capital recovery timeline', isPrimaryRoi: false },
    { label: 'Total Value Generated', value: '$1.92M', subtext: 'Cumulative 36-month enterprise yield', isPrimaryRoi: false },
  ],
});

// 4. Customer Journey Map
export const createCustomerJourneyMapSlide = (id = `slide-${Date.now()}`): CustomerJourneySlideData => ({
  id, type: 'customer-journey-map', kicker: 'EXPERIENCE ARCHITECTURE',
  title: 'Enterprise Customer Journey & Lifecycle Velocity Rail',
  subtitle: 'End-to-end touchpoint orchestration from architectural discovery to sovereign production scale',
  personaName: 'Chief Technology Officer / Enterprise Architect',
  phases: [
    { id: 'p1', phaseTitle: 'Discovery & Evaluation', touchpoint: 'Technical White Paper & Spec Audit', emotion: 'satisfied', painPoint: 'Vendor lock-in and per-seat SaaS tax', opportunity: 'Demonstrate sovereign air-gapped architecture', isActivePhase: false },
    { id: 'p2', phaseTitle: 'Architectural POC', touchpoint: 'Headless Slide Pipeline Compilation', emotion: 'delighted', painPoint: 'Format corruption on high-DPI displays', opportunity: 'Pure live DOM rendering with sub-pixel fidelity', isActivePhase: true },
    { id: 'p3', phaseTitle: 'Enterprise Integration', touchpoint: 'Split-DB & Casbin RBAC Deployment', emotion: 'satisfied', painPoint: 'Information security and audit compliance', opportunity: 'Zero-egress cryptographic audit verification', isActivePhase: false },
    { id: 'p4', phaseTitle: 'Sovereign Production', touchpoint: 'Autonomous Multi-Agent Maintenance', emotion: 'delighted', painPoint: 'Technical debt and guideline drifts', opportunity: 'Continuous automated refactoring micro-batches', isActivePhase: false },
  ],
});

// 5. Matrix Comparison Grid
export const createMatrixComparisonGridSlide = (id = `slide-${Date.now()}`): MatrixComparisonSlideData => ({
  id, type: 'matrix-comparison-grid', kicker: 'COMPETITIVE EVALUATION',
  title: 'Architecture Benchmark & Differentiator Matrix',
  subtitle: 'Rigorous technical comparison of sovereign live DOM presentations against legacy cloud tools',
  columns: [
    { id: 'col-feat', title: 'Architectural Capability' },
    { id: 'col-white', title: 'White Engine (Sovereign)', isLeader: true, badge: 'LEADER' },
    { id: 'col-deck', title: 'Traditional Cloud SaaS', isLeader: false },
    { id: 'col-corp', title: 'Legacy Desktop (.pptx)', isLeader: false },
  ],
  features: [
    { id: 'f1', category: 'Runtime', featureName: 'Pure Live DOM Typography', values: { 'col-white': '100% Native DOM', 'col-deck': 'Raster Canvas / Image', 'col-corp': 'Proprietary Vector' }, isKeyDifferentiator: true },
    { id: 'f2', category: 'Performance', featureName: 'Sub-10ms Compilation Latency', values: { 'col-white': '8.4ms (Verified)', 'col-deck': '800ms - 2.4s', 'col-corp': '500ms - 1.2s' }, isKeyDifferentiator: true },
    { id: 'f3', category: 'Security', featureName: 'Air-Gapped Zero-Egress Storage', values: { 'col-white': 'Split SQLite WAL', 'col-deck': 'Third-Party Cloud Only', 'col-corp': 'Local File (Unencrypted)' }, isKeyDifferentiator: true },
    { id: 'f4', category: 'Economics', featureName: 'Per-Seat Recurring Licensing Tax', values: { 'col-white': '$0 (Flat Source)', 'col-deck': '$360 - $840 / seat / yr', 'col-corp': 'Commercial Office License' }, isKeyDifferentiator: true },
  ],
});

// 6. Tech Stack Grid
export const createTechStackGridSlide = (id = `slide-${Date.now()}`): TechStackGridSlideData => ({
  id, type: 'tech-stack-grid', kicker: 'PRODUCTION STACK',
  title: 'Battle-Tested Enterprise Engineering Ecosystem',
  subtitle: 'Rigorous architectural selection optimized for deterministic reliability, speed, and zero egress',
  stackPillars: [
    { id: 'tp-frontend', category: 'Presentation & UI Engine', technologies: [{ name: 'React 19', version: '^19.0.0', purpose: 'Component tree and DOM reconciliation', icon: 'LayoutGrid', isVerified: true }, { name: 'Tailwind CSS v4', version: '^4.0.0', purpose: '10-Step precision color token ramps', icon: 'Palette', isVerified: true }, { name: 'Lucide React', version: '^0.470.0', purpose: 'Pixel-perfect vector iconography', icon: 'Sparkles', isVerified: true }] },
    { id: 'tp-runtime', category: 'Runtime & State', technologies: [{ name: 'Zustand', version: '^5.0.0', purpose: 'Deterministic immutable store updates', icon: 'Cpu', isVerified: true }, { name: 'TypeScript', version: '^5.7.0', purpose: 'Strict typing and leaf model contracts', icon: 'Code', isVerified: true }, { name: 'Vite 6', version: '^6.0.0', purpose: 'Sub-millisecond HMR compilation', icon: 'Zap', isVerified: true }] },
    { id: 'tp-storage', category: 'Persistence & Security', technologies: [{ name: 'SQLite 3 WAL', version: 'v3.45', purpose: 'Air-gapped Split-DB ACID storage', icon: 'Database', isVerified: true }, { name: 'Casbin RBAC', version: 'v2.80', purpose: 'Enterprise role-based security policies', icon: 'Shield', isVerified: true }, { name: 'GitMap Engine', version: 'v2.14', purpose: 'High-speed symbol scanning and caching', icon: 'Terminal', isVerified: true }] },
  ],
});

// 7. Team Hierarchy Org
export const createTeamHierarchyOrgSlide = (id = `slide-${Date.now()}`): TeamHierarchySlideData => ({
  id, type: 'team-hierarchy-org', kicker: 'ORGANIZATIONAL TOPOLOGY',
  title: 'Engineering Governance & Leadership Structure',
  subtitle: 'Deconstructed team hierarchy managing sovereign core runtimes and AI orchestration',
  rootRole: 'Chief Software Engineer', rootName: 'Alim Ul Karim', rootAvatarUrl: '/assets/screenshots/hero-speaker-clean.png',
  departments: [
    { id: 'dept-arch', departmentName: 'Core Architecture', leadName: 'Alim Ul Karim', leadRole: 'Chief Software Engineer', headcount: 8, isExpandedDefault: true, members: [{ name: 'Marcus Vance', role: 'Staff Systems Architect', isLead: true }, { name: 'Elena Rostova', role: 'Principal Frontend Engineer', isLead: false }] },
    { id: 'dept-ai', departmentName: 'Autonomous AI Systems', leadName: 'Dr. Sarah Chen', leadRole: 'VP of AI Engineering', headcount: 6, isExpandedDefault: true, members: [{ name: 'Kenji Sato', role: 'Staff Multi-Agent Engineer', isLead: false }, { name: 'Priya Patel', role: 'Senior Verification Specialist', isLead: false }] },
    { id: 'dept-sec', departmentName: 'Security & Governance', leadName: 'David Thorne', leadRole: 'Director of Platform Security', headcount: 4, isExpandedDefault: false, members: [{ name: 'Amina Idris', role: 'Lead Compliance Officer', isLead: false }] },
  ],
});
export const createTeamHierarchySlide = createTeamHierarchyOrgSlide;

// 8. Security Compliance Matrix
export const createSecurityComplianceMatrixSlide = (id = `slide-${Date.now()}`): SecurityComplianceSlideData => ({
  id, type: 'security-compliance-matrix', kicker: 'SECURITY & GOVERNANCE',
  title: 'Enterprise Compliance & Audit Assurance Matrix',
  subtitle: 'Rigorous regulatory standards, third-party attestations, and cryptographic security controls',
  complianceLevel: 'Enterprise Tier-1 Sovereign',
  certifications: [
    { id: 'cert-soc2', name: 'SOC 2 Type II', issuingBody: 'AICPA Independent Auditor', status: 'certified', badgeIcon: 'ShieldCheck', hasFullAuditPassed: true },
    { id: 'cert-iso', name: 'ISO/IEC 27001:2022', issuingBody: 'British Standards Institution', status: 'certified', badgeIcon: 'Award', hasFullAuditPassed: true },
    { id: 'cert-hipaa', name: 'HIPAA Security Rule', issuingBody: 'Third-Party Health Audit', status: 'certified', badgeIcon: 'CheckCircle2', hasFullAuditPassed: true },
    { id: 'cert-fedramp', name: 'FedRAMP Moderate', issuingBody: 'PMO Authorization Review', status: 'in-review', badgeIcon: 'Scale', hasFullAuditPassed: false },
  ],
  controls: [
    { id: 'ctrl-1', category: 'Data Sovereignty', standard: 'Zero-Egress Air-Gapped Storage', coveragePercent: 100, isAudited: true },
    { id: 'ctrl-2', category: 'Access Governance', standard: 'Casbin RBAC Least Privilege Enforcement', coveragePercent: 99, isAudited: true },
    { id: 'ctrl-3', category: 'Cryptographic Ledger', standard: 'SHA-256 Commit & Task Evidence Logging', coveragePercent: 100, isAudited: true },
    { id: 'ctrl-4', category: 'Vulnerability Management', standard: 'Continuous SBOM & Zero-Storage Scans', coveragePercent: 96, isAudited: true },
  ],
});
export const createSecurityComplianceSlide = createSecurityComplianceMatrixSlide;

// 9. Product Roadmap Timeline
export const createProductRoadmapTimelineSlide = (id = `slide-${Date.now()}`): ProductRoadmapTimelineSlideData => ({
  id, type: 'product-roadmap-timeline', kicker: 'STRATEGIC HORIZON',
  title: 'Multi-Quarter Strategic Delivery Milestones',
  subtitle: 'Systematic progression toward full enterprise presentation sovereignty and autonomous AI delivery',
  currentQuarter: 'Q3 FY26',
  milestones: [
    { id: 'rm-1', quarter: 'Q1 FY26', headline: 'Foundation & Core Canvas', deliverables: ['1080p Pure Live DOM Viewport', '10-Step Mathematical Color Ramps', 'Sub-10ms Hotkey Routing'], status: 'completed', isMajorRelease: true },
    { id: 'rm-2', quarter: 'Q2 FY26', headline: 'Enterprise Archetype Fleet', deliverables: ['15 Production Slide Archetypes', 'Split-DB Persistent Indexing', 'Full Slide Builder Modal'], status: 'completed', isMajorRelease: false },
    { id: 'rm-3', quarter: 'Q3 FY26', headline: 'Autonomous Subagent Mesh', deliverables: ['Parallel Micro-Batch Orchestration', 'SQLite Task Claiming Engine', 'Continuous RCA & Linters'], status: 'in-progress', isMajorRelease: true },
    { id: 'rm-4', quarter: 'Q4 FY26', headline: 'Air-Gapped Sovereign Mesh', deliverables: ['Zero-Egress Encryption at Rest', 'Enterprise SAML/Casbin RBAC', 'Standalone Vector 4K Export'], status: 'planned', isMajorRelease: false },
  ],
});

// 10. Interactive FAQ Flow
export const createInteractiveFaqFlowSlide = (id = `slide-${Date.now()}`): InteractiveFaqSlideData => ({
  id, type: 'interactive-faq-flow', kicker: 'STAKEHOLDER ALIGNMENT',
  title: 'Enterprise Architecture & Governance FAQ',
  subtitle: 'Addressing critical executive inquiries regarding sovereignty, security, and scalability',
  categories: ['Architecture', 'Security', 'Licensing', 'Integrations'],
  faqItems: [
    { id: 'faq-1', category: 'Architecture', question: 'How does Pure Live DOM typography differ from standard slide tools?', answer: 'Traditional slide engines render slides into canvas bitmaps or rasterized images. Our engine maintains 100% native HTML/DOM nodes on a 1920x1080 coordinate canvas, enabling crisp sub-pixel text rendering and live inline editing.', isOpenDefault: true, hasCodeSnippet: false },
    { id: 'faq-2', category: 'Security', question: 'Can the presentation engine run completely air-gapped without internet access?', answer: 'Yes. All state is maintained locally in Split SQLite databases with zero telemetry egress. Presentations can be compiled into single standalone bundles for high-security environments.', isOpenDefault: false, hasCodeSnippet: false },
    { id: 'faq-3', category: 'Licensing', question: 'Are there recurring per-seat fees as our engineering organization expands?', answer: 'No. The platform utilizes a sovereign flat architecture model with clean source code ownership, eliminating per-seat licensing taxes entirely.', isOpenDefault: false, hasCodeSnippet: false },
    { id: 'faq-4', category: 'Integrations', question: 'How does the engine integrate with existing CI/CD and automated test suites?', answer: 'The engine provides CLI hooks and TypeScript APIs for headless presentation compilation, contrast verification, and automated slide generation in under 10ms.', isOpenDefault: false, hasCodeSnippet: true },
  ],
});
export const createInteractiveFaqSlide = createInteractiveFaqFlowSlide;

// 11. Key Metric Scorecard
export const createKeyMetricScorecardSlide = (id = `slide-${Date.now()}`): KeyMetricScorecardSlideData => ({
  id, type: 'key-metric-scorecard', kicker: 'PERFORMANCE SCORECARD',
  title: 'Executive Operational Performance Scorecard',
  subtitle: 'Quantitative assessment of platform velocity, system reliability, and financial impact against target SLAs',
  overallGrade: 'Grade A+ Sovereign',
  scorecards: [
    { id: 'sc-1', metricTitle: 'Platform Uptime SLA', currentValue: '99.999%', targetValue: '99.990%', varianceDelta: '+0.009%', isTargetExceeded: true, statusColor: '#10B981' },
    { id: 'sc-2', metricTitle: 'P99 Compilation Latency', currentValue: '8.4ms', targetValue: '< 15.0ms', varianceDelta: '-6.6ms', isTargetExceeded: true, statusColor: '#10B981' },
    { id: 'sc-3', metricTitle: 'Zero-Defect Pass Rate', currentValue: '100.0%', targetValue: '100.0%', varianceDelta: '0.00%', isTargetExceeded: true, statusColor: '#6366F1' },
    { id: 'sc-4', metricTitle: 'Annual Cloud TCO Reduction', currentValue: '$612K', targetValue: '$500K', varianceDelta: '+$112K', isTargetExceeded: true, statusColor: '#10B981' },
  ],
});

// 12. Case Study Impact
export const createCaseStudyImpactSlide = (id = `slide-${Date.now()}`): CaseStudyImpactSlideData => ({
  id, type: 'case-study-impact', kicker: 'CUSTOMER TRANSFORMATION',
  title: 'Global Financial Institution Accelerates Keynote Velocity by 12x',
  subtitle: 'How Apex Capital modernized high-stakes briefing decks with sovereign declarative architecture',
  clientName: 'Apex Capital International', clientIndustry: 'Institutional Asset Management ($42B AUM)', clientLogoUrl: '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png',
  challenge: 'Executive investment teams wasted 48+ hours weekly resolving formatting inconsistencies, font corruptions, and broken templates across decentralized teams.',
  solution: 'Deployed the White Presentation Engine with automated data connectors, deterministic 1080p canvas coordinates, and Split SQLite local storage.',
  quantifiedResults: [
    { label: 'Turnaround Acceleration', metricValue: '12x', context: 'From 48h to 4h per deck assembly', isHeadlineMetric: true },
    { label: 'Brand & Contrast Fidelity', metricValue: '100%', context: 'WCAG AAA verified across all slides', isHeadlineMetric: false },
    { label: 'Annual Capital Savings', metricValue: '$1.4M', context: 'Eliminated agency and license overhead', isHeadlineMetric: true },
  ],
});

// 13. Dual Column Pros Cons
export const createDualColumnProsConsSlide = (id = `slide-${Date.now()}`): DualColumnProsConsSlideData => ({
  id, type: 'dual-column-pros-cons', kicker: 'DECISION ANALYSIS',
  title: 'Architectural Trade-Off Evaluation: Sovereign vs Cloud SaaS',
  subtitle: 'Balanced technical evaluation of benefits, constraints, and operational mitigations',
  topic: 'Enterprise Migration to Sovereign Declarative Slide Architecture',
  prosHeader: 'Sovereign Advantages',
  pros: [
    { id: 'pro-1', title: '100% Deterministic DOM Rendering', detail: 'Zero layout jitter or rasterized blur; bit-for-bit identical on every display.', hasHighImpact: true, hasWorkaround: false },
    { id: 'pro-2', title: 'Total Air-Gapped Data Sovereignty', detail: 'Zero cloud telemetry or third-party egress; compliant with strict banking policies.', hasHighImpact: true, hasWorkaround: false },
    { id: 'pro-3', title: 'Autonomous Multi-Agent Refactoring', detail: 'Continuous parallel subagent loops keep architecture debt-free automatically.', hasHighImpact: false, hasWorkaround: false },
  ],
  consHeader: 'Migration Constraints & Mitigations',
  cons: [
    { id: 'con-1', title: 'Requires TypeScript / React Tooling Familiarity', detail: 'Non-technical slide creators require the intuitive visual builder UI.', hasHighImpact: false, hasWorkaround: true },
    { id: 'con-2', title: 'Initial Migration Investment for Legacy Decks', detail: 'Older .pptx files need one-time conversion to declarative JSON models.', hasHighImpact: true, hasWorkaround: true },
  ],
  recommendationSummary: 'The strategic gains in security, speed, and zero license costs decisively outweigh the one-time transition overhead.',
});

// 14. Interactive Code Playground
export const createInteractiveCodePlaygroundSlide = (id = `slide-${Date.now()}`): InteractiveCodePlaygroundSlideData => ({
  id, type: 'interactive-code-playground', kicker: 'DEVELOPER PLAYGROUND',
  title: 'Interactive Declarative Slide Specification',
  subtitle: 'Inspect and test programmatic slide definitions live with syntax validation and instant output',
  language: 'typescript',
  initialCode: '// Sovereign Slide Archetype Compilation\nimport { createArchetypeSlide } from \'@/utils/slideArchetypeFactories\';\nimport { executeContrastAudit } from \'@/utils/themeAuditor\';\n\nconst slide = createArchetypeSlide(\'executive-summary\');\nconst audit = executeContrastAudit(slide, \'white-brand\');\n\nconsole.log(`[OK] Slide compiled in 8.4ms. Status: ${audit.status}`);\nexport default slide;',
  executionOutput: '[OK] Slide compiled in 8.4ms. Status: WCAG_AAA_PASS\n[OK] 0 visual defects detected across 1920x1080 canvas viewport.',
  filename: 'slideArchetype.config.ts', isExecutable: true, hasSyntaxHighlighting: true,
});

// 15. Closing CTA Showcase
export const createClosingCtaShowcaseSlide = (id = `slide-${Date.now()}`): ClosingCtaShowcaseSlideData => ({
  id, type: 'closing-cta-showcase', kicker: 'PARTNERSHIP & ENGAGEMENT',
  title: 'Accelerate Your Enterprise Architecture Today',
  subtitle: 'Partner with our technical leadership to achieve complete presentation sovereignty',
  ctaHeadline: 'Deploy Sovereign Presentation Systems Across Your Enterprise',
  subHeadline: 'Schedule a tailored architecture briefing and hands-on technical workshop with our founding team.',
  primaryCta: { label: 'Schedule Architecture Briefing', url: 'https://white-pres.dev/briefing', actionType: 'calendar', isPrimaryButton: true },
  secondaryCta: { label: 'Explore Archetype Documentation', url: 'https://white-pres.dev/docs' },
  contactInfo: { email: 'chief@riseup.enterprise', phone: '+1 (800) 555-0199', website: 'https://white-pres.dev', hasCalendarLink: true },
  socialProofNote: 'Trusted by Tier-1 financial institutions, distributed cloud architects, and autonomous engineering teams worldwide.',
});

export const ENTERPRISE_FACTORIES: Record<EnterpriseSlideType, (id?: string) => SlideData> = {
  'executive-summary': createExecutiveSummarySlide,
  'system-architecture-flow': createSystemArchitectureFlowSlide,
  'roi-metric-calculator': createRoiMetricCalculatorSlide,
  'customer-journey-map': createCustomerJourneyMapSlide,
  'matrix-comparison-grid': createMatrixComparisonGridSlide,
  'tech-stack-grid': createTechStackGridSlide,
  'team-hierarchy-org': createTeamHierarchyOrgSlide,
  'security-compliance-matrix': createSecurityComplianceMatrixSlide,
  'product-roadmap-timeline': createProductRoadmapTimelineSlide,
  'interactive-faq-flow': createInteractiveFaqFlowSlide,
  'key-metric-scorecard': createKeyMetricScorecardSlide,
  'case-study-impact': createCaseStudyImpactSlide,
  'dual-column-pros-cons': createDualColumnProsConsSlide,
  'interactive-code-playground': createInteractiveCodePlaygroundSlide,
  'closing-cta-showcase': createClosingCtaShowcaseSlide,
};

export const createEnterpriseSlide = (type: EnterpriseSlideType, id = `slide-${Date.now()}`): SlideData => {
  const factory = ENTERPRISE_FACTORIES[type];
  return factory ? factory(id) : createExecutiveSummarySlide(id);
};

export const ENTERPRISE_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  { type: 'executive-summary', label: 'Executive Summary Briefing', category: 'Strategy & Metrics', desc: 'KPI highlights, strategic pillars, and executive takeaway quote', icon: 'Sparkles' },
  { type: 'system-architecture-flow', label: 'System Architecture Flow', category: 'Product & Architecture', desc: 'Multi-tier topology layers with node connections', icon: 'Layers' },
  { type: 'roi-metric-calculator', label: 'ROI Metric Calculator', category: 'Strategy & Metrics', desc: 'Investment amortization, assumptions, and 3-year net ROI', icon: 'BarChart3' },
  { type: 'customer-journey-map', label: 'Customer Journey Map', category: 'Story & Conversion', desc: 'Touchpoint lifecycle stages, sentiment, and opportunities', icon: 'GitCompare' },
  { type: 'matrix-comparison-grid', label: 'Matrix Comparison Grid', category: 'Strategy & Metrics', desc: 'Feature comparison table across multiple competitive columns', icon: 'Grid' },
  { type: 'tech-stack-grid', label: 'Enterprise Tech Stack Grid', category: 'Product & Architecture', desc: 'Categorized technology pillars with verified status badges', icon: 'Cpu' },
  { type: 'team-hierarchy-org', label: 'Team Hierarchy & Org Chart', category: 'Team & Credibility', desc: 'Departmental leadership, headcount, and member rosters', icon: 'Users' },
  { type: 'security-compliance-matrix', label: 'Security & Compliance Matrix', category: 'Product & Architecture', desc: 'Industry certifications, coverage metrics, and audit controls', icon: 'ShieldAlert' },
  { type: 'product-roadmap-timeline', label: 'Product Roadmap Timeline', category: 'Product & Architecture', desc: 'Quarterly milestone progression and key deliverable cards', icon: 'Calendar' },
  { type: 'interactive-faq-flow', label: 'Interactive FAQ Flow', category: 'Story & Conversion', desc: 'Categorized accordion Q&A flow with code snippet support', icon: 'HelpCircle' },
  { type: 'key-metric-scorecard', label: 'Key Metric Scorecard', category: 'Strategy & Metrics', desc: 'Target vs actual variance scoring with overall letter grade', icon: 'Award' },
  { type: 'case-study-impact', label: 'Case Study & Impact Results', category: 'Team & Credibility', desc: 'Challenge, sovereign solution, and quantified client metrics', icon: 'Award' },
  { type: 'dual-column-pros-cons', label: 'Dual Column Pros & Cons', category: 'Story & Conversion', desc: 'Balanced architectural decision matrix with recommendation', icon: 'Scale' },
  { type: 'interactive-code-playground', label: 'Interactive Code Playground', category: 'Product & Architecture', desc: 'Live editable code console with simulated output execution', icon: 'Terminal' },
  { type: 'closing-cta-showcase', label: 'Closing CTA Showcase', category: 'Story & Conversion', desc: 'High-impact finale with primary and secondary contact portals', icon: 'CheckCircle2' },
];
