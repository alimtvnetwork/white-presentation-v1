import type { SlideData } from '../types/presentation';
import type {
  ExpandedSlideData, AuthenticityHookSlideData, AvoidCommoditySlideData,
  ChapterDividerSlideData, LoseVsInvestSlideData, NextStepsSprintSlideData,
  ExecutiveContactSlideData, UspStrikethroughSlideData, SaaSPricingTiersSlideData,
  FaqAccordionSlideData, ClientLogoWallSlideData, SwotAnalysisSlideData,
  InteractiveQuizSlideData, HardwareShowcaseSlideData, CompetitorMatrixSlideData,
  ValuePyramidSlideData,
} from '../types/expandedArchetypes';
import type { ArchetypeOption } from './extendedSlideFactories';

export const createAuthenticityHookSlide = (id = `slide-${Date.now()}`): AuthenticityHookSlideData => ({
  id, type: 'authenticity-hook', kicker: 'INDUSTRY REALITY GAP',
  title: 'The Velocity Illusion vs Sovereign Execution',
  hookHeadline: 'Why 84% of Modernization Initiatives Collapse Under Hidden Technical Debt',
  tensionNarrative: 'Engineering teams are promised speed by proprietary abstractions, only to face vendor lock-in and escalating maintenance taxes.',
  statFigure: '$4.2 Trillion', statLabel: 'Annual global enterprise expenditure lost to architectural rework and cloud lock-in friction',
  statSource: 'Global Enterprise Engineering Benchmark, 2026',
  realityPoints: [
    { id: 'rg-1', myth: 'Low-code tools accelerate delivery long-term.', truth: 'Brittle glue scripts multiply maintenance costs by 6.4x within 18 months.', impact: '6.4x Maintenance Multiplier', isHighlighted: true },
    { id: 'rg-2', myth: 'Proprietary cloud services guarantee compliance.', truth: 'Hidden cross-tenant telemetry triggers unannounced audit drift.', impact: '99.8% Zero-Drift Mandate', isHighlighted: false },
  ],
});

export const createAvoidCommoditySlide = (id = `slide-${Date.now()}`): AvoidCommoditySlideData => ({
  id, type: 'avoid-commodity', kicker: 'STRATEGIC DIFFERENTIATION',
  title: 'The Commodity Trap vs Sovereign Architecture',
  commodityTitle: 'The Commodity Trap', commoditySubtitle: 'Brittle third-party abstractions that decay over time',
  sovereignTitle: 'Sovereign Architecture', sovereignSubtitle: 'Deterministic engineering designed for perpetual autonomy',
  sovereignBadgeText: 'RECOMMENDED ENTERPRISE STANDARD',
  summaryNote: 'Sovereign infrastructure guarantees perpetual control with zero third-party licensing penalties.',
  comparisons: [
    { id: 'c-1', dimension: 'IP Ownership', commodityPitfall: 'Vendor-controlled proprietary formats and lock-in dependencies.', sovereignAdvantage: '100% clean-room source code ownership with zero external license claims.', isKeyDifferentiator: true },
    { id: 'c-2', dimension: 'Execution Speed', commodityPitfall: 'Opaque shared-cloud cold starts and unpredictable throttling.', sovereignAdvantage: 'Deterministic local execution with sub-10ms response loops.', isKeyDifferentiator: false },
    { id: 'c-3', dimension: 'Cost Escalation', commodityPitfall: 'Per-seat tax that penalizes headcount growth.', sovereignAdvantage: 'Flat architecture cost with zero marginal licensing fees at scale.', isKeyDifferentiator: true },
  ],
});

export const createChapterDividerSlide = (id = `slide-${Date.now()}`): ChapterDividerSlideData => ({
  id, type: 'chapter-divider', kicker: 'ACT 03 / SYSTEM ARCHITECTURE',
  title: 'The Sovereign Capability Engine', actNumber: '03', actLabel: 'ACT 03',
  topicKicker: 'TECHNICAL BREAKTHROUGHS',
  preamble: 'Moving beyond legacy monolithic frameworks: an exhaustive blueprint of deterministic runtime engines and live DOM rendering.',
  topics: [
    { id: 'ct-1', indexStr: '3.1', title: 'Decoupled Data Contracts', summary: 'Strict segregation of leaf types and bounded components.', isPrimaryFocus: true },
    { id: 'ct-2', indexStr: '3.2', title: '4-Plane Depth Hierarchy', summary: 'Multi-layer spatial depth balancing canvas ground, cards, and overlays.', isPrimaryFocus: false },
    { id: 'ct-3', indexStr: '3.3', title: 'Subagent Parallel Orchestration', summary: 'Micro-batched worker threads executing continuous refactoring cycles.', isPrimaryFocus: false },
  ],
});

