import {getExposure} from '../app/components/scene/exposure.ts';
import test from 'node:test';
import assert from 'node:assert/strict';
import { substances } from '../app/data/substances.ts';
import { catalogSeeds } from '../app/data/catalog/index.ts';
import { settings, activities, reactions, motifs, contextTasks, contextProps, riskVisuals } from '../app/data/catalog/types.ts';
import { sampleScene } from '../app/components/scene/timeline.ts';
import { solveCharacterArm } from '../app/components/scene/arm-geometry.ts';
import { getSceneProfile } from '../app/components/scene/profiles.ts';
import { getSceneStory } from '../app/data/catalog/scene-stories.ts';

test('the catalog reaches 500 distinct sourced entries and covers the requested priorities',()=>{
  assert.ok(substances.length>=500,`${substances.length} of the 500-entry target`);
  assert.equal(new Set(substances.map(s=>s.id)).size,substances.length);
  assert.equal(new Set(substances.map(s=>s.name.toLowerCase())).size,substances.length);
  const canonical=new Map(substances.map(s=>[s.name.toLowerCase(),s.id]));
  for(const entry of substances)for(const alias of entry.aliases)assert.ok(!canonical.has(alias.toLowerCase())||canonical.get(alias.toLowerCase())===entry.id,`${entry.id} claims another entry's name as an alias: ${alias}`);
  for(const query of ['phenibut','semaglutide','tirzepatide','finasteride','adderall','heroin','methamphetamine','ghb','gbl','nandrolone','stanozolol'])assert.ok(substances.some(s=>[s.id,s.name,...s.aliases].some(v=>v.toLowerCase()===query)),query);
});

test('every expanded entry declares context before its scene and supplies supporting sources',()=>{
  for(const seed of catalogSeeds){
    assert.ok(seed.useContext.trim() && seed.scene.intent.trim(),seed.id);
    assert.ok(seed.sources.length>0,seed.id);
    for(const source of seed.sources){assert.equal(new URL(source.url).protocol,'https:');assert.ok(!/example\.com|placeholder/i.test(source.url),seed.id);}
    for(const [allowed,value] of [[settings,seed.scene.setting],[activities,seed.scene.activity],[reactions,seed.scene.response],[reactions,seed.scene.adverse],[motifs,seed.scene.motif],[contextTasks,seed.scene.task],[contextProps,seed.scene.prop],[['immediate','over-time','variable','unknown'],seed.scene.timeCourse],[['activate','block','replace','modulate','protect','uncertain'],seed.scene.mechanismStyle]])assert.ok(allowed.includes(value),`${seed.id}: ${value}`);
    assert.equal(seed.scene.beats.length,2,seed.id);
    assert.ok(Array.isArray(seed.scene.organs)&&Array.isArray(seed.scene.cautions),seed.id);
    for(const notes of [seed.scene.responseNotes,seed.scene.riskNotes]){assert.equal(notes?.length,2,seed.id);assert.ok(notes.every(note=>note.trim().length>0&&note.length<=65),seed.id);}
    assert.ok(seed.risks.length>=2&&seed.effects.length>=2,seed.id);
    assert.ok(riskVisuals.includes(seed.scene.riskVisual),`${seed.id}: missing explicit risk visual`);
    const requiredProps={meal:['plate'],typing:['phone'],'hair-photo':['phone'],gardening:['plant']};
    if(requiredProps[seed.scene.task])assert.ok(requiredProps[seed.scene.task].includes(seed.scene.prop),`${seed.id}: ${seed.scene.task} cannot use ${seed.scene.prop}`);
    const profile=getSceneProfile(seed.name,'supplement',seed.id);assert.equal(profile.key,seed.id);assert.equal(profile.motion,'context');
  }
});

test('context props hand over between activity and exposure without doubling up',()=>{
  for(const seed of catalogSeeds){
    for(let t=4.1;t<=7.7;t+=.1){const p=sampleScene(t,'context',seed.id);assert.equal(p.contextPropOpacity,0,`${seed.id}: task object during exposure`);}
    for(let t=8.2;t<=23;t+=.1){const p=sampleScene(t,'context',seed.id);assert.equal(p.contextExposureOpacity,0,`${seed.id}: exposure prop during activity or risk`);}
    const a=sampleScene(0,'context',seed.id),b=sampleScene(23.99999,'context',seed.id);
    for(const key of ['contextPropOpacity','contextExposureOpacity','contextTaskAmount'])assert.ok(Math.abs(a[key]-b[key])<.001,`${seed.id}: prop reset ${key}`);
  }
});

test('expanded entries have distinct authored scenes and reachable joints through the full cycle',()=>{
  const blueprints=new Map();
  const shared=(value,groups)=>groups.find(group=>group.includes(value))?.[0]??value;
  for(const seed of catalogSeeds){
    const s=seed.scene;
    // Compare the renderer's shared branches, not unused activity labels or color hashes.
    const setting=shared(s.setting,[['garden','conservatory']]);
    const task=shared(s.task,[['writing','meal-log','sleep-log','research-notes'],['checklist','care-card']]);
    const prop=shared(s.prop,[['notebook','care-card']]);
    const story=getSceneStory(seed);
    // The deleted wall motifs and old neutral reactions are not rendered differences.
    // Mode, label, target name and palette alone cannot establish choreography uniqueness.
    const signature=JSON.stringify([setting,task,prop,getExposure(seed.id).kind,story.responseAction,story.downsideAction]);
    assert.ok(!blueprints.has(signature),`${seed.id} repeats ${blueprints.get(signature)}; palette and labels cannot establish a unique scene`);
    blueprints.set(signature,seed.id);
    for(let t=0;t<24;t+=1/60){
      const p=sampleScene(t,'context',seed.id);
      for(const [side,hand] of [['right',p.hand],['left',p.leftHand]]){
        const solved=solveCharacterArm(side,hand);
        const reach=Math.hypot(hand[0]-solved.shoulder[0],hand[1]-solved.shoulder[1]);
        assert.ok(reach>=16&&reach<=80,`${seed.id} exceeds arm reach at${t}`);
        assert.ok(Math.hypot(solved.hand[0]-hand[0],solved.hand[1]-hand[1])<.01,`${seed.id} unreachable at${t}`);
      }
    }
  }
  assert.equal(blueprints.size,catalogSeeds.length);
});
