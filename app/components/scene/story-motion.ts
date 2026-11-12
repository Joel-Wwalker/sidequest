import type { StoryAction, StoryTarget } from '../../data/catalog/scene-stories';

type Point=[number,number];
export type StoryGesture={left:Point;right:Point;lean:number;tilt:number;eyes:number;smile:number;lookX:number;lookY:number;brow:number;mouth:number;gut:number;heat:number;drop:number;sway:number;tap:number;breathing:number};
export const restingGesture=():StoryGesture=>({left:[360,305],right:[440,305],lean:0,tilt:0,eyes:0,smile:0,lookX:0,lookY:0,brow:0,mouth:0,gut:0,heat:0,drop:0,sway:0,tap:0,breathing:0});
const ease=(v:number)=>{const x=Math.max(0,Math.min(1,v));return x*x*(3-2*x);};
const pulse=(t:number,start:number,hold:number,end:number)=>ease((t-start)/.55)*(1-ease((t-hold)/(end-hold)));

/** Actions are selected by the authored story, never an ID hash or a risk keyword. */
export function storyGesture(action:StoryAction,t:number,target?:StoryTarget):StoryGesture{
  const s=Math.sin,g=restingGesture(),time=t<14?t-8.2:t-14;
  const contract=pulse(time,1.2,2.5,3.5)+pulse(time,5.1,6.2,7.2);
  const nod=pulse(time,1.3,2.2,2.8),check=pulse(time,.5,2.3,4.2);
  switch(action){
    case'focus':g.left=[354,259];g.right=[377+s(t*2.3)*3,258+s(t*1.7)*2];g.lookX=-2;g.lookY=2;g.brow=2;g.tilt=-3;break;
    case'settle':g.tilt=-4;g.eyes=.25;g.smile=1.6;g.lean=-2;g.drop=1.6;g.breathing=-.3;break;
    case'sleep':g.eyes=.55+.35*ease(time/3);g.tilt=5+7*ease(time/3);g.lean=2+3*ease(time/3);g.drop=2.2;g.mouth=.12;g.breathing=-.5;break;
    case'breathe-easier':g.left=[351,285+s(t*1.3)*2];g.right=[449,285+s(t*1.3)*2];g.lean=-2;g.drop=-.6;g.mouth=.18+.08*s(t*1.3);g.brow=.8;g.smile=1.8;g.breathing=.8;break;
    case'breathing-watch':g.left=[399,244];g.lean=6;g.tilt=7;g.mouth=.5;g.eyes=.5;g.brow=-1;g.drop=2;g.breathing=-.7;break;
    case'mouth-ease':g.lookX=.5;g.tilt=-2;g.mouth=.14+.25*check;g.brow=.8;g.smile=2.3;g.drop=1;break;
    case'stomach-relief':g.left=[398,267];g.right=[456,274];g.lean=-2;g.tilt=-2;g.smile=1.4;g.lookY=1;break;
    case'pelvic-relief':g.left=[398,283];g.right=[458,277];g.lean=-1.5;g.tilt=-2;g.smile=1.2;g.lookY=1;break;
    case'hearing-check':g.lookX=2.5;g.tilt=7+2*s(t*.8);g.brow=2;g.smile=-1.5;break;
    case'joint-release':g.left=[345,252-s(t)*6];g.right=[473,251+s(t)*6];g.lean=s(t)*2;g.smile=1;g.lookX=-1.3;break;
    case'skin-check':g.left=[386,258];g.right=[403,263+s(t)*2];g.lookX=-2.5;g.lookY=2;g.tilt=-4;g.brow=.8;break;
    case'skin-fragility-check':g.left=[386,258];g.right=[403,263];g.lookX=-2.5;g.lookY=2;g.tilt=-5;g.brow=1.8;g.smile=-1.6;break;
    case'nail-check':g.left=[388,251];g.right=[405,258+s(t*.8)*2];g.lookX=-3;g.lookY=1.5;g.tilt=-5;g.brow=1.8;break;
    case'hair-check':g.left=[337,251];g.lookX=-2.6;g.tilt=-5+s(t*.8)*3;g.brow=1;break;
    case'meal-pause':g.left=[353,269];g.right=[446,260];g.lookX=-2;g.lookY=2;g.lean=-3;g.tilt=3;g.mouth=.15;break;
    case'glucose-check':g.lookX=-.6;g.lookY=.5;g.tilt=-1;g.breathing=.15;break;
    case'pulse-check':g.left=[369,256];g.right=[379,255];g.lookX=-1.8;g.lookY=2;g.brow=-.5;g.tilt=-4;break;
    case'pressure-check':g.lookX=.7;g.tilt=1;g.breathing=.2;break;
    case'review-labs':g.lookY=.5;g.tilt=-1;break;
    case'review-interactions':g.lookX=s(t*.7)*1.2;g.tilt=s(t*.7)*1.5;break;
    case'review-uncertainty':g.left=[350,282];g.right=[450,282];g.lookX=-1.6;g.tilt=-3;g.brow=1.4;g.smile=-.3;break;
    case'recovery-check':g.lookX=-.6;g.tilt=-1;g.breathing=.15;break;
    case'vision-check':g.lookX=2.4*s(time*.65);g.lookY=.5;g.tilt=-2+2*s(time*.5);g.eyes=.15+.4*nod;g.brow=1.2;g.smile=-1;break;
    case'cramp':g.left=[389,285];g.gut=.7+.3*contract;g.lean=4+5*contract;g.tilt=4+4*contract;g.smile=-2-2*contract;g.eyes=.15+.25*contract;g.lookY=2;g.drop=1.5*contract;break;
    case'nausea':g.left=[389,277];g.gut=.55;g.lean=4+2*check;g.tilt=5;g.smile=-3;g.mouth=.1+.25*check;g.lookY=2;g.drop=.8;g.breathing=-.35;break;
    case'tremor':g.left=[346+s(t*8)*1.6,253+s(t*7)*1.2];g.right=[470+s(t*9)*1.8,255];g.brow=1.3;g.lookX=-2;g.smile=-2;break;
    case'flush':g.left=[345,251];g.right=[465+s(t*2)*5,231];g.heat=.9;g.mouth=.25;g.smile=-1.8;g.brow=1;break;
    case'dry-mouth':g.mouth=.2+.45*check;g.smile=-2;g.lookX=-1.5;g.tilt=3;g.brow=.8;break;
    case'dizzy':g.left=[337,265];g.right=[463,267];g.lean=s(t)*5;g.sway=s(t)*2;g.tilt=-s(t-.3)*6;g.lookX=-s(t-.35)*3;g.smile=-2;g.brow=1;g.drop=.8*(1+s(t));break;
    case'itch':g.left=[386,258];g.right=[400+s(t*2.4)*2,263+s(t*2.4)*2];g.tilt=-4;g.lookX=-2.5;g.lookY=2;g.smile=-2;break;
    case'bruise-check':g.left=[386,258];g.right=[403,264];g.lookX=-2.5;g.lookY=2;g.tilt=-5;g.brow=2;g.smile=-1.4;break;
    case'ankle-check':g.left=[364,285];g.right=[449,286];g.lookY=3;g.tilt=10;g.lean=5;g.brow=1;g.smile=-1;break;
    case'muscle-guard':g.left=[399,245];g.right=[452,280];g.lean=4;g.tilt=5;g.smile=-2;g.lookX=-2;break;
    case'tendon-guard':g.left=[365,286];g.right=[453,281];g.lean=6;g.tilt=9;g.lookY=3;g.smile=-2;g.eyes=.15;break;
    case'bladder-check':g.left=[398,284];g.right=[453,280];g.lean=4;g.tilt=5;g.lookY=2;g.smile=-2;break;
    case'restless':g.left=[345+s(t*3)*3,272];g.right=[456,270+s(t*3)*4];g.lean=s(t*2)*2.5;g.lookX=s(t*2)*3;g.smile=-2;g.brow=1;g.tap=1+Math.max(0,s(t*6))*2;break;
    case'drowsy':g.eyes=.3+.5*nod;g.tilt=3+9*nod;g.lean=2+5*nod;g.drop=1+2*nod;g.mouth=.1+.5*check;g.lookY=1+nod;g.breathing=-.35;break;
    case'light-sensitive':g.left=[337,252];g.eyes=.65;g.tilt=-6;g.lean=2;g.smile=-1.7;g.lookX=-1;break;
    case'withdrawal-watch':g.lookX=s(t*.8)*1.8;g.brow=1.8;g.smile=-1;g.tilt=3;break;
    case'infection-watch':g.lookY=.6;g.brow=.6;break;
    case'perception-shift':g.left=[334,234+s(t*.8)*4];g.right=[475,239-s(t*.8)*4];g.lookX=s(t*.6)*3;g.lookY=-1.5;g.tilt=s(t*.7)*6;g.brow=2;g.mouth=.2;break;
    case'dissociate':g.left=[344,257];g.right=[474,268];g.lean=-4;g.tilt=-7;g.eyes=.35;g.lookY=-1.5;g.mouth=.15;break;
    case'tingle':g.left=[386,258];g.right=[404,264];g.lookX=-2.5;g.lookY=2;g.tilt=-3;g.brow=2;g.mouth=.15;break;
    case'headache-ease':g.lookX=1;g.eyes=.1;g.tilt=-2;g.smile=1.8;g.drop=1;break;
    case'cough-ease':g.left=[399,243];g.right=[457,275];g.mouth=.25;g.lean=-1.5;g.smile=.8;g.tilt=-2;break;
    case'urinary-ease':g.left=[398,282];g.right=[461,270];g.lean=-1;g.smile=1;g.lookY=1;break;
    case'nutrition-check':g.lookY=.6;g.tilt=1;break;
    case'urgent-review':g.lookX=-1;g.brow=1.1;g.tilt=2;break;
    case'mouth-discomfort':g.lookX=1;g.tilt=4;g.smile=-2.5;g.brow=1;g.mouth=.2+.25*check;break;
    case'steadier-hands':g.left=[350,252];g.right=[467,254];g.lookX=-2;g.lookY=1;g.brow=1;g.smile=.7;break;
    case'training-effort':g.left=[342,253-Math.sin(t)*4];g.right=[476,253-Math.sin(t)*4];g.lean=-2;g.lookY=1;g.brow=1.5;g.smile=.4;break;
    case'symptom-review':g.lookX=-1;g.lookY=.7;g.tilt=2;g.brow=.9;break;
    case'nose-discomfort':g.lookX=1.4;g.lookY=.5;g.tilt=-3;g.brow=1.8;g.mouth=.15;g.smile=-2;break;
    case'reflux-discomfort':g.left=[401,250];g.right=[455,274];g.lookY=1.4;g.tilt=4;g.lean=3;g.brow=1.5;g.mouth=.15;g.smile=-2;break;
    default:{const missing:never=action;throw new Error(`Unimplemented story action: ${missing}`);}
  }
  if(action==='muscle-guard'&&target==='joint'){g.left=[386,258];g.right=[403,264];g.lookX=-2.5;g.lookY=2;g.tilt=-4;}
  if(action==='light-sensitive'&&target==='skin'){g.left=[386,258];g.right=[403,264];g.eyes=0;g.lookX=-2.5;g.lookY=2;g.tilt=-4;g.lean=1;}
  return g;
}

export const actionUsesContext=(action:StoryAction)=>action==='focus';

/** The response grows out of the activity; a downside visibly interrupts it. */
export function contextHandoff(t:number){
  const ease=(v:number)=>{const x=Math.max(0,Math.min(1,v));return x*x*(3-2*x);};
  return t<14?1-ease((t-8.2)/1.5):1-ease((t-14)/1.5);
}
export function handoffObjectOpacity(t:number,part:'task'|'action'){
  const h=contextHandoff(t),v=part==='task'?(h-.5)*2:(.5-h)*2;
  const x=Math.max(0,Math.min(1,v));return x*x*(3-2*x);
}
