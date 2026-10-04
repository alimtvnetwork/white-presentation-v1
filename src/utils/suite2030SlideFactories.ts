// lint-allow: file-size reason="Suite 2030 enterprise slide mock data factories" max=600
import type { SlideData } from '../types/presentation';
import type { ArchetypeOption } from './extendedSlideFactories';
import type {
  NeuromorphicSpikingNeuralMeshSlideData,
  QuantumAnnealingPortfolioOptimizerSlideData,
  AutonomousSyntheticDataFoundrySlideData,
  ZeroKnowledgeRollupProverClusterSlideData,
  PhotonicInterconnectOpticalMeshSlideData,
  DecentralizedOracleConsensusSpineSlideData,
  EbpfCloudNativeDdosShieldSlideData,
  EnterpriseRagGraphHybridTraversalSlideData,
  ContinuousAiAgentEvalHarnessSlideData,
  HyperscaleDatacenterLiquidCoolingTelemetrySlideData,
  GlobalSovereignAiComputeReserveGridSlideData,
  PostQuantumPkiCertificateHierarchyRadarSlideData,
  ZeroTrustCloudWorkloadEntitlementGraphSlideData,
  FrontierMultimodalAlignmentMatrixSlideData,
  EnterpriseSaasEfficiencyRuleOf40QuadrantSlideData,
  Suite2030SlideData,
  Suite2030SlideType,
} from '../types/suite2030Archetypes';

// 1. Neuromorphic Spiking Neural Mesh Factory (Kinetic 4-Step)
export const createNeuromorphicSpikingNeuralMeshSlide = (id = `slide-${Date.now()}`): NeuromorphicSpikingNeuralMeshSlideData => ({
  id,
  type: 'neuromorphic-spiking-neural-mesh',
  title: 'Neuromorphic Spiking Neural Mesh',
  subtitle: 'Event-driven bio-plausible asynchronous spiking silicon with sub-picojoule synaptic plasticity',
  kicker: 'AI INFRASTRUCTURE & NEUROMORPHIC',
  meshIdentifier: 'synapse-truenorth-mesh-v4',
  firingFrequencyKhz: 42.8,
  totalNeuronCount: 1048576,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 4,
  isPlasticityEnabled: true,
  hasEventDrivenClocking: true,
  hasSubPicojouleEfficiency: true,
  hasTelemetryGlow: true,
  spikingStages: [
    { stepIndex: 0, stageName: 'Membrane Potential Integration', stageSubtitle: 'Dendritic current summation reaches action potential threshold', synapticEventCount: 428000, energyJoulesPerSpikePj: 0.85, isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Refractory Spike Generation', stageSubtitle: 'All-or-none axonal spike emitted across routing crossbar', synapticEventCount: 512000, energyJoulesPerSpikePj: 0.92, isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'STDP Synaptic Weight Update', stageSubtitle: 'Spike-timing-dependent plasticity reinforces causal connections', synapticEventCount: 684000, energyJoulesPerSpikePj: 0.78, isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Asynchronous Wavefront Readout', stageSubtitle: 'Spatio-temporal output pattern decoded into low-latency inference', synapticEventCount: 890000, energyJoulesPerSpikePj: 0.65, isActive: false, isCompleted: false },
  ],
  synapseNodes: [
    { id: 'syn-01', layerName: 'Sensory Cortex', membranePotentialMv: -52.4, thresholdPotentialMv: -50.0, synapticWeight: 0.88, isSpikeFired: true, hasPlasticityReinforced: true },
    { id: 'syn-02', layerName: 'Associative Interneuron', membranePotentialMv: -58.1, thresholdPotentialMv: -50.0, synapticWeight: 0.72, isSpikeFired: false, hasPlasticityReinforced: true },
    { id: 'syn-03', layerName: 'Recurrent Crossbar', membranePotentialMv: -49.6, thresholdPotentialMv: -50.0, synapticWeight: 0.94, isSpikeFired: true, hasPlasticityReinforced: true },
    { id: 'syn-04', layerName: 'Motor Command Output', membranePotentialMv: -62.3, thresholdPotentialMv: -50.0, synapticWeight: 0.45, isSpikeFired: false, hasPlasticityReinforced: false },
  ],
});

