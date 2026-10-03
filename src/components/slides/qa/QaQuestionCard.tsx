import React from 'react';
import type { LiveQuestionItem } from '../../../types/extendedArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { ThumbsUp, CheckCircle2, Sparkles } from 'lucide-react';

interface QaQuestionCardProps {
  question: LiveQuestionItem;
  index: number;
  currentStep: number;
  accentColor?: string;
}

export const QaQuestionCard: React.FC<QaQuestionCardProps> = ({
  question,
  index,
  currentStep,
  accentColor = '#8b5cf6',
}) => {
  const phase = getStepPhase(index, currentStep);
  const phaseStyle = getStepPhaseStyle(phase, accentColor);
  const isDone = isBooleanTrue(question.isAnswered);
  const isFlagged = isBooleanTrue(question.isFlaggedPriority);
  const isPast = phase === 'past';
  const isActive = phase === 'active';

  return (
    <div
      style={phaseStyle}
      className={`rounded-2xl border p-4 transition-all duration-300 ${
        isActive ? 'bg-slate-900/90 border-cyan-500/60 plane-2-elevated' : 'bg-slate-900/40 border-slate-800 plane-1-raised'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-ubuntu text-sm font-bold text-white">{question.submitterName}</span>
          <span className="font-poppins text-xs text-slate-400">({question.submitterCompany})</span>
        </div>
        <div className="flex items-center gap-2">
          {isFlagged && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
              <Sparkles size={10} /> Priority
            </span>
          )}
          {isDone && (
            <span className="text-emerald-400 flex items-center gap-1 text-[10px] font-mono">
              <CheckCircle2 size={12} /> Answered
            </span>
          )}
          <span className="px-2 py-0.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold flex items-center gap-1">
            <ThumbsUp size={11} /> {question.upvotesCount}
          </span>
        </div>
      </div>

      <p className="font-poppins text-sm text-slate-200 leading-snug mb-2 font-medium">
        "{question.questionText}"
      </p>

      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1 border-t border-slate-800/40">
        <span>Question #{index + 1}</span>
        {isActive && <span className="text-cyan-400 font-semibold">Active Spotlight</span>}
      </div>
    </div>
  );
};
