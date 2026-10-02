import React from 'react';
import type { ClientLogoWallSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ClientLogoWallSlide: React.FC<{ slide: ClientLogoWallSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const logos = slide.logos || [];
  const badges = slide.trustBadges || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
              {slide.kicker || 'PROVEN ENTERPRISE TRUST'}
            </span>
            <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Verified Customer Footprint</span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="font-ubuntu text-[40px] font-black tracking-tight leading-none"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {slide.title || 'Trusted by Industry Leaders Worldwide'}
          </h1>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 font-bold border border-violet-500/40">Global Enterprise</span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">Defense & Banking</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto">
        {logos.slice(0, 8).map((logo, idx) => {
          const isPartner = Boolean(logo.isKeyPartner);
          return (
            <div
              key={logo.id || idx}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${isPartner ? 'plane-2-elevated border-violet-500/40 bg-violet-500/10 shadow-lg' : 'plane-1-raised bg-slate-900/40 border-slate-800'}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{logo.industry}</span>
                {Boolean(logo.proofMetric) && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {logo.proofMetric}
                  </span>
                )}
              </div>
              <div className="my-2 flex items-center gap-2">
                <Building2 size={20} className="text-violet-400 shrink-0" />
                <h3 className="font-ubuntu text-lg font-bold text-slate-100">{logo.clientName}</h3>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-violet-300">
                <CheckCircle2 size={10} /> <span>Production Sovereign Engine</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 grid grid-cols-4 gap-6 z-10">
        {badges.map((b) => (
          <div key={b.id} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="font-ubuntu text-base font-bold text-slate-100">{b.value}</div>
              <div className="font-mono text-[11px] text-slate-400">{b.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