export const createLoseVsInvestSlide = (id = `slide-${Date.now()}`): LoseVsInvestSlideData => ({
  id, type: 'lose-vs-invest', kicker: 'FINANCIAL DECISION MATRIX',
  title: 'The Cost of Inaction vs Investment ROI',
  inactionTitle: 'The Cost of Inaction (Compounded Losses)',
  investmentTitle: 'Sovereign Engineering Returns (Measurable ROI)',
  summaryPaybackPeriod: '47 Days to Full Capital Recovery', summaryIrr: '420% Projected 3-Year IRR',
  inactionConsequences: [
    { id: 'loss-1', metric: '-$240K / Qtr', title: 'Engineering Friction', description: 'Developer cycles wasted resolving brittle dependency clashes.', hasCriticalImpact: true },
    { id: 'loss-2', metric: '3.5 Months', title: 'Delivery Velocity Lag', description: 'Releases stall in slow manual QA queues.', hasCriticalImpact: false },
    { id: 'loss-3', metric: '42 CVEs', title: 'External Security Exposure', description: 'Uncontrolled upstream package vulnerabilities compromising security.', hasCriticalImpact: true },
  ],
  investmentReturns: [
    { id: 'gain-1', metric: '+3.8x Speed', title: 'Pipeline Acceleration', description: 'Continuous automated refactoring yielding rapid production-grade releases.', isFeaturedMetric: true },
    { id: 'gain-2', metric: '$920K Saved', title: 'License Elimination', description: 'Cancellation of proprietary middleware subscriptions across all teams.', isFeaturedMetric: true },
    { id: 'gain-3', metric: '0.0% Drift', title: 'Deterministic Reproducibility', description: 'Bit-identical outputs on every commit with zero production surprises.', isFeaturedMetric: false },
  ],
});

export const createNextStepsSprintSlide = (id = `slide-${Date.now()}`): NextStepsSprintSlideData => ({
  id, type: 'next-steps-sprint', kicker: 'ACTIONABLE ONBOARDING PLAN',
  title: '30-Day Sovereign Implementation Sprint', sprintTimelineTitle: 'Fast-Track Enterprise Production Roadmap', activeStep: 0,
  sprints: [
    { id: 'sp-1', phaseNumber: '01', timeframe: 'Days 1–7', title: 'Topology Discovery & Spec Ingestion', objective: 'Map legacy dependency trees and isolate technical debt.', leadOwner: 'Chief Software Engineer', deliverables: ['Topology and dependency graph', 'Technical debt matrix', 'Security baseline check'], exitCriteria: 'Audited specification signed off', isCurrentSprint: true },
    { id: 'sp-2', phaseNumber: '02', timeframe: 'Days 8–14', title: 'Modular Contracts & Leaf Types', objective: 'Scaffold decoupled leaf types and bounded component interfaces.', leadOwner: 'Systems Architect', deliverables: ['Leaf types declared in dedicated modules', 'BaseSlide union extension', 'Runtime CSS variable mappings'], exitCriteria: 'TypeScript compiler passes with zero errors', isCurrentSprint: false },
    { id: 'sp-3', phaseNumber: '03', timeframe: 'Days 15–24', title: 'Subagent Parallel Refactoring', objective: 'Execute micro-batched refactoring routines via concurrent worker pools.', leadOwner: 'Platform Engineer', deliverables: ['Micro-batched component decomposition', 'Atomic commits', 'Strict line limit enforcement'], exitCriteria: 'All 15 components implemented under 100 lines', isCurrentSprint: false },
    { id: 'sp-4', phaseNumber: '04', timeframe: 'Days 25–30', title: 'QA Verification & Release Ceremony', objective: 'Complete automated verification and tag production release.', leadOwner: 'Release Lead', deliverables: ['Headless visual regression proofs', 'Quality checks passing exit 0', 'Production SemVer tag'], exitCriteria: 'Production release v1.3.0 deployed', isCurrentSprint: false },
  ],
});

