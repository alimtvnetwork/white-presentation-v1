import React from 'react';
import { Target, UserCheck, TrendingUp } from 'lucide-react';
import type { OkrCascadeAlignmentSlideData } from '../../../types/globalPptArchetypes';

interface OkrHeaderProps {
  slide: OkrCascadeAlignmentSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const OkrHeader: React.FC<OkrHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => (
  <div className="z-10 flex items-start justify-between">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
          <Target size={13} /> {slide.kicker || 'STRATEGIC EXECUTION'}
        </span>
        <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
          Cycle: {slide.planningCycle || '2026 Annual Planning'}
        </span>
        <span className="font-mono text-xs text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1">
          <UserCheck size={11} className="text-cyan-400" />
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
        {slide.title || 'Corporate OKR Cascade & Strategic Alignment'}
      </h1>
      <p style={{ color: 'var(--pres-subtext, var(--pres-text-muted))' }} className="font-poppins text-base max-w-4xl leading-relaxed">
        {slide.subtitle || 'Hierarchical Goal Distribution from Executive Vision to Engineering Delivery'}
      </p>
    </div>

    <div className="plane-1-raised px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center gap-3 font-mono">
      <TrendingUp size={18} className="text-emerald-400" />
      <div>
        <div className="text-[11px] text-slate-400 uppercase tracking-wider">Overall Progress</div>
        <div className="text-xl font-bold text-emerald-400">{slide.globalProgressPercent || 91.4}%</div>
      </div>
    </div>
  </div>
);
