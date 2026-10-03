import React from 'react';
import type { DbTableEntity } from '../../../types/kineticSuiteArchetypes';
import { getStepPhase, getStepPhaseStyle } from '../../../utils/stepProgression';
import { Database, Key, Link2, Hash } from 'lucide-react';

export interface TableSchemaCardProps {
  table: DbTableEntity;
  index: number;
  activeStep: number;
  accentColor?: string;
}

export const TableSchemaCard: React.FC<TableSchemaCardProps> = ({
  table,
  index,
  activeStep,
  accentColor = '#3b82f6',
}) => {
  const phase = getStepPhase(index, activeStep);
  const stepStyle = getStepPhaseStyle(phase, accentColor);
  const isFocused = phase === 'active';

  return (
    <div
      style={stepStyle}
      className={`rounded-2xl border p-4 flex flex-col font-mono text-xs transition-all duration-300 ${
        isFocused
          ? 'bg-slate-950/95 border-blue-500 ring-2 ring-blue-500/40 shadow-2xl'
          : 'bg-slate-900/50 border-slate-800'
      }`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <Database size={15} className={isFocused ? 'text-blue-400' : 'text-slate-400'} />
          <span className="font-bold text-slate-100 text-sm">{table.tableName}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">
            {table.databaseTier}
          </span>
          <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
            <Hash size={10} /> {table.rowCountEstimate.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="space-y-1.5 overflow-y-auto flex-1 pr-1 text-[11px]">
        {table.columns.map((col) => {
          const isPk = col.isPrimaryKey;
          const isFk = col.isForeignKey;
          return (
            <div
              key={col.name}
              className={`p-2 rounded-lg flex items-center justify-between border ${
                isPk
                  ? 'bg-amber-100 border-amber-300 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-200'
                  : isFk
                  ? 'bg-purple-500/10 border-purple-500/30 text-purple-200'
                  : 'bg-slate-950/50 border-slate-800/80 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-1.5">
                {isPk && <Key size={11} className="text-amber-600 dark:text-amber-400" />}
                {isFk && <Link2 size={11} className="text-purple-400" />}
                <span className="font-bold">{col.name}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px]">
                <span className="text-slate-400 font-mono">{col.dataType}</span>
                {col.isIndexed && <span className="text-blue-400 font-bold">[IDX]</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
