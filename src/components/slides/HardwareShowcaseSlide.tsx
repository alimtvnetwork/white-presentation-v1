import React, { useState } from 'react';
import type { HardwareShowcaseSlideData } from '../../types/expandedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { Cpu, Shield, Activity, Radio } from 'lucide-react';

export const HardwareShowcaseSlide: React.FC<{ slide: HardwareShowcaseSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const hotspots = slide.hotspots || [];
  const specs = slide.specifications || [];
  const [activePin, setActivePin] = useState<number>(() => slide.activePinIndex || 1);
  const selectedHotspot = hotspots.find((h) => h.pinNumber === activePin) || hotspots[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between">
      <div className="z-10 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">{slide.kicker || 'PHYSICAL HARDWARE'}</span>
            <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Air-Gapped Appliance</span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="font-ubuntu text-[38px] font-black tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title || 'Sovereign Edge Node V3 Appliance'}
          </h1>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5"><Radio size={12} className="animate-pulse" /> Active Telemetry</span>
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto items-stretch">
        <div className="col-span-7 plane-1-raised p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
          <div className="mb-2">
            <h2 className="font-ubuntu text-2xl font-bold text-slate-100">{slide.deviceName}</h2>
            <p className="font-poppins text-xs text-slate-400">{slide.deviceTagline}</p>
          </div>
          <div className="relative w-full h-[360px] bg-slate-950/80 rounded-2xl border border-slate-800 flex items-center justify-center p-6">
            <div className="w-44 h-44 rounded-3xl bg-cyan-500/5 border border-cyan-500/20 flex flex-col items-center justify-center text-cyan-400"><Cpu size={56} className="mb-2" /><span className="font-mono text-xs font-bold">SOVEREIGN SILICON</span></div>
            {hotspots.map((hp) => {
              const isActive = activePin === hp.pinNumber;
              const left = Math.min(90, Math.max(10, (hp.xCoord / 920) * 100));
              const top = Math.min(85, Math.max(15, (hp.yCoord / 740) * 100));
              return (
                <div key={hp.id} onClick={() => setActivePin(hp.pinNumber)} style={{ left: `${left}%`, top: `${top}%` }} className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex items-center gap-2 ${isActive ? 'scale-110 z-20' : 'opacity-80'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold border-2 ${isActive ? 'bg-cyan-500 text-slate-950 border-white' : 'bg-slate-900 text-cyan-400 border-cyan-500/60'}`}>{hp.pinNumber}</div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900/80 text-slate-400'}`}>{hp.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-5 plane-2-elevated p-6 rounded-3xl border border-cyan-500/30 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold uppercase text-cyan-400 mb-2 flex items-center gap-1.5"><Activity size={14} /> Subsystem Specs</div>
            {selectedHotspot && (
              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">PIN 0{selectedHotspot.pinNumber}</span>
                <h3 className="font-ubuntu text-base font-bold text-slate-100 mt-2 mb-1">{selectedHotspot.subsystemTitle}</h3>
                <p className="font-poppins text-xs text-slate-300 leading-relaxed">{selectedHotspot.specDetails}</p>
              </div>
            )}
            <div className="space-y-2">
              {specs.map((s) => (
                <div key={s.id} className="flex items-center justify-between p-2 rounded-xl bg-slate-900/40 border border-slate-800 text-xs">
                  <span className="font-mono text-slate-400">{s.label}</span>
                  <span className="font-mono font-bold text-cyan-300">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between font-mono text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400"><Shield size={12} /> MIL-STD-810H</span>
            <span>IP68 Submersible</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
        <span className="text-cyan-400 font-bold">Physical Edge Hardware Verification</span>
        <span>Deterministic Assembly & Telemetry</span>
      </div>
    </div>
  );
};
