import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Bot } from 'lucide-react';
import type { AiEvalSuiteItem } from '../../../types/sovereignOperationsArchetypes';

interface EvalGateCardProps {
  suite: AiEvalSuiteItem;
  index: number;
  activeStep: number;
}

export const EvalGateCard: React.FC<EvalGateCardProps> = ({ suite, index, activeStep }) => {
  const isCompleted = index < activeStep;
  const isActive = index === activeStep;
  const phaseClass = isActive
    ? 'step-phase-active'
    : isCompleted
      ? 'step-phase-past'
      : 'step-phase-future';

  const metrics = suite.benchmarkMetrics || [];

  return (
    <div
      style={{
        backgroundColor: 'var(--pres-bg-card)',
        borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
        color: 'var(--pres-text)',
      }}
      className={`plane-1-raised p-5 rounded-2xl border flex flex-col justify-between h-[420px] transition-all duration-300 ${phaseClass}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            style={{
              backgroundColor: isActive ? 'var(--pres-accent)' : 'rgba(168, 85, 247, 0.15)',
              color: isActive ? 'var(--pres-accent-text, #ffffff)' : '#c084fc',
            }}
            className="px-2.5 py-1 rounded-md font-mono text-xs font-bold"
          >
            SUITE {suite.suiteIndex || index + 1}
          </span>
          <span className="font-mono text-xs text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
            {suite.isAutomatedRun ? 'Autonomous CI' : 'Scheduled'}
          </span>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu tracking-tight mb-2">
          {suite.suiteName}
        </h3>

        <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300 mb-3">
          <Bot size={12} className="text-purple-400" />
          <span className="text-purple-300 truncate max-w-[210px]">{suite.targetModel}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-lg bg-black/20 border border-white/5 font-mono text-xs">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">PASS RATE</span>
            <span className="text-emerald-300 font-bold">{suite.passRatePercent}%</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">P95 LATENCY</span>
            <span className="text-cyan-300 font-bold">{suite.latencyP95Ms} ms</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider font-mono">
            Benchmark Gates ({metrics.length})
          </div>
          {metrics.slice(0, 3).map((metric) => (
            <div key={metric.id} className="flex items-center justify-between text-xs font-mono p-1.5 rounded bg-white/5">
              <span className="truncate max-w-[150px]" style={{ color: 'var(--pres-text)' }}>
                {metric.benchmarkName}
              </span>
              <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                <CheckCircle2 size={11} /> {metric.scorePercent}% ({metric.baselineDelta})
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
        <span style={{ color: 'var(--pres-text-muted)' }} className="flex items-center gap-1">
          <Zap size={12} className="text-amber-600 dark:text-amber-400" />
          {suite.hasSafetySignoff ? 'Safety Signoff' : 'Pending Review'}
        </span>
        <span className="text-purple-400 font-bold flex items-center gap-1">
          <ShieldCheck size={12} />
          {suite.isCertified ? 'CERTIFIED PASS' : 'BENCHMARKING'}
        </span>
      </div>
    </div>
  );
};
