import React from 'react';
import { AlertTriangle, ShieldCheck, Bug, Zap } from 'lucide-react';

interface ThreatSeverityStripProps {
  threatLevel: 'NOMINAL' | 'ELEVATED' | 'CRITICAL' | 'GUARDED';
  containmentRatePercent: number;
  activeThreatsCount: number;
  blockedAttacks24h: number;
}

export const ThreatSeverityStrip: React.FC<ThreatSeverityStripProps> = ({
  threatLevel,
  containmentRatePercent,
  activeThreatsCount,
  blockedAttacks24h,
}) => {
  const levelColors: Record<string, string> = {
    CRITICAL: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    ELEVATED: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    GUARDED: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    NOMINAL: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  };

  const formattedBlocked = (blockedAttacks24h / 1000).toFixed(0);

  const metrics = [
    {
      label: 'DEFCON Threat Level',
      value: threatLevel,
      sub: 'Real-time IOC correlation',
      icon: <AlertTriangle size={18} className="text-amber-600 dark:text-amber-400" />,
      tagColor: levelColors[threatLevel] || levelColors.GUARDED,
    },
    {
      label: 'Containment Rate',
      value: `${containmentRatePercent.toFixed(1)}%`,
      sub: 'Zero lateral movement observed',
      icon: <ShieldCheck size={18} className="text-emerald-400" />,
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      label: 'Active Threat Vectors',
      value: `${activeThreatsCount} Signatures`,
      sub: 'Continuous memory/eBPF scans',
      icon: <Bug size={18} className="text-rose-400" />,
      tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    },
    {
      label: 'Attacks Blocked (24h)',
      value: `${formattedBlocked}k Blocked`,
      sub: 'Automated WAF & BGP drops',
      icon: <Zap size={18} className="text-cyan-400" />,
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
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
