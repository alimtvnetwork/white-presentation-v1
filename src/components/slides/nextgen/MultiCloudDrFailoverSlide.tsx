import React, { useState } from 'react';
import type { MultiCloudDrFailoverSlideData } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  DEFAULT_REGIONS,
  DEFAULT_REPLICATION,
  DEFAULT_FAILOVER,
  FAILOVER_PHASES,
} from './failover/defaults';
import { FailoverHeader } from './failover/FailoverHeader';
import { FailoverPhaseTrack } from './failover/FailoverPhaseTrack';
import { RegionGridPanel } from './failover/RegionGridPanel';
import { ReplicationMeshPanel } from './failover/ReplicationMeshPanel';
import { QuorumConsensusPanel } from './failover/QuorumConsensusPanel';
import { FailoverFooter } from './failover/FailoverFooter';

interface MultiCloudDrFailoverSlideProps {
  slide?: MultiCloudDrFailoverSlideData;
  data?: MultiCloudDrFailoverSlideData;
}

export const MultiCloudDrFailoverSlide: React.FC<MultiCloudDrFailoverSlideProps> = ({
  slide,
  data: propsData,
}) => {
  const data = slide || propsData || ({} as MultiCloudDrFailoverSlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const regions = data.cloudRegions && data.cloudRegions.length > 0 ? data.cloudRegions : DEFAULT_REGIONS;
  const replication = data.replicationPipeline || DEFAULT_REPLICATION;
  const failover = data.failoverTelemetry || DEFAULT_FAILOVER;
  const quorum = data.quorumStatus || {
    activeVotingMembers: 5,
    totalMembers: 5,
    hasQuorumConsensus: true,
    isSplitBrainPrevented: true,
  };

  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), FAILOVER_PHASES.length - 1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <FailoverHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        isEditMode={isEditMode}
        onEditTitle={(val) => applyEdit((s) => ({ ...s, title: val }))}
        onEditSubtitle={(val) => applyEdit((s) => ({ ...s, subtitle: val }))}
        failover={failover}
      />

      <FailoverPhaseTrack
        phases={FAILOVER_PHASES}
        currentStep={currentStep}
        onHover={setHoveredStep}
        onClickStep={setHoveredStep}
      />

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[570px] items-stretch">
        <RegionGridPanel regions={regions} />
        <div className="col-span-4 flex flex-col justify-between gap-5">
          <ReplicationMeshPanel replication={replication} isActive={currentStep === 1} />
          <QuorumConsensusPanel quorum={quorum} isActive={currentStep === 2} />
        </div>
      </div>

      <FailoverFooter
        currentPhaseTitle={FAILOVER_PHASES[currentStep].title}
        currentStep={currentStep}
        totalSteps={FAILOVER_PHASES.length}
      />
    </div>
  );
};
