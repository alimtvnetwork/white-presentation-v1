import type { SlideType } from '../types/presentation';
import type {
  ExtendedSlideData, ExtendedSlideType, GrowthEngineSlideData, TalentPyramidSlideData,
  CostComparisonSlideData, DailyWorkCultureSlideData, OurWorkShowcaseSlideData,
  ExecutiveDuoSlideData, AfterSalesSupportSlideData, SearchSerpProofSlideData,
  ContentCalendarSlideData, MindsetShiftSlideData, SessionOutlineSlideData,
  RevealGridSlideData, CounterStatSlideData, PollSurveySlideData,
  TypewriterPromptSlideData, DepthStackSlideData, BeforeAfterShowcaseSlideData,
} from '../types/extendedArchetypes';

export const createGrowthEngineSlide = (id = `slide-${Date.now()}`): GrowthEngineSlideData => ({
  id, type: 'growth-engine', kicker: 'DISTRIBUTION ENGINE',
  title: 'Multi-Channel Autonomous Growth Engine',
  subtitle: 'Four synchronized vectors compounding platform scale and organic market authority',
  summaryNote: 'Aggregated 10.4x top-of-funnel expansion with 42% lower customer acquisition cost.',
  channels: [
    { id: 'ch1', name: 'SEO Authority', headlineMetric: '1.4M+', metricLabel: 'Search Visits', growthDelta: '+380% YoY', isPositiveGrowth: true, tag: 'Organic', icon: 'Search', tactics: ['Topic cluster domination', 'Sub-100ms Core Web Vitals', 'High-intent capture'] },
    { id: 'ch2', name: 'Paid Precision', headlineMetric: '4.2x', metricLabel: 'Blended ROAS', growthDelta: '-38% CAC', isPositiveGrowth: true, tag: 'Paid Scale', icon: 'TrendingUp', tactics: ['Programmatic bids', 'Creative sprint tests', 'Audience retargeting'] },
    { id: 'ch3', name: 'Content Engine', headlineMetric: '8.6M', metricLabel: 'Impressions', growthDelta: '+240% QoQ', isPositiveGrowth: true, tag: 'Authority', icon: 'Share2', tactics: ['Technical breakdowns', 'Video syndication', 'Executive ghostwriting'] },
    { id: 'ch4', name: 'AI Video Ops', headlineMetric: '180+', metricLabel: 'Assets / Mo', growthDelta: '+650% Scale', isPositiveGrowth: true, tag: 'Synthetic', icon: 'Video', tactics: ['Script-to-render pipelines', 'Multilingual dubbing', 'Dynamic personalization'] },
  ],
});

export const createTalentPyramidSlide = (id = `slide-${Date.now()}`): TalentPyramidSlideData => ({
  id, type: 'talent-pyramid', kicker: 'ENGINEERING TALENT',
  title: 'Sovereign Talent Vetting Architecture',
  subtitle: 'Multi-tier screening funnel admitting only the top 1% of elite global engineers',
  attritionRate: '99.2% Candidate Attrition Guarantee',
  tiers: [
    { id: 't5', tierNumber: 5, label: 'Live Proctored Evaluation', filterRatio: 'Top 1%', subtitle: '1-Hour Live Code', description: 'Real-time proctored coding and systems design under strict scrutiny.', color: '#EF4444', icon: 'ShieldAlert', isApex: true },
    { id: 't4', tierNumber: 4, label: 'Production Simulation', filterRatio: 'Top 3%', subtitle: 'Enterprise PR Review', description: 'Tasks modeled directly on distributed multi-tier codebases.', color: '#F59E0B', icon: 'Target' },
    { id: 't3', tierNumber: 3, label: '25-Hour System Build', filterRatio: 'Top 8%', subtitle: 'Complex Deliverable', description: 'Compressed architectural challenge requiring deep systems mastery.', color: '#10B981', icon: 'Cpu' },
    { id: 't2', tierNumber: 2, label: 'Graded Assessments', filterRatio: 'Top 25%', subtitle: 'Core Competency', description: 'Casbin RBAC schemas, positive booleans, and 100-line modular design.', color: '#3B82F6', icon: 'BookOpen' },
    { id: 't1', tierNumber: 1, label: 'Initial Intake', filterRatio: '20 / 1,000', subtitle: 'Aptitude Screen', description: 'Strict alertness, reasoning, and algorithmic intake filtering.', color: '#6366F1', icon: 'Users' },
  ],
});

