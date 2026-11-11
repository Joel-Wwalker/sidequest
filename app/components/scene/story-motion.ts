import type { StoryAction, StoryTarget } from '../../data/catalog/scene-stories';

type Point=[number,number];
export type StoryGesture={left:Point;right:Point;lean:number;tilt:number;eyes:number;smile:number;lookX:number;lookY:number;brow:number;mouth:number;gut:number;heat:number};

/** Actions are selected by the authored story, never an ID hash or a risk keyword. */
export function storyGesture(action:StoryAction,t:number,target?:StoryTarget):StoryGesture{
  const s=Math.sin;
  const g:StoryGesture={left:[358,268],right:[460,268],lean:0,tilt:0,eyes:0,smile:0,lookX:0,lookY:0,brow:0,mouth:0,gut:0,heat:0};
  switch(action){
    case'focus':g.left=[354,259];g.right=[377+s(t*2.3)*3,258+s(t*1.7)*2];g.lookX=-2;g.lookY=2;g.brow=2;g.tilt=-3;break;
    case'settle':g.left=[358,279];g.right=[451,280];g.tilt=-3;g.eyes=.2;g.smile=1.8;g.lean=-2;break;
    case'sleep':g.left=[368,284];g.right=[451,285];g.eyes=.85;g.tilt=8+s(t*.7);g.lean=3;g.mouth=.15;break;
    case'breathe-easier':g.left=[351,266+s(t*1.3)*3];g.right=[459,266+s(t*1.3)*3];g.lean=-2;g.mouth=.35+.15*s(t*1.3);g.brow=1;g.smile=1;break;
    case'breathing-watch':g.left=[399,242];g.right=[454,281];g.lean=5;g.tilt=6;g.mouth=.5;g.eyes=.45;g.brow=-1;break;
    case'mouth-ease':g.left=[357,272];g.right=[446,228+s(t)*2];g.lookX=1.5;g.tilt=-4;g.mouth=.25+.08*s(t*1.4);g.brow=1.2;g.smile=1;break;
    case'stomach-relief':g.left=[398,267];g.right=[456,274];g.lean=-2;g.tilt=-2;g.smile=1.4;g.lookY=1;break;
    case'pelvic-relief':g.left=[398,283];g.right=[458,277];g.lean=-1.5;g.tilt=-2;g.smile=1.2;g.lookY=1;break;
    case'hearing-check':g.left=[357,277];g.right=[450,223];g.lookX=2;g.tilt=5;g.brow=2;g.smile=-1.5;break;
    case'joint-release':g.left=[345,252-s(t)*6];g.right=[473,251+s(t)*6];g.lean=s(t)*2;g.smile=1;g.lookX=-1.3;break;
    case'skin-check':g.left=[345,251];g.right=[363,255+s(t)*2];g.lookX=-2.5;g.lookY=2;g.tilt=-4;g.brow=.8;break;
    case'skin-fragility-check':g.left=[344,253];g.right=[372,259];g.lookX=-2.5;g.lookY=2;g.tilt=-5;g.brow=1.8;g.smile=-1.6;break;
    case'nail-check':g.left=[345,240];g.right=[373,246+s(t*.8)*2];g.lookX=-3;g.lookY=1.5;g.tilt=-5;g.brow=1.8;break;
    case'hair-check':g.left=[339,238];g.right=[449,224];g.lookX=-2.6;g.tilt=-5+s(t*.8)*2;g.brow=1;break;
    case'meal-pause':g.left=[353,269];g.right=[446,260];g.lookX=-2;g.lookY=2;g.lean=-3;g.tilt=3;g.mouth=.15;break;
    case'glucose-check':g.left=[348,251];g.right=[368,252];g.lookX=-3;g.lookY=2;g.tilt=-3;g.brow=1.5;break;
    case'pulse-check':g.left=[369,256];g.right=[379,255];g.lookX=-1.8;g.lookY=2;g.brow=-.5;g.tilt=-4;break;
    case'pressure-check':g.left=[351,269];g.right=[459,255];g.lookX=2;g.lookY=2;g.tilt=3;g.brow=1;break;
    case'review-labs':g.left=[350,256];g.right=[376,251+s(t*.8)*3];g.lookX=-2.3;g.lookY=2;g.tilt=-4;g.brow=1.5;break;
    case'review-interactions':g.left=[345,261];g.right=[462,255];g.lookX=s(t*.8)*2;g.lookY=1.5;g.tilt=s(t*.8)*3;g.brow=1.5;break;
    case'review-uncertainty':g.left=[351,261];g.right=[469,249];g.lookX=-1.6;g.tilt=-5;g.brow=2;g.smile=-.6;break;
    case'recovery-check':g.left=[353,259];g.right=[467,258];g.lookX=-2;g.tilt=-2;g.brow=.8;break;
    case'vision-check':g.left=[338,236];g.right=[461,272];g.lookX=-3;g.tilt=-3;g.eyes=.15+.08*s(t);break;
    case'cramp':g.left=[400,271];g.right=[447,282];g.gut=1;g.lean=7;g.tilt=7;g.smile=-3;g.eyes=.2;g.lookY=2;break;
    case'nausea':g.left=[399,263];g.right=[453,279];g.gut=.55;g.lean=5;g.tilt=4;g.smile=-2.5;g.mouth=.15;g.lookY=2;break;
    case'tremor':g.left=[346+s(t*8)*1.6,253+s(t*7)*1.2];g.right=[470+s(t*9)*1.8,255];g.brow=1.3;g.lookX=-2;g.smile=-2;break;
    case'flush':g.left=[345,251];g.right=[465+s(t*2)*5,231];g.heat=.9;g.mouth=.25;g.smile=-1.8;g.brow=1;break;
    case'dry-mouth':g.left=[350,266];g.right=[446,232];g.mouth=.35+.1*s(t*2);g.smile=-2;g.lookX=-2;g.tilt=3;break;
    case'dizzy':g.left=[331,236];g.right=[474,249];g.lean=s(t)*4;g.tilt=-s(t)*5;g.lookX=-s(t)*3;g.smile=-2;g.brow=1;break;
    case'itch':g.left=[348,253];g.right=[365+s(t*2.4)*2,257+s(t*2.4)*2];g.tilt=-4;g.lookX=-2.5;g.lookY=2;g.smile=-2;break;
    case'bruise-check':g.left=[347,249];g.right=[370,257];g.lookX=-2.5;g.lookY=2;g.tilt=-5;g.brow=2;g.smile=-1.4;break;
    case'ankle-check':g.left=[364,285];g.right=[449,286];g.lookY=3;g.tilt=10;g.lean=5;g.brow=1;g.smile=-1;break;
    case'muscle-guard':g.left=[399,245];g.right=[452,280];g.lean=4;g.tilt=5;g.smile=-2;g.lookX=-2;break;
    case'tendon-guard':g.left=[365,286];g.right=[453,281];g.lean=6;g.tilt=9;g.lookY=3;g.smile=-2;g.eyes=.15;break;
    case'bladder-check':g.left=[398,284];g.right=[453,280];g.lean=4;g.tilt=5;g.lookY=2;g.smile=-2;break;
    case'restless':g.left=[347+s(t*3)*3,251];g.right=[469,250+s(t*3)*3];g.lean=s(t*2)*2;g.lookX=s(t*2)*3;g.smile=-2;g.brow=1;break;
    case'drowsy':g.left=[366,282];g.right=[450,286];g.eyes=.7;g.tilt=6+s(t*.7)*3;g.lean=4;g.mouth=.4+.2*s(t*.8);break;
    case'light-sensitive':g.left=[331,230];g.right=[456,276];g.eyes=.65;g.tilt=-6;g.lean=2;g.smile=-1.7;g.lookX=-1;break;
    case'withdrawal-watch':g.left=[351,259];g.right=[466,252];g.lookX=s(t*.8)*2;g.brow=1.8;g.smile=-1;g.tilt=3;break;
    case'infection-watch':g.left=[348,258];g.right=[377,252];g.lookX=-2.5;g.lookY=2;g.tilt=-3;g.brow=2;break;
    case'perception-shift':g.left=[334,234+s(t*.8)*4];g.right=[475,239-s(t*.8)*4];g.lookX=s(t*.6)*3;g.lookY=-1.5;g.tilt=s(t*.7)*6;g.brow=2;g.mouth=.2;break;
    case'dissociate':g.left=[344,257];g.right=[474,268];g.lean=-4;g.tilt=-7;g.eyes=.35;g.lookY=-1.5;g.mouth=.15;break;
    case'tingle':g.left=[346,249];g.right=[372,255];g.lookX=-2.5;g.lookY=2;g.tilt=-3;g.brow=2;g.mouth=.15;break;
    case'headache-ease':g.left=[352,274];g.right=[448,226];g.lookX=1;g.eyes=.2;g.tilt=-3;g.smile=1;break;
    case'cough-ease':g.left=[399,243];g.right=[457,275];g.mouth=.25;g.lean=-1.5;g.smile=.8;g.tilt=-2;break;
    case'urinary-ease':g.left=[398,282];g.right=[461,270];g.lean=-1;g.smile=1;g.lookY=1;break;
    case'nutrition-check':g.left=[350,265];g.right=[376,260];g.lookX=-2;g.lookY=2;g.tilt=-2;g.brow=1;break;
    case'urgent-review':g.left=[345,250];g.right=[462,249];g.lookX=-2.5;g.lookY=1;g.tilt=-3;g.brow=3;g.smile=-2;g.mouth=.25;break;
    case'mouth-discomfort':g.left=[358,275];g.right=[446,226];g.lookX=1;g.tilt=4;g.smile=-2.5;g.brow=1;g.mouth=.25;break;
    case'steadier-hands':g.left=[350,252];g.right=[467,254];g.lookX=-2;g.lookY=1;g.brow=1;g.smile=.7;break;
    case'training-effort':g.left=[342,253-Math.sin(t)*4];g.right=[476,253-Math.sin(t)*4];g.lean=-2;g.lookY=1;g.brow=1.5;g.smile=.4;break;
    case'symptom-review':g.left=[350,258];g.right=[373,260+s(t*1.2)*2];g.lookX=-2.4;g.lookY=2.3;g.tilt=-3;g.brow=1.2;g.smile=-.6;break;
    case'nose-discomfort':g.left=[355,274];g.right=[447,221];g.lookX=1.4;g.lookY=.5;g.tilt=-3;g.brow=1.8;g.mouth=.1;g.smile=-2;break;
    case'reflux-discomfort':g.left=[401,250];g.right=[455,274];g.lookY=1.4;g.tilt=4;g.lean=3;g.brow=1.5;g.mouth=.15;g.smile=-2;break;
    default:{const missing:never=action;throw new Error(`Unimplemented story action: ${missing}`);}
  }
  if(action==='muscle-guard'&&target==='joint'){g.left=[350,253];g.right=[365,256];g.lookX=-2.5;g.lookY=2;g.tilt=-4;}
  if(action==='light-sensitive'&&target==='skin'){g.left=[346,253];g.right=[366,256];g.eyes=0;g.lookX=-2.5;g.lookY=2;g.tilt=-4;g.lean=1;}
  return g;
}

export const actionUsesContext=(action:StoryAction)=>['focus','recovery-check','review-uncertainty','nutrition-check','withdrawal-watch'].includes(action);

/** The response grows out of the activity; a downside visibly interrupts it. */
export function contextHandoff(t:number){
  const ease=(v:number)=>{const x=Math.max(0,Math.min(1,v));return x*x*(3-2*x);};
  return t<14?1-ease((t-8.2)/3):1-ease((t-14)/3);
}
export function handoffObjectOpacity(t:number,part:'task'|'action'){
  const h=contextHandoff(t),v=part==='task'?(h-.5)*2:(.5-h)*2;
  const x=Math.max(0,Math.min(1,v));return x*x*(3-2*x);
}
