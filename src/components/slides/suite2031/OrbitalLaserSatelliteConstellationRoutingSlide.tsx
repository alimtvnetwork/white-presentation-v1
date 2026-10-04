// lint-allow: file-size reason="OrbitalLaserSatelliteConstellationRoutingSlide kinetic 4-step workflow" max=450
import React from 'react';
import type {
  OrbitalLaserSatelliteConstellationRoutingSlideData,
  LaserRoutingStage,
  SatelliteLinkNode,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  Satellite,
  Radio,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Compass,
} from 'lucide-react';

const DEF_STAGES: LaserRoutingStage[] = [
  {
    stepIndex: 0,
    stageName: 'Ephemeris Orbital Alignment',
    stageSubtitle: 'Coarse GPS telemetry alignment across 550km low-Earth orbit constellation shell',
    intersatelliteLatencyMs: 48.0,
    opticalBitErrorRatePower: -9.0,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'PAT Optical Acquisition Lock',
    stageSubtitle: 'Fast-steering piezo mirror sub-microradian optical beacon beam acquisition and lock',
    intersatelliteLatencyMs: 38.0,
    opticalBitErrorRatePower: -11.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Doppler Frequency Compensation',
    stageSubtitle: '+/- 12 GHz orbital velocity optical carrier frequency drift tracking and phase lock',
    intersatelliteLatencyMs: 34.0,
    opticalBitErrorRatePower: -12.0,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Multi-Hop Cross-Orbit Routing',
    stageSubtitle: 'Dynamic Dijkstra optical packet forwarding with 100 Gbps line-rate vacuum switching',
    intersatelliteLatencyMs: 32.4,
    opticalBitErrorRatePower: -13.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_SATELLITES: SatelliteLinkNode[] = [
  {
    id: 'sat-01',
    satelliteCallsign: 'AETHER-SAT-104',
    orbitalShellAltitudeKm: 550.0,
    laserPointingAccuracyMicroRad: 1.2,
    opticalThroughputGbps: 100.0,
    isLinkEstablished: true,
    hasDopplerCompensated: true,
  },
  {
    id: 'sat-02',
    satelliteCallsign: 'AETHER-SAT-212',
    orbitalShellAltitudeKm: 550.0,
    laserPointingAccuracyMicroRad: 1.4,
    opticalThroughputGbps: 100.0,
    isLinkEstablished: true,
    hasDopplerCompensated: true,
  },
  {
    id: 'sat-03',
    satelliteCallsign: 'AETHER-SAT-308',
    orbitalShellAltitudeKm: 550.0,
    laserPointingAccuracyMicroRad: 1.1,
    opticalThroughputGbps: 100.0,
    isLinkEstablished: true,
    hasDopplerCompensated: true,
  },
  {
    id: 'sat-04',
    satelliteCallsign: 'AETHER-SAT-419',
    orbitalShellAltitudeKm: 550.0,
    laserPointingAccuracyMicroRad: 1.6,
    opticalThroughputGbps: 100.0,
    isLinkEstablished: true,
    hasDopplerCompensated: false,
  },
];

export const OrbitalLaserSatelliteConstellationRoutingSlide: React.FC<{
  slide?: OrbitalLaserSatelliteConstellationRoutingSlideData;
  data?: OrbitalLaserSatelliteConstellationRoutingSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.constellationStages?.length ? data.constellationStages : DEF_STAGES;
  const satellites = data?.satelliteNodes?.length ? data.satelliteNodes : DEF_SATELLITES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isMeshLocked = data?.isOrbitalMeshLocked ?? true;
  const hasAtmosphereCorrected = data?.hasAtmosphericRefractionCorrected ?? true;
  const hasHoppingOptimized = data?.hasInterlinkHoppingOptimized ?? true;

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
              className="font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-sky-500/10 text-sky-800 dark:text-sky-300 border border-sky-500/20 flex items-center gap-2"
            >
              <Satellite size={16} className="text-sky-500" />
              {data?.kicker || 'AEROSPACE PHOTONICS & SPACE COMMUNICATIONS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Globe size={14} /> Constellation: {data?.constellationIdentifier || 'AETHER-LEO-MESH-01'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Radio size={14} className="text-cyan-500" />
              Satellites: {data?.activeSatellitesCount ? data.activeSatellitesCount.toLocaleString() : '4,408'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Latency: {data?.globalInterconnectLatencyMs ?? 32.4} ms Global Transit
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Orbital Laser Satellite Constellation Routing'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Point-to-point free-space optics, Doppler compensation, and transcontinental vacuum packet transit over LEO shells.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">ISL Latency</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.intersatelliteLatencyMs.toFixed(1)} ms
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Optical BER</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              10^{activeStage.opticalBitErrorRatePower}
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
                    {st.intersatelliteLatencyMs} ms | BER 10^{st.opticalBitErrorRatePower}
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
        {/* Left Bento: Orbital Shell 550km Free-Space Optical Interlink Graph */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Satellite size={16} className="text-[var(--pres-accent)]" /> Orbital Shell 550km Free-Space Optical Interlink Graph
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-800 dark:text-sky-400 font-bold border border-sky-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {satellites.map((sat, sIdx) => {
                const isCurrentSat = sIdx === currentStep || (currentStep >= 2 && sIdx >= 2);
                const isLocked = sat.isLinkEstablished;
                return (
                  <div
                    key={sat.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentSat
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Radio size={16} className={isLocked ? 'text-sky-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          [{sat.satelliteCallsign}] Shell: {sat.orbitalShellAltitudeKm}km
                        </span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isLocked
                              ? 'bg-sky-500/15 text-sky-800 dark:text-sky-300 border-sky-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isLocked ? 'Optical Lock' : 'PAT Slew'}
                        </span>
                        {sat.hasDopplerCompensated && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> Doppler ±12GHz Locked
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          Pointing: {sat.laserPointingAccuracyMicroRad} µrad
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>{sat.opticalThroughputGbps} Gbps</span>
                          <ArrowRight size={12} />
                          <span className={isLocked ? 'text-emerald-500' : 'text-sky-500'}>
                            {isLocked ? 'VACUUM-TRANSIT' : 'ACQUIRING'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isLocked ? 'bg-sky-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${Math.min(100, Math.max(15, (sat.opticalThroughputGbps / 120) * 100))}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Vacuum Propagation: c = 299,792 km/s (34% faster than fiber glass)</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Sub-Microradian Fast Steering
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Compass size={16} className="text-sky-500" />
              Global Transcontinental Route: London to Tokyo via 4 Laser Hops in 32.4 ms
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              Atmospheric Scintillation Shielded
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
                <Activity size={16} className="text-sky-500" /> Stage {currentStep + 1} Laser Mechanics
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">ISL Hop Latency</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.intersatelliteLatencyMs.toFixed(1)} ms
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Bit Error Rate</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    10^{activeStage.opticalBitErrorRatePower}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Orbital Mesh Lock</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isMeshLocked ? '4-Channel Optical Lock' : 'Acquiring'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Atmospheric Scintillation</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasAtmosphereCorrected ? 'Adaptive Optics Corrected' : 'Uncorrected'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Dynamic Multi-Hop Path</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {hasHoppingOptimized ? 'Dijkstra Vacuum Optimal' : 'Static Relaying'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Laser constellation routes packets in vacuum at light speed.
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
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Constellation Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> All 4 Laser Transceivers Locked | BER &lt; 10^-12 | Atmospheric Scintillation Shielded
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Orbital Photonics
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrbitalLaserSatelliteConstellationRoutingSlide;