export const createCostComparisonSlide = (id = `slide-${Date.now()}`): CostComparisonSlideData => ({
  id, type: 'cost-comparison', kicker: 'CAPITAL EFFICIENCY',
  title: 'Engineering Investment vs Opportunity Loss',
  headlineInvert: 'How much will you lose if you do not modernize?',
  annualSavingsSummary: '$612,000 Net Annual Savings with 10x Velocity Multiplier',
  columns: [
    { id: 'c1', name: 'In-House Team', annualCost: '$780,000', billingCadence: 'per year (4 Seniors)', isFeatured: false, bulletPoints: ['4-6 month hiring lag', '35% benefits and payroll overhead', 'Severe key-person risk'], attributes: [{ label: 'Time to Start', value: '120 Days', isAdvantage: false }, { label: 'Code Guarantee', value: 'None', isAdvantage: false }], verdict: 'Slow and capital intensive' },
    { id: 'c2', name: 'Legacy Agency', annualCost: '$450,000', billingCadence: 'per year (Hourly T&M)', isFeatured: false, bulletPoints: ['Junior bait-and-switch developers', 'Opaque overages with zero accountability', 'Drift and architectural rot'], attributes: [{ label: 'Time to Start', value: '30 Days', isAdvantage: false }, { label: 'Code Guarantee', value: 'Limited SLA', isAdvantage: false }], verdict: 'Unpredictable costs with drift' },
    { id: 'c3', name: 'Sovereign Engine', annualCost: '$168,000', billingCadence: 'per year (Flat Retainer)', badge: 'RECOMMENDED', isFeatured: true, bulletPoints: ['Immediate day-one execution', 'Top 1% elite proctored talent', 'Zero-defect guarantee with 4-part RCA'], attributes: [{ label: 'Time to Start', value: '24 Hours', isAdvantage: true }, { label: 'Code Guarantee', value: '100% Zero-Defect', isAdvantage: true }], verdict: 'Sovereign precision: $612k saved' },
  ],
});

export const createDailyWorkCultureSlide = (id = `slide-${Date.now()}`): DailyWorkCultureSlideData => ({
  id, type: 'daily-work-culture', kicker: 'OPERATIONAL CADENCE',
  title: 'High-Discipline Daily Engineering Culture',
  subtitle: 'Structured rituals ensuring relentless focus, rapid iteration, and zero ambiguity',
  cultureMotto: 'Autonomy through discipline, velocity through deterministic standards.',
  rituals: [
    { time: '09:00 - 09:30', title: 'Async Standup & RFC Triage', description: 'Brief blocker resolution and atomic subtask assignment via SQLite task manager.', tag: 'Alignment', icon: 'Clock', isCore: true },
    { time: '09:30 - 13:00', title: 'Deep Work & Subagent Loops', description: 'Uninterrupted flow state with parallel AI worker orchestration and local verification.', tag: 'Execution', icon: 'Zap', isCore: true },
    { time: '14:00 - 16:30', title: 'Architecture Reviews & Pairing', description: 'Strict 100-line component reviews, leaf type isolation, and positive boolean audits.', tag: 'Quality', icon: 'Users', isCore: true },
    { time: '16:30 - 17:30', title: 'Continuous RCA & Zero-Storage Purge', description: 'Root cause analysis, test duration profiling, and zero-storage GitHub Actions sweeps.', tag: 'Hygiene', icon: 'Shield', isCore: false },
  ],
});

