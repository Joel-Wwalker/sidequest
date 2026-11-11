import type { CatalogSeed, Reaction, Activity, ContextTask } from '../../data/catalog/types';
import { getSceneStory } from '../../data/catalog/scene-stories.ts';
import { storyGesture, actionUsesContext, restingGesture, type StoryGesture } from './story-motion.ts';

type Point = [number,number];
type Base = { t:number;intake:number;response:number;adverse:number;hand:Point;breath:number };
type Gesture = StoryGesture;
const rest=restingGesture;

export function sceneIdentity(id:string) {
  let hash=2166136261;
  for(const char of id){hash^=char.charCodeAt(0);hash=Math.imul(hash,16777619);}
  return hash>>>0;
}

function activityGesture(activity:Activity):Gesture {
  const g=rest();
  const targets:Record<Activity,[Point,Point,number,number]>={
    work:[[345,251],[465,253],-2,0],rest:[[361,275],[455,279],-1,1],meal:[[355,267],[459,253],-1,1],
    care:[[352,254],[460,257],1,0],training:[[344,251],[474,249],-1,0],recovery:[[358,266],[451,275],1,1],
    consultation:[[355,251],[469,249],2,0],research:[[351,253],[471,249],2,0],travel:[[357,265],[466,249],-2,0],
    breathing:[[355,258],[456,260],0,0],hair:[[350,254],[449,239],2,-1],skin:[[349,252],[453,256],-1,1],
    sleep:[[363,275],[455,279],-1,1],reading:[[353,253],[458,252],-1,1.5],garden:[[346,253],[458,269],-2,0],
    hydration:[[362,271],[461,262],-1,1],
  };
  [g.left,g.right,g.lookX,g.lookY]=targets[activity];
  return g;
}

function reactionGesture(reaction:Reaction,t:number):Gesture {
  const g=rest(),s=Math.sin;
  switch(reaction){
    case'focus':g.left=[352,251];g.right=[463,252];g.brow=1.5;g.lookX=-1.8;break;
    case'relax':g.left=[359,275];g.right=[456,279];g.tilt=-3;g.smile=.8;break;
    case'relief':g.left=[352,257];g.right=[460,267];g.brow=.4;g.smile=.6;break;
    case'sleepy':g.left=[368,282];g.right=[451,284];g.eyes=.65;g.tilt=8;g.lean=3;g.lookY=1;break;
    case'unsteady':g.left=[337+s(t)*3,246];g.right=[471,248+s(t)*3];g.lean=s(t)*5;g.tilt=-s(t)*3;g.smile=-1;break;
    case'tense':g.left=[340+s(t*2)*2,238];g.right=[469,242];g.brow=-.5;g.smile=-2;g.lookX=s(t*2)*1.7;break;
    case'nausea':g.left=[398,268];g.right=[449,280];g.gut=.5;g.lean=5;g.tilt=5;g.smile=-2;g.lookY=1;break;
    case'itch':g.left=[393,252+s(t*2.4)*2];g.right=[453,264];g.tilt=3;g.smile=-1;break;
    case'dry-mouth':g.left=[359,263];g.right=[458,260];g.mouth=.25;g.smile=-1;g.tilt=2;break;
    case'flush':g.left=[347,255];g.right=[464,261];g.heat=.6;g.smile=-1;g.brow=.5;break;
    case'cramp':g.left=[399,272];g.right=[447,281];g.gut=1;g.lean=6;g.tilt=6;g.smile=-2;break;
    case'dizzy':g.left=[330,225];g.right=[466,245];g.lean=s(t)*3;g.tilt=s(t)*4;g.lookX=-s(t)*2;g.smile=-1.5;break;
    case'heartbeat':g.left=[400,244];g.right=[468,267];g.lean=3;g.smile=-2;g.lookY=1.2;break;
    case'sensitivity':g.left=[332,231];g.right=[464,250];g.eyes=.25;g.tilt=-3;g.brow=-1;g.smile=-1;break;
    case'uncertain':g.left=[347,257];g.right=[473,253];g.brow=1.2;g.tilt=-2;g.lookX=2;break;
  }
  return g;
}

