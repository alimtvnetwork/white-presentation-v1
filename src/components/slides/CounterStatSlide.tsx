import React from 'react';
import { CounterStatSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { TrendingUp, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const CounterStatSlide: React.FC<{ slide: CounterStatSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const headerShadow = theme.headerShadow || (isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px');
  const stats = slide.stats || [];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {slide.kicker || 'QUANTITATIVE PROOF'}
          </span>
          <span style={{ color: theme.subtextColor }} className="font-mono text-xs">• 4 Verified Benchmarks</span>
        </div>
        <h1
          style={{ color: theme.textColor, textShadow: headerShadow }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Monumental Performance Benchmarks'}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto">
        {stats.map((stat, idx) => {
          const isItemPositive = Boolean(stat.isPositive);
          return (
            <div
              key={idx}
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className={`p-8 rounded-3xl border shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/40 slide-up-anim stagger-${Math.min(4, idx + 1)}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                  {isItemPositive && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <ArrowUpRight size={10} /> BENCHMARK
                    </span>
                  )}
                </div>

                <div className="font-ubuntu text-6xl font-black text-emerald-400 tracking-tight my-4">
                  {stat.value}
                  {stat.suffix && <span className="text-2xl font-bold ml-1 text-slate-400">{stat.suffix}</span>}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/30">
                <p className="font-poppins text-xs leading-relaxed" style={{ color: theme.subtextColor }}>
                  {stat.detail}
                </p>
                <div className="mt-3 font-mono text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-1">
                  <TrendingUp size={10} className="text-emerald-400" /> EMPIRICAL PROOF
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: theme.subtextColor }}>
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <ShieldCheck size={14} /> {slide.benchmarkSource || 'Verified by cryptographically signed benchmark logs.'}
        </span>
        <span className="opacity-70">Deterministic Live DOM Performance Verification</span>
      </div>
    </div>
  );
};
