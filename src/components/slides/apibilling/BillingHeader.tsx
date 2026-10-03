import React from 'react';
import { DollarSign, Receipt, Radio, ShieldCheck } from 'lucide-react';

interface BillingHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  billingCycle: string;
  isRealtimeMeteringActive?: boolean;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const BillingHeader: React.FC<BillingHeaderProps> = ({
  kicker = 'API UNIT ECONOMICS & REVENUE METERING',
  title,
  subtitle,
  billingCycle,
  isRealtimeMeteringActive = true,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  return (
    <div className="z-10 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
          <DollarSign size={13} /> {kicker}
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-slate-800/80 text-slate-300 border border-slate-700 flex items-center gap-1.5">
          <Receipt size={11} className="text-emerald-400" /> Cycle: {billingCycle}
        </span>
        {isRealtimeMeteringActive && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
            <Radio size={11} className="animate-pulse" />
            <ShieldCheck size={12} /> Real-Time Ingress Metering Active
          </span>
        )}
      </div>

      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="font-ubuntu text-[36px] font-black tracking-tight leading-none"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
      >
        {title}
      </h1>

      <p
        style={{ color: 'var(--pres-text-muted)' }}
        className="font-poppins text-sm max-w-5xl leading-relaxed"
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => onUpdateSubtitle(e.currentTarget.textContent || '')}
      >
        {subtitle}
      </p>
    </div>
  );
};
