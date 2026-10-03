import React from 'react';
import type { SettlementStep } from '../../../../types/modern/saasFinancialTypes';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SettlementNodeCardProps {
  step: SettlementStep;
  isCurrentStep: boolean;
  onClick?: () => void;
}

export const SettlementNodeCard: React.FC<SettlementNodeCardProps> = ({
  step,
  isCurrentStep,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer border ${
      isCurrentStep
        ? 'plane-2-elevated border-cyan-500/60 shadow-lg shadow-cyan-500/10 ring-2 ring-cyan-500/20'
        : 'plane-1-raised border-slate-700/50 hover:border-slate-600'
    }`}
  >
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300">
          Stage {step.stepIndex}
        </span>
        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-400 flex items-center gap-1">
          {step.reconciliationStatus}
        </span>
      </div>

      <h3 className="text-lg font-ubuntu font-bold text-slate-100 mb-1">{step.stepName}</h3>
      <p className="text-xs text-slate-400 font-mono mb-4">{step.subsystemProtocol}</p>

      <div className="space-y-2 mb-4">
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Throughput:</span>
          <span className="text-sm font-ubuntu font-black text-cyan-400">
            {step.processingThroughputTps.toLocaleString()} TPS
          </span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Latency:</span>
          <span className="text-sm font-ubuntu font-black text-emerald-400">
            {step.settlementLatencyMs} ms
          </span>
        </div>
      </div>
    </div>

    <div>
      <div className="flex items-center gap-1.5 mb-2">
        {step.isImmutablyCommitted ? (
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-bold">
            <Lock size={12} /> Immutable Block
          </span>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {step.protocolStandards.map((std, idx) => (
          <span
            key={idx}
            className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
          >
            {std}
          </span>
        ))}
      </div>
    </div>
  </div>
);
