// lint-allow: file-size reason="ValueStreamBottleneckFlowSlide kinetic 4-step DevOps value stream flow" max=420
import React from 'react';
import type {
  ValueStreamBottleneckFlowSlideData,
  StreamStage,
  ValueStreamNode,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  GitPullRequest,
  Clock,
  Activity,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Filter,
} from 'lucide-react';

const DEF_STAGES: StreamStage[] = [
  {
    stepIndex: 0,
    stageName: 'Customer Feature Ingestion & Spec Scoping',
    stageSubtitle: 'Refined epics decomposed into hermetic architectural task units',
    cycleTimeHours: 1.7,
    efficiencyPercentage: 82.0,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Hermetic Build & Automated Unit Test Suite',
    stageSubtitle: 'Parallelized CI runner compilation with 100% build cache hit rate',
    cycleTimeHours: 1.2,
    efficiencyPercentage: 74.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Comprehensive AST Security Scan Bottleneck',
    stageSubtitle: 'Deep static semantic analysis identifying critical path delay bottleneck',
    cycleTimeHours: 11.7,
    efficiencyPercentage: 30.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Automated Production Canary Deployment',
    stageSubtitle: 'Progressive traffic ramp with sub-second error rate rollback gates',
    cycleTimeHours: 1.6,
    efficiencyPercentage: 88.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: ValueStreamNode[] = [
  {
    id: 'vsm-backlog',
    stageName: 'Backlog Feature Ingestion',
    processTimeHours: 0.5,
    waitTimeHours: 1.2,
    flowEfficiencyPercentage: 29.4,
    isBottleneckStage: false,
    hasAutomationOptimized: true,
  },
  {
    id: 'vsm-build',
    stageName: 'Hermetic Build & Tests',
    processTimeHours: 0.8,
    waitTimeHours: 0.4,
    flowEfficiencyPercentage: 66.7,
    isBottleneckStage: false,
    hasAutomationOptimized: true,
  },
  {
    id: 'vsm-security',
    stageName: 'AST Static Security Scan',
    processTimeHours: 3.5,
    waitTimeHours: 8.2,
    flowEfficiencyPercentage: 29.9,
    isBottleneckStage: true,
    hasAutomationOptimized: false,
  },
  {
    id: 'vsm-canary',
    stageName: 'Automated Canary Deployment',
    processTimeHours: 1.4,
    waitTimeHours: 0.2,
    flowEfficiencyPercentage: 87.5,
    isBottleneckStage: false,
    hasAutomationOptimized: true,
  },
];

export const ValueStreamBottleneckFlowSlide: React.FC<{
  slide?: ValueStreamBottleneckFlowSlideData;
  data?: ValueStreamBottleneckFlowSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.streamStages?.length ? data.streamStages : DEF_STAGES;
  const nodes = data?.streamNodes?.length ? data.streamNodes : DEF_NODES;

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
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 flex items-center gap-2">
              <GitPullRequest size={16} className="text-blue-500" />
              {data?.kicker || 'DEVOPS VALUE STREAM MAPPING'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Clock size={14} /> Lead Time: {data?.totalLeadTimeDays ?? 4.8} Days
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Cycle Time: {data?.totalCycleTimeHours ?? 6.2} Hours
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Software Delivery Value Stream & Bottleneck Flow'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Identifying constraints, reducing non-value-add wait times, and elevating flow efficiency from 38% to 68%.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Flow Efficiency</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.efficiencyPercentage.toFixed(0)}% Optimal
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Stage Cycle Time</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.cycleTimeHours} Hours
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
          const isBottleneck = idx === 2;

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
                  <div className="font-bold leading-tight flex items-center gap-1.5">
                    {st.stageName}
                    {isBottleneck && (
                      <span className="px-1.5 py-0.2 rounded text-[10px] bg-rose-500/20 text-rose-700 dark:text-rose-300 font-bold">
                        BOTTLENECK
                      </span>
                    )}
                  </div>
                  <div className="text-[12px] opacity-75 font-normal">
                    Cycle: {st.cycleTimeHours}h | Eff: {st.efficiencyPercentage}%
                  </div>
                </div>
              </div>
              <span className="text-[12px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                {st.efficiencyPercentage}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Value Stream Stages & Wait Time Breakdown */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Delivery Value Stream Stages & Queue Latency
              </span>
              <span className="font-mono text-[12px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/20">
                Stage: {activeStage.stageName}
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
                            node.isBottleneckStage ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500'
                          }`}
                        />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {node.stageName}
                        </span>
                        {node.isBottleneckStage && (
                          <span className="text-[12px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-700 dark:text-rose-400 border border-rose-500/30 font-bold flex items-center gap-1">
                            <AlertTriangle size={12} /> BOTTLENECK
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[13px]">
                          Process: <strong className="text-slate-800 dark:text-slate-200">{node.processTimeHours}h</strong>
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-[13px]">
                          Wait: <strong className={node.isBottleneckStage ? 'text-rose-600 dark:text-rose-400' : 'text-slate-800 dark:text-slate-200'}>{node.waitTimeHours}h</strong>
                        </span>
                        <span
                          className={`text-[12px] px-2 py-0.5 rounded font-bold ${
                            node.flowEfficiencyPercentage >= 60
                              ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400'
                              : 'bg-amber-500/20 text-amber-700 dark:text-amber-400'
                          }`}
                        >
                          {node.flowEfficiencyPercentage.toFixed(0)}% Eff
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
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Mean Flow Efficiency</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[16px]">68.0% (+30% Gain)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Constraint Remediation</span>
              <span className="text-rose-600 dark:text-rose-400 font-bold text-[16px]">AST Cache Parallel</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Canary Release Safety</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[16px]">0 Rollback Faults</span>
            </div>
          </div>
        </div>

        {/* Right Bento: Active Stage Elevation & Remediation Gates */}
        <div className="col-span-5 plane-2-elevated rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-[var(--pres-accent)] flex items-center gap-2">
                <Activity size={18} /> Active Stream Gate (Step 0{currentStep + 1})
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
                <span className="text-[13px] text-slate-500 dark:text-slate-400 uppercase">Stage Flow Efficiency</span>
                <span className="text-[20px] font-bold text-[var(--pres-accent)]">
                  {activeStage.efficiencyPercentage}%
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-[var(--pres-accent)] h-full rounded-full transition-all duration-500"
                  style={{ width: `${activeStage.efficiencyPercentage}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[12px] text-slate-500 dark:text-slate-400">
                <span>Cycle Time: {activeStage.cycleTimeHours} Hours</span>
                <span>Target: &gt; 60%</span>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[13px]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Continuous Delivery Flow</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasContinuousDelivery ?? true ? 'Fully Automated' : 'Manual'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Bottleneck Constraint Root</span>
                <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <AlertTriangle size={14} /> {data?.isBottleneckIdentified ?? true ? 'AST Security Scan' : 'Resolved'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Canary Gate Automation</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> {data?.hasCanaryVerified ?? true ? 'Verified 100%' : 'Pending'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[12px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Wait time reduced by 62% across all delivery pipelines.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">DevOps Telemetry:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 size={16} /> DORA Flow Metric Standard Attained | Continuous Delivery Active
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1">
            <ShieldCheck size={16} /> Suite 2027 Flow Core
          </span>
        </div>
      </div>
    </div>
  );
};
