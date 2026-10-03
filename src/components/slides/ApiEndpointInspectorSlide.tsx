import React from 'react';
import type { ApiEndpointInspectorSlideData } from '../../types/kineticSuiteArchetypes';
import { useDeckStore } from '../../stores/deckStore';
import { useEditStore } from '../../stores/editStore';
import { EndpointHeaderBar } from './inspector/EndpointHeaderBar';
import { getStepPhase, getStepPhaseStyle } from '../../utils/stepProgression';
import { Braces, Code, Terminal, CheckCircle2 } from 'lucide-react';

export const ApiEndpointInspectorSlide: React.FC<{ slide: ApiEndpointInspectorSlideData }> = ({ slide }) => {
  const { applyEdit } = useDeckStore();
  const { isEditMode } = useEditStore();
  const activeStep = useDeckStore((s) => s.activeStep);
  const parameters = slide.parameters || [];

  return (
    <div
      style={{ backgroundColor: 'var(--pres-bg)', color: 'var(--pres-text)' }}
      className="plane-0-surface relative w-[1920px] h-[1080px] overflow-hidden select-none p-[70px_100px] flex flex-col justify-between"
    >
      <div className="z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center gap-1.5">
            <Braces size={12} /> {slide.kicker || 'API SPECIFICATION STUDIO'}
          </span>
          <span className="font-mono text-xs text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
            Step {activeStep + 1} of {Math.max(parameters.length, 1)}
          </span>
        </div>
        <h1
          style={{ color: 'var(--pres-text)', textShadow: 'var(--pres-header-shadow)' }}
          className="font-ubuntu text-[40px] font-black tracking-tight leading-none mb-2"
          contentEditable={isEditMode}
          suppressContentEditableWarning
          onBlur={(e) => applyEdit((s) => ({ ...s, title: e.currentTarget.textContent || '' }))}
        >{slide.title || 'Interactive API Endpoint & Payload Studio'}</h1>
        <p style={{ color: 'var(--pres-text-muted)' }} className="font-poppins text-base max-w-4xl leading-relaxed">{slide.subtitle || 'High-throughput mTLS authentication exchange with fine-grained Casbin policy claims.'}</p>
      </div>

      <div className="z-10 flex flex-col gap-4 my-auto">
        <EndpointHeaderBar
          httpMethod={slide.httpMethod || 'POST'} endpointPath={slide.endpointPath || '/api/v1/resource'}
          authStrategy={slide.authStrategy || 'mTLS + Bearer JWT'} rateLimitPerMinute={slide.rateLimitPerMinute || 10000}
          responseStatusCode={slide.responseStatusCode || 200} hasSchemaValidation={slide.hasSchemaValidation ?? true}
        />

        <div className="grid grid-cols-12 gap-6 items-stretch h-[480px]">
          <div className="col-span-6 plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 font-mono text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-2"><Code size={14} className="text-purple-400" /> Parameter Matrix</span>
              <span className="text-slate-400">{parameters.length} Fields Defined</span>
            </div>
            <div className="space-y-2 overflow-y-auto flex-1 pr-1 font-mono text-xs">
              {parameters.map((param, idx) => {
                const phase = getStepPhase(idx, activeStep);
                const stepStyle = getStepPhaseStyle(phase, 'var(--pres-accent, #a855f7)');
                const isSelected = phase === 'active';
                return (
                  <div
                    key={param.id || idx}
                    style={stepStyle}
                    className={`p-3 rounded-xl border flex items-center justify-between transition-all ${isSelected ? 'bg-purple-500/15 border-purple-500/60 shadow-lg' : 'bg-slate-950/60 border-slate-800'}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold text-slate-100">{param.name}</span>
                      <span className="text-[10px] text-purple-300 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">{param.type}</span>
                      <span className="text-[10px] text-slate-400">in {param.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-400">{param.description}</span>
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${param.isRequired ? 'text-amber-900 bg-amber-100 border-amber-300 dark:text-amber-300 dark:bg-amber-500/15' : 'bg-slate-800 text-slate-400'}`}>
                        {param.isRequired ? 'REQ' : 'OPT'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-6 plane-1-raised p-5 rounded-2xl border border-slate-800 bg-slate-950/90 flex flex-col font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="font-bold text-slate-300 flex items-center gap-2"><Terminal size={14} className="text-emerald-400" /> Response Studio</span>
              <span className="text-emerald-400 text-[10px] flex items-center gap-1"><CheckCircle2 size={10} /> 200 OK</span>
            </div>
            <pre className="flex-1 overflow-x-auto text-[11px] text-emerald-300/90 leading-relaxed font-mono whitespace-pre-wrap">{slide.responsePayload || '{\n  "status": "success"\n}'}</pre>
          </div>
        </div>
      </div>

      <div className="plane-1-raised p-3 rounded-2xl flex items-center justify-between z-10 border border-slate-800 font-mono text-xs">
        <span className="flex items-center gap-2 text-purple-400 font-bold"><CheckCircle2 size={14} /> OpenAPI 3.1 Validated | Casbin RBAC Active</span>
        <span style={{ color: 'var(--pres-text-muted)' }}>Step: {activeStep}</span>
      </div>
    </div>
  );
};
