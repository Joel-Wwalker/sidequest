import type { CatalogSeed } from '../../data/catalog/types';
import type { SceneStory, StoryAction, StoryTarget } from '../../data/catalog/scene-stories';

type Props={seed:CatalogSeed;story:SceneStory;action:StoryAction;target:StoryTarget;risk:boolean;time:number};
const green='#6f927d',red='#b47768',cream='#f5e9d3';
const liver='M381 256Q389 248 407 255L413 261Q400 262 394 270Q382 273 381 256Z';
const uncertainEvents=new Set(['aod-9604','ipamorelin','salmeterol','ghrp-2','red-clover','biotin-vitamin-b7','folate-vitamin-b9','isotretinoin','mugwort']);
const thyroidEntries=new Set(['methimazole','propylthiouracil','levothyroxine','liothyronine','iodine']);
const thyroidSuppression=new Set(['methimazole','propylthiouracil']);
const whiteCellLoss=new Set(['clozapine','methimazole','thunder-god-vine']);
const raisedGlucose=new Set(['prednisolone','triamcinolone','ghrp-6']);
const glucoseUptake=new Set(['insulin-lispro','insulin-aspart','pioglitazone']);
const liverGlucose=new Set(['insulin-glargine','metformin']);
const cholesterolSynthesis=new Set(['atorvastatin','rosuvastatin','simvastatin','pravastatin','bempedoic-acid']);
const cellWall=new Set(['amoxicillin','ampicillin','penicillin-v','dicloxacillin','cephalexin','cefuroxime','cefdinir','cefpodoxime','ceftriaxone','cefazolin','cefepime','vancomycin','isoniazid']);

/** A quiet cutaway on the affected body region, never an external chart.
 * The accompanying selected-event copy supplies probability and time course.
 * A cutaway is not a visible symptom: silent risks leave skin and expression alone.
 */
