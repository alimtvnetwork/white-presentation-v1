// lint-allow: file-size reason="AiAgentMultiTurnOrchestrationDagSlide kinetic 4-step multi-agent orchestration DAG" max=450
import React from 'react';
import type {
  AiAgentMultiTurnOrchestrationDagSlideData,
  AgentOrchestrationStage,
  AutonomousAgentTaskNode,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  GitFork,
  Bot,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Zap,
  Terminal,
  Clock,
  ArrowRight,
  Layers,
  Cpu,
} from 'lucide-react';

const DEF_STAGES: AgentOrchestrationStage[] = [
  {
    stepIndex: 0,
    stageName: 'User Intent Decomposition & DAG Goal Planning',
    stageSubtitle: 'Decomposing high-level objectives into acyclic dependency execution nodes',
    parallelAgentsActiveCount: 1,
    consensusConvergenceScore: 0.95,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Specialized Worker Agent Dispatch & Tool Execution',
    stageSubtitle: 'Concurrently executing Research, Synthesis, and Security Verification agents',
    parallelAgentsActiveCount: 4,
    consensusConvergenceScore: 0.92,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Dialectic Consensus & Formal Conflict Resolution',
    stageSubtitle: 'Multi-agent debate protocol evaluating invariant soundness and eliminating hallucinations',
    parallelAgentsActiveCount: 3,
    consensusConvergenceScore: 0.99,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Synthesized Evidence Packaging & Actionable Delivery',
    stageSubtitle: 'Consolidating proven findings into canonical production artifacts with verifiable citations',
    parallelAgentsActiveCount: 1,
    consensusConvergenceScore: 1.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_TASKS: AutonomousAgentTaskNode[] = [
  {
    id: 'task-research',
    agentRole: 'Research & Grounding Agent',
    assignedSubGoal: 'Ingest distributed consensus specifications & RFCs',
    toolInvocationsCount: 14,
    reasoningStepCount: 28,
    confidenceScorePercentage: 99.2,
    isTaskCompleted: true,
    hasConsensusApproved: true,
  },
  {
    id: 'task-coder',
    agentRole: 'Code Synthesis Specialist',
    assignedSubGoal: 'Generate zero-allocation serialization primitives in Go/Rust',
    toolInvocationsCount: 8,
    reasoningStepCount: 16,
    confidenceScorePercentage: 98.8,
    isTaskCompleted: true,
    hasConsensusApproved: true,
  },
  {
    id: 'task-verifier',
    agentRole: 'Formal Verification Prover',
    assignedSubGoal: 'Prove linearizability invariants across distributed nodes',
    toolInvocationsCount: 24,
    reasoningStepCount: 42,
    confidenceScorePercentage: 99.9,
    isTaskCompleted: true,
    hasConsensusApproved: true,
  },
  {
    id: 'task-synthesizer',
    agentRole: 'Actionable Delivery Synthesizer',
    assignedSubGoal: 'Consolidate verified artifacts into production git patch',
    toolInvocationsCount: 6,
    reasoningStepCount: 12,
    confidenceScorePercentage: 99.4,
    isTaskCompleted: true,
    hasConsensusApproved: true,
  },
];

export const AiAgentMultiTurnOrchestrationDagSlide: React.FC<{
  slide?: AiAgentMultiTurnOrchestrationDagSlideData;
  data?: AiAgentMultiTurnOrchestrationDagSlideData;
  activeStep?: number;
}> = ({ slide, data: pData, activeStep: propStep }) => {
  const data = slide || pData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.orchestrationStages?.length ? data.orchestrationStages : DEF_STAGES;
  const tasks = data?.agentTasks?.length ? data.agentTasks : DEF_TASKS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasDynamicReplanning = data?.hasDynamicDagReplanning ?? true;
  const hasCrossConsensus = data?.hasCrossAgentConsensus ?? true;
  const hasGroundedVerification = data?.hasGroundedEvidenceVerification ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Bot size={16} className="text-cyan-500" />
              {data?.kicker || 'AUTONOMOUS MULTI-AGENT SYSTEMS'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <GitFork size={14} /> Protocol: {data?.orchestrationProtocol || 'Dialectic Consensus DAG v2'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" />
              Accuracy: {data?.accuracyRatePercentage ?? 99.4}%
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 flex items-center gap-2">
              <Clock size={14} className="text-indigo-500" />
              Resolution: {data?.totalGoalResolutionTimeSeconds ?? 18.2}s
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'AI Agent Multi-Turn Orchestration DAG'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Hierarchical goal decomposition, parallel worker agent dispatch, dialectic consensus, and evidence-grounded synthesis.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Active Agents</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.parallelAgentsActiveCount} Workers
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Convergence</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              {Math.round(activeStage.consensusConvergenceScore * 100)}% Sound
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
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
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-90'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 blur-[1.25px] text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[14px] ${
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
                  <div className="font-bold leading-tight line-clamp-1">{st.stageName}</div>
                  <div className="text-[14px] opacity-75 font-normal">
                    {st.parallelAgentsActiveCount} Active Agents
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2.5 py-1 rounded bg-slate-200/50 dark:bg-slate-800/60">
                {Math.round(st.consensusConvergenceScore * 100)}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Plane 1 Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: Autonomous Agent Task Nodes */}
        <div className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Multi-Agent Worker Task Topology
              </span>
              <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3.5 mt-4">
              {tasks.map((task, tIdx) => {
                const isCurrentWorker = tIdx === currentStep || (currentStep >= 2 && tIdx >= 1);
                return (
                  <div
                    key={task.id}
                    className={`p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                      isCurrentWorker
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Terminal size={16} className={isCurrentWorker ? 'text-[var(--pres-accent)]' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{task.agentRole}</span>
                        {task.hasConsensusApproved ? (
                          <span className="text-[14px] font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Approved
                          </span>
                        ) : null}
                        {task.isTaskCompleted ? (
                          <span className="text-[14px] font-bold px-2.5 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <Zap size={12} /> Completed
                          </span>
                        ) : null}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">{task.toolInvocationsCount} Tools / {task.reasoningStepCount} Steps</span>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {task.confidenceScorePercentage}% Conf
                        </span>
                      </div>
                    </div>

                    <p className="font-poppins text-[14px] text-slate-600 dark:text-slate-300 mb-2.5 line-clamp-1">
                      {task.assignedSubGoal}
                    </p>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCurrentWorker ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-slate-400 dark:bg-slate-600'
                        }`}
                        style={{ width: `${task.confidenceScorePercentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <Zap size={16} className="text-amber-600 dark:text-amber-400" />
              Dynamic DAG Replanning: Sub-200ms graph topological re-sort
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              0% Hallucination Gated
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage & Dialectic Consensus Engine */}
        <div className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Consensus Engine
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
                Phase {currentStep + 1} Active
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1.5">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3.5 font-mono text-[14px]">
                <div className="p-3.5 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Parallel Agents</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">
                    {activeStage.parallelAgentsActiveCount} Workers
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Convergence</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">
                    {(activeStage.consensusConvergenceScore * 100).toFixed(0)}% Sound
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Dynamic DAG Replanning</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 size={15} /> {hasDynamicReplanning ? 'Active (Sub-goal Rebalance)' : 'Static'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Cross-Agent Consensus</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle2 size={15} /> {hasCrossConsensus ? 'Dialectic Debate Protocol' : 'Unchecked'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Evidence Verification</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                  <CheckCircle2 size={15} /> {hasGroundedVerification ? '100% Invariant Proved' : 'Heuristic'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={18} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Dialectic debate guarantees formal soundness before execution.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Protocol Proof:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Invariant Proven Sound | Multi-Turn Acyclic Resolution in {data?.totalGoalResolutionTimeSeconds ?? 18.2}s
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-1.5">
            <Cpu size={16} /> Suite 2028 Autonomous Agent Core
          </span>
        </div>
      </div>
    </div>
  );
};
