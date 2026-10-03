import React from 'react';
import type { VpnNodeItem } from '../../../types/extendedArchetypes';
import { KeyRound, Radio, Shield, Gauge, CheckCircle2 } from 'lucide-react';
import { isBooleanTrue } from '../../../utils/booleanGuards';

interface VpnProtocolInspectorProps {
  activeNode: VpnNodeItem | undefined;
  protocol: string;
  encryptionSuite: string;
}

export const VpnProtocolInspector: React.FC<VpnProtocolInspectorProps> = ({
  activeNode,
  protocol,
  encryptionSuite,
}) => {
  const isAudited = isBooleanTrue(activeNode?.isVerifiedAudit);
  const isKillSwitch = isBooleanTrue(activeNode?.isKillSwitchActive);

  return (
    <div className="h-full flex flex-col justify-between bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Radio size={14} className="animate-pulse" />
            <span>Telemetry Inspector</span>
          </div>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30">
            {protocol} / ChaCha20
          </span>
        </div>

        <div className="mt-5 space-y-4 font-mono text-xs">
          <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
            <span className="text-slate-400 block mb-1">Active Sovereign Endpoint:</span>
            <div className="flex items-baseline justify-between">
              <span className="text-base font-bold text-white">
                {activeNode ? `${activeNode.city}, ${activeNode.country}` : 'Connecting...'}
              </span>
              <span className="text-emerald-400 text-xs font-bold">10 Gbps Edge</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1">IP: {activeNode?.ipAddress || '198.51.100.x'}</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <div className="text-slate-400 mb-1 flex items-center gap-1.5"><Gauge size={12} /> Latency</div>
              <div className="text-lg font-bold text-sky-400">{activeNode?.latencyMs || 12} ms</div>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <div className="text-slate-400 mb-1 flex items-center gap-1.5"><Shield size={12} /> Kill-Switch</div>
              <div className="text-sm font-bold text-emerald-400">{isKillSwitch ? 'Hardware Enforced' : 'Standby'}</div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-slate-400">
              <span>Zero-Log Audit State:</span>
              <span className="text-amber-400 font-bold">{isAudited ? 'Cryptographically Sealed' : 'Verified'}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Handshake Rotation:</span>
              <span className="text-slate-200">Re-keyed every 120s</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-800/40">
        <div className="flex items-center gap-2 text-sky-300 font-mono text-xs font-bold mb-2">
          <KeyRound size={13} />
          <span>CRYPTOGRAPHIC SUITE</span>
        </div>
        <ul className="font-mono text-[11px] text-slate-300 space-y-1.5">
          <li className="flex items-center gap-1.5">
            <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
            <span>Curve25519 ECDH Key Exchange</span>
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
            <span>Poly1305 128-bit MAC Auth</span>
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle2 size={11} className="text-emerald-400 shrink-0" />
            <span>{encryptionSuite || 'ChaCha20-Poly1305 AEAD'}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
