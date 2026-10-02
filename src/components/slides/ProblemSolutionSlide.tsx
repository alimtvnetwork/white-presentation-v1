import React from 'react';
import { ProblemSolutionSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { XCircle, CheckCircle } from 'lucide-react';

export const ProblemSolutionSlide: React.FC<{ slide: ProblemSolutionSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';
  const renderPoints = (side: any, isPositive: boolean) => {
    const list = side.items || (side.points || []).map((p: any) => typeof p === 'string' ? { title: p, description: '' } : p);
    const Icon = isPositive ? CheckCircle : XCircle;
    const iconColor = isPositive ? 'text-emerald-500' : 'text-rose-500';

    return (
      <div className="flex flex-col gap-4 mt-6">
        {list.map((item: any, i: number) => (
          <div key={i} className="flex items-start gap-3.5">
            <Icon size={20} className={`${iconColor} shrink-0 mt-0.5`} />
            <div>
              <div style={{ color: theme.textColor }} className="font-ubuntu font-bold text-[17px] leading-snug">{item.title}</div>
              {item.description && <div style={{ color: theme.subtextColor }} className="font-poppins text-sm leading-relaxed mt-0.5">{item.description}</div>}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[100px] flex flex-col justify-between animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div>
          <div className="text-[13px] font-bold tracking-[0.25em] uppercase text-violet-500 mb-2 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
            {slide.kicker || 'BILATERAL ARCHITECTURAL ANALYSIS'}
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

      <div className="grid grid-cols-2 gap-10 my-auto z-20 w-full">
        <div style={{ backgroundColor: theme.cardBg, borderColor: isDark ? 'rgba(244,63,94,0.3)' : '#FECDD3' }} className="p-8 rounded-3xl border-2 backdrop-blur-md shadow-2xl flex flex-col justify-between slide-up-anim stagger-1">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-rose-500/10 text-rose-500 border border-rose-500/30">
              {slide.problem.tag || 'CURRENT BOTTLENECK'}
            </span>
            <h2 style={{ color: theme.textColor }} className="font-ubuntu text-[28px] font-bold mt-4" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s: any) => ({ ...s, problem: { ...s.problem, headline: e.currentTarget.textContent || '' } }))}>
              {slide.problem.headline || (slide.problem as any).title}
            </h2>
            {renderPoints(slide.problem, false)}
          </div>
          {(slide.problem as any).calloutMetric && (
            <div className="mt-6 pt-4 border-t border-rose-500/20 font-mono text-sm text-rose-400 font-bold">
              {(slide.problem as any).calloutMetric}
            </div>
          )}
        </div>

        <div style={{ backgroundColor: theme.cardBg, borderColor: isDark ? 'rgba(16,185,129,0.35)' : '#A7F3D0' }} className="p-8 rounded-3xl border-2 backdrop-blur-md shadow-2xl flex flex-col justify-between bento-glow-pulse slide-up-anim stagger-2">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
              {slide.solution.tag || 'SOVEREIGN ARCHITECTURE'}
            </span>
            <h2 style={{ color: theme.textColor }} className="font-ubuntu text-[28px] font-bold mt-4" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s: any) => ({ ...s, solution: { ...s.solution, headline: e.currentTarget.textContent || '' } }))}>
              {slide.solution.headline || (slide.solution as any).title}
            </h2>
            {renderPoints(slide.solution, true)}
          </div>
          {((slide.solution as any).calloutMetric || slide.verdict) && (
            <div className="mt-6 pt-4 border-t border-emerald-500/20 font-mono text-sm text-emerald-400 font-bold">
              {(slide.solution as any).calloutMetric || slide.verdict}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between z-20 font-mono text-[13px]" style={{ color: theme.subtextColor }}>
        <span>{slide.verdict || 'Sovereign Contrast Engine • High-Conviction Proof'}</span>
        <span className="opacity-75">Bilateral Pure DOM Matrix</span>
      </div>
    </div>
  );
};