export const createExecutiveContactSlide = (id = `slide-${Date.now()}`): ExecutiveContactSlideData => ({
  id, type: 'executive-contact', kicker: 'EXECUTIVE ACCESS & CLOSE',
  title: 'Direct Executive Partnership & Next Steps',
  persona: {
    name: 'Alim Ul Karim', role: 'Chief Software Engineer',
    quote: 'Building sovereign, deterministic engineering systems through rigorous architecture and modular precision.',
    bioBullets: [
      'Chief Software Engineer architecting high-scale enterprise platforms and distributed systems',
      'Pioneer of declarative presentation engines and AI-orchestrated workflows',
      'Specialist in low-latency infrastructure and zero-defect delivery pipelines',
    ],
    avatarUrl: '/assets/alim-profile.png', isVerified: true, location: 'Singapore & Global Remote',
  },
  bookingUrl: 'https://cal.com/riseup-asia', email: 'alim@riseup.asia', phone: '+65 8000 1234',
  qrCodeValue: 'https://cal.com/riseup-asia', ctaButtonText: 'Schedule Architectural Briefing',
  guaranteeNote: 'Every enterprise deployment receives direct personal code review and architecture sign-off from Chief Software Engineer Alim Ul Karim.',
});

export const createUspStrikethroughSlide = (id = `slide-${Date.now()}`): UspStrikethroughSlideData => ({
  id, type: 'usp-strikethrough', kicker: 'THE SOVEREIGN ADVANTAGE',
  title: 'Autonomy Over Proprietary Lock-In',
  prefixText: 'Software engineered for ', affirmationText: 'perpetual autonomy',
  rejectionPrefixText: ', not ', strikethroughText: 'vendor lock-in', suffixText: '.',
  proofCards: [
    { id: 'pc-1', icon: 'ShieldCheck', badgeText: 'IP SOVEREIGNTY', headline: '100% Clean Source Ownership', description: 'Complete source ownership with clean-room audit trail.', hasVerificationBadge: true },
    { id: 'pc-2', icon: 'Cpu', badgeText: 'FLAT ECONOMICS', headline: 'Zero Per-Seat Runtime Penalties', description: 'Scale without paying marginal seat licenses.', hasVerificationBadge: true },
    { id: 'pc-3', icon: 'Zap', badgeText: 'DETERMINISM', headline: 'Sub-10ms Pipeline Loops', description: 'Deterministic local execution eliminating developer wait fatigue.', hasVerificationBadge: true },
  ],
});

export const createSaaSPricingTiersSlide = (id = `slide-${Date.now()}`): SaaSPricingTiersSlideData => ({
  id, type: 'saas-pricing-tiers', kicker: 'TRANSPARENT LICENSING',
  title: 'Predictable Enterprise Tiering', billingCadence: 'Annual Billing (20% Savings Applied)',
  disclaimerNote: 'All tiers include full code ownership rights and zero per-seat marginal fees.',
  tiers: [
    { id: 'pt-1', tierName: 'Starter Core', price: '$1,200', billingPeriod: '/month', description: 'For teams standardizing on declarative presentation architecture.', ctaText: 'Select Starter', isRecommended: false, features: [{ id: 'f1', featureName: 'Up to 10 Engineer Seats', isIncluded: true }, { id: 'f2', featureName: '15 Slide Archetypes', isIncluded: true }, { id: 'f3', featureName: 'Subagent Fleet', isIncluded: false }] },
    { id: 'pt-2', tierName: 'Professional Mesh', price: '$3,800', billingPeriod: '/month', badgeText: 'RECOMMENDED FOR ENTERPRISE', description: 'For engineering teams requiring continuous subagent orchestration.', ctaText: 'Deploy Professional', isRecommended: true, features: [{ id: 'f1', featureName: 'Up to 50 Engineer Seats', isIncluded: true }, { id: 'f2', featureName: 'All 30+ Archetypes', isIncluded: true }, { id: 'f3', featureName: 'Subagent Fleet (A=2)', isIncluded: true }] },
    { id: 'pt-3', tierName: 'Sovereign Enterprise', price: '$12,000', billingPeriod: '/month', description: 'Full custom runtime architecture for mission-critical infrastructures.', ctaText: 'Consult Lead Engineer', isRecommended: false, features: [{ id: 'f1', featureName: 'Unlimited Global Seats', isIncluded: true }, { id: 'f2', featureName: 'Custom Archetype Authoring', isIncluded: true }, { id: 'f3', featureName: 'Subagent Fleet (A=8)', isIncluded: true }] },
  ],
});

