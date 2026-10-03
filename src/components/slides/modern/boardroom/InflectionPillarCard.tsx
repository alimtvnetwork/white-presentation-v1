import React from 'react';
import type { MarketThesisPillar } from '../../../../types/modern/boardroomStrategyTypes';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface InflectionPillarCardProps {
  pillar: MarketThesisPillar;
  onClick?: () => void;
}

export const InflectionPillarCard: React.FC<InflectionPillarCardProps> = ({ pillar, onClick }) => (
  <div
    onClick={onClick}
    className="plane-1-raised p-6 rounded-2xl flex flex-col justify-between border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
  >
    <div>
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="text-lg font-ubuntu font-bold text-slate-100">{pillar.pillarTitle}</h3>
        {pillar.hasCompetitiveMoat ? (
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/20 flex items-center gap-1 font-bold">
            <ShieldCheck size={12} /> Moat
          </span>
        ) : null}
      </div>

      <p className="text-sm font-poppins text-slate-300 mb-4 leading-relaxed">
        {pillar.coreThesisStatement}
      </p>

      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-4">
        <div className="text-xs uppercase text-slate-400 font-mono tracking-wider font-semibold">
          Quantitative Proof
        </div>
        <div className="text-2xl font-ubuntu font-black text-purple-400 tracking-tight mt-0.5">
          {pillar.quantitativeProof}
        </div>
        <div className="text-xs text-emerald-400 font-mono mt-1 font-semibold">
          Outcome: {pillar.strategicOutcome}
        </div>
      </div>
    </div>

    <div>
      <div className="text-xs uppercase text-slate-400 font-mono font-bold tracking-wider mb-2">
        Strategic Enablers
      </div>
      <div className="space-y-1.5">
        {pillar.strategicEnablers.map((enabler, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
            <CheckCircle2 size={13} className="text-purple-400 shrink-0" />
            <span>{enabler}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
