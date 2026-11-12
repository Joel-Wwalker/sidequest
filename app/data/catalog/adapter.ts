import type { Substance } from '../substances';
import { catalogSeeds } from './index.ts';

export const catalogSubstances:Substance[]=catalogSeeds.map(seed=>({
  id:seed.id,name:seed.name,aliases:seed.aliases,category:seed.category,className:seed.className,
  tagline:seed.scene.asides[0],description:seed.useContext,mechanism:seed.mechanism,
  effects:seed.effects,risks:seed.risks,interactions:seed.interactionNote,
  riskLevel:seed.status==='experimental'?'Uncertain':'Context dependent',
  dependence:'See risks',evidence:seed.evidence,
  duration:'Treatment and effect timelines vary by indication, person and formulation. This loop illustrates selected processes; it is not an onset or duration estimate.',
  sceneType:seed.category==='Steroids'||seed.category==='SARMs'?'muscle':seed.category==='Vitamins & herbs'?'supplement':seed.scene.response==='focus'?'stimulant':seed.scene.adverse==='sleepy'?'sedative':'supplement',
  action:seed.scene.exposure==='drink'?'sips':'takes',
  sceneLabels:['The use context',...seed.scene.beats],sources:seed.sources,
  context:{purpose:seed.useContext,setting:seed.scene.setting,activity:seed.scene.activity,status:seed.status},
}));
