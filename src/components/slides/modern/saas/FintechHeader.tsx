import React from 'react';
import { ArrowLeftRight, CheckCircle } from 'lucide-react';

interface FintechHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  currencyPair?: string;
  isRegulatoryCompliant?: boolean;
}

export const FintechHeader: React.FC<FintechHeaderProps> = ({
  kicker = 'HIGH-THROUGHPUT TRANSACTION INFRASTRUCTURE',
  title = 'Global FinTech Double-Entry Ledger & Real-Time Settlement',
  subtitle = 'Distributed transaction clearing architecture delivering sub-second finality and zero-discrepancy reconciliation',
  currencyPair = 'USD / EUR / GBP / JPY Pool',
  isRegulatoryCompliant = true,
}) => (
  <header className="z-10 flex items-start justify-between gap-6 mb-4">
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
          <ArrowLeftRight size={14} className="text-cyan-500" />
          {kicker}
        </span>
        <span className="font-mono text-xs px-3 py-1 rounded-full bg-slate-500/10 text-slate-700 dark:text-slate-300 border border-slate-500/20 font-bold">
          {currencyPair}
        </span>
        {isRegulatoryCompliant ? (
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5 font-bold">
            <CheckCircle size={13} className="text-emerald-500" />
            Regulatory Compliant
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
