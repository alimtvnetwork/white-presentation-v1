import React from 'react';
import type { TechClusterNodeItem } from '../../../types/flatGlobalSuiteTypes';
import { Zap, Shield, Database, Cpu, Volume2, Activity, Globe } from 'lucide-react';

export interface HexagonNodeProps {
  node: TechClusterNodeItem;
  index: number;
  isActive?: boolean;
  onSelect?: (node: TechClusterNodeItem) => void;
}

const renderIcon = (name: string) => {
  if (name === 'Shield') return <Shield size={18} className="text-cyan-400" />;
  if (name === 'Database') return <Database size={18} className="text-emerald-400" />;
  if (name === 'Cpu') return <Cpu size={18} className="text-amber-400" />;
  if (name === 'Volume2') return <Volume2 size={18} className="text-pink-400" />;
  if (name === 'Activity') return <Activity size={18} className="text-purple-400" />;
  if (name === 'Globe') return <Globe size={18} className="text-blue-400" />;
  return <Zap size={18} className="text-indigo-400" />;
};

export const HexagonNode: React.FC<HexagonNodeProps> = ({
  node,
  index,
  isActive = false,
  onSelect,
}) => {
  const isCore = node.isCoreHub;

  return (
    <div
      onClick={() => onSelect?.(node)}
      style={{ animationDelay: `${index * 80}ms` }}
      className={`plane-1-raised rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between h-[190px] w-[220px] group ${
        isActive || isCore
          ? 'border-indigo-400 bg-slate-900 ring-2 ring-indigo-500/40 shadow-2xl scale-[1.02]'
          : 'border-slate-800 bg-slate-950/70 hover:border-slate-700'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center">
            {renderIcon(node.nodeIcon)}
          </span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-slate-700 bg-slate-900 text-slate-300">
            {node.stackCategory}
          </span>
        </div>
        <h4 className="font-ubuntu text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
          {node.nodeName}
        </h4>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px]">
        <span className="text-slate-400">Mesh Sync</span>
        <span className="text-emerald-400 font-bold">{node.connectivityScore}%</span>
      </div>
    </div>
  );
};
