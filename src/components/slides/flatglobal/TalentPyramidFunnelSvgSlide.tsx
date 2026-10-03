import React, { useState } from 'react';
import type { TalentPyramidFunnelSvgSlideData } from '../../../types/flatGlobalSuiteTypes';
import { useDeckStore } from '../../../stores/deckStore';
import { PyramidTierBand } from './PyramidTierBand';
import { Award, UserCheck, CheckCircle } from 'lucide-react';

const PYRAMID_SLICES = [
  { points: '180,30 260,30 290,110 150,110', label: 'Tier 5: Executive Apex' },
  { points: '146,118 294,118 324,198 116,198', label: 'Tier 4: Bar Raiser Defense' },
  { points: '112,206 328,206 358,286 82,286', label: 'Tier 3: Systems Craftsmanship' },
  { points: '78,294 362,294 392,374 48,374', label: 'Tier 2: Distributed Architecture' },
  { points: '44,382 396,382 426,462 14,462', label: 'Tier 1: Algorithmic Pre-Screen' },
];

export const TalentPyramidFunnelSvgSlide: React.FC<{
  slide: TalentPyramidFunnelSvgSlideData;
}> = ({ slide }) => {
  const storeStep = useDeckStore((s) => s.activeStep);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const tiers = slide.funnelTiers || [];
  const currentStep = selectedIdx !== null ? selectedIdx : Math.min(storeStep, Math.max(0, tiers.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <span className="kicker-pill-badge mb-1">{slide.kicker || 'ORGANIZATIONAL CRAFTSMANSHIP'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">
            {slide.title || 'Engineering Talent Pyramid & Extreme Vetting Funnel'}
          </h1>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-slate-300">
          <span className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-bold flex items-center gap-1.5">
            <Award size={14} /> Top {slide.acceptanceRatePercentage || 0.41}% Selected
          </span>
          <span className="text-slate-400 flex items-center gap-1.5">
            <UserCheck size={14} className="text-cyan-400" /> Lead: {slide.chiefSoftwareEngineer || 'Alim Ul Karim'}
          </span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-center">
        <div className="col-span-5 flex flex-col items-center justify-center plane-1-raised rounded-3xl p-6 border border-slate-800 bg-slate-950/70 h-[640px]">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
            5-Tier Precision Filtration Funnel
          </span>
          <svg viewBox="0 0 440 480" className="w-[410px] h-[450px] overflow-visible">
            <defs>
              <filter id="pyramidShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.5" />
              </filter>
            </defs>
            {PYRAMID_SLICES.map((slice, idx) => {
              const invertedTierIdx = PYRAMID_SLICES.length - 1 - idx;
              const isHighlight = currentStep === invertedTierIdx;
              return (
                <polygon
                  key={idx}
                  points={slice.points}
                  filter="url(#pyramidShadow)"
                  onClick={() => setSelectedIdx(invertedTierIdx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    isHighlight
                      ? 'fill-indigo-600 stroke-indigo-300 stroke-2 opacity-100'
                      : 'fill-slate-900/90 stroke-slate-700/60 stroke-1 hover:fill-slate-800 opacity-80'
                  }`}
                />
              );
            })}
          </svg>
        </div>

        <div className="col-span-7 flex flex-col gap-3.5 h-[640px] justify-center">
          {tiers.map((tier, idx) => (
            <PyramidTierBand
              key={tier.id || idx}
              tier={tier}
              index={idx}
              isActive={currentStep === idx}
              onSelect={(i) => setSelectedIdx(i)}
            />
          ))}
        </div>
      </div>

      <div className="z-10 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle size={14} /> Total evaluated: {slide.totalCandidatesEvaluated || '14,200'} → Hired: {slide.finalHiredCount || '58'}
        </span>
        <span>Extreme vetting gate active • Sub-1% acceptance standard</span>
      </div>
    </div>
  );
};
