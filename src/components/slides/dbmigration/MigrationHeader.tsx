import React from 'react';
import { Database, UserCheck, Server, RefreshCw } from 'lucide-react';
import type { DatabaseMigrationPipelineSlideData } from '../../../types/sovereignOperationsArchetypes';

interface MigrationHeaderProps {
  slide: DatabaseMigrationPipelineSlideData;
  isEditMode: boolean;
  onUpdateTitle: (title: string) => void;
  onUpdateSubtitle: (subtitle: string) => void;
}

export const MigrationHeader: React.FC<MigrationHeaderProps> = ({
  slide,
  isEditMode,
  onUpdateTitle,
  onUpdateSubtitle,
}) => {
  const engineerName = slide.leadMigrationEngineer || 'Alim Ul Karim';
  const engineerRole = slide.engineerTitle || 'Chief Software Engineer';

  return (
    <div className="z-10 flex items-start justify-between">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <Database size={13} /> {slide.kicker || 'DATABASE MIGRATION PIPELINE'}
          </span>
          <span className="font-mono text-xs text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
            <Server size={11} /> Cluster: {slide.migrationCluster || 'Aurora Postgres'}
          </span>
          <span className="font-mono text-xs text-sky-300 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20 flex items-center gap-1">
            <RefreshCw size={11} /> Engine: {slide.targetEngine || 'Distributed Spanner'}
          </span>
          <span className="font-mono text-xs text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
            <UserCheck size={11} /> {engineerName} ({engineerRole})
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[38px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => onUpdateTitle(e.currentTarget.textContent || '')}
        >
          {slide.title || 'Zero-Downtime Live Sharded DB Migration'}
        </h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Continuous CDC Replication, Bi-Directional Shadow Writes & Cutover Gate Verification'}
        </p>
      </div>

      <div className="flex items-center gap-3 font-mono">
        <div
          style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
          className="plane-1-raised px-4 py-2.5 rounded-xl border flex items-center gap-3"
        >
          <div className="text-right">
            <div style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] uppercase tracking-wider">
              Total Progress
            </div>
            <div className="text-xl font-bold text-emerald-400">
              {slide.overallCompletionPercent || 100}% SYNCED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
