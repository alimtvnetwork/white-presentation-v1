import React from 'react';
import { Swords, UserCheck, Trophy } from 'lucide-react';
import type { CompetitiveBattlecardSlideData } from '../../../types/globalPptArchetypes';

interface BattlecardHeaderProps {
  slide: CompetitiveBattlecardSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const BattlecardHeader: React.FC<BattlecardHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center gap-1.5">
          <Swords size={13} /> {slide.kicker || 'MARKET SUPERIORITY'}
        </span>
        <span className="font-mono text-xs text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
          Segment: {slide.targetMarketSegment || 'Enterprise Telemetry'}
        </span>
        <span className="font-mono text-xs text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1">
          <UserCheck size={11} className="text-indigo-400" />
          <span>Strategy Lead: {slide.commercialLead || 'Alim Ul Karim'}</span>
          <span className="text-slate-400">({slide.leadRole || 'Chief Software Engineer'})</span>
        </span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
      >
        {slide.title || 'Competitive Battlecard: Enterprise Advantage'}
      </h1>
      <p style={{ color: 'var(--pres-subtext, var(--pres-text-muted))' }} className="font-poppins text-base max-w-4xl leading-relaxed">
        {slide.subtitle || 'Direct Architectural Comparison, Moat Verification & Objection Handling'}
      </p>
    </div>

    <div className="plane-1-raised px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center gap-3 font-mono">
      <Trophy size={20} className="text-amber-600 dark:text-amber-400" />
      <div>
        <div className="text-[10px] text-slate-400 uppercase tracking-wider">Enterprise Win Rate</div>
        <div className="text-xl font-bold text-amber-600 dark:text-amber-400">{slide.winRatePercent || 76.4}%</div>
      </div>
    </div>
  </div>
);
