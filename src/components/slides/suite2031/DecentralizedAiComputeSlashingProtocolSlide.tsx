// lint-allow: file-size reason="DecentralizedAiComputeSlashingProtocolSlide kinetic 4-step workflow" max=450
import React from 'react';
import type {
  DecentralizedAiComputeSlashingProtocolSlideData,
  SlashingProtocolStage,
  ComputeValidatorNode,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  ShieldAlert,
  Coins,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  Flame,
  Scale,
} from 'lucide-react';

const DEF_STAGES: SlashingProtocolStage[] = [
  {
    stepIndex: 0,
    stageName: 'Compute Task Sharding',
    stageSubtitle: 'Micro-batch gradient distribution and verifiable random function (VRF) worker assignment',
    totalValueLockedUsd: 248500000.0,
    gradientDivergenceTolerancePpm: 1.0,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Proof-of-Gradient Verification',
    stageSubtitle: 'Homomorphic inner-product argument and zero-knowledge model weight commitment verification',
    totalValueLockedUsd: 248500000.0,
    gradientDivergenceTolerancePpm: 1.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Quorum Dispute & Challenge',
    stageSubtitle: 'Statistical Byzantine outlier divergence detection and optimistic fraud challenge window',
    totalValueLockedUsd: 248500000.0,
    gradientDivergenceTolerancePpm: 5.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Consensus Slashing Execution',
    stageSubtitle: 'Automated 40% stake burning, honest node reward redistribution, and node blacklisting',
    totalValueLockedUsd: 248500000.0,
    gradientDivergenceTolerancePpm: 5.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_VALIDATORS: ComputeValidatorNode[] = [
  {
    id: 'val-01',
    validatorAddress: '0x71af...3f2e',
    stakedTokensEth: 320.0,
    gradientDivergenceScore: 0.04,
    slashedPenaltyEth: 0.0,
    isValidatorHonest: true,
    hasQuorumConsensusReached: true,
  },
  {
    id: 'val-02',
    validatorAddress: '0x93bc...411c',
    stakedTokensEth: 160.0,
    gradientDivergenceScore: 42.8,
    slashedPenaltyEth: 64.0,
    isValidatorHonest: false,
    hasQuorumConsensusReached: false,
  },
  {
    id: 'val-03',
    validatorAddress: '0x14de...889a',
    stakedTokensEth: 280.0,
    gradientDivergenceScore: 0.08,
    slashedPenaltyEth: 0.0,
    isValidatorHonest: true,
    hasQuorumConsensusReached: true,
  },
  {
    id: 'val-04',
    validatorAddress: '0x55ca...092b',
    stakedTokensEth: 210.0,
    gradientDivergenceScore: 0.12,
    slashedPenaltyEth: 0.0,
    isValidatorHonest: true,
    hasQuorumConsensusReached: true,
  },
];

export const DecentralizedAiComputeSlashingProtocolSlide: React.FC<{
  slide?: DecentralizedAiComputeSlashingProtocolSlideData;
  data?: DecentralizedAiComputeSlashingProtocolSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.slashingStages?.length ? data.slashingStages : DEF_STAGES;
  const validators = data?.validatorNodes?.length ? data.validatorNodes : DEF_VALIDATORS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isDisputeOpen = data?.isDisputeWindowOpen ?? true;
  const hasByzantineGuaranteed = data?.hasByzantineToleranceGuaranteed ?? true;
  const hasNodeSlashed = data?.hasMaliciousNodeSlashed ?? true;

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
              className="font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-rose-500/10 text-rose-800 dark:text-rose-300 border border-rose-500/20 flex items-center gap-2"
            >
              <ShieldAlert size={16} className="text-rose-500" />
              {data?.kicker || 'DECENTRALIZED INFRASTRUCTURE & CRYPTOGRAPHY'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Scale size={14} /> Protocol: {data?.protocolIdentifier || 'DECENTRAL-COMPUTE-SLASH-01'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Coins size={14} className="text-emerald-500" />
              Stake Pool: ${data?.totalStakePoolTokensUsdMillion ?? 248.5}M TVL
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Zap size={14} className="text-cyan-500" />
              Interception: {data?.maliciousGradientInterceptionRate ?? 99.99}%
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Decentralized AI Compute Byzantine Slashing Engine'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Proof-of-gradient verification, heuristic consensus challenge window, and economic stake slashing against Byzantine poisoning.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Staked Pool TVL</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              ${(activeStage.totalValueLockedUsd / 1000000).toFixed(1)}M USD
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Divergence Tol</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.gradientDivergenceTolerancePpm.toFixed(1)} PPM
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
                    ${(st.totalValueLockedUsd / 1000000).toFixed(0)}M TVL | Tol {st.gradientDivergenceTolerancePpm} PPM
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
        {/* Left Bento: Validator Quorum & Residual Heatmap */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ShieldAlert size={16} className="text-[var(--pres-accent)]" /> Validator Quorum Surveillance & Residual Heatmap
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-800 dark:text-rose-400 font-bold border border-rose-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {validators.map((val, vIdx) => {
                const isCurrentValidator = vIdx === currentStep || (currentStep >= 2 && vIdx >= 2);
                const isHonest = val.isValidatorHonest;
                return (
                  <div
                    key={val.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentValidator
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Scale size={16} className={isHonest ? 'text-emerald-500' : 'text-rose-500'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          Node [{val.validatorAddress}] Stake: {val.stakedTokensEth} ETH
                        </span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isHonest
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-500/30'
                          }`}
                        >
                          {isHonest ? 'Honest Consensus' : 'Byzantine Outlier'}
                        </span>
                        {val.hasQuorumConsensusReached && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Quorum Signed
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Div: {val.gradientDivergenceScore.toFixed(2)} ppm
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>Slash: {val.slashedPenaltyEth} ETH</span>
                          <ArrowRight size={12} />
                          <span className={isHonest ? 'text-emerald-500' : 'text-rose-500'}>
                            {isHonest ? 'CONSENSUS-OK' : 'STAKE-BURNED'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isHonest ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${isHonest ? Math.max(15, (val.stakedTokensEth / 350) * 100) : 100}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Inner Product Argument: Verifiable homomorphic polynomial evaluation</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> 33.3% Byzantine Tolerant
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Flame size={16} className="text-rose-500" />
              Slashing Protocol Penalty: 40% malicious stake burned permanently to null address
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              99.99% Byzantine Gradient Interception Rate
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
                <Activity size={16} className="text-rose-500" /> Stage {currentStep + 1} Slashing Mechanics
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Stake Pool TVL</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    ${(activeStage.totalValueLockedUsd / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Divergence Cap</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.gradientDivergenceTolerancePpm.toFixed(1)} PPM
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Dispute Challenge Window</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isDisputeOpen ? '45 Blocks Active Window' : 'Window Finalized'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Byzantine Fault Tolerance</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasByzantineGuaranteed ? '33.3% Quorum Proven' : 'Unverified Quorum'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Malicious Stake Slashing</span>
                <span className="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1">
                  <Layers size={16} /> {hasNodeSlashed ? '64 ETH Permanently Burned' : 'Zero Penalties'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Protocol slashes Byzantine compute nodes cryptographically.
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
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Protocol Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Dispute Arbitrated | Challenge Window: 45 Blocks | Slashing Ratio: 40% Penalty
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Compute Slashing
          </span>
        </div>
      </div>
    </div>
  );
};

export default DecentralizedAiComputeSlashingProtocolSlide;
