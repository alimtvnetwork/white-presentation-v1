import React from 'react';
import type { DiffHunkLine } from '../../../types/kineticSuiteArchetypes';
import { Terminal } from 'lucide-react';

export interface CodeBlockPaneProps {
  header: string;
  lines: DiffHunkLine[];
  isAfterPane: boolean;
  isActive: boolean;
  accentColor?: string;
}

export const CodeBlockPane: React.FC<CodeBlockPaneProps> = ({
  header,
  lines,
  isAfterPane,
  isActive,
  accentColor = '#3b82f6',
}) => {
  const hasActiveBorder = isActive && isAfterPane;
  return (
    <div
      className={`rounded-2xl border p-4 flex flex-col font-mono text-xs transition-all duration-300 ${
        hasActiveBorder
          ? 'bg-slate-950/95 border-emerald-500 ring-2 ring-emerald-500/40 shadow-2xl'
          : isAfterPane
          ? 'bg-slate-950/80 border-slate-700'
          : 'bg-slate-950/60 border-slate-800 opacity-85'
      }`}
      style={hasActiveBorder ? { boxShadow: `0 0 24px -2px ${accentColor}50` } : {}}
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
        <span className="flex items-center gap-2 font-bold text-slate-300">
          <Terminal size={14} className={isAfterPane ? 'text-emerald-400' : 'text-rose-400'} />
          {header}
        </span>
        <span
          className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border ${
            isAfterPane
              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
              : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
          }`}
        >
          {isAfterPane ? 'Refactored' : 'Legacy'}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 pr-1 font-mono text-[11px] leading-relaxed">
        {lines.map((line) => {
          const isAddition = line.isAddition;
          const isDeletion = line.isDeletion;
          const isHighlighted = line.isHighlighted && isActive;

          return (
            <div
              key={`${line.lineNumber}-${line.content}`}
              className={`flex items-start gap-2 px-2 py-0.5 rounded ${
                isAddition
                  ? 'bg-emerald-500/15 text-emerald-200'
                  : isDeletion
                  ? 'bg-rose-500/15 text-rose-300 line-through opacity-80'
                  : 'text-slate-300'
              } ${isHighlighted ? 'ring-1 ring-emerald-400/50' : ''}`}
            >
              <span className="w-6 text-right select-none opacity-40 font-mono text-[10px]">
                {line.lineNumber}
              </span>
              <span className="w-3 text-center select-none font-bold">
                {isAddition ? '+' : isDeletion ? '-' : ' '}
              </span>
              <code className="flex-1 whitespace-pre-wrap font-mono break-all">{line.content}</code>
            </div>
          );
        })}
      </div>
    </div>
  );
};