export const createFaqAccordionSlide = (id = `slide-${Date.now()}`): FaqAccordionSlideData => ({
  id, type: 'faq-accordion', kicker: 'EXECUTIVE FREQUENTLY ASKED QUESTIONS',
  title: 'De-risking Enterprise Deployment', introSummary: 'Clear, binding answers to the most common architectural and procurement questions.', activeStep: 0,
  faqs: [
    { id: 'faq-1', category: 'IP & Licensing', question: 'Does our enterprise retain complete ownership of all created decks?', answer: 'Yes. 100% of all authored data contracts and exported assets belong exclusively to your organization.', isHighlighted: true, isExpanded: true },
    { id: 'faq-2', category: 'Security & Air-Gap', question: 'Can this system operate in completely air-gapped environments?', answer: 'Yes. The presentation runtime is entirely self-contained with zero external cloud dependencies.', isHighlighted: false, isExpanded: false },
    { id: 'faq-3', category: 'Code Quality', question: 'How does the system guarantee zero regressions during automated refactoring?', answer: 'Every modification is bounded to 5–8 file micro-batches backed by automated AST linters and local CI gates.', isHighlighted: false, isExpanded: false },
    { id: 'faq-4', category: 'Migration Speed', question: 'What is the typical time required to migrate legacy decks?', answer: 'Automated schema ingesters convert standard decks into declarative JSON slides in hours.', isHighlighted: false, isExpanded: false },
  ],
});

export const createClientLogoWallSlide = (id = `slide-${Date.now()}`): ClientLogoWallSlideData => ({
  id, type: 'client-logo-wall', kicker: 'PROVEN ENTERPRISE TRUST',
  title: 'Trusted by Industry Leaders Worldwide', clientSubtitle: 'Over 45 enterprise engineering organizations depend on our sovereign engine.', activeCategory: 'All',
  logos: [
    { id: 'cl-1', clientName: 'Apex Global Bank', industry: 'Financial Services', proofMetric: '3.8x Speed', isKeyPartner: true },
    { id: 'cl-2', clientName: 'BioGen Tech', industry: 'Healthcare', proofMetric: 'Zero Defect', isKeyPartner: true },
    { id: 'cl-3', clientName: 'Aether Cloud', industry: 'Cloud Computing', proofMetric: '99.999% SLA', isKeyPartner: false },
    { id: 'cl-4', clientName: 'Strata Defense', industry: 'Aerospace & Defense', proofMetric: 'Air-Gapped', isKeyPartner: true },
    { id: 'cl-5', clientName: 'Pulse Health', industry: 'HealthTech', proofMetric: '24h SLA', isKeyPartner: false },
    { id: 'cl-6', clientName: 'Vortex AI', industry: 'Artificial Intelligence', proofMetric: 'Subagent Mesh', isKeyPartner: false },
    { id: 'cl-7', clientName: 'Omni Logistics', industry: 'Logistics', proofMetric: '100% Owned', isKeyPartner: false },
    { id: 'cl-8', clientName: 'Quantum Capital', industry: 'Venture Capital', proofMetric: '420% IRR', isKeyPartner: false },
  ],
  trustBadges: [
    { id: 'tb-1', label: 'Enterprise Deployments', value: '45+ Global Clients', isVerified: true },
    { id: 'tb-2', label: 'Production Uptime', value: '99.999% SLA', isVerified: true },
    { id: 'tb-3', label: 'Security Compliance', value: 'SOC 2 Type II', isVerified: true },
    { id: 'tb-4', label: 'Audit Gaps', value: '0 Open Deficiencies', isVerified: true },
  ],
});

