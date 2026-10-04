// lint-allow: file-size reason="CustomerHealthScorecardMatrixSlide flat sovereign customer health matrix" max=420
import React from 'react';
import type {
  CustomerHealthScorecardMatrixSlideData,
  CustomerAccountHealthRow,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Smile,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Award,
  Sparkles,
  Building,
  HeartHandshake,
  Activity,
} from 'lucide-react';

const DEF_ACCOUNTS: CustomerAccountHealthRow[] = [
  {
    id: 'acct-apex',
    accountName: 'Apex Financial Group',
    annualRecurringRevenueUsd: 1800000,
    featureAdoptionRatePercent: 94.5,
    executiveAlignmentTier: 'Strong',
    openEscalationCount: 0,
    npsSentimentScore: 78,
    isContractRenewalSecured: true,
    hasExecutiveSponsorAligned: true,
  },
  {
    id: 'acct-nova',
    accountName: 'Nova BioHealth Labs',
    annualRecurringRevenueUsd: 1450000,
    featureAdoptionRatePercent: 91.2,
    executiveAlignmentTier: 'Strong',
    openEscalationCount: 1,
    npsSentimentScore: 72,
    isContractRenewalSecured: true,
    hasExecutiveSponsorAligned: true,
  },
  {
    id: 'acct-aerospace',
    accountName: 'Global Aerospace Systems',
    annualRecurringRevenueUsd: 1200000,
    featureAdoptionRatePercent: 88.0,
    executiveAlignmentTier: 'Moderate',
    openEscalationCount: 0,
    npsSentimentScore: 65,
    isContractRenewalSecured: true,
    hasExecutiveSponsorAligned: true,
  },
  {
    id: 'acct-meridian',
    accountName: 'Meridian Global Retail',
    annualRecurringRevenueUsd: 950000,
    featureAdoptionRatePercent: 96.4,
    executiveAlignmentTier: 'Strong',
    openEscalationCount: 0,
    npsSentimentScore: 84,
    isContractRenewalSecured: true,
    hasExecutiveSponsorAligned: true,
  },
];

export const CustomerHealthScorecardMatrixSlide: React.FC<{
  slide?: CustomerHealthScorecardMatrixSlideData;
  data?: CustomerHealthScorecardMatrixSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const accounts = data?.accounts?.length ? data.accounts : DEF_ACCOUNTS;
  const totalArr = accounts.reduce((acc, curr) => acc + curr.annualRecurringRevenueUsd, 0);

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'Strong':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[12px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1 w-fit">
            <CheckCircle2 size={12} /> STRONG
          </span>
        );
      case 'Moderate':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[12px] font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1 w-fit">
            <Activity size={12} /> MODERATE
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[12px] font-bold bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30 flex items-center gap-1 w-fit">
            <AlertCircle size={12} /> AT RISK
          </span>
        );
    }
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Smile size={16} className="text-emerald-500" />
              {data?.kicker || 'EXECUTIVE CUSTOMER SUCCESS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Building size={14} /> Quarter: {data?.reportingQuarter || 'Q4 FY2026'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <TrendingUp size={14} className="text-cyan-500" />
              Retention: {data?.portfolioRetentionRatePercent ?? 98.4}%
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Enterprise Customer Health Scorecard'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Multidimensional health audit across Tier-1 strategic enterprise accounts measuring telemetry adoption and renewal certainty.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Portfolio ARR</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              ${(totalArr / 1000000).toFixed(1)}M USD
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Mean Adoption</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              92.5%
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[12px]">Chief Software Engineer</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Plane 1 Bento Grid - Table Matrix */}
      <div className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 z-10 my-auto shadow-2xl flex flex-col justify-between h-[560px]">
        <div>
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-3 border-b border-[var(--pres-border)] font-mono text-[14px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <div className="col-span-3">Tier-1 Enterprise Account</div>
            <div className="col-span-2 text-right">Annual Recurring (ARR)</div>
            <div className="col-span-2">Feature Adoption %</div>
            <div className="col-span-2">Sponsor Alignment</div>
            <div className="col-span-1 text-center">Escalations</div>
            <div className="col-span-1 text-center">NPS Score</div>
            <div className="col-span-1 text-center">Renewal</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-3 mt-3 font-mono text-[14px]">
            {accounts.map((acct) => (
              <div
                key={acct.id}
                className="grid grid-cols-12 gap-4 items-center p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Account Name */}
                <div className="col-span-3 flex items-center gap-2.5">
                  <Building size={16} className="text-[var(--pres-accent)]" />
                  <span className="font-bold text-slate-900 dark:text-slate-100">{acct.accountName}</span>
                </div>

                {/* ARR */}
                <div className="col-span-2 text-right font-bold text-slate-800 dark:text-slate-200">
                  ${acct.annualRecurringRevenueUsd.toLocaleString()}
                </div>

                {/* Adoption */}
                <div className="col-span-2 space-y-1">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-slate-500 dark:text-slate-400">{acct.featureAdoptionRatePercent}%</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">OPTIMAL</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full"
                      style={{ width: `${acct.featureAdoptionRatePercent}%` }}
                    />
                  </div>
                </div>

                {/* Sponsor */}
                <div className="col-span-2">
                  {getTierBadge(acct.executiveAlignmentTier)}
                </div>

                {/* Escalations */}
                <div className="col-span-1 text-center">
                  <span
                    className={`px-2 py-0.5 rounded text-[12px] font-bold ${
                      acct.openEscalationCount === 0
                        ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {acct.openEscalationCount} Active
                  </span>
                </div>

                {/* NPS */}
                <div className="col-span-1 text-center font-bold text-emerald-600 dark:text-emerald-400">
                  +{acct.npsSentimentScore}
                </div>

                {/* Renewal */}
                <div className="col-span-1 flex justify-center">
                  {acct.isContractRenewalSecured ? (
                    <span className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      <CheckCircle2 size={12} /> SECURED
                    </span>
                  ) : (
                    <span className="text-[12px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      ON TRACK
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Summary Strip */}
        <div className="mt-4 pt-3 border-t border-[var(--pres-border)] grid grid-cols-4 gap-4 font-mono text-[13px]">
          <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Expansion Pipeline</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[16px]">+$1.4M ARR In Play</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Net Retention Rate</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[16px]">134% Expansion</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">At-Risk Churn</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold text-[16px]">$0.00 ZERO CHURN</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 block text-[11px] uppercase">Support SLA Compliance</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[16px]">99.8% Resolution</span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Portfolio Health:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 size={16} /> 100% Contract Renewal Certainty | Zero Churn Exposure
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
            <ShieldCheck size={16} /> Suite 2027 Success Core
          </span>
        </div>
      </div>
    </div>
  );
};
