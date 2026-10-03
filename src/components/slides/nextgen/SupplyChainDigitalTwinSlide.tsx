import React, { useState } from 'react';
import type { SupplyChainDigitalTwinSlideData, LogisticsCorridorNode, SupplyChainDisruption } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { DigitalTwinHeader } from './digitaltwin/DigitalTwinHeader';
import { CorridorList } from './digitaltwin/CorridorList';
import { DigitalTwinHeroDetail } from './digitaltwin/DigitalTwinHeroDetail';
import { DigitalTwinFooter } from './digitaltwin/DigitalTwinFooter';

interface SupplyChainDigitalTwinSlideProps {
  slide?: SupplyChainDigitalTwinSlideData;
  data?: SupplyChainDigitalTwinSlideData;
}

const DEFAULT_CORRIDORS: LogisticsCorridorNode[] = [
  { corridorId: 'c1', originNode: 'Port of Shanghai', destinationNode: 'Port of Rotterdam', transitMode: 'OCEAN', averageTransitDays: 28, disruptionRiskScorePercent: 12, isCorridorOperational: true, isReroutingActive: false },
  { corridorId: 'c2', originNode: 'Frankfurt Hub (FRA)', destinationNode: "Chicago O'Hare (ORD)", transitMode: 'AIR', averageTransitDays: 2, disruptionRiskScorePercent: 4, isCorridorOperational: true, isReroutingActive: false },
  { corridorId: 'c3', originNode: 'Port of Singapore', destinationNode: 'Jebel Ali Port Dubai', transitMode: 'OCEAN', averageTransitDays: 12, disruptionRiskScorePercent: 78, isCorridorOperational: false, isReroutingActive: true },
  { corridorId: 'c4', originNode: 'Port of Busan', destinationNode: 'Port of Long Beach', transitMode: 'OCEAN', averageTransitDays: 14, disruptionRiskScorePercent: 18, isCorridorOperational: true, isReroutingActive: false },
];

const DEFAULT_DISRUPTIONS: SupplyChainDisruption[] = [
  { disruptionId: 'd1', chokepointName: 'Bab-el-Mandeb / Red Sea Corridor', severity: 'CRITICAL', estimatedDelayDays: 11, inventoryValueAtRiskMillionUsd: 84.5, hasAlternateRouteAvailable: true, isContingencyDispatched: true },
];

export const SupplyChainDigitalTwinSlide: React.FC<SupplyChainDigitalTwinSlideProps> = ({ slide, data: propsData }) => {
  const data = slide || propsData || ({} as SupplyChainDigitalTwinSlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const corridors = data.logisticsCorridors && data.logisticsCorridors.length > 0 ? data.logisticsCorridors : DEFAULT_CORRIDORS;
  const disruptions = data.activeDisruptions && data.activeDisruptions.length > 0 ? data.activeDisruptions : DEFAULT_DISRUPTIONS;
  const telemetry = data.twinTelemetry || { totalActiveShipmentsCount: 3840, overallOtifPercentage: 98.4, savedDelayDaysAutonomous: 184 };
  const co2 = data.co2Optimization || { fuelSavingsMetricTons: 1420, isGreenLogisticsOptimized: true };

  const effectiveStep = hoveredStep ?? Math.min(deckActiveStep, Math.max(0, corridors.length - 1));
  const activeCorridor = corridors[effectiveStep] || corridors[0];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <DigitalTwinHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        activeShipments={telemetry.totalActiveShipmentsCount}
        otifPct={telemetry.overallOtifPercentage}
        savedDelayDays={telemetry.savedDelayDaysAutonomous}
        isEditMode={isEditMode}
        onTitleChange={(v) => applyEdit((s) => ({ ...s, title: v }))}
        onSubtitleChange={(v) => applyEdit((s) => ({ ...s, subtitle: v }))}
      />

      <div className="grid grid-cols-12 gap-7 z-10 my-auto h-[610px] items-stretch">
        <CorridorList
          corridors={corridors}
          currentStep={effectiveStep}
          onSelect={(idx) => useDeckStore.getState().setActiveStep?.(idx)}
          onHover={setHoveredStep}
        />
        <DigitalTwinHeroDetail corridor={activeCorridor} stepIndex={effectiveStep} />
      </div>

      <DigitalTwinFooter
        disruptions={disruptions}
        fuelSavingsTons={co2.fuelSavingsMetricTons}
        isGreenLogistics={co2.isGreenLogisticsOptimized}
      />
    </div>
  );
};
