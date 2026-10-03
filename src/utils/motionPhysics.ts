/**
 * Kinetic Motion Physics & Dynamic Text Shadow Constants
 * Synthesized from global-ppt-v1 and flat-slide-show.
 */

import { isBooleanTrue, isFalse } from './booleanGuards';

export const STEP_DETAIL_PANE_SPRING = { type: 'spring', stiffness: 420, damping: 17, mass: 0.8 } as const;
export const HARMONIC_SPRING = STEP_DETAIL_PANE_SPRING;
export const PROGRESS_RAIL_SPRING = { type: 'spring', stiffness: 220, damping: 32, mass: 1.0 } as const;
export const HALO_SPRING = { type: 'spring', stiffness: 320, damping: 30, mass: 0.9 } as const;

export const PRESENTATION_EASE = [0.22, 1, 0.36, 1] as const;
export const QUINTIC_EASE = PRESENTATION_EASE;
export const EXPO_OUT = [0.22, 1, 0.36, 1] as const;
export const OVERSHOOT = [0.34, 1.56, 0.64, 1] as const;
export const ARC_EASE = [0.4, 0, 0.2, 1] as const;

export function getHeaderShadow(isDark: boolean): string {
  const isDarkMode = isBooleanTrue(isDark);
  if (isDarkMode) {
    return 'rgb(0 0 0) 1px 0.7px 0px';
  }
  return 'rgb(255 255 255) 1px 0.7px 0px';
}

export function getStaggerDelay(index: number): number {
  return (index + 1) * 0.08;
}

export function calculateProgressPercent(current: number, total: number): number {
  if (total <= 1) return 100;
  return Math.min(100, Math.max(0, (current / (total - 1)) * 100));
}

export function computeMagneticOffset(
  cursorX: number,
  cursorY: number,
  elementRect: DOMRect,
  pullRadius = 35
): { offsetX: number; offsetY: number } {
  const centerX = elementRect.left + elementRect.width / 2;
  const centerY = elementRect.top + elementRect.height / 2;
  const deltaX = cursorX - centerX;
  const deltaY = cursorY - centerY;
  const distance = Math.hypot(deltaX, deltaY);

  if (distance >= pullRadius || distance === 0) {
    return { offsetX: 0, offsetY: 0 };
  }

  const factor = Math.pow(1 - distance / pullRadius, 2);
  const maxOffset = 12;
  const offsetX = (deltaX / pullRadius) * maxOffset * factor;
  const offsetY = (deltaY / pullRadius) * maxOffset * factor;

  return {
    offsetX: Math.round(offsetX * 100) / 100,
    offsetY: Math.round(offsetY * 100) / 100,
  };
}

export interface PhysicsPreset {
  name: string;
  centerPull: number;      // kc
  repulsion: number;       // ke
  damping: number;         // gamma
  restitution: number;     // e
  magnetForce: number;     // Fmag
  maxVelocity: number;     // vmax
  collisionBuffer: number; // deltaR
}

export const PHYSICS_PRESETS: Record<'servicesDefault' | 'calm' | 'dense' | 'lively', PhysicsPreset> = {
  servicesDefault: {
    name: 'servicesDefault', centerPull: 0.0028, repulsion: 3200, damping: 0.045,
    restitution: 0.55, magnetForce: 0.18, maxVelocity: 4.5, collisionBuffer: 6,
  },
  calm: {
    name: 'calm', centerPull: 0.0015, repulsion: 2100, damping: 0.080,
    restitution: 0.30, magnetForce: 0.08, maxVelocity: 2.2, collisionBuffer: 4,
  },
  dense: {
    name: 'dense', centerPull: 0.0045, repulsion: 4800, damping: 0.035,
    restitution: 0.70, magnetForce: 0.22, maxVelocity: 5.0, collisionBuffer: 8,
  },
  lively: {
    name: 'lively', centerPull: 0.0035, repulsion: 4200, damping: 0.022,
    restitution: 0.85, magnetForce: 0.35, maxVelocity: 8.0, collisionBuffer: 10,
  },
};

export interface PhysicsParticle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  mass?: number;
  isFixed?: boolean;
}

export interface PhysicsSystem {
  particles: PhysicsParticle[];
  preset: PhysicsPreset;
  center: { x: number; y: number };
  cursor?: { x: number; y: number } | null;
}

export function createPhysicsSystem(
  presetName: keyof typeof PHYSICS_PRESETS = 'servicesDefault',
  center = { x: 960, y: 540 }
): PhysicsSystem {
  const preset = PHYSICS_PRESETS[presetName] || PHYSICS_PRESETS.servicesDefault;
  return { particles: [], preset, center, cursor: null };
}

