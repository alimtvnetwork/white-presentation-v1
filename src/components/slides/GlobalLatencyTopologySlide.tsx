import React from 'react';
import type { GlobalLatencyTopologySlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { LatencyHeader } from './latency/LatencyHeader';
import { LatencyMetricStrip } from './latency/LatencyMetricStrip';
import { PopNodeGrid } from './latency/PopNodeGrid';
import { LatencyFooter } from './latency/LatencyFooter';

export const GlobalLatencyTopologySlide: React.FC<{
  slide: GlobalLatencyTopologySlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const edgeNodes = slide.edgeNodes || [];
  const transitLinks = slide.transitLinks || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <LatencyHeader
        kicker={slide.kicker}
        title={slide.title || 'Global Edge Latency Topology & Backbone Mesh'}
        subtitle={slide.subtitle}
        isAnycastBgpActive={slide.isAnycastBgpActive}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <LatencyMetricStrip
        globalAverageRttMs={slide.globalAverageRttMs ?? 18.4}
        anycastPopsCount={slide.anycastPopsCount ?? edgeNodes.length}
        overallCacheHitPercent={slide.overallCacheHitPercent ?? 96.8}
        transitLinksCount={transitLinks.length}
      />

      <PopNodeGrid edgeNodes={edgeNodes} />

      <LatencyFooter
        transitLinks={transitLinks}
        networkDirector={slide.networkDirector || 'Alim Ul Karim'}
        directorTitle={slide.directorTitle || 'Chief Software Engineer'}
      />
    </div>
  );
};
