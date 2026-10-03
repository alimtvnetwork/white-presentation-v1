import React, { useState } from 'react';
import { TalentPyramidSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';

export const TalentPyramidSlide: React.FC<{ slide: TalentPyramidSlideData }> = ({ slide }) => {
  const { applyEdit, activeStep, jumpToStep } = useDeckStore();
  const { isEditMode } = useEditStore();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const tiers = slide.tiers || [];
  const activeIdx = hoveredIdx ?? Math.min(tiers.length - 1, Math.max(0, activeStep));
  const activeTier = tiers[activeIdx] || tiers[0] || { label: '', filterRatio: '', description: '', subtitle: '' };

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between">
      <div className="z-10">
        <div className="flex items-center gap-4 mb-3">
          <span className="px-5 py-2 rounded-full text-base font-mono font-bold tracking-[0.2em] uppercase bg-violet-100 text-violet-900 border border-violet-300 dark:bg-violet-900/50 dark:text-violet-200 dark:border-violet-600 shadow-sm">
            {slide.kicker || 'HUMAN CAPITAL ARCHITECTURE'}
          </span>
          <span className="font-mono text-base font-semibold text-slate-700 dark:text-slate-300 tracking-wide">• Selectivity Pyramid</span>
        </div>
        <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="font-ubuntu text-[56px] font-black tracking-tight leading-none" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
          {slide.title || 'Engineering Talent Pyramid & Quality Ratios'}
        </h1>
      </div>

      <div className="grid grid-cols-[540px_minmax(0,1fr)] gap-14 my-auto z-10 items-center">
        <div className="flex flex-col items-center gap-3.5">
          {tiers.map((t, idx) => {
            const isCurrent = idx === activeIdx;
            const widthPct = 48 + idx * 13;
            return (
              <div
                key={t.id || idx}
                onClick={() => jumpToStep(idx)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ width: `${widthPct}%`, backgroundColor: isCurrent ? 'var(--pres-accent)' : 'rgba(124, 58, 237, 0.22)' }}
                className={`h-[68px] rounded-2xl flex items-center justify-between px-6 text-white font-ubuntu font-bold shadow-lg cursor-pointer transition-all duration-300 ${isCurrent ? 'scale-105 ring-4 ring-violet-400/40 shadow-xl' : 'hover:scale-[1.02] hover:bg-violet-600/40 opacity-85'}`}
              >
                <span className="font-mono text-sm tracking-wider">T{t.tierNumber || idx + 1}</span>
                <span className="text-base truncate mx-2">{t.label}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold">{t.filterRatio}</span>
                  {isCurrent && <ArrowRight size={18} className="animate-pulse" />}
                </div>
              </div>
            );
          })}
        </div>

        <div key={activeIdx} style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }} className="p-12 rounded-3xl border shadow-2xl backdrop-blur-md flex flex-col justify-between min-h-[460px] animate__animated animate__fadeIn">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-sm font-bold tracking-[0.2em] text-violet-700 dark:text-violet-300 uppercase">
                TIER 0{activeTier.tierNumber || activeIdx + 1} • DETAILED SPECIFICATION
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-mono font-bold bg-violet-500/15 text-violet-600 dark:text-violet-300 border border-violet-500/30">
                {activeTier.filterRatio}
              </span>
            </div>
            <h2 style={{ color: 'var(--pres-text)' }} className="font-ubuntu text-[40px] font-black tracking-tight leading-tight mb-2">{activeTier.label}</h2>
            <div className="font-poppins text-xl font-semibold text-slate-700 dark:text-slate-300 mb-5">{activeTier.subtitle || 'Rigorous Technical & Architectural Gate'}</div>
            <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-lg leading-relaxed max-w-2xl">{activeTier.description}</p>
          </div>
          <div className="mt-8 pt-4 border-t border-slate-700/20 font-mono text-sm text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
            <span className="flex items-center gap-2 font-bold"><ShieldCheck size={18} /> Verified Competency Standard</span>
            <span className="opacity-70 font-mono text-xs">Hover or click tiers to inspect details</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-sm" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-2 text-violet-700 dark:text-violet-300 font-bold">
          <Award size={16} /> Attrition Rate: {slide.attritionRate || '< 2.4% Annual System Turnover'}
        </span>
        <span className="opacity-75">Top 1% Global Engineering Guild • ISO 9001 Alignment</span>
      </div>
    </div>
  );
};
