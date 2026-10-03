import React from 'react';
import type { PlatformMeshHealthStrip } from '../../../../types/modern/saasFinancialTypes';
import { Layers, Rocket, Route, CheckCircle, ShieldCheck } from 'lucide-react';

interface DeployVelocityStripProps {
  health: PlatformMeshHealthStrip;
}

export const DeployVelocityStrip: React.FC<DeployVelocityStripProps> = ({ health }) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/50 flex items-center justify-between gap-6 z-10 font-mono text-sm">
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
        <Layers size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Catalog Services</div>
        <div className="text-xl font-ubuntu font-black text-indigo-400">{health.totalRegisteredServices} Active</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <Rocket size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Deploy Duration</div>
        <div className="text-xl font-ubuntu font-black text-emerald-400">{health.averageDeployDurationMinutes} Min</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
        <Route size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">Golden Path Adoption</div>
        <div className="text-xl font-ubuntu font-black text-cyan-400">{health.goldenPathAdoptionPercentage}%</div>
      </div>
    </div>

    <div className="h-8 w-px bg-slate-700/60" />

    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
        <ShieldCheck size={20} />
      </div>
      <div>
        <div className="text-xs uppercase text-slate-400 tracking-wider font-bold">System SLO</div>
        <div className="text-xl font-ubuntu font-black text-blue-400">{health.systemSloPercentage}%</div>
      </div>
    </div>

    {health.isIdpHealthy ? (
      <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
        <CheckCircle size={13} />
        IDP Operational
      </div>
    ) : null}
  </div>
);
