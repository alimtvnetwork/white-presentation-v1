import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface GatewayPhaseItem {
  index: number;
  title: string;
  desc: string;
}

interface GatewayPhaseTrackProps {
  phases: GatewayPhaseItem[];
  currentStep: number;
  onHover: (idx: number | null) => void;
  onClickStep: (idx: number) => void;
}

export const GatewayPhaseTrack: React.FC<GatewayPhaseTrackProps> = ({
  phases,
  currentStep,
  onHover,
  onClickStep,
}) => (
  <div className="grid grid-cols-4 gap-4 z-10 my-2">
    {phases.map((p) => {
      const isActive = p.index === currentStep;
      const isCompleted = p.index < currentStep;
      const kineticClass = isActive
        ? 'step-phase-active opacity-100 ring-2 ring-violet-500/60 shadow-md bg-violet-600/20 border-violet-500 text-slate-900 dark:text-white'
        : isCompleted
          ? 'step-phase-past opacity-75 bg-white/5 border-slate-700 text-slate-300'
          : 'step-phase-future opacity-40 blur-[1.25px] bg-black/10 border-slate-800 text-slate-500';

      return (
        <button
          key={p.index}
          onClick={() => onClickStep(p.index)}
          onMouseEnter={() => onHover(p.index)}
          onMouseLeave={() => onHover(null)}
          className={`text-left p-2.5 px-4 rounded-xl border transition-all duration-300 font-mono text-xs flex items-center justify-between cursor-pointer ${kineticClass}`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                isActive
                  ? 'bg-violet-500 text-white'
                  : isCompleted
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-slate-700 text-slate-300'
              }`}
            >
              {isCompleted ? <CheckCircle2 size={12} className="text-emerald-400" /> : p.index + 1}
            </span>
            <span className="font-bold">{p.title}</span>
          </div>
          <span className="text-[10px] opacity-70 truncate max-w-[120px]">{p.desc}</span>
        </button>
      );
    })}
  </div>
);
