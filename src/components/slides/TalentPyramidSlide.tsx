import React from 'react';
import { TalentPyramidSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ShieldCheck, Award } from 'lucide-react';

export const TalentPyramidSlide: React.FC<{ slide: TalentPyramidSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const tiers = slide.tiers || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30">
            {slide.kicker || 'HUMAN CAPITAL ARCHITECTURE'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Selectivity Pyramid</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Engineering Talent Pyramid & Quality Ratios'}
        </h1>
      </div>

      <div className="grid grid-cols-[480px_minmax(0,1fr)] gap-12 my-auto z-10 items-center">
        <div className="flex flex-col items-center gap-2.5">
          {tiers.map((t, idx) => {
            const isApex = Boolean(t.isApex);
            const widthPct = 40 + idx * 15;
            return (
              <div
                key={t.id || idx}
                style={{
                  width: `${widthPct}%`,
                  backgroundColor: isApex ? 'var(--pres-accent)' : 'rgba(124, 58, 237, 0.35)',
                }}
                className="h-[60px] rounded-xl flex items-center justify-between px-5 text-white font-ubuntu font-bold shadow-lg transition-transform hover:scale-105 relative"
              >
                <span className="font-mono text-xs">T{t.tierNumber || idx + 1}</span>
                <span className="text-sm truncate mx-2">{t.label}</span>
                <div className="flex items-center gap-2">
                  {isApex && <span className="px-2 py-0.5 rounded text-[10px] uppercase font-mono font-black bg-amber-400 text-slate-950">APEX</span>}
                  <span className="font-mono text-xs opacity-90">{t.filterRatio}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {tiers.map((t, idx) => {
            const isApex = Boolean(t.isApex);
            return (
              <div
                key={t.id || idx}
                style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: isApex ? 'var(--pres-accent)' : 'var(--pres-border)' }}
                className={`p-5 rounded-2xl border shadow-md flex flex-col justify-between ${isApex ? 'ring-2 ring-violet-500/40' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-amber-400">TIER 0{t.tierNumber || idx + 1}</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-violet-500/10 text-violet-400 font-bold">{t.filterRatio}</span>
                  </div>
                  <h4 style={{ color: 'var(--pres-text)' }} className="font-ubuntu text-base font-bold">{t.label}</h4>
                  <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs mt-1 leading-relaxed">{t.description}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/20 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck size={13} /> {t.subtitle || 'Strict Selectivity Filter'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-2 text-amber-400 font-bold">
          <Award size={14} /> Attrition Rate: {slide.attritionRate || '< 2.4% Annual System Turnover'}
        </span>
        <span className="opacity-70">Top 1% Global Engineering Guild</span>
      </div>
    </div>
  );
};
