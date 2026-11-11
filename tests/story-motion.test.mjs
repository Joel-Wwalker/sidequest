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
  assert.ok(Math.hypot(response.hand[0]-downside.hand[0],response.hand[1]-downside.hand[1])>12);
  assert.ok(Math.abs(response.lookX-downside.lookX)>.5);
  assert.ok(response.mouthOpen>.1,'oral-yeast scene needs a visible mouth-directed response');
  assert.ok(downside.lookX<-.5,'safety review should track the card');
});

test('activity props leave the wrist before a different stage object appears',()=>{
  for(const seed of catalogSeeds){
    const story=getSceneStory(seed);
    for(let t=8.2;t<23;t+=1/30){
      const p=sampleScene(t,'context',seed.id),action=p.stage===2?story.downsideAction:story.responseAction;
      if(actionUsesContext(action))continue;
      const amount=(p.stage===2?p.adverse:p.response)*handoffObjectOpacity(t,'action');
      assert.ok(p.contextPropOpacity*amount<.00001,`${seed.id}: two objects on a wrist at ${t}`);
    }
  }
});

test('all three context beverages release the mug before a review card uses that hand',()=>{
  const entries=catalogSeeds.filter(seed=>seed.scene.exposure==='drink'&&seed.scene.prop==='cup');
  assert.equal(entries.length,3);
  for(const seed of entries)for(let t=0;t<24;t+=1/60){
    const p=sampleScene(t,'context',seed.id),v=contextPropVisibility(seed,p),story=getSceneStory(seed);
    const action=p.stage===2?story.downsideAction:story.responseAction;
    const card=['review-uncertainty','withdrawal-watch'].includes(action)?v.reviewCardGate*(p.stage===2?p.adverse:p.response):0;
    assert.ok(v.beverage*card<.00001,`${seed.id}: mug and card overlap at ${t}`);
    if(t<7.7)assert.equal(v.beverage,1,'the mug remains held through the sip');
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
    assert.ok(pose.hand[1]>245&&pose.hand[0]<400,`${id}: hand should point to the notes`);
    assert.ok(pose.lookX<0&&pose.lookY>1,`${id}: attention should follow the notes`);
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
