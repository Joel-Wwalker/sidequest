import type { Point } from './timeline';

export const UPPER_ARM = 38;
export const FOREARM = 42;
export const ARM_REST = { left: [360, 305] as Point, right: [440, 305] as Point };

/** Fixed-length links with one mirrored elbow branch throughout the loop.
 * Wrist paths are authored for this rig. No shortening or elbow clamps hide
 * incompatible poses. Hands and props share the same solved grip point.
 */
export function solveCharacterArm(side: 'left' | 'right', target: Point) {
  const direction = side === 'right' ? 1 : -1;
  const shoulder: Point = [side === 'right' ? 432 : 368, 230];
  const dx = direction * (target[0] - shoulder[0]), dy = target[1] - shoulder[1];
  const distance = Math.hypot(dx, dy);
  const along = (UPPER_ARM ** 2 - FOREARM ** 2 + distance ** 2) / (2 * distance);
  const bend = Math.sqrt(Math.max(0, UPPER_ARM ** 2 - along ** 2));
  const elbow: Point = [shoulder[0] + direction * (dx * along + dy * bend) / distance,
    shoulder[1] + (dy * along - dx * bend) / distance];
  return { shoulder, elbow, hand: target };
}
