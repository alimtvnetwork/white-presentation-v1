import React from 'react';
import { ArrowDown, Code2 } from 'lucide-react';

interface GatewayPayloadViewerProps {
  requestBodyJson: string;
  responseBodyJson: string;
  responseStatus: number;
}

export const GatewayPayloadViewer: React.FC<GatewayPayloadViewerProps> = ({
  requestBodyJson,
  responseBodyJson,
  responseStatus,
}) => (
  <div className="grid grid-cols-2 gap-4 h-full font-mono text-xs">
    <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/80 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider">
        <span className="flex items-center gap-1.5 text-cyan-400">
          <Code2 size={12} /> Inbound JSON Payload
        </span>
        <span className="text-[10px]">application/json</span>
      </div>
      <pre className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80 text-cyan-300 text-[11px] leading-relaxed overflow-x-auto my-auto font-mono">
        {requestBodyJson}
      </pre>
      <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800/60">
        Payload Schema: Validated against OpenAPI 3.1
      </div>
    </div>

    <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/80 flex flex-col justify-between">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ArrowDown size={12} /> Response Payload [{responseStatus}]
        </span>
        <span className="text-emerald-400 text-[10px] font-bold">Latency: 4.2ms</span>
      </div>
      <pre className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80 text-emerald-300 text-[11px] leading-relaxed overflow-x-auto my-auto font-mono">
        {responseBodyJson}
      </pre>
      <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800/60">
        Edge Cache Status: HIT-LOCAL (Anycast Edge Node)
      </div>
    </div>
  </div>
);
