import React from 'react';
import type { BoardroomMaSynergySlideData } from '../../../types/kineticRevolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { TrendingUp, ShieldCheck, DollarSign, Calendar } from 'lucide-react';

export const BoardroomMaSynergySlide: React.FC<{ slide: BoardroomMaSynergySlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const pillars = slide.pillars || [];
  const milestones = slide.milestones || [];
  const risks = slide.risks || [];
  const lead = 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'EXECUTIVE M&A GOVERNANCE'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title || 'Boardroom M&A Synergy Realization: Day-100 Value Capture'}
          </h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'EBITDA run-rate synergy tracking, cross-functional milestone delivery, and executive post-merger integration governance.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 rounded-full border border-violet-700/60 bg-violet-950/40 text-violet-300 font-bold flex items-center gap-1.5"><Calendar size={14} /> Day {slide.integrationDayCount || 72} of 100</span>
          <span className="px-3 py-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/40 text-emerald-300 font-bold flex items-center gap-1.5"><DollarSign size={14} /> Run-Rate: {slide.currentRunRateSynergyUsd || '$34.2M'}</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4">
        {pillars.slice(0, 4).map((p) => (
          <div key={p.id} className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 plane-1-raised">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs text-slate-400">{p.pillarName}</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-violet-950/60 text-violet-300 border border-violet-800/40">{p.synergyType}</span>
            </div>
            <div className="font-ubuntu text-2xl font-bold text-white flex items-baseline justify-between mt-2">
              <span>{p.realizedValueUsd}</span>
              <span className="text-xs font-mono font-bold text-emerald-400">{p.realizationPercent}%</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-1">Target: {p.targetValueUsd}</div>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-12 gap-6 my-auto">
        <div className="col-span-7 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Day-100 Integration Milestones</span>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 font-mono text-xs space-y-2.5">
            {milestones.slice(0, 4).map((m) => (
              <div key={m.id} className="flex items-center justify-between py-1 border-b border-slate-900/90 last:border-0">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">DAY {m.dayTarget}</span>
                <span className="font-bold text-white truncate max-w-[220px]">{m.milestoneTitle}</span>
                <span className="text-slate-400 text-[11px]">Owner: {m.workstreamOwner}</span>
                <span className={`text-[10px] font-bold ${m.isCompleted ? 'text-emerald-400' : 'text-cyan-400'}`}>{m.isCompleted ? 'COMPLETED' : 'IN FLIGHT'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-1.5"><TrendingUp size={14} className="text-cyan-400" /> Executive Synergy Risks</span>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/70 font-mono text-xs space-y-2">
            {risks.slice(0, 3).map((r) => (
              <div key={r.id} className="py-1 border-b border-slate-800/80 last:border-0">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="font-bold text-white truncate max-w-[190px]">{r.riskFactor}</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-amber-950/60 text-amber-300 border border-amber-800/40">{r.severity}</span>
                </div>
                <p className="text-[11px] text-slate-400 truncate">{r.mitigationPlan}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Project {slide.transactionCodename || 'Titanium'} | Target Synergy: {slide.totalSynergyTargetUsd || '$46.8M'} | Board Approved</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
