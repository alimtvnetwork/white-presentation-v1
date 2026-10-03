// lint-allow: file-size reason="PostQuantumPqcKemSlide kinetic 4-step quantum key encapsulation" max=120
import React from 'react';
import type { PostQuantumPqcKemHandshakeSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createPostQuantumPqcKemSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Lock, CheckCircle2, ShieldCheck, Activity, KeyRound, ShieldAlert, Server } from 'lucide-react';

export const PostQuantumPqcKemSlide: React.FC<{ slide?: PostQuantumPqcKemHandshakeSlideData; data?: PostQuantumPqcKemHandshakeSlideData }> = ({ slide, data: pData }) => {
  const fallback = createPostQuantumPqcKemSlide('default-post-quantum-pqc-kem');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data.handshakeStages?.length ? data.handshakeStages : fallback.handshakeStages;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Lock size={15} className="text-violet-500" />{data.kicker || 'QUANTUM-RESISTANT CRYPTOGRAPHY'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {data.handshakeStandard || 'NIST FIPS 203 Hybrid TLS 1.3'} • Post-Quantum Secure
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Post-Quantum PQC-KEM Handshake: NIST FIPS 203 Hybrid Security'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Hybrid classical X25519 + ML-KEM-768 key encapsulation safeguarding against store-now-decrypt-later'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">PQC Algorithm</span><span className="text-lg font-bold text-slate-900 dark:text-violet-400">{data.quantumSafeAlgorithm || 'ML-KEM-768'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Handshake Time</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.handshakeLatencyFormatted || '1.42 ms'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-2.5">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-[10px] opacity-75 truncate max-w-[120px]">{st.payloadSizeFormatted}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-sky-400 flex items-center gap-2"><KeyRound size={16} /> CLIENT ENCLAVE</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">Ephemeral KeyGen</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">HYBRID INITIATOR KEYS</span>
              <div className="flex justify-between text-slate-200"><span>Classical:</span><strong className="text-sky-300">X25519 (32 Bytes)</strong></div>
              <div className="flex justify-between text-slate-200"><span>Quantum-Safe:</span><strong className="text-violet-300">Kyber-768 (1,184 Bytes)</strong></div>
            </div>
            <div className="text-slate-400 text-[11px] leading-relaxed">Generates ephemeral key pair inside isolated enclave. Side-channel constant-time polynomial multiplication enabled.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-slate-300 flex justify-between">
            <span>Client State:</span><span className="text-emerald-400 font-bold">{currentStep >= 1 ? 'PAYLOAD TRANSMITTED' : 'GENERATING CLIENTHELLO'}</span>
          </div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-2"><Server size={16} /> SERVER HSM / ENCLAVE</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">KEM Encapsulation</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">CIPHERTEXT DISPATCH</span>
              <div className="flex justify-between text-slate-200"><span>Encapsulated Ciphertext:</span><strong className="text-emerald-300">1,088 Bytes</strong></div>
              <div className="flex justify-between text-slate-200"><span>Shared Secret:</span><strong className="text-emerald-400">32 Bytes (SS_kem)</strong></div>
            </div>
            <div className="text-slate-400 text-[11px] leading-relaxed">Server encapsulates ephemeral shared secret against client Kyber public key; emits ciphertext packet back across wire.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-slate-300 flex justify-between">
            <span>Server State:</span><span className="text-emerald-400 font-bold">{currentStep >= 2 ? 'SECRET DERIVED' : currentStep === 1 ? 'ENCAPSULATING' : 'AWAITING CLIENTHELLO'}</span>
          </div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep >= 2 ? 'border-violet-500/60 ring-1 ring-violet-500/30 shadow-lg' : 'border-slate-800/70'}`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
            <span className="font-mono text-xs font-bold text-violet-300 flex items-center gap-2"><ShieldAlert size={16} /> HKDF-EXTRACT CHANNEL</span>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">Dual Key Derivation</span>
          </div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">FINAL TUNNEL SPECIFICATION</span>
              <div className="flex justify-between text-slate-200"><span>Derived Master:</span><strong className="text-violet-300">HKDF(SS_c || SS_q)</strong></div>
              <div className="flex justify-between text-slate-200"><span>Channel Cipher:</span><strong className="text-emerald-400">AES-256-GCM Line Rate</strong></div>
            </div>
            <div className="text-slate-400 text-[11px] leading-relaxed">Both endpoints combine classical and lattice secrets. Compromise of either primitive leaves session forward security intact.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-slate-300 flex justify-between">
            <span>Security Posture:</span><span className="text-emerald-400 font-bold">{currentStep >= 3 ? 'QUANTUM-IMMUNE LINE RATE' : 'DERIVING KEYS'}</span>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> NIST FIPS 203 Category 3 Hardened</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Side-Channel Protection: <strong className="text-slate-200">CONSTANT-TIME AVX2/AVX-512</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Hardware Acceleration: <span className="text-emerald-400">{data.hasHardwareAccelerationActive ? 'HSM INTEGRATED' : 'SOFTWARE'}</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span>
          <span>Step {currentStep + 1} of {stages.length}</span>
        </div>
      </div>
    </div>
  );
};
