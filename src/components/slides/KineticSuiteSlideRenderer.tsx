import React from 'react';
import type { SlideData } from '../../types/presentation';
import { CodeDiffComparisonSlide } from './CodeDiffComparisonSlide';
import { GlobalCloudEdgeMeshSlide } from './GlobalCloudEdgeMeshSlide';
import { ApiEndpointInspectorSlide } from './ApiEndpointInspectorSlide';
import { DatabaseSchemaErdSlide } from './DatabaseSchemaErdSlide';
import { SecurityThreatModelSlide } from './SecurityThreatModelSlide';
import { AiAgentSwarmDagSlide } from './AiAgentSwarmDagSlide';
import { FinancialBurnRunwaySlide } from './FinancialBurnRunwaySlide';
import { BentoKpiMosaicSlide } from './BentoKpiMosaicSlide';
import { CanaryReleaseGaugeSlide } from './CanaryReleaseGaugeSlide';
import { IncidentRcaPostmortemSlide } from './IncidentRcaPostmortemSlide';
import { SlasAndUptimeStatusSlide } from './SlasAndUptimeStatusSlide';
import { AudioWaveformStudioSlide } from './AudioWaveformStudioSlide';
import { HardwareSiliconSpecSlide } from './HardwareSiliconSpecSlide';
import { CohortRetentionHeatmapSlide } from './CohortRetentionHeatmapSlide';
import { VerifiableAuditLedgerSlide } from './VerifiableAuditLedgerSlide';
import { WhiteMasterSlide } from './WhiteMasterSlide';

export const KineticSuiteSlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.type) {
    case 'code-diff-comparison': return <CodeDiffComparisonSlide slide={slide as any} />;
    case 'global-cloud-edge-mesh': return <GlobalCloudEdgeMeshSlide slide={slide as any} />;
    case 'api-endpoint-inspector': return <ApiEndpointInspectorSlide slide={slide as any} />;
    case 'database-schema-erd': return <DatabaseSchemaErdSlide slide={slide as any} />;
    case 'security-threat-model': return <SecurityThreatModelSlide slide={slide as any} />;
    case 'ai-agent-swarm-dag': return <AiAgentSwarmDagSlide slide={slide as any} />;
    case 'financial-burn-runway': return <FinancialBurnRunwaySlide slide={slide as any} />;
    case 'bento-kpi-mosaic': return <BentoKpiMosaicSlide slide={slide as any} />;
    case 'canary-release-gauge': return <CanaryReleaseGaugeSlide slide={slide as any} />;
    case 'incident-rca-postmortem': return <IncidentRcaPostmortemSlide slide={slide as any} />;
    case 'slas-and-uptime-status': return <SlasAndUptimeStatusSlide slide={slide as any} />;
    case 'audio-waveform-studio': return <AudioWaveformStudioSlide slide={slide as any} />;
    case 'hardware-silicon-spec': return <HardwareSiliconSpecSlide slide={slide as any} />;
    case 'cohort-retention-heatmap': return <CohortRetentionHeatmapSlide slide={slide as any} />;
    case 'verifiable-audit-ledger': return <VerifiableAuditLedgerSlide slide={slide as any} />;
    default: return <WhiteMasterSlide slide={slide as any} />;
  }
};
