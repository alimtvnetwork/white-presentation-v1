import React from 'react';
import type { DualColumnProsConsSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ProConItemRow } from './proscons/ProConItemRow';
import { Scale, CheckCircle2, AlertCircle, Compass } from 'lucide-react';

export const DualColumnProsConsSlide: React.FC<{ slide: DualColumnProsConsSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const pros = slide.pros || [];
  const cons = slide.cons || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
            {slide.kicker || 'DECISION ANALYSIS'}
          </span>
          {slide.topic && (
            <span className="font-mono text-xs text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1.5">
              <Scale size={12} /> {slide.topic}
            </span>
          )}
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Architectural Trade-Off Evaluation'}
        </h1>
        {slide.subtitle && (
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm mt-2">
            {slide.subtitle}
          </p>
        )}
      </div>

      <div className="z-10 my-auto grid grid-cols-2 gap-8 w-full">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
            <CheckCircle2 size={16} /> {slide.prosHeader || 'Strategic Advantages (Sovereign)'}
          </div>
          <div className="space-y-3">
            {pros.map((p) => (
              <ProConItemRow key={p.id} item={p} isPro={true} />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
            <AlertCircle size={16} /> {slide.consHeader || 'Constraints & Operational Mitigations'}
          </div>
          <div className="space-y-3">
            {cons.map((c) => (
              <ProConItemRow key={c.id} item={c} isPro={false} />
            ))}
          </div>
        </div>
      </div>

      {slide.recommendationSummary && (
        <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
          <span className="flex items-center gap-2 text-violet-400 font-bold">
            <Compass size={14} /> Recommendation: {slide.recommendationSummary}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Bilateral Trade-Off Matrix</span>
        </div>
      )}
    </div>
  );
};
