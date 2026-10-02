import React from 'react';
import { GrowthEngineSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export const GrowthEngineSlide: React.FC<{ slide: GrowthEngineSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const channels = slide.channels || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {slide.kicker || 'HIGH-LEVERAGE GROWTH'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• 4 Sovereign Vectors</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Compounding Growth Engine Architecture'}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6 z-10 my-auto">
        {channels.map((ch, idx) => {
          const isPositive = Boolean(ch.isPositiveGrowth);
          return (
            <div
              key={ch.id || idx}
              style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
              className={`p-7 rounded-3xl border shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/40 slide-up-anim stagger-${Math.min(4, idx + 1)}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">{ch.tag || `VECTOR 0${idx + 1}`}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-mono font-bold border flex items-center gap-1 ${isPositive ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'}`}>
                    <ArrowUpRight size={12} /> {ch.growthDelta}
                  </span>
                </div>
                <h3 style={{ color: 'var(--pres-text)' }} className="font-ubuntu text-xl font-bold mb-1">{ch.name}</h3>
                <div className="font-ubuntu text-4xl font-black text-emerald-400 my-3">{ch.headlineMetric}</div>
                <div style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs mb-5 uppercase tracking-wide">{ch.metricLabel}</div>
                <div className="space-y-2.5 pt-4 border-t border-slate-700/30">
                  {(ch.tactics || []).map((tactic, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-sm" style={{ color: 'var(--pres-text-muted)' }}>
                      <span className="text-emerald-400 text-xs mt-1">▸</span>
                      <span className="font-poppins text-xs leading-relaxed">{tactic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <TrendingUp size={14} /> {slide.summaryNote || 'Sovereign Multichannel Flywheel Engine'}
        </span>
        <span className="opacity-70">Deterministic Live DOM Vector Architecture</span>
      </div>
    </div>
  );
};
