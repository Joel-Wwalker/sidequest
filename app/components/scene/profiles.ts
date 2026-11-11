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
  nicotine: { thoughts: ["reward circuits respond.", "the craving comes back."], organs: ["brain"], risks: ["brain"], riskLabel: "CRAVING / DEPENDENCE" },
  cannabis: { thoughts: thoughts.cannabis, organs: ["brain"], risks: ["brain"], riskLabel: "MEMORY / COORDINATION" },
  psilocybin: { thoughts: ["perception is shifting.", "it can feel overwhelming."], organs: ["brain"], risks: ["brain"], riskLabel: "ANXIETY / PERCEPTION" },
  lsd: { thoughts: ["sensory signals shift.", "confusion can linger."], organs: ["brain"], risks: ["brain"], riskLabel: "PANIC / CONFUSION" },
  mdma: { thoughts: ["several signals rise.", "heat can build up."], organs: ["brain", "heart"], risks: ["heart"], riskLabel: "HEAT / HEART STRAIN" },
  ketamine: { thoughts: ["a sense of detachment.", "awareness can fade."], organs: ["brain"], risks: ["brain", "bladder"], riskLabel: "BLADDER: REPEATED USE" },
  cocaine: { thoughts: ["reward and stress rise.", "the heart is under strain."], organs: ["brain", "heart"], risks: ["heart"], riskLabel: "CARDIOVASCULAR STRAIN" },
  fentanyl: { thoughts: ["pain signals turn down.", "breathing can slow."], organs: ["brain", "lungs"], risks: ["lungs"], riskLabel: "RESPIRATORY DEPRESSION" },
  testosterone: { thoughts: ["changes take time.", "natural signals can fall."], organs: ["muscle", "hormones"], risks: ["hormones", "heart"], riskLabel: "HORMONES / BLOOD PRESSURE" },
  "anabolic-steroids": { thoughts: ["more than muscle changes.", "heart and hormones matter."], organs: ["muscle", "hormones"], risks: ["heart", "liver", "hormones"], riskLabel: "HEART / LIVER / HORMONES" },
  ostarine: { thoughts: ["receptors respond.", "liver harm is reported."], organs: ["muscle", "hormones"], risks: ["liver", "hormones"], riskLabel: "REPORTED LIVER HARM / HORMONAL EFFECTS" },
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
// Two explicit story beats per entry keep shared motion families from flattening
// the experience into the same reaction with a different label.
export const beats: Record<string, [string, string]> = {
  caffeine: ['Sleep pressure is masked', 'A steady hand becomes jittery'],
  nicotine: ['A brief reward response', 'The craving cycle returns'],
  cocaine: ['Energy and arousal rise', 'The cardiovascular cost'],
  mdma: ['Energy and closeness', 'Heat builds; the jaw tightens'],
  'synthetic-cathinones': ['Restlessness gathers pace', 'Agitation and overheating'],
  psilocybin: ['Familiar shapes feel unfamiliar', 'Sensory changes become overwhelming'],
  lsd: ['Sensory echoes and altered time', 'Following the room gets difficult'],
  '2c-b': ['Perception meets stimulation', 'Anxiety and pulse can rise'],
  alcohol: ['Reactions begin to lag', 'Correcting an unsteady balance'],
  fentanyl: ['Awareness and pain signaling change', 'Breathing can become dangerously slow'],
  cannabis: ['Time feels different', 'A thought slips away'],
  ketamine: ['A sense of detachment', 'Body awareness becomes unreliable'],
  testosterone: ['Hormone signals reach many tissues', 'Natural feedback can be suppressed'],
  'anabolic-steroids': ['Tissue changes develop over time', 'The effects extend beyond muscle'],
  ostarine: ['Receptors respond; evidence has gaps', 'Reported liver harm and uncertainty'],
  'vitamin-d': ['Calcium regulation supports bones', 'Excess can harm the kidneys'],
  magnesium: ['Nerves and muscles use a mineral', 'The gut can cramp'],
  ashwagandha: ['Possible effects; limited evidence', 'Drowsiness or gut upset'],
  'st-johns-wort': ['Drug-processing pathways change', 'Another medicine may lose effect'],
};
const asides: Record<string, [string, string]> = {
  caffeine: ['the inbox has been perceived.', 'the cup has opinions.'],
  nicotine: ['a brief change of channel.', 'that thought. again.'],
  cocaine: ['the plan now has sub-plans.', 'the heart has its own agenda.'],
  mdma: ['everyone has a nice jacket.', 'too warm is still too warm.'],
  'synthetic-cathinones': ['sitting still is off the agenda.', 'restless is becoming distressed.'],
  psilocybin: ['the fern seems very sure.', 'a little less fern, please.'],
  lsd: ['the wallpaper has a thesis.', 'still on the same paragraph.'],
  '2c-b': ['the shapes have assembled.', 'the pulse joins the conversation.'],
  alcohol: ['the timing is slightly off.', 'the floor moved first.'],
  fentanyl: ['everything turns down.', 'slowed breathing is a serious danger.'],
  cannabis: ['a minute takes the scenic route.', 'came here for… something.'],
  ketamine: ['a little far from here.', 'distance is not the same as safety.'],
  testosterone: ['biology has several departments.', 'the feedback loop notices.'],
  'anabolic-steroids': ['the calendar is doing the work.', 'muscle was not the only audience.'],
  ostarine: ['“selective” needs an asterisk.', 'the fine print gets bigger.'],
  'vitamin-d': ['no dramatic entrance required.', 'more is not always more useful.'],
  magnesium: ['quietly keeping things running.', 'the gut has a second opinion.'],
  ashwagandha: ['a plant, with fine print.', 'the eyelids have other plans.'],
  'st-johns-wort': ['small flowers. busy chemistry.', 'the medicines missed the memo.'],
};
export function getSceneProfile(name: string, type: string) {
  const key = name.toLowerCase().replace(/[.’']/g, '').replace(/\s+/g, '-');
  return {
    key,
    ...(profiles[key] ?? { thoughts: thoughts[type] ?? thoughts.supplement, organs: ['brain'] as Organ[], risks: ['brain'] as Organ[], riskLabel: 'POSSIBLE UNWANTED EFFECTS' }),
    thoughts: asides[key] ?? thoughts.supplement,
    beats: beats[key] ?? ['Body signaling changes', 'Possible unwanted effects'],
    motion: motions[key] ?? 'interaction',
    oral: ['vitamin-d','magnesium','ashwagandha','st-johns-wort','ostarine','mdma','2c-b','psilocybin'].includes(key),
    longTerm: ['muscle','supplement'].includes(type),
  };
}
