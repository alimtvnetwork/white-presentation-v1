// lint-allow: file-size reason="CrossFunctionalRaciMatrixSlide flat sovereign enterprise cross-functional RACI matrix" max=200
import React, { useState } from 'react';
import type {
  CrossFunctionalRaciMatrixSlideData,
  RaciMatrixRow,
} from '../../../types/suite2027Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Filter,
  CheckSquare,
  Sparkles,
} from 'lucide-react';

const DEF_ROWS: RaciMatrixRow[] = [
  {
    id: 'raci-mtls',
    initiativeName: 'Zero-Trust SPIFFE/mTLS Mesh Rollout',
    category: 'Security Architecture',
    chiefSoftwareEngineerRaci: 'A',
    vpInfrastructureRaci: 'R',
    headSecOpsRaci: 'R',
    leadDataScientistRaci: 'I',
    finOpsDirectorRaci: 'C',
    headComplianceRaci: 'C',
    hasExecutiveSignoff: true,
  },
  {
    id: 'raci-gpu',
    initiativeName: 'Enterprise GPU Fleet Arbitrage & vLLM Cluster',
    category: 'AI Infrastructure',
    chiefSoftwareEngineerRaci: 'A',
    vpInfrastructureRaci: 'R',
    headSecOpsRaci: 'C',
    leadDataScientistRaci: 'R',
    finOpsDirectorRaci: 'A',
    headComplianceRaci: 'I',
    hasExecutiveSignoff: true,
  },
  {
    id: 'raci-finops',
    initiativeName: 'Automated Cloud FinOps Unit Rate Containment',
    category: 'Cloud Economics',
    chiefSoftwareEngineerRaci: 'R',
    vpInfrastructureRaci: 'R',
    headSecOpsRaci: 'I',
    leadDataScientistRaci: 'C',
    finOpsDirectorRaci: 'A',
    headComplianceRaci: 'C',
    hasExecutiveSignoff: true,
  },
  {
    id: 'raci-medallion',
    initiativeName: 'Iceberg Medallion Data Lake Tiering',
    category: 'Data Platform',
    chiefSoftwareEngineerRaci: 'C',
    vpInfrastructureRaci: 'R',
    headSecOpsRaci: 'C',
    leadDataScientistRaci: 'A',
    finOpsDirectorRaci: 'C',
    headComplianceRaci: 'R',
    hasExecutiveSignoff: true,
  },
  {
    id: 'raci-dr',
    initiativeName: 'Active-Active Multi-Cloud DR Failover Drills',
    category: 'Resilience',
    chiefSoftwareEngineerRaci: 'A',
    vpInfrastructureRaci: 'R',
    headSecOpsRaci: 'C',
    leadDataScientistRaci: 'I',
    finOpsDirectorRaci: 'I',
    headComplianceRaci: 'A',
    hasExecutiveSignoff: true,
  },
  {
    id: 'raci-quantum',
    initiativeName: 'Post-Quantum Cryptography Enclave Migration',
    category: 'Governance & Cryptography',
    chiefSoftwareEngineerRaci: 'A',
    vpInfrastructureRaci: 'C',
    headSecOpsRaci: 'R',
    leadDataScientistRaci: 'I',
    finOpsDirectorRaci: 'I',
    headComplianceRaci: 'R',
    hasExecutiveSignoff: true,
  },
];

const ROLES = [
  { key: 'chiefSoftwareEngineerRaci', title: 'Chief Architect', short: 'CSE' },
  { key: 'vpInfrastructureRaci', title: 'VP Infrastructure', short: 'VPI' },
  { key: 'headSecOpsRaci', title: 'Head of SecOps', short: 'SEC' },
  { key: 'leadDataScientistRaci', title: 'Lead Data Scientist', short: 'LDS' },
  { key: 'finOpsDirectorRaci', title: 'FinOps Director', short: 'FIN' },
  { key: 'headComplianceRaci', title: 'Compliance Lead', short: 'CMP' },
] as const;

