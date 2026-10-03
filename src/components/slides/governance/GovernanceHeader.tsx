import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import type { ExecutiveGovernanceMatrixSlideData } from '../../../types/globalPptArchetypes';

interface GovernanceHeaderProps {
  slide: ExecutiveGovernanceMatrixSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const GovernanceHeader: React.FC<GovernanceHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => (
  <div className="z-10">
    <div className="flex items-center gap-3 mb-2">
      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30 flex items-center gap-1.5">
        <ShieldCheck size={13} /> {slide.kicker || 'ENTERPRISE GOVERNANCE'}
      </span>
      <span className="font-mono text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 flex items-center gap-1">
        <Award size={12} /> {slide.boardName || 'Global Executive Directorate'}
      </span>
      <span className="font-mono text-xs text-slate-300 bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700">
        {slide.fiscalYear || 'FY2026-Q4'}
      </span>
    </div>
    <h1
      style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
      className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
      contentEditable={isEditMode}
      suppressContentEditableWarning
      onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
    >
      {slide.title || 'Corporate Governance & Board Committee Matrix'}
    </h1>
    <p style={{ color: 'var(--pres-subtext, var(--pres-text-muted))' }} className="font-poppins text-base max-w-4xl leading-relaxed">
      {slide.subtitle || 'Institutional Oversight, Quorum Compliance & Charter Resolutions'}
    </p>
  </div>
);
