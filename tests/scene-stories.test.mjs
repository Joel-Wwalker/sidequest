import {getExposure} from '../app/components/scene/exposure.ts';
import test from 'node:test';
import assert from 'node:assert/strict';
import {catalogSeeds} from '../app/data/catalog/index.ts';
import {getSceneStory,storyActions,sceneStoryIds} from '../app/data/catalog/scene-stories.ts';

test('every catalog entry has an explicitly selected response and downside story',()=>{
  assert.deepEqual([...sceneStoryIds].sort(),catalogSeeds.map(s=>s.id).sort());
  for(const seed of catalogSeeds){
    const story=getSceneStory(seed);
    assert.ok(story,seed.id);
    for(const stage of ['response','downside']){
      assert.ok(storyActions.includes(story[`${stage}Action`]),seed.id);
      assert.ok(story[`${stage}Label`].length>0&&story[`${stage}Label`].length<=45,`${seed.id}: ${stage} label`);
      assert.ok(story[`${stage}Cue`].trim(),seed.id);
      assert.ok(story[`${stage}Target`],seed.id);
    }
    if(seed.status==='experimental'){
      assert.equal(story.responseMode,'uncertain',seed.id);
      assert.equal(story.responseAction,'review-uncertainty',seed.id);
    }
  }
  assert.equal(getSceneStory({id:'unassigned-test-entry'}),undefined);
});

test('antifungals and emergency reversal have selected sites and meaningful actions',()=>{
  const story=id=>getSceneStory(catalogSeeds.find(s=>s.id===id));
  assert.equal(story('fluconazole').responseAction,'mouth-ease');
  assert.equal(story('fluconazole').responseTarget,'mouth');
  assert.equal(story('fluconazole').downsideAction,'review-labs');
  assert.equal(story('fluconazole').downsideMode,'silent-risk');
  assert.equal(story('terbinafine').responseAction,'nail-check');
  assert.equal(story('naloxone').responseAction,'breathe-easier');
  assert.equal(story('naloxone').downsideAction,'breathing-watch');
  assert.equal(story('lamotrigine').downsideTarget,'skin');
  assert.match(story('lamotrigine').downsideLabel,/rash/i);
  assert.match(story('tretinoin').downsideLabel,/differentiation/i);
});

test('silent organ risks use checking actions instead of invented pain symptoms',()=>{
  for(const seed of catalogSeeds){
    const story=getSceneStory(seed);
    if(story.downsideMode==='silent-risk')assert.ok(['review-labs','review-interactions','review-uncertainty','glucose-check','pressure-check','pulse-check','infection-watch','withdrawal-watch','recovery-check','vision-check','nutrition-check','symptom-review'].includes(story.downsideAction),`${seed.id}: ${story.downsideAction}`);
  }
});

test('character stories differ by actual task, object or action even without room and color',()=>{
  const normalize=(value,groups)=>groups.find(group=>group.includes(value))?.[0]??value;
  const signatures=new Map();
  for(const seed of catalogSeeds){
    const story=getSceneStory(seed),s=seed.scene;
    const task=normalize(s.task,[['writing','meal-log','sleep-log','research-notes'],['checklist','care-card']]);
    const prop=normalize(s.prop,[['notebook','care-card']]);
    const key=[task,prop,getExposure(seed.id).kind,story.responseAction,story.downsideAction].join('|');
    assert.ok(!signatures.has(key),`${seed.id} repeats ${signatures.get(key)} without room/color/labels`);
    signatures.set(key,seed.id);
  }
});

test('selected warning captions name the event shown rather than another listed side effect',()=>{
  const story=id=>getSceneStory(catalogSeeds.find(s=>s.id===id));
  for(const id of ['morphine','oxycodone','hydromorphone','codeine'])assert.match(story(id).downsideCue,/breathing/i,id);
  for(const id of ['amoxicillin','ampicillin','penicillin-v','cephalexin','cefuroxime','cefdinir','cefpodoxime','ceftriaxone','cefazolin'])assert.match(story(id).downsideCue,/diarrhea|colitis/i,id);
  for(const id of ['lisinopril','enalapril','ramipril','benazepril']){
    assert.match(story(id).downsideCue,/airway swelling/i,id);
    assert.equal(story(id).downsideAction,'urgent-review',id);
  }
  assert.match(story('bupropion').downsideCue,/seizure/i);
  assert.match(story('tramadol').downsideCue,/seizure/i);
  assert.match(story('linezolid').downsideCue,/serotonin/i);
  assert.match(story('nitrous-oxide').downsideCue,/B12.*nerve/i);
  assert.equal(story('clobetasol').downsideAction,'skin-fragility-check');
});

test('site-specific follow-up and new movement actions match the selected clinical story',()=>{
  const story=id=>getSceneStory(catalogSeeds.find(s=>s.id===id));
  assert.equal(story('alendronate').downsideTarget,'throat');
  assert.equal(story('propranolol').responseAction,'steadier-hands');
  assert.equal(story('creatine').responseAction,'training-effort');
  assert.match(story('chlorthalidone').downsideCue,/electrolyte/i);
  assert.match(story('lansoprazole').downsideCue,/magnesium/i);
  assert.match(story('thunder-god-vine').downsideCue,/white.cell/i);
  assert.equal(story('hydrocortisone').downsideAction,'urgent-review');
  assert.equal(story('hydrocortisone').downsideMode,'conditional-event');
  assert.match(story('hydrocortisone').downsideLabel,/adrenal crisis/i);
  for(const id of ['finasteride','dutasteride','cimetidine']){
    assert.equal(story(id).downsideMode,'follow-up',id);
    assert.equal(story(id).downsideAction,'symptom-review',id);
  }
});

test('pulse direction is authored separately for response and downside, with no invented rate',()=>{
  const story=id=>getSceneStory(catalogSeeds.find(s=>s.id===id));
  for(const id of ['metoprolol','atenolol','bisoprolol','diltiazem','verapamil'])assert.equal(story(id).downsidePulsePattern,'slow',id);
  for(const id of ['mixed-amphetamine-salts','atomoxetine','albuterol','hydralazine','cjc-1295','mephedrone-4-mmc'])assert.equal(story(id).downsidePulsePattern,'fast',id);
  assert.equal(story('sotalol').responsePulsePattern,'monitor');
  assert.equal(story('sotalol').downsidePulsePattern,'irregular');
  assert.equal(story('ivabradine').responsePulsePattern,'slow');
  assert.equal(story('rizatriptan').downsidePulsePattern,'monitor');
  assert.equal(story('methamphetamine').downsidePulsePattern,'monitor');
  for(const seed of catalogSeeds){
    const s=getSceneStory(seed);
    for(const stage of ['response','downside']){
      if(s[`${stage}Action`]==='pulse-check')assert.ok(['slow','fast','irregular','monitor'].includes(s[`${stage}PulsePattern`]),seed.id);
      else assert.equal(s[`${stage}PulsePattern`],undefined,seed.id);
    }
  }
});
