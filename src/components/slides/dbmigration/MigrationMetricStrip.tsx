import React from 'react';
import { Database, ShieldCheck, Clock, Zap } from 'lucide-react';
import type { DatabaseMigrationPipelineSlideData } from '../../../types/sovereignOperationsArchetypes';

interface MigrationMetricStripProps {
  slide: DatabaseMigrationPipelineSlideData;
}

export const MigrationMetricStrip: React.FC<MigrationMetricStripProps> = ({ slide }) => {
  const phases = slide.pipelinePhases || [];
  const totalDuration = phases.reduce((acc, p) => acc + (p.durationMinutes || 0), 0);
  const isLossFree = slide.isZeroDataLossGuaranteed;

  return (
    <div className="z-10 grid grid-cols-4 gap-4">
      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Total Transferred
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {slide.totalRecords || '1.8B'} <span className="text-sm font-normal font-mono text-emerald-400">Rows</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Database size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Pipeline Phases
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {phases.length} <span className="text-sm font-normal font-mono text-cyan-400">Stages</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Zap size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Migration Window
          </div>
          <div style={{ color: 'var(--pres-text)' }} className="text-2xl font-bold font-ubuntu tracking-tight">
            {totalDuration} <span className="text-sm font-normal font-mono text-sky-400">Min</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
          <Clock size={20} />
        </div>
      </div>

      <div
        style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
        className="plane-1-raised p-4 rounded-xl border flex items-center justify-between"
      >
        <div>
          <div style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono uppercase tracking-wider">
            Data Guarantee
          </div>
          <div className="text-sm font-bold font-mono text-emerald-400 flex items-center gap-1.5 mt-1">
            <span>{isLossFree ? 'Zero Data Loss' : 'Strict Consistency'}</span>
            <span style={{ color: 'var(--pres-text-muted)' }}>•</span>
            <span>Shadow Writes</span>
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <ShieldCheck size={20} />
        </div>
      </div>
    </div>
  );
};
