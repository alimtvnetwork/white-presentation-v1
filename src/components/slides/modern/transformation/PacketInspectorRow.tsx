import React from 'react';
import { ShieldCheck, ShieldAlert, Radio, Activity } from 'lucide-react';
import type { ZeroTrustTelemetryBanner } from '../../../../types/modern/transformationTypes';

interface PacketInspectorRowProps {
  telemetry: ZeroTrustTelemetryBanner;
  isPostureCompliant: boolean;
  activeLayerName: string;
}

export const PacketInspectorRow: React.FC<PacketInspectorRowProps> = ({
  telemetry,
  isPostureCompliant,
  activeLayerName,
}) => (
  <div className="plane-1-raised rounded-2xl p-4 px-6 border border-slate-700/60 flex items-center justify-between font-mono text-sm z-10">
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Radio size={14} className="text-emerald-400 animate-pulse" />
        <span className="text-xs uppercase tracking-wider text-slate-400">eBPF Packet Stream</span>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30 flex items-center gap-1">
          <Activity size={12} />
          {telemetry.isZeroTrustEnforced ? '100% MTLS ENFORCED' : 'ENFORCING'}
        </span>
      </div>

      <div className="w-[1px] h-6 bg-slate-700/50" />

      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-wider text-slate-400">Inspecting Layer</span>
        <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-400 font-bold border border-sky-500/30">
          {activeLayerName || 'Hardware Identity'}
        </span>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2 text-rose-400">
        <ShieldAlert size={16} />
        <span className="text-xs uppercase tracking-wider text-slate-400">Blocked Anomalies:</span>
        <span className="font-bold text-rose-400">{telemetry.blockedAnomaliesCount} Attempts</span>
      </div>

      <div className="w-[1px] h-6 bg-slate-700/50" />

      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold">
        <ShieldCheck size={16} />
        <span>{isPostureCompliant ? 'POSTURE VERIFIED' : 'AUDIT PENDING'}</span>
      </div>
    </div>
  </div>
);
