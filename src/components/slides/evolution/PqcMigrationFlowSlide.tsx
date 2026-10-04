// lint-allow: file-size reason="PqcMigrationFlowSlide kinetic 4-stage post-quantum cryptography migration" max=120
import React from 'react';
import type { PqcMigrationFlowSlideData } from '../../../types/globalPptEvolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Shield, ShieldCheck, CheckCircle2, Lock, Key, ArrowRight, Activity, Terminal } from 'lucide-react';

const DEF_STAGES = [
  { stepIndex: 1, stageName: 'Asset Discovery', stageSubtitle: 'Automated inventory of TLS certificates, SSH keys, and asymmetric credentials', orchestrationEngine: 'CryptoScanner Daemon v4', targetStandard: 'CBOM', endpointsMigratedCount: 48200, isActive: true, isCompleted: false },
  { stepIndex: 2, stageName: 'Hybrid KEM Dual-Stack', stageSubtitle: 'X25519 + ML-KEM-768 hybrid key encapsulation deployed across ingress mesh', orchestrationEngine: 'Envoy PQC Filter Envoy-1.32', targetStandard: 'NIST FIPS 203', endpointsMigratedCount: 38400, isActive: false, isCompleted: false },
  { stepIndex: 3, stageName: 'Signature Migration', stageSubtitle: 'Transitioning mTLS and code-signing infrastructure to ML-DSA and SLH-DSA', orchestrationEngine: 'Vault Enterprise PQC CA', targetStandard: 'NIST FIPS 204/205', endpointsMigratedCount: 24100, isActive: false, isCompleted: false },
  { stepIndex: 4, stageName: 'Agility Attestation', stageSubtitle: 'Formal deprecation of legacy RSA/ECC primitives and regulatory attestation seal', orchestrationEngine: 'Consensus Attestation Ledger', targetStandard: 'Zero-Knowledge PQC', endpointsMigratedCount: 48200, isActive: false, isCompleted: false },
];

const DEF_CIPHERS = [
  { id: 'c1', suiteIndex: 1, primitiveName: 'ML-KEM-768 (Kyber)', classicalPair: 'X25519', securityCategory: 'NIST Cat 3', migrationProgressPercent: 98.4, isQuantumResistant: true, hasHardwareAccelerationActive: true, isCompliantWithFipsStandards: true },
  { id: 'c2', suiteIndex: 2, primitiveName: 'ML-DSA-65 (Dilithium)', classicalPair: 'ECDSA P-384', securityCategory: 'NIST Cat 3', migrationProgressPercent: 92.1, isQuantumResistant: true, hasHardwareAccelerationActive: true, isCompliantWithFipsStandards: true },
  { id: 'c3', suiteIndex: 3, primitiveName: 'SLH-DSA-128s (SPHINCS+)', classicalPair: 'RSA-4096', securityCategory: 'NIST Cat 1', migrationProgressPercent: 88.6, isQuantumResistant: true, hasHardwareAccelerationActive: false, isCompliantWithFipsStandards: true },
  { id: 'c4', suiteIndex: 4, primitiveName: 'Hybrid X25519 + Kyber768', classicalPair: 'Classical ECDH', securityCategory: 'Forward Secrecy', migrationProgressPercent: 99.8, isQuantumResistant: true, hasHardwareAccelerationActive: true, isCompliantWithFipsStandards: true },
];

