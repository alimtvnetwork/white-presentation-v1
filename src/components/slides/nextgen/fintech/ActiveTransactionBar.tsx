import React from 'react';
import { ArrowRight, DollarSign } from 'lucide-react';
import type { ActivePaymentTransaction } from '../../../../types/nextGenArchetypes';

interface ActiveTransactionBarProps {
  txn: ActivePaymentTransaction;
}

export const ActiveTransactionBar: React.FC<ActiveTransactionBarProps> = ({ txn }) => (
  <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-slate-700/60 z-10 font-mono text-xs flex items-center justify-between">
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <span className="px-3 py-1 rounded-md bg-violet-500/20 text-slate-900 dark:text-violet-300 font-bold border border-violet-500/30 text-sm">
          {txn.messageType}
        </span>
        <span className="text-slate-900 dark:text-slate-100 font-bold text-sm">{txn.txnId}</span>
      </div>
      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
        <span>
          Sender: <strong className="text-slate-900 dark:text-slate-100">{txn.senderIbanMasked}</strong>
        </span>
        <ArrowRight size={14} className="text-violet-500" />
        <span>
          Receiver: <strong className="text-slate-900 dark:text-slate-100">{txn.receiverIbanMasked}</strong>
        </span>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <div className="flex items-center gap-1.5 text-lg font-bold text-slate-900 dark:text-emerald-400">
        <DollarSign size={20} className="text-emerald-500" />
        {(txn.amountUsd / 1000000).toFixed(2)}M {txn.currency}
      </div>
      <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-slate-900 dark:text-emerald-300 font-bold border border-emerald-500/30 text-sm">
        SANCTIONS CLEARED
      </span>
    </div>
  </div>
);