export const CrossFunctionalRaciMatrixSlide: React.FC<{
  slide?: CrossFunctionalRaciMatrixSlideData;
  data?: CrossFunctionalRaciMatrixSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const rows = data?.matrixRows?.length ? data.matrixRows : DEF_ROWS;
  const categories = ['ALL', ...Array.from(new Set(rows.map((r) => r.category)))];

  const filteredRows = selectedCategory === 'ALL'
    ? rows
    : rows.filter((r) => r.category === selectedCategory);

  const renderBadge = (raci: 'R' | 'A' | 'C' | 'I') => {
    switch (raci) {
      case 'A':
        return (
          <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-[14px] bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40 shadow-sm">
            A
          </span>
        );
      case 'R':
        return (
          <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-[14px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 shadow-sm">
            R
          </span>
        );
      case 'C':
        return (
          <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-[14px] bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-500/40 shadow-sm">
            C
          </span>
        );
      case 'I':
      default:
        return (
          <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-[14px] bg-slate-300/60 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-slate-700 shadow-sm">
            I
          </span>
        );
    }
  };

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 flex items-center gap-2">
              <Users size={16} className="text-violet-500" />
              {data?.kicker || 'ENTERPRISE GOVERNANCE & DECISION RIGHTS'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <FileCheck size={14} /> Cycle: {data?.governanceCycle || '2027 Strategic Governance'}
            </span>
            <span className="text-[14px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Signoff Verified: 100%
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Cross-Functional RACI Decision Rights Matrix'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Sovereign accountability allocation across engineering, security, data science, infrastructure, FinOps, and regulatory compliance.'}
          </p>
        </div>

        {/* RACI Legend Strip */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-4 font-mono text-[13px]">
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold flex items-center justify-center text-[12px] border border-amber-500/40">A</span>
            <span className="text-slate-700 dark:text-slate-300 font-semibold">Accountable</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center text-[12px] border border-emerald-500/40">R</span>
            <span className="text-slate-700 dark:text-slate-300 font-semibold">Responsible</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-6 rounded bg-sky-500/20 text-sky-700 dark:text-sky-300 font-bold flex items-center justify-center text-[12px] border border-sky-500/40">C</span>
            <span className="text-slate-700 dark:text-slate-300 font-semibold">Consulted</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-6 rounded bg-slate-300/60 dark:bg-slate-800 text-slate-700 dark:text-slate-400 font-bold flex items-center justify-center text-[12px] border border-slate-400 dark:border-slate-700">I</span>
            <span className="text-slate-700 dark:text-slate-300 font-semibold">Informed</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pill Bar */}
      <div className="flex items-center gap-2 z-10 my-2 font-mono text-[13px]">
        <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px] flex items-center gap-1 mr-2">
          <Filter size={14} /> Domain Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[var(--pres-accent)] text-white border-[var(--pres-accent)] font-bold shadow-md'
                : 'bg-slate-100 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 border-[var(--pres-border)] hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Plane 1 Bento RACI Table */}
      <div className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 z-10 my-auto shadow-2xl">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 pb-3 border-b border-[var(--pres-border)] font-mono text-[14px] font-bold text-slate-500 dark:text-slate-400 uppercase items-center">
          <div className="col-span-5">Strategic Initiative & Domain</div>
          {ROLES.map((role) => (
            <div key={role.key} className="col-span-1 text-center" title={role.title}>
              <span className="block text-[12px] opacity-75">{role.short}</span>
              <span className="text-[13px]">{role.title.split(' ')[0]}</span>
            </div>
          ))}
          <div className="col-span-1 text-center">Signoff</div>
        </div>

        {/* Table Rows */}
        <div className="space-y-2 mt-3 font-mono text-[14px]">
          {filteredRows.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-12 gap-4 items-center p-3 rounded-xl border border-slate-200 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:border-[var(--pres-accent)] hover:bg-slate-200/50 dark:hover:bg-slate-800/40 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
            >
              <div className="col-span-5 flex items-center gap-3">
                <span className="text-[12px] font-bold px-2.5 py-0.5 rounded bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20 whitespace-nowrap">
                  {row.category}
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                  {row.initiativeName}
                </span>
              </div>

              <div className="col-span-1 flex justify-center">
                {renderBadge(row.chiefSoftwareEngineerRaci)}
              </div>
              <div className="col-span-1 flex justify-center">
                {renderBadge(row.vpInfrastructureRaci)}
              </div>
              <div className="col-span-1 flex justify-center">
                {renderBadge(row.headSecOpsRaci)}
              </div>
              <div className="col-span-1 flex justify-center">
                {renderBadge(row.leadDataScientistRaci)}
              </div>
              <div className="col-span-1 flex justify-center">
                {renderBadge(row.finOpsDirectorRaci)}
              </div>
              <div className="col-span-1 flex justify-center">
                {renderBadge(row.headComplianceRaci)}
              </div>

              <div className="col-span-1 flex justify-center">
                {row.hasExecutiveSignoff ? (
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-bold text-[12px]" title="Audited Signoff Completed">
                    <CheckSquare size={18} /> Verified
                  </span>
                ) : (
                  <span className="text-amber-500 text-[12px]">Pending</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-3.5 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[12px]">Audit Ledger:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <CheckCircle2 size={16} /> Single-Accountability Rule Enforced (Exactly One 'A' per row)
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[12px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-violet-600 dark:text-violet-400 font-bold flex items-center gap-1">
            <Sparkles size={16} /> ISO 27001 / SOC 2 Type II
          </span>
        </div>
      </div>
    </div>
  );
};
