import React from 'react';
import { DailyWorkCultureSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Clock, CheckCircle2 } from 'lucide-react';

export const DailyWorkCultureSlide: React.FC<{ slide: DailyWorkCultureSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const rituals = slide.rituals || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {slide.kicker || 'OPERATIONAL TRANSPARENCY'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Daily Engineering Rituals</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Daily Engineering Cadence & Production Rhythms'}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto z-10">
        {rituals.map((ritual, idx) => {
          const isCore = Boolean(ritual.isCore);
          return (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--pres-bg-card)',
                borderColor: isCore ? 'var(--pres-accent)' : 'var(--pres-border)',
              }}
              className={`p-7 rounded-3xl border shadow-xl flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02] ${
                isCore ? 'ring-2 ring-violet-500/50 bento-glow-pulse' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-slate-800/80 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                    <Clock size={12} /> {ritual.time}
                  </span>
                  {isCore && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40">
                      CORE
                    </span>
                  )}
                </div>
                <h3 style={{ color: 'var(--pres-text)' }} className="font-ubuntu text-xl font-bold mb-3">{ritual.title}</h3>
                <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs leading-relaxed">{ritual.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/20 flex items-center gap-2 font-mono text-xs text-cyan-400">
                <CheckCircle2 size={14} />
                <span>{ritual.tag || 'Standard Protocol'}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-2 text-cyan-400 font-bold">
          <Clock size={14} /> {slide.cultureMotto || 'Extreme Ownership & Transparent Async-First Production'}
        </span>
        <span className="opacity-70">Deterministic Engineering Operating System</span>
      </div>
    </div>
  );
};
