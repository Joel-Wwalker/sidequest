import type {ExposureSpec} from './exposure';
import type {sampleScene} from './timeline';
import {solveArm} from './timeline';
import {solveCharacterArm} from './arm-geometry';
import {attachedExposureAmount,exposureGeometry,exposureObjectOpacity,exposureSkinPoint} from './exposure-motion';
import {inhalerBootPath,inhalerGeometry} from './prop-geometry';
import {contextPropVisibility} from './prop-visibility';
import {getCatalogSeed} from '../../data/catalog/index';
type Pose=ReturnType<typeof sampleScene>;
type Props={spec:ExposureSpec;id:string;pose:Pose;contextual:boolean};

/** Real held objects. The grip, contact target and drawing share one geometry. */
export function HeldExposure({spec,id,pose,contextual}:Props){
  const k=spec.kind,g=exposureGeometry(spec,id);
  const gasProgress=Math.max(0,Math.min(1,(pose.t-(contextual?5.8:3.2))/.75)),gasUsed=gasProgress*gasProgress*(3-2*gasProgress);
  if(k==='infusion'||id==='naloxone'||(k==='injection'&&spec.site==='hip'))return null;
  const opacity=k==='drink'?contextPropVisibility(getCatalogSeed(id),pose).beverage:exposureObjectOpacity(pose,spec,contextual);
  return <g data-exposure-prop={k} opacity={opacity} transform={`rotate(${g.angle*pose.intake})`} strokeLinecap="round" strokeLinejoin="round">
    {['tablet','capsule','edible','blotter','mushroom','buccal','food'].includes(k)&&<>
      <path d="M-1-1L-5-8" stroke="#e8bb93" strokeWidth="5"/>
      {k==='tablet'&&<ellipse cx="-7" cy="-12" rx="5.5" ry="3.8" fill="#f8eed8" stroke="#bbaa8d" strokeWidth="1.2"/>}
      {k==='capsule'&&<g transform="rotate(-22 -7 -12)"><rect x="-13" y="-15.5" width="12" height="7" rx="3.5" fill="#f2e7ce" stroke="#9c9980" strokeWidth="1"/><path d="M-7-15.5V-8.5" stroke="#9c9980"/><path d="M-6-14.5H-4a2.5 2.5 0 0 1 0 5H-6Z" fill="#b4bea0"/></g>}
      {k==='edible'&&<g><rect x="-14" y="-18" width="13" height="10" rx="2" fill="#80614c" stroke="#5c4a3c" strokeWidth="1.2"/><path d="M-11-15H-9M-5-12H-3M-11-10H-9" stroke="#bb9467" strokeWidth="1.8"/></g>}
      {k==='blotter'&&<g><path d="M-13-18H-2V-7H-13Z" fill="#eadcbe" stroke="#a493ae" strokeWidth="1.3"/><path d="M-10-15L-5-10M-5-15L-10-10" stroke="#a493ae" strokeWidth="1.2"/></g>}
      {k==='mushroom'&&<g><path d="M-8-10V-4H-4V-11" fill="#f1ddba" stroke="#b89672"/><path d="M-16-11Q-8-25 1-11Z" fill="#b68b70" stroke="#85684f" strokeWidth="1.2"/><path d="M-12-14H-10M-7-17H-5" stroke="#e6c9aa" strokeWidth="2"/></g>}
      {k==='buccal'&&<circle cx="-7" cy="-12" r="4.5" fill="#eadbc4" stroke="#baa98b" strokeWidth="1.2"/>}
      {k==='food'&&<g><path d="M0 0L-6-10" stroke="#9a9a8a" strokeWidth="3"/><ellipse cx="-8" cy="-13" rx="7" ry="4" fill="#d9b879" stroke="#a68f68" strokeWidth="1.3"/><path d="M-12-14L-8-16L-4-13" stroke="#849b68" strokeWidth="2"/></g>}
    </>}
    {k==='drink'&&(id==='alcohol'?<g data-scene-prop="alcohol-bottle"><path d="M-10-18H-3V-6Q5-2 5 5V27Q5 30 2 30H-16Q-19 30-19 27V5Q-19-2-10-6Z" fill="#987443" stroke="#725b3d" strokeWidth="2"/><path d="M-14 5V24" stroke="#c5a578" strokeWidth="2"/><rect x="-18" y="9" width="22" height="12" rx="1" fill="#dfd2ac"/><path d="M-12 15H-2" stroke="#9c8860" strokeWidth="2"/><path d="M-11-18H-2" stroke="#594b36" strokeWidth="3"/></g>:<g data-scene-prop="coffee-mug"><path d="M-17-15H4V5Q2 10-2 10H-11Q-17 8-17 3Z" fill="#e9d4a8" stroke="#bc9e72" strokeWidth="2"/><path d="M4-10H10V1H4" stroke="#bc9e72" strokeWidth="3" fill="none"/><ellipse cx="-7" cy="-14" rx="9" ry="2" fill="#86694f"/></g>)}
    {k==='oral-liquid'&&<g transform="translate(-2 -3)"><path d="M-15-12H3L0 9H-12Z" fill="#e5e3d2" stroke="#9eaa9b" strokeWidth="1.5"/><path d="M-13-4H1L-1 7H-11Z" fill="#b6a4c1"/><ellipse cx="-6" cy="-12" rx="9" ry="2" fill="#d5d4c4"/><path d="M-9-7H-6M-9-2H-6" stroke="#a6ad9e" strokeWidth="1"/></g>}
    {k==='inhaler'&&<g data-scene-prop="inhaler"><rect {...inhalerGeometry.canister} rx="3" fill="#c2d0ce" stroke="#7b9693" strokeWidth="2"/><path d={inhalerBootPath()} fill="#8ba8a5" stroke="#6e8d8a" strokeWidth="2"/></g>}
    {k==='dry-powder-inhaler'&&<g data-scene-prop="dry-powder-inhaler"><path d="M-12-17H0V-9H-12Z" fill="#d9d6c7" stroke="#9c9e8f" strokeWidth="1.5"/><path d="M-2-12Q18-16 21 2Q22 20 5 23Q-11 20-12 6Q-12-5-2-12Z" fill="#b9adbd" stroke="#8d8296" strokeWidth="2"/><path d="M-7 7Q0 19 14 12" fill="none" stroke="#ddd2da" strokeWidth="3"/></g>}
    {k==='nebulizer'&&<g data-scene-prop="nebulizer-mouthpiece"><path d="M-12-17H4V-11H-12Z" fill="#d6e0d8" stroke="#8fa499" strokeWidth="1.5"/><path d="M-1-11H11V13Q5 18-1 13Z" fill="#d6e0d8" fillOpacity=".9" stroke="#8fa499" strokeWidth="1.5"/><path d="M3 16V22" stroke="#9fb7aa" strokeWidth="3"/></g>}
    {(k==='nasal-spray'||k==='oral-spray')&&<g><rect x="-9" y="-9" width="18" height="28" rx="4" fill="#c0d3cd" stroke="#7f9b93" strokeWidth="1.5"/><rect x="-6" y="-16" width="12" height="8" rx="2" fill="#ece8d7" stroke="#9fae9f"/><path d={k==='nasal-spray'?'M-3-16L-8-25H-4L3-16Z':'M-4-16H-16V-10H3V-16Z'} fill="#dedfcc" stroke="#9fae9f"/><path d="M-5 4H5" stroke="#829c92" strokeWidth="3"/></g>}
    {k==='nasal-powder'&&<g><path d="M8 16L-14-28" stroke="#8d8b85" strokeWidth="6"/><path d="M6 15L-15-27" stroke="#d8d4bf" strokeWidth="3"/><path d="M-16-28L-12-30" stroke="#787973" strokeWidth="1.5"/></g>}
    {k==='vapor'&&<g><path d="M-14-14H-3L4-5V17H-7V-8H-14Z" fill="#a8b5a3" stroke="#718979" strokeWidth="1.7"/><rect x="-5" y="0" width="7" height="12" rx="2" fill="#d8d9c5"/></g>}
    {k==='gas-balloon'&&<g><path d="M-12-14Q4-14 14-6L24 1L20 13Q7 3-1-2L-12-10Z" fill="#d8baa6" stroke="#ad8f7f" strokeWidth="1.5"/><ellipse cx="39" cy="17" rx={23-gasUsed*5} ry={29-gasUsed*6} fill="#d8baa6" stroke="#ad8f7f" strokeWidth="1.8"/></g>}
    {k==='gas-mask'&&<path d="M-34-24Q-22-35-10-24L-9-6Q-23 2-35-6Z" fill="#bfd7d1" fillOpacity=".65" stroke="#849f97" strokeWidth="2"/>}
    {k==='patch'&&<rect x="-20" y="-8" width="16" height="16" rx="3" fill="#e9d9b9" stroke="#b29d77" strokeWidth="1.4"/>}
    {k==='topical'&&<g><path d="M-10-6H17V6H-10L-13 3V-3Z" fill="#e3dec4" stroke="#9fa18b" strokeWidth="1.5"/><path d="M-13-3H-16V3H-13Z" fill="#c4c7ae" stroke="#9fa18b"/><path d="M7-5V5" stroke="#9bab8b" strokeWidth="4"/></g>}
    {k==='face-cream'&&<g><path d="M0 1L-12-17" stroke="#e8bb93" strokeWidth="5"/><ellipse cx="-12" cy="-17" rx="3" ry="2" fill="#f3ead8" stroke="#d0c5b0" strokeWidth=".8"/></g>}
    {['pen','subcutaneous','injection'].includes(k)&&<g><path d="M-18 0H-9" stroke="#b6b9a9" strokeWidth="3"/><rect x="-9" y="-5" width="30" height="10" rx="3" fill={k==='pen'?'#aabdb0':'#d9e3d9'} stroke="#829a89" strokeWidth="1.5"/><path d="M3-4V4" stroke="#b3cfbd" strokeWidth="6"/><path d="M21 0H27M27-5V5" stroke="#829a89" strokeWidth="2"/></g>}
    {k==='research'&&<g><rect x="-8" y="-19" width="16" height="30" rx="3" fill="#dbe5da" fillOpacity=".8" stroke="#849d8b" strokeWidth="1.7"/><rect x="-9" y="-24" width="18" height="7" rx="2" fill="#a294b3" stroke="#80738e"/><path d="M-5 2H5V8H-5Z" fill="#c4b4cf"/><rect x="-6" y="-11" width="12" height="9" rx="1" fill="#f2ead6"/><path d="M-3-6H3" stroke="#9c998b" strokeWidth="1.5"/></g>}
  </g>;
}

