import type { BaseSlide } from '../presentation';

// =============================================================================
// 13. Voice AI Realtime Conversational Mesh (voice-ai-realtime-conversational-mesh)
// =============================================================================
export interface VoicePipelineStage {
  stageIndex: number;
  stageName: string;
  modelName: string;
  budgetLatencyMs: number;
  actualLatencyMs: number;
  throughputTokensOrAudioPerSec: number;
  isWithinBudget: boolean;
  isStreamingActive: boolean;
}

export type VadPipelineStage = VoicePipelineStage;

export interface VoiceLatencyMetric {
  endToEndLatencyMs: number;
  p99LatencyMs: number;
  interruptionLatencyMs: number;
  isTargetSlaAchieved: boolean;
}

export interface VoiceAiConversationalMeshSlideData extends BaseSlide {
  type: 'voice-ai-realtime-conversational-mesh';
  pipelineStages: VoicePipelineStage[];
  activeSession: {
    sessionId: string;
    sampleRateKhz: number;
    audioCodec: 'OPUS' | 'PCM_16' | 'FLAC';
    userTranscript: string;
    agentResponseTranscript: string;
    isFullDuplexActive: boolean;
    isBargeInDetected: boolean;
  };
  turnTakingMetrics: VoiceLatencyMetric;
  acousticModel: {
    voiceId: string;
    naturalnessMosScore: number;
    hasProsodyModeling: boolean;
  };
}

// =============================================================================
// 14. Compliance Audit SOC 2 Readiness Ladder (compliance-audit-soc2-readiness-ladder)
// =============================================================================
export interface Soc2LadderStep {
  stepIndex: number;
  title: string;
  timeframe: string;
  controlPassRatioPercent: number;
  totalControlsMonitored: number;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
  isStepCompleted: boolean;
  isAuditorSignedOff: boolean;
  primaryEvidenceArtifact: string;
}

export type AuditEvidenceArtifact = Soc2LadderStep;

export interface TrustCriteriaScore {
  criteriaName: 'SECURITY' | 'AVAILABILITY' | 'CONFIDENTIALITY' | 'PROCESSING_INTEGRITY' | 'PRIVACY';
  passedControlsCount: number;
  totalControlsCount: number;
  isCriteriaPassed: boolean;
}

export type Soc2TrustCriterion = TrustCriteriaScore;

export interface ComplianceSoc2ReadinessLadderSlideData extends BaseSlide {
  type: 'compliance-audit-soc2-readiness-ladder';
  ladderSteps: Soc2LadderStep[];
  trustCriteriaScores: TrustCriteriaScore[];
  auditFirm: {
    firmName: string;
    leadAuditorName: string;
    observationWindowMonths: number;
    isUnqualifiedOpinionExpected: boolean;
  };
  continuousCompliance: {
    automatedEvidenceIngestionPercent: number;
    failingControlsCount: number;
    isContinuousMonitoringActive: boolean;
  };
}

// =============================================================================
// 15. Value Stream Engineering & DORA Flywheel (value-stream-engineering-dora-flywheel)
// =============================================================================
export interface FlywheelQuadrant {
  quadrantIndex: number;
  name: string;
  description: string;
  keyMetric: string;
  status: 'STABLE' | 'ACCELERATING' | 'OPTIMIZING';
  isFlywheelAccelerating: boolean;
}

export interface DoraMetricGauge {
  deploymentFrequencyPerDay: number;
  deploymentFrequencyTier: 'ELITE' | 'HIGH' | 'MEDIUM' | 'LOW';
  leadTimeHours: number;
  leadTimeTier: 'ELITE' | 'HIGH' | 'MEDIUM' | 'LOW';
  changeFailureRatePercent: number;
  changeFailureTier: 'ELITE' | 'HIGH' | 'MEDIUM' | 'LOW';
  mttrMinutes: number;
  mttrTier: 'ELITE' | 'HIGH' | 'MEDIUM' | 'LOW';
  isEliteStatusAchieved: boolean;
}

export interface ValueStreamDoraFlywheelSlideData extends BaseSlide {
  type: 'value-stream-engineering-dora-flywheel';
  doraMetrics: DoraMetricGauge;
  flowFramework: {
    flowVelocityItemsPerSprint: number;
    flowEfficiencyPercent: number;
    flowTimeDays: number;
    flowLoadActiveItems: number;
    isWipLimitEnforced: boolean;
  };
  flywheelQuadrants: FlywheelQuadrant[];
  valueImpact: {
    shippedFeaturesQuarterCount: number;
    revenueImpactMillionUsd: number;
    developerSatisfactionScore: number;
    isDeliveryPredictable: boolean;
  };
}
