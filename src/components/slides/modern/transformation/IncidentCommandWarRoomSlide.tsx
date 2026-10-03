import React, { useState } from 'react';
import type { IncidentCommandWarRoomSlideData } from '../../../../types/modern/transformationTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { createIncidentCommandWarRoomSlide } from '../../../../utils/modern/transformationFactories';
import { IncidentHeader } from './IncidentHeader';
import { WarRoomPhaseCard } from './WarRoomPhaseCard';
import { MttrMetricHero } from './MttrMetricHero';

interface IncidentCommandWarRoomSlideProps {
  slide?: IncidentCommandWarRoomSlideData;
  data?: IncidentCommandWarRoomSlideData;
}

export const IncidentCommandWarRoomSlide: React.FC<IncidentCommandWarRoomSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createIncidentCommandWarRoomSlide();
  const data = slide || propsData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const phases = data.incidentPhases && data.incidentPhases.length > 0
    ? data.incidentPhases
    : fallback.incidentPhases;
  const commandHeader = data.commandHeader || fallback.commandHeader;
  const postMortemSignoffRole = data.postMortemSignoffRole || fallback.postMortemSignoffRole;
  const hasPostMortemSignoff = data.hasPostMortemSignoff ?? fallback.hasPostMortemSignoff;

  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), phases.length - 1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <IncidentHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        isEditMode={isEditMode}
        onEditTitle={(val) => applyEdit((s) => ({ ...s, title: val }))}
        onEditSubtitle={(val) => applyEdit((s) => ({ ...s, subtitle: val }))}
        commandHeader={commandHeader}
      />

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[460px] items-stretch">
        {phases.map((phase, idx) => (
          <WarRoomPhaseCard
            key={phase.id}
            phase={phase}
            index={idx}
            currentStep={currentStep}
            onHover={setHoveredStep}
          />
        ))}
      </div>

      <MttrMetricHero
        commandHeader={commandHeader}
        postMortemSignoffRole={postMortemSignoffRole}
        hasPostMortemSignoff={hasPostMortemSignoff}
        activePhaseName={phases[currentStep]?.phaseName || ''}
      />
    </div>
  );
};
