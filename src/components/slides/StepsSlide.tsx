import React, { useState } from 'react';
import { StepsSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { soundEngine } from '../../audio/soundEngine';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const StepsSlide: React.FC<{ slide: StepsSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit, isSoundEnabled } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const [activeStep, setActiveStep] = useState(0);
  const steps = slide.steps || [];
  const total = steps.length;
  const focused = steps[activeStep] || steps[0] || { label: '', detail: '', title: '' };
  const headerShadow = theme.isDark ? 'rgb(0 0 0) 1px 0.7px 0px' : 'rgb(255 255 255) 1px 0.7px 0px';
  const logoSrc = theme.isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';

  const jumpToStep = (i: number) => {
    setActiveStep(i);
    if (isSoundEnabled) soundEngine.playStepClick();
  };

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[100px] grid grid-cols-[560px_minmax(0,1fr)] gap-14 animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex flex-col justify-between z-20">
        <div>
          <div className="text-violet-500 font-mono text-[13px] font-bold tracking-[0.25em] uppercase mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
            {slide.kicker || 'PROCESS & EXECUTION'}
          </div>
          <h1 style={{ color: theme.textColor, textShadow: headerShadow }} className="font-ubuntu text-[48px] font-extrabold tracking-tight leading-tight mb-8" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, heading: e.currentTarget.textContent || '', title: e.currentTarget.textContent || '' }))}>
            {slide.heading || slide.title}
          </h1>
          <div className="flex flex-col gap-3">
            {steps.map((st, i) => {
              const isActive = i === activeStep;
              const opacity = isActive ? 1 : i < activeStep ? 0.55 : 0.4;

              return (
                <div
                  key={i}
                  onClick={() => jumpToStep(i)}
                  style={{ opacity, backgroundColor: isActive ? `${theme.accentColor}18` : 'transparent', borderColor: isActive ? theme.accentColor : 'transparent' }}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer hover:opacity-100"
                >
                  <span style={{ color: isActive ? theme.accentColor : theme.subtextColor, textShadow: isActive ? '0 1px 3px rgba(0,0,0,0.3)' : undefined }} className="font-mono text-xl font-bold tracking-wider">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 truncate">
                    <div style={{ color: theme.textColor }} className="font-ubuntu font-bold text-base truncate">{st.title || st.label}</div>
                    {st.title && <div style={{ color: theme.subtextColor }} className="font-poppins text-xs truncate">{st.label}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ color: theme.subtextColor }} className="font-mono text-xs opacity-70">Interactive Architecture • Step Progression</div>
      </div>

      <div style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }} className="flex flex-col justify-between p-12 rounded-3xl border shadow-2xl backdrop-blur-md z-20">
        <div>
          <div className="flex items-center justify-between mb-6">
            <span style={{ color: theme.accentColor, borderColor: `${theme.accentColor}40` }} className="px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase rounded-full border bg-violet-500/10">
              {focused.label}
            </span>
            <img src={logoSrc} alt="Logo" className="h-[38px] w-auto object-contain filter contrast-125" />
          </div>
          <h2 style={{ color: theme.textColor, textShadow: headerShadow }} className="font-ubuntu text-[52px] font-extrabold tracking-tight leading-tight mb-6">
            {focused.title || focused.label}
          </h2>
          <p style={{ color: theme.subtextColor }} className="font-poppins text-[19px] leading-relaxed">
            {focused.detail}
          </p>
          {focused.media?.src && (
            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 max-h-[300px]">
              <img src={focused.media.src} alt={focused.media.alt || 'Step visual'} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
          <span style={{ color: theme.subtextColor }} className="font-mono text-sm tracking-wider uppercase">Step {activeStep + 1} of {total}</span>
          <div className="flex items-center gap-2">
            <button onClick={() => jumpToStep(Math.max(0, activeStep - 1))} disabled={activeStep === 0} className="p-2.5 rounded-xl border border-white/10 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all" title="Previous Step"><ChevronLeft size={18} style={{ color: theme.textColor }} /></button>
            <button onClick={() => jumpToStep(Math.min(total - 1, activeStep + 1))} disabled={activeStep === total - 1} className="p-2.5 rounded-xl border border-white/10 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all" title="Next Step"><ChevronRight size={18} style={{ color: theme.textColor }} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
