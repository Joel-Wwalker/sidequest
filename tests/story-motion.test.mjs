import test from 'node:test';
import assert from 'node:assert/strict';
import { sampleScene } from '../app/components/scene/timeline.ts';
import { handoffObjectOpacity, actionUsesContext } from '../app/components/scene/story-motion.ts';
import { catalogSeeds } from '../app/data/catalog/index.ts';
import { getSceneStory } from '../app/data/catalog/scene-stories.ts';
import { contextPropVisibility } from '../app/components/scene/prop-visibility.ts';

test('fluconazole changes its body action between treatment and safety review',()=>{
  const response=sampleScene(11,'context','fluconazole');
  const downside=sampleScene(18,'context','fluconazole');
  assert.ok(response.smile>downside.smile+1.5, 'mouth relief should read in the face');
  assert.ok(response.hand[1]>290&&downside.hand[1]>290,'arms relax instead of presenting cards');
  assert.equal(downside.gut,0,'a silent liver risk must not invent pain');
  assert.ok(response.mouthOpen>.1,'oral-yeast scene needs a visible mouth-directed response');
  assert.equal(downside.worry,0,'silent risk is a cutaway, not an immediate symptom');
});

test('activity props leave the wrist before a different stage object appears',()=>{
  for(const seed of catalogSeeds){
    const story=getSceneStory(seed);
    for(let t=8.2;t<23;t+=1/30){
      const p=sampleScene(t,'context',seed.id),action=p.stage===2?story.downsideAction:story.responseAction;
      if(!['training-effort','hair-check','meal-pause','dry-mouth'].includes(action))continue;
      const amount=(p.stage===2?p.adverse:p.response)*handoffObjectOpacity(t,'action');
      assert.ok(p.contextPropOpacity*amount<.00001,`${seed.id}: two objects on a wrist at ${t}`);
    }
  }
});

test('context beverages remain held through the sip and leave before the later body event',()=>{
  const entries=catalogSeeds.filter(seed=>seed.scene.exposure==='drink'&&seed.scene.prop==='cup');
  assert.equal(entries.length,3);
  for(const seed of entries)for(let t=0;t<24;t+=1/60){
    const p=sampleScene(t,'context',seed.id),v=contextPropVisibility(seed,p);
    if(t<7.7)assert.equal(v.beverage,1,'the mug remains held through the sip');
    if(t>14&&t<22)assert.equal(v.beverage,0,'the mug has left before the downside');
  }
});

test('related antifungals no longer reuse the same response and downside performance',()=>{
  const ids=['fluconazole','itraconazole','terbinafine','clotrimazole','miconazole','nystatin','voriconazole'];
  const signatures=ids.map(id=>JSON.stringify([10,12,16,19].map(t=>{
    const p=sampleScene(t,'context',id);
    return [p.hand,p.leftHand,p.tilt,p.lookX,p.mouthOpen,p.bodyLean];
  })));
  assert.equal(new Set(signatures).size,ids.length);
});

test('follow-up concerns interrupt the task with a neutral symptom review',()=>{
  for(const id of ['finasteride','dutasteride','cimetidine','spironolactone','esomeprazole']){
    const seed=catalogSeeds.find(seed=>seed.id===id),story=getSceneStory(seed);
    assert.equal(story.downsideAction,'symptom-review',id);
    assert.equal(actionUsesContext(story.downsideAction),false,id);
    const pose=sampleScene(18,'context',id);
    assert.equal(pose.contextPropOpacity,0,`${id}: opening task should have stopped`);
    assert.ok(pose.hand[1]>290,`${id}: neutral follow-up should have relaxed arms`);
    assert.ok(Math.abs(pose.bodyLean)<1,`${id}: follow-up must not look like collapse`);
    assert.equal(pose.gut,0,`${id}: review must not invent abdominal pain`);
  }
  assert.equal(getSceneStory(catalogSeeds.find(seed=>seed.id==='esomeprazole')).downsideMode,'silent-risk');
});

test('the remaining reviewed events use their selected anatomical site and urgency',()=>{
  const story=id=>getSceneStory(catalogSeeds.find(seed=>seed.id===id));
  assert.equal(story('isoniazid').downsideAction,'tingle');
  assert.equal(story('isoniazid').downsideTarget,'peripheral-nerves');
  assert.equal(story('methoxphenidine-mxp').downsideAction,'urgent-review');
  assert.equal(story('methoxphenidine-mxp').downsideMode,'conditional-event');
  assert.equal(story('ipratropium').downsideAction,'nose-discomfort');
  assert.equal(story('ipratropium').downsideTarget,'nose');
  assert.equal(story('peppermint-oil').downsideAction,'reflux-discomfort');
  assert.equal(story('peppermint-oil').downsideTarget,'throat');
  assert.equal(sampleScene(18,'context','peppermint-oil').gut,0,'reflux is not a stomach-cramp action');
});
