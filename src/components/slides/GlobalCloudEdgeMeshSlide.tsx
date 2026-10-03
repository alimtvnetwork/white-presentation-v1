import React from 'react';
import type { GlobalCloudEdgeMeshSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { EdgeRegionPill } from './mesh/EdgeRegionPill';
import { Network, Activity, ShieldCheck, Server, Globe2 } from 'lucide-react';

export const GlobalCloudEdgeMeshSlide: React.FC<{ slide: GlobalCloudEdgeMeshSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const regions = slide.regions || [];
  const links = slide.backboneLinks || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
            <Network size={12} /> {slide.kicker || 'INFRASTRUCTURE TELEMETRY'}
          </span>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            ASN: {slide.autonomousSystemNumber || 'AS64512'} | WireGuard Mesh
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Global Anycast Cloud Edge Network & Mesh'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || '28 Sovereign Points of Presence with 100Gbps Backbones and Anycast BGP Routing.'}
        </p>
      </div>

      <div className="z-10 grid grid-cols-12 gap-8 my-auto items-stretch h-[600px]">
        <div className="col-span-6 plane-1-raised p-6 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400">
              <Globe2 size={16} /> Anycast Topology & Mesh Backbones
            </span>
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
              Active Mesh Links: {links.length}
            </span>
          </div>

          <div className="my-auto grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
              <span className="font-mono text-xs text-slate-400">Edge Cache Hit Ratio</span>
              <span className="font-ubuntu text-3xl font-black text-emerald-400">{slide.edgeHitRatioPercent ?? 99.4}%</span>
              <span className="font-mono text-[10px] text-emerald-300">Target SLA: &gt;99.0%</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-1">
              <span className="font-mono text-xs text-slate-400">Global Average TTFB</span>
              <span className="font-ubuntu text-3xl font-black text-cyan-400">{slide.globalAverageTtfbMs ?? 14.2}ms</span>
              <span className="font-mono text-[10px] text-cyan-300">P95 Under 25ms</span>
            </div>
          </div>

          <div className="space-y-2 border-t border-slate-800 pt-3">
            <div className="font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>Transit Links:</span>
              <span className="text-cyan-300">{links.map((l) => `${l.transitLatencyMs}ms`).join(' • ') || '68ms • 124ms'}</span>
            </div>
            <div className="font-mono text-[11px] text-slate-400 flex items-center justify-between">
              <span>Encryption Standard:</span>
              <span className="text-emerald-400 flex items-center gap-1"><ShieldCheck size={12} /> WireGuard ChaCha20-Poly1305</span>
            </div>
          </div>
        </div>

        <div className="col-span-6 plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-mono text-xs">
            <span className="flex items-center gap-2 font-bold text-slate-300"><Server size={14} className="text-cyan-400" /> Regional Latency Matrix</span>
            <span className="text-slate-400">{regions.length} PoPs Online</span>
          </div>
          <div className="space-y-2.5 overflow-y-auto flex-1 pr-1">
            {regions.map((region) => (
              <EdgeRegionPill key={region.id} region={region} />
            ))}
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-cyan-400 font-bold"><Activity size={14} /> 0.000% Packet Loss | Tier-1 IP Transit Sockets | Live Pulse Verified</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Infrastructure Health: 100%</span>
      </div>
    </div>
  );
};