export const createOurWorkShowcaseSlide = (id = `slide-${Date.now()}`): OurWorkShowcaseSlideData => ({
  id, type: 'our-work-showcase', kicker: 'PROVEN PORTFOLIO',
  title: 'Mission-Critical Engineering Showcase',
  subtitle: 'Production systems delivered with zero defects, sub-12ms latencies, and high reliability',
  summaryTag: '14 Production Systems Delivered on Time with 100% Client Retention',
  projects: [
    { title: 'Sovereign Slide Runtime', client: 'Enterprise Core', category: 'Canvas Engine', description: '1080p Pure Live DOM viewport with 10 calibrated color ramps and spring physics.', metrics: '60fps GPU • 0ms Drift', isFeatured: true },
    { title: 'Subagent Swarm Coordinator', client: 'Fintech Corp', category: 'AI Orchestration', description: 'Deterministic 300-step execution loops with SQLite task state locking.', metrics: '12x Speed • 0 Regressions' },
    { title: 'Zero-Storage CI/CD Pipeline', client: 'Cloud Fleet', category: 'Infrastructure', description: 'Automated artifact purging, dynamic pipeline timeouts, and SemVer release ceremony.', metrics: '0.0 GB • $0 Actions Cost' },
    { title: 'Casbin RBAC Persistence Hub', client: 'Healthcare Global', category: 'Split-DB Engine', description: 'Split SQLite three-tier database with PascalCase schemas and positive booleans.', metrics: '99.999% SLA • Air-Gapped' },
  ],
});

export const createExecutiveDuoSlide = (id = `slide-${Date.now()}`): ExecutiveDuoSlideData => ({
  id, type: 'executive-duo', kicker: 'LEADERSHIP EXCELLENCE',
  title: 'Executive Architecture & Systems Leadership',
  subtitle: 'Complementary leadership combining low-level systems engineering with strategic delivery',
  partnershipContext: 'Over 25 combined years of building distributed platforms and deterministic engines.',
  leaders: [
    {
      name: 'Alim Ul Karim', role: 'Chief Software Engineer', bio: 'Pioneered deterministic agentic presentation architectures, split-DB database engines, and 100-line modular design.',
      avatarUrl: '/assets/screenshots/hero-speaker-clean.png', highlightPills: ['Chief Software Engineer', 'Distributed Runtimes', 'Formal Verification'],
      quote: 'Eliminate runtime indeterminism at the core; every slide becomes undeniable proof.', isPrimary: true,
    },
    {
      name: 'Elena Rostova', role: 'Principal Systems Architect', bio: 'Specialist in 60fps GPU-accelerated canvas mathematics, typography rendering, and precision color systems.',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300', highlightPills: ['Systems Architecture', 'WebGL & Canvas', 'Design Systems'],
      quote: 'Mathematical elegance in code translates directly into visceral visual authority.', isPrimary: false,
    },
  ],
});

export const createAfterSalesSupportSlide = (id = `slide-${Date.now()}`): AfterSalesSupportSlideData => ({
  id, type: 'after-sales-support', kicker: 'CONTINUOUS GUARANTEE',
  title: 'Comprehensive After-Sales Support & SLAs',
  subtitle: 'Long-term operational peace of mind backed by automated root cause analysis and zero defects',
  guaranteeBanner: '100% Bug Remediation Within 24 Hours or Full Month Service Credit',
  supportTiers: [
    { title: 'Standard Maintenance', slaResponse: '< 4 Hours', features: ['Dependency security patching', 'Weekly zero-storage cache purges', 'CI/CD pipeline health checks'], isIncluded: true },
    { title: 'Mission-Critical SLA', slaResponse: '< 15 Minutes', features: ['24/7 dedicated engineer paging', 'Automated 4-part RCA diagnosis', 'Sub-hour hotfix deployment'], isIncluded: true, isHighlight: true },
    { title: 'Architectural Evolution', slaResponse: 'Continuous', features: ['Monthly guideline audit runs', 'Framework version upgrades', 'Performance optimization sprints'], isIncluded: true },
  ],
});

