import {getExposure, type ExposureSpec} from './exposure.ts';
import {solveCharacterArm} from './arm-geometry.ts';

type Point=[number,number];
type ExposurePose={t:number;intake:number;hand:Point;leftHand:Point;tilt:number;oralProp:number;contextExposureOpacity:number;lookX:number;lookY:number;bodyLean:number;eyelid:number;smile:number};
const ease=(n:number)=>{const x=Math.max(0,Math.min(1,n));return x*x*(3-2*x);};
const mix=(a:Point,b:Point,t:number):Point=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];
const rotate=(p:Point,degrees:number):Point=>{const a=degrees*Math.PI/180;return[p[0]*Math.cos(a)-p[1]*Math.sin(a),p[0]*Math.sin(a)+p[1]*Math.cos(a)];};
export const oralKinds=['tablet','capsule','edible','blotter','mushroom','buccal','food'];
export const mouthKinds=[...oralKinds,'drink','oral-liquid','oral-spray','inhaler','dry-powder-inhaler','nebulizer','vapor'];
export function exposureTiming(contextual:boolean){return contextual?{start:4.1,contact:5.8,consume:6.2,consumed:6.55,end:8.2}:{start:1.4,contact:3.2,consume:3.55,consumed:3.95,end:6.1};}

export function leftExposureHand(spec:ExposureSpec):Point{
  if(spec.kind==='nasal-powder')return[431,235];
  if(spec.kind==='food')return[364,280];
  return (['patch','topical'].includes(spec.kind)&&spec.site!=='upper-arm')?[387,277]
    :['pen','subcutaneous'].includes(spec.kind)?[382,288]:[360,305];
}
/** Targets are on the actual articulated skin, not a room coordinate. */
export function exposureSkinPoint(spec:ExposureSpec,left:ReturnType<typeof solveCharacterArm>):Point{
  if(spec.site==='hip')return[424,299];
  if(spec.site==='upper-arm'||spec.kind==='injection')return mix(left.shoulder,left.elbow,.58);
  if(['pen','subcutaneous'].includes(spec.kind))return[402,279];
  if(spec.kind==='face-cream')return[416,194];
  return mix(left.elbow,left.hand,.65);
}
export function exposureGeometry(spec:ExposureSpec,id:string){
  let tip:Point=[-7,-12],angle=0,target:Point=[402,199];
  switch(spec.kind){
    case'drink':tip=id==='alcohol'?[-6.5,-18]:[-7,-15];angle=id==='alcohol'?-32:-16;break;
    case'oral-liquid':tip=[-10,-15];angle=-18;break;
    case'oral-spray':tip=[-16,-12];break;
    case'inhaler':case'dry-powder-inhaler':case'nebulizer':tip=[-12,-14];break;
    case'nasal-spray':tip=[-8,-25];target=[400,192];break;
    case'nasal-powder':tip=[-14,-28];target=[400,192];break;
    case'vapor':tip=[-14,-14];break;
    case'gas-mask':tip=[-22,-17];target=[400,195];break;
    case'patch':tip=[-12,0];target=exposureSkinPoint(spec,solveCharacterArm('left',leftExposureHand(spec)));break;
    case'topical':tip=[-16,0];target=exposureSkinPoint(spec,solveCharacterArm('left',leftExposureHand(spec)));break;
    case'face-cream':tip=[-12,-17];target=[416,194];break;
    case'gas-balloon':tip=[-12,-14];break;
    case'pen':case'subcutaneous':tip=[-18,0];target=[402,279];break;
    case'injection':tip=[-18,0];target=exposureSkinPoint(spec,solveCharacterArm('left',leftExposureHand(spec)));break;
    case'infusion':return{tip:[0,0] as Point,angle:0,target:[440,305] as Point,wrist:[440,305] as Point};
    case'research':return{tip:[0,-14] as Point,angle:0,target:[413,253] as Point,wrist:[413,267] as Point};
  }
  const contact=rotate(tip,angle);
  return{tip,angle,target,wrist:[target[0]-contact[0],target[1]-contact[1]] as Point};
}
export function exposureReach(spec:ExposureSpec,id:string,amount:number):Point{
  const end=exposureGeometry(spec,id).wrist;
  const control:Point=spec.kind==='face-cream'?[392,218]:mouthKinds.includes(spec.kind)||['nasal-spray','nasal-powder','gas-mask','gas-balloon'].includes(spec.kind)?[398,281]:[420,290];
  const u=1-amount;
  return[u*u*440+2*u*amount*control[0]+amount*amount*end[0],u*u*305+2*u*amount*control[1]+amount*amount*end[1]];
}
export function withExposurePose<T extends ExposurePose>(p:T,id:string,contextual:boolean):T{
  if(!id)return p;
  const spec=getExposure(id),i=p.intake,u=1-i;
  const old:Point=[u*u*440+2*u*i*398+i*i*409,u*u*305+2*u*i*281+i*i*211];
  const next=exposureReach(spec,id,i),left=leftExposureHand(spec);
  const timing=exposureTiming(contextual);
  const consumed=ease((p.t-timing.consume)/(timing.consumed-timing.consume));
  const assisted=id==='naloxone'||(spec.kind==='injection'&&spec.site==='hip');
  const hand=assisted?[p.hand[0]+440-old[0],p.hand[1]+305-old[1]] as Point:[p.hand[0]+next[0]-old[0],p.hand[1]+next[1]-old[1]] as Point;
  const result={...p,
    hand,
    leftHand:mix(p.leftHand,left,i),
    oralProp:1-consumed+consumed*ease((p.t-23.6)/.4),
  };
  // Return temporary objects with the hand, then clear them before the reaction.
  // Applied material is rendered separately and stays attached to the body.
  if(!contextual&&spec.kind!=='drink')result.contextExposureOpacity=1-ease((p.t-(timing.end-.65))/.65)+ease((p.t-23.6)/.4);
  if(id==='naloxone'){
    const before=ease(p.t/1.4)*(1-ease((p.t-8.2)/1.3));
    Object.assign(result,{hand:mix(result.hand,[440,305],before),leftHand:mix(result.leftHand,[360,305],before),tilt:result.tilt*(1-before)+7*before,eyelid:p.eyelid*(1-before)+.8*before,bodyLean:p.bodyLean*(1-before)+8*before,smile:p.smile*(1-before),contextPropOpacity:0});
  }
  if(spec.kind==='research')Object.assign(result,{lookX:p.lookX*(1-i)+.6*i,lookY:p.lookY*(1-i)+2*i,tilt:p.tilt*(1-i)-3*i});
  if(spec.kind==='injection'&&spec.site==='hip')result.hand=mix(result.hand,[466,272],i);
  return result;
}
export function attachedExposureAmount(t:number,contextual:boolean){const timing=exposureTiming(contextual);return ease((t-timing.contact)/.35)*(1-ease((t-23)/.6));}
export function exposureObjectOpacity(p:ExposurePose,spec:ExposureSpec,contextual:boolean){
  if(spec.kind==='patch')return p.contextExposureOpacity*(1-attachedExposureAmount(p.t,contextual));
  if(oralKinds.includes(spec.kind))return p.contextExposureOpacity*p.oralProp;
  return p.contextExposureOpacity;
}
