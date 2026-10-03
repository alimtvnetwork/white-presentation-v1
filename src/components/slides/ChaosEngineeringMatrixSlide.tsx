import React from 'react';
import type { ChaosEngineeringMatrixSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ChaosHeader } from './chaos/ChaosHeader';
import { ChaosKpiStrip } from './chaos/ChaosKpiStrip';
import { ChaosExperimentCard } from './chaos/ChaosExperimentCard';
import { ChaosRecoveryFooter } from './chaos/ChaosRecoveryFooter';

export const ChaosEngineeringMatrixSlide: React.FC<{
  slide: ChaosEngineeringMatrixSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const scenarios = slide.chaosScenarios || [];
  const currentStep = Math.min(activeStep, Math.max(0, scenarios.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <ChaosHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="flex flex-col gap-6 z-10 my-auto h-[640px] justify-between">
        <ChaosKpiStrip slide={slide} />

        <div className="grid grid-cols-4 gap-5 flex-1 items-stretch">
          {scenarios.map((scenario, idx) => (
            <ChaosExperimentCard
              key={scenario.id || idx}
              scenario={scenario}
              index={idx}
              activeStep={currentStep}
            />
          ))}
        </div>
      </div>

      <ChaosRecoveryFooter slide={slide} activeStep={currentStep} />
    </div>
  );
};
