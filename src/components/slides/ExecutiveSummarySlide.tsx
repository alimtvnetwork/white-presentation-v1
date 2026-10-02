import React from 'react';
import type { ExecutiveSummarySlideData, ExecutiveHighlightItem } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { TrendingUp, TrendingDown, Quote, Sparkles } from 'lucide-react';
import { ExecutivePillarCard } from './executive/ExecutivePillarCard';
import { getStepPhase, getStepPhaseStyle } from '../../utils/stepProgression';

const SlideHeader: React.FC<{ kicker?: string; title?: string }> = ({ kicker, title }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  return (
    <div className="z-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">{kicker || 'EXECUTIVE SUMMARY'}</span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Strategic Overview</span>
      </div>
      <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="font-ubuntu text-[40px] font-black tracking-tight leading-none" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
        {title || 'Strategic Performance & Transformation'}
      </h1>
    </div>
  );
};

const HighlightCard: React.FC<{ item: ExecutiveHighlightItem }> = ({ item }) => {
  const isPositive = Boolean(item.isPositiveTrend);
  return (
    <div className="plane-2-elevated p-5 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs uppercase tracking-wider">{item.label}</span>
        <div className={`flex items-center gap-1 text-xs font-mono font-bold px-2 py-0.5 rounded-full ${isPositive ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30' : 'text-amber-400 bg-amber-500/10 border border-amber-500/30'}`}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span>{isPositive ? 'Growth' : 'Track'}</span>
        </div>
      </div>
      <div>
        <div style={{ color: 'var(--pres-accent)' }} className="font-ubuntu text-3xl font-black mb-1">{item.value}</div>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs leading-relaxed">{item.detail}</p>
      </div>
    </div>
  );
};

export const ExecutiveSummarySlide: React.FC<{ slide: ExecutiveSummarySlideData }> = ({ slide }) => {
  const activeStep = useDeckStore((s) => s.activeStep);
  const highlights = slide.highlights || [];
  const strategicPillars = slide.strategicPillars || [];
  const isLastStep = activeStep >= strategicPillars.length - 1;
  const quote = slide.takeawayQuote;
  const hasQuote = Boolean(quote);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between">
      <SlideHeader kicker={slide.kicker} title={slide.title} />
      <div className="grid grid-cols-12 gap-8 z-10 my-auto items-start">
        <div className="col-span-7 space-y-5">
          <div className="plane-1-raised p-5 rounded-3xl border border-slate-800 bg-slate-900/40">
            <h3 className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-2 font-bold">Executive Synopsis</h3>
            <p className="font-poppins text-base leading-relaxed text-slate-200">{slide.overview}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {highlights.map((item) => <HighlightCard key={item.id} item={item} />)}
          </div>
        </div>
        <div className="col-span-5 space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold">Strategic Pillars</h3>
          <div className="space-y-3">
            {strategicPillars.map((pillar, idx) => {
              const phase = getStepPhase(idx, activeStep);
              const phaseStyle = getStepPhaseStyle(phase, '#8b5cf6');
              const isCurrentPillar = idx === activeStep;
              return (
                <div key={pillar.id || idx} style={phaseStyle}>
                  <ExecutivePillarCard pillar={{ ...pillar, isActivePillar: isCurrentPillar }} index={idx} />
                </div>
              );
            })}
          </div>
          {hasQuote && (
            <div style={{ opacity: isLastStep ? 1 : 0.25, transform: isLastStep ? 'scale(1)' : 'scale(0.98)', filter: isLastStep ? 'none' : 'blur(1.25px)', transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)' }} className="plane-1-raised p-4 rounded-2xl border border-slate-800/80 bg-slate-950/40 flex items-center gap-3">
              <Quote size={20} className="text-violet-400 shrink-0" />
              <span className="font-poppins text-xs italic text-slate-300">"{quote}"</span>
            </div>
          )}
        </div>
      </div>
      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-violet-400 font-bold"><Sparkles size={14} /> Executive Leadership Briefing</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Deterministic Enterprise Value Realization</span>
      </div>
    </div>
  );
};
