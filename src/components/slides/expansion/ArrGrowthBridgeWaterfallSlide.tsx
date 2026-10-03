import React from 'react';
import type { ArrGrowthBridgeWaterfallSlideData, WaterfallSegment } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { TrendingUp, ShieldCheck, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const DEFAULT_SEGMENTS: WaterfallSegment[] = [
  { segmentId: 'start', segmentLabel: 'Starting ARR', segmentType: 'starting', amountValue: 50, amountFormatted: '$50.0M', percentageOfStartingArr: 100, isPositiveContribution: true, hasAuditedMetric: true, isProjected: false },
  { segmentId: 'exp', segmentLabel: 'Enterprise Expansion', segmentType: 'positive-expansion', amountValue: 18, amountFormatted: '+$18.0M', percentageOfStartingArr: 36, isPositiveContribution: true, hasAuditedMetric: true, isProjected: false },
  { segmentId: 'churn', segmentLabel: 'Contraction & Churn', segmentType: 'negative-contraction', amountValue: -4, amountFormatted: '-$4.0M', percentageOfStartingArr: -8, isPositiveContribution: false, hasAuditedMetric: true, isProjected: false },
  { segmentId: 'end', segmentLabel: 'Ending ARR', segmentType: 'ending', amountValue: 64, amountFormatted: '$64.0M', percentageOfStartingArr: 128, isPositiveContribution: true, hasAuditedMetric: true, isProjected: false },
];

const Header: React.FC<{ slide: ArrGrowthBridgeWaterfallSlideData; isEditMode: boolean; onEdit: (v: string) => void }> = ({ slide, isEditMode, onEdit }) => (
  <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
    <div>
      <span className="kicker-pill-badge mb-2">{slide.kicker || 'COMMERCIAL GTM & UNIT ECONOMICS'}</span>
      <h1 className="font-ubuntu text-4xl font-black tracking-tight" style={{ color: 'var(--pres-text)' }} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => onEdit(e.currentTarget.textContent || '')}>{slide.title || 'ARR Growth Bridge & Expansion Waterfall'}</h1>
      <p className="font-poppins text-base mt-1" style={{ color: 'var(--pres-text-muted)' }}>{slide.subtitle || `Fiscal Bridge: ${slide.fiscalPeriod || 'FY2026'} | Net Revenue Retention: ${slide.netRevenueRetentionPct || 138}%`}</p>
    </div>
    <div className="flex items-center gap-3 font-mono text-xs">
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-emerald-400 font-bold"><DollarSign size={14} /> Start: {slide.startingArrFormatted || '$50.0M'}</span>
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-cyan-400 font-bold"><TrendingUp size={14} /> End: {slide.endingArrFormatted || '$64.0M'}</span>
    </div>
  </div>
);

const SegmentCard: React.FC<{ seg: WaterfallSegment }> = ({ seg }) => (
  <div style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }} className={`p-6 rounded-2xl border flex flex-col justify-between shadow-xl ${seg.segmentType === 'starting' || seg.segmentType === 'ending' ? 'ring-1 ring-cyan-500/30' : ''}`}>
    <div className="flex items-center justify-between font-mono text-xs text-slate-400">
      <span className="uppercase tracking-wider font-semibold">{seg.segmentLabel}</span>
      {seg.isPositiveContribution ? <ArrowUpRight size={16} className="text-emerald-400" /> : <ArrowDownRight size={16} className="text-rose-400" />}
    </div>
    <div className="my-4">
      <span className={`font-mono text-3xl font-black ${seg.segmentType === 'starting' || seg.segmentType === 'ending' ? 'text-cyan-400' : seg.isPositiveContribution ? 'text-emerald-400' : 'text-rose-400'}`}>{seg.amountFormatted}</span>
      <div className="font-mono text-xs mt-1 text-slate-400">{seg.percentageOfStartingArr > 0 ? `+${seg.percentageOfStartingArr}%` : `${seg.percentageOfStartingArr}%`} of baseline</div>
    </div>
    <div className="pt-3 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px] text-slate-400">
      <span>{seg.isProjected ? 'Projected' : 'Audited Actual'}</span>
      {seg.hasAuditedMetric && <span className="text-emerald-400 flex items-center gap-1"><ShieldCheck size={12} /> Verified</span>}
    </div>
  </div>
);

const Footer: React.FC<{ lead: string; hasAudit: boolean; nrr: number }> = ({ lead, hasAudit, nrr }) => (
  <div className="z-10 flex items-center justify-between font-mono text-xs border-t border-slate-800/80 pt-3" style={{ color: 'var(--pres-text-muted)' }}>
    <span className="flex items-center gap-2 text-emerald-400 font-bold"><ShieldCheck size={14} /> {hasAudit ? 'Audited GAAP/IFRS Revenue Ledger' : 'Revenue Model'} • NRR {nrr}%</span>
    <span className="text-cyan-400 font-semibold">{lead}</span>
  </div>
);

export const ArrGrowthBridgeWaterfallSlide: React.FC<{ slide: ArrGrowthBridgeWaterfallSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const segments = slide.waterfallSegments || DEFAULT_SEGMENTS;
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;
  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <Header slide={slide} isEditMode={isEditMode} onEdit={(val) => applyEdit((s) => ({ ...s, title: val }))} />
      <div className="grid grid-cols-4 gap-6 my-auto z-10">{segments.map((seg) => <SegmentCard key={seg.segmentId} seg={seg} />)}</div>
      <Footer lead={lead} hasAudit={Boolean(slide.hasAuditedFinancials)} nrr={slide.netRevenueRetentionPct || 138} />
    </div>
  );
};
