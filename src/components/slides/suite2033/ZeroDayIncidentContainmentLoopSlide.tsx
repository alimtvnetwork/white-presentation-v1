import React from 'react';
import type { ZeroDayIncidentContainmentLoopSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { ShieldAlert, ShieldCheck, AlertOctagon, Terminal } from 'lucide-react';

export const ZeroDayIncidentContainmentLoopSlide: React.FC<{
  slide: ZeroDayIncidentContainmentLoopSlideData;
  activeStep?: number;
}> = ({ slide, activeStep }) => {
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = slide?.containmentSteps || [];
  const currentStep = Math.min(Math.max(0, (activeStep !== undefined ? activeStep : storeStep) || 0), stages.length - 1);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30 flex items-center gap-2">
              <ShieldAlert size={18} /> {slide?.kicker || 'ZERO-DAY INCIDENT CONTAINMENT LOOP'}
            </span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300 font-bold">{slide?.incidentSeverityTier || 'CRITICAL-SEV0'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)] font-bold">{slide?.cveIdentifier || 'CVE-2026-49210'}</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2"><span className="text-[var(--pres-text-muted)]">Containment Stage:</span><span className="font-bold text-[16px] text-[var(--pres-accent)]">{currentStep + 1} of {stages.length}</span></div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Commander: Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto z-10 h-[520px]">
        {stages.map((st, idx) => {
          const phase = resolveStepPhase(idx, currentStep);
          const isCurrent = phase === 'active';
          const isDone = phase === 'completed';
          return (
            <div key={st.stepIndex} onClick={() => jumpToStep(idx)} style={getStepLifecycleStyle(phase)} className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between cursor-pointer transition-all ${isCurrent ? 'bg-[var(--pres-bg-card)] border-rose-500 ring-2 ring-rose-500/40 shadow-xl animate-beacon-pulse' : 'bg-[var(--pres-bg-card)] border-[var(--pres-border)]'}`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[16px] font-bold text-rose-700 dark:text-rose-300">{st.stageCode}</span>
                  {isDone ? <span className="font-mono text-[16px] text-emerald-700 dark:text-emerald-300 flex items-center gap-1"><ShieldCheck size={18} /> Contained</span> : isCurrent ? <span className="font-mono text-[16px] text-rose-700 dark:text-rose-300 flex items-center gap-1"><AlertOctagon size={18} /> Isolating</span> : <span className="font-mono text-[16px] text-[var(--pres-text-muted)]">Pending</span>}
                </div>
                <h3 className="text-[22px] font-bold text-[var(--pres-text)] mt-4 mb-2">{st.stageTitle}</h3>
                <p className="text-[15px] text-[var(--pres-text-muted)] leading-relaxed mb-4">{st.remediationActionSummary}</p>
                <div className="p-3 rounded-2xl bg-[var(--pres-bg)] border border-[var(--pres-border)] space-y-1.5 font-mono">
                  <div className="text-[14px] text-[var(--pres-text-muted)]">Protocol: <span className="text-[var(--pres-text)] font-bold">{st.containmentProtocol}</span></div>
                  <div className="text-[14px] text-[var(--pres-text-muted)]">Target SLA: <span className="text-[var(--pres-accent)] font-bold">&lt; {st.targetMaxMinutes}m</span></div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--pres-border)] flex items-center justify-between font-mono">
                <div><div className="text-[14px] text-[var(--pres-text-muted)]">Elapsed</div><div className="text-[18px] font-bold text-[var(--pres-accent)]">{st.slaElapsedMinutes} min</div></div>
                <div className="text-right"><div className="text-[14px] text-[var(--pres-text-muted)]">Hosts Quarantined</div><div className="text-[18px] font-bold text-rose-700 dark:text-rose-300">{st.affectedHostCount}</div></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text-muted)]"><Terminal size={18} className="text-rose-700 dark:text-rose-400" /> Neutralized IOCs:</div>
          {(slide?.iocRecords || []).slice(0, 3).map((ioc) => (
            <div key={ioc.id} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] font-mono text-[14px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-bold text-[var(--pres-text)]">{ioc.iocType}:</span>
              <span className="text-[var(--pres-text-muted)] truncate max-w-[140px]">{ioc.iocValue}</span>
            </div>
          ))}
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Total MTTD/MTTR: <span className="text-[16px] font-bold text-emerald-700 dark:text-emerald-300">{slide?.totalElapsedContainmentMinutes || 0}m SLA</span> • Signoff: <span className="font-bold text-[var(--pres-text)]">Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>
    </div>
  );
};
