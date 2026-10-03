import React from 'react';
import type { SubseaCableGlobalBackboneSlideData } from '../../../types/kineticRevolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Globe, Radio, ShieldCheck, Zap } from 'lucide-react';

export const SubseaCableGlobalBackboneSlide: React.FC<{ slide: SubseaCableGlobalBackboneSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const routes = slide.cableRoutes || [];
  const stations = slide.landingStations || [];
  const pillars = slide.healthPillars || [];
  const lead = 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'GLOBAL TELECOM INFRASTRUCTURE'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title || 'Subsea Cable Global Backbone: Trans-Oceanic Optical Routing'}
          </h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'High-capacity DWDM submarine fiber corridors delivering sub-65ms cross-ocean latency with protected ring failover.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 rounded-full border border-cyan-700/60 bg-cyan-950/40 text-cyan-300 font-bold flex items-center gap-1.5"><Globe size={14} /> {slide.totalSubseaCapacityTbps || 320} Tbps System</span>
          <span className="px-3 py-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/40 text-emerald-300 font-bold flex items-center gap-1.5"><Zap size={14} /> {slide.averageCrossOceanLatency || '62.4ms RTT'}</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4">
        {pillars.slice(0, 4).map((p) => (
          <div key={p.id} className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 plane-1-raised">
            <span className="font-mono text-xs text-slate-400 block mb-1">{p.label}</span>
            <div className="font-ubuntu text-2xl font-bold text-white flex items-baseline justify-between">
              <span>{p.currentValue}</span>
              <span className="text-xs font-mono font-bold text-emerald-400">{p.availabilityPercent}% SLA</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-12 gap-6 my-auto">
        <div className="col-span-7 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Submarine Fiber Cable Systems</span>
          <div className="grid grid-cols-2 gap-3">
            {routes.slice(0, 4).map((r) => (
              <div key={r.id} className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/70 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white truncate max-w-[160px]">{r.cableSystemName}</h4>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800/40">ONLINE</span>
                </div>
                <div className="text-slate-400 text-[11px] truncate">Pairs: {r.landingPairs?.join(' ➔ ') || 'Cross-Ocean'}</div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800 text-[11px] text-slate-300">
                  <span>Cap: <strong className="text-cyan-300">{r.capacityTbps} Tbps</strong></span>
                  <span className="text-emerald-400 font-bold">{r.latencyRoundTripMs}ms RTT</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-1.5"><Radio size={14} className="text-cyan-400" /> Gateway Landing Stations</span>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 font-mono text-xs space-y-2">
            {stations.slice(0, 4).map((s) => (
              <div key={s.id} className="flex items-center justify-between py-1.5 border-b border-slate-900/90 last:border-0">
                <div>
                  <span className="font-bold text-white">{s.cityName}</span>
                  <span className="text-slate-500 text-[10px] ml-1.5 font-bold uppercase">[{s.countryCode}]</span>
                </div>
                <span className="text-slate-400 text-[11px]">{s.interconnectCarriers} Carriers</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${s.isPrimaryGateway ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/40' : 'bg-slate-900 text-slate-400'}`}>
                  {s.isPrimaryGateway ? 'PRIMARY' : 'EDGE'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>Active Landing Stations: {slide.activeLandingStations || 18} | Protected Ring Topology: Enabled | Real-Time Fiber Telemetry</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
