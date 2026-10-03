import React from 'react';
import type { SlideData } from '../../types/presentation';
import { WhiteMasterSlide } from './WhiteMasterSlide';
import {
  ExecutiveMandateScorecardSlide,
  BoardQuorumResolutionLedgerSlide,
  MacroEconomicThreatRadarSlide,
  ZeroTrustNetworkMeshSlide,
  DistributedConsensusRaftLogSlide,
  DataPipelineLineageDagSlide,
  CodeWalkthroughSyntaxLensSlide,
  TierComparisonFeatureMatrixSlide,
  ArrGrowthBridgeWaterfallSlide,
  MultiTierSaasPackagingTableSlide,
  FlywheelGrowthMomentumOrbitSlide,
  EnterpriseCaseStudyHeroSlide,
  ClientWallSocialProofGridSlide,
  IncidentRetrospectiveTimelineSlide,
  InteractiveFaqTabbedDeckSlide,
  AudienceDecisionForkMatrixSlide,
} from './expansion';

export const GlobalPptExpansionSuiteSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'executive-mandate-scorecard':
      return <ExecutiveMandateScorecardSlide slide={slide as any} />;
    case 'board-quorum-resolution-ledger':
      return <BoardQuorumResolutionLedgerSlide slide={slide as any} />;
    case 'macro-economic-threat-radar':
      return <MacroEconomicThreatRadarSlide slide={slide as any} />;
    case 'zero-trust-network-mesh':
      return <ZeroTrustNetworkMeshSlide slide={slide as any} />;
    case 'distributed-consensus-raft-log':
      return <DistributedConsensusRaftLogSlide slide={slide as any} />;
    case 'data-pipeline-lineage-dag':
      return <DataPipelineLineageDagSlide slide={slide as any} />;
    case 'code-walkthrough-syntax-lens':
      return <CodeWalkthroughSyntaxLensSlide slide={slide as any} />;
    case 'tier-comparison-feature-matrix':
      return <TierComparisonFeatureMatrixSlide slide={slide as any} />;
    case 'arr-growth-bridge-waterfall':
      return <ArrGrowthBridgeWaterfallSlide slide={slide as any} />;
    case 'multi-tier-saas-packaging-table':
      return <MultiTierSaasPackagingTableSlide slide={slide as any} />;
    case 'flywheel-growth-momentum-orbit':
      return <FlywheelGrowthMomentumOrbitSlide slide={slide as any} />;
    case 'enterprise-case-study-hero':
      return <EnterpriseCaseStudyHeroSlide slide={slide as any} />;
    case 'client-wall-social-proof-grid':
      return <ClientWallSocialProofGridSlide slide={slide as any} />;
    case 'incident-retrospective-timeline':
      return <IncidentRetrospectiveTimelineSlide slide={slide as any} />;
    case 'interactive-faq-tabbed-deck':
      return <InteractiveFaqTabbedDeckSlide slide={slide as any} />;
    case 'audience-decision-fork-matrix':
      return <AudienceDecisionForkMatrixSlide slide={slide as any} />;
    default:
      return <WhiteMasterSlide slide={slide as any} />;
  }
};
