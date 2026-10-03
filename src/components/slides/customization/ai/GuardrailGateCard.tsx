import React from 'react';
import type { FirewallGuardrailGateItem } from '../../../../types/customization/aiInfraTypes';
import { resolveStepPhase, getStepPhaseStyle } from '../../../../utils/stepProgression';
import { ShieldCheck, ShieldAlert, Clock, Crosshair, Lock } from 'lucide-react';

export interface GuardrailGateCardProps {
  gate: FirewallGuardrailGateItem;
  index: number;
  activeStep: number;
  accentColor?: string;
}

export const GuardrailGateCard: React.FC<GuardrailGateCardProps> = ({
  gate,
  index,
  activeStep,
  accentColor = '#f59e0b',
}) => {
  const stepPhase = resolveStepPhase(index, activeStep);
  const stepStyle = getStepPhaseStyle(stepPhase, accentColor);
  const isCurrent = stepPhase === 'active';
  const isPassed = gate.isGatePassed || stepPhase === 'completed';

  return (
    <div
      style={stepStyle}
      className={`rounded-2xl border p-5 flex flex-col justify-between font-mono text-xs transition-all duration-300 ${
        isCurrent
          ? 'bg-slate-950/95 border-amber-500 ring-2 ring-amber-500/40 shadow-2xl'
          : isPassed
          ? 'bg-slate-900/60 border-slate-700'
          : 'bg-slate-950/40 border-slate-800'
      }`}
    >
      <div>
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30 font-bold flex items-center justify-center text-[11px]">
              0{index + 1}
            </span>
            <span className="font-bold text-slate-200 text-xs tracking-wide">{gate.inspectionDomain}</span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex items-center gap-1">
            <Crosshair size={10} /> {gate.blockRatePercentage}% Block
          </span>
        </div>

        <h3 className="font-ubuntu text-base font-bold text-slate-100 mb-2 leading-snug">
          {gate.gateName}
        </h3>

        <div className="grid grid-cols-2 gap-2 py-2 mb-3 bg-slate-900/40 rounded-xl border border-slate-800/60 px-3">
          <div>
            <div className="text-[9px] text-slate-400 flex items-center gap-1"><Clock size={10} /> LATENCY</div>
            <div className="text-amber-900 dark:text-amber-300 font-bold text-xs">{gate.latencyBudgetMs}ms</div>
          </div>
          <div>
            <div className="text-[9px] text-slate-400 flex items-center gap-1"><Lock size={10} /> ACTION</div>
            <div className="text-cyan-300 font-bold text-[10px] truncate">{gate.mitigationAction}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {gate.detectionRules?.map((rule, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
            >
              {rule}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800/80 pt-2.5 mt-2 flex items-center justify-between text-[11px]">
        <span className="text-slate-400 flex items-center gap-1.5">
          <ShieldAlert size={12} className="text-rose-400" /> Defense Gate
        </span>
        {isPassed && (
          <span className="text-emerald-400 font-bold flex items-center gap-1 text-[10px]">
            <ShieldCheck size={12} /> Secure
          </span>
        )}
      </div>
    </div>
  );
};