export const createSearchSerpProofSlide = (id = `slide-${Date.now()}`): SearchSerpProofSlideData => ({
  id, type: 'search-serp-proof', kicker: 'VERIFIED SERP DOMINANCE',
  title: 'Uncontested Search Engine Authority',
  subtitle: 'Proof of first-page organic domination across high-intent enterprise search queries',
  aggregateGrowth: 'Top 3 positions secured across 85% of primary commercial keywords',
  searchQueries: [
    { query: 'sovereign presentation engine', rank: '#1 Google', searchVolume: '24.5k / mo', urlSnippet: 'https://white-pres.dev/sovereign-presentation-engine', isVerified: true },
    { query: 'pure live dom slide generator', rank: '#1 Google', searchVolume: '18.2k / mo', urlSnippet: 'https://white-pres.dev/live-dom-typography', isVerified: true },
    { query: 'deterministic multi-agent coding', rank: '#2 Google', searchVolume: '32.1k / mo', urlSnippet: 'https://white-pres.dev/deterministic-agent-loops', isVerified: true },
    { query: 'split sqlite architecture enterprise', rank: '#1 Google', searchVolume: '14.8k / mo', urlSnippet: 'https://white-pres.dev/split-sqlite-architecture', isVerified: true },
  ],
});

export const createContentCalendarSlide = (id = `slide-${Date.now()}`): ContentCalendarSlideData => ({
  id, type: 'content-calendar', kicker: 'EDITORIAL CADENCE',
  title: 'Weekly Multi-Channel Distribution Pipeline',
  subtitle: 'High-frequency editorial rhythm establishing thought leadership and developer adoption',
  monthlyCadence: '24 High-Impact Releases & Deep Technical Case Studies Every Month',
  scheduleDays: [
    { day: 'Monday', topic: 'Architecture Deep-Dive & Code Tour', channel: 'Engineering Blog', format: 'Long-Form Article', isLive: true },
    { day: 'Tuesday', topic: 'Live DOM Typography & Canvas Math', channel: 'YouTube & X Video', format: 'Technical Teardown', isLive: true },
    { day: 'Wednesday', topic: 'Subagent Self-Healing Loop Benchmark', channel: 'GitHub & Discord', format: 'Benchmark Report', isLive: true },
    { day: 'Thursday', topic: 'Split SQLite Schema & Casbin RBAC', channel: 'Podcast & LinkedIn', format: 'Executive Briefing', isLive: true },
    { day: 'Friday', topic: 'Weekly Zero-Defect Release Ceremony', channel: 'Releases & Changelog', format: 'SemVer Tag', isLive: true },
  ],
});

export const createMindsetShiftSlide = (id = `slide-${Date.now()}`): MindsetShiftSlideData => ({
  id, type: 'mindset-shift', kicker: 'PARADIGM TRANSFORMATION',
  title: 'From Fragile Indeterminism to Sovereign Precision',
  subtitle: 'The fundamental mindset shifts separating legacy development from modern autonomous systems',
  principleTag: 'Core Invariant: Mathematical determinism always supersedes probabilistic hope.',
  shifts: [
    { from: 'Monolithic 1,000-line god files', to: 'Strict 100-line modular components', benefit: 'Zero cognitive debt and effortless human verification.', category: 'Code Hygiene', isTransformed: true },
    { from: 'Probabilistic AI guessing and drift', to: 'Grounded 4-part RCA diagnosis', benefit: '100% reproducible root cause remediation.', category: 'Architecture', isTransformed: true },
    { from: 'Opaque cloud SaaS lock-in', to: 'Air-gapped Split SQLite persistence', benefit: 'Complete data ownership and zero recurring egress fees.', category: 'Sovereignty', isTransformed: true },
    { from: 'Rasterized graphic text and artifacts', to: 'Pure Live DOM typography', benefit: 'Crisp 4K rendering and instant inline canvas edits.', category: 'User Experience', isTransformed: true },
  ],
});

