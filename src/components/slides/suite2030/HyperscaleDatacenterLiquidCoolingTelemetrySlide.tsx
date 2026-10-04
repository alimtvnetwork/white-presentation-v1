// lint-allow: file-size reason="HyperscaleDatacenterLiquidCoolingTelemetrySlide flat sovereign datacenter liquid cooling telemetry" max=420
import React from 'react';
import type {
  HyperscaleDatacenterLiquidCoolingTelemetrySlideData,
  LiquidCoolingLoopNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Thermometer,
  Droplets,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Wind,
  Zap,
  Building,
  Sparkles,
} from 'lucide-react';

const DEF_LOOPS: LiquidCoolingLoopNode[] = [
  {
    id: 'cl-01',
    loopIdentifier: 'DTC-GPU-CLUSTER-PRIMARY',
    coolantType: 'Deionized Water Glycol',
    supplyTemperatureCelsius: 24.2,
    returnTemperatureCelsius: 44.8,
    flowRateLitersPerMin: 1450,
    pumpHealthPercentage: 99.8,
    isLoopBalanced: true,
    hasCavitationDetected: false,
  },
  {
    id: 'cl-02',
    loopIdentifier: 'IMMERSION-TANK-SECONDARY',
    coolantType: 'Synthetic Dielectric Fluid',
    supplyTemperatureCelsius: 32.0,
    returnTemperatureCelsius: 48.2,
    flowRateLitersPerMin: 650,
    pumpHealthPercentage: 99.4,
    isLoopBalanced: true,
    hasCavitationDetected: false,
  },
  {
    id: 'cl-03',
    loopIdentifier: 'DISTRICT-HEAT-EXCHANGE-TERTIARY',
    coolantType: 'Treated Water Loop',
    supplyTemperatureCelsius: 18.5,
    returnTemperatureCelsius: 42.5,
    flowRateLitersPerMin: 820,
    pumpHealthPercentage: 99.9,
    isLoopBalanced: true,
    hasCavitationDetected: false,
  },
];