export function stepPhysics(system: PhysicsSystem, dt = 1): PhysicsParticle[] {
  const { particles, preset, center, cursor } = system;
  const count = particles.length;

  for (let i = 0; i < count; i++) {
    const p1 = particles[i];
    const isFixed = isBooleanTrue(p1.isFixed);
    if (isFixed) continue;

    // 1. Center Attractor Force (Centripetal Pull)
    p1.vx -= preset.centerPull * (p1.x - center.x) * dt;
    p1.vy -= preset.centerPull * (p1.y - center.y) * dt;

    // 2. Cursor Proximity Magnet
    const hasCursor = Boolean(cursor);
    if (hasCursor) {
      const dCurX = cursor!.x - p1.x;
      const dCurY = cursor!.y - p1.y;
      const distCur = Math.hypot(dCurX, dCurY);
      const pullRadius = 150;
      const isWithinPull = distCur > 0 && distCur < pullRadius;
      if (isWithinPull) {
        const factor = Math.pow(1 - distCur / pullRadius, 2);
        p1.vx += (dCurX / distCur) * preset.magnetForce * factor * dt;
        p1.vy += (dCurY / distCur) * preset.magnetForce * factor * dt;
      }
    }

    // 3. Pairwise Coulomb Repulsion & Collision Projection
    for (let j = i + 1; j < count; j++) {
      const p2 = particles[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distSq = dx * dx + dy * dy + 100;
      const dist = Math.sqrt(distSq);

      if (dist > 0) {
        const repForce = (preset.repulsion / distSq) * dt;
        const normX = dx / dist;
        const normY = dy / dist;

        p1.vx += normX * repForce;
        p1.vy += normY * repForce;
        const isP2Fixed = isBooleanTrue(p2.isFixed);
        if (isFalse(isP2Fixed)) {
          p2.vx -= normX * repForce;
          p2.vy -= normY * repForce;
        }

        const minDist = p1.radius + p2.radius + preset.collisionBuffer;
        const isColliding = dist < minDist;
        if (isColliding) {
          const overlap = minDist - dist;
          const shiftX = normX * overlap * 0.5;
          const shiftY = normY * overlap * 0.5;

          p1.x += shiftX;
          p1.y += shiftY;
          if (isFalse(isP2Fixed)) {
            p2.x -= shiftX;
            p2.y -= shiftY;
          }

          const dvx = p1.vx - p2.vx;
          const dvy = p1.vy - p2.vy;
          const impulse = (1 + preset.restitution) * (dvx * normX + dvy * normY) * 0.5;
          p1.vx -= impulse * normX;
          p1.vy -= impulse * normY;
          if (isFalse(isP2Fixed)) {
            p2.vx += impulse * normX;
            p2.vy += impulse * normY;
          }
        }
      }
    }

    // 4. Fluid Viscous Drag
    p1.vx *= 1 - preset.damping;
    p1.vy *= 1 - preset.damping;

    // 5. Velocity Clamping
    const speed = Math.hypot(p1.vx, p1.vy);
    const exceedsSpeed = speed > preset.maxVelocity;
    if (exceedsSpeed) {
      p1.vx = (p1.vx / speed) * preset.maxVelocity;
      p1.vy = (p1.vy / speed) * preset.maxVelocity;
    }

    p1.x += p1.vx * dt;
    p1.y += p1.vy * dt;
  }

  return particles;
}

export function packChildren(
  items: Array<{ id: string; radius?: number }>,
  containerWidth: number,
  containerHeight: number
): Array<{ id: string; x: number; y: number; radius: number }> {
  const total = items.length;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  const orbitRadius = Math.min(containerWidth, containerHeight) * 0.32;

  return items.map((item, index) => {
    const radius = item.radius || 36;
    const angle = total > 0 ? (2 * Math.PI * index) / total - Math.PI / 2 : 0;
    const x = centerX + Math.cos(angle) * orbitRadius;
    const y = centerY + Math.sin(angle) * orbitRadius;
    return { id: item.id, x, y, radius };
  });
}

export function relaxCrossPillar(
  pillars: Array<{ id: string; x: number; width: number; minGap?: number }>,
  totalWidth: number
): Array<{ id: string; x: number; width: number }> {
  const total = pillars.length;
  if (total <= 1) return pillars;

  const defaultGap = 24;
  const result = pillars.map((p) => ({ ...p }));

  for (let pass = 0; pass < 3; pass++) {
    for (let i = 0; i < total - 1; i++) {
      const curr = result[i];
      const next = result[i + 1];
      const minGap = curr.minGap || defaultGap;
      const currentGap = next.x - (curr.x + curr.width);
      const isTooClose = currentGap < minGap;
      if (isTooClose) {
        const delta = (minGap - currentGap) / 2;
        curr.x = Math.max(0, curr.x - delta);
        next.x = Math.min(totalWidth - next.width, next.x + delta);
      }
    }
  }

  return result;
}
