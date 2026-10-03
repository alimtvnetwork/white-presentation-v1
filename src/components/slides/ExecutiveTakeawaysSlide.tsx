import React from 'react';
import type { ExecutiveTakeawaysSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { TakeawayActionRow } from './executive/TakeawayActionRow';
import { Briefcase, TrendingUp, UserCheck, ShieldCheck } from 'lucide-react';

export const ExecutiveTakeawaysSlide: React.FC<{ slide: ExecutiveTakeawaysSlideData }> = ({ slide }) => {
  const currentStep = useDeckStore((s) => s.activeStep);
  const actionItems = slide.actionItems || [];
  const roiMetrics = slide.roiMetrics || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'EXECUTIVE DECISION'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs flex items-center gap-1">
            <Briefcase size={12} /> Bilateral Governance Protocol
          </span>
        </div>
        <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2">
          {slide.title || 'Executive Briefing: Strategic Decision Protocol'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Bilateral governance sign-off and 14-day prioritized execution roadmap.'}
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto items-stretch h-[600px]">
        <div className="col-span-5 plane-1-raised p-6 rounded-3xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-violet-400 font-bold mb-3 block">Strategic Synopsis</span>
            <p className="font-poppins text-sm text-slate-200 leading-relaxed mb-6">"{slide.strategicSynopsis}"</p>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 block">Quantified Value Realization</span>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {roiMetrics.map((roi) => (
                <div key={roi.id} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center font-mono">
                  <div className="text-xl font-bold text-violet-300 flex items-center justify-center gap-1">
                    <TrendingUp size={14} className="text-emerald-400" />{roi.metricValue}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-poppins">{roi.metricLabel}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400"><UserCheck size={18} /></div>
              <div>
                <div className="text-white font-bold">{slide.executiveSignOffName || 'Alim Ul Karim'}</div>
                <div className="text-slate-400 text-[11px]">{slide.executiveSignOffTitle || 'Chief Software Engineer'}</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">Sign-Off Certified</span>
          </div>
        </div>

        <div className="col-span-7 flex flex-col justify-between space-y-3">
          <div className="space-y-3 flex-1 overflow-hidden flex flex-col justify-center">
            {actionItems.map((action, idx) => (
              <TakeawayActionRow key={action.id || idx} action={action} index={idx} currentStep={currentStep} accentColor="var(--pres-accent, #8b5cf6)" />
            ))}
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="text-violet-400 font-bold flex items-center gap-2">
          <ShieldCheck size={14} /> Board Governance Reference: {slide.boardApprovalReference || 'BOARD-RES-2026-10-03'}
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>14-Day Priority Execution Commitments Verified</span>
      </div>
    </div>
  );
};
