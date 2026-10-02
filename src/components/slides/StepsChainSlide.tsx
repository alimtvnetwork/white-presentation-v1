import React from 'react';
import type { StepsChainSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { THEME_PALETTES } from '../../themes/gradientTokens';
import { StepChainCard } from './chain/StepChainCard';

export const StepsChainSlide: React.FC<{ slide: StepsChainSlideData }> = ({ slide }) => {
  const { activeStep, activeThemeId, jumpToStep } = useDeckStore();
  const currentTheme = THEME_PALETTES[activeThemeId] || THEME_PALETTES['white-brand'];

  const handleStepSelect = (index: number) => {
    jumpToStep(index);
  };

  return (
    <div
      style={{ backgroundColor: currentTheme.canvasBg, color: currentTheme.textColor }}
      className="relative w-full h-full flex flex-col justify-between p-16 select-none overflow-hidden"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span
            style={{ backgroundColor: `${currentTheme.accentColor}20`, color: currentTheme.accentColor }}
            className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-current"
          >
            {slide.kicker || 'PROCESS & DELIVERY'}
          </span>
          <span style={{ color: currentTheme.subtextColor }} className="text-xs font-mono">
            {slide.steps.length} Sequenced Phases
          </span>
        </div>
        <h2 className="font-ubuntu text-4xl font-extrabold tracking-tight mb-2">
          {slide.title}
        </h2>
        {slide.subtitle ? (
          <p style={{ color: currentTheme.subtextColor }} className="font-poppins text-lg max-w-4xl">
            {slide.subtitle}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto">
        {slide.steps.map((step, idx) => (
          <StepChainCard
            key={idx}
            step={step}
            idx={idx}
            isActive={idx === activeStep}
            isCompleted={idx < activeStep}
            totalSteps={slide.steps.length}
            theme={currentTheme}
            onSelect={handleStepSelect}
          />
        ))}
      </div>

      <div
        style={{ borderColor: currentTheme.cardBorder, color: currentTheme.subtextColor }}
        className="pt-4 border-t flex items-center justify-between text-xs font-mono"
      >
        <span>Tactile step-by-step kinetic progression active (Step {activeStep + 1} of {slide.steps.length})</span>
        <span style={{ color: currentTheme.accentColor }}>Synthesized Global PPT & Flat Slide Architecture</span>
      </div>
    </div>
  );
};
