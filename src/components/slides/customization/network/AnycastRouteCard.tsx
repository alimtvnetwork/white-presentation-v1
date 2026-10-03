import React from 'react';
import type { AnycastRoutingStepItem } from '../../../../types/customization/networkPlatformTypes';
import { resolveStepPhase, getStepPhaseStyle } from '../../../../utils/stepProgression';
import { Network, Globe, Clock, Activity, CheckCircle2 } from 'lucide-react';

export interface AnycastRouteCardProps {
  step: AnycastRoutingStepItem;
  index: number;
  activeStep: number;
  accentColor?: string;
}

export const AnycastRouteCard: React.FC<AnycastRouteCardProps> = ({
  step,
  index,
  activeStep,
  accentColor = '#f59e0b',
}) => {
  const stepPhase = resolveStepPhase(index, activeStep);
  const stepStyle = getStepPhaseStyle(stepPhase, accentColor);
  const isCurrent = stepPhase === 'active';
  const isHealthy = step.isStepHealthy || stepPhase === 'completed';

  return (
    <div
      style={stepStyle}
      className={`rounded-2xl border p-5 flex flex-col justify-between font-mono text-xs transition-all duration-300 ${
        isCurrent
          ? 'bg-slate-950/95 border-amber-500 ring-2 ring-amber-500/40 shadow-2xl'
          : isHealthy
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
            <span className="font-bold text-slate-200 text-xs tracking-wide flex items-center gap-1">
              <Globe size={11} className="text-cyan-400" /> {step.edgeLocation}
            </span>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
            {step.ingressProtocol}
          </span>
        </div>

        <h3 className="font-ubuntu text-base font-bold text-slate-100 mb-2 leading-snug">
          {step.stepName}
        </h3>

        <div className="grid grid-cols-2 gap-2 py-2 mb-3 bg-slate-900/40 rounded-xl border border-slate-800/60 px-3">
          <div>
            <div className="text-[9px] text-slate-400 flex items-center gap-1"><Clock size={10} /> LATENCY</div>
            <div className="text-amber-900 dark:text-amber-300 font-bold text-xs">{step.latencyMs}ms</div>
          </div>
          <div>
            <div className="text-[9px] text-slate-400 flex items-center gap-1"><Activity size={10} /> WEIGHT</div>
            <div className="text-emerald-400 font-bold text-xs">{step.trafficWeightPercentage}% Active</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {step.routingFeatures?.map((feature, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-800/80 pt-2.5 mt-2 flex items-center justify-between text-[11px]">
        <span className="text-slate-400 flex items-center gap-1.5">
          <Network size={12} className="text-amber-600 dark:text-amber-400" /> Anycast Hop
        </span>
        {isHealthy && (
          <span className="text-emerald-400 font-bold flex items-center gap-1 text-[10px]">
            <CheckCircle2 size={12} /> Route Healthy
          </span>
        )}
      </div>
    </div>
  );
};
