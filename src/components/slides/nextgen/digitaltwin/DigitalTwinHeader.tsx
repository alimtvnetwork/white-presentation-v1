import React from 'react';
import { Globe, Activity } from 'lucide-react';

interface DigitalTwinHeaderProps {
  kicker?: string;
  title?: string;
  subtitle?: string;
  activeShipments: number;
  otifPct: number;
  savedDelayDays: number;
  isEditMode: boolean;
  onTitleChange: (v: string) => void;
  onSubtitleChange: (v: string) => void;
}

export const DigitalTwinHeader: React.FC<DigitalTwinHeaderProps> = ({
  kicker,
  title,
  subtitle,
  activeShipments,
  otifPct,
  savedDelayDays,
  isEditMode,
  onTitleChange,
  onSubtitleChange,
}) => {
  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <Globe size={16} className="text-cyan-500" />
            {kicker || 'GLOBAL LOGISTICS DIGITAL TWIN'}
          </span>
          <span className="font-mono text-sm px-3 py-1 rounded-full bg-cyan-500/10 text-slate-900 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5">
            <Activity size={15} className="text-cyan-400" />
            Autonomous Reroute & Chokepoint Contingency Simulation
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onTitleChange(e.currentTarget.textContent || '')}
        >
          {title || 'Supply Chain Digital Twin & Corridor Lattice'}
        </h1>
        <p
          style={{ color: 'var(--pres-text-muted)' }}
          className="font-poppins text-base max-w-4xl leading-relaxed"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onSubtitleChange(e.currentTarget.textContent || '')}
        >
          {subtitle || 'Realtime Global Freight Simulation, Predictive Bottleneck Rerouting, and Decarbonized Multimodal Optimization'}
        </p>
      </div>

      <div className="plane-1-raised p-3.5 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono">
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Active Shipments
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{activeShipments.toLocaleString()}</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            On-Time (OTIF)
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-sky-400">{otifPct}%</span>
        </div>
        <div className="w-[1px] h-8 bg-slate-700/50" />
        <div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="text-xs block uppercase tracking-wider">
            Saved Delay
          </span>
          <span className="text-xl font-bold text-slate-900 dark:text-cyan-400">{savedDelayDays}d</span>
        </div>
      </div>
    </div>
  );
};
