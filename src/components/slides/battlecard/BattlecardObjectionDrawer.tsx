import React from 'react';
import { HelpCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { ObjectionResponseItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface BattlecardObjectionDrawerProps {
  objections: ObjectionResponseItem[];
}

export const BattlecardObjectionDrawer: React.FC<BattlecardObjectionDrawerProps> = ({
  objections,
}) => (
  <div className="space-y-2.5">
    {objections.map((obj) => {
      const isVerified = isBooleanTrue(obj.isVerified);

      return (
        <div key={obj.id} className="p-3 rounded-xl border border-slate-800 bg-slate-950/70 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2">
              <HelpCircle size={15} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span className="font-ubuntu text-xs font-semibold text-slate-100">
                "{obj.commonObjection}"
              </span>
            </div>
            {isVerified && (
              <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1 shrink-0 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                <ShieldCheck size={10} /> Verified Proof
              </span>
            )}
          </div>

          <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800/80 text-xs">
            <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block font-semibold mb-0.5">
              Approved Counter-Narrative:
            </span>
            <p className="text-slate-300 font-poppins leading-relaxed">
              {obj.counterNarrative}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-300 pt-0.5">
            <CheckCircle2 size={11} className="text-emerald-400" />
            <span>Proof: {obj.evidentiaryProofPoint}</span>
          </div>
        </div>
      );
    })}
  </div>
);
