import type { CatalogSeed } from '../../data/catalog/types';
import { getContextStageCopies } from './scene-stage-copy';

const targetName:Record<string,string>={brain:'Brain & nerves','peripheral-nerves':'Nerves in the limbs',mouth:'Mouth',nose:'Nasal passages',eyes:'Eyes',ears:'Hearing',throat:'Throat & esophagus',pelvis:'Pelvic area',skin:'Skin',nails:'Nails',hair:'Hair follicles',lungs:'Breathing',heart:'Heart & circulation',gut:'Digestive system',muscle:'Muscles',joint:'Joints',tendon:'Tendons',bladder:'Urinary system',liver:'Liver',kidneys:'Kidneys',hormones:'Hormone system',blood:'Blood',bones:'Bones',fluid:'Fluid balance','whole-body':'Across the body',evidence:'Evidence & uncertainty'};

/** Plain-language explanation replaces decorative anatomy and unrelated signal traces. */
export default function ContextExplainer({seed,stage,timing}:{seed:CatalogSeed;stage:number;timing:string}){
  const copy=getContextStageCopies(seed)?.[stage];
  if(!copy)return null;
  const risk=stage===2;
  const {label,cue,target,mode}=copy;
  const qualifier=stage===0?timing:mode==='silent-risk'?'This risk may develop without obvious symptoms.':mode==='follow-up'?'A possible effect to discuss during follow-up.':mode==='silent-process'?'A change inside the body may not be something you feel.':mode==='conditional-event'?'A possible event, not an expected result.':mode==='uncertain'||mode==='unknown'?'Human outcomes are not well established.':risk?'A possible side effect. Not everyone experiences it.':timing;
  return <aside className={`scene-explainer ${risk?'is-adverse':''}`} aria-label={`${seed.name} scene explanation`}>
    <div className="explainer-eyebrow"><span>{stage===0?'USE CONTEXT':risk?'POSSIBLE DOWNSIDE':'WHAT CHANGES'}</span><span>0{stage+1}</span></div>
    {stage>0&&target&&<span className="explainer-target">{targetName[target]??target}</span>}
    <h3>{label}</h3>
    <p className="explainer-event">{cue}</p>
    {stage===1&&<div className="explainer-process"><span>How it works</span><p>{seed.mechanism}</p></div>}
    {stage===2&&<div className="explainer-process"><span>Also matters</span><p>{seed.scene.riskNotes.find(note=>note!==cue)??seed.interactionNote}</p></div>}
    {stage===0&&<div className="explainer-process"><span>The setting</span><p>{seed.useContext}</p></div>}
    <p className="explainer-qualifier">{qualifier}</p>
  </aside>;
}
