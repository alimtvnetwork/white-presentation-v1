import React from 'react';
import type { AiModelEvaluationBenchmarkRadarSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Cpu, CheckCircle2, ShieldCheck, Award, Zap, Sparkles } from 'lucide-react';

export const AiModelEvaluationBenchmarkRadarSlide: React.FC<{
  slide: AiModelEvaluationBenchmarkRadarSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const axes = slide?.benchmarkAxes || [];
  const models = slide?.evaluatedModels || [];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2"><Cpu size={18} /> {slide?.kicker || 'AI MODEL EVALUATION & BENCHMARKING'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)]">{slide?.evaluationSuiteVersion || 'EvalSuite v4.8'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-beacon-pulse inline-block" /><Award size={16} /> Win Rate: {slide?.overallWinRatePercentage || 88.6}%</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-[var(--pres-accent)]/40 relative overflow-hidden flex items-center justify-center"><div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[var(--pres-accent)]/60 animate-radar-sweep origin-center" /></div>
            <span className="text-[var(--pres-text-muted)]">Reference Model:</span>
            <span className="font-bold text-[16px] text-[var(--pres-accent)]">{slide?.referenceModelName || 'Nexus-70B Sovereign'}</span>
          </div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Lead: {slide?.leadResearchScientist || 'Alim Ul Karim'}</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 my-auto z-10 h-[520px]">
        <div className="col-span-8 grid grid-cols-2 gap-4">
          {axes.slice(0, 6).map((a) => (
            <div key={a.id} className="plane-1-raised rounded-3xl p-5 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[16px] font-bold text-[var(--pres-text)]">{a.axisName}</span>
                  <span className="font-mono text-[14px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">{a.isOurModelLeading ? '+ Lead' : 'Competitive'}</span>
                </div>
                <div className="mt-3 space-y-2 font-mono text-[14px]">
                  <div className="flex items-center justify-between"><span className="text-[var(--pres-text-muted)]">Our Sovereign:</span><span className="font-bold text-[18px] text-[var(--pres-accent)] animate-sparkline-trace">{a.ourModelScore}%</span></div>
                  <div className="flex items-center justify-between"><span className="text-[var(--pres-text-muted)]">Frontier Closed:</span><span className="font-bold text-[var(--pres-text)]">{a.competitorModelScore}%</span></div>
                  <div className="flex items-center justify-between"><span className="text-[var(--pres-text-muted)]">OSS Baseline:</span><span className="text-[var(--pres-text-muted)]">{a.openSourceBaselineScore}%</span></div>
                </div>
              </div>
              <div className="pt-2.5 border-t border-[var(--pres-border)] font-mono text-[14px] text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                <span>Delta vs SOTA:</span><span className="font-bold">+{((a.ourModelScore - a.competitorModelScore)).toFixed(1)}% Outperform</span>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-4 plane-1-raised rounded-3xl p-6 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[16px] font-bold text-[var(--pres-accent)] flex items-center gap-2"><Sparkles size={18} /> Model Suite Radar</span>
              <div className="w-6 h-6 rounded-full border border-[var(--pres-accent)]/50 relative overflow-hidden flex items-center justify-center"><div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--pres-accent)] animate-radar-sweep origin-center" /></div>
            </div>
            <div className="space-y-3.5 mt-4">
              {models.map((m) => (
                <div key={m.id} className="p-3.5 rounded-2xl bg-[var(--pres-bg-card)] border border-[var(--pres-border)] font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] font-bold text-[var(--pres-text)] flex items-center gap-2"><span className={`w-2.5 h-2.5 rounded-full ${m.isReferenceModel ? 'bg-[var(--pres-accent)] animate-beacon-pulse' : 'bg-[var(--pres-border)]'}`} />{m.modelIdentifier}</span>
                    <span className="text-[14px] px-2 py-0.5 rounded bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] font-semibold">{m.isReferenceModel ? 'Reference' : 'Comparison'}</span>
                  </div>
                  <div className="text-[14px] text-[var(--pres-text-muted)] mt-1.5">{m.parameterVolumeLabel} • {m.providerOrganization}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-3 border-t border-[var(--pres-border)] font-mono text-[14px] text-[var(--pres-text-muted)] space-y-1">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold"><CheckCircle2 size={16} /> Zero Contamination Verified</div>
            <div>Benchmark Rigor: <strong className="text-[var(--pres-text)]">Double-Blind Automated Harness</strong></div>
          </div>
        </div>
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-mono text-[16px] text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={18} /> Independent Reproducibility Verified</div>
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text)]"><ShieldCheck size={18} className="text-[var(--pres-accent)]" /> Contamination-Free Test Harness</div>
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text-muted)]"><Zap size={18} /> MMLU-Pro / SWE-bench / MATH-500</div>
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Research Signoff: <span className="font-bold text-[var(--pres-text)]">Alim Ul Karim, Chief Software Engineer</span>
        </div>
      </div>
    </div>
  );
};
