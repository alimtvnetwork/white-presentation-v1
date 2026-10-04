// lint-allow: file-size reason="PhotonicInterconnectOpticalMeshSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  PhotonicInterconnectOpticalMeshSlideData,
  OpticalStage,
  OpticalChannelNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  Radio,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  Orbit,
  Gauge,
} from 'lucide-react';

const DEF_STAGES: OpticalStage[] = [
  {
    stepIndex: 0,
    stageName: 'Micro-comb Laser Generation & Resonator Modulation',
    stageSubtitle: 'Multi-wavelength soliton frequency combs drive silicon photonic electro-optic modulators',
    totalMeshBandwidthPbps: 1.2,
    opticalSwitchLatencyNs: 45.0,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Dense Wavelength Division Multiplexing (DWDM)',
    stageSubtitle: '64 discrete optical lambda carriers multiplex across ultra-low-loss silicon waveguides',
    totalMeshBandwidthPbps: 2.8,
    opticalSwitchLatencyNs: 28.5,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'MEMS Optical Circuit Switch Routing',
    stageSubtitle: 'Non-blocking micro-electro-mechanical photonic switches route flows with sub-10ns reconfiguration',
    totalMeshBandwidthPbps: 5.4,
    opticalSwitchLatencyNs: 12.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Co-Packaged Optics & All-Photonic Fabric',
    stageSubtitle: 'Direct die-to-fiber packaging bypasses copper SerDes achieving 8.0 Pbps optical tensor fabric',
    totalMeshBandwidthPbps: 8.0,
    opticalSwitchLatencyNs: 4.2,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_CHANNELS: OpticalChannelNode[] = [
  {
    id: 'opt-channel-1310-0',
    wavelengthNanometers: 1310.0,
    bandwidthGigabitsPerSec: 800,
    attenuationDecibels: 0.18,
    bitErrorRateExponent: -15,
    isChannelCalibrated: true,
    hasWdmMultiplexed: true,
  },
  {
    id: 'opt-channel-1310-8',
    wavelengthNanometers: 1310.8,
    bandwidthGigabitsPerSec: 800,
    attenuationDecibels: 0.20,
    bitErrorRateExponent: -15,
    isChannelCalibrated: true,
    hasWdmMultiplexed: true,
  },
  {
    id: 'opt-channel-1550-0',
    wavelengthNanometers: 1550.0,
    bandwidthGigabitsPerSec: 1600,
    attenuationDecibels: 0.12,
    bitErrorRateExponent: -16,
    isChannelCalibrated: true,
    hasWdmMultiplexed: true,
  },
  {
    id: 'opt-channel-1550-8',
    wavelengthNanometers: 1550.8,
    bandwidthGigabitsPerSec: 1600,
    attenuationDecibels: 0.14,
    bitErrorRateExponent: -16,
    isChannelCalibrated: true,
    hasWdmMultiplexed: true,
  },
];

export const PhotonicInterconnectOpticalMeshSlide: React.FC<{
  slide?: PhotonicInterconnectOpticalMeshSlideData;
  data?: PhotonicInterconnectOpticalMeshSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.opticalStages?.length ? data.opticalStages : DEF_STAGES;
  const channels = data?.opticalChannels?.length ? data.opticalChannels : DEF_CHANNELS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isSwitchAligned = data?.isOpticalSwitchAligned ?? true;
  const hasWdm = data?.hasWavelengthMultiplexingActive ?? true;
  const hasZeroLoss = data?.hasZeroPacketLossMaintained ?? true;

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
              className="font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2"
            >
              <Radio size={16} className="text-cyan-500" />
              {data?.kicker || 'CO-PACKAGED OPTICAL FABRIC'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Orbit size={14} /> Mesh: {data?.meshIdentifier || 'photonic-mesh-lumina-8'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Bandwidth: {data?.totalOpticalBandwidthPbps ? data.totalOpticalBandwidthPbps.toFixed(1) : '8.0'} Pbps
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Gauge size={14} className="text-purple-500" />
              Wavelengths: {data?.laserWavelengthCount ?? 64} DWDM
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Photonic Interconnect Optical Mesh'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Co-packaged all-photonic switching fabric delivering sub-5ns latency across petabit tensor superclusters.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Switch Latency</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.opticalSwitchLatencyNs.toFixed(1)} ns
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Fabric Bandwidth</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.totalMeshBandwidthPbps.toFixed(1)} Pbps
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Kinetic 4-Step Nav Rail */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {stages.map((st, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;
          const lifecycleStyle = getStepLifecycleStyle(
            isActive ? 'active' : isCompleted ? 'completed' : 'future',
            'var(--pres-accent)',
            'var(--pres-border)'
          );

          return (
            <button
              key={st.stepIndex}
              onClick={() => jumpToStep(idx)}
              style={lifecycleStyle}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer font-mono text-[14px] flex items-center justify-between ${
                isActive
                  ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-2xl scale-[1.02] text-[var(--pres-text)] ring-2 ring-[var(--pres-accent)] font-bold animate-kinetic-step-reveal'
                  : isCompleted
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 opacity-75'
                  : 'border-[var(--pres-border)] bg-[var(--pres-bg-card)] opacity-[0.38] text-slate-500 dark:text-slate-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[14px] ${
                    isActive
                      ? 'bg-[var(--pres-accent)] text-white'
                      : isCompleted
                      ? 'bg-emerald-500 text-white dark:text-slate-900'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <div>
                  <div className="font-bold leading-tight">{st.stageName}</div>
                  <div className="text-[14px] opacity-75 font-normal">
                    {st.opticalSwitchLatencyNs}ns latency | {st.totalMeshBandwidthPbps} Pbps
                  </div>
                </div>
              </div>
              <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/60">
                Step {idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-12 gap-6 z-10 my-auto items-stretch h-[540px]">
        {/* Left Bento: DWDM Lambda Optical Channels */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Radio size={16} className="text-[var(--pres-accent)]" /> DWDM Lambda Wavelength Carriers & Bit Error Rates
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {channels.map((chan, cIdx) => {
                const isCurrentLayer = cIdx === currentStep || (currentStep >= 2 && cIdx >= 2);
                const isCalibrated = chan.isChannelCalibrated;
                return (
                  <div
                    key={chan.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Radio size={16} className={isCalibrated ? 'text-cyan-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">λ = {chan.wavelengthNanometers.toFixed(1)} nm</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isCalibrated
                              ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isCalibrated ? 'Phase Locked' : 'Drift'}
                        </span>
                        {chan.hasWdmMultiplexed && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> BER 10^{chan.bitErrorRateExponent}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Attenuation: {chan.attenuationDecibels.toFixed(2)} dB/cm
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>{chan.bandwidthGigabitsPerSec} Gbps</span>
                          <ArrowRight size={12} />
                          <span className="text-emerald-700 dark:text-emerald-400">ACTIVE</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full transition-all duration-700 bg-cyan-500"
                        style={{ width: `${Math.min(100, (chan.bandwidthGigabitsPerSec / 1600) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Zero-Copper SerDes Bypass: Silicon Waveguide Coupled</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Zero Thermal Throttling
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap size={16} className="text-cyan-500" />
              Optical Mesh: 64 DWDM carriers operating in 1310nm/1550nm telecommunication windows
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              Sub-5ns Cluster-Wide Latency
            </span>
          </div>
        </div>

        {/* Right Bento: Active Stage Architecture & Verification */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-5 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)] font-mono text-[14px]">
              <span className="font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Photonic Mechanics
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 font-bold text-[14px] border border-emerald-500/30">
                Phase {currentStep + 1} Active
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60">
              <h3 className="text-[20px] font-ubuntu font-bold text-slate-900 dark:text-white mb-1">
                {activeStage.stageName}
              </h3>
              <p className="font-poppins text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {activeStage.stageSubtitle}
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-[14px]">
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Switch Latency</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.opticalSwitchLatencyNs.toFixed(1)} ns
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Throughput</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.totalMeshBandwidthPbps.toFixed(1)} Pbps
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">MEMS Switch Alignment</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isSwitchAligned ? 'Sub-nanosecond Phase Locked' : 'Misaligned'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">DWDM Wavelength Multiplicity</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasWdm ? '64 Lambda Concurrent' : 'Single Lambda'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Packet Loss Tolerance</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {hasZeroLoss ? 'Zero Drop Guaranteed' : 'Buffering'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. All-optical fabric routes AI tensor streams without electrical conversion.
            </span>
          </div>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div
        style={{ backdropFilter: 'blur(14px)' }}
        className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center justify-between font-mono text-[14px] z-10"
      >
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Optical State:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> 8.0 Pbps Optical Throughput | 4.2ns Switch Latency | Zero Packet Drop Maintained
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2030 Photonic Mesh
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotonicInterconnectOpticalMeshSlide;
