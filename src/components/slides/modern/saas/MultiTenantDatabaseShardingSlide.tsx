import React, { useState } from 'react';
import type { MultiTenantDatabaseShardingSlideData } from '../../../../types/modern/saasFinancialTypes';
import { createMultiTenantDatabaseShardingSlide } from '../../../../utils/modern/saasFinancialFactories';
import { useDeckStore } from '../../../../stores/deckStore';
import { ShardingHeader } from './ShardingHeader';
import { PartitionRoutingGrid } from './PartitionRoutingGrid';
import { ShardCellCard } from './ShardCellCard';
import { Award, Layers } from 'lucide-react';

interface MultiTenantDatabaseShardingSlideProps {
  slide?: MultiTenantDatabaseShardingSlideData;
  data?: MultiTenantDatabaseShardingSlideData;
}

export const MultiTenantDatabaseShardingSlide: React.FC<MultiTenantDatabaseShardingSlideProps> = ({
  slide,
  data: pData,
}) => {
  const fallback = createMultiTenantDatabaseShardingSlide();
  const data = slide || pData || fallback;
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const tiers = data.shardingTiers?.length ? data.shardingTiers : fallback.shardingTiers;
  const telemetry = data.telemetry || fallback.telemetry;
  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 1);
  const currentStep = Math.min(Math.max(1, rawStep), tiers.length);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between"
    >
      <ShardingHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        hashAlgorithm={data.hashAlgorithm}
        isShardTopologyHealthy={data.isShardTopologyHealthy}
      />

      <div className="z-10 mb-5">
        <PartitionRoutingGrid telemetry={telemetry} />
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {tiers.map((tier) => (
          <ShardCellCard
            key={tier.id}
            tier={tier}
            isCurrentStep={tier.stepIndex === currentStep}
            onClick={() => setHoveredStep(tier.stepIndex)}
          />
        ))}
      </div>

      <footer className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-blue-400 font-bold">
            <Award size={15} /> Database Sharding Topology Validated
          </span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Chief Software Engineer: <strong className="text-slate-200">Alim Ul Karim, Chief Software Engineer</strong>
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5 text-cyan-300">
            <Layers size={13} /> Active Routing Tier: {currentStep} of {tiers.length}
          </span>
        </div>
      </footer>
    </div>
  );
};
