import React from 'react';
import type { ServicesGravitySlideData } from '../../types/extendedArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { ServiceBubble } from './gravity/ServiceBubble';
import { Orbit, Activity, Sun } from 'lucide-react';

export const ServicesGravitySlide: React.FC<{ slide: ServicesGravitySlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const services = slide.services || slide.pillars || [];
  const activeService = services[activeStep] || services[0];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="relative w-[1920px] h-[1080px] overflow-hidden select-none p-[80px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
            <Orbit size={12} /> {slide.kicker || 'SYSTEM TOPOLOGY'}
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">• Preset: {slide.physicsPreset || 'servicesDefault'}</span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[48px] font-black tracking-tight leading-none"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >
          {slide.title || 'Services Bubble Gravity & Core Orbital Topology'}
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto z-10 items-stretch">
        <div className="col-span-8 relative h-[620px] rounded-3xl border border-white/10 bg-black/20 overflow-hidden flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <circle cx="50%" cy="50%" r="160" fill="none" stroke="currentColor" strokeDasharray="4 4" />
            <circle cx="50%" cy="50%" r="220" fill="none" stroke="currentColor" strokeDasharray="4 4" />
            <circle cx="50%" cy="50%" r="280" fill="none" stroke="currentColor" strokeDasharray="4 4" />
          </svg>
          <div className="relative z-20 w-44 h-44 rounded-full bg-gradient-to-tr from-amber-500/30 via-violet-600/40 to-cyan-500/30 border-2 border-amber-400/60 shadow-[0_0_50px_rgba(245,158,11,0.3)] flex flex-col items-center justify-center text-center p-3 backdrop-blur-md">
            <Sun size={28} className="text-amber-300 mb-1 animate-pulse" />
            <span className="font-ubuntu font-bold text-sm text-white leading-tight">{slide.coreSunTitle || 'Event Core'}</span>
            <span className="text-[10px] font-mono text-amber-200/80 mt-1">{slide.coreSunSubtitle || 'Zero-Copy Bus'}</span>
          </div>
          {services.map((svc, idx) => (
            <ServiceBubble key={svc.id || idx} service={svc} index={idx} total={services.length} isActive={idx === activeStep} isPast={idx < activeStep} isFuture={idx > activeStep} />
          ))}
        </div>

        <div style={{ backgroundColor: 'var(--pres-card-bg, rgba(255, 255, 255, 0.05))', borderColor: 'var(--pres-card-border, rgba(255, 255, 255, 0.1))' }} className="col-span-4 p-6 rounded-3xl border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">Node Telemetry</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">P99: {activeService?.p99LatencyMs || 2.4}ms</span>
            </div>
            <h3 className="font-ubuntu text-2xl font-bold mb-4" style={{ color: 'var(--pres-text)' }}>{activeService?.name || 'Service Inspector'}</h3>
            <div className="space-y-3 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
              <div className="flex justify-between p-3 rounded-xl bg-black/20 border border-white/5"><span>Category</span><span className="font-bold text-slate-200">{activeService?.category}</span></div>
              <div className="flex justify-between p-3 rounded-xl bg-black/20 border border-white/5"><span>Throughput</span><span className="font-bold text-cyan-400">{activeService?.throughputKps} k req/sec</span></div>
              <div className="flex justify-between p-3 rounded-xl bg-black/20 border border-white/5"><span>SLA Availability</span><span className="font-bold text-emerald-400">{activeService?.slaAvailability}</span></div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 font-mono text-xs flex items-center justify-between">
            <span className="text-violet-300 font-bold flex items-center gap-1.5"><Activity size={14} /> Damped Spring Orbit</span>
            <span className="text-emerald-400 font-bold">Stable Center</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between z-10 pt-4 border-t border-slate-700/30 font-mono text-xs" style={{ color: 'var(--pres-text-muted)' }}>
        <span className="text-emerald-400 font-bold">Atmospheric Bubble Physics Engine • Force-Directed Solar Topology</span>
        <span className="opacity-80">Alim Ul Karim, Chief Software Engineer</span>
      </div>
    </div>
  );
};
