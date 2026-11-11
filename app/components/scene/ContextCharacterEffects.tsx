import type { CatalogSeed } from '../../data/catalog/types';
import { getSceneStory, type StoryAction } from '../../data/catalog/scene-stories';
import type { sampleScene } from './timeline';
import { smooth } from './timeline';
import { actionUsesContext, handoffObjectOpacity } from './story-motion';
import { contextPropVisibility } from './prop-visibility';

type Point=[number,number];
type Props={seed:CatalogSeed;pose:ReturnType<typeof sampleScene>;left:Point;right:Point;part:'face'|'body'|'props'|'hands'|'feet'};
const ink='#677c70',paper='#f2e6cc',warning='#b97968';

function Card({action,time}:{action:StoryAction;time:number}){
  return <g stroke={ink} strokeWidth="1.6" fill="none"><rect x="-19" y="-38" width="39" height="45" rx="4" fill={paper}/>
    {action==='symptom-review'?<g data-card-content="symptom-notes"><path d="M-10-27H10M-10-19H10M-10-11H5M-10-3H8"/></g>
    :action==='review-labs'?<><path d="M-11-9V-27M-11-9H12"/><path d={`M-7-12L-2-20L4-17L11-26`} stroke="#94a880" strokeWidth="3"/><path d="M-11-2H11"/></>
    :action==='review-uncertainty'?<><path d="M-6-25Q0-33 7-25Q12-17 1-13V-8"/><circle cx="1" cy="-3" r="1.5" fill={ink}/></>
    :action==='urgent-review'?<><path d="M-8-28Q-3-31 0-24L-3-20Q0-14 5-12L8-15Q14-11 11-5Q-1-1-10-20Z" fill="#c89c83" stroke={warning}/></>
    :action==='infection-watch'?<><circle cy="-18" r="8"/><path d="M0-31V-28M0-8V-5M-14-18H-11M11-18H14M-10-28L-7-25M8-10L11-7"/><path d="M-10 0H10"/></>
    :action==='vision-check'?<><path d="M-9-26H9M0-26V-16M-10-9H-2M-6-9V-4M3-9H11M7-9V-4" strokeWidth="3"/></>
    :action==='nutrition-check'?<><circle cy="-17" r="12"/><path d="M-6-17Q-9-29 0-23Q12-29 7-15Q1-6-6-17Z" fill="#afbf91"/><path d="M0-24L3-29"/></>
    :<><path d="M-10-28H10M-10-19H10M-10-10H10M-10-1H5"/><path d={`M-13 ${-24+Math.sin(time*.8)*2}l3 3 5-5`} stroke="#94a880" strokeWidth="2.5"/></>}
  </g>;
}

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
  if(!isRisk&&((part==='face'&&action==='mouth-ease')||(part==='feet'&&action==='ankle-check')||(part==='hands'&&action==='skin-check'&&local)))amount=baseline+(action==='mouth-ease'?0:pose.response*.15);
  const [lx,ly]=left,[rx,ry]=right;
  if(part==='face')return <g opacity={amount} data-character-cue={action}>
    {action==='flush'&&<><ellipse cx="386" cy="194" rx="8" ry="4" fill="#c67b6a" opacity=".55"/><ellipse cx="414" cy="194" rx="8" ry="4" fill="#c67b6a" opacity=".55"/></>}
    {action==='dry-mouth'&&<path d="M392 202L395 204M409 202L412 204" stroke={warning} strokeWidth="2"/>}
    {action==='nose-discomfort'&&<g data-local-cue="nasal-dryness"><ellipse cx="400" cy="191" rx="5" ry="3" fill={warning} opacity=".35"/><path d="M394 191L391 190M406 191L409 190" fill="none" stroke={warning} strokeWidth="1.7"/></g>}
    {action==='mouth-discomfort'&&target!=='throat'&&<path d="M433 192L439 190M434 198H442M433 204L439 207" stroke={warning} strokeWidth="2"/>}
    {action==='hearing-check'&&<g fill="none" stroke={warning} strokeWidth="2"><path d="M435 179Q446 186 435 194M442 174Q458 186 442 199"/><path d="M447 172L434 201" strokeDasharray="3 3"/></g>}
    {action==='mouth-ease'&&<path d="M431 196L436 194M432 201H439M431 205L436 208" stroke={warning} strokeWidth="2" fill="none" opacity=".7"/>}
    {action==='drowsy'||action==='sleep'?<g fill="none" stroke="#9b95ab" strokeWidth="2" opacity=".75"><path d="M440 164H448L440 172H448" transform={`translate(0 ${-Math.sin(t*.7)*3})`}/><path d="M450 149H462L450 161H462" transform={`translate(0 ${-Math.sin(t*.7+1)*3})`}/></g>:null}
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
    {(action==='breathe-easier'||action==='breathing-watch'||action==='cough-ease')&&<g fill="#bfd0c5" fillOpacity=".55" stroke="#7e9f94" strokeWidth="1.5" transform={`translate(400 243) scale(${1+Math.sin(t*(action==='breathing-watch'?.65:1.3))*.07})`}><path d="M-4-10Q-18-14-18 9Q-18 18-4 12ZM4-10Q18-14 18 9Q18 18 4 12Z"/><path d="M0-16V-5M0-5L-9 3M0-5L9 3" fill="none"/></g>}
    {action==='pulse-check'&&<g transform={`translate(402 240) scale(${1+heartbeat*.12})`} data-pulse-pattern={pulse??'monitor'}><path d="M0-3C-8-11-15 1 0 10C15 1 8-11 0-3Z" fill={isRisk?'#bf8374':'#91ac95'}/><path d="M-8 1H-3L0-3L3 5L5 1H8" stroke="#fff3df" strokeWidth="1.5" fill="none"/>{isRisk&&<path d="M18-6V3M18 7V9" stroke={warning} strokeWidth="2.5"/>}</g>}
    {(action==='stomach-relief'||action==='cramp'||action==='nausea')&&<g stroke={action==='stomach-relief'?'#92a584':warning} strokeWidth="2" fill="none"><path d="M401 254V261Q386 258 391 273Q401 282 411 271Q417 259 407 262V254" fill="#d8c49e" fillOpacity=".45"/>{action!=='stomach-relief'&&<path d="M380 262L376 267L381 272M421 262L425 267L420 272"/>}</g>}
    {(action==='urinary-ease'||action==='bladder-check')&&<path d="M392 277Q400 273 408 277V283Q400 291 392 283Z" fill="#b8c7ae" stroke={action==='bladder-check'?warning:ink} strokeWidth="1.5"/>}
    {action==='pelvic-relief'&&<path d="M387 279Q400 288 414 279M391 285Q400 291 410 285" fill="none" stroke="#9eae88" strokeWidth="2"/>}
    {action==='muscle-guard'&&target!=='joint'&&<path d="M380 236Q389 233 392 243L387 254Q377 249 380 236Z" fill="#c58d79" opacity=".45"/>}
    {action==='mouth-discomfort'&&target==='throat'&&<path d="M400 211V241" stroke={warning} strokeWidth="4" strokeLinecap="round" opacity=".6"/>}
    {action==='reflux-discomfort'&&<g data-local-cue="reflux" fill="none" stroke={warning} strokeWidth="2"><path d="M400 218V242" strokeWidth="4" strokeLinecap="round" opacity=".5"/><path d="M407 237V224M404 227L407 223L410 227"/></g>}
    {action==='joint-release'&&<g fill="none" stroke="#9eae88" strokeWidth="2"><path d={`M${lx-18} ${ly-9}q-6 11 1 18M${rx+15} ${ry-9}q7 11 0 18`}/></g>}
    {action==='dissociate'&&<path d="M370 223Q352 251 369 287M435 221Q453 247 438 286" fill="none" stroke="#b2a2c5" strokeWidth="5" opacity=".6" transform={`translate(${Math.sin(t*.7)*4} 0)`}/>}
  </g>;
  if(part==='hands')return <g opacity={amount}>
    {action==='muscle-guard'&&target==='joint'&&<circle cx={lx} cy={ly} r="11" fill="none" stroke={warning} strokeWidth="2"/>}
    {action==='light-sensitive'&&target==='skin'&&<g transform={`translate(${lx} ${ly})`}><ellipse cx="4" cy="5" rx="7" ry="4" fill="#c88370" opacity=".5"/><path d="M-26-14L-17-8M-29-3H-18M-25 8L-16 5" stroke="#bea06f" strokeWidth="2"/></g>}
    {action==='skin-fragility-check'&&<g transform={`translate(${lx} ${ly})`} fill="none" stroke="#c8948b" strokeWidth="1"><path d="M-4 3Q0 0 6 4M-3 6Q2 3 7 7M-1 9Q3 6 6 9"/></g>}
    {(action==='skin-check'||action==='itch'||action==='bruise-check'||action==='tingle')&&<g transform={`translate(${lx} ${ly})`}>
      {action==='bruise-check'?<ellipse cx="5" cy="7" rx="7" ry="5" fill="#9b879e" opacity=".7"/>:action==='tingle'||action==='skin-check'&&!local&&!isRisk?<path d="M-14-8L-18-12M-17 1H-22M-12 12L-16 17" stroke="#b99b69" strokeWidth="2"/>:<g fill="#c17c6a" opacity={local?.65:.45}>{[[-3,4],[3,6],[5,1]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="2"/>)}</g>}
    </g>}
    {action==='nail-check'&&<g transform={`translate(${lx} ${ly})`} stroke="#c99e7c" strokeWidth="1"><path d="M-6 0V-12Q-3-16-1-11V-2M0-1V-13Q3-17 5-12V0" fill="#eabd96"/><rect x="-5" y="-12" width="4" height="5" rx="1" fill="#d5c18d"/><rect x="1" y="-13" width="4" height="5" rx="1" fill="#e6d8bb"/></g>}
    {action==='tremor'&&<g stroke={warning} strokeWidth="1.5" fill="none"><path d={`M${lx-15} ${ly-8}q-4 6 0 12M${rx+14} ${ry-9}q4 6 0 12`}/></g>}
  </g>;
  return <g opacity={amount*(actionUsesContext(action)?1:handoffObjectOpacity(t,'action'))} data-stage-object={action}>
    {action==='training-effort'&&<path d={`M${lx} ${ly}Q400 ${280-Math.sin(t)*5} ${rx} ${ry}`} fill="none" stroke="#a18baf" strokeWidth="5"/>}
    {['review-labs','review-interactions','vision-check','infection-watch','urgent-review','symptom-review'].includes(action)&&<g transform={`translate(${lx} ${ly})`}><Card action={action} time={t}/></g>}
    {['review-uncertainty','withdrawal-watch'].includes(action)&&<g opacity={contextPropVisibility(seed,pose).reviewCardGate} transform={`translate(${rx} ${ry})`}><Card action={action==='review-uncertainty'?'review-uncertainty':'recovery-check'} time={t}/></g>}
    {action==='review-interactions'&&<g transform={`translate(${rx} ${ry})`} stroke={ink} strokeWidth="1.5"><rect x="-12" y="-30" width="25" height="36" rx="3" fill="#d9cfdd"/><path d="M-6-18H7M0-24V-12M-6-4H7"/></g>}
    {action==='hair-check'&&<g transform={`translate(${lx} ${ly})`}><rect x="-14" y="-32" width="29" height="40" rx="4" fill="#819a92"/><rect x="-10" y="-27" width="21" height="26" rx="2" fill="#e1e5d4"/><path d="M-6-10Q0-25 7-10M-6-10V-5H7V-10" fill="#b5a58e"/><circle cy="4" r="2" fill={paper}/></g>}
    {action==='meal-pause'&&<g transform={`translate(${lx} ${ly})`}><ellipse rx="28" ry="9" fill={paper} stroke="#b4ad92" strokeWidth="2"/><path d="M-18-2Q-12-13-4-2M3-3Q12-16 20-3" fill="#aabd93"/><path d="M-5-2H5" stroke="#c6a17d" strokeWidth="5"/></g>}
    {(action==='glucose-check'||action==='pressure-check')&&<g transform={`translate(${action==='pressure-check'?rx:lx} ${action==='pressure-check'?ry:ly})`}><rect x="-14" y="-30" width="29" height="37" rx="5" fill="#96aca3" stroke={ink} strokeWidth="2"/><rect x="-10" y="-24" width="21" height="19" rx="2" fill={isRisk?'#ead1b7':'#e5ead9'}/>{isRisk?<><path d="M0-22L8-9H-8Z" fill="none" stroke={warning} strokeWidth="1.5"/><path d="M0-18V-14M0-12V-11" stroke={warning}/></>:<path d="M-6-14H-2L1-20L4-9L7-14" stroke={ink} strokeWidth="1.5" fill="none"/>}</g>}
    {action==='pressure-check'&&<><path d={`M${lx+7} ${ly-12}Q409 299 ${rx-10} ${ry+2}`} fill="none" stroke="#7b9690" strokeWidth="2"/><rect x={lx-6} y={ly-20} width="18" height="16" rx="4" fill="#98b0a4" stroke={ink} strokeWidth="2"/></>}
    {action==='dry-mouth'&&<g transform={`translate(${lx} ${ly})`}><path d="M-5-33H5V-25L11-19V7H-11V-19L-5-25Z" fill="#d1e0d2" stroke="#8ba89e" strokeWidth="2"/><path d="M-7-33H7" stroke={ink} strokeWidth="4"/></g>}
  </g>;
}
