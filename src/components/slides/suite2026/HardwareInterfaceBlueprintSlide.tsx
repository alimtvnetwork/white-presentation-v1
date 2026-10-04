// lint-allow: file-size reason="HardwareInterfaceBlueprintSlide kinetic hardware edge blueprint and pinout inspection" max=160
import React from 'react';
import type { HardwareInterfaceBlueprintSlideData } from '../../../types/suite2026Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { Cpu, CheckCircle2, ShieldCheck, Zap, HardDrive, Radio, Layers } from 'lucide-react';

const DEF_PINPOINTS = [
  { id: 'p1', interfaceName: 'Central Compute SoC (PCIe 5.0 x16)', pinoutStandard: 'CEM 5.0 164-Pin', bandwidthGigabits: 128.0, operatingVoltage: '3.3V / 12V', isHighSpeed: true, hasOpticalIsolation: true, isProductionReady: true },
  { id: 'p2', interfaceName: 'High-Density DDR5 Interconnect', pinoutStandard: 'SO-DIMM 262-Pin', bandwidthGigabits: 51.2, operatingVoltage: '1.1V Core', isHighSpeed: true, hasOpticalIsolation: false, isProductionReady: true },
  { id: 'p3', interfaceName: 'Optically Isolated CAN-FD / SPI', pinoutStandard: 'M12 Industrial 8-Pin', bandwidthGigabits: 0.02, operatingVoltage: '5.0V Galvanic', isHighSpeed: false, hasOpticalIsolation: true, isProductionReady: true },
  { id: 'p4', interfaceName: 'Gigabit Ethernet & Time-Sync (PTP)', pinoutStandard: 'RJ45 Magnetics Integrated', bandwidthGigabits: 10.0, operatingVoltage: 'PoE+ 48V', isHighSpeed: true, hasOpticalIsolation: true, isProductionReady: true },
];

const STAGES = [
  { step: 1, name: 'Compute Core SoC', index: 0, desc: 'Ultra-high-speed PCIe Gen 5 host controller interface' },
  { step: 2, name: 'DDR5 Memory Bus', index: 1, desc: 'Zero-wait low-latency cache and buffer bus topology' },
  { step: 3, name: 'Industrial Sensor IO', index: 2, desc: 'Galvanically isolated CAN-FD & SPI sensor interfaces' },
  { step: 4, name: 'Network & Telemetry', index: 3, desc: 'Time-sensitive networking (TSN) & hardware PTP clock' },
];

