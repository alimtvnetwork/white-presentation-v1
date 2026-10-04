// lint-allow: file-size reason="DecentralizedOracleConsensusSpineSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  DecentralizedOracleConsensusSpineSlideData,
  OracleStage,
  OracleSignerNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  ShieldCheck,
  Globe,
  CheckCircle2,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  Key,
  Radio,
  DollarSign,
} from 'lucide-react';

const DEF_STAGES: OracleStage[] = [
  {
    stepIndex: 0,
    stageName: 'Off-Chain TLSNotary Data Ingestion',
    stageSubtitle: 'Decentralized oracle nodes query multi-source market APIs with verifiable cryptographic proofs',
    nodesParticipatingCount: 16,
    consensusConfidencePercentage: 88.5,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Median Filtering & Statistical Pruning',
    stageSubtitle: 'Interquartile outlier rejection algorithms prune deviating feeds beyond +/- 1.5 standard deviations',
    nodesParticipatingCount: 24,
    consensusConfidencePercentage: 94.2,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Threshold BLS Signature Aggregation (t-of-n)',
    stageSubtitle: 'Boneh-Lynn-Shacham signature shares combine into a single tamper-proof cryptographic aggregate',
    nodesParticipatingCount: 31,
    consensusConfidencePercentage: 99.1,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'On-Chain Spine Publication & Heartbeat Broadcast',
    stageSubtitle: 'Atomic heartbeat verifies state freshness and broadcasts verified median to consumer smart contracts',
    nodesParticipatingCount: 31,
    consensusConfidencePercentage: 99.9,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_SIGNERS: OracleSignerNode[] = [
  {
    id: 'signer-chainlink',
    nodeOperator: 'Chainlink Labs Node Alpha',
    reportedDataValue: 68420.5,
    reputationScorePercentage: 99.8,
    responseTimeMs: 14.5,
    isSignatureSubmitted: true,
    hasOutlierPruned: false,
  },
  {
    id: 'signer-pyth',
    nodeOperator: 'Pyth Network High-Frequency Exch',
    reportedDataValue: 68421.2,
    reputationScorePercentage: 99.4,
    responseTimeMs: 12.1,
    isSignatureSubmitted: true,
    hasOutlierPruned: false,
  },
  {
    id: 'signer-coinbase',
    nodeOperator: 'Coinbase Cloud Enterprise Staking',
    reportedDataValue: 68420.8,
    reputationScorePercentage: 99.6,
    responseTimeMs: 16.8,
    isSignatureSubmitted: true,
    hasOutlierPruned: false,
  },
  {
    id: 'signer-binance',
    nodeOperator: 'Binance Oracle Validator Omega',
    reportedDataValue: 68419.9,
    reputationScorePercentage: 98.9,
    responseTimeMs: 18.2,
    isSignatureSubmitted: true,
    hasOutlierPruned: false,
  },
];

export const DecentralizedOracleConsensusSpineSlide: React.FC<{
  slide?: DecentralizedOracleConsensusSpineSlideData;
  data?: DecentralizedOracleConsensusSpineSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.oracleStages?.length ? data.oracleStages : DEF_STAGES;
  const signers = data?.signerNodes?.length ? data.signerNodes : DEF_SIGNERS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isThresholdAchieved = data?.isThresholdSignatureAchieved ?? true;
  const hasOutlierTruncated = data?.hasOutlierTruncated ?? true;
  const hasHeartbeat = data?.hasHeartbeatVerified ?? true;

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
              <Globe size={16} className="text-cyan-500" />
              {data?.kicker || 'DECENTRALIZED ORACLE CONSENSUS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Key size={14} /> Spine: {data?.spineIdentifier || 'oracle-spine-consensus-v2'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <DollarSign size={14} className="text-emerald-500" />
              Feed: {data?.activeDataFeedName || 'BTC/USD Institutional Benchmark'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Radio size={14} className="text-purple-500" />
              Median: ${data?.aggregatedMedianValue ? data.aggregatedMedianValue.toLocaleString() : '68,420.60'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Decentralized Oracle Consensus Spine'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Threshold BLS multi-party signing, outlier truncation, and sub-second deterministic financial settlement.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Confidence</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.consensusConfidencePercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Active Signers</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.nodesParticipatingCount} / 31 Quorum
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
                    {st.consensusConfidencePercentage}% confidence | {st.nodesParticipatingCount} signers
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
        {/* Left Bento: Signer Validator Nodes & Reported Feeds */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldCheck size={16} className="text-[var(--pres-accent)]" /> Institutional Signer Nodes & BLS Shares
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {signers.map((signer, sIdx) => {
                const isCurrentLayer = sIdx === currentStep || (currentStep >= 2 && sIdx >= 2);
                const isSubmitted = signer.isSignatureSubmitted;
                return (
                  <div
                    key={signer.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Globe size={16} className={isSubmitted ? 'text-emerald-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{signer.nodeOperator}</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isSubmitted
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isSubmitted ? 'BLS Signed' : 'Pending'}
                        </span>
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                          <CheckCircle2 size={12} /> Rep {signer.reputationScorePercentage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Latency: {signer.responseTimeMs.toFixed(1)}ms
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>${signer.reportedDataValue.toFixed(2)}</span>
                          <ArrowRight size={12} />
                          <span className="text-emerald-700 dark:text-emerald-400">MEDIAN VALID</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full transition-all duration-700 bg-emerald-500"
                        style={{ width: `${Math.min(100, signer.reputationScorePercentage)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>TLSNotary Cryptographic Proof: Verified</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Sybil Attack Guarded
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Key size={16} className="text-cyan-500" />
              Threshold Cryptography: BLS12-381 curve with fast pairing verification
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              Sub-second Settlement Guarantee
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
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Consensus Mechanics
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Consensus Confidence</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.consensusConfidencePercentage.toFixed(1)}%
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Participating Signers</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.nodesParticipatingCount} / 31
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">BLS Threshold Signature Status</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isThresholdAchieved ? 't-of-n Quorum Reached' : 'Collecting Shares'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Outlier Feeds Truncation</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasOutlierTruncated ? 'Interquartile Filter Active' : 'Unfiltered'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Heartbeat State Freshness</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {hasHeartbeat ? 'Sub-second Pulse Verified' : 'Stale'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Decentralized oracle delivers institutional data feeds with zero single points of failure.
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
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Oracle Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Threshold BLS Signature Verified | Interquartile Truncation Active | 99.9% Consensus Confidence
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2030 Oracle Spine
          </span>
        </div>
      </div>
    </div>
  );
};

export default DecentralizedOracleConsensusSpineSlide;
