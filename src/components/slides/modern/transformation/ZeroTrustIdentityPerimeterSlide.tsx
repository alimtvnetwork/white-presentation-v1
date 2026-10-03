import React, { useState } from 'react';
import type { ZeroTrustIdentityPerimeterSlideData } from '../../../../types/modern/transformationTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { createZeroTrustIdentityPerimeterSlide } from '../../../../utils/modern/transformationFactories';
import { ZeroTrustHeader } from './ZeroTrustHeader';
import { PerimeterTierCard } from './PerimeterTierCard';
import { PacketInspectorRow } from './PacketInspectorRow';

interface ZeroTrustIdentityPerimeterSlideProps {
  slide?: ZeroTrustIdentityPerimeterSlideData;
  data?: ZeroTrustIdentityPerimeterSlideData;
}

export const ZeroTrustIdentityPerimeterSlide: React.FC<ZeroTrustIdentityPerimeterSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const fallback = createZeroTrustIdentityPerimeterSlide();
  const data = slide || propsData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const layers = data.securityPerimeterLayers && data.securityPerimeterLayers.length > 0
    ? data.securityPerimeterLayers
    : fallback.securityPerimeterLayers;
  const telemetry = data.telemetry || fallback.telemetry;
  const complianceStandard = data.complianceStandard || fallback.complianceStandard;
  const isPostureCompliant = data.isPostureCompliant ?? fallback.isPostureCompliant;

  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), layers.length - 1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <ZeroTrustHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        isEditMode={isEditMode}
        onEditTitle={(val) => applyEdit((s) => ({ ...s, title: val }))}
        onEditSubtitle={(val) => applyEdit((s) => ({ ...s, subtitle: val }))}
        complianceStandard={complianceStandard}
        telemetry={telemetry}
      />

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[460px] items-stretch">
        {layers.map((layer, idx) => (
          <PerimeterTierCard
            key={layer.id}
            layer={layer}
            index={idx}
            currentStep={currentStep}
            onHover={setHoveredStep}
          />
        ))}
      </div>

      <PacketInspectorRow
        telemetry={telemetry}
        isPostureCompliant={isPostureCompliant}
        activeLayerName={layers[currentStep]?.layerTitle || ''}
      />
    </div>
  );
};
