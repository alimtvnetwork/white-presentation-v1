import React from 'react';
import { Terminal, CheckCircle2, Play } from 'lucide-react';

interface CodePlaygroundOutputPaneProps {
  output?: string;
  isExecutable?: boolean;
}

export const CodePlaygroundOutputPane: React.FC<CodePlaygroundOutputPaneProps> = ({ output, isExecutable }) => {
  const hasOutput = Boolean(output);
  const canRun = Boolean(isExecutable);

  return (
    <div className="plane-2-elevated rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden flex flex-col h-full">
      <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="font-mono text-xs text-slate-400 ml-2 flex items-center gap-1.5">
            <Terminal size={12} /> Execution Console
          </span>
        </div>

        <div className="flex items-center gap-2">
          {canRun && (
            <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <Play size={10} /> Live Runtime
            </span>
          )}
          <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
            <CheckCircle2 size={12} /> Exit 0
          </span>
        </div>
      </div>

      <div className="p-5 font-mono text-xs leading-relaxed text-emerald-300 flex-1 overflow-auto bg-black/40">
        {hasOutput ? (
          <pre className="whitespace-pre-wrap font-mono text-xs">{output}</pre>
        ) : (
          <div className="text-slate-500 italic">$ Ready for execution. Press run to compile...</div>
        )}
      </div>

      <div className="px-4 py-2 bg-slate-900/50 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
        <span>Sub-10ms Canvas Compilation</span>
        <span className="text-emerald-400">Zero Egress</span>
      </div>
    </div>
  );
};
