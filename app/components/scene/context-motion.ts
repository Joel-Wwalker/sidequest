import type { CatalogSeed, Reaction, Activity, ContextTask } from '../../data/catalog/types';
import { getSceneStory } from '../../data/catalog/scene-stories.ts';
import { storyGesture, actionUsesContext, contextHandoff, handoffObjectOpacity } from './story-motion.ts';

type Point = [number,number];
type Base = { t:number;intake:number;response:number;adverse:number;hand:Point };
type Gesture = {left:Point;right:Point;lean:number;tilt:number;eyes:number;smile:number;lookX:number;lookY:number;brow:number;mouth:number;gut:number;heat:number};
const rest = ():Gesture=>({left:[366,279],right:[465,267],lean:0,tilt:0,eyes:0,smile:0,lookX:0,lookY:0,brow:0,mouth:0,gut:0,heat:0});

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
    case'dry-mouth':g.left=[359,263];g.right=[445,239];g.mouth=.25;g.smile=-1;g.tilt=2;break;
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
  g.left=[359,258];g.right=[457,268];g.lookX=-1.5;g.lookY=1;
  switch(task){
    case'writing':case'meal-log':case'sleep-log':case'research-notes':g.left=[359,257];g.right=[374+s(t*3)*3,254+s(t*2)*2];g.tilt=-3;break;
    case'checklist':case'care-card':g.left=[355,253];g.right=[374,253+s(t*2)*4];g.lookY=1.5;break;
    case'typing':g.left=[359,255];g.right=[373+s(t*4)*2,254];g.lookY=2;break;
    case'reading':g.left=[365,256];g.right=[401,256];g.lookY=2;g.tilt=-2;break;
    case'planning':case'organizer':g.left=[351,264];g.right=[375+s(t)*4,261];g.lookY=2;break;
    case'mirror':g.left=[337,231];g.right=[443,219+ s(t)*1.5];g.lookX=-2.4;g.tilt=-3;break;
    case'hair-photo':g.left=[340,231];g.right=[448,190];g.lookX=-2;g.tilt=-2;break;
    case'skin-check':g.left=[347,253];g.right=[363,256];g.lookX=-2;g.lookY=2;break;
    case'meal':g.left=[357,267];g.right=[386,257+s(t*1.8)*3];g.lookY=2;break;
    case'glucose-log':g.left=[351,254];g.right=[372,254];g.lookY=1.5;break;
    case'hydration':g.left=[351,266];g.right=[459,253];g.lookX=-1.8;break;
    case'resting':g.left=[357,276];g.right=[452,279];g.tilt=-3;g.lookY=1;break;
    case'stretching':g.left=[341-s(t)*3,253];g.right=[475+s(t)*3,254];g.lookX=-1;break;
    case'breathing':g.left=[357,268];g.right=[453,270];g.lookX=0;g.lookY=0;break;
    case'packing':g.left=[350,284];g.right=[457,264];g.lookX=-2;g.lookY=1;break;
    case'music':g.left=[351,254];g.right=[458,251];g.tilt=s(t)*3;g.lookX=-1;break;
    case'gardening':g.left=[348,267];g.right=[372,263];g.lookX=-2;g.lookY=1.5;break;
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
    task.left=[366,279];task.right=[459,253];task.lookX=2;task.lookY=1;
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
  if(story){adverse.smile=Math.min(adverse.smile,-1.6);adverse.brow=Math.max(adverse.brow,1.7);adverse.lookY+=.5;}
  // Keep the person's actual book, meal, photo or research object in follow-up
  // actions instead of replacing every activity with the same clipboard.
  if(story)for(const [gesture,action,isRisk] of [[response,story.responseAction,false],[adverse,story.downsideAction,true]] as const){
    if(actionUsesContext(action)){
      gesture.left=task.left;
      if(action==='review-uncertainty'||action==='withdrawal-watch'){
        gesture.right=isRisk?[471,243]:[463,259];
        gesture.lookX=task.lookX;gesture.lookY=task.lookY;
        gesture.tilt=isRisk?5:-4;gesture.brow=isRisk?2.5:1.5;
      }else{
        gesture.right=task.right;gesture.lookX=task.lookX;gesture.lookY=task.lookY;
        gesture.tilt=task.tilt;gesture.brow=action==='focus'?2:1;
      }
    }
  }
  const handoff=story?contextHandoff(t):0;
  if(story)for(const [gesture,action] of [[response,story.responseAction],[adverse,story.downsideAction]] as const){
    if(!actionUsesContext(action)){
      const viaRest=(from:Point,to:Point,rest:Point):Point=>{
        const progress=1-handoff,first=progress<.5,start=first?from:rest,end=first?rest:to;
        const amount=ease(first?progress*2:(progress-.5)*2);
        return [start[0]+(end[0]-start[0])*amount,start[1]+(end[1]-start[1])*amount];
      };
      gesture.left=viaRest(task.left,gesture.left,[366,279]);
      gesture.right=viaRest(task.right,gesture.right,[465,267]);
      gesture.lookX+=(task.lookX-gesture.lookX)*handoff;
      gesture.lookY+=(task.lookY-gesture.lookY)*handoff;
    }
  }
  const mix=(left:Point,right:Point,origin:Point):Point=>[
    origin[0]+r*(left[0]-origin[0])+a*(right[0]-origin[0]),
    origin[1]+r*(left[1]-origin[1])+a*(right[1]-origin[1]),
  ];
  const right=mix(response.right,adverse.right,[465,267]);
  right[0]+=opening*(task.right[0]-465);right[1]+=opening*(task.right[1]-267);
  if(contextTask(seed)==='hair-photo'){
    // Lift outside the face before moving across the hairline; reverse the same path.
    const amount=opening+(resumesTask?r:0);
    right[0]=465+(task.right[0]-465)*amount+a*(adverse.right[0]-465)+(resumesTask?0:r*(response.right[0]-465));
    right[1]=267+(task.right[1]-267)*amount+a*(adverse.right[1]-267)+(resumesTask?0:r*(response.right[1]-267));
  }
  const exposureHand:Point=seed.scene.exposure==='topical'
    ? [465+(361-465)*base.intake,267+(260-267)*base.intake]
    : seed.scene.exposure==='inhaler'
    ? [465-28*base.intake+48*base.intake*(1-base.intake),267-60*base.intake]
    : base.hand;
  const value=(key:Exclude<keyof Gesture,'left'|'right'>)=>opening*task[key]+r*response[key]+a*adverse[key];
  const left=mix(response.left,adverse.left,[366,279]);left[0]+=opening*(task.left[0]-366);left[1]+=opening*(task.left[1]-279);
  return {
    hand:[exposureHand[0]+right[0]-465,exposureHand[1]+right[1]-267] as Point,
    symbolicHand:right,leftHand:left,
    bodyLean:value('lean'),bodyDrop:a*(seed.scene.adverse==='sleepy'?1:0),tilt:value('tilt'),eyelid:value('eyes'),
    smile:value('smile'),lookX:value('lookX'),lookY:value('lookY'),browLift:value('brow'),mouthOpen:value('mouth'),
    gut:value('gut'),heat:value('heat'),worry:a*(seed.scene.adverse==='neutral'?0:.6),pupil:1,footTap:0,ghost:0,sway:0,
    contextTaskAmount:opening+(resumesTask||story&&actionUsesContext(story.responseAction)?r:r*handoff)+(story&&actionUsesContext(story.downsideAction)?a:a*handoff),
    contextPropOpacity:Math.max(1-ease((t-3.3)/.7)+ease((t-23.2)/.8),resumesTask||story&&actionUsesContext(story.responseAction)?r:r*(story?handoffObjectOpacity(t,'task'):0),story&&actionUsesContext(story.downsideAction)?a:a*(story?handoffObjectOpacity(t,'task'):0)),
    contextExposureOpacity:ease((t-3.7)/.4)*(1-ease((t-7.7)/.5)),
  };
}
