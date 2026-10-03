import React from 'react';
import { Cpu, UserCheck, ShieldCheck, CheckCircle2, AlertOctagon } from 'lucide-react';
import type { AutonomousAiEvalHarnessSlideData } from '../../../types/sovereignOperationsArchetypes';

interface EvalHeaderProps {
  slide: AutonomousAiEvalHarnessSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const EvalHeader: React.FC<EvalHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  const evaluatorName = slide.principalEvaluator || 'Alim Ul Karim';
  const evaluatorRole = slide.evaluatorTitle || 'Chief Software Engineer';
  const isPermitted = slide.isProductionDeploymentPermitted;

  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center gap-1.5">
            <Cpu size={13} /> {slide.kicker || 'AUTONOMOUS AI EVAL HARNESS'}
          </span>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
            Harness: {slide.evalFramework || 'DeepEval / Inspect'}
          </span>
          <span className="font-mono text-xs text-sky-300 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
            Model: {slide.modelEvaluated || 'Production LLM'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
            <UserCheck size={11} /> {evaluatorName} ({evaluatorRole})
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
        >
          {slide.title || 'Multi-Agent LLM Safety & Alignment Benchmark'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Autonomous Red-Teaming, Output Groundedness & Hallucination Gate Evaluation'}
        </p>
      </div>

      <div className="flex items-center gap-3 font-mono">
        <div
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="plane-1-raised px-4 py-2.5 rounded-xl border flex items-center gap-3"
        >
          {isPermitted ? (
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 size={22} />
              <div>
                <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider">
                  Deployment Verdict
                </div>
                <div className="text-sm font-bold">PRODUCTION CLEARED</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <AlertOctagon size={22} />
              <div>
                <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider">
                  Deployment Verdict
                </div>
                <div className="text-sm font-bold">GATE HOLD (EVALUATING)</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
