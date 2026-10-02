import type { BaseSlide } from './presentation';

// 1. Executive Summary
export interface ExecutiveHighlightItem {
  id: string; label: string; value: string; detail: string; isPositiveTrend?: boolean;
}
export interface ExecutivePillarItem {
  title: string; description: string; icon?: string; hasAccent?: boolean;
}
export interface ExecutiveSummarySlideData extends BaseSlide {
  type: 'executive-summary';
  overview: string;
  highlights: ExecutiveHighlightItem[];
  strategicPillars: ExecutivePillarItem[];
  takeawayQuote?: string;
}

// 2. System Architecture Flow
export interface ArchitectureNode {
  id: string; name: string; type: string; icon?: string; isCluster?: boolean;
}
export interface SystemArchitectureFlowLayer {
  id: string; layerName: string; description?: string; isHighlighted?: boolean; nodes: ArchitectureNode[];
}
export interface ArchitectureConnection {
  fromId: string; toId: string; label?: string; hasBiDirectional?: boolean;
}
export interface SystemArchitectureSlideData extends BaseSlide {
  type: 'system-architecture-flow';
  flowDirection?: 'horizontal' | 'vertical';
  layers: SystemArchitectureFlowLayer[];
  connections?: ArchitectureConnection[];
}

// 3. ROI Metric Calculator
export interface RoiAssumptionItem {
  id: string; factor: string; impact: string; isEstimated?: boolean;
}
export interface RoiCalculatedMetric {
  label: string; value: string; subtext?: string; isPrimaryRoi?: boolean;
}
export interface RoiMetricCalculatorSlideData extends BaseSlide {
  type: 'roi-metric-calculator';
  investmentAmount: number;
  annualReturn: number;
  timeframeMonths: number;
  currencySymbol?: string;
  assumptions: RoiAssumptionItem[];
  calculatedMetrics: RoiCalculatedMetric[];
}

// 4. Customer Journey Map
export interface CustomerJourneyPhase {
  id: string; phaseTitle: string; touchpoint: string;
  emotion: 'delighted' | 'satisfied' | 'neutral' | 'frustrated';
  painPoint?: string; opportunity?: string; isActivePhase?: boolean;
}
export interface CustomerJourneySlideData extends BaseSlide {
  type: 'customer-journey-map';
  personaName?: string;
  phases: CustomerJourneyPhase[];
}

// 5. Matrix Comparison Grid
export interface MatrixComparisonColumn {
  id: string; title: string; isLeader?: boolean; badge?: string;
}
export interface MatrixComparisonFeature {
  id: string; category?: string; featureName: string;
  values: Record<string, string | boolean>; isKeyDifferentiator?: boolean;
}
export interface MatrixComparisonSlideData extends BaseSlide {
  type: 'matrix-comparison-grid';
  columns: MatrixComparisonColumn[];
  features: MatrixComparisonFeature[];
}

// 6. Tech Stack Grid
export interface TechStackPillarItem {
  name: string; version?: string; purpose: string; icon?: string; isVerified?: boolean;
}
export interface TechStackPillar {
  id: string; category: string; technologies: TechStackPillarItem[];
}
export interface TechStackGridSlideData extends BaseSlide {
  type: 'tech-stack-grid';
  stackPillars: TechStackPillar[];
}

// 7. Team Hierarchy Org
export interface OrgMemberItem {
  name: string; role: string; isLead?: boolean;
}
export interface OrgDepartment {
  id: string; departmentName: string; leadName: string; leadRole: string;
  headcount: number; members?: OrgMemberItem[]; isExpandedDefault?: boolean;
}
export interface TeamHierarchySlideData extends BaseSlide {
  type: 'team-hierarchy-org';
  rootRole: string; rootName: string; rootAvatarUrl?: string; departments: OrgDepartment[];
}

// 8. Security Compliance Matrix
export interface ComplianceCertification {
  id: string; name: string; issuingBody: string;
  status: 'certified' | 'in-review' | 'scheduled'; badgeIcon?: string; hasFullAuditPassed?: boolean;
}
export interface ComplianceControlItem {
  id: string; category: string; standard: string; coveragePercent: number; isAudited?: boolean;
}
export interface SecurityComplianceSlideData extends BaseSlide {
  type: 'security-compliance-matrix';
  complianceLevel?: string;
  certifications: ComplianceCertification[];
  controls: ComplianceControlItem[];
}

