import React from 'react';
import type { KeyMetricScorecardSlideData } from '../../types/enterpriseArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Award, TrendingUp } from 'lucide-react';

export const KeyMetricScorecardSlide: React.FC<{ slide: KeyMetricScorecardSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const scorecards = slide.scorecards || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/30">
            {slide.kicker || 'EXECUTIVE KPI SCORECARD'}
          </span>
          {slide.overallGrade && (
            <span className="font-mono text-xs text-blue-300 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 flex items-center gap-1.5">
              <Award size={12} /> Composite Grade: {slide.overallGrade}
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
          {slide.title || 'Executive Key Metric Scorecard'}
        </h1>
      </div>

      <div className="z-10 grid grid-cols-4 gap-6 my-auto">
        {scorecards.map((item, idx) => {
          const isPast = idx < activeStep;
          const isActive = idx === activeStep;
          const cardStyle: React.CSSProperties = isActive
            ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
            : isPast
            ? { opacity: 0.75, transform: 'scale(1.0)' }
            : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

          return (
            <div
              key={item.id || idx}
              style={cardStyle}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-[360px] ${
                isActive
                  ? 'bg-slate-900/90 border-blue-500 ring-2 ring-blue-500/50 shadow-[0_0_24px_rgba(59,130,246,0.35)]'
                  : isPast
                  ? 'bg-slate-900/60 border-blue-500/30'
                  : 'bg-slate-900/40 border-slate-800'
              }`}
            >
              <div>
                <span className="font-mono text-xs text-blue-400 uppercase tracking-wider block mb-2">
                  {item.metricTitle}
                </span>
                <div className="font-ubuntu text-4xl font-black text-slate-100 mb-1">
                  {item.currentValue}
                </div>
                <div className="font-mono text-xs text-slate-400">
                  Target: {item.targetValue}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <TrendingUp size={12} /> {item.varianceDelta}
                </span>
                <span className="font-mono text-[10px] text-slate-500 uppercase">
                  {isActive ? '● IN FOCUS' : isPast ? '✓ VERIFIED' : '○ PENDING'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-blue-400 font-bold">
          <Award size={14} /> Kinetic Metric Step Sequencing Active (Step {Math.min(scorecards.length, activeStep + 1)} of {scorecards.length})
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Deterministic Corporate Governance</span>
      </div>
    </div>
  );
};
