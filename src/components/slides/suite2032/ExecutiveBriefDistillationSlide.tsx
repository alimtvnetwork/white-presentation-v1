// lint-allow: file-size reason="ExecutiveBriefDistillationSlide kinetic 4-step distillation" max=120
import React from 'react';
import type { ExecutiveBriefDistillationSlideData } from '../../../types/suite2032Archetypes';
import { resolveStepPhase, getStepLifecycleStyle } from '../../../utils/stepProgression';
import { ShieldCheck, Award, TrendingUp, Sparkles } from 'lucide-react';

export const ExecutiveBriefDistillationSlide: React.FC<{
  slide: ExecutiveBriefDistillationSlideData;
  activeStep?: number;
}> = ({ slide, activeStep = 0 }) => {
  const stages = slide.distillationStages || [];
  const signals = slide.keySignals || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg, #0b0f19)', color: 'var(--pres-text, #f8fafc)' }}
      className="relative w-[1920px] h-[1080px] p-[56px_72px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      <div className="flex items-start justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-base font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[var(--pres-accent,#6366f1)]/10 text-[var(--pres-accent,#818cf8)] border border-[var(--pres-accent,#6366f1)]/30 flex items-center gap-2">
              <Sparkles size={16} />
              {slide.kicker || 'STRATEGIC ALIGNMENT & BOARD DISTILLATION'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">{slide.briefingPeriod}</span>
          </div>
          <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-2 max-w-[1100px]">{slide.title}</h1>
          <p className="text-base text-slate-400 max-w-[1000px] leading-relaxed">{slide.subtitle}</p>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 shrink-0">
          <Award className="w-10 h-10 text-[var(--pres-accent,#818cf8)]" />
          <div>
            <div className="text-sm font-semibold text-slate-300">Executive Sponsor</div>
            <div className="text-lg font-bold text-white">{slide.executiveSponsor || 'Alim Ul Karim'}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto items-stretch">
        <div className="col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
          <div>
            <div className="text-sm font-mono uppercase tracking-wider text-[var(--pres-accent,#818cf8)] mb-2 flex items-center gap-2">
              <ShieldCheck size={18} /> Strategic Context & Signals
            </div>
            <p className="text-base text-slate-300 leading-relaxed mb-6">Distilling macro architectural shifts and capital allocation vectors into verified consensus milestones.</p>
            <div className="space-y-3">
              {signals.map((sig) => (
                <div key={sig.id} className="p-3.5 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-200">{sig.signalLabel}</span>
                  <span className="text-sm font-mono font-bold px-2.5 py-1 rounded bg-[var(--pres-accent,#6366f1)]/20 text-[var(--pres-accent,#818cf8)] border border-[var(--pres-accent,#6366f1)]/30">{sig.impactScore}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm text-slate-400">
            <span>Confidence Index: <strong className="text-emerald-400 font-mono text-base">98.4%</strong></span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium"><TrendingUp size={16} /> Locked</span>
          </div>
        </div>

        <div className="col-span-8 grid grid-cols-2 gap-6">
          {stages.map((stage, idx) => {
            const phase = resolveStepPhase(idx, activeStep);
            const style = getStepLifecycleStyle(phase);
            return (
              <div
                key={stage.stepIndex}
                style={style}
                className="p-6 rounded-2xl bg-[var(--pres-card-bg,rgba(255,255,255,0.03))] border border-white/10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-base font-bold text-[var(--pres-accent,#818cf8)] px-2.5 py-1 rounded bg-[var(--pres-accent,#6366f1)]/15 border border-[var(--pres-accent,#6366f1)]/30">STEP 0{stage.stepIndex + 1}</span>
                    <span className="text-sm font-mono text-slate-400 uppercase tracking-wider">{stage.evidenceLabel}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1.5 leading-snug">{stage.pillarTitle}</h3>
                  <p className="text-sm font-medium text-slate-300 mb-1.5 leading-relaxed">{stage.headlineSummary}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{stage.coreTakeaway}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-400">Validated Impact</span>
                  <span className="text-2xl font-bold font-mono text-white tracking-tight">{stage.evidenceMetric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-slate-400 border-t border-white/10 pt-4">
        <span className="font-mono text-sm">ARCHETYPE: EXECUTIVE-BRIEF-DISTILLATION (4-STEP KINETIC)</span>
        <span className="text-sm">SUITE 2032 ENTERPRISE SOVEREIGNTY SYSTEM</span>
      </div>
    </div>
  );
};
