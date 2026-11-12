import type { CatalogSeed, Setting } from '../../data/catalog/types';
import { sceneIdentity } from './context-motion.ts';

export const settingLabels:Record<Setting,string>={study:'The everyday desk',kitchen:'The meal table',bedroom:'The evening routine',bathroom:'The bathroom mirror',clinic:'The care room',garden:'The garden bench',gym:'The training room',recovery:'The recovery corner','living-room':'The quiet living room',workshop:'The workbench',travel:'The travel nook',laboratory:'The research room','listening-room':'The listening room',conservatory:'The glasshouse',observatory:'The observatory','art-studio':'The art room'};
const hues:Record<Setting,number>={study:91,kitchen:42,bedroom:236,bathroom:176,clinic:157,garden:107,gym:29,recovery:37,'living-room':82,workshop:25,travel:201,laboratory:185,'listening-room':15,conservatory:125,observatory:265,'art-studio':325};
export function contextStyle(seed:CatalogSeed){
  const identity=sceneIdentity(seed.id),hue=hues[seed.scene.setting]+identity%17-8;
  return {name:settingLabels[seed.scene.setting],label:seed.scene.intent,
    family:seed.category==='Steroids'||seed.category==='SARMs'?'anabolic':seed.scene.motif==='serotonin'?'perception':seed.scene.response==='focus'?'stimulation':seed.scene.adverse==='sleepy'?'slowdown':'bodycare',
    wall:`hsl(${hue} 22% 89%)`,floor:`hsl(${hue} 23% 73%)`,trim:`hsl(${hue} 15% 59%)`,accent:`hsl(${hue} 23% 49%)`,
    variant:identity%7,identity,
  };
}
