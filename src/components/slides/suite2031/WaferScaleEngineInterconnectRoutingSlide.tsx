// lint-allow: file-size reason="WaferScaleEngineInterconnectRoutingSlide kinetic 4-step workflow" max=450
import React from 'react';
import type {
  WaferScaleEngineInterconnectRoutingSlideData,
  WaferRoutingStage,
  WaferFabricTileNode,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  Cpu,
  Network,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  Grid,
  Thermometer,
} from 'lucide-react';

const DEF_STAGES: WaferRoutingStage[] = [
  {
    stepIndex: 0,
    stageName: 'Wafer Mesh Discovery',
    stageSubtitle: '900k tensor core neighbor handshake ping across monolithic silicon wafer crossbar',
    bisectionBandwidthTbps: 180000.0,
    meshPacketDropRatePpm: 0.0,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Defect Cutout Bypass Routing',
    stageSubtitle: 'Silicon imperfection hardware re-mapping with microsecond reroute fabric detour',
    bisectionBandwidthTbps: 220000.0,
    meshPacketDropRatePpm: 0.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Dimension-Order Flit Arbitration',
    stageSubtitle: 'X-then-Y deterministic non-blocking virtual channel flit routing queues',
    bisectionBandwidthTbps: 220000.0,
    meshPacketDropRatePpm: 0.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Line-Rate Tensor Swarm Sync',
    stageSubtitle: 'All-reduce gradient collective broadcast with sub-microsecond synchronization',
    bisectionBandwidthTbps: 220000.0,
    meshPacketDropRatePpm: 0.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_TILES: WaferFabricTileNode[] = [
  {
    id: 'tile-01',
    coreCoordinates: 'X:124, Y:088',
    flitThroughputTbps: 1.25,
    thermalGradientCelsius: 62.4,
    packetLatencyPicoseconds: 420.0,
    isTileOperational: true,
    hasDeflectionRouted: false,
  },
  {
    id: 'tile-02',
    coreCoordinates: 'X:124, Y:089',
    flitThroughputTbps: 0.0,
    thermalGradientCelsius: 28.0,
    packetLatencyPicoseconds: 0.0,
    isTileOperational: false,
    hasDeflectionRouted: true,
  },
  {
    id: 'tile-03',
    coreCoordinates: 'X:124, Y:090',
    flitThroughputTbps: 1.25,
    thermalGradientCelsius: 64.1,
    packetLatencyPicoseconds: 480.0,
    isTileOperational: true,
    hasDeflectionRouted: false,
  },
  {
    id: 'tile-04',
    coreCoordinates: 'X:125, Y:088',
    flitThroughputTbps: 1.20,
    thermalGradientCelsius: 61.8,
    packetLatencyPicoseconds: 410.0,
    isTileOperational: true,
    hasDeflectionRouted: false,
  },
];

export const WaferScaleEngineInterconnectRoutingSlide: React.FC<{
  slide?: WaferScaleEngineInterconnectRoutingSlideData;
  data?: WaferScaleEngineInterconnectRoutingSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.routingStages?.length ? data.routingStages : DEF_STAGES;
  const tiles = data?.tileNodes?.length ? data.tileNodes : DEF_TILES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isMeshSynchronized = data?.isFabricMeshSynchronized ?? true;
  const hasDefectBypass = data?.hasDefectBypassConfigured ?? true;
  const hasThermalStabilized = data?.hasThermalThrottleStabilized ?? true;

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
              <Grid size={16} className="text-cyan-500" />
              {data?.kicker || 'WAFER-SCALE INTEGRATION & EXAFLOPS COMPUTE'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Cpu size={14} /> Engine: {data?.engineIdentifier || 'WSE-3-MEGAMESH-APEX'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Network size={14} className="text-purple-500" />
              Cores: {data?.totalCoresCount ? data.totalCoresCount.toLocaleString() : '900,000'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Bisection BW: {data?.bisectionBandwidthPetaBytesPerSec ?? 220.0} PB/s
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Wafer-Scale Monolithic Fabric Routing Engine'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Defect-tolerant 2D mesh topology, hardware cutout bypass, and picosecond flit transmission across 900,000 tensor cores.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Bisection BW</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {(activeStage.bisectionBandwidthTbps / 1000).toFixed(0)} PB/s
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Packet Drop</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.meshPacketDropRatePpm.toFixed(1)} PPM
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
                    {(st.bisectionBandwidthTbps / 1000).toFixed(0)} PB/s | Drop: {st.meshPacketDropRatePpm} PPM
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
        {/* Left Bento: Wafer Fabric Tiles & 2D Torus Crossbar */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Grid size={16} className="text-[var(--pres-accent)]" /> Monolithic Wafer Mesh Interconnect Grid (2D Torus)
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {tiles.map((tile, tIdx) => {
                const isCurrentTile = tIdx === currentStep || (currentStep >= 2 && tIdx >= 2);
                const isOp = tile.isTileOperational;
                return (
                  <div
                    key={tile.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentTile
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Cpu size={16} className={isOp ? 'text-cyan-500' : 'text-purple-500'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          Tile [{tile.coreCoordinates}] {tile.flitThroughputTbps.toFixed(2)} Tbps
                        </span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isOp
                              ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30'
                              : 'bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30'
                          }`}
                        >
                          {isOp ? 'Nominal' : 'Defect Bypassed'}
                        </span>
                        {tile.hasDeflectionRouted && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Routed Around
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Temp: {tile.thermalGradientCelsius}°C
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>Lat: {tile.packetLatencyPicoseconds} ps</span>
                          <ArrowRight size={12} />
                          <span className={isOp ? 'text-emerald-500' : 'text-purple-500'}>
                            {isOp ? 'LINE-RATE' : 'BYPASS-ENGAGED'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isOp ? 'bg-cyan-500' : 'bg-purple-500'
                        }`}
                        style={{ width: `${isOp ? Math.min(100, tile.flitThroughputTbps * 80) : 100}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Dimension Order: Deterministic X-then-Y virtual channels</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Zero Dropped Flits
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Thermometer size={16} className="text-cyan-500" />
              Thermal Gradients: Silicon-wide vapor chamber cooling (Sub-65°C)
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              21 Petabytes/sec On-Wafer SRAM Bandwidth
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
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Routing Mechanics
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Bisection BW</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {(activeStage.bisectionBandwidthTbps / 1000).toFixed(0)} PB/s
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Packet Loss</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.meshPacketDropRatePpm.toFixed(1)} PPM
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Fabric Mesh Synchronization</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isMeshSynchronized ? 'Monolithic 2D Torus Locked' : 'Desynchronized'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Hardware Defect Bypass</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasDefectBypass ? 'Cutout Bypass Active' : 'Unmapped Flaws'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Thermal Gradient Balancing</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {hasThermalStabilized ? 'Sub-65°C Uniform Vapor' : 'Thermal Throttling'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Wafer-scale fabric routes picosecond flits at line rate.
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
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Engine Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> 100% Line-Rate Mesh | Zero Dropped Flits | 21 PB/s On-Wafer SRAM Bandwidth
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Wafer-Scale Engine
          </span>
        </div>
      </div>
    </div>
  );
};

export default WaferScaleEngineInterconnectRoutingSlide;
