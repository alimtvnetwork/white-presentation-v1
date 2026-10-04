import React from 'react';
import type { StrategicInitiativeCascadeSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { Target, CheckCircle2, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export const StrategicInitiativeCascadeSlide: React.FC<{
  slide: StrategicInitiativeCascadeSlideData;
  activeStep?: number;
}> = ({ slide, activeStep }) => {
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = slide?.cascadeHorizons || [];
  const currentStep = Math.min(Math.max(0, (activeStep !== undefined ? activeStep : storeStep) || 0), stages.length - 1);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Target size={18} /> {slide?.kicker || 'STRATEGIC INITIATIVE CASCADE'}
            </span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)]">Cycle: {slide?.planningCycleYear || '2027-2030'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5"><ShieldCheck size={16} /> Board Approved</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2"><span className="text-[var(--pres-text-muted)]">Horizon:</span><span className="font-bold text-[16px] text-[var(--pres-accent)]">{currentStep + 1} of {stages.length}</span></div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Lead: Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto z-10 h-[520px]">
        {stages.map((h, idx) => {
          const phase = resolveStepPhase(idx, currentStep);
          const isCurrent = phase === 'active';
          const isDone = phase === 'completed';
          return (
            <div key={h.stepIndex} onClick={() => jumpToStep(idx)} style={getStepLifecycleStyle(phase)} className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between cursor-pointer transition-all ${isCurrent ? 'bg-[var(--pres-bg-card)] border-[var(--pres-accent)] ring-2 ring-[var(--pres-accent)]/40 shadow-xl animate-cascade-glow' : 'bg-[var(--pres-bg-card)] border-[var(--pres-border)]'}`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[16px] font-bold text-[var(--pres-accent)]">{h.horizonCode} • {h.timeframeQuarter}</span>
                  {isDone ? <span className="font-mono text-[16px] text-emerald-700 dark:text-emerald-300 flex items-center gap-1"><CheckCircle2 size={18} /> Done</span> : isCurrent ? <span className="font-mono text-[16px] text-[var(--pres-accent)] flex items-center gap-1"><Sparkles size={18} /> Active</span> : <span className="font-mono text-[16px] text-[var(--pres-text-muted)]">Horizon</span>}
                </div>
                <h3 className="text-[22px] font-bold text-[var(--pres-text)] mt-4 mb-2">{h.horizonTitle}</h3>
                <p className="text-[15px] text-[var(--pres-text-muted)] leading-relaxed mb-4">{h.strategicObjectiveSummary}</p>
                <div className="space-y-2">
                  {(h.keyDeliverables || []).slice(0, 3).map((d, dIdx) => (
                    <div key={dIdx} className="text-[14px] p-2 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--pres-accent)]" />
                      <span className="text-[var(--pres-text)] truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--pres-border)] flex items-center justify-between font-mono">
                <div><div className="text-[14px] text-[var(--pres-text-muted)]">ARR Target</div><div className="text-[18px] font-bold text-[var(--pres-accent)]">{h.targetRevenueRunRate}</div></div>
                <div className="text-right"><div className="text-[14px] text-[var(--pres-text-muted)]">CapEx</div><div className="text-[18px] font-bold text-[var(--pres-text)]">{h.capitalExpenditureAllocation}</div></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {(slide?.capitalKpis || []).map((kpi) => (
            <div key={kpi.id} className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[var(--pres-accent)]/10 text-[var(--pres-accent)]"><TrendingUp size={20} /></div>
              <div>
                <div className="text-[14px] text-[var(--pres-text-muted)] font-mono">{kpi.kpiLabel}</div>
                <div className="text-[18px] font-bold text-[var(--pres-text)]">{kpi.kpiValue} <span className="text-[14px] text-emerald-700 dark:text-emerald-300 font-mono">({kpi.variancePercentage})</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Strategic Signoff: <span className="font-bold text-[var(--pres-text)]">Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>
    </div>
  );
};
