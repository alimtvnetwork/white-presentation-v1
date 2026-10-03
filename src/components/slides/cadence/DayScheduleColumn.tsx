import React from 'react';
import type { CadenceDayItem } from '../../../types/extendedArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

interface DayScheduleColumnProps {
  day: CadenceDayItem;
  index: number;
  currentStep: number;
  accentColor?: string;
}

const CATEGORY_STYLES: Record<string, string> = {
  'deep-work': 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  'sync-overlap': 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  'sprint-demo': 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  'async-rfc': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
};

export const DayScheduleColumn: React.FC<DayScheduleColumnProps> = ({
  day,
  index,
  currentStep,
  accentColor = '#8b5cf6',
}) => {
  const phase = getStepPhase(index, currentStep);
  const phaseStyle = getStepPhaseStyle(phase, accentColor);
  const isRelease = isBooleanTrue(day.isReleaseDay);
  const isPast = phase === 'past';
  const isActive = phase === 'active';

  return (
    <div
      style={phaseStyle}
      className={`rounded-2xl border p-4 flex flex-col justify-between transition-all duration-300 ${
        isActive ? 'bg-slate-900/80 border-violet-500/60 plane-2-elevated' : 'bg-slate-900/40 border-slate-800 plane-1-raised'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-ubuntu text-base font-bold text-white tracking-wide">{day.dayName}</span>
          {isRelease && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
              <Zap size={10} /> Release
            </span>
          )}
          {isPast && (
            <span className="text-emerald-400 flex items-center gap-1 text-[10px] font-mono">
              <CheckCircle2 size={12} /> Done
            </span>
          )}
        </div>
        <p className="text-xs text-slate-400 font-poppins mb-3 line-clamp-2 leading-relaxed">{day.dayThemeFocus}</p>
        <div className="space-y-2">
          {(day.blocks || []).map((b) => (
            <div
              key={b.id}
              className={`p-2 rounded-xl border text-xs font-poppins ${CATEGORY_STYLES[b.blockCategory] || 'bg-slate-800/40 border-slate-700/40 text-slate-300'}`}
            >
              <div className="font-mono text-[10px] font-semibold opacity-80">{b.timeRange}</div>
              <div className="font-medium text-slate-200 mt-0.5">{b.blockTitle}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>Step {index + 1}</span>
        {isActive && <span className="text-violet-400 font-semibold flex items-center gap-1"><ShieldCheck size={12} /> Active</span>}
      </div>
    </div>
  );
};
