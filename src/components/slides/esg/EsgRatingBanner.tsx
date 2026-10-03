import React from 'react';
import { Leaf, Award, CheckCircle2, UserCheck } from 'lucide-react';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface EsgRatingBannerProps {
  reportingFiscalYear: string;
  totalCarbonFootprintMetricTons: number;
  renewableEnergyPercent: number;
  esgRatingGrade: string;
  hasRegulatorySignoff: boolean;
  sustainabilityLead: string;
  leadRole: string;
}

export const EsgRatingBanner: React.FC<EsgRatingBannerProps> = ({
  reportingFiscalYear,
  totalCarbonFootprintMetricTons,
  renewableEnergyPercent,
  esgRatingGrade,
  hasRegulatorySignoff,
  sustainabilityLead,
  leadRole,
}) => {
  const isSignoffVerified = isBooleanTrue(hasRegulatorySignoff);

  return (
    <div className="plane-1-raised p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 flex items-center justify-between font-mono text-xs">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
          <Award size={14} className="text-emerald-400" />
          ESG RATING: {esgRatingGrade} ({reportingFiscalYear})
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          <Leaf size={14} className="text-emerald-400" />
          Carbon Footprint: <strong className="text-slate-100 font-bold">{totalCarbonFootprintMetricTons.toLocaleString()} tCO2e</strong>
        </span>
        <span className="flex items-center gap-1.5 text-slate-300">
          Renewable Energy: <strong className="text-emerald-400 font-bold">{renewableEnergyPercent.toFixed(1)}% PPA</strong>
        </span>
        <span
          className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold border ${
            isSignoffVerified
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              : 'bg-slate-800 text-slate-400 border-slate-700'
          }`}
        >
          <CheckCircle2 size={12} />
          {isSignoffVerified ? 'REGULATORY AUDIT PASSED' : 'AUDIT PENDING'}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <UserCheck size={14} className="text-emerald-400" />
        <span className="text-slate-400">
          Sustainability Lead: <strong className="text-slate-100">{sustainabilityLead}</strong> ({leadRole})
        </span>
      </div>
    </div>
  );
};
