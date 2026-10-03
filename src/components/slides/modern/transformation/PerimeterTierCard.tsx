import React from 'react';
import { Shield, Cpu, Zap, Lock } from 'lucide-react';
import type { SecurityPerimeterLayer } from '../../../../types/modern/transformationTypes';

interface PerimeterTierCardProps {
  layer: SecurityPerimeterLayer;
  index: number;
  currentStep: number;
  onHover: (idx: number | null) => void;
}

export const PerimeterTierCard: React.FC<PerimeterTierCardProps> = ({
  layer,
  index,
  currentStep,
  onHover,
}) => {
  const isCurrent = index === currentStep;
  const isPast = index < currentStep;

  const cardOpacity = isCurrent ? 'opacity-100' : isPast ? 'opacity-75' : 'opacity-35';
  const cardBorder = isCurrent ? 'border-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.25)]' : 'border-slate-700/60';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`plane-1-raised rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${cardOpacity} ${cardBorder}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30">
            TIER 0{index + 1}
          </span>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full font-bold text-sky-400 bg-sky-500/10 flex items-center gap-1">
            <Cpu size={12} />
            {layer.isHardwareAttested ? 'TPM ATTESTED' : 'SOFTWARE AUTH'}
          </span>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu mb-1">
          {layer.layerTitle}
        </h3>
        <p className="text-xs font-mono text-slate-400 mb-4">{layer.layerMechanism}</p>

        <div className="space-y-2 text-sm font-mono mb-4">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><Shield size={14} className="text-emerald-400" /> Target</span>
            <span className="text-slate-200 font-bold">{layer.enforcementTarget}</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><Lock size={14} className="text-violet-400" /> Min Trust</span>
            <span className="text-emerald-400 font-bold">{layer.trustScoreMinimum}%</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-amber-400" /> Budget</span>
            <span className="text-slate-200 font-bold">{layer.latencyBudgetMs}ms</span>
          </div>
        </div>
      </div>

      <div>
        <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-2">
          Enforced Protocols
        </span>
        <div className="flex flex-wrap gap-1.5">
          {layer.protocols.map((protocol) => (
            <span
              key={protocol}
              className="text-xs px-2 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-slate-300 font-mono"
            >
              {protocol}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
