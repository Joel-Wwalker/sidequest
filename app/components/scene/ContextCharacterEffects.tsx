import type { CatalogSeed } from '../../data/catalog/types';
import { getSceneStory } from '../../data/catalog/scene-stories';
import type { sampleScene } from './timeline';
import { smooth } from './timeline';
import { actionUsesContext, handoffObjectOpacity } from './story-motion';
import BodyProcesses from './BodyProcesses';

type Point=[number,number];
type Props={seed:CatalogSeed;pose:ReturnType<typeof sampleScene>;left:Point;right:Point;part:'face'|'body'|'props'|'hands'|'feet'};
const ink='#677c70',paper='#f2e6cc',warning='#b97968';

/** Cues share the character's transforms. They describe a selected event, not a diagnosis. */
export default function ContextCharacterEffects({seed,pose,left,right,part}:Props){
  const story=getSceneStory(seed);
  if(!story)return null;
  const isRisk=pose.stage===2,action=isRisk?story.downsideAction:story.responseAction;
  const t=pose.t,target=isRisk?story.downsideTarget:story.responseTarget;
  const pulse=isRisk?story.downsidePulsePattern:story.responsePulsePattern;
  const heartbeat=pulse==='fast'?Math.sin(t*9):pulse==='slow'?Math.sin(t*2):pulse==='irregular'?(Math.sin(t*5)+Math.sin(t*11)*.35)/1.35:0;
  const local=isRisk?story.downsideMode==='visible-local':story.responseMode==='visible-local';
  const baseline=smooth(t/1.6)*(1-smooth((t-8.2)/3));
  let amount=isRisk?pose.adverse:pose.response;
  if(!isRisk&&((part==='face'&&(action==='mouth-ease'||action==='recovery-check'&&target==='nose'))||(part==='feet'&&action==='ankle-check')||(part==='hands'&&action==='skin-check'&&local)))amount=baseline+(action==='mouth-ease'||target==='nose'?0:pose.response*.15);
  const [lx,ly]=left,[rx,ry]=right;
  if(part==='face')return <g opacity={amount} data-character-cue={action}>
    {isRisk&&seed.id==='risedronate'&&<g data-body-process="jaw-bone" fill="none" stroke={warning} strokeWidth="1.8" opacity=".75"><path d="M385 198V203Q401 216 416 203V198"/><path d="M387 203L391 207M411 207L415 203" stroke="#efd9bc" strokeWidth="2.2"/></g>}
    {action==='flush'&&<><ellipse cx="386" cy="194" rx="8" ry="4" fill="#c67b6a" opacity=".55"/><ellipse cx="414" cy="194" rx="8" ry="4" fill="#c67b6a" opacity=".55"/></>}
    {action==='dry-mouth'&&<path d="M392 202L395 204M409 202L412 204" stroke={warning} strokeWidth="2"/>}
    {action==='nose-discomfort'&&<g data-local-cue="nasal-dryness"><ellipse cx="400" cy="191" rx="5" ry="3" fill={warning} opacity=".35"/><path d="M394 191L391 190M406 191L409 190" fill="none" stroke={warning} strokeWidth="1.7"/></g>}
    {action==='mouth-discomfort'&&target!=='throat'&&<g data-local-cue="mouth-irritation"><path d="M393 199Q402 207 411 199" fill="none" stroke={warning} strokeWidth="2.4" opacity=".7"/><path d="M396 204L394 208M409 204L411 207" stroke={warning} strokeWidth="1.5"/></g>}
    {action==='hearing-check'&&<g fill="none" stroke={warning} strokeWidth="2"><path d="M435 179Q446 186 435 194M442 174Q458 186 442 199"/><path d="M447 172L434 201" strokeDasharray="3 3"/></g>}
    {action==='mouth-ease'&&<g data-local-cue="oral-irritation-easing"><path d="M394 201Q402 208 410 201" fill="none" stroke={warning} strokeWidth="2" opacity=".65"/><ellipse cx="400" cy="201" rx="2.3" ry="1.4" fill="#f0dfbe"/><ellipse cx="405" cy="200" rx="1.7" ry="1.1" fill="#f0dfbe"/></g>}
    {(action==='drowsy'||action==='sleep')&&<g fill="none" stroke="#ad8f87" strokeWidth="1.5" opacity=".6"><path d="M385 189Q389 191 393 189M405 189Q409 191 413 189"/></g>}
    {target==='eyes'&&action==='review-labs'&&<g data-body-process="retina" fill="none" stroke={warning} strokeWidth="1.5" opacity=".8"><path d="M383 180Q380 184 383 189M415 180Q418 184 415 189"/><path d="M381 180L379 177M417 180L419 177" opacity=".45"/></g>}
    {action==='recovery-check'&&target==='nose'&&<g data-local-cue="runny-nose-easing"><path d="M402 195q-4 5 0 6q4-1 0-6Z" fill="#83ada7"/><path d="M395 191L392 192M407 191L410 192" stroke="#bfa290" strokeWidth="1.3"/></g>}
    {action==='vision-check'&&seed.id==='ivabradine'&&<g data-local-cue="brief-brightness" stroke="#b39454" strokeWidth="2" opacity={Math.max(0,Math.sin(t*1.4))**4}><path d="M380 180L376 177M381 187H375M418 180L422 177M419 187H425"/></g>}
    {action==='vision-check'&&seed.id!=='ivabradine'&&<g data-local-cue="visual-focus" fill="none" stroke="#a395b5" strokeWidth="1.5"><ellipse cx={389+Math.sin(t*1.2)*2.4} cy="184" rx="6.5" ry="5" opacity=".6"/><ellipse cx={409+Math.sin(t*1.2+.6)*2.4} cy="184" rx="6.5" ry="5" opacity=".6"/><path d="M382 179L378 176M416 179L420 176" opacity={.35+.2*Math.sin(t*1.2)}/></g>}
    {target==='brain'&&['recovery-check','nutrition-check','review-labs','urgent-review'].includes(action)&&<g data-body-process="brain" fill="#d6c5bc" fillOpacity=".9" stroke={isRisk?warning:'#8b9f8b'} strokeWidth="1.4"><path d="M400 156Q392 150 388 157Q382 159 386 168Q387 173 396 171L400 174L404 171Q413 174 416 167Q420 158 412 156Q408 151 400 156Z"/><path d="M400 156V170M391 158L395 162L390 166M409 158L405 162L411 167" fill="none" opacity=".65"/><circle cx={392+(Math.sin(t*.9)+1)*8} cy="162" r="2" fill={isRisk?warning:'#819b83'} stroke="none"/></g>}
    {action==='hair-check'&&!isRisk&&<g data-local-cue="new-hair-growth" stroke="#796856" strokeWidth="1.8" strokeLinecap="round"><path d={`M390 149l-1 ${-2-pose.response*3}M398 147v${-2-pose.response*4}M406 148l1 ${-2-pose.response*3}`}/></g>}
    {action==='dizzy'&&<g fill="none" stroke="#a393b6" strokeWidth="2"><path d="M346 151Q365 131 387 137M417 136Q441 129 457 149"/>{[0,1].map(i=><circle key={i} cx={i?447:354} cy={142+Math.sin(t*1.5+i)*4} r="3"/>)}</g>}
    {action==='light-sensitive'&&target!=='skin'&&<g stroke="#bda276" strokeWidth="2"><path d="M343 173L354 177M345 183H357M347 194L357 190"/></g>}
    {action==='headache-ease'&&<path d="M438 170Q445 181 439 189" fill="none" stroke="#ba9c92" strokeWidth="2" opacity={.5*(1-Math.min(1,(t-8.2)/5))}/>}
    {action==='perception-shift'&&<g fill="none" stroke="#af9fbd" strokeWidth="2" opacity=".7"><ellipse cx="400" cy="179" rx={54+Math.sin(t)*3} ry="47"/><path d="M342 202Q329 174 345 153M454 150Q472 175 461 202"/></g>}
  </g>;
  if(part==='feet')return <g opacity={amount} fill="none" stroke={warning} strokeWidth="2">
    {action==='ankle-check'&&<><ellipse cx="384" cy="345" rx="13" ry="6" fill="#d5b0a0" fillOpacity=".45"/><ellipse cx="414" cy="345" rx="13" ry="6" fill="#d5b0a0" fillOpacity=".45"/></>}
    {action==='tendon-guard'&&<path d="M383 325V345M377 332L371 329M378 342L371 344"/>}
  </g>;
  if(part==='body')return <g opacity={amount} data-character-cue={action}>
    <BodyProcesses seed={seed} story={story} action={action} target={target} risk={isRisk} time={t}/>
    {(action==='breathe-easier'||action==='breathing-watch'||action==='cough-ease')&&<g data-body-process="airflow" fill="#bfd0c5" fillOpacity=".8" stroke={action==='breathing-watch'?warning:'#7e9f94'} strokeWidth="1.5" transform={`translate(400 243) scale(${1+Math.sin(t*(action==='breathing-watch'?.65:1.3))*(action==='breathing-watch'?.025:.09)})`}><path d="M-4-10Q-18-14-18 9Q-18 18-4 12ZM4-10Q18-14 18 9Q18 18 4 12Z"/><path d="M0-23V-5M0-5L-9 3M0-5L9 3" fill="none" strokeWidth={action==='breathing-watch'?1.6:2.5}/>{[0,1,2].map(i=>{const p=((t*(action==='breathing-watch'?3:8)+i*9)%25)/25;return <circle key={i} cx="0" cy={-22+p*20} r={action==='breathing-watch'?1.3:1.8} fill="#f7eed8" stroke="none" opacity={Math.sin(p*Math.PI)}/>;})}</g>}
    {action==='pulse-check'&&<g transform={`translate(402 240) scale(${1+heartbeat*.12})`} data-pulse-pattern={pulse??'monitor'}><path d="M0-3C-8-11-15 1 0 10C15 1 8-11 0-3Z" fill={isRisk?'#bf8374':'#91ac95'}/><path d="M-8 1H-3L0-3L3 5L5 1H8" stroke="#fff3df" strokeWidth="1.5" fill="none"/>{isRisk&&<path d="M18-6V3M18 7V9" stroke={warning} strokeWidth="2.5"/>}</g>}
    {(action==='stomach-relief'||action==='nausea')&&<g data-body-process="stomach" stroke={action==='stomach-relief'?'#92a584':warning} strokeWidth="1.8" fill="none" transform={`translate(402 265) rotate(${action==='nausea'?Math.sin(t*1.5)*3:0}) translate(-402 -265)`}><path d="M401 250V258Q386 256 391 270Q401 280 411 268Q417 256 407 259V250" fill="#d8c49e" fillOpacity=".8"/>{action==='nausea'&&<path d={`M395 ${267+Math.sin(t*1.5)*2}q5-4 11 0`} strokeWidth="2.5"/>}</g>}
    {action==='cramp'&&<g data-body-process="intestinal-contraction" stroke={warning} strokeWidth="2" fill="none" transform={`translate(400 275) scale(${1-Math.max(0,Math.sin(t*1.8))*.07} 1) translate(-400 -275)`}><path d="M389 267Q388 263 394 264H407Q412 263 412 268V281Q410 285 405 282H394Q388 284 388 279Z" fill="#d5b7a0" fillOpacity=".85"/><path d="M394 268H406Q409 272 403 272H395Q391 276 399 276H405Q409 280 401 280" strokeWidth="1.6"/><path d="M382 272L386 275L382 278M418 272L414 275L418 278" opacity={.35+Math.max(0,Math.sin(t*1.8))*.6}/></g>}
    {(action==='urinary-ease'||action==='bladder-check')&&<path d="M392 277Q400 273 408 277V283Q400 291 392 283Z" fill="#b8c7ae" stroke={action==='bladder-check'?warning:ink} strokeWidth="1.5"/>}
    {action==='pelvic-relief'&&<path d="M387 279Q400 288 414 279M391 285Q400 291 410 285" fill="none" stroke="#9eae88" strokeWidth="2"/>}
    {action==='muscle-guard'&&target!=='joint'&&<g data-body-process="muscle-discomfort" fill="none" stroke={warning} strokeWidth="1.7"><path d="M380 236Q389 233 392 243L387 254Q377 249 380 236Z" fill="#c58d79" fillOpacity=".55"/><path d="M382 240L387 248M385 237L390 245" opacity={.4+.3*Math.sin(t*1.5)}/></g>}
    {action==='mouth-discomfort'&&target==='throat'&&<path d="M400 211V241" stroke={warning} strokeWidth="4" strokeLinecap="round" opacity=".6"/>}
    {action==='reflux-discomfort'&&<g data-local-cue="reflux" fill="none" stroke={warning} strokeWidth="2"><path d="M400 218V242" strokeWidth="4" strokeLinecap="round" opacity=".5"/><path d="M407 237V224M404 227L407 223L410 227"/></g>}
    {action==='joint-release'&&<g fill="none" stroke="#9eae88" strokeWidth="2"><path d={`M${lx-13} ${ly-5}q-4 7 1 12M${rx+12} ${ry-5}q4 7 0 12`} opacity={.3+.25*Math.sin(t*1.3)}/></g>}
    {action==='dissociate'&&<path d="M370 223Q352 251 369 287M435 221Q453 247 438 286" fill="none" stroke="#b2a2c5" strokeWidth="5" opacity=".6" transform={`translate(${Math.sin(t*.7)*4} 0)`}/>}
  </g>;
  if(part==='hands')return <g opacity={amount}>
    {action==='muscle-guard'&&target==='joint'&&<circle cx={lx} cy={ly} r="11" fill="none" stroke={warning} strokeWidth="2"/>}
    {action==='light-sensitive'&&target==='skin'&&<g transform={`translate(${lx} ${ly})`}><ellipse cx="4" cy="5" rx="7" ry="4" fill="#c88370" opacity=".5"/><path d="M-26-14L-17-8M-29-3H-18M-25 8L-16 5" stroke="#bea06f" strokeWidth="2"/></g>}
    {action==='skin-fragility-check'&&<g transform={`translate(${lx} ${ly})`} fill="none" stroke="#c8948b" strokeWidth="1"><path d="M-4 3Q0 0 6 4M-3 6Q2 3 7 7M-1 9Q3 6 6 9"/></g>}
    {(action==='skin-check'||action==='itch'||action==='bruise-check'||action==='tingle')&&<g transform={`translate(${lx} ${ly})`}>
      {action==='bruise-check'?<ellipse cx="3" cy="3" rx="5" ry="3.5" fill="#9b879e" opacity=".7"/>:action==='tingle'||action==='skin-check'&&!local&&!isRisk?<g stroke="#b99b69" strokeWidth="1.8" fill="none">{[-1,0,1].map((n,i)=><path key={i} d={`M${n*5} -6l${n*3} -5M${n*5} 5l${n*3} 5`} opacity={.25+Math.max(0,Math.sin(t*4-i*1.2))*.75}/>)}</g>:<g fill="#c17c6a" opacity={local?.65:.45}>{[[-3,4],[3,6],[5,1]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="2"/>)}</g>}
    </g>}
    {action==='nail-check'&&<g data-local-cue="nail-base-growth" transform={`translate(${lx} ${ly})`} stroke="#c99e7c" strokeWidth="1"><path d="M-6 0V-12Q-3-16-1-11V-2M0-1V-13Q3-17 5-12V0" fill="#eabd96"/><rect x="-5" y="-12" width="4" height="5" rx="1" fill="#d5c18d"/><rect x="1" y="-13" width="4" height="5" rx="1" fill="#d5c18d"/><path d={`M-4 ${-7.5-pose.response*.6}h2M2 ${-8.5-pose.response*.6}h2`} stroke="#f2dfc5" strokeWidth={1+pose.response*.8}/></g>}
    {action==='tremor'&&<g stroke={warning} strokeWidth="1.5" fill="none"><path d={`M${lx-15} ${ly-8}q-4 6 0 12M${rx+14} ${ry-9}q4 6 0 12`}/></g>}
  </g>;
  return <g opacity={amount*(actionUsesContext(action)?1:handoffObjectOpacity(t,'action'))} data-stage-object={action}>
    {action==='training-effort'&&<path d={`M${lx} ${ly}Q400 ${280-Math.sin(t)*5} ${rx} ${ry}`} fill="none" stroke="#a18baf" strokeWidth="5"/>}
    {action==='hair-check'&&<g transform={`translate(${lx} ${ly})`} data-scene-prop="hair-mirror"><path d="M0-4V8" stroke="#8b9f8b" strokeWidth="7" strokeLinecap="round"/><ellipse cy="-19" rx="14" ry="18" fill="#d3ddd6" stroke="#8b9f8b" strokeWidth="3"/><path d="M-7-27L5-31M-8-18L8-25" stroke="#ecf1e4" strokeWidth="2"/></g>}
    {action==='meal-pause'&&<g transform={`translate(${lx} ${ly})`}><ellipse rx="28" ry="9" fill={paper} stroke="#b4ad92" strokeWidth="2"/><path d="M-18-2Q-12-13-4-2M3-3Q12-16 20-3" fill="#aabd93"/><path d="M-5-2H5" stroke="#c6a17d" strokeWidth="5"/></g>}
    {action==='dry-mouth'&&<g transform={`translate(${lx} ${ly})`}><path d="M-5-33H5V-25L11-19V7H-11V-19L-5-25Z" fill="#d1e0d2" stroke="#8ba89e" strokeWidth="2"/><path d="M-7-33H7" stroke={ink} strokeWidth="4"/></g>}
  </g>;
}
