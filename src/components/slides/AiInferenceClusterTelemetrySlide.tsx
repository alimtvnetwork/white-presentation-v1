import React from 'react';
import type { AiInferenceClusterTelemetrySlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { GpuHeader } from './gpuinfra/GpuHeader';
import { GpuMetricStrip } from './gpuinfra/GpuMetricStrip';
import { AcceleratorGroupCards } from './gpuinfra/AcceleratorGroupCards';
import { InferencePerfTable } from './gpuinfra/InferencePerfTable';
import { NvLinkFabricFooter } from './gpuinfra/NvLinkFabricFooter';

export const AiInferenceClusterTelemetrySlide: React.FC<{
  slide: AiInferenceClusterTelemetrySlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const nodeGroups = slide.gpuNodeGroups || [];
  const slos = slide.inferenceSlos || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <GpuHeader
        kicker={slide.kicker}
        title={slide.title || 'AI GPU Inference Cluster & Hardware Telemetry'}
        subtitle={slide.subtitle}
        clusterName={slide.clusterName || 'Sovereign Tensor HPC Cluster 01'}
        isContinuousBatchingActive={slide.isContinuousBatchingActive}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <GpuMetricStrip
        totalGpuAccelerators={slide.totalGpuAccelerators ?? 512}
        aggregateTokensPerSecFormatted={slide.aggregateTokensPerSecFormatted || '640,000 tps'}
        averageComputeUtilizationPercent={slide.averageComputeUtilizationPercent ?? 94.2}
        isContinuousBatchingActive={slide.isContinuousBatchingActive ?? true}
      />

      <AcceleratorGroupCards gpuNodeGroups={nodeGroups} />

      <InferencePerfTable inferenceSlos={slos} />

      <NvLinkFabricFooter
        leadHpcArchitect={slide.leadHpcArchitect || 'Alim Ul Karim'}
        architectTitle={slide.architectTitle || 'Chief Software Engineer'}
        isContinuousBatchingActive={slide.isContinuousBatchingActive ?? true}
      />
    </div>
  );
};
