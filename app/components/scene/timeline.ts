import { getCatalogSeed } from '../../data/catalog/index.ts';
import { sampleContextPose } from './context-motion.ts';
export const LOOP_SECONDS = 24;
export const STAGE_TIMES = [3.7, 9, 18.1] as const;
export type Motion = 'jitter' | 'sway' | 'panic' | 'heat' | 'breathing' | 'gut' | 'craving' | 'hormone' | 'kidney' | 'interaction' | 'dissociate';
export type Point = [number, number];
const clamp = (x: number) => Math.max(0, Math.min(1, x));
export const smooth = (x: number) => { const t = clamp(x); return t * t * (3 - 2 * t); };
const ramp = (t: number, a: number, b: number) => smooth((t - a) / (b - a));
const envelope = (t: number, a: number, b: number, c: number, d: number) => ramp(t, a, b) * (1 - ramp(t, c, d));
const rampIntegral = (t: number, a: number, b: number) => {
  if (t <= a) return 0;
  if (t >= b) return t - (a + b) / 2;
  const u = (t - a) / (b - a);
  return (b - a) * (u ** 3 - u ** 4 / 2);
};

/** One clock drives every visible channel, including idle movement and labels. */
export function sampleScene(seconds: number, motion: Motion | string, substanceKey = '') {
  const t = ((seconds % LOOP_SECONDS) + LOOP_SECONDS) % LOOP_SECONDS;
  const context=getCatalogSeed(substanceKey),contextual=motion==='context'||!!context;
  const intake = contextual?envelope(t,4.1,5.7,6.7,8.2):envelope(t, 1.4, 3.1, 4.4, 6.1);
  const response = contextual?envelope(t,8.2,10,12.2,14):envelope(t, 5.9, 7.2, 11.9, 13.4);
  const adverse = contextual?envelope(t,14,15.5,21,23):envelope(t, 13.4, 14.9, 20.8, 22.8);
  const wave = Math.sin(t * Math.PI * 2 / 4);
  const tremor = adverse * (motion === 'jitter' || motion === 'craving' ? Math.sin(t * 15) * 1.25 : 0);
  const sway = adverse * (motion === 'sway' ? Math.sin(t * 1.3) * 4 : motion === 'dissociate' ? Math.sin(t * .9) * 2 : 0);
  const gut = adverse * (motion === 'gut' || motion === 'kidney' ? 1 : 0);
  // Integrate the changing rate rather than switching periods mid-breath.
  // The base period makes the phase complete five cycles across the whole loop.
  const slowTime = rampIntegral(t, 13.4, 14.9) - rampIntegral(t, 20.8, 22.8);
  const breathPhase = motion === 'breathing' ? (t - slowTime * .75) * Math.PI * 2 / 3.6525 : t * Math.PI / 2;
  const breath = Math.sin(breathPhase) * (motion === 'breathing' ? 2.5 - adverse * 1.25 : 1 + adverse * .15);
  const blinkAt = t % 6;
  const blink = 1 - .9 * envelope(blinkAt, 4.4, 4.52, 4.64, 4.8);
  const base = {
    t, intake, response, adverse, oralProp: 1 - (contextual?envelope(t,6.1,6.7,23.2,24):envelope(t, 3.3, 3.9, 22.8, 24)), stage: t < (contextual?8.2:5.9) ? 0 : t < (contextual?14:13.4) ? 1 : 2,
    contextTaskAmount:0,contextPropOpacity:0,contextExposureOpacity:1,
    // Reach around the shoulder on an arc; a straight line crosses its joint.
    hand: [(1 - intake) ** 2 * 465 + 2 * (1 - intake) * intake * 500 + intake ** 2 * 409 + tremor,
      (1 - intake) ** 2 * 267 + 2 * (1 - intake) * intake * 170 + intake ** 2 * 211] as Point,
    leftHand: [366 + gut * 32, 279 - gut * 11] as Point,
    sway, tremor, breath, breathPhase, blink, gut,
    tilt: adverse * (motion === 'sway' ? Math.sin(t * 1.3) * 7 : motion === 'breathing' ? 7 : motion === 'dissociate' ? -4 : motion === 'gut' ? 5 : 0),
    eyelid: adverse * (motion === 'breathing' ? .55 : motion === 'sway' ? .3 : 0),
    heat: adverse * (motion === 'heat' || motion === 'panic' ? 1 : 0),
    heart: 1 + Math.sin(t * (motion === 'jitter' || motion === 'heat' ? 10 : 5)) * .09,
    cat: 1 + wave * .013,
    drift: Math.sin(t * Math.PI * 2 / 6) * 2,
    orbit: t * 15,
    ghost: adverse * (motion === 'dissociate' ? .3 : 0),
    worry: adverse * (motion === 'panic' || motion === 'craving' || motion === 'jitter' ? 1 : 0),
  };
  if(context)return {...base,...sampleContextPose(base,context)};
  const r = response, a = adverse;
  const oscillate = (speed: number, phase = 0) => Math.sin(t * speed + phase);
  let lr: Point = [366,279], la: Point = [366,279], rr: Point = [465,267], ra: Point = [465,267];
  let bodyLean = 0, bodyDrop = 0, lookX = 0, lookY = 0, smile = 0, mouthOpen = 0, pupil = 1, browLift = 0, footTap = 0;
  // Each named sequence combines reusable joints with a different gesture and reaction.
  // Nutritional/endocrine response beats point to diagrams, without an instant benefit pose.
  switch (substanceKey) {
    case 'caffeine':
      lr=[360,269+oscillate(3)*4];la=[366,277+oscillate(11)*3];ra=[465+oscillate(16)*2.4,267+oscillate(13)*1.7];
      browLift=r*2;lookX=r*1.6+a*oscillate(3)*1.3;footTap=(r*.8+a*2)*Math.max(0,oscillate(7));smile=r*1.3-a*2;break;
    case 'nicotine':
      lr=[356,256];la=[377+oscillate(2)*4,242+oscillate(3)*5];rr=[454,259];ra=[464+oscillate(4)*4,252+oscillate(5)*5];
      lookX=r*2+a*oscillate(2)*2.5;bodyLean=a*2;smile=r*.7-a*2;footTap=a*(1+oscillate(6));break;
    case 'cocaine':
      lr=[350,253+oscillate(4)*9];rr=[469,244-oscillate(4)*7];la=[401,239];ra=[473,263+oscillate(8)*4];
      bodyLean=r*-2+a*5;lookX=r*oscillate(4)*2.5;lookY=a*1.8;smile=r*1.5-a*3;mouthOpen=a*.3;break;
    case 'mdma':
      lr=[345,243];rr=[471,246];la=[355,278];ra=[400+oscillate(2)*3,170];
      base.sway=r*oscillate(2)*3;bodyLean=r*oscillate(2)*3+a*4;smile=r*5-a*1.5;base.tilt=r*oscillate(2)*4+a*5;browLift=r;break;
    case 'synthetic-cathinones':
      lr=[348,248+oscillate(5)*8];rr=[474,250-oscillate(5)*8];la=[330+oscillate(3)*3,222+oscillate(5)*4];ra=[449+oscillate(3)*4,207-oscillate(5)*4];
      base.sway=(r*2+a*3)*oscillate(3);lookX=(r+a)*oscillate(4)*2.3;bodyLean=a*oscillate(3)*4;smile=-a*3;pupil=1+(r+a)*.18;break;
    case 'psilocybin':
      lr=[345,233];rr=[457,253];la=[385,250];ra=[452,235];
      base.tilt=r*10+a*-8;lookX=r*-2+a*2;lookY=r*-1.4;bodyLean=r*-2+a*-6;smile=r*2-a*3;pupil=1+r*.25+a*.2;break;
    case 'lsd':
      lr=[330,226+oscillate(1)*4];rr=[463,244];la=[330,218];ra=[446,198];
      base.tilt=r*oscillate(.8)*9+a*oscillate(1.2)*6;lookX=(r+a)*oscillate(.9)*3;lookY=(r+a)*oscillate(1.1)*2;bodyLean=a*-3;smile=r*.6-a*3;pupil=1+(r+a)*.25;break;
    case '2c-b':
      lr=[346,246+oscillate(2)*5];rr=[468,237+oscillate(2)*4];la=[399,238];ra=[467,255+oscillate(7)*3];
      browLift=r*2;lookX=r*oscillate(1.4)*2;bodyLean=r*-1.5+a*3;base.tilt=r*-5+a*4;smile=r*1.3-a*3;pupil=1+(r+a)*.2;break;
    case 'alcohol':
      lr=[350,257];la=[341+oscillate(1.3)*6,234-oscillate(1.3)*8];
      base.sway=a*oscillate(1.3)*7;bodyLean=r*oscillate(.8)*2+a*oscillate(1.3)*9;base.tilt=r*6-a*oscillate(1.3)*5;
      base.eyelid=r*.25+a*.35;lookX=-a*oscillate(1.3)*2;smile=r*3-a*2;break;
    case 'fentanyl':
      lr=[369,281];rr=[453,280];la=[373,285];ra=[445,290];
      bodyLean=r*4+a*11;bodyDrop=r*1+a*3;base.tilt=r*7+a*17;base.eyelid=r*.38+a*.82;
      lookY=(r+a)*1.8;smile=-a*1.5;mouthOpen=a*.45;break;
    case 'cannabis': {
      const recall = (1+oscillate(1.1))/2;
      lr=[354,267];rr=[456,277];la=[349+recall*22,220+recall*26];ra=[456,274];
      bodyLean=r*-3+a*2;base.tilt=r*-9+a*(5+oscillate(1.1)*5);base.eyelid=r*.3+a*.15;
      lookX=r*-1+a*oscillate(1.1)*2.6;smile=r*3-a*1.8;browLift=a*1.5;break;
    }
    case 'ketamine':
      lr=[351,253];rr=[465,250];la=[354,274];ra=[470,278];
      bodyLean=r*-4+a*5;bodyDrop=a*2;base.tilt=r*-9+a*12;base.eyelid=r*.2+a*.6;
      base.ghost=r*.25+a*.5;lookY=r*-1.2+a*1.7;mouthOpen=(r+a)*.2;break;
    case 'testosterone':
      lr=[354,251];rr=[455,265];la=[355,243];ra=[451,268];
      lookX=r*-1.4+a*1.5;base.tilt=r*-3+a*3;break;
    case 'anabolic-steroids':
      lr=[348,253];rr=[473,253];la=[363,243];ra=[465,263];
      lookX=r*oscillate(.7)*1.4+a*oscillate(1)*1.8;base.tilt=r*2+a*-4;break;
    case 'ostarine':
      lr=[355,247];rr=[454,263];la=[351,254];ra=[461,246];
      lookX=r*1.8+a*2.3;base.tilt=r*4+a*-3;browLift=a*1.4;break;
    case 'vitamin-d':
      lr=[358,251];la=[350,252];rr=[459,269];ra=[454,258];
      lookX=r*-1.5+a*1.7;lookY=r*-.5;base.tilt=r*-2+a*2;base.gut=0;break;
    case 'magnesium':
      lr=[360,260];rr=[460,270];la=[399,269];ra=[449,283];
      lookX=r*-1;lookY=a*2;bodyLean=a*8;base.tilt=a*8;base.gut=a;smile=-a*2.5;break;
    case 'ashwagandha': {
      const gutBeat=a*smooth((t-17)/1.4);
      lr=[359,264];rr=[457,273];la=[367+gutBeat*30,278-gutBeat*10];ra=[452,280];
      lookX=r*-1.2;base.tilt=r*1+a*10;base.eyelid=a*.65;bodyLean=a*3+gutBeat*3;base.gut=gutBeat;smile=-gutBeat*1.5;break;
    }
    case 'st-johns-wort':
      lr=[351,246];rr=[472,245];la=[350,254];ra=[470,257];
      lookX=r*oscillate(1)*2+a*2;base.tilt=r*oscillate(1)*3+a*5;browLift=a*1.2;break;
  }
  const blend = (rest: Point, responseHand: Point, adverseHand: Point): Point => [
    rest[0] + r*(responseHand[0]-rest[0]) + a*(adverseHand[0]-rest[0]),
    rest[1] + r*(responseHand[1]-rest[1]) + a*(adverseHand[1]-rest[1]),
  ];
  const right = blend([465,267],rr,ra);
  // Route the forehead wipe around the shoulder instead of through its joint.
  if (substanceKey === 'mdma') right[0] += 56*a*(1-a);
  if(substanceKey) {
    base.leftHand=blend([366,279],lr,la);
    base.hand=[base.hand[0]+right[0]-465,base.hand[1]+right[1]-267];
    base.heat=['mdma','synthetic-cathinones'].includes(substanceKey)?a:0;
    base.worry=['testosterone','anabolic-steroids','ostarine','vitamin-d','st-johns-wort'].includes(substanceKey)?0:a;
  }
  return {...base,symbolicHand:right,bodyLean,bodyDrop,lookX,lookY,smile,mouthOpen,pupil,browLift,footTap};
}

/** A two-link arm keeps the wrist, elbow and shoulder connected through the reach. */
export function solveArm(shoulder: Point, target: Point, upper = 32, lower = 50, bend = 1) {
  const dx = target[0] - shoulder[0], dy = target[1] - shoulder[1];
  const rawDistance = Math.hypot(dx, dy);
  const distance = Math.max(Math.abs(upper - lower) + .001, Math.min(upper + lower - .001, rawDistance));
  const angle = Math.atan2(dy, dx);
  const bendAngle = Math.acos(Math.max(-1, Math.min(1, (upper * upper + distance * distance - lower * lower) / (2 * upper * distance))));
  const elbow: Point = [shoulder[0] + Math.cos(angle + bend * bendAngle) * upper, shoulder[1] + Math.sin(angle + bend * bendAngle) * upper];
  const hand: Point = [shoulder[0] + Math.cos(angle) * distance, shoulder[1] + Math.sin(angle) * distance];
  return { elbow, hand };
}
