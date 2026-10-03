import React from 'react';
import { TimelineRoadmapSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { getStepPhase, getStepHaloStyle, STEP_TRANSITION } from '../../utils/stepProgression';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';

export const TimelineRoadmapSlide: React.FC<{ slide: TimelineRoadmapSlideData }> = ({ slide }) => {
  const { activeThemeId, applyEdit, activeStep, jumpToStep } = useDeckStore();
  const { isEditMode } = useEditStore();
  const theme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];
  const isDark = Boolean(theme.isDark);
  const logoSrc = isDark ? '/assets/logos/5 - Riseup Asia Logo Transparent Only WT.png' : '/assets/logos/6 - Riseup Asia Logo Transparent Only BK.png';
  const rawList = slide.milestones || (slide as any).quarters || [];
  const currentStep = Math.min(rawList.length - 1, Math.max(0, activeStep));

  return (
    <div
      style={{ backgroundColor: theme.canvasBg, color: theme.textColor }}
      className={`relative w-[1920px] h-[1080px] overflow-hidden select-none p-[100px] flex flex-col justify-between animate__animated animate__fadeIn ${theme.dotMatrix ? 'dot-matrix-bg' : ''}`}
    >
      <div className="flex items-center justify-between z-20">
        <div>
          <div style={{ color: theme.accentColor }} className="text-sm font-bold tracking-[0.25em] px-4 py-1.5 uppercase mb-2 font-mono" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, kicker: e.currentTarget.textContent || '' }))}>
            {slide.kicker || 'STRATEGIC DELIVERY ROADMAP'}
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

      <div className="grid grid-cols-4 gap-6 my-auto z-20 w-full">
        {rawList.map((item: any, idx: number) => {
          const period = item.period || item.quarter || `Stage 0${idx + 1}`;
          const isCompleted = item.status === 'completed' || Boolean(item.isCompleted);
          const phase = getStepPhase(idx, currentStep);
          const isStepFocused = phase === 'active';
          const isPast = phase === 'past';
          const opacity = isStepFocused ? 1 : isPast ? 0.75 : 0.45;
          const tasks = item.deliverables || item.milestones || [];
          const halo = getStepHaloStyle(isStepFocused, theme.accentColor);
          const badgeColor = isCompleted ? '#10b981' : isStepFocused ? theme.accentColor : theme.subtextColor;
          const badgeBg = isCompleted ? '#10b98115' : isStepFocused ? `${theme.accentColor}18` : 'transparent';
          const badgeBorder = isCompleted ? '#10b98140' : isStepFocused ? `${theme.accentColor}40` : `${theme.subtextColor}30`;

          return (
            <div
              key={idx}
              onClick={() => jumpToStep(idx)}
              style={{ backgroundColor: theme.cardBg, borderColor: isStepFocused ? theme.accentColor : theme.cardBorder, opacity, transform: isStepFocused ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)', transition: STEP_TRANSITION, ...halo }}
              className={`p-7 rounded-2xl border-2 backdrop-blur-md shadow-xl flex flex-col justify-between cursor-pointer slide-up-anim stagger-${idx + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span style={{ color: theme.accentColor }} className="font-mono text-sm font-bold tracking-wider uppercase">{period}</span>
                  <span style={{ color: badgeColor, borderColor: badgeBorder, backgroundColor: badgeBg }} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border">
                    {isCompleted ? <CheckCircle2 size={12} /> : isStepFocused ? <Clock size={12} /> : <Calendar size={12} />}
                    {isCompleted ? 'Completed' : isStepFocused ? 'In Progress' : 'Upcoming'}
                  </span>
                </div>
                <h3 style={{ color: theme.textColor }} className="font-ubuntu text-xl font-bold mb-3">{item.title}</h3>
                {item.description && <p style={{ color: theme.subtextColor }} className="font-poppins text-xs mb-4">{item.description}</p>}
                <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                  {tasks.map((task: string, tIdx: number) => (
                    <div key={tIdx} className="flex items-start gap-2">
                      <span style={{ backgroundColor: isCompleted ? '#10b981' : isStepFocused ? theme.accentColor : '#64748b' }} className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" />
                      <span style={{ color: theme.subtextColor }} className="font-poppins text-[13px] leading-snug">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 font-mono text-xs uppercase tracking-wider" style={{ color: theme.subtextColor }}>
                Phase 0{idx + 1} of 0{rawList.length}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-20 font-mono text-[13px]" style={{ color: theme.subtextColor }}>
        <span>{slide.footnote || 'Deterministic Delivery Execution • Agile Roadmap'}</span>
        <span className="opacity-75">1080p Pure DOM Sequential Timeline</span>
      </div>
    </div>
  );
};
