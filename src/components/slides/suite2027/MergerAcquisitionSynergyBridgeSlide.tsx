// lint-allow: file-size reason="MergerAcquisitionSynergyBridgeSlide kinetic 4-step M&A synergy realization waterfall" max=420
import React from 'react';
import type {
  MergerAcquisitionSynergyBridgeSlideData,
  SynergyStage,
  SynergyBridgeNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  TrendingUp,
  DollarSign,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Layers,
  Award,
} from 'lucide-react';

const DEF_STAGES: SynergyStage[] = [
  {
    stepIndex: 0,
    stageName: 'Pre-Deal Baseline EBITDA & Asset Audit',
    stageSubtitle: 'Certified baseline cash flows prior to operational integration',
    cumulativeValueMillionsUsd: 45.0,
    realizationProgressPercentage: 100.0,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Cost Rationalization & Cloud Consolidation',
    stageSubtitle: 'Elimination of redundant SaaS tools and consolidated data center leases',
    cumulativeValueMillionsUsd: 65.0,
    realizationProgressPercentage: 92.5,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Commercial Cross-Sell & Platform Expansion',
    stageSubtitle: 'Cross-selling core software capabilities into acquired enterprise accounts',
    cumulativeValueMillionsUsd: 82.5,
    realizationProgressPercentage: 88.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Target Enterprise Value Realization',
    stageSubtitle: 'Final post-merger integration yielding $90M target valuation',
    cumulativeValueMillionsUsd: 90.0,
    realizationProgressPercentage: 104.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: SynergyBridgeNode[] = [
  {
    id: 'node-baseline',
    category: 'Pre-Deal Baseline Value',
    impactAmountMillionsUsd: 45.0,
    isPositiveContribution: true,
    hasRealizedAuditVerification: true,
  },
  {
    id: 'node-cost-synergies',
    category: 'G&A and Cloud Cost Consolidation',
    impactAmountMillionsUsd: 20.0,
    isPositiveContribution: true,
    hasRealizedAuditVerification: true,
  },
  {
    id: 'node-revenue-synergies',
    category: 'Product Cross-Sell Accretion',
    impactAmountMillionsUsd: 17.5,
    isPositiveContribution: true,
    hasRealizedAuditVerification: true,
  },
  {
    id: 'node-target-ev',
    category: 'Realized Target Valuation',
    impactAmountMillionsUsd: 90.0,
    isPositiveContribution: true,
    hasRealizedAuditVerification: true,
  },
];

export const MergerAcquisitionSynergyBridgeSlide: React.FC<{
  slide?: MergerAcquisitionSynergyBridgeSlideData;
  data?: MergerAcquisitionSynergyBridgeSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.synergyStages?.length ? data.synergyStages : DEF_STAGES;
  const nodes = data?.bridgeNodes?.length ? data.bridgeNodes : DEF_NODES;

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
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 flex items-center gap-2">
              <Briefcase size={16} className="text-amber-500" />
              {data?.kicker || 'STRATEGIC M&A OVERSIGHT'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Award size={14} /> Deal: {data?.dealCodename || 'Project Titan Integration'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <DollarSign size={14} className="text-emerald-500" />
              Target EV: ${data?.targetEnterpriseValueMillionsUsd ?? 90.0}M
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'M&A Value Accretion & Synergy Realization Bridge'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Post-acquisition waterfall modeling baseline EBITDA, cost rationalization, and cross-sell expansion.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Cumulative Value</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              ${activeStage.cumulativeValueMillionsUsd.toFixed(1)}M
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Realization Progress</span>
            <span className="text-amber-600 dark:text-amber-400 font-bold text-[18px]">
              {activeStage.realizationProgressPercentage.toFixed(1)}%
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
                    Realization: {st.realizationProgressPercentage}%
                  </div>
                </div>
              </div>
              <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                ${st.cumulativeValueMillionsUsd.toFixed(1)}M
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Synergy Waterfall Bridge Nodes */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Value Creation Bridge Waterfall
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20">
                Horizon: {data?.integrationHorizonDays ?? 180} Days
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((node, nIdx) => {
                const isCurrentLayer = nIdx === currentStep;
                return (
                  <div
                    key={node.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px]">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            node.hasRealizedAuditVerification ? 'bg-emerald-500' : 'bg-slate-400'
                          }`}
                        />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {node.category}
                        </span>
                        <span className="text-[12px] px-2 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                          Step 0{nIdx + 1}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[13px]">
                          Audit: <strong className="text-emerald-600 dark:text-emerald-400">VERIFIED</strong>
                        </span>
                        <div className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px] flex items-center gap-1">
                          <ArrowUpRight size={18} /> ${node.impactAmountMillionsUsd.toFixed(1)}M
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[var(--pres-border)] grid grid-cols-3 gap-4 font-mono text-[13px]">
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Pre-Deal EBITDA</span>
              <span className="text-slate-800 dark:text-slate-200 font-bold text-[16px]">$45.0M Certified</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Realized Run-Rate</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[16px]">+104% Target</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Final Enterprise Value</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold text-[16px]">$90.0M Accretive</span>
            </div>
          </div>
        </div>

        {/* Right Bento: Active Stage Elevation & Valuation Milestones */}
        <div className="col-span-5 plane-2-elevated rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-[var(--pres-accent)] flex items-center gap-2">
                <TrendingUp size={18} /> Active Milestone Focus (Step 0{currentStep + 1})
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
                <span className="text-[13px] text-slate-500 dark:text-slate-400 uppercase">Cumulative Realized Value</span>
                <span className="text-[22px] font-bold text-emerald-600 dark:text-emerald-400">
                  ${activeStage.cumulativeValueMillionsUsd.toFixed(1)}M USD
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (activeStage.cumulativeValueMillionsUsd / 90.0) * 100)}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[12px] text-slate-500 dark:text-slate-400">
                <span>Realization Progress: {activeStage.realizationProgressPercentage}%</span>
                <span>Target EV: $90.0M</span>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[13px]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Synergy Milestone Target</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasSynergyTargetMet ?? true ? 'Target Achieved' : 'In Flight'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Integration Timeline Schedule</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <Calendar size={14} /> {data?.isIntegrationOnSchedule ?? true ? 'On Schedule (Day 110)' : 'Delayed'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Executive Committee Signoff</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  <Award size={14} /> {data?.hasExecutiveSignoffCompleted ?? true ? '100% Unanimous' : 'Pending'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[12px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Full post-merger accretion verified by independent audit.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Governance Status:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 size={16} /> Board Approved Fiduciary Resolution | Value Accretive
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1">
            <ShieldCheck size={16} /> Suite 2027 M&A Core
          </span>
        </div>
      </div>
    </div>
  );
};
