import React from 'react';
import type { GlobalAnycastTrafficDirectorSlideData } from '../../../../types/customization/networkPlatformTypes';
import { useDeckStore } from '../../../../stores/deckStore';
import { useEditStore } from '../../../../stores/editStore';
import { AnycastRouteCard } from './AnycastRouteCard';
import { Globe, Network, UserCheck, ShieldCheck, Activity } from 'lucide-react';

export const GlobalAnycastTrafficDirectorSlide: React.FC<{
  slide: GlobalAnycastTrafficDirectorSlideData;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const steps = slide.routingSteps || slide.stages || [];
  const currentStep = Math.min(activeStep, Math.max(0, steps.length - 1));

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30 flex items-center gap-1.5">
              <Network size={13} /> {slide.kicker || 'GLOBAL NETWORK INFRASTRUCTURE'}
            </span>
            <span className="font-mono text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <UserCheck size={11} /> Alim Ul Karim (Chief Software Engineer)
            </span>
            <span className="font-mono text-xs text-cyan-800 dark:text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
              <Globe size={11} /> AS{slide.globalBgpAsn || 13335} Anycast Fabric
            </span>
          </div>
          <h1
            style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
            className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >{slide.title || 'Global Anycast Traffic Director & BGP Fabric'}</h1>
          <p
            style={{ color: 'var(--pres-text-muted)' }}
            className="font-poppins text-base max-w-4xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >{slide.subtitle || 'Autonomous edge route optimization across 185 PoPs with sub-15ms regional latency'}</p>
        </div>

        <div className="plane-1-raised px-4 py-3 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-900/60 flex items-center gap-5 font-mono text-xs">
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Edge Presence</div>
            <div className="text-amber-900 dark:text-amber-300 font-bold text-base flex items-center gap-1">
              <Globe size={13} /> {slide.edgePopCount || 185} PoPs
            </div>
          </div>
          <div className="w-px h-8 bg-slate-700/40" />
          <div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Peak Bandwidth</div>
            <div className="text-emerald-400 font-bold text-base">{slide.peakThroughputTbps || 42.5} Tbps</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 z-10 my-auto h-[480px] items-stretch">
        {steps.map((step, idx) => (
          <AnycastRouteCard key={step.id || idx} step={step} index={idx} activeStep={currentStep} />
        ))}
      </div>

      <div className="plane-1-raised p-4 rounded-2xl border border-slate-700/60 dark:border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="text-amber-900 dark:text-amber-300 font-bold flex items-center gap-1.5"><Activity size={14} /> Routing:</span>
          <span>BGP: <strong className="text-emerald-400">{slide.isAnycastAnnounced ? 'Announced' : 'Draft'}</strong></span>
          <span>Zero-RTT: <strong className="text-cyan-400">{slide.hasTlsSessionResumed ? 'Resumed' : 'Off'}</strong></span>
          <span>Shield: <strong className="text-emerald-400">{slide.isOriginShieldActive ? 'Active' : 'Direct'}</strong></span>
          <span>Failover: <strong className="text-cyan-400">{slide.hasDynamicFailover ? 'Sub-Second' : 'Manual'}</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]"><ShieldCheck size={13} /> BGP Verified</span>
          <span className="text-slate-400 text-xs">Step {currentStep + 1} of {Math.max(steps.length, 1)}</span>
        </div>
      </div>
    </div>
  );
};
