import React from 'react';
import type { CapTableOwnershipWaterfallSlideData } from '../../../types/suite2033Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { PieChart, ShieldCheck, CheckCircle2, DollarSign, Award, Layers } from 'lucide-react';

export const CapTableOwnershipWaterfallSlide: React.FC<{
  slide: CapTableOwnershipWaterfallSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const classes = slide?.shareholderClasses || [];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[52px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase px-3.5 py-1 rounded-full bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2"><PieChart size={18} /> {slide?.kicker || 'EQUITY CAPITALIZATION & WATERFALL'}</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full border border-[var(--pres-border)] bg-[var(--pres-bg-card)] text-[var(--pres-text)]">Post-Money: ${slide?.postMoneyValuationMillionUsd || 580}M</span>
            <span className="font-mono text-[16px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-beacon-pulse inline-block" /><Award size={16} /> 409A Valuation Certified</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-[var(--pres-text-muted)] mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <div className="flex flex-col items-end gap-1 font-mono text-[14px] border border-[var(--pres-border)] bg-[var(--pres-bg-card)] px-4 py-2.5 rounded-2xl">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-[var(--pres-accent)]/40 relative overflow-hidden flex items-center justify-center"><div className="absolute inset-0 bg-gradient-to-tr from-transparent to-[var(--pres-accent)]/60 animate-radar-sweep origin-center" /></div>
            <span className="text-[var(--pres-text-muted)]">Fully Diluted Shares:</span>
            <span className="font-bold text-[16px] text-[var(--pres-accent)]">{((slide?.fullyDilutedSharesTotal || 48000000) / 1000000).toFixed(1)}M Shares</span>
          </div>
          <span className="text-[14px] text-[var(--pres-text-muted)]">Counsel: {slide?.generalCounselLead || 'Jonathan Sterling, Esq.'}</span>
        </div>
      </div>

      <div className="plane-1-raised rounded-3xl p-6 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] my-auto z-10 h-[520px] flex flex-col justify-between">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[16px] font-bold text-[var(--pres-text)]">
          <span className="flex items-center gap-2 text-[var(--pres-accent)]"><Layers size={20} /> Shareholder Tranche & Class</span>
          <div className="flex items-center gap-12 text-[14px] text-[var(--pres-text-muted)]">
            <span className="w-48 text-right">Ownership Bar</span>
            <span className="w-28 text-right">Shares Issued</span>
            <span className="w-28 text-right">Capital Invested</span>
            <span className="w-36 text-center">Liquidation Tier</span>
          </div>
        </div>
        <div className="space-y-3.5 my-auto">
          {classes.map((c) => (
            <div key={c.id} className="p-3.5 rounded-2xl bg-[var(--pres-bg-card)] border border-[var(--pres-border)] flex items-center justify-between font-mono">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--pres-accent)] animate-beacon-pulse" />
                <div>
                  <div className="text-[16px] font-bold text-[var(--pres-text)]">{c.shareholderGroupName}</div>
                  <div className="text-[14px] text-[var(--pres-text-muted)]">{c.shareClassTitle} {c.isVotingStock ? '• Voting Stock' : '• Non-Voting'}</div>
                </div>
              </div>
              <div className="flex items-center gap-12 text-[14px]">
                <div className="w-48 flex items-center gap-3">
                  <div className="h-2.5 flex-1 rounded-full bg-[var(--pres-border)] overflow-hidden">
                    <div style={{ width: `${c.ownershipPercentage}%` }} className="h-full bg-[var(--pres-accent)] rounded-full animate-sparkline-trace" />
                  </div>
                  <span className="font-bold text-[16px] text-[var(--pres-accent)] w-14 text-right">{c.ownershipPercentage}%</span>
                </div>
                <span className="w-28 text-right font-bold text-[var(--pres-text)]">{(c.totalSharesCount / 1000000).toFixed(2)}M</span>
                <span className="w-28 text-right font-bold text-emerald-600 dark:text-emerald-400">{c.totalCapitalInvestedUsd > 0 ? `$${(c.totalCapitalInvestedUsd / 1000000).toFixed(1)}M` : 'Founders / Pool'}</span>
                <span className="w-36 text-center px-2.5 py-1 rounded-lg bg-[var(--pres-accent)]/10 text-[var(--pres-accent)] font-semibold">{c.hasSeniorityRanking ? `${c.liquidationPreferenceMultiplier}x Senior Preferred` : 'Common Parity'}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-[var(--pres-text-muted)]">
          <span>Pre-Money: <strong className="text-[var(--pres-text)]">${slide?.preMoneyValuationMillionUsd || 480}M USD</strong></span>
          <span>Post-Money: <strong className="text-[var(--pres-text)]">${slide?.postMoneyValuationMillionUsd || 580}M USD</strong></span>
          <span>Liquidation Preference: <strong className="text-emerald-600 dark:text-emerald-400">1.0x Non-Participating Standard</strong></span>
        </div>
      </div>

      <div className="plane-1-raised rounded-2xl p-4 border border-[var(--pres-border)] bg-[var(--pres-bg-card)] z-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-mono text-[16px] text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={18} /> Fully Diluted Capital Structure Verified</div>
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text)]"><ShieldCheck size={18} className="text-[var(--pres-accent)]" /> Liquidation Waterfall Confirmed</div>
          <div className="flex items-center gap-2 font-mono text-[16px] text-[var(--pres-text-muted)]"><DollarSign size={18} /> ESOP Option Pool Reserved (12.8%)</div>
        </div>
        <div className="font-mono text-[14px] text-[var(--pres-text-muted)] border-l border-[var(--pres-border)] pl-6">
          Legal Signoff: <span className="font-bold text-[var(--pres-text)]">Jonathan Sterling, General Counsel</span>
        </div>
      </div>
    </div>
  );
};
