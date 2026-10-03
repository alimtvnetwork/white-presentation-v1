import React from 'react';
import { Activity, CheckCircle2, Server, Lock } from 'lucide-react';

interface MeshGoldenSignalStripProps {
  totalMeshRps: number;
  overallSuccessRatePercent: number;
  servicesCount: number;
  isStrictMtlsGlobal: boolean;
}

export const MeshGoldenSignalStrip: React.FC<MeshGoldenSignalStripProps> = ({
  totalMeshRps,
  overallSuccessRatePercent,
  servicesCount,
  isStrictMtlsGlobal,
}) => {
  const formattedRps = (totalMeshRps / 1000).toFixed(0);

  const metrics = [
    {
      label: 'Mesh Ingress / Egress',
      value: `${formattedRps}k RPS`,
      sub: 'Envoy ambient proxy data plane',
      icon: <Activity size={18} className="text-cyan-400" />,
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      label: 'Overall Success Rate',
      value: `${overallSuccessRatePercent.toFixed(3)}%`,
      sub: 'Error budget: 0.002% variance',
      icon: <CheckCircle2 size={18} className="text-emerald-400" />,
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      label: 'Active Microservices',
      value: `${servicesCount} Workloads`,
      sub: 'Automated sidecar injection',
      icon: <Server size={18} className="text-indigo-400" />,
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    },
    {
      label: 'Zero-Trust Encryption',
      value: isStrictMtlsGlobal ? '100% mTLS' : 'Permissive',
      sub: 'SPIFFE/SPIRE x509 rotation',
      icon: <Lock size={18} className="text-purple-400" />,
      tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 z-10">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="p-4 rounded-xl border flex items-center justify-between shadow-sm"
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">{m.label}</div>
            <div className="text-2xl font-mono font-bold mt-1 text-slate-100">{m.value}</div>
            <div className="text-xs text-slate-400 mt-0.5">{m.sub}</div>
          </div>
          <div className={`p-3 rounded-lg border ${m.tagColor}`}>{m.icon}</div>
        </div>
      ))}
    </div>
  );
};
