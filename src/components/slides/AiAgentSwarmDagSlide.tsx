import React from 'react';
import type { AiAgentSwarmDagSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { AgentDagNode } from './swarm/AgentDagNode';
import { Network, Bot, ShieldCheck } from 'lucide-react';

export const AiAgentSwarmDagSlide: React.FC<{ slide: AiAgentSwarmDagSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const nodes = slide.nodes || [];
  const currentNodeIndex = Math.min(activeStep, Math.max(0, nodes.length - 1));
  const activeNode = nodes[currentNodeIndex];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30 flex items-center gap-1.5">
            <Network size={12} /> {slide.kicker || 'MULTI-AGENT SYSTEMS'}
          </span>
          <span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            Active Agent {currentNodeIndex + 1} of {Math.max(nodes.length, 1)}: {activeNode?.agentRole || 'Orchestrator'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.title || 'Autonomous Multi-Agent DAG Orchestration'}</h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Deterministic topological task execution with automated evidence verification gates.'}
        </p>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl border border-slate-800 bg-slate-900/60 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Bot size={14} className="text-amber-600 dark:text-amber-400" />
          <span className="text-slate-400">Lead Orchestrator:</span>
          <span className="text-amber-800 dark:text-amber-300 font-bold">{slide.orchestratorRole || 'Lead Orchestrator Subagent'}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-slate-400">Total Budget:</span>
          <span className="text-cyan-300 font-bold">{(slide.totalTokenBudget || 50000).toLocaleString()} Tokens</span>
        </div>
        <span className="flex items-center gap-1 text-emerald-400 font-bold">
          <ShieldCheck size={14} /> Topological Acyclic DAG Verified
        </span>
      </div>

      <div className="grid grid-cols-12 gap-5 z-10 my-auto h-[440px] items-stretch">
        {nodes.map((node, idx) => (
          <div key={node.id || idx} className={nodes.length === 2 ? 'col-span-6' : nodes.length === 3 ? 'col-span-4' : 'col-span-3'}>
            <AgentDagNode
              node={node}
              index={idx}
              activeStep={activeStep}
              accentColor="var(--pres-accent, #f59e0b)"
            />
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-800 bg-slate-950/90 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-4 text-slate-300">
          <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1.5"><Bot size={14} /> Active Telemetry:</span>
          <span>Role: <strong className="text-slate-100">{activeNode?.agentRole}</strong></span>
          <span>Model: <strong className="text-amber-800 dark:text-amber-300 uppercase">{activeNode?.modelIdentifier}</strong></span>
          <span>Duration: <strong className="text-cyan-300">{activeNode?.executionDurationMs}ms</strong></span>
          <span>Tokens: <strong className="text-emerald-300">{activeNode?.tokenCount?.toLocaleString()}</strong></span>
        </div>
        <div className="flex items-center gap-2">
          {activeNode?.isEvidencePassed && (
            <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]">
              <ShieldCheck size={13} /> Evidence Gate Passed
            </span>
          )}
          <span style={{ color: 'var(--pres-text-muted)' }}>Step: {activeStep}</span>
        </div>
      </div>
    </div>
  );
};
