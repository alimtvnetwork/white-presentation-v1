import React from 'react';
import { QuadrantMatrixSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Star } from 'lucide-react';

export const QuadrantMatrixSlide: React.FC<{ slide: QuadrantMatrixSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';
  const items = slide.items || [];
  const q = slide.quadrants || {} as any;

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[90px] flex flex-col justify-between animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 mb-2 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
            {slide.kicker || 'STRATEGIC POSITIONING MATRIX'}
          </div>
          <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[48px] font-extrabold tracking-tight leading-tight slide-up-anim" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p style={{ color: theme.subtextColor }} className="font-poppins text-[17px] max-w-[1000px] mt-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
              {slide.subtitle}
            </p>
          )}
        </div>
        <img src={logoSrc} alt="Logo" className="h-[40px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="relative my-auto z-20 w-full h-[620px] rounded-3xl border shadow-2xl p-6 backdrop-blur-md" style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}>
        <div className="absolute inset-6 grid grid-cols-2 grid-rows-2 gap-4 pointer-events-none">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"><span style={{ color: theme.subtextColor }} className="font-mono text-xs font-bold uppercase">{q.topLeft?.label || 'Challengers'}</span></div>
          <div className="p-4 rounded-xl bg-violet-500/[0.05] border border-violet-500/20 flex flex-col justify-between"><span className="font-mono text-xs font-bold uppercase text-violet-400">{q.topRight?.label || 'Sovereign Leaders (Q1)'}</span></div>
          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col justify-between"><span style={{ color: theme.subtextColor }} className="font-mono text-xs font-bold uppercase">{q.bottomLeft?.label || 'Niche Players'}</span></div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"><span style={{ color: theme.subtextColor }} className="font-mono text-xs font-bold uppercase">{q.bottomRight?.label || 'Legacy Monoliths'}</span></div>
        </div>

        <div className="absolute inset-y-6 left-1/2 w-[2px] bg-white/20 -translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-x-6 top-1/2 h-[2px] bg-white/20 -translate-y-1/2 pointer-events-none" />

        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border bg-violet-600 text-white shadow">
          ▲ {slide.yAxis?.high || (slide as any).yAxisLabel || 'High Autonomy'}
        </div>
        <div className="absolute top-1/2 -right-3 -translate-y-1/2 px-3 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border bg-violet-600 text-white shadow">
          {slide.xAxis?.high || (slide as any).xAxisLabel || 'High Scale'} ▶
        </div>

        {items.map((it, idx) => {
          const isUs = Boolean(it.isHighlight || (it as any).isUs);
          const leftPercent = Math.min(92, Math.max(8, it.x));
          const topPercent = Math.min(92, Math.max(8, 100 - it.y));

          return (
            <div
              key={it.id || idx}
              style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 px-4 py-2 rounded-xl transition-all duration-300 shadow-lg cursor-pointer ${
                isUs ? 'bg-violet-600 text-white ring-4 ring-violet-500/30 scale-110 z-30 bento-glow-pulse' : 'bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:scale-105 z-20'
              }`}
            >
              {isUs && <Star size={16} className="text-amber-800 dark:text-amber-300 fill-amber-300 shrink-0" />}
              <span className="font-ubuntu font-bold text-sm whitespace-nowrap">{it.name}</span>
              {(it.tag || (it as any).badge) && (
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${isUs ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-300'}`}>
                  {it.tag || (it as any).badge}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-20 font-mono text-[13px]" style={{ color: theme.subtextColor }}>
        <span>Sovereign Competitive Placement • 2x2 Positioning Engine</span>
        <span className="opacity-75">1080p Pure DOM Matrix</span>
      </div>
    </div>
  );
};
