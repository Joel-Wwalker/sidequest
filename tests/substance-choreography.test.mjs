import test from 'node:test';
import assert from 'node:assert/strict';
import { sampleScene, solveArm, LOOP_SECONDS } from '../app/components/scene/timeline.ts';
import { getSceneProfile } from '../app/components/scene/profiles.ts';
import { originalSubstances as substances } from '../app/data/substances.ts';
import { sceneSets } from '../app/components/scene/sets.ts';

test('all nineteen entries have an explicit setting within the shared effect families',()=>{
  assert.equal(new Set(substances.map(entry=>sceneSets[entry.id]?.name)).size,19);
  assert.equal(new Set(substances.map(entry=>sceneSets[entry.id]?.family)).size,9);
  for(const entry of substances)assert.ok(sceneSets[entry.id]?.name,entry.id);
});

test('each entry supplies its own choreography and specific explanatory beats', () => {
  const signatures = new Set();
  for (const entry of substances) {
    const profile = getSceneProfile(entry.name, entry.sceneType);
    assert.equal(profile.key, entry.id);
    assert.equal(profile.beats.length, 2);
    const frames = [8, 10, 16, 18, 20].map(t => {
      const p = sampleScene(t, profile.motion, entry.id);
      return [p.leftHand,p.symbolicHand,p.bodyLean,p.tilt,p.lookX,p.eyelid,p.smile];
    });
    signatures.add(JSON.stringify(frames));
  }
  assert.equal(signatures.size, substances.length, 'names and colors cannot substitute for different choreography');
});

test('every choreography keeps both arms reachable and closes without a pose jump', () => {
  for (const entry of substances) {
    const profile = getSceneProfile(entry.name, entry.sceneType);
    const start = sampleScene(0, profile.motion, entry.id);
    const end = sampleScene(LOOP_SECONDS-.0001, profile.motion, entry.id);
    for(const field of ['bodyLean','sway','tilt','eyelid','smile','lookX','lookY']) {
      assert.ok(Math.abs(start[field]-end[field])<.01, `${entry.id}: ${field} loop boundary`);
    }
    let previous = start;
    for(let t=0;t<LOOP_SECONDS;t+=1/60) {
      const p = sampleScene(t,profile.motion,entry.id);
      for(const [shoulder,hand,upper,lower] of [
        [[422,225],p.hand,32,50],[[422,225],p.symbolicHand,32,50],[[378,225],p.leftHand,36,36],
      ]) {
        const solved=solveArm(shoulder,hand,upper,lower);
        assert.ok(Math.hypot(solved.hand[0]-hand[0],solved.hand[1]-hand[1])<.01,`${entry.id}: unreachable hand at ${t}`);
      }
      for(const field of ['hand','symbolicHand','leftHand']) assert.ok(Math.hypot(p[field][0]-previous[field][0],p[field][1]-previous[field][1])<4,`${entry.id}: ${field} stepped`);
      previous=p;
    }
  }
});

test('foreground sleeves stay clear of the eyes, nose and mouth through every pose', () => {
  const collisions = new Map();
  for (const entry of substances) {
    const profile = getSceneProfile(entry.name, entry.sceneType);
    for (let t=0;t<LOOP_SECONDS;t+=1/60) {
      const p = sampleScene(t,profile.motion,entry.id);
      const arm = solveArm([378,225],p.leftHand,36,36,1);
      const angle = -p.tilt*Math.PI/180;
      // Both parts inherit the torso transform. Undo only the head's rotation.
      for (let step=0;step<=36;step++) {
        const u=step/36;
        const x=arm.elbow[0]+u*(arm.hand[0]-arm.elbow[0])-400;
        const y=arm.elbow[1]+u*(arm.hand[1]-arm.elbow[1])-214;
        const hx=400+x*Math.cos(angle)-y*Math.sin(angle);
        const hy=214+x*Math.sin(angle)+y*Math.cos(angle);
        // Distance from the sleeve centerline to the central facial features.
        const dx=Math.max(386-hx,0,hx-415),dy=Math.max(174-hy,0,hy-201);
        if (Math.hypot(dx,dy)<9 && !collisions.has(entry.id)) collisions.set(entry.id,t.toFixed(3));
      }
    }
  }
  assert.deepEqual([...collisions], [], 'foreground sleeve intersections with facial features');
});
