// lint-allow: file-size reason="FederatedHomomorphicAnalyticsEnclaveSlide kinetic 4-step workflow" max=450
import React from 'react';
import type {
  FederatedHomomorphicAnalyticsEnclaveSlideData,
  HomomorphicEnclaveStage,
  ConfidentialParticipantNode,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Activity,
  Layers,
  Sparkles,
  Lock,
  KeyRound,
  Server,
  Zap,
  Network,
} from 'lucide-react';

const DEF_STAGES: HomomorphicEnclaveStage[] = [
  {
    stepIndex: 0,
    stageName: 'CKKS Ciphertext Encryption',
    stageSubtitle: 'Local client gradient encryption with Gaussian noise injection and RNS polynomial modulus scaling',
    homomorphicComputationOpsPerSec: 12000.0,
    noiseBudgetDepletionRatePercentage: 4.5,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'TEE Hardware Remote Attestation',
    stageSubtitle: 'Cryptographic signature validation over AMD SEV-SNP secure enclave measurement report',
    homomorphicComputationOpsPerSec: 18000.0,
    noiseBudgetDepletionRatePercentage: 5.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Blind Homomorphic Matrix Multiplication',
    stageSubtitle: 'Ciphertext tensor contraction and weight aggregation directly within encrypted domain without decryption',
    homomorphicComputationOpsPerSec: 24000.0,
    noiseBudgetDepletionRatePercentage: 12.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'ZK Accumulator Joint Decryption',
    stageSubtitle: 'Threshold multi-party decryption share combination and zero-knowledge validity consensus verify',
    homomorphicComputationOpsPerSec: 32000.0,
    noiseBudgetDepletionRatePercentage: 14.5,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: ConfidentialParticipantNode[] = [
  {
    id: 'inst-01',
    institutionName: 'Global Medical Center Alpha',
    encryptedGradientCipherSizeBytes: 4404019,
    noiseBudgetRemainingPercentage: 82.4,
    zkProofVerificationTimeMs: 14.2,
    isEnclaveAttested: true,
    hasZeroKnowledgeProofVerified: true,
  },
  {
    id: 'inst-02',
    institutionName: 'Frontier Genomics Institute',
    encryptedGradientCipherSizeBytes: 4404019,
    noiseBudgetRemainingPercentage: 79.1,
    zkProofVerificationTimeMs: 16.0,
    isEnclaveAttested: true,
    hasZeroKnowledgeProofVerified: true,
  },
  {
    id: 'inst-03',
    institutionName: 'Stanford Computational Medicine',
    encryptedGradientCipherSizeBytes: 3984588,
    noiseBudgetRemainingPercentage: 85.0,
    zkProofVerificationTimeMs: 13.8,
    isEnclaveAttested: true,
    hasZeroKnowledgeProofVerified: true,
  },
  {
    id: 'inst-04',
    institutionName: 'Cambridge Bio-Informatics Hub',
    encryptedGradientCipherSizeBytes: 4823449,
    noiseBudgetRemainingPercentage: 76.8,
    zkProofVerificationTimeMs: 15.5,
    isEnclaveAttested: true,
    hasZeroKnowledgeProofVerified: true,
  },
];

export const FederatedHomomorphicAnalyticsEnclaveSlide: React.FC<{
  slide?: FederatedHomomorphicAnalyticsEnclaveSlideData;
  data?: FederatedHomomorphicAnalyticsEnclaveSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.enclaveStages?.length ? data.enclaveStages : DEF_STAGES;
  const nodes = data?.participantNodes?.length ? data.participantNodes : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isMemoryEncrypted = data?.isEnclaveMemoryEncrypted ?? true;
  const hasDiffPrivacy = data?.hasDifferentialPrivacySatisfied ?? true;
  const hasNoiseSufficient = data?.hasNoiseBudgetSufficient ?? true;
  const epsilon = data?.ciphertextPrivacyGuaranteeEpsilon ?? 0.15;
  const institutionsCount = data?.participatingInstitutionsCount ?? 16;

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
              className="font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2"
            >
              <Lock size={16} className="text-cyan-500" />
              {data?.kicker || 'CONFIDENTIAL COMPUTING & PRIVACY-PRESERVING AI'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Server size={14} /> Enclave: {data?.enclaveIdentifier || 'ENCLAVE-CKKS-CONFIDENTIAL-01'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Network size={14} className="text-emerald-500" />
              Institutions: {institutionsCount} Nodes
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-purple-500" />
              DP Guarantee: &epsilon; = {epsilon}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Federated Homomorphic Analytics Enclave'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'CKKS ciphertext blind matrix multiplication, remote TEE hardware attestation, and zero-knowledge verification.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Computation Rate</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {(activeStage.homomorphicComputationOpsPerSec / 1000).toFixed(1)}k Ops/s
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Noise Depletion</span>
            <span className="text-purple-700 dark:text-purple-400 font-bold text-[18px]">
              {activeStage.noiseBudgetDepletionRatePercentage.toFixed(1)}% / pass
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
                    {(st.homomorphicComputationOpsPerSec / 1000).toFixed(0)}k ops/s | {st.noiseBudgetDepletionRatePercentage.toFixed(1)}% noise/step
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
        {/* Left Bento: Consortium Participant Nodes & Encrypted Gradient Buffers */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Network size={16} className="text-[var(--pres-accent)]" /> Confidential Consortium Nodes & Cipher Buffers
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((node, nIdx) => {
                const isCurrentLayer = nIdx === currentStep || (currentStep >= 2 && nIdx >= 2);
                const isAttested = node.isEnclaveAttested;
                return (
                  <div
                    key={node.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Lock size={16} className={isAttested ? 'text-cyan-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{node.institutionName}</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isAttested
                              ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isAttested ? 'TEE Attested' : 'Pending'}
                        </span>
                        {node.hasZeroKnowledgeProofVerified && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> ZK Proof {node.zkProofVerificationTimeMs.toFixed(1)}ms
                          </span>
                        )}
                      </div>
                      <span className="font-bold text-purple-700 dark:text-purple-400">
                        {(node.encryptedGradientCipherSizeBytes / 1024 / 1024).toFixed(2)} MB Cipher
                      </span>
                    </div>

                    {/* Noise Budget Gauge */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
                        <span>FHE Noise Budget Remaining:</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">
                          {node.noiseBudgetRemainingPercentage.toFixed(1)}% Safe Margin
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 transition-all duration-500"
                          style={{ width: `${node.noiseBudgetRemainingPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-500 dark:text-slate-400">
            <span>Blind Homomorphic Aggregation: Weights combined in encrypted domain</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 size={14} /> Zero Ciphertext Leakage Guaranteed
            </span>
          </div>
        </div>

        {/* Right Bento: TEE Hardware Security Enclave & FHE Noise Budget Diagnostics */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Cpu size={16} className="text-emerald-500" /> TEE Enclave Security & Noise Diagnostics
              </span>
              <span className="font-mono text-[14px] text-purple-700 dark:text-purple-400 font-bold">
                AMD SEV-SNP Active
              </span>
            </div>

            <div className="space-y-4 mt-4 font-mono text-[14px]">
              <div className="p-4 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <KeyRound size={15} className="text-cyan-500" /> Sealed Key Provisioning
                  </span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">Hardware Root of Trust</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px] mt-1">
                  Enclave master decryption key shares are bound directly to hardware registers, inaccessible even to hypervisor administrators.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <ShieldCheck size={15} className="text-emerald-500" /> Differential Privacy Calibration
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">&epsilon; = {epsilon.toFixed(2)}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-[14px] mt-1">
                  Formal Gaussian DP noise guarantees zero single-record reconstruction even under unbounded adversary collusion.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Enclave Memory Encryption</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {isMemoryEncrypted ? 'AES-128 Hardware Encrypted' : 'Plaintext'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Differential Privacy Status</span>
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {hasDiffPrivacy ? 'Calibrated & Enforced' : 'Unconstrained'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">FHE Noise Margin Check</span>
                  <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                    <Layers size={16} /> {hasNoiseSufficient ? 'Nominal (> 70% Reserve)' : 'Exhausted'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. CKKS blind aggregation executes across all {institutionsCount} institutions.
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
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Enclave Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Zero Ciphertext Leakage | Hardware Key Sealed in AMD SEV-SNP Enclave | Noise Margin Safe
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Confidential AI
          </span>
        </div>
      </div>
    </div>
  );
};

export default FederatedHomomorphicAnalyticsEnclaveSlide;
