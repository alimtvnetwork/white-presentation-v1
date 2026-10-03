import React from 'react';
import type { DatabaseSchemaErdSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { TableSchemaCard } from './erd/TableSchemaCard';
import { Database, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

export const DatabaseSchemaErdSlide: React.FC<{ slide: DatabaseSchemaErdSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const tables = slide.tables || [];
  const currentTableIndex = Math.min(activeStep, Math.max(0, tables.length - 1));
  const activeTable = tables[currentTableIndex];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 flex items-center gap-1.5">
            <Database size={12} /> {slide.kicker || 'DATABASE SCHEMA ARCHITECTURE'}
          </span>
          <span className="font-mono text-xs text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
            Focused: {activeTable?.tableName || 'Users'} (Table {currentTableIndex + 1} of {Math.max(tables.length, 1)})
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.title || 'Split-DB Relational Schema Architecture'}</h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">
          {slide.subtitle || 'Multi-tier SQLite databases adhering strictly to PascalCase tables and positive boolean flags.'}
        </p>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl border border-slate-800 bg-slate-900/60 z-10 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Layers size={14} className="text-indigo-400" />
          <span className="text-slate-400">Engine:</span>
          <span className="text-indigo-300 font-bold">{slide.databaseEngine || 'SQLite 3.45 (WAL Mode)'}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-slate-400">Isolation:</span>
          <span className="text-cyan-300 font-bold">{slide.storageIsolationModel || 'Split-DB Multi-Tier'}</span>
        </div>
        <span className="flex items-center gap-1 text-emerald-400 font-bold">
          <ShieldCheck size={14} /> Foreign Keys Enforced
        </span>
      </div>

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[500px]">
        {tables.map((table, idx) => (
          <div key={table.id || idx} className={tables.length === 2 ? 'col-span-6' : tables.length === 3 ? 'col-span-4' : 'col-span-3'}>
            <TableSchemaCard
              table={table}
              index={idx}
              activeStep={activeStep}
              accentColor="var(--pres-accent, #6366f1)"
            />
          </div>
        ))}
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-2 text-indigo-400 font-bold">
          <Database size={14} />
          <span>Active Table Relations:</span>
          {activeTable?.relationships && activeTable.relationships.length > 0 ? (
            activeTable.relationships.map((rel, rIdx) => (
              <span key={rIdx} className="text-slate-300 font-normal flex items-center gap-1">
                {activeTable.tableName}.{rel.sourceColumn} <ArrowRight size={12} className="text-indigo-400" /> {rel.targetTable}.{rel.targetColumn} ({rel.cardinality})
              </span>
            ))
          ) : (
            <span className="text-slate-400 font-normal">Independent Sovereign Entity</span>
          )}
        </div>
        <span style={{ color: 'var(--pres-text-muted)' }}>Step: {activeStep}</span>
      </div>
    </div>
  );
};
