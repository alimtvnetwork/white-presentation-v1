import React from 'react';
import type { SiliconPackageTelemetry } from '../../../../types/modern/boardroomStrategyTypes';
import { Cpu, Zap, Thermometer, Layers, Droplets } from 'lucide-react';

interface DieFloorplanGraphicProps {
  packageTelemetry: SiliconPackageTelemetry;
}

export const DieFloorplanGraphic: React.FC<DieFloorplanGraphicProps> = ({ packageTelemetry }) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/50 flex items-center justify-between gap-6 z-10 font-mono text-sm">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
        <Cpu size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Process Node</div>
        <div className="text-base font-ubuntu font-bold text-amber-400">{packageTelemetry.processNodeNanometers}</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
        <Layers size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Transistors</div>
        <div className="text-xl font-ubuntu font-black text-purple-400">{packageTelemetry.totalTransistorCount}</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        <Zap size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Memory Bandwidth</div>
        <div className="text-xl font-ubuntu font-black text-cyan-400">
          {packageTelemetry.memoryBandwidthTerabytesPerSec} TB/s ({packageTelemetry.hbm3eCapacityGigabytes}GB)
        </div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <Thermometer size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Peak Compute</div>
        <div className="text-xl font-ubuntu font-black text-emerald-400">
          {packageTelemetry.peakComputeTflopsFp8.toLocaleString()} TFLOPS
        </div>
      </div>
    </div>

    {packageTelemetry.isLiquidCoolingActive ? (
      <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
        <Droplets size={13} className="text-cyan-400" />
        Liquid Cooled ({packageTelemetry.averageDieTemperatureCelsius}°C)
      </div>
    ) : null}
  </div>
);