export function contextTask(seed:Pick<CatalogSeed,'scene'>):ContextTask {
  return seed.scene.task??({work:'checklist',hair:'mirror',meal:'meal',sleep:'sleep-log',reading:'reading',research:'research-notes',skin:'skin-check',hydration:'hydration',training:'stretching',travel:'packing',garden:'gardening',breathing:'breathing'} as Partial<Record<Activity,ContextTask>>)[seed.scene.activity]??'care-card';
}
function taskGesture(task:ContextTask,t:number):Gesture {
  const g=rest(),s=Math.sin;
  g.left=[385,270];g.right=[405,265];g.lookX=-1.5;g.lookY=1;
  switch(task){
    case'writing':case'meal-log':case'sleep-log':case'research-notes':g.left=[385,270];g.right=[405+s(t*3)*3,265+s(t*2)*2];g.tilt=-3;break;
    case'checklist':case'care-card':g.left=[385,270];g.right=[405,264+s(t*2)*2];g.lookY=1.5;break;
    case'typing':g.left=[385,270];g.right=[405+s(t*4)*2,265];g.lookY=2;break;
    case'reading':g.left=[389,266];g.right=[413,266];g.lookY=2;g.tilt=-2;break;
    case'planning':case'organizer':g.left=[385,275];g.right=[405+s(t)*3,271];g.lookY=2;break;
    case'mirror':g.left=[337,251];g.right=[440,305];g.lookX=-2.4;g.tilt=-3+s(t*.8)*2;break;
    case'hair-photo':g.left=[340,251];g.right=[440,305];g.lookX=-2;g.tilt=-4+s(t*.7)*3;break;
    case'skin-check':g.left=[386,258];g.right=[403,264];g.lookX=-.6;g.lookY=2;break;
    case'meal':g.left=[383,284];g.right=[411,271+s(t*1.8)*3];g.lookY=2;break;
    case'glucose-log':g.left=[383,270];g.right=[404,267];g.lookY=1.5;break;
    case'hydration':g.left=[351,266];g.right=[459,253];g.lookX=-1.8;break;
    case'resting':g.left=[357,276];g.right=[452,279];g.tilt=-3;g.lookY=1;break;
    case'stretching':g.left=[341-s(t)*3,253];g.right=[475+s(t)*3,254];g.lookX=-1;break;
    case'breathing':g.left=[357,268];g.right=[453,270];g.lookX=0;g.lookY=0;break;
    case'packing':g.left=[350,284];g.right=[457,264];g.lookX=-2;g.lookY=1;break;
    case'music':g.left=[351,254];g.right=[458,251];g.tilt=s(t)*3;g.lookX=-1;break;
    case'gardening':g.left=[383,282];g.right=[407,274];g.lookX=-2;g.lookY=1.5;break;
  }
  return g;
}
const ease=(x:number)=>{const v=Math.max(0,Math.min(1,x));return v*v*(3-2*v);};

