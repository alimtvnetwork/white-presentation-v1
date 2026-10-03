import React, { useState } from 'react';
import type { HexagonalTechClusterSlideData, TechClusterNodeItem } from '../../../types/flatGlobalSuiteTypes';
import { HexagonNode } from './HexagonNode';
import { Network, Cpu, Lock } from 'lucide-react';

const CATEGORIES = ['All Nodes', 'Messaging', 'Security', 'Database', 'Compute', 'Network'];

export const HexagonalTechClusterSlide: React.FC<{
  slide: HexagonalTechClusterSlideData;
}> = ({ slide }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All Nodes');
  const [activeNode, setActiveNode] = useState<TechClusterNodeItem | null>(null);
  const nodes = slide.clusterNodes || [];
  const filtered = selectedCat === 'All Nodes' ? nodes : nodes.filter((n) => n.stackCategory === selectedCat);

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between"
    >
      <div className="z-10 flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <span className="kicker-pill-badge mb-1">{slide.kicker || 'TECHNICAL TOPOLOGY'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">
            {slide.title || 'Hexagonal Microservices Fabric & Capability Mesh'}
          </h1>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
          <span className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-semibold flex items-center gap-1.5">
            <Network size={14} /> Honeycomb Topology
          </span>
          <span className="text-slate-400">Total Nodes: {slide.totalNodesCount || nodes.length}</span>
        </div>
      </div>

      <div className="z-10 flex items-center gap-2 py-1">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold transition-all ${
              selectedCat === cat
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="z-10 flex flex-wrap items-center justify-center gap-5 my-auto max-w-[1500px] mx-auto py-2">
        {filtered.map((node, idx) => (
          <HexagonNode
            key={node.id || idx}
            node={node}
            index={idx}
            isActive={activeNode?.id === node.id}
            onSelect={(n) => setActiveNode(n)}
          />
        ))}
      </div>

      <div className="z-10 plane-1-raised p-3.5 rounded-xl border border-slate-800 bg-slate-950/80 flex items-center justify-between font-mono text-xs text-slate-400">
        <span className="flex items-center gap-2 text-indigo-300">
          <Cpu size={14} className="text-indigo-400" /> Nexus: {slide.clusterCenterTitle || 'Core Nexus Orchestrator'}
        </span>
        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
          <Lock size={12} /> Mutual TLS Encrypted Mesh
        </span>
      </div>
    </div>
  );
};
