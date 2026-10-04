// lint-allow: file-size reason="ConfidentialComputeAttestationPipelineSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  ConfidentialComputeAttestationPipelineSlideData,
  AttestationStage,
  EnclavePcrDigest,
} from '../../../types/suite2029Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  Activity,
  Cpu,
  Layers,
  Fingerprint,
  Zap,
  KeyRound,
  FileCheck,
} from 'lucide-react';

const DEF_STAGES: AttestationStage[] = [
  {
    stepIndex: 0,
    stageName: 'Silicon Root-of-Trust & Enclave Partitioning',
    stageSubtitle: 'Hardware-enforced memory encryption (AMD SEV-SNP / Intel TDX) isolates VM address space',
    verificationLatencyMs: 12.4,
    securityBitsEnforced: 256,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'PCR Measurement Aggregation & SHA-384 Hash',
    stageSubtitle: 'Rolling cryptographic hash computed across UEFI firmware, microcode, kernel, and container image',
    verificationLatencyMs: 8.6,
    securityBitsEnforced: 384,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Hardware Attestation Quote & Silicon Signing',
    stageSubtitle: 'Silicon Security Processor signs attestation quote using factory-fused chip private key',
    verificationLatencyMs: 18.2,
    securityBitsEnforced: 384,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Remote Verifier Appraisal & Secret Release',
    stageSubtitle: 'Independent attestation service validates quote against root cert releasing ephemeral runtime keys',
    verificationLatencyMs: 6.5,
    securityBitsEnforced: 384,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_DIGESTS: EnclavePcrDigest[] = [
  {
    id: 'pcr-00',
    pcrRegisterIndex: 0,
    digestHashSha384: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
    componentMeasured: 'Hardware Platform Firmware (UEFI)',
    isHardwareVerified: true,
    hasZeroTaint: true,
  },
  {
    id: 'pcr-01',
    pcrRegisterIndex: 2,
    digestHashSha384: '2c5a2e6f41b9d10e882352b2b109e9e29f8c679a7852f6c91e4a7d3a2b1c4e6f',
    componentMeasured: 'Kernel Stage & Secure Bootloader',
    isHardwareVerified: true,
    hasZeroTaint: true,
  },
  {
    id: 'pcr-02',
    pcrRegisterIndex: 4,
    digestHashSha384: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    componentMeasured: 'Confidential Container Workload Binary',
    isHardwareVerified: true,
    hasZeroTaint: true,
  },
  {
    id: 'pcr-03',
    pcrRegisterIndex: 7,
    digestHashSha384: 'a4b8c9d0e1f2031425364758697a8b9cadbef0123456789abcdef0123456789a',
    componentMeasured: 'Runtime Environment & Enclave Policy',
    isHardwareVerified: true,
    hasZeroTaint: true,
  },
];

export const ConfidentialComputeAttestationPipelineSlide: React.FC<{
  slide?: ConfidentialComputeAttestationPipelineSlideData;
  data?: ConfidentialComputeAttestationPipelineSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.attestationStages?.length ? data.attestationStages : DEF_STAGES;
  const digests = data?.pcrDigests?.length ? data.pcrDigests : DEF_DIGESTS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasEncryptedMem = data?.isEnclaveMemoryEncrypted ?? true;
  const hasRootOfTrust = data?.hasHardwareRootOfTrust ?? true;
  const hasRemoteAttestation = data?.hasRemoteAttestationVerified ?? true;

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
              <ShieldCheck size={16} className="text-cyan-500" />
              {data?.kicker || 'HARDWARE CONFIDENTIAL COMPUTING & ENCLAVE ATTESTATION'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Lock size={14} /> Enclave: {data?.enclaveIdentifier || 'enclave-sev-snp-titan-01'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Cpu size={14} className="text-emerald-500" />
              Silicon: {data?.hardwareArchitecture || 'AMD SEV-SNP (Milan/Genoa)'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Fingerprint size={14} className="text-indigo-500" />
              Verifier: {data?.attestationVerifierDomain || 'attest.confidential.internal'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Confidential Compute Attestation Pipeline'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Hardware root-of-trust initialization, SHA-384 PCR measurement, cryptographic quote signing, and remote appraisal.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Verify Latency</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.verificationLatencyMs.toFixed(1)} ms
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Security Bits</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.securityBitsEnforced} Bits
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
                    {st.verificationLatencyMs}ms | {st.securityBitsEnforced}-bit security
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
        {/* Left Bento: Platform Configuration Registers (PCR Digests) */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Fingerprint size={16} className="text-[var(--pres-accent)]" /> Platform Configuration Registers (PCR) & SHA-384 Measurement
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {digests.map((digest, dIdx) => {
                const isCurrentLayer = dIdx === currentStep || (currentStep >= 2 && dIdx >= 2);
                return (
                  <div
                    key={digest.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Layers size={16} className={isCurrentLayer ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{digest.componentMeasured}</span>
                        <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                          PCR[{digest.pcrRegisterIndex}]
                        </span>
                        {digest.isHardwareVerified && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Silicon Verified
                          </span>
                        )}
                        {digest.hasZeroTaint && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <ShieldCheck size={12} /> Zero Taint
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          SHA-384
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>Quote Status: Sealed</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-slate-200/60 dark:bg-slate-900/80 font-mono text-[14px] text-slate-700 dark:text-slate-300 truncate mb-2">
                      {digest.digestHashSha384}
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Memory Encryption: AES-128/256-XTS Active</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Hypervisor-Blind Enclave Protected
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <KeyRound size={16} className="text-cyan-500" />
              Cryptographic Enclave Attestation: Host OS and Hypervisor Have Zero Memory Visibility
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Complete Zero-Trust Cloud Isolation
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Attestation Diagnostics
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Verification Time</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.verificationLatencyMs.toFixed(1)} ms
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Security Bits</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.securityBitsEnforced} Bits
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Enclave Memory Encryption</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasEncryptedMem ? 'Hardware AES-XTS Active' : 'Unencrypted'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Silicon Root of Trust</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasRootOfTrust ? 'Factory Silicon Key Fused' : 'Emulated'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Remote Attestation Quote</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <FileCheck size={16} /> {hasRemoteAttestation ? 'Cryptographically Verified' : 'Unverified'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Workload code executes inside confidential hardware enclave with provable isolation.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Runtime Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Silicon Root-of-Trust Attested | Full Memory Encryption Active | Zero Hypervisor Taint
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2029 Attestation Pipeline
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConfidentialComputeAttestationPipelineSlide;
