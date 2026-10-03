import React from 'react';

export interface UptimeHistoryStripsProps {
  historyBlocks?: { dayIndex: number; isHealthy: boolean }[];
}

export const UptimeHistoryStrips: React.FC<UptimeHistoryStripsProps> = ({
  historyBlocks = [],
}) => {
  const blocks = historyBlocks.length > 0
    ? historyBlocks
    : Array.from({ length: 90 }, (_, i) => ({ dayIndex: i + 1, isHealthy: true }));

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-[3px] w-full h-8 bg-slate-950/60 p-1.5 rounded-lg border border-slate-800/80">
        {blocks.map((block) => {
          const isHealthy = block.isHealthy;
          return (
            <div
              key={block.dayIndex}
              title={`Day ${block.dayIndex}: ${isHealthy ? 'Operational 100%' : 'Degraded Incident'}`}
              className={`flex-1 h-full rounded-[2px] transition-all hover:scale-125 ${
                isHealthy
                  ? 'bg-emerald-500/80 hover:bg-emerald-400'
                  : 'bg-rose-500 hover:bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.6)]'
              }`}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 px-0.5">
        <span>90 days ago</span>
        <span className="text-emerald-400/90 font-bold">100% Operational Today</span>
      </div>
    </div>
  );
};
