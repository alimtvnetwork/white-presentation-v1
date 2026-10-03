import type { BaseSlide } from '../presentation';

// =============================================================================
// 1. Three Horizons Strategy Matrix (three-horizons-strategy-matrix)
// =============================================================================
export interface HorizonInitiative {
  id: string;
  name: string;
  leadOwner: string;
  metricTarget: string;
  currentValue: string;
  isFunded: boolean;
  isMilestoneAchieved: boolean;
  riskProfile: 'LOW' | 'BALANCED' | 'HIGH';
}

export interface StrategicHorizon {
  id: string;
  horizonNumber: 1 | 2 | 3;
  name: string;
  subtitle: string;
  timeframeYears: string;
  targetCapitalAllocationPercent: number;
  targetRevenuePercentage: number;
  strategicFocus: string;
  stageGateCriteria: string;
  isHorizonActive: boolean;
  initiatives: HorizonInitiative[];
}

export interface StrategyPortfolioSummary {
  totalCapExMillionUsd: number;
  projectedRoiMultiplier: number;
  blendedGrowthRatePercent: number;
  isPortfolioRebalanced: boolean;
  isReviewApproved: boolean;
}

export interface ThreeHorizonsStrategySlideData extends BaseSlide {
  type: 'three-horizons-strategy-matrix';
  horizons: StrategicHorizon[];
  portfolioSummary: StrategyPortfolioSummary;
  executiveSignoff: {
    chiefStrategyOfficer: string;
    chiefSoftwareEngineer?: string;
    reviewQuarter: string;
    isApproved: boolean;
  };
}

// =============================================================================
// 2. AI Agent Fleet Topology (ai-agent-fleet-topology)
// =============================================================================
export interface AgentWorkerNode {
  id: string;
  name: string;
  role: string;
  specialization: string;
  status: 'IDLE' | 'EXECUTING' | 'WAITING_IO' | 'COMPLETED';
  activeTokensUsed: number;
  taskSuccessRatePercent: number;
  isHealthy: boolean;
  isSandboxIsolated: boolean;
  activeToolName: string;
}

export interface SupervisorController {
  controllerId: string;
  modelFamily: string;
  contextWindowTokens: number;
  currentTaskQueueDepth: number;
  isOperational: boolean;
  isAutonomousDispatchEnabled: boolean;
}

export type AgentSupervisor = SupervisorController;

export interface SafetyGovernorMetrics {
  tokenBudgetMaxMillion: number;
  tokensConsumedMillion: number;
  loopAnomalyCount: number;
  hasBlockedUnsafeCalls: boolean;
  isComplianceEnforced: boolean;
}

export interface AiAgentFleetTopologySlideData extends BaseSlide {
  type: 'ai-agent-fleet-topology';
  supervisor: SupervisorController;
  agentWorkers: AgentWorkerNode[];
  governorMetrics: SafetyGovernorMetrics;
  liveTelemetry: {
    activeAgentsCount: number;
    completedTasksCount: number;
    p95TaskLatencySeconds: number;
    isFleetSynchronized: boolean;
  };
}

// =============================================================================
// 3. API Rate Limit Gateway (api-rate-limit-gateway)
// =============================================================================
export interface RateLimitTierConfig {
  tierId: string;
  tierName: 'FREE' | 'PRO' | 'ENTERPRISE' | 'INTERNAL_MESH';
  tokenCapacity: number;
  refillRatePerSec: number;
  burstAllowance: number;
  activeClientsCount: number;
  isTierActive: boolean;
  isPriorityQueueEnabled: boolean;
}

export type RateLimitGatewayTier = RateLimitTierConfig;

export interface RedisMeshSyncStatus {
  clusterNodesCount: number;
  p99SyncLatencyMs: number;
  isClusterHealthy: boolean;
  hasConsistentHashing: boolean;
}

export type RedisMeshNode = RedisMeshSyncStatus;

export interface GatewayTrafficTelemetry {
  totalRequestsPerSecond: number;
  allowedRequestsPerSecond: number;
  throttled429PerSecond: number;
  cacheHitRatePercent: number;
  isDegradationActive: boolean;
}

export interface ApiRateLimitGatewaySlideData extends BaseSlide {
  type: 'api-rate-limit-gateway';
  gatewayTiers: RateLimitTierConfig[];
  redisMesh: RedisMeshSyncStatus;
  trafficTelemetry: GatewayTrafficTelemetry;
  circuitBreaker: {
    state: 'CLOSED' | 'HALF_OPEN' | 'OPEN';
    failureThresholdPercent: number;
    isTripped: boolean;
    isAutoRecoveryEnabled: boolean;
  };
}

// =============================================================================
// 4. Multi-Cloud DR Failover Mesh (multi-cloud-dr-failover-mesh)
// =============================================================================
export interface CloudRegionNode {
  regionId: string;
  provider: 'AWS' | 'GCP' | 'AZURE' | 'SOVEREIGN_ONPREM';
  location: string;
  trafficWeightPercent: number;
  healthScorePercent: number;
  isHealthy: boolean;
  isDraining: boolean;
  isPrimary: boolean;
}

export interface StorageReplicationPipeline {
  replicationLagMs: number;
  syncMode: 'SYNCHRONOUS' | 'ASYNCHRONOUS';
  hasZeroDataLossGuarantee: boolean;
  isReplicaConsistent: boolean;
}

export interface FailoverTelemetry {
  rtoSecondsTarget: number;
  rtoSecondsObserved: number;
  rpoSecondsObserved: number;
  isFailoverArmed: boolean;
  isAutomaticTriggerEnabled: boolean;
}

export interface FailoverQuorumState {
  activeVotingMembers: number;
  totalMembers: number;
  hasQuorumConsensus: boolean;
  isSplitBrainPrevented: boolean;
}

export interface MultiCloudDrFailoverSlideData extends BaseSlide {
  type: 'multi-cloud-dr-failover-mesh';
  cloudRegions: CloudRegionNode[];
  replicationPipeline: StorageReplicationPipeline;
  failoverTelemetry: FailoverTelemetry;
  quorumStatus: FailoverQuorumState;
}
