import type {
  SupplyChainDigitalTwinSlideData,
  VoiceAiConversationalMeshSlideData,
} from '../../types/presentation';

// =============================================================================
// Archetype 12: Supply Chain Digital Twin Lattice (supply-chain-digital-twin-lattice)
// =============================================================================
export const createSupplyChainDigitalTwinSlide = (
  id = `slide-supply-twin-${Date.now()}`,
  overrides?: Partial<SupplyChainDigitalTwinSlideData>
): SupplyChainDigitalTwinSlideData => ({
  id,
  type: 'supply-chain-digital-twin-lattice',
  title: 'Supply Chain Digital Twin Lattice',
  subtitle: 'Real-Time Multimodal Corridors, Chokepoint Anomaly Detection & Autonomous Rerouting',
  kicker: 'Global Autonomous Logistics',
  activeStep: 1,
  maxSteps: 4,
  twinTelemetry: {
    totalActiveShipmentsCount: 42500,
    overallOtifPercentage: 97.4,
    savedDelayDaysAutonomous: 1840,
    isSimulationEngineSynchronized: true,
  },
  co2Optimization: {
    fuelSavingsMetricTons: 14200,
    isGreenLogisticsOptimized: true,
  },
  activeDisruptions: [
    {
      disruptionId: 'disrupt-red-sea',
      chokepointName: 'Bab-el-Mandeb / Red Sea Corridor',
      severity: 'CRITICAL',
      estimatedDelayDays: 11,
      inventoryValueAtRiskMillionUsd: 84.5,
      hasAlternateRouteAvailable: true,
      isContingencyDispatched: true,
    },
  ],
  logisticsCorridors: [
    {
      corridorId: 'corridor-asia-europe-ocean',
      originNode: 'Port of Shanghai (Yangshan)',
      destinationNode: 'Port of Rotterdam (Maasvlakte)',
      transitMode: 'OCEAN',
      averageTransitDays: 28,
      disruptionRiskScorePercent: 12,
      isCorridorOperational: true,
      isReroutingActive: false,
    },
    {
      corridorId: 'corridor-europe-us-air',
      originNode: 'Frankfurt Cargo Hub (FRA)',
      destinationNode: 'Chicago O\'Hare Logistics (ORD)',
      transitMode: 'AIR',
      averageTransitDays: 2,
      disruptionRiskScorePercent: 4,
      isCorridorOperational: true,
      isReroutingActive: false,
    },
    {
      corridorId: 'corridor-singapore-mideast',
      originNode: 'Port of Singapore (PSA)',
      destinationNode: 'Jebel Ali Port Dubai',
      transitMode: 'OCEAN',
      averageTransitDays: 12,
      disruptionRiskScorePercent: 78,
      isCorridorOperational: false,
      isReroutingActive: true,
    },
    {
      corridorId: 'corridor-pacific-transocean',
      originNode: 'Port of Busan (South Korea)',
      destinationNode: 'Port of Long Beach (California)',
      transitMode: 'OCEAN',
      averageTransitDays: 14,
      disruptionRiskScorePercent: 18,
      isCorridorOperational: true,
      isReroutingActive: false,
    },
  ],
  ...overrides,
});

// =============================================================================
// Archetype 13: Voice AI Realtime Conversational Mesh (voice-ai-realtime-conversational-mesh)
// =============================================================================
export const createVoiceAiConversationalMeshSlide = (
  id = `slide-voice-mesh-${Date.now()}`,
  overrides?: Partial<VoiceAiConversationalMeshSlideData>
): VoiceAiConversationalMeshSlideData => ({
  id,
  type: 'voice-ai-realtime-conversational-mesh',
  title: 'Sub-300ms Real-Time Conversational Voice AI Mesh',
  subtitle: 'Full-Duplex Voice Activity Detection, Streaming ASR, Speculative LLM Reasoning and Neural TTS',
  kicker: 'Real-Time Neural Speech',
  activeStep: 1,
  maxSteps: 4,
  activeSession: {
    sessionId: 'sess-voice-9821-opus',
    sampleRateKhz: 48,
    audioCodec: 'OPUS',
    userTranscript: 'Please verify our active multi-cloud disaster recovery quorum status.',
    agentResponseTranscript: 'All three cloud regions are reporting healthy Raft consensus with zero replication lag.',
    isFullDuplexActive: true,
    isBargeInDetected: false,
  },
  turnTakingMetrics: {
    endToEndLatencyMs: 196,
    p99LatencyMs: 242,
    interruptionLatencyMs: 28,
    isTargetSlaAchieved: true,
  },
  acousticModel: {
    voiceId: 'Aura-Executive-Neural-v3',
    naturalnessMosScore: 4.82,
    hasProsodyModeling: true,
  },
  pipelineStages: [
    {
      stageIndex: 1,
      stageName: 'Voice Activity Detection (VAD)',
      modelName: 'Silero VAD v5 / WebRTC Native',
      budgetLatencyMs: 15,
      actualLatencyMs: 8,
      throughputTokensOrAudioPerSec: 48000,
      isWithinBudget: true,
      isStreamingActive: true,
    },
    {
      stageIndex: 2,
      stageName: 'Streaming Speech-to-Text (ASR)',
      modelName: 'Conformer CTC Emformer Fastpath',
      budgetLatencyMs: 75,
      actualLatencyMs: 54,
      throughputTokensOrAudioPerSec: 240,
      isWithinBudget: true,
      isStreamingActive: true,
    },
    {
      stageIndex: 3,
      stageName: 'Speculative Reasoning LLM',
      modelName: 'Gemini 1.5 Flash / Claude 3.5 Haiku',
      budgetLatencyMs: 120,
      actualLatencyMs: 92,
      throughputTokensOrAudioPerSec: 120,
      isWithinBudget: true,
      isStreamingActive: true,
    },
    {
      stageIndex: 4,
      stageName: 'Neural Streaming TTS',
      modelName: 'Flow-Matching Acoustic Synthesizer',
      budgetLatencyMs: 60,
      actualLatencyMs: 42,
      throughputTokensOrAudioPerSec: 48000,
      isWithinBudget: true,
      isStreamingActive: true,
    },
  ],
  ...overrides,
});
