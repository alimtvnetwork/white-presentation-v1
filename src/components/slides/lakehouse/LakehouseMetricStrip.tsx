import React from 'react';
import { HardDrive, CheckCircle2, ShieldCheck, FileCheck2 } from 'lucide-react';

interface LakehouseMetricStripProps {
  totalDataManagedPb: number;
  complianceAuditScorePercent: number;
  domainsCount: number;
  rulesCount: number;
}

export const LakehouseMetricStrip: React.FC<LakehouseMetricStripProps> = ({
  totalDataManagedPb,
  complianceAuditScorePercent,
  domainsCount,
  rulesCount,
}) => {
  const metrics = [
    {
      label: 'Total Lakehouse Data',
      value: `${totalDataManagedPb.toFixed(1)} PB`,
      sub: 'Apache Iceberg v2 table format',
      icon: <HardDrive size={18} className="text-teal-400" />,
      tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    },
    {
      label: 'Compliance Audit Score',
      value: `${complianceAuditScorePercent.toFixed(1)}%`,
      sub: 'SOC2 / GDPR automated audit',
      icon: <CheckCircle2 size={18} className="text-emerald-400" />,
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      label: 'Governed Data Domains',
      value: `${domainsCount} Domains`,
      sub: 'Column-level Casbin masks',
      icon: <ShieldCheck size={18} className="text-indigo-400" />,
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
    },
    {
      label: 'Active Governance Rules',
      value: `${rulesCount} Enforced`,
      sub: 'Automated table compaction',
      icon: <FileCheck2 size={18} className="text-amber-600 dark:text-amber-400" />,
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
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
