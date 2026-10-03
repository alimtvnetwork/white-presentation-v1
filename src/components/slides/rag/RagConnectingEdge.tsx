import React from 'react';

interface RagConnectingEdgeProps {
  isActiveEdge: boolean;
}

export const RagConnectingEdge: React.FC<RagConnectingEdgeProps> = ({ isActiveEdge }) => (
  <div className="flex items-center justify-center w-8 shrink-0 select-none">
    <svg width="32" height="24" viewBox="0 0 32 24" className="overflow-visible">
      <defs>
        <marker
          id="rag-arrow"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 8 5 L 0 9 z" fill={isActiveEdge ? '#A855F7' : '#475569'} />
        </marker>
      </defs>
      <line
        x1="2"
        y1="12"
        x2="24"
        y2="12"
        stroke={isActiveEdge ? '#A855F7' : '#334155'}
        strokeWidth="2"
        strokeDasharray={isActiveEdge ? '4 3' : undefined}
        markerEnd="url(#rag-arrow)"
        className={isActiveEdge ? 'animate-pulse' : undefined}
      />
    </svg>
  </div>
);
