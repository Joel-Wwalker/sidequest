import { useId } from 'react';
import { sampleScene, smooth } from './timeline';
import { solveCharacterArm } from './arm-geometry';
import { getCatalogSeed } from '../../data/catalog/index';
import ContextTaskProps from './ContextTaskProps';
import ContextCharacterEffects from './ContextCharacterEffects';
import { contextPropVisibility } from './prop-visibility';
import { inhalerGeometry, inhalerBootPath } from './prop-geometry';

type Pose = ReturnType<typeof sampleScene>;
function Arm({arm,accent,dark,light}:{arm:ReturnType<typeof solveCharacterArm>;accent:string;dark:string;light:string}){
  const {shoulder:s,elbow:e,hand:h}=arm;
  const distance=Math.hypot(h[0]-e[0],h[1]-e[1]);
  const u=[(h[0]-e[0])/distance,(h[1]-e[1])/distance];
  const cuff=[e[0]+u[0]*5,e[1]+u[1]*5];
  const normal=[-u[1],u[0]];
  return <g data-character-arm="articulated">
    <path d={`M${e.join(' ')}L${h.join(' ')}`} fill="none" stroke="#cf9f7d" strokeWidth="14" strokeLinecap="round"/>
    <path d={`M${e.join(' ')}L${h.join(' ')}`} fill="none" stroke="#e9bb96" strokeWidth="11" strokeLinecap="round"/>
    <path d={`M${s.join(' ')}L${e.join(' ')}L${cuff.join(' ')}`} fill="none" stroke={dark} strokeWidth="21" strokeLinecap="round" strokeLinejoin="round"/>
    <path d={`M${s.join(' ')}L${e.join(' ')}L${cuff.join(' ')}`} fill="none" stroke={accent} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
    <path d={`M${cuff[0]+normal[0]*7} ${cuff[1]+normal[1]*7}L${cuff[0]-normal[0]*7} ${cuff[1]-normal[1]*7}`} stroke={light} strokeWidth="3" strokeLinecap="round"/>
  </g>;
}
export default function Character({ pose, motion, intake, mushroom = false, accent = '#91a78b', substanceKey = '' }: { pose: Pose; motion: string; intake: 'drink' | 'oral' | 'symbolic' | 'inhaler' | 'topical'; mushroom?: boolean; accent?: string; substanceKey?: string }) {
  const eyeId = useId().replace(/:/g, '');
  const context = getCatalogSeed(substanceKey);
  const hand = intake === 'symbolic' ? pose.symbolicHand : pose.hand;
  const right = solveCharacterArm('right', hand);
  const left = solveCharacterArm('left', pose.leftHand);
  const blinking = Math.max(.18, pose.blink - pose.eyelid);
  const dark = `color-mix(in srgb, ${accent}, #455147 26%)`;
  const light = `color-mix(in srgb, ${accent}, #fff7df 25%)`;
  const openMouth = Math.max(pose.mouthOpen, intake === 'symbolic' || intake === 'topical' ? 0 : smooth((pose.intake-.75)/.25));
  const beverageOpacity=contextPropVisibility(context,pose).beverage;
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
      <Arm arm={left} accent={accent} dark={dark} light={light}/>
      <Arm arm={right} accent={accent} dark={dark} light={light}/>
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
        {context&&<ContextCharacterEffects seed={context} pose={pose} left={left.hand} right={right.hand} part="face"/>}
      </g>
      {['cocaine','2c-b'].includes(substanceKey) && <g transform={`translate(405 239) scale(${1+pose.adverse*Math.sin(pose.t*9)*.12})`} opacity={pose.adverse*.7}><path d="M0-3C-8-11-15 1 0 11C15 1 8-11 0-3Z" fill="#c88577"/><path d="M-7 2H-3L0-3L3 7L5 2H8" stroke="#fff0d8" strokeWidth="1.5" fill="none"/></g>}
      {!context&&pose.gut > 0 && <g opacity={pose.gut * .7} fill="none" stroke="#d5ac7b" strokeWidth="2"><ellipse cx="400" cy="266" rx={13 + pose.drift} ry="10"/><ellipse cx="400" cy="266" rx={19 + pose.drift} ry="15" opacity=".4"/></g>}
      {context && <ContextTaskProps seed={context} pose={pose} left={left.hand} right={right.hand}/>}
      {context&&<ContextCharacterEffects seed={context} pose={pose} left={left.hand} right={right.hand} part="props"/>}
      <circle cx={left.hand[0]} cy={left.hand[1]} r="9" fill="#e9bb96" stroke="#cf9f7d" strokeWidth="1"/>
      <g transform={`translate(${right.hand.join(' ')}) rotate(${-pose.intake * (intake === 'inhaler' ? 0 : intake === 'drink' ? 16 : 8)})`}>
        {intake==='inhaler'&&<g data-scene-prop="inhaler" opacity={pose.contextExposureOpacity}><rect {...inhalerGeometry.canister} rx="3" fill="#c2d0ce" stroke="#7b9693" strokeWidth="2"/><path d={inhalerBootPath()} fill="#8ba8a5" stroke="#6e8d8a" strokeWidth="2"/></g>}
        {intake==='topical'&&<g data-scene-prop="topical-tube" opacity={pose.contextExposureOpacity}><path d="M-14-17H7L3 13H-9Z" fill="#d9d7b5" stroke="#9b9e80" strokeWidth="2"/><path d="M-9 14H3V19H-9Z" fill="#9aa88c"/><path d="M-10-8H3M-10-3H2" stroke="#a5b395" strokeWidth="2"/></g>}
        {intake === 'drink' && <g opacity={beverageOpacity}>{substanceKey === 'alcohol'
          ? <g data-scene-prop="alcohol-bottle"><path d="M-10-18H-3V-6Q5-2 5 5V27Q5 30 2 30H-16Q-19 30-19 27V5Q-19-2-10-6Z" fill="#987443" stroke="#725b3d" strokeWidth="2"/><path d="M-14 5V24" stroke="#c5a578" strokeWidth="2" strokeLinecap="round"/><rect x="-18" y="9" width="22" height="12" rx="1" fill="#dfd2ac"/><path d="M-12 15H-2" stroke="#9c8860" strokeWidth="2"/><path d="M-11-18H-2" stroke="#594b36" strokeWidth="3" strokeLinecap="round"/></g>
          : <g data-scene-prop="coffee-mug" transform="translate(-7 -15)"><path d="M0 0H21V20Q19 25 15 25H6Q0 23 0 18Z" fill="#e9d4a8" stroke="#bc9e72" strokeWidth="2"/><path d="M21 5H27V16H21" stroke="#bc9e72" strokeWidth="3" fill="none"/><ellipse cx="10" cy="1" rx="10" ry="2" fill="#86694f"/></g>}</g>}
        <ellipse cx="0" cy="1" rx="8" ry="7" fill="#e8bb93" stroke="#cf9f7d" strokeWidth="1"/>
        {intake === 'oral' && <g opacity={pose.oralProp*pose.contextExposureOpacity}>{mushroom ? <g transform="translate(-9 -12)"><rect x="2" y="3" width="4" height="7" fill="#efddbb"/><path d="M-1 3Q4-6 10 3Z" fill="#b49587"/></g> : <><path d="M-2-3L-4-9" stroke="#e8bb93" strokeWidth="4" strokeLinecap="round"/><rect x="-8" y="-12" width="7" height="4" rx="2" fill="#f6efda"/></>}</g>}
      </g>
      {context&&<ContextCharacterEffects seed={context} pose={pose} left={left.hand} right={right.hand} part="hands"/>}
    </g>
    {intake === 'symbolic' && <g opacity={pose.intake} fill="#b6a3c9"><circle cx={486 - pose.intake * 22} cy={223 - pose.intake * 20} r="4"/><circle cx={498 - pose.intake * 19} cy={240 - pose.intake * 12} r="2.5"/><path d="M487 216L480 211M498 229L505 229" stroke="#c6b8d3" strokeWidth="2"/></g>}
    {/* Side effects occupy the space around the character, not over props or labels. */}
    {motion === 'heat' && <g opacity={pose.adverse * .55} stroke="#d2947b" fill="none" strokeWidth="2"><path d={`M350 273q-8-12 0-23t0-23`} transform={`translate(0 ${-pose.drift * 2})`}/><path d="M449 310q8-12 0-23t0-23" transform={`translate(0 ${-pose.drift * 2})`}/></g>}
  </g>;
}
