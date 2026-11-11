const thoughts: Record<string, [string, string]> = {
  caffeine: ["oh, hello brain.", "i can hear the fridge."],
  psychedelic: ["the wallpaper gets it.", "a little too much input."],
  sedative: ["volume turned down.", "was i saying something?"],
  stimulant: ["one thing at a time…", "brain has 37 tabs open."],
  cannabis: ["this is a good sofa.", "why did i come in here?"],
  muscle: ["changes take time.", "hormones affect more."],
  supplement: ["not an instant feeling.", "results may vary."],
};

export type Organ = "brain" | "lungs" | "heart" | "gut" | "muscle" | "liver" | "kidneys" | "bladder" | "hormones" | "bones";
export type SceneProfile = { thoughts: [string, string]; organs: Organ[]; risks: Organ[]; riskLabel: string };
// These labels summarize the matching encyclopedia entry, not a dose or onset model.
export const profiles: Record<string, SceneProfile> = {
  caffeine: { thoughts: thoughts.caffeine, organs: ["brain", "heart"], risks: ["heart"], riskLabel: "JITTERS / HEART RATE" },
  alcohol: { thoughts: ["brain signals slow.", "balance gets unreliable."], organs: ["brain"], risks: ["brain"], riskLabel: "COORDINATION" },
  nicotine: { thoughts: ["reward circuits respond.", "the craving comes back."], organs: ["brain", "heart"], risks: ["brain", "heart"], riskLabel: "CRAVING / HEART RATE" },
  cannabis: { thoughts: thoughts.cannabis, organs: ["brain"], risks: ["brain"], riskLabel: "MEMORY / COORDINATION" },
  psilocybin: { thoughts: ["perception is shifting.", "it can feel overwhelming."], organs: ["brain"], risks: ["brain"], riskLabel: "ANXIETY / PERCEPTION" },
  lsd: { thoughts: ["sensory signals shift.", "confusion can linger."], organs: ["brain"], risks: ["brain"], riskLabel: "PROLONGED CONFUSION" },
  mdma: { thoughts: ["several signals rise.", "heat can build up."], organs: ["brain", "heart"], risks: ["heart"], riskLabel: "HEAT / HEART STRAIN" },
  ketamine: { thoughts: ["a sense of detachment.", "awareness can fade."], organs: ["brain"], risks: ["brain", "bladder"], riskLabel: "BLADDER: REPEATED USE" },
  cocaine: { thoughts: ["reward and stress rise.", "the heart is under strain."], organs: ["brain", "heart"], risks: ["heart"], riskLabel: "CARDIOVASCULAR STRAIN" },
  fentanyl: { thoughts: ["pain signals turn down.", "breathing can slow."], organs: ["brain", "lungs"], risks: ["lungs"], riskLabel: "RESPIRATORY DEPRESSION" },
  testosterone: { thoughts: ["changes take time.", "natural signals can fall."], organs: ["muscle", "hormones"], risks: ["hormones", "heart"], riskLabel: "HORMONES / BLOOD PRESSURE" },
  "anabolic-steroids": { thoughts: ["more than muscle changes.", "heart and hormones matter."], organs: ["muscle", "hormones"], risks: ["heart", "liver", "hormones"], riskLabel: "HEART / LIVER / HORMONES" },
  ostarine: { thoughts: ["receptors respond.", "liver harm is reported."], organs: ["muscle", "hormones"], risks: ["liver", "hormones"], riskLabel: "LIVER / HORMONES" },
  "2c-b": { thoughts: ["perception shifts.", "anxiety and pulse can rise."], organs: ["brain"], risks: ["brain", "heart"], riskLabel: "ANXIETY / HEART RATE" },
  "synthetic-cathinones": { thoughts: ["monoamine signals rise.", "heat and agitation build."], organs: ["brain", "heart"], risks: ["brain", "heart"], riskLabel: "HEAT / AGITATION" },
  "vitamin-d": { thoughts: ["no instant feeling.", "excess can harm kidneys."], organs: ["bones", "kidneys"], risks: ["kidneys"], riskLabel: "KIDNEYS: EXCESS INTAKE" },
  magnesium: { thoughts: ["cellular housekeeping.", "the gut may object."], organs: ["muscle", "heart"], risks: ["gut"], riskLabel: "CRAMPING / DIARRHEA" },
  ashwagandha: { thoughts: ["evidence is still limited.", "drowsy, or an upset gut."], organs: ["brain", "gut"], risks: ["gut", "liver"], riskLabel: "GUT / RARE LIVER INJURY" },
  "st-johns-wort": { thoughts: ["drug processing changes.", "medicines can lose effect."], organs: ["brain", "liver"], risks: ["liver"], riskLabel: "MEDICINE INTERACTIONS" },
};

export const motions: Record<string, import('./timeline').Motion> = {
  caffeine: 'jitter', alcohol: 'sway', nicotine: 'craving', cannabis: 'sway',
  psilocybin: 'panic', lsd: 'panic', mdma: 'heat', ketamine: 'dissociate',
  cocaine: 'jitter', fentanyl: 'breathing', testosterone: 'hormone',
  'anabolic-steroids': 'hormone', ostarine: 'hormone', '2c-b': 'panic',
  'synthetic-cathinones': 'heat', 'vitamin-d': 'kidney', magnesium: 'gut',
  ashwagandha: 'gut', 'st-johns-wort': 'interaction',
};
export function getSceneProfile(name: string, type: string) {
  const key = name.toLowerCase().replace(/[.’']/g, '').replace(/\s+/g, '-');
  return {
    key,
    ...(profiles[key] ?? { thoughts: thoughts[type] ?? thoughts.supplement, organs: ['brain'] as Organ[], risks: ['brain'] as Organ[], riskLabel: 'POSSIBLE UNWANTED EFFECTS' }),
    motion: motions[key] ?? 'interaction',
    oral: ['vitamin-d','magnesium','ashwagandha','st-johns-wort','ostarine','mdma','2c-b','psilocybin'].includes(key),
    longTerm: ['muscle','supplement'].includes(type),
  };
}
