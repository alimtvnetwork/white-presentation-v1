import React from 'react';
import type { DieBlockModule } from '../../../../types/modern/boardroomStrategyTypes';
import { Cpu, Zap, Maximize2, ShieldCheck, CheckCircle } from 'lucide-react';

interface CoreSpecCardProps {
  block: DieBlockModule;
  onClick?: () => void;
}

export const CoreSpecCard: React.FC<CoreSpecCardProps> = ({ block, onClick }) => (
  <div
    onClick={onClick}
    className="plane-1-raised p-6 rounded-2xl flex flex-col justify-between border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
  >
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
          {block.blockType}
        </span>
        {block.hasHardwareIsolation ? (
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 flex items-center gap-1 font-bold">
            <ShieldCheck size={11} /> Isolated
          </span>
        ) : null}
      </div>

      <h3 className="text-lg font-ubuntu font-bold text-slate-100 mb-4">{block.blockName}</h3>

      <div className="space-y-2.5 mb-4">
        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Cpu size={14} className="text-purple-400" /> Transistors:
          </div>
          <span className="text-base font-ubuntu font-black text-purple-400">
            {block.transistorCountBillions}B
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Zap size={14} className="text-amber-400" /> Power Draw:
          </div>
          <span className="text-base font-ubuntu font-black text-amber-400">
            {block.powerConsumptionWatts} W
          </span>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Maximize2 size={14} className="text-cyan-400" /> Die Area:
          </div>
          <span className="text-base font-ubuntu font-black text-cyan-400">
            {block.areaSquareMillimeters} mm²
          </span>
        </div>
      </div>
    </div>

    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
      <span className="text-slate-400">Block Status:</span>
      {block.isBlockOperational ? (
        <span className="text-emerald-400 flex items-center gap-1 font-bold">
          <CheckCircle size={12} /> Operational
        </span>
      ) : (
        <span className="text-amber-400">Standby</span>
      )}
    </div>
  </div>
);
