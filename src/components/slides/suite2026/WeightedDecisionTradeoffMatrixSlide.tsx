// lint-allow: file-size reason="WeightedDecisionTradeoffMatrixSlide multi-criteria decision tradeoff matrix" max=160
import React from 'react';
import type { WeightedDecisionTradeoffMatrixSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { GitFork, CheckCircle2, Award, Scale, Check, ShieldCheck } from 'lucide-react';

const DEF_CRITERIA = [
  { id: 'c1', criterionName: 'Security & Sovereignty Posture', weightPercent: 30, isMandatoryCriterion: true },
  { id: 'c2', criterionName: 'Planetary Latency & Replication SLA', weightPercent: 25, isMandatoryCriterion: true },
  { id: 'c3', criterionName: 'Amortized 3-Year Cloud TCO', weightPercent: 25, isMandatoryCriterion: false },
  { id: 'c4', criterionName: 'Developer Velocity & SDK Extensibility', weightPercent: 20, isMandatoryCriterion: false },
];

const DEF_OPTIONS = [
  { optionName: 'Architecture A: Monolithic Multi-Region Cloud', scores: { c1: 6, c2: 7, c3: 5, c4: 8 }, totalWeightedScore: 6.40, isRecommended: false, hasExecutiveSponsor: false },
  { optionName: 'Architecture B: Hybrid Sovereign Bare-Metal Mesh', scores: { c1: 10, c2: 9, c3: 8, c4: 9 }, totalWeightedScore: 9.05, isRecommended: true, hasExecutiveSponsor: true },
  { optionName: 'Architecture C: Distributed Multi-Cloud Overlay', scores: { c1: 7, c2: 8, c3: 4, c4: 7 }, totalWeightedScore: 6.50, isRecommended: false, hasExecutiveSponsor: false },
];

export const WeightedDecisionTradeoffMatrixSlide: React.FC<{
  slide?: WeightedDecisionTradeoffMatrixSlideData;
  data?: WeightedDecisionTradeoffMatrixSlideData;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const criteria = data?.criteria?.length ? data.criteria : DEF_CRITERIA;
  const options = data?.options?.length ? data.options : DEF_OPTIONS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), options.length - 1);
  const activeOption = options[currentStep] || options[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-[14px] font-mono font-bold tracking-wider uppercase flex items-center gap-2">
              <Scale size={16} className="text-violet-500" />
              {data?.kicker || 'EXECUTIVE ARCHITECTURAL TRADEOFF MATRIX'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500" />
              Context: {data?.evaluationContext || 'Global Data Platform Evolution 2026'}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-[44px] font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Weighted Decision Tradeoff Matrix: Multi-Criteria Architectural Selection'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-[16px] max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Quantitative multi-variable decision model evaluating competing architectural patterns against weighted business priorities.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[12px] block uppercase">Decision Outcome</span><span className="font-bold text-violet-500">{data?.selectedDecisionOutcome || 'Hybrid Sovereign Selected'}</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[12px] block uppercase">Stakeholder Consensus</span><span className="font-bold text-emerald-500">100% UNANIMOUS</span></div>
          <div className="w-[1px] h-8 bg-slate-700/40" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[12px] block uppercase">Scoring Engine</span><span className="font-bold text-slate-900 dark:text-slate-100">Weighted Linear Sum</span></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 z-10 my-3">
        {options.map((opt, idx) => {
          const isActive = idx === currentStep;
          return (
            <button key={opt.optionName} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${isActive ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_20px_var(--pres-accent)] text-slate-900 dark:text-white scale-[1.02]' : idx < currentStep ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-80' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 text-slate-500 dark:text-slate-400 blur-[0.5px]'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[12px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
                <span className="font-bold truncate text-[13px]">{opt.optionName.split(':')[0]}</span>
              </div>
              <span className={`text-[12px] px-2 py-0.5 rounded font-bold ${opt.isRecommended ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30' : 'text-slate-500'}`}>{opt.totalWeightedScore.toFixed(2)} pts</span>
            </button>
          );
        })}
      </div>

      <div className="plane-2-elevated rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 z-10 my-auto h-[460px] flex flex-col justify-between shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
          <span className="font-mono text-[14px] font-bold text-violet-500 dark:text-violet-400 flex items-center gap-2"><GitFork size={16} />MULTI-CRITERIA EVALUATION MATRIX</span>
          <span className="font-mono text-[12px] px-2.5 py-1 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">Weighted 1-10 Scale</span>
        </div>
        <div className="overflow-x-auto my-auto">
          <table className="w-full text-left font-mono text-[14px]">
            <thead>
              <tr className="border-b border-[var(--pres-border)] text-slate-500 dark:text-slate-400 text-[12px] uppercase">
                <th className="py-2.5 px-3">Architectural Option</th>
                {criteria.map((c) => (
                  <th key={c.id} className="py-2.5 px-3 text-center">
                    <div>{c.criterionName}</div>
                    <div className="text-[11px] text-violet-500 font-bold">{c.weightPercent}% weight</div>
                  </th>
                ))}
                <th className="py-2.5 px-3 text-right">Weighted Total</th>
                <th className="py-2.5 px-3 text-center">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--pres-border)]">
              {options.map((opt, idx) => {
                const isSelected = idx === currentStep;
                return (
                  <tr key={opt.optionName} onClick={() => jumpToStep(idx)} className={`cursor-pointer transition-all ${isSelected ? 'bg-[var(--pres-accent)]/15 font-bold text-slate-900 dark:text-white' : 'hover:bg-black/5 dark:hover:bg-black/20 text-slate-700 dark:text-slate-300'}`}>
                    <td className="py-4 px-3 flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${isSelected ? 'bg-[var(--pres-accent)]' : 'bg-slate-600'}`} />
                      <span className="text-[15px]">{opt.optionName}</span>
                    </td>
                    {criteria.map((c) => {
                      const score = opt.scores[c.id] ?? 0;
                      return (
                        <td key={c.id} className="py-4 px-3 text-center">
                          <span className={`px-2.5 py-1 rounded font-bold text-[13px] ${score >= 9 ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30' : score >= 7 ? 'bg-sky-500/15 text-sky-700 dark:text-sky-300' : 'bg-slate-700/20 text-slate-400'}`}>
                            {score} / 10
                          </span>
                        </td>
                      );
                    })}
                    <td className="py-4 px-3 text-right text-[18px] font-ubuntu font-bold text-violet-600 dark:text-violet-400">{opt.totalWeightedScore.toFixed(2)}</td>
                    <td className="py-4 px-3 text-center">
                      {opt.isRecommended ? (
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-bold text-[12px] flex items-center justify-center gap-1.5 mx-auto w-fit">
                          <Award size={14} /> RECOMMENDED
                        </span>
                      ) : (
                        <span className="text-slate-500 text-[12px]">Alternative</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-3 rounded-xl bg-black/5 dark:bg-black/20 border border-[var(--pres-border)] font-mono text-[13px] flex items-center justify-between text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-500" /> Mandatory criteria gates strictly enforced: Options failing criteria 1 or 2 are automatically disqualified.</div>
          <span className="text-violet-500 font-bold">Consensus Approved</span>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-[14px] font-mono pt-3 border-t border-[var(--pres-border)]">
        <span style={{ color: 'var(--pres-text-muted)' }}>Slide 15 • Weighted Decision Tradeoff Matrix • 16:9 4K Precision Standard</span>
        <span className="text-violet-500 font-bold">Dynamic Option {currentStep + 1} of {options.length} Selected</span>
      </div>
    </div>
  );
};
