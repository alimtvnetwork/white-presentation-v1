import React from 'react';
import type { SiliconDieComponent } from '../../../types/kineticSuiteArchetypes';
import { Cpu, Zap, Gauge } from 'lucide-react';

export interface SiliconBlockMetricCardProps {
  block: SiliconDieComponent;
  totalDieArea: number;
}

export const SiliconBlockMetricCard: React.FC<SiliconBlockMetricCardProps> = ({
  block,
  totalDieArea,
}) => {
  const areaSharePercent = totalDieArea > 0
    ? Math.round((block.areaSquareMm / totalDieArea) * 100)
    : 20;

  return (
    <div
      className={`p-3.5 rounded-xl border font-mono text-xs flex flex-col gap-2 transition-all ${
        block.isPrimaryCompute
          ? 'bg-amber-500/10 border-amber-500/30'
          : 'bg-slate-900/60 border-slate-800'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu size={14} className={block.isPrimaryCompute ? 'text-amber-400' : 'text-slate-400'} />
          <span className="font-bold text-slate-200">{block.blockName}</span>
        </div>
        {block.isPrimaryCompute && (
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            PRIMARY COMPUTE
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800/80 text-[11px]">
        <div className="flex flex-col">
          <span className="text-slate-400 text-[10px]">Die Area</span>
          <span className="font-bold text-slate-200">
            {block.areaSquareMm} mm² ({areaSharePercent}%)
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-400 text-[10px] flex items-center gap-0.5">
            <Zap size={10} className="text-amber-400" /> Power
          </span>
          <span className="font-bold text-amber-300">
            {block.powerConsumptionWatts}W
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-slate-400 text-[10px] flex items-center gap-0.5">
            <Gauge size={10} className="text-cyan-400" /> Clock
          </span>
          <span className="font-bold text-cyan-300">
            {block.clockSpeedGhz} GHz
          </span>
        </div>
      </div>
    </div>
  );
};