export const createSwotAnalysisSlide = (id = `slide-${Date.now()}`): SwotAnalysisSlideData => ({
  id, type: 'swot-analysis', kicker: 'STRATEGIC SITUATIONAL ANALYSIS',
  title: 'Enterprise Architecture SWOT Matrix', strategicContext: 'Comprehensive assessment of internal technical strengths vs external market dynamics.',
  quadrants: [
    { id: 'sq-s', quadrantType: 'strengths', title: 'Strengths (Internal)', icon: 'ShieldCheck', isHighlighted: true, items: ['100% Pure live DOM typography', 'Deterministic sub-10ms pipeline loops', 'Zero third-party runtime licensing tax'] },
    { id: 'sq-w', quadrantType: 'weaknesses', title: 'Weaknesses (Internal)', icon: 'AlertTriangle', isHighlighted: false, items: ['Strict 100-line React component limit', 'Learning curve for subagent mechanics', 'Mandatory positive boolean discipline'] },
    { id: 'sq-o', quadrantType: 'opportunities', title: 'Opportunities (External)', icon: 'TrendingUp', isHighlighted: false, items: ['Global wave of enterprise cloud repatriation', 'Integration with autonomous AI agents', 'Air-gapped presentation runtimes'] },
    { id: 'sq-t', quadrantType: 'threats', title: 'Threats (External)', icon: 'ShieldAlert', isHighlighted: false, items: ['Bundling tactics by legacy presentation suites', 'Fragmented cross-browser CSS nuances', 'Evolving global data residency mandates'] },
  ],
});

export const createInteractiveQuizSlide = (id = `slide-${Date.now()}`): InteractiveQuizSlideData => ({
  id, type: 'interactive-quiz', kicker: 'DIAGNOSTIC WORKSHOP POLL',
  title: 'Identify Your Core Architectural Bottleneck', questionNumber: 2, totalQuestions: 5,
  questionText: 'Which factor is the primary root cause of intermittent failures in enterprise deployment pipelines?',
  isAnswerRevealed: true,
  revealExplanation: 'Non-deterministic environments account for 92% of transient failures. Sovereign architecture guarantees bit-identical execution.',
  options: [
    { id: 'qo-a', letter: 'A', text: 'Insufficient manual QA rounds before staging', isSelected: false, isCorrect: false, isRevealed: true },
    { id: 'qo-b', letter: 'B', text: 'Non-deterministic runtime environments and unpinned dependencies', isSelected: true, isCorrect: true, isRevealed: true },
    { id: 'qo-c', letter: 'C', text: 'Lack of high-memory cloud runner compute instances', isSelected: false, isCorrect: false, isRevealed: true },
    { id: 'qo-d', letter: 'D', text: 'Excessive branching strategies in source code management', isSelected: false, isCorrect: false, isRevealed: true },
  ],
});

export const createHardwareShowcaseSlide = (id = `slide-${Date.now()}`): HardwareShowcaseSlideData => ({
  id, type: 'hardware-showcase', kicker: 'PHYSICAL INFRASTRUCTURE ARCHITECTURE',
  title: 'Sovereign Edge Node V3 Appliance', deviceName: 'Sovereign Edge Node V3',
  deviceTagline: 'Air-gapped, tamper-resistant edge appliance for zero-trust environments', activePinIndex: 1,
  hotspots: [
    { id: 'hp-1', pinNumber: 1, xCoord: 220, yCoord: 180, label: 'Redundant Power Module', subsystemTitle: 'Dual Hot-Swappable 800W Titanium PSUs', specDetails: '96% efficiency with zero-downtime failover under 4ms.', isActive: false },
    { id: 'hp-2', pinNumber: 2, xCoord: 480, yCoord: 310, label: 'Cryo-Locked Cryptographic HSM', subsystemTitle: 'FIPS 140-3 Level 4 Cryptographic Co-Processor', specDetails: 'Hardware-enforced key encapsulation and physical tamper-wipe.', isActive: true },
    { id: 'hp-3', pinNumber: 3, xCoord: 690, yCoord: 420, label: 'Dual SFP28 Optical Uplinks', subsystemTitle: 'Dual 25Gbps Optical Network Interface', specDetails: 'Sub-microsecond line-rate packet ingestion with zero CPU offload.', isActive: false },
  ],
  specifications: [
    { id: 'hs-1', label: 'Processor Architecture', value: '64-Core Sovereign ARM64 v9.2', isHighlighted: true },
    { id: 'hs-2', label: 'Cryptographic Throughput', value: '100 Gbps Line-Rate AES-GCM', isHighlighted: true },
    { id: 'hs-3', label: 'Memory Capacity', value: '512 GB ECC DDR5 @ 5600 MT/s', isHighlighted: false },
    { id: 'hs-4', label: 'Storage Subsystem', value: '4x 8TB NVMe PCIe 5.0 (RAID 10)', isHighlighted: false },
  ],
});

