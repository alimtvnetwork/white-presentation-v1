import React from 'react';
import type { MacroEconomicThreatRadarSlideData } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Radar, ShieldCheck, Activity, AlertCircle } from 'lucide-react';

export const MacroEconomicThreatRadarSlide: React.FC<{ slide: MacroEconomicThreatRadarSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const quadrants = slide.radarStages || [];
  const currentStep = Math.min(activeStep, Math.max(0, quadrants.length - 1));
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'MACROECONOMIC THREAT RADAR'}</span>
          <h1
            className="font-ubuntu text-4xl font-black text-white tracking-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Macro-Economic Threat Radar: 4-Quadrant Hedging Matrix'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Continuous surveillance of geopolitical, macroeconomic, currency, and compute supply chain risks.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-cyan-300">
            <Activity size={14} className="text-cyan-400" /> Horizon: {slide.assessmentHorizon || '2026-2028 Triennium'}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-600/50 bg-amber-950/40 text-amber-900 dark:text-amber-300 font-bold">
            <AlertCircle size={14} className="text-amber-400" /> Risk Index: {slide.compositeMacroRiskIndex ?? 38}/100
          </span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4 p-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl font-mono text-xs">
        {quadrants.map((quad, idx) => (
          <div key={quad.quadrantCode || idx} className={`p-3 rounded-xl border transition-all ${idx === currentStep ? 'bg-amber-950/30 border-amber-500/80 shadow-lg' : 'bg-slate-900/40 border-slate-800/60'}`}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-slate-400">{quad.quadrantCode}</span>
              <span className="text-amber-900 dark:text-amber-300 font-bold">Score: {quad.compositeRiskScore}</span>
            </div>
            <h4 className="font-ubuntu text-sm font-bold text-white truncate">{quad.quadrantTitle}</h4>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-2 gap-6 my-auto">
        {quadrants.slice(0, 4).map((quad, idx) => (
          <div key={quad.quadrantCode || idx} className={`p-5 rounded-2xl border transition-all h-[240px] flex flex-col justify-between ${idx === currentStep ? 'bg-slate-900/95 border-amber-500/70 shadow-2xl ring-1 ring-amber-500/30' : 'bg-slate-950/70 border-slate-800/80'}`}>
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Radar size={16} className={idx === currentStep ? 'text-amber-400 animate-spin' : 'text-slate-500'} />
                <h3 className="font-ubuntu text-base font-bold text-white">{quad.quadrantTitle}</h3>
              </div>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-amber-900 dark:text-amber-300 border border-amber-600/40">Risk: {quad.compositeRiskScore}/100</span>
            </div>
            <div className="space-y-2.5 my-auto">
              {(quad.threatItems || []).slice(0, 2).map((item, tIdx) => (
                <div key={item.threatId || tIdx} className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between font-poppins text-xs">
                  <div>
                    <span className="font-semibold text-white block">{item.threatName}</span>
                    <span className="text-slate-400 text-[11px] block">Hedge: {item.hedgingStrategy}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-900 dark:text-amber-300 text-xs ml-3 px-2 py-0.5 rounded bg-amber-950/40 border border-amber-700/40">{item.threatScore}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Real-Time Market Feed: Connected | Hedging Protocol Active across 4 Sovereign Quadrants</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
