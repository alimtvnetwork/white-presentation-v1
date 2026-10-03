import React, { useState } from 'react';
import type { ValueStreamDoraFlywheelSlideData, FlywheelQuadrant } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { DoraHeader } from './dora/DoraHeader';
import { FlywheelQuadrantList } from './dora/FlywheelQuadrantList';
import { DoraHeroDetail } from './dora/DoraHeroDetail';
import { DoraFooter } from './dora/DoraFooter';

interface ValueStreamDoraFlywheelSlideProps {
  slide?: ValueStreamDoraFlywheelSlideData;
  data?: ValueStreamDoraFlywheelSlideData;
}

const DEFAULT_QUADRANTS: FlywheelQuadrant[] = [
  { quadrantIndex: 1, name: 'Flow Velocity & Elite Deployments', description: 'Continuous automated release orchestration with zero-storage GitHub Actions and automated gate verification', keyMetric: '48.2 Deploys / Day', status: 'ACCELERATING', isFlywheelAccelerating: true },
  { quadrantIndex: 2, name: 'Flow Efficiency & Friction Elimination', description: 'Streamlining PR reviews, hermetic build caching, and self-service Golden Paths in Backstage', keyMetric: '84.0% Flow Efficiency', status: 'STABLE', isFlywheelAccelerating: true },
  { quadrantIndex: 3, name: 'Operational Resilience & Fast MTTR', description: 'Automated canary analysis, eBPF telemetry, and sub-15 minute automated rollback capabilities', keyMetric: '14.0m Mean Recovery', status: 'STABLE', isFlywheelAccelerating: false },
  { quadrantIndex: 4, name: 'Business Value & Revenue Accretion', description: 'Direct translation of high engineering velocity into market expansion, ARR growth, and retention', keyMetric: '$42.5M Attributed Value', status: 'ACCELERATING', isFlywheelAccelerating: true },
];

export const ValueStreamDoraFlywheelSlide: React.FC<ValueStreamDoraFlywheelSlideProps> = ({ slide, data: propsData }) => {
  const data = slide || propsData || ({} as ValueStreamDoraFlywheelSlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const quadrants = data.flywheelQuadrants && data.flywheelQuadrants.length > 0 ? data.flywheelQuadrants : DEFAULT_QUADRANTS;
  const dora = data.doraMetrics || { deploymentFrequencyPerDay: 48.2, leadTimeHours: 1.2, isEliteStatusAchieved: true };
  const flow = data.flowFramework || { flowVelocityItemsPerSprint: 142, flowEfficiencyPercent: 84.0 };
  const impact = data.valueImpact || { shippedFeaturesQuarterCount: 64, revenueImpactMillionUsd: 42.5, developerSatisfactionScore: 4.9, isDeliveryPredictable: true };

  const effectiveStep = hoveredStep ?? Math.min(deckActiveStep, Math.max(0, quadrants.length - 1));
  const activeQuadrant = quadrants[effectiveStep] || quadrants[0];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <DoraHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        deploysPerDay={dora.deploymentFrequencyPerDay}
        leadTimeHours={dora.leadTimeHours}
        isElite={dora.isEliteStatusAchieved}
        isEditMode={isEditMode}
        onTitleChange={(v) => applyEdit((s) => ({ ...s, title: v }))}
        onSubtitleChange={(v) => applyEdit((s) => ({ ...s, subtitle: v }))}
      />

      <div className="grid grid-cols-12 gap-7 z-10 my-auto h-[610px] items-stretch">
        <FlywheelQuadrantList
          quadrants={quadrants}
          currentStep={effectiveStep}
          onSelect={(idx) => useDeckStore.getState().setActiveStep?.(idx)}
          onHover={setHoveredStep}
        />
        <DoraHeroDetail
          quadrant={activeQuadrant}
          stepIndex={effectiveStep}
          flowVelocity={flow.flowVelocityItemsPerSprint}
          flowEfficiency={flow.flowEfficiencyPercent}
        />
      </div>

      <DoraFooter
        shippedFeatures={impact.shippedFeaturesQuarterCount}
        revenueImpactMillionUsd={impact.revenueImpactMillionUsd}
        csatScore={impact.developerSatisfactionScore}
        isPredictable={impact.isDeliveryPredictable}
      />
    </div>
  );
};
