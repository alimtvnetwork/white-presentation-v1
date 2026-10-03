import React from 'react';
import { DollarSign, UserCheck, Calendar } from 'lucide-react';
import type { CloudCostFinopsOptimizerSlideData } from '../../../types/globalPptArchetypes';

interface FinopsHeaderProps {
  slide: CloudCostFinopsOptimizerSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const FinopsHeader: React.FC<FinopsHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => (
  <div className="z-10">
    <div className="flex items-center gap-3 mb-2">
      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
        <DollarSign size={13} /> {slide.kicker || 'CLOUD ECONOMICS'}
      </span>
      <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
        <Calendar size={11} /> {slide.reportingQuarter || 'Q4-2026'}
      </span>
      <span className="font-mono text-xs text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700 flex items-center gap-1">
        <UserCheck size={11} className="text-emerald-400" />
        <span>FinOps Lead: {slide.finopsLead || 'Alim Ul Karim'}</span>
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
      {slide.title || 'Cloud FinOps & Infrastructure Unit Economics'}
    </h1>
    <p style={{ color: 'var(--pres-subtext, var(--pres-text-muted))' }} className="font-poppins text-base max-w-4xl leading-relaxed">
      {slide.subtitle || 'Multi-Cloud Spend Rationalization, CUD Coverage & Automated Waste Elimination'}
    </p>
  </div>
);
