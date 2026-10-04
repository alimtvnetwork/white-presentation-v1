import React from 'react';
import type { AiAgentOrchestrationPipelineSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { Cpu, CheckCircle2, Sparkles, Network, Terminal, Bot } from 'lucide-react';

export const AiAgentOrchestrationPipelineSlide: React.FC<{
  slide: AiAgentOrchestrationPipelineSlideData;
  activeStep?: number;
}> = ({ slide, activeStep }) => {
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = slide?.orchestrationPhases || [];
  const currentStep = Math.min(Math.max(0, (activeStep !== undefined ? activeStep : storeStep) || 0), stages.length - 1);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Cpu size={18} /> {slide?.kicker || 'AI AGENT ORCHESTRATION PIPELINE'}
            </span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)]">Cluster: {slide?.clusterArchitectureTopology || 'Hierarchical DAG Swarm'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5"><Network size={16} /> MCP Sandboxed</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2"><span className="text-[var(--pres-text-muted)]">Phase:</span><span className="font-bold text-[16px] text-[var(--pres-accent)]">{currentStep + 1} of {stages.length}</span></div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Architect: Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto z-10 h-[520px]">
        {stages.map((ph, idx) => {
          const phase = resolveStepPhase(idx, currentStep);
          const isCurrent = phase === 'active';
          const isDone = phase === 'completed';
          return (
            <div key={ph.stepIndex} onClick={() => jumpToStep(idx)} style={getStepLifecycleStyle(phase)} className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between cursor-pointer transition-all ${isCurrent ? 'bg-[var(--pres-bg-card)] border-[var(--pres-accent)] ring-2 ring-[var(--pres-accent)]/40 shadow-xl animate-pipeline-flow' : 'bg-[var(--pres-bg-card)] border-[var(--pres-border)]'}`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[16px] font-bold text-[var(--pres-accent)]">{ph.phaseId}</span>
                  {isDone ? <span className="font-mono text-[16px] text-emerald-700 dark:text-emerald-300 flex items-center gap-1"><CheckCircle2 size={18} /> Verified</span> : isCurrent ? <span className="font-mono text-[16px] text-[var(--pres-accent)] flex items-center gap-1"><Sparkles size={18} /> Executing</span> : <span className="font-mono text-[16px] text-[var(--pres-text-muted)]">Queued</span>}
                </div>
                <h3 className="text-[22px] font-bold text-[var(--pres-text)] mt-4 mb-1">{ph.phaseName}</h3>
                <div className="text-[14px] font-mono text-[var(--pres-accent)] mb-3">{ph.reasoningModelFamily}</div>
                <p className="text-[15px] text-[var(--pres-text-muted)] leading-relaxed mb-4">{ph.phaseDeliverableSummary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {(ph.activeToolCapabilities || []).slice(0, 3).map((tool, tIdx) => (
                    <span key={tIdx} className="font-mono text-[14px] px-2.5 py-1 rounded-lg bg-[var(--pres-bg)] border border-[var(--pres-border)] text-[var(--pres-text)] flex items-center gap-1">
                      <Terminal size={14} /> {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--pres-border)] grid grid-cols-2 gap-2 font-mono">
                <div><div className="text-[14px] text-[var(--pres-text-muted)]">Subagents</div><div className="text-[18px] font-bold text-[var(--pres-text)]">{ph.subagentWorkerCount} Nodes</div></div>
                <div className="text-right"><div className="text-[14px] text-[var(--pres-text-muted)]">Throughput</div><div className="text-[18px] font-bold text-[var(--pres-accent)]">{ph.tokenThroughputPerSecond} t/s</div></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text-muted)]"><Bot size={18} className="text-[var(--pres-accent)]" /> Active Swarm:</div>
          {(slide?.workerNodes || []).slice(0, 4).map((node) => (
            <div key={node.id} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-[14px] font-bold text-[var(--pres-text)]">{node.nodeName}</span>
              <span className="text-[14px] text-[var(--pres-text-muted)] font-mono">({node.contextWindowUtilizationPercentage}%)</span>
            </div>
          ))}
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Total Processed: <span className="font-bold text-[var(--pres-accent)] text-[16px]">{(slide?.totalContextTokensProcessed || 0).toLocaleString()} tokens</span> • Verified: <span className="text-[var(--pres-text)] font-bold">Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>
    </div>
  );
};
