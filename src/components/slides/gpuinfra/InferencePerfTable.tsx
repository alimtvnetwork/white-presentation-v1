import React from 'react';
import type { InferenceSloItem } from '../../../types/sovereignOperationsArchetypes';
import { Gauge, CheckCircle2, Zap } from 'lucide-react';

interface InferencePerfTableProps {
  inferenceSlos: InferenceSloItem[];
}

export const InferencePerfTable: React.FC<InferencePerfTableProps> = ({ inferenceSlos }) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-purple-400 font-bold">
          <Gauge size={14} /> Inference Latency SLOs:
        </span>
        <div className="flex items-center gap-3 text-slate-300">
          {inferenceSlos.map((slo) => (
            <span
              key={slo.id}
              className="bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800 text-[11px] flex items-center gap-2"
            >
              <span className="text-slate-200">{slo.modelName}</span>
              <span className="text-slate-500">|</span>
              <span className="text-cyan-400">TTFT: {slo.ttftMs}ms</span>
              <span className="text-slate-500">|</span>
              <span className="text-emerald-400">ITL: {slo.interTokenLatencyMs}ms</span>
              {slo.isMeetingSlo && (
                <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                  <CheckCircle2 size={11} /> Pass
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-cyan-400 font-semibold">
        <Zap size={13} /> Sub-10ms Time-to-First-Token Guaranteed
      </div>
    </div>
  );
};
