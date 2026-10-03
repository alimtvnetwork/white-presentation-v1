import React from 'react';
import { Flame, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import type { ChaosEngineeringMatrixSlideData } from '../../../types/sovereignOperationsArchetypes';

interface ChaosRecoveryFooterProps {
  slide: ChaosEngineeringMatrixSlideData;
  activeStep: number;
}

export const ChaosRecoveryFooter: React.FC<ChaosRecoveryFooterProps> = ({ slide, activeStep }) => {
  const scenarios = slide.chaosScenarios || [];
  const currentStep = Math.min(activeStep, Math.max(0, scenarios.length - 1));
  const activeScenario = scenarios[currentStep];
  const selfHealedCount = scenarios.filter((s) => s.isSelfHealingVerified).length;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised px-5 py-3 rounded-2xl flex items-center justify-between z-10 border font-mono text-xs"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-rose-400 font-bold">
          <Flame size={14} /> Chaos Recovery Protocol
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text)' }} className="flex items-center gap-1">
          <Activity size={12} className="text-rose-400 animate-pulse" />
          Active Vector: <strong className="text-rose-300 font-bold">{activeScenario?.scenarioName || 'Idle'}</strong>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          MTTR: <span className="text-slate-300">{activeScenario?.mttrSeconds || 0}s</span>
        </span>
      </div>

      <div className="flex items-center gap-5 text-slate-300">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 size={13} />
          <span>{selfHealedCount} of {scenarios.length} Scenarios Self-Healed</span>
        </span>
        <span className="flex items-center gap-1.5 text-rose-400">
          <ShieldCheck size={13} />
          <span>Steady-State SLO Preserved</span>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Vector {currentStep + 1} / {Math.max(scenarios.length, 1)}
        </span>
      </div>
    </div>
  );
};
