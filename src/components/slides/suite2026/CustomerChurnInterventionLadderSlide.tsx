// lint-allow: file-size reason="CustomerChurnInterventionLadderSlide customer health churn intervention ladder" max=160
import React from 'react';
import type { CustomerChurnInterventionLadderSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { UserMinus, CheckCircle2, TrendingUp, ShieldAlert, HeartPulse, Sparkles, DollarSign } from 'lucide-react';

const DEF_STAGES = [
  { id: 's1', stageIndex: 1, stageName: 'Early Health Drift Detection', healthScoreThreshold: 80, interventionTrigger: 'Telemetry drop > 15% across secondary microservices', annualRecurringRevenuePreserved: 4200000, isPositive: true, hasCustomerSuccessEscalation: false, hasCheckmark: true },
  { id: 's2', stageIndex: 2, stageName: 'Proactive Workflow Advisory', healthScoreThreshold: 65, interventionTrigger: 'Key user champion turnover detected via identity logs', annualRecurringRevenuePreserved: 2800000, isPositive: true, hasCustomerSuccessEscalation: true, hasCheckmark: true },
  { id: 's3', stageIndex: 3, stageName: 'Executive Sponsor Intervention', healthScoreThreshold: 45, interventionTrigger: 'Quarterly business review delayed > 30 days', annualRecurringRevenuePreserved: 1900000, isPositive: true, hasCustomerSuccessEscalation: true, hasCheckmark: true },
  { id: 's4', stageIndex: 4, stageName: 'Critical Re-Contracting Playbook', healthScoreThreshold: 30, interventionTrigger: 'Formal RFP initiated for competing alternatives', annualRecurringRevenuePreserved: 1200000, isPositive: true, hasCustomerSuccessEscalation: true, hasCheckmark: true },
];

export const CustomerChurnInterventionLadderSlide: React.FC<{
  slide?: CustomerChurnInterventionLadderSlideData;
  data?: CustomerChurnInterventionLadderSlideData;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.stages?.length ? data.stages : DEF_STAGES;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), stages.length - 1);
  const activeStage = stages[currentStep] || stages[0];
  const totalArrPreserved = stages.reduce((acc, s) => acc + (s.annualRecurringRevenuePreserved || 0), 0);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-[14px] font-mono font-bold tracking-wider uppercase flex items-center gap-2">
              <UserMinus size={16} className="text-violet-500" />
              {data?.kicker || 'CUSTOMER SUCCESS & NET REVENUE RETENTION'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500" />
              NRR Target: {data?.netRevenueRetentionTarget ?? 128}% Top-Decile
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-[44px] font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Customer Churn Intervention Ladder: Proactive Retention Flywheel'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-[16px] max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Predictive multi-stage escalation framework intercepting account health decay and securing annual recurring revenue.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Customer Segment</span><span className="font-bold text-slate-900 dark:text-slate-100">{data?.customerSegmentName || 'Strategic Enterprise Tier'}</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">ARR Protected</span><span className="font-bold text-emerald-500">${(totalArrPreserved / 1000000).toFixed(1)}M Total</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Predictive Engine</span><span className="font-bold text-violet-500">AI ML ACTIVE</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[500px] items-stretch">
        {stages.map((st, idx) => {
          const isActive = idx === currentStep;
          const isPast = idx < currentStep;
          return (
            <div key={st.id} onClick={() => jumpToStep(idx)} className={`plane-2-elevated rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer ${isActive ? 'border-2 border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_30px_var(--pres-accent)] scale-[1.03] z-20' : isPast ? 'border-emerald-500/40 bg-emerald-500/10 opacity-85 z-10' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 blur-[0.5px] z-0'}`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-[14px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                      {idx + 1}
                    </div>
                    <span className="font-ubuntu font-bold text-[17px] text-slate-900 dark:text-white truncate">Step {st.stageIndex}</span>
                  </div>
                  <span className={`font-mono text-[14px] px-2 py-0.5 rounded font-bold ${st.healthScoreThreshold <= 40 ? 'bg-rose-500/20 text-rose-700 dark:text-rose-400 border border-rose-500/30' : 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30'}`}>&lt; {st.healthScoreThreshold} Health</span>
                </div>
                <div className="my-4 space-y-3 font-mono text-[14px]">
                  <div>
                    <span className="text-[14px] text-slate-500 dark:text-slate-400 uppercase block">Stage Strategy</span>
                    <div className="font-bold text-[15px] text-slate-900 dark:text-white mt-0.5">{st.stageName}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)] space-y-1">
                    <span className="text-[14px] text-slate-500 dark:text-slate-400 uppercase block">Telemetry Trigger</span>
                    <div className="font-poppins text-[14px] text-slate-700 dark:text-slate-200 leading-snug">{st.interventionTrigger}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex justify-between items-center">
                    <span className="text-[14px] text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1"><DollarSign size={14} />ARR Saved</span>
                    <span className="font-bold text-[15px] text-emerald-700 dark:text-emerald-300">${(st.annualRecurringRevenuePreserved / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-[var(--pres-border)] font-mono text-[14px] flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">Escalation SLA:</span>
                <span className={`font-bold ${st.hasCustomerSuccessEscalation ? 'text-violet-600 dark:text-violet-400' : 'text-slate-500 dark:text-slate-400'}`}>{st.hasCustomerSuccessEscalation ? 'VP Escalation' : 'Automated Playbook'}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="z-10 flex items-center justify-between text-[14px] font-mono pt-3 border-t border-[var(--pres-border)]">
        <span style={{ color: 'var(--pres-text-muted)' }}>Slide 16 • Customer Churn Intervention Ladder • 16:9 4K Precision Standard</span>
        <span className="text-violet-500 font-bold">Dynamic Stage {currentStep + 1} of {stages.length}: {activeStage.stageName}</span>
      </div>
    </div>
  );
};
