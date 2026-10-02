import React from 'react';
import { StatsCalloutSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { Sparkles, TrendingUp } from 'lucide-react';

export const StatsCalloutSlide: React.FC<{ slide: StatsCalloutSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const pills = slide.highlightPills || ['Sub-12ms Render Time', '0.00% Drift Rate', '100% Deterministic'];

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none flex flex-col justify-between p-[100px] animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div
          className="text-[14px] font-bold tracking-[0.25em] uppercase font-mono px-3 py-1 rounded border"
          style={{ color: theme.accentColor, borderColor: theme.cardBorder, backgroundColor: theme.cardBg }}
          contentEditable={isEditMode} suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}
        >
          {slide.kicker || 'CORE METRIC BREAKTHROUGH'}
        </div>
        <img src="/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png" alt="Logo" className="h-[42px] w-auto object-contain filter contrast-125" />
      </div>

      <div className="z-20 my-auto text-center max-w-[1500px] mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={28} style={{ color: theme.accentColor }} />
          <h2
            style={{ color: theme.textColor }} className="font-ubuntu text-[36px] font-bold tracking-tight"
            contentEditable={isEditMode} suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {slide.title}
          </h2>
        </div>

        <div
          style={{ color: theme.accentColor, textShadow: theme.headerShadow }}
          className="font-ubuntu text-[160px] font-black tracking-tighter leading-none my-2 slide-up-anim"
          contentEditable={isEditMode} suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => (s.type === 'stats-callout' ? { ...s, statValue: e.currentTarget.textContent || '' } : s))}
        >
          {slide.statValue}
        </div>

        <div
          style={{ color: theme.textColor }} className="font-mono text-[28px] font-extrabold uppercase tracking-widest mb-6"
          contentEditable={isEditMode} suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => (s.type === 'stats-callout' ? { ...s, statLabel: e.currentTarget.textContent || '' } : s))}
        >
          {slide.statLabel}
        </div>

        <p
          style={{ color: theme.subtextColor }} className="font-poppins text-[24px] leading-relaxed max-w-[1100px] font-normal mb-10"
          contentEditable={isEditMode} suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => (s.type === 'stats-callout' ? { ...s, description: e.currentTarget.textContent || '' } : s))}
        >
          {slide.description}
        </p>

        <div className="flex items-center justify-center gap-6 flex-wrap">
          {pills.map((pill, idx) => (
            <div key={idx} style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="px-8 py-4 rounded-2xl border shadow-lg flex items-center gap-3 font-ubuntu text-[20px] font-bold text-slate-100 backdrop-blur-sm">
              <TrendingUp size={22} style={{ color: theme.accentColor }} />
              <span
                style={{ color: theme.textColor }} contentEditable={isEditMode} suppressContentEditableWarning
                onBlur={(e) => applyEdit((s) => {
                  if (s.type !== 'stats-callout') return s;
                  const updatedPills = [...(s.highlightPills || pills)];
                  updatedPills[idx] = e.currentTarget.textContent || '';
                  return { ...s, highlightPills: updatedPills };
                })}
              >
                {pill}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderColor: theme.cardBorder }} className="flex items-center justify-between z-20 pt-6 border-t">
        <div style={{ color: theme.subtextColor }} className="font-mono text-[16px]">
          {slide.comparison ? `${slide.comparison.baselineLabel}: ${slide.comparison.baselineValue} (${slide.comparison.deltaLabel})` : 'WCAG AAA Verified • 1080p Live Typography'}
        </div>
        <div style={{ color: theme.subtextColor }} className="font-mono text-[14px]">WHITE SOVEREIGN ENGINE</div>
      </div>
    </div>
  );
};
