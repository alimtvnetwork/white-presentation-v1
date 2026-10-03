import React from 'react';
import type { BaseSlide } from '../../../types/presentation';
import { Compass, Globe2, Network, Radio, Route, Server } from 'lucide-react';

interface AnycastHub {
  hubCode: string;
  metro: string;
  transitPeers: string;
  ingressCapacity: string;
  bgpLatency: string;
  isPrimaryTransit?: boolean;
}

const DEFAULT_HUBS: AnycastHub[] = [
  { hubCode: 'IAD-01', metro: 'Washington DC / Ashburn', transitPeers: 'Arelion, Lumen, NTT', ingressCapacity: '4.8 Tbps', bgpLatency: '0.8ms', isPrimaryTransit: true },
  { hubCode: 'FRA-02', metro: 'Frankfurt am Main', transitPeers: 'DE-CIX, Telia, Orange', ingressCapacity: '3.6 Tbps', bgpLatency: '1.2ms', isPrimaryTransit: true },
  { hubCode: 'SIN-03', metro: 'Singapore Equinix', transitPeers: 'Singtel, NTT, Telstra', ingressCapacity: '2.4 Tbps', bgpLatency: '1.8ms', isPrimaryTransit: true },
  { hubCode: 'NRT-04', metro: 'Tokyo Otemachi', transitPeers: 'JPIX, BBIX, KDDI', ingressCapacity: '2.8 Tbps', bgpLatency: '1.4ms', isPrimaryTransit: true },
];

export const GlobalAnycastRoutingTopologySlide: React.FC<{ slide: BaseSlide & { hubs?: AnycastHub[]; leadArchitect?: string; } }> = ({ slide }) => {
  const hubs = slide.hubs || DEFAULT_HUBS;
  const lead = slide.leadArchitect || 'Alim Ul Karim, Chief Software Engineer';

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[50px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-end justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="kicker-pill-badge mb-2">{slide.kicker || 'EDGE NETWORKING & TRANSIT'}</span>
          <h1 className="font-ubuntu text-4xl font-black text-white tracking-tight">{slide.title || 'Planetary BGP Anycast Routing & Peering Topology'}</h1>
          <p className="font-poppins text-base text-slate-300 mt-1 max-w-[1200px]">{slide.subtitle || 'Global BGP anycast VIP routing, multi-homed Tier-1 peering transit, and sub-800ms path failover convergence.'}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Globe2 size={14} className="text-cyan-400" /> BGP ASN 64512</span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60"><Route size={14} className="text-emerald-400" /> 13.6 Tbps Total Mesh</span>
        </div>
      </div>

      <div className="z-10 grid grid-cols-4 gap-5 my-auto">
        {hubs.map((hub, idx) => (
          <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-950/70 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-3 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-bold">{hub.hubCode}</span>
                <span className="text-emerald-400 font-bold">{hub.bgpLatency}</span>
              </div>
              <h2 className="font-ubuntu text-lg font-bold text-white mb-1">{hub.metro}</h2>
              <p className="font-poppins text-xs text-slate-400 mb-4">{hub.transitPeers}</p>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/60 font-mono text-xs">
                <span className="text-slate-400 block text-[10px] uppercase">Ingress Capacity</span>
                <span className="text-white font-bold text-base">{hub.ingressCapacity}</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between font-mono text-xs text-slate-500">
              <span>BGP Anycast VIP</span>
              <span className="text-cyan-400 font-semibold">Active Ingress</span>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-slate-800/80 pt-3">
        <span className="flex items-center gap-2"><Network size={14} className="text-cyan-400" /> Transit Convergence Invariant: Sub-second rerouting across all 4 continental gateway clusters</span>
        <span className="text-cyan-400 font-semibold">{lead}</span>
      </div>
    </div>
  );
};
