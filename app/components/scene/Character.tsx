import { sampleScene, solveArm } from './timeline';

type Pose = ReturnType<typeof sampleScene>;
export default function Character({ pose, motion, intake, mushroom = false }: { pose: Pose; motion: string; intake: 'drink' | 'oral' | 'symbolic'; mushroom?: boolean }) {
  const hand = intake === 'symbolic' ? [465 + pose.tremor, 267] as [number, number] : pose.hand;
  const right = solveArm([422, 225], hand);
  const left = solveArm([378, 225], pose.leftHand, 36, 36, 1);
  const blinking = Math.max(.18, pose.blink - pose.eyelid);
  return <g className="scene-character" aria-hidden="true" shapeRendering="geometricPrecision">
    <ellipse cx="400" cy="365" rx="39" ry="8" fill="#a58b76" opacity=".19"/>
    {motion === 'dissociate' && <path d="M388 148H414L431 170V207L443 231L439 286L425 354H408V293H392V354H376L365 286L362 231L377 207V170Z" fill="#bca9d2" opacity={pose.ghost} transform={`translate(${12 + pose.drift * 3} ${-4 - pose.drift})`}/>}
    {/* Feet remain planted. The torso pivots at the hip, never at the floor. */}
    <path d="M378 281H424L429 309L419 352H404L401 311L394 352H377L374 309Z" fill="#7d7f87" stroke="#656773" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M383 299L383 345M414 300L412 345" stroke="#9b9ba4" strokeWidth="5"/>
    <path d="M375 347H394V361H365V355H374ZM404 347H421L430 355V361H404Z" fill="#6f655e" stroke="#625d56" strokeWidth="2"/>
    <path d="M365 361H394M404 361H431" stroke="#f0e4cc" strokeWidth="4"/>
    <g transform={`translate(${pose.sway} ${-pose.breath * .65}) rotate(${pose.gut * 3} 401 285)`}>
      {/* The same calculated joints draw the sleeve, forearm, cuff and attached prop. */}
      <path d={`M378 225L${left.elbow.join(' ')}`} fill="none" stroke="#718a70" strokeWidth="21" strokeLinecap="round"/>
      <path d="M384 213H414L428 225L425 282L419 291H380L372 282L374 228Z" fill="#91a78b" stroke="#71896d" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M382 232V276M381 283H419" stroke="#aabd9e" strokeWidth="5"/>
      <path d="M387 213V221Q400 228 413 219V212" fill="#d5a780"/>
      <path d="M386 221Q400 231 415 221" stroke="#617d66" strokeWidth="4" fill="none"/>
      <path d={`M${left.elbow.join(' ')}L${left.hand.join(' ')}`} fill="none" stroke="#91a78b" strokeWidth="18" strokeLinecap="round"/>
      <circle cx={left.hand[0]} cy={left.hand[1]} r="9" fill="#e9bb96" stroke="#cf9f7d" strokeWidth="1"/>
      <path d={`M422 225L${right.elbow.join(' ')}`} fill="none" stroke="#718a70" strokeWidth="22" strokeLinecap="round"/>
      <path d={`M422 225L${right.elbow.join(' ')}`} fill="none" stroke="#96ac8e" strokeWidth="16" strokeLinecap="round"/>
      <path d={`M${right.elbow.join(' ')}L${right.hand.join(' ')}`} fill="none" stroke="#91a78b" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
      <path d={`M${right.elbow[0] + 1} ${right.elbow[1] - 3}L${right.hand[0] - 4} ${right.hand[1] - 3}`} fill="none" stroke="#b1c0a2" strokeWidth="3" strokeLinecap="round"/>
      <g transform={`rotate(${pose.tilt} 400 214)`}>
        <path d="M377 165V153H386V145H414V151H423V161H429V190H424V204H416V214H386V207H377V195H371V171Z" fill="#665a51"/>
        <path d="M382 168H390V161H411V167H420V192H416V203H409V210H390V204H382V195H377V177H382Z" fill="#eabd96"/>
        <path d="M382 165H391V171H382V179H376V168M409 157H417V164H424V174H417V168H409Z" fill="#665a51"/>
        <rect x="376" y="184" width="7" height="11" rx="3" fill="#ddb18c"/><rect x="417" y="184" width="7" height="11" rx="3" fill="#ddb18c"/>
        <ellipse cx="386" cy="193" rx="5" ry="3" fill="#d99485" opacity={.35 + pose.heat * .5}/><ellipse cx="414" cy="193" rx="5" ry="3" fill="#d99485" opacity={.35 + pose.heat * .5}/>
        <ellipse cx="389" cy="184" rx="2.5" ry={3.4 * blinking} fill="#514b43"/><ellipse cx="409" cy="184" rx="2.5" ry={3.4 * blinking} fill="#514b43"/>
        <path d={`M385 ${177 + pose.worry * 2}L393 177M405 177L413 ${177 + pose.worry * 2}`} stroke="#705d4e" strokeWidth="2" strokeLinecap="round"/>
        <path d="M398 187V192H402" fill="none" stroke="#c79879" strokeWidth="2" strokeLinecap="round"/>
        {pose.intake > .85 && intake !== 'symbolic' ? <ellipse cx="402" cy="199" rx="3.5" ry="3" fill="#916750"/> : <path d={`M394 200Q401 ${203 - (pose.adverse * 6)} 408 200`} fill="none" stroke="#926d56" strokeWidth="2" strokeLinecap="round"/>}
      </g>
      <g transform={`translate(${right.hand.join(' ')}) rotate(${-pose.intake * (intake === 'drink' ? 16 : 8)})`}>
        {intake === 'drink' && <g transform="translate(-7 -15)"><path d="M0 0H21V20Q19 25 15 25H6Q0 23 0 18Z" fill="#e9d4a8" stroke="#bc9e72" strokeWidth="2"/><path d="M21 5H27V16H21" stroke="#bc9e72" strokeWidth="3" fill="none"/><ellipse cx="10" cy="1" rx="10" ry="2" fill="#86694f"/></g>}
        <ellipse cx="0" cy="1" rx="8" ry="7" fill="#e8bb93" stroke="#cf9f7d" strokeWidth="1"/>
        {intake === 'oral' && <g opacity={pose.oralProp}>{mushroom ? <g transform="translate(-9 -12)"><rect x="2" y="3" width="4" height="7" fill="#efddbb"/><path d="M-1 3Q4-6 10 3Z" fill="#b49587"/></g> : <rect x="-8" y="-12" width="7" height="4" rx="2" fill="#f6efda"/>}</g>}
      </g>
      {pose.gut > 0 && <g opacity={pose.gut * .7} fill="none" stroke="#d5ac7b" strokeWidth="2"><ellipse cx="400" cy="266" rx={13 + pose.drift} ry="10"/><ellipse cx="400" cy="266" rx={19 + pose.drift} ry="15" opacity=".4"/></g>}
    </g>
    {intake === 'symbolic' && <g opacity={pose.intake} fill="#b6a3c9"><circle cx={486 - pose.intake * 22} cy={223 - pose.intake * 20} r="4"/><circle cx={498 - pose.intake * 19} cy={240 - pose.intake * 12} r="2.5"/><path d="M487 216L480 211M498 229L505 229" stroke="#c6b8d3" strokeWidth="2"/></g>}
    {/* Side effects occupy the space around the character, not over props or labels. */}
    {['heat','panic'].includes(motion) && <g opacity={pose.heat} fill="#93b9c0">{[0,1,2].map(i => {const progress=((pose.t * 17 + i * 19) % 47)/47; const y=188 + progress*47;return <path key={i} d={`M${i%2?433:365} ${y}q-6 8 0 10q6-2 0-10Z`} opacity={Math.sin(progress*Math.PI) ** 2}/>;})}</g>}
    {motion === 'panic' && <g opacity={pose.adverse * .65} fill="none" stroke="#b69bba" strokeWidth="2"><ellipse cx="400" cy="176" rx={50 + pose.drift * 2} ry={44 + pose.drift}/><ellipse cx="400" cy="176" rx={58 + pose.drift * 2} ry={51 + pose.drift} opacity=".35"/></g>}
    {motion === 'heat' && <g opacity={pose.adverse * .55} stroke="#d2947b" fill="none" strokeWidth="2"><path d={`M350 273q-8-12 0-23t0-23`} transform={`translate(0 ${-pose.drift * 2})`}/><path d="M449 310q8-12 0-23t0-23" transform={`translate(0 ${-pose.drift * 2})`}/></g>}
    {motion === 'craving' && <g opacity={pose.adverse * .65} transform={`translate(468 183) rotate(${pose.orbit} 0 0)`} fill="none" stroke="#b4a1bf" strokeWidth="2"><path d="M-11 0a11 11 0 1 1 11 11M0 11l-4-4m4 4l5-4"/></g>}
  </g>;
}
