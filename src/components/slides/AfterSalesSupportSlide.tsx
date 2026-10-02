import React from 'react';
import { AfterSalesSupportSlideData } from '../../types/presentation';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const AfterSalesSupportSlide: React.FC<{ slide: AfterSalesSupportSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const tiers = slide.supportTiers || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {slide.kicker || 'LIFECYCLE ASSURANCE'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Guaranteed Production SLAs</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Guaranteed Post-Launch Engineering & SLA Support'}
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-8 my-auto z-10">
        {tiers.map((tier, idx) => {
          const isHighlight = Boolean(tier.isHighlight);
          const isIncluded = Boolean(tier.isIncluded);
          return (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--pres-bg-card)',
                borderColor: isHighlight ? 'var(--pres-accent)' : 'var(--pres-border)',
              }}
              className={`p-8 rounded-3xl border shadow-xl flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02] ${
                isHighlight ? 'ring-2 ring-violet-500/50 bento-glow-pulse' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <Clock size={12} /> {tier.slaResponse}
                  </span>
                  {isHighlight && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-violet-600 text-white shadow-md">
                      RECOMMENDED
                    </span>
                  )}
                </div>
                <h3 style={{ color: 'var(--pres-text)' }} className="font-ubuntu text-2xl font-bold mb-6">{tier.title}</h3>
                <div className="space-y-3">
                  {(tier.features || []).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--pres-text-muted)' }}>
                      <CheckCircle2 size={16} className={isHighlight ? 'text-emerald-400 shrink-0 mt-0.5' : 'text-slate-500 shrink-0 mt-0.5'} />
                      <span className="font-poppins text-xs leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-700/20 font-mono text-xs font-bold text-center">
                <span className={isIncluded ? 'text-emerald-400' : 'text-violet-400'}>
                  {isIncluded ? 'Included in Standard Retainer' : 'Enterprise Tier Add-on'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="flex items-center gap-2 text-emerald-400 font-bold">
          <ShieldCheck size={16} /> {slide.guaranteeBanner || '100% Zero-Defect Code Warranty & 15-Minute Critical Incident SLA'}
        </span>
        <span className="opacity-70">Deterministic Support Architecture</span>
      </div>
    </div>
  );
};
