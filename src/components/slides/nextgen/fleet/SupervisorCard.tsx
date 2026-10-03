import React from 'react';
import { Cpu, Zap } from 'lucide-react';
import type { SupervisorController } from '../../../../types/nextGenArchetypes';

interface SupervisorCardProps {
  supervisor: SupervisorController;
  isActive: boolean;
}

export const SupervisorCard: React.FC<SupervisorCardProps> = ({ supervisor, isActive }) => (
  <div
    style={{
      backgroundColor: 'var(--pres-bg-card)',
      borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
    }}
    className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${
      isActive ? 'step-phase-active ring-2 ring-violet-500/60 shadow-xl opacity-100' : 'step-phase-past opacity-75'
    }`}
  >
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="px-3.5 py-1 rounded-full text-sm font-mono font-bold bg-violet-500/20 text-slate-900 dark:text-violet-300 border border-violet-500/30 flex items-center gap-1.5">
          <Cpu size={15} className="text-violet-400" />
          SUPERVISOR DISPATCH
        </span>
        <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20 font-bold">
          {supervisor.isOperational ? 'OPERATIONAL' : 'DEGRADED'}
        </span>
      </div>

      <h2 className="text-2xl font-ubuntu font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-100">
        {supervisor.controllerId}
      </h2>
      <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-4">
        Core Engine: {supervisor.modelFamily}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-xs">
        <div className="p-3 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] block uppercase">
            Context Window
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-sky-300">
            {(supervisor.contextWindowTokens / 1000).toFixed(0)}k Tokens
          </span>
        </div>
        <div className="p-3 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] block uppercase">
            Queue Depth
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-emerald-300">
            {supervisor.currentTaskQueueDepth} Tasks
          </span>
        </div>
      </div>
    </div>

    <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
      <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
        <Zap size={14} className="text-amber-600 dark:text-amber-400" /> Autonomous Dispatch
      </span>
      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
        {supervisor.isAutonomousDispatchEnabled ? 'ENABLED' : 'MANUAL'}
      </span>
    </div>
  </div>
);
