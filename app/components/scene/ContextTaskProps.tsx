import type { CatalogSeed, ContextProp } from '../../data/catalog/types';
import type { sampleScene } from './timeline';
import { contextTask } from './context-motion';
import { getSceneStory } from '../../data/catalog/scene-stories';

type Pose=ReturnType<typeof sampleScene>;
function HeldObject({kind}:{kind:ContextProp}){
  const line='#8e9d88',paper='#e9e0c7';
  switch(kind){
    case'book':return <g stroke={line} strokeWidth="1.5"><path d="M-27-32Q-7-38 4-29Q22-36 42-30V2Q20-3 4 5Q-9-2-27 4Z" fill={paper}/><path d="M4-28V3M-20-23H-3M-20-17H-5M12-23H33M12-17H30" fill="none"/></g>;
    case'phone':case'meter':case'timer':return <g><rect x="-13" y="-32" width="26" height="39" rx="4" fill="#829993" stroke="#607f78" strokeWidth="2"/><rect x="-9" y="-26" width="18" height="24" rx="2" fill="#d1ddc6"/>{kind==='phone'?<path d="M-5-20H5M-5-14H3M-5-8H5" stroke={line} strokeWidth="1.5"/>:kind==='timer'?<g stroke={line} fill="none"><circle cx="0" cy="-14" r="7"/><path d="M0-19V-14L4-12"/></g>:<path d="M-5-9V-15M0-9V-21M5-9V-17" stroke={line} strokeWidth="2"/>}<circle cy="3" r="1.5" fill="#e9e4d2"/></g>;
    case'mirror':return <g stroke="#9f9c85" strokeWidth="2"><ellipse cy="-25" rx="17" ry="23" fill="#c7dad5"/><path d="M-9-36L8-19M-6-25L6-14" stroke="#e6efdf"/><path d="M-3-3H3V13H-3Z" fill="#c7b793"/></g>;
    case'comb':return <g stroke="#ac9175" strokeWidth="3"><path d="M-15-16H13M-12-16V-5M-6-16V-5M0-16V-5M6-16V-5M12-16V-5"/></g>;
    case'plate':return <g><ellipse cy="-1" rx="30" ry="9" fill="#e8dec5" stroke="#b5ac94" strokeWidth="2"/><ellipse cy="-3" rx="23" ry="5" fill="#d1cdb1"/><path d="M-19-3Q-13-15-5-3M1-4Q13-16 20-3" fill="#a9bc90"/><ellipse cx="-2" cy="-5" rx="6" ry="4" fill="#c69b7d"/></g>;
    case'cup':return <g stroke="#ae9674" strokeWidth="2"><path d="M-14-23H9V3Q-3 10-14 3Z" fill="#e1cc9f"/><path d="M9-18H17V-4H9" fill="none"/><path d="M-10-20H6" stroke="#9c8261"/></g>;
    case'water-bottle':return <g stroke="#88a7a2" strokeWidth="2"><path d="M-5-35H5V-26L12-20V7H-12V-20L-5-26Z" fill="#c5dcce"/><path d="M-7-36H7M-8-10H8M-8-3H8"/><path d="M-8-18V-3" stroke="#e9f0df"/></g>;
    case'towel':return <g><path d="M-24-29H22V10L10 5L0 10L-11 5L-24 10Z" fill="#c1c7a3" stroke="#a4b08f" strokeWidth="2"/><path d="M-18-23H16M-18-18H16" stroke="#dbe0bf" strokeWidth="3"/></g>;
    case'plant':return <g><path d="M0-11V-38M0-22Q-21-43-22-25Q-18-13 0-17M0-30Q19-48 20-31Q16-20 0-24" fill="#99b28c" stroke="#799671" strokeWidth="2"/><path d="M-15-10H15L11 9H-11Z" fill="#c3a187" stroke="#9f8b72" strokeWidth="2"/></g>;
    case'headphones':return <g transform="translate(-19 0)" fill="none" stroke="#8f8ca2" strokeWidth="5"><path d="M-17 0V-16Q-17-40 1-40Q19-40 19-16V0"/><path d="M-17-14V1M19-14V1" strokeWidth="10"/></g>;
    case'suitcase':return <g stroke="#8d9c95" strokeWidth="2"><rect x="-24" width="48" height="35" rx="5" fill="#b3c1b1"/><path d="M-8 0V-9H8V0M-13 4V31M13 4V31" fill="none"/><circle cx="-13" cy="38" r="3" fill="#8d9c95"/><circle cx="13" cy="38" r="3" fill="#8d9c95"/></g>;
    case'pencil':return <path d="M-4 5L8-30" stroke="#b5a16b" strokeWidth="5" strokeLinecap="round"/>;
    case'stretch-band':return null;
    default:return <g stroke={line} strokeWidth="1.5"><rect x="-19" y="-37" width="38" height="44" rx={kind==='care-card'?5:2} fill={kind==='research-folder'?'#c9c6d5':paper}/>{kind==='clipboard'&&<rect x="-9" y="-41" width="18" height="7" rx="2" fill="#97a38c"/>}{kind==='calendar'?<g>{[0,1,2,3,4,5].map(i=><rect key={i} x={-12+i%3*9} y={-27+Math.floor(i/3)*13} width="5" height="6" fill="#b7bea1"/>)}</g>:kind==='research-folder'?<g fill="none"><path d="M-12-25L8-13L-6-5M-9-23L8-25M8-13L10-1"/><circle cx="-12" cy="-25" r="3" fill="#a9b7a3"/><circle cx="8" cy="-13" r="3" fill="#a9b7a3"/></g>:<path d="M-12-27H12M-12-19H10M-12-11H6M-12-3H11"/>}</g>;
  }
}

/** Ordinary objects share the solved wrist transforms; they fade before exposure. */
export default function ContextTaskProps({seed,pose,left,right}:{seed:CatalogSeed;pose:Pose;left:[number,number];right:[number,number]}){
  const task=contextTask(seed),kind=seed.scene.prop??(task==='mirror'?'mirror':task==='meal'?'plate':task==='reading'?'book':'notebook');
  const writing=['writing','meal-log','sleep-log','research-notes','checklist','care-card','planning'].includes(task);
  const story=getSceneStory(seed),action=pose.stage===2?story?.downsideAction:story?.responseAction;
  const occupied=pose.stage>0&&(action==='review-uncertainty'||action==='withdrawal-watch');
  return <g opacity={pose.contextPropOpacity} data-context-task={task} aria-hidden="true">
    {kind==='stretch-band'?<path d={occupied?`M${left[0]} ${left[1]}q-10 41 21 43q22-3 10-30`:`M${left[0]} ${left[1]}Q400 ${280-pose.contextTaskAmount*13} ${right[0]} ${right[1]}`} fill="none" stroke="#a993b5" strokeWidth="5"/>:!(seed.scene.exposure==='drink'&&kind==='cup')&&<g transform={`translate(${left.join(' ')})`}><HeldObject kind={kind}/></g>}
    {writing&&!occupied&&<path d={`M${right[0]+2} ${right[1]-5}L${right[0]-16} ${right[1]+1}`} stroke="#b6a16c" strokeWidth="4" strokeLinecap="round"/>}
    {task==='meal'&&!occupied&&<path d={`M${right[0]+1} ${right[1]-3}L${right[0]-17} ${right[1]+5}`} stroke="#a9ae9a" strokeWidth="3"/>}
  </g>;
}
