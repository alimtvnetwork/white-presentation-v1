import React from 'react';
import type { LogisticsCorridorNode } from '../../../../types/nextGenArchetypes';
import { Ship, Plane, Train, Truck, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

interface CorridorCardProps {
  corridor: LogisticsCorridorNode;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onSelect: (index: number) => void;
  onHover: (index: number | null) => void;
}

const getTransitIcon = (mode: string) => {
  switch (mode) {
    case 'AIR': return <Plane size={14} className="text-sky-400" />;
    case 'RAIL': return <Train size={14} className="text-amber-900 dark:text-amber-400" />;
    case 'ROAD': return <Truck size={14} className="text-emerald-400" />;
    default: return <Ship size={14} className="text-cyan-400" />;
  }
};

export const CorridorCard: React.FC<CorridorCardProps> = ({
  corridor,
  index,
  isActive,
  isCompleted,
  onSelect,
  onHover,
}) => {
  const kineticClass = isActive
    ? 'step-phase-active opacity-100 ring-2 ring-cyan-500/70 shadow-2xl scale-[1.02]'
    : isCompleted
      ? 'step-phase-past opacity-75'
      : 'step-phase-future opacity-40 blur-[1.25px]';

  return (
    <div
      onClick={() => onSelect(index)}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised rounded-2xl p-4 border flex items-center justify-between transition-all duration-300 cursor-pointer ${kineticClass}`}
    >
      <div className="flex items-center gap-3.5">
        <div
          className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm ${
            isActive
              ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
              : isCompleted
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-black/20 dark:bg-white/5 text-slate-400'
          }`}
        >
          {isCompleted ? <CheckCircle2 size={18} className="text-emerald-400" /> : `0${index + 1}`}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              {getTransitIcon(corridor.transitMode)}
              {corridor.originNode.split('(')[0].trim()}
            </span>
            <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-slate-900 dark:text-cyan-300 border border-cyan-500/20">
              {corridor.transitMode}
            </span>
          </div>
          <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono flex items-center gap-2">
            <span>→ {corridor.destinationNode.split('(')[0].trim()}</span>
            <span>•</span>
            <span className={corridor.isReroutingActive ? 'text-amber-900 dark:text-amber-400 dark:text-amber-400 font-semibold' : 'text-emerald-400 font-semibold'}>
              {corridor.isReroutingActive ? 'Reroute Active' : `${corridor.averageTransitDays}d Transit`}
            </span>
          </p>
        </div>
      </div>
      <ArrowRight size={16} className={`transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
    </div>
  );
};