/** Applied material follows its body surface after the hand withdraws. */
export function AppliedExposure({spec,pose,contextual}:Props){
  const amount=attachedExposureAmount(pose.t,contextual);
  const arm=solveCharacterArm('left',pose.leftHand),target=exposureSkinPoint(spec,arm);
  const upper=spec.site==='upper-arm';
  const a=upper?arm.shoulder:arm.elbow,b=upper?arm.elbow:arm.hand;
  const angle=Math.atan2(b[1]-a[1],b[0]-a[0])*180/Math.PI-90;
  if(spec.kind==='patch')return <g data-applied-exposure="patch" transform={`translate(${target.join(' ')}) rotate(${angle})`} opacity={amount}><rect x="-8" y="-8" width="16" height="16" rx="3" fill="#e9d9b9" stroke="#b29d77" strokeWidth="1.4"/><rect x="-4" y="-4" width="8" height="8" rx="2" fill="#d7c5a2"/></g>;
  if(spec.kind==='topical')return <g data-applied-exposure="cream" transform={`translate(${target.join(' ')}) rotate(${angle})`} opacity={amount*.8}><ellipse rx="5.5" ry="9" fill="#f1e7d3"/><path d="M-2-5L2 5" stroke="#d4cbb7" strokeWidth="1.4"/></g>;
  return null;
}