export const createCompetitorMatrixSlide = (id = `slide-${Date.now()}`): CompetitorMatrixSlideData => ({
  id, type: 'competitor-matrix', kicker: 'COMPETITIVE BENCHMARK MATRIX',
  title: 'Platform Capability Comparison', matrixHeadline: 'Architectural Superiority Across Evaluation Criteria',
  ourPlatformName: 'White Presentation Engine', competitorNames: ['Legacy Office Suite', 'Commercial Cloud SaaS'],
  summaryNote: 'The White Presentation Engine satisfies 100% of architectural evaluation criteria compared to an industry average of 30%.',
  capabilities: [
    { id: 'cap-1', capabilityName: 'Pure Live DOM Typography', hasOurPlatformSupport: true, ourPlatformSupport: true, ourPlatformNote: '100% Live Editable', hasCompetitorASupport: false, competitorASupport: false, hasCompetitorBSupport: false, competitorBSupport: false, isKeyDifferentiator: true },
    { id: 'cap-2', capabilityName: 'Sub-10ms Pipeline Loops', hasOurPlatformSupport: true, ourPlatformSupport: true, ourPlatformNote: 'Sub-second verification', hasCompetitorASupport: false, competitorASupport: false, hasCompetitorBSupport: false, competitorBSupport: false, isKeyDifferentiator: true },
    { id: 'cap-3', capabilityName: 'Complete Source Ownership', hasOurPlatformSupport: true, ourPlatformSupport: true, ourPlatformNote: 'Zero runtime fees', hasCompetitorASupport: false, competitorASupport: false, hasCompetitorBSupport: false, competitorBSupport: false, isKeyDifferentiator: true },
    { id: 'cap-4', capabilityName: 'Autonomous Subagent Mesh', hasOurPlatformSupport: true, ourPlatformSupport: true, ourPlatformNote: 'Parallel refactoring', hasCompetitorASupport: false, competitorASupport: false, hasCompetitorBSupport: false, competitorBSupport: false, isKeyDifferentiator: true },
    { id: 'cap-5', capabilityName: 'Air-Gapped Deployment', hasOurPlatformSupport: true, ourPlatformSupport: true, ourPlatformNote: 'Zero cloud telemetry', hasCompetitorASupport: true, competitorASupport: true, hasCompetitorBSupport: false, competitorBSupport: false, isKeyDifferentiator: false },
  ],
});

export const createValuePyramidSlide = (id = `slide-${Date.now()}`): ValuePyramidSlideData => ({
  id, type: 'value-pyramid', kicker: 'CAPABILITY MATURITY MODEL',
  title: 'The Sovereign Value Architecture Pyramid', pyramidSubtitle: 'How foundational engineering rigor compounds into market dominance', activeTierLevel: 4,
  tiers: [
    { id: 't-4', tierLevel: 4, tierName: 'Autonomous Market Agility', tagline: 'Rapid strategic pivots with zero regression friction', capabilities: ['Continuous daily feature releases', 'Autonomous competitive adaptation'], businessImpactMetric: '4.2x Faster Time-to-Market', isHighlighted: true, isActive: true },
    { id: 't-3', tierLevel: 3, tierName: 'Self-Healing AI Mesh', tagline: 'Autonomous subagent fleets repairing code anomalies', capabilities: ['Automated 4-part RCA diagnosis', 'Zero-defect gate verification'], businessImpactMetric: '94% Reduction in Bug Triage', isHighlighted: false, isActive: false },
    { id: 't-2', tierLevel: 2, tierName: 'Pure Live DOM Geometry', tagline: '1920x1080 deterministic virtual canvas coordinates', capabilities: ['Zero rasterized text artifacts', 'Live inline text editing'], businessImpactMetric: '100% Accessible & Localizable', isHighlighted: false, isActive: false },
    { id: 't-1', tierLevel: 1, tierName: 'Sovereign Foundation Kernel', tagline: 'High-concurrency split SQLite databases', capabilities: ['ACID-compliant transactions', 'Sub-10ms response loops'], businessImpactMetric: '99.999% Reliability', isHighlighted: false, isActive: false },
  ],
});

