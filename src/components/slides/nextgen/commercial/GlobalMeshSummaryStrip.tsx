import React from 'react';
import { Globe, Zap, Server } from 'lucide-react';
import type { GlobalMeshSummary } from '../../../../types/nextGenArchetypes';

interface GlobalMeshSummaryStripProps {
  summary: GlobalMeshSummary;
  isDark?: boolean;
}

export const GlobalMeshSummaryStrip: React.FC<GlobalMeshSummaryStripProps> = ({ summary, isDark }) => (
  <div className="z-10 plane-1-raised p-4 px-8 rounded-2xl border border-slate-700/60 bg-slate-900/40 flex items-center justify-between font-mono">
    <div className="flex items-center gap-8">
      <div>
        <span className="text-[10px] text-slate-500 uppercase block">Global Average Latency</span>
        <span className="text-2xl font-bold text-emerald-400 flex items-center gap-1">
          <Zap size={16} />
          {summary.globalAverageLatencyMs}ms
        </span>
      </div>

      <div className="w-[1px] h-8 bg-slate-700/50" />

      <div>
        <span className="text-[10px] text-slate-500 uppercase block">Total PoPs</span>
        <span className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-1">
          <Server size={16} className="text-violet-400" />
          {summary.totalPopsCount} Nodes
        </span>
      </div>

      <div className="w-[1px] h-8 bg-slate-700/50" />

      <div>
        <span className="text-[10px] text-slate-500 uppercase block">Backbone Capacity</span>
        <span className={`text-2xl font-bold ${isDark ? 'text-violet-300' : 'text-violet-800'}`}>
          {summary.backboneCapacityTbps} Tbps
        </span>
      </div>
    </div>

    <div className="flex items-center gap-2 text-xs text-slate-300">
      <Globe size={16} className="text-emerald-400" />
      <span>100% Anycast BGP Peered</span>
    </div>
  </div>
);
