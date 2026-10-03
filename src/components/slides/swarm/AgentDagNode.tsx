import React from 'react';
import type { AgentNodeItem } from '../../../types/kineticSuiteArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { Bot, CheckCircle2, ShieldCheck, Clock, Cpu } from 'lucide-react';

export interface AgentDagNodeProps {
  node: AgentNodeItem;
  index: number;
  activeStep: number;
  accentColor?: string;
}

export const AgentDagNode: React.FC<AgentDagNodeProps> = ({
  node,
  index,
  activeStep,
  accentColor = '#f59e0b',
}) => {
  const phase = getStepPhase(index, activeStep);
  const stepStyle = getStepPhaseStyle(phase, accentColor);
  const isSelected = phase === 'active';
  const isDone = node.isCompleted;
  const isEvidencePassed = node.isEvidencePassed;

  return (
    <div
      style={stepStyle}
      className={`rounded-2xl border p-4 flex flex-col justify-between font-mono text-xs transition-all duration-300 ${
        isSelected
          ? 'bg-slate-950/95 border-amber-500 ring-2 ring-amber-500/40 shadow-2xl'
          : isDone
          ? 'bg-slate-900/60 border-slate-700'
          : 'bg-slate-950/40 border-slate-800'
      }`}
    >
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${isSelected ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300' : 'bg-slate-800 text-slate-300'}`}>
              <Bot size={13} />
            </div>
            <span className="font-bold text-slate-100 text-xs">{node.agentName}</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300 uppercase">
            {node.modelIdentifier}
          </span>
        </div>

        <h4 className="font-bold text-amber-800 dark:text-amber-400 text-[11px] mb-1">{node.agentRole}</h4>
        <p className="text-[10px] text-slate-300 leading-normal line-clamp-2">{node.assignedTaskDescription}</p>
      </div>

      <div className="border-t border-slate-800 pt-2 mt-3 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="flex items-center gap-0.5"><Clock size={10} /> {node.executionDurationMs}ms</span>
          <span className="flex items-center gap-0.5"><Cpu size={10} /> {node.tokenCount.toLocaleString()}t</span>
        </div>
        <div className="flex items-center gap-1">
          {isEvidencePassed && (
            <span className="text-emerald-400 flex items-center gap-0.5 font-bold">
              <ShieldCheck size={11} /> Evidence
            </span>
          )}
          {isDone && <CheckCircle2 size={11} className="text-emerald-400" />}
        </div>
      </div>
    </div>
  );
};