export const EXPANDED_FACTORIES: Record<string, (id?: string) => SlideData> = {
  'authenticity-hook': createAuthenticityHookSlide,
  'avoid-commodity': createAvoidCommoditySlide,
  'chapter-divider': createChapterDividerSlide,
  'lose-vs-invest': createLoseVsInvestSlide,
  'next-steps-sprint': createNextStepsSprintSlide,
  'executive-contact': createExecutiveContactSlide,
  'usp-strikethrough': createUspStrikethroughSlide,
  'saas-pricing-tiers': createSaaSPricingTiersSlide,
  'faq-accordion': createFaqAccordionSlide,
  'client-logo-wall': createClientLogoWallSlide,
  'swot-analysis': createSwotAnalysisSlide,
  'interactive-quiz': createInteractiveQuizSlide,
  'hardware-showcase': createHardwareShowcaseSlide,
  'competitor-matrix': createCompetitorMatrixSlide,
  'value-pyramid': createValuePyramidSlide,
};

export const EXPANDED_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  { type: 'authenticity-hook', label: 'Authenticity & Reality Gap', category: 'Story & Conversion', desc: 'Expose industry hype vs sovereign ground truth', icon: 'ShieldAlert' },
  { type: 'avoid-commodity', label: 'The Commodity Trap vs Sovereign', category: 'Story & Conversion', desc: 'Strategic comparison between commodity and sovereign architecture', icon: 'Crosshair' },
  { type: 'chapter-divider', label: 'Chapter & Act Divider', category: 'Product & Architecture', desc: 'Monumental act divider with ambient watermark and preview cards', icon: 'Layers' },
  { type: 'lose-vs-invest', label: 'Cost of Inaction vs Investment ROI', category: 'Strategy & Metrics', desc: 'Juxtapose inaction loss vs sovereign ROI', icon: 'Scale' },
  { type: 'next-steps-sprint', label: '30-Day Implementation Sprint', category: 'Product & Architecture', desc: '4 sprint phases with deliverables and exit criteria', icon: 'Flag' },
  { type: 'executive-contact', label: 'Executive Contact & Partnership', category: 'Team & Credibility', desc: 'Chief Software Engineer Alim Ul Karim, cal.com and live QR code', icon: 'Users' },
  { type: 'usp-strikethrough', label: 'Typographical USP Hook', category: 'Story & Conversion', desc: 'Strikethrough editorial statement with 3 commitment cards', icon: 'Sparkles' },
  { type: 'saas-pricing-tiers', label: 'Enterprise SaaS Pricing Tiers', category: 'Strategy & Metrics', desc: '3 tiers with elevated professional tier and feature matrix', icon: 'Award' },
  { type: 'faq-accordion', label: 'Executive FAQ Accordion', category: 'Story & Conversion', desc: '2-column de-risking bento accordion matrix', icon: 'HelpCircle' },
  { type: 'client-logo-wall', label: 'Client & Partner Trust Wall', category: 'Team & Credibility', desc: 'Symmetrical logo grid with 4 enterprise proof metrics', icon: 'Building2' },
  { type: 'swot-analysis', label: 'Strategic SWOT Analysis Matrix', category: 'Strategy & Metrics', desc: '2x2 bento quadrant balancing S, W, O, T', icon: 'Grid' },
  { type: 'interactive-quiz', label: 'Interactive Diagnostic Quiz', category: 'Story & Conversion', desc: '4-option diagnostic poll with real-time answer reveal', icon: 'HelpCircle' },
  { type: 'hardware-showcase', label: 'Hardware & Appliance Showcase', category: 'Product & Architecture', desc: 'Isometric hardware view with interactive pulsing callout pins', icon: 'Cpu' },
  { type: 'competitor-matrix', label: 'Competitive Capability Matrix', category: 'Strategy & Metrics', desc: 'Side-by-side benchmark table highlighting sovereign platform', icon: 'Columns3' },
  { type: 'value-pyramid', label: 'Sovereign Value Pyramid', category: 'Strategy & Metrics', desc: '4-tier value architecture mapping tech depth to market agility', icon: 'Layers' },
];
