import React from 'react';
import { Lock, ShieldCheck, Database, Check } from 'lucide-react';
import type { LineageNode } from '../../../../types/modern/transformationTypes';

interface LineageStageRowProps {
  node: LineageNode;
  index: number;
  currentStep: number;
  onHover: (idx: number | null) => void;
}

export const LineageStageRow: React.FC<LineageStageRowProps> = ({
  node,
  index,
  currentStep,
  onHover,
}) => {
  const isCurrent = index === currentStep;
  const isPast = index < currentStep;

  const cardOpacity = isCurrent ? 'opacity-100' : isPast ? 'opacity-75' : 'opacity-35';
  const cardBorder = isCurrent ? 'border-amber-500 shadow-[0_0_24px_rgba(245,158,11,0.25)]' : 'border-slate-700/60';

  return (
    <div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`plane-1-raised rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${cardOpacity} ${cardBorder}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 font-bold border border-amber-500/30">
            NODE 0{index + 1}
          </span>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full font-bold text-emerald-400 bg-emerald-500/10 flex items-center gap-1">
            <ShieldCheck size={12} />
            {node.regulatoryArticle}
          </span>
        </div>

        <h3 style={{ color: 'var(--pres-text)' }} className="text-xl font-bold font-ubuntu mb-1">
          {node.nodeTitle}
        </h3>
        <p className="text-xs font-mono text-slate-400 mb-4">{node.processingStage}</p>

        <div className="space-y-2 text-sm font-mono mb-4">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><Lock size={14} className="text-amber-400" /> Encryption</span>
            <span className="text-slate-200 font-bold">{node.encryptionStandard}</span>
          </div>
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5"><Database size={14} className="text-sky-400" /> Audit State</span>
            <span className="text-emerald-400 font-bold">{node.auditVerificationState}</span>
          </div>
        </div>
      </div>

      <div>
        <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-2">
          Governance Controls
        </span>
        <div className="flex flex-wrap gap-1.5">
          {node.governanceControls.map((control) => (
            <span
              key={control}
              className="text-xs px-2 py-1 rounded-md bg-slate-800/80 border border-slate-700/50 text-slate-300 flex items-center gap-1 font-mono"
            >
              <Check size={12} className="text-amber-400" />
              {control}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
