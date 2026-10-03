import React from 'react';
import { ShieldCheck, ShieldAlert } from 'lucide-react';

interface CircuitBreakerPanelProps {
  circuitBreaker: {
    state: 'CLOSED' | 'HALF_OPEN' | 'OPEN';
    failureThresholdPercent: number;
    isTripped: boolean;
    isAutoRecoveryEnabled: boolean;
  };
  isActive: boolean;
}

export const CircuitBreakerPanel: React.FC<CircuitBreakerPanelProps> = ({
  circuitBreaker,
  isActive,
}) => (
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
          CIRCUIT BREAKER GUARD
        </span>
        <span
          className={`font-mono text-sm px-3 py-1 rounded-full font-bold border ${
            circuitBreaker.state === 'CLOSED'
              ? 'bg-emerald-500/10 text-slate-900 dark:text-emerald-400 border-emerald-500/20'
              : 'bg-rose-500/10 text-slate-900 dark:text-rose-400 border-rose-500/20'
          }`}
        >
          STATE: {circuitBreaker.state}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4 font-mono text-xs">
        <div className="p-3 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
            Trip Threshold
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-amber-400">
            {circuitBreaker.failureThresholdPercent}% Error Rate
          </span>
        </div>
        <div className="p-3 rounded-xl bg-black/20 dark:bg-white/5 border border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase">
            Auto Recovery
          </span>
          <span className="text-base font-bold text-slate-900 dark:text-emerald-400">
            {circuitBreaker.isAutoRecoveryEnabled ? 'SELF-HEALING' : 'MANUAL'}
          </span>
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
      <span className="text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
        <ShieldCheck size={14} className="text-emerald-500" /> Degraded Mode Protection
      </span>
      <span className="text-emerald-600 dark:text-emerald-400 font-bold">ARMED</span>
    </div>
  </div>
);
