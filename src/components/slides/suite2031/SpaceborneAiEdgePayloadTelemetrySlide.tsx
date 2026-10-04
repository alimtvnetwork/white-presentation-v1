// lint-allow: file-size reason="SpaceborneAiEdgePayloadTelemetrySlide flat sovereign orbital telemetry" max=450
import React from 'react';
import type {
  SpaceborneAiEdgePayloadTelemetrySlideData,
  OrbitalPayloadSubsystem,
  RadiationShieldMetric,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Satellite,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Server,
  Layers,
  Thermometer,
  Radio,
  Zap,
  Cpu,
  Globe,
} from 'lucide-react';

const DEF_SUBSYSTEMS: OrbitalPayloadSubsystem[] = [
  {
    id: 'sub-01',
    subsystemName: 'Primary Neural Edge Core',
    processorType: 'Rad-Hard SOI RISC-V 32-Core (32 TOPS)',
    powerDrawWatts: 34.0,
    inferenceRateFramesPerSec: 120.0,
    junctionTemperatureCelsius: 48.2,
    isSubsystemNominal: true,
    hasSingleEventUpsetProtected: true,
  },
  {
    id: 'sub-02',
    subsystemName: 'Hyperspectral Vision Co-Processor',
    processorType: 'Optical Tensor Core ASIC (64 TOPS)',
    powerDrawWatts: 42.0,
    inferenceRateFramesPerSec: 240.0,
    junctionTemperatureCelsius: 51.0,
    isSubsystemNominal: true,
    hasSingleEventUpsetProtected: true,
  },
  {
    id: 'sub-03',
    subsystemName: 'Autonomous Orbital Guidance AI',
    processorType: 'Rad-Hard Neuromorphic Vector DSP',
    powerDrawWatts: 28.5,
    inferenceRateFramesPerSec: 180.0,
    junctionTemperatureCelsius: 45.8,
    isSubsystemNominal: true,
    hasSingleEventUpsetProtected: true,
  },
  {
    id: 'sub-04',
    subsystemName: 'Downlink Compression Engine',
    processorType: 'H.266/VVC Hardware Transform Encoder',
    powerDrawWatts: 22.0,
    inferenceRateFramesPerSec: 60.0,
    junctionTemperatureCelsius: 43.1,
    isSubsystemNominal: true,
    hasSingleEventUpsetProtected: true,
  },
];

const DEF_RAD_METRICS: RadiationShieldMetric[] = [
  {
    id: 'rad-01',
    sensorLocation: 'Primary Core Die Shield',
    accumulatedTidKrad: 18.4,
    protonFluxPerCm2Sec: 1200.0,
    isWithinToleranceLimit: true,
  },
  {
    id: 'rad-02',
    sensorLocation: 'External Solar Array Mast',
    accumulatedTidKrad: 42.1,
    protonFluxPerCm2Sec: 4800.0,
    isWithinToleranceLimit: true,
  },
  {
    id: 'rad-03',
    sensorLocation: 'Optical Sensor Baffle',
    accumulatedTidKrad: 24.6,
    protonFluxPerCm2Sec: 2100.0,
    isWithinToleranceLimit: true,
  },
  {
    id: 'rad-04',
    sensorLocation: 'Star Tracker Processing Bus',
    accumulatedTidKrad: 15.2,
    protonFluxPerCm2Sec: 950.0,
    isWithinToleranceLimit: true,
  },
];