export const createSessionOutlineSlide = (id = `slide-${Date.now()}`): SessionOutlineSlideData => ({
  id, type: 'session-outline', kicker: 'WORKSHOP ROADMAP',
  title: 'Keynote & Executive Briefing Agenda',
  subtitle: 'A structured roadmap covering architectural fundamentals to production deployment',
  targetAudience: 'Designed for CTOs, Principal Architects, and Engineering Leaders',
  modules: [
    { moduleNumber: 1, title: 'Architectural Sovereignty & Foundations', duration: '20 Mins', topics: ['Pure DOM rendering', '10 precision color ramps', '1080p canvas math'], isKeyFocus: false },
    { moduleNumber: 2, title: 'Subagent Orchestration & 300-Step Loops', duration: '35 Mins', topics: ['Worker isolation', 'SQLite task leasing', 'Strict 100-line bounds'], isKeyFocus: true },
    { moduleNumber: 3, title: 'Data Persistence & Security Governance', duration: '25 Mins', topics: ['Split SQLite WAL', 'Casbin RBAC schemas', 'Positive booleans'], isKeyFocus: false },
    { moduleNumber: 4, title: 'Live Compilation & Q&A Ceremony', duration: '25 Mins', topics: ['Sub-12ms builds', 'Zero-storage CI/CD', 'Open discussion'], isKeyFocus: true },
  ],
});

export const createRevealGridSlide = (id = `slide-${Date.now()}`): RevealGridSlideData => ({
  id, type: 'reveal-grid', kicker: 'SYSTEM CAPABILITIES',
  title: 'Six Pillars of Sovereign Slide Architecture',
  columns: 3, activeStep: 5,
  items: [
    { id: 'rg1', icon: 'Database', title: 'Split SQLite DB', description: 'Deterministic three-tier persistence separating metadata and logs.', tag: 'Persistence' },
    { id: 'rg2', icon: 'Type', title: 'Live DOM Typography', description: '100% accessible live HTML text rendering with zero raster graphics.', tag: 'Typography', isHighlighted: true },
    { id: 'rg3', icon: 'Zap', title: 'Spring Motion Physics', description: 'Snappy spring transitions [420, 17, 0.8] calibrated for clarity.', tag: 'Motion' },
    { id: 'rg4', icon: 'Code2', title: '100-Line Component Cap', description: 'Every UI slide component is strictly constrained to 100 lines.', tag: 'Modularity' },
    { id: 'rg5', icon: 'Palette', title: '10 Theme Palettes', description: 'Calibrated 10-step gradient ramps delivering WCAG AAA contrast.', tag: 'Design Tokens' },
    { id: 'rg6', icon: 'Shield', title: 'Zero-Storage Governance', description: 'Continuous automated purging maintaining 0.0 GB action storage.', tag: 'Infrastructure' },
  ],
});

export const createCounterStatSlide = (id = `slide-${Date.now()}`): CounterStatSlideData => ({
  id, type: 'counter-stat', kicker: 'QUANTITATIVE PROOF',
  title: 'Monumental Performance Benchmarks',
  subtitle: 'Empirically audited metrics across high-throughput enterprise deployments',
  benchmarkSource: 'Verified by cryptographically signed benchmark logs across 500,000 iterations.',
  stats: [
    { value: '12x', label: 'Velocity Multiplier', suffix: '', detail: 'Faster slide generation vs standard cloud tools', isPositive: true },
    { value: '99.999%', label: 'Deterministic SLA', suffix: '', detail: 'Zero layout shift across all viewport dimensions', isPositive: true },
    { value: '0.0', label: 'GB Storage Overhead', suffix: 'GB', detail: 'Automated cleanup maintaining zero disk bloat', isPositive: true },
    { value: '< 12', label: 'P99 Render Latency', suffix: 'ms', detail: 'Instantaneous GPU CSS transform compilation', isPositive: true },
  ],
});

export const createPollSurveySlide = (id = `slide-${Date.now()}`): PollSurveySlideData => ({
  id, type: 'poll-survey', kicker: 'AUDIENCE PULSE',
  title: 'Real-Time Enterprise Architecture Survey',
  subtitle: 'Live audience sentiment on presentation systems and engineering bottlenecks',
  question: 'What is your primary bottleneck with existing corporate presentation tools?',
  totalVotes: '1,420 Enterprise Leaders Polled',
  options: [
    { label: 'Brittle layout shifts & font corruptions', percentage: 48, votesCount: '682 votes', isWinner: true },
    { label: 'Manual formatting overhead & wasted hours', percentage: 28, votesCount: '398 votes' },
    { label: 'Lack of automated data connectors & CLI tools', percentage: 16, votesCount: '227 votes' },
    { label: 'Recurring cloud SaaS costs & vendor lock-in', percentage: 8, votesCount: '113 votes' },
  ],
});

