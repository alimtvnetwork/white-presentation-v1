import React from 'react';
import type { SiliconDieComponent } from '../../../types/kineticSuiteArchetypes';
import { Layers, Network } from 'lucide-react';

export interface SiliconDieFloorplanProps {
  blocks: SiliconDieComponent[];
  dieAreaSquareMm: number;
}

export const SiliconDieFloorplan: React.FC<SiliconDieFloorplanProps> = ({
  blocks,
  dieAreaSquareMm,
}) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
        <span className="flex items-center gap-2 font-bold text-slate-200">
          <Layers size={14} className="text-amber-600 dark:text-amber-400" />
          Silicon Die Floorplan & Macro Placement
        </span>
        <span className="text-slate-400">
          Total Area: <strong className="text-slate-200">{dieAreaSquareMm} mm²</strong>
        </span>
      </div>

      <div className="relative my-3 flex-1 rounded-xl bg-slate-950/90 border border-amber-500/30 p-3 grid grid-cols-12 gap-3 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="col-span-8 grid grid-cols-2 gap-3 z-10">
          {blocks.slice(0, 4).map((blk) => (
            <div
              key={blk.id}
              className={`p-3 rounded-xl border flex flex-col justify-between transition-all ${
                blk.isPrimaryCompute
                  ? 'bg-amber-500/15 border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200 text-[11px] truncate">
                  {blk.blockName}
                </span>
                <span className="text-[10px] text-amber-800 dark:text-amber-300 font-bold">
                  {blk.clockSpeedGhz}GHz
                </span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2">
                <span>{blk.areaSquareMm} mm²</span>
                <span>{blk.powerConsumptionWatts}W</span>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-4 flex flex-col gap-3 z-10">
          <div className="flex-1 p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex flex-col justify-center items-center text-center">
            <span className="text-cyan-300 font-bold text-[11px]">128 MB Shared SLC</span>
            <span className="text-slate-400 text-[10px]">Zero-Wait Crossbar</span>
          </div>
          <div className="flex-1 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-center items-center text-center">
            <span className="text-slate-300 font-bold text-[11px]">PCIe Gen 5 x16</span>
            <span className="text-slate-400 text-[10px]">64 GB/s Interconnect</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-slate-400 text-[11px]">
        <span className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
          <Network size={12} /> Gold Wirebond Interconnect
        </span>
        <span>Physical Synthesis: 100% Routed</span>
      </div>
    </div>
  );
};
