import test from 'node:test';
import assert from 'node:assert/strict';
import { sampleContextPose } from '../app/components/scene/context-motion.ts';
import { sampleScene } from '../app/components/scene/timeline.ts';
import { solveCharacterArm } from '../app/components/scene/arm-geometry.ts';
import { reactions, contextTasks } from '../app/data/catalog/types.ts';
import { inhalerGeometry } from '../app/components/scene/prop-geometry.ts';

test('context gestures preserve joint reach and facial clearance across every reaction',()=>{
  for (const reaction of reactions) for (const task of contextTasks) {
    const activity='work';
    const seed={id:`review-${reaction}-${task}`,status:'prescription',scene:{activity,task,response:'neutral',adverse:reaction,motif:'neural',exposure:'oral'}};
    let previous;
    for(let t=0;t<24;t+=1/60){
      const base=sampleScene(t,'context');
      const p=sampleContextPose(base,seed);
      for(const [side,target] of [['right',p.hand],['left',p.leftHand]]){
        const solved=solveCharacterArm(side,target);
        const reach=Math.hypot(target[0]-solved.shoulder[0],target[1]-solved.shoulder[1]);
        assert.ok(reach>=16&&reach<=80,`${reaction}/${activity}: arm exceeds reach at${t}`);
        assert.ok(Math.hypot(solved.hand[0]-target[0],solved.hand[1]-target[1])<.01,`${reaction}/${activity}: unreachable at${t}`);
      }
      if(previous)for(const field of ['hand','leftHand'])assert.ok(Math.hypot(p[field][0]-previous[field][0],p[field][1]-previous[field][1])<4,`${reaction}/${task}: discontinuity at${t}`);
      const arm=solveCharacterArm('left',p.leftHand),angle=-p.tilt*Math.PI/180;
      if(t<4||(t>=8.2&&t<14)){
        const x=p.hand[0]-400,y=p.hand[1]-214;
        const hx=400+x*Math.cos(angle)-y*Math.sin(angle),hy=214+x*Math.sin(angle)+y*Math.cos(angle);
        assert.ok(Math.hypot(Math.max(386-hx,0,hx-415),Math.max(174-hy,0,hy-201))>=8,`${task}: hand in face at${t}`);
      }
      for(let k=0;k<=18;k++){
        const x=arm.elbow[0]+k/18*(arm.hand[0]-arm.elbow[0])-400,y=arm.elbow[1]+k/18*(arm.hand[1]-arm.elbow[1])-214;
        const hx=400+x*Math.cos(angle)-y*Math.sin(angle),hy=214+x*Math.sin(angle)+y*Math.cos(angle);
        assert.ok(Math.hypot(Math.max(386-hx,0,hx-415),Math.max(174-hy,0,hy-201))>=10,`${reaction}/${activity}: sleeve in face at${t}`);
      }
      previous=p;
    }
    const a=sampleContextPose(sampleScene(0,'context'),seed),b=sampleContextPose(sampleScene(23.9999,'context'),seed);
    for(const field of ['tilt','bodyLean','lookX','lookY','smile','eyelid','gut','heat'])assert.ok(Math.abs(a[field]-b[field])<.01,`${reaction}: loop ${field}`);
  }
});

test('experimental entries do not animate a therapeutic response as established',()=>{
  const seed={id:'uncertain-compound',status:'experimental',scene:{activity:'research',response:'relief',adverse:'uncertain',motif:'uncertainty',exposure:'symbolic'}};
  const p=sampleContextPose(sampleScene(9,'context'),seed);
  assert.equal(p.smile,0);
  assert.equal(p.bodyLean,0);
});

test('the inhaler nozzle meets the lips while its canister clears the eyes',()=>{
  for(let t=4.1;t<8.2;t+=1/60){
    const p=sampleScene(t,'context','albuterol'),base=p,hand=solveCharacterArm('right',p.hand).hand;
    assert.ok(Math.hypot(hand[0]-p.hand[0],hand[1]-p.hand[1])<.01,'unreachable inhaler grip');
    const box={left:hand[0]+inhalerGeometry.canister.x,right:hand[0]+inhalerGeometry.canister.x+inhalerGeometry.canister.width,top:hand[1]+inhalerGeometry.canister.y,bottom:hand[1]+inhalerGeometry.canister.y+inhalerGeometry.canister.height};
    assert.ok(box.left>419||box.top>192||box.right<379||box.bottom<173,'canister crosses the eye region');
    if(base.intake>.999){const tip=[hand[0]+inhalerGeometry.mouthpieceTip[0],hand[1]+inhalerGeometry.mouthpieceTip[1]];assert.ok(Math.hypot(tip[0]-402,tip[1]-199)<1,'nozzle misses the mouth');}
  }
});

test('a beverage uses the sipping hand throughout the activity with continuous joints',()=>{
  for(const adverse of reactions){
    const seed={id:'beverage-contact',status:'supplement',scene:{activity:'hydration',task:'hydration',prop:'cup',response:'neutral',adverse,exposure:'drink'}};
    let previous;
    for(let t=0;t<24;t+=1/60){
      const p=sampleContextPose(sampleScene(t,'context'),seed);
      const solved=solveCharacterArm('right',p.hand);
      assert.ok(Math.hypot(solved.hand[0]-p.hand[0],solved.hand[1]-p.hand[1])<.01,`${adverse}: unreachable cup`);
      if(previous)assert.ok(Math.hypot(p.hand[0]-previous[0],p.hand[1]-previous[1])<4,`${adverse}: jumping cup`);
      if(t<3.3)assert.deepEqual(p.leftHand,[360,305],'opening should not hold a second cup');
      previous=p.hand;
    }
  }
});