export const HyperscaleDatacenterLiquidCoolingTelemetrySlide: React.FC<{
  slide?: HyperscaleDatacenterLiquidCoolingTelemetrySlideData;
  data?: HyperscaleDatacenterLiquidCoolingTelemetrySlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const loops = data?.coolingLoops?.length ? data.coolingLoops : DEF_LOOPS;
  const facility = data?.datacenterFacilityName || 'Hyperscale Sovereign Pod 01';
  const pue = data?.powerUsageEffectivenessPue ?? 1.08;
  const heatRejected = data?.totalThermalHeatRejectedMw ?? 45.2;
  const hasGlow = data?.hasTelemetryGlow ?? true;

  const totalFlow = loops.reduce((acc, curr) => acc + curr.flowRateLitersPerMin, 0);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[56px_76px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[clamp(0.875rem,1.2vw,1.0rem)] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-2">
              <Droplets size={16} className="text-cyan-600 dark:text-cyan-400" />
              {data?.kicker || 'SUSTAINABLE INFRASTRUCTURE & THERMAL DYNAMICS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Building size={14} /> Facility: {facility}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
              PUE Target: {pue.toFixed(2)} OPTIMIZED
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-2">
              <Zap size={14} className="text-indigo-600 dark:text-indigo-400" />
              Heat Load: {heatRejected.toFixed(1)} MW
            </span>
          </div>

          <h1
            className="text-[clamp(2.0rem,2.8vw,2.75rem)] font-ubuntu font-bold tracking-tight mb-2 leading-tight"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Hyperscale Datacenter Liquid Cooling Telemetry'}
          </h1>
          <p
            className="font-poppins text-[clamp(1.0rem,1.4vw,1.125rem)] text-slate-700 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Real-time thermal equilibrium across direct-to-chip microchannels and immersion cooling loops.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center gap-6 font-mono">
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Measured PUE</span>
            <span className="text-[clamp(2.75rem,5.0vw,4.5rem)] font-bold leading-none text-emerald-700 dark:text-emerald-400">
              {pue.toFixed(2)}
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Total Heat Rejected</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[24px]">
              {heatRejected.toFixed(1)} MW
            </span>
            <span className="block text-[14px] text-slate-500 dark:text-slate-400">
              {totalFlow.toLocaleString()} L/min flow
            </span>
          </div>
          <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-600 dark:text-slate-400 block uppercase text-[14px] font-semibold">Lead Architect</span>
            <span className="text-slate-900 dark:text-slate-100 font-bold text-[16px] block">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
            <span className="text-[14px] text-[var(--pres-accent)] font-semibold">
              {data?.leadRole || 'Chief Software Engineer'}
            </span>
          </div>
        </div>
      </div>

      {/* Main 3-Column Cooling Loops Bento Grid */}
      <div className="grid grid-cols-3 gap-6 z-10 my-auto items-stretch h-[540px]">
        {loops.map((loop, idx) => {
          const deltaT = (loop.returnTemperatureCelsius - loop.supplyTemperatureCelsius).toFixed(1);
          const accentColorClass =
            idx === 0
              ? 'border-cyan-500/40 bg-cyan-500/5'
              : idx === 1
              ? 'border-indigo-500/40 bg-indigo-500/5'
              : 'border-emerald-500/40 bg-emerald-500/5';

          const badgeClass =
            idx === 0
              ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30'
              : idx === 1
              ? 'bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 border-indigo-500/30'
              : 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30';

          return (
            <div
              key={loop.id}
              className={`plane-1-raised rounded-2xl border p-6 flex flex-col justify-between shadow-xl backdrop-blur-[14px] ${accentColorClass}`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
                  <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <Thermometer size={18} className="text-[var(--pres-accent)]" /> Loop 0{idx + 1}
                  </span>
                  <span className={`font-mono text-[14px] px-3 py-1 rounded-full font-bold border ${badgeClass}`}>
                    {loop.isLoopBalanced ? 'LOOP BALANCED' : 'REBALANCING'}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="font-mono font-bold text-[16px] text-slate-900 dark:text-slate-100 mb-1">
                    {loop.loopIdentifier}
                  </div>
                  <div className="font-mono text-[14px] text-slate-600 dark:text-slate-400 mb-4">
                    Coolant: <strong className="text-slate-800 dark:text-slate-200">{loop.coolantType}</strong>
                  </div>
                </div>

                {/* Thermal Stats Grid */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="p-3 rounded-xl bg-[var(--pres-bg)]/80 border border-[var(--pres-border)]">
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px]">Supply Temp</span>
                    <span className="text-[22px] font-bold text-cyan-700 dark:text-cyan-400">
                      {loop.supplyTemperatureCelsius.toFixed(1)}°C
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[var(--pres-bg)]/80 border border-[var(--pres-border)]">
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px]">Return Temp</span>
                    <span className="text-[22px] font-bold text-amber-800 dark:text-amber-400">
                      {loop.returnTemperatureCelsius.toFixed(1)}°C
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[var(--pres-bg)]/80 border border-[var(--pres-border)]">
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px]">Temp Delta (ΔT)</span>
                    <span className="text-[22px] font-bold text-emerald-700 dark:text-emerald-400">
                      +{deltaT}°C
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[var(--pres-bg)]/80 border border-[var(--pres-border)]">
                    <span className="text-slate-500 dark:text-slate-400 block text-[14px]">Flow Rate</span>
                    <span className="text-[22px] font-bold text-indigo-700 dark:text-indigo-400">
                      {loop.flowRateLitersPerMin} <span className="text-[14px] font-normal">L/m</span>
                    </span>
                  </div>
                </div>

                {/* Delta T Progress Bar */}
                <div className="mt-4 font-mono">
                  <div className="flex justify-between text-[14px] text-slate-600 dark:text-slate-400 mb-1.5">
                    <span>Pump Reliability Index</span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">{loop.pumpHealthPercentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${loop.pumpHealthPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 size={15} /> Cavitation: None
                </span>
                <span>Active 24/7 telemetry</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Plane 2 Telemetry Footer */}
      <div className={`plane-1-raised z-10 px-6 py-3.5 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-[14px] flex items-center justify-between font-mono text-[14px] text-slate-700 dark:text-slate-300 shadow-md ${hasGlow ? 'shadow-cyan-500/10' : ''}`}>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            COOLING STATUS: OPTIMAL EQUILIBRIUM
          </span>
          <span>Energy Savings: <strong className="text-emerald-700 dark:text-emerald-400">38% vs Air Cooling</strong></span>
          <span>Thermal Runaway Auto-Shutdown: <strong className="text-[var(--pres-accent)]">ARMED</strong></span>
        </div>
        <div className="flex items-center gap-6">
          <span>Lead Architect: <strong>{data?.leadArchitect || 'Alim Ul Karim'}</strong>, <span className="text-[var(--pres-accent)]">{data?.leadRole || 'Chief Software Engineer'}</span></span>
          <span className="text-slate-500 dark:text-slate-400">16:9 4K Precision DOM Standard</span>
        </div>
      </div>
    </div>
  );
};

export default HyperscaleDatacenterLiquidCoolingTelemetrySlide;
