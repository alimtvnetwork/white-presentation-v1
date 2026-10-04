import React from 'react';
import type { BentoCapabilityMosaicSlideData } from '../../../types/suite2032Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Cpu, ShieldCheck, Database, Monitor, Layers, Lock, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Cpu, ShieldCheck, Database, Monitor, Layers, Lock,
};

export const BentoCapabilityMosaicSlide: React.FC<{
  slide: BentoCapabilityMosaicSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const tiles = slide?.tiles?.slice(0, 5) || [];
  const heroTile = tiles.find((t) => t.isFeaturedCapability) || tiles[0];
  const supportingTiles = tiles.filter((t) => t.id !== heroTile?.id).slice(0, 4);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[16px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-2">
              <Activity size={16} /> {slide?.kicker || 'PLATFORM CAPABILITIES & BENTO MOSAIC'}
            </span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">Arch: {slide?.architectureVersion || 'Release 5.4-LTS'}</span>
            <span className="font-mono text-[14px] px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5"><ShieldCheck size={14} /> Deployed</span>
          </div>
          <h1 className="text-[40px] font-bold tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>{slide?.title}</h1>
          <p className="text-[16px] text-slate-400 mt-1 max-w-5xl">{slide?.subtitle}</p>
        </div>
        <span className="font-mono text-[14px] bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-slate-300">{slide?.mosaicCategory || 'Autonomous Systems'}</span>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-5 my-auto z-10 h-[590px]">
        {heroTile && (
          <div className="col-span-2 row-span-1 plane-2-floating rounded-3xl p-8 border border-[var(--pres-accent)]/50 bg-[var(--pres-card-bg)] shadow-[0_0_30px_rgba(124,58,237,0.15)] flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-2xl bg-[var(--pres-accent)]/20 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30">
                  {React.createElement(ICON_MAP[heroTile.iconName || 'Cpu'] || Cpu, { size: 28 })}
                </span>
                <div>
                  <span className="text-[14px] font-mono font-bold uppercase text-[var(--pres-accent)] tracking-wider">{heroTile.badgeLabel}</span>
                  <h3 className="text-[28px] font-bold text-slate-100">{heroTile.tileTitle}</h3>
                </div>
              </div>
              {heroTile.hasLiveStatusPulse && (
                <span className="flex items-center gap-2 text-[14px] font-mono text-emerald-400 bg-emerald-500/15 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE TELEMETRY
                </span>
              )}
            </div>
            <p className="text-[18px] text-slate-300 leading-relaxed max-w-3xl">{heroTile.tileDescription}</p>
            <div className="flex items-end justify-between pt-4 border-t border-slate-800/80">
              <span className="text-[14px] font-mono text-slate-400">{heroTile.keyMetricLabel}</span>
              <span className="text-[34px] font-mono font-bold text-slate-100">{heroTile.keyMetricValue}</span>
            </div>
          </div>
        )}

        {supportingTiles.map((tile) => {
          const IconComp = ICON_MAP[tile.iconName || 'Layers'] || Layers;
          return (
            <div key={tile.id} className="plane-1-raised rounded-3xl p-6 border border-slate-800 bg-slate-900/60 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-slate-800/90 text-cyan-400 border border-slate-700">
                  <IconComp size={20} />
                </span>
                <span className="text-[14px] font-mono text-slate-400 uppercase bg-slate-800/60 px-2.5 py-1 rounded-md">{tile.badgeLabel}</span>
              </div>
              <div>
                <h4 className="text-[20px] font-bold text-slate-100 mb-1">{tile.tileTitle}</h4>
                <p className="text-[15px] text-slate-300 line-clamp-2">{tile.tileDescription}</p>
              </div>
              <div className="flex items-end justify-between pt-3 border-t border-slate-800/60">
                <span className="text-[14px] font-mono text-slate-400 truncate mr-2">{tile.keyMetricLabel}</span>
                <span className="text-[24px] font-mono font-bold text-slate-100">{tile.keyMetricValue}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="plane-1-raised px-6 py-3.5 rounded-2xl border border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-[14px] text-slate-300">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-cyan-400 font-bold"><Sparkles size={16} /> Modular Architecture Verified</span>
          <span className="text-slate-400">Total System Nodes: <strong className="text-slate-200">{slide?.tiles?.length || 5}</strong></span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400 font-bold"><CheckCircle2 size={16} /> 100% Deterministic Replay Ready</div>
      </div>
    </div>
  );
};
