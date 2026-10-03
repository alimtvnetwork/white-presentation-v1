import React, { useState } from 'react';
import type { ModelContextProtocolMeshSlideData } from '../../../types/nextGenArchetypes';
import { createModelContextProtocolMeshSlide } from '../../../utils/nextGenSlideFactories';
import { useDeckStore } from '../../../stores/deckStore';
import { useEditStore } from '../../../stores/editStore';
import { McpToolSandboxCard } from './McpToolSandboxCard';
import { McpHostCard } from './McpHostCard';
import { Network, CheckCircle2, ShieldCheck } from 'lucide-react';

const PHASES = [
  { index: 0, title: 'Client Host Mesh', desc: 'Protocol discovery & channels' },
  { index: 1, title: 'MCP Server Registry', desc: 'STDIO, SSE & WebSocket microservices' },
  { index: 2, title: 'Active Invocation', desc: 'JSON-RPC 2.0 schema validation' },
  { index: 3, title: 'Security Sandbox', desc: 'Containment & permission guard' },
];

export const ModelContextProtocolMeshSlide: React.FC<{ slide?: ModelContextProtocolMeshSlideData; data?: ModelContextProtocolMeshSlideData }> = ({ slide, data: pData }) => {
  const fallback = createModelContextProtocolMeshSlide('default-mcp-mesh');
  const data = slide || pData || fallback;
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const deckActiveStep = useDeckStore((s) => s.activeStep);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const servers = data.mcpServers?.length ? data.mcpServers : fallback.mcpServers;
  const invocation = data.activeInvocation || fallback.activeInvocation;
  const clientHost = data.clientHost || fallback.clientHost;
  const metrics = data.meshMetrics || fallback.meshMetrics;
  const rawStep = hoveredStep ?? (data.activeStep ?? deckActiveStep ?? 0);
  const currentStep = Math.min(Math.max(0, rawStep), PHASES.length - 1);

  return (
    <div style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }} className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[60px_90px] flex flex-col justify-between">
      <div className="z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="kicker-pill-badge text-sm font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              <Network size={15} className="text-violet-500" />
              {data.kicker || 'ANTHROPIC MCP PROTOCOL STANDARD'}
            </span>
            <span className="font-mono text-sm px-3 py-1 rounded-full bg-emerald-500/10 text-slate-900 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" /> MCP Spec 2024-11-05 Certified | JSON-RPC 2.0
            </span>
          </div>
          <h1 style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }} className="text-4xl lg:text-5xl font-ubuntu font-bold leading-tight tracking-tight mb-2" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}>
            {data.title || 'Model Context Protocol (MCP) Server Mesh & Tool Fabric'}
          </h1>
          <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-5xl leading-relaxed" contentEditable={isEditMode} suppressContentEditableWarning onBlur={(e) => applyEdit((s) => ({ ...s, subtitle: e.currentTarget.textContent || '' }))}>
            {data.subtitle || 'Standardized contextual bridge enabling autonomous LLM agents to safely query heterogeneous data sources and invoke isolated tools.'}
          </p>
        </div>
        <div className="plane-1-raised p-3 px-5 rounded-2xl border border-slate-700/60 flex items-center gap-6 font-mono text-xs">
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] block uppercase">Connected</span><span className="text-xl font-bold text-slate-900 dark:text-emerald-400">{metrics.totalServersConnected} Nodes</span></div>
          <div className="w-[1px] h-8 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] block uppercase">Tools</span><span className="text-xl font-bold text-slate-900 dark:text-sky-400">{metrics.totalToolsExposed} Schemas</span></div>
          <div className="w-[1px] h-8 bg-slate-700/50" />
          <div><span style={{ color: 'var(--pres-text-muted)' }} className="text-[11px] block uppercase">Roundtrip</span><span className="text-xl font-bold text-slate-900 dark:text-violet-400">{metrics.averageRoundtripMs} ms</span></div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 z-10 my-2">
        {PHASES.map((p) => {
          const isActive = p.index === currentStep;
          return (
            <button key={p.index} onClick={() => setHoveredStep(p.index)} onMouseEnter={() => setHoveredStep(p.index)} onMouseLeave={() => setHoveredStep(null)} className={`text-left p-2.5 px-4 rounded-xl border transition-all duration-300 font-mono text-xs flex items-center justify-between ${isActive ? 'bg-violet-600/20 border-violet-500 shadow-md text-slate-900 dark:text-white' : p.index < currentStep ? 'bg-white/5 border-slate-700 text-slate-400' : 'bg-black/10 border-slate-800 text-slate-500'}`}>
              <div className="flex items-center gap-2"><span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${isActive ? 'bg-violet-500 text-white' : 'bg-slate-700 text-slate-300'}`}>{p.index + 1}</span><span className="font-bold">{p.title}</span></div>
              <span className="text-[10px] opacity-70 truncate max-w-[120px]">{p.desc}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-12 gap-6 z-10 my-auto h-[550px] items-stretch">
        <McpToolSandboxCard servers={servers} />
        <McpHostCard clientHost={clientHost} invocation={invocation} currentStep={currentStep} />
      </div>

      <div className="plane-1-raised p-3.5 px-6 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 text-slate-900 dark:text-emerald-400 font-bold"><ShieldCheck size={15} className="text-emerald-500" /> Model Context Protocol Mesh Operational</span>
          <span className="text-slate-500">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>RPC: <strong className="text-slate-800 dark:text-slate-200">JSON-RPC 2.0 Over STDIO/SSE</strong></span>
          <span className="text-slate-500">|</span>
          <span style={{ color: 'var(--pres-text-muted)' }}>Isolation: <span className="text-slate-800 dark:text-slate-200">Hardware Kernel Enclave Active</span></span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span>Active Phase: {PHASES[currentStep].title}</span>
          <span>Step {currentStep + 1} of {PHASES.length}</span>
        </div>
      </div>
    </div>
  );
};
