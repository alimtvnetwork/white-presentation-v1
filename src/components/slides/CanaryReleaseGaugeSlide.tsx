import React from 'react';
import type { CanaryReleaseGaugeSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { CanaryGaugeVisualizer } from './canary/CanaryGaugeVisualizer';
import { CanaryStageCard } from './canary/CanaryStageCard';
import { CanaryThresholdRuleItem } from './canary/CanaryThresholdRuleItem';
import { GitBranch, ShieldCheck, Activity } from 'lucide-react';

export const CanaryReleaseGaugeSlide: React.FC<{ slide: CanaryReleaseGaugeSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const stages = slide.stages || slide.canaryStages || [];
  const rules = slide.thresholdRules || [];
  const currentStageIndex = Math.min(activeStep, Math.max(0, stages.length - 1));
  const activeStage = stages[currentStageIndex];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
            <GitBranch size={12} /> {slide.kicker || 'DEPLOYMENT AUTOMATION'}
          </span>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            Canary Phase {currentStageIndex + 1} of {Math.max(stages.length, 1)}: {activeStage?.stageName || 'Canary'}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.title || 'Progressive Canary Deployment Pipeline'}</h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Automated traffic graduation across 4 validation tiers with automated circuit breakers.'}
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[600px] items-stretch">
        <div className="col-span-5 flex flex-col gap-4">
          <div className="flex-1">
            <CanaryGaugeVisualizer
              activeStage={activeStage}
              releaseVersion={slide.releaseVersion || 'v1.5.0-rc2'}
              targetEnvironment={slide.targetEnvironment || 'Production Multi-Region'}
              isAutomatedRollbackEnabled={slide.isAutomatedRollbackEnabled ?? true}
            />
          </div>
          <div className="space-y-2">
            {rules.map((rule) => (
              <CanaryThresholdRuleItem key={rule.id} rule={rule} />
            ))}
          </div>
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-4 items-stretch">
          {stages.map((stage, idx) => (
            <CanaryStageCard
              key={stage.id || idx}
              stage={stage}
              index={idx}
              activeStep={activeStep}
              accentColor="var(--pres-accent, #06b6d4)"
            />
          ))}
        </div>
      </div>

      <div className="plane-1-raised p-3.5 rounded-2xl border border-slate-800 bg-slate-950/80 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-6 text-slate-300">
          <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
            <Activity size={14} /> Canary Telemetry Stream Active
          </span>
          <span className="text-slate-400">Current Traffic: <strong className="text-white">{activeStage?.trafficPercentage ?? 0}%</strong></span>
          <span className="text-slate-400">Target Env: <strong className="text-slate-200">{slide.targetEnvironment || 'Production'}</strong></span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1 font-bold text-[11px]">
            <ShieldCheck size={14} /> Zero-Downtime Pipeline Verified
          </span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Step: {activeStep}</span>
        </div>
      </div>
    </div>
  );
};
