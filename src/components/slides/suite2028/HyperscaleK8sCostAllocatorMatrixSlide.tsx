// lint-allow: file-size reason="HyperscaleK8sCostAllocatorMatrixSlide flat sovereign Kubernetes FinOps cost allocation matrix" max=420
import React from 'react';
import type {
  HyperscaleK8sCostAllocatorMatrixSlideData,
  K8sNamespaceCostRow,
} from '../../../types/suite2028Archetypes';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import {
  DollarSign,
  TrendingDown,
  Layers,
  CheckCircle2,
  Calendar,
  Sparkles,
  Server,
  Zap,
  Activity,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

const DEF_ROWS: K8sNamespaceCostRow[] = [
  {
    id: 'row-checkout',
    namespaceName: 'prod-checkout',
    businessUnit: 'Digital Retail',
    monthlyCostUsd: 245000,
    cpuCoresAllocated: 4200,
    ramGigabytesAllocated: 16800,
    idleWastePercentage: 8.2,
    spotInstancePercentage: 72.0,
    isFinOpsOptimized: true,
    hasChargebackApproved: true,
  },
  {
    id: 'row-ai',
    namespaceName: 'ai-inference',
    businessUnit: 'Foundation ML',
    monthlyCostUsd: 380000,
    cpuCoresAllocated: 8400,
    ramGigabytesAllocated: 33600,
    idleWastePercentage: 5.4,
    spotInstancePercentage: 84.0,
    isFinOpsOptimized: true,
    hasChargebackApproved: true,
  },
  {
    id: 'row-risk',
    namespaceName: 'risk-analytics',
    businessUnit: 'Risk & Fraud Systems',
    monthlyCostUsd: 122000,
    cpuCoresAllocated: 1800,
    ramGigabytesAllocated: 7200,
    idleWastePercentage: 18.5,
    spotInstancePercentage: 40.0,
    isFinOpsOptimized: false,
    hasChargebackApproved: true,
  },
  {
    id: 'row-banking',
    namespaceName: 'core-banking',
    businessUnit: 'Global Transactions',
    monthlyCostUsd: 95000,
    cpuCoresAllocated: 1200,
    ramGigabytesAllocated: 4800,
    idleWastePercentage: 11.0,
    spotInstancePercentage: 20.0,
    isFinOpsOptimized: true,
    hasChargebackApproved: true,
  },
];

export const HyperscaleK8sCostAllocatorMatrixSlide: React.FC<{
  slide?: HyperscaleK8sCostAllocatorMatrixSlideData;
  data?: HyperscaleK8sCostAllocatorMatrixSlideData;
  activeStep?: number;
}> = ({ slide, data: pData }) => {
  const data = slide || pData;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();

  const costRows = data?.costRows?.length ? data.costRows : DEF_ROWS;
  const totalSpend = data?.totalClusterSpendMonthlyUsd ?? 842000;
  const overallWaste = data?.overallIdleWastePercentage ?? 14.2;

  const hasRightSizing = data?.hasAutomatedRightSizing ?? true;
  const hasSpotFleet = data?.hasSpotFleetIntegration ?? true;
  const hasDirectChargeback = data?.hasDirectChargebackActive ?? true;

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] p-[60px_80px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      {/* Plane 0 Header */}
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-2">
              <DollarSign size={16} className="text-emerald-500" />
              {data?.kicker || 'FINOPS & KUBERNETES RESOURCE ALLOCATION'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-[var(--pres-accent)]/15 text-[var(--pres-accent)] border border-[var(--pres-accent)]/30 flex items-center gap-2">
              <Calendar size={14} /> Month: {data?.reportingMonth || 'October 2026'}
            </span>
            <span className="text-[14px] font-mono px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 flex items-center gap-2">
              <TrendingDown size={14} className="text-cyan-500" />
              Total Monthly Spend: ${(totalSpend / 1000).toFixed(0)}k
            </span>
          </div>

          <h1
            className="text-[44px] font-ubuntu font-bold tracking-tight mb-2"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
          >
            {data?.title || 'Hyperscale K8s Cost Allocator Matrix'}
          </h1>
          <p
            className="font-poppins text-[16px] text-slate-600 dark:text-slate-300 max-w-5xl leading-relaxed"
            contentEditable={isEditMode}
            suppressContentEditableWarning
            onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}
          >
            {data?.subtitle ||
              'Multi-tenant cloud spend allocation, idle resource reclamation, and spot fleet chargeback attribution.'}
          </p>
        </div>

        {/* Executive Metric Badge Strip */}
        <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center gap-6 font-mono text-[14px]">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Monthly Spend</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">
              ${(totalSpend / 1000).toFixed(0)}k USD
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Idle Waste</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[18px]">
              {overallWaste}% Fleet
            </span>
          </div>
          <div className="w-[1px] h-8 bg-slate-300 dark:bg-slate-700/60" />
          <div>
            <span className="text-slate-500 dark:text-slate-400 block uppercase text-[14px]">Lead Architect</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">
              {data?.leadArchitect || 'Alim Ul Karim'}
            </span>
          </div>
        </div>
      </div>

      {/* Topline KPI Strip (4 Cards) */}
      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Cluster Spend</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">${(totalSpend / 1000).toFixed(0)}k /mo</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <DollarSign size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Idle Waste Ratio</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[22px]">{overallWaste}% Waste</span>
          </div>
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <TrendingDown size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Spot Adoption</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[22px]">64% Blended</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Zap size={24} />
          </div>
        </div>

        <div className="plane-1-raised p-4 rounded-xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] hover:-translate-y-0.5 transition-all">
          <div>
            <span className="text-slate-500 dark:text-slate-400 text-[14px] block uppercase">Chargeback Attribution</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[22px]">100% Attributed</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={24} />
          </div>
        </div>
      </div>

      {/* Main Multi-Tenant Cost Allocation Matrix Table */}
      <div className="plane-1-raised rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md p-6 flex flex-col justify-between shadow-xl z-10 my-auto h-[540px]">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[var(--pres-border)]">
            <span className="font-mono text-[14px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Layers size={16} className="text-[var(--pres-accent)]" /> Multi-Tenant Namespace Cost Allocation & Right-Sizing
            </span>
            <div className="flex items-center gap-3 font-mono text-[14px]">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                Right-Sizing: {hasRightSizing ? 'Active' : 'Off'}
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                Spot Fleet: {hasSpotFleet ? 'Integrated' : 'Off'}
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold border border-indigo-500/20">
                Chargeback: {hasDirectChargeback ? 'Enforced' : 'Off'}
              </span>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 py-3 px-4 mt-3 rounded-xl bg-slate-200/60 dark:bg-slate-800/60 font-mono text-[14px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            <div className="col-span-3">Namespace / Org Unit</div>
            <div className="col-span-2 text-right">Monthly Spend</div>
            <div className="col-span-2 text-center">Allocated CPU / RAM</div>
            <div className="col-span-2 text-center">Idle Waste %</div>
            <div className="col-span-1 text-center">Spot %</div>
            <div className="col-span-2 text-right">FinOps Verdict</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2.5 mt-3">
            {costRows.map((row) => {
              const spendRatio = Math.round((row.monthlyCostUsd / totalSpend) * 100);

              return (
                <div
                  key={row.id}
                  className="grid grid-cols-12 gap-4 items-center p-3.5 px-4 rounded-xl border border-slate-200/70 dark:border-slate-800/60 bg-slate-100/50 dark:bg-black/20 hover:-translate-y-0.5 hover:border-[var(--pres-accent)] transition-all font-mono text-[14px]"
                >
                  {/* Col 1: Namespace & Org Unit */}
                  <div className="col-span-3">
                    <div className="font-bold text-slate-900 dark:text-white text-[16px] flex items-center gap-2">
                      <Server size={16} className="text-[var(--pres-accent)]" />
                      {row.namespaceName}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-[14px]">{row.businessUnit}</div>
                  </div>

                  {/* Col 2: Spend & Proportion */}
                  <div className="col-span-2 text-right">
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 text-[18px]">
                      ${(row.monthlyCostUsd / 1000).toFixed(0)}k
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-[14px]">{spendRatio}% of Cluster</div>
                  </div>

                  {/* Col 3: CPU / RAM */}
                  <div className="col-span-2 text-center">
                    <div className="font-bold text-slate-800 dark:text-slate-200">
                      {row.cpuCoresAllocated.toLocaleString()} Cores
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-[14px]">
                      {(row.ramGigabytesAllocated / 1000).toFixed(1)} TB RAM
                    </div>
                  </div>

                  {/* Col 4: Idle Waste */}
                  <div className="col-span-2 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className={`font-bold ${row.idleWastePercentage > 15 ? 'text-amber-600 dark:text-amber-400' : 'text-cyan-600 dark:text-cyan-400'}`}>
                        {row.idleWastePercentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-24 mx-auto bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-1">
                      <div
                        className={`h-full rounded-full ${row.idleWastePercentage > 15 ? 'bg-amber-500' : 'bg-cyan-500'}`}
                        style={{ width: `${Math.min(100, row.idleWastePercentage * 4)}%` }}
                      />
                    </div>
                  </div>

                  {/* Col 5: Spot % */}
                  <div className="col-span-1 text-center font-bold text-indigo-600 dark:text-indigo-400">
                    {row.spotInstancePercentage.toFixed(0)}%
                  </div>

                  {/* Col 6: FinOps Audit & Chargeback */}
                  <div className="col-span-2 text-right flex flex-col items-end gap-1">
                    {row.isFinOpsOptimized ? (
                      <span className="text-[14px] font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 size={12} /> Approved
                      </span>
                    ) : (
                      <span className="text-[14px] font-bold px-2.5 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1">
                        <Activity size={12} /> Optimizing
                      </span>
                    )}
                    <span className="text-slate-500 dark:text-slate-400 text-[14px]">
                      {row.hasChargebackApproved ? '100% Chargeback' : 'Pending'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Matrix Card Footer Summary */}
        <div className="pt-3 border-t border-[var(--pres-border)] flex items-center justify-between font-mono text-[14px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <Zap size={16} className="text-emerald-600 dark:text-emerald-400" />
            Waste Reclamation Rate: $94,000/mo reclaimed via automated vertical pod autoscaling
          </span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">
            Unit Cost: $0.024 / pod-hour
          </span>
        </div>
      </div>

      {/* Plane 1 Footer Status Bar */}
      <div className="plane-1-raised p-4 px-6 rounded-2xl border border-[var(--pres-border)] bg-[var(--pres-bg-card)] backdrop-blur-md flex items-center justify-between font-mono text-[14px] z-10">
        <div className="flex items-center gap-3">
          <span className="text-slate-500 dark:text-slate-400 uppercase text-[14px]">FinOps Verdict:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> FinOps Foundation Certified | Direct Chargeback Reconciliation Verified
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-500 dark:text-slate-400 text-[14px]">
            Lead Architect: {data?.leadArchitect || 'Alim Ul Karim'} ({data?.leadRole || 'Chief Software Engineer'})
          </span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1.5">
            <Cpu size={16} /> Suite 2028 FinOps Engine
          </span>
        </div>
      </div>
    </div>
  );
};
