// lint-allow: file-size reason="Soc2Type2EvidenceStreamSlide kinetic 4-step Merkle compliance orchestration" max=120
import React from 'react';
import type { Soc2Type2ContinuousEvidenceStreamSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createSoc2Type2EvidenceStreamSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { FileCheck, CheckCircle2, ShieldCheck, Activity, Lock } from 'lucide-react';

export const Soc2Type2EvidenceStreamSlide: React.FC<{ slide?: Soc2Type2ContinuousEvidenceStreamSlideData; data?: Soc2Type2ContinuousEvidenceStreamSlideData }> = ({ slide, data: pData }) => {
  const fallback = createSoc2Type2EvidenceStreamSlide('default-soc2-type2-evidence');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data.complianceStages?.length ? data.complianceStages : fallback.complianceStages;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const rules = data.trustRules?.length ? data.trustRules : fallback.trustRules;
  const merkleBlock = data.merkleBlocks?.[0] || fallback.merkleBlocks[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <FileCheck size={15} className="text-violet-500" />{data.kicker || 'ENTERPRISE ASSURANCE & GOVERNANCE'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {data.auditFirmName || 'Schellman & Company'} • Continuous Merkle Attestation
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'SOC 2 Type II Continuous Evidence Stream: Real-Time Audit Ledger'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Cryptographic Merkle tree anchoring of cloud telemetry eliminating periodic audit friction'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Compliance</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.complianceScorePercent || 100}%</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Controls</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">{data.totalControlsMonitored || 112}/112</span></div>
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
            <span className="text-[10px] opacity-75 truncate max-w-[120px]">{st.evidenceThroughputFormatted}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-auto h-[490px] items-stretch">
        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 0 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-400 block mb-1">01. TRUST CRITERIA</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">Live Policy Ingestion</h3></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {rules.map((rule) => (
              <div key={rule.ruleCode} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between text-slate-200 font-bold"><span>{rule.ruleCode}</span><span className="text-emerald-400 text-[10px]">100% PASS</span></div>
                <div className="text-[11px] text-slate-400 leading-relaxed">{rule.description}</div>
                <div className="text-[10px] text-sky-300">Source: {rule.sourceSystem}</div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-slate-400">Sampling: Real-Time (60s)</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 1 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 block mb-1">02. TELEMETRY DIGEST</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">SHA-256 Event Hashing</h3></div>
          <div className="space-y-2 font-mono text-xs my-3">
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800"><span className="text-slate-400 text-[10px] block">CLOUDTRAIL</span><span className="text-emerald-300 text-[11px] font-bold">1,420 Events/sec Ingested</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800"><span className="text-slate-400 text-[10px] block">GITHUB AUDIT</span><span className="text-emerald-300 text-[11px] font-bold">Signed PR Commits Verified</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800"><span className="text-slate-400 text-[10px] block">OKTA IDENTITY</span><span className="text-emerald-300 text-[11px] font-bold">MFA Challenge Digests Anchored</span></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-slate-400">Latency: 8ms Normalization</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 2 ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-400 block mb-1">03. MERKLE ANCHOR</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">Immutable Storage</h3></div>
          <div className="space-y-2 font-mono text-xs my-3">
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800"><span className="text-slate-400 text-[10px] block">BLOCK HEIGHT</span><span className="text-violet-300 text-sm font-bold">#{merkleBlock?.blockHeight || 84912}</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800"><span className="text-slate-400 text-[10px] block">ROOT HASH</span><span className="text-slate-300 text-[11px] font-mono truncate block">{merkleBlock?.rootMerkleTreeHash || '0x4b78...cd45'}</span></div>
            <div className="p-2 rounded-lg bg-black/30 border border-slate-800"><span className="text-slate-400 text-[10px] block">EVIDENCE ITEMS</span><span className="text-emerald-300 text-[11px] font-bold">85,200 Attested Events</span></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-emerald-400 flex items-center gap-1"><Lock size={12} /> Immutable</div>
        </div>

        <div className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${currentStep === 3 ? 'border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg' : 'border-slate-800/60'}`}>
          <div className="pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 block mb-1">04. TRUST CENTER</span><h3 className="font-ubuntu text-sm font-bold text-slate-100">Live Certification</h3></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-slate-400 text-[10px] block">AUDIT OPINION</span>
              <span className="text-emerald-400 text-sm font-bold block">100% UNQUALIFIED</span>
              <span className="text-slate-300 text-[11px]">Zero Deficiencies Reported</span>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800"><span className="text-slate-400 text-[10px] block">ACCESS</span><span className="text-sky-300 text-[11px] font-bold">Live Merkle Query API</span></div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[10px] text-emerald-400 flex justify-between"><span>Period:</span><span className="font-bold">Continuous (2026)</span></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Continuous Audit Certified</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Evidence Throughput: <strong className="text-slate-200">1,420 events/sec</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Deficiency Findings: <strong className="text-emerald-400">0 (Zero Exceptions)</strong></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span>
          <span>Step {currentStep + 1} of {stages.length}</span>
        </div>
      </div>
    </div>
  );
};