/** The setting supplies the ordinary activity; the selected risk supplies the reaction. */
export function sampleContextPose(base:Base,seed:Pick<CatalogSeed,'id'|'status'|'scene'>) {
  const {t,response:r,adverse:a}=base;
  const opening=ease(t/1.8)*(1-ease((t-2.2)/1.7));
  const task=taskGesture(contextTask(seed),t);
  // A beverage stays in the right hand from the opening through the sip.
  if(seed.scene.exposure==='drink'&&seed.scene.prop==='cup'){
    task.left=[360,305];task.right=[459,253];task.lookX=2;task.lookY=1;
  }
  const activity=activityGesture(seed.scene.activity);
  const story=getSceneStory(seed as CatalogSeed);
  // Show the selected condition before treatment without inventing a visible
  // symptom for silent processes. The original held task object stays attached.
  if(story?.responseMode==='felt'||story?.responseMode==='visible-local'){
    if(story.responseAction==='mouth-ease'){task.mouth=.32;task.smile=-2;task.brow=-.5;task.tilt=3;}
    if(['breathe-easier','cough-ease'].includes(story.responseAction)){task.lean=4;task.mouth=.35;task.brow=-1;task.eyes=.15;}
    if(['stomach-relief','urinary-ease','pelvic-relief'].includes(story.responseAction)){task.lean=4;task.tilt=3;task.smile=-1.5;}
    if(story.responseAction==='headache-ease'){task.eyes=.45;task.tilt=5;task.smile=-1.5;}
  }
  const response=story?storyGesture(story.responseAction,t,story.responseTarget):seed.status==='experimental'?activity:reactionGesture(seed.scene.response,t);
  if(story?.responseAction==='ankle-check'){response.smile=.6;response.brow=.6;response.lean=2;response.tilt=4;}
  if(story?.responseAction==='steadier-hands'){task.left=[task.left[0]+Math.sin(t*9)*1.3,task.left[1]];task.right=[task.right[0]+Math.sin(t*8)*1.3,task.right[1]];}
  if(!story&&(seed.scene.response==='neutral'||seed.status==='experimental'))Object.assign(response,activity);
  const resumesTask=!story&&(['neutral','focus','relax','relief'].includes(seed.scene.response)||seed.status==='experimental');
  if(resumesTask){response.left=task.left;response.right=task.right;response.lookX=task.lookX;response.lookY=task.lookY;}
  const adverse=story?storyGesture(story.downsideAction,t,story.downsideTarget):reactionGesture(seed.scene.adverse,t);
  if(story&&['felt','visible-local'].includes(story.downsideMode)){
    adverse.smile=Math.min(adverse.smile,-1.6);adverse.brow=Math.max(adverse.brow,1.7);adverse.lookY+=.5;
  }
  // Paper is useful in the opening context. The selected event then lives in
  // the body, except activities whose physical object is part of the action.
  const physicalTask=['stretching','resting','breathing','music','gardening','packing'].includes(contextTask(seed));
  const keepResponseTask=!!story&&(actionUsesContext(story.responseAction)||(story.responseMode==='uncertain'&&physicalTask)||seed.id==='nystatin');
  const keepAdverseTask=!!story&&actionUsesContext(story.downsideAction);
  if(keepResponseTask){response.left=task.left;response.right=task.right;response.lookX=task.lookX;response.lookY=task.lookY;}
  if(keepAdverseTask){adverse.left=task.left;adverse.right=task.right;}
  // These variations use the existing selected event and real activity.
  // They do not attribute extra symptoms to silent or uncertain processes.
  const beat=(start:number,hold:number,end:number)=>ease((t-start)/.6)*(1-ease((t-hold)/(end-hold)));
  switch(seed.id){
    case'fluconazole':{
      const swallow=beat(10.1,10.8,11.5);response.mouth=.08+.42*swallow;response.tilt=-2+3*swallow;response.smile=2.4;response.breathing=.2;break;
    }
    case'nystatin':response.left=[337,251];response.right=[440,305];response.lookX=-2.5;response.tilt=-4+3*Math.sin(t*.8);response.mouth=.4;break;
    case'voriconazole':adverse.eyes=.12+.55*beat(17,17.6,18.3);adverse.lookX=3*Math.sin((t-15)*.8);adverse.tilt=2*Math.sin((t-15)*.45);break;
    case'temazepam':response.tilt=10;response.lean=5;response.drop=3;adverse.tilt=3+9*beat(17.3,18.2,18.8);adverse.lean=2+5*beat(17.3,18.2,18.8);break;
    case'zolpidem':response.tilt=-8;response.lean=-3;response.drop=2;adverse.eyes=.3+.5*beat(16,16.8,17.2);adverse.lookX=-2+3*beat(17.2,18,19);adverse.tilt=3+8*beat(18.3,19,19.6);break;
    case'ramelteon':response.tilt=5;response.lean=2;response.eyes=.45+.45*ease((t-9)/3);adverse.mouth=.1+.6*beat(17,17.6,18.4);adverse.tilt=-3-5*beat(17,17.6,18.4);adverse.lean=2;break;
    case'eszopiclone':response.tilt=-10;response.eyes=.9;adverse.lookY=1.5;adverse.tilt=2+10*beat(19,19.8,20.3);adverse.eyes=.3+.5*beat(19,19.8,20.3);break;
    case'amoxicillin':adverse.left=[389,285];adverse.right=[440,305];adverse.lean=4+4*beat(16.6,17.5,18.6);adverse.tilt=5;break;
    case'ampicillin':adverse.right=[412,286];adverse.left=[360,305];adverse.lean=3+5*beat(18,19.1,20.2);adverse.lookX=1;adverse.tilt=7;break;
    case'cephalexin':adverse.left=[389,285];adverse.right=[422,292];adverse.lean=7;adverse.drop=1.5;adverse.tilt=8;break;
    case'atorvastatin':adverse.left=[399,247];adverse.right=[440,305];adverse.lean=3;adverse.lookX=-2;break;
    case'rosuvastatin':adverse.left=[364,300];adverse.right=[440,305];adverse.lean=5;adverse.tilt=9;adverse.lookY=3;adverse.drop=1.2;break;
    case'insulin-glargine':response.lookX=.4;response.tilt=0;adverse.lookX=.4;adverse.tilt=0;break;
    case'insulin-lispro':response.left=[381,284];response.lookX=-1.6;response.lookY=1.3;response.tilt=-2;adverse.lookX=-1.6;adverse.lookY=1.3;break;
    case'insulin-aspart':response.right=[415,282];response.lookX=1.1;response.tilt=2;adverse.lookX=1.1;adverse.tilt=2;break;
    case'albuterol':response.left=[351,284];response.right=[449,284];response.lean=-3;response.breathing=1;adverse.left=[398,245];adverse.right=[440,305];adverse.tilt=3;break;
    case'levalbuterol':response.left=[360,305];response.right=[440,305];response.lean=-1;response.breathing=.8;adverse.left=[344+Math.sin(t*10)*2,268];adverse.right=[456+Math.sin(t*9)*2,270];break;
    case'semaglutide':response.left=[381,284];response.right=[440,305];response.lean=-3;adverse.left=[389,277];adverse.lean=4+4*beat(16.4,17.5,18.4);adverse.tilt=5;break;
    case'tirzepatide':response.left=[381,284];response.right=[420,280];response.tilt=4;response.lean=-1;adverse.left=[360,305];adverse.right=[415,277];adverse.lean=2+6*beat(18.2,19.4,20.2);adverse.tilt=3+5*beat(18.2,19.4,20.2);break;
    case'phenibut':response.eyes=.45;response.tilt=5;response.lean=3;response.smile=.3;response.breathing=-.4;break;
    case'beta-alanine':adverse.left=[342+Math.sin(t*6)*beat(17,18,19)*4,259];adverse.right=[440,305];adverse.lookX=-3;adverse.tilt=-4;break;
    case'finasteride':adverse.lookX=-1.8;adverse.tilt=-4;adverse.brow=1.4;adverse.left=[354,294];break;
    case'dutasteride':adverse.lookX=1.8;adverse.tilt=3;adverse.brow=1;adverse.right=[446,294];break;
  }
  const mix=(left:Point,right:Point,origin:Point):Point=>[
    origin[0]+r*(left[0]-origin[0])+a*(right[0]-origin[0]),
    origin[1]+r*(left[1]-origin[1])+a*(right[1]-origin[1]),
  ];
  const right=mix(response.right,adverse.right,[440,305]);
  right[0]+=opening*(task.right[0]-440);right[1]+=opening*(task.right[1]-305);
  const exposureHand:Point=seed.scene.exposure==='topical'
    ? [440+(361-440)*base.intake,305+(260-305)*base.intake]
    : seed.scene.exposure==='inhaler'
    ? [(1-base.intake)**2*440+2*(1-base.intake)*base.intake*398+base.intake**2*414,(1-base.intake)**2*305+2*(1-base.intake)*base.intake*281+base.intake**2*213]
    : base.hand;
  const value=(key:Exclude<keyof Gesture,'left'|'right'>)=>opening*task[key]+r*response[key]+a*adverse[key];
  const left=mix(response.left,adverse.left,[360,305]);left[0]+=opening*(task.left[0]-360);left[1]+=opening*(task.left[1]-305);
  return {
    hand:[exposureHand[0]+right[0]-440,exposureHand[1]+right[1]-305] as Point,
    symbolicHand:right,leftHand:left,
    bodyLean:value('lean'),bodyDrop:value('drop'),tilt:value('tilt'),eyelid:value('eyes'),
    smile:value('smile'),lookX:value('lookX'),lookY:value('lookY'),browLift:value('brow'),mouthOpen:value('mouth'),
    gut:value('gut'),heat:value('heat'),worry:a*(story&&['felt','visible-local'].includes(story.downsideMode)?.6:0),pupil:1,footTap:value('tap'),ghost:0,sway:value('sway'),breath:base.breath*(1+value('breathing')),
    contextTaskAmount:opening+(resumesTask||keepResponseTask?r:0)+(keepAdverseTask?a:0),
    contextPropOpacity:Math.max(1-ease((t-3.3)/.7)+ease((t-23.2)/.8),resumesTask||keepResponseTask?r:0,keepAdverseTask?a:0),
    contextExposureOpacity:ease((t-3.7)/.4)*(1-ease((t-7.7)/.5)),
  };
}
