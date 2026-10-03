import React from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';
import type { PacketInspectionStageItem } from '../../../types/sovereignOperationsArchetypes';

interface PacketGateCardProps {
  stage: PacketInspectionStageItem;
  index: number;
  activeStep: number;
}

export const PacketGateCard: React.FC<PacketGateCardProps> = ({ stage, index, activeStep }) => {
  const isCompleted = index < activeStep;
  const isActive = index === activeStep;
  const phaseClass = isActive ? 'step-phase-active' : isCompleted ? 'step-phase-past' : 'step-phase-future';
  const rules = stage.ruleChecks || [];

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
          <div className="flex items-center gap-2">
            <span
              style={{
                backgroundColor: isActive ? 'var(--pres-accent)' : 'rgba(6, 182, 212, 0.15)',
                color: isActive ? 'var(--pres-accent-text, #ffffff)' : '#22d3ee',
              }}
              className="px-2.5 py-1 rounded-md font-mono text-xs font-bold"
            >
              STAGE {stage.stageIndex || index + 1}
            </span>
            <span className="font-mono text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
              {stage.layer || 'L7'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs">
            {stage.hasAnomalyAlert ? (
              <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded">
                <AlertTriangle size={12} /> Alert
              </span>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded">
                <CheckCircle2 size={12} /> Cleared
              </span>
            )}
          </div>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu tracking-tight mb-2">
          {stage.stageName}
        </h3>
        <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-poppins leading-relaxed mb-4 line-clamp-2">
          {stage.summary}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-lg bg-black/20 border border-white/5 font-mono text-xs">
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">LATENCY</span>
            <span className="text-cyan-300 font-bold">{stage.latencyMicros} µs</span>
          </div>
          <div>
            <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] block">RATE</span>
            <span className="text-emerald-300 font-bold">{stage.packetThroughputMpps} Mpps</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider font-mono">
            Cryptographic Enforcements ({rules.length})
          </div>
          {rules.slice(0, 3).map((rule) => (
            <div key={rule.id} className="flex items-center justify-between text-xs font-mono p-1.5 rounded bg-white/5">
              <span className="truncate max-w-[170px]" style={{ color: 'var(--pres-text)' }}>{rule.ruleName}</span>
              <span className="text-emerald-400 flex items-center gap-1 text-[11px]"><ShieldCheck size={11} /> {rule.protocol}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
        <span style={{ color: 'var(--pres-text-muted)' }} className="flex items-center gap-1">
          <Zap size={12} className="text-amber-600 dark:text-amber-400" />
          Zero-Copy Kernel
        </span>
        <span className="text-cyan-400 font-bold">{stage.isVerified ? 'VERIFIED GATE' : 'PENDING'}</span>
      </div>
    </div>
  );
};
