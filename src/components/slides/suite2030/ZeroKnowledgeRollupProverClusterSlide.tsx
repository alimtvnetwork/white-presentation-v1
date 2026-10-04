// lint-allow: file-size reason="ZeroKnowledgeRollupProverClusterSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  ZeroKnowledgeRollupProverClusterSlideData,
  ProverStage,
  ZkProverNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  Hash,
  Zap,
  Server,
} from 'lucide-react';

const DEF_STAGES: ProverStage[] = [
  {
    stepIndex: 0,
    stageName: 'Transaction Batch Aggregation & Witness Generation',
    stageSubtitle: 'L2 sequencers bundle 100k transactions and synthesize cryptographic witness polynomials',
    transactionsCompressedCount: 25000,
    circuitConstraintsMillion: 16.4,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Hardware-Accelerated Plonky3 & Halo2 Prover',
    stageSubtitle: 'GPU/FPGA clusters compute Number Theoretic Transforms (NTT) and Multi-Scalar Multiplications (MSM)',
    transactionsCompressedCount: 65000,
    circuitConstraintsMillion: 42.8,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Recursive SNARK Proof Folding & Compression',
    stageSubtitle: 'Inner execution proofs fold recursively into a single succinct 350-byte cryptographic proof',
    transactionsCompressedCount: 120000,
    circuitConstraintsMillion: 88.5,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'L1 Smart Contract Settlement & State Root Commit',
    stageSubtitle: 'Succinct proof verifies on L1 Ethereum settlement bridge within 240,000 gas units',
    transactionsCompressedCount: 200000,
    circuitConstraintsMillion: 135.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: ZkProverNode[] = [
  {
    id: 'prover-gpu-cluster',
    hardwareType: 'NVIDIA H100 GPU Cluster',
    proofCircuitName: 'Plonky3 Keccak State Proof',
    batchCapacityTps: 18500,
    witnessLatencyMs: 14.2,
    isProvingActive: true,
    hasProofVerified: true,
  },
  {
    id: 'prover-fpga-array',
    hardwareType: 'Xilinx U55C FPGA Accelerator',
    proofCircuitName: 'Halo2 IPA Vector Commitments',
    batchCapacityTps: 14200,
    witnessLatencyMs: 18.5,
    isProvingActive: true,
    hasProofVerified: true,
  },
  {
    id: 'prover-host-epyc',
    hardwareType: 'AMD EPYC 9654 Zen4 Nodes',
    proofCircuitName: 'Recursive SNARK Folding Engine',
    batchCapacityTps: 9800,
    witnessLatencyMs: 24.1,
    isProvingActive: true,
    hasProofVerified: true,
  },
  {
    id: 'prover-groq-asic',
    hardwareType: 'Groq LPU Cryptographic ASIC',
    proofCircuitName: 'KZG Polynomial Commitment Evaluator',
    batchCapacityTps: 22000,
    witnessLatencyMs: 8.9,
    isProvingActive: true,
    hasProofVerified: true,
  },
];

export const ZeroKnowledgeRollupProverClusterSlide: React.FC<{
  slide?: ZeroKnowledgeRollupProverClusterSlideData;
  data?: ZeroKnowledgeRollupProverClusterSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.proverStages?.length ? data.proverStages : DEF_STAGES;
  const nodes = data?.proverNodes?.length ? data.proverNodes : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isAggregated = data?.isProofRecursivelyAggregated ?? true;
  const hasWitness = data?.hasWitnessGenerationComplete ?? true;
  const hasL1Verified = data?.hasL1SettlementVerified ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.0rem)' }}
              className="font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2"
            >
              <ShieldCheck size={16} className="text-cyan-500" />
              {data?.kicker || 'ZERO-KNOWLEDGE ROLLUP PROVER CLUSTER'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Server size={14} /> Prover: {data?.clusterIdentifier || 'zk-prover-mesh-alpha'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Throughput: {data?.settlementThroughputTps ? data.settlementThroughputTps.toLocaleString() : '64,500'} TPS
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Hash size={14} className="text-purple-500" />
              Compression: {data?.compressionRatioMultiplier ?? 140}x
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Zero-Knowledge Rollup Prover Cluster'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Heterogeneous GPU/FPGA recursive SNARK proof generation with 64k+ TPS Layer 1 settlement.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Circuit Gates</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.circuitConstraintsMillion.toFixed(1)}M R1CS
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Tx Compressed</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {(activeStage.transactionsCompressedCount / 1000).toFixed(0)}k Tx
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Kinetic 4-Step Nav Rail */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;
          const lifecycleStyle = getStepLifecycleStyle(
            isActive ? 'active' : isCompleted ? 'completed' : 'future',
            'var(--pres-accent)',
            'var(--pres-border)'
          );

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              style={lifecycleStyle}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 opacity-75'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-[0.38] text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    isActive
                      ? 'bg-[var(--pres-accent)] text-white'
                      : isCompleted
                      ? 'bg-emerald-500 text-white dark:text-slate-900'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <div>
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[14px] opacity-75 font-normal">
                    {st.circuitConstraintsMillion}M gates | {(st.transactionsCompressedCount / 1000).toFixed(0)}k tx
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                Step {idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Heterogeneous Prover Nodes & Hardware Accelerators */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Cpu size={16} className="text-[var(--pres-accent)]" /> Prover Hardware Nodes & Circuit Pipelines
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((prover, pIdx) => {
                const isCurrentLayer = pIdx === currentStep || (currentStep >= 2 && pIdx >= 2);
                const isProving = prover.isProvingActive;
                return (
                  <div
                    key={prover.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Server size={16} className={isProving ? 'text-cyan-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{prover.hardwareType}</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isProving
                              ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isProving ? 'Prover Active' : 'Idle'}
                        </span>
                        {prover.hasProofVerified && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Witness {prover.witnessLatencyMs.toFixed(1)}ms
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          {prover.proofCircuitName}
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>{prover.batchCapacityTps.toLocaleString()} TPS</span>
                          <ArrowRight size={12} />
                          <span className="text-emerald-700 dark:text-emerald-400">OPTIMAL</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full transition-all duration-700 bg-cyan-500"
                        style={{ width: `${Math.min(100, (prover.batchCapacityTps / 22000) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Proof System: Plonky3 Starky Folding Engine</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Zero Knowledge Maintained
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-cyan-500" />
              Recursive Aggregation: 100+ micro-proofs unified into single 350-byte payload
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              Sub-millisecond L1 Verification Cost
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Circuit Pipeline
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
                Phase {currentStep + 1} Active
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[14px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Circuit Constraints</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.circuitConstraintsMillion.toFixed(1)} M
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Compressed Batches</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {(activeStage.transactionsCompressedCount / 1000).toFixed(0)} k
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Witness Generation Pipeline</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasWitness ? 'NTT/MSM Synthesized' : 'Witness Incomplete'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Recursive SNARK Aggregation</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isAggregated ? 'Constant Size Proof Folded' : 'Uncompressed'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Layer 1 Settlement Status</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {hasL1Verified ? 'Smart Contract Verified' : 'Pending Mempool'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. ZK rollup achieves maximum cryptographic throughput with zero L1 congestion.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div
        style={{ backdropFilter: 'blur(14px)' }}
        className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-[14px] z-10"
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Prover Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> 64,500 TPS Throughput | Constant 350-byte Proof Verified | L1 Finality Confirmed
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2030 ZK Prover Mesh
          </span>
        </div>
      </div>
    </div>
  );
};

export default ZeroKnowledgeRollupProverClusterSlide;
