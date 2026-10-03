import type {
  CloudRegionNode,
  StorageReplicationPipeline,
  FailoverTelemetry,
} from '../../../../types/nextGenArchetypes';

export const DEFAULT_REGIONS: CloudRegionNode[] = [
  {
    regionId: 'reg-aws-east',
    provider: 'AWS',
    location: 'us-east-1 (N. Virginia)',
    trafficWeightPercent: 40,
    healthScorePercent: 99.98,
    isHealthy: true,
    isDraining: false,
    isPrimary: true,
  },
  {
    regionId: 'reg-gcp-central',
    provider: 'GCP',
    location: 'us-central1 (Iowa)',
    trafficWeightPercent: 35,
    healthScorePercent: 99.95,
    isHealthy: true,
    isDraining: false,
    isPrimary: false,
  },
  {
    regionId: 'reg-azure-west',
    provider: 'AZURE',
    location: 'westus2 (Washington)',
    trafficWeightPercent: 25,
    healthScorePercent: 99.92,
    isHealthy: true,
    isDraining: false,
    isPrimary: false,
  },
  {
    regionId: 'reg-onprem-dc',
    provider: 'SOVEREIGN_ONPREM',
    location: 'Frankfurt Equinix FR5',
    trafficWeightPercent: 0,
    healthScorePercent: 100.0,
    isHealthy: true,
    isDraining: false,
    isPrimary: false,
  },
];

export const DEFAULT_REPLICATION: StorageReplicationPipeline = {
  replicationLagMs: 8.2,
  syncMode: 'SYNCHRONOUS',
  hasZeroDataLossGuarantee: true,
  isReplicaConsistent: true,
};

export const DEFAULT_FAILOVER: FailoverTelemetry = {
  rtoSecondsTarget: 10,
  rtoSecondsObserved: 4.2,
  rpoSecondsObserved: 0.0,
  isFailoverArmed: true,
  isAutomaticTriggerEnabled: true,
};

export const FAILOVER_PHASES = [
  { index: 0, title: 'Active-Active Ingress', desc: 'Anycast BGP dynamic route shifting' },
  { index: 1, title: 'Storage Replication', desc: 'Sub-10ms cross-cloud transactional log' },
  { index: 2, title: 'Consensus Quorum', desc: 'Raft 5-node cluster split-brain guard' },
  { index: 3, title: 'Autonomous Cutover', desc: 'Automated failover under 10s RTO' },
];
