// lint-allow: file-size reason="HybridCloudDrFailoverTopologySlide kinetic 4-step DR failover topology" max=420
import React from 'react';
import type {
  HybridCloudDrFailoverTopologySlideData,
  FailoverStage,
  DrSiteNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  RefreshCw,
  Server,
  Cloud,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Globe,
  Database,
  Radio,
} from 'lucide-react';

const DEF_STAGES: FailoverStage[] = [
  {
    stepIndex: 0,
    stageName: 'Primary Region Health Check Degradation',
    stageSubtitle: 'Synthetic edge probes detect 3 consecutive heartbeat timeouts in AWS us-east-1',
    recoveryPointObjectiveSeconds: 0,
    recoveryTimeObjectiveSeconds: 10,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Global Anycast DNS Ingress Swing',
    stageSubtitle: 'BGP anycast routes swing 100% ingress volume from primary to secondary edge',
    recoveryPointObjectiveSeconds: 0,
    recoveryTimeObjectiveSeconds: 24,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Distributed DB Read-Replica Promotion',
    stageSubtitle: 'Synchronous replica in Azure central-us promoted to active write master',
    recoveryPointObjectiveSeconds: 0,
    recoveryTimeObjectiveSeconds: 38,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Secondary Workload Normalization',
    stageSubtitle: 'Full production workload serving all requests with zero data loss verified',
    recoveryPointObjectiveSeconds: 0,
    recoveryTimeObjectiveSeconds: 48,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_SITES: DrSiteNode[] = [
  {
    id: 'site-aws',
    siteName: 'Primary Region (AWS)',
    cloudRegion: 'AWS us-east-1',
    trafficLoadPercentage: 0,
    replicationLagSeconds: 0,
    isPrimaryActive: false,
    hasQuorumHealthy: false,
  },
  {
    id: 'site-azure',
    siteName: 'Secondary Failover (Azure)',
    cloudRegion: 'Azure central-us',
    trafficLoadPercentage: 100,
    replicationLagSeconds: 0,
    isPrimaryActive: true,
    hasQuorumHealthy: true,
  },
];

export const HybridCloudDrFailoverTopologySlide: React.FC<{
  slide?: HybridCloudDrFailoverTopologySlideData;
  data?: HybridCloudDrFailoverTopologySlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.failoverStages?.length ? data.failoverStages : DEF_STAGES;
  const sites = data?.siteNodes?.length ? data.siteNodes : DEF_SITES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <RefreshCw size={16} className="text-cyan-500" />
              {data?.kicker || 'HIGH AVAILABILITY & SRE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Globe size={14} /> System: {data?.systemName || 'Global Core Banking Mesh'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              RPO Target: {data?.targetRpoSeconds ?? 0}s | RTO: {data?.targetRtoSeconds ?? 60}s
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Hybrid Cloud Automated DR Failover Topology'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Zero-data-loss cross-cloud regional swing achieving sub-60-second recovery time objective.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">RTO Recovered</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.recoveryTimeObjectiveSeconds}s / 60s
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Data Loss (RPO)</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              0.00s ZERO LOSS
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Chief Software Engineer</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Kinetic 4-Step Nav Rail */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-90'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 blur-[1.25px] text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    isActive
                      ? 'bg-[var(--pres-accent)] text-white'
                      : isCompleted
                      ? 'bg-emerald-500 text-white dark:text-slate-900'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <div>
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[12px] opacity-75 font-normal">
                    RTO Target: T+{st.recoveryTimeObjectiveSeconds}s
                  </div>
                </div>
              </div>
              <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                T+{st.recoveryTimeObjectiveSeconds}s
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Multi-Cloud Site Topology */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Cloud size={16} className="text-[var(--pres-accent)]" /> Multi-Cloud Regional Failover Topologies
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Anycast Ingress: SWUNG
              </span>
            </div>

            <div className="space-y-4 mt-4">
              {sites.map((site) => {
                const isFailoverTarget = site.id === 'site-azure';
                return (
                  <div
                    key={site.id}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      isFailoverTarget && currentStep >= 1
                        ? 'border-emerald-500/60 bg-emerald-500/10 shadow-md ring-1 ring-emerald-500/40'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px]">
                      <div className="flex items-center gap-3">
                        <Server size={18} className={isFailoverTarget ? 'text-emerald-500' : 'text-slate-400'} />
                        <div>
                          <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            {site.siteName}
                            <span className="text-[12px] px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                              {site.cloudRegion}
                            </span>
                          </div>
                          <div className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">
                            Replication Lag: {site.replicationLagSeconds}s (Synchronous Raft Quorum)
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[18px]">
                          <span
                            className={
                              site.trafficLoadPercentage > 0
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-slate-400 dark:text-slate-500'
                            }
                          >
                            {currentStep >= 1 ? site.trafficLoadPercentage : site.id === 'site-aws' ? 100 : 0}% Traffic
                          </span>
                        </div>
                        <span
                          className={`text-[11px] px-2 py-0.5 rounded font-bold uppercase ${
                            (currentStep >= 1 ? site.isPrimaryActive : site.id === 'site-aws')
                              ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                              : 'bg-rose-500/20 text-rose-700 dark:text-rose-400'
                          }`}
                        >
                          {(currentStep >= 1 ? site.isPrimaryActive : site.id === 'site-aws')
                            ? 'ACTIVE LEADER'
                            : 'STANDBY / QUARANTINE'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[var(--pres-border)] grid grid-cols-3 gap-4 font-mono text-[13px]">
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">BGP Anycast Convergence</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[16px]">3.8s Worldwide</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Raft Sync Consensus</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[16px]">100% HEALTHY</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Transaction Loss</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[16px]">0 Commits Lost</span>
            </div>
          </div>
        </div>

        {/* Right Bento: Active Stage Elevation & RTO/RPO Gates */}
        <div className="col-span-5 plane-2-elevated rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-[var(--pres-accent)] flex items-center gap-2">
                <Radio size={18} /> Active DR Phase (Step 0{currentStep + 1})
              </span>
              <span className="text-[12px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold">
                PHASE 0{currentStep + 1} ACTIVE
              </span>
            </div>

            <div className="my-4">
              <h3 className="text-[22px] font-ubuntu font-bold text-slate-900 dark:text-slate-100 leading-snug">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[14px] text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {activeStage.stageSubtitle}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-black/30 border border-slate-200 dark:border-slate-800 space-y-3 font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-slate-500 dark:text-slate-400 uppercase">Recovery Elapsed (RTO)</span>
                <span className="text-[20px] font-bold text-emerald-600 dark:text-emerald-400">
                  {activeStage.recoveryTimeObjectiveSeconds}s / 60s Target
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(activeStage.recoveryTimeObjectiveSeconds / 60) * 100}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[12px] text-slate-500 dark:text-slate-400">
                <span>RPO: {activeStage.recoveryPointObjectiveSeconds}s (Zero Data Loss)</span>
                <span>SLA Margin: +12s Ahead</span>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[13px]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Anycast BGP Route Rerouted</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.isAnycastRerouted ?? true ? 'Completed' : 'Pending'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Azure Read-Replica Promoted</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <Database size={14} /> {data?.hasReplicaPromoted ?? true ? 'Active Master' : 'Replica'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Zero Data Loss Verified</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  <ShieldCheck size={14} /> {data?.hasZeroDataLoss ?? true ? '100% Retained' : 'Risk'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[12px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Secondary multi-cloud failover fully normalized.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">SRE Posture:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 size={16} /> Automated Regional Failover Validated | SLA 99.999% Maintained
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1">
            <ShieldCheck size={16} /> Suite 2027 Resiliency Core
          </span>
        </div>
      </div>
    </div>
  );
};
