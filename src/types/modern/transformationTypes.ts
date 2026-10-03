import type { BaseSlide } from '../presentation';

export interface MigrationFunnelPhase {
  id: string; stepIndex: number; phaseName: string;
  workloadCount: number; workloadType: string; durationWeeks: number;
  successRatePercentage: number; riskTier: 'LOW' | 'MEDIUM' | 'HIGH';
  keyMilestones: string[]; isPhaseActive: boolean; isPhaseCompleted: boolean;
}

export interface MigrationTelemetrySummary {
  totalWorkloads: number; completedWorkloads: number;
  costReductionPercentage: number; targetCloudProvider: string; isSlaMaintained: boolean;
}

export interface EnterpriseCloudMigrationFunnelSlideData extends BaseSlide {
  type: 'enterprise-cloud-migration-funnel';
  summary: MigrationTelemetrySummary;
  funnelPhases: MigrationFunnelPhase[];
  cutoverDeadline: string; isMigrationOnTrack: boolean;
}

export interface SecurityPerimeterLayer {
  id: string; stepIndex: number; layerTitle: string;
  layerMechanism: string; enforcementTarget: string;
  trustScoreMinimum: number; latencyBudgetMs: number;
  isLayerActive: boolean; isHardwareAttested: boolean; protocols: string[];
}

export interface ZeroTrustTelemetryBanner {
  activeSessionsCount: number; averageTrustScore: number;
  authLatencyMs: number; blockedAnomaliesCount: number; isZeroTrustEnforced: boolean;
}

export interface ZeroTrustIdentityPerimeterSlideData extends BaseSlide {
  type: 'zero-trust-identity-perimeter';
  telemetry: ZeroTrustTelemetryBanner;
  securityPerimeterLayers: SecurityPerimeterLayer[];
  complianceStandard: string; isPostureCompliant: boolean;
}

export interface AiFlywheelStage {
  id: string; stepIndex: number; stageName: string; subsystemTitle: string;
  throughputRate: string; coreMetricName: string; coreMetricValue: string;
  isStageActive: boolean; isAutonomous: boolean; capabilities: string[];
}

export interface FlywheelAccelerationBanner {
  dailyProcessedTokens: string; modelPerplexityScore: number;
  p99LatencyMs: number; feedbackConversionRate: string; isFlywheelAccelerating: boolean;
}

export interface AiDataFlywheelLifecycleSlideData extends BaseSlide {
  type: 'ai-data-flywheel-lifecycle';
  telemetry: FlywheelAccelerationBanner;
  flywheelStages: AiFlywheelStage[];
  stages?: AiFlywheelStage[];
  modelFamilyName: string; isLoopClosed: boolean;
}

export interface IncidentPhase {
  id: string; stepIndex: number; phaseName: string; timestamp: string;
  actionTaken: string; leadResponder: string; statusMetric: string;
  isPhaseActive: boolean; isPhaseResolved: boolean; evidenceItems: string[];
}

export interface WarRoomTelemetryHeader {
  incidentId: string; severityLevel: 'SEV-0' | 'SEV-1' | 'SEV-2';
  incidentCommander: string; meanTimeToAcknowledgeSeconds: number;
  meanTimeToResolutionMinutes: number; isIncidentContained: boolean;
}

export interface IncidentCommandWarRoomSlideData extends BaseSlide {
  type: 'incident-command-war-room';
  commandHeader: WarRoomTelemetryHeader;
  incidentPhases: IncidentPhase[];
  postMortemSignoffRole: string; hasPostMortemSignoff: boolean;
}

export interface LineageNode {
  id: string; stepIndex: number; nodeTitle: string; regulatoryArticle: string;
  processingStage: string; encryptionStandard: string; auditVerificationState: string;
  isNodeActive: boolean; isAuditVerified: boolean; governanceControls: string[];
}

export interface RegulatoryAuditSummary {
  complianceFramework: string; activeDataSubjectsCount: string;
  erasureSlaSeconds: number; encryptionStandard: string; isAuditCompliant: boolean;
}

export interface RegulatoryGdprDataLineageSlideData extends BaseSlide {
  type: 'regulatory-gdpr-data-lineage';
  auditSummary: RegulatoryAuditSummary;
  lineageNodes: LineageNode[];
  dataProtectionOfficer: string; hasCryptographicAuditTrail: boolean;
}
