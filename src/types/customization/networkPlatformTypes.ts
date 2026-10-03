import type { BaseSlide } from '../presentation';

// =============================================================================
// 4. Global Anycast Traffic Director (global-anycast-traffic-director) - Archetype 49
// =============================================================================
export interface AnycastRoutingStepItem {
  id: string;
  stepIndex: number;
  stepName: string;
  edgeLocation: string;
  ingressProtocol: string;
  latencyMs: number;
  trafficWeightPercentage: number;
  isStepActive: boolean;
  isStepHealthy: boolean;
  routingFeatures: string[];
}

export interface GlobalAnycastTrafficDirectorSlideData extends BaseSlide {
  type: 'global-anycast-traffic-director';
  routingSteps: AnycastRoutingStepItem[];
  stages?: AnycastRoutingStepItem[];
  edgePopCount: number;
  globalBgpAsn: number;
  peakThroughputTbps: number;
  healthCheckIntervalSec: number;
  isAnycastAnnounced: boolean;
  hasTlsSessionResumed: boolean;
  isOriginShieldActive: boolean;
  hasDynamicFailover: boolean;
}

// =============================================================================
// 5. CQRS Event Sourcing Fabric (cqrs-event-sourcing-fabric) - Archetype 50
// =============================================================================
export interface CqrsStreamStageItem {
  id: string;
  stepIndex: number;
  stageName: string;
  componentRole: string;
  throughputEventsPerSec: number;
  p99LagMilliseconds: number;
  storageEngine: string;
  isStageActive: boolean;
  isStageSynced: boolean;
  consistencyGuarantees: string[];
}

export interface CqrsEventSourcingFabricSlideData extends BaseSlide {
  type: 'cqrs-event-sourcing-fabric';
  streamStages: CqrsStreamStageItem[];
  stages?: CqrsStreamStageItem[];
  aggregateRootName: string;
  totalCommittedEvents: string;
  snapshotFrequency: number;
  replayRateEventsPerSec: number;
  hasOptimisticLock: boolean;
  isEventCommitted: boolean;
  isStreamPartitioned: boolean;
  hasProjectionSynced: boolean;
}

// =============================================================================
// 6. SBOM & SLSA Provenance Attestation (sbom-slsa-provenance-attestation) - Archetype 51
// =============================================================================
export interface SlsaAttestationStepItem {
  id: string;
  stepIndex: number;
  stepName: string;
  attestationLayer: string;
  cryptographicDigest: string;
  verificationAgent: string;
  isStepActive: boolean;
  isStepVerified: boolean;
  securityControls: string[];
}

export interface SbomSlsaProvenanceAttestationSlideData extends BaseSlide {
  type: 'sbom-slsa-provenance-attestation';
  attestationSteps: SlsaAttestationStepItem[];
  stages?: SlsaAttestationStepItem[];
  targetArtifactUri: string;
  builderIdentity: string;
  provenanceStandard: string;
  certificateAuthority: string;
  hasSignedCommit: boolean;
  isHermeticBuild: boolean;
  isSlsaLevel4Compliant: boolean;
  hasAdmissionPassed: boolean;
}
