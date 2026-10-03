import React from 'react';
import { Layers } from 'lucide-react';
import type { AgentWorkerNode } from '../../../../types/nextGenArchetypes';
import { WorkerNodeCard } from './WorkerNodeCard';

interface WorkerPoolPanelProps {
  workers: AgentWorkerNode[];
}

export const WorkerPoolPanel: React.FC<WorkerPoolPanelProps> = ({ workers }) => (
  <div className="col-span-8 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-2">
      <span className="font-mono text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-slate-800 dark:text-slate-200">
        <Layers size={16} className="text-violet-400" />
        Specialized Agent Worker Pool ({workers.length} Nodes)
      </span>
      <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">
        Direct AUM Subagent Execution Fabric
      </span>
    </div>

    <div className="grid grid-cols-2 gap-4 flex-1">
      {workers.map((worker) => (
        <WorkerNodeCard key={worker.id} worker={worker} />
      ))}
    </div>
  </div>
);
