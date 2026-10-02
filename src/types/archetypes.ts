import type { BaseSlide } from './presentation';

// 1. Metric Grid (KPI Performance Matrix)
export interface MetricGridItem {
  id: string;
  value: string;
  label: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  timeframe?: string;
  icon?: string;
}

export interface MetricGridSlideData extends BaseSlide {
  type: 'metric-grid';
  columns?: 2 | 3 | 4;
  metrics: MetricGridItem[];
  footerNote?: string;
}

// 2. Problem / Solution Showcase
export interface ProblemSolutionSide {
  tag: string;
  headline: string;
  items: Array<{ title: string; description: string; icon?: string }>;
}

export interface ProblemSolutionSlideData extends BaseSlide {
  type: 'problem-solution';
  problem: ProblemSolutionSide;
  solution: ProblemSolutionSide;
  verdict?: string;
}

// 3. 2x2 Strategic Quadrant Matrix
export interface QuadrantItem {
  id: string;
  name: string;
  x: number; // 0-100%
  y: number; // 0-100%
  isHighlight?: boolean;
  tag?: string;
}

export interface QuadrantMatrixSlideData extends BaseSlide {
  type: 'quadrant-matrix';
  xAxis: { low: string; high: string };
  yAxis: { low: string; high: string };
  quadrants: {
    topRight: { label: string; description?: string };
    topLeft: { label: string; description?: string };
    bottomRight: { label: string; description?: string };
    bottomLeft: { label: string; description?: string };
  };
  items: QuadrantItem[];
}

// 4. Market Opportunity Sizing (TAM/SAM/SOM)
export interface MarketTier {
  tier: 'TAM' | 'SAM' | 'SOM';
  label: string;
  value: string;
  growthRate?: string;
  description: string;
  badge?: string;
}

export interface MarketOpportunitySlideData extends BaseSlide {
  type: 'market-opportunity';
  tiers: MarketTier[];
  methodology?: string;
}

// 5. Timeline Roadmap & Delivery Milestones
export interface TimelineMilestone {
  period: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  deliverables: string[];
  owner?: string;
}

export interface TimelineRoadmapSlideData extends BaseSlide {
  type: 'timeline-roadmap';
  milestones: TimelineMilestone[];
  footnote?: string;
}

// 6. 6-Card Bento Feature Grid
export interface FeatureGridCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  isHighlight?: boolean;
}

export interface FeatureGridSlideData extends BaseSlide {
  type: 'feature-grid';
  columns?: 2 | 3;
  features: FeatureGridCard[];
}

// 7. Multi-Tier Architecture Diagram
export interface ArchitectureLayer {
  layerNumber: number;
  name: string;
  badge: string;
  description: string;
  components: string[];
}

export interface ArchitectureDiagramSlideData extends BaseSlide {
  type: 'architecture-diagram';
  layers: ArchitectureLayer[];
  protocolFlow?: string;
}

// 8. Executive Pull Quote Callout
export interface QuoteCalloutSlideData extends BaseSlide {
  type: 'quote-callout';
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatarUrl?: string;
  };
  contextBadge?: string;
  footnote?: string;
}

// 9. Monumental Stats Callout
export interface StatsCalloutSlideData extends BaseSlide {
  type: 'stats-callout';
  statValue: string;
  statLabel: string;
  description: string;
  comparison?: {
    baselineLabel: string;
    baselineValue: string;
    deltaLabel: string;
  };
  highlightPills?: string[];
}

// 10. Team & Leadership Grid
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  pedigree?: string;
  specialty: string;
  tags: string[];
}

export interface TeamGridSlideData extends BaseSlide {
  type: 'team-grid';
  members: TeamMember[];
}

// 11. Enterprise Case Study & Transformation
export interface CaseStudyMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface CaseStudySlideData extends BaseSlide {
  type: 'case-study';
  clientName: string;
  clientIndustry: string;
  challenge: string;
  solution: string;
  metrics: CaseStudyMetric[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
}

// 12. 3-Column Comparative Matrix
export interface ComparisonColumn {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  isFeatured?: boolean;
  attributes: Array<{ label: string; value: string; isPositive?: boolean }>;
  summary: string;
}

export interface ComparisonColumnsSlideData extends BaseSlide {
  type: 'comparison-columns';
  columns: ComparisonColumn[];
}

// 13. 4-Stage Continuous Flywheel Process Cycle
export interface ProcessCycleStage {
  step: number;
  label: string;
  title: string;
  description: string;
  metricBadge?: string;
}

export interface ProcessCycleSlideData extends BaseSlide {
  type: 'process-cycle';
  centerHubTitle: string;
  centerHubSubtitle?: string;
  stages: ProcessCycleStage[];
  flywheelOutcome?: string;
}

// 14. Developer Experience Code Terminal
export interface TerminalLine {
  lineNumber?: number;
  type: 'command' | 'output' | 'success' | 'warning' | 'error' | 'comment';
  text: string;
}

export interface CodeTerminalSlideData extends BaseSlide {
  type: 'code-terminal';
  terminalTitle?: string;
  activeTab?: string;
  tabs?: string[];
  lines: TerminalLine[];
  footnoteNote?: string;
}

// 15. Executive Closing Call to Action Frame
export interface CallToActionSlideData extends BaseSlide {
  type: 'call-to-action';
  headline: string;
  body: string;
  primaryAction: { label: string; href?: string };
  secondaryAction?: { label: string; href?: string };
  contactInfo: { email: string; website: string; location?: string; handle?: string };
  qrCodeUrl?: string;
  guaranteePill?: string;
}

export type NewSlideType =
  | 'metric-grid'
  | 'problem-solution'
  | 'quadrant-matrix'
  | 'market-opportunity'
  | 'timeline-roadmap'
  | 'feature-grid'
  | 'architecture-diagram'
  | 'quote-callout'
  | 'stats-callout'
  | 'team-grid'
  | 'case-study'
  | 'comparison-columns'
  | 'process-cycle'
  | 'code-terminal'
  | 'call-to-action';

export type NewSlideData =
  | MetricGridSlideData
  | ProblemSolutionSlideData
  | QuadrantMatrixSlideData
  | MarketOpportunitySlideData
  | TimelineRoadmapSlideData
  | FeatureGridSlideData
  | ArchitectureDiagramSlideData
  | QuoteCalloutSlideData
  | StatsCalloutSlideData
  | TeamGridSlideData
  | CaseStudySlideData
  | ComparisonColumnsSlideData
  | ProcessCycleSlideData
  | CodeTerminalSlideData
  | CallToActionSlideData;
