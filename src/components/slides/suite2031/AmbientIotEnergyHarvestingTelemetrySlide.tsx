// lint-allow: file-size reason="AmbientIotEnergyHarvestingTelemetrySlide kinetic 4-step workflow" max=450
import React from 'react';
import type {
  AmbientIotEnergyHarvestingTelemetrySlideData,
  AmbientHarvestingStage,
  AmbientHarvesterNode,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  Wifi,
  Sun,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  BatteryCharging,
  Radio,
} from 'lucide-react';

const DEF_STAGES: AmbientHarvestingStage[] = [
  {
    stepIndex: 0,
    stageName: 'Sub-Microwatt Ambient Capture',
    stageSubtitle: 'Harvesting ambient RF, piezoelectric vibrations, and indoor micro-photovoltaics',
    harvestingEfficiencyPercentage: 42.0,
    quiescentCurrentNanoAmps: 6.8,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Supercapacitor Storage Ramp',
    stageSubtitle: 'Charge pumping accumulation from 400mV to 2.2V operational trigger threshold',
    harvestingEfficiencyPercentage: 55.0,
    quiescentCurrentNanoAmps: 8.4,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Cold-Boot Power-On Reset',
    stageSubtitle: 'Transient non-volatile computation state resumption and sensor burst sampling',
    harvestingEfficiencyPercentage: 58.0,
    quiescentCurrentNanoAmps: 9.2,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Zero-Battery Backscatter Burst',
    stageSubtitle: 'Ambient RF carrier reflection telemetry with sub-microwatt transmission envelope',
    harvestingEfficiencyPercentage: 60.0,
    quiescentCurrentNanoAmps: 8.0,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: AmbientHarvesterNode[] = [
  {
    id: 'hrv-01',
    nodeTag: 'NODE-RF-2401',
    energySourceType: 'Ambient RF (2.4 GHz)',
    voltageOutputMilliVolts: 1820.0,
    storedEnergyMicroJoules: 42.5,
    isDutyCycleActive: true,
    hasSufficientColdBootCharge: true,
  },
  {
    id: 'hrv-02',
    nodeTag: 'NODE-TEG-1022',
    energySourceType: 'Thermal Gradient (Δ3K)',
    voltageOutputMilliVolts: 2100.0,
    storedEnergyMicroJoules: 85.0,
    isDutyCycleActive: true,
    hasSufficientColdBootCharge: true,
  },
  {
    id: 'hrv-03',
    nodeTag: 'NODE-PZT-3301',
    energySourceType: 'Piezoelectric Vibration',
    voltageOutputMilliVolts: 1950.0,
    storedEnergyMicroJoules: 64.0,
    isDutyCycleActive: true,
    hasSufficientColdBootCharge: true,
  },
  {
    id: 'hrv-04',
    nodeTag: 'NODE-PV-4015',
    energySourceType: 'Indoor Light (200 Lux)',
    voltageOutputMilliVolts: 1780.0,
    storedEnergyMicroJoules: 38.0,
    isDutyCycleActive: false,
    hasSufficientColdBootCharge: false,
  },
];

export const AmbientIotEnergyHarvestingTelemetrySlide: React.FC<{
  slide?: AmbientIotEnergyHarvestingTelemetrySlideData;
  data?: AmbientIotEnergyHarvestingTelemetrySlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.harvestingStages?.length ? data.harvestingStages : DEF_STAGES;
  const nodes = data?.harvesterNodes?.length ? data.harvesterNodes : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isSustained = data?.isEnergyHarvestingSustained ?? true;
  const hasDutyCycle = data?.hasDutyCycleOptimized ?? true;
  const hasBackscatterReady = data?.hasBackscatterModulationReady ?? true;

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
              className="font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2"
            >
              <BatteryCharging size={16} className="text-emerald-500" />
              {data?.kicker || 'BATTERYLESS EDGE COMPUTING & SUSTAINABLE IOT'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Radio size={14} /> Network: {data?.networkIdentifier || 'AMBIENT-ZERO-BATTERY-01'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Wifi size={14} className="text-cyan-500" />
              Nodes: {data?.activeZeroBatteryNodesCount ? data.activeZeroBatteryNodesCount.toLocaleString() : '50,000'} Batteryless
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Zap size={14} className="text-purple-500" />
              Autonomy: {data?.energyAutonomyScorePercentage ?? 100.0}% Autonomy
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Ambient IoT Batteryless Energy Harvesting Network'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Micro-watt ambient RF and thermal harvesting, supercapacitor cold-boot, and backscatter telemetry for zero-battery clusters.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Harvest Efficiency</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.harvestingEfficiencyPercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Quiescent Current</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.quiescentCurrentNanoAmps.toFixed(1)} nA
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
                    Eff: {st.harvestingEfficiencyPercentage}% | I_q: {st.quiescentCurrentNanoAmps} nA
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
        {/* Left Bento: Harvester Node Cluster & Energy Storage */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <BatteryCharging size={16} className="text-[var(--pres-accent)]" /> Transient Energy Accumulation Mesh & Harvester Telemetry
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-bold border border-emerald-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((node, nIdx) => {
                const isCurrentNode = nIdx === currentStep || (currentStep >= 2 && nIdx >= 2);
                const isReady = node.hasSufficientColdBootCharge;
                return (
                  <div
                    key={node.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentNode
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Sun size={16} className={isReady ? 'text-emerald-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          [{node.nodeTag}] {node.energySourceType}
                        </span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isReady
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isReady ? 'Ready' : 'Charging'}
                        </span>
                        {node.isDutyCycleActive && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> 0.05% Duty Active
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          V: {node.voltageOutputMilliVolts} mV
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>Energy: {node.storedEnergyMicroJoules.toFixed(1)} µJ</span>
                          <ArrowRight size={12} />
                          <span className={isReady ? 'text-emerald-500' : 'text-purple-500'}>
                            {isReady ? 'POR-TRIGGERED' : 'ACCUMULATING'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isReady ? 'bg-emerald-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${Math.min(100, Math.max(15, (node.voltageOutputMilliVolts / 2200) * 100))}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Intermittent Execution: Non-volatile ferroelectric RAM (FRAM) checkpointing</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Zero Battery Replacements
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap size={16} className="text-emerald-500" />
              Duty Cycle Intermittent Window: 0.05% active execution, 99.95% harvesting sleep
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              100m Ambient Backscatter Range Verified
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
                <Activity size={16} className="text-emerald-500" /> Stage {currentStep + 1} Harvesting Mechanics
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Efficiency</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.harvestingEfficiencyPercentage.toFixed(1)}%
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Quiescent Current</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.quiescentCurrentNanoAmps.toFixed(1)} nA
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Energy Harvesting Autonomy</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isSustained ? 'Net-Positive Energy Harvest' : 'Depleting'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Duty Cycle Timing Clamping</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasDutyCycle ? '0.05% Active Window Clamped' : 'Unconstrained'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Backscatter Modulation State</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {hasBackscatterReady ? 'Ambient Carrier Reflection Ready' : 'Cold-Boot Charging'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Batteryless nodes compute and transmit using ambient power.
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
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Network Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Backscatter Emitting | 100m Range Verified | Zero Lithium Toxic Batteries Maintained
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Ambient IoT
          </span>
        </div>
      </div>
    </div>
  );
};

export default AmbientIotEnergyHarvestingTelemetrySlide;
