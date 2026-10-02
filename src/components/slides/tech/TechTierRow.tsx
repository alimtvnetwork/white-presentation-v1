import React from 'react';
import type { TechStackPillar, TechStackPillarItem } from '../../../types/enterpriseArchetypes';
import { CheckCircle2, Cpu, Database, Cloud, Layers, Terminal } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Frontend: Layers,
  'Presentation & UI': Layers,
  Backend: Terminal,
  'Runtime & State': Cpu,
  Infrastructure: Cloud,
  'Persistence & Security': Database,
  'AI / Data': Cpu,
  Database,
};

const TechItemRow: React.FC<{ item: TechStackPillarItem }> = ({ item }) => {
  const isVerified = Boolean(item.isVerified);
  return (
    <div className="p-3 rounded-xl plane-2-elevated bg-slate-900/60 border border-slate-800 flex items-center justify-between">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-ubuntu text-sm font-bold text-slate-100">{item.name}</span>
          {item.version && <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-500/10 text-sky-300">{item.version}</span>}
        </div>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-[11px] block truncate">{item.purpose}</span>
      </div>
      {isVerified && (
        <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30 shrink-0">
          <CheckCircle2 size={11} /> Verified
        </span>
      )}
    </div>
  );
};

export const TechTierRow: React.FC<{ pillar: TechStackPillar; idx: number }> = ({ pillar, idx }) => {
  const IconComponent = CATEGORY_ICONS[pillar.category] || Layers;
  return (
    <div className="flex-1 plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <IconComponent size={16} />
            </div>
            <h3 className="font-ubuntu text-base font-bold text-slate-100">{pillar.category}</h3>
          </div>
          <span className="font-mono text-[10px] text-sky-400 uppercase font-bold">Pillar 0{idx + 1}</span>
        </div>
        <div className="space-y-2.5 mt-4">
          {pillar.technologies.map((tech, tIdx) => (
            <TechItemRow key={tIdx} item={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};
