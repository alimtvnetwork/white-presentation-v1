import React from 'react';
import type { ProductReleaseBurnUpCadenceSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { Rocket, CheckCircle2, Sparkles, ShieldCheck, Gauge, Check } from 'lucide-react';

export const ProductReleaseBurnUpCadenceSlide: React.FC<{
  slide: ProductReleaseBurnUpCadenceSlideData;
  activeStep?: number;
}> = ({ slide, activeStep }) => {
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const stages = slide?.releaseGates || [];
  const currentStep = Math.min(Math.max(0, (activeStep !== undefined ? activeStep : storeStep) || 0), stages.length - 1);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Rocket size={18} /> {slide?.kicker || 'PRODUCT RELEASE BURN-UP CADENCE'}
            </span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)]">Target: {slide?.targetReleaseVersion || 'v2033.4-LTS'} ({slide?.totalScopeStoryPoints || 850} SP)</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5"><ShieldCheck size={16} /> Zero Sev-1 Defects</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2"><span className="text-[var(--pres-text-muted)]">Release Gate:</span><span className="font-bold text-[16px] text-[var(--pres-accent)]">{currentStep + 1} of {stages.length}</span></div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Chief Software Engineer: Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 my-auto z-10 h-[520px]">
        {stages.map((g, idx) => {
          const phase = resolveStepPhase(idx, currentStep);
          const isCurrent = phase === 'active';
          const isDone = phase === 'completed';
          return (
            <div key={g.stepIndex} onClick={() => jumpToStep(idx)} style={getStepLifecycleStyle(phase)} className={`plane-1-raised rounded-3xl p-6 border flex flex-col justify-between cursor-pointer transition-all ${isCurrent ? 'bg-[var(--pres-bg-card)] border-[var(--pres-accent)] ring-2 ring-[var(--pres-accent)]/40 shadow-xl animate-beacon-pulse' : 'bg-[var(--pres-bg-card)] border-[var(--pres-border)]'}`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[16px] font-bold text-[var(--pres-accent)]">{g.gateCode}</span>
                  {isDone ? <span className="font-mono text-[16px] text-emerald-700 dark:text-emerald-300 flex items-center gap-1"><CheckCircle2 size={18} /> Passed</span> : isCurrent ? <span className="font-mono text-[16px] text-[var(--pres-accent)] flex items-center gap-1"><Sparkles size={18} /> In Verification</span> : <span className="font-mono text-[16px] text-[var(--pres-text-muted)]">Pending</span>}
                </div>
                <h3 className="text-[22px] font-bold text-[var(--pres-text)] mt-4 mb-2">{g.gateTitle}</h3>
                <div className="text-[14px] font-mono text-emerald-700 dark:text-emerald-300 mb-3 flex items-center gap-1"><Check size={14} /> Status: {g.gateApprovalStatus}</div>
                <div className="space-y-2 font-mono text-[14px]">
                  <div className="p-2 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] flex justify-between">
                    <span className="text-[var(--pres-text-muted)]">Burn-up</span>
                    <span className="text-[var(--pres-text)] font-bold">{g.storyPointsBurned} / {g.targetStoryPoints} SP</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] flex justify-between">
                    <span className="text-[var(--pres-text-muted)]">P99 Latency</span>
                    <span className="text-[var(--pres-accent)] font-bold">{g.p99LatencyMilliseconds} ms</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--pres-border)] flex items-center justify-between font-mono">
                <div><div className="text-[14px] text-[var(--pres-text-muted)]">Defects</div><div className="text-[18px] font-bold text-emerald-700 dark:text-emerald-300">{g.zeroToleranceDefectsCount} Sev-0/1</div></div>
                <div className="text-right"><div className="text-[14px] text-[var(--pres-text-muted)]">Progress</div><div className="text-[18px] font-bold text-[var(--pres-accent)]">{Math.round((g.storyPointsBurned / (g.targetStoryPoints || 1)) * 100)}%</div></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text-muted)]"><Gauge size={18} className="text-[var(--pres-accent)]" /> Quality Gates:</div>
          {(slide?.qualityChecks || []).slice(0, 3).map((check) => (
            <div key={check.id} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--pres-bg)] border border-[var(--pres-border)] font-mono text-[14px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-bold text-[var(--pres-text)]">{check.checkTitle}</span>
              <span className="text-[var(--pres-text-muted)]">({check.codeCoveragePercentage}% cov • {check.verificationTool})</span>
            </div>
          ))}
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Release Lead: <span className="font-bold text-[var(--pres-accent)] text-[16px]">{slide?.releaseManagerName || 'Release PMO'}</span> • Signoff: <span className="font-bold text-[var(--pres-text)]">Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>
    </div>
  );
};
