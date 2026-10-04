// lint-allow: file-size reason="GlobalPartnerTieringLadderSlide interactive partner ecosystem tier ladder" max=160
import React from 'react';
import type { GlobalPartnerTieringLadderSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Award, CheckCircle2, TrendingUp, Users, ShieldCheck, Crown } from 'lucide-react';

const DEF_TIERS = [
  { id: 't1', tierName: 'Silver Certified', revenueCommitmentMillions: 1.0, rebatePercent: 8, technicalCertificationCount: 2, isRecommended: false, hasDedicatedPartnerManager: false, hasExecutiveAccess: false },
  { id: 't2', tierName: 'Gold Strategic', revenueCommitmentMillions: 5.0, rebatePercent: 15, technicalCertificationCount: 8, isRecommended: false, hasDedicatedPartnerManager: true, hasExecutiveAccess: false },
  { id: 't3', tierName: 'Platinum Alliance', revenueCommitmentMillions: 20.0, rebatePercent: 24, technicalCertificationCount: 25, isRecommended: true, hasDedicatedPartnerManager: true, hasExecutiveAccess: true },
  { id: 't4', tierName: 'Diamond Sovereign Global', revenueCommitmentMillions: 50.0, rebatePercent: 32, technicalCertificationCount: 60, isRecommended: false, hasDedicatedPartnerManager: true, hasExecutiveAccess: true },
];

export const GlobalPartnerTieringLadderSlide: React.FC<{
  slide?: GlobalPartnerTieringLadderSlideData;
  data?: GlobalPartnerTieringLadderSlideData;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const tiers = data?.tiers?.length ? data.tiers : DEF_TIERS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), tiers.length - 1);
  const activeTier = tiers[currentStep] || tiers[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="kicker-pill-badge text-[14px] font-mono font-bold tracking-wider uppercase flex items-center gap-2">
              <Award size={16} className="text-violet-500" />
              {data?.kicker || 'GLOBAL ALLIANCE & CHANNEL ECOSYSTEM'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-500" />
              Program: {data?.ecosystemProgramName || 'Sovereign Global Alliance FY2026'}
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-[44px] font-ubuntu font-bold tracking-tight mb-1" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Global Partner Tiering Ladder: High-Velocity Channel Architecture'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-[16px] max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Value-accretive tier ladder incentivizing technical certifications, co-selling commitments, and enterprise margin acceleration.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Active Partners</span><span className="font-bold text-slate-900 dark:text-slate-100">{data?.partnerCountGlobal || 342} Certified</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">Channel Incentive</span><span className="font-bold text-emerald-500">BACK-END REBATE ACTIVE</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[14px] block uppercase">MDF Allocation</span><span className="font-bold text-violet-500">100% Matching Fund</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto h-[500px] items-end">
        {tiers.map((t, idx) => {
          const isActive = idx === currentStep;
          const isPast = idx < currentStep;
          const heights = ['h-[340px]', 'h-[390px]', 'h-[440px]', 'h-[490px]'];
          return (
            <div key={t.id} onClick={() => jumpToStep(idx)} className={`plane-2-elevated rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer ${heights[idx]} ${isActive ? 'border-2 border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-[0_0_30px_var(--pres-accent)] scale-[1.03] z-20' : isPast ? 'border-emerald-500/40 bg-emerald-500/10 opacity-85 z-10' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-40 blur-[0.5px] z-0'}`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-[14px] ${isActive ? 'bg-[var(--pres-accent)] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                      {idx + 1}
                    </div>
                    <span className="font-ubuntu font-bold text-[18px] text-slate-900 dark:text-white truncate">{t.tierName}</span>
                  </div>
                  {t.isRecommended && <span className="font-mono text-[14px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-700 dark:text-violet-300 border border-violet-500/30 font-bold">★ FOCUS</span>}
                </div>
                <div className="my-4 space-y-3 font-mono text-[14px]">
                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)] flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400 text-[14px] uppercase">ARR Commitment</span>
                    <span className="font-bold text-[16px] text-slate-900 dark:text-white">${t.revenueCommitmentMillions}M+</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)] flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400 text-[14px] uppercase">Partner Margin</span>
                    <span className="font-bold text-[16px] text-emerald-600 dark:text-emerald-400">{t.rebatePercent}% Gross</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-[var(--pres-border)] flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400 text-[14px] uppercase">Required Certs</span>
                    <span className="font-bold text-[15px] text-slate-900 dark:text-white">{t.technicalCertificationCount} Architects</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-3 border-t border-[var(--pres-border)] font-mono text-[14px]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className={t.hasDedicatedPartnerManager ? 'text-emerald-500' : 'text-slate-500'} />
                  <span className={t.hasDedicatedPartnerManager ? 'text-slate-800 dark:text-slate-100' : 'text-slate-500'}>Dedicated Partner Director</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown size={14} className={t.hasExecutiveAccess ? 'text-amber-500' : 'text-slate-500'} />
                  <span className={t.hasExecutiveAccess ? 'text-slate-800 dark:text-slate-100 font-bold' : 'text-slate-500'}>Executive Advisory Access</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="z-10 flex items-center justify-between text-[14px] font-mono pt-3 border-t border-[var(--pres-border)]">
        <span style={{ color: 'var(--pres-text-muted)' }}>Slide 12 • Global Partner Tiering Ladder • 16:9 4K Precision Standard</span>
        <span className="text-violet-500 font-bold">Dynamic Tier {currentStep + 1} of {tiers.length}: {activeTier.tierName}</span>
      </div>
    </div>
  );
};
