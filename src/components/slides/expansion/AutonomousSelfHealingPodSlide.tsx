import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { AlertTriangle, CheckCircle2, HeartPulse, RefreshCw, Shield, Zap } from 'lucide-react';

interface HealingStep {
  step: string;
  action: string;
  duration: string;
  mechanism: string;
  status: string;
}

const DEFAULT_STEPS: HealingStep[] = [
  { step: '01. Anomaly Probing', action: 'eBPF Kernel Probes', duration: '200ms', mechanism: 'Memory leak & error rate spike detected', status: 'Triggered' },
  { step: '02. Dynamic Quarantine', action: 'Circuit Breaker Open', duration: '400ms', mechanism: 'Pod isolated from service discovery mesh', status: 'Isolated' },
  { step: '03. Traffic Failover', action: 'Anycast Rerouting', duration: '600ms', mechanism: 'In-flight RPCs redirected to healthy replica', status: 'Zero Dropped' },
  { step: '04. Pod Rehydration', action: 'Micro-VM Spinup', duration: '4.2s', mechanism: 'Clean container rehydrated & verified healthy', status: 'Remediated' },
];

export const AutonomousSelfHealingPodSlide: React.FC<{ slide: BaseSlide & { steps?: HealingStep[]; leadArchitect?: string; } }> = ({ slide }) => {
  const steps = slide.steps || DEFAULT_STEPS;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'SITE RELIABILITY & AUTOMATION'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Autonomous Self-Healing Infrastructure & Pod Health Remediation'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Automated eBPF health probes, dynamic circuit breaker isolation, and sub-10 second automated pod rehydration.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><HeartPulse size={14} className="text-rose-400" /> MTTR &lt; 5.4s</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Shield size={14} className="text-emerald-400" /> 100% Autonomous</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {steps.map((st, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800 font-bold">{st.step}</span>
                <span className="text-emerald-400 font-bold">{st.duration}</span>
              </div>
              <h2 className="font-ubuntu text-lg font-bold text-white mb-2">{st.action}</h2>
              <p className="font-poppins text-xs text-slate-400 leading-relaxed mb-4">{st.mechanism}</p>
            </div>
            <div className="pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-500">Status</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 font-semibold">{st.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Self-Healing SLA: 99.999% of transient infrastructure anomalies resolved without paging on-call engineering</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
