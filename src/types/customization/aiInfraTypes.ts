import type { BaseSlide } from '../presentation';

// =============================================================================
// 1. Neural Vector Search Topology (neural-vector-search-topology) - Archetype 46
// =============================================================================
export interface VectorSearchPhaseItem {
  id: string;
  stepIndex: number;
  phaseName: string;
  subsystemTitle: string;
  latencyBudgetMs: number;
  recallPercentage: number;
  indexingAlgorithm: string;
  throughputQps: number;
  isPhaseActive: boolean;
  isPhaseCompleted: boolean;
  keyTechniques: string[];
}

export interface NeuralVectorSearchTopologySlideData extends BaseSlide {
  type: 'neural-vector-search-topology';
  searchPhases: VectorSearchPhaseItem[];
  stages?: VectorSearchPhaseItem[];
  embeddingDimension: number;
  distanceMetric: string;
  totalVectorsCount: string;
  p99LatencyMs: number;
  isGpuAccelerated: boolean;
  hasQuantizedVectors: boolean;
  isHnswIndexed: boolean;
  hasCrossEncoderRerank: boolean;
}

// =============================================================================
// 2. Model Quantization & Speculative Decoding (model-quantization-speculative-decoding) - Archetype 47
// =============================================================================
export interface SpeculativeDecodingStageItem {
  id: string;
  stepIndex: number;
  stageName: string;
  modelRole: string;
  batchSize: number;
  acceptanceRatePercentage: number;
  speedupFactor: number;
  isStageActive: boolean;
  isStageCompleted: boolean;
  optimizationTechniques: string[];
}

export interface ModelQuantizationSpeculativeDecodingSlideData extends BaseSlide {
  type: 'model-quantization-speculative-decoding';
  decodingStages: SpeculativeDecodingStageItem[];
  stages?: SpeculativeDecodingStageItem[];
  targetModelName: string;
  draftModelName: string;
  quantizationPrecision: string;
  tokensPerSecond: number;
  isAwqQuantized: boolean;
  hasSpeculativeEngine: boolean;
  isKvCachePaged: boolean;
  hasZeroPerplexityLoss: boolean;
}

// =============================================================================
// 3. LLM Firewall Red Team Matrix (llm-firewall-red-team-matrix) - Archetype 48
// =============================================================================
export interface FirewallGuardrailGateItem {
  id: string;
  stepIndex: number;
  gateName: string;
  inspectionDomain: string;
  latencyBudgetMs: number;
  blockRatePercentage: number;
  mitigationAction: string;
  isGateActive: boolean;
  isGatePassed: boolean;
  detectionRules: string[];
}

export interface LlmFirewallRedTeamMatrixSlideData extends BaseSlide {
  type: 'llm-firewall-red-team-matrix';
  guardrailGates: FirewallGuardrailGateItem[];
  stages?: FirewallGuardrailGateItem[];
  adversarialSimulationsCount: number;
  defenseAccuracyRate: number;
  complianceFramework: string;
  hasPiiSanitized: boolean;
  isJailbreakBlocked: boolean;
  isPolicyCompliant: boolean;
  hasAuditSignature: boolean;
}
