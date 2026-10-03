import React from 'react';
import { Cpu, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import type { AutonomousAiEvalHarnessSlideData } from '../../../types/sovereignOperationsArchetypes';

interface EvalConsensusFooterProps {
  slide: AutonomousAiEvalHarnessSlideData;
  activeStep: number;
}

export const EvalConsensusFooter: React.FC<EvalConsensusFooterProps> = ({ slide, activeStep }) => {
  const suites = slide.evalSuites || [];
  const currentStep = Math.min(activeStep, Math.max(0, suites.length - 1));
  const activeSuite = suites[currentStep];
  const certifiedCount = suites.filter((s) => s.isCertified).length;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="plane-1-raised px-5 py-3 rounded-2xl flex items-center justify-between z-10 border font-mono text-xs"
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-purple-400 font-bold">
          <Cpu size={14} /> Evaluation Consensus Clearance
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text)' }} className="flex items-center gap-1">
          <Activity size={12} className="text-purple-400 animate-pulse" />
          Active Suite: <strong className="text-purple-300 font-bold">{activeSuite?.suiteName || 'General Benchmarks'}</strong>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>|</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Samples: <span className="text-slate-300">{activeSuite?.samplesTested || 0}</span>
        </span>
      </div>

      <div className="flex items-center gap-5 text-slate-300">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 size={13} />
          <span>{certifiedCount} of {suites.length} Suites Certified</span>
        </span>
        <span className="flex items-center gap-1.5 text-purple-400">
          <ShieldCheck size={13} />
          <span>Production Gate Open</span>
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }}>
          Phase {currentStep + 1} / {Math.max(suites.length, 1)}
        </span>
      </div>
    </div>
  );
};
