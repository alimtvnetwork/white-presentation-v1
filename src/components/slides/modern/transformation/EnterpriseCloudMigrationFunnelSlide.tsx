import React, { useState } from 'react';
import type { EnterpriseCloudMigrationFunnelSlideData } from '../../../../types/modern/transformationTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { createEnterpriseCloudMigrationFunnelSlide } from '../../../../utils/modern/transformationFactories';
import { MigrationHeader } from './MigrationHeader';
import { MigrationPhaseCard } from './MigrationPhaseCard';
import { TcoSavingsBar } from './TcoSavingsBar';

interface EnterpriseCloudMigrationFunnelSlideProps {
  slide?: EnterpriseCloudMigrationFunnelSlideData;
  data?: EnterpriseCloudMigrationFunnelSlideData;
}

export const EnterpriseCloudMigrationFunnelSlide: React.FC<EnterpriseCloudMigrationFunnelSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createEnterpriseCloudMigrationFunnelSlide();
  const data = slide || propsData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const phases = data.funnelPhases && data.funnelPhases.length > 0 ? data.funnelPhases : fallback.funnelPhases;
  const summary = data.summary || fallback.summary;
  const cutoverDeadline = data.cutoverDeadline || fallback.cutoverDeadline;
  const isMigrationOnTrack = data.isMigrationOnTrack ?? fallback.isMigrationOnTrack;

  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), phases.length - 1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <MigrationHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        isEditMode={isEditMode}
        onEditTitle={(val) => applyEdit((s) => ({ ...s, title: val }))}
        onEditSubtitle={(val) => applyEdit((s) => ({ ...s, subtitle: val }))}
        summary={summary}
        cutoverDeadline={cutoverDeadline}
      />

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[460px] items-stretch">
        {phases.map((phase, idx) => (
          <MigrationPhaseCard
            key={phase.id}
            phase={phase}
            index={idx}
            currentStep={currentStep}
            onHover={setHoveredStep}
          />
        ))}
      </div>

      <TcoSavingsBar
        summary={summary}
        isMigrationOnTrack={isMigrationOnTrack}
        cutoverDeadline={cutoverDeadline}
      />
    </div>
  );
};
