// lint-allow: file-size reason="QuantumAnnealingPortfolioOptimizerSlide kinetic 4-step workflow" max=420
import React from 'react';
import type {
  QuantumAnnealingPortfolioOptimizerSlideData,
  AnnealingStage,
  QuantumAnnealingAssetNode,
} from '../../../types/suite2030Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { getStepLifecycleStyle } from '../../../utils/stepLifecycleStyles';
import {
  Atom,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  Scale,
  Percent,
} from 'lucide-react';

const DEF_STAGES: AnnealingStage[] = [
  {
    stepIndex: 0,
    stageName: 'QUBO Covariance & Cardinality Embedding',
    stageSubtitle: 'Quadratic unconstrained binary optimization maps multi-asset covariance into Ising spin lattice',
    transverseFieldEnergyGhz: 8.5,
    hamiltonianEnergyScore: -124.6,
    isActive: true,
    isCompleted: false,
  },
  {
    stepIndex: 1,
    stageName: 'Quantum Tunneling & Transverse Driver',
    stageSubtitle: 'Transverse magnetic field drives quantum tunneling through high-barrier local financial minima',
    transverseFieldEnergyGhz: 5.2,
    hamiltonianEnergyScore: -389.2,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 2,
    stageName: 'Adiabatic Hamiltonian Spin Freezing',
    stageSubtitle: 'Adiabatic evolution slows transverse driver to freeze ferromagnetic couplings into ground state',
    transverseFieldEnergyGhz: 1.8,
    hamiltonianEnergyScore: -642.8,
    isActive: false,
    isCompleted: false,
  },
  {
    stepIndex: 3,
    stageName: 'Ground State Readout & Sharpe Optimal',
    stageSubtitle: 'Superconducting flux qubits collapse to global minimum with Sharpe ratio maximization',
    transverseFieldEnergyGhz: 0.1,
    hamiltonianEnergyScore: -891.4,
    isActive: false,
    isCompleted: false,
  },
];

const DEF_NODES: QuantumAnnealingAssetNode[] = [
  {
    id: 'asset-node-nvda',
    ticker: 'NVDA-AI (Compute Infrastructure)',
    allocationWeightPercentage: 28.5,
    expectedReturnPercentage: 24.2,
    qubitCouplingStrength: 0.94,
    isQubitAssigned: true,
    hasCardinalitySelected: true,
  },
  {
    id: 'asset-node-msft',
    ticker: 'MSFT-CLD (Hyperscale Cloud & GenAI)',
    allocationWeightPercentage: 24.0,
    expectedReturnPercentage: 18.5,
    qubitCouplingStrength: 0.88,
    isQubitAssigned: true,
    hasCardinalitySelected: true,
  },
  {
    id: 'asset-node-asml',
    ticker: 'ASML-LITH (EUV Semiconductor Foundry)',
    allocationWeightPercentage: 22.5,
    expectedReturnPercentage: 21.0,
    qubitCouplingStrength: 0.82,
    isQubitAssigned: true,
    hasCardinalitySelected: true,
  },
  {
    id: 'asset-node-tsm',
    ticker: 'TSM-FAB (Advanced Packaging Nodes)',
    allocationWeightPercentage: 25.0,
    expectedReturnPercentage: 19.8,
    qubitCouplingStrength: 0.79,
    isQubitAssigned: true,
    hasCardinalitySelected: true,
  },
];

