import React, { useState } from 'react';
import type {
  AiDataFlywheelLifecycleSlideData,
  AiFlywheelStage,
} from '../../../../types/modern/transformationTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { createAiDataFlywheelLifecycleSlide } from '../../../../utils/modern/transformationFactories';
import { AiFlywheelHeader } from './AiFlywheelHeader';
import { FlywheelStageNode } from './FlywheelStageNode';
import { TelemetryChipStrip } from './TelemetryChipStrip';

interface AiDataFlywheelLifecycleSlideProps {
  slide?: AiDataFlywheelLifecycleSlideData;
  data?: AiDataFlywheelLifecycleSlideData;
}

export const AiDataFlywheelLifecycleSlide: React.FC<AiDataFlywheelLifecycleSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createAiDataFlywheelLifecycleSlide();
  const data = slide || propsData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const stages: AiFlywheelStage[] = (data.flywheelStages && data.flywheelStages.length > 0)
    ? data.flywheelStages
    : (data.stages && data.stages.length > 0)
    ? data.stages
    : fallback.flywheelStages;
  const telemetry = data.telemetry || fallback.telemetry;
  const modelFamilyName = data.modelFamilyName || fallback.modelFamilyName;
  const isLoopClosed = data.isLoopClosed ?? fallback.isLoopClosed;

  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), stages.length - 1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <AiFlywheelHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        isEditMode={isEditMode}
        onEditTitle={(val) => applyEdit((s) => ({ ...s, title: val }))}
        onEditSubtitle={(val) => applyEdit((s) => ({ ...s, subtitle: val }))}
        modelFamilyName={modelFamilyName}
        telemetry={telemetry}
      />

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[460px] items-stretch">
        {stages.map((stage, idx) => (
          <FlywheelStageNode
            key={stage.id}
            stage={stage}
            index={idx}
            currentStep={currentStep}
            onHover={setHoveredStep}
          />
        ))}
      </div>

      <TelemetryChipStrip
        telemetry={telemetry}
        isLoopClosed={isLoopClosed}
        activeStageName={stages[currentStep]?.stageName || ''}
      />
    </div>
  );
};
