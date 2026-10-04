// lint-allow: file-size reason="TalentCompetencyGapHeatmapSlide interactive workforce engineering capability heatmap" max=160
import React from 'react';
import type { TalentCompetencyGapHeatmapSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Users, CheckCircle2, TrendingUp, AlertTriangle, GraduationCap, ArrowUpRight } from 'lucide-react';

const DEF_DOMAINS = [
  { id: 'd1', domainName: 'Post-Quantum Cryptography & Lattice Math', targetHeadcount: 24, actualHeadcount: 14, proficiencyScore: 58, isCriticalCompetency: true, hasUpskillingProgramActive: true, isPositive: true },
  { id: 'd2', domainName: 'Distributed Systems & Raft Consensus Eng', targetHeadcount: 36, actualHeadcount: 28, proficiencyScore: 78, isCriticalCompetency: true, hasUpskillingProgramActive: true, isPositive: true },
  { id: 'd3', domainName: 'Autonomous Agentic Mesh Orchestration', targetHeadcount: 45, actualHeadcount: 22, proficiencyScore: 49, isCriticalCompetency: true, hasUpskillingProgramActive: true, isPositive: true },
  { id: 'd4', domainName: 'Hardware FPGA / ASIC Silicon Telemetry', targetHeadcount: 18, actualHeadcount: 16, proficiencyScore: 88, isCriticalCompetency: false, hasUpskillingProgramActive: false, isPositive: true },
];

export const TalentCompetencyGapHeatmapSlide: React.FC<{
  slide?: TalentCompetencyGapHeatmapSlideData;
  data?: TalentCompetencyGapHeatmapSlideData;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const domains = data?.domains?.length ? data.domains : DEF_DOMAINS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), domains.length - 1);
  const activeDomain = domains[currentStep] || domains[0];
  const gap = activeDomain.targetHeadcount - activeDomain.actualHeadcount;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-[14px] font-mono font-bold tracking-wider uppercase flex items-center gap-2">
              <Users size={16} className="text-violet-500" />
              {data?.kicker || 'HUMAN CAPITAL & COMPETENCY ARCHITECTURE'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500" />
              Cycle: {data?.workforcePlanningCycle || 'FY2026-H1 Capability Sprint'}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-[44px] font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Talent Competency Gap Heatmap: Critical Engineering Readiness'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-[16px] max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Rigorous organizational capability gap analysis mapping technical headcount velocity and upskilling investments.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Business Unit</span><span className="font-bold text-slate-900 dark:text-slate-100">{data?.businessUnitName || 'Global Core Systems Engineering'}</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Retention Policy</span><span className="font-bold text-emerald-500">KEYSTONE TALENT LOCKED</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Upskilling Budget</span><span className="font-bold text-violet-500">$4.5M Dedicated</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-3">
        {domains.map((d, idx) => {
          const isActive = idx === currentStep;
          const dGap = d.targetHeadcount - d.actualHeadcount;
          return (
            <button key={d.id} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-slate-900 dark:text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-80' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-500 dark:text-slate-400 blur-[0.5px]'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[14px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
                <span className="font-bold truncate text-[14px]">{d.domainName.split(' ')[0]}</span>
              </div>
              <span className={`text-[14px] px-2 py-0.5 rounded font-bold ${dGap > 10 ? 'bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/30' : 'bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30'}`}>-{dGap} Gap</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[460px] items-stretch">
        <div className="col-span-5 plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold text-violet-500 dark:text-violet-400">ORGANIZATIONAL PROFICIENCY BARS</span>
            <span className="font-mono text-[14px] px-2.5 py-1 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">4 Core Tracks</span>
          </div>
          <div className="space-y-4 my-auto font-mono text-[14px]">
            {domains.map((d, idx) => {
              const isSelected = idx === currentStep;
              return (
                <div key={d.id} onClick={() => jumpToStep(idx)} className={`p-3.5 rounded-xl border transition-all cursor-pointer ${isSelected ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/10 shadow-sm' : 'border-[var(--pres-border)] bg-slate-100/80 dark:bg-slate-800/40'}`}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-bold text-slate-900 dark:text-slate-100 text-[14px] truncate">{d.domainName}</span>
                    <span className="font-bold text-[14px]">{d.proficiencyScore}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700/50 overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-500 ${d.proficiencyScore >= 80 ? 'bg-emerald-500' : d.proficiencyScore >= 60 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${d.proficiencyScore}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center text-[14px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-[var(--pres-border)]">
            <span>Minimum Baseline Target: 80%</span>
            <span className="text-emerald-500 font-bold">Standard Exceeded in 2 Tracks</span>
          </div>
        </div>

        <div className="col-span-7 plane-2-elevated p-6 rounded-2xl border-2 border-[var(--pres-accent)] bg-[var(--pres-bg-card)] shadow-2xl flex flex-col justify-between scale-[1.01]">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold text-[var(--pres-accent)] flex items-center gap-2">
              <GraduationCap size={16} /> TALENT CAPACITY & REMEDIATION
            </span>
            <span className="font-mono text-[14px] px-2.5 py-1 rounded bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 font-bold">Domain {currentStep + 1} of {domains.length}</span>
          </div>
          <div className="space-y-4 font-mono text-[14px] my-3">
            <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)] space-y-1">
              <span className="text-[14px] text-slate-500 dark:text-slate-400 block uppercase">Competency Focus Area</span>
              <h3 className="text-[24px] font-ubuntu font-bold text-slate-900 dark:text-white leading-tight">{activeDomain.domainName}</h3>
              <div className={`text-[14px] font-bold ${activeDomain.isCriticalCompetency ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>{activeDomain.isCriticalCompetency ? 'CRITICAL STRATEGIC COMPETENCY GAP' : 'STABLE TALENT DEPTH'}</div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)]"><span className="text-[14px] text-slate-500 uppercase block">Actual Headcount</span><span className="text-[26px] font-bold text-slate-900 dark:text-white">{activeDomain.actualHeadcount} Staff</span></div>
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)]"><span className="text-[14px] text-slate-500 uppercase block">Target Headcount</span><span className="text-[26px] font-bold text-slate-900 dark:text-white">{activeDomain.targetHeadcount} Staff</span></div>
              <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30"><span className="text-[14px] text-rose-700 dark:text-rose-400 uppercase block">Headcount Deficit</span><span className="text-[26px] font-bold text-rose-700 dark:text-rose-400">-{gap} Roles</span></div>
            </div>
            <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)] space-y-1">
              <span className="text-[14px] text-emerald-600 dark:text-emerald-400 font-bold block uppercase flex items-center gap-1.5"><ArrowUpRight size={15} /> Active Remediation Pathway</span>
              <div className="font-poppins text-[14px] text-slate-700 dark:text-slate-100">Accelerated cohort recruiting combined with external contractor bridge to hit 100% capacity within 90 days.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono text-[14px] text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
            <CheckCircle2 size={16} /> Targeted Upskilling Curriculum Funded & Mandatory for Existing Staff
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-[14px] font-mono pt-3 border-t border-[var(--pres-border)]">
        <span style={{ color: 'var(--pres-text-muted)' }}>Slide 13 • Talent Competency Gap Heatmap • 16:9 4K Precision Standard</span>
        <span className="text-violet-500 font-bold">Dynamic Track {currentStep + 1} of {domains.length}</span>
      </div>
    </div>
  );
};
