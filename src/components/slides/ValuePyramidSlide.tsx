import React, { useState } from 'react';
import type { ValuePyramidSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const TIER_WIDTHS: Record<number, string> = { 4: 'w-[520px]', 3: 'w-[680px]', 2: 'w-[840px]', 1: 'w-[1000px]' };

export const ValuePyramidSlide: React.FC<{ slide: ValuePyramidSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const tiers = slide.tiers || [];
  const [activeLevel, setActiveLevel] = useState<number>(() => slide.activeTierLevel || 4);
  const activeTier = tiers.find((t) => t.tierLevel === activeLevel) || tiers[0];
  const sortedTiers = [...tiers].sort((a, b) => b.tierLevel - a.tierLevel);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between">
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">{slide.kicker || 'CAPABILITY MATURITY'}</span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• 4-Tier Value Ladder</span>
        </div>
        <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="font-ubuntu text-[38px] font-black tracking-tight leading-none" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
          {slide.title || 'The Sovereign Value Architecture Pyramid'}
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto items-center">
        <div className="col-span-7 flex flex-col items-center gap-3">
          {sortedTiers.map((tier) => {
            const isActive = activeLevel === tier.tierLevel;
            const widthClass = TIER_WIDTHS[tier.tierLevel] || 'w-[800px]';
            return (
              <div key={tier.id} onClick={() => setActiveLevel(tier.tierLevel)} className={`plane-2-elevated ${widthClass} p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${isActive ? 'border-violet-500 bg-violet-500/20 shadow-xl scale-[1.02]' : 'bg-slate-900/50 border-slate-800'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center ${isActive ? 'bg-violet-500 text-white' : 'bg-slate-800 text-slate-400'}`}>0{tier.tierLevel}</div>
                  <div>
                    <h3 className="font-ubuntu text-base font-bold text-slate-100">{tier.tierName}</h3>
                    <p className="font-poppins text-[11px] text-slate-400">{tier.tagline}</p>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-violet-300">{tier.businessImpactMetric}</span>
              </div>
            );
          })}
        </div>

        <div className="col-span-5 plane-1-raised p-6 rounded-3xl border border-violet-500/30 flex flex-col justify-between min-h-[440px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold uppercase text-violet-400">Level 0{activeTier?.tierLevel}: Narrative</span>
              <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30"><ArrowUpRight size={12} /> {activeTier?.businessImpactMetric}</span>
            </div>
            <h2 className="font-ubuntu text-2xl font-bold text-slate-100 mb-1">{activeTier?.tierName}</h2>
            <p className="font-poppins text-xs text-slate-300 mb-4">{activeTier?.tagline}</p>
            <div className="space-y-2 pt-3 border-t border-slate-800">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase">Core Capabilities:</div>
              {(activeTier?.capabilities || []).map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-poppins text-slate-200">
                  <CheckCircle2 size={13} className="text-violet-400 mt-0.5 shrink-0" /> <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>Progressive Maturity Model</span>
            <span className="text-violet-300">Compound Strategic Impact</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <span className="flex items-center gap-2 text-violet-400 font-bold"><Layers size={14} /> Stepped Maturity Progression</span>
        <span>{slide.pyramidSubtitle || 'Foundational Rigor Compounds Into Market Dominance'}</span>
      </div>
    </div>
  );
};
