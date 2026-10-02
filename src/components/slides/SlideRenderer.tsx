import React from 'react';
import { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import { TitleSlide } from './TitleSlide';
import { CeoPersonaSlide } from './CeoPersonaSlide';
import { BeforeAfterSlide } from './BeforeAfterSlide';
import { TalentFunnelSlide } from './TalentFunnelSlide';
import { PricingProofSlide } from './PricingProofSlide';
import { KeyPlayerSlide } from './KeyPlayerSlide';
import { StepsChainSlide } from './StepsChainSlide';
import { TestimonialsSlide } from './TestimonialsSlide';
import { CompetitiveEdgeSlide } from './CompetitiveEdgeSlide';
import { TechStackSlide } from './TechStackSlide';
import { StepsSlide } from './StepsSlide';
import { MetricGridSlide } from './MetricGridSlide';
import { ProblemSolutionSlide } from './ProblemSolutionSlide';
import { QuadrantMatrixSlide } from './QuadrantMatrixSlide';
import { MarketOpportunitySlide } from './MarketOpportunitySlide';
import { TimelineRoadmapSlide } from './TimelineRoadmapSlide';
import { FeatureGridSlide } from './FeatureGridSlide';
import { ArchitectureDiagramSlide } from './ArchitectureDiagramSlide';
import { QuoteCalloutSlide } from './QuoteCalloutSlide';
import { StatsCalloutSlide } from './StatsCalloutSlide';
import { TeamGridSlide } from './TeamGridSlide';
import { CaseStudySlide } from './CaseStudySlide';
import { ComparisonColumnsSlide } from './ComparisonColumnsSlide';
import { ProcessCycleSlide } from './ProcessCycleSlide';
import { CodeTerminalSlide } from './CodeTerminalSlide';
import { CallToActionSlide } from './CallToActionSlide';

interface SlideRendererProps {
  slide: SlideData;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  switch (slide.type) {
    case 'white-master': return <WhiteMasterSlide slide={slide} />;
    case 'title': return <TitleSlide slide={slide} />;
    case 'persona': return <CeoPersonaSlide slide={slide} />;
    case 'key-player': return <KeyPlayerSlide slide={slide} />;
    case 'before-after': return <BeforeAfterSlide slide={slide} />;
    case 'talent-funnel': return <TalentFunnelSlide slide={slide} />;
    case 'pricing': return <PricingProofSlide slide={slide} />;
    case 'steps-chain': return <StepsChainSlide slide={slide} />;
    case 'testimonials': return <TestimonialsSlide slide={slide} />;
    case 'competitive-edge': return <CompetitiveEdgeSlide slide={slide} />;
    case 'tech-stack': return <TechStackSlide slide={slide} />;
    case 'steps': return <StepsSlide slide={slide as any} />;
    case 'metric-grid': return <MetricGridSlide slide={slide as any} />;
    case 'problem-solution': return <ProblemSolutionSlide slide={slide as any} />;
    case 'quadrant-matrix': return <QuadrantMatrixSlide slide={slide as any} />;
    case 'market-opportunity': return <MarketOpportunitySlide slide={slide as any} />;
    case 'timeline-roadmap': return <TimelineRoadmapSlide slide={slide as any} />;
    case 'feature-grid': return <FeatureGridSlide slide={slide as any} />;
    case 'architecture-diagram': return <ArchitectureDiagramSlide slide={slide as any} />;
    case 'quote-callout': return <QuoteCalloutSlide slide={slide as any} />;
    case 'stats-callout': return <StatsCalloutSlide slide={slide as any} />;
    case 'team-grid': return <TeamGridSlide slide={slide as any} />;
    case 'case-study': return <CaseStudySlide slide={slide as any} />;
    case 'comparison-columns': return <ComparisonColumnsSlide slide={slide as any} />;
    case 'process-cycle': return <ProcessCycleSlide slide={slide as any} />;
    case 'code-terminal': return <CodeTerminalSlide slide={slide as any} />;
    case 'call-to-action': return <CallToActionSlide slide={slide as any} />;
    default: return <WhiteMasterSlide slide={slide as any} />;
  }
};
