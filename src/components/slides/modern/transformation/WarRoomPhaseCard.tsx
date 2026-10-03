import React from 'react';
import { Clock, User, Activity, Check } from 'lucide-react';
import type { IncidentPhase } from '../../../../types/modern/transformationTypes';

interface WarRoomPhaseCardProps {
  phase: IncidentPhase;
  index: number;
  currentStep: number;
  onHover: (idx: number | null) => void;
}

export const WarRoomPhaseCard: React.FC<WarRoomPhaseCardProps> = ({
  phase,
  index,
  currentStep,
  onHover,
}) => {
  const isCurrent = index === currentStep;
  const isPast = index < currentStep;

  const cardOpacity = isCurrent ? 'opacity-100' : isPast ? 'opacity-75' : 'opacity-35';
  const cardBorder = isCurrent ? 'border-rose-500 shadow-[0_0_24px_rgba(244,63,94,0.25)]' : 'border-slate-700/60';

  const responder = phase.leadResponder.includes('Alim Ul Karim') && !phase.leadResponder.includes('Chief Software Engineer')
    ? 'Alim Ul Karim (Chief Software Engineer)'
    : phase.leadResponder;

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`plane-1-raised rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${cardOpacity} ${cardBorder}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-rose-500/15 text-rose-400 font-bold border border-rose-500/30">
            PHASE 0{index + 1}
          </span>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full font-bold text-sky-400 bg-sky-500/10 flex items-center gap-1">
            <Clock size={12} />
            {phase.timestamp}
          </span>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu mb-1">
          {phase.phaseName}
        </h3>
        <p className="text-xs font-mono text-slate-400 mb-4">{phase.actionTaken}</p>

        <div className="space-y-2 text-sm font-mono mb-4">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><User size={14} className="text-sky-400" /> Lead</span>
            <span className="text-slate-200 font-bold">{responder}</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><Activity size={14} className="text-rose-400" /> Metric</span>
            <span className="text-emerald-400 font-bold">{phase.statusMetric}</span>
          </div>
        </div>
      </div>

      <div>
        <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-2">
          Evidence Artifacts
        </span>
        <div className="flex flex-wrap gap-1.5">
          {phase.evidenceItems.map((item) => (
            <span
              key={item}
              className="text-xs px-2 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-slate-300 flex items-center gap-1 font-mono"
            >
              <Check size={12} className="text-rose-400" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
