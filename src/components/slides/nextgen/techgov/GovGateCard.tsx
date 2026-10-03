import React from 'react';
import { Gauge, Zap, CheckCircle2, XCircle } from 'lucide-react';
import type { GovernanceGate } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface GovGateCardProps {
  gate: GovernanceGate;
  gateIndex: number;
}

export const GovGateCard: React.FC<GovGateCardProps> = ({ gate, gateIndex }) => (
  <div
    style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
    className="plane-1-raised rounded-3xl p-5 border flex flex-col justify-between hover:border-violet-500/50 transition-all duration-300"
  >
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          GATE 0{gateIndex + 1}
        </span>
        <span
          className={`font-mono text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 border ${
            gate.isGatePassed
              ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-500/20'
              : 'bg-rose-500/10 text-rose-800 dark:text-rose-400 border-rose-500/20'
          }`}
        >
          {gate.isGatePassed ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
          {gate.isGatePassed ? 'ACTIVE' : 'BYPASSED'}
        </span>
      </div>

      <h3 className="text-lg font-ubuntu font-bold text-slate-900 dark:text-slate-100 mb-1 leading-snug">
        {gate.gateName}
      </h3>
      <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-4">
        {gate.inspectionType}
      </p>

      <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
        <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase flex items-center gap-1">
            <Gauge size={10} /> Latency
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
            {gate.latencyBudgetMs} ms
          </span>
        </div>
        <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block uppercase flex items-center gap-1">
            <Zap size={10} /> Throughput
          </span>
          <span className="text-sm font-bold text-violet-700 dark:text-violet-300">
            {(gate.sampleThroughputRps / 1000).toFixed(0)}k rps
          </span>
        </div>
      </div>
    </div>

    <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
      <span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px]">
        Policy:
      </span>
      <span className="font-bold text-slate-800 dark:text-slate-200 text-right truncate max-w-[180px]">
        {gate.rejectionPolicy}
      </span>
    </div>
  </div>
);