// 9. Product Roadmap Timeline
export interface RoadmapMilestone {
  id: string; quarter: string; headline: string; deliverables: string[];
  status: 'completed' | 'in-progress' | 'planned'; isMajorRelease?: boolean;
}
export interface ProductRoadmapTimelineSlideData extends BaseSlide {
  type: 'product-roadmap-timeline';
  milestones: RoadmapMilestone[];
  currentQuarter?: string;
}

// 10. Interactive FAQ Flow
export interface FaqFlowItem {
  id: string; question: string; answer: string; category?: string;
  isOpenDefault?: boolean; hasCodeSnippet?: boolean;
}
export interface InteractiveFaqSlideData extends BaseSlide {
  type: 'interactive-faq-flow';
  categories?: string[];
  faqItems: FaqFlowItem[];
}

// 11. Key Metric Scorecard
export interface MetricScorecardItem {
  id: string; metricTitle: string; currentValue: string; targetValue: string;
  varianceDelta: string; isTargetExceeded?: boolean; statusColor?: string;
}
export interface KeyMetricScorecardSlideData extends BaseSlide {
  type: 'key-metric-scorecard';
  overallGrade?: string;
  scorecards: MetricScorecardItem[];
}

// 12. Case Study Impact
export interface CaseStudyResultItem {
  label: string; metricValue: string; context?: string; isHeadlineMetric?: boolean;
}
export interface CaseStudyImpactSlideData extends BaseSlide {
  type: 'case-study-impact';
  clientName: string; clientIndustry: string; clientLogoUrl?: string;
  challenge: string; solution: string; quantifiedResults: CaseStudyResultItem[];
}

// 13. Dual Column Pros Cons
export interface ProConItem {
  id: string; title: string; detail: string; hasHighImpact?: boolean; hasWorkaround?: boolean;
}
export interface DualColumnProsConsSlideData extends BaseSlide {
  type: 'dual-column-pros-cons';
  topic: string;
  prosHeader?: string;
  pros: ProConItem[];
  consHeader?: string;
  cons: ProConItem[];
  recommendationSummary?: string;
}

// 14. Interactive Code Playground
export interface InteractiveCodePlaygroundSlideData extends BaseSlide {
  type: 'interactive-code-playground';
  language: string;
  initialCode: string;
  executionOutput?: string;
  filename?: string;
  isExecutable?: boolean;
  hasSyntaxHighlighting?: boolean;
}

// 15. Closing CTA Showcase
export interface ClosingCtaButton {
  label: string; url?: string; actionType?: string; isPrimaryButton?: boolean;
}
export interface ClosingCtaShowcaseSlideData extends BaseSlide {
  type: 'closing-cta-showcase';
  ctaHeadline: string;
  subHeadline?: string;
  primaryCta: ClosingCtaButton;
  secondaryCta?: { label: string; url?: string };
  contactInfo?: { email?: string; phone?: string; website?: string; hasCalendarLink?: boolean };
  socialProofNote?: string;
}

// Union of all 15 enterprise slide types
export type EnterpriseSlideType =
  | 'executive-summary'
  | 'system-architecture-flow'
  | 'roi-metric-calculator'
  | 'customer-journey-map'
  | 'matrix-comparison-grid'
  | 'tech-stack-grid'
  | 'team-hierarchy-org'
  | 'security-compliance-matrix'
  | 'product-roadmap-timeline'
  | 'interactive-faq-flow'
  | 'key-metric-scorecard'
  | 'case-study-impact'
  | 'dual-column-pros-cons'
  | 'interactive-code-playground'
  | 'closing-cta-showcase';

// Union of all 15 enterprise slide data interfaces
export type EnterpriseSlideData =
  | ExecutiveSummarySlideData
  | SystemArchitectureSlideData
  | RoiMetricCalculatorSlideData
  | CustomerJourneySlideData
  | MatrixComparisonSlideData
  | TechStackGridSlideData
  | TeamHierarchySlideData
  | SecurityComplianceSlideData
  | ProductRoadmapTimelineSlideData
  | InteractiveFaqSlideData
  | KeyMetricScorecardSlideData
  | CaseStudyImpactSlideData
  | DualColumnProsConsSlideData
  | InteractiveCodePlaygroundSlideData
  | ClosingCtaShowcaseSlideData;
