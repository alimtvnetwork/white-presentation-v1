import React from 'react';
import { Lock, Asterisk, ListFilter } from 'lucide-react';
import type { GatewayHeaderParamItem } from '../../../types/globalPptArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface GatewayHeadersPanelProps {
  headers: GatewayHeaderParamItem[];
}

export const GatewayHeadersPanel: React.FC<GatewayHeadersPanelProps> = ({ headers }) => (
  <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/70 flex flex-col gap-2 font-mono text-xs">
    <div className="flex items-center justify-between text-slate-400 text-[11px] uppercase tracking-wider pb-1.5 border-b border-slate-800">
      <span className="flex items-center gap-1.5">
        <ListFilter size={12} className="text-cyan-400" /> Ingress HTTP Headers ({headers.length})
      </span>
      <span className="text-[10px]">Policy: mTLS / Bearer</span>
    </div>

    <div className="space-y-1.5 overflow-y-auto max-h-[160px] pr-1">
      {headers.map((h) => {
        const isRequired = isBooleanTrue(h.isRequired);
        const isEncrypted = isBooleanTrue(h.isEncrypted);

        return (
          <div key={h.id} className="p-1.5 rounded bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-1.5 truncate max-w-[60%]">
              <span className="text-cyan-300 font-semibold">{h.headerKey}:</span>
              <span className="text-slate-300 truncate">{h.headerValue}</span>
            </div>

            <div className="flex items-center gap-1">
              {isEncrypted && (
                <span className="text-amber-600 dark:text-amber-400 text-[10px] flex items-center gap-0.5 px-1 rounded bg-amber-500/10">
                  <Lock size={9} /> Encrypted
                </span>
              )}
              {isRequired && (
                <span className="text-slate-400 text-[10px] flex items-center">
                  <Asterisk size={9} className="text-rose-400" /> Req
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