export const HardwareInterfaceBlueprintSlide: React.FC<{ slide?: HardwareInterfaceBlueprintSlideData; data?: HardwareInterfaceBlueprintSlideData }> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { activeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const pinpoints = data?.pinpoints?.length ? data.pinpoints : DEF_PINPOINTS;
  const currentStep = Math.min(Math.max(0, activeStep ?? 0), STAGES.length - 1);
  const activePinpoint = pinpoints[currentStep] || pinpoints[0];

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Cpu size={16} className="text-cyan-500" /> {data?.kicker || 'HARDWARE ARCHITECTURE & EDGE BLUEPRINT'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-violet-500/15 text-violet-800 dark:text-violet-300 border border-violet-500/30 flex items-center gap-2">
              <Layers size={14} /> Rev: {data?.boardRevision || 'Rev 4.2 Production'} • Form: {data?.formFactor || '3U Edge Chassis'}
            </span>
          </div>
          <h1 className="text-[48px] font-ubuntu font-bold tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data?.title || 'Hardware Interface Blueprint: Edge Silicon Bus Architecture'}
          </h1>
          <p className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data?.subtitle || 'Schematic layout and pinout characteristics of the enterprise edge compute appliance and bus interconnects.'}
          </p>
        </div>
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Thermal Gate</span><span className="text-emerald-600 dark:text-emerald-400 font-bold">MIL-STD-810H Pass</span></div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div><span className="text-slate-500 dark:text-slate-400 block uppercase">Chief Software Engineer</span><span className="text-slate-800 dark:text-slate-200 font-bold">Alim Ul Karim</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {STAGES.map((st, idx) => (
          <button key={st.step} onClick={() => jumpToStep(idx)} className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${idx === currentStep ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold' : idx < currentStep ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 opacity-90' : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-60 text-slate-500 dark:text-slate-400'}`}>
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${idx === currentStep ? 'bg-[var(--pres-accent)] text-white' : idx < currentStep ? 'bg-cyan-500 text-white dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>{idx < currentStep ? '✓' : idx + 1}</span>
              <span className="font-bold">{st.name}</span>
            </div>
            <span className="text-[14px] opacity-75">Subsys {st.step}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8 z-10 my-auto h-[480px]">
        {/* Left: Schematic Visual Blueprint */}
        <div className="col-span-7 plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex flex-col justify-between shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
            <span className="text-cyan-700 dark:text-cyan-400 font-bold uppercase">PHYSICAL PINOUT LAYOUT SCHEMATIC</span>
            <span className="text-slate-500 dark:text-slate-400">PCB Layer Count: 14 High-Speed Multi-Layer</span>
          </div>
          <div className="grid grid-cols-2 gap-4 my-auto">
            {pinpoints.map((pin, idx) => {
              const isSelected = idx === currentStep;
              return (
                <div key={pin.id} onClick={() => jumpToStep(idx)} className={`p-4 rounded-xl border transition-all cursor-pointer font-mono ${isSelected ? 'bg-cyan-500/15 border-cyan-400 ring-2 ring-cyan-400 shadow-xl scale-[1.02]' : 'bg-slate-100/60 dark:bg-black/30 border-slate-200 dark:border-slate-800/80 opacity-70 hover:opacity-100'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[14px] uppercase text-slate-500 dark:text-slate-400">Port 0{idx + 1}</span>
                    <span className={`text-[14px] px-2 py-0.5 rounded font-bold ${isSelected ? 'bg-cyan-500 text-slate-900' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                      {pin.bandwidthGigabits >= 1 ? `${pin.bandwidthGigabits} Gbps` : `${pin.bandwidthGigabits * 1000} Kbps`}
                    </span>
                  </div>
                  <div className="font-ubuntu text-base font-bold text-slate-900 dark:text-slate-100 mb-1">{pin.interfaceName}</div>
                  <div className="text-[14px] text-slate-500 dark:text-slate-400">{pin.pinoutStandard} • {pin.operatingVoltage}</div>
                </div>
              );
            })}
          </div>
          <div className="p-3 rounded-xl bg-slate-100/60 dark:bg-black/20 border border-slate-200 dark:border-slate-800 font-mono text-[14px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>Electromagnetic Shielding: EMI Cage 85dB Attenuation</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">NOMINAL</span>
          </div>
        </div>

        {/* Right: Focused Subsystem Deep-Dive */}
        <div className="col-span-5 plane-1-raised p-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex flex-col justify-between shadow-2xl ring-1 ring-[var(--pres-accent)]">
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
            <span className="text-[var(--pres-accent)] font-bold uppercase">PINOUT SPECIFICATION AUDIT</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-[14px] font-bold">READY</span>
          </div>
          <div className="space-y-4 my-4 font-mono text-[14px]">
            <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-black/30 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-[14px] text-slate-500 dark:text-slate-400 uppercase">Selected Interface:</span>
              <div className="text-xl font-bold text-slate-900 dark:text-slate-100">{activePinpoint.interfaceName}</div>
              <div className="text-[14px] text-cyan-700 dark:text-cyan-400">{STAGES[currentStep]?.desc}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-100/60 dark:bg-black/30 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex justify-between text-[14px]"><span className="text-slate-500 dark:text-slate-400">Pinout Standard:</span><span className="text-slate-800 dark:text-slate-200 font-bold">{activePinpoint.pinoutStandard}</span></div>
              <div className="flex justify-between text-[14px]"><span className="text-slate-500 dark:text-slate-400">Operating Voltage:</span><span className="text-slate-800 dark:text-slate-200 font-bold">{activePinpoint.operatingVoltage}</span></div>
              <div className="flex justify-between text-[14px]"><span className="text-slate-500 dark:text-slate-400">Throughput Capacity:</span><span className="text-emerald-600 dark:text-emerald-400 font-bold">{activePinpoint.bandwidthGigabits} Gbps</span></div>
              <div className="flex justify-between text-[14px]"><span className="text-slate-500 dark:text-slate-400">Optical Isolation:</span><span className="text-cyan-700 dark:text-cyan-300 font-bold">{activePinpoint.hasOpticalIsolation ? 'Galvanic Optocoupler' : 'Direct Differential Trace'}</span></div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 font-mono text-[14px] text-cyan-800 dark:text-cyan-300 flex items-center gap-2">
            <ShieldCheck size={16} /> Signal Integrity Verified: Eye-diagram jitter &lt; 8ps RMS
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase">Subsystem Focus:</span>
          <span className="text-[var(--pres-accent)] font-bold">{activePinpoint.interfaceName}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400">Hardware Step {currentStep + 1} of 4</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 size={16} /> Certified Production Ready</span>
        </div>
      </div>
    </div>
  );
};