export function ExposedSkin({spec,pose}:Pick<Props,'spec'|'pose'>){
  if(['pen','subcutaneous'].includes(spec.kind))return <g data-exposed-skin="abdomen" opacity={pose.intake}><path d="M388 271Q402 265 416 271V289H388Z" fill="#eabd96" stroke="#c89d77" strokeWidth="1.5"/><path d="M383 272Q402 262 419 271" fill="none" stroke="#b6bf9b" strokeWidth="4"/><path d="M401 281v2" stroke="#be8f6c" strokeWidth="1.5"/></g>;
  if(spec.kind==='injection'&&spec.site==='hip')return <g data-exposed-skin="hip" opacity={pose.intake}><path d="M414 289Q427 285 432 296L429 308H415Z" fill="#eabd96" stroke="#c89d77" strokeWidth="1.5"/><path d="M412 287Q427 283 434 293" stroke="#a9abae" strokeWidth="3" fill="none"/></g>;
  return null;
}

export function FaceApplication({spec,pose,contextual}:Props){const u=Math.max(0,Math.min(1,(10-pose.t)/2)),absorbed=u*u*(3-2*u);return spec.kind==='face-cream'?<ellipse data-applied-exposure="face-cream" cx="416" cy="194" rx="4" ry="6" fill="#f0e7d1" opacity={attachedExposureAmount(pose.t,contextual)*.7*absorbed}/>:null;}

