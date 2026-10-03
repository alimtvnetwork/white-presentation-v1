import React from 'react';
import type { CatalogServiceItem } from '../../../../types/modern/saasFinancialTypes';
import { Server, Route, CheckCircle } from 'lucide-react';

interface IdpServiceCardProps {
  service: CatalogServiceItem;
  onClick?: () => void;
}

export const IdpServiceCard: React.FC<IdpServiceCardProps> = ({ service, onClick }) => (
  <div
    onClick={onClick}
    className="plane-1-raised p-5 rounded-2xl flex flex-col justify-between border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
  >
    <div>
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <span className="font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
          {service.tierLevel}
        </span>
        <span className="font-mono text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
          {service.apiProtocol}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-1">
        <Server size={16} className="text-indigo-400" />
        <h4 className="text-base font-ubuntu font-bold text-slate-100">{service.serviceName}</h4>
      </div>
      <div className="text-xs text-slate-400 font-mono mb-3">Version {service.currentVersion}</div>

      <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-3 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-mono">Uptime SLA:</span>
        <span className="text-sm font-ubuntu font-bold text-emerald-400">
          {service.uptimeSlaPercentage}%
        </span>
      </div>
    </div>

    <div>
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
        <span>Team:</span>
        <span className="text-slate-200 font-medium">{service.ownerTeam}</span>
      </div>
      <div className="flex items-center gap-2">
        {service.isServiceHealthy ? (
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-semibold">
            <CheckCircle size={12} /> Healthy
          </span>
        ) : null}
        {service.hasActiveGoldenPath ? (
          <span className="text-xs font-mono text-indigo-300 flex items-center gap-1 font-semibold ml-auto">
            <Route size={12} /> Golden Path
          </span>
        ) : null}
      </div>
    </div>
  </div>
);
