import React from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export interface BranchingActionCardProps {
  keyTrigger: 'Y' | 'N';
  label: string;
  description: string;
  badge?: string;
  isRecommendedOption?: boolean;
  hasKeyboardHints?: boolean;
  onSelect: () => void;
}

export const BranchingActionCard: React.FC<BranchingActionCardProps> = ({
  keyTrigger,
  label,
  description,
  badge,
  isRecommendedOption = false,
  hasKeyboardHints = true,
  onSelect,
}) => {
  const isYes = keyTrigger === 'Y';
  const borderTone = isYes ? 'border-emerald-500/40 hover:border-emerald-400' : 'border-amber-500/40 hover:border-amber-400';
  const bgTone = isYes ? 'bg-emerald-950/20 hover:bg-emerald-950/40' : 'bg-amber-950/20 hover:bg-amber-950/40';
  const accentColor = isYes ? 'text-emerald-400' : 'text-amber-400';

  return (
    <div
      onClick={onSelect}
      className={`plane-1-raised rounded-3xl p-8 border ${borderTone} ${bgTone} transition-all duration-300 cursor-pointer flex flex-col justify-between h-[340px] group shadow-xl hover:scale-[1.02]`}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${isYes ? 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10' : 'border-amber-500/30 text-amber-300 bg-amber-500/10'}`}>
            {badge || (isYes ? 'RECOMMENDED TRAJECTORY' : 'CONSERVATIVE ROUTE')}
          </span>
          {hasKeyboardHints && (
            <kbd className="px-3 py-1 rounded-lg bg-black/40 border border-slate-700 font-mono text-xs text-slate-300 shadow-inner group-hover:border-slate-500">
              KEY [{keyTrigger}]
            </kbd>
          )}
        </div>
        <h3 className="font-ubuntu text-3xl font-black text-slate-100 mb-3 group-hover:text-white transition-colors">
          {label}
        </h3>
        <p className="font-poppins text-base text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
        <span className={`font-mono text-xs font-semibold flex items-center gap-1.5 ${accentColor}`}>
          {isYes ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} />}
          {isYes ? 'Autonomous Rollout' : 'Manual Governance'}
        </span>
        <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-200 transition-colors">
          <span className="font-mono text-xs">Execute Decision</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