function toWorld(p:[number,number],pose:Pose){const a=pose.bodyLean*Math.PI/180,x=p[0]-401,y=p[1]-285;return[401+x*Math.cos(a)-y*Math.sin(a)+pose.sway,285+x*Math.sin(a)+y*Math.cos(a)-pose.breath*.65+pose.bodyDrop];}
/** Infusion support stays on the floor; its flexible tube ends on the moving arm. */
export function ExposureEquipment({spec,id,pose,contextual}:Props){
  if(spec.kind==='nebulizer'){
    const [x,y]=toWorld([pose.hand[0]+3,pose.hand[1]+22],pose);
    return <g data-exposure-equipment="nebulizer" opacity={pose.contextExposureOpacity} strokeLinecap="round" strokeLinejoin="round"><rect x="476" y="338" width="57" height="26" rx="7" fill="#d6ddd0" stroke="#94a392" strokeWidth="2"/><path d="M491 346H512M491 351H512M491 356H512" stroke="#a4b09e" strokeWidth="1.5"/><circle cx="522" cy="347" r="2" fill="#8ea984"/><path d={`M479 350Q452 355 ${x} ${y}`} fill="none" stroke="#9fb7aa" strokeWidth="2.5"/></g>;
  }
  if(spec.kind!=='infusion')return null;
  const amount=Math.max(pose.intake,attachedExposureAmount(pose.t,contextual));
  const target=exposureSkinPoint(spec,solveCharacterArm('left',pose.leftHand)),[x,y]=toWorld(target,pose);
  return <g data-exposure-prop="infusion" opacity={amount} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M304 137H323V359M310 365L323 359L336 365" stroke="#83958a" strokeWidth="4"/>
    <path d="M302 145H316V183Q309 190 302 183Z" fill="#d5e0d3" stroke="#91a38f" strokeWidth="1.5"/><path d="M305 161H313V181H305Z" fill="#b3c8bc"/>
    <path d={`M309 188V213Q309 ${y+10} ${x} ${y}`} stroke="#a9beb1" strokeWidth="2.5"/>
    <g transform={`translate(${x} ${y})`}><rect x="-6" y="-4" width="12" height="8" rx="2" fill="#e9dfc7" stroke="#b6ac93" strokeWidth="1"/><path d="M-6 0H2" stroke="#89a2a1" strokeWidth="2.5"/></g>
  </g>;
}

export function LeftExposure({spec,pose,left}:Props&{left:[number,number]}){
  if(!['food','nasal-powder'].includes(spec.kind))return null;
  return <g data-exposure-source={spec.kind} transform={`translate(${left.join(' ')})`} opacity={pose.contextExposureOpacity}>
    {spec.kind==='food'?<><ellipse cx="-8" cy="1" rx="20" ry="5" fill="#e4dfca" stroke="#aaa58f" strokeWidth="1.5"/><path d="M-20-2Q-11-13 1-3" fill="#95ab7d"/><path d="M-12-2Q0-12 6-2" fill="#c8ae78"/></>:<><path d="M-22-8L1-10L7 7L-17 10Z" fill="#e8e3d5" stroke="#b0a896" strokeWidth="1.2"/><path d="M-22-8L-10 1L1-10M-17 10L-10 1L7 7" fill="none" stroke="#bcb6a4" strokeWidth="1"/><ellipse cx="-9" cy="1" rx="6" ry="3" fill="#f7f4e9" stroke="#ccc7b9" strokeWidth=".8"/></>}
    <path d="M-4 5H4" stroke="#e8bb93" strokeWidth="6" strokeLinecap="round"/>
  </g>;
}

