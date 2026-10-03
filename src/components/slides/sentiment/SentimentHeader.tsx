import React from 'react';
import { HeartHandshake, UserCheck, Users, Smile } from 'lucide-react';
import type { CustomerSentimentRadarSlideData } from '../../../types/globalPptArchetypes';

interface SentimentHeaderProps {
  slide: CustomerSentimentRadarSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const SentimentHeader: React.FC<SentimentHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1.5">
          <HeartHandshake size={13} /> {slide.kicker || 'CUSTOMER TELEMETRY'}
        </span>
        <span className="font-mono text-xs text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1">
          <Users size={11} className="text-cyan-400" />
          <span>Survey Sample: {slide.surveySampleSize || 1420} Enterprise Accounts</span>
        </span>
        <span className="font-mono text-xs text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1">
          <UserCheck size={11} className="text-amber-600 dark:text-amber-400" />
          <span>Sponsor: {slide.executiveSponsor || 'Alim Ul Karim'}</span>
          <span className="text-slate-400">({slide.sponsorRole || 'Chief Software Engineer'})</span>
        </span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
      >
        {slide.title || 'Voice of the Customer & Multidimensional Sentiment Radar'}
      </h1>
      <p style={{ color: 'var(--pres-subtext, var(--pres-text-muted))' }} className="font-poppins text-base max-w-4xl leading-relaxed">
        {slide.subtitle || 'Quantitative NPS/CSAT Telemetry & Enterprise Executive Verbatims'}
      </p>
    </div>

    <div className="flex items-center gap-3 font-mono">
      <div className="plane-1-raised px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center gap-3">
        <Smile size={18} className="text-emerald-400" />
        <div>
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Net Promoter</div>
          <div className="text-lg font-bold text-emerald-400">+{slide.netPromoterScore || 74} NPS</div>
        </div>
      </div>
      <div className="plane-1-raised px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center gap-3">
        <div>
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">CSAT Score</div>
          <div className="text-lg font-bold text-cyan-400">{slide.customerSatisfactionScore || 96.2}%</div>
        </div>
      </div>
    </div>
  </div>
);
