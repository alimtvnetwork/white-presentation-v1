// lint-allow: file-size reason="QuantumResistantKeyExchangeStepperSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  QuantumResistantKeyExchangeStepperSlideData,
  KeyExchangeStage,
  LatticeVectorParameter,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Lock,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Sparkles,
  Activity,
  Layers,
  ArrowRight,
  Zap,
  KeyRound,
  Binary,
} from 'lucide-react';

const DEF_STAGES: KeyExchangeStage[] = [
  {
    stepIndex: 0,
    stageName: 'Entropy Sampling & Lattice Keypair Generation',
    stageSubtitle: 'Hardware TRNG samples high-entropy seeds generating ML-KEM-768 polynomial lattice keypairs',
    operationTimeMicroseconds: 24.2,
    entropyBits: 256,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Lattice Vector Encapsulation & Ciphertext Derivation',
    stageSubtitle: 'Initiator computes ring-learning-with-errors (RLWE) vector producing 1,088-byte ciphertext',
    operationTimeMicroseconds: 28.6,
    entropyBits: 256,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Hybrid Dual-KEM Combination & X25519 Binding',
    stageSubtitle: 'Post-quantum ML-KEM secret combined with classical X25519 ECDH via HKDF-SHA512 extract-expand',
    operationTimeMicroseconds: 8.4,
    entropyBits: 512,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Constant-Time Decapsulation & Session Key Commit',
    stageSubtitle: 'Recipient verifies ciphertext in constant-time and commits AES-256-GCM symmetric session keys',
    operationTimeMicroseconds: 21.0,
    entropyBits: 256,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_PARAMS: LatticeVectorParameter[] = [
  {
    id: 'param-mlkem-768',
    parameterName: 'ML-KEM-768 (Kyber-768)',
    securityCategory: 3,
    publicKeySizeBytes: 1184,
    ciphertextSizeBytes: 1088,
    isNistStandardized: true,
    hasFipsApproval: true,
  },
  {
    id: 'param-mlkem-1024',
    parameterName: 'ML-KEM-1024 (Kyber-1024)',
    securityCategory: 5,
    publicKeySizeBytes: 1568,
    ciphertextSizeBytes: 1568,
    isNistStandardized: true,
    hasFipsApproval: true,
  },
  {
    id: 'param-hybrid-x25519',
    parameterName: 'X25519-ML-KEM-768 Hybrid',
    securityCategory: 3,
    publicKeySizeBytes: 1216,
    ciphertextSizeBytes: 1120,
    isNistStandardized: true,
    hasFipsApproval: true,
  },
  {
    id: 'param-mldsa-65',
    parameterName: 'ML-DSA-65 (Dilithium-3)',
    securityCategory: 3,
    publicKeySizeBytes: 1952,
    ciphertextSizeBytes: 3293,
    isNistStandardized: true,
    hasFipsApproval: true,
  },
];

export const QuantumResistantKeyExchangeStepperSlide: React.FC<{
  slide?: QuantumResistantKeyExchangeStepperSlideData;
  data?: QuantumResistantKeyExchangeStepperSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.keyExchangeStages?.length ? data.keyExchangeStages : DEF_STAGES;
  const params = data?.latticeParameters?.length ? data.latticeParameters : DEF_PARAMS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasHybrid = data?.isHybridModeActive ?? true;
  const hasFips = data?.hasNistFips203Compliance ?? true;
  const hasHwAcc = data?.hasHardwareAccelerationActive ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Lock size={16} className="text-cyan-500" />
              {data?.kicker || 'POST-QUANTUM CRYPTOGRAPHY & LATTICE KEM'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <KeyRound size={14} /> Standard: {data?.algorithmStandard || 'NIST FIPS 203 (ML-KEM)'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Fallback: {data?.classicalHybridFallback || 'X25519 ECDH Dual Hybrid'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Binary size={14} className="text-indigo-500" />
              Session: {data?.sessionIdentifier || 'pqc-tls-session-8841'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Quantum-Resistant Key Exchange Stepper'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'NIST FIPS 203 ML-KEM lattice key encapsulation, hybrid classical-PQC session derivation, and constant-time execution.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Operation Time</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.operationTimeMicroseconds.toFixed(1)} µs
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Entropy Pool</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.entropyBits} Bits
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

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-75'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-[0.38] blur-[1.25px] text-slate-500 dark:text-slate-400'
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
                    {st.operationTimeMicroseconds}µs | {st.entropyBits} bits entropy
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
        {/* Left Bento: NIST Lattice Vector Parameters */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> NIST PQC Lattice Algorithms & Vector Sizing
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {params.map((param, pIdx) => {
                const isCurrentLayer = pIdx === currentStep || (currentStep >= 2 && pIdx >= 2);
                return (
                  <div
                    key={param.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Lock size={16} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{param.parameterName}</span>
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                          Cat {param.securityCategory} (AES-192+ eq)
                        </span>
                        {param.isNistStandardized && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> NIST Standard
                          </span>
                        )}
                        {param.hasFipsApproval && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <ShieldCheck size={12} /> FIPS 203
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          PK: {param.publicKeySizeBytes} B
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>Ciphertext: {param.ciphertextSizeBytes} B</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCurrentLayer ? 'bg-[var(--pres-accent)]' : 'bg-cyan-500'
                        }`}
                        style={{ width: `${Math.min(100, (param.ciphertextSizeBytes / 3500) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Side-Channel Immunity: Constant-Time Montgomery Ladder</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Quantum Bit-Security: 192+ Bits
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap size={16} className="text-cyan-500" />
              AVX-512 / ARM Neon Hardware Acceleration: Sub-30µs Ring NTT Multiplication
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Production TLS 1.3 Draft Hybrid Ready
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} KEM Execution
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Execution Latency</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.operationTimeMicroseconds.toFixed(1)} µs
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Entropy Sample</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.entropyBits} Bits
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Hybrid Classical-PQC Mode</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasHybrid ? 'X25519 + ML-KEM Binding' : 'Pure Lattice Only'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">NIST FIPS 203 Compliance</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasFips ? 'Officially Ratified (2024)' : 'Draft Spec'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Hardware Acceleration</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <Cpu size={16} /> {hasHwAcc ? 'AVX-512 Vector NTT Active' : 'Pure Software C'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Protects encrypted traffic against Harvest Now, Decrypt Later quantum threats.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Quantum Resistance Confirmed | NIST FIPS 203 Ratified | Constant-Time Side-Channel Immune
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2029 PQC Stepper
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuantumResistantKeyExchangeStepperSlide;
