// lint-allow: file-size reason="CustomerPersonaArchetypeSplitSlide kinetic persona comparison breakdown" max=160
import React from 'react';
import type { CustomerPersonaArchetypeSplitSlideData } from '../../types/suite2026Archetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Users, CheckCircle2, UserCheck, Target, Sparkles, Check } from 'lucide-react';

const DEF_DIMENSIONS = [
  { id: 'd1', dimensionName: 'Core Operational Mandate', primaryPersonaValue: 'Sub-second real-time consensus & 99.999% uptime', secondaryPersonaValue: 'Zero audit findings & cryptographic chain-of-custody', isPositive: true, isDifferentiator: true, hasQuantitativeMetric: false },
  { id: 'd2', dimensionName: 'Annual Purchasing Authority', primaryPersonaValue: '$5.0M+ unrestricted platform budget', secondaryPersonaValue: '$2.5M+ compliance & security tooling budget', isPositive: true, isDifferentiator: false, hasQuantitativeMetric: true },
  { id: 'd3', dimensionName: 'Primary Buying Trigger', primaryPersonaValue: 'High latency and unexplainable data loss during peak load', secondaryPersonaValue: 'Strict sovereign regulatory mandate & cross-border penalties', isPositive: true, isDifferentiator: true, hasQuantitativeMetric: false },
  { id: 'd4', dimensionName: 'Key Success Metric (KPI)', primaryPersonaValue: 'Sub-5ms P99 transaction latency & zero downtime', secondaryPersonaValue: '100% automated SOC2 / ISO 27001 evidence attestation', isPositive: true, isDifferentiator: true, hasQuantitativeMetric: true },
];

const STAGES = [
  { step: 1, name: 'Mandate & Scope', index: 0, desc: 'Operational priorities and architectural expectations' },
  { step: 2, name: 'Budget & Authority', index: 1, desc: 'Discretionary funding capacity and approval thresholds' },
  { step: 3, name: 'Pain Point Triggers', index: 2, desc: 'Catalysts compelling urgent migration away from legacy' },
  { step: 4, name: 'Target KPI Alignment', index: 3, desc: 'Quantitative acceptance gates for contract renewal' },
];

