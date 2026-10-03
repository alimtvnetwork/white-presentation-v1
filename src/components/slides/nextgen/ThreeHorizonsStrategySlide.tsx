import React, { useState } from 'react';
import type { ThreeHorizonsStrategySlideData } from '../../../types/nextGenArchetypes';
import { createThreeHorizonsStrategySlide } from '../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { HorizonColumnCard } from './HorizonColumnCard';
import { HorizonPortfolioSummaryStrip } from './HorizonPortfolioSummaryStrip';
import { Compass, Award, BarChart3 } from 'lucide-react';

interface ThreeHorizonsProps {
  slide?: ThreeHorizonsStrategySlideData;
  data?: ThreeHorizonsStrategySlideData;
}

export const ThreeHorizonsStrategySlide: React.FC<ThreeHorizonsProps> = ({ slide, data: pData }) => {
  const fallback = createThreeHorizonsStrategySlide('default-three-horizons');
  const data = slide || pData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const horizons = data.horizons?.length ? data.horizons : fallback.horizons;
  const portfolioSummary = data.portfolioSummary || fallback.portfolioSummary;
  const signoff = data.executiveSignoff || fallback.executiveSignoff;
  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), horizons.length - 1);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Compass size={15} className="text-violet-500" />
              {data.kicker || 'STRATEGIC PORTFOLIO FRAMEWORK'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-violet-500/10 text-slate-900 dark:text-violet-300 border border-violet-500/20">
              McKinsey 70:20:10 Capital Allocation Standard
            </span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data.title || 'Three Horizons Strategic Growth & Capital Allocation Matrix'}
          </h1>
          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data.subtitle || 'Sovereign capital orchestration balancing Horizon 1 core defense, Horizon 2 scaling, and Horizon 3 frontier bets.'}
          </p>
        </div>
        <HorizonPortfolioSummaryStrip portfolioSummary={portfolioSummary} />
      </div>

      <div className="grid grid-cols-3 gap-6 z-10 my-auto h-[630px] items-stretch">
        {horizons.map((h, idx) => (
          <HorizonColumnCard key={h.id || idx} horizon={h} index={idx} currentStep={currentStep} onHover={setHoveredStep} />
        ))}
      </div>

      <div className="plane-1-raised p-3.5 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold">
            <Award size={16} className="text-emerald-500" /> Executive Strategy Governance Signed
          </span>
          <span className="text-slate-500">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>
            Chief Software Engineer: <strong className="text-slate-800 dark:text-slate-200">{signoff.chiefSoftwareEngineer || 'Alim Ul Karim, Chief Software Engineer'}</strong>
          </span>
          <span className="text-slate-500">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Cycle: {signoff.reviewQuarter}</span>
        </div>
        <div className="flex items-center gap-5 text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-800 dark:text-sky-300">
            <BarChart3 size={14} /> Active Horizon Focus: H{horizons[currentStep]?.horizonNumber || 1}
          </span>
          <span>Step {currentStep + 1} of {horizons.length}</span>
        </div>
      </div>
    </div>
  );
};
