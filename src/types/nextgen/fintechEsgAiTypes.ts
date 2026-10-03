import type { BaseSlide } from '../presentation';

// =============================================================================
// 5. FinTech Payment Clearing Engine (fintech-payment-clearing-engine)
// =============================================================================
export interface PaymentClearingStage {
  stageId: string;
  name: string;
  standard: string;
  latencyTargetMs: number;
  latencyActualMs: number;
  isVerified: boolean;
  isPassed: boolean;
  activeRuleSet: string;
}

export type IsoClearingStage = PaymentClearingStage;

export interface ActivePaymentTransaction {
  txnId: string;
  messageType: 'pacs.008.001.10' | 'pacs.002.001.12' | 'camt.053.001.10';
  senderIbanMasked: string;
  receiverIbanMasked: string;
  amountUsd: number;
  currency: 'USD' | 'EUR' | 'GBP';
  isAuthorized: boolean;
  isSanctionsCleared: boolean;
}

export interface FraudScoringRule {
  riskScoreZeroToOneHundred: number;
  inferenceDurationMs: number;
  modelVersion: string;
  isApprovedByModel: boolean;
  hasBiometricAuth: boolean;
}

export interface FintechPaymentClearingSlideData extends BaseSlide {
  type: 'fintech-payment-clearing-engine';
  clearingStages: PaymentClearingStage[];
  activeTransaction: ActivePaymentTransaction;
  fraudEngine: FraudScoringRule;
  settlementTelemetry: {
    settledTps: number;
    dailyVolumeMillionUsd: number;
    isLedgerImmutabilityVerified: boolean;
    ledgerImmutabilityVerified?: boolean;
    isRealtimeRailsActive: boolean;
  };
}

// =============================================================================
// 6. ESG Decarbonization Roadmap (esg-decarbonization-roadmap)
// =============================================================================
export interface DecarbonizationMilestoneYear {
  year: number;
  scope1KiloTons: number;
  scope2KiloTons: number;
  scope3KiloTons: number;
  totalReductionPercent: number;
  isMilestoneAchieved: boolean;
  isAuditedBySbti: boolean;
  primaryIntervention: string;
}

export type DecarbonizationMilestone = DecarbonizationMilestoneYear;

export interface EsgReductionWedge {
  wedgeName: string;
  reductionTonsPerYear: number;
  costPerTonUsd: number;
  isOperationalized: boolean;
  hasDirectMeasurement: boolean;
}

export type EmissionsWedge = EsgReductionWedge;

export interface EsgDecarbonizationRoadmapSlideData extends BaseSlide {
  type: 'esg-decarbonization-roadmap';
  milestoneYears: DecarbonizationMilestoneYear[];
  reductionWedges: EsgReductionWedge[];
  energyMix: {
    renewablePercentage: number;
    gridAveragePercentage: number;
    nuclearPercentage: number;
    isCarbonNeutralDataCenterAchieved: boolean;
  };
  esgScorecard: {
    cdpRating: 'A' | 'A-' | 'B' | 'B-';
    msciEsgScore: 'AAA' | 'AA' | 'A';
    isCompliantWithCsrd: boolean;
  };
}

// =============================================================================
// 7. Model Context Protocol Mesh (model-context-protocol-mesh)
// =============================================================================
export interface McpServerNode {
  serverId: string;
  name: string;
  transport: 'STDIO' | 'SSE' | 'WEBSOCKET';
  toolCount: number;
  resourceCount: number;
  pingLatencyMs: number;
  isHealthy: boolean;
  isAuthorized: boolean;
  supportedTools: string[];
}

export type McpHostNode = McpServerNode;

export interface McpActiveInvocation {
  invocationId: string;
  requestedTool: string;
  serverSource: string;
  parametersJson: string;
  executionDurationMs: number;
  isCompleted: boolean;
  isPolicyPermitted: boolean;
  isUserConfirmationRequired: boolean;
  requiresUserConfirmation?: boolean;
}

export type McpToolSandbox = McpActiveInvocation;

export interface ModelContextProtocolMeshSlideData extends BaseSlide {
  type: 'model-context-protocol-mesh';
  clientHost: {
    hostName: string;
    agentVersion: string;
    protocolVersion: string;
    isConnected: boolean;
    hasToolAutoApproval: boolean;
  };
  mcpServers: McpServerNode[];
  activeInvocation: McpActiveInvocation;
  meshMetrics: {
    totalServersConnected: number;
    totalToolsExposed: number;
    averageRoundtripMs: number;
    isSecuritySandboxActive: boolean;
  };
}

// =============================================================================
// 8. Data Clean Room Collaboration (data-clean-room-collaboration)
// =============================================================================
export interface CleanRoomCollaborator {
  partyId: string;
  organizationName: string;
  datasetName: string;
  recordCountMillion: number;
  isEnclaveAttested: boolean;
  isIngestionCompleted: boolean;
  hasSignedConsent: boolean;
}

export type CleanRoomEnclave = CleanRoomCollaborator;

export interface DifferentialPrivacyBudget {
  epsilonBudget: number;
  epsilonUsed: number;
  delta: number;
  kAnonymityThreshold: number;
  isBudgetCompliant: boolean;
}

export type PrivacyBudgetMetric = DifferentialPrivacyBudget;

export interface DataCleanRoomSlideData extends BaseSlide {
  type: 'data-clean-room-collaboration';
  collaboratingParties: CleanRoomCollaborator[];
  differentialPrivacy: DifferentialPrivacyBudget;
  enclaveConfig: {
    enclaveType: 'AWS_NITRO' | 'GCP_CONFIDENTIAL' | 'INTEL_SGX';
    attestationHash: string;
    isMemoryEncrypted: boolean;
    isZeroEgressEnforced: boolean;
  };
  outputMetrics: {
    matchedAudienceMillion: number;
    overlapPercentage: number;
    piiLeaksDetectedCount: number;
    isExportAuthorized: boolean;
  };
}
