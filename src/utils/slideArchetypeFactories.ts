import {
  SlideType, SlideData, MetricGridSlideData, ProblemSolutionSlideData,
  QuadrantMatrixSlideData, MarketOpportunitySlideData, TimelineRoadmapSlideData,
  FeatureGridSlideData, ArchitectureDiagramSlideData, QuoteCalloutSlideData,
  StatsCalloutSlideData, TeamGridSlideData, CaseStudySlideData,
  ComparisonColumnsSlideData, ProcessCycleSlideData, CodeTerminalSlideData,
  CallToActionSlideData,
} from '../types/presentation';
import { EXTENDED_FACTORIES, EXTENDED_ARCHETYPE_OPTIONS, ArchetypeOption } from './extendedSlideFactories';
export * from './extendedSlideFactories';

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

export const ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  ...ORIGINAL_ARCHETYPE_OPTIONS,
  ...EXTENDED_ARCHETYPE_OPTIONS,
];

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

export const createArchetypeSlide = (type: SlideType, id = `slide-${Date.now()}`): SlideData => {
  const fns: Record<string, (sid: string) => SlideData> = {
    'metric-grid': createMetricGridSlide, 'stats-callout': createStatsCalloutSlide,
    'market-opportunity': createMarketOpportunitySlide, 'quadrant-matrix': createQuadrantMatrixSlide,
    'problem-solution': createProblemSolutionSlide, 'timeline-roadmap': createTimelineRoadmapSlide,
    'feature-grid': createFeatureGridSlide, 'architecture-diagram': createArchitectureDiagramSlide,
    'code-terminal': createCodeTerminalSlide, 'process-cycle': createProcessCycleSlide,
    'team-grid': createTeamGridSlide, 'case-study': createCaseStudySlide,
    'quote-callout': createQuoteCalloutSlide, 'comparison-columns': createComparisonColumnsSlide,
    'call-to-action': createCallToActionSlide,
    steps: (sid) => ({ id: sid, type: 'steps', title: 'Execution Roadmap', kicker: 'AUTONOMOUS WORKFLOW', heading: 'Three phases, one goal', steps: [{ label: 'Discover', title: 'Analyze', detail: 'Evaluate architecture.' }, { label: 'Prototype', title: 'Build', detail: 'Develop minimal slice.' }, { label: 'Ship', title: 'Verify', detail: 'Execute gates.' }] }),
    'steps-chain': (sid) => ({ id: sid, type: 'steps-chain', title: 'Implementation Architecture', subtitle: '4-phase deployment timeline', steps: [{ stepNumber: 1, title: 'Intake & Discovery' }, { stepNumber: 2, title: 'Engine Synthesis' }, { stepNumber: 3, title: 'Interactive Staging' }, { stepNumber: 4, title: 'Enterprise Release' }] }),
    'competitive-edge': (sid) => ({ id: sid, type: 'competitive-edge', title: 'Competitive Advantage', subtitle: 'Measurable enterprise superiority matrix', headers: ['Capability', 'Legacy Models', 'Riseup Standard'], rows: [{ feature: 'Autonomous Loop QA', competitor: 'Manual review', us: '100% Deterministic CI' }] }),
    'tech-stack': (sid) => ({ id: sid, type: 'tech-stack', title: 'Production Architecture', subtitle: 'Battle-tested engineering stack', categories: [{ name: 'Core Engine', icon: 'cpu', technologies: [{ name: 'React 19', level: 'Core' }] }] }),
    pricing: (sid) => ({ id: sid, type: 'pricing', title: 'Sovereign Investment Tiers', subtitle: 'Transparent pricing', tiers: [{ name: 'Enterprise', price: '$4,900', cadence: 'Annual License', isFeatured: true, features: ['15 Archetypes'], ctaLabel: 'Deploy Sovereign' }] }),
    'before-after': (sid) => ({ id: sid, type: 'before-after', title: 'Operational Transformation', kicker: 'STRATEGIC SHIFT', before: { title: 'Legacy Workflow', points: ['Manual formatting'] }, after: { title: 'Sovereign Workflow', points: ['Deterministic DOM'] } }),
    persona: (sid) => ({ id: sid, type: 'persona', title: 'Technical Leadership', name: 'Alim Ul Karim', role: 'Chief Software Engineer', avatarUrl: '/assets/screenshots/hero-speaker-clean.png', metrics: [{ value: '15+ Yrs', label: 'Systems' }], bioBullets: ['Lead architect of sovereign runtimes.'] }),
  };
  if (type in EXTENDED_FACTORIES) {
    return EXTENDED_FACTORIES[type as keyof typeof EXTENDED_FACTORIES](id);
  }
  return fns[type] ? fns[type](id) : {
    id, type: 'title', title: 'New Strategic Keynote', subtitle: 'High-leverage enterprise presentation',
    presenter: { name: 'Alim Ul Karim', role: 'Chief Software Engineer', company: 'Riseup Asia LLC' },
  };
};
