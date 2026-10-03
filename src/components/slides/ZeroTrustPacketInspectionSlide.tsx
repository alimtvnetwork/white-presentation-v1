import React from 'react';
import type { ZeroTrustPacketInspectionSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { PacketHeader } from './packet/PacketHeader';
import { PacketMetricStrip } from './packet/PacketMetricStrip';
import { PacketGateCard } from './packet/PacketGateCard';
import { PacketStatusBarFooter } from './packet/PacketStatusBarFooter';

export const ZeroTrustPacketInspectionSlide: React.FC<{
  slide: ZeroTrustPacketInspectionSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);

  const stages = slide.inspectionStages || [];
  const currentStep = Math.min(activeStep, Math.max(0, stages.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <PacketHeader
        slide={slide}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <div className="flex flex-col gap-6 z-10 my-auto h-[640px] justify-between">
        <PacketMetricStrip slide={slide} />

        <div className="grid grid-cols-4 gap-5 flex-1 items-stretch">
          {stages.map((stage, idx) => (
            <PacketGateCard
              key={stage.id || idx}
              stage={stage}
              index={idx}
              activeStep={currentStep}
            />
          ))}
        </div>
      </div>

      <PacketStatusBarFooter slide={slide} activeStep={currentStep} />
    </div>
  );
};
