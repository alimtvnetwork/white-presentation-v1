// lint-allow: file-size reason="NeuromorphicSpikingNeuralMeshSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  NeuromorphicSpikingNeuralMeshSlideData,
  SpikingStage,
  SpikingNeuronNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  Brain,
  Zap,
  Activity,
  Network,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Cpu,
} from 'lucide-react';

const DEF_STAGES: SpikingStage[] = [
  {
    stepIndex: 0,
    stageName: 'Membrane Potential Accumulation',
    stageSubtitle: 'Asynchronous dendritic integration with exponential leaky membrane decay dynamics',
    synapticEventCount: 1420000,
    energyJoulesPerSpikePj: 0.85,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Axonal Action Potential Triggering',
    stageSubtitle: 'Membrane voltage crosses critical -55mV threshold triggering refractory all-or-nothing burst',
    synapticEventCount: 3890000,
    energyJoulesPerSpikePj: 0.92,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'STDP Synaptic Plasticity Reinforcement',
    stageSubtitle: 'Spike-timing-dependent plasticity updates synaptic crossbar conductance with sub-pJ efficiency',
    synapticEventCount: 8450000,
    energyJoulesPerSpikePj: 0.78,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Cortical Wavefront Synchronization',
    stageSubtitle: 'Asynchronous event-driven network-on-chip routes sparse temporal spike wavefronts',
    synapticEventCount: 16200000,
    energyJoulesPerSpikePj: 0.65,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: SpikingNeuronNode[] = [
  {
    id: 'neuron-node-l1',
    layerName: 'L1: Sensory Afferent Retina',
    membranePotentialMv: -52,
    thresholdPotentialMv: -55,
    synapticWeight: 0.88,
    isSpikeFired: true,
    hasPlasticityReinforced: true,
  },
  {
    id: 'neuron-node-l2',
    layerName: 'L2: Thalamic Relay Hyper-Grid',
    membranePotentialMv: -48,
    thresholdPotentialMv: -55,
    synapticWeight: 0.94,
    isSpikeFired: true,
    hasPlasticityReinforced: true,
  },
  {
    id: 'neuron-node-l3',
    layerName: 'L3: Cortical Column Interneurons',
    membranePotentialMv: -58,
    thresholdPotentialMv: -55,
    synapticWeight: 0.72,
    isSpikeFired: false,
    hasPlasticityReinforced: false,
  },
  {
    id: 'neuron-node-l4',
    layerName: 'L4: Neuromorphic Motor Efferent',
    membranePotentialMv: -64,
    thresholdPotentialMv: -55,
    synapticWeight: 0.58,
    isSpikeFired: false,
    hasPlasticityReinforced: false,
  },
];

export const NeuromorphicSpikingNeuralMeshSlide: React.FC<{
  slide?: NeuromorphicSpikingNeuralMeshSlideData;
  data?: NeuromorphicSpikingNeuralMeshSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.spikingStages?.length ? data.spikingStages : DEF_STAGES;
  const nodes = data?.neuronNodes?.length ? data.neuronNodes : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const hasPlasticityActive = data?.hasSynapticPlasticityActive ?? true;
  const hasMembraneDecay = data?.hasMembraneDecayEnabled ?? true;
  const isThresholdCrossed = data?.isSpikeThresholdExceeded ?? true;

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
              <Brain size={16} className="text-cyan-500" />
              {data?.kicker || 'ASYNCHRONOUS NEUROMORPHIC ACCELERATOR'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Network size={14} /> Mesh: {data?.meshIdentifier || 'spiking-core-nx100'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              Efficiency: {data?.energyEfficiencyFactor ?? 100}x von Neumann
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20 flex items-center gap-2">
              <Cpu size={14} className="text-purple-500" />
              Synapses: {data?.totalSynapseCountMillion ?? 250}M
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Neuromorphic Spiking Neural Mesh'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Sub-picojoule event-driven temporal spike propagation with spike-timing-dependent plasticity.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Spike Energy</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.energyJoulesPerSpikePj.toFixed(2)} pJ
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Event Volume</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {(activeStage.synapticEventCount / 1000000).toFixed(2)}M Spikes
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
                    {st.energyJoulesPerSpikePj}pJ/spike | {(st.synapticEventCount / 1000000).toFixed(1)}M events
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
        {/* Left Bento: Neuron Crossbar & Membrane Potential */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Cpu size={16} className="text-[var(--pres-accent)]" /> Cortical Neuron Crossbars & Potentials
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((node, nIdx) => {
                const isCurrentLayer = nIdx === currentStep || (currentStep >= 2 && nIdx >= 2);
                const hasFired = node.isSpikeFired;
                return (
                  <div
                    key={node.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Brain size={16} className={hasFired ? 'text-cyan-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{node.layerName}</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            hasFired
                              ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {hasFired ? 'Spike Fired' : 'Sub-Threshold'}
                        </span>
                        {node.hasPlasticityReinforced && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> STDP Weight {node.synapticWeight.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          V_thresh: {node.thresholdPotentialMv} mV
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>V_mem: {node.membranePotentialMv} mV</span>
                          <ArrowRight size={12} />
                          <span className={node.membranePotentialMv >= node.thresholdPotentialMv ? 'text-cyan-500' : 'text-slate-400'}>
                            {node.membranePotentialMv >= node.thresholdPotentialMv ? 'ACTION POTENTIAL' : 'DEPOLARIZING'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          hasFired ? 'bg-cyan-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${Math.min(100, Math.max(10, ((node.membranePotentialMv + 70) / 30) * 100))}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Temporal Jitter: &lt; 0.12 ms (Sub-microsecond Precision)</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Asynchronous NoC Routed
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
              Event-Driven Energy: Sub-picojoule neuromorphic compute envelope
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              100x Efficiency over GPU Matrix GEMM
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
                <Activity size={16} className="text-cyan-500" /> Stage {currentStep + 1} Spiking Mechanics
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Per-Spike Energy</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.energyJoulesPerSpikePj.toFixed(2)} pJ
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Cumulative Events</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {(activeStage.synapticEventCount / 1000000).toFixed(2)} M
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">STDP Plasticity Mode</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasPlasticityActive ? 'Hebbian Reinforcement' : 'Frozen Weights'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Membrane Leakage Decay</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasMembraneDecay ? 'Tau=20ms Exponential' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Threshold Voltage Gate</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {isThresholdCrossed ? 'Dynamic -55mV Locked' : 'Sub-Threshold'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Neuromorphic mesh computes with sparse spatio-temporal spikes.
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
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Mesh Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Spiking Dynamics Active | STDP Synaptic Weights Balanced | Sub-pJ Energy Envelope
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2030 Neuromorphic Mesh
          </span>
        </div>
      </div>
    </div>
  );
};

export default NeuromorphicSpikingNeuralMeshSlide;
