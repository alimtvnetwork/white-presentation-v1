import React from 'react';
import type { AiGovernanceSafetyGovernorSlideData } from '../../../../types/nextgen/deepTechGovernanceTypes';
import { GovHeader } from './GovHeader';
import { GovMetricCard } from './GovMetricCard';
import { GovGateCard } from './GovGateCard';
import { ShieldCheck, Cpu } from 'lucide-react';

interface Props {
  slide?: AiGovernanceSafetyGovernorSlideData;
  data?: AiGovernanceSafetyGovernorSlideData;
}

export const AiGovernanceSafetyGovernorSlide: React.FC<Props> = ({ slide, data: propsData }) => {
  const data = slide || propsData;
  if (!data) return null;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_70px] flex flex-col justify-between"
    >
      <GovHeader
        kicker={data.kicker}
        title={data.title}
        subtitle={data.subtitle}
        reviewer={data.governorSignoff.reviewer}
        reviewerTitle={data.governorSignoff.reviewerTitle}
        isApproved={data.governorSignoff.isApproved}
      />

      <div className="grid grid-cols-12 gap-6 my-auto items-stretch h-[640px]">
        <div className="col-span-4 flex flex-col justify-between gap-6">
          <GovMetricCard metrics={data.governorMetrics} />

          <div
            style={{ backgroundColor: 'var(--pres-bg-card)', borderColor: 'var(--pres-border)' }}
            className="plane-1-raised rounded-3xl p-6 border flex flex-col justify-between flex-1"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-violet-700 dark:text-violet-300 block mb-2">
                Real-Time Defense Posture
              </span>
              <h3 className="text-xl font-ubuntu font-bold text-slate-900 dark:text-slate-100 mb-2">
                Deterministic AST Isolation
              </h3>
              <p style={{ color: 'var(--pres-text-muted)' }} className="text-xs leading-relaxed font-mono">
                Every inference payload undergoes multi-tier lexical isolation and semantic vector evaluation before hitting downstream foundation models.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between font-mono text-xs">
              <span className="text-emerald-800 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                <ShieldCheck size={16} /> Hard Failover Bypassed
              </span>
              <span className="text-slate-900 dark:text-slate-100 font-bold">0.00% Leaks</span>
            </div>
          </div>
        </div>

        <div className="col-span-8 grid grid-cols-2 gap-5">
          {data.governanceGates.map((gate, index) => (
            <GovGateCard key={gate.gateId} gate={gate} gateIndex={index} />
          ))}
        </div>
      </div>

      <footer className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <Cpu size={14} className="text-violet-600 dark:text-violet-400" />
          Autonomous Gate Pipeline • P99 Latency &lt; 5.2ms
        </span>
        <span className="text-violet-700 dark:text-violet-300 font-bold">
          Verified by {data.governorSignoff.reviewer} ({data.governorSignoff.reviewerTitle})
        </span>
      </footer>
    </div>
  );
};
