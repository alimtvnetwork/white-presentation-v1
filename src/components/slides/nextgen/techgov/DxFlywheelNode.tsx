import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { FlywheelStage } from '../../../../types/nextgen/deepTechGovernanceTypes';

interface DxFlywheelNodeProps {
  stage: FlywheelStage;
  isActive: boolean;
  onClick: () => void;
}

export const DxFlywheelNode: React.FC<DxFlywheelNodeProps> = ({ stage, isActive, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    style={{
      backgroundColor: 'var(--pres-bg-card)',
      borderColor: isActive ? 'var(--pres-border-hover)' : 'var(--pres-border)',
    }}
    className={`plane-1-raised rounded-3xl p-5 border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between ${
      isActive
        ? 'ring-2 ring-violet-500/60 shadow-lg scale-[1.01]'
        : 'hover:border-violet-500/30'
    }`}
  >
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
          STAGE 0{stage.stageNumber}
        </span>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
          <CheckCircle2 size={12} />
          {stage.isStageOptimized ? 'OPTIMIZED' : 'STANDARD'}
        </span>
      </div>

      <h3 className="text-lg font-ubuntu font-bold text-slate-900 dark:text-slate-100 mb-1 leading-snug">
        {stage.stageName}
      </h3>
      <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono mb-3 line-clamp-2">
        {stage.corePractice}
      </p>
    </div>

    <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
      <div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase block">
          {stage.doraMetric}
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-slate-500 line-through text-[11px]">{stage.targetValue}</span>
          <ArrowRight size={10} className="text-violet-600 dark:text-violet-400" />
          <span className="text-emerald-700 dark:text-emerald-400 font-bold">{stage.currentValue}</span>
        </div>
      </div>
      <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300 font-bold text-[10px]">
        {stage.isFeedbackActive ? 'LIVE' : 'QUEUED'}
      </span>
    </div>
  </div>
);
