// lint-allow: file-size reason="ConfidentialGpuAttestSlide kinetic 4-stage SPDM RoT attestation" max=120
import React from 'react';
import type { ConfidentialGpuAttestSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { KeyRound, CheckCircle2, ShieldCheck, Activity, Lock, Cpu } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Nonce Challenge', stageSubtitle: 'DMTF SPDM 1.2 cryptographically random nonce generation', cryptographicStandard: 'SPDM 1.2 + SHA-384', attestationAuthority: 'NVIDIA Hardware RoT', isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'RoT Measurement', stageSubtitle: 'Hardware-anchored RIM measurement reading via PCIe IDE', cryptographicStandard: 'ECDSA P-384 SVID', attestationAuthority: 'On-Die Security Engine', isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'Policy Verify', stageSubtitle: 'Golden reference PCR comparison in isolated verifier', cryptographicStandard: 'NIST SP 800-193', attestationAuthority: 'Cloud Verifier Service', isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Key Injection', stageSubtitle: 'Ephemeral AES-256-GCM session key unwrapping in HBM enclave', cryptographicStandard: 'AES-256-GCM Ephemeral', attestationAuthority: 'KMS Vault Attested', isActive: false, isCompleted: false },
];
const DEF_EVIDENCE = [
  { id: 'e1', componentTarget: 'GPU VBIOS / Microcode', sha384MeasurementHash: '9a3f...d71b', expectedGoldenHash: '9a3f...d71b', verificationStatus: 'MATCHED', isHardwareVerified: true, hasTamperProofShield: true, isMatched: true },
  { id: 'e2', componentTarget: 'Enclave Firmware RoT', sha384MeasurementHash: '4c8e...f02a', expectedGoldenHash: '4c8e...f02a', verificationStatus: 'MATCHED', isHardwareVerified: true, hasTamperProofShield: true, isMatched: true },
  { id: 'e3', componentTarget: 'PCIe Link TDISP Stream', sha384MeasurementHash: 'b51d...638c', expectedGoldenHash: 'b51d...638c', verificationStatus: 'ENCRYPTED', isHardwareVerified: true, hasTamperProofShield: true, isMatched: true },
];

export const ConfidentialGpuAttestSlide: React.FC<{ slide?: ConfidentialGpuAttestSlideData; data?: ConfidentialGpuAttestSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.attestationStages?.length ? data.attestationStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const evidence = data?.evidenceNodes?.length ? data.evidenceNodes : DEF_EVIDENCE;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><KeyRound size={15} className="text-amber-500" />{data?.kicker || 'HARDWARE CONFIDENTIAL COMPUTING'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> {data?.enclaveSecurityLevel || 'CC-On EAL5+'} • Zero Host Snooping</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Confidential GPU Attestation: Zero-Trust Hardware Enclave Flow'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'SPDM 1.2 root-of-trust challenge, PCR measurement verification, and ephemeral AES-256 session key unwrap'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">GPU Accelerator</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.acceleratorModel || 'NVIDIA H100 CC'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">RoT Authority</span><span className="text-sm font-bold text-emerald-400">On-Die Hardware Engine</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`step-interactive text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-[10px] opacity-75 truncate max-w-[110px]">{st.cryptographicStandard}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-amber-500">HARDWARE ROOT-OF-TRUST</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">SPDM 1.2</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">CHALLENGE PROTOCOL</span>
              <div className="text-slate-200 font-bold">{stages[currentStep]?.cryptographicStandard}</div>
              <div className="text-[11px] text-slate-400">Cryptographically fresh 256-bit entropy challenge</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">ATTESTATION AUTHORITY</span>
              <div className="text-emerald-400 text-[11px] font-bold">{stages[currentStep]?.attestationAuthority}</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><Lock size={13} /> Zero Host Hypervisor Access Enforced</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300">PCR GOLDEN MANIFEST CHECK</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">NIST SP 800-193</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">CURRENT ATTESTATION STAGE</span>
              <div className="text-violet-300 font-bold text-xs">{stages[currentStep]?.stageSubtitle}</div>
              <div className="text-[11px] text-slate-400 leading-relaxed">Cryptographic hash comparison guarantees microcode has not been tampered with or hooked.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 flex justify-between text-[11px]"><span className="text-slate-400">Measurement Hash:</span><strong className="text-emerald-400">SHA-384 BITWISE 1:1</strong></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Tamper-Proof Silicon Shield Active</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400">ATTESTED ENCLAVE EVIDENCE</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">HBM Encrypted</span></div>
          <div className="space-y-2 font-mono text-xs my-3">
            {evidence.map((ev) => (
              <div key={ev.id} className="p-2.5 rounded-xl bg-black/30 border border-slate-800 flex items-center justify-between">
                <div><span className="text-[10px] text-slate-400 block">{ev.componentTarget}</span><span className="text-slate-300 text-[10px] font-mono">{ev.sha384MeasurementHash}</span></div>
                <div className="text-right"><span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">{ev.verificationStatus}</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Session Encryption:</span><strong className="font-bold">AES-256-GCM ACTIVE</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> SPDM Hardware RoT Verified</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Ephemeral Key: <strong className="text-slate-200">INJECTED ENCLAVE ONLY</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Host Snooping: <strong className="text-emerald-400">IMPOSSIBLE (HARDWARE ISOLATED)</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400"><span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span><span>Step {currentStep + 1} of {stages.length}</span></div>
      </div>
    </div>
  );
};
