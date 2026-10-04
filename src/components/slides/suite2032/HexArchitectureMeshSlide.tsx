// lint-allow: file-size reason="HexArchitectureMeshSlide 3-column hexagonal architecture mesh" max=120
import React from 'react';
import type { HexArchitectureMeshSlideData } from '../../../types/suite2032Archetypes';
import { Network, Server, Database, ShieldCheck, Sparkles } from 'lucide-react';

const TIERS = [
  { id: 't1', name: 'Tier 1: Ingress Gateways', sub: 'Inbound Controller Boundary', desc: 'Translates external protocols into immutable domain commands with edge token validation.', stack: 'gRPC / HTTP/3', lat: '1.2ms p99', rps: '38,000 RPS', icon: Network, isCore: false },
  { id: 't2', name: 'Tier 2: Pure Domain Core', sub: 'Deterministic Invariants', desc: 'Zero-dependency business models executing synchronous invariants, state transitions, and events.', stack: 'Pure POJO Memory', lat: 'Sub-1ms p99', rps: '45,000 RPS', icon: Server, isCore: true },
  { id: 't3', name: 'Tier 3: Persistence & Mesh', sub: 'Outbound Adapter Fabric', desc: 'Split SQLite write-ahead logging, multi-tier caches, and Kafka asynchronous event streaming mesh.', stack: 'Split SQLite / Kafka', lat: '2.4ms p99', rps: '52,000 RPS', icon: Database, isCore: false },
];

export const HexArchitectureMeshSlide: React.FC<{
  slide: HexArchitectureMeshSlideData;
  activeStep?: number;
}> = ({ slide }) => {
  const cells = slide.meshCells || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg, #0b0f19)', color: 'var(--pres-text, #f8fafc)' }}
      className="relative w-[1920px] h-[1080px] p-[56px_72px] flex flex-col justify-between select-none overflow-hidden font-sans"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-base font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[var(--pres-accent,#6366f1)]/10 text-[var(--pres-accent,#818cf8)] border border-[var(--pres-accent,#6366f1)]/30 flex items-center gap-2">
              <Sparkles size={16} />
              {slide.kicker || 'HEXAGONAL DESIGN & INTEGRATION'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded bg-white/5 border border-white/10 text-slate-300">{slide.systemIdentifier}</span>
          </div>
          <h1 className="text-4xl font-bold font-display tracking-tight text-white mb-2">{slide.title}</h1>
          <p className="text-base text-slate-400 max-w-[1200px] leading-relaxed">{slide.subtitle}</p>
        </div>
        <div className="p-4 px-6 rounded-2xl bg-white/[0.04] border border-white/10 text-right shrink-0">
          <div className="text-sm font-semibold text-slate-400">Boundary Scope</div>
          <div className="text-base font-bold text-[var(--pres-accent,#818cf8)]">{slide.domainBoundary}</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 my-auto items-stretch">
        {TIERS.map((tier) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.id}
              className={`p-6 rounded-2xl flex flex-col justify-between backdrop-blur-md relative border ${
                tier.isCore
                  ? 'bg-[var(--pres-accent,#6366f1)]/10 border-2 border-[var(--pres-accent,#6366f1)]/40 shadow-2xl'
                  : 'bg-white/[0.03] border-white/10'
              }`}
            >
              {tier.isCore && (
                <div className="absolute top-4 right-4 font-mono text-sm px-2.5 py-1 rounded bg-[var(--pres-accent,#6366f1)]/20 text-[var(--pres-accent,#818cf8)] font-bold">CORE DOMAIN</div>
              )}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${tier.isCore ? 'bg-[var(--pres-accent,#6366f1)]/20 text-[var(--pres-accent,#818cf8)]' : 'bg-white/5 text-slate-300'}`}><Icon size={24} /></div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <span className="font-mono text-sm text-[var(--pres-accent,#818cf8)]">{tier.sub}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{tier.desc}</p>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-200">Protocol Stack</span>
                    <span className="font-mono text-sm font-bold text-white px-2.5 py-1 rounded bg-white/5">{tier.stack}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-200">Latency Telemetry</span>
                    <span className="font-mono text-sm font-bold text-emerald-400">{tier.lat}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 font-mono text-sm text-slate-400 flex items-center justify-between">
                <span>Throughput: <strong className="text-white">{tier.rps}</strong></span>
                <span className="text-emerald-400 flex items-center gap-1"><ShieldCheck size={16} /> Attested</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between text-sm text-slate-400 border-t border-white/10 pt-4">
        <span>Active Cells: {cells.map((c) => c.nodeName).join(' · ')}</span>
        <span className="font-mono text-sm">ARCHETYPE: HEX-ARCHITECTURE-MESH (FLAT OVERVIEW)</span>
      </div>
    </div>
  );
};
