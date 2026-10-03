import React from 'react';
import type { MetricThresholdRule } from '../../../types/kineticSuiteArchetypes';
import { AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react';

export interface CanaryThresholdRuleItemProps {
  rule: MetricThresholdRule;
}

export const CanaryThresholdRuleItem: React.FC<CanaryThresholdRuleItemProps> = ({ rule }) => {
  const isTriggered = rule.isTriggered;
  const isNominal = !isTriggered;
  const canRollback = rule.canRollbackAutomatically;

  return (
    <div
      className={`p-3 rounded-xl border font-mono text-xs flex items-center justify-between transition-all duration-200 ${
        isTriggered
          ? 'bg-rose-500/10 border-rose-500/40 text-rose-300'
          : 'bg-slate-950/70 border-slate-800 text-slate-300'
      }`}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`w-6 h-6 rounded-lg flex items-center justify-center ${
            isTriggered ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-800 text-emerald-400'
          }`}
        >
          {isTriggered ? <AlertTriangle size={13} /> : <CheckCircle2 size={13} />}
        </div>
        <div>
          <span className="font-bold text-slate-200 block text-xs">{rule.metricName}</span>
          <span className="text-[10px] text-slate-400">Limit: {rule.thresholdLimit}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {canRollback && (
          <span className="text-[10px] text-amber-400/90 flex items-center gap-0.5 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
            <RotateCcw size={10} /> Auto-Rollback
          </span>
        )}
        <span
          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
            isNominal ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/20 text-rose-300'
          }`}
        >
          {isNominal ? 'Nominal' : 'Triggered'}
        </span>
      </div>
    </div>
  );
};
