// lint-allow: file-size reason="BoardCapitalAllocationSlide flat sovereign board capital allocation" max=120
import React from 'react';
import type { BoardCapitalAllocationSlideData } from '../../../types/globalPptNextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Briefcase, CheckCircle2, ShieldCheck, TrendingUp, Award, Layers } from 'lucide-react';

const DEF_ALLOCS = [
  { projectId: 'prj-alpha', projectTitle: 'Sovereign Frontier Swarm Model R&D', allocatedCapitalMillionsUsd: 45, projectedInternalRateOfReturnPercent: 38, paybackPeriodYears: 2.2, isBoardApproved: true },
  { projectId: 'prj-beta', projectTitle: 'Edge Inference Silicon & DC Cluster', allocatedCapitalMillionsUsd: 35, projectedInternalRateOfReturnPercent: 31, paybackPeriodYears: 2.8, isBoardApproved: true },
  { projectId: 'prj-gamma', projectTitle: 'Programmatic M&A AI IP Acquisition', allocatedCapitalMillionsUsd: 25, projectedInternalRateOfReturnPercent: 29, paybackPeriodYears: 3.1, isBoardApproved: true },
  { projectId: 'prj-delta', projectTitle: 'Zero-Trust Cyber Defense Fabric', allocatedCapitalMillionsUsd: 15, projectedInternalRateOfReturnPercent: 26, paybackPeriodYears: 1.8, isBoardApproved: true },
];

const DEF_HURDLES = [
  { governanceClause: 'Corporate Hurdle Rate Floor (> 25.0% IRR)', hurdleThresholdPercent: 25.0, isHurdleSatisfied: true },
  { governanceClause: 'Maximum Payback Threshold (< 3.5 Years)', hurdleThresholdPercent: 3.5, isHurdleSatisfied: true },
];

export const BoardCapitalAllocationSlide: React.FC<{ slide?: BoardCapitalAllocationSlideData; data?: BoardCapitalAllocationSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const allocs = data?.allocations?.length ? data.allocations : DEF_ALLOCS;
  const hurdles = data?.governanceHurdles?.length ? data.governanceHurdles : DEF_HURDLES;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2"><Briefcase size={15} className="text-emerald-500" />{data?.kicker || 'EXECUTIVE GOVERNANCE & CAPITAL ALLOCATION'}</span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" /> ${data?.totalCapitalBudgetMillionsUsd || 120}M Capital Pool • &gt; {data?.minimumHurdleRatePercent || 25}% IRR Floor</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{data?.title || 'Board Capital Allocation: R&D Reinvestment Waterfall & M&A'}</h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>{data?.subtitle || 'Strategic capital deployment prioritizing proprietary model moats, specialized edge silicon, and programmatic M&A'}</p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Fiscal Year</span><span className="text-sm font-bold text-slate-900 dark:text-sky-300">{data?.fiscalYear || 'FY2027 Budget'}</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Signoff</span><span className="text-sm font-bold text-emerald-400">Board Approved</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Chief Software Engineer</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[530px] items-stretch">
        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-2"><Layers size={16} /> CAPITAL DEPLOYMENT WATERFALL</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">$120M Total</span></div>
          <div className="space-y-2.5 font-mono text-xs my-3">
            {allocs.map((a) => (
              <div key={a.projectId} className="p-2.5 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center"><span className="text-slate-200 font-bold text-[11px] truncate max-w-[200px]">{a.projectTitle}</span><span className="text-emerald-400 font-bold">${a.allocatedCapitalMillionsUsd}M</span></div>
                <div className="flex justify-between text-[10px] text-slate-400"><span>IRR: {a.projectedInternalRateOfReturnPercent}%</span><span className="text-sky-300">Payback: {a.paybackPeriodYears}y</span></div>
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5"><TrendingUp size={13} /> Weighted Average IRR: 32.4%</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-sky-400 flex items-center gap-2"><Award size={16} /> GOVERNANCE HURDLES</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30">Fiduciary Gates</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            {hurdles.map((h, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 block">{h.governanceClause}</span>
                <div className="text-emerald-400 font-bold text-xs font-mono">100% SATISFIED ACROSS ALL PRJs</div>
              </div>
            ))}
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">Fiduciary review mandates minimum 25% hurdle rate and audited risk-adjusted return verification before capital release.</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400">Audit Committee Signoff Unanimous</div>
        </div>

        <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800/70 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/40"><span className="font-mono text-xs font-bold text-violet-300 flex items-center gap-2"><Briefcase size={16} /> M&A & STRATEGIC MOATS</span><span className="font-mono text-[10px] px-2 py-0.5 rounded bg-violet-500/15 text-violet-300 border border-violet-500/30">Inorganic Growth</span></div>
          <div className="space-y-3 font-mono text-xs my-3">
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">PROGRAMMATIC M&A CRITERIA</span>
              <div className="text-violet-300 font-bold text-xs font-mono">Bespoke IP & Talent Bolt-Ons</div>
              <div className="text-[11px] text-slate-400">Targeting specialized acoustic models, confidential computing compilers, and vector kernels.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/30 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 block">BALANCE SHEET HEALTH</span>
              <div className="text-emerald-400 font-bold text-sm">Zero Debt Financing Required</div>
              <div className="text-[10px] text-slate-400">Funded 100% via operational free cash flows</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-[11px] text-emerald-400 flex justify-between"><span>Execution Readiness:</span><strong className="font-bold">IMMEDIATE DEPLOY</strong></div>
        </div>
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Capital Allocation Ratified</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Capital Budget: <strong className="text-slate-200">$120M APPROVED</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Fiduciary Audit: <strong className="text-emerald-400">PASSED UNANIMOUS</strong></span>
        </div>
        <div className="text-slate-400">Single Step Overview Archetype</div>
      </div>
    </div>
  );
};
