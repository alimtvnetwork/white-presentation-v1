import React from 'react';
import type { CaseStudyImpactSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { CaseStudyResultPill } from './casestudy/CaseStudyResultPill';
import { Building2, AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';

export const CaseStudyImpactSlide: React.FC<{ slide: CaseStudyImpactSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const results = slide.quantifiedResults || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {slide.kicker || 'CUSTOMER TRANSFORMATION'}
          </span>
          <span className="font-mono text-xs text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1.5">
            <Building2 size={12} /> {slide.clientName} • {slide.clientIndustry}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-tight max-w-5xl"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title}
        </h1>
      </div>

      <div className="z-10 my-auto grid grid-cols-12 gap-6 w-full">
        <div className="col-span-4 plane-1-raised p-6 rounded-3xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-3">
              <AlertTriangle size={14} /> The Enterprise Challenge
            </div>
            <p className="font-poppins text-sm leading-relaxed text-slate-300">{slide.challenge}</p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800/80 font-mono text-[11px] text-slate-400">
            Status Quo Friction & Bottlenecks
          </div>
        </div>

        <div className="col-span-4 plane-1-raised p-6 rounded-3xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-400 uppercase tracking-wider mb-3">
              <Lightbulb size={14} /> The Sovereign Architecture
            </div>
            <p className="font-poppins text-sm leading-relaxed text-slate-300">{slide.solution}</p>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800/80 font-mono text-[11px] text-slate-400">
            Split SQLite & Pure DOM Deployment
          </div>
        </div>

        <div className="col-span-4 space-y-3 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            <TrendingUp size={14} /> Quantified Business Yield
          </div>
          {results.map((res, idx) => (
            <CaseStudyResultPill key={idx} result={res} />
          ))}
        </div>
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <TrendingUp size={14} /> Transformative Enterprise Impact Verified by Customer Steering Committee
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Case Study & Impact Results Showcase</span>
      </div>
    </div>
  );
};
