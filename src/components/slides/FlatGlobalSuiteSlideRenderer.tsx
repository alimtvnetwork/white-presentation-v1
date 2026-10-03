import React from 'react';
import type { SlideData } from '../../types/presentation';
import { GlobalPptExpansionSuiteSlideRenderer } from './GlobalPptExpansionSuiteSlideRenderer';
import { InteractiveBranchingCloseSlide } from './flatglobal/InteractiveBranchingCloseSlide';
import { BeforeAfterShowcasePanSlide } from './flatglobal/BeforeAfterShowcasePanSlide';
import { SearchSerpProofLightboxSlide } from './flatglobal/SearchSerpProofLightboxSlide';
import { CognitiveInversionPunchlineSlide } from './flatglobal/CognitiveInversionPunchlineSlide';
import { TalentPyramidFunnelSvgSlide } from './flatglobal/TalentPyramidFunnelSvgSlide';
import { HexagonalTechClusterSlide } from './flatglobal/HexagonalTechClusterSlide';
import { ConnectedRoadmapRailPulseSlide } from './flatglobal/ConnectedRoadmapRailPulseSlide';
import { CampaignPerformanceLightboxSlide } from './flatglobal/CampaignPerformanceLightboxSlide';
import { ExecutiveRosterKeypadSlide } from './flatglobal/ExecutiveRosterKeypadSlide';
import { FlatStepProcessFlowSlide } from './flatglobal/FlatStepProcessFlowSlide';
import { FlatSplitNarrativeStepperSlide } from './flatglobal/FlatSplitNarrativeStepperSlide';
import { FlatTimelineMilestoneRailSlide } from './flatglobal/FlatTimelineMilestoneRailSlide';
import { FlatRevealBentoGridSlide } from './flatglobal/FlatRevealBentoGridSlide';
import { FlatDepthSentenceStackSlide } from './flatglobal/FlatDepthSentenceStackSlide';
import { FlatTypewriterCodeWalkthroughSlide } from './flatglobal/FlatTypewriterCodeWalkthroughSlide';

export const FlatGlobalSuiteSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'interactive-branching-close':
      return <InteractiveBranchingCloseSlide slide={slide as any} />;
    case 'before-after-showcase-pan':
      return <BeforeAfterShowcasePanSlide slide={slide as any} />;
    case 'search-serp-proof-lightbox':
      return <SearchSerpProofLightboxSlide slide={slide as any} />;
    case 'cognitive-inversion-punchline':
      return <CognitiveInversionPunchlineSlide slide={slide as any} />;
    case 'talent-pyramid-funnel-svg':
      return <TalentPyramidFunnelSvgSlide slide={slide as any} />;
    case 'hexagonal-tech-cluster':
      return <HexagonalTechClusterSlide slide={slide as any} />;
    case 'connected-roadmap-rail-pulse':
      return <ConnectedRoadmapRailPulseSlide slide={slide as any} />;
    case 'campaign-performance-lightbox':
      return <CampaignPerformanceLightboxSlide slide={slide as any} />;
    case 'executive-roster-keypad':
      return <ExecutiveRosterKeypadSlide slide={slide as any} />;
    case 'flat-step-process-flow':
      return <FlatStepProcessFlowSlide slide={slide as any} />;
    case 'flat-split-narrative-stepper':
      return <FlatSplitNarrativeStepperSlide slide={slide as any} />;
    case 'flat-timeline-milestone-rail':
      return <FlatTimelineMilestoneRailSlide slide={slide as any} />;
    case 'flat-reveal-bento-grid':
      return <FlatRevealBentoGridSlide slide={slide as any} />;
    case 'flat-depth-sentence-stack':
      return <FlatDepthSentenceStackSlide slide={slide as any} />;
    case 'flat-typewriter-code-walkthrough':
      return <FlatTypewriterCodeWalkthroughSlide slide={slide as any} />;
    default:
      return <GlobalPptExpansionSuiteSlideRenderer slide={slide} />;
  }
};
