import React from 'react';
import type { RcaPillarItem } from '../../../types/kineticSuiteArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { CheckCircle2, User, Wrench, ShieldAlert } from 'lucide-react';

export interface RcaPillarCardProps {
  pillar: RcaPillarItem;
  index: number;
  activeStep: number;
  accentColor?: string;
}

export const RcaPillarCard: React.FC<RcaPillarCardProps> = ({
  pillar,
  index,
  activeStep,
  accentColor = '#f43f5e',
}) => {
  const phase = getStepPhase(index, activeStep);
  const stepStyle = getStepPhaseStyle(phase, accentColor);
  const isCurrent = phase === 'active';
  const isDone = index < activeStep;
  const isActionable = pillar.isActionable;

  const normalizedOwner = pillar.remediationOwner?.includes('Alim Ul Karim')
    ? 'Alim Ul Karim, Chief Software Engineer'
    : pillar.remediationOwner;

  return (
    <div
      style={stepStyle}
      className={`rounded-2xl border p-5 flex flex-col justify-between font-mono text-xs transition-all duration-300 ${
        isCurrent
          ? 'bg-slate-950/95 border-rose-500 ring-2 ring-rose-500/40 shadow-2xl'
          : isDone
          ? 'bg-slate-900/60 border-slate-700'
          : 'bg-slate-950/40 border-slate-800'
      }`}
    >
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
          <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-[11px]">
            0{index + 1}
          </span>
          {isActionable ? (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300 flex items-center gap-1">
              <Wrench size={10} /> Actionable
            </span>
          ) : (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-700 bg-slate-800/40 text-slate-400">
              Informational
            </span>
          )}
        </div>

        <h3 className="font-ubuntu text-base font-bold text-white mb-0.5 tracking-tight">{pillar.pillarTitle}</h3>
        <p className="text-[11px] text-rose-300/80 mb-3">{pillar.pillarSubtitle}</p>

        <ul className="space-y-2 text-slate-300 text-[11px] leading-relaxed">
          {pillar.findings.map((item, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-slate-800 pt-2.5 mt-4 flex items-center justify-between text-[10px]">
        {normalizedOwner ? (
          <span className="text-slate-300 flex items-center gap-1">
            <User size={11} className="text-cyan-400" />
            <strong className="text-cyan-200">{normalizedOwner}</strong>
          </span>
        ) : (
          <span className="text-slate-500">Pillar 0{index + 1} Analysis</span>
        )}
        {isDone && <CheckCircle2 size={13} className="text-emerald-400" />}
      </div>
    </div>
  );
};
