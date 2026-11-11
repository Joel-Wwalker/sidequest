import type { CatalogSeed } from '../../data/catalog/types';
import { getSceneStory } from '../../data/catalog/scene-stories.ts';
import { handoffObjectOpacity } from './story-motion.ts';

type VisibilityPose={t:number;stage:number;response:number;adverse:number;contextPropOpacity:number;contextExposureOpacity:number};
const ease=(v:number)=>{const x=Math.max(0,Math.min(1,v));return x*x*(3-2*x);};

/** The mug and a later review card share one grip, so their envelopes cannot overlap. */
export function contextPropVisibility(seed:CatalogSeed|undefined,p:VisibilityPose){
  const cup=seed?.scene.exposure==='drink'&&seed.scene.prop==='cup';
  if(!cup)return{beverage:p.contextExposureOpacity,reviewCardGate:1};
  const story=getSceneStory(seed),action=p.stage===2?story?.downsideAction:story?.responseAction;
  const rightCard=action==='review-uncertainty'||action==='withdrawal-watch';
  const activity=rightCard?(p.stage===2?p.adverse:p.response)*handoffObjectOpacity(p.t,'task'):p.contextPropOpacity;
  return{
    beverage:Math.max(1-ease((p.t-9.2)/.5),activity,ease((p.t-23.2)/.8)),
    reviewCardGate:rightCard?handoffObjectOpacity(p.t,'action'):1,
  };
}
