import React from 'react';
import type { SlideData } from '../../types/presentation';
import { ExecutiveSummarySlide } from './ExecutiveSummarySlide';
import { SystemArchitectureFlowSlide } from './SystemArchitectureFlowSlide';
import { RoiMetricCalculatorSlide } from './RoiMetricCalculatorSlide';
import { CustomerJourneyMapSlide } from './CustomerJourneyMapSlide';
import { MatrixComparisonGridSlide } from './MatrixComparisonGridSlide';
import { TechStackGridSlide } from './TechStackGridSlide';
import { TeamHierarchyOrgSlide } from './TeamHierarchyOrgSlide';
import { SecurityComplianceMatrixSlide } from './SecurityComplianceMatrixSlide';
import { ProductRoadmapTimelineSlide } from './ProductRoadmapTimelineSlide';
import { InteractiveFaqFlowSlide } from './InteractiveFaqFlowSlide';
import { KeyMetricScorecardSlide } from './KeyMetricScorecardSlide';
import { CaseStudyImpactSlide } from './CaseStudyImpactSlide';
import { DualColumnProsConsSlide } from './DualColumnProsConsSlide';
import { InteractiveCodePlaygroundSlide } from './InteractiveCodePlaygroundSlide';
import { ClosingCtaShowcaseSlide } from './ClosingCtaShowcaseSlide';
import { TimelineRailSlide } from './TimelineRailSlide';
import { WhiteMasterSlide } from './WhiteMasterSlide';

export const EnterpriseSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'executive-summary': return <ExecutiveSummarySlide slide={slide as any} />;
    case 'system-architecture-flow': return <SystemArchitectureFlowSlide slide={slide as any} />;
    case 'roi-metric-calculator': return <RoiMetricCalculatorSlide slide={slide as any} />;
    case 'customer-journey-map': return <CustomerJourneyMapSlide slide={slide as any} />;
    case 'matrix-comparison-grid': return <MatrixComparisonGridSlide slide={slide as any} />;
    case 'tech-stack-grid': return <TechStackGridSlide slide={slide as any} />;
    case 'team-hierarchy-org': return <TeamHierarchyOrgSlide slide={slide as any} />;
    case 'security-compliance-matrix': return <SecurityComplianceMatrixSlide slide={slide as any} />;
    case 'product-roadmap-timeline': return <ProductRoadmapTimelineSlide slide={slide as any} />;
    case 'interactive-faq-flow': return <InteractiveFaqFlowSlide slide={slide as any} />;
    case 'key-metric-scorecard': return <KeyMetricScorecardSlide slide={slide as any} />;
    case 'case-study-impact': return <CaseStudyImpactSlide slide={slide as any} />;
    case 'dual-column-pros-cons': return <DualColumnProsConsSlide slide={slide as any} />;
    case 'interactive-code-playground': return <InteractiveCodePlaygroundSlide slide={slide as any} />;
    case 'closing-cta-showcase': return <ClosingCtaShowcaseSlide slide={slide as any} />;
    case 'timeline-rail': return <TimelineRailSlide slide={slide as any} />;
    default: return <WhiteMasterSlide slide={slide as any} />;
  }
};
