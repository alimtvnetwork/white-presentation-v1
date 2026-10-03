import React from 'react';
import type { LogisticsCorridorNode } from '../../../types/nextGenArchetypes';
import { Ship, Plane, Train, Truck } from 'lucide-react';

export const getTransitIcon = (mode: string) => {
  switch (mode) {
    case 'AIR': return <Plane size={14} className="text-sky-400" />;
    case 'RAIL': return <Train size={14} className="text-amber-800 dark:text-amber-300" />;
    case 'ROAD': return <Truck size={14} className="text-emerald-400" />;
    default: return <Ship size={14} className="text-cyan-400" />;
  }
};

interface CorridorRiskBarProps {
  corridor?: LogisticsCorridorNode;
  node?: LogisticsCorridorNode;
}

export const CorridorRiskBar: React.FC<CorridorRiskBarProps> = ({ corridor, node }) => {
  const item = corridor || node;
  if (!item) return null;
  const isHighRisk = item.disruptionRiskScorePercent > 50;

  return (
    <div className="p-2.5 rounded-xl bg-black/15 dark:bg-black/35 border border-white/5 font-mono mb-2">
      <div className="flex items-center justify-between mb-1">
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase">Disruption Risk</span>
        <span className={`text-xs font-bold ${isHighRisk ? 'text-rose-500' : 'text-emerald-800 dark:text-emerald-400'}`}>
          {item.disruptionRiskScorePercent}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${isHighRisk ? 'bg-rose-500' : 'bg-emerald-400'}`} style={{ width: `${item.disruptionRiskScorePercent}%` }} />
      </div>
    </div>
  );
};
