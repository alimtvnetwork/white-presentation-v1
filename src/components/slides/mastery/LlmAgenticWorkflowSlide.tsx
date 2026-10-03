// lint-allow: file-size reason="LlmAgenticWorkflowSlide kinetic 4-step DAG orchestration" max=120
import React from 'react';
import type { LlmAgenticWorkflowDagSlideData } from '../../../types/globalPptMasteryArchetypes';
import { createLlmAgenticWorkflowSlide } from '../../../utils/globalPptMasteryFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Workflow, CheckCircle2, ShieldCheck, Activity, BrainCircuit } from 'lucide-react';

export const LlmAgenticWorkflowSlide: React.FC<{ slide?: LlmAgenticWorkflowDagSlideData; data?: LlmAgenticWorkflowDagSlideData }> = ({ slide, data: pData }) => {
  const fallback = createLlmAgenticWorkflowSlide('default-llm-agentic-workflow');
  const data = slide || pData || fallback;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = data.agentStages?.length ? data.agentStages : fallback.agentStages;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const nodes = data.taskNodes?.length ? data.taskNodes : fallback.taskNodes;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[45px_70px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Workflow size={15} className="text-violet-500" />
              {data.kicker || 'AUTONOMOUS AGENT GOVERNANCE'}
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-slate-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> {data.orchestratorFramework || 'LangGraph Core Enterprise'} • {data.consensusThresholdPercent || 95}% Consensus Gate
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'LLM Agentic Workflow DAG: Autonomous Orchestration & Human Consensus'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Deterministic subtask decomposition, isolated sandboxed tool dispatch, and verification gates'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-5 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Consensus Gate</span><span className="text-lg font-bold text-slate-900 dark:text-emerald-400">{data.consensusThresholdPercent || 95}%</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Max Subtasks</span><span className="text-lg font-bold text-slate-900 dark:text-sky-400">{data.maxExecutionSteps || 8} Stages</span></div>
          <div className="w-[1px] h-7 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Lead Architect</span><span className="text-xs font-bold text-slate-800 dark:text-slate-200">Alim Ul Karim (Chief Software Engineer)</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;
          return (
            <button key={st.stepIndex} onClick={() => jumpToStep(idx)} className={`text-left p-3 rounded-xl border transition-all cursor-pointer font-mono text-xs flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_16px_var(--pres-accent)] text-white' : isCompleted ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-800/80 bg-black/20 opacity-40 text-slate-400'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : isCompleted ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <span className="font-bold">{st.stageName}</span>
              </div>
              <span className="text-[10px] opacity-75 truncate max-w-[130px]">{st.focusAgent}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-auto h-[490px] items-stretch">
        {nodes.map((node, i) => {
          const isNodeActive = i === currentStep;
          const isNodeDone = i < currentStep;
          return (
            <div key={node.id} className={`plane-2-elevated p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${isNodeActive ? 'border-[var(--pres-accent)] ring-1 ring-[var(--pres-accent)]/50 shadow-lg scale-[1.02]' : isNodeDone ? 'border-emerald-500/40 opacity-85' : 'border-slate-800/60 opacity-40'}`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
                <span className="font-mono text-xs font-bold text-slate-900 dark:text-sky-300 flex items-center gap-2">
                  <BrainCircuit size={15} className="text-violet-400" /> NODE 0{i + 1}: {node.agentRole}
                </span>
                <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${isNodeActive ? 'bg-violet-500/20 text-violet-300 border-violet-500/40' : isNodeDone ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                  {node.statusBadge}
                </span>
              </div>
              <div className="my-3 space-y-2.5 font-mono text-xs">
                <div className="flex justify-between text-slate-400 text-[11px]"><span>Execution Latency</span><span className="text-slate-200 font-bold">{node.executionLatencyMs} ms</span></div>
                <div className="flex justify-between text-slate-400 text-[11px]"><span>Confidence Score</span><span className="text-emerald-400 font-bold">{node.confidenceScorePercent}%</span></div>
                <div className="flex justify-between text-slate-400 text-[11px]"><span>State Verification</span><span className="text-violet-300 font-bold">{node.isVerified ? 'VERIFIED PASSED' : isNodeActive ? 'INSPECTION ACTIVE' : 'PENDING GATE'}</span></div>
                <div className="p-2.5 rounded-lg bg-black/30 border border-slate-800 text-[11px] leading-relaxed text-slate-300">
                  {node.outputPayloadSummary}
                </div>
              </div>
              <div className="pt-2.5 border-t border-slate-700/40 flex items-center justify-between font-mono text-[10px] text-slate-400">
                <span>Verification Gate</span>
                <span className="text-emerald-400 font-bold">{stages[i]?.verificationGate || 'Acyclic DAG Check'}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised p-3 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> gVisor Sandbox Containment Active</span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Policy Violation Rate: <strong className="text-slate-200">0.00%</strong></span>
          <span className="text-slate-600">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Human Consensus Gate: <span className="text-emerald-400">{data.hasHumanApprovalGate ? 'MANDATORY ENFORCED' : 'BYPASS'}</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5"><Activity size={13} className="text-sky-400" /> Active Stage: {stages[currentStep]?.stageName}</span>
          <span>Step {currentStep + 1} of {stages.length}</span>
        </div>
      </div>
    </div>
  );
};
