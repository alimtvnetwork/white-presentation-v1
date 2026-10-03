import React from 'react';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

export interface EndpointHeaderBarProps {
  httpMethod: string;
  endpointPath: string;
  authStrategy: string;
  rateLimitPerMinute: number;
  responseStatusCode: number;
  hasSchemaValidation: boolean;
}

export const EndpointHeaderBar: React.FC<EndpointHeaderBarProps> = ({
  httpMethod,
  endpointPath,
  authStrategy,
  rateLimitPerMinute,
  responseStatusCode,
  hasSchemaValidation,
}) => {
  const isPost = httpMethod === 'POST';
  const isGet = httpMethod === 'GET';
  const isPut = httpMethod === 'PUT';
  const isDelete = httpMethod === 'DELETE';
  const isSuccess = responseStatusCode >= 200 && responseStatusCode < 300;

  return (
    <div className="plane-1-raised p-3.5 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center justify-between font-mono text-xs">
      <div className="flex items-center gap-3">
        <span
          className={`px-2.5 py-0.5 rounded-md font-black text-xs tracking-wider border ${
            isPost
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              : isGet
              ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
              : isPut
              ? 'bg-amber-500/20 text-amber-900 dark:text-amber-300 border-amber-500/40'
              : isDelete
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
              : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
          }`}
        >
          {httpMethod}
        </span>
        <span className="font-bold text-slate-100 text-sm">{endpointPath}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1 text-[11px] text-slate-400">
          <Lock size={12} className="text-amber-600 dark:text-amber-400" /> {authStrategy}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-slate-400">
          <Zap size={12} className="text-cyan-400" /> {rateLimitPerMinute.toLocaleString()} req/m
        </span>
        <span
          className={`px-2 py-0.5 rounded-full border text-[10px] font-bold ${
            isSuccess
              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
              : 'bg-rose-500/15 text-rose-300 border-rose-500/30'
          }`}
        >
          {responseStatusCode} OK
        </span>
        {hasSchemaValidation && (
          <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
            <ShieldCheck size={12} /> Validated
          </span>
        )}
      </div>
    </div>
  );
};