export const createTypewriterPromptSlide = (id = `slide-${Date.now()}`): TypewriterPromptSlideData => ({
  id, type: 'typewriter-prompt', kicker: 'INTERACTIVE AGENT CLI',
  title: 'Natural Language Slide Synthesis Console',
  subtitle: 'Translating high-level architectural briefs into verified declarative slide payloads',
  promptQuery: 'Generate a high-authority 4-tier talent pyramid slide emphasizing proctored evaluation and 99% attrition rate.',
  systemPersona: 'Riseup Sovereign Agent v2.4 • Strict 100-line mode active',
  outputBlocks: [
    { title: 'Parsed Archetype Schema', codeOrText: 'type: "talent-pyramid", tiers: 5, isApex: true', isHighlighted: true },
    { title: 'Quality Verification Checks', codeOrText: 'Line limit <= 100 PASS • Positive booleans PASS • Persona: Chief Software Engineer PASS' },
    { title: 'Compiled Virtual Canvas Status', codeOrText: '1920x1080 Viewport Locked @ 60fps GPU acceleration' },
  ],
});

export const createDepthStackSlide = (id = `slide-${Date.now()}`): DepthStackSlideData => ({
  id, type: 'depth-stack', kicker: 'CORE INVARIANTS',
  title: 'Three Sovereign Architectural Tenets',
  perspective: 1200, activeStep: 0,
  cards: [
    { id: 'c1', order: 1, pill: 'Tenet 01', headline: 'Deterministic Architecture Trumps Heuristic Hope', body: 'Every state transition, type transformation, and database write must be strictly typed, deterministic, and verifiable through linters.', accentTag: 'Strict Determinism', isRevealed: true },
    { id: 'c2', order: 2, pill: 'Tenet 02', headline: 'Zero-Storage Pipeline Sanitization', body: 'Persistent CI/CD clutter and artifact accumulation represent technical debt. All pipelines must maintain 0.0 GB storage via automated purge triggers.', accentTag: 'Storage Hygiene', isRevealed: false },
    { id: 'c3', order: 3, pill: 'Tenet 03', headline: 'Leaf-Type Isolation & 100-Line Component Boundaries', body: 'Monolithic files breed fragility. By enforcing 100-line component caps and leaf-type separation, systems remain modular and maintainable.', accentTag: 'Modular Precision', isRevealed: false },
  ],
});

export const createBeforeAfterShowcaseSlide = (id = `slide-${Date.now()}`): BeforeAfterShowcaseSlideData => ({
  id, type: 'before-after-showcase', kicker: 'TRANSFORMATION PARADIGM',
  title: 'Engineering Transformation: Status Quo vs Sovereign Standard',
  beforeHeader: 'LEGACY AGENCY / FRAGMENTED',
  afterHeader: 'THE RISEUP SOVEREIGN STANDARD',
  multiplierBadge: '10x Acceleration Multiplier',
  features: [
    { aspect: 'Typography Fidelity', beforeState: 'Rasterized text baked in images', afterState: '100% Vector Live DOM Sharpness' },
    { aspect: 'Component Governance', beforeState: 'Bloated 800+ line spaghetti', afterState: 'Strict <= 100-line Component Boundaries' },
    { aspect: 'Quality Assurance', beforeState: 'Subjective manual review tickets', afterState: 'Deterministic Automated Verification Gates' },
    { aspect: 'Theming Contrast', beforeState: 'Ad-hoc random hex values', afterState: '10-Step Mathematical Gradient Precision' },
  ],
});

