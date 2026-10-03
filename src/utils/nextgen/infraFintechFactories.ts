import type {
  ApiRateLimitGatewaySlideData,
  MultiCloudDrFailoverSlideData,
  FintechPaymentClearingSlideData,
} from '../../types/presentation';

// =============================================================================
// Archetype 03: API Rate Limit Gateway (api-rate-limit-gateway)
// =============================================================================
export const createApiRateLimitGatewaySlide = (
  id = `slide-api-gateway-${Date.now()}`,
  overrides?: Partial<ApiRateLimitGatewaySlideData>
): ApiRateLimitGatewaySlideData => ({
  id,
  type: 'api-rate-limit-gateway',
  title: 'API Ingress Rate-Limit Gateway & Admission',
  subtitle: 'Distributed Token-Bucket Architecture with Redis Sliding-Window Synchronization',
  kicker: 'High-Throughput API Gateway',
  activeStep: 1,
  maxSteps: 4,
  trafficTelemetry: {
    totalRequestsPerSecond: 124500,
    allowedRequestsPerSecond: 122890,
    throttled429PerSecond: 1610,
    cacheHitRatePercent: 94.2,
    isDegradationActive: false,
  },
  redisMesh: {
    clusterNodesCount: 6,
    p99SyncLatencyMs: 0.85,
    isClusterHealthy: true,
    hasConsistentHashing: true,
  },
  circuitBreaker: {
    state: 'CLOSED',
    failureThresholdPercent: 5.0,
    isTripped: false,
    isAutoRecoveryEnabled: true,
  },
  gatewayTiers: [
    {
      tierId: 'tier-free',
      tierName: 'FREE',
      tokenCapacity: 1000,
      refillRatePerSec: 100,
      burstAllowance: 1500,
      activeClientsCount: 84200,
      isTierActive: true,
      isPriorityQueueEnabled: false,
    },
    {
      tierId: 'tier-pro',
      tierName: 'PRO',
      tokenCapacity: 25000,
      refillRatePerSec: 2500,
      burstAllowance: 50000,
      activeClientsCount: 12450,
      isTierActive: true,
      isPriorityQueueEnabled: true,
    },
    {
      tierId: 'tier-enterprise',
      tierName: 'ENTERPRISE',
      tokenCapacity: 250000,
      refillRatePerSec: 50000,
      burstAllowance: 500000,
      activeClientsCount: 1120,
      isTierActive: true,
      isPriorityQueueEnabled: true,
    },
    {
      tierId: 'tier-mesh',
      tierName: 'INTERNAL_MESH',
      tokenCapacity: 1000000,
      refillRatePerSec: 200000,
      burstAllowance: 2000000,
      activeClientsCount: 85,
      isTierActive: true,
      isPriorityQueueEnabled: true,
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 04: Multi-Cloud DR Failover Mesh (multi-cloud-dr-failover-mesh)
// =============================================================================
export const createMultiCloudDrFailoverSlide = (
  id = `slide-multi-cloud-dr-${Date.now()}`,
  overrides?: Partial<MultiCloudDrFailoverSlideData>
): MultiCloudDrFailoverSlideData => ({
  id,
  type: 'multi-cloud-dr-failover-mesh',
  title: 'Active-Active Multi-Cloud DR Failover Mesh',
  subtitle: 'Cross-Cloud BGP Anycast Traffic Shifting, Raft Consensus & Sub-15s RTO Execution',
  kicker: 'Zero-Downtime Infrastructure',
  activeStep: 1,
  maxSteps: 4,
  failoverTelemetry: {
    rtoSecondsTarget: 30,
    rtoSecondsObserved: 14.8,
    rpoSecondsObserved: 0,
    isFailoverArmed: true,
    isAutomaticTriggerEnabled: true,
  },
  replicationPipeline: {
    replicationLagMs: 4.2,
    syncMode: 'SYNCHRONOUS',
    hasZeroDataLossGuarantee: true,
    isReplicaConsistent: true,
  },
  quorumStatus: {
    activeVotingMembers: 3,
    totalMembers: 3,
    hasQuorumConsensus: true,
    isSplitBrainPrevented: true,
  },
  cloudRegions: [
    {
      regionId: 'cloud-aws-useast1',
      provider: 'AWS',
      location: 'us-east-1 (N. Virginia)',
      trafficWeightPercent: 40,
      healthScorePercent: 100,
      isHealthy: true,
      isDraining: false,
      isPrimary: true,
    },
    {
      regionId: 'cloud-gcp-uscentral1',
      provider: 'GCP',
      location: 'us-central1 (Iowa)',
      trafficWeightPercent: 30,
      healthScorePercent: 100,
      isHealthy: true,
      isDraining: false,
      isPrimary: false,
    },
    {
      regionId: 'cloud-azure-eastus2',
      provider: 'AZURE',
      location: 'eastus2 (Virginia)',
      trafficWeightPercent: 20,
      healthScorePercent: 100,
      isHealthy: true,
      isDraining: false,
      isPrimary: false,
    },
    {
      regionId: 'cloud-onprem-dc1',
      provider: 'SOVEREIGN_ONPREM',
      location: 'Equinix DC-1 (Ashburn)',
      trafficWeightPercent: 10,
      healthScorePercent: 100,
      isHealthy: true,
      isDraining: false,
      isPrimary: false,
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 05: FinTech Payment Clearing Engine (fintech-payment-clearing-engine)
// =============================================================================
export const createFintechPaymentClearingSlide = (
  id = `slide-fintech-clearing-${Date.now()}`,
  overrides?: Partial<FintechPaymentClearingSlideData>
): FintechPaymentClearingSlideData => ({
  id,
  type: 'fintech-payment-clearing-engine',
  title: 'Real-Time Payment Clearing & Settlement Engine',
  subtitle: 'ISO 20022 pacs.008 Ingestion, Sub-15ms Neural Fraud Scoring, and Instant Rails',
  kicker: 'FinTech Core Architecture',
  activeStep: 1,
  maxSteps: 4,
  activeTransaction: {
    txnId: 'TXN-8942-FEDNOW-01',
    messageType: 'pacs.008.001.10',
    senderIbanMasked: 'US82-CHAS-****-1492',
    receiverIbanMasked: 'US41-BOFA-****-8821',
    amountUsd: 485000.0,
    currency: 'USD',
    isAuthorized: true,
    isSanctionsCleared: true,
  },
  fraudEngine: {
    riskScoreZeroToOneHundred: 4.2,
    inferenceDurationMs: 9.4,
    modelVersion: 'FraudShield-XGB-v4.8',
    isApprovedByModel: true,
    hasBiometricAuth: true,
  },
  settlementTelemetry: {
    settledTps: 18400,
    dailyVolumeMillionUsd: 1420.5,
    isLedgerImmutabilityVerified: true,
    ledgerImmutabilityVerified: true,
    isRealtimeRailsActive: true,
  },
  clearingStages: [
    {
      stageId: 'stage-ingest',
      name: 'ISO 20022 Syntax & Schema Validation',
      standard: 'pacs.008.001.10',
      latencyTargetMs: 5.0,
      latencyActualMs: 2.1,
      isVerified: true,
      isPassed: true,
      activeRuleSet: 'RULE-ISO-XML-VALIDATOR',
    },
    {
      stageId: 'stage-fraud',
      name: 'Neural Fraud Scoring & Sanctions Check',
      standard: 'OFAC / Real-Time Feature Store',
      latencyTargetMs: 15.0,
      latencyActualMs: 9.4,
      isVerified: true,
      isPassed: true,
      activeRuleSet: 'RULE-ML-INFERENCE-SHIELD',
    },
    {
      stageId: 'stage-ledger',
      name: 'Double-Entry Cryptographic Ledger',
      standard: 'Split-DB Ledger Balance Check',
      latencyTargetMs: 8.0,
      latencyActualMs: 4.8,
      isVerified: true,
      isPassed: true,
      activeRuleSet: 'RULE-LEDGER-IDEMPOTENT-RESERVE',
    },
    {
      stageId: 'stage-settle',
      name: 'FedNow Instant Rails Dispatch',
      standard: 'Federal Reserve RTP Clearing',
      latencyTargetMs: 20.0,
      latencyActualMs: 11.2,
      isVerified: true,
      isPassed: true,
      activeRuleSet: 'RULE-FEDNOW-SETTLEMENT-ACK',
    },
  ],
  ...overrides,
});
