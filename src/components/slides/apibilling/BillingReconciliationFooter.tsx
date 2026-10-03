import React from 'react';
import { DollarSign, ShieldCheck, Terminal, Clock } from 'lucide-react';

interface BillingReconciliationFooterProps {
  billingArchitect: string;
  architectTitle: string;
  isRealtimeMeteringActive: boolean;
}

export const BillingReconciliationFooter: React.FC<BillingReconciliationFooterProps> = ({
  billingArchitect,
  architectTitle,
  isRealtimeMeteringActive,
}) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-3 text-slate-300">
        <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <Clock size={14} /> Real-Time Metering Ledger
        </span>
        <span className="text-slate-600">&bull;</span>
        <span className="text-cyan-400 flex items-center gap-1">
          <ShieldCheck size={12} />
          {isRealtimeMeteringActive ? 'Sub-Second Event Ingestion' : 'Batch Sync'}
        </span>
        <span className="text-slate-600">&bull;</span>
        <span className="text-slate-400">Zero Unaccounted Quota Leaks</span>
      </div>

      <div className="flex items-center gap-2 text-slate-400">
        <Terminal size={12} />
        <span>
          Billing Architect: <strong className="text-slate-200">{billingArchitect}</strong> ({architectTitle})
        </span>
      </div>
    </div>
  );
};
