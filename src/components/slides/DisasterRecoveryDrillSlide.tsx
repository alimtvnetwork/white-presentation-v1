import React from 'react';
import type { DisasterRecoveryDrillSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { DrHeader } from './dr/DrHeader';
import { DrMetricStrip } from './dr/DrMetricStrip';
import { DrPhaseCard } from './dr/DrPhaseCard';
import { DrRtoFooter } from './dr/DrRtoFooter';

export const DisasterRecoveryDrillSlide: React.FC<{
  slide: DisasterRecoveryDrillSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const phases = slide.drillPhases || [];
  const currentStep = Math.min(activeStep, Math.max(0, phases.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <DrHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="flex flex-col gap-6 z-10 my-auto h-[640px] justify-between">
        <DrMetricStrip slide={slide} />

        <div className="grid grid-cols-4 gap-5 flex-1 items-stretch">
          {phases.map((phase, idx) => (
            <DrPhaseCard
              key={phase.id || idx}
              phase={phase}
              index={idx}
              activeStep={currentStep}
            />
          ))}
        </div>
      </div>

      <DrRtoFooter slide={slide} activeStep={currentStep} />
    </div>
  );
};
