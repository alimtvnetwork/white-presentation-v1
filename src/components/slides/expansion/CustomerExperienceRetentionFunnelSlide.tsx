import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { ArrowUpRight, HeartHandshake, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';

interface FunnelStage {
  stageNumber: number;
  stageName: string;
  metricHero: string;
  metricLabel: string;
  conversionRate: string;
  narrative: string;
}

const DEFAULT_STAGES: FunnelStage[] = [
  { stageNumber: 1, stageName: 'Enterprise Onboarding', metricHero: '14 Days', metricLabel: 'Time-to-Production', conversionRate: '98.4%', narrative: 'Automated CI/CD templates & single-click sovereign cloud provisioning' },
  { stageNumber: 2, stageName: 'Active Fleet Expansion', metricHero: '12.4x', metricLabel: 'Workspace Density', conversionRate: '94.2%', narrative: 'Multi-cluster orchestration across departmental development enclaves' },
  { stageNumber: 3, stageName: 'Proactive Health Deflection', metricHero: '96/100', metricLabel: 'Composite CSAT', conversionRate: '99.2%', narrative: 'Autonomous anomaly alerting preempts operational friction points' },
  { stageNumber: 4, stageName: 'Net Revenue Expansion', metricHero: '138%', metricLabel: 'Net Retention (NRR)', conversionRate: 'Compounding', narrative: 'Seat expansion, high-bandwidth compute consumption & add-on services' },
];

export const CustomerExperienceRetentionFunnelSlide: React.FC<{ slide: BaseSlide & { stages?: FunnelStage[]; leadArchitect?: string; } }> = ({ slide }) => {
  const stages = slide.stages || DEFAULT_STAGES;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'GTM RETENTION & CUSTOMER VELOCITY'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'B2B Enterprise Customer Experience & Churn Deflection Funnel'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'High-velocity procurement onboarding, automated telemetry health scoring, and compounding 138% Net Retention.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><TrendingUp size={14} className="text-emerald-400" /> NRR: 138%</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><HeartHandshake size={14} className="text-cyan-400" /> 0.8% Logo Churn</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {stages.map((st, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 font-mono text-xs font-bold text-slate-300 flex items-center justify-center">
                  0{st.stageNumber}
                </span>
                <span className="font-mono text-xs text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                  {st.conversionRate}
                </span>
              </div>
              <h2 className="font-ubuntu text-lg font-bold text-white mb-2">{st.stageName}</h2>
              <div className="text-3xl font-black font-ubuntu text-white my-1">{st.metricHero}</div>
              <p className="font-mono text-xs text-slate-400 mb-3">{st.metricLabel}</p>
              <p className="font-poppins text-xs text-slate-400 leading-relaxed">{st.narrative}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-xs text-slate-500">
              <span>Cohort Milestone</span>
              <span className="text-cyan-400 flex items-center font-semibold">Active Flow <ArrowUpRight size={13} /></span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span>Customer Success Standard: Automated proactive health telemetry prevents customer churn prior to renewal horizons</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
