// lint-allow: file-size reason="SuperconductingQubitCalibrationFlowSlide kinetic 4-step workflow" max=450
import React from 'react';
import type {
  SuperconductingQubitCalibrationFlowSlideData,
  QubitCalibrationStage,
  SuperconductingQubitNode,
} from '../../../types/suite2031Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  Atom,
  Cpu,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  Gauge,
  Thermometer,
} from 'lucide-react';

const DEF_STAGES: QubitCalibrationStage[] = [
  {
    stepIndex: 0,
    stageName: 'Cryogenic Thermalization',
    stageSubtitle: '15mK dilution base plate stabilization and magnetic shielding calibration',
    cryogenicTempMilliKelvin: 14.2,
    gateFidelityScore: 99.1,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Rabi Pulse Amplitude Tuning',
    stageSubtitle: 'Pi-pulse microwave drive calibration and DRAG leakage pulse shaping',
    cryogenicTempMilliKelvin: 14.5,
    gateFidelityScore: 99.7,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Ramsey Detuning & Dephasing',
    stageSubtitle: 'T2 coherence measurement, AC Stark shift compensation, and flux bias trim',
    cryogenicTempMilliKelvin: 14.6,
    gateFidelityScore: 99.85,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Cross-Resonance Entanglement',
    stageSubtitle: 'Two-qubit ZX Hamiltonian gate synthesis with residual ZZ crosstalk cancellation',
    cryogenicTempMilliKelvin: 14.8,
    gateFidelityScore: 99.92,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_QUBITS: SuperconductingQubitNode[] = [
  {
    id: 'qb-01',
    qubitLabel: 'Q-001',
    frequencyGhz: 4.812,
    t1RelaxationMicroseconds: 182.4,
    t2DephasingMicroseconds: 145.2,
    singleQubitGateFidelityPercentage: 99.98,
    isCalibrated: true,
    hasResonanceLocked: true,
  },
  {
    id: 'qb-02',
    qubitLabel: 'Q-002',
    frequencyGhz: 5.120,
    t1RelaxationMicroseconds: 174.1,
    t2DephasingMicroseconds: 139.8,
    singleQubitGateFidelityPercentage: 99.96,
    isCalibrated: true,
    hasResonanceLocked: true,
  },
  {
    id: 'qb-03',
    qubitLabel: 'Q-003',
    frequencyGhz: 4.985,
    t1RelaxationMicroseconds: 168.0,
    t2DephasingMicroseconds: 132.5,
    singleQubitGateFidelityPercentage: 99.91,
    isCalibrated: true,
    hasResonanceLocked: false,
  },
  {
    id: 'qb-04',
    qubitLabel: 'Q-004',
    frequencyGhz: 5.240,
    t1RelaxationMicroseconds: 162.5,
    t2DephasingMicroseconds: 128.0,
    singleQubitGateFidelityPercentage: 99.85,
    isCalibrated: false,
    hasResonanceLocked: false,
  },
];

export const SuperconductingQubitCalibrationFlowSlide: React.FC<{
  slide?: SuperconductingQubitCalibrationFlowSlideData;
  data?: SuperconductingQubitCalibrationFlowSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.calibrationStages?.length ? data.calibrationStages : DEF_STAGES;
  const qubits = data?.qubitNodes?.length ? data.qubitNodes : DEF_QUBITS;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isThermalized = data?.isCryogenicThermalized ?? true;
  const hasResonanceTuned = data?.hasCrossResonanceTuned ?? true;
  const hasLeakage = data?.hasLeakageSuppressed ?? true;

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
              className="font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-violet-500/10 text-violet-800 dark:text-violet-300 border border-violet-500/20 flex items-center gap-2"
            >
              <Atom size={16} className="text-violet-500" />
              {data?.kicker || 'QUANTUM HARDWARE & COHERENCE CONTROL'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Cpu size={14} /> QPU: {data?.processorIdentifier || 'CONDOR-Q1000-HELIOS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Gauge size={14} className="text-cyan-500" />
              Qubits: {data?.qubitCount ? data.qubitCount.toLocaleString() : '1,121'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <Zap size={14} className="text-emerald-500" />
              2Q Fidelity: {data?.averageTwoQubitFidelityPercentage ?? 99.82}%
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Superconducting Qubit Automated Calibration Flow'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Cryogenic thermalization, pulse shape optimization, and cross-resonance gate fidelity tuning in sub-20mK dilution cryostat.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Cryo Base Temp</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[18px]">
              {activeStage.cryogenicTempMilliKelvin.toFixed(1)} mK
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Gate Fidelity</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.gateFidelityScore.toFixed(2)}%
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
                    {st.cryogenicTempMilliKelvin} mK | Fidelity {st.gateFidelityScore}%
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
        {/* Left Bento: Qubit Frequency Lattice & Coherence Telemetry */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Atom size={16} className="text-[var(--pres-accent)]" /> Transmon Frequency Lattice & Coherence Times
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {qubits.map((qb, qIdx) => {
                const isCurrentQubit = qIdx === currentStep || (currentStep >= 2 && qIdx >= 2);
                const isDone = qb.isCalibrated;
                return (
                  <div
                    key={qb.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentQubit
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <Cpu size={16} className={isDone ? 'text-violet-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          Qubit [{qb.qubitLabel}] f: {qb.frequencyGhz.toFixed(3)} GHz
                        </span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isDone
                              ? 'bg-violet-500/15 text-violet-800 dark:text-violet-300 border-violet-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isDone ? 'Calibrated' : 'Tuning Sweep'}
                        </span>
                        {qb.hasResonanceLocked && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <CheckCircle2 size={12} /> CR Locked
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          T1: {qb.t1RelaxationMicroseconds} µs | T2: {qb.t2DephasingMicroseconds} µs
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>1Q Fid: {qb.singleQubitGateFidelityPercentage.toFixed(2)}%</span>
                          <ArrowRight size={12} />
                          <span className={qb.singleQubitGateFidelityPercentage >= 99.9 ? 'text-emerald-500' : 'text-cyan-500'}>
                            {qb.singleQubitGateFidelityPercentage >= 99.9 ? 'OPTIMAL' : 'ACCEPTABLE'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          isDone ? 'bg-violet-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${Math.min(100, Math.max(10, (qb.singleQubitGateFidelityPercentage - 99.0) * 100))}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Residual ZZ Crosstalk: &lt; 12 kHz (Dynamically Decoupled)</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> Randomized Benchmarking Verified
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
              Cryogenic Thermal Envelope: 14.2 mK base plate stabilization
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              Fault-Tolerant Threshold Target Met (&gt; 99.8% 2Q Fidelity)
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
                <Activity size={16} className="text-violet-500" /> Stage {currentStep + 1} Pulse Calibration
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Cryo Temp</span>
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold text-[20px]">
                    {activeStage.cryogenicTempMilliKelvin.toFixed(1)} mK
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Gate Fidelity</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.gateFidelityScore.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Cryogenic Thermalization</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isThermalized ? '14.2 mK Plate Stabilized' : 'Cooling Down'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Cross-Resonance Hamiltonian</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasResonanceTuned ? 'ZX Term Dynamically Tuned' : 'Untuned Hamiltonian'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">DRAG Pulse Leakage Suppression</span>
                <span className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1">
                  <Layers size={16} /> {hasLeakage ? '|2> State Leakage < 0.01%' : 'Standard Gaussian'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Quantum calibration tunes superconducting transmons.
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
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Processor Status:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> CR Resonance Tuned | Residual ZZ Crosstalk &lt; 12 kHz | Randomized Benchmarking Active
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-cyan-700 dark:text-cyan-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2031 Quantum Flow
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuperconductingQubitCalibrationFlowSlide;
