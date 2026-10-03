import React from 'react';
import type { EnterpriseCaseStudyHeroSlideData, EnterpriseCaseStudyMetric, ClientExecutiveQuote } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { ShieldCheck, Quote, TrendingUp, AlertTriangle, ArrowRight, Video } from 'lucide-react';

const DEFAULT_METRICS: EnterpriseCaseStudyMetric[] = [
  { metricId: 'latency', metricLabel: 'P99 Latency Drop', metricValue: '84%', improvementDirection: 'reduction', contextNote: '240ms to 38ms global SLA' },
  { metricId: 'availability', metricLabel: 'Uptime SLA', metricValue: '99.999%', improvementDirection: 'increase', contextNote: 'Zero unmanaged downtime across 14 months' },
  { metricId: 'opex', metricLabel: 'Cloud OpEx Saved', metricValue: '$14.2M', improvementDirection: 'reduction', contextNote: 'Annualized infrastructure compute efficiency' },
];

const DEFAULT_QUOTE: ClientExecutiveQuote = {
  quoteText: 'The architectural precision and deterministic fault tolerance engineered into this platform enabled our multi-region core banking infrastructure to survive catastrophic cloud outages seamlessly.',
  executiveName: 'Marcus Vance', executiveTitle: 'Chief Information Officer', companyName: 'Apex Tier-1 Financial', isQuoteAuthorized: true,
};

const Header: React.FC<{ slide: EnterpriseCaseStudyHeroSlideData; isEditMode: boolean; onEdit: (v: string) => void }> = ({ slide, isEditMode, onEdit }) => (
  <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
    <div>
      <span className="kicker-pill-badge mb-2">{slide.kicker || 'OPERATIONAL EVIDENCE & ENTERPRISE CASE STUDY'}</span>
      <h1 className="font-ubuntu text-4xl font-black tracking-tight" style={{ color: 'var(--pres-text)' }} contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => onEdit(e.currentTarget.textContent || '')}>{slide.title || 'Enterprise Transformation Case Study'}</h1>
      <p className="font-poppins text-base mt-1" style={{ color: 'var(--pres-text-muted)' }}>{slide.subtitle || `${slide.clientName || 'Apex Tier-1 Financial'} • ${slide.clientIndustry || 'Global Banking'} • ${slide.deploymentScaleDescription || '120k Pods Planetary Fleet'}`}</p>
    </div>
    <div className="flex items-center gap-3 font-mono text-xs">
      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 font-bold"><ShieldCheck size={14} /> Production Verified</span>
      {slide.hasVideoAssetAvailable && <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-violet-500/40 bg-violet-950/30 text-violet-300 font-bold"><Video size={14} /> Case Video</span>}
    </div>
  </div>
);

const ChallengeSolution: React.FC<{ challenge?: string; solution?: string }> = ({ challenge, solution }) => (
  <div className="flex flex-col gap-5 h-full justify-between">
    <div style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }} className="p-6 rounded-2xl border shadow-xl flex-1">
      <span className="flex items-center gap-2 font-mono text-xs text-rose-400 uppercase font-bold tracking-wider mb-2"><AlertTriangle size={14} /> Legacy Challenge</span>
      <p className="font-poppins text-sm text-slate-300 leading-relaxed">{challenge || 'Fragile monolithic batch processing bottlenecks failing peak liquidity windows and creating SLA penalties.'}</p>
    </div>
    <div style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-accent)' }} className="p-6 rounded-2xl border shadow-xl flex-1 ring-1 ring-violet-500/40">
      <span className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase font-bold tracking-wider mb-2"><ArrowRight size={14} /> Architectural Intervention</span>
      <p className="font-poppins text-sm text-slate-200 leading-relaxed">{solution || 'Re-architected to an event-sourced distributed streaming mesh with deterministic state snapshots and sub-second failover.'}</p>
    </div>
  </div>
);

const MetricsAndQuote: React.FC<{ metrics: EnterpriseCaseStudyMetric[]; quote: ClientExecutiveQuote }> = ({ metrics, quote }) => (
  <div className="flex flex-col gap-5 h-full justify-between">
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((m) => (
        <div key={m.metricId} style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }} className="p-4 rounded-xl border shadow-md">
          <div className="font-mono text-2xl font-black text-emerald-400 flex items-center justify-between">{m.metricValue}<TrendingUp size={16} className="text-emerald-400" /></div>
          <div className="font-mono text-xs font-bold text-white mt-1">{m.metricLabel}</div>
          <div className="font-poppins text-[11px] text-slate-400 mt-1 leading-tight">{m.contextNote}</div>
        </div>
      ))}
    </div>
    <div style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }} className="p-6 rounded-2xl border shadow-xl flex-1 flex flex-col justify-between">
      <Quote size={20} className="text-violet-400 mb-2" />
      <p className="font-poppins text-sm italic text-slate-200 leading-relaxed">{quote.quoteText}</p>
      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
        <span className="text-white font-bold">{quote.executiveName}, <span className="text-slate-400 font-normal">{quote.executiveTitle}</span></span>
        <span className="text-cyan-400">{quote.companyName}</span>
      </div>
    </div>
  </div>
);

export const EnterpriseCaseStudyHeroSlide: React.FC<{ slide: EnterpriseCaseStudyHeroSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const metrics = slide.keyMetrics || DEFAULT_METRICS;
  const quote = slide.executiveQuote || DEFAULT_QUOTE;
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;
  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <Header slide={slide} isEditMode={isEditMode} onEdit={(val) => applyEdit((s) => ({ ...s, title: val }))} />
      <div className="grid grid-cols-2 gap-8 my-auto z-10 h-[500px]"><ChallengeSolution challenge={slide.legacyChallengeProse} solution={slide.architecturalInterventionProse} /><MetricsAndQuote metrics={metrics} quote={quote} /></div>
      <div className="z-10 flex items-center justify-between font-mono text-xs border-t border-slate-800/80 pt-3" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-1.5 text-emerald-400 font-bold"><ShieldCheck size={14} /> {slide.hasVerifiedOutcome ? 'Audited Production SLA' : 'Verified Result'} • Authorized Testimony</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
