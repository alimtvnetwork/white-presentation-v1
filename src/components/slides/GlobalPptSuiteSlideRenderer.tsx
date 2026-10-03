import React from 'react';
import type { SlideData } from '../../types/presentation';
import { ExecutiveGovernanceMatrixSlide } from './ExecutiveGovernanceMatrixSlide';
import { OkrCascadeAlignmentSlide } from './OkrCascadeAlignmentSlide';
import { CloudCostFinOpsOptimizerSlide } from './CloudCostFinOpsOptimizerSlide';
import { CustomerSentimentRadarSlide } from './CustomerSentimentRadarSlide';
import { CompetitiveBattlecardSlide } from './CompetitiveBattlecardSlide';
import { LaunchReadinessChecklistSlide } from './LaunchReadinessChecklistSlide';
import { DeveloperGatewaySandboxSlide } from './DeveloperGatewaySandboxSlide';
import { RagPipelineTopologySlide } from './RagPipelineTopologySlide';
import { SocIncidentWarRoomSlide } from './SocIncidentWarRoomSlide';
import { MerkleTreeStateLedgerSlide } from './MerkleTreeStateLedgerSlide';
import { InvestorCapTableWaterfallSlide } from './InvestorCapTableWaterfallSlide';
import { RealtimeEventStreamFabricSlide } from './RealtimeEventStreamFabricSlide';
import { SupplyChainRiskMatrixSlide } from './SupplyChainRiskMatrixSlide';
import { TalentCompetencyRadarSlide } from './TalentCompetencyRadarSlide';
import { SustainabilityEsgScorecardSlide } from './SustainabilityEsgScorecardSlide';
import { SovereignOperationsSlideRenderer } from './SovereignOperationsSlideRenderer';

export const GlobalPptSuiteSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'executive-governance-matrix': return <ExecutiveGovernanceMatrixSlide slide={slide as any} />;
    case 'okr-cascade-alignment': return <OkrCascadeAlignmentSlide slide={slide as any} />;
    case 'cloud-cost-finops-optimizer': return <CloudCostFinOpsOptimizerSlide slide={slide as any} />;
    case 'customer-sentiment-radar': return <CustomerSentimentRadarSlide slide={slide as any} />;
    case 'competitive-battlecard': return <CompetitiveBattlecardSlide slide={slide as any} />;
    case 'launch-readiness-checklist': return <LaunchReadinessChecklistSlide slide={slide as any} />;
    case 'developer-gateway-sandbox': return <DeveloperGatewaySandboxSlide slide={slide as any} />;
    case 'rag-pipeline-topology': return <RagPipelineTopologySlide slide={slide as any} />;
    case 'soc-incident-war-room': return <SocIncidentWarRoomSlide slide={slide as any} />;
    case 'merkle-tree-state-ledger': return <MerkleTreeStateLedgerSlide slide={slide as any} />;
    case 'investor-cap-table-waterfall': return <InvestorCapTableWaterfallSlide slide={slide as any} />;
    case 'realtime-event-stream-fabric': return <RealtimeEventStreamFabricSlide slide={slide as any} />;
    case 'supply-chain-risk-matrix': return <SupplyChainRiskMatrixSlide slide={slide as any} />;
    case 'talent-competency-radar': return <TalentCompetencyRadarSlide slide={slide as any} />;
    case 'sustainability-esg-scorecard': return <SustainabilityEsgScorecardSlide slide={slide as any} />;
    default: return <SovereignOperationsSlideRenderer slide={slide} />;
  }
};