export const CustomerPersonaArchetypeSplitSlide: React.FC<{ slide?: CustomerPersonaArchetypeSplitSlideData; data?: CustomerPersonaArchetypeSplitSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const dimensions = data?.dimensions?.length ? data.dimensions : DEF_DIMENSIONS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-sky-500/10 text-sky-800 dark:text-sky-300 border border-sky-500/20 flex items-center gap-2">
              <Users size={16} className="text-sky-500" /> {data?.kicker || 'IDEAL CUSTOMER PROFILE & PERSONA SPLIT'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-violet-500/15 text-violet-800 dark:text-violet-300 border border-violet-500/30 flex items-center gap-2">
              <Target size={14} /> Market Split: {data?.marketShareSplit || '65% Platform / 35% SecOps'}
            </span>
          </div>
          <h1 className="text-[48px] font-ubuntu font-bold tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Customer Persona Archetype Split: Technical Decision-Makers'}
          </h1>
          <p className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Comparative operational breakdown between Chief Technology Officers and VP SecOps buying centers.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Validation</span><span className="text-emerald-600 dark:text-emerald-400 font-bold">48 Field Interviews</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Chief Software Engineer</span><span className="text-slate-800 dark:text-slate-200 font-bold">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {STAGES.map((st, idx) => (
          <button key={st.step} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-90' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-60 text-slate-500 dark:text-slate-400'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-white dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.name}</span>
            </div>
            <span className="text-[14px] opacity-75">Phase {st.step}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 z-10 my-auto h-[480px]">
        {/* Persona A: CTO */}
        <div className={`plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${currentStep === 0 || currentStep === 2 ? 'ring-2 ring-[var(--pres-accent)] shadow-2xl scale-[1.01]' : ''}`}>
          <div className="flex items-center justify-between pb-4 border-b border-[var(--pres-border)]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-violet-500/20 text-violet-700 dark:text-violet-400 border border-violet-500/30"><UserCheck size={24} /></div>
              <div>
                <h3 className="font-ubuntu text-2xl font-bold text-slate-900 dark:text-slate-100">{data?.primaryPersonaTitle || 'Chief Technology Officer (CTO)'}</h3>
                <span className="font-mono text-[14px] text-violet-700 dark:text-violet-400">Scale, Throughput & Platform Velocity</span>
              </div>
            </div>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-violet-500/10 text-violet-800 dark:text-violet-300 border border-violet-500/20 font-bold">Primary Archetype</span>
          </div>

          <div className="space-y-4 my-4 font-mono text-[14px]">
            {dimensions.map((dim, idx) => (
              <div key={dim.id} className={`p-3.5 rounded-xl border transition-all ${idx === currentStep ? 'bg-[var(--pres-accent)]/20 border-[var(--pres-accent)] shadow-md' : 'bg-slate-100/60 dark:bg-black/20 border-slate-200 dark:border-slate-800/60 opacity-90'}`}>
                <div className="text-[14px] uppercase text-slate-500 dark:text-slate-400 mb-1 flex items-center justify-between">
                  <span>{dim.dimensionName}</span>
                  {idx === currentStep && <Sparkles size={14} className="text-violet-600 dark:text-violet-400" />}
                </div>
                <div className="font-poppins text-[15px] font-semibold text-slate-800 dark:text-slate-200">{dim.primaryPersonaValue}</div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 font-mono text-[14px] text-violet-800 dark:text-violet-300 flex items-center gap-2">
            <Check size={16} /> Decision Driver: Proven distributed systems architecture without vendor lock-in.
          </div>
        </div>

        {/* Persona B: VP SecOps */}
        <div className={`plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${currentStep === 1 || currentStep === 3 ? 'ring-2 ring-emerald-500 shadow-2xl scale-[1.01]' : ''}`}>
          <div className="flex items-center justify-between pb-4 border-b border-[var(--pres-border)]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"><UserCheck size={24} /></div>
              <div>
                <h3 className="font-ubuntu text-2xl font-bold text-slate-900 dark:text-slate-100">{data?.secondaryPersonaTitle || 'VP of Security & Compliance'}</h3>
                <span className="font-mono text-[14px] text-emerald-700 dark:text-emerald-400">Zero Trust, Enclave Boundaries & Audits</span>
              </div>
            </div>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 font-bold">Security Archetype</span>
          </div>

          <div className="space-y-4 my-4 font-mono text-[14px]">
            {dimensions.map((dim, idx) => (
              <div key={dim.id} className={`p-3.5 rounded-xl border transition-all ${idx === currentStep ? 'bg-emerald-500/20 border-emerald-500 shadow-md' : 'bg-slate-100/60 dark:bg-black/20 border-slate-200 dark:border-slate-800/60 opacity-90'}`}>
                <div className="text-[14px] uppercase text-slate-500 dark:text-slate-400 mb-1 flex items-center justify-between">
                  <span>{dim.dimensionName}</span>
                  {idx === currentStep && <Sparkles size={14} className="text-emerald-600 dark:text-emerald-400" />}
                </div>
                <div className="font-poppins text-[15px] font-semibold text-slate-800 dark:text-slate-200">{dim.secondaryPersonaValue}</div>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono text-[14px] text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
            <Check size={16} /> Decision Driver: Continuous automated attestation and zero regulatory data leaks.
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase">Focus Attribute:</span>
          <span className="text-[var(--pres-accent)] font-bold">{dimensions[currentStep]?.dimensionName}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400">Step {currentStep + 1} of 4</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 size={16} /> Double-Validated ICP</span>
        </div>
      </div>
    </div>
  );
};
