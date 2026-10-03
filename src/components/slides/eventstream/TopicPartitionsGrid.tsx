import React from 'react';
import type { EventTopicPartitionItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { Layers, CheckCircle2, ShieldAlert } from 'lucide-react';

interface TopicPartitionsGridProps {
  topics: EventTopicPartitionItem[];
}

export const TopicPartitionsGrid: React.FC<TopicPartitionsGridProps> = ({ topics }) => {
  return (
    <div className="plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3 h-full font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-slate-300 flex items-center gap-2">
          <Layers size={14} className="text-sky-400" />
          Event Topic Partition Topology
        </span>
        <span className="text-slate-400">{topics.length} Partitioned Topics</span>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {topics.map((top) => {
          const isHealthy = isBooleanTrue(top.isHealthy);
          const isBalanced = isBooleanTrue(top.isPartitionBalanced);
          const epsK = (top.eventsPerSecond / 1000).toFixed(0);

          return (
            <div
              key={top.id}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-100 text-[13px]">{top.topicName}</span>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded border flex items-center gap-1 ${
                    isHealthy
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                      : 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                  }`}
                >
                  {isHealthy ? (
                    <>
                      <CheckCircle2 size={10} /> HEALTHY
                    </>
                  ) : (
                    <>
                      <ShieldAlert size={10} /> DEGRADED
                    </>
                  )}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                <span>Partitions: <strong className="text-sky-300 font-bold">{top.partitionCount}</strong></span>
                <span>Throughput: <strong className="text-emerald-400 font-bold">{epsK}k EPS</strong></span>
                <span>Replication: <strong className="text-slate-200 font-bold">{top.replicationFactor}x</strong></span>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-500">
                <span>Partition Balance: <strong className="text-slate-300">{isBalanced ? 'Balanced' : 'Rebalancing'}</strong></span>
                <span className="text-sky-400 font-mono">Anycast Sync</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
