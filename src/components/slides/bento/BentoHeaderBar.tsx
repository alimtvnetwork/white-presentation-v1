import React from 'react';
import type { BentoKpiMosaicSlideData } from '../../../types/kineticSuiteArchetypes';
import { LayoutGrid, Calendar } from 'lucide-react';

export interface BentoHeaderBarProps {
  slide: BentoKpiMosaicSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const BentoHeaderBar: React.FC<BentoHeaderBarProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  return (
    <div className="z-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
          <LayoutGrid size={12} /> {slide.kicker || 'EXECUTIVE DASHBOARD'}
        </span>
        <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
          <Calendar size={11} /> {slide.reportingQuarter || 'Q3 2026'}
        </span>
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
      >
        {slide.title || 'Enterprise Platform Performance Mosaic'}
      </h1>
      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-base max-w-4xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateSubtitle(e.currentTarget.textContent || '')}
      >
        {slide.subtitle || 'Asymmetric bento grid tracking hyper-growth ARR, retention, and infrastructure health.'}
      </p>
    </div>
  );
};