// 2. Quantum Annealing Portfolio Optimizer Factory (Kinetic 4-Step)
export const createQuantumAnnealingPortfolioOptimizerSlide = (id = `slide-${Date.now()}`): QuantumAnnealingPortfolioOptimizerSlideData => ({
  id,
  type: 'quantum-annealing-portfolio-optimizer',
  title: 'Quantum Annealing Portfolio Optimizer',
  subtitle: 'QUBO Ising spin-glass Hamiltonian ground state convergence for multi-asset risk optimization',
  kicker: 'QUANTUM COMPUTING & RISK ARBITRAGE',
  annealerIdentifier: 'dwave-advantage-qpu-5000q',
  totalQubitsCount: 5640,
  annealDurationMicroseconds: 20.0,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 4,
  isGroundStateFound: true,
  hasTunnelingEnabled: true,
  hasTransverseFieldActive: true,
  hasTelemetryGlow: true,
  annealingStages: [
    { stepIndex: 0, stageName: 'Transverse Field Initialization', stageSubtitle: 'Uniform superposition state established across all flux qubits', hamiltonianEnergyEv: -12.4, tunnelingProbabilityPercentage: 99.8, isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Quantum Fluctuations Modulation', stageSubtitle: 'Slow reduction of transverse magnetic field induces quantum tunneling', hamiltonianEnergyEv: -48.6, tunnelingProbabilityPercentage: 74.2, isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Ising Spin-Glass Coupling', stageSubtitle: 'Problem Hamiltonian inter-qubit couplers drive state into global minimum', hamiltonianEnergyEv: -94.2, tunnelingProbabilityPercentage: 32.5, isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Ground State Readout & Commit', stageSubtitle: 'Classical spin configuration mapped to optimal asset allocation weights', hamiltonianEnergyEv: -128.9, tunnelingProbabilityPercentage: 2.1, isActive: false, isCompleted: false },
  ],
  qubitRegisters: [
    { id: 'qubit-01', assetTicker: 'NVDA-VOL', spinOrientation: 'Spin-Up', couplingStrengthJ: 1.45, isCoherencePreserved: true, hasTunnelingOccurred: true },
    { id: 'qubit-02', assetTicker: 'TSMC-EQUITY', spinOrientation: 'Spin-Down', couplingStrengthJ: -0.92, isCoherencePreserved: true, hasTunnelingOccurred: true },
    { id: 'qubit-03', assetTicker: 'US10Y-RATES', spinOrientation: 'Spin-Up', couplingStrengthJ: 2.10, isCoherencePreserved: true, hasTunnelingOccurred: false },
    { id: 'qubit-04', assetTicker: 'BTC-CORR', spinOrientation: 'Spin-Down', couplingStrengthJ: -1.34, isCoherencePreserved: true, hasTunnelingOccurred: true },
  ],
});

// 3. Autonomous Synthetic Data Foundry Factory (Kinetic 4-Step)
export const createAutonomousSyntheticDataFoundrySlide = (id = `slide-${Date.now()}`): AutonomousSyntheticDataFoundrySlideData => ({
  id,
  type: 'autonomous-synthetic-data-foundry',
  title: 'Autonomous Synthetic Data Foundry',
  subtitle: 'Conditional generative diffusion synthesis, differential privacy epsilon-guarantees, and automated fidelity validation',
  kicker: 'GENERATIVE AI & DATA PRIVACY',
  foundryIdentifier: 'foundry-tabular-diffuse-v3',
  synthesizedRecordsVolumeMillion: 450.0,
  epsilonPrivacyBudget: 0.75,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 4,
  isPrivacyBudgetPreserved: true,
  hasFidelityValidated: true,
  hasDriftCorrected: true,
  hasTelemetryGlow: true,
  foundryStages: [
    { stepIndex: 0, stageName: 'Marginal Distribution Ingestion', stageSubtitle: 'Raw telemetry distributions ingested and anonymized in secure enclave', fidelityScorePercentage: 92.4, privacyLeakageRiskScore: 0.02, isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Conditional Diffusion Generation', stageSubtitle: 'Score-based generative model samples synthetic continuous distributions', fidelityScorePercentage: 95.8, privacyLeakageRiskScore: 0.04, isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Differential Privacy Laplace Perturbation', stageSubtitle: 'Calibrated noise injected to guarantee strict mathematical epsilon privacy', fidelityScorePercentage: 94.2, privacyLeakageRiskScore: 0.01, isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Wasserstein Distance Verification', stageSubtitle: 'Optimal transport metrics verify statistical divergence stays within bounds', fidelityScorePercentage: 97.6, privacyLeakageRiskScore: 0.005, isActive: false, isCompleted: false },
  ],
  curationTensors: [
    { id: 'tensor-01', datasetDomain: 'Electronic Health Records', correlationRetentionPercentage: 98.4, wassersteinDistance: 0.014, isCompliantWithHipaa: true, hasDifferentialPrivacy: true },
    { id: 'tensor-02', datasetDomain: 'Card Fraud Telemetry', correlationRetentionPercentage: 97.2, wassersteinDistance: 0.022, isCompliantWithHipaa: true, hasDifferentialPrivacy: true },
    { id: 'tensor-03', datasetDomain: 'High-Frequency Order Book', correlationRetentionPercentage: 96.5, wassersteinDistance: 0.031, isCompliantWithHipaa: true, hasDifferentialPrivacy: true },
    { id: 'tensor-04', datasetDomain: 'Autonomous Driving Radar', correlationRetentionPercentage: 99.1, wassersteinDistance: 0.008, isCompliantWithHipaa: true, hasDifferentialPrivacy: true },
  ],
});

// 4. Zero-Knowledge Rollup Prover Cluster Factory (Kinetic 4-Step)
export const createZeroKnowledgeRollupProverClusterSlide = (id = `slide-${Date.now()}`): ZeroKnowledgeRollupProverClusterSlideData => ({
  id,
  type: 'zero-knowledge-rollup-prover-cluster',
  title: 'Zero-Knowledge Rollup Prover Cluster',
  subtitle: 'Recursive STARK-to-SNARK proof composition, FPGA acceleration, and instant L1 cryptographic settlement',
  kicker: 'CRYPTOGRAPHY & SCALING NETWORKS',
  proverIdentifier: 'zk-prover-titanium-cluster',
  activeBatchTransactionsCount: 125000,
  gasCostReductionFactor: 84.0,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 4,
  isProofVerified: true,
  hasFpgaAcceleration: true,
  hasRecursiveComposition: true,
  hasTelemetryGlow: true,
  proverStages: [
    { stepIndex: 0, stageName: 'Witness Generation & Trace Synthesis', stageSubtitle: 'Execution trace tables constructed from transaction bytecode batches', provingDurationSeconds: 14.2, recursiveProofDepth: 1, isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'FPGA Hardware NTT / MSM Acceleration', stageSubtitle: 'Number theoretic transform and multi-scalar multiplication offloaded to FPGA', provingDurationSeconds: 8.6, recursiveProofDepth: 2, isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Recursive STARK Proof Aggregation', stageSubtitle: 'Multiple execution traces folded into a single succinct proof of proofs', provingDurationSeconds: 4.1, recursiveProofDepth: 4, isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'L1 Ethereum Smart Contract Verification', stageSubtitle: 'Final 256-byte Groth16 proof verified on-chain in 220,000 gas', provingDurationSeconds: 0.9, recursiveProofDepth: 5, isActive: false, isCompleted: false },
  ],
  rollupBatches: [
    { id: 'batch-8841', transactionCount: 32000, rollupStateRoot: '0x7f4e8b9...c12', proofGenerationStatus: 'Verified', isSettledOnL1: true, hasRecursiveProof: true },
    { id: 'batch-8842', transactionCount: 31500, rollupStateRoot: '0x2a9d1c4...e88', proofGenerationStatus: 'Verified', isSettledOnL1: true, hasRecursiveProof: true },
    { id: 'batch-8843', transactionCount: 31000, rollupStateRoot: '0x99e4b7a...3d1', proofGenerationStatus: 'In-Flight', isSettledOnL1: false, hasRecursiveProof: true },
    { id: 'batch-8844', transactionCount: 30500, rollupStateRoot: '0x43c8d19...f72', proofGenerationStatus: 'Queued', isSettledOnL1: false, hasRecursiveProof: false },
  ],
});

// 5. Photonic Interconnect Optical Mesh Factory (Kinetic 4-Step)
export const createPhotonicInterconnectOpticalMeshSlide = (id = `slide-${Date.now()}`): PhotonicInterconnectOpticalMeshSlideData => ({
  id,
  type: 'photonic-interconnect-optical-mesh',
  title: 'Photonic Interconnect Optical Mesh',
  subtitle: 'Co-packaged optics (CPO), DWDM optical circuit switching, and sub-picosecond GPU-to-GPU memory fabric',
  kicker: 'HARDWARE & OPTICAL ARCHITECTURE',
  meshIdentifier: 'cpo-photonic-crossbar-x16',
  aggregateBandwidthTbps: 819.2,
  energyPerBitPj: 1.4,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 4,
  isLaserLockEstablished: true,
  hasThermalWavelengthTuning: true,
  hasSubPicosecondLatency: true,
  hasTelemetryGlow: true,
  opticalStages: [
    { stepIndex: 0, stageName: 'Silicon Mach-Zehnder Modulation', stageSubtitle: 'Electrical GPU memory signals converted to multi-wavelength laser pulses', channelLatencyPicoseconds: 420, signalToNoiseRatioDb: 34.2, isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Dense Wavelength Multiplexing (DWDM)', stageSubtitle: '64 discrete laser carrier frequencies coupled into single-mode optical fiber', channelLatencyPicoseconds: 680, signalToNoiseRatioDb: 32.8, isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Micro-Ring Resonator Optical Switching', stageSubtitle: 'Zero-loss thermo-optic phase shifters reconfigure fabric topology in real time', channelLatencyPicoseconds: 890, signalToNoiseRatioDb: 31.5, isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Germanium Photodiode Demodulation', stageSubtitle: 'Optical pulses converted back into native NVLink electrical signals on target GPU', channelLatencyPicoseconds: 350, signalToNoiseRatioDb: 35.1, isActive: false, isCompleted: false },
  ],
  waveChannels: [
    { id: 'wave-1310nm', wavelengthNanometers: 1310.2, channelBandwidthGbps: 800, bitErrorRate: 1e-15, isChannelLocked: true, hasLowAttenuation: true },
    { id: 'wave-1312nm', wavelengthNanometers: 1312.4, channelBandwidthGbps: 800, bitErrorRate: 1e-15, isChannelLocked: true, hasLowAttenuation: true },
    { id: 'wave-1314nm', wavelengthNanometers: 1314.6, channelBandwidthGbps: 800, bitErrorRate: 2e-15, isChannelLocked: true, hasLowAttenuation: true },
    { id: 'wave-1316nm', wavelengthNanometers: 1316.8, channelBandwidthGbps: 800, bitErrorRate: 1e-15, isChannelLocked: true, hasLowAttenuation: true },
  ],
});

// 6. Decentralized Oracle Consensus Spine Factory (Kinetic 4-Step)
export const createDecentralizedOracleConsensusSpineSlide = (id = `slide-${Date.now()}`): DecentralizedOracleConsensusSpineSlideData => ({
  id,
  type: 'decentralized-oracle-consensus-spine',
  title: 'Decentralized Oracle Consensus Spine',
  subtitle: 'Medianized outlier filtering, BLS threshold signature aggregation, and verifiable cryptographic data feeds',
  kicker: 'DECENTRALIZED ORACLES & DATA TRUTH',
  oracleSpineIdentifier: 'oracle-consensus-spine-v4',
  medianHeartbeatIntervalSeconds: 1.0,
  quorumNodesCount: 31,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 4,
  isQuorumConfirmed: true,
  hasMedianOutlierRejection: true,
  hasBlsThresholdSignature: true,
  hasTelemetryGlow: true,
  oracleStages: [
    { stepIndex: 0, stageName: 'Independent Source Data Ingestion', stageSubtitle: '31 geographically distributed nodes fetch off-chain WebSocket feeds', reportedValueMedian: 64280.5, deviationTolerancePercentage: 0.12, isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Interquartile Outlier Truncation', stageSubtitle: 'Top and bottom 15% deviant observations discarded via deterministic medianizer', reportedValueMedian: 64282.1, deviationTolerancePercentage: 0.08, isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'BLS12-381 Threshold Signature Aggregation', stageSubtitle: 'Nodes contribute partial cryptographic signatures to form single verifiable proof', reportedValueMedian: 64282.0, deviationTolerancePercentage: 0.05, isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'On-Chain Oracle Spine Finality Commit', stageSubtitle: 'Signed price payload atomically committed to consumer smart contracts', reportedValueMedian: 64282.0, deviationTolerancePercentage: 0.02, isActive: false, isCompleted: false },
  ],
  feedNodes: [
    { id: 'node-us-east', regionName: 'US-East (N. Virginia)', latencyMs: 14.2, reputationScorePercentage: 99.8, isOnline: true, hasSubmittedSignature: true },
    { id: 'node-eu-west', regionName: 'EU-West (Frankfurt)', latencyMs: 22.8, reputationScorePercentage: 99.4, isOnline: true, hasSubmittedSignature: true },
    { id: 'node-ap-east', regionName: 'AP-East (Tokyo)', latencyMs: 48.5, reputationScorePercentage: 98.9, isOnline: true, hasSubmittedSignature: true },
    { id: 'node-sa-east', regionName: 'SA-East (São Paulo)', latencyMs: 62.1, reputationScorePercentage: 97.5, isOnline: true, hasSubmittedSignature: true },
  ],
});

// 7. eBPF Cloud-Native DDoS Shield Factory (Kinetic 4-Step)
export const createEbpfCloudNativeDdosShieldSlide = (id = `slide-${Date.now()}`): EbpfCloudNativeDdosShieldSlideData => ({
  id,
  type: 'ebpf-cloud-native-ddos-shield',
  title: 'eBPF Cloud-Native DDoS Shield',
  subtitle: 'XDP kernel driver packet dropping, token bucket rate-limiting, and automated zero-RTT attack mitigation',
  kicker: 'CYBERSECURITY & KERNEL NETWORKING',
  shieldIdentifier: 'xdp-ddos-sentinel-core',
  mitigatedAttackThroughputGbps: 1840.0,
  subMicrosecondDropLatencyUs: 0.42,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 4,
  isUnderAttackMitigated: true,
  hasXdpDriverActive: true,
  hasHardwareOffloadEnabled: true,
  hasTelemetryGlow: true,
  mitigationStages: [
    { stepIndex: 0, stageName: 'NIC Driver XDP Hook Ingestion', stageSubtitle: 'Incoming raw packets intercepted at network card driver before OS memory allocation', packetsDroppedPerSecondMillion: 2.4, memoryFootprintMegabytes: 4.8, isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'eBPF Map Token Bucket Filtering', stageSubtitle: 'Per-IP sliding window rate limiting executed in lockless BPF hash maps', packetsDroppedPerSecondMillion: 18.6, memoryFootprintMegabytes: 8.2, isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'SYN Cookie & Amplification Drop', stageSubtitle: 'Stateless SYN validation drops volumetric spoofed UDP/NTP amplification floods', packetsDroppedPerSecondMillion: 42.1, memoryFootprintMegabytes: 12.0, isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Clean Traffic Kernel Ring-Buffer Pass', stageSubtitle: 'Legitimate customer requests forwarded directly to socket layer with zero jitter', packetsDroppedPerSecondMillion: 0.1, memoryFootprintMegabytes: 6.4, isActive: false, isCompleted: false },
  ],
  filterRules: [
    { id: 'rule-syn-flood', attackVectorType: 'TCP SYN Flood', droppedPacketsPerSec: '42.5M pps', mitigationAction: 'XDP_DROP', isRuleActive: true, hasHardwareOffload: true },
    { id: 'rule-udp-amp', attackVectorType: 'DNS Amplification', droppedPacketsPerSec: '28.1M pps', mitigationAction: 'XDP_DROP', isRuleActive: true, hasHardwareOffload: true },
    { id: 'rule-http-slowloris', attackVectorType: 'Slowloris HTTP Exhaustion', droppedPacketsPerSec: '4.2M pps', mitigationAction: 'XDP_ABORTED', isRuleActive: true, hasHardwareOffload: false },
    { id: 'rule-icmp-smurf', attackVectorType: 'ICMP Smurf Broadcast', droppedPacketsPerSec: '12.8M pps', mitigationAction: 'XDP_DROP', isRuleActive: true, hasHardwareOffload: true },
  ],
});

// 8. Enterprise RAG Graph Hybrid Traversal Factory (Kinetic 4-Step)
export const createEnterpriseRagGraphHybridTraversalSlide = (id = `slide-${Date.now()}`): EnterpriseRagGraphHybridTraversalSlideData => ({
  id,
  type: 'enterprise-rag-graph-hybrid-traversal',
  title: 'Enterprise RAG Graph Hybrid Traversal',
  subtitle: 'Unified property graph entity traversal, dense vector cosine search, and reciprocal rank fusion',
  kicker: 'GENERATIVE AI & KNOWLEDGE GRAPHS',
  graphIdentifier: 'enterprise-knowledge-graph-v3',
  totalEntitiesCount: 8400000,
  retrievalAccuracyPercentage: 96.8,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 4,
  isReciprocalRankFused: true,
  hasDenseVectorSearch: true,
  hasEntityTraversalActive: true,
  hasTelemetryGlow: true,
  traversalStages: [
    { stepIndex: 0, stageName: 'Dense Bi-Encoder Embedding Lookup', stageSubtitle: 'Semantic query mapped into 1536-dimensional space and matched against HNSW index', entityMatchConfidencePercentage: 88.4, queryLatencyMs: 8.2, isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Multi-Hop Knowledge Graph Traversal', stageSubtitle: 'Breadth-first search traverses relational edges between entities and policies', entityMatchConfidencePercentage: 94.2, queryLatencyMs: 14.5, isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Reciprocal Rank Fusion (RRF)', stageSubtitle: 'Sparse BM25, dense vector, and graph ranking scores combined deterministically', entityMatchConfidencePercentage: 97.6, queryLatencyMs: 3.1, isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Cross-Encoder Contextual Re-Ranking', stageSubtitle: 'Deep attention re-ranker eliminates hallucinations and yields verified context prompt', entityMatchConfidencePercentage: 99.2, queryLatencyMs: 18.0, isActive: false, isCompleted: false },
  ],
  graphTriplets: [
    { id: 'triplet-01', subjectEntity: 'Alim Ul Karim', relationPredicate: 'LEADS_AS_CHIEF_SOFTWARE_ENGINEER', objectEntity: 'White Presentation System', confidenceWeight: 0.99, isVerifiedTruth: true, hasCrossEncoderSupport: true },
    { id: 'triplet-02', subjectEntity: 'Suite 2030', relationPredicate: 'IMPLEMENTS_ARCHITECTURE_SPEC', objectEntity: 'Chapter 48 Kinetic Expansion', confidenceWeight: 0.98, isVerifiedTruth: true, hasCrossEncoderSupport: true },
    { id: 'triplet-03', subjectEntity: 'Theme 30', relationPredicate: 'EXPANDS_CANONICAL_PALETTES', objectEntity: 'Global Hyper Titanium', confidenceWeight: 0.96, isVerifiedTruth: true, hasCrossEncoderSupport: true },
    { id: 'triplet-04', subjectEntity: 'Theme 31', relationPredicate: 'EXPANDS_CANONICAL_PALETTES', objectEntity: 'Cyber Quantum Amethyst', confidenceWeight: 0.97, isVerifiedTruth: true, hasCrossEncoderSupport: true },
  ],
});

// 9. Continuous AI Agent Eval Harness Factory (Kinetic 4-Step)
export const createContinuousAiAgentEvalHarnessSlide = (id = `slide-${Date.now()}`): ContinuousAiAgentEvalHarnessSlideData => ({
  id,
  type: 'continuous-ai-agent-eval-harness',
  title: 'Continuous AI Agent Eval Harness',
  subtitle: 'Automated adversarial red-teaming, prompt injection fuzzing, and deterministic regression scorecards',
  kicker: 'AI SAFETY & MODEL GOVERNANCE',
  harnessIdentifier: 'eval-harness-sentinel-v2',
  totalEvaluatedPromptsCount: 50000,
  overallSafetyPassPercentage: 98.9,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 4,
  isSafetyGatePassed: true,
  hasAdversarialFuzzingActive: true,
  hasZeroRegressionConfirmed: true,
  hasTelemetryGlow: true,
  evalStages: [
    { stepIndex: 0, stageName: 'Semantic Perturbation Fuzzing', stageSubtitle: 'Adversarial generator mutates benign prompts into multi-turn jailbreak probes', attackDefenseSuccessPercentage: 96.4, evaluationDurationMinutes: 12.5, isActive: true, isCompleted: false },
    { stepIndex: 1, stageName: 'Hallucination Ground-Truth Auditing', stageSubtitle: 'Deterministic citation verifier flags ungrounded factual assertions', attackDefenseSuccessPercentage: 98.1, evaluationDurationMinutes: 18.0, isActive: false, isCompleted: false },
    { stepIndex: 2, stageName: 'Autonomous Tool-Use Security Sandbox', stageSubtitle: 'Containerized agent tool calls validated against strict RBAC execution policies', attackDefenseSuccessPercentage: 99.4, evaluationDurationMinutes: 8.2, isActive: false, isCompleted: false },
    { stepIndex: 3, stageName: 'Production Deployment Gate Sign-Off', stageSubtitle: 'Automated cryptographic attestation stamps release manifest into CI/CD pipeline', attackDefenseSuccessPercentage: 100.0, evaluationDurationMinutes: 2.1, isActive: false, isCompleted: false },
  ],
  probeSuites: [
    { id: 'probe-jailbreak', vulnerabilityCategory: 'Prompt Injection / Jailbreak', totalProbesCount: 15000, passedProbesCount: 14920, isCompliancePassed: true, hasCriticalFindings: false },
    { id: 'probe-pii-leak', vulnerabilityCategory: 'Data Privacy / PII Extraction', totalProbesCount: 12000, passedProbesCount: 11985, isCompliancePassed: true, hasCriticalFindings: false },
    { id: 'probe-tool-abuse', vulnerabilityCategory: 'Tool Escalation & Privilege SSRF', totalProbesCount: 13000, passedProbesCount: 12950, isCompliancePassed: true, hasCriticalFindings: false },
    { id: 'probe-hallucination', vulnerabilityCategory: 'Factuality & Citation Grounding', totalProbesCount: 10000, passedProbesCount: 9850, isCompliancePassed: true, hasCriticalFindings: false },
  ],
});

// 10. Hyperscale Datacenter Liquid Cooling Telemetry Factory (Flat Sovereign 1-Step)
export const createHyperscaleDatacenterLiquidCoolingTelemetrySlide = (id = `slide-${Date.now()}`): HyperscaleDatacenterLiquidCoolingTelemetrySlideData => ({
  id,
  type: 'hyperscale-datacenter-liquid-cooling-telemetry',
  title: 'Hyperscale Datacenter Liquid Cooling Telemetry',
  subtitle: 'Direct-to-chip microfluidic cold plates, two-phase immersion tanks, and real-time PUE optimization',
  kicker: 'INFRASTRUCTURE & THERMAL MANAGEMENT',
  datacenterFacilityId: 'facility-nordic-prime-dc4',
  powerUsageEffectiveness: 1.08,
  totalImmersionCapacityMw: 48.0,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  isPueOptimized: true,
  hasImmersionActive: true,
  hasZeroThermalThrottling: true,
  hasTelemetryGlow: true,
  coolingLoops: [
    { id: 'loop-rack-a1', loopName: 'Primary Direct-to-Chip Coldplate Loop', inletTemperatureCelsius: 24.2, outletTemperatureCelsius: 48.6, flowRateLitersPerMin: 180.5, heatDissipatedKw: 1250, isWithinOperationalLimits: true, hasAlarmTripped: false },
    { id: 'loop-tank-b4', loopName: 'Two-Phase Immersion Tank B4 (H100 Racks)', inletTemperatureCelsius: 32.0, outletTemperatureCelsius: 58.2, flowRateLitersPerMin: 220.0, heatDissipatedKw: 1680, isWithinOperationalLimits: true, hasAlarmTripped: false },
    { id: 'loop-evap-c2', loopName: 'District Heating Heat Recovery Exchanger', inletTemperatureCelsius: 45.0, outletTemperatureCelsius: 64.8, flowRateLitersPerMin: 340.0, heatDissipatedKw: 2400, isWithinOperationalLimits: true, hasAlarmTripped: false },
    { id: 'loop-chiller-d1', loopName: 'Dry Cooler Free-Air Evaporative Radiator', inletTemperatureCelsius: 18.5, outletTemperatureCelsius: 22.1, flowRateLitersPerMin: 450.0, heatDissipatedKw: 950, isWithinOperationalLimits: true, hasAlarmTripped: false },
  ],
});

// 11. Global Sovereign AI Compute Reserve Grid Factory (Flat Sovereign 1-Step)
export const createGlobalSovereignAiComputeReserveGridSlide = (id = `slide-${Date.now()}`): GlobalSovereignAiComputeReserveGridSlideData => ({
  id,
  type: 'global-sovereign-ai-compute-reserve-grid',
  title: 'Global Sovereign AI Compute Reserve Grid',
  subtitle: 'Jurisdictional GPU reserve capacity, clean energy allocation, and export compliance radar',
  kicker: 'STRATEGY & GLOBAL GOVERNANCE',
  gridNetworkIdentifier: 'sovereign-compute-reserve-grid',
  totalAggregatedExaflops: 28.4,
  renewableEnergyPercentage: 94.2,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  isComplianceVerified: true,
  hasZeroCarbonPledge: true,
  hasAirGappedPartitioning: true,
  hasTelemetryGlow: true,
  computeClusters: [
    { id: 'grid-nordic', sovereignJurisdiction: 'European Union (Nordic)', activeGpuCount: 32768, powerCapacityMw: 42.0, dataSovereigntyStandard: 'EU AI Act Tier 4', isExportCompliant: true, hasCleanEnergyPowered: true },
    { id: 'grid-japan', sovereignJurisdiction: 'Japan (Tokyo / Osaka)', activeGpuCount: 16384, powerCapacityMw: 24.5, dataSovereigntyStandard: 'METI Sovereign AI v2', isExportCompliant: true, hasCleanEnergyPowered: true },
    { id: 'grid-uae', sovereignJurisdiction: 'United Arab Emirates (Abu Dhabi)', activeGpuCount: 24576, powerCapacityMw: 36.0, dataSovereigntyStandard: 'G42 Sovereign Framework', isExportCompliant: true, hasCleanEnergyPowered: true },
    { id: 'grid-us-east', sovereignJurisdiction: 'United States (Virginia)', activeGpuCount: 65536, powerCapacityMw: 88.0, dataSovereigntyStandard: 'NIST AI RMF 1.0', isExportCompliant: true, hasCleanEnergyPowered: false },
  ],
});

// 12. Post-Quantum PKI Certificate Hierarchy Radar Factory (Flat Sovereign 1-Step)
export const createPostQuantumPkiCertificateHierarchyRadarSlide = (id = `slide-${Date.now()}`): PostQuantumPkiCertificateHierarchyRadarSlideData => ({
  id,
  type: 'post-quantum-pki-certificate-hierarchy-radar',
  title: 'Post-Quantum PKI Certificate Hierarchy Radar',
  subtitle: 'Hybrid classical-quantum certificate authority hierarchy, FIPS 204 ML-DSA rollout, and HSM key lifecycle',
  kicker: 'CYBERSECURITY & QUANTUM DEFENSE',
  caIdentifier: 'global-pqc-root-authority-g1',
  issuedCertificatesCount: 485000,
  mlDsaAdoptionPercentage: 86.4,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  isDualRootActive: true,
  hasFips204Validated: true,
  hasHsmProtection: true,
  hasTelemetryGlow: true,
  certificateTiers: [
    { id: 'tier-root', tierName: 'Root Certificate Authority (Offline)', signatureAlgorithm: 'ML-DSA-87 (FIPS 204)', validityPeriodYears: 25, activeCertificatesCount: 8, isAirGapped: true, hasHsmHardwareStorage: true },
    { id: 'tier-issuing-ica', tierName: 'Policy Issuing Intermediate CA', signatureAlgorithm: 'Hybrid RSA-4096 + ML-DSA-87', validityPeriodYears: 10, activeCertificatesCount: 64, isAirGapped: false, hasHsmHardwareStorage: true },
    { id: 'tier-tls-endpoint', tierName: 'Public TLS & Web Endpoints', signatureAlgorithm: 'ML-DSA-65 (FIPS 204)', validityPeriodYears: 1, activeCertificatesCount: 384000, isAirGapped: false, hasHsmHardwareStorage: false },
    { id: 'tier-code-sign', tierName: 'Automated Firmware & Binary Signer', signatureAlgorithm: 'SLH-DSA-256 (FIPS 205)', validityPeriodYears: 3, activeCertificatesCount: 1250, isAirGapped: false, hasHsmHardwareStorage: true },
  ],
});

// 13. Zero-Trust Cloud Workload Entitlement Graph Factory (Flat Sovereign 1-Step)
export const createZeroTrustCloudWorkloadEntitlementGraphSlide = (id = `slide-${Date.now()}`): ZeroTrustCloudWorkloadEntitlementGraphSlideData => ({
  id,
  type: 'zero-trust-cloud-workload-entitlement-graph',
  title: 'Zero-Trust Cloud Workload Entitlement Graph',
  subtitle: 'Cloud Infrastructure Entitlement Management (CIEM), privilege escalation path pruning, and automated least-privilege policies',
  kicker: 'CLOUD SECURITY & IDENTITY ENTITLEMENT',
  graphIdentifier: 'ciem-workload-graph-sentinel',
  analyzedEntitlementsCount: 184000,
  unnecessaryPermissionsPrunedPercentage: 74.5,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  isLeastPrivilegeEnforced: true,
  hasEscalationPathsPruned: true,
  hasContinuousAuditActive: true,
  hasTelemetryGlow: true,
  entitlementNodes: [
    { id: 'node-k8s-operator', workloadType: 'Kubernetes Cluster Operator', assignedRole: 'ClusterAdmin', riskScorePercentage: 92.4, isOverprivileged: true, hasUnusedWildcardPermissions: true },
    { id: 'node-payment-lambda', workloadType: 'Serverless Payment Gateway', assignedRole: 'DynamoDBPutItemScoped', riskScorePercentage: 14.2, isOverprivileged: false, hasUnusedWildcardPermissions: false },
    { id: 'node-ci-cd-runner', workloadType: 'GitHub Actions Self-Hosted Runner', assignedRole: 'DeployerECRReadWrite', riskScorePercentage: 42.0, isOverprivileged: false, hasUnusedWildcardPermissions: false },
    { id: 'node-legacy-bastion', workloadType: 'EC2 Legacy Management Bastion', assignedRole: 'IAMFullAccessOrphan', riskScorePercentage: 98.8, isOverprivileged: true, hasUnusedWildcardPermissions: true },
  ],
});

// 14. Frontier Multimodal Alignment Matrix Factory (Flat Sovereign 1-Step)
export const createFrontierMultimodalAlignmentMatrixSlide = (id = `slide-${Date.now()}`): FrontierMultimodalAlignmentMatrixSlideData => ({
  id,
  type: 'frontier-multimodal-alignment-matrix',
  title: 'Frontier Multimodal Alignment Matrix',
  subtitle: 'Cross-attention vision-language safety benchmarking, toxic prompt boundary evaluation, and watermarking provenance',
  kicker: 'AI ETHICS & ALIGNMENT ARCHITECTURE',
  matrixIdentifier: 'frontier-multimodal-eval-v4',
  overallAlignmentScorePercentage: 97.4,
  alignmentTaxLatencyImpactPercentage: 4.2,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  isProvenanceWatermarked: true,
  hasCrossAttentionEvaluated: true,
  hasJailbreakDefended: true,
  hasTelemetryGlow: true,
  alignmentAxes: [
    { id: 'axis-visual-safety', evaluationDimension: 'Visual Toxicity & Harmful Imagery', scorePercentage: 98.6, benchmarkStandard: 'Anthropic Vision Red-Team', isPassedThreshold: true, hasCriticalFindings: false },
    { id: 'axis-jailbreak-ocr', evaluationDimension: 'Embedded Text OCR Adversarial Bypasses', scorePercentage: 96.2, benchmarkStandard: 'Visual Jailbreak Benchmark v2', isPassedThreshold: true, hasCriticalFindings: false },
    { id: 'axis-provenance-c2pa', evaluationDimension: 'C2PA Cryptographic Provenance Watermarking', scorePercentage: 99.4, benchmarkStandard: 'Coalition for Content Provenance', isPassedThreshold: true, hasCriticalFindings: false },
    { id: 'axis-hallucination-bind', evaluationDimension: 'Spatial Object Attribute Binding Faithfulness', scorePercentage: 95.8, benchmarkStandard: 'MMBench Spatial Reasoning', isPassedThreshold: true, hasCriticalFindings: false },
  ],
});

// 15. Enterprise SaaS Efficiency Rule of 40 Quadrant Factory (Flat Sovereign 1-Step)
export const createEnterpriseSaasEfficiencyRuleOf40QuadrantSlide = (id = `slide-${Date.now()}`): EnterpriseSaasEfficiencyRuleOf40QuadrantSlideData => ({
  id,
  type: 'enterprise-saas-efficiency-rule-of-40-quadrant',
  title: 'Enterprise SaaS Efficiency Rule of 40 Quadrant',
  subtitle: 'Net Revenue Retention (NRR), free cash flow margin, Rule of 40 quadrant positioning, and sustainable capital velocity',
  kicker: 'SAAS UNIT ECONOMICS & BOARD STRATEGY',
  quadrantIdentifier: 'saas-rule-of-40-quadrant-2030',
  currentRuleOf40Score: 54.2,
  annualRecurringRevenueMillionUsd: 142.5,
  leadArchitect: 'Alim Ul Karim',
  leadRole: 'Chief Software Engineer',
  activeStep: 0,
  maxSteps: 1,
  isRuleOf40Achieved: true,
  hasTopDecileEfficiency: true,
  hasPositiveFreeCashFlow: true,
  hasTelemetryGlow: true,
  saasCohorts: [
    { id: 'cohort-enterprise', customerSegment: 'Strategic Global 2000 Enterprises', annualGrowthRatePercentage: 42.0, freeCashFlowMarginPercentage: 18.5, netRevenueRetentionPercentage: 128.4, isRuleOf40Exceeded: true, hasNrrAboveBenchmark: true },
    { id: 'cohort-midmarket', customerSegment: 'High-Growth Mid-Market Tier', annualGrowthRatePercentage: 34.0, freeCashFlowMarginPercentage: 14.2, netRevenueRetentionPercentage: 118.0, isRuleOf40Exceeded: true, hasNrrAboveBenchmark: true },
    { id: 'cohort-commercial', customerSegment: 'Commercial Velocity SaaS', annualGrowthRatePercentage: 22.0, freeCashFlowMarginPercentage: 8.5, netRevenueRetentionPercentage: 104.2, isRuleOf40Exceeded: false, hasNrrAboveBenchmark: false },
    { id: 'cohort-developer', customerSegment: 'Self-Serve Developer API Platform', annualGrowthRatePercentage: 68.0, freeCashFlowMarginPercentage: -12.0, netRevenueRetentionPercentage: 135.0, isRuleOf40Exceeded: true, hasNrrAboveBenchmark: true },
  ],
});

// Suite 2030 Factory Registry Map
export const SUITE_2030_FACTORIES: Record<Suite2030SlideType, (id?: string) => SlideData> = {
  'neuromorphic-spiking-neural-mesh': createNeuromorphicSpikingNeuralMeshSlide,
  'quantum-annealing-portfolio-optimizer': createQuantumAnnealingPortfolioOptimizerSlide,
  'autonomous-synthetic-data-foundry': createAutonomousSyntheticDataFoundrySlide,
  'zero-knowledge-rollup-prover-cluster': createZeroKnowledgeRollupProverClusterSlide,
  'photonic-interconnect-optical-mesh': createPhotonicInterconnectOpticalMeshSlide,
  'decentralized-oracle-consensus-spine': createDecentralizedOracleConsensusSpineSlide,
  'ebpf-cloud-native-ddos-shield': createEbpfCloudNativeDdosShieldSlide,
  'enterprise-rag-graph-hybrid-traversal': createEnterpriseRagGraphHybridTraversalSlide,
  'continuous-ai-agent-eval-harness': createContinuousAiAgentEvalHarnessSlide,
  'hyperscale-datacenter-liquid-cooling-telemetry': createHyperscaleDatacenterLiquidCoolingTelemetrySlide,
  'global-sovereign-ai-compute-reserve-grid': createGlobalSovereignAiComputeReserveGridSlide,
  'post-quantum-pki-certificate-hierarchy-radar': createPostQuantumPkiCertificateHierarchyRadarSlide,
  'zero-trust-cloud-workload-entitlement-graph': createZeroTrustCloudWorkloadEntitlementGraphSlide,
  'frontier-multimodal-alignment-matrix': createFrontierMultimodalAlignmentMatrixSlide,
  'enterprise-saas-efficiency-rule-of-40-quadrant': createEnterpriseSaasEfficiencyRuleOf40QuadrantSlide,
};

// Generic Factory
export const createSuite2030Slide = (
  type: Suite2030SlideType | string,
  id = `slide-${Date.now()}`
): Suite2030SlideData => {
  const factory = SUITE_2030_FACTORIES[type as Suite2030SlideType];
  return factory ? (factory(id) as Suite2030SlideData) : createNeuromorphicSpikingNeuralMeshSlide(id);
};

// Archetype Options Catalog for Suite 2030
export const SUITE_2030_ARCHETYPE_OPTIONS: ArchetypeOption[] = [
  { type: 'neuromorphic-spiking-neural-mesh', label: 'Neuromorphic Spiking Neural Mesh', category: 'AI Infrastructure', desc: 'Event-driven bio-plausible asynchronous spiking silicon with sub-picojoule synaptic plasticity', icon: 'Cpu' },
  { type: 'quantum-annealing-portfolio-optimizer', label: 'Quantum Annealing Portfolio Optimizer', category: 'Platform & Network', desc: 'QUBO Ising spin-glass Hamiltonian ground state convergence for multi-asset risk optimization', icon: 'Zap' },
  { type: 'autonomous-synthetic-data-foundry', label: 'Autonomous Synthetic Data Foundry', category: 'Product & Architecture', desc: 'Conditional generative diffusion synthesis, differential privacy epsilon-guarantees, and automated fidelity validation', icon: 'Database' },
  { type: 'zero-knowledge-rollup-prover-cluster', label: 'Zero-Knowledge Rollup Prover Cluster', category: 'Platform & Network', desc: 'Recursive STARK-to-SNARK proof composition, FPGA acceleration, and instant L1 cryptographic settlement', icon: 'Layers' },
  { type: 'photonic-interconnect-optical-mesh', label: 'Photonic Interconnect Optical Mesh', category: 'AI Infrastructure', desc: 'Co-packaged optics (CPO), DWDM optical circuit switching, and sub-picosecond GPU-to-GPU memory fabric', icon: 'Radio' },
  { type: 'decentralized-oracle-consensus-spine', label: 'Decentralized Oracle Consensus Spine', category: 'Platform & Network', desc: 'Medianized outlier filtering, BLS threshold signature aggregation, and verifiable cryptographic data feeds', icon: 'GitBranch' },
  { type: 'ebpf-cloud-native-ddos-shield', label: 'eBPF Cloud-Native DDoS Shield', category: 'Platform & Network', desc: 'XDP kernel driver packet dropping, token bucket rate-limiting, and automated zero-RTT attack mitigation', icon: 'ShieldAlert' },
  { type: 'enterprise-rag-graph-hybrid-traversal', label: 'Enterprise RAG Graph Hybrid Traversal', category: 'Product & Architecture', desc: 'Unified property graph entity traversal, dense vector cosine search, and reciprocal rank fusion', icon: 'Network' },
  { type: 'continuous-ai-agent-eval-harness', label: 'Continuous AI Agent Eval Harness', category: 'Product & Architecture', desc: 'Automated adversarial red-teaming, prompt injection fuzzing, and deterministic regression scorecards', icon: 'Activity' },
  { type: 'hyperscale-datacenter-liquid-cooling-telemetry', label: 'Hyperscale Datacenter Liquid Cooling Telemetry', category: 'AI Infrastructure', desc: 'Direct-to-chip microfluidic cold plates, two-phase immersion tanks, and real-time PUE optimization', icon: 'Thermometer' },
  { type: 'global-sovereign-ai-compute-reserve-grid', label: 'Global Sovereign AI Compute Reserve Grid', category: 'Corporate Strategy', desc: 'Jurisdictional GPU reserve capacity, clean energy allocation, and export compliance radar', icon: 'Globe' },
  { type: 'post-quantum-pki-certificate-hierarchy-radar', label: 'Post-Quantum PKI Certificate Hierarchy Radar', category: 'Platform & Network', desc: 'Hybrid classical-quantum certificate authority hierarchy, FIPS 204 ML-DSA rollout, and HSM key lifecycle', icon: 'Lock' },
  { type: 'zero-trust-cloud-workload-entitlement-graph', label: 'Zero-Trust Cloud Workload Entitlement Graph', category: 'Platform & Network', desc: 'Cloud Infrastructure Entitlement Management (CIEM), privilege escalation path pruning, and automated least-privilege policies', icon: 'ShieldCheck' },
  { type: 'frontier-multimodal-alignment-matrix', label: 'Frontier Multimodal Alignment Matrix', category: 'Product & Architecture', desc: 'Cross-attention vision-language safety benchmarking, toxic prompt boundary evaluation, and watermarking provenance', icon: 'Compass' },
  { type: 'enterprise-saas-efficiency-rule-of-40-quadrant', label: 'Enterprise SaaS Efficiency Rule of 40 Quadrant', category: 'Strategy & Metrics', desc: 'Net Revenue Retention (NRR), free cash flow margin, Rule of 40 quadrant positioning, and sustainable capital velocity', icon: 'BarChart3' },
];

// Helper to batch instantiate all 15 demo slides for Suite 2030
export const createSuite2030Slides = (startId = 290): SlideData[] => [
  createNeuromorphicSpikingNeuralMeshSlide(`slide-${startId}`),
  createQuantumAnnealingPortfolioOptimizerSlide(`slide-${startId + 1}`),
  createAutonomousSyntheticDataFoundrySlide(`slide-${startId + 2}`),
  createZeroKnowledgeRollupProverClusterSlide(`slide-${startId + 3}`),
  createPhotonicInterconnectOpticalMeshSlide(`slide-${startId + 4}`),
  createDecentralizedOracleConsensusSpineSlide(`slide-${startId + 5}`),
  createEbpfCloudNativeDdosShieldSlide(`slide-${startId + 6}`),
  createEnterpriseRagGraphHybridTraversalSlide(`slide-${startId + 7}`),
  createContinuousAiAgentEvalHarnessSlide(`slide-${startId + 8}`),
  createHyperscaleDatacenterLiquidCoolingTelemetrySlide(`slide-${startId + 9}`),
  createGlobalSovereignAiComputeReserveGridSlide(`slide-${startId + 10}`),
  createPostQuantumPkiCertificateHierarchyRadarSlide(`slide-${startId + 11}`),
  createZeroTrustCloudWorkloadEntitlementGraphSlide(`slide-${startId + 12}`),
  createFrontierMultimodalAlignmentMatrixSlide(`slide-${startId + 13}`),
  createEnterpriseSaasEfficiencyRuleOf40QuadrantSlide(`slide-${startId + 14}`),
];
