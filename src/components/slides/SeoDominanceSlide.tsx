import React from 'react';
import type { SeoDominanceSlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { EraLadderCard } from './seo/EraLadderCard';
import { isBooleanTrue } from '../../utils/booleanGuards';
import { TrendingDown, CheckCircle2, Search, Quote } from 'lucide-react';

export const SeoDominanceSlide: React.FC<{ slide: SeoDominanceSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const eras = slide.eras || [];
  const auditGrid = slide.auditGrid || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <Search size={12} /> {slide.kicker || 'ORGANIC ARCHITECTURE'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• 10-Year Algorithmic Transition Matrix</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'SEO Evolution: 10-Year Search Dominance Matrix'}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10">
        {eras.map((era, idx) => (
          <EraLadderCard key={era.id || idx} era={era} isActive={idx === activeStep} isPast={idx < activeStep} isFuture={idx > activeStep} />
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 items-stretch">
        <div className="col-span-5 p-6 rounded-3xl border border-white/10 bg-black/20 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5 mb-3">
              <TrendingDown size={14} /> Organic CTR Erosion & AI Displacement
            </span>
            <div className="grid grid-cols-2 gap-4 font-mono mb-4">
              <div className="p-3 rounded-xl bg-black/20 border border-white/5">
                <div className="text-[11px]" style={{ color: 'var(--pres-text-muted)' }}>Position 1 Drop</div>
                <div className="text-2xl font-bold text-rose-400">-{slide.historicCtrDropPct || 48.2}%</div>
              </div>
              <div className="p-3 rounded-xl bg-black/20 border border-white/5">
                <div className="text-[11px]" style={{ color: 'var(--pres-text-muted)' }}>Zero-Click Queries</div>
                <div className="text-2xl font-bold text-amber-400">{slide.zeroClickQueryPct || 58.5}%</div>
              </div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-poppins text-xs text-slate-200 flex items-start gap-2">
            <Quote size={14} className="text-emerald-400 shrink-0 mt-0.5" />
            <span>{slide.strategicTakeawayQuote || 'Survival in 2025 demands direct brand recall and sub-second speed.'}</span>
          </div>
        </div>

        <div className="col-span-7 p-6 rounded-3xl border border-white/10 bg-black/20 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Technical Audit Scorecard</span>
            <span className="text-[11px] font-mono text-emerald-400 font-bold">100% Core Web Vitals Pass</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {auditGrid.map((cell) => (
              <div key={cell.id} className="p-3 rounded-xl bg-black/30 border border-white/5 font-mono text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] truncate max-w-[120px]" style={{ color: 'var(--pres-text-muted)' }}>{cell.metricName}</span>
                  {isBooleanTrue(cell.isPassingScore) && <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />}
                </div>
                <div className="text-base font-bold text-slate-100">{cell.achievedValue}</div>
                <div className="text-[10px] text-cyan-400/80">Target: {cell.benchmarkTarget}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="text-emerald-400 font-bold">First-Party Entity Graph • Direct Knowledge Graph Grounding</span>
        <span className="opacity-80">Alim Ul Karim, Chief Software Engineer</span>
      </div>
    </div>
  );
};
