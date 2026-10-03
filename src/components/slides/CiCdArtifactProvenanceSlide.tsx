import React from 'react';
import type { CiCdArtifactProvenanceSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ProvenanceHeader } from './provenance/ProvenanceHeader';
import { ProvenanceMetricStrip } from './provenance/ProvenanceMetricStrip';
import { ProvenanceGateCard } from './provenance/ProvenanceGateCard';
import { ProvenanceNotaryFooter } from './provenance/ProvenanceNotaryFooter';

export const CiCdArtifactProvenanceSlide: React.FC<{
  slide: CiCdArtifactProvenanceSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const stages = slide.provenanceStages || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <ProvenanceHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="flex flex-col gap-6 z-10 my-auto h-[640px] justify-between">
        <ProvenanceMetricStrip slide={slide} />

        <div className="grid grid-cols-4 gap-5 flex-1 items-stretch">
          {stages.map((stage, idx) => (
            <ProvenanceGateCard
              key={stage.id || idx}
              stage={stage}
              index={idx}
              activeStep={currentStep}
            />
          ))}
        </div>
      </div>

      <ProvenanceNotaryFooter slide={slide} activeStep={currentStep} />
    </div>
  );
};
