import React from 'react';
import type { EbpfKernelTelemetrySlideData } from '../../../types/kineticRevolutionArchetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Cpu, Terminal, ShieldCheck, Activity } from 'lucide-react';

export const EbpfKernelTelemetrySlide: React.FC<{ slide: EbpfKernelTelemetrySlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const probes = slide.probes || [];
  const events = slide.recentTraceEvents || [];
  const pillars = slide.pillars || [];
  const lead = 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2 font-mono">{slide.kicker || 'EBPF KERNEL OBSERVABILITY'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {slide.title || 'eBPF Kernel Telemetry: Sub-Microsecond Probe Mesh'}
          </h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Direct ring-buffer kernel probe hooks capturing syscall latency and socket filters without context-switch overhead.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 rounded-full border border-cyan-700/60 bg-cyan-950/40 text-cyan-300 font-bold flex items-center gap-1.5"><Cpu size={14} /> {slide.kernelVersion || 'v6.8-rc4-bpf'}</span>
          <span className="px-3 py-1.5 rounded-full border border-emerald-700/60 bg-emerald-950/40 text-emerald-300 font-bold flex items-center gap-1.5"><Activity size={14} /> {slide.totalCapturedEventsPerSecond || '4.8M eps'}</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-4">
        {pillars.slice(0, 4).map((p) => (
          <div key={p.id} className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 plane-1-raised">
            <span className="font-mono text-xs text-slate-400 block mb-1">{p.title}</span>
            <div className="font-ubuntu text-2xl font-bold text-white flex items-baseline justify-between">
              <span>{p.metric}</span>
              <span className={`text-xs font-mono font-bold ${p.isHealthy ? 'text-emerald-400' : 'text-cyan-400'}`}>{p.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 grid grid-cols-12 gap-6 my-auto">
        <div className="col-span-6 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">Active Kernel Probes & Filters</span>
          <div className="grid grid-cols-2 gap-3">
            {probes.slice(0, 4).map((pr) => (
              <div key={pr.id} className={`p-4 rounded-xl border transition-all ${pr.isActive ? 'bg-slate-900/90 border-cyan-500/50 shadow-lg' : 'bg-slate-950/60 border-slate-800/60'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">{pr.probeType}</span>
                  <span className="text-[11px] font-mono text-slate-400">{pr.subsystem}</span>
                </div>
                <h4 className="font-mono text-sm font-bold text-white truncate">{pr.probeName}</h4>
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-slate-800 text-xs font-mono">
                  <span className="text-slate-400">Events: <strong className="text-slate-200">{pr.eventsPerSecond.toLocaleString()} /s</strong></span>
                  <span className="text-emerald-400 font-bold">{pr.overheadNanoseconds}ns overhead</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-6 space-y-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-1.5"><Terminal size={14} className="text-cyan-400" /> Ring-Buffer Trace Stream</span>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 font-mono text-xs space-y-2 h-[225px] overflow-hidden">
            <div className="grid grid-cols-12 text-slate-500 pb-1 border-b border-slate-800 text-[11px] font-bold uppercase">
              <span className="col-span-3">Syscall</span>
              <span className="col-span-4">Process</span>
              <span className="col-span-2">PID</span>
              <span className="col-span-3 text-right">Return / Latency</span>
            </div>
            {events.slice(0, 5).map((ev) => (
              <div key={ev.id} className="grid grid-cols-12 py-1 items-center border-b border-slate-900/80 text-[11px]">
                <span className="col-span-3 text-cyan-300 font-semibold truncate">{ev.syscallName}</span>
                <span className="col-span-4 text-slate-300 truncate">{ev.processName}</span>
                <span className="col-span-2 text-slate-400">{ev.pid}</span>
                <span className={`col-span-3 text-right font-bold ${ev.isAnomaly ? 'text-amber-400' : 'text-emerald-400'}`}>{ev.returnValue === 0 ? 'SUCCESS (2.1µs)' : `RET ${ev.returnValue}`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>BPF JIT Verifier: Pass (0 instructions rejected) | Kernel Overhead: {slide.averageOverheadPercent || '0.04%'}</span>
        </span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
