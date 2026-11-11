export type Category =
  | 'Everyday'
  | 'Psychoactives'
  | 'Steroids'
  | 'SARMs'
  | 'Research chemicals'
  | 'Vitamins & herbs';

export type Substance = {
  id: string;
  name: string;
  aliases: string[];
  category: Category;
  className: string;
  tagline: string;
  description: string;
  mechanism: string;
  effects: string[];
  risks: string[];
  interactions: string;
  riskLevel: 'Lower' | 'Moderate' | 'High' | 'Very high' | 'Uncertain';
  dependence: 'Low' | 'Moderate' | 'High' | 'Very high' | 'Uncertain' | 'Not typical';
  evidence: 'Strong' | 'Moderate' | 'Limited';
  duration: string;
  sceneType: 'caffeine' | 'psychedelic' | 'sedative' | 'stimulant' | 'cannabis' | 'muscle' | 'supplement';
  action: 'sips' | 'takes';
  sceneLabels: [string, string, string];
  sources: { label: string; url: string }[];
};

export const categories: Category[] = ['Everyday', 'Psychoactives', 'Steroids', 'SARMs', 'Research chemicals', 'Vitamins & herbs'];

// These qualitative summaries are editorial navigation aids, not validated clinical
// scores. Risk varies with health, age, exposure, product contents and combinations.
// Evidence describes confidence in the overview, not proof of therapeutic benefit.
export const riskContext = 'Risk labels are broad editorial summaries, not personal safety predictions. For prescription medicines, labels focus on nonmedical use. Amount, frequency, health, product contents and combinations can change risk substantially. “Lower” never means risk-free.';
export const evidenceContext = 'Evidence describes how well the overview is supported. It does not mean a substance is effective as a treatment. Research on controlled medical use does not establish the safety of unsupervised use.';
export const reviewedOn = '2026-11-11';

