import React from 'react';
import type { OrbitingServiceBubble } from '../../../types/extendedArchetypes';
import { isBooleanTrue } from '../../../utils/booleanGuards';
import { ShieldAlert, Zap } from 'lucide-react';

interface ServiceBubbleProps {
  service: OrbitingServiceBubble;
  index: number;
  total: number;
  isActive: boolean;
  isPast: boolean;
  isFuture: boolean;
}

export const ServiceBubble: React.FC<ServiceBubbleProps> = ({
  service,
  index,
  total,
  isActive,
  isPast,
  isFuture,
}) => {
  const isCritical = isBooleanTrue(service.isMissionCritical);
  const angle = (index / Math.max(1, total)) * 2 * Math.PI - Math.PI / 2;
  const radius = service.orbitRadiusPx || (160 + (index % 3) * 60);
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * (radius * 0.75); // slight elliptical perspective

  return (
    <div
      style={{
        transform: `translate(${x}px, ${y}px) ${isActive ? 'scale(1.08)' : 'scale(1)'}`,
        backgroundColor: isActive ? 'var(--pres-card-bg, rgba(30, 27, 75, 0.85))' : 'var(--pres-card-bg, rgba(15, 23, 42, 0.75))',
        borderColor: isActive ? 'var(--pres-accent)' : 'var(--pres-card-border, rgba(255, 255, 255, 0.15))',
        opacity: isFuture ? 0.4 : isPast ? 0.75 : 1,
        filter: isFuture ? 'blur(1.25px)' : 'none',
        boxShadow: isActive ? '0 0 28px -2px var(--pres-accent)' : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      }}
      className="absolute top-1/2 left-1/2 -ml-28 -mt-16 w-56 p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 flex flex-col justify-between z-10 select-none cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-mono text-[10px] uppercase font-bold text-violet-400 tracking-wider">
            {service.category}
          </span>
          {isCritical && (
            <span className="flex items-center gap-1 text-[9px] font-mono text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
              <ShieldAlert size={10} /> Critical
            </span>
          )}
        </div>
        <h4 className="font-ubuntu text-base font-bold text-slate-100 truncate">
          {service.name}
        </h4>
      </div>

      <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/5 font-mono text-[11px]">
        <span className="text-emerald-400 font-bold">{service.slaAvailability}</span>
        <span className="flex items-center gap-1 text-cyan-300">
          <Zap size={11} /> {service.throughputKps}k/s
        </span>
      </div>
    </div>
  );
};
