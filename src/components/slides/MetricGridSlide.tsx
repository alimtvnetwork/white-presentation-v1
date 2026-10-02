import React from 'react';
import { MetricGridSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export const MetricGridSlide: React.FC<{ slide: MetricGridSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';
  const metrics = slide.metrics || [];
  const colClass = metrics.length <= 4 ? 'grid-cols-2' : 'grid-cols-3';

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[100px] flex flex-col justify-between animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 mb-2 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
            {slide.kicker || 'FINANCIAL & OPERATIONAL PERFORMANCE'}
          </div>
          <h1 style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[52px] font-extrabold tracking-tight leading-tight slide-up-anim" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p style={{ color: theme.subtextColor }} className="font-poppins text-[18px] max-w-[1000px] mt-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
              {slide.subtitle}
            </p>
          )}
        </div>
        <img src={logoSrc} alt="Logo" className="h-[42px] w-auto object-contain filter contrast-125" />
      </div>

      <div className={`grid ${colClass} gap-6 my-auto z-20 w-full`}>
        {metrics.map((m, idx) => {
          const delta = m.change || (m as any).delta;
          const trend = m.trend || (m as any).trendDirection || 'up';
          const isUp = trend === 'up';
          const isDown = trend === 'down';
          const isNeutral = trend === 'neutral' || (trend !== 'up' && trend !== 'down');
          const deltaColor = isUp ? (isDark ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' : 'text-emerald-700 bg-emerald-50 border-emerald-300') : isDown ? (isDark ? 'text-rose-400 bg-rose-500/10 border-rose-500/30' : 'text-rose-700 bg-rose-50 border-rose-300') : 'text-slate-400 bg-slate-500/10 border-slate-500/30';

          return (
            <div key={m.id || idx} style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className={`p-7 rounded-2xl border backdrop-blur-md shadow-xl flex flex-col justify-between transition-all duration-200 hover:scale-[1.01] stagger-${(idx % 8) + 1} slide-up-anim`}>
              <div className="flex items-center justify-between mb-3">
                <span style={{ color: theme.subtextColor }} className="font-poppins text-sm font-semibold tracking-wide uppercase truncate max-w-[280px]" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s: any) => ({ ...s, metrics: s.metrics?.map((metric: any, i: number) => i === idx ? { ...metric, label: e.currentTarget.textContent || '' } : metric) }))}>
                  {m.label}
                </span>
                {m.timeframe && (
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${isDark ? 'border-white/10 text-slate-400 bg-white/5' : 'border-slate-200 text-slate-500 bg-slate-100'}`}>
                    {m.timeframe}
                  </span>
                )}
              </div>
              <div style={{ color: theme.textColor, textShadow: theme.headerShadow }} className="font-ubuntu text-[54px] font-black tracking-tight my-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s: any) => ({ ...s, metrics: s.metrics?.map((metric: any, i: number) => i === idx ? { ...metric, value: e.currentTarget.textContent || '' } : metric) }))}>
                {m.value}
              </div>
              {delta && (
                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border ${deltaColor}`}>
                    {isUp && <TrendingUp size={14} />}
                    {isDown && <TrendingDown size={14} />}
                    {isNeutral && <Minus size={14} />}
                    <span>{delta}</span>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-20 font-mono text-[13px]" style={{ color: theme.subtextColor }}>
        <span>{slide.footerNote || 'Verified Production Telemetry • Live System Proof'}</span>
        <span className="opacity-75">1080p Pure DOM Metric Matrix</span>
      </div>
    </div>
  );
};