/** A separate helper delivers rescue medicine or the selected clinical injection. */
export function AssistedExposure({spec,id,pose,contextual}:Props){
  const rescue=id==='naloxone',hip=spec.kind==='injection'&&spec.site==='hip';
  const clinical=rescue||id==='nandrolone',shirt=clinical?'#bdcec5':'#b8a9bd',trim=clinical?'#819c92':'#8d7d95',handColor=clinical?'#d3e4da':'#c69c80';
  if(!rescue&&!hip)return null;
  let contact:[number,number]=rescue?[400,192]:[424,299];
  if(rescue){const a=pose.tilt*Math.PI/180,dy=contact[1]-214;contact=[400-dy*Math.sin(a),214+dy*Math.cos(a)];}
  const [tx,ty]=toWorld(contact,pose),target:[number,number]=[tx+(rescue?8:18),ty+(rescue?25:0)];
  const i=pose.intake,hand:[number,number]=[520+(target[0]-520)*i,280+(target[1]-280)*i];
  const elbow=solveArm([500,235],hand,38,52,-1).elbow;
  const ease=(n:number)=>{const v=Math.max(0,Math.min(1,n));return v*v*(3-2*v);};
  const helperOpacity=ease((pose.t-2.5)/1.5)*(1-ease((pose.t-8.2)/1));
  return <g data-assisted-exposure={rescue?'rescue':clinical?'clinical-injection':'nonmedical-injection'} opacity={helperOpacity} strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="516" cy="364" rx="27" ry="6" fill="#8b9080" opacity=".16"/>
    <path d="M499 282H531L529 354H518L515 302L511 354H498Z" fill="#8c9395" stroke="#747d80" strokeWidth="2"/>
    <path d="M497 354H511V363H490V359ZM519 354H531L538 360V363H519Z" fill="#6f7977"/>
    <path d="M506 216H524L535 229V284H494V230Z" fill={shirt} stroke={trim} strokeWidth="2"/>
    <path d="M506 216V207H523V218" fill="#b78b72"/>
    <path d="M500 181Q515 168 530 181V202Q528 213 516 215Q503 212 500 201Z" fill="#c69c80" stroke="#a77e65" strokeWidth="1.4"/>
    <path d="M497 188V179Q511 165 529 178L533 190H526L523 180L505 186V193Z" fill="#736a60"/>
    <path d="M505 195H508M519 195H522M509 205H519" stroke="#6f5d4c" strokeWidth="2"/>
    <path d="M531 230L542 264L535 283" fill="none" stroke={trim} strokeWidth="14"/>
    <path d="M531 230L542 264L535 283" fill="none" stroke={shirt} strokeWidth="10"/>
    <circle cx="535" cy="283" r="6" fill={handColor} stroke={trim}/>
    <path d={`M500 235L${elbow.join(' ')}L${hand.join(' ')}`} fill="none" stroke={trim} strokeWidth="14"/>
    <path d={`M500 235L${elbow.join(' ')}L${hand.join(' ')}`} fill="none" stroke={shirt} strokeWidth="10"/>
    <g transform={`translate(${hand.join(' ')})`}>
      <HeldExposure spec={spec} id={rescue?'ipratropium':'clinical-helper'} pose={pose} contextual={contextual}/>
      {hip&&<g data-exposure-prop="injection"><path d="M-18 0H-9" stroke="#b6b9a9" strokeWidth="3"/><rect x="-9" y="-5" width="30" height="10" rx="3" fill="#d9e3d9" stroke="#829a89" strokeWidth="1.5"/><path d="M21 0H27M27-5V5" stroke="#829a89" strokeWidth="2"/></g>}
      <ellipse cx="1" cy="2" rx="7" ry="6" fill={handColor} stroke={trim} strokeWidth="1"/>
    </g>
  </g>;
}
