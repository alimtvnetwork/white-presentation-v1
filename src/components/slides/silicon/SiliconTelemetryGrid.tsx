import React from 'react';
import { ShieldCheck, Flame, Cpu, Gauge, Database, CheckCircle2 } from 'lucide-react';

export interface SiliconTelemetryGridProps {
  processNodeNm: number;
  transistorCountBillions: number;
  thermalDesignPowerWatts: number;
  dieAreaSquareMm: number;
  memoryBandwidthGbps: number;
  isTapeoutVerified: boolean;
}

export const SiliconTelemetryGrid: React.FC<SiliconTelemetryGridProps> = ({
  processNodeNm,
  transistorCountBillions,
  thermalDesignPowerWatts,
  dieAreaSquareMm,
  memoryBandwidthGbps,
  isTapeoutVerified,
}) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <span className="flex items-center gap-2 font-bold text-slate-200">
          <Cpu size={14} className="text-amber-400" />
          Electrical & Thermal Spec Sheet
        </span>
        <span className="text-slate-400">Foundry: TSMC N3E</span>
      </div>

      <div className="space-y-2.5 my-auto">
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Process Node</span>
          <span className="font-bold text-slate-100">{processNodeNm}nm FinFET Ultra</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Transistor Count</span>
          <span className="font-bold text-amber-300">{transistorCountBillions} Billion</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-1.5">
            <Flame size={12} className="text-rose-400" /> TDP Envelope
          </span>
          <span className="font-bold text-rose-300">{thermalDesignPowerWatts} Watts</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400">Die Package Area</span>
          <span className="font-bold text-slate-100">{dieAreaSquareMm} mm²</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-1.5">
            <Database size={12} className="text-cyan-400" /> Memory Bus
          </span>
          <span className="font-bold text-cyan-300">{memoryBandwidthGbps} GB/s Unified</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <span className="text-slate-400 flex items-center gap-1.5">
            <Gauge size={12} className="text-emerald-400" /> Silicon Pass Yield
          </span>
          <span className="font-bold text-emerald-400">94.2% Gated</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span className="font-bold text-emerald-300">
            {isTapeoutVerified ? 'Tape-out Verified' : 'Tape-out Pending'}
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/20">
          PRODUCTION READY
        </span>
      </div>
    </div>
  );
};