export const QuantumAnnealingPortfolioOptimizerSlide: React.FC<{
  slide?: QuantumAnnealingPortfolioOptimizerSlideData;
  data?: QuantumAnnealingPortfolioOptimizerSlideData;
  activeStep?: number;
}> = ({ slide, data: propData, activeStep: propStep }) => {
  const data = slide || propData;
  const { activeStep: storeStep, jumpToStep, applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const stages = data?.annealingStages?.length ? data.annealingStages : DEF_STAGES;
  const nodes = data?.assetNodes?.length ? data.assetNodes : DEF_NODES;

  const currentStep = Math.min(
    Math.max(0, propStep ?? storeStep ?? 0),
    stages.length - 1
  );
  const activeStage = stages[currentStep];

  const isMinimumReached = data?.isGlobalMinimumFound ?? true;
  const hasTunneling = data?.hasTunnelingActive ?? true;
  const hasQuboMet = data?.hasQuboConstraintSatisfied ?? true;

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
              {data?.kicker || 'QUANTUM ANNEALING ISING SOLVER'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Scale size={14} /> Solver: {data?.optimizerIdentifier || 'dwave-advantage-qubo-48'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <TrendingUp size={14} className="text-emerald-500" />
              Sharpe: {data?.sharpeRatioOptimal ? data.sharpeRatioOptimal.toFixed(2) : '3.42'} (Global Optimum)
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <Atom size={14} className="text-cyan-500" />
              Qubits: {data?.totalQubitsCount ? data.totalQubitsCount.toLocaleString() : '5,760'}
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Quantum Annealing Portfolio Optimizer'}
          </h1>
          <p
            style={{ fontSize: 'clamp(1.0rem, 1.4vw, 1.125rem)' }}
            className="font-poppins text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Combinatorial portfolio optimization using transverse-field quantum tunneling and QUBO Ising ground states.'}
          </p>
        </div>

        {/* Telemetry Summary Card */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] flex items-center gap-6 font-mono text-[14px]"
        >
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Transverse Field</span>
            <span className="text-violet-700 dark:text-violet-400 font-bold text-[18px]">
              {activeStage.transverseFieldEnergyGhz.toFixed(1)} GHz
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Hamiltonian Energy</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[18px]">
              {activeStage.hamiltonianEnergyScore.toFixed(1)} E_H
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
                    {st.transverseFieldEnergyGhz}GHz field | {st.hamiltonianEnergyScore.toFixed(0)} energy
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
        {/* Left Bento: Quantum Asset Nodes & Qubit Allocations */}
        <div
          style={{ backdropFilter: 'blur(14px)' }}
          className="col-span-7 plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
              <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Atom size={16} className="text-[var(--pres-accent)]" /> Superconducting Qubit Couplings & Optimal Weights
              </span>
              <span className="font-mono text-[14px] px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-800 dark:text-violet-400 font-bold border border-violet-500/20">
                Stage {currentStep + 1}: {activeStage.stageName}
              </span>
            </div>

            <div className="space-y-3 mt-4">
              {nodes.map((asset, aIdx) => {
                const isCurrentLayer = aIdx === currentStep || (currentStep >= 2 && aIdx >= 2);
                const isSelected = asset.hasCardinalitySelected;
                return (
                  <div
                    key={asset.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCurrentLayer
                        ? 'border-[var(--pres-accent)] bg-[var(--pres-accent)]/15 shadow-md scale-[1.01] ring-1 ring-[var(--pres-accent)]'
                        : 'border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[14px] mb-2">
                      <div className="flex items-center gap-2.5">
                        <TrendingUp size={16} className={isSelected ? 'text-emerald-500' : 'text-slate-400'} />
                        <span className="font-bold text-slate-800 dark:text-slate-200">{asset.ticker}</span>
                        <span
                          className={`text-[14px] font-bold px-2 py-0.5 rounded uppercase border ${
                            isSelected
                              ? 'bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30'
                              : 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30'
                          }`}
                        >
                          {isSelected ? 'In Optimal Portfolio' : 'Pruned'}
                        </span>
                        {asset.isQubitAssigned && (
                          <span className="text-[14px] font-bold px-2 py-0.5 rounded bg-violet-500/15 text-violet-800 dark:text-violet-300 border border-violet-500/30 flex items-center gap-1">
                            <Atom size={12} /> J_ij Coupling {asset.qubitCouplingStrength.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                          E[R]: +{asset.expectedReturnPercentage.toFixed(1)}%
                        </span>
                        <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                          <span>Weight: {asset.allocationWeightPercentage.toFixed(1)}%</span>
                          <ArrowRight size={12} />
                          <span className="text-emerald-700 dark:text-emerald-400">OPTIMAL</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full transition-all duration-700 bg-emerald-500"
                        style={{ width: `${Math.min(100, asset.allocationWeightPercentage * 3)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
                      <span>Cardinality Constraint: K=4 Active</span>
                      <span className="text-violet-700 dark:text-violet-400 font-bold flex items-center gap-1">
                        <ShieldCheck size={14} /> QUBO Penalty Embedded
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Atom size={16} className="text-violet-500" />
              Adiabatic Annealing: 20-microsecond quench schedule over 5,760 flux qubits
            </span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">
              NP-Hard Solved in Sub-millisecond Time
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
                <Activity size={16} className="text-violet-500" /> Stage {currentStep + 1} Annealing Progress
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
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Transverse Field B_x</span>
                  <span className="text-violet-700 dark:text-violet-400 font-bold text-[20px]">
                    {activeStage.transverseFieldEnergyGhz.toFixed(1)} GHz
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Hamiltonian Energy</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[20px]">
                    {activeStage.hamiltonianEnergyScore.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5 font-mono text-[14px]">
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Global Minimum Status</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {isMinimumReached ? 'Ground State Reached' : 'Trapped in Local Minimum'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">Quantum Tunneling Field</span>
                <span className="font-bold text-violet-700 dark:text-violet-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> {hasTunneling ? 'Active Non-thermal Jumps' : 'Suppressed'}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-100/50 dark:bg-black/20 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-600 dark:text-slate-300">QUBO Constraints Satisfied</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400 flex items-center gap-1">
                  <Layers size={16} /> {hasQuboMet ? 'Zero Penalty Incurred' : 'Constraint Violations'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--pres-accent)]/10 border border-[var(--pres-accent)]/20 flex items-center gap-3 font-mono text-[14px]">
            <Sparkles size={16} className="text-[var(--pres-accent)] shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">
              Kinetic step active: Step {currentStep + 1} of {stages.length}. Quantum annealer achieves maximum Sharpe ratio with zero quadratic penalty.
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
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">Quantum State:</span>
          <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <ShieldCheck size={16} /> Ising Ground State Locked | Sharpe Ratio 3.42 Achieved | QUBO Penalties Zeroed
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-violet-700 dark:text-violet-400 font-bold flex items-center gap-1">
            <CheckCircle2 size={16} /> Suite 2030 Quantum Optimizer
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuantumAnnealingPortfolioOptimizerSlide;
