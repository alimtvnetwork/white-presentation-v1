import React from 'react';
import type { ComplianceFrameworkCard } from '../../../../types/modern/saasFinancialTypes';
import { ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';

interface FrameworkPostureCardProps {
  card: ComplianceFrameworkCard;
  onClick?: () => void;
}

export const FrameworkPostureCard: React.FC<FrameworkPostureCardProps> = ({ card, onClick }) => {
  const percentage = Math.round((card.passingControlCount / Math.max(card.controlCount, 1)) * 100);

  return (
    <div
      onClick={onClick}
      className="plane-1-raised p-6 rounded-2xl flex flex-col justify-between border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {card.certificationStatus}
          </span>
          {card.hasContinuousMonitoring ? (
            <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
              <RefreshCw size={11} className="text-emerald-400" /> Continuous
            </span>
          ) : null}
        </div>

        <h3 className="text-lg font-ubuntu font-bold text-slate-100 mb-2">{card.frameworkName}</h3>

        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-4">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1.5">
            <span>Controls Passing:</span>
            <span className="text-emerald-400 font-bold">
              {card.passingControlCount} / {card.controlCount} ({percentage}%)
            </span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-xs text-slate-500 font-mono mt-2 flex items-center justify-between">
            <span>Audit Frequency:</span>
            <span className="text-slate-300 font-medium">{card.auditFrequency}</span>
          </div>
        </div>
      </div>

      <div>
        <div className="text-xs uppercase text-slate-400 font-mono font-bold tracking-wider mb-2">
          Verified Highlights
        </div>
        <div className="space-y-1.5">
          {card.verifiedHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
              <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
