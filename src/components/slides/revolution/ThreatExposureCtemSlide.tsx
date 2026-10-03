// lint-allow: file-size reason="ThreatExposureCtemSlide kinetic 4-step orchestration" max=120
import React from 'react';
import type { ThreatExposureCtemSlideData } from '../../../types/kineticRevolutionArchetypes';
import { createThreatExposureCtemSlide } from '../../../utils/kineticRevolutionFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldAlert, CheckCircle2, ShieldCheck, Target, Crosshair } from 'lucide-react';

const STAGES = [
  { index: 0, title: 'Surface Scoping', desc: 'Perimeter & VPC mapping' },
  { index: 1, title: 'EPSS Prioritization', desc: 'Exploitability scoring filter' },
  { index: 2, title: 'Attack Simulation', desc: 'Defensive controls validation' },
  { index: 3, title: 'Mobilization & Fix', desc: 'Automated patch acceleration' },
];

export const ThreatExposureCtemSlide: React.FC<{ slide?: ThreatExposureCtemSlideData; data?: ThreatExposureCtemSlideData }> = ({ slide, data: pData }) => {
  const fallback = createThreatExposureCtemSlide('default-threat-exposure');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const vectors = data.vectors?.length ? data.vectors : fallback.vectors;
  const pillars = data.pillarMetrics?.length ? data.pillarMetrics : fallback.pillarMetrics;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <ShieldAlert size={15} className="text-violet-500" />
              {data.kicker || 'CYBERSECURITY OPERATIONS'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> Target Perimeter: {data.targetEnterprisePerimeter}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Continuous Threat Exposure Management (CTEM) & Exploit Velocity'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Continuous five-phase attack surface validation prioritizing actionable exploitability (EPSS) over raw vulnerability volumetric counts.'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Risk Score</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.compositeRiskScore} / 100</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Exposures</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">{data.totalValidatedExposures} Validated</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">MTTR Delta</span><span className="text-xs font-bold text-emerald-400">{data.reductionTrendPercent}</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {STAGES.map((st, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          return (
            <button key={st.index} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : isCompleted ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : isCompleted ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{isCompleted ? '✓' : idx + 1}</span>
                <span className="font-bold">{st.title}</span>
              </div>
              <span className="text-[10px] opacity-75 truncate max-w-[130px]">{st.desc}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-5 z-10 my-auto h-[490px] items-stretch">
        <div className="col-span-7 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex-1 flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2"><Crosshair size={14} /> Prioritized Attack Surface Vectors</span>
            <div className="space-y-2 my-2">
              {vectors.map((v) => (
                <div key={v.id} className={`p-3 rounded-xl border font-mono text-xs flex justify-between items-center ${v.isUnderActiveAttack ? 'bg-rose-500/15 border-rose-500/60 text-slate-100 shadow-[0_0_12px_rgba(244,63,94,0.3)]' : 'bg-slate-800/30 border-slate-700/50 text-slate-300'}`}>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-100">{v.vectorName}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-slate-400">{v.cveIdentifier}</span>
                    </div>
                    <span className="text-[11px] text-slate-400">Category: {v.assetCategory} • EPSS Score: {(v.exploitabilityScore * 100).toFixed(0)}%</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold block mb-1 ${v.blastRadius === 'critical' ? 'bg-rose-500/20 text-rose-300' : 'bg-sky-500/20 text-sky-300'}`}>{v.blastRadius}</span>
                    <span className="text-[10px] text-emerald-400 font-bold">{v.isRemediated ? 'Remediated' : 'Mitigation Active'}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-black/20 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>Automated Ticket Sync: <strong className="text-emerald-400">Jira/ServiceNow Active</strong></span>
              <span className="text-sky-300 font-bold">Realtime Telemetry: CONNECTED</span>
            </div>
          </div>
        </div>

        <div className="col-span-5 flex flex-col justify-between gap-3">
          <div className="plane-2-elevated p-4 rounded-2xl border border-slate-700/60 flex-1 flex flex-col justify-between">
            <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2"><Target size={14} className="text-violet-400" /> Defense Pillar Telemetry</span>
            <div className="space-y-3 my-2">
              {pillars.map((p) => (
                <div key={p.id} className="p-3 rounded-xl border border-slate-700/50 bg-slate-800/20 font-mono text-xs flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-200 block">{p.pillarName}</span>
                    <span className="text-[10px] text-slate-400">{p.vulnCount} Active Exposures</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-400 block">{p.mttrHours}h MTTR</span>
                    <span className="text-[10px] text-slate-400 font-bold">{p.isCompliant ? 'Compliant' : 'Evaluating'}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-black/20 rounded-xl border border-slate-800/80 font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>Security Officer: <strong>Alim Ul Karim (Chief Software Engineer)</strong></span>
              <span className="text-emerald-400 font-bold">CTEM Readiness: 100%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Continuous Attack Surface Validation Active</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>EPSS Exploitability Filter: <strong className="text-slate-200">&gt; 85% Severity Gated</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Mean Time to Remediate: <span className="text-emerald-400">2.1 Hours Average</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Stage: {STAGES[currentStep].title}</span>
          <span>Step {currentStep + 1} of {STAGES.length}</span>
        </div>
      </div>
    </div>
  );
};
