import test from 'node:test';
import assert from 'node:assert/strict';
import { solveCharacterArm, UPPER_ARM, FOREARM } from '../app/components/scene/arm-geometry.ts';
import { sampleScene, solveArm } from '../app/components/scene/timeline.ts';
import { getSceneProfile } from '../app/components/scene/profiles.ts';
import { getCatalogSeed } from '../app/data/catalog/index.ts';
import { substances } from '../app/data/substances.ts';
import {getExposure} from '../app/components/scene/exposure.ts';
import {mouthKinds} from '../app/components/scene/exposure-motion.ts';

// The actual hair/head silhouette, including ears and jaw, rather than only
// a small eye rectangle. Coordinates are local to the animated head group.
const head = [[377,165],[377,153],[386,153],[386,145],[414,145],[414,151],[423,151],[423,161],[429,161],[429,190],[424,190],[424,204],[416,204],[416,214],[386,214],[386,207],[377,207],[377,195],[371,195],[371,171],[377,171]];
const face = [[386,174],[415,174],[415,201],[386,201]];
function pointSegment(p,a,b) {
  const x=b[0]-a[0],y=b[1]-a[1],length=x*x+y*y;
  const t=length?Math.max(0,Math.min(1,((p[0]-a[0])*x+(p[1]-a[1])*y)/length)):0;
  return Math.hypot(p[0]-a[0]-t*x,p[1]-a[1]-t*y);
}
function inside(p,polygon) {
  let result=false;
  for(let i=0,j=polygon.length-1;i<polygon.length;j=i++)
    if((polygon[i][1]>p[1])!==(polygon[j][1]>p[1])&&p[0]<(polygon[j][0]-polygon[i][0])*(p[1]-polygon[i][1])/(polygon[j][1]-polygon[i][1])+polygon[i][0])result=!result;
  return result;
}
const cross=(a,b,c)=>(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
function clearance(a,b,polygon,radius) {
  if(inside(a,polygon)||inside(b,polygon))return -radius;
  let distance=Infinity;
  for(let i=0;i<polygon.length;i++){
    const c=polygon[i],d=polygon[(i+1)%polygon.length];
    if(cross(a,b,c)*cross(a,b,d)<0&&cross(c,d,a)*cross(c,d,b)<0)return -radius;
    distance=Math.min(distance,pointSegment(a,c,d),pointSegment(b,c,d),pointSegment(c,a,b),pointSegment(d,a,b));
  }
  return distance-radius;
}
function unrotate([x,y],tilt) {
  const angle=-tilt*Math.PI/180;
  return [400+(x-400)*Math.cos(angle)-(y-214)*Math.sin(angle),214+(x-400)*Math.sin(angle)+(y-214)*Math.cos(angle)];
}

test('Fluconazole reading keeps the complete upper sleeve and elbow out of the head',()=>{
  for(const t of [1.8,10]){
    const pose=sampleScene(t,'context','fluconazole');
    const arm=solveCharacterArm('right',pose.hand);
    assert.ok(clearance(unrotate(arm.shoulder,pose.tilt),unrotate(arm.elbow,pose.tilt),head,11)>0);
  }
  // Prove the original regression is detected, including the thick sleeve.
  const old=solveArm([422,225],[401,256]);
  assert.ok(clearance(unrotate([422,225],-2),unrotate(old.elbow,-2),head,11)<0);
});

test('every rendered arm clears the moving head through each full loop',()=>{
  for(const entry of substances){
    const seed=getCatalogSeed(entry.id),profile=getSceneProfile(entry.name,entry.sceneType,entry.id);
    const intake=getExposure(entry.id).kind;
    const prior={};
    for(let frame=0;frame<24*60;frame++){
      const t=frame/60,pose=sampleScene(t,profile.motion,entry.id);
      for(const side of ['left','right']){
        const target=side==='left'?pose.leftHand:pose.hand;
        const arm=solveCharacterArm(side,target),label=`${entry.id} ${side} at ${t.toFixed(3)}s`;
        assert.deepEqual(arm.hand,target,`${label}: detached wrist`);
        assert.ok(Math.abs(Math.hypot(arm.elbow[0]-arm.shoulder[0],arm.elbow[1]-arm.shoulder[1])-UPPER_ARM)<1e-8,`${label}: upper arm overstretches`);
        const length=Math.hypot(arm.elbow[0]-target[0],arm.elbow[1]-target[1]);
        assert.ok(Math.abs(length-FOREARM)<1e-8,`${label}: forearm length ${length}`);
        const distance=Math.hypot(target[0]-arm.shoulder[0],target[1]-arm.shoulder[1]);
        const jointAngle=Math.acos((UPPER_ARM**2+FOREARM**2-distance**2)/(2*UPPER_ARM*FOREARM))*180/Math.PI;
        assert.ok(jointAngle>25&&jointAngle<175,`${label}: elbow overfolds or locks (${jointAngle})`);
        if(prior[side])assert.ok(Math.hypot(arm.elbow[0]-prior[side][0],arm.elbow[1]-prior[side][1])<4,`${label}: elbow jumps`);
        prior[side]=arm.elbow;
        const shoulder=unrotate(arm.shoulder,pose.tilt),elbow=unrotate(arm.elbow,pose.tilt),hand=unrotate(arm.hand,pose.tilt);
        const cuff=unrotate([arm.elbow[0]+(target[0]-arm.elbow[0])*5/length,arm.elbow[1]+(target[1]-arm.elbow[1])*5/length],pose.tilt);
        assert.ok(clearance(elbow,cuff,head,10.5)>=-.05,`${label}: rolled cuff in head`);
        assert.ok(clearance(shoulder,elbow,head,10.5)>=-.05,`${label}: upper sleeve in head`);
        assert.ok(clearance(elbow,hand,face,7)>=-.05,`${label}: forearm in face`);
        // The oral/drink wrist touches the lower jaw as the prop meets the
        // mouth. Only that terminal 20px may touch; the rest of the arm must
        // remain clear, including during the approach and return.
        const mouthContact=side==='right'&&[...mouthKinds,'nasal-spray','nasal-powder','gas-balloon','face-cream'].includes(intake)&&pose.intake>.7&&target[0]>=400&&target[0]<=437&&target[1]>=207&&target[1]<=222;
        const checkedHand=mouthContact?[elbow[0]+(hand[0]-elbow[0])*Math.max(0,1-20/length),elbow[1]+(hand[1]-elbow[1])*Math.max(0,1-20/length)]:hand;
        assert.ok(clearance(elbow,checkedHand,head,7)>=-.05,`${label}: forearm in hair/ear/jaw`);
      }
    }
  }
});
