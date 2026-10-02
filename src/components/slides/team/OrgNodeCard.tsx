import React, { useState } from 'react';
import type { OrgDepartment } from '../../../types/enterpriseArchetypes';
import { Crown, ChevronDown, ChevronUp, UserCheck } from 'lucide-react';

export function sanitizeRoleTitle(name: string, role: string): string {
  const isAlim = name.toLowerCase().includes('alim') && name.toLowerCase().includes('karim');
  if (isAlim) return 'Chief Software Engineer';
  return role;
}

export const RootLeaderCard: React.FC<{ role: string; name: string }> = ({ role, name }) => {
  const displayRole = sanitizeRoleTitle(name, role);
  return (
    <div className="plane-2-elevated p-4 px-8 rounded-2xl border border-teal-500/40 bg-teal-500/10 flex items-center gap-4 shadow-lg shadow-teal-950/20">
      <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300 font-bold">
        <Crown size={20} />
      </div>
      <div>
        <div className="font-ubuntu text-lg font-bold text-slate-100">{name}</div>
        <span className="font-mono text-xs text-teal-300 font-semibold">{displayRole}</span>
      </div>
    </div>
  );
};

export const OrgNodeCard: React.FC<{ dept: OrgDepartment }> = ({ dept }) => {
  const [isOpen, setIsOpen] = useState<boolean>(Boolean(dept.isExpandedDefault));
  const members = dept.members || [];
  const displayLeadRole = sanitizeRoleTitle(dept.leadName, dept.leadRole);

  return (
    <div className="flex-1 plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/50 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-ubuntu text-base font-bold text-slate-100">{dept.departmentName}</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-300 font-bold">{dept.headcount} HC</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 mb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-300 mb-0.5"><UserCheck size={14} /> {dept.leadName}</div>
          <span style={{ color: 'var(--pres-text-muted)' }} className="font-mono text-[11px] block">{displayLeadRole}</span>
        </div>
      </div>
      <div>
        <button type="button" onClick={() => setIsOpen((prev) => !prev)} className="w-full flex items-center justify-between text-xs font-mono text-teal-400 py-1">
          <span>{isOpen ? 'Collapse Team' : 'Inspect Team'}</span>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {isOpen && (
          <div className="space-y-1.5 mt-2 pt-2 border-t border-slate-800">
            {members.map((m, mIdx) => {
              const isLead = Boolean(m.isLead);
              const mRole = sanitizeRoleTitle(m.name, m.role);
              return (
                <div key={mIdx} className={`p-2 rounded-xl border flex items-center justify-between text-xs ${isLead ? 'bg-teal-500/10 border-teal-500/30 text-teal-200' : 'bg-slate-950/40 border-slate-800 text-slate-300'}`}>
                  <span className="font-semibold">{m.name}</span>
                  <span style={{ color: 'var(--pres-text-muted)' }} className="text-[10px] font-mono">{mRole}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
