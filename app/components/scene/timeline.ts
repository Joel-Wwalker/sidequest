export const LOOP_SECONDS = 24;
export const STAGE_TIMES = [3.7, 9, 18.1] as const;
export type Motion = 'jitter' | 'sway' | 'panic' | 'heat' | 'breathing' | 'gut' | 'craving' | 'hormone' | 'kidney' | 'interaction' | 'dissociate';
export type Point = [number, number];
const clamp = (x: number) => Math.max(0, Math.min(1, x));
export const smooth = (x: number) => { const t = clamp(x); return t * t * (3 - 2 * t); };
const ramp = (t: number, a: number, b: number) => smooth((t - a) / (b - a));
const envelope = (t: number, a: number, b: number, c: number, d: number) => ramp(t, a, b) * (1 - ramp(t, c, d));
const rampIntegral = (t: number, a: number, b: number) => {
  if (t <= a) return 0;
  if (t >= b) return t - (a + b) / 2;
  const u = (t - a) / (b - a);
  return (b - a) * (u ** 3 - u ** 4 / 2);
};

/** One clock drives every visible channel, including idle movement and labels. */
export function sampleScene(seconds: number, motion: Motion | string) {
  const t = ((seconds % LOOP_SECONDS) + LOOP_SECONDS) % LOOP_SECONDS;
  const intake = envelope(t, 1.4, 3.1, 4.4, 6.1);
  const response = envelope(t, 5.9, 7.2, 11.9, 13.4);
  const adverse = envelope(t, 13.4, 14.9, 20.8, 22.8);
  const wave = Math.sin(t * Math.PI * 2 / 4);
  const tremor = adverse * (motion === 'jitter' || motion === 'craving' ? Math.sin(t * 15) * 1.25 : 0);
  const sway = adverse * (motion === 'sway' ? Math.sin(t * 1.3) * 4 : motion === 'dissociate' ? Math.sin(t * .9) * 2 : 0);
  const gut = adverse * (motion === 'gut' || motion === 'kidney' ? 1 : 0);
  // Integrate the changing rate rather than switching periods mid-breath.
  // The base period makes the phase complete five cycles across the whole loop.
  const slowTime = rampIntegral(t, 13.4, 14.9) - rampIntegral(t, 20.8, 22.8);
  const breathPhase = motion === 'breathing' ? (t - slowTime * .75) * Math.PI * 2 / 3.6525 : t * Math.PI / 2;
  const breath = Math.sin(breathPhase) * (motion === 'breathing' ? 2.5 - adverse * 1.25 : 1 + adverse * .15);
  const blinkAt = t % 6;
  const blink = 1 - .9 * envelope(blinkAt, 4.4, 4.52, 4.64, 4.8);
  return {
    t, intake, response, adverse, oralProp: 1 - envelope(t, 3.3, 3.9, 22.8, 24), stage: t < 5.9 ? 0 : t < 13.4 ? 1 : 2,
    // Reach around the shoulder on an arc; a straight line crosses its joint.
    hand: [(1 - intake) ** 2 * 465 + 2 * (1 - intake) * intake * 500 + intake ** 2 * 409 + tremor,
      (1 - intake) ** 2 * 267 + 2 * (1 - intake) * intake * 170 + intake ** 2 * 211] as Point,
    leftHand: [366 + gut * 32, 279 - gut * 11] as Point,
    sway, tremor, breath, breathPhase, blink, gut,
    tilt: adverse * (motion === 'sway' ? Math.sin(t * 1.3) * 7 : motion === 'breathing' ? 7 : motion === 'dissociate' ? -4 : motion === 'gut' ? 5 : 0),
    eyelid: adverse * (motion === 'breathing' ? .55 : motion === 'sway' ? .3 : 0),
    heat: adverse * (motion === 'heat' || motion === 'panic' ? 1 : 0),
    heart: 1 + Math.sin(t * (motion === 'jitter' || motion === 'heat' ? 10 : 5)) * .09,
    cat: 1 + wave * .013,
    drift: Math.sin(t * Math.PI * 2 / 6) * 2,
    orbit: t * 15,
    ghost: adverse * (motion === 'dissociate' ? .3 : 0),
    worry: adverse * (motion === 'panic' || motion === 'craving' || motion === 'jitter' ? 1 : 0),
  };
}

/** A two-link arm keeps the wrist, elbow and shoulder connected through the reach. */
export function solveArm(shoulder: Point, target: Point, upper = 32, lower = 50, bend = 1) {
  const dx = target[0] - shoulder[0], dy = target[1] - shoulder[1];
  const rawDistance = Math.hypot(dx, dy);
  const distance = Math.max(Math.abs(upper - lower) + .001, Math.min(upper + lower - .001, rawDistance));
  const angle = Math.atan2(dy, dx);
  const bendAngle = Math.acos(Math.max(-1, Math.min(1, (upper * upper + distance * distance - lower * lower) / (2 * upper * distance))));
  const elbow: Point = [shoulder[0] + Math.cos(angle + bend * bendAngle) * upper, shoulder[1] + Math.sin(angle + bend * bendAngle) * upper];
  const hand: Point = [shoulder[0] + Math.cos(angle) * distance, shoulder[1] + Math.sin(angle) * distance];
  return { elbow, hand };
}