export const substances: Substance[] = [
  {
    id: 'caffeine',
    name: 'Caffeine',
    aliases: ['Coffee', 'Tea', 'Energy drinks'],
    category: 'Everyday',
    className: 'Stimulant · methylxanthine',
    tagline: 'The snooze button has a rival.',
    description: 'Caffeine is the familiar stimulant in coffee, tea and many energy drinks. It can temporarily make you feel more awake, but it cannot replace sleep. Sensitivity varies widely: the same drink can feel ordinary to one person and unpleasant to another. Regular use can produce dependence, with headaches and fatigue when it stops. Concentrated caffeine products carry a very different poisoning risk from an ordinary beverage.',
    mechanism: 'Caffeine blocks adenosine receptors. Adenosine normally helps signal mounting sleep pressure; blocking that signal makes tiredness less noticeable. The underlying need for sleep remains, and stimulation can also show up as a racing heart, restlessness or anxiety.',
    effects: ['More alertness', 'Less perceived tiredness', 'Temporary stimulation', 'Sleep disruption'],
    risks: ['Anxiety and jitters', 'Palpitations', 'Insomnia', 'Poisoning from concentrated products'],
    interactions: 'Some medicines and health conditions increase caffeine sensitivity. Combining multiple caffeinated products adds to the total exposure.',
    riskLevel: 'Lower', dependence: 'Moderate', evidence: 'Strong',
    duration: 'Several hours; sleep effects can outlast the noticeable buzz.',
    sceneType: 'caffeine', action: 'sips',
    sceneLabels: ['Caffeine arrives', 'Sleep signals get blocked', 'Jitters can follow'],
    sources: [
      { label: 'FDA · Caffeine and health', url: 'https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much' },
      { label: 'NIH · Tired or wired?', url: 'https://newsinhealth.nih.gov/2020/10/tired-or-wired' },
    ],
  },
  {
    id: 'alcohol', name: 'Alcohol', aliases: ['Ethanol', 'Beer', 'Wine', 'Spirits'], category: 'Everyday',
    className: 'Depressant · ethanol', tagline: 'Confidence up. Coordination down.',
    description: 'Alcohol can feel stimulating early on because it reduces inhibition, while progressively disrupting judgment, memory and movement. Its cultural familiarity can hide substantial health risks. Heavy exposure can suppress breathing; repeated use can damage multiple organs and lead to dependence. Alcohol also increases cancer risk. After dependence develops, abruptly stopping can cause dangerous withdrawal. Feeling more sober is an unreliable measure of whether impairment has ended.',
    mechanism: 'Alcohol acts on several brain signaling systems. It strengthens some inhibitory GABA effects and reduces excitatory glutamate signaling, disrupting communication involved in memory and coordination. With heavy exposure, this disruption can extend to the systems that keep breathing going.',
    effects: ['Lowered inhibition', 'Slower reactions', 'Impaired balance', 'Drowsiness'],
    risks: ['Poisoning and slowed breathing', 'Injuries and blackouts', 'Liver disease and cancer', 'Dependence and dangerous withdrawal'],
    interactions: 'Opioids, benzodiazepines and other sedatives can dangerously compound breathing suppression. Caffeine does not reverse alcohol impairment.',
    riskLevel: 'High', dependence: 'High', evidence: 'Strong',
    duration: 'Hours; impairment can continue after drinking stops.',
    sceneType: 'sedative', action: 'sips',
    sceneLabels: ['Alcohol enters circulation', 'Brain signaling slows', 'Balance becomes unreliable'],
    sources: [
      { label: 'NIAAA · Effects on the body', url: 'https://www.niaaa.nih.gov/alcohols-effects-health/alcohols-effects-body' },
      { label: 'NIAAA · Alcohol overdose', url: 'https://www.niaaa.nih.gov/alcohols-effects-health/alcohol-topics/health-topics-alcohol-overdose' },
      { label: 'NIAAA · Alcohol and the brain', url: 'https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/neuroscience-brain-addiction-and-recovery' },
      { label: 'NIAAA · Impairment and sobering up', url: 'https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/truth-about-holiday-spirits' },
    ],
  },
  {
    id: 'nicotine', name: 'Nicotine', aliases: ['Tobacco', 'Vapes', 'Nicotine pouches'], category: 'Everyday',
    className: 'Stimulant · nicotinic receptor agonist', tagline: 'A short lift. A persistent loop.',
    description: 'Nicotine is the highly addictive drug in tobacco and many vaping or pouch products. It can briefly change attention and mood, while repeated exposure makes cravings and withdrawal increasingly important. Much of smoking’s cancer and lung damage comes from combustion products, so different nicotine products do not carry identical risks. Nicotine itself still poses risks, especially during pregnancy and adolescence. Nicotine replacement medicines can support smoking cessation.',
    mechanism: 'Nicotine activates nicotinic acetylcholine receptors and increases dopamine signaling in reward circuits. Repeated exposure changes how those circuits respond. The resulting cycle of withdrawal and relief can make an apparently calming habit increasingly difficult to interrupt over time.',
    effects: ['Brief alertness', 'Changes in mood', 'Reduced appetite', 'Relief of withdrawal in dependent users'],
    risks: ['Strong dependence', 'Cravings and irritability', 'Harm to developing brains', 'Nicotine poisoning'],
    interactions: 'A medication review should include nicotine and tobacco products. Smoke exposure and nicotine have different effects, so product changes matter.',
    riskLevel: 'High', dependence: 'Very high', evidence: 'Strong',
    duration: 'Brief noticeable effects; cravings recur with dependence.',
    sceneType: 'stimulant', action: 'takes',
    sceneLabels: ['Nicotine reaches the brain', 'Reward circuits respond', 'The craving loop returns'],
    sources: [
      { label: 'FDA · Nicotine and addiction', url: 'https://www.fda.gov/tobacco-products/health-effects-tobacco-use/nicotine-why-tobacco-products-are-addictive' },
      { label: 'NIDA · Tobacco and nicotine research report', url: 'https://nida.nih.gov/sites/default/files/1344-tobacco-nicotine-and-e-cigarettes_0.pdf' },
    ],
  },
  {
    id: 'cannabis', name: 'Cannabis', aliases: ['THC', 'Marijuana', 'Weed'], category: 'Psychoactives',
    className: 'Cannabinoid · THC-containing products', tagline: 'The clock gets a little weird.',
    description: 'Cannabis contains many compounds; THC accounts for most of its intoxicating effects. People may experience relaxation, altered time perception or anxiety, sometimes in the same episode. Concentration and product contents vary widely. Memory, coordination and driving can be impaired. Frequent use can lead to cannabis use disorder, and some people develop recurrent severe vomiting. Higher-risk mental health histories deserve particular attention because cannabis can worsen psychotic symptoms.',
    mechanism: 'THC activates cannabinoid receptors, especially CB1 receptors in the brain, changing the release of other chemical messengers. These receptors participate in memory, movement, appetite and perception. The effects depend on the product, the person and the exposure.',
    effects: ['Altered time perception', 'Relaxation or anxiety', 'Increased appetite', 'Impaired short-term memory'],
    risks: ['Panic or paranoia', 'Impaired driving and coordination', 'Dependence with frequent use', 'Psychosis risk in susceptible people'],
    interactions: 'Alcohol and sedating medicines can increase impairment. Cannabinoid products can also interact with prescription medicines; CBD is not interaction-free.',
    riskLevel: 'Moderate', dependence: 'Moderate', evidence: 'Strong',
    duration: 'Several hours or longer; product and exposure strongly affect the timeline.',
    sceneType: 'cannabis', action: 'takes',
    sceneLabels: ['THC reaches the brain', 'Cannabinoid signaling changes', 'Memory and balance can falter'],
    sources: [
      { label: 'NCCIH · Cannabis and cannabinoids', url: 'https://www.nccih.nih.gov/health/cannabis-marijuana-and-cannabinoids-what-you-need-to-know' },
      { label: 'Health Canada · Cannabinoid pharmacology', url: 'https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/information-medical-practitioners/information-health-care-professionals-cannabis-cannabinoids.html' },
    ],
  },
  {
    id: 'psilocybin', name: 'Psilocybin', aliases: ['Magic mushrooms', 'Shrooms', 'Psilocin'], category: 'Psychoactives',
    className: 'Psychedelic · serotonergic', tagline: 'Perception gets an unexpected editor.',
    description: 'Psilocybin is a psychedelic found in certain mushrooms. It can strongly change perception, emotion and the sense of self. Experiences can be meaningful, frightening or confusing, and their course is difficult to predict. Clinical research investigates possible therapeutic uses under structured supervision. Those findings do not establish the safety of unsupervised use or microdosing. Mushroom misidentification adds a separate poisoning risk that has nothing to do with psychedelic effects.',
    mechanism: 'The body converts psilocybin into psilocin, which acts at serotonin receptors, including 5-HT2A. This changes communication involved in perception and mood. A change in brain signaling can produce intense subjective experiences without making those experiences reliable information about the outside world.',
    effects: ['Visual distortions', 'Strong emotional shifts', 'Altered sense of time', 'Changes in sense of self'],
    risks: ['Panic and confusion', 'Nausea or headache', 'Dangerous impairment of judgment', 'Worsening of some psychiatric conditions'],
    interactions: 'Other psychoactive substances and psychiatric medicines can change the experience or its risks. Interaction evidence is incomplete; prescribed medicines need clinical review.',
    riskLevel: 'Moderate', dependence: 'Low', evidence: 'Moderate',
    duration: 'Several hours; emotional aftereffects may last longer.',
    sceneType: 'psychedelic', action: 'takes',
    sceneLabels: ['Psilocybin becomes psilocin', 'Serotonin signaling shifts', 'Perception can become overwhelming'],
    sources: [
      { label: 'NCCIH · Psilocybin: evidence and safety', url: 'https://www.nccih.nih.gov/health/psilocybin-for-mental-health-and-addiction-what-you-need-to-know' },
      { label: 'Human study · Psilocin and serotonin receptors', url: 'https://www.nature.com/articles/s41386-019-0324-9' },
    ],
  },
  {
    id: 'lsd', name: 'LSD', aliases: ['Acid', 'Lysergic acid diethylamide'], category: 'Psychoactives',
    className: 'Psychedelic · serotonergic', tagline: 'A long detour through perception.',
    description: 'LSD is a long-acting psychedelic that can alter sensory experience, emotion and the sense of time. Effects may shift substantially within one experience. Physical dependence is not typical, but that does not remove the possibility of panic, unsafe behavior or psychiatric complications. Rarely, visual disturbances persist or recur after the immediate effects end. A product sold under a familiar name may also contain a different substance.',
    mechanism: 'LSD interacts with several receptors, with serotonin 5-HT2A signaling central to its psychedelic effects. It changes the processing of sensory information and emotion. These changes can make ordinary surroundings feel unfamiliar and reduce the reliability of perception and judgment.',
    effects: ['Visual distortions', 'Altered time perception', 'Rapid emotional shifts', 'Heightened sensory experience'],
    risks: ['Intense panic', 'Accidents during impairment', 'Psychiatric destabilization', 'Persistent perceptual disturbances'],
    interactions: 'Other psychoactive drugs can make effects less predictable. Psychiatric medication combinations require clinical review; interaction research remains incomplete.',
    riskLevel: 'Moderate', dependence: 'Low', evidence: 'Moderate',
    duration: 'A substantial part of a day; residual effects may persist.',
    sceneType: 'psychedelic', action: 'takes',
    sceneLabels: ['LSD reaches the brain', 'Sensory processing changes', 'Confusion can outlast expectations'],
    sources: [
      { label: 'NIDA · Hallucinogens research report', url: 'https://nida.nih.gov/sites/default/files/hallucinogensrrs.pdf' },
      { label: 'SAMHSA · Hallucinogens and health', url: 'https://www.samhsa.gov/substance-use/learn/hallucinogens' },
    ],
  },
  {
    id: 'mdma', name: 'MDMA', aliases: ['Ecstasy', 'Molly'], category: 'Psychoactives',
    className: 'Entactogen · stimulant', tagline: 'Warm feelings can come with real heat.',
    description: 'MDMA can increase feelings of closeness, energy and sensory intensity. Its effects also strain temperature regulation and the cardiovascular system. Serious toxicity can involve overheating or dangerously low blood sodium, and combining drugs adds uncertainty. Sleep and mood may be disrupted after the main effects pass. Products called molly or ecstasy do not reliably identify their ingredients, so the name alone says little about their contents.',
    mechanism: 'MDMA increases serotonin, norepinephrine and dopamine signaling by promoting release and altering their transport. Serotonin helps regulate mood and temperature; norepinephrine contributes to cardiovascular stimulation. These overlapping actions explain why emotional effects can occur alongside overheating and a fast heartbeat.',
    effects: ['Feelings of closeness', 'Increased energy', 'Intensified sensory experience', 'Jaw tension'],
    risks: ['Dangerous overheating', 'Low blood sodium', 'Cardiovascular strain', 'Low mood and sleep disruption afterward'],
    interactions: 'MAO inhibitors and other serotonin-affecting drugs can cause dangerous reactions. Other stimulants add strain; mixing drugs makes toxicity less predictable.',
    riskLevel: 'High', dependence: 'Moderate', evidence: 'Strong',
    duration: 'Several hours; sleep and mood changes may continue for days.',
    sceneType: 'stimulant', action: 'takes',
    sceneLabels: ['MDMA enters circulation', 'Monoamine signaling rises', 'Heat and heart strain can build'],
    sources: [
      { label: 'NIDA · MDMA research report', url: 'https://nida.nih.gov/sites/default/files/1763-mdma-ecstasy-abuse.pdf' },
      { label: 'DEA · MDMA fact sheet', url: 'https://www.deadiversion.usdoj.gov/drug_chem_info/mdma.pdf' },
      { label: 'FDA · MDMA clinical safety review', url: 'https://www.fda.gov/media/178986/download' },
    ],
  },
  {
    id: 'ketamine', name: 'Ketamine', aliases: ['K', 'Special K'], category: 'Psychoactives',
    className: 'Dissociative · anesthetic', tagline: 'Feeling detached has physical consequences.',
    description: 'Ketamine is an anesthetic with legitimate medical uses that can also produce dissociation: a sense of separation from the body or surroundings. Unsupervised use can compromise movement, awareness and judgment. Frequent use can cause dependence and serious bladder or urinary tract damage. Medical treatment involves assessment and monitoring; it does not make every ketamine product or setting equivalent. Sedative combinations can sharply increase the danger.',
    mechanism: 'Ketamine blocks NMDA receptors involved in glutamate signaling, altering how brain networks process sensory information and pain. Its actions extend beyond a single receptor. The resulting dissociation can coexist with impaired coordination, reduced awareness and changes in blood pressure.',
    effects: ['Dissociation', 'Altered perception', 'Reduced pain awareness', 'Impaired coordination'],
    risks: ['Accidents and loss of awareness', 'Nausea and vomiting', 'Bladder and urinary tract damage', 'Dependence with repeated use'],
    interactions: 'Alcohol, opioids, benzodiazepines and other sedatives can increase unconsciousness and breathing problems.',
    riskLevel: 'High', dependence: 'High', evidence: 'Strong',
    duration: 'Acute effects are relatively brief; impairment and urinary harm follow different timelines.',
    sceneType: 'sedative', action: 'takes',
    sceneLabels: ['Ketamine reaches the brain', 'NMDA signaling is disrupted', 'Body awareness and balance fade'],
    sources: [
      { label: 'UK ACMD · Ketamine use and harms', url: 'https://www.gov.uk/government/publications/ketamine-an-updated-review-of-use-and-harms/ketamine-an-updated-review-of-use-and-harms-accessible' },
    ],
  },
  {
    id: 'cocaine', name: 'Cocaine', aliases: ['Coke', 'Crack'], category: 'Psychoactives',
    className: 'Stimulant · monoamine reuptake inhibitor', tagline: 'The heart does not share your confidence.',
    description: 'Cocaine is a powerful stimulant that can briefly increase energy, confidence and sociability. It also increases cardiovascular strain and can cause a heart attack, stroke or seizure. Short-lived effects can encourage repeated use, contributing to dependence. Anxiety, irritability and low mood may follow. Unregulated products add uncertainty about ingredients, including possible opioid contamination. Serious complications can occur even without a long history of use.',
    mechanism: 'Cocaine interferes with the recycling of neurotransmitters, including dopamine and norepinephrine, leaving stronger signals between nerve cells. This reinforces reward while increasing sympathetic nervous system activity. Blood vessels constrict, and the heart must work harder under less favorable conditions.',
    effects: ['Increased energy', 'Heightened confidence', 'Reduced appetite', 'Restlessness'],
    risks: ['Heart attack or arrhythmia', 'Stroke and seizures', 'Anxiety or paranoia', 'Dependence and compulsive use'],
    interactions: 'Alcohol and other stimulants add serious cardiovascular risk. Opioid combinations can suppress breathing, even when stimulation is still noticeable.',
    riskLevel: 'Very high', dependence: 'High', evidence: 'Strong',
    duration: 'Brief main effects; cardiovascular risks and the comedown can last longer.',
    sceneType: 'stimulant', action: 'takes',
    sceneLabels: ['Cocaine enters circulation', 'Reward and stress signals rise', 'The heart comes under strain'],
    sources: [
      { label: 'MedlinePlus · Cocaine and health', url: 'https://medlineplus.gov/ency/patientinstructions/000793.htm' },
      { label: 'NIDA · Cocaine research report', url: 'https://nida.nih.gov/sites/default/files/1141-cocaine.pdf' },
      { label: 'NHS · Alcohol and cocaine interactions', url: 'https://www.swbh.nhs.uk/wp-content/uploads/2023/12/Using-alcohol-and-cocaine-together-why-its-more-dangerous-M8953.pdf' },
      { label: 'CDC · Fentanyl in the drug supply', url: 'https://www.cdc.gov/overdose-prevention/about/fentanyl.html' },
    ],
  },
  {
    id: 'fentanyl', name: 'Fentanyl', aliases: ['Synthetic opioid', 'Illicit fentanyl'], category: 'Psychoactives',
    className: 'Opioid · potent analgesic', tagline: 'Breathing is the critical signal.',
    description: 'Fentanyl is a potent opioid used medically for severe pain and anesthesia. Illegally made fentanyl is also present in unregulated drugs and counterfeit pills, sometimes without the person’s knowledge. It can suppress breathing quickly and cause a fatal overdose. Appearance, smell and taste cannot establish whether it is present. Unresponsiveness or slow, abnormal breathing is an emergency: call emergency services and use naloxone if available.',
    mechanism: 'Fentanyl activates opioid receptors involved in pain and reward, including mu-opioid receptors. The same receptor system can suppress the brainstem’s drive to breathe. When oxygen delivery falls, brain injury and death can follow, making respiratory depression the central acute danger.',
    effects: ['Pain relief', 'Sedation', 'Euphoria', 'Slowed breathing'],
    risks: ['Rapid respiratory depression', 'Fatal overdose', 'Strong dependence', 'Unexpected exposure in other drugs'],
    interactions: 'Alcohol, benzodiazepines and other sedatives increase overdose risk. Stimulants do not protect against opioid-induced breathing suppression.',
    riskLevel: 'Very high', dependence: 'Very high', evidence: 'Strong',
    duration: 'Highly variable by formulation and exposure; overdose can recur after naloxone.',
    sceneType: 'sedative', action: 'takes',
    sceneLabels: ['Opioid receptors are activated', 'Pain and breathing signals fall', 'Breathing may become dangerously slow'],
    sources: [
      { label: 'CDC · Fentanyl and overdose prevention', url: 'https://www.cdc.gov/overdose-prevention/about/fentanyl.html' },
      { label: 'NIDA · Fentanyl DrugFacts', url: 'https://nida.nih.gov/publications/drugfacts/fentanyl' },
      { label: 'Health Canada · Naloxone and overdose recurrence', url: 'https://www.canada.ca/en/health-canada/services/opioids/naloxone.html' },
    ],
  },
  {
    id: 'testosterone', name: 'Testosterone', aliases: ['Test', 'TRT'], category: 'Steroids',
    className: 'Androgen · anabolic steroid', tagline: 'Hormones have more than one job.',
    description: 'Testosterone is a hormone the body makes and a medicine used for specific clinical needs. It affects muscle, bone, reproductive function and many other tissues. Medical treatment and nonmedical performance use have different risk profiles. Added testosterone can suppress the body’s own hormone production and sperm production, while raising blood pressure or red blood cell levels. Changes unfold over time and require more context than a before-and-after physique.',
    mechanism: 'Testosterone binds androgen receptors that influence gene activity in many tissues. External testosterone also feeds back to the brain’s hormone-control system, reducing signals that normally stimulate the testes. Muscle effects and reproductive suppression therefore arise from the same interconnected hormonal system.',
    effects: ['Changes in muscle and strength', 'Changes in libido', 'Increased red blood cell production', 'Suppression of natural hormone production'],
    risks: ['Raised blood pressure', 'Reduced fertility', 'Acne and hair changes', 'Mood changes and withdrawal with misuse'],
    interactions: 'Other hormones and performance drugs complicate risk. Prescription medicines and relevant heart, blood or sleep conditions require review by the prescriber.',
    riskLevel: 'High', dependence: 'Moderate', evidence: 'Strong',
    duration: 'Changes develop over weeks or months; hormonal effects can persist after stopping.',
    sceneType: 'muscle', action: 'takes',
    sceneLabels: ['External hormone enters the system', 'Androgen signals alter tissues', 'Natural hormone signals can fall'],
    sources: [
      { label: 'MedlinePlus · Testosterone', url: 'https://medlineplus.gov/druginfo/meds/a619028.html' },
      { label: 'FDA · Testosterone labeling and blood pressure', url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fda-issues-class-wide-labeling-changes-testosterone-products' },
      { label: 'FDA · Testosterone prescribing information', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/208088s002lbl.pdf' },
    ],
  },
  {
    id: 'anabolic-steroids', name: 'Anabolic steroids', aliases: ['AAS', 'Nandrolone', 'Stanozolol', 'Anabolic-androgenic steroids'], category: 'Steroids',
    className: 'Androgens · performance-enhancing drugs', tagline: 'Muscles are only part of the story.',
    description: 'Anabolic-androgenic steroids are a family of drugs related to testosterone; examples include nandrolone and stanozolol. Some have medical uses, while nonmedical use aims to increase muscle or performance. Risks extend to the heart, liver, reproductive system and mental health. Individual compounds differ, so this is a class overview. Dependence can develop, and stopping after sustained misuse can bring fatigue, low mood and other withdrawal symptoms.',
    mechanism: 'These drugs activate androgen receptors, influencing protein production and tissue growth. They also disrupt the hormonal feedback systems that regulate reproductive function. Effects reach far beyond skeletal muscle, including changes in blood pressure, cholesterol and the body’s own hormone production.',
    effects: ['Increased muscle mass', 'Changes in strength', 'Changes in libido', 'Changes in mood'],
    risks: ['Heart and vascular harm', 'Liver or kidney injury', 'Infertility and hormonal suppression', 'Dependence and depressive withdrawal'],
    interactions: 'Combining steroids or other performance drugs does not establish safety. Additional drugs used to counter side effects can introduce further harm.',
    riskLevel: 'High', dependence: 'High', evidence: 'Strong',
    duration: 'Weeks to months; some hormonal and physical changes can last much longer.',
    sceneType: 'muscle', action: 'takes',
    sceneLabels: ['Androgen exposure rises', 'Growth signals reach many tissues', 'Heart and hormone systems can suffer'],
    sources: [
      { label: 'NHS · Anabolic steroid misuse', url: 'https://www.nhs.uk/conditions/anabolic-steroid-misuse/' },
    ],
  },
  {
    id: 'ostarine', name: 'Ostarine', aliases: ['Enobosarm', 'MK-2866', 'SARM'], category: 'SARMs',
    className: 'Selective androgen receptor modulator', tagline: '“Selective” is doing a lot of work.',
    description: 'Ostarine is an investigational selective androgen receptor modulator, often marketed for muscle growth. The marketing can make it resemble an ordinary supplement, but FDA warnings describe SARMs as unapproved drugs with potentially serious harms. Reports include liver injury, sexual dysfunction and fertility problems. Evidence from controlled studies does not resolve the safety of unregulated products or long-term nonmedical use. Product labels may not accurately describe what is inside.',
    mechanism: 'Ostarine binds androgen receptors with the aim of producing some muscle and bone effects of androgens. Tissue selectivity is incomplete and does not guarantee freedom from hormonal or organ effects. Its long-term effects in healthy people remain insufficiently characterized.',
    effects: ['Androgen receptor activation', 'Possible changes in lean mass', 'Changes in hormone signaling', 'Possible changes in sexual function'],
    risks: ['Reported liver injury', 'Hormonal and fertility effects', 'Potential cardiovascular harm', 'Uncertain long-term safety and contents'],
    interactions: 'Reliable interaction data are limited. Combining SARMs, steroids or other performance products increases uncertainty and may add organ stress.',
    riskLevel: 'Uncertain', dependence: 'Uncertain', evidence: 'Limited',
    duration: 'Effects develop over time; recovery and long-term consequences are poorly defined.',
    sceneType: 'muscle', action: 'takes',
    sceneLabels: ['A SARM enters circulation', 'Androgen receptors respond', 'Liver and hormone effects can emerge'],
    sources: [
      { label: 'FDA · Warning on SARMs', url: 'https://www.fda.gov/consumers/consumer-updates/fda-warns-use-selective-androgen-receptor-modulators-sarms-among-teens-young-adults' },
      { label: 'NIH LiverTox · SARMs', url: 'https://www.ncbi.nlm.nih.gov/books/NBK619971/' },
    ],
  },
  {
    id: '2c-b', name: '2C-B', aliases: ['Nexus', '4-bromo-2,5-dimethoxyphenethylamine'], category: 'Research chemicals',
    className: 'Psychedelic · phenethylamine', tagline: 'A small name. A sizeable evidence gap.',
    description: '2C-B is a synthetic psychedelic in the phenethylamine family. Human studies describe perceptual changes alongside stimulant-like effects, including increased heart rate and blood pressure. Its evidence base is much smaller than that of widely studied substances, especially for repeated use and combinations. An absence of well-documented harm does not establish safety. This entry concerns the specific molecule 2C-B; street branding alone cannot verify a product’s identity.',
    mechanism: '2C-B interacts with serotonin receptors involved in perception, including the 5-HT2 family. Laboratory findings and human observations suggest both psychedelic and stimulating effects. Its pharmacology is still being clarified, and receptor activity alone cannot predict an individual person’s experience or risk.',
    effects: ['Visual changes', 'Altered body sensations', 'Stimulation', 'Increased heart rate'],
    risks: ['Anxiety or overwhelming perception', 'Raised blood pressure', 'Uncertain product identity', 'Limited long-term safety evidence'],
    interactions: 'Human interaction data are limited. Other stimulants or serotonin-affecting substances may add risk; no combination should be inferred safe from missing data.',
    riskLevel: 'Uncertain', dependence: 'Uncertain', evidence: 'Limited',
    duration: 'Several hours in published human observations; individual timelines vary.',
    sceneType: 'psychedelic', action: 'takes',
    sceneLabels: ['2C-B reaches the brain', 'Perception and arousal shift', 'Anxiety and pulse can rise'],
    sources: [
      { label: 'Human observational study · Acute 2C-B effects', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5859368/' },
      { label: 'Controlled human study · 2C-B comparisons', url: 'https://doi.org/10.1038/s41386-026-02428-9' },
    ],
  },
  {
    id: 'synthetic-cathinones', name: 'Synthetic cathinones', aliases: ['Mephedrone', '4-MMC', '3-MMC', 'Bath salts'], category: 'Research chemicals',
    className: 'Stimulants · cathinone derivatives', tagline: 'One category. Many unknowns.',
    description: 'Synthetic cathinones are a varied family of stimulants, including mephedrone and newer compounds. Their effects and potency can differ substantially, so a category name is a poor guide to a particular product. Some produce energy or sociability, alongside risks of agitation, overheating and cardiovascular injury. Repeated use can become compulsive. Rapidly changing products and sparse human research make long-term effects and interactions especially difficult to assess.',
    mechanism: 'Different cathinones alter dopamine, norepinephrine and serotonin transport in different proportions. Some promote release; others mainly prevent reuptake. These changes can increase reward and arousal while pushing temperature regulation and the cardiovascular system into dangerous territory during toxicity.',
    effects: ['Increased energy', 'Increased sociability', 'Reduced appetite', 'Agitation or restlessness'],
    risks: ['Overheating', 'Arrhythmias and cardiovascular strain', 'Seizures or severe agitation', 'Dependence and compulsive use'],
    interactions: 'Other stimulants and serotonin-affecting drugs can compound toxicity. Unknown ingredients make combinations particularly unpredictable.',
    riskLevel: 'Very high', dependence: 'High', evidence: 'Limited',
    duration: 'Varies substantially across compounds; insomnia and agitation can persist.',
    sceneType: 'stimulant', action: 'takes',
    sceneLabels: ['A cathinone enters circulation', 'Monoamine signals increase', 'Heat and agitation can escalate'],
    sources: [
      { label: 'UK ACMD · Synthetic cathinones harms assessment', url: 'https://www.gov.uk/government/publications/synthetic-cathinones-an-updated-harms-assessment/synthetic-cathinones-an-updated-harms-assessment-accessible' },
      { label: 'DEA · Synthetic drugs overview', url: 'https://www.deadiversion.usdoj.gov/synthetic_drugs/about-sd.html' },
    ],
  },
  {
    id: 'vitamin-d', name: 'Vitamin D', aliases: ['Calciferol', 'Vitamin D3', 'Cholecalciferol'], category: 'Vitamins & herbs',
    className: 'Fat-soluble vitamin', tagline: 'More is not a personality trait.',
    description: 'Vitamin D helps the body maintain calcium balance and healthy bones. It comes from food, supplements and synthesis in skin exposed to sunlight. Correcting deficiency can be useful, but taking more does not reliably improve health when levels are already adequate. Because excess supplementation can drive calcium too high, vitamins deserve the same attention to labels and medical context as other biologically active substances.',
    mechanism: 'The liver and kidneys convert vitamin D into active forms that regulate gene activity through the vitamin D receptor. This supports calcium absorption and bone mineralization. Too much supplemental vitamin D can push that calcium-regulating system beyond a healthy range.',
    effects: ['Supports calcium absorption', 'Supports bone mineralization', 'Helps correct deficiency', 'Usually no immediate felt effect'],
    risks: ['High blood calcium from excess', 'Nausea and weakness with toxicity', 'Kidney stones or kidney damage', 'Abnormal heart rhythm in severe toxicity'],
    interactions: 'Thiazide diuretics can increase the risk of high calcium. Other medicines can affect vitamin D absorption or metabolism.',
    riskLevel: 'Lower', dependence: 'Not typical', evidence: 'Strong',
    duration: 'Nutritional effects develop over time; this is not an acute psychoactive experience.',
    sceneType: 'supplement', action: 'takes',
    sceneLabels: ['Vitamin D is processed', 'Calcium regulation responds', 'Excess can strain the kidneys'],
    sources: [
      { label: 'NIH ODS · Vitamin D fact sheet', url: 'https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/' },
    ],
  },
  {
    id: 'magnesium', name: 'Magnesium', aliases: ['Magnesium glycinate', 'Magnesium citrate', 'Magnesium oxide'], category: 'Vitamins & herbs',
    className: 'Essential mineral', tagline: 'Cellular housekeeping, with a bathroom caveat.',
    description: 'Magnesium is an essential mineral involved in nerve, muscle and energy functions. Food sources include nuts, legumes and leafy vegetables. Supplements can help in specific situations, but broad claims about instant calm or better performance often outrun the evidence. Supplemental forms differ in absorption and gastrointestinal effects. Excess is especially concerning when kidney function is impaired because the body may struggle to remove it.',
    mechanism: 'Magnesium helps hundreds of enzymes work and supports the movement of calcium and potassium across cell membranes. Those processes contribute to normal nerve signaling, muscle contraction and heart rhythm. Unabsorbed magnesium salts can draw water into the intestine, causing diarrhea.',
    effects: ['Supports normal nerve function', 'Supports muscle function', 'Helps correct deficiency', 'Can loosen stools'],
    risks: ['Diarrhea', 'Abdominal cramping', 'Toxicity with impaired kidney function', 'Low blood pressure or arrhythmia in severe excess'],
    interactions: 'Magnesium can reduce absorption of some antibiotics and bisphosphonates. Diuretics and acid-suppressing medicines can affect magnesium status.',
    riskLevel: 'Lower', dependence: 'Not typical', evidence: 'Strong',
    duration: 'Nutritional effects develop over time; gastrointestinal effects may appear sooner.',
    sceneType: 'supplement', action: 'takes',
    sceneLabels: ['Magnesium becomes available', 'Nerves and enzymes use it', 'The gut may object to excess'],
    sources: [
      { label: 'NIH ODS · Magnesium fact sheet', url: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/' },
    ],
  },
  {
    id: 'ashwagandha', name: 'Ashwagandha', aliases: ['Withania somnifera', 'Indian ginseng'], category: 'Vitamins & herbs',
    className: 'Herbal supplement', tagline: 'A plant can still have side effects.',
    description: 'Ashwagandha is an herb used in Ayurvedic traditions and now promoted for stress, sleep and performance. Small studies suggest some preparations may help stress or insomnia, but products vary and many broader claims remain unsupported. Drowsiness and gastrointestinal problems can occur, and rare cases of liver injury have been reported. Long-term safety is not established. Pregnancy, thyroid disease and several medications materially change the safety picture.',
    mechanism: 'Ashwagandha contains multiple biologically active compounds, including withanolides. Proposed effects involve several signaling and stress-response pathways, but a clear, clinically established mechanism for marketed benefits is lacking. Different root and leaf preparations cannot be assumed to act identically in people.',
    effects: ['Possible reduction in perceived stress', 'Possible sleep improvement', 'Drowsiness', 'Gastrointestinal changes'],
    risks: ['Stomach upset or diarrhea', 'Rare reported liver injury', 'Concerns with thyroid disorders', 'Pregnancy and medication risks'],
    interactions: 'Potential interactions include sedatives, thyroid hormones, immunosuppressants, anticonvulsants and medicines for blood pressure or diabetes.',
    riskLevel: 'Moderate', dependence: 'Not typical', evidence: 'Limited',
    duration: 'Studies assess changes over weeks; no reliable acute effect timeline.',
    sceneType: 'supplement', action: 'takes',
    sceneLabels: ['Plant compounds are absorbed', 'Several biological pathways may respond', 'Drowsiness or gut upset may follow'],
    sources: [
      { label: 'NCCIH · Ashwagandha evidence and safety', url: 'https://www.nccih.nih.gov/health/ashwagandha' },
    ],
  },
  {
    id: 'st-johns-wort', name: 'St. John’s wort', aliases: ['Hypericum perforatum', 'Hypericum'], category: 'Vitamins & herbs',
    className: 'Herbal supplement · major interaction potential', tagline: 'Small yellow flowers. A long interaction list.',
    description: 'St. John’s wort is a flowering plant commonly promoted for depression. Evidence suggests benefit for some mild or moderate depression, but severe depression and longer-term outcomes are less certain. Its interaction profile is unusually important: it can reduce the effectiveness of many medicines, including some contraceptives and transplant drugs. It can also interact dangerously with antidepressants. Being sold as an herb does not make it a casual addition to treatment.',
    mechanism: 'Its constituents affect several biological systems, and the precise antidepressant mechanism is not fully established. A well-established concern is induction of drug-metabolizing enzymes and transporters, which can lower concentrations of other medicines. Effects on serotonin also matter for dangerous combinations.',
    effects: ['Possible improvement in some depressive symptoms', 'Restlessness or insomnia', 'Gastrointestinal upset', 'Increased sensitivity to sunlight'],
    risks: ['Reduced effectiveness of essential medicines', 'Dangerous serotonergic interactions', 'Photosensitivity reactions', 'Delay in appropriate depression care'],
    interactions: 'Major interactions include antidepressants, hormonal contraceptives, transplant medicines, some HIV drugs and warfarin. A pharmacist should review the complete medication list.',
    riskLevel: 'High', dependence: 'Not typical', evidence: 'Moderate',
    duration: 'Mood effects are assessed over weeks; interaction effects can persist after stopping.',
    sceneType: 'supplement', action: 'takes',
    sceneLabels: ['Herbal compounds enter circulation', 'Drug-processing pathways change', 'Other medicines may lose effect'],
    sources: [
      { label: 'NCCIH · St. John’s wort evidence and safety', url: 'https://www.nccih.nih.gov/health/st-johns-wort' },
      { label: 'NCCIH · Herb–drug interaction science', url: 'https://www.nccih.nih.gov/health/providers/digest/herb-drug-interactions-science' },
    ],
  },
];
