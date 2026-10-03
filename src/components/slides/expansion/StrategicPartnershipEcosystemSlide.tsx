import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { ArrowUpRight, Award, Cloud, Cpu, Handshake, Network, Share2, ShieldCheck } from 'lucide-react';

interface PartnerRing {
  categoryTitle: string;
  partnerNames: string;
  integrationScope: string;
  arrContribution: string;
  certLevel: string;
}

const DEFAULT_RINGS: PartnerRing[] = [
  { categoryTitle: 'Hyperscaler Alliances', partnerNames: 'AWS, Microsoft Azure, Google Cloud', integrationScope: 'Co-sell incentives, native marketplace billing & private VPC peering', arrContribution: '$38.4M ARR', certLevel: 'Premier Tier-1' },
  { categoryTitle: 'Certified Enterprise ISVs', partnerNames: 'Snowflake, Datadog, HashiCorp, CrowdStrike', integrationScope: 'Out-of-the-box telemetry hooks & bi-directional streaming connectors', arrContribution: '$24.6M ARR', certLevel: '500+ Connectors' },
  { categoryTitle: 'Global Systems Integrators', partnerNames: 'Accenture, Deloitte, Kyndryl, Capgemini', integrationScope: 'Multi-year digital transformation blueprints & sovereign fleet migration', arrContribution: '$14.8M ARR', certLevel: 'Global Elite GSI' },
  { categoryTitle: 'Silicon Hardware OEMs', partnerNames: 'Intel, AMD, NVIDIA, ARM Neoverse', integrationScope: 'Confidential computing root-of-trust, hardware crypto & GPU kernel drivers', arrContribution: '$6.2M ARR', certLevel: 'Hardware Attested' },
];

export const StrategicPartnershipEcosystemSlide: React.FC<{ slide: BaseSlide & { rings?: PartnerRing[]; leadArchitect?: string; } }> = ({ slide }) => {
  const rings = slide.rings || DEFAULT_RINGS;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'STRATEGIC ALLIANCES & ECOSYSTEM'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Planetary Strategic Alliance & ISV Partner Ecosystem'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Mutual growth flywheels across global hyperscalers, certified enterprise ISVs, and global systems integrators.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Handshake size={14} className="text-cyan-400" /> $84M Partner ARR</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Share2 size={14} className="text-emerald-400" /> 500+ Ecosystem Integrations</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {rings.map((r, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                  {r.certLevel}
                </span>
                <span className="font-mono text-xs text-emerald-400 font-bold">{r.arrContribution}</span>
              </div>
              <h2 className="font-ubuntu text-lg font-bold text-white mb-2">{r.categoryTitle}</h2>
              <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-slate-200 font-mono text-xs mb-3 font-semibold">
                {r.partnerNames}
              </div>
              <p className="font-poppins text-xs text-slate-400 leading-relaxed">{r.integrationScope}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-xs text-slate-500">
              <span>Co-Selling Trajectory</span>
              <span className="text-cyan-400 flex items-center gap-1 font-semibold">Expanding <ArrowUpRight size={13} /></span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span>Ecosystem Synergy: Bi-directional API integrations deliver turnkey deployment across all major cloud fabrics</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