export default function BodyProcesses({seed,story,action,target,risk,time:t}:Props){
  const mode=risk?story.downsideMode:story.responseMode;
  if(mode==='uncertain'||mode==='unknown'||mode==='follow-up'||target==='evidence'||risk&&uncertainEvents.has(seed.id))return null;
  const color=risk?red:green;
  const wave=(Math.sin(t*1.4)+1)/2;
  const quiet=['review-labs','review-interactions','recovery-check','nutrition-check','infection-watch','symptom-review','urgent-review'].includes(action);
  const flowing=(n:number,speed=10)=>((t*speed+n*17)%70)/70;
  if(risk&&seed.id==='risedronate')return null; // Selected warning is jaw-local, drawn with the head.
  if(!risk&&seed.id==='selenium')return <g data-body-process="thyroid-nutrient-support" stroke={green} strokeWidth="1.7" fill="#d7c399"><path d="M399 220Q390 214 391 226Q393 232 399 227ZM401 220Q410 214 409 226Q407 232 401 227Z"/><circle cx="395" cy="224" r="1.7" fill="#f2e5cb"/><circle cx="405" cy="224" r="1.7" fill="#f2e5cb"/></g>;
  if(!risk&&action==='recovery-check'&&['bacteria','fungus'].includes(seed.scene.motif)){
    // Enlarged schematic microbes, not a claim about an infection's location.
    // Partial contours show a process being disrupted, never instant clearance.
    const fungal=seed.scene.motif==='fungus',progress=Math.max(0,Math.min(1,(t-8.2)/4));
    return <g data-body-process={fungal?'fungal-membrane':'bacterial-process'} stroke={fungal?'#9b858f':'#8c8865'} strokeWidth="2" fill="#eadcc3" fillOpacity=".8">
      {[0,1,2].map(i=><g key={i} transform={`translate(${389+i%2*21} ${242+Math.floor(i/2)*23}) rotate(${i*28-15})`}>
        {fungal?<><ellipse rx="5.5" ry="7" strokeDasharray={`${38-progress*9} 10`}/><ellipse cx="6" cy="-6" rx="3.5" ry="4" opacity={.8-progress*.35}/></>:<rect x="-5" y="-7" width="10" height="16" rx="5" strokeDasharray={cellWall.has(seed.id)?`${42-progress*12} 14`:undefined}/>}
        <circle r="1.5" fill={fungal?'#9b858f':'#8c8865'} stroke="none"/>
      </g>)}
    </g>;
  }
  if(target==='liver'||!risk&&cholesterolSynthesis.has(seed.id))return <g data-body-process="liver" stroke={color} strokeWidth="1.5" fill="none">
    <path d={liver} fill={risk?'#d6ab8b':'#bac49d'} fillOpacity=".88"/>
    <path d="M387 256L395 258L400 256M395 258L392 265M395 258L405 260" strokeWidth="1.2" opacity=".65"/>
    {risk?<g opacity={.35+wave*.35}><path d="M385 258L391 263M390 254L398 260M398 254L405 258" strokeWidth="2.5"/><path d="M386 267L390 265M403 261L407 259"/></g>
      :<>{[0,1,2].map(i=><circle key={i} cx={407+flowing(i,5)*9} cy={263+flowing(i,5)*9} r="1.7" fill="#b9ad78" stroke="none" opacity={(1-flowing(i,5))*.7}/>)}</>}
  </g>;
  if(target==='kidneys')return <g data-body-process="kidneys" stroke={color} strokeWidth="1.6" fill="#c7b39c" fillOpacity=".85">
    <path d="M385 257Q377 257 380 269Q383 277 389 271Q390 267 386 266Q383 264 386 262Z"/>
    <path d="M415 257Q423 257 420 269Q417 277 411 271Q410 267 414 266Q417 264 414 262Z"/>
    <path d="M388 268L394 283M412 268L406 283" fill="none" opacity=".7"/>
    {[0,1].map(i=><g key={i} opacity={risk?.3+wave*.3:.8}><circle cx={i?415:385} cy={260+flowing(i,5)*10} r="2" fill={color} stroke="none"/></g>)}
  </g>;
  if(action==='infection-watch'&&whiteCellLoss.has(seed.id))return <g data-body-process="white-cell-risk" fill="none" stroke="#c6a59b" strokeWidth="1.5">
    <path d="M397 234V277M405 234V277M397 241L383 236M405 241L417 236M397 273L387 283M405 273L415 283" stroke="#e6c5b1" strokeWidth="5" strokeLinecap="round" opacity=".3"/>
    {[0,1,2,3,4].map(i=>{const p=flowing(i,5);return <ellipse key={i} cx={i%2?405:397} cy={241+p*28} rx="2.4" ry="1.4" fill="#bc8177" stroke="none"/>;})}
    <circle cx="397" cy={247+wave*12} r="4.4" fill={cream} stroke="#6b606d"/><path d={`M396 ${245+wave*12}l2 3-2 1`} stroke="#6b536f"/>
    <circle cx="405" cy="265" r="3.2" strokeDasharray="2 3" opacity=".45"/>
  </g>;
  if(action==='infection-watch')return <g data-body-process="infection-risk-region" fill="none" stroke={red} strokeWidth="1.6">
    {['omeprazole','pantoprazole'].includes(seed.id)?<><path d="M390 265H410V283H390Z" strokeLinejoin="round" fill="#d9bca3" fillOpacity=".75"/><path d="M394 269H406Q411 273 402 273H396Q391 278 404 279"/></>
      :seed.id==='canagliflozin'?<g data-local-cue="genital-region"><path d="M393 288Q400 293 407 288M394 294L391 300M406 294L409 300" opacity=".75"/><circle cx="397" cy="292" r="1.4" fill={red}/><circle cx="403" cy="292" r="1.4" fill={red}/></g>
      :<><path d="M397 237V277M405 237V277" stroke="#e6c5b1" strokeWidth="7" opacity=".8"/><circle cx="397" cy={250+wave*8} r="4.4" fill={cream}/><circle cx="405" cy={267-wave*8} r="4.4" fill={cream}/><path d="M389 246V264M413 250V268" opacity={.3+wave*.4}/></>}
  </g>;
  if(action==='glucose-check'||target==='blood'&&quiet)return <g data-body-process={action==='glucose-check'?'blood-glucose':'circulation'} fill="none" stroke={color} strokeWidth="1.5">
    <path d="M395 237V277L387 284M407 237V277L415 284M395 241L383 236M407 241L418 236" stroke="#dfbba6" strokeWidth="5" strokeLinecap="round" opacity=".35"/>
    <path d="M395 237V277M407 237V277" opacity=".35"/>
    {[0,1,2,3,4,5].map(i=>{const p=flowing(i,action==='glucose-check'?4:7),x=i%2?407:395,y=241+p*27;return action==='glucose-check'
      ?<rect key={i} x={x-2.8} y={y-2.8} width="5.6" height="5.6" rx="1" fill="#76531f" stroke="#f3e4bd" strokeWidth=".7" opacity={risk?(raisedGlucose.has(seed.id)?1:i<2?1:0):i<4?1:.12}/>
      :seed.scene.motif==='lipids'?<circle key={i} cx={x} cy={y} r="2.2" fill="#cbb578" stroke="none" opacity={risk?.8:i<3?.75:.2}/>
      :risk&&seed.scene.riskVisual==='electrolytes'?<circle key={i} cx={x} cy={y} r="1.7" fill={i%2?'#d3bc8c':'#a5b8bc'} stroke="none"/>
      :<ellipse key={i} cx={x} cy={y} rx="2.7" ry="1.6" fill="#ba7f75" stroke="none"/>;})}
    {action==='glucose-check'&&!risk&&liverGlucose.has(seed.id)&&<g data-local-cue="liver-glucose-output"><path d="M381 255Q389 250 398 255L401 260Q393 260 388 267Q381 267 381 255Z" fill="#b7bb94" fillOpacity=".95"/><path d="M389 257L396 260" stroke="#839379"/>{[0,1].map(i=><rect key={i} x={396+flowing(i,3)*5} y={260+flowing(i,3)*9} width="3" height="3" rx=".7" fill="#cfad6b" stroke="none" opacity={(1-flowing(i,3))*.65}/>)}</g>}
    {action==='glucose-check'&&!risk&&glucoseUptake.has(seed.id)&&<g data-local-cue="glucose-uptake"><path d="M416 247Q423 247 421 260L416 265Z" fill="#b6bd98" fillOpacity=".8"/>{[0,1].map(i=>{const p=flowing(i,5);return <rect key={i} x={407+p*12} y={250+p*9} width="3.2" height="3.2" rx=".7" fill="#cfad6b" stroke="none" opacity={Math.sin(p*Math.PI)}/>;})}</g>}
    {target==='blood'&&seed.scene.motif==='clot'&&!risk&&<g fill="#ddcc97" stroke="none"><circle cx="395" cy="250" r="2"/><circle cx="406" cy="260" r="2"/><circle cx="394" cy="268" r="2"/></g>}
  </g>;
  if(action==='pressure-check'||target==='heart'&&quiet)return <g data-body-process="circulation-pressure" stroke={color} strokeWidth="1.7" fill="none">
    <path d="M399 239C391 231 387 242 399 250C411 242 407 231 399 239Z" fill="#c99b8d"/>
    <path d="M396 248V275Q384 277 384 263V242M403 249V275Q416 278 416 261V243" strokeWidth="2.5"/>
    {[0,1,2].map(i=><circle key={i} cx={i%2?416:384} cy={245+flowing(i,6)*26} r="2" fill={color} stroke="none"/>)}
    {risk&&<path d="M380 256H388M412 268H420" strokeWidth={1.6+wave*.9}/>}
  </g>;
  if(action==='urgent-review'&&target==='gut'&&seed.id==='clindamycin')return <g data-body-process="intestinal-inflammation" fill="#dec1a8" fillOpacity=".8" stroke={red} strokeWidth="2"><path d="M389 265H411V283H389Z" strokeLinejoin="round"/><path d="M394 269H406Q410 273 402 273H395Q391 278 405 279" fill="none"/><path d="M387 267V279M413 267V279" opacity={.4+wave*.4}/></g>;
  if(action==='urgent-review'&&target==='gut')return <g data-body-process="gastrointestinal-lining" stroke={red} strokeWidth="1.7" fill="none">
    <path d="M397 252V260Q408 253 413 264Q415 276 401 276Q388 274 391 265" fill="#e0bea1" fillOpacity=".85"/>
    <path d="M394 266Q400 272 408 266" stroke="#efd6b6" strokeWidth="4"/>
    <path d="M395 269L399 270" stroke={red} strokeWidth="3"/>
    {[0,1,2].map(i=><circle key={i} cx={398+flowing(i,5)*8} cy={269+Math.sin(flowing(i,5)*Math.PI)*2} r="1.5" fill={red} stroke="none"/>)}
  </g>;
  if(action==='urgent-review'&&target==='lungs')return <g data-body-process="airway-swelling" fill="none" stroke={red}>
    <path d="M396 212V238M404 212V238" strokeWidth="4" opacity=".65"/>
    <path d="M400 213V239" stroke="#f1dbc0" strokeWidth="2.2"/>
  </g>;
  if(target==='hormones'&&quiet){
    if(seed.id==='hydrocortisone')return <g data-body-process="adrenal-glands" stroke={color} strokeWidth="1.5" fill="none"><path d="M381 259Q378 268 385 271M419 259Q422 268 415 271" stroke="#b3aea0"/><path d="M379 254L385 248L390 254ZM410 254L415 248L421 254Z" fill="#d4b493"/>{[0,1,2].map(i=><circle key={i} cx={395+i*5} cy={255+flowing(i,5)*22} r="2.5" fill={color} stroke="none" opacity={risk?.25:.8}/>)}</g>;
    if(['risperidone','paliperidone','levothyroxine','liothyronine'].includes(seed.id))return <g data-body-process="hormone-circulation" fill="none" stroke={color} strokeWidth="1.5"><path d="M394 235V276M407 235V276" stroke="#d7bea2" strokeWidth="3" opacity=".3"/>{[0,1,2,3].map(i=><circle key={i} cx={i%2?407:394} cy={239+flowing(i,5)*33} r="3" fill={color} stroke="#eee0c4" strokeWidth=".8" opacity=".9"/>)}</g>;
    if(thyroidEntries.has(seed.id))return <g data-body-process="thyroid" stroke={color} strokeWidth="1.4" fill="#ceb297">
      <path d="M399 220Q390 214 391 226Q393 232 399 227ZM401 220Q410 214 409 226Q407 232 401 227Z"/>
      {[0,1,2].map(i=><circle key={i} cx={thyroidSuppression.has(seed.id)?397+i*3:394+i*6} cy={thyroidSuppression.has(seed.id)?230+flowing(i,5)*18:239+flowing(i,5)*26} r="1.7" fill={color} stroke="none" opacity={thyroidSuppression.has(seed.id)?(1-flowing(i,5))*.45:.65}/>)}</g>;
    return <g data-body-process="endocrine-system" stroke={color} strokeWidth="1.4" fill="none">
      <path d="M400 219V281M395 236L400 240L405 236M392 273L400 278L408 273" strokeDasharray="3 4" opacity=".7"/>
      <path d="M396 220Q392 215 393 224L398 227H402L407 224Q408 215 404 220Z" fill="#cbb699"/>
      <ellipse cx="394" cy="276" rx="4" ry="3" fill="#cbb699"/><ellipse cx="406" cy="276" rx="4" ry="3" fill="#cbb699"/>
      <circle cx="400" cy={232+flowing(0,5)*37} r="2.5" fill={color} stroke="none" opacity={risk?.35+wave*.3:.8}/>
    </g>;
  }
  if(target==='bones'&&quiet)return <g data-body-process="bone-support" fill="none" stroke="#ecdfc0" strokeWidth="3" opacity=".9">
    <path d="M400 231V280M384 235Q400 242 416 235M383 245Q400 251 417 245M384 255Q400 261 416 255M387 266Q400 271 413 266"/>
    <path d="M397 274H403" stroke={color} strokeWidth="2" opacity={.35+wave*.5}/>
  </g>;
  if(target==='muscle'&&quiet)return <g data-body-process="muscle-nutrition" stroke={color} strokeWidth="1.6" fill="none">
    <path d="M381 236Q389 230 394 239L391 257Q382 260 380 248ZM406 239Q411 230 419 236L420 248Q417 260 409 257Z" fill="#c4b397" fillOpacity=".8"/>
    <path d="M384 239L385 253M389 237L389 254M411 237L411 254M416 239L415 253" strokeDasharray={`${4+wave*3} 4`}/>
  </g>;
  if(target==='peripheral-nerves')return <g data-body-process="peripheral-nerves" stroke={color} strokeWidth="1.8" fill="none">
    <path d="M400 221V283M400 236L383 244M400 236L417 244M400 266L387 282M400 266L413 282"/>
    {[0,1,2].map(i=><circle key={i} cx="400" cy={228+flowing(i,7)*50} r="2.6" fill="#e1c389" stroke="none" opacity={.4+wave*.5}/>)}</g>;
  return null;
}
