import React from 'react';
import type { SystemArchitectureFlowLayer, ArchitectureNode } from '../../../types/enterpriseArchetypes';
import { Server, Database, Cloud, Cpu, Box, LayoutGrid, Mic, Layers, Shield } from 'lucide-react';

const NODE_ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Server, Database, Cloud, Cpu, Box, LayoutGrid, Mic, Layers, Shield,
};

const ArchitectureNodeCard: React.FC<{ node: ArchitectureNode }> = ({ node }) => {
  const isCluster = Boolean(node.isCluster);
  const IconComponent = (node.icon && NODE_ICONS[node.icon]) || Box;

  return (
    <div className={`p-3 rounded-xl border flex items-center gap-3 transition-all ${isCluster ? 'plane-2-elevated bg-cyan-500/10 border-cyan-500/40 shadow-cyan-950/20' : 'plane-1-raised bg-slate-900/60 border-slate-800'}`}>
      <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
        <IconComponent size={16} />
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="font-ubuntu text-xs font-bold text-slate-100 truncate">{node.name}</span>
          {isCluster && <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-cyan-500/20 text-cyan-300">Cluster</span>}
        </div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-[10px] block truncate">{node.type}</span>
      </div>
    </div>
  );
};

export const ArchitectureTierColumn: React.FC<{ layer: SystemArchitectureFlowLayer; layerIndex: number }> = ({ layer, layerIndex }) => {
  const isHighlighted = Boolean(layer.isHighlighted);
  return (
    <div className={`flex-1 rounded-2xl p-5 border flex flex-col justify-between transition-all ${isHighlighted ? 'plane-2-elevated border-cyan-500/40 bg-slate-900/80 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-500/20' : 'plane-1-raised border-slate-800 bg-slate-900/40'}`}>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[11px] font-bold uppercase text-cyan-400 tracking-wider">Tier 0{layerIndex + 1}</span>
          {isHighlighted && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
        </div>
        <h3 className="font-ubuntu text-base font-bold text-slate-100 mb-1">{layer.layerName}</h3>
        {layer.description && <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-xs mb-4">{layer.description}</p>}
      </div>
      <div className="space-y-2 mt-2">
        {layer.nodes.map((node) => (
          <ArchitectureNodeCard key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
};
