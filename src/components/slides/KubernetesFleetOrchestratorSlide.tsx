import React from 'react';
import type { KubernetesFleetOrchestratorSlideData } from '../../types/sovereignOperationsArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { FleetHeader } from './k8sfleet/FleetHeader';
import { FleetKpiStrip } from './k8sfleet/FleetKpiStrip';
import { ClusterCardGrid } from './k8sfleet/ClusterCardGrid';
import { WorkloadSummaryList } from './k8sfleet/WorkloadSummaryList';
import { FleetGitOpsFooter } from './k8sfleet/FleetGitOpsFooter';

export const KubernetesFleetOrchestratorSlide: React.FC<{
  slide: KubernetesFleetOrchestratorSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const clusters = slide.clusters || [];
  const policies = slide.fleetPolicies || [];
  const totalPods = clusters.reduce((acc, c) => acc + (c.runningPods || 0), 0);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <FleetHeader
        kicker={slide.kicker}
        title={slide.title || 'Multi-Region Kubernetes Fleet Orchestrator'}
        subtitle={slide.subtitle}
        fleetName={slide.fleetName || 'Global Sovereign K8s Fleet'}
        isZeroDriftEnforced={slide.isZeroDriftEnforced}
        isEditMode={isEditMode}
        onUpdateTitle={(title) => applyEdit((s) => ({ ...s, title }))}
        onUpdateSubtitle={(subtitle) => applyEdit((s) => ({ ...s, subtitle }))}
      />

      <FleetKpiStrip
        totalManagedClusters={slide.totalManagedClusters ?? clusters.length}
        overallNodeCapacity={slide.overallNodeCapacity ?? 1420}
        runningPodsTotal={totalPods || 17100}
        isZeroDriftEnforced={slide.isZeroDriftEnforced ?? true}
      />

      <ClusterCardGrid clusters={clusters} />

      <WorkloadSummaryList fleetPolicies={policies} />

      <FleetGitOpsFooter
        leadFleetOrchestrator={slide.leadFleetOrchestrator || 'Alim Ul Karim'}
        orchestratorTitle={slide.orchestratorTitle || 'Chief Software Engineer'}
        isZeroDriftEnforced={slide.isZeroDriftEnforced ?? true}
      />
    </div>
  );
};
