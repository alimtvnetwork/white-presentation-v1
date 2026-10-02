import React from 'react';
import { MindsetShiftSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const MindsetShiftSlide: React.FC<{ slide: MindsetShiftSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const headerShadow = theme.headerShadow || (isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px');
  const shifts = slide.shifts || [];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30">
            {slide.kicker || 'PARADIGM TRANSFORMATION'}
          </span>
          <span style={{ color: theme.subtextColor }} className="font-mono text-xs">• 4 Strategic Invariants</span>
        </div>
        <h1
          style={{ color: theme.textColor, textShadow: headerShadow }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'From Fragile Indeterminism to Sovereign Precision'}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto">
        {shifts.map((shift, idx) => {
          const isItemTransformed = Boolean(shift.isTransformed);
          return (
            <div
              key={idx}
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className={`p-7 rounded-3xl border shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-amber-500/40 slide-up-anim stagger-${Math.min(4, idx + 1)}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {shift.category || `SHIFT 0${idx + 1}`}
                  </span>
                  {isItemTransformed && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 size={10} /> TRANSFORMED
                    </span>
                  )}
                </div>

                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block mb-1">From Legacy</span>
                  <div className="font-poppins text-xs text-rose-200/90 leading-snug line-through opacity-75">{shift.from}</div>
                </div>

                <div className="flex justify-center my-1">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <ArrowRight size={12} />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/25 border border-emerald-800/40 my-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">To Sovereign</span>
                  <div className="font-ubuntu text-sm font-bold text-emerald-300 leading-snug">{shift.to}</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/30">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">Benefit</span>
                <p className="font-poppins text-xs leading-relaxed" style={{ color: theme.subtextColor }}>{shift.benefit}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: theme.subtextColor }}>
        <span className="flex items-center gap-2 text-amber-400 font-bold">
          <Sparkles size={14} /> {slide.principleTag || 'Mathematical determinism always supersedes probabilistic hope.'}
        </span>
        <span className="opacity-70">Deterministic Live DOM Paradigm Shift</span>
      </div>
    </div>
  );
};
