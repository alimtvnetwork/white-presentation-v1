import React from 'react';
import type { AutonomousAiEvalHarnessSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { EvalHeader } from './aieval/EvalHeader';
import { EvalMetricStrip } from './aieval/EvalMetricStrip';
import { EvalGateCard } from './aieval/EvalGateCard';
import { EvalConsensusFooter } from './aieval/EvalConsensusFooter';

export const AutonomousAiEvalHarnessSlide: React.FC<{
  slide: AutonomousAiEvalHarnessSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const suites = slide.evalSuites || [];
  const currentStep = Math.min(activeStep, Math.max(0, suites.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <EvalHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="flex flex-col gap-6 z-10 my-auto h-[640px] justify-between">
        <EvalMetricStrip slide={slide} />

        <div className="grid grid-cols-4 gap-5 flex-1 items-stretch">
          {suites.map((suite, idx) => (
            <EvalGateCard
              key={suite.id || idx}
              suite={suite}
              index={idx}
              activeStep={currentStep}
            />
          ))}
        </div>
      </div>

      <EvalConsensusFooter slide={slide} activeStep={currentStep} />
    </div>
  );
};
