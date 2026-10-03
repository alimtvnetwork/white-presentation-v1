import React from 'react';
import { Clock, User, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { TimelineRailMilestone } from '../../../types/enterpriseArchetypes';
import { hasNot } from '../../../utils/booleanGuards';

export interface MilestoneDetailCardProps {
  node?: TimelineRailMilestone;
}

export const MilestoneDetailCard: React.FC<MilestoneDetailCardProps> = ({ node }) => {
  const hasNode = Boolean(node);
  if (hasNot(hasNode)) {
    return (
      <div className="plane-1-raised rounded-2xl p-6 border border-slate-800 text-center text-slate-400 font-mono text-sm">
        Select a milestone node to inspect operational details.
      </div>
    );
  }

  const activeMilestone = node!;
  const deliverables = activeMilestone.deliverables || [];
  const hasDeliverables = deliverables.length > 0;

  return (
    <div className="plane-1-raised rounded-2xl p-6 border border-blue-500/30 bg-slate-900/60 backdrop-blur-md shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
            Phase 0{activeMilestone.stepNumber} Focus
          </span>
          <h3 className="font-ubuntu text-xl font-bold text-slate-100 mt-2">{activeMilestone.title}</h3>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase font-semibold">
          <ShieldCheck size={14} /> {activeMilestone.status}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-4">
        <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Target SLA</span>
          <span className="flex items-center gap-1.5 font-mono text-sm font-bold text-slate-200">
            <Clock size={14} className="text-amber-600 dark:text-amber-400" /> {activeMilestone.sla || 'Standard Delivery'}
          </span>
        </div>
        <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Accountable Owner</span>
          <span className="flex items-center gap-1.5 font-mono text-sm font-bold text-slate-200">
            <User size={14} className="text-blue-400" /> {activeMilestone.owner || 'Enterprise Architecture Team'}
          </span>
        </div>
        <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Execution Mode</span>
          <span className="font-mono text-sm font-bold text-indigo-300">Deterministic Air-Gapped</span>
        </div>
      </div>

      {hasDeliverables && (
        <div>
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Verified Deliverables & Acceptance Gates</span>
          <div className="grid grid-cols-2 gap-2">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-slate-800/30 px-3 py-1.5 rounded-lg border border-slate-700/40 text-xs text-slate-300 font-poppins">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
