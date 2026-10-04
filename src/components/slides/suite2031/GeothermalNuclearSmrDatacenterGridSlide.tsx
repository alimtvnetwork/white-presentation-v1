// lint-allow: file-size reason="GeothermalNuclearSmrDatacenterGridSlide flat sovereign power grid" max=450
import React from 'react';
import type {
  GeothermalNuclearSmrDatacenterGridSlideData,
  PowerGenerationSource,
  GridLoadMetric,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Zap,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Server,
  Layers,
  ThermometerSnowflake,
  Flame,
  Gauge,
  Factory,
} from 'lucide-react';

const DEF_SOURCES: PowerGenerationSource[] = [
  {
    id: 'gen-01',
    facilityName: 'SMR Modular Reactor Array Alpha',
    technologyType: '4th Gen SMR Light Water Reactor',
    outputCapacityMegawatts: 600.0,
    capacityFactorPercentage: 96.5,
    levelizedCostOfEnergyUsdPerMwh: 52.0,
    isOnlineOperational: true,
    hasCarbonFreeCertificateValid: true,
  },
  {
    id: 'gen-02',
    facilityName: 'Super-Deep Closed-Loop Geothermal',
    technologyType: 'EGS Deep Horizontal Well Bore (5km)',
    outputCapacityMegawatts: 600.0,
    capacityFactorPercentage: 98.2,
    levelizedCostOfEnergyUsdPerMwh: 44.0,
    isOnlineOperational: true,
    hasCarbonFreeCertificateValid: true,
  },
  {
    id: 'gen-03',
    facilityName: 'NuScale VOYGR SMR Cluster Beta',
    technologyType: 'Passively Safe Multi-Module Nuclear',
    outputCapacityMegawatts: 300.0,
    capacityFactorPercentage: 97.1,
    levelizedCostOfEnergyUsdPerMwh: 50.5,
    isOnlineOperational: true,
    hasCarbonFreeCertificateValid: true,
  },
  {
    id: 'gen-04',
    facilityName: 'Supercritical Geothermal Wellfield Gamma',
    technologyType: 'Supercritical Deep Crustal System (400°C)',
    outputCapacityMegawatts: 300.0,
    capacityFactorPercentage: 99.1,
    levelizedCostOfEnergyUsdPerMwh: 42.0,
    isOnlineOperational: true,
    hasCarbonFreeCertificateValid: true,
  },
];

const DEF_LOAD_METRICS: GridLoadMetric[] = [
  {
    id: 'm-01',
    metricName: 'Grid Frequency Stability',
    metricValue: '60.002 Hz',
    targetThreshold: '+/- 0.05 Hz',
    isWithinOptimalRange: true,
  },
  {
    id: 'm-02',
    metricName: 'Power Usage Effectiveness',
    metricValue: '1.042 PUE',
    targetThreshold: '< 1.08 PUE',
    isWithinOptimalRange: true,
  },
  {
    id: 'm-03',
    metricName: 'Direct Liquid Heat Recovery',
    metricValue: '82.5% Captured',
    targetThreshold: '> 80.0%',
    isWithinOptimalRange: true,
  },
  {
    id: 'm-04',
    metricName: '24/7 CFE Baseload Matching',
    metricValue: '100.0% Clean',
    targetThreshold: '100.0%',
    isWithinOptimalRange: true,
  },
];

