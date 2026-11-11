import type { Point } from './timeline';

/**
 * A continuous, outboard elbow pole for the illustrated three-quarter view.
 * Project a two-link arm's elbow circle onto the screen, using a downward
 * pole. The bend turns toward the viewer during a cross-body reach instead
 * of switching inverse-kinematic branches. The authored wrist/prop stays
 * fixed; the upper arm foreshortens while the forearm remains legible.
 */
export function solveCharacterArm(side: 'left' | 'right', target: Point) {
  const direction = side === 'right' ? 1 : -1;
  const shoulder: Point = [side === 'right' ? 422 : 378, 228];
  const dx = direction * (target[0] - shoulder[0]), dy = target[1] - shoulder[1];
  const distance = Math.max(.001, Math.hypot(dx, dy));
  const lower = 48, upper = 32;
  const along = (upper * upper - lower * lower + distance * distance) / (2 * distance);
  const bend = Math.sqrt(Math.max(0, upper * upper - along * along));
  const pole = dx / distance;
  const projectedX = shoulder[0] + direction * (dx / distance * along - dy / distance * bend * pole);
  const projectedY = shoulder[1] + dy / distance * along + dx / distance * bend * pole;
  // Keep the thick upper sleeve below the jaw even when the head tilts.
  // This screen-space guard is continuous and does not move the wrist.
  const elbow: Point = [projectedX, Math.max(232, projectedY)];
  return { shoulder, elbow, hand: target };
}
