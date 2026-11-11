import test from 'node:test';
import assert from 'node:assert/strict';
import { sampleScene, solveArm, LOOP_SECONDS, STAGE_TIMES } from '../app/components/scene/timeline.ts';

test('the loop closes with the same pose and no visible effect layers', () => {
  const start = sampleScene(0, 'jitter');
  const end = sampleScene(LOOP_SECONDS, 'jitter');
  assert.deepEqual(start, end);
  assert.equal(start.response, 0);
  assert.equal(start.adverse, 0);
});

test('a moving hand remains joined to both fixed-length arm segments', () => {
  for (let time = 0; time <= LOOP_SECONDS; time += 1 / 120) {
    const pose = sampleScene(time, 'jitter');
    const arm = solveArm([422, 225], pose.hand);
    assert.ok(Math.abs(Math.hypot(arm.elbow[0] - 422, arm.elbow[1] - 225) - 32) < .0001);
    assert.ok(Math.abs(Math.hypot(arm.hand[0] - arm.elbow[0], arm.hand[1] - arm.elbow[1]) - 50) < .0001);
    assert.ok(Math.hypot(arm.hand[0] - pose.hand[0], arm.hand[1] - pose.hand[1]) < .001);
  }
});

test('reach and return move continuously rather than switching silhouettes', () => {
  let prior = sampleScene(0, 'jitter');
  let distinctPoses = new Set();
  for (let time = 1 / 60; time < LOOP_SECONDS; time += 1 / 60) {
    const pose = sampleScene(time, 'jitter');
    assert.ok(Math.hypot(pose.hand[0] - prior.hand[0], pose.hand[1] - prior.hand[1]) < 2);
    assert.ok(Math.abs(pose.response - prior.response) < .04);
    assert.ok(Math.abs(pose.adverse - prior.adverse) < .04);
    distinctPoses.add(pose.hand.map(v => v.toFixed(2)).join(','));
    prior = pose;
  }
  assert.ok(distinctPoses.size > 100, 'a continuous reach needs more than a few poses');
});

test('the three stills show intake, response, and side effects independently', () => {
  const intake = sampleScene(STAGE_TIMES[0], 'heat');
  const response = sampleScene(STAGE_TIMES[1], 'heat');
  const adverse = sampleScene(STAGE_TIMES[2], 'heat');
  assert.equal(intake.intake, 1);
  assert.equal(intake.adverse, 0);
  assert.equal(response.response, 1);
  assert.equal(response.adverse, 0);
  assert.equal(adverse.response, 0);
  assert.equal(adverse.adverse, 1);
});

test('side-effect poses differ and stay within the protected character area', () => {
  const motions = ['jitter','sway','panic','heat','breathing','gut','craving','hormone','kidney','interaction','dissociate'];
  for (const motion of motions) {
    for (let t = 0; t < LOOP_SECONDS; t += .05) {
      const pose = sampleScene(t, motion);
      assert.ok(pose.hand[0] > 385 && pose.hand[0] < 490);
      assert.ok(pose.hand[1] > 175 && pose.hand[1] < 300);
      assert.ok(Math.abs(pose.sway) < 6);
      assert.ok(Object.values(pose).flat().filter(v => typeof v === 'number').every(Number.isFinite));
    }
  }
  assert.notDeepEqual(sampleScene(17, 'sway'), sampleScene(17, 'heat'));
});

test('oral props fade at the mouth and stay consumed during the return', () => {
  assert.equal(sampleScene(2, 'heat').oralProp, 1);
  assert.equal(sampleScene(5, 'heat').oralProp, 0);
  assert.equal(sampleScene(20, 'heat').oralProp, 0);
  for(let t=3.2;t<4;t+=1/60) {
    assert.ok(Math.abs(sampleScene(t+1/60,'heat').oralProp-sampleScene(t,'heat').oralProp)<.05);
  }
});

test('respiratory downside slows the phase continuously and closes at the loop boundary', () => {
  const rate = t => (sampleScene(t+.001,'breathing').breathPhase-sampleScene(t,'breathing').breathPhase)/.001;
  assert.ok(rate(17)<rate(8)*.3);
  assert.ok(Math.abs(sampleScene(24-.0001,'breathing').breath-sampleScene(0,'breathing').breath)<.001);
  for(let t=13;t<23;t+=.01) assert.ok(Math.abs(rate(t+.01)-rate(t))<.03);
});