export const PqcMigrationFlowSlide: React.FC<{ slide?: PqcMigrationFlowSlideData; data?: PqcMigrationFlowSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data?.migrationStages?.length ? data.migrationStages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const ciphers = data?.cipherSuites?.length ? data.cipherSuites : DEF_CIPHERS;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.12em] uppercase flex items-center gap-2"><Shield size={16} className="text-violet-500" />{data?.kicker || 'POST-QUANTUM CRYPTOGRAPHY TRANSITION'}</span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> {data?.quantumResilienceScorePercent || 96.8}% Resilience Score</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'PQC Migration Orchestration Flow: Enterprise Post-Quantum Transition'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Phased migration pipeline deploying NIST FIPS 203/204/205 quantum-safe ciphersuites across global infrastructure'}</p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-sm">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Program Standard</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.targetComplianceDeadline || 'Q4 2027 NIST Mandate'}</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Hybrid Stack</span><span className="text-sm font-bold text-emerald-500">ACTIVE DUAL-STACK</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-sm block uppercase">Chief Software Engineer</span><span className="text-sm font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {stages.map((st, idx) => (
          <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`step-interactive text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-sm flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-white scale-[1.02] animate-active-beacon' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 opacity-75' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-400'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.stageName}</span>
            </div>
            <span className="text-sm opacity-75">{st.targetStandard}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[480px] items-stretch">
        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-violet-400">CIPHER SUITE PORTFOLIO</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20">4 Ciphers</span></div>
          <div className="space-y-3 font-mono text-sm my-3">
            {ciphers.map((c) => (
              <div key={c.id} className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-1">
                <div className="flex justify-between items-center"><span className="font-bold text-slate-200">{c.primitiveName}</span><span className="text-sm text-emerald-400 font-bold">{c.migrationProgressPercent}% Migrated</span></div>
                <div className="flex justify-between text-sm text-slate-400"><span>Classical: {c.classicalPair}</span><span className="text-sky-300">{c.securityCategory}</span></div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><ShieldCheck size={16} /> NIST FIPS 203/204/205 Verified</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 1 || currentStep === 2 ? 'ring-2 ring-[var(--pres-accent)] shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-sky-300">ACTIVE STAGE EXECUTION</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Step {currentStep + 1} of 4</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Active Stage Name</span>
              <div className="text-sky-300 font-bold text-base">{stages[currentStep]?.stageName}</div>
              <div className="text-sm text-slate-300 leading-relaxed font-poppins">{stages[currentStep]?.stageSubtitle}</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <div className="flex justify-between text-sm"><span className="text-slate-400">Orchestrator:</span><span className="text-slate-200 font-bold">{stages[currentStep]?.orchestrationEngine}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-400">Endpoints Migrated:</span><span className="text-emerald-400 font-bold">{stages[currentStep]?.endpointsMigratedCount.toLocaleString()}</span></div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-sky-400 flex items-center gap-2"><Key size={16} /> Automated Rollback Guard Armed</div>
        </div>

        <div className={`plane-2-elevated p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'ring-2 ring-emerald-500 shadow-xl' : ''}`}>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]"><span className="font-mono text-sm font-bold text-emerald-400">QUANTUM RESILIENCE KPI</span><span className="font-mono text-sm px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Attested</span></div>
          <div className="space-y-4 font-mono text-sm my-3">
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Overall Resilience</span>
              <div className="text-emerald-400 font-bold text-3xl font-mono">{data?.quantumResilienceScorePercent || 96.8}%</div>
              <div className="text-sm text-slate-400">Harvest-Now-Decrypt-Later Immune</div>
            </div>
            <div className="p-4 rounded-xl bg-black/20 border border-[var(--pres-border)] space-y-2">
              <span className="text-sm text-slate-400 block uppercase">Zero-Trust Signature CA</span>
              <div className="text-sky-300 font-bold text-base">ML-DSA-65 Root Certified</div>
              <div className="text-sm text-slate-400">Automated Cipher Agility Fallback</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-black/20 border border-[var(--pres-border)] font-mono text-sm text-emerald-400 flex items-center gap-2"><Activity size={16} /> Enterprise Executive Sign-Off Completed</div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-sm z-10">
        <div className="flex items-center gap-4"><span className="text-sm uppercase text-slate-400">Cryptographic Agility:</span><span className="text-emerald-400 font-bold">VERIFIED NATIVE FIPS 203/204/205</span></div>
        <div className="flex items-center gap-6"><span className="text-sm text-slate-400">Active Step: <strong className="text-slate-200">{currentStep + 1} / 4</strong></span><span className="text-sm text-slate-400">Audit Status: <strong className="text-emerald-400">PASSED</strong></span></div>
      </div>
    </div>
  );
};
