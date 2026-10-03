import React from 'react';
import type { AuthenticityHookSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ShieldAlert, TrendingDown, ArrowRight } from 'lucide-react';

export const AuthenticityHookSlide: React.FC<{ slide: AuthenticityHookSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const realityPoints = slide.realityPoints || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-500 border border-rose-500/30">
            {slide.kicker || 'INDUSTRY REALITY GAP'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Truth vs Illusion</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[44px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'The Velocity Illusion vs Sovereign Execution'}
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-10 z-10 my-auto items-stretch">
        <div className="col-span-6 flex flex-col justify-between plane-1-raised p-8 rounded-3xl border">
          <div>
            <div className="inline-flex items-center gap-2 text-rose-500 font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldAlert size={16} /> Ground-Truth Tension
            </div>
            <h2 className="font-ubuntu text-3xl font-extrabold leading-tight mb-4 text-slate-900 dark:text-slate-100">
              {slide.hookHeadline}
            </h2>
            <p className="font-poppins text-base leading-relaxed" style={{ color: 'var(--pres-text-muted)' }}>
              {slide.tensionNarrative}
            </p>
          </div>
          <div className="mt-6 p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 flex items-center justify-between">
            <div>
              <div className="font-ubuntu text-4xl font-black text-rose-500">{slide.statFigure}</div>
              <div className="font-mono text-xs mt-1" style={{ color: 'var(--pres-text-muted)' }}>{slide.statLabel}</div>
            </div>
            {Boolean(slide.statSource) && (
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-800/10 text-slate-500 border border-slate-700/20">{slide.statSource}</span>
            )}
          </div>
        </div>

        <div className="col-span-6 flex flex-col gap-5 justify-center">
          {realityPoints.map((pt, idx) => {
            const isHighlight = Boolean(pt.isHighlighted);
            return (
              <div
                key={pt.id || idx}
                className={`plane-2-elevated p-6 rounded-2xl border transition-all ${isHighlight ? 'border-rose-500/40 shadow-lg' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold uppercase text-amber-900 dark:text-amber-400 flex items-center gap-1">
                    <TrendingDown size={14} /> The Industry Myth
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800/20 text-slate-400">
                    {pt.impact}
                  </span>
                </div>
                <div className="text-sm font-poppins text-slate-400 line-through mb-3">{pt.myth}</div>
                <div className="text-xs font-mono font-bold uppercase text-emerald-500 flex items-center gap-1 mb-1">
                  <ArrowRight size={14} /> Operational Ground Truth
                </div>
                <div className="text-base font-poppins font-medium text-slate-100">{pt.truth}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-2 text-rose-500 font-bold">
          <ShieldAlert size={14} /> Act I: The Hook & Reality Gap
        </span>
        <span className="opacity-70">Deterministic Live DOM Typography</span>
      </div>
    </div>
  );
};
