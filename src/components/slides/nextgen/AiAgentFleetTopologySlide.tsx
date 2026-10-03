import React, { useState } from 'react';
import type { AiAgentFleetTopologySlideData } from '../../../types/nextGenArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  DEFAULT_SUPERVISOR,
  DEFAULT_WORKERS,
  DEFAULT_GOVERNOR,
  FLEET_PHASES,
} from './fleet/defaults';
import { FleetHeader } from './fleet/FleetHeader';
import { FleetStepRail } from './fleet/FleetStepRail';
import { SupervisorCard } from './fleet/SupervisorCard';
import { SafetyGovernorCard } from './fleet/SafetyGovernorCard';
import { WorkerPoolPanel } from './fleet/WorkerPoolPanel';
import { FleetFooter } from './fleet/FleetFooter';

interface AiAgentFleetTopologySlideProps {
  slide?: AiAgentFleetTopologySlideData;
  data?: AiAgentFleetTopologySlideData;
}

export const AiAgentFleetTopologySlide: React.FC<AiAgentFleetTopologySlideProps> = ({
  slide,
  data: propsData,
}) => {
  const data = slide || propsData || ({} as AiAgentFleetTopologySlideData);
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const supervisor = data.supervisor || DEFAULT_SUPERVISOR;
  const workers = data.agentWorkers && data.agentWorkers.length > 0 ? data.agentWorkers : DEFAULT_WORKERS;
  const governor = data.governorMetrics || DEFAULT_GOVERNOR;
  const telemetry = data.liveTelemetry || {
    activeAgentsCount: 8,
    completedTasksCount: 1840,
    p95TaskLatencySeconds: 3.4,
    isFleetSynchronized: true,
  };

  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), FLEET_PHASES.length - 1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <FleetHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        isEditMode={isEditMode}
        onEditTitle={(val) => applyEdit((s) => ({ ...s, title: val }))}
        onEditSubtitle={(val) => applyEdit((s) => ({ ...s, subtitle: val }))}
        telemetry={telemetry}
      />

      <FleetStepRail
        phases={FLEET_PHASES}
        currentStep={currentStep}
        onHover={setHoveredStep}
        onClickStep={setHoveredStep}
      />

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[570px] items-stretch">
        <div className="col-span-4 flex flex-col justify-between gap-5">
          <SupervisorCard supervisor={supervisor} isActive={currentStep === 0} />
          <SafetyGovernorCard governor={governor} isActive={currentStep === 2} />
        </div>
        <WorkerPoolPanel workers={workers} />
      </div>

      <FleetFooter
        currentPhaseTitle={FLEET_PHASES[currentStep].title}
        currentStep={currentStep}
        totalSteps={FLEET_PHASES.length}
      />
    </div>
  );
};
