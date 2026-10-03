import React from 'react';
import { Network, ShieldCheck, Terminal, Cpu } from 'lucide-react';

interface NvLinkFabricFooterProps {
  leadHpcArchitect: string;
  architectTitle: string;
  isContinuousBatchingActive: boolean;
}

export const NvLinkFabricFooter: React.FC<NvLinkFabricFooterProps> = ({
  leadHpcArchitect,
  architectTitle,
  isContinuousBatchingActive,
}) => {
  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
      className="p-3.5 rounded-xl border flex items-center justify-between z-10 text-xs font-mono shadow-sm"
    >
      <div className="flex items-center gap-3 text-slate-300">
        <span className="flex items-center gap-1.5 text-purple-400 font-bold">
          <Network size={14} /> NVLink 4 / NVSwitch Mesh Fabric
        </span>
        <span className="text-slate-600">&bull;</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <ShieldCheck size={12} />
          {isContinuousBatchingActive ? 'vLLM PagedAttention Kernel Optimized' : 'Static Batch'}
        </span>
        <span className="text-slate-600">&bull;</span>
        <span className="text-slate-400">Zero Thermal Throttling Verified</span>
      </div>

      <div className="flex items-center gap-2 text-slate-400">
        <Terminal size={12} />
        <span>
          Lead HPC Architect: <strong className="text-slate-200">{leadHpcArchitect}</strong> ({architectTitle})
        </span>
      </div>
    </div>
  );
};
