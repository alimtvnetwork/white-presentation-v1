// lint-allow: file-size reason="ChipletUciEInterconnectPipelineSlide kinetic 4-step workflow" max=450
import React from 'react';
import type {
  ChipletUciEInterconnectPipelineSlideData,
  ChipletPipelineStage,
  DieToDieLaneNode,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  Cpu,
  Layers,
  Activity,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Box,
  Eye,
} from 'lucide-react';

const DEF_STAGES: ChipletPipelineStage[] = [
  {
    stepIndex: 0,
    stageName: 'Physical Microbump Channel Training',
    stageSubtitle: 'Sub-micron lane skew calibration, receiver equalizing, and eye-opening centering',
    bandwidthLinearDensityTbpsPerMm: 2.8,
    flitLatencyNanoseconds: 1.2,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'D2D Adapter Flit Framing',
    stageSubtitle: '68-byte standard flit construction, header framing, and low-latency cyclic redundancy check (CRC)',
    bandwidthLinearDensityTbpsPerMm: 3.2,
    flitLatencyNanoseconds: 0.95,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Die-to-Die Protocol Arbitration',
    stageSubtitle: 'PCIe 6.0 and CXL 3.1 flit multiplexing over raw streaming crossbar with priority queueing',
    bandwidthLinearDensityTbpsPerMm: 3.2,
    flitLatencyNanoseconds: 0.88,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Sub-Nanosecond Line Streaming',
    stageSubtitle: 'Zero-copy HBM3e cache coherent high-bandwidth streaming across 2.5D silicon interposer',
    bandwidthLinearDensityTbpsPerMm: 3.2,
    flitLatencyNanoseconds: 0.85,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_LANES: DieToDieLaneNode[] = [
  {
    id: 'lane-01',
    laneIdentifier: 'D2D-LANE-001',
    bumpPitchMicrons: 25.0,
    laneBandwidthGbps: 32.0,
    signalEyeOpeningPicoseconds: 18.4,
    isLaneCalibrated: true,
    hasForwardErrorCorrectionLocked: true,
  },
  {
    id: 'lane-02',
    laneIdentifier: 'D2D-LANE-002',
    bumpPitchMicrons: 25.0,
    laneBandwidthGbps: 32.0,
    signalEyeOpeningPicoseconds: 17.9,
    isLaneCalibrated: true,
    hasForwardErrorCorrectionLocked: true,
  },
  {
    id: 'lane-03',
    laneIdentifier: 'D2D-LANE-003',
    bumpPitchMicrons: 25.0,
    laneBandwidthGbps: 32.0,
    signalEyeOpeningPicoseconds: 18.1,
    isLaneCalibrated: true,
    hasForwardErrorCorrectionLocked: true,
  },
  {
    id: 'lane-04',
    laneIdentifier: 'D2D-LANE-004',
    bumpPitchMicrons: 25.0,
    laneBandwidthGbps: 32.0,
    signalEyeOpeningPicoseconds: 17.6,
    isLaneCalibrated: true,
    hasForwardErrorCorrectionLocked: true,
  },
];

export const ChipletUciEInterconnectPipelineSlide: React.FC<{
  slide?: ChipletUciEInterconnectPipelineSlideData;
  data?: ChipletUciEInterconnectPipelineSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.chipletStages?.length ? data.chipletStages : DEF_STAGES;
  const lanes = data?.dieLanes?.length ? data.dieLanes : DEF_LANES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isOperational = data?.isPackageInterconnectOperational ?? true;
  const hasUcieCompliant = data?.hasUcieStandardCompliant ?? true;
  const hasThermalBalanced = data?.hasThermalDissipationBalanced ?? true;

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
              <Box size={16} className="text-cyan-500" />
              {data?.kicker || 'HETEROGENEOUS INTEGRATION & CHIPLET ARCHITECTURE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Cpu size={14} /> Package: {data?.packageIdentifier || 'UCIE-PKG-8X-TITAN'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Layers size={14} className="text-purple-500" />
              Dies: {data?.totalDieCount ?? 12} Heterogeneous
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Bandwidth: {data?.rawBandwidthTerabitsPerSec ?? 64.0} Tbps Raw
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Universal Chiplet Interconnect Express (UCIe) Pipeline'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              '2.5D silicon interposer physical layer training, D2D adapter framing, and stream protocol arbitration for sub-nanosecond latency.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Shoreline Density</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.bandwidthLinearDensityTbpsPerMm.toFixed(1)} Tbps/mm
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Flit Latency</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.flitLatencyNanoseconds.toFixed(2)} ns
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
                    {st.bandwidthLinearDensityTbpsPerMm} Tbps/mm | {st.flitLatencyNanoseconds} ns
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
        {/* Left Bento: Die-to-Die Interposer Channel Matrix & Signal Eye */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Layers size={16} className="text-[var(--pres-accent)]" /> Die-to-Die Interposer Channel Matrix & Signal Integrity
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {lanes.map((lane, lIdx) => {
                const isCurrentLane = lIdx === currentStep || (currentStep >= 2 && lIdx >= 2);
                const isCalibrated = lane.isLaneCalibrated;
                return (
                  <div
                    key={lane.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLane
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Box size={16} className={isCalibrated ? 'text-cyan-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          [{lane.laneIdentifier}] Pitch: {lane.bumpPitchMicrons}µm
                        </span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isCalibrated
                              ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isCalibrated ? 'Calibrated' : 'Deskewing'}
                        </span>
                        {lane.hasForwardErrorCorrectionLocked && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> FEC Locked
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Eye: {lane.signalEyeOpeningPicoseconds} ps
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>{lane.laneBandwidthGbps} Gbps/lane</span>
                          <ArrowRight size={12} />
                          <span className={lane.signalEyeOpeningPicoseconds >= 18.0 ? 'text-emerald-500' : 'text-cyan-500'}>
                            {lane.signalEyeOpeningPicoseconds >= 18.0 ? 'WIDE-EYE' : 'ACCEPTABLE'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isCalibrated ? 'bg-cyan-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${Math.min(100, Math.max(20, (lane.signalEyeOpeningPicoseconds / 22) * 100))}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Signal Integrity: Forward Error Correction with zero uncorrected flits</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> UCIe 2.0 / 3.0 Standard
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Eye size={16} className="text-cyan-500" />
              Shoreline Bandwidth Density: 3.2 Terabits/sec per millimeter shore
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              Energy Efficiency: 0.25 pJ/bit Sub-Picojoule Target Met
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
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Packaging Mechanics
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Linear Density</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.bandwidthLinearDensityTbpsPerMm.toFixed(1)} Tbps/mm
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Flit Latency</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.flitLatencyNanoseconds.toFixed(2)} ns
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Package Interconnect State</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isOperational ? 'UCIe Streaming Active' : 'Standby'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">UCIe 2.0 Compliance</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasUcieCompliant ? 'CXL 3.1 & PCIe 6.0 Validated' : 'Legacy Protocol'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Thermal Gradient Balancing</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {hasThermalBalanced ? '3D Stacking Heat Balanced' : 'Hotspot Throttling'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. UCIe interconnect streams flits with sub-nanosecond delay.
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
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Package Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> UCIe 2.0 Streaming | Flit Latency: 0.85ns | Energy: 0.25 pJ/bit Target Met
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 UCIe Chiplet
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChipletUciEInterconnectPipelineSlide;
