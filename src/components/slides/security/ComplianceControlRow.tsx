import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import type { ComplianceControlItem } from '../../../types/enterpriseArchetypes';

export interface ComplianceControlRowProps {
  control: ComplianceControlItem;
  rowIndex: number;
  activeStep: number;
}

export const ComplianceControlRow: React.FC<ComplianceControlRowProps> = ({
  control,
  rowIndex,
  activeStep,
}) => {
  const isPast = rowIndex < activeStep;
  const isActive = rowIndex === activeStep;
  const isFuture = rowIndex > activeStep;

  const rowStyle: React.CSSProperties = isActive
    ? { opacity: 1.0, transform: 'scale(1.02)', zIndex: 20 }
    : isPast
    ? { opacity: 0.75, transform: 'scale(1.0)' }
    : { opacity: 0.4, transform: 'scale(0.98)', filter: 'blur(1.25px)', pointerEvents: 'none' };

  return (
    <div
      style={rowStyle}
      className={`p-3 rounded-xl border flex items-center justify-between transition-all duration-300 ${
        isActive
          ? 'bg-blue-500/10 border-blue-500 ring-2 ring-blue-500/40 shadow-lg'
          : isPast
          ? 'bg-slate-900/60 border-emerald-500/30'
          : 'bg-slate-900/40 border-slate-800'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-blue-400 font-bold w-20">
          {control.category}
        </span>
        <span className="font-ubuntu text-sm text-slate-200">
          {control.standard}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            style={{ width: `${control.coveragePercent}%` }}
            className="h-full bg-emerald-500 rounded-full"
          />
        </div>
        <span className="font-mono text-xs text-emerald-400 font-semibold w-12 text-right">
          {control.coveragePercent}%
        </span>
        {isPast ? <Check size={14} className="text-emerald-400" /> : <ShieldCheck size={14} className="text-blue-400" />}
      </div>
    </div>
  );
};
