import React from 'react';
import type { CleanRoomCollaborator } from '../../../types/nextGenArchetypes';
import { Users, Building2, CheckCircle2, Key, FileCheck } from 'lucide-react';

interface CleanRoomEnclaveCardProps {
  parties: CleanRoomCollaborator[];
}

export const CleanRoomEnclaveCard: React.FC<CleanRoomEnclaveCardProps> = ({ parties }) => {
  return (
    <div className="col-span-7 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <Users size={16} className="text-violet-400" />
          Collaborating Organizations & Datasets ({parties.length} Nodes)
        </span>
        <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-xs">
          Cryptographically Partitioned Vaults
        </span>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {parties.map((party, pIdx) => (
          <div
            key={party.partyId}
            style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
            className="plane-1-raised rounded-2xl p-4 border flex flex-col justify-between hover:border-violet-500/50 hover:shadow-lg transition-all flex-1"
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="px-2.5 py-0.5 rounded-full font-mono text-xs font-bold bg-violet-500/20 text-slate-900 dark:text-violet-300 border border-violet-500/30 flex items-center gap-1.5">
                  <Building2 size={13} className="text-violet-400" /> PARTY 0{pIdx + 1}
                </span>
                <span className="font-mono text-xs text-slate-700 dark:text-slate-300 font-bold">
                  {party.recordCountMillion}M Records
                </span>
              </div>
              <h4 className="text-lg font-bold font-ubuntu text-slate-900 dark:text-slate-100 mb-0.5">
                {party.organizationName}
              </h4>
              <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs font-mono">
                Dataset: {party.datasetName}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between font-mono text-[11px]">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 size={12} /> {party.isIngestionCompleted ? 'INGESTED' : 'INGESTING'}
              </span>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Key size={12} className="text-sky-400" />
                  {party.isEnclaveAttested ? 'Attested' : 'Unsigned'}
                </span>
                <span className="flex items-center gap-1">
                  <FileCheck size={12} className="text-emerald-400" />
                  {party.hasSignedConsent ? 'Consent Signed' : 'Pending'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
