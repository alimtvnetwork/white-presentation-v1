import React from 'react';
import { Cpu, ShieldCheck, Activity, Award } from 'lucide-react';
import type { AutonomousAiEvalHarnessSlideData } from '../../../types/sovereignOperationsArchetypes';

interface EvalMetricStripProps {
  slide: AutonomousAiEvalHarnessSlideData;
}

export const EvalMetricStrip: React.FC<EvalMetricStripProps> = ({ slide }) => {
  const suites = slide.evalSuites || [];
  const totalSamples = suites.reduce((acc, s) => acc + (s.samplesTested || 0), 0);
  const safetyScore = slide.overallSafetyScore || 99.4;
  const isApproved = slide.isProductionDeploymentPermitted;

  return (
    <div className="z-10 grid grid-cols-4 gap-4">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Overall Safety Score
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {safetyScore}% <span className="text-sm font-normal font-mono text-emerald-400">Grounded</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <ShieldCheck size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Evaluation Suites
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {suites.length} <span className="text-sm font-normal font-mono text-purple-400">Suites</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <Cpu size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Samples Benchmarked
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {totalSamples.toLocaleString()} <span className="text-sm font-normal font-mono text-cyan-400">Prompts</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Activity size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Production Readiness
          </div>
          <div className="text-sm font-bold font-mono text-purple-400 flex items-center gap-1.5 mt-1">
            <span>{isApproved ? 'Deployment Approved' : 'Gated Review'}</span>
            <span style={{ color: 'var(--pres-text-muted)' }}>•</span>
            <span>Zero Hallucination</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
          <Award size={20} />
        </div>
      </div>
    </div>
  );
};
