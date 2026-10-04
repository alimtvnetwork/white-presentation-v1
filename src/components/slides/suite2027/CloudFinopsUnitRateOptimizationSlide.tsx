// lint-allow: file-size reason="CloudFinopsUnitRateOptimizationSlide kinetic 4-step enterprise cloud FinOps unit cost rate optimization" max=200
import React from 'react';
import type {
  CloudFinopsUnitRateOptimizationSlideData,
  FinopsOptimizationStage,
  WorkloadFinopsNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  DollarSign,
  TrendingDown,
  Server,
  Cloud,
  CheckCircle2,
  Tag,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
} from 'lucide-react';

const DEF_STAGES: FinopsOptimizationStage[] = [
  {
    stepIndex: 0,
    stageName: 'Tag Allocation & Cost Visibility',
    stageSubtitle: '100% cloud resource tag hygiene with automated FinOps attribution policies',
    totalSpendMonitoredUsd: 18500000,
    savingsRunRateUsd: 420000,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Spot & Preemptible Compute Arbitrage',
    stageSubtitle: 'Stateless worker bin-packing and GPU spot preemption tolerance mechanisms',
    totalSpendMonitoredUsd: 24200000,
    savingsRunRateUsd: 1450000,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Multi-Tier Storage Class Auto-Archive',
    stageSubtitle: 'Intelligent S3/GCS tiering transitioning cold partitions to Deep Archive',
    totalSpendMonitoredUsd: 31000000,
    savingsRunRateUsd: 2600000,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Reserved Commitments & 3-Yr Savings Plans',
    stageSubtitle: 'High-confidence baseline compute coverage reaching 88% reserved capacity',
    totalSpendMonitoredUsd: 38500000,
    savingsRunRateUsd: 4200000,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_WORKLOADS: WorkloadFinopsNode[] = [
  {
    id: 'wf-gpu',
    workloadName: 'Distributed vLLM GPU Farm',
    cloudProvider: 'Hybrid Baremetal & AWS',
    monthlyCostUsd: 340000,
    unitCostPerUserUsd: 0.0098,
    realizedSavingsUsd: 110000,
    isTaggedFully: true,
    hasArbitrageActive: true,
  },
  {
    id: 'wf-lake',
    workloadName: 'Medallion Data Lake S3/GCS',
    cloudProvider: 'AWS us-east-1 / GCP',
    monthlyCostUsd: 215000,
    unitCostPerUserUsd: 0.0064,
    realizedSavingsUsd: 62000,
    isTaggedFully: true,
    hasArbitrageActive: true,
  },
  {
    id: 'wf-vector',
    workloadName: 'K8s Vector Search Cluster',
    cloudProvider: 'AWS us-east-1',
    monthlyCostUsd: 142000,
    unitCostPerUserUsd: 0.0042,
    realizedSavingsUsd: 38000,
    isTaggedFully: true,
    hasArbitrageActive: true,
  },
  {
    id: 'wf-kafka',
    workloadName: 'Realtime Kafka Fabric Fleet',
    cloudProvider: 'GCP us-central1',
    monthlyCostUsd: 98000,
    unitCostPerUserUsd: 0.0028,
    realizedSavingsUsd: 24000,
    isTaggedFully: true,
    hasArbitrageActive: true,
  },
  {
    id: 'wf-db',
    workloadName: 'Transactional PostgreSQL Enclave',
    cloudProvider: 'Azure East US',
    monthlyCostUsd: 82000,
    unitCostPerUserUsd: 0.0024,
    realizedSavingsUsd: 18000,
    isTaggedFully: true,
    hasArbitrageActive: false,
  },
];

export const CloudFinopsUnitRateOptimizationSlide: React.FC<{
  slide?: CloudFinopsUnitRateOptimizationSlideData;
  data?: CloudFinopsUnitRateOptimizationSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.optimizationStages?.length ? data.optimizationStages : DEF_STAGES;
  const workloads = data?.workloadNodes?.length ? data.workloadNodes : DEF_WORKLOADS;

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
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <DollarSign size={16} className="text-emerald-500" />
              {data?.kicker || 'CLOUD FINOPS & UNIT RATE OPTIMIZATION'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Cloud size={14} /> Org: {data?.organizationName || 'Enterprise Core Platform'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <TrendingDown size={14} className="text-cyan-500" />
              Savings Run Rate: ${(activeStage.savingsRunRateUsd / 1000000).toFixed(2)}M / yr
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Cloud FinOps Unit Rate & Workload Optimization'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Sequential cloud unit cost engineering: full tag attribution, dynamic spot arbitrage, cold partition lifecycle archiving, and multi-year commitment right-sizing.'}
          </p>
        </div>

        {/* Telemetry Summary */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Savings Target</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              ${((data?.annualizedSavingsTargetUsd ?? 4200000) / 1000000).toFixed(1)}M USD
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Unit Efficiency</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              ${(data?.unitCostEfficiencyIndex ?? 0.0014).toFixed(4)}/tx
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Lead Architect</span>
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
                    ${(st.totalSpendMonitoredUsd / 1000000).toFixed(1)}M Monitored
                  </div>
                </div>
              </div>
              <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                +${(st.savingsRunRateUsd / 1000000).toFixed(2)}M
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Workload Fleet FinOps Attribution Table */}
        <div className="col-span-8 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Core Workload Fleet Unit Economics
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Phase {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4 font-mono text-[13px]">
              {workloads.map((wf) => (
                <div
                  key={wf.id}
                  className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:border-[var(--pres-accent)] hover:bg-slate-200/50 dark:hover:bg-slate-800/40 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Server size={15} className="text-slate-400" />
                      <span className="font-bold text-slate-800 dark:text-slate-200">{wf.workloadName}</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {wf.cloudProvider}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {wf.isTaggedFully && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                          <Tag size={10} /> 100% Tagged
                        </span>
                      )}
                      {wf.hasArbitrageActive && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <Zap size={10} /> Arbitrage On
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[12px] pt-1 text-slate-500 dark:text-slate-400">
                    <span>Monthly Spend: ${(wf.monthlyCostUsd / 1000).toFixed(0)}k/mo</span>
                    <span>Unit Cost: ${wf.unitCostPerUserUsd.toFixed(4)}/user</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      Realized Savings: +${(wf.realizedSavingsUsd / 1000).toFixed(0)}k/mo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[12px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-500" />
              Automated Tag Reconciliation: Zero orphan resources detected across accounts
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              FOCUS 1.0 Specification Compliant
            </span>
          </div>
        </div>

        {/* Right Bento: Active Step Savings Metric & FinOps Controls */}
        <div className="col-span-4 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <DollarSign size={16} className="text-emerald-500" /> Step {currentStep + 1} Optimization
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[12px] border border-emerald-500/30">
                Active Policy
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[18px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[14px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[13px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] block uppercase">Spend Monitored</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
                    ${(activeStage.totalSpendMonitoredUsd / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] block uppercase">Savings Run-Rate</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
                    ${(activeStage.savingsRunRateUsd / 1000000).toFixed(2)}M
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[13px]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Automated Arbitrage</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasAutoArbitrageEnabled ?? true ? 'Engaged (Spot Pool)' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Full Tag Hygiene Coverage</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.isTaggedFully ?? true ? '100% Attributed' : 'Partial (82%)'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Continuous FinOps Audit</span>
                <span className="font-bold text-violet-600 dark:text-violet-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasContinuousAudit ?? true ? 'Active (Hourly Scan)' : 'Weekly'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[12px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step {currentStep + 1} of {stages.length}. ${(activeStage.savingsRunRateUsd / 1000000).toFixed(2)}M annualized savings locked in.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">FinOps Governance:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> FinOps Foundation Certified Practitioner Framework | Zero Waste
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2027 FinOps Core
          </span>
        </div>
      </div>
    </div>
  );
};