export const GeothermalNuclearSmrDatacenterGridSlide: React.FC<{
  slide?: GeothermalNuclearSmrDatacenterGridSlideData;
  data?: GeothermalNuclearSmrDatacenterGridSlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const sources = data?.generationSources?.length ? data.generationSources : DEF_SOURCES;
  const metrics = data?.loadMetrics?.length ? data.loadMetrics : DEF_LOAD_METRICS;

  const clusterId = data?.gridClusterIdentifier || 'GIGAWATT-CAMPUS-GRID-01';
  const baseloadMw = data?.totalBaseloadCapacityMegawatts ?? 1200.0;
  const pue = data?.powerUsageEffectivenessPue ?? 1.042;
  const isSynchronized = data?.isGridSynchronized ?? true;
  const hasZeroCarbon = data?.hasZeroCarbonBaseloadGuaranteed ?? true;
  const hasCoolingPressurized = data?.hasCoolingLoopPressurized ?? true;
  const hasGlow = data?.hasTelemetryGlow ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.0rem)' }}
              className="font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"
            >
              <Zap size={16} className="text-emerald-500" />
              {data?.kicker || 'SUSTAINABLE INFRASTRUCTURE & HYPERSCALE ENERGY'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Factory size={14} /> Grid: {clusterId}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Flame size={14} className="text-cyan-500" />
              Baseload: {baseloadMw.toLocaleString()} MW CFE
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Gauge size={14} className="text-purple-500" />
              Efficiency: {pue.toFixed(3)} PUE
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Geothermal & Nuclear SMR Hyperscale Power Grid'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              '24/7 gigawatt-scale carbon-free baseload, super-deep closed-loop wells, and sub-1.05 PUE efficiency.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Baseload Output</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[28px] leading-tight">
              {baseloadMw.toLocaleString()} MW
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">PUE Rating</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[28px] leading-tight">
              {pue.toFixed(3)}
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold block text-[15px]">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
            <span className="text-[var(--pres-accent)] text-[14px]">
              {data?.leadRole || 'Chief Software Engineer'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[560px]">
        {/* Left Bento: Generation Sources (SMR + Geothermal Grid Matrix) */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Factory size={16} className="text-[var(--pres-accent)]" /> 24/7 Baseload Generation Fleet (SMR & Geothermal)
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-bold border border-emerald-500/20">
                100% Carbon-Free Baseload
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {sources.map((src) => {
                const isOnline = src.isOnlineOperational;
                return (
                  <div
                    key={src.id}
                    className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Flame size={16} className="text-emerald-500" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{src.facilityName}</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isOnline
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isOnline ? 'Online Operational' : 'Standby'}
                        </span>
                        {src.hasCarbonFreeCertificateValid && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> CFE Certified
                          </span>
                        )}
                      </div>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400">
                        {src.outputCapacityMegawatts.toFixed(0)} MW Output
                      </span>
                    </div>

                    <div className="text-[14px] font-mono text-slate-600 dark:text-slate-400 mb-2">
                      <span>Tech: {src.technologyType}</span>
                      <span className="mx-2">•</span>
                      <span>LCOE: ${src.levelizedCostOfEnergyUsdPerMwh.toFixed(2)} / MWh</span>
                    </div>

                    {/* Capacity Factor Progress */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
                        <span>Capacity Factor:</span>
                        <span className="font-bold text-cyan-700 dark:text-cyan-400">
                          {src.capacityFactorPercentage.toFixed(1)}% Optimal Uptime
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 transition-all duration-500"
                          style={{ width: `${src.capacityFactorPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-500 dark:text-slate-400">
            <span>Grid Synchronization: Dual-Bus Frequency Phase-Locked</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 size={14} /> Zero Intermittent Curtailment Loss
            </span>
          </div>
        </div>

        {/* Right Bento: PUE, Micro-Grid Telemetry & Closed-Loop Thermal */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <ThermometerSnowflake size={16} className="text-cyan-500" /> Grid Load Metrics & Thermal Sink
              </span>
              <span className="font-mono text-[14px] text-emerald-700 dark:text-emerald-400 font-bold">
                PUE 1.042 Sub-Bar
              </span>
            </div>

            <div className="space-y-3.5 mt-4 font-mono text-[14px]">
              {metrics.map((m) => (
                <div
                  key={m.id}
                  className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block text-[15px]">
                      {m.metricName}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                      Target Range: {m.targetThreshold}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 text-[16px] block">
                      {m.metricValue}
                    </span>
                    <span className="text-[14px] font-bold text-cyan-700 dark:text-cyan-400">
                      OPTIMAL RANGE
                    </span>
                  </div>
                </div>
              ))}

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Micro-Grid Synchronized</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {isSynchronized ? 'Phase-Locked (60.002 Hz)' : 'Desynchronized'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Zero-Carbon Guarantee</span>
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {hasZeroCarbon ? '24/7 Match (Scope 1 & 2 Zero)' : 'Pending'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Cooling Loop Pressure</span>
                  <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                    <Layers size={16} /> {hasCoolingPressurized ? 'Closed-Loop Sealed (0 Gallons)' : 'Open Loop'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-emerald-500 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              SMR + Geothermal hybrid baseload supplies continuous gigawatt power with zero water evaporation losses.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div
        style={{ backdropFilter: 'blur(14px)' }}
        className={`plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-[14px] z-10 ${
          hasGlow ? 'shadow-emerald-500/10' : ''
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Baseload Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> 24/7 Zero-Carbon Baseload Active | Reserve Margin: 32% | Closed-Loop Water Consumption: 0.00 Gallons
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Sovereign Grid
          </span>
        </div>
      </div>
    </div>
  );
};

export default GeothermalNuclearSmrDatacenterGridSlide;
