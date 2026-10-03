import React from 'react';
import type { DatabaseMigrationPipelineSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { MigrationHeader } from './dbmigration/MigrationHeader';
import { MigrationMetricStrip } from './dbmigration/MigrationMetricStrip';
import { MigrationPhaseCard } from './dbmigration/MigrationPhaseCard';
import { MigrationReplicationFooter } from './dbmigration/MigrationReplicationFooter';

export const DatabaseMigrationPipelineSlide: React.FC<{
  slide: DatabaseMigrationPipelineSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const phases = slide.pipelinePhases || [];
  const currentStep = Math.min(activeStep, Math.max(0, phases.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <MigrationHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="flex flex-col gap-6 z-10 my-auto h-[640px] justify-between">
        <MigrationMetricStrip slide={slide} />

        <div className="grid grid-cols-4 gap-5 flex-1 items-stretch">
          {phases.map((phase, idx) => (
            <MigrationPhaseCard
              key={phase.id || idx}
              phase={phase}
              index={idx}
              activeStep={currentStep}
            />
          ))}
        </div>
      </div>

      <MigrationReplicationFooter slide={slide} activeStep={currentStep} />
    </div>
  );
};
