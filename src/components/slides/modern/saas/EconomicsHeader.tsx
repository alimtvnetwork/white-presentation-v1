import React from 'react';
import { DollarSign, ShieldCheck } from 'lucide-react';

interface EconomicsHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  fiscalQuarter?: string;
  isAuditVerified?: boolean;
}

export const EconomicsHeader: React.FC<EconomicsHeaderProps> = ({
  kicker = 'FINANCIAL SOVEREIGNTY & CAPITAL EFFICIENCY',
  title = 'Enterprise SaaS Unit Economics & Margin Architecture',
  subtitle = 'Decomposition of acquisition efficiency, net revenue expansion, and cloud gross margins',
  fiscalQuarter = 'FY2026-Q3',
  isAuditVerified = true,
}) => (
  <header className="z-10 flex items-start justify-between gap-6 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
          <DollarSign size={14} className="text-emerald-500" />
          {kicker}
        </span>
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20 font-bold">
          {fiscalQuarter}
        </span>
        {isAuditVerified ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 flex items-center gap-1.5 font-bold">
            <ShieldCheck size={13} className="text-blue-500" />
            Audit Verified
          </span>
        ) : null}
      </div>
      <h1
        style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
        className="text-4xl lg:text-5xl font-ubuntu font-black leading-tight tracking-tight mb-2"
      >
        {title}
      </h1>
      <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  </header>
);