export const SpaceborneAiEdgePayloadTelemetrySlide: React.FC<{
  slide?: SpaceborneAiEdgePayloadTelemetrySlideData;
  data?: SpaceborneAiEdgePayloadTelemetrySlideData;
  activeStep?: number;
}> = ({ slide, data: propData }) => {
  const data = slide || propData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const subsystems = data?.subsystems?.length ? data.subsystems : DEF_SUBSYSTEMS;
  const radMetrics = data?.radiationMetrics?.length ? data.radiationMetrics : DEF_RAD_METRICS;

  const payloadId = data?.payloadIdentifier || 'SPACE-EDGE-RADHARD-01';
  const altitudeKm = data?.orbitalAltitudeKm ?? 600.0;
  const compressionRatio = data?.downlinkCompressionRatio ?? 48.0;
  const isInferenceActive = data?.isAutonomousInferenceActive ?? true;
  const hasShieldIntact = data?.hasRadHardShieldIntact ?? true;
  const hasThermalEquilibrium = data?.hasThermalEquilibriumMaintained ?? true;
  const hasGlow = data?.hasTelemetryGlow ?? true;

  const totalPowerWatts = subsystems.reduce((acc, sub) => acc + sub.powerDrawWatts, 0);

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
              className="font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2"
            >
              <Satellite size={16} className="text-cyan-500" />
              {data?.kicker || 'AEROSPACE DEFENSE & SATELLITE EDGE AI'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Server size={14} /> Payload: {payloadId}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Globe size={14} className="text-emerald-500" />
              Orbit: {altitudeKm.toFixed(0)} km SSO
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Radio size={14} className="text-purple-500" />
              Downlink Compression: {compressionRatio.toFixed(0)}:1
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Spaceborne AI Edge Accelerator Payload Telemetry'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Radiation-hardened edge computing, real-time Earth observation inference, and vacuum thermal balance.'}
          </p>
        </div>

        {/* Telemetry Hero Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Total Payload Power</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[28px] leading-tight">
              {totalPowerWatts.toFixed(1)} W
            </span>
          </div>
          <div className="w-[1px] h-10 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Primary TID Dose</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[28px] leading-tight">
              {radMetrics[0]?.accumulatedTidKrad.toFixed(1)} krad
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
        {/* Left Bento: Orbital Neural Accelerators & Thermal Bus */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Cpu size={16} className="text-[var(--pres-accent)]" /> Orbital Neural Accelerators & Thermal Bus
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-bold border border-emerald-500/20">
                Triple Modular Redundancy (TMR) Active
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {subsystems.map((sub) => {
                const isNominal = sub.isSubsystemNominal;
                return (
                  <div
                    key={sub.id}
                    className="p-3.5 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Satellite size={16} className="text-cyan-500" />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{sub.subsystemName}</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isNominal
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isNominal ? 'Nominal' : 'Degraded'}
                        </span>
                        {sub.hasSingleEventUpsetProtected && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-purple-500/15 text-purple-800 dark:text-purple-300 border border-purple-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> SEU Scrubbed
                          </span>
                        )}
                      </div>
                      <span className="font-bold text-cyan-700 dark:text-cyan-400">
                        {sub.inferenceRateFramesPerSec.toFixed(0)} FPS Inference
                      </span>
                    </div>

                    <div className="text-[14px] font-mono text-slate-600 dark:text-slate-400 mb-2">
                      <span>Architecture: {sub.processorType}</span>
                      <span className="mx-2">•</span>
                      <span>Draw: {sub.powerDrawWatts.toFixed(1)} W</span>
                    </div>

                    {/* Thermal Junction Meter */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[14px] font-mono text-slate-600 dark:text-slate-400">
                        <span>Junction Temperature:</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">
                          +{sub.junctionTemperatureCelsius.toFixed(1)}°C (Operating Limit: +85.0°C)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 transition-all duration-500"
                          style={{ width: `${(sub.junctionTemperatureCelsius / 85.0) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between text-[14px] font-mono text-slate-500 dark:text-slate-400">
            <span>Thermal Equilibrium: Louver Radiators & Heat Pipes Balanced</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 size={14} /> Real-Time Target Latency: 8.2ms
            </span>
          </div>
        </div>

        {/* Right Bento: Radiation Dosimetry & Downlink Bandwidth */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Thermometer size={16} className="text-purple-500" /> Radiation Dosimetry & Shield Health
              </span>
              <span className="font-mono text-[14px] text-cyan-700 dark:text-cyan-400 font-bold">
                100 krad Hardening
              </span>
            </div>

            <div className="space-y-3.5 mt-4 font-mono text-[14px]">
              {radMetrics.map((r) => (
                <div
                  key={r.id}
                  className="p-3.5 rounded-xl bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block text-[15px]">
                      {r.sensorLocation}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                      Flux: {r.protonFluxPerCm2Sec.toLocaleString()} p+/cm²•s
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 text-[16px] block">
                      {r.accumulatedTidKrad.toFixed(1)} krad
                    </span>
                    <span className="text-[14px] font-bold text-cyan-700 dark:text-cyan-400">
                      WITHIN TOLERANCE
                    </span>
                  </div>
                </div>
              ))}

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Autonomous Inference Loop</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {isInferenceActive ? 'Active (Zero Ground Intervention)' : 'Standby'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Rad-Hard Shield Integrity</span>
                  <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                    <CheckCircle2 size={16} /> {hasShieldIntact ? 'Hermetic & Intact' : 'Compromised'}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-300">Vacuum Thermal Balance</span>
                  <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                    <Layers size={16} /> {hasThermalEquilibrium ? 'Stabilized (Delta-T < 12K)' : 'Fluctuating'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-cyan-500 shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Downlink compression ratio of {compressionRatio.toFixed(0)}:1 eliminates RF bandwidth bottlenecks from low Earth orbit.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div
        style={{ backdropFilter: 'blur(14px)' }}
        className={`plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-[14px] z-10 ${
          hasGlow ? 'shadow-cyan-500/10' : ''
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Orbital Telemetry:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Autonomous Orbital Edge Active | Zero Downlink Bottlenecks | Real-time Target Identification: 8.2ms
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Spaceborne AI
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpaceborneAiEdgePayloadTelemetrySlide;
