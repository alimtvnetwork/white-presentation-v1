import React from 'react';
import type { KeyMetricScorecardSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ScorecardMetricCard } from './metrics/ScorecardMetricCard';
import { Award, BarChart3, ShieldCheck } from 'lucide-react';

export const KeyMetricScorecardSlide: React.FC<{ slide: KeyMetricScorecardSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const scorecards = slide.scorecards || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {slide.kicker || 'EXECUTIVE SCORECARD'}
          </span>
          {slide.overallGrade && (
            <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
              <Award size={12} /> {slide.overallGrade}
            </span>
          )}
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Key Performance Indicators & Velocity Benchmarks'}
        </h1>
        {slide.subtitle && (
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-sm mt-2">
            {slide.subtitle}
          </p>
        )}
      </div>

      <div className="z-10 my-auto grid grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
        {scorecards.map((item) => (
          <ScorecardMetricCard key={item.id} item={item} />
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <ShieldCheck size={14} /> Trailing 12-Month Audited Telemetry with 99.999% SLA Compliance
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="flex items-center gap-1.5">
          <BarChart3 size={12} /> Executive KPI Scorecard
        </span>
      </div>
    </div>
  );
};
