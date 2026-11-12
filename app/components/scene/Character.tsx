import { useId } from 'react';
import { sampleScene, smooth } from './timeline';
import { solveCharacterArm } from './arm-geometry';
import { getCatalogSeed } from '../../data/catalog/index';
import ContextTaskProps from './ContextTaskProps';
import ContextCharacterEffects from './ContextCharacterEffects';
import { getExposure } from './exposure';
import { mouthKinds, oralKinds } from './exposure-motion';
import {HeldExposure, AppliedExposure, ExposedSkin, FaceApplication, ExposureEquipment, AssistedExposure, LeftExposure} from './ExposureProps';

type Pose = ReturnType<typeof sampleScene>;
function Arm({arm,accent,dark,light,shortSleeve=false}:{arm:ReturnType<typeof solveCharacterArm>;accent:string;dark:string;light:string;shortSleeve?:boolean}){
  const {shoulder:s,elbow:e,hand:h}=arm;
  const distance=Math.hypot(h[0]-e[0],h[1]-e[1]);
  const u=[(h[0]-e[0])/distance,(h[1]-e[1])/distance];
  const cuff=shortSleeve?[s[0]+(e[0]-s[0])*.25,s[1]+(e[1]-s[1])*.25]:[e[0]+u[0]*5,e[1]+u[1]*5];
  const sleeve=shortSleeve?`M${s.join(' ')}L${cuff.join(' ')}`:`M${s.join(' ')}L${e.join(' ')}L${cuff.join(' ')}`;
  const normal=[-u[1],u[0]];
  return <g data-character-arm="articulated">
    <path d={`M${(shortSleeve?s:e).join(' ')}L${e.join(' ')}L${h.join(' ')}`} fill="none" stroke="#cf9f7d" strokeWidth="14" strokeLinecap="round"/>
    <path d={`M${(shortSleeve?s:e).join(' ')}L${e.join(' ')}L${h.join(' ')}`} fill="none" stroke="#e9bb96" strokeWidth="11" strokeLinecap="round"/>
    <path d={sleeve} fill="none" stroke={dark} strokeWidth="21" strokeLinecap="round" strokeLinejoin="round"/>
    <path d={sleeve} fill="none" stroke={accent} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    <path d={`M${cuff[0]+normal[0]*7} ${cuff[1]+normal[1]*7}L${cuff[0]-normal[0]*7} ${cuff[1]-normal[1]*7}`} stroke={light} strokeWidth="3" strokeLinecap="round"/>
  </g>;
}
export default function Character({ pose, motion, accent = '#91a78b', substanceKey }: { pose: Pose; motion: string; accent?: string; substanceKey: string }) {
  const eyeId = useId().replace(/:/g, '');
  const context = getCatalogSeed(substanceKey);
  const spec=getExposure(substanceKey),hand=pose.hand;
  const exposure={spec,id:substanceKey,pose,contextual:!!context};
  const right = solveCharacterArm('right', hand);
  const left = solveCharacterArm('left', pose.leftHand);
  const blinking = Math.max(.18, pose.blink - pose.eyelid);
  const dark = `color-mix(in srgb, ${accent}, #455147 26%)`;
  const light = `color-mix(in srgb, ${accent}, #fff7df 25%)`;
  const openMouth = Math.max(pose.mouthOpen, mouthKinds.includes(spec.kind) ? smooth((pose.intake-.75)/.25) : 0);
  return <g className="scene-character" aria-hidden="true" shapeRendering="geometricPrecision">
    <ellipse cx="400" cy="365" rx="39" ry="8" fill="#a58b76" opacity=".19"/>
    {motion === 'dissociate' && <path d="M388 148H414L431 170V207L443 231L439 286L425 354H408V293H392V354H376L365 286L362 231L377 207V170Z" fill="#bca9d2" opacity={pose.ghost} transform={`translate(${12 + pose.drift * 3} ${-4 - pose.drift})`}/>}
    {/* Feet remain planted. The torso pivots at the hip, never at the floor. */}
    <path d="M378 281H424L429 309L419 352H404L401 311L394 352H377L374 309Z" fill="#7d7f87" stroke="#656773" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M383 299L383 345M414 300L412 345" stroke="#9b9ba4" strokeWidth="5"/>
    <path d="M375 347H394V361H365V355H374Z" fill="#6f655e" stroke="#625d56" strokeWidth="2"/>
    <path d="M365 361H394" stroke="#f0e4cc" strokeWidth="4"/>
    <g transform={`rotate(${-pose.footTap*3} 405 351)`}><path d="M404 347H421L430 355V361H404Z" fill="#6f655e" stroke="#625d56" strokeWidth="2"/><path d="M404 361H431" stroke="#f0e4cc" strokeWidth="4"/></g>
    {context&&<ContextCharacterEffects seed={context} pose={pose} left={left.hand} right={right.hand} part="feet"/>}
    <g transform={`translate(${pose.sway} ${-pose.breath * .65 + pose.bodyDrop}) rotate(${pose.bodyLean} 401 285)`}>
      {/* The same calculated joints draw the sleeve, forearm, cuff and attached prop. */}
      <path d="M384 213H414L435 222Q440 225 438 238L425 282L419 291H380L372 282L362 238Q360 225 367 222Z" fill={accent} stroke={dark} strokeWidth="3" strokeLinejoin="round"/>
      <path d="M382 232V276M381 283H419" stroke={light} strokeWidth="5"/>
      <path d="M387 213V221Q400 228 413 219V212" fill="#d5a780"/>
      <path d="M386 221Q400 231 415 221" stroke={dark} strokeWidth="4" fill="none"/>
      {context&&<ContextCharacterEffects seed={context} pose={pose} left={left.hand} right={right.hand} part="body"/>}
      <ExposedSkin spec={spec} pose={pose}/><Arm arm={left} accent={accent} dark={dark} light={light} shortSleeve={spec.site==='upper-arm'}/>
      <Arm arm={right} accent={accent} dark={dark} light={light}/><AppliedExposure {...exposure}/>
      <g transform={`rotate(${pose.tilt} 400 214)`}>
        <path d="M377 165V153H386V145H414V151H423V161H429V190H424V204H416V214H386V207H377V195H371V171Z" fill="#665a51"/>
        <path d="M382 168H390V161H411V167H420V192H416V203H409V210H390V204H382V195H377V177H382Z" fill="#eabd96"/>
        <path d="M382 165H391V171H382V179H376V168M409 157H417V164H424V174H417V168H409Z" fill="#665a51"/>
        <rect x="376" y="184" width="7" height="11" rx="3" fill="#ddb18c"/><rect x="417" y="184" width="7" height="11" rx="3" fill="#ddb18c"/>
        <ellipse cx="386" cy="193" rx="5" ry="3" fill="#d99485" opacity={.35 + pose.heat * .5}/><ellipse cx="414" cy="193" rx="5" ry="3" fill="#d99485" opacity={.35 + pose.heat * .5}/>
        <ellipse cx="389" cy="184" rx="4.3" ry={4 * blinking} fill="#f6e8ce"/><ellipse cx="409" cy="184" rx="4.3" ry={4 * blinking} fill="#f6e8ce"/>
        <defs><clipPath id={`${eyeId}-left-eye`}><ellipse cx="389" cy="184" rx="4.3" ry={4 * blinking}/></clipPath><clipPath id={`${eyeId}-right-eye`}><ellipse cx="409" cy="184" rx="4.3" ry={4 * blinking}/></clipPath></defs>
        <ellipse clipPath={`url(#${eyeId}-left-eye)`} cx={389+pose.lookX*.5} cy={184+pose.lookY*.45} rx={2.2*pose.pupil} ry={3.4 * blinking} fill="#514b43"/><ellipse clipPath={`url(#${eyeId}-right-eye)`} cx={409+pose.lookX*.5} cy={184+pose.lookY*.45} rx={2.2*pose.pupil} ry={3.4 * blinking} fill="#514b43"/>
        <path d={`M385 ${177 + pose.worry * 2-pose.browLift}L393 ${177-pose.browLift}M405 ${177-pose.browLift}L413 ${177 + pose.worry * 2-pose.browLift}`} stroke="#705d4e" strokeWidth="2" strokeLinecap="round"/>
        <path d="M398 187V192H402" fill="none" stroke="#c79879" strokeWidth="2" strokeLinecap="round"/>
        <path d={`M394 200Q401 ${201+pose.smile} 408 200`} fill="none" stroke="#926d56" strokeWidth="2" strokeLinecap="round" opacity={1-openMouth}/>
        <ellipse cx="402" cy="199" rx={2+openMouth*1.5} ry={1+openMouth*2.5} fill="#916750" opacity={openMouth}/>
        {substanceKey==='mdma' && <path d="M394 204H407M397 202V205M403 202V205" stroke="#ad7e68" strokeWidth="1" opacity={pose.adverse*.7}/>}
        {/* Head-attached effects inherit both the torso and head transforms. */}
    {['heat','panic'].includes(motion) && <g opacity={pose.heat} fill="#93b9c0">{[0,1,2].map(i => {const progress=((pose.t * 17 + i * 19) % 47)/47; const y=188 + progress*47;return <path key={i} d={`M${i%2?433:365} ${y}q-6 8 0 10q6-2 0-10Z`} opacity={Math.sin(progress*Math.PI) ** 2}/>;})}</g>}
    {motion === 'panic' && <g opacity={pose.adverse * .65} fill="none" stroke="#b69bba" strokeWidth="2"><ellipse cx="400" cy="176" rx={50 + pose.drift * 2} ry={44 + pose.drift}/><ellipse cx="400" cy="176" rx={58 + pose.drift * 2} ry={51 + pose.drift} opacity=".35"/></g>}
    {motion === 'craving' && <g opacity={pose.adverse * .65} transform={`translate(468 183) rotate(${pose.orbit} 0 0)`} fill="none" stroke="#b4a1bf" strokeWidth="2"><path d="M-11 0a11 11 0 1 1 11 11M0 11l-4-4m4 4l5-4"/></g>}
        {context&&<ContextCharacterEffects seed={context} pose={pose} left={left.hand} right={right.hand} part="face"/>}<FaceApplication {...exposure}/>
      </g>
      {['cocaine','2c-b'].includes(substanceKey) && <g transform={`translate(405 239) scale(${1+pose.adverse*Math.sin(pose.t*9)*.12})`} opacity={pose.adverse*.7}><path d="M0-3C-8-11-15 1 0 11C15 1 8-11 0-3Z" fill="#c88577"/><path d="M-7 2H-3L0-3L3 7L5 2H8" stroke="#fff0d8" strokeWidth="1.5" fill="none"/></g>}
      {!context&&pose.gut > 0 && <g opacity={pose.gut * .7} fill="none" stroke="#d5ac7b" strokeWidth="2"><ellipse cx="400" cy="266" rx={13 + pose.drift} ry="10"/><ellipse cx="400" cy="266" rx={19 + pose.drift} ry="15" opacity=".4"/></g>}
      {context && substanceKey!=='naloxone' && <ContextTaskProps seed={context} pose={pose} left={left.hand} right={right.hand}/>}
      {context&&<ContextCharacterEffects seed={context} pose={pose} left={left.hand} right={right.hand} part="props"/>}
      <circle cx={left.hand[0]} cy={left.hand[1]} r="9" fill="#e9bb96" stroke="#cf9f7d" strokeWidth="1"/>
      <LeftExposure {...exposure} left={left.hand}/>
      <g transform={`translate(${right.hand.join(' ')})`}>
        {!oralKinds.includes(spec.kind)&&<HeldExposure {...exposure}/>}
        <ellipse cx="0" cy="1" rx="8" ry="7" fill="#e8bb93" stroke="#cf9f7d" strokeWidth="1"/>
        {oralKinds.includes(spec.kind)&&<HeldExposure {...exposure}/>}
      </g>
      {context&&<ContextCharacterEffects seed={context} pose={pose} left={left.hand} right={right.hand} part="hands"/>}
    </g>
    <ExposureEquipment {...exposure}/><AssistedExposure {...exposure}/>
    {/* Side effects occupy the space around the character, not over props or labels. */}
    {motion === 'heat' && <g opacity={pose.adverse * .55} stroke="#d2947b" fill="none" strokeWidth="2"><path d={`M350 273q-8-12 0-23t0-23`} transform={`translate(0 ${-pose.drift * 2})`}/><path d="M449 310q8-12 0-23t0-23" transform={`translate(0 ${-pose.drift * 2})`}/></g>}
  </g>;
}
