import React from 'react';
import type { TierComparisonFeatureMatrixSlideData } from '../../../types/globalPptExpansionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Check, Minus, ShieldCheck, Sparkles } from 'lucide-react';

export const TierComparisonFeatureMatrixSlide: React.FC<{ slide: TierComparisonFeatureMatrixSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const rows = slide.featureRows || [];
  const recTier = slide.recommendedTierId || 'enterprise';
  const lead = `${slide.leadArchitect || 'Alim Ul Karim'}, ${slide.leadRole || 'Chief Software Engineer'}`;

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'COMMERCIAL GTM & PACKAGING'}</span>
          <h1
            className="font-ubuntu text-4xl font-black text-white tracking-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Tier-Comparison Feature Matrix: Capability & Compliance'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Authoritative enterprise comparison matrix contrasting open-core vs sovereign capabilities.'}</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 text-amber-900 dark:text-amber-300 font-bold">
          <Sparkles size={14} className="text-amber-400" /> {slide.comparisonHeadline || 'Sovereign Enclave Tier: 99.999% SLA'}
        </div>
      </div>

      <div className="z-10 my-auto bg-slate-950/70 border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-12 p-3.5 bg-slate-900/90 border-b border-slate-800 font-mono text-xs font-bold text-slate-300 uppercase tracking-wider text-center">
          <span className="col-span-4 text-left pl-3">Capability & Infrastructure</span>
          <span className="col-span-2">Community OSS</span>
          <span className="col-span-2">Pro Cloud</span>
          <span className={`col-span-2 ${recTier === 'enterprise' ? 'text-cyan-300' : ''}`}>Enterprise Shield</span>
          <span className="col-span-2">Sovereign Enclave</span>
        </div>
        <div className="divide-y divide-slate-800/60 font-poppins text-xs">
          {rows.map((row, idx) => (
            <div key={row.featureId || idx} className="grid grid-cols-12 p-3.5 items-center hover:bg-slate-900/40 transition-colors text-center">
              <div className="col-span-4 text-left pl-3">
                <span className="font-semibold text-white block">{row.featureName}</span>
                <span className="text-slate-400 text-[11px] truncate block">{row.featureDescription}</span>
              </div>
              <div className="col-span-2 flex justify-center">
                {row.isOpenSourceSupported ? <Check size={16} className="text-emerald-400" /> : <Minus size={16} className="text-slate-600" />}
              </div>
              <div className="col-span-2 flex justify-center">
                {row.isProCloudSupported ? <Check size={16} className="text-emerald-400" /> : <Minus size={16} className="text-slate-600" />}
              </div>
              <div className="col-span-2 flex justify-center">
                {row.isEnterpriseSupported ? <Check size={16} className="text-cyan-400 font-bold" /> : <Minus size={16} className="text-slate-600" />}
              </div>
              <div className="col-span-2 flex justify-center">
                {row.isSovereignSupported ? <Check size={16} className="text-amber-400 font-bold" /> : <Minus size={16} className="text-slate-600" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Fiduciary SLA Guarantee: 10x Financial Penalty Backed | Compliance Audit Certified</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
