import React from 'react';
import type { InvestorCapTableWaterfallSlideData } from '../../types/globalPptArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { CapTableOverviewStrip } from './captable/CapTableOverviewStrip';
import { ShareholderClassesGrid } from './captable/ShareholderClassesGrid';
import { LiquidationWaterfallChart } from './captable/LiquidationWaterfallChart';
import { DollarSign, ShieldCheck, Landmark } from 'lucide-react';

export const InvestorCapTableWaterfallSlide: React.FC<{ slide: InvestorCapTableWaterfallSlideData }> = ({
  slide,
}) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const shareClasses = slide.shareClasses || [];
  const tiers = slide.waterfallTiers || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_80px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <DollarSign size={12} /> {slide.kicker || 'VENTURE FINANCE'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            Sovereign Equity Waterfall
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Capitalization Table & Liquidation Waterfall'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Institutional Equity Tranches, Seniority Rights & Multi-Scenario Proceeds Distribution'}
        </p>
      </div>

      <div className="z-10 flex flex-col gap-5 my-auto">
        <CapTableOverviewStrip
          currentValuationUsd={slide.currentValuationUsd ?? 250000000}
          totalSharesOutstanding={slide.totalSharesOutstanding ?? 50000000}
          unallocatedOptionPoolPercent={slide.unallocatedOptionPoolPercent ?? 12.5}
          chiefArchitect={slide.chiefArchitect || 'Alim Ul Karim'}
          architectRole={slide.architectRole || 'Chief Software Engineer'}
        />

        <div className="grid grid-cols-12 gap-6 items-stretch h-[500px]">
          <div className="col-span-6 h-full">
            <ShareholderClassesGrid shareClasses={shareClasses} />
          </div>
          <div className="col-span-6 h-full">
            <LiquidationWaterfallChart waterfallTiers={tiers} />
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <ShieldCheck size={14} />
          Fully Diluted Pro-Rata Model | Preferred Liquidation Seniority Verified
        </span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <Landmark size={12} />
          Architect: {slide.chiefArchitect || 'Alim Ul Karim'} ({slide.architectRole || 'Chief Software Engineer'})
        </span>
      </div>
    </div>
  );
};
