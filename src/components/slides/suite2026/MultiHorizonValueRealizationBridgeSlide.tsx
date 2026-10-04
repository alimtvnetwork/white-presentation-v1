// lint-allow: file-size reason="MultiHorizonValueRealizationBridgeSlide kinetic strategic value horizons" max=160
import React from 'react';
import type { MultiHorizonValueRealizationBridgeSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Compass, CheckCircle2, TrendingUp, DollarSign, ArrowUpRight, Award, Lock, Unlock } from 'lucide-react';

const DEF_HORIZONS = [
  { id: 'h1', horizonIndex: 1, horizonLabel: 'Horizon 1: Core Optimization', targetTimeline: '0 - 6 Months', realizedValueMillions: 18.5, strategicObjective: 'Decouple monolithic bottlenecks, cut cloud COGS by 35%, and stabilize sub-millisecond p99 latency.', isUnlocked: true, isPositive: true, hasExecutiveSignoff: true },
  { id: 'h2', horizonIndex: 2, horizonLabel: 'Horizon 2: Market Expansion', targetTimeline: '6 - 18 Months', realizedValueMillions: 45.0, strategicObjective: 'Deploy multi-region active-active sharded consensus across Americas, EMEA, and APAC enclaves.', isUnlocked: true, isPositive: true, hasExecutiveSignoff: true },
  { id: 'h3', horizonIndex: 3, horizonLabel: 'Horizon 3: Autonomous Platform', targetTimeline: '18 - 36 Months', realizedValueMillions: 85.0, strategicObjective: 'Launch autonomous patch synthesis, continuous self-healing pipelines, and usage-based monetization.', isUnlocked: false, isPositive: true, hasExecutiveSignoff: false },
  { id: 'h4', horizonIndex: 4, horizonLabel: 'Horizon 4: Sovereign Hegemony', targetTimeline: '36+ Months', realizedValueMillions: 150.0, strategicObjective: 'Establish global cryptographic data perimeter standard and post-quantum zero-trust hegemony.', isUnlocked: false, isPositive: true, hasExecutiveSignoff: false },
];

export const MultiHorizonValueRealizationBridgeSlide: React.FC<{ slide?: MultiHorizonValueRealizationBridgeSlideData; data?: MultiHorizonValueRealizationBridgeSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const horizons = data?.horizons?.length ? data.horizons : DEF_HORIZONS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), horizons.length - 1);
  const activeHorizon = horizons[currentStep] || horizons[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-violet-500/10 text-violet-800 dark:text-violet-300 border border-violet-500/20 flex items-center gap-2">
              <Compass size={16} className="text-violet-500" /> {data?.kicker || 'STRATEGIC TRANSFORMATION & VALUE REALIZATION'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
              <DollarSign size={14} /> Cumulative Target: ${data?.cumulativeValueTargetMillions || 298.5}M Enterprise Value
            </span>
          </div>
          <h1 className="text-[48px] font-ubuntu font-bold tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Multi-Horizon Value Realization Bridge: Strategic Value Creation'}
          </h1>
          <p className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Four-horizon capital allocation framework bridging operational optimization to transformative sovereign platform scale.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Board Approval</span><span className="text-emerald-600 dark:text-emerald-400 font-bold">UNANIMOUS RESOLUTION</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Chief Software Engineer</span><span className="text-slate-800 dark:text-slate-200 font-bold">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[500px] items-stretch">
        {horizons.map((h, idx) => {
          const isSelected = idx === currentStep;
          const isPast = idx < currentStep;
          return (
            <div
              key={h.id}
              onClick={() => jumpToStep(idx)}
              className={`plane-1-raised p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xl ${
                isSelected
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 ring-2 ring-[var(--pres-accent)] scale-[1.03] shadow-2xl'
                  : isPast
                  ? 'border-emerald-500/40 bg-emerald-500/10 opacity-90'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-60 hover:opacity-90'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
                  <span className={`font-bold uppercase ${isSelected ? 'text-[var(--pres-accent)]' : isPast ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'}`}>
                    HORIZON 0{h.horizonIndex}
                  </span>
                  <span className="flex items-center gap-1 text-[14px]">
                    {h.isUnlocked ? <Unlock size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Lock size={14} className="text-slate-500 dark:text-slate-400" />}
                    <span className="text-slate-500 dark:text-slate-400">{h.targetTimeline}</span>
                  </span>
                </div>
                <h3 className="font-ubuntu text-xl font-bold text-slate-900 dark:text-slate-100 my-3">{h.horizonLabel}</h3>
                <div className="p-3 rounded-xl bg-slate-100/60 dark:bg-black/20 border border-slate-200 dark:border-slate-800 font-mono my-3">
                  <span className="text-[14px] text-slate-500 dark:text-slate-400 uppercase block">Target Realized Value:</span>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <ArrowUpRight size={18} /> ${h.realizedValueMillions}M
                  </div>
                </div>
                <p className="font-poppins text-[14px] text-slate-700 dark:text-slate-300 leading-relaxed">{h.strategicObjective}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px]">
                <span className="text-slate-500 dark:text-slate-400">{h.hasExecutiveSignoff ? 'Sign-Off Complete' : 'Planning Gate'}</span>
                <span className={`px-2 py-0.5 rounded font-bold text-[14px] ${isSelected ? 'bg-[var(--pres-accent)] text-white' : isPast ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'}`}>
                  {isPast ? 'COMPLETED' : isSelected ? 'ACTIVE FOCUS' : 'FUTURE'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase">Active Horizon Focus:</span>
          <span className="text-[var(--pres-accent)] font-bold">{activeHorizon.horizonLabel} ({activeHorizon.targetTimeline})</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400">Step {currentStep + 1} of 4</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><Award size={16} /> Board Approved Mandate</span>
        </div>
      </div>
    </div>
  );
};
