import React from 'react';
import { ShieldAlert, Lock } from 'lucide-react';
import type { SafetyGovernorMetrics } from '../../../../types/nextGenArchetypes';

interface SafetyGovernorCardProps {
  governor: SafetyGovernorMetrics;
  isActive: boolean;
}

export const SafetyGovernorCard: React.FC<SafetyGovernorCardProps> = ({ governor, isActive }) => (
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
        <span className="px-3.5 py-1 rounded-full text-sm font-mono font-bold bg-amber-500/20 text-slate-900 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
          <ShieldAlert size={15} className="text-amber-600 dark:text-amber-400" />
          SAFETY GOVERNOR
        </span>
        <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border border-emerald-500/20 font-bold">
          {governor.isComplianceEnforced ? 'SOC 2 TYPE II' : 'STANDARD'}
        </span>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between font-mono text-xs mb-1.5">
          <span style={{ color: 'var(--pres-text-muted)' }}>Token Budget Depletion</span>
          <span className="text-slate-900 dark:text-slate-200 font-bold">
            {governor.tokensConsumedMillion}M / {governor.tokenBudgetMaxMillion}M
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div
            style={{ width: `${(governor.tokensConsumedMillion / governor.tokenBudgetMaxMillion) * 100}%` }}
            className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
        <div className="p-2.5 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
            Loop Anomalies
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-emerald-400">
            {governor.loopAnomalyCount} Detected
          </span>
        </div>
        <div className="p-2.5 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
            Unsafe Calls
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-sky-300">
            {governor.hasBlockedUnsafeCalls ? '100% Intercepted' : 'Unmonitored'}
          </span>
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
      <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
        <Lock size={13} className="text-emerald-500" /> Containment Sandbox
      </span>
      <span className="text-emerald-600 dark:text-emerald-400 font-bold">ACTIVE</span>
    </div>
  </div>
);
