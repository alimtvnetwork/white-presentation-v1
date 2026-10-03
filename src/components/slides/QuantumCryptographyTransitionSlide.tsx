import React, { useState } from 'react';
import type { QuantumCryptographyTransitionSlideData, PqcTransitionMilestoneItem } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ShieldCheck, Key, ArrowRight, CheckCircle2 } from 'lucide-react';
const DEFAULT_MILESTONES: PqcTransitionMilestoneItem[] = [
  { id: 'm1', milestoneIndex: 1, milestoneName: 'Cryptographic Inventory', targetDeadlineQuarter: 'Q1 2025', completionPercent: 100, summary: 'Discovery of legacy RSA/ECC keys and cipher suites across fleet.', algorithms: [{ id: 'a1', classicAlgorithm: 'RSA-2048', pqcReplacement: 'ML-KEM-768', cryptoAgilityStatus: 'Mapped', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true }, { id: 'a2', classicAlgorithm: 'ECDH P-256', pqcReplacement: 'X25519Kyber', cryptoAgilityStatus: 'Prototyped', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true }], isMilestoneAchieved: true, isCryptoAgileArchitecture: true, hasRegulatoryApproval: true },
  { id: 'm2', milestoneIndex: 2, milestoneName: 'Hybrid Key Exchange', targetDeadlineQuarter: 'Q3 2025', completionPercent: 85, summary: 'Dual classical-PQC key encapsulation in TLS 1.3 edge terminations.', algorithms: [{ id: 'a3', classicAlgorithm: 'ECDH P-384', pqcReplacement: 'ML-KEM-1024', cryptoAgilityStatus: 'In-Transit', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: false }, { id: 'a4', classicAlgorithm: 'RSA-4096', pqcReplacement: 'ML-DSA-65', cryptoAgilityStatus: 'Validating', isHardwareAccelerated: false, isNistFipsCompliant: true, hasZeroPerformancePenalty: true }], isMilestoneAchieved: true, isCryptoAgileArchitecture: true, hasRegulatoryApproval: true },
  { id: 'm3', milestoneIndex: 3, milestoneName: 'Digital Signatures Shift', targetDeadlineQuarter: 'Q1 2026', completionPercent: 60, summary: 'Code signing, PKI root certificates and stateful hash transitions.', algorithms: [{ id: 'a5', classicAlgorithm: 'ECDSA P-256', pqcReplacement: 'ML-DSA-87', cryptoAgilityStatus: 'Staging', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: false }, { id: 'a6', classicAlgorithm: 'Ed25519', pqcReplacement: 'SLH-DSA-128', cryptoAgilityStatus: 'Planned', isHardwareAccelerated: false, isNistFipsCompliant: true, hasZeroPerformancePenalty: false }], isMilestoneAchieved: false, isCryptoAgileArchitecture: true, hasRegulatoryApproval: false },
  { id: 'm4', milestoneIndex: 4, milestoneName: 'Full Sovereign PQC Mesh', targetDeadlineQuarter: 'Q4 2026', completionPercent: 25, summary: 'Deprecation of classical public-key cryptography; pure FIPS post-quantum.', algorithms: [{ id: 'a7', classicAlgorithm: 'DH Groups 14+', pqcReplacement: 'Pure ML-KEM', cryptoAgilityStatus: 'Roadmap', isHardwareAccelerated: true, isNistFipsCompliant: true, hasZeroPerformancePenalty: true }, { id: 'a8', classicAlgorithm: 'Classical PKI', pqcReplacement: 'FIPS 204 CA', cryptoAgilityStatus: 'Roadmap', isHardwareAccelerated: false, isNistFipsCompliant: true, hasZeroPerformancePenalty: true }], isMilestoneAchieved: false, isCryptoAgileArchitecture: true, hasRegulatoryApproval: false },
];
export const QuantumCryptographyTransitionSlide: React.FC<{ slide: QuantumCryptographyTransitionSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const milestones = slide.transitionMilestones && slide.transitionMilestones.length > 0 ? slide.transitionMilestones : DEFAULT_MILESTONES;
  const currentStep = hoveredIdx !== null ? hoveredIdx : Math.min(deckActiveStep, Math.max(0, milestones.length - 1));

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between">
      <div className="flex items-start justify-between z-10">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="kicker-pill-badge text-xs font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-1.5"><Key size={13} className="text-violet-400" /> {slide.kicker || 'SOVEREIGN CRYPTOGRAPHY & QUANTUM RESILIENCE'}</span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20">{slide.cryptoFramework || 'NIST FIPS 203/204/205 Standards'}</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide.title || 'Quantum Cryptography Transition & PQC Agility Matrix'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-4xl" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{slide.subtitle || 'Post-Quantum Cryptographic Migration Roadmap from Classical RSA/ECC to NIST-Standardized Lattice Cryptosystems'}</p>
        </div>
        <div className="text-right font-mono bg-violet-950/30 border border-violet-500/20 rounded-2xl p-3 px-5">
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider">Overall PQC Readiness</div>
          <div className="text-3xl font-bold font-ubuntu text-emerald-600 dark:text-emerald-400">{slide.overallPqcReadinessPercent ?? 78}%</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[530px] items-stretch">
        {milestones.map((ms, idx) => {
          const isActive = idx === currentStep;
          const isDone = ms.isMilestoneAchieved || idx < currentStep;
          return (
            <div key={ms.id || idx} onMouseEnter={() => setHoveredIdx(idx)} onMouseLeave={() => setHoveredIdx(null)} style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)', color: 'var(--pres-text)' }} className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between transition-all duration-300 cursor-pointer ${isActive ? 'ring-2 ring-violet-500/60 shadow-2xl opacity-100' : isDone ? 'opacity-80' : 'opacity-40'} bg-gradient-to-b from-violet-500/10 to-indigo-500/5`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold bg-violet-600/20 text-slate-900 dark:text-violet-200 border border-violet-500/30">M0{idx + 1} • {ms.targetDeadlineQuarter}</span>
                  <span className="font-mono text-xs font-bold text-sky-600 dark:text-sky-400">{ms.completionPercent}%</span>
                </div>
                <h3 className="text-lg font-bold font-ubuntu tracking-tight mb-2 text-slate-900 dark:text-slate-100">{ms.milestoneName}</h3>
                <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-poppins mb-4 line-clamp-2">{ms.summary}</p>
                <div className="space-y-2 mb-3">
                  {(ms.algorithms || []).slice(0, 2).map((algo) => (
                    <div key={algo.id} className="p-2.5 rounded-xl bg-black/15 dark:bg-black/25 border border-white/5 font-mono text-xs">
                      <div className="flex items-center justify-between text-slate-600 dark:text-slate-400 text-[10px] mb-1">
                        <span>{algo.classicAlgorithm}</span>
                        <ArrowRight size={10} className="text-violet-400" />
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">{algo.pqcReplacement}</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px] text-slate-500">
                        <span>{algo.cryptoAgilityStatus}</span>
                        {algo.isNistFipsCompliant && <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1"><ShieldCheck size={9} /> FIPS 203</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                <span className={`flex items-center gap-1 ${isDone ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-700 dark:text-amber-400'}`}><CheckCircle2 size={12} /> {isDone ? 'Milestone Cleared' : 'In Transition'}</span>
                {ms.hasRegulatoryApproval && <span className="text-violet-700 dark:text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20 text-[10px]">Attested</span>}
              </div>
            </div>
          );
        })}
      </div>
      <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs z-10">
        <div className="flex items-center gap-3">
          <span style={{ color: 'var(--pres-text-muted)' }}>Chief Cryptographer:</span>
          <span className="text-slate-800 dark:text-slate-200 font-bold">{slide.chiefCryptographer || 'Dr. Elena Vance'}</span>
          <span className="text-slate-500">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>{slide.cryptographerTitle || 'Principal Cryptographic Engineer'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-bold"><ShieldCheck size={13} /> {slide.isFipsCertified ? 'FIPS 140-3 & PQC Validated' : 'PQC Agility Validation'}</span>
        </div>
      </div>
    </div>
  );
};