export const EXTENDED_FACTORIES: Record<ExtendedSlideType, (id: string) => ExtendedSlideData> = {
  'growth-engine': createGrowthEngineSlide,
  'talent-pyramid': createTalentPyramidSlide,
  'cost-comparison': createCostComparisonSlide,
  'daily-work-culture': createDailyWorkCultureSlide,
  'our-work-showcase': createOurWorkShowcaseSlide,
  'executive-duo': createExecutiveDuoSlide,
  'after-sales-support': createAfterSalesSupportSlide,
  'search-serp-proof': createSearchSerpProofSlide,
  'content-calendar': createContentCalendarSlide,
  'mindset-shift': createMindsetShiftSlide,
  'session-outline': createSessionOutlineSlide,
  'reveal-grid': createRevealGridSlide,
  'counter-stat': createCounterStatSlide,
  'poll-survey': createPollSurveySlide,
  'typewriter-prompt': createTypewriterPromptSlide,
  'depth-stack': createDepthStackSlide,
  'before-after-showcase': createBeforeAfterShowcaseSlide,
};

export const createExtendedSlide = (type: ExtendedSlideType, id = `slide-${Date.now()}`): ExtendedSlideData => {
  const factory = EXTENDED_FACTORIES[type];
  return factory ? factory(id) : createGrowthEngineSlide(id);
};

export interface ArchetypeOption {
  type: SlideType;
  label: string;
  category: 'Strategy & Metrics' | 'Product & Architecture' | 'Team & Credibility' | 'Story & Conversion';
  desc: string;
  icon: string;
}

export const EXTENDED_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  { type: 'growth-engine', label: 'Autonomous Growth Engine', category: 'Strategy & Metrics', desc: '4-vector compounding distribution flywheel', icon: 'TrendingUp' },
  { type: 'talent-pyramid', label: 'Talent Vetting Pyramid', category: 'Team & Credibility', desc: '5-tier screening funnel admitting top 1% talent', icon: 'Shield' },
  { type: 'cost-comparison', label: 'Cost vs Opportunity Loss', category: 'Strategy & Metrics', desc: 'Sovereign pricing vs in-house & agency overhead', icon: 'BarChart3' },
  { type: 'daily-work-culture', label: 'Daily Engineering Cadence', category: 'Team & Credibility', desc: '4 structured rituals ensuring relentless focus', icon: 'Zap' },
  { type: 'our-work-showcase', label: 'Mission-Critical Showcase', category: 'Team & Credibility', desc: '4 production systems delivered with zero defects', icon: 'Award' },
  { type: 'executive-duo', label: 'Executive Architecture Duo', category: 'Team & Credibility', desc: 'Technical leadership pairing systems & strategy', icon: 'Users' },
  { type: 'after-sales-support', label: 'After-Sales Support & SLAs', category: 'Story & Conversion', desc: '3-tier continuous warranty with RCA guarantees', icon: 'CheckCircle2' },
  { type: 'search-serp-proof', label: 'Search SERP Domination', category: 'Strategy & Metrics', desc: 'First-page organic ranking proof & keyword share', icon: 'Search' },
  { type: 'content-calendar', label: 'Weekly Content Calendar', category: 'Product & Architecture', desc: '5-day multi-channel editorial and release schedule', icon: 'Calendar' },
  { type: 'mindset-shift', label: 'Paradigm Mindset Shift', category: 'Story & Conversion', desc: '4 fundamental transformation cards (From -> To)', icon: 'Sparkles' },
  { type: 'session-outline', label: 'Session Agenda & Outline', category: 'Product & Architecture', desc: '4-module workshop and keynote roadmap', icon: 'ListChecks' },
  { type: 'reveal-grid', label: 'Bento Progressive Reveal', category: 'Product & Architecture', desc: '6-card bento grid with step-by-step reveal', icon: 'Grid' },
  { type: 'counter-stat', label: 'Monumental Counter Stats', category: 'Strategy & Metrics', desc: '4 performance benchmark metrics with trends', icon: 'Flame' },
  { type: 'poll-survey', label: 'Audience Poll & Survey', category: 'Story & Conversion', desc: 'Real-time voting results with percentage bars', icon: 'HelpCircle' },
  { type: 'typewriter-prompt', label: 'AI Prompt Synthesis CLI', category: 'Product & Architecture', desc: 'Natural language terminal query & output blocks', icon: 'Terminal' },
  { type: 'depth-stack', label: '3D Depth Perspective Stack', category: 'Product & Architecture', desc: 'Kinetic 3D card stack with peel-away reveal', icon: 'Layers' },
];
