import React from 'react';
import type { FintechLedgerTelemetryStrip } from '../../../../types/modern/saasFinancialTypes';
import { Activity, Clock, ShieldCheck, Gauge } from 'lucide-react';

interface ThroughputBarProps {
  telemetry: FintechLedgerTelemetryStrip;
}

export const ThroughputBar: React.FC<ThroughputBarProps> = ({ telemetry }) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/50 flex items-center justify-between gap-6 z-10 font-mono text-sm">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        <Gauge size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Clearing Volume</div>
        <div className="text-xl font-ubuntu font-black text-cyan-400">{telemetry.dailyClearingVolumeUsd}</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <Clock size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Settlement Latency</div>
        <div className="text-xl font-ubuntu font-black text-emerald-400">{telemetry.averageSettlementTimeMs} ms</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
        <Activity size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Peak Throughput</div>
        <div className="text-xl font-ubuntu font-black text-purple-400">
          {telemetry.peakThroughputTps.toLocaleString()} TPS
        </div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
        <ShieldCheck size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Discrepancy Rate</div>
        <div className="text-xl font-ubuntu font-black text-amber-400">{telemetry.discrepancyRatePercentage}%</div>
      </div>
    </div>

    {telemetry.isReconciliationClean ? (
      <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
        <ShieldCheck size={13} />
        Zero Discrepancy
      </div>
    ) : null}
  </div>
);
