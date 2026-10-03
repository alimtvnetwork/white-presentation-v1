import React, { useState } from 'react';
import { StepsSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { getStepPhase, getStepHaloStyle, STEP_TRANSITION } from '../../utils/stepProgression';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const StepsSlide: React.FC<{ slide: StepsSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit, activeStep, jumpToStep } = useDeckStore();
  const { isEditMode } = useEditStore();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const steps = slide.steps || [];
  const total = steps.length;
  const currentStep = hoveredStep ?? Math.min(total - 1, Math.max(0, activeStep));
  const focused = steps[currentStep] || steps[0] || { label: '', detail: '', title: '' };
  const isDark = Boolean(theme.isDark);
  const headerShadow = theme.headerShadow || (isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px');
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';
  const isPreviousAllowed = currentStep > 0;
  const isNextAllowed = currentStep < total - 1;

  return (
    <div style={{ backgroundColor: theme.canvasBg, color: theme.textColor }} className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[100px] grid grid-cols-[560px_minmax(0,1fr)] gap-14 animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}>
      <div className="flex flex-col justify-between z-20">
        <div>
          <div style={{ color: theme.accentColor }} className="font-mono text-base font-bold tracking-[0.2em] uppercase mb-3" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
            {slide.kicker || 'PROCESS & EXECUTION'}
          </div>
          <h1 style={{ color: theme.textColor, textShadow: headerShadow }} className="font-ubuntu text-[54px] font-extrabold tracking-tight leading-tight mb-8" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, heading: e.currentTarget.textContent || '', title: e.currentTarget.textContent || '' }))}>
            {slide.heading || slide.title}
          </h1>
          <div className="flex flex-col gap-3">
            {steps.map((st, i) => {
              const phase = getStepPhase(i, currentStep);
              const isActive = phase === 'active';
              const isPast = phase === 'past';
              const opacity = isActive ? 1 : isPast ? 0.7 : 0.45;
              const halo = getStepHaloStyle(isActive, theme.accentColor);

              return (
                <div
                  key={i}
                  onClick={() => jumpToStep(i)}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  style={{ opacity, backgroundColor: isActive ? `${theme.accentColor}18` : 'transparent', transform: isActive ? 'translateX(8px) scale(1.01)' : 'translateX(0)', transition: STEP_TRANSITION, ...halo }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer hover:opacity-100 transition-all ${isActive ? 'border-violet-500/40 shadow-lg' : 'border-transparent hover:border-slate-300 dark:hover:border-slate-700'}`}
                >
                  <span style={{ color: isActive ? theme.accentColor : theme.subtextColor }} className="font-mono text-2xl font-bold tracking-wider">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex-1 truncate">
                    <div style={{ color: theme.textColor }} className="font-ubuntu font-bold text-lg truncate">{st.title || st.label}</div>
                    {st.title && <div style={{ color: theme.subtextColor }} className="font-poppins text-sm truncate">{st.label}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ color: theme.subtextColor }} className="font-mono text-sm opacity-75">Interactive Architecture • Step Progression</div>
      </div>

      <div key={currentStep} style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="flex flex-col justify-between p-12 rounded-3xl border shadow-2xl backdrop-blur-md z-20 animate__animated animate__fadeIn">
        <div>
          <div className="flex items-center justify-between mb-6">
            <span style={{ color: theme.accentColor, borderColor: `${theme.accentColor}40`, backgroundColor: `${theme.accentColor}18` }} className="px-4 py-1.5 text-sm font-mono font-bold tracking-widest uppercase rounded-full border">
              {focused.label}
            </span>
            <img src={logoSrc} alt="Logo" className="h-[40px] w-auto object-contain filter contrast-125" />
          </div>
          <h2 style={{ color: theme.textColor, textShadow: headerShadow }} className="font-ubuntu text-[54px] font-extrabold tracking-tight leading-tight mb-6">
            {focused.title || focused.label}
          </h2>
          <p style={{ color: theme.subtextColor }} className="font-poppins text-[22px] leading-relaxed max-w-2xl">
            {focused.detail}
          </p>
          {focused.media?.src && (
            <div className="mt-6 rounded-2xl overflow-hidden border border-slate-700/20 max-h-[300px]">
              <img src={focused.media.src} alt={focused.media.alt || 'Step visual'} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-slate-700/20 dark:border-white/10 mt-6">
          <span style={{ color: theme.subtextColor }} className="font-mono text-base tracking-wider uppercase">Step {currentStep + 1} of {total}</span>
          <div className="flex items-center gap-2">
            <button onClick={() => { if (isPreviousAllowed) jumpToStep(currentStep - 1); }} aria-disabled={isPreviousAllowed ? 'false' : 'true'} className={`p-3 rounded-xl border border-slate-700/20 dark:border-white/10 transition-all ${isPreviousAllowed ? 'hover:bg-violet-500/10 cursor-pointer' : 'opacity-30 cursor-not-allowed'}`} title="Previous Step"><ChevronLeft size={20} style={{ color: theme.textColor }} /></button>
            <button onClick={() => { if (isNextAllowed) jumpToStep(currentStep + 1); }} aria-disabled={isNextAllowed ? 'false' : 'true'} className={`p-3 rounded-xl border border-slate-700/20 dark:border-white/10 transition-all ${isNextAllowed ? 'hover:bg-violet-500/10 cursor-pointer' : 'opacity-30 cursor-not-allowed'}`} title="Next Step"><ChevronRight size={20} style={{ color: theme.textColor }} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
