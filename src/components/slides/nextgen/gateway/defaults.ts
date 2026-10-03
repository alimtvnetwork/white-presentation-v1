import type {
  RateLimitTierConfig,
  RedisMeshSyncStatus,
  GatewayTrafficTelemetry,
} from '../../../../types/nextGenArchetypes';

export const DEFAULT_TIERS: RateLimitTierConfig[] = [
  {
    tierId: 'tier-free',
    tierName: 'FREE',
    tokenCapacity: 100,
    refillRatePerSec: 10,
    burstAllowance: 15,
    activeClientsCount: 4200,
    isTierActive: true,
    isPriorityQueueEnabled: false,
  },
  {
    tierId: 'tier-pro',
    tierName: 'PRO',
    tokenCapacity: 1000,
    refillRatePerSec: 100,
    burstAllowance: 250,
    activeClientsCount: 850,
    isTierActive: true,
    isPriorityQueueEnabled: true,
  },
  {
    tierId: 'tier-ent',
    tierName: 'ENTERPRISE',
    tokenCapacity: 10000,
    refillRatePerSec: 1000,
    burstAllowance: 2500,
    activeClientsCount: 140,
    isTierActive: true,
    isPriorityQueueEnabled: true,
  },
  {
    tierId: 'tier-mesh',
    tierName: 'INTERNAL_MESH',
    tokenCapacity: 50000,
    refillRatePerSec: 5000,
    burstAllowance: 10000,
    activeClientsCount: 32,
    isTierActive: true,
    isPriorityQueueEnabled: true,
  },
];

export const DEFAULT_REDIS: RedisMeshSyncStatus = {
  clusterNodesCount: 12,
  p99SyncLatencyMs: 0.42,
  isClusterHealthy: true,
  hasConsistentHashing: true,
};

export const DEFAULT_TELEMETRY: GatewayTrafficTelemetry = {
  totalRequestsPerSecond: 48500,
  allowedRequestsPerSecond: 48320,
  throttled429PerSecond: 180,
  cacheHitRatePercent: 94.6,
  isDegradationActive: false,
};

export const GATEWAY_PHASES = [
  { index: 0, title: 'Edge Token Ingress', desc: 'Leaky bucket & burst governor' },
  { index: 1, title: 'Multi-Tier Policies', desc: 'Free, Pro, Enterprise & Mesh quotas' },
  { index: 2, title: 'Redis Cluster Sync', desc: 'Sub-millisecond global key coordination' },
  { index: 3, title: 'Circuit Breaker Guard', desc: 'Resilience trip & automated recovery' },
];
