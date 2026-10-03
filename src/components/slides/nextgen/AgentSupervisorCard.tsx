import React from 'react';
import type { SupervisorController, SafetyGovernorMetrics } from '../../../types/nextGenArchetypes';
import { Cpu, Zap, ShieldAlert, Lock } from 'lucide-react';

interface Props {
  supervisor: SupervisorController;
  governor: SafetyGovernorMetrics;
  currentStep: number;
}

export const AgentSupervisorCard: React.FC<Props> = ({ supervisor, governor, currentStep }) => {
  return (
    <div className="flex flex-col justify-between gap-5 flex-1">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: currentStep === 0 ? 'var(--pres-border-hover)' : 'var(--pres-border)' }}
        className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${currentStep === 0 ? 'step-phase-active ring-2 ring-violet-500/50' : 'step-phase-past opacity-85'}`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/20 text-slate-900 dark:text-violet-300 border border-violet-500/30 flex items-center gap-1.5">
              <Cpu size={14} className="text-violet-400" /> SUPERVISOR DISPATCH
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">
              {supervisor.isOperational ? 'OPERATIONAL' : 'DEGRADED'}
            </span>
          </div>
          <h2 className="text-2xl font-ubuntu font-bold tracking-tight mb-1 text-slate-900 dark:text-slate-100">{supervisor.controllerId}</h2>
          <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-3">Core: {supervisor.modelFamily}</p>
          <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Context</span>
              <span className="text-base font-bold text-slate-900 dark:text-sky-300">{(supervisor.contextWindowTokens / 1000).toFixed(0)}k</span>
            </div>
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Queue</span>
              <span className="text-base font-bold text-slate-900 dark:text-emerald-300">{supervisor.currentTaskQueueDepth} Tasks</span>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <Zap size={13} className="text-amber-800 dark:text-amber-300" /> Autonomous Dispatch
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{supervisor.isAutonomousDispatchEnabled ? 'ENABLED' : 'MANUAL'}</span>
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: currentStep === 2 ? 'var(--pres-border-hover)' : 'var(--pres-border)' }}
        className={`plane-1-raised rounded-3xl p-5 border flex flex-col justify-between flex-1 transition-all duration-300 ${currentStep === 2 ? 'step-phase-active ring-2 ring-violet-500/50' : 'step-phase-past opacity-85'}`}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
              <ShieldAlert size={14} className="text-amber-800 dark:text-amber-300" /> SAFETY GOVERNOR
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20">
              {governor.isComplianceEnforced ? 'SOC 2 TYPE II' : 'STANDARD'}
            </span>
          </div>
          <div className="mb-2">
            <div className="flex items-center justify-between font-mono text-xs mb-1">
              <span style={{ color: 'var(--pres-text-muted)' }}>Token Budget</span>
              <span className="text-slate-900 dark:text-slate-200 font-bold">{governor.tokensConsumedMillion}M / {governor.tokenBudgetMaxMillion}M</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div style={{ width: `${(governor.tokensConsumedMillion / governor.tokenBudgetMaxMillion) * 100}%` }} className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Anomalies</span>
              <span className="text-xs font-bold text-slate-900 dark:text-emerald-400">{governor.loopAnomalyCount}</span>
            </div>
            <div className="p-2 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
              <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">Unsafe Intercept</span>
              <span className="text-xs font-bold text-slate-900 dark:text-sky-300">{governor.hasBlockedUnsafeCalls ? '100%' : 'None'}</span>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><Lock size={12} className="text-emerald-500" /> Containment</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
