import type { CatalogSeed } from './types';

// Source-linked ingredient records with explicitly authored clinical storyboards.
export const medicationSeeds: CatalogSeed[] = [
  {
    "id": "mixed-amphetamine-salts",
    "name": "Mixed amphetamine salts",
    "aliases": [
      "dextroamphetamine and amphetamine",
      "Adderall",
      "Adderall XR",
      "Mydayis",
      "Addy"
    ],
    "category": "Medications",
    "className": "ADHD stimulant · mixed amphetamine salts",
    "useContext": "Clinician-managed treatment of ADHD; some products are also labeled for narcolepsy. Product age ranges and release forms differ.",
    "mechanism": "Central nervous system sympathomimetic stimulant. The label says its therapeutic ADHD mechanism is not known; amphetamines are thought to increase extracellular norepinephrine and dopamine by increasing release and reducing reuptake.",
    "effects": [
      "Can improve ADHD attention and impulse control",
      "May improve wakefulness in narcolepsy treatment"
    ],
    "risks": [
      "Misuse, dependence, and addiction",
      "Raised pulse or pressure, insomnia, and appetite loss"
    ],
    "interactionNote": "MAO inhibitors can cause hypertensive crisis and must not overlap with treatment. Serotonergic medicines can raise serotonin-syndrome risk; medication review is important.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · mixed amphetamine salts tablet label (current generic-name query)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff1e5518-0aa6-4bc9-bc87-8a6a124bc95a"
      },
      {
        "label": "MedlinePlus · Dextroamphetamine and Amphetamine",
        "url": "https://medlineplus.gov/druginfo/meds/a601234.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "focus",
      "adverse": "heartbeat",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Ordering a task list during prescribed ADHD care.",
      "responseNotes": [
        "Attention and impulse control may improve",
        "Dopamine and norepinephrine signaling change"
      ],
      "riskNotes": [
        "Pulse or blood pressure may rise",
        "Insomnia or appetite loss can occur"
      ],
      "beats": [
        "Attention and impulse control may improve",
        "Pulse or blood pressure may rise"
      ],
      "asides": [
        "The list still has checkboxes.",
        "Insomnia or appetite loss can occur"
      ],
      "riskVisual": "pulse",
      "exposure": "oral"
    }
  },
  {
    "id": "dextroamphetamine",
    "name": "Dextroamphetamine",
    "aliases": [],
    "category": "Medications",
    "className": "ADHD stimulant",
    "useContext": "Clinician-managed ADHD treatment and narcolepsy treatment.",
    "mechanism": "Central nervous system stimulant; the patient article describes altered brain levels of natural signaling substances.",
    "effects": [
      "May improve attention and impulse control",
      "Promotes wakefulness in narcolepsy care"
    ],
    "risks": [
      "Misuse can lead to dependence",
      "May cause serious heart effects or psychotic symptoms"
    ],
    "interactionNote": "MAO inhibitors must not overlap; review other prescriptions and supplements with a clinician.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Dextroamphetamine",
        "url": "https://medlineplus.gov/druginfo/meds/a605027.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "focus",
      "adverse": "dry-mouth",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [],
      "intent": "Reading a marked chapter during prescribed ADHD treatment.",
      "responseNotes": [
        "Attention and behavioral control may improve",
        "Brain neurotransmitter activity changes"
      ],
      "riskNotes": [
        "Dry mouth can occur",
        "Misuse can lead to dependence"
      ],
      "beats": [
        "Attention and behavioral control may improve",
        "Dry mouth can occur"
      ],
      "asides": [
        "One paragraph at a time.",
        "Misuse can lead to dependence"
      ],
      "riskVisual": "dry-mouth",
      "exposure": "oral"
    }
  },
  {
    "id": "lisdexamfetamine",
    "name": "Lisdexamfetamine",
    "aliases": [
      "Vyvanse"
    ],
    "category": "Medications",
    "className": "ADHD stimulant · prodrug",
    "useContext": "Clinician-managed ADHD treatment in adults and children and binge-eating-disorder treatment in adults.",
    "mechanism": "Central nervous system stimulant; converted in the body to dextroamphetamine, which changes brain signaling.",
    "effects": [
      "May improve attention and behavioral control",
      "Used in adult binge-eating-disorder care"
    ],
    "risks": [
      "Misuse can lead to dependence",
      "May cause insomnia, appetite loss, or serious heart effects"
    ],
    "interactionNote": "MAO inhibitors are contraindicated around treatment; disclose other stimulants and medicines before use.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lisdexamfetamine",
        "url": "https://medlineplus.gov/druginfo/meds/a607047.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "planning",
      "prop": "calendar",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "focus",
      "adverse": "nausea",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Planning project steps during prescribed ADHD care.",
      "responseNotes": [
        "ADHD symptoms may improve",
        "The opening plan remains part of the work"
      ],
      "riskNotes": [
        "Nausea or appetite loss can occur",
        "Misuse and cardiovascular harms are risks"
      ],
      "beats": [
        "ADHD symptoms may improve",
        "Nausea or appetite loss can occur"
      ],
      "asides": [
        "The calendar has a plan.",
        "Misuse and cardiovascular harms are risks"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "methylphenidate",
    "name": "Methylphenidate",
    "aliases": [
      "Ritalin",
      "Concerta"
    ],
    "category": "Medications",
    "className": "ADHD stimulant",
    "useContext": "Clinician-managed ADHD treatment and narcolepsy treatment; product forms have different release profiles.",
    "mechanism": "Central nervous system stimulant that changes levels of natural brain signaling substances.",
    "effects": [
      "May improve attention and impulse control",
      "Used to reduce excessive daytime sleepiness in narcolepsy"
    ],
    "risks": [
      "Misuse can lead to dependence or overdose",
      "May cause insomnia, appetite loss, or serious heart effects"
    ],
    "interactionNote": "MAO inhibitors must not overlap; medication review is important before adding other drugs.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Methylphenidate",
        "url": "https://medlineplus.gov/druginfo/meds/a682188.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "typing",
      "prop": "phone",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "focus",
      "adverse": "tense",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Sorting digital reminders during prescribed ADHD care.",
      "responseNotes": [
        "Attention and impulse control may improve",
        "Release profiles differ between products"
      ],
      "riskNotes": [
        "Nervousness or restlessness can occur",
        "Misuse and cardiovascular harms are risks"
      ],
      "beats": [
        "Attention and impulse control may improve",
        "Nervousness or restlessness can occur"
      ],
      "asides": [
        "One reminder at a time.",
        "Misuse and cardiovascular harms are risks"
      ],
      "riskVisual": "agitation",
      "exposure": "oral"
    }
  },
  {
    "id": "dexmethylphenidate",
    "name": "Dexmethylphenidate",
    "aliases": [
      "Focalin"
    ],
    "category": "Medications",
    "className": "ADHD stimulant",
    "useContext": "Clinician-managed ADHD treatment in adults and children.",
    "mechanism": "Central nervous system stimulant; increases natural brain signaling substances involved in attention and behavior.",
    "effects": [
      "May improve attention and behavioral control",
      "Can reduce hyperactivity and impulsivity"
    ],
    "risks": [
      "Misuse can lead to dependence",
      "Can cause insomnia, appetite loss, or cardiac and mood effects"
    ],
    "interactionNote": "MAO inhibitors must not overlap. Other medicines can require additional monitoring or changes by the prescriber.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Dexmethylphenidate",
        "url": "https://medlineplus.gov/druginfo/meds/a603014.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "writing",
      "prop": "notebook",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "focus",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Writing study notes during prescribed ADHD treatment.",
      "responseNotes": [
        "Attention and behavioral control may improve",
        "Brain signaling involved in attention changes"
      ],
      "riskNotes": [
        "Dizziness can affect balance",
        "Cardiovascular effects need attention"
      ],
      "beats": [
        "Attention and behavioral control may improve",
        "Dizziness can affect balance"
      ],
      "asides": [
        "There is room in the margin for a note.",
        "Cardiovascular effects need attention"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "atomoxetine",
    "name": "Atomoxetine",
    "aliases": [
      "Strattera"
    ],
    "category": "Medications",
    "className": "Selective norepinephrine reuptake inhibitor",
    "useContext": "Part of a clinician-managed ADHD treatment plan for children and adults.",
    "mechanism": "Selective norepinephrine reuptake inhibitor; raises norepinephrine signaling involved in attention and behavior.",
    "effects": [
      "May improve attention",
      "May reduce impulsivity and hyperactivity"
    ],
    "risks": [
      "Suicidal thoughts have been reported in children and teens",
      "Can raise heart rate or blood pressure; liver injury is a concern"
    ],
    "interactionNote": "MAO inhibitors are contraindicated; CYP2D6-inhibiting antidepressants can change atomoxetine exposure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Atomoxetine",
        "url": "https://medlineplus.gov/druginfo/meds/a603013.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Arranging a care card and task plan during nonstimulant ADHD care.",
      "responseNotes": [
        "Norepinephrine signaling changes",
        "Attention and impulsivity may improve over time"
      ],
      "riskNotes": [
        "Nausea or stomach discomfort can occur",
        "Pulse, pressure, or liver effects can occur"
      ],
      "beats": [
        "Norepinephrine signaling changes",
        "Nausea or stomach discomfort can occur"
      ],
      "asides": [
        "Small tasks make useful records.",
        "Pulse, pressure, or liver effects can occur"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "viloxazine",
    "name": "Viloxazine",
    "aliases": [
      "Qelbree"
    ],
    "category": "Medications",
    "className": "Selective norepinephrine reuptake inhibitor",
    "useContext": "Viloxazine is a nonstimulant ADHD medicine used to help manage attention, hyperactivity, and impulsive behavior. Care tracks those symptoms alongside mood, appetite, and growth-related effects.",
    "mechanism": "Selective norepinephrine reuptake inhibitor; increases norepinephrine signaling involved in behavior control.",
    "effects": [
      "May improve attention",
      "May reduce hyperactivity and impulsiveness"
    ],
    "risks": [
      "Suicidal thoughts are a warning for children and teens",
      "May reduce appetite and affect children's weight gain"
    ],
    "interactionNote": "MAO inhibitors must not overlap. Viloxazine can interact with caffeine and several medicines through enzyme inhibition; review the full list with a clinician.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Viloxazine",
        "url": "https://medlineplus.gov/druginfo/meds/a621027.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "checklist",
      "prop": "notebook",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reviewing unfinished tasks during nonstimulant ADHD treatment.",
      "responseNotes": [
        "Norepinephrine signaling changes",
        "Attention and hyperactivity may improve over time"
      ],
      "riskNotes": [
        "Nausea or vomiting can occur",
        "Appetite and weight gain can be affected"
      ],
      "beats": [
        "Norepinephrine signaling changes",
        "Nausea or vomiting can occur"
      ],
      "asides": [
        "The notebook keeps the details together.",
        "Appetite and weight gain can be affected"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "guanfacine",
    "name": "Guanfacine",
    "aliases": [
      "Tenex",
      "Intuniv"
    ],
    "category": "Medications",
    "className": "Central alpha-2 adrenergic agonist",
    "useContext": "Oral immediate-release products treat high blood pressure; extended-release products are used for ADHD as part of a treatment program.",
    "mechanism": "Centrally acting alpha-2A adrenergic agonist; lowers heart rate and relaxes blood vessels, while extended-release treatment acts on attention-related brain pathways.",
    "effects": [
      "May improve ADHD symptoms with the relevant product",
      "Can lower blood pressure"
    ],
    "risks": [
      "Sleepiness, fatigue, or dizziness can impair alertness",
      "Stopping suddenly can cause rebound blood-pressure elevation"
    ],
    "interactionNote": "Other blood-pressure medicines and sedating drugs may add to low blood pressure or drowsiness; check the medication list.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Guanfacine",
        "url": "https://medlineplus.gov/druginfo/meds/a601059.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "planning",
      "prop": "notebook",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Planning a work period during extended-release ADHD care.",
      "responseNotes": [
        "The relevant product may reduce ADHD symptoms",
        "Attention-related brain pathways are affected"
      ],
      "riskNotes": [
        "Sleepiness or dizziness can occur",
        "Stopping abruptly can raise blood pressure"
      ],
      "beats": [
        "The relevant product may reduce ADHD symptoms",
        "Sleepiness or dizziness can occur"
      ],
      "asides": [
        "The plan includes pauses.",
        "Stopping abruptly can raise blood pressure"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "clonidine",
    "name": "Clonidine",
    "aliases": [
      "Catapres",
      "Kapvay"
    ],
    "category": "Medications",
    "className": "Central alpha adrenergic agonist",
    "useContext": "Oral products treat high blood pressure; extended-release products can also treat ADHD in children. The scene represents that ADHD treatment context.",
    "mechanism": "Centrally acting alpha agonist that reduces sympathetic signaling and can lower heart rate and blood pressure.",
    "effects": [
      "May improve ADHD symptoms with the relevant product",
      "Can lower blood pressure"
    ],
    "risks": [
      "Drowsiness, weakness, or dizziness can occur",
      "Abrupt discontinuation can cause rebound hypertension"
    ],
    "interactionNote": "Other blood-pressure medicines and sedatives may compound low blood pressure or drowsiness.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Clonidine (oral uses)",
        "url": "https://medlineplus.gov/druginfo/meds/a682243.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "writing",
      "prop": "clipboard",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Writing a daily routine during extended-release ADHD care.",
      "responseNotes": [
        "The relevant product may reduce ADHD symptoms",
        "Central adrenergic signaling changes"
      ],
      "riskNotes": [
        "Drowsiness or dizziness can occur",
        "Stopping abruptly can raise blood pressure"
      ],
      "beats": [
        "The relevant product may reduce ADHD symptoms",
        "Drowsiness or dizziness can occur"
      ],
      "asides": [
        "A quiet work period still has a plan.",
        "Stopping abruptly can raise blood pressure"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "fluoxetine",
    "name": "Fluoxetine",
    "aliases": [
      "Prozac"
    ],
    "category": "Medications",
    "className": "SSRI antidepressant",
    "useContext": "Clinician-managed care for depression, OCD, panic disorder, bulimia, and premenstrual dysphoric disorder; other uses depend on product and care plan.",
    "mechanism": "Selective serotonin reuptake inhibitor (SSRI) that increases serotonin signaling.",
    "effects": [
      "May improve depression and anxiety symptoms",
      "Can reduce OCD or panic symptoms"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "May cause serotonin toxicity, bleeding, sleep, or sexual effects"
    ],
    "interactionNote": "Do not combine with MAO inhibitors; other serotonergic medicines and drugs affecting bleeding or heart rhythm need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Fluoxetine",
        "url": "https://medlineplus.gov/druginfo/meds/a689006.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "tense",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Updating a mood journal during prescribed depression care.",
      "responseNotes": [
        "Serotonin signaling changes during treatment",
        "Depression symptoms may improve over time"
      ],
      "riskNotes": [
        "Nervousness or anxiety can occur",
        "Serotonin toxicity and bleeding are risks"
      ],
      "beats": [
        "Serotonin signaling changes during treatment",
        "Nervousness or anxiety can occur"
      ],
      "asides": [
        "A journal catches the ordinary days.",
        "Serotonin toxicity and bleeding are risks"
      ],
      "riskVisual": "agitation",
      "exposure": "oral"
    }
  },
  {
    "id": "sertraline",
    "name": "Sertraline",
    "aliases": [
      "Zoloft"
    ],
    "category": "Medications",
    "className": "SSRI antidepressant",
    "useContext": "Clinician-managed treatment for depression, OCD, panic disorder, PTSD, social anxiety disorder, and premenstrual dysphoric disorder.",
    "mechanism": "SSRI that increases serotonin signaling in the brain.",
    "effects": [
      "May improve depression and anxiety symptoms",
      "Can reduce panic, OCD, or PTSD symptoms"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Serotonin toxicity, bleeding, or sexual effects can occur"
    ],
    "interactionNote": "MAO inhibitors are contraindicated; disclose serotonergic medicines, anticoagulants, and all supplements.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Sertraline",
        "url": "https://medlineplus.gov/druginfo/meds/a697048.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reading a care notebook during depression or anxiety treatment.",
      "responseNotes": [
        "Depression or anxiety symptoms may improve",
        "The change develops across a treatment course"
      ],
      "riskNotes": [
        "Nausea or diarrhea can occur",
        "Serotonin toxicity or sexual effects can occur"
      ],
      "beats": [
        "Depression or anxiety symptoms may improve",
        "Nausea or diarrhea can occur"
      ],
      "asides": [
        "The bookmark keeps its place.",
        "Serotonin toxicity or sexual effects can occur"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "escitalopram",
    "name": "Escitalopram",
    "aliases": [
      "Lexapro"
    ],
    "category": "Medications",
    "className": "SSRI antidepressant",
    "useContext": "Clinician-managed treatment for depression and generalized anxiety disorder.",
    "mechanism": "SSRI that increases serotonin signaling.",
    "effects": [
      "May improve depression symptoms",
      "May reduce excessive anxiety"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "May cause serotonin toxicity, sexual, or heart-rhythm effects"
    ],
    "interactionNote": "MAO inhibitors and other serotonergic medicines can be unsafe; review other drugs that affect heart rhythm.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Escitalopram",
        "url": "https://medlineplus.gov/druginfo/meds/a603005.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Planning a follow-up visit during depression or anxiety care.",
      "responseNotes": [
        "Serotonin signaling changes",
        "Depression or anxiety symptoms may improve"
      ],
      "riskNotes": [
        "Drowsiness can affect daily activities",
        "Serotonin or heart-rhythm effects can occur"
      ],
      "beats": [
        "Serotonin signaling changes",
        "Drowsiness can affect daily activities"
      ],
      "asides": [
        "Follow-up is part of the calendar.",
        "Serotonin or heart-rhythm effects can occur"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "citalopram",
    "name": "Citalopram",
    "aliases": [
      "Celexa"
    ],
    "category": "Medications",
    "className": "SSRI antidepressant",
    "useContext": "Clinician-managed treatment for depression.",
    "mechanism": "SSRI that increases serotonin signaling.",
    "effects": [
      "May improve depression symptoms",
      "Can affect sleep, appetite, and sexual function"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Dose-related QT prolongation can raise risk of serious arrhythmia"
    ],
    "interactionNote": "MAO inhibitors and other serotonergic medicines are unsafe combinations; other QT-prolonging medicines need clinician review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Citalopram",
        "url": "https://medlineplus.gov/druginfo/meds/a699001.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "typing",
      "prop": "phone",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Recording a weekly mood check during depression treatment.",
      "responseNotes": [
        "Depression symptoms may improve over time",
        "Serotonin signaling changes during treatment"
      ],
      "riskNotes": [
        "Nausea can occur",
        "QT prolongation can cause serious arrhythmia"
      ],
      "beats": [
        "Depression symptoms may improve over time",
        "Nausea can occur"
      ],
      "asides": [
        "The week fits in a short note.",
        "QT prolongation can cause serious arrhythmia"
      ],
      "riskVisual": "pulse",
      "exposure": "oral"
    }
  },
  {
    "id": "paroxetine",
    "name": "Paroxetine",
    "aliases": [
      "Paxil"
    ],
    "category": "Medications",
    "className": "SSRI antidepressant",
    "useContext": "Clinician-managed treatment for depression, panic disorder, OCD, social anxiety, generalized anxiety, PTSD, and premenstrual dysphoric disorder.",
    "mechanism": "SSRI that increases serotonin signaling.",
    "effects": [
      "May improve depression and anxiety symptoms",
      "Can reduce panic or OCD symptoms"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Sexual effects, weight changes, and withdrawal symptoms can occur"
    ],
    "interactionNote": "MAO inhibitors and serotonergic medicines are unsafe combinations; paroxetine also interacts with several other drugs, so check before adding medicines.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Paroxetine",
        "url": "https://medlineplus.gov/druginfo/meds/a698032.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Reviewing a follow-up care card during anxiety treatment.",
      "responseNotes": [
        "Anxiety or panic symptoms may improve",
        "The selected context is ongoing anxiety care"
      ],
      "riskNotes": [
        "Dizziness can affect balance",
        "Discontinuation symptoms can occur"
      ],
      "beats": [
        "Anxiety or panic symptoms may improve",
        "Dizziness can affect balance"
      ],
      "asides": [
        "The care card keeps the details together.",
        "Discontinuation symptoms can occur"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "fluvoxamine",
    "name": "Fluvoxamine",
    "aliases": [
      "Luvox"
    ],
    "category": "Medications",
    "className": "SSRI antidepressant",
    "useContext": "Clinician-managed treatment for OCD and social anxiety disorder.",
    "mechanism": "SSRI that increases serotonin signaling.",
    "effects": [
      "May reduce OCD symptoms",
      "May ease social anxiety"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "GI upset, sleep changes, and sexual effects can occur"
    ],
    "interactionNote": "MAO inhibitors and other serotonergic medicines are unsafe combinations; fluvoxamine can alter levels of many other drugs through enzyme inhibition.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Fluvoxamine",
        "url": "https://medlineplus.gov/druginfo/meds/a695004.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reviewing a daily routine as part of prescribed OCD care.",
      "responseNotes": [
        "OCD symptoms may improve over time",
        "Serotonin signaling changes during treatment"
      ],
      "riskNotes": [
        "Nausea or vomiting can occur",
        "Mood and sexual effects need attention"
      ],
      "beats": [
        "OCD symptoms may improve over time",
        "Nausea or vomiting can occur"
      ],
      "asides": [
        "Routines can have footnotes.",
        "Mood and sexual effects need attention"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "venlafaxine",
    "name": "Venlafaxine",
    "aliases": [
      "Effexor"
    ],
    "category": "Medications",
    "className": "SNRI antidepressant",
    "useContext": "Clinician-managed treatment for depression, generalized anxiety, social anxiety, and panic disorder.",
    "mechanism": "Serotonin-norepinephrine reuptake inhibitor (SNRI) that increases both signaling pathways.",
    "effects": [
      "May improve depression and anxiety symptoms",
      "Can reduce panic symptoms"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Can raise blood pressure; sudden stopping can cause withdrawal"
    ],
    "interactionNote": "MAO inhibitors and serotonergic drugs can cause serious reactions; review the full medication list.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Venlafaxine",
        "url": "https://medlineplus.gov/druginfo/meds/a694020.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [],
      "intent": "Recording symptoms during depression or anxiety treatment.",
      "responseNotes": [
        "Serotonin and norepinephrine signaling change",
        "Depression or anxiety symptoms may improve"
      ],
      "riskNotes": [
        "Dry mouth can occur",
        "Mood and discontinuation effects need attention"
      ],
      "beats": [
        "Serotonin and norepinephrine signaling change",
        "Dry mouth can occur"
      ],
      "asides": [
        "Some pages are for appointments.",
        "Mood and discontinuation effects need attention"
      ],
      "riskVisual": "dry-mouth",
      "exposure": "oral"
    }
  },
  {
    "id": "desvenlafaxine",
    "name": "Desvenlafaxine",
    "aliases": [
      "Pristiq"
    ],
    "category": "Medications",
    "className": "SNRI antidepressant",
    "useContext": "Clinician-managed treatment for depression.",
    "mechanism": "SNRI that increases serotonin and norepinephrine signaling.",
    "effects": [
      "May improve depression symptoms",
      "Can affect sleep, appetite, and sweating"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Serotonin toxicity and increased blood pressure can occur"
    ],
    "interactionNote": "MAO inhibitors and other serotonergic medicines can cause serious reactions; discuss supplements and other prescriptions before combining.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Desvenlafaxine",
        "url": "https://medlineplus.gov/druginfo/meds/a608022.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Reviewing a treatment diary during prescribed depression care.",
      "responseNotes": [
        "Depression symptoms may improve over time",
        "Serotonin and norepinephrine signaling change"
      ],
      "riskNotes": [
        "Blood pressure may rise",
        "Serotonin toxicity and mood changes are risks"
      ],
      "beats": [
        "Depression symptoms may improve over time",
        "Blood pressure may rise"
      ],
      "asides": [
        "The diary makes room for follow-up.",
        "Serotonin toxicity and mood changes are risks"
      ],
      "riskVisual": "pressure",
      "exposure": "oral"
    }
  },
  {
    "id": "duloxetine",
    "name": "Duloxetine",
    "aliases": [
      "Cymbalta"
    ],
    "category": "Medications",
    "className": "SNRI antidepressant",
    "useContext": "Clinician-managed care for depression, generalized anxiety, diabetic nerve pain, fibromyalgia, and ongoing bone or muscle pain.",
    "mechanism": "SNRI that increases serotonin and norepinephrine signaling.",
    "effects": [
      "Can reduce some chronic nerve or musculoskeletal pain",
      "May improve mood or anxiety symptoms"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Liver injury, bleeding, and serotonin toxicity are concerns"
    ],
    "interactionNote": "MAO inhibitors and serotonergic drugs can cause serious reactions; medicines affecting bleeding or liver function need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Duloxetine",
        "url": "https://medlineplus.gov/druginfo/meds/a604030.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "reading",
      "task": "reading",
      "prop": "notebook",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reviewing a pain diary during prescribed chronic-pain care.",
      "responseNotes": [
        "Some chronic nerve or muscle pain can improve",
        "Serotonin and norepinephrine signaling change"
      ],
      "riskNotes": [
        "Nausea or other digestive effects can occur",
        "Serotonin toxicity and mood changes are risks"
      ],
      "beats": [
        "Some chronic nerve or muscle pain can improve",
        "Nausea or other digestive effects can occur"
      ],
      "asides": [
        "The diary tracks the difficult days too.",
        "Serotonin toxicity and mood changes are risks"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "bupropion",
    "name": "Bupropion",
    "aliases": [
      "Wellbutrin",
      "Zyban"
    ],
    "category": "Medications",
    "className": "Atypical antidepressant",
    "useContext": "Clinician-managed care for depression and seasonal affective disorder; some products help support smoking cessation.",
    "mechanism": "Antidepressant that increases activity in brain signaling systems; it is not an SSRI.",
    "effects": [
      "Can support smoking cessation",
      "May improve depression symptoms"
    ],
    "risks": [
      "Seizure risk rises with seizure or eating disorders",
      "Suicidal thoughts are a warning for younger patients"
    ],
    "interactionNote": "MAO inhibitors are contraindicated. Other drugs that lower the seizure threshold or inhibit CYP2B6 need clinician review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Bupropion",
        "url": "https://medlineplus.gov/druginfo/meds/a695033.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [],
      "intent": "Planning a smoking-cessation routine with prescribed support.",
      "responseNotes": [
        "The relevant product can support smoking cessation",
        "A quit plan also includes ordinary routines"
      ],
      "riskNotes": [
        "Dry mouth can occur",
        "Mood changes require monitoring"
      ],
      "beats": [
        "The relevant product can support smoking cessation",
        "Dry mouth can occur"
      ],
      "asides": [
        "A quit plan includes ordinary routines.",
        "Mood changes require monitoring"
      ],
      "riskVisual": "dry-mouth",
      "exposure": "oral"
    }
  },
  {
    "id": "mirtazapine",
    "name": "Mirtazapine",
    "aliases": [
      "Remeron"
    ],
    "category": "Medications",
    "className": "Atypical antidepressant",
    "useContext": "Clinician-managed treatment for depression.",
    "mechanism": "Antidepressant that changes norepinephrine and serotonin signaling.",
    "effects": [
      "May improve depression symptoms",
      "Can increase appetite and cause drowsiness"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Rare low white-cell counts and serotonin toxicity are concerns"
    ],
    "interactionNote": "MAO inhibitors and other serotonergic medicines can be unsafe combinations; alcohol and sedatives may add to drowsiness.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Mirtazapine",
        "url": "https://medlineplus.gov/druginfo/meds/a697009.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "rest",
      "task": "resting",
      "prop": "book",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Winding down with a book during depression treatment.",
      "responseNotes": [
        "Depression symptoms may improve over time",
        "Norepinephrine and serotonin signaling change"
      ],
      "riskNotes": [
        "Drowsiness can affect daily tasks",
        "Mood changes require monitoring"
      ],
      "beats": [
        "Depression symptoms may improve over time",
        "Drowsiness can affect daily tasks"
      ],
      "asides": [
        "An ordinary quiet evening has its own routine.",
        "Mood changes require monitoring"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "trazodone",
    "name": "Trazodone",
    "aliases": [
      "Desyrel"
    ],
    "category": "Medications",
    "className": "Serotonin-modulating antidepressant",
    "useContext": "Clinician-managed treatment for depression.",
    "mechanism": "Serotonin modulator that increases serotonin signaling.",
    "effects": [
      "May improve depression symptoms",
      "Can cause drowsiness or dizziness"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Priapism and serious heart-rhythm symptoms can occur"
    ],
    "interactionNote": "MAO inhibitors and serotonergic drugs can cause serious reactions; alcohol or sedatives may add impairment.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Trazodone",
        "url": "https://medlineplus.gov/druginfo/meds/a681038.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "reading",
      "task": "reading",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Reading an evening care notebook during depression treatment.",
      "responseNotes": [
        "Depression symptoms may improve over time",
        "Serotonin signaling changes during treatment"
      ],
      "riskNotes": [
        "Drowsiness or dizziness can occur",
        "Priapism and heart-rhythm problems are serious risks"
      ],
      "beats": [
        "Depression symptoms may improve over time",
        "Drowsiness or dizziness can occur"
      ],
      "asides": [
        "The care notebook has a bookmark.",
        "Priapism and heart-rhythm problems are serious risks"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "vortioxetine",
    "name": "Vortioxetine",
    "aliases": [
      "Trintellix"
    ],
    "category": "Medications",
    "className": "Serotonin-modulating antidepressant",
    "useContext": "Clinician-managed treatment of depression in adults.",
    "mechanism": "Serotonin modulator that mainly increases serotonin signaling.",
    "effects": [
      "May improve depression symptoms",
      "Nausea and constipation can occur"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Serotonin toxicity and abnormal bleeding are concerns"
    ],
    "interactionNote": "MAO inhibitors and serotonergic medicines are unsafe combinations; anticoagulants and other bleeding-risk drugs need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Vortioxetine",
        "url": "https://medlineplus.gov/druginfo/meds/a614003.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "organizer",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut",
        "brain"
      ],
      "intent": "Arranging symptom notes during prescribed depression treatment.",
      "responseNotes": [
        "Depression symptoms may improve over time",
        "Serotonin signaling changes during treatment"
      ],
      "riskNotes": [
        "Nausea or constipation can occur",
        "Mood, bleeding, or serotonin effects need attention"
      ],
      "beats": [
        "Depression symptoms may improve over time",
        "Nausea or constipation can occur"
      ],
      "asides": [
        "A few notes can help at follow-up.",
        "Mood, bleeding, or serotonin effects need attention"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "amitriptyline",
    "name": "Amitriptyline",
    "aliases": [
      "Elavil"
    ],
    "category": "Medications",
    "className": "Tricyclic antidepressant",
    "useContext": "Clinician-managed treatment for depression; other uses depend on the clinical plan.",
    "mechanism": "Tricyclic antidepressant that increases serotonin and norepinephrine signaling.",
    "effects": [
      "May improve depression symptoms",
      "Can cause drowsiness and dry mouth"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Overdose can cause dangerous heart-rhythm and neurologic effects"
    ],
    "interactionNote": "MAO inhibitors are contraindicated; alcohol, sedatives, and anticholinergic medicines can increase adverse effects.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Amitriptyline",
        "url": "https://medlineplus.gov/druginfo/meds/a682388.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "rest",
      "task": "resting",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Resting with a symptom diary during depression treatment.",
      "responseNotes": [
        "Depression symptoms may improve over time",
        "Serotonin and norepinephrine signaling change"
      ],
      "riskNotes": [
        "Dry mouth or drowsiness can occur",
        "Overdose can severely affect heart and brain"
      ],
      "beats": [
        "Depression symptoms may improve over time",
        "Dry mouth or drowsiness can occur"
      ],
      "asides": [
        "Rest and a symptom diary share the chair.",
        "Overdose can severely affect heart and brain"
      ],
      "riskVisual": "dry-mouth",
      "exposure": "oral"
    }
  },
  {
    "id": "nortriptyline",
    "name": "Nortriptyline",
    "aliases": [
      "Pamelor"
    ],
    "category": "Medications",
    "className": "Tricyclic antidepressant",
    "useContext": "Clinician-managed treatment for depression.",
    "mechanism": "Tricyclic antidepressant that increases serotonin and norepinephrine signaling.",
    "effects": [
      "May improve depression symptoms",
      "Can cause drowsiness, dry mouth, or constipation"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Abnormal heart rhythm and serious overdose effects are concerns"
    ],
    "interactionNote": "MAO inhibitors are contraindicated; review sedatives, anticholinergic drugs, and other prescriptions with a clinician.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Nortriptyline",
        "url": "https://medlineplus.gov/druginfo/meds/a682620.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "reading",
      "task": "reading",
      "prop": "care-card",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Reading follow-up notes during depression treatment.",
      "responseNotes": [
        "Depression symptoms may improve over time",
        "Serotonin and norepinephrine signaling change"
      ],
      "riskNotes": [
        "Dry mouth, constipation, or drowsiness can occur",
        "Heart-rhythm and overdose risks are serious"
      ],
      "beats": [
        "Depression symptoms may improve over time",
        "Dry mouth, constipation, or drowsiness can occur"
      ],
      "asides": [
        "The next appointment has its own page.",
        "Heart-rhythm and overdose risks are serious"
      ],
      "riskVisual": "pulse",
      "exposure": "oral"
    }
  },
  {
    "id": "clomipramine",
    "name": "Clomipramine",
    "aliases": [
      "Anafranil"
    ],
    "category": "Medications",
    "className": "Tricyclic antidepressant",
    "useContext": "Clinician-managed treatment for obsessive-compulsive disorder.",
    "mechanism": "Tricyclic antidepressant that increases serotonin signaling.",
    "effects": [
      "May reduce unwanted thoughts and compulsions",
      "Can cause drowsiness and dry mouth"
    ],
    "risks": [
      "Suicidal thoughts are a warning for younger patients",
      "Seizures and abnormal heart rhythm can occur"
    ],
    "interactionNote": "MAO inhibitors are contraindicated; serotonergic medicines and drugs affecting heart rhythm require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Clomipramine",
        "url": "https://medlineplus.gov/druginfo/meds/a697002.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "care-card",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Reviewing care notes during prescribed OCD treatment.",
      "responseNotes": [
        "Unwanted thoughts and compulsions may decrease",
        "Serotonin signaling changes during treatment"
      ],
      "riskNotes": [
        "Dry mouth or drowsiness can occur",
        "Seizures or abnormal heart rhythm can occur"
      ],
      "beats": [
        "Unwanted thoughts and compulsions may decrease",
        "Dry mouth or drowsiness can occur"
      ],
      "asides": [
        "The care notes stay within reach.",
        "Seizures or abnormal heart rhythm can occur"
      ],
      "riskVisual": "dry-mouth",
      "exposure": "oral"
    }
  },
  {
    "id": "doxepin",
    "name": "Doxepin",
    "aliases": [
      "Sinequan",
      "Silenor"
    ],
    "category": "Medications",
    "className": "Tricyclic antidepressant",
    "useContext": "Doxepin products are used for depression and anxiety, while a separate product is used for insomnia. The scene represents the antidepressant context.",
    "mechanism": "Tricyclic antidepressant that changes serotonin and norepinephrine signaling.",
    "effects": [
      "May improve depression or anxiety symptoms",
      "Can cause drowsiness and dry mouth"
    ],
    "risks": [
      "Antidepressant warning includes suicidality in younger patients",
      "Can cause severe sedation or anticholinergic effects"
    ],
    "interactionNote": "MAO inhibitors and other sedating medicines require clinician review; insomnia and depression products have distinct labeling.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Doxepin (Depression, Anxiety)",
        "url": "https://medlineplus.gov/druginfo/meds/a682390.html"
      },
      {
        "label": "MedlinePlus · Doxepin (Insomnia)",
        "url": "https://medlineplus.gov/druginfo/meds/a617017.html"
      }
    ],
    "scene": {
      "setting": "garden",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Reading symptom notes during prescribed depression care.",
      "responseNotes": [
        "Depression or anxiety symptoms may improve",
        "This scene represents the antidepressant use"
      ],
      "riskNotes": [
        "Dry mouth and sedation can occur",
        "Mood changes require monitoring"
      ],
      "beats": [
        "Depression or anxiety symptoms may improve",
        "Dry mouth and sedation can occur"
      ],
      "asides": [
        "A quiet page is part of an ordinary afternoon.",
        "Mood changes require monitoring"
      ],
      "riskVisual": "dry-mouth",
      "exposure": "oral"
    }
  },
  {
    "id": "aripiprazole",
    "name": "Aripiprazole",
    "aliases": [
      "Abilify"
    ],
    "category": "Medications",
    "className": "Atypical antipsychotic",
    "useContext": "Clinician-managed treatment for schizophrenia, bipolar disorder, adjunctive major-depression care, and some irritability symptoms associated with autism.",
    "mechanism": "Atypical antipsychotic that modulates dopamine and serotonin signaling.",
    "effects": [
      "May reduce psychosis or mania symptoms",
      "May support depression care as an add-on"
    ],
    "risks": [
      "Antipsychotics raise mortality risk in older adults with dementia",
      "Restlessness, movement symptoms, or metabolic changes can occur"
    ],
    "interactionNote": "Some medicines require dose changes or monitoring; disclose all prescriptions, especially sedating drugs.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Aripiprazole",
        "url": "https://medlineplus.gov/druginfo/meds/a603012.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "tense",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Arranging follow-up care cards during schizophrenia treatment.",
      "responseNotes": [
        "Psychosis symptoms may improve",
        "Dopamine and serotonin signaling change"
      ],
      "riskNotes": [
        "Restlessness or movement effects can occur",
        "Dementia-related use carries an increased mortality risk"
      ],
      "beats": [
        "Psychosis symptoms may improve",
        "Restlessness or movement effects can occur"
      ],
      "asides": [
        "The next appointment goes on the care card.",
        "Dementia-related use carries an increased mortality risk"
      ],
      "riskVisual": "agitation",
      "exposure": "oral"
    }
  },
  {
    "id": "cariprazine",
    "name": "Cariprazine",
    "aliases": [
      "Vraylar"
    ],
    "category": "Medications",
    "className": "Atypical antipsychotic",
    "useContext": "Clinician-managed treatment for schizophrenia, bipolar disorder, and major depressive disorder.",
    "mechanism": "Atypical antipsychotic with dopamine D2/D3 partial-agonist activity and serotonin-receptor effects.",
    "effects": [
      "May reduce psychosis or mania symptoms",
      "Can support major-depression treatment"
    ],
    "risks": [
      "Antipsychotic warning applies to older adults with dementia",
      "Akathisia, restlessness, and sleep problems can occur"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors or inducers can change cariprazine exposure; review all medicines with a prescriber.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Cariprazine",
        "url": "https://medlineplus.gov/druginfo/meds/a615050.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "tense",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Planning a daily routine during prescribed bipolar care.",
      "responseNotes": [
        "Mania or bipolar symptoms may improve",
        "Dopamine and serotonin receptors are modulated"
      ],
      "riskNotes": [
        "Akathisia or restlessness can occur",
        "Dementia-related use carries an increased mortality risk"
      ],
      "beats": [
        "Mania or bipolar symptoms may improve",
        "Akathisia or restlessness can occur"
      ],
      "asides": [
        "The routine has room for follow-up.",
        "Dementia-related use carries an increased mortality risk"
      ],
      "riskVisual": "agitation",
      "exposure": "oral"
    }
  },
  {
    "id": "risperidone",
    "name": "Risperidone",
    "aliases": [
      "Risperdal"
    ],
    "category": "Medications",
    "className": "Atypical antipsychotic",
    "useContext": "Clinician-managed treatment for schizophrenia, bipolar disorder, and irritability associated with autistic disorder.",
    "mechanism": "Atypical antipsychotic that changes dopamine and serotonin signaling.",
    "effects": [
      "May reduce psychosis or mania symptoms",
      "Can reduce severe irritability in some care plans"
    ],
    "risks": [
      "Antipsychotics raise mortality risk in older adults with dementia",
      "Movement effects, weight gain, or elevated prolactin can occur"
    ],
    "interactionNote": "Other medicines may require monitoring or dose changes; review sedatives and drugs that affect blood pressure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Risperidone",
        "url": "https://medlineplus.gov/druginfo/meds/a694015.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "hormones"
      ],
      "intent": "Writing symptom notes during clinician-managed psychosis care.",
      "responseNotes": [
        "Psychosis or mania symptoms may improve",
        "Dopamine and serotonin signaling change"
      ],
      "riskNotes": [
        "Movement or weight changes can occur",
        "Prolactin-related effects can occur"
      ],
      "beats": [
        "Psychosis or mania symptoms may improve",
        "Movement or weight changes can occur"
      ],
      "asides": [
        "The notes are ready for the next visit.",
        "Prolactin-related effects can occur"
      ],
      "riskVisual": "hormones",
      "exposure": "symbolic"
    }
  },
  {
    "id": "paliperidone",
    "name": "Paliperidone",
    "aliases": [
      "Invega"
    ],
    "category": "Medications",
    "className": "Atypical antipsychotic",
    "useContext": "Clinician-managed treatment for schizophrenia and schizoaffective disorder.",
    "mechanism": "Atypical antipsychotic that changes dopamine and serotonin signaling.",
    "effects": [
      "May reduce schizophrenia symptoms",
      "May help manage schizoaffective symptoms"
    ],
    "risks": [
      "Antipsychotics raise mortality risk in older adults with dementia",
      "Movement symptoms and prolactin-related effects can occur"
    ],
    "interactionNote": "Some medicines should not be combined and others need monitoring; the source article advises a complete medication review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Paliperidone",
        "url": "https://medlineplus.gov/druginfo/meds/a607005.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "care-card",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "hormones"
      ],
      "intent": "Reviewing a follow-up card during schizoaffective-disorder care.",
      "responseNotes": [
        "Schizophrenia or schizoaffective symptoms may improve",
        "Dopamine and serotonin signaling change"
      ],
      "riskNotes": [
        "Movement symptoms can occur",
        "Prolactin-related effects can occur"
      ],
      "beats": [
        "Schizophrenia or schizoaffective symptoms may improve",
        "Movement symptoms can occur"
      ],
      "asides": [
        "A small card can hold the next appointment.",
        "Prolactin-related effects can occur"
      ],
      "riskVisual": "hormones",
      "exposure": "symbolic"
    }
  },
  {
    "id": "olanzapine",
    "name": "Olanzapine",
    "aliases": [
      "Zyprexa"
    ],
    "category": "Medications",
    "className": "Atypical antipsychotic",
    "useContext": "Clinician-managed treatment for schizophrenia and bipolar I disorder.",
    "mechanism": "Atypical antipsychotic that changes dopamine and serotonin signaling.",
    "effects": [
      "May reduce psychosis symptoms",
      "May help manage bipolar mood episodes"
    ],
    "risks": [
      "Antipsychotics raise mortality risk in older adults with dementia",
      "Weight gain and blood-sugar or lipid changes can occur"
    ],
    "interactionNote": "Alcohol and sedating medicines may increase impairment; some drugs require dose adjustment or monitoring.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Olanzapine",
        "url": "https://medlineplus.gov/druginfo/meds/a601213.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [],
      "intent": "Reviewing meal and symptom notes during bipolar treatment.",
      "responseNotes": [
        "Bipolar mood episodes may become more manageable",
        "Dopamine and serotonin signaling change"
      ],
      "riskNotes": [
        "Weight and blood-glucose changes can occur",
        "Lipid changes can occur"
      ],
      "beats": [
        "Bipolar mood episodes may become more manageable",
        "Weight and blood-glucose changes can occur"
      ],
      "asides": [
        "Meals and symptoms share a notebook.",
        "Lipid changes can occur"
      ],
      "riskVisual": "metabolic",
      "exposure": "symbolic"
    }
  },
  {
    "id": "quetiapine",
    "name": "Quetiapine",
    "aliases": [
      "Seroquel"
    ],
    "category": "Medications",
    "className": "Atypical antipsychotic",
    "useContext": "Clinician-managed treatment for schizophrenia, bipolar disorder, and major depressive disorder.",
    "mechanism": "Atypical antipsychotic that changes dopamine and serotonin signaling.",
    "effects": [
      "May reduce psychosis or mania symptoms",
      "Can be used as an adjunct in depression care"
    ],
    "risks": [
      "Antipsychotics raise mortality risk in older adults with dementia",
      "Sleepiness, weight gain, and blood-sugar changes can occur"
    ],
    "interactionNote": "Alcohol and sedatives can add to drowsiness; disclose the full medication list before starting or changing treatment.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Quetiapine",
        "url": "https://medlineplus.gov/druginfo/meds/a698019.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "care-card",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Reviewing an evening care notebook during bipolar treatment.",
      "responseNotes": [
        "Psychosis or bipolar symptoms may improve",
        "Dopamine and serotonin signaling change"
      ],
      "riskNotes": [
        "Sleepiness can affect daily activities",
        "Weight and blood-glucose changes can occur"
      ],
      "beats": [
        "Psychosis or bipolar symptoms may improve",
        "Sleepiness can affect daily activities"
      ],
      "asides": [
        "The care notebook stays on the bedside table.",
        "Weight and blood-glucose changes can occur"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "lurasidone",
    "name": "Lurasidone",
    "aliases": [
      "Latuda"
    ],
    "category": "Medications",
    "className": "Atypical antipsychotic",
    "useContext": "Clinician-managed treatment for schizophrenia and bipolar disorder.",
    "mechanism": "Atypical antipsychotic that changes dopamine and serotonin signaling.",
    "effects": [
      "May reduce schizophrenia symptoms",
      "May help manage bipolar depression"
    ],
    "risks": [
      "Antipsychotics raise mortality risk in older adults with dementia",
      "Restlessness, nausea, or movement symptoms can occur"
    ],
    "interactionNote": "Grapefruit and strong CYP3A4 inhibitors or inducers can affect lurasidone; review medicines with a clinician.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lurasidone",
        "url": "https://medlineplus.gov/druginfo/meds/a611016.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "care-card",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut",
        "brain"
      ],
      "intent": "Reading a care card beside a meal during bipolar treatment.",
      "responseNotes": [
        "Bipolar depression symptoms may improve",
        "Dopamine and serotonin signaling change"
      ],
      "riskNotes": [
        "Nausea or restlessness can occur",
        "Movement effects need attention"
      ],
      "beats": [
        "Bipolar depression symptoms may improve",
        "Nausea or restlessness can occur"
      ],
      "asides": [
        "The care card sits beside dinner.",
        "Movement effects need attention"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "clozapine",
    "name": "Clozapine",
    "aliases": [
      "Clozaril"
    ],
    "category": "Medications",
    "className": "Atypical antipsychotic",
    "useContext": "Reserved for clinician-managed schizophrenia when other medicines have not worked adequately; may be used for recurrent suicidal behavior in schizophrenia or schizoaffective disorder.",
    "mechanism": "Atypical antipsychotic that changes activity of brain signaling substances.",
    "effects": [
      "May reduce persistent schizophrenia symptoms",
      "May lower recurrent suicidal behavior in eligible patients"
    ],
    "risks": [
      "Low white-cell counts can raise the risk of serious infection",
      "Seizures, myocarditis, and bowel obstruction are serious risks"
    ],
    "interactionNote": "Many medicines can affect clozapine levels or add sedation; blood-count and medication monitoring are essential.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Clozapine",
        "url": "https://medlineplus.gov/druginfo/meds/a691001.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "heart",
        "gut"
      ],
      "intent": "Reviewing follow-up records during treatment-resistant schizophrenia care.",
      "responseNotes": [
        "Persistent schizophrenia symptoms may improve",
        "This treatment requires ongoing clinical follow-up"
      ],
      "riskNotes": [
        "Low white-cell counts can raise the risk of serious infection",
        "Seizures, myocarditis, and bowel obstruction are serious risks"
      ],
      "beats": [
        "Persistent schizophrenia symptoms may improve",
        "Low white-cell counts can raise the risk of serious infection"
      ],
      "asides": [
        "The follow-up folder stays organized.",
        "Seizures, myocarditis, and bowel obstruction are serious risks"
      ],
      "riskVisual": "infection",
      "exposure": "oral"
    }
  },
  {
    "id": "haloperidol",
    "name": "Haloperidol",
    "aliases": [
      "Haldol"
    ],
    "category": "Medications",
    "className": "First-generation antipsychotic",
    "useContext": "Clinician-managed treatment of psychotic disorders and Tourette-related motor or verbal tics.",
    "mechanism": "First-generation antipsychotic that blocks dopamine signaling.",
    "effects": [
      "May reduce psychosis symptoms",
      "Can help control severe tics"
    ],
    "risks": [
      "Antipsychotics raise mortality risk in older adults with dementia",
      "Tardive dyskinesia and serious heart-rhythm effects are concerns"
    ],
    "interactionNote": "Other sedatives and medicines that affect heart rhythm need clinician review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Haloperidol",
        "url": "https://medlineplus.gov/druginfo/meds/a682180.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Recording tic symptoms during a prescribed treatment review.",
      "responseNotes": [
        "Severe tics may become easier to manage",
        "Dopamine signaling is blocked"
      ],
      "riskNotes": [
        "Persistent movement disorders can occur",
        "Serious heart-rhythm effects can occur"
      ],
      "beats": [
        "Severe tics may become easier to manage",
        "Persistent movement disorders can occur"
      ],
      "asides": [
        "A short note can describe a difficult symptom.",
        "Serious heart-rhythm effects can occur"
      ],
      "riskVisual": "pulse",
      "exposure": "symbolic"
    }
  },
  {
    "id": "chlorpromazine",
    "name": "Chlorpromazine",
    "aliases": [
      "Thorazine"
    ],
    "category": "Medications",
    "className": "First-generation antipsychotic",
    "useContext": "Clinician-managed treatment for selected psychotic or mood conditions; it is also used for some nausea, vomiting, and persistent hiccups.",
    "mechanism": "First-generation antipsychotic that blocks dopamine signaling and has additional receptor effects.",
    "effects": [
      "May reduce psychosis symptoms",
      "Can relieve some nausea or hiccups"
    ],
    "risks": [
      "Antipsychotics raise mortality risk in older adults with dementia",
      "Movement, blood-pressure, or heart-rhythm effects can occur"
    ],
    "interactionNote": "Alcohol, sedatives, and medicines affecting heart rhythm or blood pressure may increase risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Chlorpromazine",
        "url": "https://medlineplus.gov/druginfo/meds/a682040.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Reviewing a recovery care card during psychosis treatment.",
      "responseNotes": [
        "Psychosis symptoms may improve",
        "Dopamine signaling and other receptors are affected"
      ],
      "riskNotes": [
        "Movement or low-blood-pressure effects can occur",
        "Serious heart-rhythm effects can occur"
      ],
      "beats": [
        "Psychosis symptoms may improve",
        "Movement or low-blood-pressure effects can occur"
      ],
      "asides": [
        "The recovery card keeps the plan nearby.",
        "Serious heart-rhythm effects can occur"
      ],
      "riskVisual": "pressure",
      "exposure": "oral"
    }
  },
  {
    "id": "lithium",
    "name": "Lithium",
    "aliases": [
      "Lithobid"
    ],
    "category": "Medications",
    "className": "Mood stabilizer",
    "useContext": "Clinician-managed treatment and prevention of manic episodes in bipolar disorder.",
    "mechanism": "Mood stabilizer that decreases abnormal brain activity; exact mechanism is not fully understood.",
    "effects": [
      "Can treat manic episodes",
      "Can help prevent recurrence of mania"
    ],
    "risks": [
      "Toxicity can cause tremor, confusion, or poor coordination",
      "Long-term use can affect kidney or thyroid function"
    ],
    "interactionNote": "Diuretics, NSAIDs, and some blood-pressure medicines can raise lithium levels; dehydration or sudden salt changes also matter.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lithium",
        "url": "https://medlineplus.gov/druginfo/meds/a681039.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "hydration",
      "prop": "water-bottle",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "unsteady",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "kidneys",
        "hormones"
      ],
      "intent": "Pausing for water during an ordinary bipolar-care routine.",
      "responseNotes": [
        "Manic episodes can improve",
        "Continued treatment can help prevent recurrence"
      ],
      "riskNotes": [
        "Toxicity can impair coordination or cause confusion",
        "Kidney or thyroid function can be affected"
      ],
      "beats": [
        "Manic episodes can improve",
        "Toxicity can impair coordination or cause confusion"
      ],
      "asides": [
        "An ordinary pause for water.",
        "Kidney or thyroid function can be affected"
      ],
      "riskVisual": "kidney",
      "exposure": "oral"
    }
  },
  {
    "id": "buspirone",
    "name": "Buspirone",
    "aliases": [
      "Buspar"
    ],
    "category": "Medications",
    "className": "Anxiolytic",
    "useContext": "Clinician-managed treatment for anxiety.",
    "mechanism": "Anxiolytic that alters serotonin and other brain signaling; it is not a benzodiazepine.",
    "effects": [
      "May reduce anxiety symptoms",
      "Can cause dizziness or nausea"
    ],
    "risks": [
      "Dizziness can affect balance",
      "Rare serotonin toxicity is possible with interacting medicines"
    ],
    "interactionNote": "MAO inhibitors and some serotonergic medicines require review; grapefruit may change drug levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Buspirone",
        "url": "https://medlineplus.gov/druginfo/meds/a688005.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Planning a routine during ongoing anxiety treatment.",
      "responseNotes": [
        "Anxiety symptoms may improve over time",
        "Serotonin-related signaling changes"
      ],
      "riskNotes": [
        "Dizziness can affect balance",
        "Interacting drugs can cause serotonin toxicity"
      ],
      "beats": [
        "Anxiety symptoms may improve over time",
        "Dizziness can affect balance"
      ],
      "asides": [
        "A routine gets its own calendar space.",
        "Interacting drugs can cause serotonin toxicity"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "alprazolam",
    "name": "Alprazolam",
    "aliases": [
      "Xanax"
    ],
    "category": "Medications",
    "className": "Benzodiazepine",
    "useContext": "Clinician-managed treatment for anxiety disorders and panic disorder.",
    "mechanism": "Benzodiazepine that slows brain activity through GABA-related signaling.",
    "effects": [
      "Can reduce acute anxiety symptoms",
      "May cause drowsiness or light-headedness"
    ],
    "risks": [
      "Can cause dependence and withdrawal",
      "Opioid combinations can suppress breathing or cause coma"
    ],
    "interactionNote": "Opioids, alcohol, and other CNS depressants can dangerously increase sedation and breathing suppression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Alprazolam",
        "url": "https://medlineplus.gov/druginfo/meds/a684001.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "rest",
      "task": "resting",
      "prop": "care-card",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "relax",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Taking a quiet break during prescribed panic-disorder care.",
      "responseNotes": [
        "Acute anxiety or panic symptoms can ease",
        "GABA-related signaling reduces brain activity"
      ],
      "riskNotes": [
        "Drowsiness can impair alertness",
        "Opioid combinations can dangerously suppress breathing"
      ],
      "beats": [
        "Acute anxiety or panic symptoms can ease",
        "Drowsiness can impair alertness"
      ],
      "asides": [
        "The care plan includes a quiet place to sit.",
        "Opioid combinations can dangerously suppress breathing"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "lorazepam",
    "name": "Lorazepam",
    "aliases": [
      "Ativan"
    ],
    "category": "Medications",
    "className": "Benzodiazepine",
    "useContext": "Clinician-managed short-term anxiety relief; some products are used for insomnia or other specific indications.",
    "mechanism": "Benzodiazepine that slows brain activity to promote relaxation.",
    "effects": [
      "Can relieve anxiety",
      "May cause drowsiness and unsteadiness"
    ],
    "risks": [
      "Can cause dependence and withdrawal",
      "Opioid combinations can suppress breathing or cause coma"
    ],
    "interactionNote": "Opioids, cough medicines with sedative effects, alcohol, and other CNS depressants can dangerously increase sedation and breathing suppression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lorazepam",
        "url": "https://medlineplus.gov/druginfo/meds/a682053.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "rest",
      "task": "reading",
      "prop": "care-card",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "relax",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Reading a short care card during prescribed anxiety relief.",
      "responseNotes": [
        "Anxiety symptoms can ease",
        "Brain activity slows during the treatment effect"
      ],
      "riskNotes": [
        "Drowsiness or unsteadiness can occur",
        "Opioid combinations can dangerously suppress breathing"
      ],
      "beats": [
        "Anxiety symptoms can ease",
        "Drowsiness or unsteadiness can occur"
      ],
      "asides": [
        "A short care card keeps the details nearby.",
        "Opioid combinations can dangerously suppress breathing"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "diazepam",
    "name": "Diazepam",
    "aliases": [
      "Valium"
    ],
    "category": "Medications",
    "className": "Benzodiazepine",
    "useContext": "Clinician-managed use for anxiety, alcohol-withdrawal agitation, muscle spasms, or certain seizure conditions.",
    "mechanism": "Benzodiazepine that reduces abnormal overactivity in the brain through GABA-related signaling.",
    "effects": [
      "Can relieve anxiety or muscle spasm",
      "Can cause drowsiness and weakness"
    ],
    "risks": [
      "Can cause dependence and withdrawal",
      "Opioid combinations can suppress breathing or cause coma"
    ],
    "interactionNote": "Opioids, alcohol, and other CNS depressants can dangerously increase sedation and breathing suppression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Diazepam",
        "url": "https://medlineplus.gov/druginfo/meds/a682047.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "stretching",
      "prop": "stretch-band",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Preparing a gentle stretch during clinician-managed muscle-spasm care.",
      "responseNotes": [
        "Muscle spasms can ease",
        "GABA-related signaling changes brain activity"
      ],
      "riskNotes": [
        "Drowsiness or weakness can occur",
        "Opioid combinations can dangerously suppress breathing"
      ],
      "beats": [
        "Muscle spasms can ease",
        "Drowsiness or weakness can occur"
      ],
      "asides": [
        "The stretch band waits for a comfortable movement.",
        "Opioid combinations can dangerously suppress breathing"
      ],
      "riskVisual": "sleepiness",
      "exposure": "symbolic"
    }
  },
  {
    "id": "clonazepam",
    "name": "Clonazepam",
    "aliases": [
      "Klonopin"
    ],
    "category": "Medications",
    "className": "Benzodiazepine",
    "useContext": "Clinician-managed treatment for certain seizure disorders and panic attacks.",
    "mechanism": "Benzodiazepine that decreases abnormal electrical activity in the brain.",
    "effects": [
      "Can reduce seizure activity",
      "May reduce panic symptoms"
    ],
    "risks": [
      "Can cause dependence, impaired coordination, or withdrawal",
      "Opioid combinations can suppress breathing or cause coma"
    ],
    "interactionNote": "Opioids, alcohol, and other CNS depressants can dangerously increase sedation and breathing suppression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Clonazepam",
        "url": "https://medlineplus.gov/druginfo/meds/a682279.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "care-card",
      "prop": "book",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "relax",
      "adverse": "unsteady",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Reviewing panic-care notes before an ordinary daily routine.",
      "responseNotes": [
        "Panic symptoms may decrease",
        "Abnormal brain activity is reduced"
      ],
      "riskNotes": [
        "Coordination can be impaired",
        "Dependence and dangerous opioid interactions are risks"
      ],
      "beats": [
        "Panic symptoms may decrease",
        "Coordination can be impaired"
      ],
      "asides": [
        "The next ordinary task can wait a moment.",
        "Dependence and dangerous opioid interactions are risks"
      ],
      "riskVisual": "dependence",
      "exposure": "oral"
    }
  },
  {
    "id": "temazepam",
    "name": "Temazepam",
    "aliases": [
      "Restoril"
    ],
    "category": "Medications",
    "className": "Benzodiazepine hypnotic",
    "useContext": "Clinician-managed treatment for insomnia.",
    "mechanism": "Benzodiazepine that slows brain activity to promote sleep.",
    "effects": [
      "Can help with insomnia",
      "May cause next-day grogginess or dizziness"
    ],
    "risks": [
      "Can cause dependence and withdrawal",
      "Opioid combinations can suppress breathing or cause coma"
    ],
    "interactionNote": "Opioids, alcohol, and other CNS depressants can dangerously increase sedation and breathing suppression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Temazepam",
        "url": "https://medlineplus.gov/druginfo/meds/a684003.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "sleep",
      "task": "sleep-log",
      "prop": "notebook",
      "motif": "sleep",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Recording a sleep pattern during prescribed insomnia care.",
      "responseNotes": [
        "Sleep can become easier",
        "Brain activity slows during the treatment effect"
      ],
      "riskNotes": [
        "Next-day grogginess or dizziness can occur",
        "Dependence and dangerous opioid interactions are risks"
      ],
      "beats": [
        "Sleep can become easier",
        "Next-day grogginess or dizziness can occur"
      ],
      "asides": [
        "The sleep log has a place for tomorrow.",
        "Dependence and dangerous opioid interactions are risks"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "zolpidem",
    "name": "Zolpidem",
    "aliases": [
      "Ambien"
    ],
    "category": "Medications",
    "className": "Sedative-hypnotic",
    "useContext": "Clinician-managed short-term treatment for insomnia.",
    "mechanism": "Sedative-hypnotic that slows activity in the brain to allow sleep.",
    "effects": [
      "Can help with falling or staying asleep",
      "May cause next-day drowsiness or dizziness"
    ],
    "risks": [
      "Can cause complex sleep behaviors, including sleep-driving",
      "Opioids or alcohol can increase dangerous sedation"
    ],
    "interactionNote": "Opioids, alcohol, and other CNS depressants increase impairment; tell a clinician about other sleep medicines.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Zolpidem",
        "url": "https://medlineplus.gov/druginfo/meds/a693025.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "sleep",
      "task": "sleep-log",
      "prop": "clipboard",
      "motif": "sleep",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Recording sleep patterns during short-term insomnia care.",
      "responseNotes": [
        "Falling or staying asleep can become easier",
        "Brain activity slows during the treatment effect"
      ],
      "riskNotes": [
        "Next-day drowsiness or dizziness can occur",
        "Complex sleep behaviors can be dangerous"
      ],
      "beats": [
        "Falling or staying asleep can become easier",
        "Next-day drowsiness or dizziness can occur"
      ],
      "asides": [
        "Tomorrow gets a line in the sleep log.",
        "Complex sleep behaviors can be dangerous"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "eszopiclone",
    "name": "Eszopiclone",
    "aliases": [
      "Lunesta"
    ],
    "category": "Medications",
    "className": "Sedative-hypnotic",
    "useContext": "Clinician-managed treatment for insomnia.",
    "mechanism": "Hypnotic that slows brain activity to allow sleep.",
    "effects": [
      "Can help with falling or staying asleep",
      "May cause daytime drowsiness or unpleasant taste"
    ],
    "risks": [
      "Can cause complex sleep behaviors, including sleep-driving",
      "Alcohol and other sedatives can increase impairment"
    ],
    "interactionNote": "Alcohol, opioids, and other CNS depressants can increase sedation; review other medicines with a clinician.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Eszopiclone",
        "url": "https://medlineplus.gov/druginfo/meds/a605009.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "rest",
      "task": "resting",
      "prop": "book",
      "motif": "sleep",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Putting down a book during prescribed insomnia care.",
      "responseNotes": [
        "Falling or staying asleep can become easier",
        "Brain activity slows during the treatment effect"
      ],
      "riskNotes": [
        "Daytime drowsiness can affect alertness",
        "Complex sleep behaviors can be dangerous"
      ],
      "beats": [
        "Falling or staying asleep can become easier",
        "Daytime drowsiness can affect alertness"
      ],
      "asides": [
        "The bookmark can hold the page until morning.",
        "Complex sleep behaviors can be dangerous"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "ramelteon",
    "name": "Ramelteon",
    "aliases": [
      "Rozerem"
    ],
    "category": "Medications",
    "className": "Melatonin-receptor agonist",
    "useContext": "Clinician-managed treatment for sleep-onset insomnia.",
    "mechanism": "Melatonin-receptor agonist that acts on sleep-regulating signaling.",
    "effects": [
      "May help with falling asleep",
      "Can cause drowsiness or dizziness"
    ],
    "risks": [
      "Daytime sleepiness can impair alertness",
      "Rare allergic swelling needs urgent attention"
    ],
    "interactionNote": "Fluvoxamine is a major interaction and should not be combined; alcohol and other sedatives can increase impairment.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ramelteon",
        "url": "https://medlineplus.gov/druginfo/meds/a605038.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "sleep",
      "task": "planning",
      "prop": "calendar",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "sleepy",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Planning a bedtime routine during sleep-onset insomnia care.",
      "responseNotes": [
        "Melatonin receptors are activated",
        "Falling asleep may become easier"
      ],
      "riskNotes": [
        "Drowsiness or dizziness can occur",
        "Rare allergic swelling is a serious risk"
      ],
      "beats": [
        "Melatonin receptors are activated",
        "Drowsiness or dizziness can occur"
      ],
      "asides": [
        "Bedtime gets a place on the calendar.",
        "Rare allergic swelling is a serious risk"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "suvorexant",
    "name": "Suvorexant",
    "aliases": [
      "Belsomra"
    ],
    "category": "Medications",
    "className": "Orexin-receptor antagonist",
    "useContext": "Clinician-managed treatment for insomnia.",
    "mechanism": "Orexin receptor antagonist that reduces wake-promoting signaling.",
    "effects": [
      "Can help with falling or staying asleep",
      "May cause next-day sleepiness or unusual dreams"
    ],
    "risks": [
      "Sleep paralysis or dream-related experiences can occur",
      "Alcohol or other sedatives can worsen impairment"
    ],
    "interactionNote": "CNS depressants add to sedation; strong CYP3A inhibitors can raise suvorexant exposure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Suvorexant",
        "url": "https://medlineplus.gov/druginfo/meds/a614046.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "sleepy",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Finishing a chapter during prescribed insomnia care.",
      "responseNotes": [
        "Orexin wake-promoting signaling is reduced",
        "Falling or staying asleep can become easier"
      ],
      "riskNotes": [
        "Next-day sleepiness can affect alertness",
        "Sleep paralysis or unusual dreams can occur"
      ],
      "beats": [
        "Orexin wake-promoting signaling is reduced",
        "Next-day sleepiness can affect alertness"
      ],
      "asides": [
        "The chapter can wait for tomorrow.",
        "Sleep paralysis or unusual dreams can occur"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "lemborexant",
    "name": "Lemborexant",
    "aliases": [
      "Dayvigo"
    ],
    "category": "Medications",
    "className": "Orexin-receptor antagonist",
    "useContext": "Clinician-managed treatment for insomnia.",
    "mechanism": "Hypnotic orexin-receptor antagonist that reduces wake-promoting signaling.",
    "effects": [
      "Can help with falling or staying asleep",
      "May cause daytime sleepiness or unusual dreams"
    ],
    "risks": [
      "Can impair alertness the next day",
      "Sleep paralysis or complex sleep behaviors can occur"
    ],
    "interactionNote": "Alcohol and other CNS depressants can increase impairment; CYP3A inhibitors or inducers may change drug levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lemborexant",
        "url": "https://medlineplus.gov/druginfo/meds/a620039.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "sleep",
      "task": "sleep-log",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "sleepy",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Writing a sleep diary during prescribed insomnia treatment.",
      "responseNotes": [
        "Orexin wake-promoting signaling is reduced",
        "Falling or staying asleep can become easier"
      ],
      "riskNotes": [
        "Next-day alertness can be impaired",
        "Sleep paralysis or complex sleep behaviors can occur"
      ],
      "beats": [
        "Orexin wake-promoting signaling is reduced",
        "Next-day alertness can be impaired"
      ],
      "asides": [
        "A sleep diary has room for uneven nights.",
        "Sleep paralysis or complex sleep behaviors can occur"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "daridorexant",
    "name": "Daridorexant",
    "aliases": [
      "Quviviq"
    ],
    "category": "Medications",
    "className": "Orexin-receptor antagonist",
    "useContext": "Clinician-managed treatment for insomnia involving difficulty falling or staying asleep.",
    "mechanism": "Orexin-receptor antagonist that blocks a brain signal promoting wakefulness.",
    "effects": [
      "Can help with falling or staying asleep",
      "May cause daytime sleepiness or dizziness"
    ],
    "risks": [
      "Can impair driving or alertness the next day",
      "Sleep paralysis or unusual dream experiences can occur"
    ],
    "interactionNote": "Other CNS depressants increase impairment; moderate or strong CYP3A4 inhibitors or inducers can change exposure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Daridorexant",
        "url": "https://medlineplus.gov/druginfo/meds/a622034.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "sleep",
      "task": "typing",
      "prop": "phone",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "sleepy",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Setting an alarm during prescribed insomnia care.",
      "responseNotes": [
        "Orexin wake-promoting signaling is blocked",
        "Falling or staying asleep can become easier"
      ],
      "riskNotes": [
        "Next-day sleepiness or dizziness can occur",
        "Sleep paralysis or unusual dreams can occur"
      ],
      "beats": [
        "Orexin wake-promoting signaling is blocked",
        "Next-day sleepiness or dizziness can occur"
      ],
      "asides": [
        "The alarm has one job for the morning.",
        "Sleep paralysis or unusual dreams can occur"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "hydroxyzine",
    "name": "Hydroxyzine",
    "aliases": [
      "Atarax",
      "Vistaril"
    ],
    "category": "Medications",
    "className": "Sedating antihistamine",
    "useContext": "Clinician-managed relief of itching from allergic skin reactions, anxiety, or pre/post-operative sedation; products and routes vary.",
    "mechanism": "First-generation antihistamine that blocks histamine and can reduce central nervous system activity.",
    "effects": [
      "Can relieve allergic itching",
      "Can reduce anxiety or cause sedation"
    ],
    "risks": [
      "Drowsiness and confusion can impair balance or alertness",
      "QT prolongation and abnormal heart rhythm are concerns"
    ],
    "interactionNote": "Alcohol, sedatives, and QT-prolonging medicines may increase risk; review the full medication list.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Hydroxyzine",
        "url": "https://medlineplus.gov/druginfo/meds/a682866.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "skin-check",
      "prop": "towel",
      "motif": "skin",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "skin"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Checking irritated skin during care for allergic itching.",
      "responseNotes": [
        "Allergic itching can ease",
        "Histamine signaling is blocked"
      ],
      "riskNotes": [
        "Drowsiness or confusion can impair alertness",
        "Abnormal heart rhythm is a serious concern"
      ],
      "beats": [
        "Allergic itching can ease",
        "Drowsiness or confusion can impair alertness"
      ],
      "asides": [
        "A soft towel stays within reach.",
        "Abnormal heart rhythm is a serious concern"
      ],
      "riskVisual": "sleepiness",
      "exposure": "symbolic"
    }
  },
  {
    "id": "levetiracetam",
    "name": "Levetiracetam",
    "aliases": [
      "Keppra"
    ],
    "category": "Medications",
    "className": "Anticonvulsant",
    "useContext": "Clinician-managed treatment for partial-onset seizures and selected generalized seizure disorders.",
    "mechanism": "Anticonvulsant that reduces abnormal brain activity; its precise mechanism is not fully understood.",
    "effects": [
      "Can reduce partial-onset seizures",
      "Used in some generalized seizure plans"
    ],
    "risks": [
      "May cause irritability, aggression, or mood changes",
      "Dizziness and sleepiness can affect balance"
    ],
    "interactionNote": "Review all prescriptions and supplements with the clinician; behavior changes should be reported.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Levetiracetam",
        "url": "https://medlineplus.gov/druginfo/meds/a699059.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "checklist",
      "prop": "notebook",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "tense",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Updating a seizure diary during an ongoing treatment plan.",
      "responseNotes": [
        "Some seizure types can become less frequent",
        "Abnormal brain activity is reduced"
      ],
      "riskNotes": [
        "Irritability or mood changes can occur",
        "Dizziness and sleepiness can affect balance"
      ],
      "beats": [
        "Some seizure types can become less frequent",
        "Irritability or mood changes can occur"
      ],
      "asides": [
        "The diary helps describe what happened between visits.",
        "Dizziness and sleepiness can affect balance"
      ],
      "riskVisual": "agitation",
      "exposure": "oral"
    }
  },
  {
    "id": "lamotrigine",
    "name": "Lamotrigine",
    "aliases": [
      "Lamictal"
    ],
    "category": "Medications",
    "className": "Anticonvulsant · mood stabilizer",
    "useContext": "Clinician-managed care for epilepsy and bipolar disorder; exact uses depend on formulation and combination therapy.",
    "mechanism": "Anticonvulsant and mood stabilizer that decreases abnormal brain activity.",
    "effects": [
      "Can reduce seizures",
      "Can help delay bipolar mood episodes"
    ],
    "risks": [
      "A serious skin rash can require hospitalization",
      "Dizziness, poor coordination, or vision changes can occur"
    ],
    "interactionNote": "Valproic acid raises lamotrigine exposure and rash risk; several medicines alter its levels. Changes require clinician guidance.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lamotrigine",
        "url": "https://medlineplus.gov/druginfo/meds/a695007.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "skin"
      ],
      "intent": "Organizing symptom notes during bipolar maintenance care.",
      "responseNotes": [
        "Bipolar mood episodes may be delayed",
        "Abnormal brain activity is reduced"
      ],
      "riskNotes": [
        "Dizziness or poor coordination can occur",
        "A serious skin rash can require hospital care"
      ],
      "beats": [
        "Bipolar mood episodes may be delayed",
        "Dizziness or poor coordination can occur"
      ],
      "asides": [
        "The notes follow the longer treatment course.",
        "A serious skin rash can require hospital care"
      ],
      "riskVisual": "skin",
      "exposure": "oral"
    }
  },
  {
    "id": "valproic-acid",
    "name": "Valproic acid",
    "aliases": [
      "Depakene"
    ],
    "category": "Medications",
    "className": "Anticonvulsant · mood stabilizer",
    "useContext": "Clinician-managed treatment for selected seizure disorders and mania, and prevention of migraine headaches (not acute migraine relief).",
    "mechanism": "Anticonvulsant and mood stabilizer that increases inhibitory GABA signaling and affects other brain pathways.",
    "effects": [
      "Can reduce seizures or manic episodes",
      "Can prevent migraine attacks"
    ],
    "risks": [
      "Can cause life-threatening liver injury or pancreatitis",
      "Can cause severe fetal harm during pregnancy"
    ],
    "interactionNote": "The article flags aspirin and cannabidiol as possible interactions; review other medicines and supplements with the clinician.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Valproic Acid",
        "url": "https://medlineplus.gov/druginfo/meds/a682412.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "care-card",
      "prop": "care-card",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "liver",
        "gut"
      ],
      "intent": "Reviewing a care card during treatment for a seizure disorder.",
      "responseNotes": [
        "Selected seizure types can become less frequent",
        "Inhibitory GABA signaling and other pathways change"
      ],
      "riskNotes": [
        "Life-threatening liver injury or pancreatitis can occur",
        "Exposure in pregnancy can severely harm a fetus"
      ],
      "beats": [
        "Selected seizure types can become less frequent",
        "Life-threatening liver injury or pancreatitis can occur"
      ],
      "asides": [
        "The appointment includes benefits and serious risks.",
        "Exposure in pregnancy can severely harm a fetus"
      ],
      "riskVisual": "liver",
      "exposure": "oral"
    }
  },
  {
    "id": "carbamazepine",
    "name": "Carbamazepine",
    "aliases": [
      "Tegretol",
      "Carbatrol"
    ],
    "category": "Medications",
    "className": "Anticonvulsant",
    "useContext": "Clinician-managed treatment for certain seizures, trigeminal neuralgia, and manic or mixed episodes in bipolar I disorder.",
    "mechanism": "Anticonvulsant that reduces abnormal electrical activity in the brain.",
    "effects": [
      "Can reduce seizures or bipolar mania",
      "Can relieve trigeminal neuralgia pain"
    ],
    "risks": [
      "Rare severe skin reactions can damage skin and organs",
      "Can cause serious blood-cell or liver problems"
    ],
    "interactionNote": "Carbamazepine changes levels of many medicines; MAO inhibitors are contraindicated, and hormonal contraceptives may become less effective.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Carbamazepine",
        "url": "https://medlineplus.gov/druginfo/meds/a682237.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "rest",
      "task": "resting",
      "prop": "care-card",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "skin",
        "liver"
      ],
      "intent": "Taking a quiet break during trigeminal-neuralgia treatment.",
      "responseNotes": [
        "Trigeminal-neuralgia pain can ease",
        "Abnormal electrical activity is reduced"
      ],
      "riskNotes": [
        "Severe skin reactions can occur",
        "Serious blood-cell or liver problems can occur"
      ],
      "beats": [
        "Trigeminal-neuralgia pain can ease",
        "Severe skin reactions can occur"
      ],
      "asides": [
        "The care card has space for the difficult moments.",
        "Serious blood-cell or liver problems can occur"
      ],
      "riskVisual": "skin",
      "exposure": "oral"
    }
  },
  {
    "id": "oxcarbazepine",
    "name": "Oxcarbazepine",
    "aliases": [
      "Trileptal",
      "Oxtellar XR"
    ],
    "category": "Medications",
    "className": "Anticonvulsant",
    "useContext": "Clinician-managed treatment, alone or with other medicines, for selected seizure disorders.",
    "mechanism": "Anticonvulsant that decreases abnormal electrical activity in the brain.",
    "effects": [
      "Can reduce focal seizures",
      "Can be used alone or with other seizure medicines"
    ],
    "risks": [
      "Low blood sodium can cause serious symptoms",
      "Severe rash or suicidal thoughts can occur"
    ],
    "interactionNote": "May reduce hormonal contraceptive effectiveness; other antiseizure medicines can change drug levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Oxcarbazepine",
        "url": "https://medlineplus.gov/druginfo/meds/a601245.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "skin"
      ],
      "intent": "Writing seizure-pattern notes during ongoing epilepsy care.",
      "responseNotes": [
        "Focal seizures can become less frequent",
        "Abnormal electrical activity is reduced"
      ],
      "riskNotes": [
        "Low blood sodium can cause serious symptoms",
        "Severe rash or mood changes can occur"
      ],
      "beats": [
        "Focal seizures can become less frequent",
        "Low blood sodium can cause serious symptoms"
      ],
      "asides": [
        "The notebook records patterns across ordinary days.",
        "Severe rash or mood changes can occur"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "topiramate",
    "name": "Topiramate",
    "aliases": [
      "Topamax"
    ],
    "category": "Medications",
    "className": "Anticonvulsant · migraine prevention",
    "useContext": "Clinician-managed treatment for selected seizure disorders and prevention of migraine headaches (not treatment of an attack already underway).",
    "mechanism": "Anticonvulsant that decreases abnormal excitement in the brain.",
    "effects": [
      "Can reduce seizures",
      "Can prevent migraine attacks"
    ],
    "risks": [
      "May slow thinking or cause word-finding problems",
      "Kidney stones, vision emergencies, or fetal harm are concerns"
    ],
    "interactionNote": "Can reduce hormonal contraceptive effectiveness and interact with other seizure medicines; review medication changes with a clinician.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Topiramate",
        "url": "https://medlineplus.gov/druginfo/meds/a697012.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "kidneys",
        "eyes"
      ],
      "intent": "Marking headache days during migraine-prevention care.",
      "responseNotes": [
        "Future migraine attacks can become less frequent",
        "This preventive effect does not treat an ongoing attack"
      ],
      "riskNotes": [
        "Thinking or word-finding can slow",
        "Kidney stones and serious vision changes can occur"
      ],
      "beats": [
        "Future migraine attacks can become less frequent",
        "Thinking or word-finding can slow"
      ],
      "asides": [
        "A prevention calendar looks beyond the current headache.",
        "Kidney stones and serious vision changes can occur"
      ],
      "riskVisual": "vision",
      "exposure": "oral"
    }
  },
  {
    "id": "lacosamide",
    "name": "Lacosamide",
    "aliases": [
      "Vimpat"
    ],
    "category": "Medications",
    "className": "Anticonvulsant",
    "useContext": "Clinician-managed treatment for partial-onset seizures and some generalized tonic-clonic seizures.",
    "mechanism": "Anticonvulsant that reduces abnormal electrical activity in the brain.",
    "effects": [
      "Can reduce focal seizures",
      "Can be added for generalized seizures"
    ],
    "risks": [
      "Dizziness, double vision, or poor coordination can occur",
      "May affect heart rhythm or cause fainting"
    ],
    "interactionNote": "Other medicines that affect heart rhythm or cause dizziness may add risk; share the full medication list.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lacosamide",
        "url": "https://medlineplus.gov/druginfo/meds/a609028.html"
      },
      {
        "label": "MedlinePlus · Lacosamide Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a609029.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "care-card",
      "prop": "notebook",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Reviewing a seizure-care notebook before a follow-up visit.",
      "responseNotes": [
        "Some focal or generalized seizures can be reduced",
        "Abnormal electrical activity is reduced"
      ],
      "riskNotes": [
        "Dizziness or poor coordination can occur",
        "Heart-rhythm changes or fainting can occur"
      ],
      "beats": [
        "Some focal or generalized seizures can be reduced",
        "Dizziness or poor coordination can occur"
      ],
      "asides": [
        "The care notes travel to the next visit.",
        "Heart-rhythm changes or fainting can occur"
      ],
      "riskVisual": "dizziness",
      "exposure": "symbolic"
    }
  },
  {
    "id": "phenytoin",
    "name": "Phenytoin",
    "aliases": [
      "Dilantin"
    ],
    "category": "Medications",
    "className": "Anticonvulsant",
    "useContext": "Clinician-managed prevention and control of selected seizures, including some around brain or nervous-system surgery.",
    "mechanism": "Anticonvulsant that decreases abnormal electrical activity in the brain.",
    "effects": [
      "Can reduce or prevent seizures",
      "Long-term use may affect gums and bone health"
    ],
    "risks": [
      "Severe skin, blood, or liver reactions can occur",
      "Many interactions complicate its narrow blood-level range"
    ],
    "interactionNote": "Phenytoin interacts with many medicines and can change their levels; clinicians may use blood tests to guide monitoring.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Phenytoin",
        "url": "https://medlineplus.gov/druginfo/meds/a682022.html"
      },
      {
        "label": "MedlinePlus · Phenytoin Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a619062.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "skin",
        "liver"
      ],
      "intent": "Organizing follow-up cards during long-term seizure care.",
      "responseNotes": [
        "Selected seizure types can be reduced or prevented",
        "Abnormal electrical activity is reduced"
      ],
      "riskNotes": [
        "Severe skin, blood, or liver reactions can occur",
        "Drug interactions can alter a narrow blood-level range"
      ],
      "beats": [
        "Selected seizure types can be reduced or prevented",
        "Severe skin, blood, or liver reactions can occur"
      ],
      "asides": [
        "A small card can hold an important follow-up.",
        "Drug interactions can alter a narrow blood-level range"
      ],
      "riskVisual": "skin",
      "exposure": "symbolic"
    }
  },
  {
    "id": "phenobarbital",
    "name": "Phenobarbital",
    "aliases": [
      "Luminal"
    ],
    "category": "Medications",
    "className": "Barbiturate anticonvulsant",
    "useContext": "Clinician-managed treatment for seizures; selected use also includes anxiety relief or barbiturate-withdrawal care.",
    "mechanism": "Barbiturate anticonvulsant that depresses central nervous system activity.",
    "effects": [
      "Can reduce seizures",
      "May cause marked drowsiness"
    ],
    "risks": [
      "Can cause dependence and dangerous withdrawal",
      "Over-sedation can suppress breathing"
    ],
    "interactionNote": "Opioids, alcohol, and other sedatives can dangerously compound breathing suppression; phenobarbital also alters many drug levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Phenobarbital",
        "url": "https://medlineplus.gov/druginfo/meds/a682007.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Reading quietly during an ongoing prescribed seizure-care routine.",
      "responseNotes": [
        "Seizure activity can be reduced",
        "Central nervous system activity is depressed"
      ],
      "riskNotes": [
        "Marked drowsiness can occur",
        "Excess sedation can suppress breathing"
      ],
      "beats": [
        "Seizure activity can be reduced",
        "Marked drowsiness can occur"
      ],
      "asides": [
        "The bookmark stays put when attention gets tired.",
        "Excess sedation can suppress breathing"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "gabapentin",
    "name": "Gabapentin",
    "aliases": [
      "Neurontin"
    ],
    "category": "Medications",
    "className": "Gabapentinoid",
    "useContext": "Clinician-managed treatment for selected seizures and nerve pain after shingles; some products have other indications.",
    "mechanism": "Anticonvulsant and neuropathic-pain medicine that changes calcium-channel signaling.",
    "effects": [
      "Can reduce some seizures",
      "Can relieve post-shingles nerve pain"
    ],
    "risks": [
      "Sleepiness, dizziness, and poor coordination can occur",
      "Opioid combinations may suppress breathing"
    ],
    "interactionNote": "Opioids and other CNS depressants increase sedation and breathing risk; antacids can affect absorption.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Gabapentin",
        "url": "https://medlineplus.gov/druginfo/meds/a694007.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "rest",
      "task": "resting",
      "prop": "notebook",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "unsteady",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Resting with a pain diary during post-shingles nerve-pain care.",
      "responseNotes": [
        "Post-shingles nerve pain can ease",
        "Calcium-channel signaling changes"
      ],
      "riskNotes": [
        "Sleepiness or poor coordination can occur",
        "Opioid combinations can suppress breathing"
      ],
      "beats": [
        "Post-shingles nerve pain can ease",
        "Sleepiness or poor coordination can occur"
      ],
      "asides": [
        "The diary tracks the pain between appointments.",
        "Opioid combinations can suppress breathing"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "pregabalin",
    "name": "Pregabalin",
    "aliases": [
      "Lyrica"
    ],
    "category": "Medications",
    "className": "Gabapentinoid",
    "useContext": "Clinician-managed care for selected neuropathic pain, fibromyalgia, and seizure disorders.",
    "mechanism": "Gabapentinoid that binds calcium-channel subunits and reduces excitatory signaling.",
    "effects": [
      "Can relieve nerve pain or fibromyalgia pain",
      "Can be used as add-on seizure treatment"
    ],
    "risks": [
      "Dizziness, sleepiness, or swelling can occur",
      "Opioid combinations may suppress breathing"
    ],
    "interactionNote": "Opioids and other CNS depressants increase sedation and breathing risk; disclose respiratory problems and all sedatives.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Pregabalin",
        "url": "https://medlineplus.gov/druginfo/meds/a605045.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Recording nerve-pain symptoms during prescribed treatment.",
      "responseNotes": [
        "Some neuropathic pain can ease",
        "Excitatory signaling is reduced"
      ],
      "riskNotes": [
        "Dizziness or sleepiness can occur",
        "Opioid combinations can suppress breathing"
      ],
      "beats": [
        "Some neuropathic pain can ease",
        "Dizziness or sleepiness can occur"
      ],
      "asides": [
        "A few notes help describe a complicated pain.",
        "Opioid combinations can suppress breathing"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "pramipexole",
    "name": "Pramipexole",
    "aliases": [
      "Mirapex"
    ],
    "category": "Medications",
    "className": "Dopamine-receptor agonist",
    "useContext": "Clinician-managed treatment for Parkinson’s disease symptoms and restless legs syndrome.",
    "mechanism": "Dopamine agonist that stimulates dopamine receptors.",
    "effects": [
      "Can improve Parkinson’s movement symptoms",
      "Can relieve restless-legs symptoms"
    ],
    "risks": [
      "Can cause sudden sleep episodes or fainting",
      "Impulse-control changes or hallucinations can occur"
    ],
    "interactionNote": "Sedatives and alcohol may increase sleepiness; report new compulsive behaviors or sudden sleep episodes.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Pramipexole",
        "url": "https://medlineplus.gov/druginfo/meds/a697029.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "training",
      "task": "stretching",
      "prop": "stretch-band",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Preparing a comfortable movement during Parkinson care.",
      "responseNotes": [
        "Parkinson movement symptoms can improve",
        "Dopamine receptors are activated"
      ],
      "riskNotes": [
        "Sudden sleep episodes can occur",
        "Impulse-control changes or hallucinations can occur"
      ],
      "beats": [
        "Parkinson movement symptoms can improve",
        "Sudden sleep episodes can occur"
      ],
      "asides": [
        "The movement routine stays part of the care plan.",
        "Impulse-control changes or hallucinations can occur"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "ropinirole",
    "name": "Ropinirole",
    "aliases": [
      "Requip"
    ],
    "category": "Medications",
    "className": "Dopamine-receptor agonist",
    "useContext": "Clinician-managed treatment for Parkinson’s disease symptoms and restless legs syndrome.",
    "mechanism": "Dopamine agonist that stimulates dopamine receptors.",
    "effects": [
      "Can improve Parkinson’s movement symptoms",
      "Can relieve restless-legs symptoms"
    ],
    "risks": [
      "Can cause sudden sleep episodes or low blood pressure",
      "Hallucinations or compulsive behaviors can occur"
    ],
    "interactionNote": "Ciprofloxacin and other CYP1A2 inhibitors can change ropinirole levels; sedatives may increase drowsiness.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ropinirole",
        "url": "https://medlineplus.gov/druginfo/meds/a698013.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "sleep-log",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Recording restless-leg symptoms in an evening care log.",
      "responseNotes": [
        "Restless-leg symptoms can ease",
        "Dopamine receptors are activated"
      ],
      "riskNotes": [
        "Sudden sleep episodes can occur",
        "Hallucinations or compulsive behaviors can occur"
      ],
      "beats": [
        "Restless-leg symptoms can ease",
        "Sudden sleep episodes can occur"
      ],
      "asides": [
        "The evening log gives restless legs a paper trail.",
        "Hallucinations or compulsive behaviors can occur"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "rasagiline",
    "name": "Rasagiline",
    "aliases": [
      "Azilect"
    ],
    "category": "Medications",
    "className": "MAO-B inhibitor",
    "useContext": "Clinician-managed Parkinson’s disease treatment, alone or with other Parkinson’s medicines.",
    "mechanism": "Selective monoamine oxidase-B inhibitor that slows dopamine breakdown in the brain.",
    "effects": [
      "Can improve Parkinson’s movement symptoms",
      "May complement levodopa-based treatment"
    ],
    "risks": [
      "Can cause low blood pressure or unusual movements",
      "Serotonin toxicity or hypertensive reactions are risks"
    ],
    "interactionNote": "Some antidepressants, opioids, cough medicines, and sympathomimetics can interact seriously; follow prescriber medication review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Rasagiline",
        "url": "https://medlineplus.gov/druginfo/meds/a606017.html"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "care",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [],
      "intent": "Arranging movement-care notes during Parkinson treatment.",
      "responseNotes": [
        "Dopamine breakdown is slowed",
        "Parkinson movement symptoms can improve"
      ],
      "riskNotes": [
        "Low blood pressure or unusual movements can occur",
        "Some drug interactions can cause serious reactions"
      ],
      "beats": [
        "Dopamine breakdown is slowed",
        "Low blood pressure or unusual movements can occur"
      ],
      "asides": [
        "The movement notes are ready for follow-up.",
        "Some drug interactions can cause serious reactions"
      ],
      "riskVisual": "pressure",
      "exposure": "oral"
    }
  },
  {
    "id": "selegiline",
    "name": "Selegiline",
    "aliases": [
      "Eldepryl",
      "Zelapar"
    ],
    "category": "Medications",
    "className": "MAO-B inhibitor",
    "useContext": "Clinician-managed Parkinson’s disease treatment, usually alongside levodopa/carbidopa.",
    "mechanism": "Monoamine oxidase-B inhibitor that preserves dopamine signaling.",
    "effects": [
      "Can reduce Parkinson’s symptoms",
      "May help maintain response to levodopa"
    ],
    "risks": [
      "Can cause dizziness, fainting, or sleep disruption",
      "Serious interactions with opioids or antidepressants can occur"
    ],
    "interactionNote": "Meperidine, methadone, some antidepressants, and other interacting drugs require careful review; do not combine medicines without clinician advice.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Selegiline",
        "url": "https://medlineplus.gov/druginfo/meds/a697046.html"
      }
    ],
    "scene": {
      "setting": "travel",
      "activity": "travel",
      "task": "packing",
      "prop": "suitcase",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Packing ordinary supplies during ongoing Parkinson care.",
      "responseNotes": [
        "Dopamine signaling is preserved",
        "Response to a Parkinson treatment plan may improve"
      ],
      "riskNotes": [
        "Dizziness or fainting can occur",
        "Certain opioids or antidepressants interact dangerously"
      ],
      "beats": [
        "Dopamine signaling is preserved",
        "Dizziness or fainting can occur"
      ],
      "asides": [
        "The care plan comes along with the ordinary luggage.",
        "Certain opioids or antidepressants interact dangerously"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "donepezil",
    "name": "Donepezil",
    "aliases": [
      "Aricept"
    ],
    "category": "Medications",
    "className": "Cholinesterase inhibitor",
    "useContext": "Clinician-managed treatment of symptoms of Alzheimer’s disease.",
    "mechanism": "Cholinesterase inhibitor that increases acetylcholine signaling involved in memory and mental function.",
    "effects": [
      "May modestly support memory or thinking symptoms",
      "Does not stop Alzheimer’s progression"
    ],
    "risks": [
      "Nausea, diarrhea, or weight loss can occur",
      "Slow heart rate or fainting is a concern"
    ],
    "interactionNote": "Other cholinergic or anticholinergic medicines can alter effects; drugs that slow heart rate may add risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Donepezil",
        "url": "https://medlineplus.gov/druginfo/meds/a697032.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "reading",
      "task": "reading",
      "prop": "care-card",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut",
        "heart"
      ],
      "intent": "Reading a familiar routine card during Alzheimer symptom care.",
      "responseNotes": [
        "Acetylcholine signaling increases",
        "Memory or thinking symptoms may modestly improve"
      ],
      "riskNotes": [
        "Nausea or diarrhea can occur",
        "Slow heart rate or fainting can occur"
      ],
      "beats": [
        "Acetylcholine signaling increases",
        "Nausea or diarrhea can occur"
      ],
      "asides": [
        "A familiar card can help keep the routine visible.",
        "Slow heart rate or fainting can occur"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "rivastigmine",
    "name": "Rivastigmine",
    "aliases": [
      "Exelon"
    ],
    "category": "Medications",
    "className": "Cholinesterase inhibitor",
    "useContext": "Clinician-managed treatment of dementia symptoms associated with Alzheimer’s or Parkinson’s disease.",
    "mechanism": "Cholinesterase inhibitor that raises acetylcholine signaling in the brain.",
    "effects": [
      "May support cognitive symptoms",
      "Available oral and transdermal products have different routes"
    ],
    "risks": [
      "Nausea, vomiting, and weight loss can occur",
      "Slow heart rate or fainting is a concern"
    ],
    "interactionNote": "Other cholinergic or anticholinergic medicines can alter effects; beta blockers may add to heart-rate slowing.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Rivastigmine",
        "url": "https://medlineplus.gov/druginfo/meds/a602009.html"
      },
      {
        "label": "MedlinePlus · Rivastigmine Transdermal Patch",
        "url": "https://medlineplus.gov/druginfo/meds/a607078.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut",
        "heart"
      ],
      "intent": "Reviewing a daily calendar during dementia symptom care.",
      "responseNotes": [
        "Acetylcholine signaling increases",
        "Cognitive symptoms may improve modestly"
      ],
      "riskNotes": [
        "Nausea or vomiting can occur",
        "Weight loss or slow heart rate can occur"
      ],
      "beats": [
        "Acetylcholine signaling increases",
        "Nausea or vomiting can occur"
      ],
      "asides": [
        "The calendar keeps the next ordinary event in view.",
        "Weight loss or slow heart rate can occur"
      ],
      "riskVisual": "gut",
      "exposure": "symbolic"
    }
  },
  {
    "id": "galantamine",
    "name": "Galantamine",
    "aliases": [
      "Razadyne"
    ],
    "category": "Medications",
    "className": "Cholinesterase inhibitor",
    "useContext": "Clinician-managed treatment of symptoms of Alzheimer’s disease.",
    "mechanism": "Acetylcholinesterase inhibitor that increases acetylcholine signaling.",
    "effects": [
      "May support cognitive symptoms",
      "Can cause nausea or appetite loss"
    ],
    "risks": [
      "Weight loss and dehydration can occur",
      "Slow heart rate or fainting is a concern"
    ],
    "interactionNote": "Other cholinergic or anticholinergic medicines can alter effects; disclose medicines that slow heart rate.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Galantamine",
        "url": "https://medlineplus.gov/druginfo/meds/a699058.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut",
        "heart"
      ],
      "intent": "Reading familiar material during Alzheimer symptom care.",
      "responseNotes": [
        "Acetylcholine signaling increases",
        "Cognitive symptoms may improve modestly"
      ],
      "riskNotes": [
        "Nausea or appetite loss can occur",
        "Weight loss, dehydration, or slow heart rate can occur"
      ],
      "beats": [
        "Acetylcholine signaling increases",
        "Nausea or appetite loss can occur"
      ],
      "asides": [
        "A familiar page stays part of the day.",
        "Weight loss, dehydration, or slow heart rate can occur"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "memantine",
    "name": "Memantine",
    "aliases": [
      "Namenda"
    ],
    "category": "Medications",
    "className": "NMDA-receptor antagonist",
    "useContext": "Clinician-managed treatment of symptoms of moderate-to-severe Alzheimer’s disease.",
    "mechanism": "NMDA receptor antagonist that modulates glutamate signaling.",
    "effects": [
      "May support daily function or cognition",
      "Does not cure Alzheimer’s disease"
    ],
    "risks": [
      "Dizziness, confusion, or headache can occur",
      "Constipation can occur"
    ],
    "interactionNote": "Dextromethorphan and sodium bicarbonate may interact; review medicines and supplements with the clinician.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Memantine",
        "url": "https://medlineplus.gov/druginfo/meds/a604006.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "organizer",
      "prop": "calendar",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Organizing a daily calendar during Alzheimer symptom care.",
      "responseNotes": [
        "Glutamate signaling through NMDA receptors changes",
        "Daily function or cognition may be supported"
      ],
      "riskNotes": [
        "Dizziness or confusion can occur",
        "Constipation can occur"
      ],
      "beats": [
        "Glutamate signaling through NMDA receptors changes",
        "Dizziness or confusion can occur"
      ],
      "asides": [
        "The calendar keeps familiar events in one place.",
        "Constipation can occur"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "sumatriptan",
    "name": "Sumatriptan",
    "aliases": [
      "Imitrex"
    ],
    "category": "Medications",
    "className": "Triptan · 5-HT1 agonist",
    "useContext": "Acute treatment of migraine symptoms; it does not prevent future migraine attacks.",
    "mechanism": "Selective serotonin 5-HT1 receptor agonist that constricts cranial blood vessels and reduces pain signaling.",
    "effects": [
      "Can relieve migraine pain and associated symptoms",
      "May cause tingling, warmth, or dizziness"
    ],
    "risks": [
      "Can cause coronary vasospasm or serious cardiac events",
      "Serotonin toxicity is possible with serotonergic medicines"
    ],
    "interactionNote": "Do not combine with another triptan or ergot medicine within the label interval; MAO inhibitors and serotonergic drugs require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Sumatriptan",
        "url": "https://medlineplus.gov/druginfo/meds/a601116.html"
      },
      {
        "label": "MedlinePlus · Sumatriptan Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a696023.html"
      },
      {
        "label": "MedlinePlus · Sumatriptan Nasal",
        "url": "https://medlineplus.gov/druginfo/meds/a614029.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "rest",
      "task": "resting",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "heart",
        "brain"
      ],
      "intent": "Resting with a care card during an acute migraine.",
      "responseNotes": [
        "Migraine pain and related symptoms can ease",
        "This treats an attack rather than preventing future attacks"
      ],
      "riskNotes": [
        "Dizziness or tingling can occur",
        "Serious cardiac events or serotonin toxicity can occur"
      ],
      "beats": [
        "Migraine pain and related symptoms can ease",
        "Dizziness or tingling can occur"
      ],
      "asides": [
        "The care card waits quietly beside the headache.",
        "Serious cardiac events or serotonin toxicity can occur"
      ],
      "riskVisual": "dizziness",
      "exposure": "symbolic"
    }
  },
  {
    "id": "rizatriptan",
    "name": "Rizatriptan",
    "aliases": [
      "Maxalt"
    ],
    "category": "Medications",
    "className": "Triptan · 5-HT1 agonist",
    "useContext": "Acute treatment of migraine headaches; not a preventive medicine.",
    "mechanism": "Selective serotonin 5-HT1 receptor agonist that constricts cranial blood vessels and reduces pain signaling.",
    "effects": [
      "Can relieve migraine symptoms",
      "May cause dizziness, tiredness, or flushing"
    ],
    "risks": [
      "Can cause serious heart or vascular events",
      "Serotonin toxicity is possible with serotonergic medicines"
    ],
    "interactionNote": "Do not combine with another triptan or ergot medicine within the label interval; MAO inhibitors and serotonergic drugs require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Rizatriptan",
        "url": "https://medlineplus.gov/druginfo/meds/a601109.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "flush",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Checking a care note during an acute migraine episode.",
      "responseNotes": [
        "Migraine symptoms can ease",
        "Pain signaling and cranial vessel tone change"
      ],
      "riskNotes": [
        "Flushing or dizziness can occur",
        "Serious heart or vascular events can occur"
      ],
      "beats": [
        "Migraine symptoms can ease",
        "Flushing or dizziness can occur"
      ],
      "asides": [
        "The checklist is short when the head hurts.",
        "Serious heart or vascular events can occur"
      ],
      "riskVisual": "pulse",
      "exposure": "oral"
    }
  },
  {
    "id": "zolmitriptan",
    "name": "Zolmitriptan",
    "aliases": [
      "Zomig"
    ],
    "category": "Medications",
    "className": "Triptan · 5-HT1 agonist",
    "useContext": "Acute treatment of migraine symptoms; it does not prevent migraine attacks.",
    "mechanism": "Selective serotonin 5-HT1 receptor agonist that narrows cranial blood vessels and reduces pain signaling.",
    "effects": [
      "Can relieve migraine pain and associated symptoms",
      "May cause warmth, dizziness, or nausea"
    ],
    "risks": [
      "Can cause serious heart or vascular events",
      "Serotonin toxicity is possible with serotonergic medicines"
    ],
    "interactionNote": "Do not combine with another triptan or ergot medicine within the label interval; MAO inhibitors and serotonergic drugs require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Zolmitriptan",
        "url": "https://medlineplus.gov/druginfo/meds/a601129.html"
      },
      {
        "label": "MedlinePlus · Zolmitriptan Nasal Spray",
        "url": "https://medlineplus.gov/druginfo/meds/a605046.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "nausea",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut",
        "heart"
      ],
      "intent": "Reading a familiar care card during an acute migraine.",
      "responseNotes": [
        "Migraine pain and related symptoms can ease",
        "This medicine does not prevent future migraine attacks"
      ],
      "riskNotes": [
        "Nausea or dizziness can occur",
        "Serious heart or vascular events can occur"
      ],
      "beats": [
        "Migraine pain and related symptoms can ease",
        "Nausea or dizziness can occur"
      ],
      "asides": [
        "A familiar card saves another search.",
        "Serious heart or vascular events can occur"
      ],
      "riskVisual": "gut",
      "exposure": "symbolic"
    }
  },
  {
    "id": "eletriptan",
    "name": "Eletriptan",
    "aliases": [
      "Relpax"
    ],
    "category": "Medications",
    "className": "Triptan · 5-HT1 agonist",
    "useContext": "Acute treatment of migraine headaches; it is not used to prevent attacks.",
    "mechanism": "Selective serotonin 5-HT1 receptor agonist that narrows cranial blood vessels and reduces pain signaling.",
    "effects": [
      "Can relieve migraine symptoms",
      "May cause dizziness, sleepiness, or nausea"
    ],
    "risks": [
      "Can cause serious heart or vascular events",
      "Serotonin toxicity is possible with serotonergic medicines"
    ],
    "interactionNote": "Do not combine with another triptan or ergot medicine within the label interval; CYP3A4 inhibitors and serotonergic drugs need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Eletriptan",
        "url": "https://medlineplus.gov/druginfo/meds/a603029.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "rest",
      "task": "resting",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Pausing with a headache diary during an acute migraine.",
      "responseNotes": [
        "Migraine symptoms can ease",
        "Pain signaling and cranial vessel tone change"
      ],
      "riskNotes": [
        "Sleepiness or nausea can occur",
        "Serious heart or vascular events can occur"
      ],
      "beats": [
        "Migraine symptoms can ease",
        "Sleepiness or nausea can occur"
      ],
      "asides": [
        "The diary can be brief today.",
        "Serious heart or vascular events can occur"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "ubrogepant",
    "name": "Ubrogepant",
    "aliases": [
      "Ubrelvy"
    ],
    "category": "Medications",
    "className": "CGRP-receptor antagonist",
    "useContext": "Acute treatment of migraine symptoms; it is not a preventive medicine.",
    "mechanism": "CGRP receptor antagonist that blocks a migraine-related pain-signaling pathway.",
    "effects": [
      "Can relieve migraine symptoms",
      "May cause nausea or sleepiness"
    ],
    "risks": [
      "Serious allergic reactions can occur",
      "Some medicines can raise ubrogepant levels substantially"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors or inducers and grapefruit can change exposure; check all medicines before use.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ubrogepant",
        "url": "https://medlineplus.gov/druginfo/meds/a620016.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "care-card",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "nausea",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reviewing an acute-migraine care note in a quiet room.",
      "responseNotes": [
        "CGRP-related pain signaling is blocked",
        "Migraine symptoms can ease"
      ],
      "riskNotes": [
        "Nausea or sleepiness can occur",
        "Serious allergic reactions can occur"
      ],
      "beats": [
        "CGRP-related pain signaling is blocked",
        "Nausea or sleepiness can occur"
      ],
      "asides": [
        "The notebook has a page for this kind of day.",
        "Serious allergic reactions can occur"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "rimegepant",
    "name": "Rimegepant",
    "aliases": [
      "Nurtec ODT"
    ],
    "category": "Medications",
    "className": "CGRP-receptor antagonist",
    "useContext": "Acute migraine treatment and prevention of episodic migraine, depending on product labeling.",
    "mechanism": "CGRP receptor antagonist that blocks a migraine-related pain-signaling pathway.",
    "effects": [
      "Can relieve acute migraine symptoms",
      "Can reduce episodic migraine frequency"
    ],
    "risks": [
      "Nausea or indigestion can occur",
      "Serious allergic reactions are possible"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors or inducers and some P-gp inhibitors can change exposure; review concurrent medicines.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Rimegepant",
        "url": "https://medlineplus.gov/druginfo/meds/a620031.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Marking headache days during episodic-migraine prevention care.",
      "responseNotes": [
        "Episodic migraine frequency can decrease",
        "This scene represents the preventive treatment use"
      ],
      "riskNotes": [
        "Nausea or indigestion can occur",
        "Serious allergic reactions can occur"
      ],
      "beats": [
        "Episodic migraine frequency can decrease",
        "Nausea or indigestion can occur"
      ],
      "asides": [
        "The calendar records the headache-free days too.",
        "Serious allergic reactions can occur"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "atogepant",
    "name": "Atogepant",
    "aliases": [
      "Qulipta"
    ],
    "category": "Medications",
    "className": "CGRP-receptor antagonist",
    "useContext": "Clinician-managed prevention of migraine headaches; not acute relief of an attack.",
    "mechanism": "CGRP receptor antagonist that blocks a migraine-related signaling pathway.",
    "effects": [
      "Can reduce migraine frequency",
      "May cause nausea or constipation"
    ],
    "risks": [
      "Constipation and reduced appetite can occur",
      "Some drug interactions can raise exposure"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors or inducers and certain transporter inhibitors can change levels; review all medicines.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Atogepant",
        "url": "https://medlineplus.gov/druginfo/meds/a621052.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Updating a migraine-prevention diary before bedtime.",
      "responseNotes": [
        "Future migraine attacks can become less frequent",
        "CGRP-related signaling is blocked"
      ],
      "riskNotes": [
        "Nausea or constipation can occur",
        "Drug interactions can raise exposure"
      ],
      "beats": [
        "Future migraine attacks can become less frequent",
        "Nausea or constipation can occur"
      ],
      "asides": [
        "The diary looks for a pattern across days.",
        "Drug interactions can raise exposure"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "erenumab",
    "name": "Erenumab",
    "aliases": [
      "Aimovig"
    ],
    "category": "Medications",
    "className": "CGRP-receptor antibody",
    "useContext": "Clinician-managed prevention of migraine headaches.",
    "mechanism": "Monoclonal antibody that blocks the CGRP receptor involved in migraine signaling.",
    "effects": [
      "Can reduce migraine frequency",
      "Injection-site reactions can occur"
    ],
    "risks": [
      "Constipation can be severe",
      "High blood pressure or Raynaud’s symptoms can occur"
    ],
    "interactionNote": "Few metabolic interactions are expected, but review all medicines; report severe constipation or new hypertension.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Erenumab-aooe Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a618029.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "planning",
      "prop": "calendar",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reviewing a headache calendar during migraine-prevention care.",
      "responseNotes": [
        "Migraine frequency can decrease",
        "The antibody blocks the CGRP receptor"
      ],
      "riskNotes": [
        "Constipation can become severe",
        "Blood-pressure or Raynaud symptoms can occur"
      ],
      "beats": [
        "Migraine frequency can decrease",
        "Constipation can become severe"
      ],
      "asides": [
        "The calendar brings the between-visit story.",
        "Blood-pressure or Raynaud symptoms can occur"
      ],
      "riskVisual": "gut",
      "exposure": "symbolic"
    }
  },
  {
    "id": "acetaminophen",
    "name": "Acetaminophen",
    "aliases": [
      "Paracetamol",
      "Tylenol"
    ],
    "category": "Medications",
    "className": "Analgesic · antipyretic",
    "useContext": "Relief of mild-to-moderate pain and reduction of fever; available in many single-ingredient and combination products.",
    "mechanism": "Analgesic and antipyretic that changes pain perception and temperature regulation.",
    "effects": [
      "Can relieve pain",
      "Can reduce fever"
    ],
    "risks": [
      "Excess exposure can cause fatal liver injury",
      "Rare severe skin reactions can occur"
    ],
    "interactionNote": "Alcohol and other acetaminophen-containing products can increase liver risk; warfarin use warrants clinician review.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Acetaminophen",
        "url": "https://medlineplus.gov/druginfo/meds/a681004.html"
      },
      {
        "label": "MedlinePlus · Acetaminophen Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a611019.html"
      },
      {
        "label": "MedlinePlus · Acetaminophen Rectal",
        "url": "https://medlineplus.gov/druginfo/meds/a621016.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "rest",
      "task": "hydration",
      "prop": "cup",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "liver",
        "skin"
      ],
      "intent": "Taking a quiet break during care for pain or fever.",
      "responseNotes": [
        "Pain perception and temperature regulation change",
        "Pain or fever can ease"
      ],
      "riskNotes": [
        "Excess exposure can cause fatal liver injury",
        "Rare severe skin reactions can occur"
      ],
      "beats": [
        "Pain perception and temperature regulation change",
        "Excess exposure can cause fatal liver injury"
      ],
      "asides": [
        "The ordinary cup is just part of the break.",
        "Rare severe skin reactions can occur"
      ],
      "riskVisual": "liver",
      "exposure": "symbolic"
    }
  },
  {
    "id": "ibuprofen",
    "name": "Ibuprofen",
    "aliases": [
      "Advil",
      "Motrin"
    ],
    "category": "Medications",
    "className": "NSAID",
    "useContext": "Relief of pain, fever, and inflammation; prescription use also includes selected arthritis care.",
    "mechanism": "Nonsteroidal anti-inflammatory drug (NSAID) that reduces prostaglandin production.",
    "effects": [
      "Can relieve pain and inflammation",
      "Can reduce fever"
    ],
    "risks": [
      "Can raise risk of heart attack or stroke",
      "Can cause stomach ulcers or bleeding"
    ],
    "interactionNote": "Anticoagulants, aspirin, other NSAIDs, and some blood-pressure medicines can add risk; review with a clinician.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Ibuprofen",
        "url": "https://medlineplus.gov/druginfo/meds/a682159.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "rest",
      "task": "reading",
      "prop": "book",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "organs": [],
      "cautions": [
        "gut",
        "heart"
      ],
      "intent": "Reading quietly while managing pain and inflammation.",
      "responseNotes": [
        "Pain and inflammation can ease",
        "Prostaglandin production is reduced"
      ],
      "riskNotes": [
        "Stomach ulcers or bleeding can occur",
        "Heart attack or stroke risk can increase"
      ],
      "beats": [
        "Pain and inflammation can ease",
        "Stomach ulcers or bleeding can occur"
      ],
      "asides": [
        "A comfortable chair still helps a sore day.",
        "Heart attack or stroke risk can increase"
      ],
      "riskVisual": "bleeding",
      "exposure": "oral"
    }
  },
  {
    "id": "naproxen",
    "name": "Naproxen",
    "aliases": [
      "Aleve",
      "Naprosyn"
    ],
    "category": "Medications",
    "className": "NSAID",
    "useContext": "Relief of pain and inflammation, including arthritis and menstrual pain; available in nonprescription and prescription products.",
    "mechanism": "NSAID that reduces prostaglandin production.",
    "effects": [
      "Can relieve pain and stiffness",
      "Can reduce inflammation"
    ],
    "risks": [
      "Can raise risk of heart attack or stroke",
      "Can cause stomach ulcers or bleeding"
    ],
    "interactionNote": "Anticoagulants, aspirin, other NSAIDs, and some blood-pressure medicines can add risk; review with a clinician.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Naproxen",
        "url": "https://medlineplus.gov/druginfo/meds/a681029.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "rest",
      "task": "resting",
      "prop": "care-card",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "organs": [],
      "cautions": [
        "gut",
        "heart"
      ],
      "intent": "Resting with a care card during menstrual-pain treatment.",
      "responseNotes": [
        "Menstrual pain can ease",
        "Prostaglandin production is reduced"
      ],
      "riskNotes": [
        "Stomach ulcers or bleeding can occur",
        "Heart attack or stroke risk can increase"
      ],
      "beats": [
        "Menstrual pain can ease",
        "Stomach ulcers or bleeding can occur"
      ],
      "asides": [
        "The care card stays close to the comfortable chair.",
        "Heart attack or stroke risk can increase"
      ],
      "riskVisual": "bleeding",
      "exposure": "oral"
    }
  },
  {
    "id": "diclofenac",
    "name": "Diclofenac",
    "aliases": [
      "Voltaren"
    ],
    "category": "Medications",
    "className": "NSAID",
    "useContext": "Product-dependent relief of arthritis or other pain; oral, topical, and other formulations have different uses.",
    "mechanism": "NSAID that reduces prostaglandin production.",
    "effects": [
      "Can relieve pain and stiffness",
      "Can reduce inflammation"
    ],
    "risks": [
      "Can raise risk of heart attack or stroke",
      "Can cause stomach ulcers or bleeding"
    ],
    "interactionNote": "Anticoagulants, aspirin, other NSAIDs, and some blood-pressure medicines can add risk; topical and oral products differ.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Diclofenac",
        "url": "https://medlineplus.gov/druginfo/meds/a689002.html"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "organs": [],
      "cautions": [
        "gut",
        "heart"
      ],
      "intent": "Planning ordinary movement during arthritis-pain care.",
      "responseNotes": [
        "Arthritis pain and stiffness can ease",
        "Prostaglandin production is reduced"
      ],
      "riskNotes": [
        "Stomach ulcers or bleeding can occur",
        "Heart attack or stroke risk can increase"
      ],
      "beats": [
        "Arthritis pain and stiffness can ease",
        "Stomach ulcers or bleeding can occur"
      ],
      "asides": [
        "The plan includes the small everyday movements.",
        "Heart attack or stroke risk can increase"
      ],
      "riskVisual": "bleeding",
      "exposure": "oral"
    }
  },
  {
    "id": "meloxicam",
    "name": "Meloxicam",
    "aliases": [
      "Mobic"
    ],
    "category": "Medications",
    "className": "NSAID",
    "useContext": "Clinician-managed relief of osteoarthritis, rheumatoid arthritis, or juvenile arthritis symptoms.",
    "mechanism": "NSAID that reduces prostaglandin production.",
    "effects": [
      "Can relieve arthritis pain and stiffness",
      "Can reduce inflammation"
    ],
    "risks": [
      "Can raise risk of heart attack or stroke",
      "Can cause stomach ulcers or bleeding"
    ],
    "interactionNote": "Anticoagulants, aspirin, other NSAIDs, and some blood-pressure medicines can add risk; review with a clinician.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Meloxicam",
        "url": "https://medlineplus.gov/druginfo/meds/a601242.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [],
      "cautions": [
        "gut",
        "heart"
      ],
      "intent": "Writing a joint-symptom diary during arthritis treatment.",
      "responseNotes": [
        "Arthritis pain and stiffness can ease",
        "Inflammatory prostaglandin production is reduced"
      ],
      "riskNotes": [
        "Stomach ulcers or bleeding can occur",
        "Heart attack or stroke risk can increase"
      ],
      "beats": [
        "Arthritis pain and stiffness can ease",
        "Stomach ulcers or bleeding can occur"
      ],
      "asides": [
        "The notebook keeps track of the stiff mornings.",
        "Heart attack or stroke risk can increase"
      ],
      "riskVisual": "bleeding",
      "exposure": "oral"
    }
  },
  {
    "id": "celecoxib",
    "name": "Celecoxib",
    "aliases": [
      "Celebrex"
    ],
    "category": "Medications",
    "className": "COX-2-selective NSAID",
    "useContext": "Clinician-managed relief of osteoarthritis, rheumatoid arthritis, ankylosing spondylitis, and selected pain conditions.",
    "mechanism": "COX-2-selective NSAID that reduces inflammatory prostaglandin production.",
    "effects": [
      "Can relieve arthritis pain and stiffness",
      "Can reduce inflammation"
    ],
    "risks": [
      "Can raise risk of heart attack or stroke",
      "Can cause stomach ulcers or bleeding"
    ],
    "interactionNote": "Anticoagulants, aspirin, other NSAIDs, sulfa allergy history, and some blood-pressure medicines need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Celecoxib",
        "url": "https://medlineplus.gov/druginfo/meds/a699022.html"
      }
    ],
    "scene": {
      "setting": "garden",
      "activity": "garden",
      "task": "gardening",
      "prop": "plant",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [],
      "cautions": [
        "gut",
        "heart"
      ],
      "intent": "Checking a potted plant during an ordinary arthritis-care day.",
      "responseNotes": [
        "Arthritis pain and stiffness can ease",
        "COX-2-related prostaglandin production is reduced"
      ],
      "riskNotes": [
        "Stomach ulcers or bleeding can occur",
        "Heart attack or stroke risk can increase"
      ],
      "beats": [
        "Arthritis pain and stiffness can ease",
        "Stomach ulcers or bleeding can occur"
      ],
      "asides": [
        "The plant has a care routine too.",
        "Heart attack or stroke risk can increase"
      ],
      "riskVisual": "bleeding",
      "exposure": "oral"
    }
  },
  {
    "id": "indomethacin",
    "name": "Indomethacin",
    "aliases": [
      "Indocin"
    ],
    "category": "Medications",
    "className": "NSAID",
    "useContext": "Clinician-managed treatment of inflammatory arthritis and selected acute pain conditions.",
    "mechanism": "NSAID that reduces prostaglandin production.",
    "effects": [
      "Can relieve pain and stiffness",
      "Can reduce inflammation"
    ],
    "risks": [
      "Can raise risk of heart attack or stroke",
      "Can cause stomach ulcers, bleeding, or neurologic effects"
    ],
    "interactionNote": "Anticoagulants, aspirin, other NSAIDs, and some blood-pressure medicines can add risk; review all medicines.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Indomethacin",
        "url": "https://medlineplus.gov/druginfo/meds/a681027.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "reading",
      "task": "reading",
      "prop": "care-card",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "organs": [],
      "cautions": [
        "gut",
        "heart"
      ],
      "intent": "Reviewing a care card during an inflammatory joint-pain flare.",
      "responseNotes": [
        "Pain and stiffness can ease",
        "Inflammatory prostaglandin production is reduced"
      ],
      "riskNotes": [
        "Stomach ulcers or bleeding can occur",
        "Cardiovascular or neurologic effects can occur"
      ],
      "beats": [
        "Pain and stiffness can ease",
        "Stomach ulcers or bleeding can occur"
      ],
      "asides": [
        "A short care card keeps the details manageable.",
        "Cardiovascular or neurologic effects can occur"
      ],
      "riskVisual": "bleeding",
      "exposure": "oral"
    }
  },
  {
    "id": "ketorolac",
    "name": "Ketorolac",
    "aliases": [
      "Toradol"
    ],
    "category": "Medications",
    "className": "NSAID · acute pain care",
    "useContext": "Short-term clinician-managed treatment of moderately severe acute pain, often after surgery.",
    "mechanism": "NSAID that reduces pain-, fever-, and inflammation-related prostaglandins.",
    "effects": [
      "Can relieve acute moderate-to-severe pain",
      "May cause dizziness or stomach upset"
    ],
    "risks": [
      "Can cause serious gastrointestinal bleeding or kidney injury",
      "Use is restricted to short-term pain care"
    ],
    "interactionNote": "Other NSAIDs, aspirin, anticoagulants, and medicines affecting the kidneys can increase risk; medication review is important.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ketorolac",
        "url": "https://medlineplus.gov/druginfo/meds/a693001.html"
      },
      {
        "label": "MedlinePlus · Ketorolac Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a614011.html"
      },
      {
        "label": "MedlinePlus · Ketorolac Nasal Spray",
        "url": "https://medlineplus.gov/druginfo/meds/a611042.html"
      },
      {
        "label": "MedlinePlus · Ketorolac Ophthalmic",
        "url": "https://medlineplus.gov/druginfo/meds/a601241.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "recovery",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "organs": [],
      "cautions": [
        "gut",
        "kidneys"
      ],
      "intent": "Reviewing an acute-pain care sheet after a procedure.",
      "responseNotes": [
        "Moderately severe acute pain can ease",
        "The selected use is short-term clinical pain care"
      ],
      "riskNotes": [
        "Dizziness or stomach upset can occur",
        "Serious GI bleeding or kidney injury can occur"
      ],
      "beats": [
        "Moderately severe acute pain can ease",
        "Dizziness or stomach upset can occur"
      ],
      "asides": [
        "The recovery sheet has a defined short-term purpose.",
        "Serious GI bleeding or kidney injury can occur"
      ],
      "riskVisual": "kidney",
      "exposure": "symbolic"
    }
  },
  {
    "id": "aspirin",
    "name": "Aspirin",
    "aliases": [
      "Acetylsalicylic acid"
    ],
    "category": "Medications",
    "className": "Salicylate · antiplatelet",
    "useContext": "Pain and fever relief; clinician-directed prevention of heart attack or stroke in selected people.",
    "mechanism": "Salicylate that blocks substances involved in pain, fever, inflammation, and blood clotting.",
    "effects": [
      "Clotting can be reduced in selected patients",
      "Can relieve pain, fever, and inflammation"
    ],
    "risks": [
      "Can cause stomach or other bleeding",
      "Children with viral illness face rare Reye syndrome risk"
    ],
    "interactionNote": "Anticoagulants, other NSAIDs, and some supplements can increase bleeding; preventive use requires clinician review.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Aspirin",
        "url": "https://medlineplus.gov/druginfo/meds/a682878.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "clot",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Eating breakfast during clinician-directed clot-prevention care.",
      "responseNotes": [
        "Platelet-related clotting is reduced",
        "The preventive use is appropriate only for selected people"
      ],
      "riskNotes": [
        "Stomach or other bleeding can occur",
        "Viral illness in children carries a Reye syndrome risk"
      ],
      "beats": [
        "Platelet-related clotting is reduced",
        "Stomach or other bleeding can occur"
      ],
      "asides": [
        "Breakfast remains breakfast within a longer care plan.",
        "Viral illness in children carries a Reye syndrome risk"
      ],
      "riskVisual": "bleeding",
      "exposure": "oral"
    }
  },
  {
    "id": "morphine",
    "name": "Morphine",
    "aliases": [
      "MS Contin"
    ],
    "category": "Medications",
    "className": "Opioid analgesic",
    "useContext": "Clinician-managed relief of severe pain.",
    "mechanism": "Opioid analgesic that changes how the brain and nervous system respond to pain.",
    "effects": [
      "Can relieve severe pain",
      "Can cause drowsiness and constipation"
    ],
    "risks": [
      "Misuse can cause addiction or fatal overdose",
      "Breathing can slow dangerously"
    ],
    "interactionNote": "Alcohol, benzodiazepines, and other CNS depressants can cause profound sedation or breathing suppression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Morphine",
        "url": "https://medlineplus.gov/druginfo/meds/a682133.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "rest",
      "task": "resting",
      "prop": "book",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Resting with a book during clinician-managed severe-pain care.",
      "responseNotes": [
        "Severe pain can ease",
        "The nervous system response to pain changes"
      ],
      "riskNotes": [
        "Drowsiness can reduce alertness",
        "Breathing can slow dangerously"
      ],
      "beats": [
        "Severe pain can ease",
        "Drowsiness can reduce alertness"
      ],
      "asides": [
        "The aim is pain relief with careful follow-up.",
        "Breathing can slow dangerously"
      ],
      "riskVisual": "breathing",
      "exposure": "oral"
    }
  },
  {
    "id": "oxycodone",
    "name": "Oxycodone",
    "aliases": [
      "OxyContin",
      "Roxicodone"
    ],
    "category": "Medications",
    "className": "Opioid analgesic",
    "useContext": "Clinician-managed relief of severe pain.",
    "mechanism": "Opioid analgesic that changes how the brain and nervous system respond to pain.",
    "effects": [
      "Can relieve severe pain",
      "Can cause drowsiness or constipation"
    ],
    "risks": [
      "Can cause dependence, addiction, or fatal overdose",
      "Breathing can slow dangerously"
    ],
    "interactionNote": "Alcohol, benzodiazepines, and other CNS depressants can cause profound sedation or breathing suppression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Oxycodone",
        "url": "https://medlineplus.gov/druginfo/meds/a682132.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Reviewing a care card during prescribed severe-pain treatment.",
      "responseNotes": [
        "Severe pain can ease",
        "The nervous system response to pain changes"
      ],
      "riskNotes": [
        "Drowsiness or constipation can occur",
        "Dependence and fatal breathing suppression are risks"
      ],
      "beats": [
        "Severe pain can ease",
        "Drowsiness or constipation can occur"
      ],
      "asides": [
        "The care card includes the serious risks too.",
        "Dependence and fatal breathing suppression are risks"
      ],
      "riskVisual": "breathing",
      "exposure": "oral"
    }
  },
  {
    "id": "hydromorphone",
    "name": "Hydromorphone",
    "aliases": [
      "Dilaudid"
    ],
    "category": "Medications",
    "className": "Opioid analgesic",
    "useContext": "Clinician-managed relief of severe pain.",
    "mechanism": "Opioid analgesic that changes how the brain and nervous system respond to pain.",
    "effects": [
      "Can relieve severe pain",
      "Can cause itching, nausea, or drowsiness"
    ],
    "risks": [
      "Can cause dependence, addiction, or fatal overdose",
      "Breathing can slow dangerously"
    ],
    "interactionNote": "Alcohol, benzodiazepines, and other CNS depressants can cause profound sedation or breathing suppression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Hydromorphone",
        "url": "https://medlineplus.gov/druginfo/meds/a682013.html"
      },
      {
        "label": "MedlinePlus · Hydromorphone Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a601148.html"
      },
      {
        "label": "MedlinePlus · Hydromorphone Rectal",
        "url": "https://medlineplus.gov/druginfo/meds/a613035.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "itch",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "skin",
        "lungs"
      ],
      "intent": "Recording symptoms during clinician-managed severe-pain care.",
      "responseNotes": [
        "Severe pain can ease",
        "The nervous system response to pain changes"
      ],
      "riskNotes": [
        "Itching, nausea, or drowsiness can occur",
        "Breathing can slow dangerously"
      ],
      "beats": [
        "Severe pain can ease",
        "Itching, nausea, or drowsiness can occur"
      ],
      "asides": [
        "The symptom sheet records unwanted effects as well.",
        "Breathing can slow dangerously"
      ],
      "riskVisual": "breathing",
      "exposure": "symbolic"
    }
  },
  {
    "id": "tramadol",
    "name": "Tramadol",
    "aliases": [
      "Ultram"
    ],
    "category": "Medications",
    "className": "Opioid analgesic · monoamine effects",
    "useContext": "Clinician-managed treatment of selected pain conditions.",
    "mechanism": "Opioid analgesic that also affects serotonin and norepinephrine signaling.",
    "effects": [
      "Can relieve pain",
      "Can cause sleepiness or constipation"
    ],
    "risks": [
      "Can cause dependence or fatal respiratory depression",
      "Seizures and serotonin toxicity are concerns"
    ],
    "interactionNote": "Alcohol, benzodiazepines, serotonergic medicines, and seizure-threshold-lowering drugs can increase risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Tramadol",
        "url": "https://medlineplus.gov/druginfo/meds/a695011.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Reading a care card during prescribed pain treatment.",
      "responseNotes": [
        "Pain can ease",
        "Opioid and monoamine signaling are affected"
      ],
      "riskNotes": [
        "Sleepiness or constipation can occur",
        "Seizures and respiratory suppression are serious risks"
      ],
      "beats": [
        "Pain can ease",
        "Sleepiness or constipation can occur"
      ],
      "asides": [
        "The care plan includes more than the pain score.",
        "Seizures and respiratory suppression are serious risks"
      ],
      "riskVisual": "seizure",
      "exposure": "oral"
    }
  },
  {
    "id": "codeine",
    "name": "Codeine",
    "aliases": [
      "Codeine phosphate"
    ],
    "category": "Medications",
    "className": "Opioid analgesic · antitussive",
    "useContext": "Clinician-managed pain relief; some products are also used to reduce cough.",
    "mechanism": "Opioid agonist; centrally suppresses the cough reflex at the brainstem cough center.",
    "effects": [
      "Can relieve pain or suppress cough",
      "Can cause drowsiness and constipation"
    ],
    "risks": [
      "Can cause dependence or fatal breathing suppression",
      "Children and some metabolizers face higher respiratory risk"
    ],
    "interactionNote": "Alcohol, benzodiazepines, and other CNS depressants can dangerously compound sedation and breathing suppression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Codeine",
        "url": "https://medlineplus.gov/druginfo/meds/a682065.html"
      },
      {
        "label": "FDA · Tuzistra XR label, codeine cough-center mechanism",
        "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/207768s014lbl.pdf"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "rest",
      "task": "resting",
      "prop": "notebook",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "brain"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Taking a quiet break during product-specific cough care.",
      "responseNotes": [
        "The cough reflex can be suppressed",
        "Opioid action acts at the brainstem cough center"
      ],
      "riskNotes": [
        "Drowsiness or constipation can occur",
        "Breathing suppression can be fatal"
      ],
      "beats": [
        "The cough reflex can be suppressed",
        "Drowsiness or constipation can occur"
      ],
      "asides": [
        "The notebook can wait while the cough settles.",
        "Breathing suppression can be fatal"
      ],
      "riskVisual": "breathing",
      "exposure": "oral"
    }
  },
  {
    "id": "buprenorphine",
    "name": "Buprenorphine",
    "aliases": [
      "Subutex",
      "Suboxone ingredient"
    ],
    "category": "Medications",
    "className": "Partial opioid agonist",
    "useContext": "The cited sublingual product is used in clinician-managed treatment of opioid use disorder; other buprenorphine products have distinct pain indications.",
    "mechanism": "Partial opioid agonist that activates opioid receptors while reducing withdrawal symptoms.",
    "effects": [
      "Can suppress opioid withdrawal symptoms",
      "Can support treatment of opioid use disorder"
    ],
    "risks": [
      "Can cause dependence or overdose",
      "Sedatives or alcohol can suppress breathing"
    ],
    "interactionNote": "Benzodiazepines, alcohol, and other CNS depressants increase respiratory risk; other routes and products have different labeling.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Buprenorphine Sublingual (opioid dependence)",
        "url": "https://medlineplus.gov/druginfo/meds/a626094.html"
      },
      {
        "label": "MedlinePlus · Buprenorphine Buccal (chronic pain)",
        "url": "https://medlineplus.gov/druginfo/meds/a616019.html"
      },
      {
        "label": "MedlinePlus · Buprenorphine Injection (opioid dependence)",
        "url": "https://medlineplus.gov/druginfo/meds/a618015.html"
      },
      {
        "label": "MedlinePlus · Buprenorphine Injection (Pain Relief)",
        "url": "https://medlineplus.gov/druginfo/meds/a623028.html"
      },
      {
        "label": "MedlinePlus · Buprenorphine Transdermal Patch",
        "url": "https://medlineplus.gov/druginfo/meds/a613042.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "lungs"
      ],
      "intent": "Organizing follow-up notes during opioid-use-disorder care.",
      "responseNotes": [
        "Opioid withdrawal symptoms can be suppressed",
        "Partial receptor activation supports ongoing treatment"
      ],
      "riskNotes": [
        "Dependence or overdose can occur",
        "Sedative or alcohol combinations can suppress breathing"
      ],
      "beats": [
        "Opioid withdrawal symptoms can be suppressed",
        "Dependence or overdose can occur"
      ],
      "asides": [
        "The follow-up plan is part of treatment.",
        "Sedative or alcohol combinations can suppress breathing"
      ],
      "riskVisual": "dependence",
      "exposure": "symbolic"
    }
  },
  {
    "id": "methadone",
    "name": "Methadone",
    "aliases": [
      "Dolophine",
      "Methadose"
    ],
    "category": "Medications",
    "className": "Long-acting opioid agonist",
    "useContext": "Clinician-managed treatment for severe pain or opioid use disorder.",
    "mechanism": "Long-acting opioid agonist that changes pain signaling and suppresses opioid withdrawal.",
    "effects": [
      "Can stabilize opioid use disorder treatment",
      "Can relieve severe pain"
    ],
    "risks": [
      "Can cause dependence or fatal respiratory depression",
      "Can prolong the QT interval and trigger arrhythmia"
    ],
    "interactionNote": "Sedatives, other opioids, and QT-prolonging or metabolism-altering medicines can increase risk; review all medicines.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Methadone",
        "url": "https://medlineplus.gov/druginfo/meds/a682134.html"
      },
      {
        "label": "MedlinePlus · Methadone Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a624014.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "heart",
        "lungs"
      ],
      "intent": "Updating care notes during opioid-use-disorder treatment.",
      "responseNotes": [
        "Opioid withdrawal can be suppressed",
        "Ongoing treatment can become more stable"
      ],
      "riskNotes": [
        "QT-related arrhythmia can occur",
        "Respiratory depression can be fatal"
      ],
      "beats": [
        "Opioid withdrawal can be suppressed",
        "QT-related arrhythmia can occur"
      ],
      "asides": [
        "The care notebook makes room for follow-up.",
        "Respiratory depression can be fatal"
      ],
      "riskVisual": "pulse",
      "exposure": "symbolic"
    }
  },
  {
    "id": "naltrexone",
    "name": "Naltrexone",
    "aliases": [
      "Revia",
      "Vivitrol"
    ],
    "category": "Medications",
    "className": "Opioid-receptor antagonist",
    "useContext": "Alongside counseling and support, it can help reduce alcohol cravings or support prevention of opioid relapse after opioid use has stopped.",
    "mechanism": "Opioid receptor antagonist that blocks opioid effects and can reduce alcohol cravings.",
    "effects": [
      "Can reduce alcohol cravings",
      "Can block opioid effects"
    ],
    "risks": [
      "Can trigger severe withdrawal if opioids remain in the body",
      "Liver injury is a concern"
    ],
    "interactionNote": "Opioid pain medicines will be blocked and may trigger withdrawal; disclose any opioid use before treatment.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Naltrexone",
        "url": "https://medlineplus.gov/druginfo/meds/a685041.html"
      },
      {
        "label": "MedlinePlus · Naltrexone Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a609007.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "brain"
      ],
      "cautions": [
        "liver"
      ],
      "intent": "Reviewing a support-plan checklist during alcohol-use-disorder care.",
      "responseNotes": [
        "Alcohol cravings can decrease",
        "Opioid receptors are blocked"
      ],
      "riskNotes": [
        "Opioids in the body can lead to severe withdrawal",
        "Liver injury is a concern"
      ],
      "beats": [
        "Alcohol cravings can decrease",
        "Opioids in the body can lead to severe withdrawal"
      ],
      "asides": [
        "The support plan includes the ordinary days between visits.",
        "Liver injury is a concern"
      ],
      "riskVisual": "withdrawal",
      "exposure": "symbolic"
    }
  },
  {
    "id": "naloxone",
    "name": "Naloxone",
    "aliases": [
      "Narcan"
    ],
    "category": "Medications",
    "className": "Opioid-receptor antagonist",
    "useContext": "Emergency reversal of known or suspected opioid overdose alongside urgent medical care; post-surgical reversal is another clinical use.",
    "mechanism": "Opioid receptor antagonist that rapidly reverses opioid effects.",
    "effects": [
      "Can restore breathing during opioid overdose",
      "Can precipitate sudden opioid withdrawal"
    ],
    "risks": [
      "Reversal may wear off before the opioid does",
      "Withdrawal can cause severe symptoms"
    ],
    "interactionNote": "Naloxone reverses opioids; emergency follow-up is still needed because effects can be temporary.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Naloxone Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a612022.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "reading",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "immediate",
      "organs": [
        "brain",
        "lungs"
      ],
      "cautions": [
        "lungs"
      ],
      "intent": "Reviewing an emergency card about reversing opioid overdose and recurrent breathing suppression.",
      "responseNotes": [
        "Opioid effects can be rapidly reversed",
        "Breathing can return during opioid overdose"
      ],
      "riskNotes": [
        "Breathing suppression can return after reversal",
        "Withdrawal can cause severe symptoms"
      ],
      "beats": [
        "Opioid effects can be rapidly reversed",
        "Breathing suppression can return after reversal"
      ],
      "asides": [
        "Emergency reversal can wear off before the opioid does.",
        "Severe withdrawal can follow reversal."
      ],
      "riskVisual": "breathing",
      "exposure": "symbolic"
    }
  },
  {
    "id": "baclofen",
    "name": "Baclofen",
    "aliases": [
      "Lioresal"
    ],
    "category": "Medications",
    "className": "GABA-B agonist · muscle relaxant",
    "useContext": "Clinician-managed treatment of muscle spasticity related to multiple sclerosis or spinal-cord disease/injury.",
    "mechanism": "Skeletal muscle relaxant that acts on spinal GABA-B signaling to reduce spasms.",
    "effects": [
      "Can reduce muscle spasms and stiffness",
      "May cause weakness or dizziness"
    ],
    "risks": [
      "Sedation can impair coordination",
      "Abrupt withdrawal can cause seizures or severe symptoms"
    ],
    "interactionNote": "Alcohol, opioids, and other sedatives can increase CNS depression; baclofen should not be stopped abruptly without medical guidance.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Baclofen",
        "url": "https://medlineplus.gov/druginfo/meds/a682530.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "training",
      "task": "stretching",
      "prop": "stretch-band",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "organs": [
        "muscle"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Preparing a comfortable stretch during spasticity care.",
      "responseNotes": [
        "Muscle spasms and stiffness can ease",
        "Spinal GABA-B signaling is activated"
      ],
      "riskNotes": [
        "Weakness or dizziness can occur",
        "Abrupt withdrawal can cause severe symptoms or seizures"
      ],
      "beats": [
        "Muscle spasms and stiffness can ease",
        "Weakness or dizziness can occur"
      ],
      "asides": [
        "The band is for an ordinary comfortable movement.",
        "Abrupt withdrawal can cause severe symptoms or seizures"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "tizanidine",
    "name": "Tizanidine",
    "aliases": [
      "Zanaflex"
    ],
    "category": "Medications",
    "className": "Central alpha-2 agonist · muscle relaxant",
    "useContext": "Clinician-managed relief of muscle spasms related to multiple sclerosis or spinal injury.",
    "mechanism": "Centrally acting alpha-2 adrenergic agonist that reduces muscle tone.",
    "effects": [
      "Can reduce spasms and muscle tightness",
      "May cause drowsiness or dizziness"
    ],
    "risks": [
      "Can lower blood pressure or impair alertness",
      "Liver injury is a concern"
    ],
    "interactionNote": "Ciprofloxacin and fluvoxamine are contraindicated; other blood-pressure medicines and sedatives can add effects.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Tizanidine",
        "url": "https://medlineplus.gov/druginfo/meds/a601121.html"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "care",
      "task": "stretching",
      "prop": "stretch-band",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "organs": [
        "muscle"
      ],
      "cautions": [
        "brain",
        "liver"
      ],
      "intent": "Preparing a gentle movement during prescribed spasm treatment.",
      "responseNotes": [
        "Muscle spasms and tightness can ease",
        "Central alpha-2 signaling reduces muscle tone"
      ],
      "riskNotes": [
        "Drowsiness or dizziness can occur",
        "Low blood pressure or liver injury can occur"
      ],
      "beats": [
        "Muscle spasms and tightness can ease",
        "Drowsiness or dizziness can occur"
      ],
      "asides": [
        "Comfort sets the pace of the movement.",
        "Low blood pressure or liver injury can occur"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "cyclobenzaprine",
    "name": "Cyclobenzaprine",
    "aliases": [
      "Flexeril"
    ],
    "category": "Medications",
    "className": "Centrally acting muscle relaxant",
    "useContext": "Short-term clinician-managed treatment of muscle spasms.",
    "mechanism": "Skeletal muscle relaxant acting in the brain and nervous system to reduce muscle spasm.",
    "effects": [
      "Can relieve muscle spasms",
      "Can cause dry mouth or drowsiness"
    ],
    "risks": [
      "Can impair alertness or coordination",
      "Heart-rhythm and serotonin-toxicity risks exist"
    ],
    "interactionNote": "MAO inhibitors are contraindicated; alcohol, sedatives, and serotonergic medicines can add risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Cyclobenzaprine",
        "url": "https://medlineplus.gov/druginfo/meds/a682514.html"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "rest",
      "task": "hydration",
      "prop": "water-bottle",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "dry-mouth",
      "timeCourse": "variable",
      "organs": [
        "brain",
        "muscle"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Pausing with water during short-term muscle-spasm care.",
      "responseNotes": [
        "Muscle spasms can ease",
        "Nervous-system activity related to spasm changes"
      ],
      "riskNotes": [
        "Dry mouth or drowsiness can occur",
        "Heart-rhythm or serotonin-related harms can occur"
      ],
      "beats": [
        "Muscle spasms can ease",
        "Dry mouth or drowsiness can occur"
      ],
      "asides": [
        "The water break is an ordinary part of the pause.",
        "Heart-rhythm or serotonin-related harms can occur"
      ],
      "riskVisual": "dry-mouth",
      "exposure": "oral"
    }
  },
  {
    "id": "lidocaine",
    "name": "Lidocaine",
    "aliases": [
      "Lidoderm",
      "Lidocare"
    ],
    "category": "Medications",
    "className": "Local anesthetic · sodium-channel blocker",
    "useContext": "The cited patch is used for postherpetic neuralgia; topical nonprescription products also relieve minor localized pain.",
    "mechanism": "Local anesthetic that blocks sodium channels and reduces pain-signal transmission.",
    "effects": [
      "Can reduce localized nerve pain",
      "May cause skin irritation at the application site"
    ],
    "risks": [
      "Excess exposure can cause seizures or heart-rhythm problems",
      "Use on damaged skin can increase absorption"
    ],
    "interactionNote": "Other local anesthetics or class I antiarrhythmics may add systemic effects; product route and labeled area matter.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Lidocaine Transdermal Patch",
        "url": "https://medlineplus.gov/druginfo/meds/a603026.html"
      },
      {
        "label": "MedlinePlus · Lidocaine Injection (antiarrhythmic)",
        "url": "https://medlineplus.gov/druginfo/meds/a625037.html"
      },
      {
        "label": "MedlinePlus · Lidocaine Injection (local anesthetic)",
        "url": "https://medlineplus.gov/druginfo/meds/a625061.html"
      },
      {
        "label": "MedlinePlus · Lidocaine Viscous Oral Rinse",
        "url": "https://medlineplus.gov/druginfo/meds/a682701.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "skin-check",
      "prop": "towel",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "organs": [
        "skin"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Checking a painful skin area during local nerve-pain care.",
      "responseNotes": [
        "Localized nerve pain can decrease",
        "Sodium-channel blockade reduces pain transmission"
      ],
      "riskNotes": [
        "Skin irritation can occur",
        "Excess absorption can affect the brain or heart"
      ],
      "beats": [
        "Localized nerve pain can decrease",
        "Skin irritation can occur"
      ],
      "asides": [
        "The scene keeps local treatment local.",
        "Excess absorption can affect the brain or heart"
      ],
      "riskVisual": "skin",
      "exposure": "symbolic"
    }
  },
  {
    "id": "lisinopril",
    "name": "Lisinopril",
    "aliases": [
      "Zestril",
      "Prinivil"
    ],
    "category": "Medications",
    "className": "ACE inhibitor",
    "useContext": "Clinician-managed treatment of high blood pressure and heart failure, and improved survival after a heart attack.",
    "mechanism": "ACE inhibitor that lowers angiotensin II formation and relaxes blood vessels.",
    "effects": [
      "Can lower blood pressure",
      "Can support heart-failure or post-heart-attack care"
    ],
    "risks": [
      "Can cause facial or airway swelling",
      "Can harm a fetus during pregnancy"
    ],
    "interactionNote": "Potassium supplements, diuretics, NSAIDs, and lithium may require monitoring; avoid during pregnancy.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lisinopril",
        "url": "https://medlineplus.gov/druginfo/meds/a692051.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "lungs"
      ],
      "intent": "Reviewing a blood-pressure care sheet during a home routine.",
      "responseNotes": [
        "Angiotensin II formation decreases",
        "Blood pressure can fall as vessels relax"
      ],
      "riskNotes": [
        "Facial or airway swelling can occur",
        "Exposure during pregnancy can harm a fetus"
      ],
      "beats": [
        "Angiotensin II formation decreases",
        "Facial or airway swelling can occur"
      ],
      "asides": [
        "The care sheet shares space with the daily routine.",
        "Exposure during pregnancy can harm a fetus"
      ],
      "riskVisual": "breathing",
      "exposure": "oral"
    }
  },
  {
    "id": "enalapril",
    "name": "Enalapril",
    "aliases": [
      "Vasotec"
    ],
    "category": "Medications",
    "className": "ACE inhibitor",
    "useContext": "Clinician-managed treatment of high blood pressure and heart failure.",
    "mechanism": "ACE inhibitor that reduces angiotensin II formation and relaxes blood vessels.",
    "effects": [
      "Can lower blood pressure",
      "Can support heart-failure care"
    ],
    "risks": [
      "Can cause facial or airway swelling",
      "Can harm a fetus during pregnancy"
    ],
    "interactionNote": "Potassium products, diuretics, NSAIDs, lithium, and other blood-pressure medicines need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Enalapril",
        "url": "https://medlineplus.gov/druginfo/meds/a686022.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Writing a home blood-pressure record during treatment.",
      "responseNotes": [
        "Angiotensin II formation decreases",
        "Blood pressure can fall as vessels relax"
      ],
      "riskNotes": [
        "Dizziness or cough can occur",
        "Facial or airway swelling is a serious risk"
      ],
      "beats": [
        "Angiotensin II formation decreases",
        "Dizziness or cough can occur"
      ],
      "asides": [
        "The record keeps the numbers in context.",
        "Facial or airway swelling is a serious risk"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "ramipril",
    "name": "Ramipril",
    "aliases": [
      "Altace"
    ],
    "category": "Medications",
    "className": "ACE inhibitor",
    "useContext": "Clinician-managed treatment of high blood pressure and selected heart-failure or cardiovascular-risk settings.",
    "mechanism": "ACE inhibitor that relaxes blood vessels and reduces angiotensin II signaling.",
    "effects": [
      "Can lower blood pressure",
      "Can reduce cardiovascular risk in selected patients"
    ],
    "risks": [
      "Can cause facial or airway swelling",
      "Can harm a fetus during pregnancy"
    ],
    "interactionNote": "Avoid during pregnancy; potassium products, lithium, diuretics, and NSAIDs may require monitoring.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ramipril",
        "url": "https://medlineplus.gov/druginfo/meds/a692027.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Planning a follow-up visit during blood-pressure care.",
      "responseNotes": [
        "Angiotensin II signaling decreases",
        "Blood pressure can fall as vessels relax"
      ],
      "riskNotes": [
        "Dizziness or stomach upset can occur",
        "Facial or airway swelling is a serious risk"
      ],
      "beats": [
        "Angiotensin II signaling decreases",
        "Dizziness or stomach upset can occur"
      ],
      "asides": [
        "Follow-up has a place on the calendar.",
        "Facial or airway swelling is a serious risk"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "benazepril",
    "name": "Benazepril",
    "aliases": [
      "Lotensin"
    ],
    "category": "Medications",
    "className": "ACE inhibitor",
    "useContext": "Clinician-managed treatment of high blood pressure.",
    "mechanism": "ACE inhibitor that relaxes blood vessels by lowering angiotensin II signaling.",
    "effects": [
      "Can lower blood pressure",
      "May reduce strain on the heart"
    ],
    "risks": [
      "Can cause facial or airway swelling",
      "Can harm a fetus during pregnancy"
    ],
    "interactionNote": "Potassium products, diuretics, NSAIDs, lithium, and other blood-pressure medicines need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Benazepril",
        "url": "https://medlineplus.gov/druginfo/meds/a692011.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "notebook",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Checking a routine-care list during blood-pressure treatment.",
      "responseNotes": [
        "Angiotensin II signaling decreases",
        "Blood pressure can fall as vessels relax"
      ],
      "riskNotes": [
        "Drowsiness or dizziness can occur",
        "Facial or airway swelling is a serious risk"
      ],
      "beats": [
        "Angiotensin II signaling decreases",
        "Drowsiness or dizziness can occur"
      ],
      "asides": [
        "A short checklist keeps the routine simple.",
        "Facial or airway swelling is a serious risk"
      ],
      "riskVisual": "sleepiness",
      "exposure": "oral"
    }
  },
  {
    "id": "losartan",
    "name": "Losartan",
    "aliases": [
      "Cozaar"
    ],
    "category": "Medications",
    "className": "Angiotensin II receptor blocker",
    "useContext": "Clinician-managed treatment of high blood pressure, stroke-risk reduction in selected patients, and diabetic kidney disease.",
    "mechanism": "Angiotensin II receptor blocker (ARB) that relaxes blood vessels.",
    "effects": [
      "Can lower blood pressure",
      "Can protect kidneys in diabetic hypertension"
    ],
    "risks": [
      "Can cause high potassium or kidney problems",
      "Can harm a fetus during pregnancy"
    ],
    "interactionNote": "Avoid during pregnancy. Potassium products, NSAIDs, lithium, and aliskiren in diabetes require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Losartan",
        "url": "https://medlineplus.gov/druginfo/meds/a695008.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "kidneys"
      ],
      "intent": "Reviewing a home-care card during high-blood-pressure treatment.",
      "responseNotes": [
        "Angiotensin II effects are blocked",
        "Blood pressure can fall as vessels relax"
      ],
      "riskNotes": [
        "High potassium or kidney problems can occur",
        "Exposure during pregnancy can harm a fetus"
      ],
      "beats": [
        "Angiotensin II effects are blocked",
        "High potassium or kidney problems can occur"
      ],
      "asides": [
        "The card keeps the follow-up details together.",
        "Exposure during pregnancy can harm a fetus"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "valsartan",
    "name": "Valsartan",
    "aliases": [
      "Diovan"
    ],
    "category": "Medications",
    "className": "Angiotensin II receptor blocker",
    "useContext": "Clinician-managed treatment of high blood pressure or heart failure, and recovery support after some heart attacks.",
    "mechanism": "ARB that blocks angiotensin II effects on blood vessels and aldosterone signaling.",
    "effects": [
      "Can lower blood pressure",
      "Can support heart-failure or post-heart-attack care"
    ],
    "risks": [
      "Can cause high potassium or kidney problems",
      "Can harm a fetus during pregnancy"
    ],
    "interactionNote": "Avoid during pregnancy. Potassium products, NSAIDs, lithium, and aliskiren in diabetes need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Valsartan",
        "url": "https://medlineplus.gov/druginfo/meds/a697015.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "gut",
        "kidneys"
      ],
      "intent": "Recording home blood-pressure readings during treatment.",
      "responseNotes": [
        "Angiotensin II effects are blocked",
        "Blood pressure can fall as vessels relax"
      ],
      "riskNotes": [
        "Nausea or other digestive effects can occur",
        "High potassium or kidney problems can occur"
      ],
      "beats": [
        "Angiotensin II effects are blocked",
        "Nausea or other digestive effects can occur"
      ],
      "asides": [
        "The clipboard gives the readings a place to stay.",
        "High potassium or kidney problems can occur"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "irbesartan",
    "name": "Irbesartan",
    "aliases": [
      "Avapro"
    ],
    "category": "Medications",
    "className": "Angiotensin II receptor blocker",
    "useContext": "Clinician-managed treatment of high blood pressure and diabetic kidney disease.",
    "mechanism": "ARB that blocks angiotensin II signaling and relaxes blood vessels.",
    "effects": [
      "Can lower blood pressure",
      "Can protect kidneys in diabetic hypertension"
    ],
    "risks": [
      "Can cause high potassium or kidney problems",
      "Can harm a fetus during pregnancy"
    ],
    "interactionNote": "Avoid during pregnancy. Potassium products, NSAIDs, lithium, and aliskiren in diabetes need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Irbesartan",
        "url": "https://medlineplus.gov/druginfo/meds/a698009.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "glucose-log",
      "prop": "notebook",
      "motif": "kidney",
      "mechanismStyle": "protect",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "kidneys"
      ],
      "cautions": [
        "kidneys"
      ],
      "intent": "Reviewing diabetes and kidney-care notes at a follow-up visit.",
      "responseNotes": [
        "Blood pressure can fall",
        "Kidney protection is specific to diabetic hypertension"
      ],
      "riskNotes": [
        "High potassium or kidney problems can occur",
        "Exposure during pregnancy can harm a fetus"
      ],
      "beats": [
        "Blood pressure can fall",
        "High potassium or kidney problems can occur"
      ],
      "asides": [
        "The notebook brings the between-visit record.",
        "Exposure during pregnancy can harm a fetus"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "candesartan",
    "name": "Candesartan",
    "aliases": [
      "Atacand"
    ],
    "category": "Medications",
    "className": "Angiotensin II receptor blocker",
    "useContext": "Clinician-managed treatment of high blood pressure and heart failure.",
    "mechanism": "ARB that blocks angiotensin II effects and relaxes blood vessels.",
    "effects": [
      "Can lower blood pressure",
      "Can support heart-failure care"
    ],
    "risks": [
      "Can cause high potassium or kidney problems",
      "Can harm a fetus during pregnancy"
    ],
    "interactionNote": "Avoid during pregnancy. Potassium products, NSAIDs, lithium, and aliskiren in diabetes need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Candesartan",
        "url": "https://medlineplus.gov/druginfo/meds/a601033.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "kidneys"
      ],
      "intent": "Planning follow-up during an ongoing heart-failure care plan.",
      "responseNotes": [
        "Angiotensin II receptors are blocked",
        "The treatment can support heart-failure care"
      ],
      "riskNotes": [
        "High potassium or kidney problems can occur",
        "Exposure during pregnancy can harm a fetus"
      ],
      "beats": [
        "Angiotensin II receptors are blocked",
        "High potassium or kidney problems can occur"
      ],
      "asides": [
        "A care calendar looks beyond one day.",
        "Exposure during pregnancy can harm a fetus"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "amlodipine",
    "name": "Amlodipine",
    "aliases": [
      "Norvasc"
    ],
    "category": "Medications",
    "className": "Dihydropyridine calcium-channel blocker",
    "useContext": "Clinician-managed treatment of high blood pressure, angina, and coronary artery disease.",
    "mechanism": "Dihydropyridine calcium-channel blocker that relaxes blood vessels.",
    "effects": [
      "Can lower blood pressure",
      "Can reduce angina symptoms"
    ],
    "risks": [
      "Ankle or leg swelling can occur",
      "Dizziness or faintness can occur"
    ],
    "interactionNote": "Some medicines and grapefruit can change levels; report other heart or blood-pressure medicines.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Amlodipine",
        "url": "https://medlineplus.gov/druginfo/meds/a692044.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "typing",
      "prop": "phone",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Recording a home blood-pressure check on a phone.",
      "responseNotes": [
        "Blood vessels relax",
        "Blood pressure can decrease"
      ],
      "riskNotes": [
        "Dizziness or faintness can occur",
        "Ankle or leg swelling can occur"
      ],
      "beats": [
        "Blood vessels relax",
        "Dizziness or faintness can occur"
      ],
      "asides": [
        "One reading joins the rest of the log.",
        "Ankle or leg swelling can occur"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "nifedipine",
    "name": "Nifedipine",
    "aliases": [
      "Procardia",
      "Adalat"
    ],
    "category": "Medications",
    "className": "Dihydropyridine calcium-channel blocker",
    "useContext": "Clinician-managed treatment of high blood pressure and angina.",
    "mechanism": "Calcium-channel blocker that relaxes blood vessels and improves coronary blood flow.",
    "effects": [
      "Can lower blood pressure",
      "Can reduce angina symptoms"
    ],
    "risks": [
      "Headache, flushing, or ankle swelling can occur",
      "Low blood pressure or rapid heartbeat can occur"
    ],
    "interactionNote": "Some medicines and grapefruit can change drug levels; other blood-pressure medicines may add to dizziness.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Nifedipine",
        "url": "https://medlineplus.gov/druginfo/meds/a684028.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "flush",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Planning routine follow-up during blood-pressure treatment.",
      "responseNotes": [
        "Blood vessels relax",
        "Blood pressure can decrease"
      ],
      "riskNotes": [
        "Flushing or headache can occur",
        "Low blood pressure or rapid heartbeat can occur"
      ],
      "beats": [
        "Blood vessels relax",
        "Flushing or headache can occur"
      ],
      "asides": [
        "The calendar keeps the routine visible.",
        "Low blood pressure or rapid heartbeat can occur"
      ],
      "riskVisual": "pressure",
      "exposure": "oral"
    }
  },
  {
    "id": "diltiazem",
    "name": "Diltiazem",
    "aliases": [
      "Cardizem",
      "Tiazac"
    ],
    "category": "Medications",
    "className": "Calcium-channel blocker",
    "useContext": "Clinician-managed treatment of high blood pressure and angina; some products treat certain abnormal heart rhythms.",
    "mechanism": "Calcium-channel blocker that relaxes blood vessels and can slow electrical conduction through the heart.",
    "effects": [
      "Can lower blood pressure",
      "Can reduce angina or heart-rate symptoms"
    ],
    "risks": [
      "Can cause slow heartbeat or low blood pressure",
      "Dizziness, swelling, or heart block can occur"
    ],
    "interactionNote": "Beta blockers and other heart-rate medicines can compound slowing; grapefruit and CYP3A4-interacting drugs may alter levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Diltiazem",
        "url": "https://medlineplus.gov/druginfo/meds/a684027.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Updating a blood-pressure record during prescribed treatment.",
      "responseNotes": [
        "Blood vessels relax",
        "Heart conduction may slow during treatment"
      ],
      "riskNotes": [
        "Dizziness or low blood pressure can occur",
        "Slow heartbeat or heart block can occur"
      ],
      "beats": [
        "Blood vessels relax",
        "Dizziness or low blood pressure can occur"
      ],
      "asides": [
        "The care record makes room for pulse as well as pressure.",
        "Slow heartbeat or heart block can occur"
      ],
      "riskVisual": "pulse",
      "exposure": "oral"
    }
  },
  {
    "id": "verapamil",
    "name": "Verapamil",
    "aliases": [
      "Calan",
      "Verelan"
    ],
    "category": "Medications",
    "className": "Calcium-channel blocker",
    "useContext": "Clinician-managed treatment of high blood pressure and angina; some oral forms prevent or treat irregular heartbeats.",
    "mechanism": "Calcium-channel blocker that relaxes blood vessels and slows conduction through the heart.",
    "effects": [
      "Can lower blood pressure",
      "Can help control selected abnormal heart rhythms"
    ],
    "risks": [
      "Constipation and low blood pressure can occur",
      "Slow heart rate or heart block can occur"
    ],
    "interactionNote": "Beta blockers and other heart-rate medicines can compound slowing; grapefruit and CYP3A4-interacting drugs may alter levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Verapamil",
        "url": "https://medlineplus.gov/druginfo/meds/a684030.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "care-card",
      "prop": "notebook",
      "motif": "conduction",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart",
        "gut"
      ],
      "intent": "Reviewing rhythm-care notes during a clinical follow-up.",
      "responseNotes": [
        "Calcium-channel activity is blocked",
        "Selected abnormal heart rhythms can be controlled"
      ],
      "riskNotes": [
        "Constipation or low blood pressure can occur",
        "Slow heartbeat or heart block can occur"
      ],
      "beats": [
        "Calcium-channel activity is blocked",
        "Constipation or low blood pressure can occur"
      ],
      "asides": [
        "The rhythm notes travel to the next visit.",
        "Slow heartbeat or heart block can occur"
      ],
      "riskVisual": "pulse",
      "exposure": "oral"
    }
  },
  {
    "id": "metoprolol",
    "name": "Metoprolol",
    "aliases": [
      "Lopressor",
      "Toprol-XL"
    ],
    "category": "Medications",
    "className": "Beta blocker",
    "useContext": "Clinician-managed treatment of high blood pressure, angina, and heart failure; some products improve survival after a heart attack.",
    "mechanism": "Beta blocker that slows heart rate and relaxes blood vessels.",
    "effects": [
      "Can lower blood pressure and heart rate",
      "Can reduce angina or heart-failure symptoms"
    ],
    "risks": [
      "Can cause slow heartbeat, fatigue, or dizziness",
      "Can mask some signs of low blood sugar"
    ],
    "interactionNote": "Other heart-rate medicines and some diabetes treatments may need monitoring; do not change therapy without clinician advice.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Metoprolol",
        "url": "https://medlineplus.gov/druginfo/meds/a682864.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Organizing follow-up cards during blood-pressure care.",
      "responseNotes": [
        "Heart rate and blood pressure can decrease",
        "Beta-adrenergic signaling is blocked"
      ],
      "riskNotes": [
        "Dizziness or fatigue can occur",
        "Slow heartbeat or masked low-glucose signs can occur"
      ],
      "beats": [
        "Heart rate and blood pressure can decrease",
        "Dizziness or fatigue can occur"
      ],
      "asides": [
        "The cards keep the appointments in order.",
        "Slow heartbeat or masked low-glucose signs can occur"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "atenolol",
    "name": "Atenolol",
    "aliases": [
      "Tenormin"
    ],
    "category": "Medications",
    "className": "Beta blocker",
    "useContext": "Clinician-managed treatment of high blood pressure or angina and improved survival after a heart attack.",
    "mechanism": "Beta blocker that slows heart rate and relaxes blood vessels.",
    "effects": [
      "Can lower blood pressure",
      "Can reduce angina symptoms"
    ],
    "risks": [
      "Can cause slow heartbeat, fatigue, or dizziness",
      "Can mask some signs of low blood sugar"
    ],
    "interactionNote": "Other heart-rate medicines and diabetes treatments may need monitoring; tell clinicians about asthma or lung disease.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Atenolol",
        "url": "https://medlineplus.gov/druginfo/meds/a684031.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "reading",
      "task": "reading",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Reviewing an angina-care notebook during a quiet break.",
      "responseNotes": [
        "Beta-adrenergic signaling is blocked",
        "Heart workload and angina symptoms can decrease"
      ],
      "riskNotes": [
        "Dizziness or fatigue can occur",
        "Slow heartbeat or masked low-glucose signs can occur"
      ],
      "beats": [
        "Beta-adrenergic signaling is blocked",
        "Dizziness or fatigue can occur"
      ],
      "asides": [
        "A quiet break leaves room for the care notes.",
        "Slow heartbeat or masked low-glucose signs can occur"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "bisoprolol",
    "name": "Bisoprolol",
    "aliases": [
      "Zebeta"
    ],
    "category": "Medications",
    "className": "Beta-1 blocker",
    "useContext": "Clinician-managed treatment of high blood pressure.",
    "mechanism": "Beta-1 selective blocker that slows heart rate and reduces cardiac workload.",
    "effects": [
      "Can lower blood pressure",
      "Can slow heart rate"
    ],
    "risks": [
      "Can cause dizziness, fatigue, or slow heartbeat",
      "Can mask some signs of low blood sugar"
    ],
    "interactionNote": "Other medicines that slow heart rate or lower blood pressure may add effects; review the medication list.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Bisoprolol",
        "url": "https://medlineplus.gov/druginfo/meds/a693024.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Checking a home blood-pressure-care checklist.",
      "responseNotes": [
        "Heart rate and blood pressure can decrease",
        "Beta-1 signaling is blocked"
      ],
      "riskNotes": [
        "Dizziness or fatigue can occur",
        "Slow heartbeat or masked low-glucose signs can occur"
      ],
      "beats": [
        "Heart rate and blood pressure can decrease",
        "Dizziness or fatigue can occur"
      ],
      "asides": [
        "The checklist keeps the next small task in view.",
        "Slow heartbeat or masked low-glucose signs can occur"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "carvedilol",
    "name": "Carvedilol",
    "aliases": [
      "Coreg"
    ],
    "category": "Medications",
    "className": "Alpha- and beta-adrenergic blocker",
    "useContext": "Clinician-managed treatment of heart failure, high blood pressure, and recovery after some heart attacks.",
    "mechanism": "Beta blocker with alpha-1 blocking activity that slows heart rate and relaxes blood vessels.",
    "effects": [
      "Can support heart-failure care",
      "Can lower blood pressure and heart rate"
    ],
    "risks": [
      "Can cause low blood pressure or fainting",
      "Can worsen slow heartbeat or breathing symptoms"
    ],
    "interactionNote": "Other heart-rate or blood-pressure medicines may compound effects; review diabetes medicines and respiratory conditions.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Carvedilol",
        "url": "https://medlineplus.gov/druginfo/meds/a697042.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart",
        "lungs"
      ],
      "intent": "Recording symptoms during an ongoing heart-failure care plan.",
      "responseNotes": [
        "Alpha-1 and beta signaling are blocked",
        "The treatment can support heart-failure care"
      ],
      "riskNotes": [
        "Low blood pressure or fainting can occur",
        "Slow heartbeat or breathing problems can worsen"
      ],
      "beats": [
        "Alpha-1 and beta signaling are blocked",
        "Low blood pressure or fainting can occur"
      ],
      "asides": [
        "The notebook tracks the ordinary days between visits.",
        "Slow heartbeat or breathing problems can worsen"
      ],
      "riskVisual": "pressure",
      "exposure": "oral"
    }
  },
  {
    "id": "propranolol",
    "name": "Propranolol",
    "aliases": [
      "Inderal"
    ],
    "category": "Medications",
    "className": "Nonselective beta blocker",
    "useContext": "Clinician-managed treatment for high blood pressure, angina, selected arrhythmias, tremor, migraine prevention, and other conditions.",
    "mechanism": "Nonselective beta blocker that slows heart rate and reduces cardiac workload.",
    "effects": [
      "Can lower blood pressure and heart rate",
      "Can prevent migraine or reduce tremor"
    ],
    "risks": [
      "Can cause slow heartbeat, fatigue, or dizziness",
      "May worsen asthma or mask low blood sugar"
    ],
    "interactionNote": "Other heart-rate medicines and diabetes treatments may need monitoring; asthma and other lung disease matter.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Propranolol",
        "url": "https://medlineplus.gov/druginfo/meds/a682607.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "writing",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "organs": [],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Writing a short note during clinician-managed tremor care.",
      "responseNotes": [
        "Tremor can decrease",
        "Nonselective beta signaling is blocked"
      ],
      "riskNotes": [
        "Dizziness or fatigue can occur",
        "Asthma symptoms or low-glucose awareness can worsen"
      ],
      "beats": [
        "Tremor can decrease",
        "Dizziness or fatigue can occur"
      ],
      "asides": [
        "The page makes a small movement easy to notice.",
        "Asthma symptoms or low-glucose awareness can worsen"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "labetalol",
    "name": "Labetalol",
    "aliases": [
      "Trandate"
    ],
    "category": "Medications",
    "className": "Alpha- and beta-adrenergic blocker",
    "useContext": "Clinician-managed treatment of high blood pressure; oral and injectable products have different settings.",
    "mechanism": "Alpha- and beta-adrenergic blocker that lowers heart rate and relaxes blood vessels.",
    "effects": [
      "Can lower blood pressure",
      "Can slow heart rate"
    ],
    "risks": [
      "Can cause dizziness or faintness",
      "Can worsen slow heartbeat or breathing problems"
    ],
    "interactionNote": "Other heart-rate or blood-pressure medicines may add effects; disclose asthma, diabetes, and all prescriptions.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Labetalol",
        "url": "https://medlineplus.gov/druginfo/meds/a685034.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "brain",
        "lungs"
      ],
      "intent": "Reviewing a care checklist during blood-pressure treatment.",
      "responseNotes": [
        "Heart rate can slow and blood vessels relax",
        "Blood pressure can decrease"
      ],
      "riskNotes": [
        "Dizziness or faintness can occur",
        "Slow heartbeat or breathing problems can worsen"
      ],
      "beats": [
        "Heart rate can slow and blood vessels relax",
        "Dizziness or faintness can occur"
      ],
      "asides": [
        "The care checklist has room for a follow-up date.",
        "Slow heartbeat or breathing problems can worsen"
      ],
      "riskVisual": "dizziness",
      "exposure": "oral"
    }
  },
  {
    "id": "hydrochlorothiazide",
    "name": "Hydrochlorothiazide",
    "aliases": [
      "HCTZ",
      "Microzide"
    ],
    "category": "Medications",
    "className": "Thiazide diuretic",
    "useContext": "Clinician-managed treatment of high blood pressure or edema due to heart, kidney, or liver disease.",
    "mechanism": "Thiazide diuretic that increases kidney excretion of sodium and water.",
    "effects": [
      "Can lower blood pressure",
      "Can reduce fluid retention"
    ],
    "risks": [
      "Can cause dehydration or low sodium/potassium",
      "Can raise blood sugar or uric acid"
    ],
    "interactionNote": "Lithium, NSAIDs, and other blood-pressure medicines can interact; electrolyte monitoring may be needed.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Hydrochlorothiazide",
        "url": "https://medlineplus.gov/druginfo/meds/a682571.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "fluid",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "kidneys"
      ],
      "cautions": [],
      "intent": "Recording swelling patterns during prescribed edema care.",
      "responseNotes": [
        "The kidneys excrete more sodium and water",
        "Fluid retention can decrease"
      ],
      "riskNotes": [
        "Dehydration or low sodium/potassium can occur",
        "Blood sugar or uric acid can rise"
      ],
      "beats": [
        "The kidneys excrete more sodium and water",
        "Dehydration or low sodium/potassium can occur"
      ],
      "asides": [
        "The diary tracks changes across the week.",
        "Blood sugar or uric acid can rise"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "chlorthalidone",
    "name": "Chlorthalidone",
    "aliases": [
      "Thalitone"
    ],
    "category": "Medications",
    "className": "Thiazide-like diuretic",
    "useContext": "Clinician-managed treatment of high blood pressure and fluid retention.",
    "mechanism": "Thiazide-like diuretic that increases kidney excretion of sodium and water.",
    "effects": [
      "Can lower blood pressure",
      "Can reduce edema"
    ],
    "risks": [
      "Can cause dehydration or electrolyte changes",
      "Dizziness and low blood pressure can occur"
    ],
    "interactionNote": "Lithium, NSAIDs, and other blood-pressure medicines can interact; monitoring of electrolytes may be needed.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Chlorthalidone",
        "url": "https://medlineplus.gov/druginfo/meds/a682342.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "fluid",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "kidneys"
      ],
      "cautions": [],
      "intent": "Recording changes in swelling during prescribed edema care.",
      "responseNotes": [
        "The kidneys excrete more sodium and water",
        "Fluid retention can decrease"
      ],
      "riskNotes": [
        "Dizziness or low blood pressure can occur",
        "Dehydration or electrolyte changes can occur"
      ],
      "beats": [
        "The kidneys excrete more sodium and water",
        "Dizziness or low blood pressure can occur"
      ],
      "asides": [
        "The record follows changes across ordinary days.",
        "Dehydration or electrolyte changes can occur"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "indapamide",
    "name": "Indapamide",
    "aliases": [
      "Lozol"
    ],
    "category": "Medications",
    "className": "Thiazide-like diuretic",
    "useContext": "Clinician-managed treatment of high blood pressure and edema related to heart failure.",
    "mechanism": "Thiazide-like diuretic that helps the kidneys remove excess salt and water.",
    "effects": [
      "Can lower blood pressure",
      "Can reduce fluid retention"
    ],
    "risks": [
      "Can cause dehydration or electrolyte imbalance",
      "Dizziness, weakness, or cramps can occur"
    ],
    "interactionNote": "Lithium, NSAIDs, and other blood-pressure medicines may interact; review medication and supplement use.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Indapamide",
        "url": "https://medlineplus.gov/druginfo/meds/a684062.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "fluid",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "kidneys"
      ],
      "cautions": [],
      "intent": "Checking a home-care card for heart-failure-related swelling.",
      "responseNotes": [
        "The kidneys remove more salt and water",
        "Fluid retention can decrease"
      ],
      "riskNotes": [
        "Dizziness or weakness can occur",
        "Dehydration or electrolyte imbalance can occur"
      ],
      "beats": [
        "The kidneys remove more salt and water",
        "Dizziness or weakness can occur"
      ],
      "asides": [
        "The care card keeps the follow-up details close.",
        "Dehydration or electrolyte imbalance can occur"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "furosemide",
    "name": "Furosemide",
    "aliases": [
      "Lasix"
    ],
    "category": "Medications",
    "className": "Loop diuretic",
    "useContext": "Clinician-managed treatment of high blood pressure and edema due to heart, kidney, or liver disease.",
    "mechanism": "Loop diuretic that increases kidney excretion of salt and water.",
    "effects": [
      "Can reduce edema",
      "Can lower blood pressure"
    ],
    "risks": [
      "Can cause dehydration or low potassium",
      "Hearing changes or kidney problems can occur"
    ],
    "interactionNote": "NSAIDs, lithium, aminoglycosides, and other blood-pressure medicines can interact; electrolyte monitoring may be needed.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Furosemide",
        "url": "https://medlineplus.gov/druginfo/meds/a682858.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "fluid",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "kidneys"
      ],
      "cautions": [
        "kidneys"
      ],
      "intent": "Organizing a swelling record before an edema-care follow-up.",
      "responseNotes": [
        "The kidneys excrete more salt and water",
        "Edema can decrease during treatment"
      ],
      "riskNotes": [
        "Dehydration or low potassium can occur",
        "Hearing changes or kidney problems can occur"
      ],
      "beats": [
        "The kidneys excrete more salt and water",
        "Dehydration or low potassium can occur"
      ],
      "asides": [
        "The clipboard collects the between-visit observations.",
        "Hearing changes or kidney problems can occur"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "torsemide",
    "name": "Torsemide",
    "aliases": [
      "Demadex"
    ],
    "category": "Medications",
    "className": "Loop diuretic",
    "useContext": "Clinician-managed treatment of high blood pressure and edema related to heart, kidney, or liver disease.",
    "mechanism": "Loop diuretic that helps the kidneys remove excess salt and water.",
    "effects": [
      "Can reduce edema",
      "Can lower blood pressure"
    ],
    "risks": [
      "Can cause dehydration or electrolyte imbalance",
      "Ringing in ears or hearing loss can occur"
    ],
    "interactionNote": "NSAIDs, lithium, aminoglycosides, and other blood-pressure medicines can interact; monitoring may be needed.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Torsemide",
        "url": "https://medlineplus.gov/druginfo/meds/a601212.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "notebook",
      "motif": "fluid",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "kidneys"
      ],
      "cautions": [],
      "intent": "Noting questions about ongoing treatment for fluid retention.",
      "responseNotes": [
        "The kidneys remove more salt and water",
        "Edema can decrease during treatment"
      ],
      "riskNotes": [
        "Dehydration or electrolyte imbalance can occur",
        "Ringing in the ears or hearing loss can occur"
      ],
      "beats": [
        "The kidneys remove more salt and water",
        "Dehydration or electrolyte imbalance can occur"
      ],
      "asides": [
        "A written question is easier to bring to the visit.",
        "Ringing in the ears or hearing loss can occur"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "spironolactone",
    "name": "Spironolactone",
    "aliases": [
      "Aldactone"
    ],
    "category": "Medications",
    "className": "Mineralocorticoid-receptor antagonist",
    "useContext": "Clinician-managed treatment for heart failure, hypertension, edema, low potassium, or excess aldosterone.",
    "mechanism": "Mineralocorticoid receptor antagonist that blocks aldosterone and conserves potassium.",
    "effects": [
      "Can reduce fluid retention",
      "Can lower blood pressure"
    ],
    "risks": [
      "Can cause dangerously high potassium",
      "Breast tenderness or menstrual changes can occur"
    ],
    "interactionNote": "Potassium supplements, ACE inhibitors, ARBs, NSAIDs, and eplerenone can raise risk; kidney function matters.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Spironolactone",
        "url": "https://medlineplus.gov/druginfo/meds/a682627.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "kidneys"
      ],
      "cautions": [],
      "intent": "Updating a meal record as part of a fluid-retention care plan.",
      "responseNotes": [
        "Aldosterone effects are blocked",
        "Fluid retention can decrease while potassium is conserved"
      ],
      "riskNotes": [
        "Potassium can become dangerously high",
        "Breast tenderness or menstrual changes can occur"
      ],
      "beats": [
        "Aldosterone effects are blocked",
        "Potassium can become dangerously high"
      ],
      "asides": [
        "The meal record belongs to the wider care plan.",
        "Breast tenderness or menstrual changes can occur"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "eplerenone",
    "name": "Eplerenone",
    "aliases": [
      "Inspra"
    ],
    "category": "Medications",
    "className": "Selective mineralocorticoid-receptor antagonist",
    "useContext": "Clinician-managed treatment of high blood pressure and some patients after a heart attack.",
    "mechanism": "Selective mineralocorticoid receptor antagonist that blocks aldosterone.",
    "effects": [
      "Can lower blood pressure",
      "Can support recovery after some heart attacks"
    ],
    "risks": [
      "Can cause dangerously high potassium",
      "Kidney problems or dizziness can occur"
    ],
    "interactionNote": "Potassium products, ACE inhibitors, ARBs, and strong CYP3A4 inhibitors can raise risk or levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Eplerenone",
        "url": "https://medlineplus.gov/druginfo/meds/a603004.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "reading",
      "prop": "book",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "kidneys"
      ],
      "intent": "Reading a care booklet during follow-up after a heart attack.",
      "responseNotes": [
        "Aldosterone effects are blocked",
        "Treatment can support selected post-heart-attack care"
      ],
      "riskNotes": [
        "Dizziness or kidney problems can occur",
        "Potassium can become dangerously high"
      ],
      "beats": [
        "Aldosterone effects are blocked",
        "Dizziness or kidney problems can occur"
      ],
      "asides": [
        "The booklet travels from the visit back home.",
        "Potassium can become dangerously high"
      ],
      "riskVisual": "electrolytes",
      "exposure": "oral"
    }
  },
  {
    "id": "hydralazine",
    "name": "Hydralazine",
    "aliases": [
      "Apresoline"
    ],
    "category": "Medications",
    "className": "Direct vasodilator",
    "useContext": "Clinician-managed treatment of high blood pressure.",
    "mechanism": "Vasodilator that relaxes blood vessels and reduces resistance to blood flow.",
    "effects": [
      "Can lower blood pressure",
      "May cause flushing or headache"
    ],
    "risks": [
      "Can cause rapid heartbeat or fluid retention",
      "Rare lupus-like immune reactions can occur"
    ],
    "interactionNote": "Other antihypertensives can compound low blood pressure; aspirin allergy and other medicines should be reviewed.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Hydralazine",
        "url": "https://medlineplus.gov/druginfo/meds/a682246.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "typing",
      "prop": "phone",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Updating a home blood-pressure log on a phone.",
      "responseNotes": [
        "Blood vessels relax",
        "Blood pressure can decrease"
      ],
      "riskNotes": [
        "Rapid heartbeat or fluid retention can occur",
        "Rare lupus-like immune reactions can occur"
      ],
      "beats": [
        "Blood vessels relax",
        "Rapid heartbeat or fluid retention can occur"
      ],
      "asides": [
        "The phone keeps a small record of a longer treatment.",
        "Rare lupus-like immune reactions can occur"
      ],
      "riskVisual": "pulse",
      "exposure": "oral"
    }
  },
  {
    "id": "minoxidil",
    "name": "Minoxidil",
    "aliases": [
      "Loniten"
    ],
    "category": "Medications",
    "className": "Direct vasodilator",
    "useContext": "Clinician-managed treatment of severe high blood pressure, generally with other medicines.",
    "mechanism": "Direct vasodilator that relaxes blood vessels.",
    "effects": [
      "Can lower blood pressure",
      "Can improve blood flow"
    ],
    "risks": [
      "May worsen angina or cause heart problems",
      "Can cause fluid retention and excess body hair"
    ],
    "interactionNote": "Other blood-pressure medicines and heart medicines require clinician review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Minoxidil",
        "url": "https://medlineplus.gov/druginfo/meds/a682608.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "planning",
      "prop": "calendar",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Planning follow-up for severe hypertension treated with oral minoxidil.",
      "responseNotes": [
        "Blood vessels relax",
        "Severe high blood pressure can decrease"
      ],
      "riskNotes": [
        "Angina or other heart problems can worsen",
        "Fluid retention or excess body hair can occur"
      ],
      "beats": [
        "Blood vessels relax",
        "Angina or other heart problems can worsen"
      ],
      "asides": [
        "This scene follows the oral blood-pressure treatment.",
        "Fluid retention or excess body hair can occur"
      ],
      "riskVisual": "fluid",
      "exposure": "oral"
    }
  },
  {
    "id": "nitroglycerin",
    "name": "Nitroglycerin",
    "aliases": [
      "Nitrostat",
      "Nitrolingual"
    ],
    "category": "Medications",
    "className": "Nitrate vasodilator",
    "useContext": "Relief or prevention of angina in coronary artery disease; this source covers oral spray.",
    "mechanism": "Nitrate vasodilator that reduces cardiac workload and oxygen demand.",
    "effects": [
      "Can relieve angina symptoms",
      "Can prevent predictable angina episodes"
    ],
    "risks": [
      "Headache and dizziness can occur",
      "May cause low blood pressure or fainting"
    ],
    "interactionNote": "PDE-5 inhibitors and riociguat can cause dangerous blood-pressure drops; alcohol can worsen dizziness.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Nitroglycerin Spray",
        "url": "https://medlineplus.gov/druginfo/meds/a615006.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "rest",
      "task": "care-card",
      "prop": "care-card",
      "motif": "flow",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "dizzy",
      "timeCourse": "immediate",
      "organs": [
        "heart"
      ],
      "cautions": [],
      "intent": "Reviewing an angina-response card during prescribed coronary care.",
      "responseNotes": [
        "Cardiac workload and oxygen demand can decrease",
        "Angina symptoms can ease"
      ],
      "riskNotes": [
        "Headache or dizziness can occur",
        "Low blood pressure or fainting can occur"
      ],
      "beats": [
        "Cardiac workload and oxygen demand can decrease",
        "Headache or dizziness can occur"
      ],
      "asides": [
        "The response card is part of an established care plan.",
        "Low blood pressure or fainting can occur"
      ],
      "riskVisual": "pressure",
      "exposure": "symbolic"
    }
  },
  {
    "id": "isosorbide-mononitrate",
    "name": "Isosorbide mononitrate",
    "aliases": [
      "Imdur"
    ],
    "category": "Medications",
    "className": "Nitrate vasodilator",
    "useContext": "Prevention of angina in coronary artery disease; the cited label covers oral tablets.",
    "mechanism": "Long-acting nitrate vasodilator that reduces cardiac oxygen demand.",
    "effects": [
      "Can help prevent angina episodes",
      "Can reduce angina frequency"
    ],
    "risks": [
      "Headache and dizziness can occur",
      "May cause low blood pressure"
    ],
    "interactionNote": "PDE-5 inhibitors and riociguat can cause dangerous blood-pressure drops.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · Isosorbide mononitrate label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=21bd9824-537d-4bcd-8093-1270df52c29c"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "flow",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [],
      "intent": "Planning ordinary activities while following an angina-prevention plan.",
      "responseNotes": [
        "Blood vessels relax and cardiac oxygen demand decreases",
        "Treatment can help prevent angina episodes"
      ],
      "riskNotes": [
        "Headache or dizziness can occur",
        "Blood pressure can become too low"
      ],
      "beats": [
        "Blood vessels relax and cardiac oxygen demand decreases",
        "Headache or dizziness can occur"
      ],
      "asides": [
        "Prevention is followed across ordinary days.",
        "Blood pressure can become too low"
      ],
      "riskVisual": "pressure",
      "exposure": "oral"
    }
  },
  {
    "id": "ranolazine",
    "name": "Ranolazine",
    "aliases": [
      "Ranexa"
    ],
    "category": "Medications",
    "className": "Antianginal",
    "useContext": "Clinician-managed treatment of chronic angina.",
    "mechanism": "Antianginal; exact mechanism is not fully known.",
    "effects": [
      "May reduce chronic angina",
      "Can be used with other antianginals"
    ],
    "risks": [
      "Can prolong QT interval",
      "Dizziness, constipation, or nausea can occur"
    ],
    "interactionNote": "CYP3A inhibitors/inducers and QT-prolonging medicines require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ranolazine",
        "url": "https://medlineplus.gov/druginfo/meds/a606015.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "pain",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart",
        "gut"
      ],
      "intent": "Returning to a book during ongoing chronic-angina treatment.",
      "responseNotes": [
        "Chronic angina symptoms can decrease",
        "The exact antianginal mechanism is not fully known"
      ],
      "riskNotes": [
        "Nausea, constipation, or dizziness can occur",
        "QT prolongation can affect heart rhythm"
      ],
      "beats": [
        "Chronic angina symptoms can decrease",
        "Nausea, constipation, or dizziness can occur"
      ],
      "asides": [
        "The bookmark keeps the place during a quiet break.",
        "QT prolongation can affect heart rhythm"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "digoxin",
    "name": "Digoxin",
    "aliases": [
      "Lanoxin"
    ],
    "category": "Medications",
    "className": "Cardiac glycoside",
    "useContext": "Treatment of heart failure and selected abnormal heart rhythms.",
    "mechanism": "Cardiac glycoside that affects heart contraction and rate.",
    "effects": [
      "Can improve heart-failure symptoms",
      "Can help control heart rate"
    ],
    "risks": [
      "Toxicity can cause vision or rhythm changes",
      "Nausea and appetite loss can occur"
    ],
    "interactionNote": "Many medicines and low potassium can alter digoxin levels or toxicity risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Digoxin",
        "url": "https://medlineplus.gov/druginfo/meds/a682301.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "flow",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart",
        "eyes",
        "gut"
      ],
      "intent": "Checking a home symptom record during heart-failure treatment.",
      "responseNotes": [
        "Heart contraction and rate are affected",
        "Heart-failure symptoms can improve"
      ],
      "riskNotes": [
        "Nausea or appetite loss can occur",
        "Toxicity can cause vision or heart-rhythm changes"
      ],
      "beats": [
        "Heart contraction and rate are affected",
        "Nausea or appetite loss can occur"
      ],
      "asides": [
        "The symptom record makes small changes easier to discuss.",
        "Toxicity can cause vision or heart-rhythm changes"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "amiodarone",
    "name": "Amiodarone",
    "aliases": [
      "Pacerone",
      "Cordarone"
    ],
    "category": "Medications",
    "className": "Class III antiarrhythmic",
    "useContext": "Specialist-managed treatment of certain serious ventricular arrhythmias.",
    "mechanism": "Class III antiarrhythmic that alters cardiac electrical activity.",
    "effects": [
      "Can treat certain dangerous arrhythmias",
      "Can help stabilize heart rhythm"
    ],
    "risks": [
      "Lung, liver, thyroid, and eye injury can occur",
      "Can cause dangerous rhythm changes"
    ],
    "interactionNote": "Numerous interactions, including warfarin, digoxin, and QT-prolonging drugs; specialist review is essential.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Amiodarone",
        "url": "https://medlineplus.gov/druginfo/meds/a687009.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "organizer",
      "prop": "notebook",
      "motif": "conduction",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart",
        "lungs",
        "liver"
      ],
      "intent": "Organizing follow-up notes during specialist arrhythmia care.",
      "responseNotes": [
        "Cardiac electrical activity is altered",
        "Selected serious arrhythmias can be controlled"
      ],
      "riskNotes": [
        "Dangerous heart-rhythm changes can occur",
        "Lung, liver, thyroid, or eye injury can occur"
      ],
      "beats": [
        "Cardiac electrical activity is altered",
        "Dangerous heart-rhythm changes can occur"
      ],
      "asides": [
        "Specialist follow-up is part of this treatment.",
        "Lung, liver, thyroid, or eye injury can occur"
      ],
      "riskVisual": "pulse",
      "exposure": "oral"
    }
  },
  {
    "id": "sotalol",
    "name": "Sotalol",
    "aliases": [
      "Betapace"
    ],
    "category": "Medications",
    "className": "Antiarrhythmic with beta-blocking activity",
    "useContext": "Treatment of selected serious ventricular arrhythmias and atrial fibrillation/flutter.",
    "mechanism": "Antiarrhythmic with beta-blocking activity.",
    "effects": [
      "Can help maintain heart rhythm",
      "Can reduce selected arrhythmias"
    ],
    "risks": [
      "QT prolongation can trigger fatal arrhythmia",
      "May worsen heart failure or slow heart rate"
    ],
    "interactionNote": "QT-prolonging drugs and medicines affecting kidney function require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Sotalol",
        "url": "https://medlineplus.gov/druginfo/meds/a693010.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Planning specialist follow-up for an ongoing heart-rhythm treatment.",
      "responseNotes": [
        "Beta-adrenergic activity is blocked",
        "Selected abnormal heart rhythms can be controlled"
      ],
      "riskNotes": [
        "QT prolongation can trigger a fatal arrhythmia",
        "Heart failure or a slow heartbeat can worsen"
      ],
      "beats": [
        "Beta-adrenergic activity is blocked",
        "QT prolongation can trigger a fatal arrhythmia"
      ],
      "asides": [
        "The calendar keeps the rhythm-care follow-up visible.",
        "Heart failure or a slow heartbeat can worsen"
      ],
      "riskVisual": "pulse",
      "exposure": "oral"
    }
  },
  {
    "id": "flecainide",
    "name": "Flecainide",
    "aliases": [
      "Tambocor"
    ],
    "category": "Medications",
    "className": "Class Ic antiarrhythmic",
    "useContext": "Prevention of selected life-threatening irregular heartbeats under specialist care.",
    "mechanism": "Class Ic antiarrhythmic that slows cardiac electrical conduction.",
    "effects": [
      "Can help prevent selected arrhythmias",
      "Can stabilize abnormal heart rhythm"
    ],
    "risks": [
      "Can worsen or provoke dangerous arrhythmias",
      "Higher risk after recent heart attack"
    ],
    "interactionNote": "Other rhythm medicines and drugs affecting its metabolism require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Flecainide",
        "url": "https://medlineplus.gov/druginfo/meds/a608040.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "conduction",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Reviewing a specialist care sheet for an abnormal heart rhythm.",
      "responseNotes": [
        "Cardiac electrical conduction slows",
        "Selected arrhythmias can be prevented"
      ],
      "riskNotes": [
        "Dangerous arrhythmias can be triggered or worsened",
        "Risk is higher after a recent heart attack"
      ],
      "beats": [
        "Cardiac electrical conduction slows",
        "Dangerous arrhythmias can be triggered or worsened"
      ],
      "asides": [
        "The care sheet belongs to a specialist treatment plan.",
        "Risk is higher after a recent heart attack"
      ],
      "riskVisual": "pulse",
      "exposure": "oral"
    }
  },
  {
    "id": "ivabradine",
    "name": "Ivabradine",
    "aliases": [
      "Corlanor"
    ],
    "category": "Medications",
    "className": "HCN-channel blocker",
    "useContext": "Treatment of selected adults with chronic heart failure and some children with cardiomyopathy.",
    "mechanism": "HCN channel blocker that slows the heart rate.",
    "effects": [
      "Can reduce worsening heart-failure risk",
      "Can slow an elevated heart rate"
    ],
    "risks": [
      "Slow or irregular heartbeat can occur",
      "Can cause visual brightness phenomena"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors or inducers and other heart-rate-lowering drugs require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ivabradine",
        "url": "https://medlineplus.gov/druginfo/meds/a615027.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "conduction",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sensitivity",
      "timeCourse": "over-time",
      "organs": [
        "heart"
      ],
      "cautions": [
        "heart",
        "eyes"
      ],
      "intent": "Recording an ordinary day during selected adult heart-failure care.",
      "responseNotes": [
        "HCN-channel activity is blocked and heart rate slows",
        "Worsening heart-failure risk can decrease"
      ],
      "riskNotes": [
        "Brief visual brightness phenomena can occur",
        "Slow or irregular heartbeat can occur"
      ],
      "beats": [
        "HCN-channel activity is blocked and heart rate slows",
        "Brief visual brightness phenomena can occur"
      ],
      "asides": [
        "The record gives the next visit a picture of everyday life.",
        "Slow or irregular heartbeat can occur"
      ],
      "riskVisual": "vision",
      "exposure": "oral"
    }
  },
  {
    "id": "atorvastatin",
    "name": "Atorvastatin",
    "aliases": [
      "Lipitor"
    ],
    "category": "Medications",
    "className": "HMG-CoA reductase inhibitor · statin",
    "useContext": "Lowering cholesterol and reducing cardiovascular risk.",
    "mechanism": "HMG-CoA reductase inhibitor that reduces liver cholesterol production.",
    "effects": [
      "Lowers LDL cholesterol",
      "Can reduce heart attack and stroke risk"
    ],
    "risks": [
      "Muscle injury can rarely be severe",
      "Liver problems can occur"
    ],
    "interactionNote": "Some antibiotics, antifungals, antivirals, and grapefruit can raise exposure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Atorvastatin",
        "url": "https://medlineplus.gov/druginfo/meds/a600045.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "lipids",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "liver"
      ],
      "cautions": [
        "muscle",
        "liver"
      ],
      "intent": "Sitting down to an ordinary meal during cholesterol treatment.",
      "responseNotes": [
        "The liver produces less cholesterol",
        "LDL cholesterol can decrease over time"
      ],
      "riskNotes": [
        "Rare muscle injury can be severe",
        "Liver problems can occur"
      ],
      "beats": [
        "The liver produces less cholesterol",
        "Rare muscle injury can be severe"
      ],
      "asides": [
        "An ordinary meal still has ordinary dishes.",
        "Liver problems can occur"
      ],
      "riskVisual": "muscle",
      "exposure": "oral"
    }
  },
  {
    "id": "rosuvastatin",
    "name": "Rosuvastatin",
    "aliases": [
      "Crestor"
    ],
    "category": "Medications",
    "className": "HMG-CoA reductase inhibitor · statin",
    "useContext": "Lowering cholesterol and reducing cardiovascular risk.",
    "mechanism": "HMG-CoA reductase inhibitor that reduces liver cholesterol production.",
    "effects": [
      "Lowers LDL cholesterol",
      "Can reduce heart attack and stroke risk"
    ],
    "risks": [
      "Muscle injury can rarely be severe",
      "Liver problems can occur"
    ],
    "interactionNote": "Cyclosporine and some antivirals can raise exposure; antacids can lower absorption.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Rosuvastatin",
        "url": "https://medlineplus.gov/druginfo/meds/a603033.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "lipids",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "liver"
      ],
      "cautions": [
        "muscle",
        "liver"
      ],
      "intent": "Planning a cholesterol follow-up on a home calendar.",
      "responseNotes": [
        "The liver produces less cholesterol",
        "LDL cholesterol and cardiovascular risk can decrease"
      ],
      "riskNotes": [
        "Rare muscle injury can be severe",
        "Liver problems can occur"
      ],
      "beats": [
        "The liver produces less cholesterol",
        "Rare muscle injury can be severe"
      ],
      "asides": [
        "The calendar marks follow-up across a longer treatment.",
        "Liver problems can occur"
      ],
      "riskVisual": "muscle",
      "exposure": "oral"
    }
  },
  {
    "id": "simvastatin",
    "name": "Simvastatin",
    "aliases": [
      "Zocor"
    ],
    "category": "Medications",
    "className": "HMG-CoA reductase inhibitor · statin",
    "useContext": "Lowering cholesterol and reducing cardiovascular risk in appropriate patients.",
    "mechanism": "HMG-CoA reductase inhibitor that reduces liver cholesterol production.",
    "effects": [
      "Lowers LDL cholesterol",
      "Can reduce cardiovascular risk"
    ],
    "risks": [
      "Muscle injury can rarely be severe",
      "Liver problems can occur"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors and grapefruit can raise exposure and muscle-injury risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Simvastatin",
        "url": "https://medlineplus.gov/druginfo/meds/a692030.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "lipids",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "liver"
      ],
      "cautions": [
        "muscle",
        "liver"
      ],
      "intent": "Writing questions before a routine cholesterol-care visit.",
      "responseNotes": [
        "The liver produces less cholesterol",
        "LDL cholesterol can decrease over time"
      ],
      "riskNotes": [
        "Rare muscle injury can be severe",
        "Liver problems can occur"
      ],
      "beats": [
        "The liver produces less cholesterol",
        "Rare muscle injury can be severe"
      ],
      "asides": [
        "The notebook saves the questions for the appointment.",
        "Liver problems can occur"
      ],
      "riskVisual": "muscle",
      "exposure": "oral"
    }
  },
  {
    "id": "pravastatin",
    "name": "Pravastatin",
    "aliases": [
      "Pravachol"
    ],
    "category": "Medications",
    "className": "HMG-CoA reductase inhibitor · statin",
    "useContext": "Lowering cholesterol and reducing cardiovascular risk.",
    "mechanism": "HMG-CoA reductase inhibitor that reduces liver cholesterol production.",
    "effects": [
      "Lowers LDL cholesterol",
      "Can reduce cardiovascular risk"
    ],
    "risks": [
      "Muscle injury can rarely be severe",
      "Liver problems can occur"
    ],
    "interactionNote": "Cyclosporine and some antibiotics can increase muscle-injury risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Pravastatin",
        "url": "https://medlineplus.gov/druginfo/meds/a692025.html"
      }
    ],
    "scene": {
      "setting": "garden",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "lipids",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "liver"
      ],
      "cautions": [
        "muscle",
        "liver"
      ],
      "intent": "Reading during a quiet break in an ongoing cholesterol-care routine.",
      "responseNotes": [
        "The liver produces less cholesterol",
        "LDL cholesterol and cardiovascular risk can decrease"
      ],
      "riskNotes": [
        "Rare muscle injury can be severe",
        "Liver problems can occur"
      ],
      "beats": [
        "The liver produces less cholesterol",
        "Rare muscle injury can be severe"
      ],
      "asides": [
        "The book and the long-term care routine share an ordinary day.",
        "Liver problems can occur"
      ],
      "riskVisual": "muscle",
      "exposure": "oral"
    }
  },
  {
    "id": "ezetimibe",
    "name": "Ezetimibe",
    "aliases": [
      "Zetia"
    ],
    "category": "Medications",
    "className": "Cholesterol-absorption inhibitor",
    "useContext": "Lowering LDL cholesterol, alone or alongside other lipid-lowering treatment.",
    "mechanism": "Blocks intestinal cholesterol absorption.",
    "effects": [
      "Lowers LDL cholesterol",
      "Can complement statin treatment"
    ],
    "risks": [
      "Muscle or liver problems can occur",
      "Abdominal discomfort or diarrhea can occur"
    ],
    "interactionNote": "Bile-acid sequestrants and cyclosporine affect use; review combinations with statins.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ezetimibe",
        "url": "https://medlineplus.gov/druginfo/meds/a603015.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "lipids",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut",
        "muscle",
        "liver"
      ],
      "intent": "Updating a meal notebook during prescribed LDL-cholesterol treatment.",
      "responseNotes": [
        "The intestine absorbs less cholesterol",
        "LDL cholesterol can decrease"
      ],
      "riskNotes": [
        "Abdominal discomfort or diarrhea can occur",
        "Muscle or liver problems can occur"
      ],
      "beats": [
        "The intestine absorbs less cholesterol",
        "Abdominal discomfort or diarrhea can occur"
      ],
      "asides": [
        "The meal notebook keeps the wider routine in view.",
        "Muscle or liver problems can occur"
      ],
      "riskVisual": "gut",
      "exposure": "oral"
    }
  },
  {
    "id": "fenofibrate",
    "name": "Fenofibrate",
    "aliases": [
      "Tricor",
      "Antara"
    ],
    "category": "Medications",
    "className": "Fibrate",
    "useContext": "Lowering elevated triglycerides and other blood fats.",
    "mechanism": "Fibrate that changes lipid metabolism and increases lipid clearance.",
    "effects": [
      "Can lower triglycerides",
      "Can improve some lipid profiles"
    ],
    "risks": [
      "Muscle injury can occur, especially with statins",
      "Gallstones or liver injury can occur"
    ],
    "interactionNote": "Warfarin and statins require monitoring or clinician review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Fenofibrate",
        "url": "https://medlineplus.gov/druginfo/meds/a601052.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "reading",
      "prop": "clipboard",
      "motif": "lipids",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [],
      "cautions": [
        "muscle",
        "liver"
      ],
      "intent": "Reading a blood-lipid report during treatment for high triglycerides.",
      "responseNotes": [
        "Lipid metabolism and clearance change",
        "Blood triglycerides can decrease"
      ],
      "riskNotes": [
        "Muscle injury can occur, especially with statins",
        "Gallstones or liver injury can occur"
      ],
      "beats": [
        "Lipid metabolism and clearance change",
        "Muscle injury can occur, especially with statins"
      ],
      "asides": [
        "The report tracks changes that are not visible in a mirror.",
        "Gallstones or liver injury can occur"
      ],
      "riskVisual": "muscle",
      "exposure": "oral"
    }
  },
  {
    "id": "evolocumab",
    "name": "Evolocumab",
    "aliases": [
      "Repatha"
    ],
    "category": "Medications",
    "className": "PCSK9-inhibiting monoclonal antibody",
    "useContext": "Lowering LDL cholesterol and cardiovascular risk in selected patients; source covers injection.",
    "mechanism": "PCSK9 inhibitor monoclonal antibody that increases LDL clearance.",
    "effects": [
      "Can lower LDL cholesterol substantially",
      "Can reduce heart attack and stroke risk"
    ],
    "risks": [
      "Injection-site reactions can occur",
      "Allergic reactions can occur"
    ],
    "interactionNote": "No major interaction identified in the consumer article; review all treatment.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Evolocumab Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a615043.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "lipids",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [],
      "cautions": [
        "skin"
      ],
      "intent": "Reviewing a follow-up card during injectable LDL-cholesterol treatment.",
      "responseNotes": [
        "PCSK9 activity is inhibited",
        "LDL clearance increases and cholesterol can decrease"
      ],
      "riskNotes": [
        "Injection-site reactions can occur",
        "Allergic reactions can occur"
      ],
      "beats": [
        "PCSK9 activity is inhibited",
        "Injection-site reactions can occur"
      ],
      "asides": [
        "The card connects the home routine with the next review.",
        "Allergic reactions can occur"
      ],
      "riskVisual": "skin",
      "exposure": "symbolic"
    }
  },
  {
    "id": "alirocumab",
    "name": "Alirocumab",
    "aliases": [
      "Praluent"
    ],
    "category": "Medications",
    "className": "PCSK9-inhibiting monoclonal antibody",
    "useContext": "Lowering LDL cholesterol and cardiovascular risk in selected patients; source covers injection.",
    "mechanism": "PCSK9 inhibitor monoclonal antibody that increases LDL clearance.",
    "effects": [
      "Can lower LDL cholesterol substantially",
      "Can reduce heart attack and stroke risk"
    ],
    "risks": [
      "Injection-site reactions can occur",
      "Allergic reactions can occur"
    ],
    "interactionNote": "No major interaction identified in the consumer article; review all treatment.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Alirocumab Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a615035.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "notebook",
      "motif": "lipids",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [],
      "cautions": [
        "skin"
      ],
      "intent": "Noting questions about an injectable cholesterol-treatment plan.",
      "responseNotes": [
        "PCSK9 activity is inhibited",
        "LDL clearance increases and cholesterol can decrease"
      ],
      "riskNotes": [
        "Injection-site reactions can occur",
        "Allergic reactions can occur"
      ],
      "beats": [
        "PCSK9 activity is inhibited",
        "Injection-site reactions can occur"
      ],
      "asides": [
        "The notebook keeps the questions together.",
        "Allergic reactions can occur"
      ],
      "riskVisual": "skin",
      "exposure": "symbolic"
    }
  },
  {
    "id": "bempedoic-acid",
    "name": "Bempedoic acid",
    "aliases": [
      "Nexletol"
    ],
    "category": "Medications",
    "className": "ATP-citrate lyase inhibitor",
    "useContext": "Lowering LDL cholesterol and cardiovascular risk in selected adults.",
    "mechanism": "ATP-citrate lyase inhibitor that reduces cholesterol synthesis in the liver.",
    "effects": [
      "Can lower LDL cholesterol",
      "Can reduce cardiovascular risk"
    ],
    "risks": [
      "Gout and tendon injury can occur",
      "Muscle spasms or elevated uric acid can occur"
    ],
    "interactionNote": "Can raise levels of simvastatin or pravastatin; check uric-acid-raising drugs.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Bempedoic Acid",
        "url": "https://medlineplus.gov/druginfo/meds/a620020.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "lipids",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "liver"
      ],
      "cautions": [],
      "intent": "Organizing follow-up paperwork during oral LDL-cholesterol treatment.",
      "responseNotes": [
        "ATP-citrate lyase inhibition reduces cholesterol synthesis",
        "LDL cholesterol can decrease"
      ],
      "riskNotes": [
        "Gout or tendon injury can occur",
        "Uric acid can rise and muscle spasms can occur"
      ],
      "beats": [
        "ATP-citrate lyase inhibition reduces cholesterol synthesis",
        "Gout or tendon injury can occur"
      ],
      "asides": [
        "The clipboard gives the follow-up paperwork a home.",
        "Uric acid can rise and muscle spasms can occur"
      ],
      "riskVisual": "tendon",
      "exposure": "oral"
    }
  },
  {
    "id": "clopidogrel",
    "name": "Clopidogrel",
    "aliases": [
      "Plavix"
    ],
    "category": "Medications",
    "className": "antiplatelet",
    "useContext": "Preventing recurrent heart attack or stroke and other atherothrombotic events.",
    "mechanism": "P2Y12 antiplatelet that reduces platelet aggregation.",
    "effects": [
      "Reduces platelet clot formation",
      "Can lower recurrent vascular-event risk"
    ],
    "risks": [
      "Serious bleeding can occur",
      "Effect may be reduced in poor CYP2C19 metabolizers"
    ],
    "interactionNote": "Omeprazole/esomeprazole may reduce activation; anticoagulants increase bleeding risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Clopidogrel",
        "url": "https://medlineplus.gov/druginfo/meds/a601040.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "checklist",
      "prop": "notebook",
      "motif": "clot",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "bleeding",
      "organs": [
        "heart"
      ],
      "cautions": [],
      "intent": "Checking a follow-up list after a vascular event.",
      "responseNotes": [
        "Reduces platelet clot formation",
        "Can lower recurrent vascular-event risk"
      ],
      "riskNotes": [
        "Serious bleeding can occur",
        "Effect may be reduced in poor CYP2C19 metabolizers"
      ],
      "beats": [
        "Reduces platelet clot formation",
        "Serious bleeding can occur"
      ],
      "asides": [
        "The checklist follows recovery into ordinary days.",
        "Effect may be reduced in poor CYP2C19 metabolizers"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "ticagrelor",
    "name": "Ticagrelor",
    "aliases": [
      "Brilinta"
    ],
    "category": "Medications",
    "className": "antiplatelet",
    "useContext": "Reducing heart attack, stroke, and clot risk in selected high-risk patients.",
    "mechanism": "Reversible P2Y12 platelet-receptor inhibitor.",
    "effects": [
      "Reduces platelet clot formation",
      "Can lower cardiovascular-event risk"
    ],
    "risks": [
      "Serious or life-threatening bleeding can occur",
      "Shortness of breath can occur"
    ],
    "interactionNote": "Strong CYP3A inhibitors/inducers and anticoagulants require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ticagrelor",
        "url": "https://medlineplus.gov/druginfo/meds/a611050.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "clipboard",
      "motif": "clot",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "bleeding",
      "organs": [
        "heart"
      ],
      "cautions": [],
      "intent": "Writing questions about clot prevention after a heart event.",
      "responseNotes": [
        "Reduces platelet clot formation",
        "Can lower cardiovascular-event risk"
      ],
      "riskNotes": [
        "Serious or life-threatening bleeding can occur",
        "Shortness of breath can occur"
      ],
      "beats": [
        "Reduces platelet clot formation",
        "Serious or life-threatening bleeding can occur"
      ],
      "asides": [
        "The questions stay with the care record.",
        "Shortness of breath can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "prasugrel",
    "name": "Prasugrel",
    "aliases": [
      "Effient"
    ],
    "category": "Medications",
    "className": "antiplatelet",
    "useContext": "Preventing cardiovascular complications after selected acute coronary events.",
    "mechanism": "P2Y12 antiplatelet that reduces platelet aggregation.",
    "effects": [
      "Reduces platelet clot formation",
      "Can lower recurrent heart-event risk"
    ],
    "risks": [
      "Serious or fatal bleeding can occur",
      "Generally avoided after prior stroke or TIA"
    ],
    "interactionNote": "Anticoagulants and NSAIDs raise bleeding risk; tell clinicians before procedures.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Prasugrel",
        "url": "https://medlineplus.gov/druginfo/meds/a609027.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "clot",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "bleeding",
      "organs": [
        "heart"
      ],
      "cautions": [],
      "intent": "Planning follow-up after an acute coronary event.",
      "responseNotes": [
        "Reduces platelet clot formation",
        "Can lower recurrent heart-event risk"
      ],
      "riskNotes": [
        "Serious or fatal bleeding can occur",
        "Generally avoided after prior stroke or TIA"
      ],
      "beats": [
        "Reduces platelet clot formation",
        "Serious or fatal bleeding can occur"
      ],
      "asides": [
        "The calendar keeps the next review visible.",
        "Generally avoided after prior stroke or TIA"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "warfarin",
    "name": "Warfarin",
    "aliases": [
      "Coumadin",
      "Jantoven"
    ],
    "category": "Medications",
    "className": "anticoagulant",
    "useContext": "Preventing or treating blood clots and complications of selected heart conditions.",
    "mechanism": "Vitamin K antagonist that decreases blood-clotting capacity.",
    "effects": [
      "Prevents and treats blood clots",
      "Can reduce embolic stroke risk"
    ],
    "risks": [
      "Serious or fatal bleeding can occur",
      "Skin/tissue necrosis is a rare serious risk"
    ],
    "interactionNote": "Many medicines, supplements, foods, and alcohol can change anticoagulant effect.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Warfarin",
        "url": "https://medlineplus.gov/druginfo/meds/a682277.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "clot",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "bleeding",
      "organs": [],
      "cautions": [],
      "intent": "Recording meals during monitored anticoagulant care.",
      "responseNotes": [
        "Prevents and treats blood clots",
        "Can reduce embolic stroke risk"
      ],
      "riskNotes": [
        "Serious or fatal bleeding can occur",
        "Skin/tissue necrosis is a rare serious risk"
      ],
      "beats": [
        "Prevents and treats blood clots",
        "Serious or fatal bleeding can occur"
      ],
      "asides": [
        "The meal record belongs beside the treatment record.",
        "Skin/tissue necrosis is a rare serious risk"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "apixaban",
    "name": "Apixaban",
    "aliases": [
      "Eliquis"
    ],
    "category": "Medications",
    "className": "anticoagulant",
    "useContext": "Preventing stroke in atrial fibrillation and treating or preventing venous clots.",
    "mechanism": "Direct factor Xa inhibitor that limits clot formation.",
    "effects": [
      "Prevents and treats blood clots",
      "Can reduce embolic stroke risk"
    ],
    "risks": [
      "Serious bleeding can occur",
      "Stopping can raise clot or stroke risk"
    ],
    "interactionNote": "Strong CYP3A4/P-gp modifiers and other bleeding-risk drugs require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Apixaban",
        "url": "https://medlineplus.gov/druginfo/meds/a613032.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "clot",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "bleeding",
      "organs": [],
      "cautions": [],
      "intent": "Organizing care cards during atrial-fibrillation stroke prevention.",
      "responseNotes": [
        "Prevents and treats blood clots",
        "Can reduce embolic stroke risk"
      ],
      "riskNotes": [
        "Serious bleeding can occur",
        "Stopping can raise clot or stroke risk"
      ],
      "beats": [
        "Prevents and treats blood clots",
        "Serious bleeding can occur"
      ],
      "asides": [
        "The cards keep a long-term plan together.",
        "Stopping can raise clot or stroke risk"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "rivaroxaban",
    "name": "Rivaroxaban",
    "aliases": [
      "Xarelto"
    ],
    "category": "Medications",
    "className": "anticoagulant",
    "useContext": "Preventing and treating venous clots and reducing selected cardiovascular risks.",
    "mechanism": "Direct factor Xa inhibitor that limits clot formation.",
    "effects": [
      "Prevents and treats blood clots",
      "Can reduce selected vascular-event risks"
    ],
    "risks": [
      "Serious bleeding can occur",
      "Stopping can raise clot or stroke risk"
    ],
    "interactionNote": "Strong CYP3A4/P-gp modifiers and other bleeding-risk drugs require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Rivaroxaban",
        "url": "https://medlineplus.gov/druginfo/meds/a611049.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "reading",
      "prop": "book",
      "motif": "clot",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "bleeding",
      "organs": [],
      "cautions": [],
      "intent": "Reading a care booklet during treatment for a venous clot.",
      "responseNotes": [
        "Prevents and treats blood clots",
        "Can reduce selected vascular-event risks"
      ],
      "riskNotes": [
        "Serious bleeding can occur",
        "Stopping can raise clot or stroke risk"
      ],
      "beats": [
        "Prevents and treats blood clots",
        "Serious bleeding can occur"
      ],
      "asides": [
        "The booklet travels home with the care plan.",
        "Stopping can raise clot or stroke risk"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "dabigatran",
    "name": "Dabigatran",
    "aliases": [
      "Pradaxa"
    ],
    "category": "Medications",
    "className": "anticoagulant",
    "useContext": "Preventing stroke in atrial fibrillation and preventing or treating venous clots.",
    "mechanism": "Direct thrombin inhibitor that prevents fibrin clot formation.",
    "effects": [
      "Prevents and treats blood clots",
      "Can reduce embolic stroke risk"
    ],
    "risks": [
      "Serious bleeding can occur",
      "Stopping can raise clot or stroke risk"
    ],
    "interactionNote": "P-gp modifiers and medicines that raise bleeding risk require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Dabigatran",
        "url": "https://medlineplus.gov/druginfo/meds/a610024.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "typing",
      "prop": "phone",
      "motif": "clot",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "bleeding",
      "organs": [],
      "cautions": [],
      "intent": "Saving follow-up reminders during atrial-fibrillation care.",
      "responseNotes": [
        "Prevents and treats blood clots",
        "Can reduce embolic stroke risk"
      ],
      "riskNotes": [
        "Serious bleeding can occur",
        "Stopping can raise clot or stroke risk"
      ],
      "beats": [
        "Prevents and treats blood clots",
        "Serious bleeding can occur"
      ],
      "asides": [
        "A reminder makes room for the next review.",
        "Stopping can raise clot or stroke risk"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "enoxaparin",
    "name": "Enoxaparin",
    "aliases": [
      "Lovenox"
    ],
    "category": "Medications",
    "className": "lmwh",
    "useContext": "Clinician-managed prevention and treatment of venous blood clots and selected acute coronary complications.",
    "mechanism": "Low-molecular-weight heparin that inhibits clotting factors.",
    "effects": [
      "Prevents and treats blood clots",
      "Can reduce clot complications"
    ],
    "risks": [
      "Serious bleeding can occur",
      "Spinal or epidural hematoma can cause paralysis"
    ],
    "interactionNote": "Other anticoagulants, antiplatelets, NSAIDs, and neuraxial procedures raise bleeding concerns.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Enoxaparin Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a601210.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "clot",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "bleeding",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing a clinician's plan for venous-clot prevention.",
      "responseNotes": [
        "Prevents and treats blood clots",
        "Can reduce clot complications"
      ],
      "riskNotes": [
        "Serious bleeding can occur",
        "Spinal or epidural hematoma can cause paralysis"
      ],
      "beats": [
        "Prevents and treats blood clots",
        "Serious bleeding can occur"
      ],
      "asides": [
        "This scene follows clinician-managed clot care.",
        "Spinal or epidural hematoma can cause paralysis"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "metformin",
    "name": "Metformin",
    "aliases": [
      "Glucophage"
    ],
    "category": "Medications",
    "className": "biguanide",
    "useContext": "Treatment of type 2 diabetes as part of an individualized care plan.",
    "mechanism": "Biguanide that reduces liver glucose production and improves insulin response.",
    "effects": [
      "Lowers blood glucose",
      "Can support diabetes control"
    ],
    "risks": [
      "Rare lactic acidosis can be life-threatening",
      "Digestive upset is common"
    ],
    "interactionNote": "Alcohol and medicines affecting kidney function or contrast procedures require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Metformin",
        "url": "https://medlineplus.gov/druginfo/meds/a696005.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "glucose",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "metabolic",
      "organs": [
        "liver",
        "gut"
      ],
      "cautions": [],
      "intent": "Sitting down to a meal during type 2 diabetes treatment.",
      "responseNotes": [
        "Lowers blood glucose",
        "Can support diabetes control"
      ],
      "riskNotes": [
        "Rare lactic acidosis can be life-threatening",
        "Digestive upset is common"
      ],
      "beats": [
        "Lowers blood glucose",
        "Rare lactic acidosis can be life-threatening"
      ],
      "asides": [
        "The meal is part of an ordinary diabetes-care day.",
        "Digestive upset is common"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "glipizide",
    "name": "Glipizide",
    "aliases": [
      "Glucotrol"
    ],
    "category": "Medications",
    "className": "sulfonylurea",
    "useContext": "Treatment of type 2 diabetes alongside diet and physical activity.",
    "mechanism": "Sulfonylurea that stimulates pancreatic insulin release.",
    "effects": [
      "Lowers blood glucose",
      "Can support diabetes control"
    ],
    "risks": [
      "Low blood sugar can be severe",
      "Weight gain can occur"
    ],
    "interactionNote": "Other glucose-lowering medicines and alcohol can increase hypoglycemia risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Glipizide",
        "url": "https://medlineplus.gov/druginfo/meds/a684060.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "glucose-log",
      "prop": "notebook",
      "motif": "glucose",
      "mechanismStyle": "activate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "glucose",
      "organs": [
        "hormones"
      ],
      "cautions": [],
      "intent": "Updating a home glucose log during type 2 diabetes care.",
      "responseNotes": [
        "Lowers blood glucose",
        "Can support diabetes control"
      ],
      "riskNotes": [
        "Low blood sugar can be severe",
        "Weight gain can occur"
      ],
      "beats": [
        "Lowers blood glucose",
        "Low blood sugar can be severe"
      ],
      "asides": [
        "The notebook keeps readings together over time.",
        "Weight gain can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "glimepiride",
    "name": "Glimepiride",
    "aliases": [
      "Amaryl"
    ],
    "category": "Medications",
    "className": "sulfonylurea",
    "useContext": "Treatment of type 2 diabetes alongside diet and physical activity.",
    "mechanism": "Sulfonylurea that stimulates pancreatic insulin release.",
    "effects": [
      "Lowers blood glucose",
      "Can support diabetes control"
    ],
    "risks": [
      "Low blood sugar can be severe",
      "Weight gain can occur"
    ],
    "interactionNote": "Other glucose-lowering medicines and alcohol can increase hypoglycemia risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Glimepiride",
        "url": "https://medlineplus.gov/druginfo/meds/a696016.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "glucose",
      "mechanismStyle": "activate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "glucose",
      "organs": [
        "hormones"
      ],
      "cautions": [],
      "intent": "Planning a diabetes follow-up with a home calendar.",
      "responseNotes": [
        "Lowers blood glucose",
        "Can support diabetes control"
      ],
      "riskNotes": [
        "Low blood sugar can be severe",
        "Weight gain can occur"
      ],
      "beats": [
        "Lowers blood glucose",
        "Low blood sugar can be severe"
      ],
      "asides": [
        "The calendar tracks the care routine beyond today.",
        "Weight gain can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "glyburide",
    "name": "Glyburide",
    "aliases": [
      "Diabeta",
      "Micronase"
    ],
    "category": "Medications",
    "className": "sulfonylurea",
    "useContext": "Treatment of type 2 diabetes alongside diet and physical activity.",
    "mechanism": "Sulfonylurea that stimulates pancreatic insulin release.",
    "effects": [
      "Lowers blood glucose",
      "Can support diabetes control"
    ],
    "risks": [
      "Low blood sugar can be prolonged or severe",
      "Weight gain can occur"
    ],
    "interactionNote": "Other glucose-lowering medicines and alcohol can increase hypoglycemia risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Glyburide",
        "url": "https://medlineplus.gov/druginfo/meds/a684058.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "glucose",
      "mechanismStyle": "activate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "glucose",
      "organs": [
        "hormones"
      ],
      "cautions": [],
      "intent": "Checking a daily-care list during type 2 diabetes treatment.",
      "responseNotes": [
        "Lowers blood glucose",
        "Can support diabetes control"
      ],
      "riskNotes": [
        "Low blood sugar can be prolonged or severe",
        "Weight gain can occur"
      ],
      "beats": [
        "Lowers blood glucose",
        "Low blood sugar can be prolonged or severe"
      ],
      "asides": [
        "The list gives each ordinary care task a place.",
        "Weight gain can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "pioglitazone",
    "name": "Pioglitazone",
    "aliases": [
      "Actos"
    ],
    "category": "Medications",
    "className": "thiazolidinedione",
    "useContext": "Treatment of type 2 diabetes in selected patients.",
    "mechanism": "Thiazolidinedione that increases tissue sensitivity to insulin.",
    "effects": [
      "Improves insulin sensitivity",
      "Lowers blood glucose"
    ],
    "risks": [
      "Can cause or worsen heart failure",
      "Edema, fractures, or bladder cancer risk concerns"
    ],
    "interactionNote": "Insulin can increase fluid-retention and heart-failure risk; review diabetes medicines.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Pioglitazone",
        "url": "https://medlineplus.gov/druginfo/meds/a699016.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "reading",
      "prop": "care-card",
      "motif": "glucose",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "fluid",
      "organs": [
        "muscle"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Reading a treatment card during a diabetes-care review.",
      "responseNotes": [
        "Improves insulin sensitivity",
        "Lowers blood glucose"
      ],
      "riskNotes": [
        "Can cause or worsen heart failure",
        "Edema, fractures, or bladder cancer risk concerns"
      ],
      "beats": [
        "Improves insulin sensitivity",
        "Can cause or worsen heart failure"
      ],
      "asides": [
        "The review includes benefits and fluid-retention risks.",
        "Edema, fractures, or bladder cancer risk concerns"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "sitagliptin",
    "name": "Sitagliptin",
    "aliases": [
      "Januvia"
    ],
    "category": "Medications",
    "className": "dpp4 inhibitor",
    "useContext": "Treatment of type 2 diabetes.",
    "mechanism": "DPP-4 inhibitor that increases incretin activity and glucose-dependent insulin release.",
    "effects": [
      "Lowers blood glucose",
      "Can support diabetes control"
    ],
    "risks": [
      "Pancreatitis and severe joint pain are reported",
      "Heart failure symptoms may worsen"
    ],
    "interactionNote": "Insulin or sulfonylureas can increase low-blood-sugar risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Sitagliptin",
        "url": "https://medlineplus.gov/druginfo/meds/a606023.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "clipboard",
      "motif": "glucose",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [
        "hormones"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Recording meal patterns for a type 2 diabetes follow-up.",
      "responseNotes": [
        "Lowers blood glucose",
        "Can support diabetes control"
      ],
      "riskNotes": [
        "Pancreatitis and severe joint pain are reported",
        "Heart failure symptoms may worsen"
      ],
      "beats": [
        "Lowers blood glucose",
        "Pancreatitis and severe joint pain are reported"
      ],
      "asides": [
        "The clipboard helps connect meals and care discussions.",
        "Heart failure symptoms may worsen"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "linagliptin",
    "name": "Linagliptin",
    "aliases": [
      "Tradjenta"
    ],
    "category": "Medications",
    "className": "dpp4 inhibitor",
    "useContext": "Treatment of type 2 diabetes.",
    "mechanism": "DPP-4 inhibitor that increases incretin activity and glucose-dependent insulin release.",
    "effects": [
      "Lowers blood glucose",
      "Can support diabetes control"
    ],
    "risks": [
      "Pancreatitis and severe joint pain are reported",
      "Allergic or blistering skin reactions can occur"
    ],
    "interactionNote": "Insulin or sulfonylureas can increase low-blood-sugar risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Linagliptin",
        "url": "https://medlineplus.gov/druginfo/meds/a611036.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "typing",
      "prop": "phone",
      "motif": "glucose",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "skin",
      "organs": [
        "hormones"
      ],
      "cautions": [
        "skin"
      ],
      "intent": "Updating a diabetes-care reminder on a phone.",
      "responseNotes": [
        "Lowers blood glucose",
        "Can support diabetes control"
      ],
      "riskNotes": [
        "Pancreatitis and severe joint pain are reported",
        "Allergic or blistering skin reactions can occur"
      ],
      "beats": [
        "Lowers blood glucose",
        "Pancreatitis and severe joint pain are reported"
      ],
      "asides": [
        "The phone holds a small part of the longer care plan.",
        "Allergic or blistering skin reactions can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "saxagliptin",
    "name": "Saxagliptin",
    "aliases": [
      "Onglyza"
    ],
    "category": "Medications",
    "className": "dpp4 inhibitor",
    "useContext": "Treatment of type 2 diabetes.",
    "mechanism": "DPP-4 inhibitor that increases incretin activity and insulin release after meals.",
    "effects": [
      "Lowers blood glucose",
      "Can support diabetes control"
    ],
    "risks": [
      "Heart failure risk is a labeled concern",
      "Pancreatitis and severe joint pain are reported"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors or inducers affect exposure; insulin increases hypoglycemia risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Saxagliptin",
        "url": "https://medlineplus.gov/druginfo/meds/a610003.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "notebook",
      "motif": "glucose",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "fluid",
      "organs": [
        "hormones"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Writing questions during a type 2 diabetes treatment review.",
      "responseNotes": [
        "Lowers blood glucose",
        "Can support diabetes control"
      ],
      "riskNotes": [
        "Heart failure risk is a labeled concern",
        "Pancreatitis and severe joint pain are reported"
      ],
      "beats": [
        "Lowers blood glucose",
        "Heart failure risk is a labeled concern"
      ],
      "asides": [
        "The next question has a place on the page.",
        "Pancreatitis and severe joint pain are reported"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "empagliflozin",
    "name": "Empagliflozin",
    "aliases": [
      "Jardiance"
    ],
    "category": "Medications",
    "className": "sglt2 inhibitor",
    "useContext": "Type 2 diabetes, heart failure, and chronic kidney disease care in selected adults.",
    "mechanism": "SGLT2 inhibitor that increases urinary glucose excretion.",
    "effects": [
      "Lowers blood glucose",
      "Can reduce heart and kidney risks"
    ],
    "risks": [
      "Ketoacidosis can occur, sometimes with modest glucose",
      "Dehydration and genital infections can occur"
    ],
    "interactionNote": "Insulin/secretagogues raise hypoglycemia risk; diuretics may worsen volume depletion.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Empagliflozin",
        "url": "https://medlineplus.gov/druginfo/meds/a614043.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "reading",
      "prop": "book",
      "motif": "glucose",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "metabolic",
      "organs": [
        "kidneys"
      ],
      "cautions": [],
      "intent": "Reading a diabetes-care booklet before the day's meal.",
      "responseNotes": [
        "Lowers blood glucose",
        "Can reduce heart and kidney risks"
      ],
      "riskNotes": [
        "Ketoacidosis can occur, sometimes with modest glucose",
        "Dehydration and genital infections can occur"
      ],
      "beats": [
        "Lowers blood glucose",
        "Ketoacidosis can occur, sometimes with modest glucose"
      ],
      "asides": [
        "The booklet puts the treatment in everyday context.",
        "Dehydration and genital infections can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "dapagliflozin",
    "name": "Dapagliflozin",
    "aliases": [
      "Farxiga"
    ],
    "category": "Medications",
    "className": "sglt2 inhibitor",
    "useContext": "Type 2 diabetes, heart failure, or chronic kidney disease care in selected adults.",
    "mechanism": "SGLT2 inhibitor that increases urinary glucose excretion.",
    "effects": [
      "Lowers blood glucose",
      "Can reduce heart and kidney risks"
    ],
    "risks": [
      "Ketoacidosis can occur, sometimes with modest glucose",
      "Dehydration and genital infections can occur"
    ],
    "interactionNote": "Insulin/secretagogues raise hypoglycemia risk; diuretics may worsen volume depletion.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Dapagliflozin",
        "url": "https://medlineplus.gov/druginfo/meds/a614015.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "kidney",
      "mechanismStyle": "protect",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "metabolic",
      "organs": [
        "kidneys"
      ],
      "cautions": [],
      "intent": "Organizing follow-up papers during chronic kidney disease care.",
      "responseNotes": [
        "Kidney and cardiovascular risks can decrease",
        "SGLT2 inhibition increases urinary glucose excretion"
      ],
      "riskNotes": [
        "Ketoacidosis can occur, sometimes with modest glucose",
        "Dehydration and genital infections can occur"
      ],
      "beats": [
        "Kidney and cardiovascular risks can decrease",
        "Ketoacidosis can occur, sometimes with modest glucose"
      ],
      "asides": [
        "The papers track care across several visits.",
        "Dehydration and genital infections can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "canagliflozin",
    "name": "Canagliflozin",
    "aliases": [
      "Invokana"
    ],
    "category": "Medications",
    "className": "sglt2 inhibitor",
    "useContext": "Type 2 diabetes and kidney-risk care in selected adults.",
    "mechanism": "SGLT2 inhibitor that increases urinary glucose excretion.",
    "effects": [
      "Lowers blood glucose",
      "Can reduce selected cardiovascular and kidney risks"
    ],
    "risks": [
      "Ketoacidosis can occur, sometimes with modest glucose",
      "Dehydration, genital infection, and fracture risks occur"
    ],
    "interactionNote": "Insulin/secretagogues raise hypoglycemia risk; diuretics may worsen volume depletion.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Canagliflozin",
        "url": "https://medlineplus.gov/druginfo/meds/a613033.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "glucose",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "infection",
      "organs": [
        "kidneys"
      ],
      "cautions": [],
      "intent": "Recording questions about diabetes and kidney-risk treatment.",
      "responseNotes": [
        "Lowers blood glucose",
        "Can reduce selected cardiovascular and kidney risks"
      ],
      "riskNotes": [
        "Ketoacidosis can occur, sometimes with modest glucose",
        "Dehydration, genital infection, and fracture risks occur"
      ],
      "beats": [
        "Lowers blood glucose",
        "Ketoacidosis can occur, sometimes with modest glucose"
      ],
      "asides": [
        "The notebook leaves room for changes between visits.",
        "Dehydration, genital infection, and fracture risks occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "semaglutide",
    "name": "Semaglutide",
    "aliases": [
      "Ozempic",
      "Rybelsus",
      "Wegovy"
    ],
    "category": "Medications",
    "className": "GLP-1 receptor agonist",
    "useContext": "Semaglutide products are used for type 2 diabetes and product-specific cardiovascular-risk reduction or chronic weight management. Wegovy weight-management products include tablets and injections; eligibility depends on the product. Personal or family history of medullary thyroid carcinoma, or MEN2, is a contraindication.",
    "mechanism": "GLP-1 receptor agonist that increases glucose-dependent insulin release, suppresses glucagon, slows gastric emptying, and can reduce appetite.",
    "effects": [
      "Improves glucose control in type 2 diabetes",
      "Some products support chronic weight management"
    ],
    "risks": [
      "Nausea and other GI effects; pancreatitis can occur",
      "Contraindicated with personal/family MTC or MEN2"
    ],
    "interactionNote": "Risk of hypoglycemia can rise with insulin or insulin secretagogues. Delayed gastric emptying may affect absorption of oral medicines, especially those needing close monitoring.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · oral semaglutide tablets label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=27f15fac-7d98-4114-a2ec-92494a91da98"
      },
      {
        "label": "DailyMed · Wegovy (semaglutide) injection and tablet label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b"
      },
      {
        "label": "MedlinePlus · Semaglutide (oral and injection forms)",
        "url": "https://medlineplus.gov/druginfo/meds/a619057.html"
      },
      {
        "label": "MedlinePlus · Semaglutide injection",
        "url": "https://medlineplus.gov/druginfo/meds/a618008.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "appetite",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Planning a meal within a diabetes or weight-management care plan.",
      "responseNotes": [
        "GLP-1 signaling changes glucose and appetite regulation",
        "The selected scene shows metabolic care over time"
      ],
      "riskNotes": [
        "Nausea and other digestive effects can occur",
        "Severe GI effects and pancreatitis are concerns"
      ],
      "beats": [
        "GLP-1 signaling changes glucose and appetite regulation",
        "Nausea and other digestive effects can occur"
      ],
      "asides": [
        "The plate is part of a longer plan.",
        "Severe GI effects and pancreatitis are concerns"
      ],
      "riskVisual": "gut",
      "exposure": "symbolic"
    }
  },
  {
    "id": "tirzepatide",
    "name": "Tirzepatide",
    "aliases": [
      "Mounjaro",
      "Zepbound"
    ],
    "category": "Medications",
    "className": "Dual GIP and GLP-1 receptor agonist",
    "useContext": "Product-specific prescribing includes type 2 diabetes and chronic weight management; the weight-management label also covers moderate-to-severe obstructive sleep apnea in adults with obesity. These are clinician-managed uses. Personal or family history of medullary thyroid carcinoma, or MEN2, is a contraindication.",
    "mechanism": "Dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor agonist; it activates both receptors involved in glucose regulation and appetite signaling.",
    "effects": [
      "Improves glucose control in type 2 diabetes",
      "Can support weight management in eligible patients"
    ],
    "risks": [
      "Nausea and other GI effects; pancreatitis can occur",
      "Contraindicated with personal/family MTC or MEN2"
    ],
    "interactionNote": "Delayed gastric emptying may change absorption of oral medicines. Hypoglycemia risk increases when combined with insulin or insulin secretagogues; hormonal oral contraceptive exposure may also be reduced during initiation or escalation per label.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · Mounjaro (tirzepatide) injection label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0"
      },
      {
        "label": "DailyMed · Zepbound (tirzepatide) injection label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=487cd7e7-434c-4925-99fa-aa80b1cc776b"
      },
      {
        "label": "MedlinePlus · Tirzepatide injection",
        "url": "https://medlineplus.gov/druginfo/meds/a622044.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Logging meal patterns during a metabolic treatment plan.",
      "responseNotes": [
        "GIP and GLP-1 receptors are activated",
        "Glucose and appetite regulation can change"
      ],
      "riskNotes": [
        "Nausea and other digestive effects can occur",
        "Severe GI effects and pancreatitis are concerns"
      ],
      "beats": [
        "GIP and GLP-1 receptors are activated",
        "Nausea and other digestive effects can occur"
      ],
      "asides": [
        "The meal log gets another entry.",
        "Severe GI effects and pancreatitis are concerns"
      ],
      "riskVisual": "gut",
      "exposure": "symbolic"
    }
  },
  {
    "id": "liraglutide",
    "name": "Liraglutide",
    "aliases": [
      "Victoza",
      "Saxenda"
    ],
    "category": "Medications",
    "className": "GLP-1 receptor agonist",
    "useContext": "Liraglutide products are used for type 2 diabetes or chronic weight management. Some diabetes products also reduce cardiovascular risk in eligible patients; the indication depends on the product. Personal or family history of medullary thyroid carcinoma, or MEN2, is a contraindication.",
    "mechanism": "GLP-1 receptor agonist that increases glucose-dependent insulin release, suppresses glucagon, and slows gastric emptying.",
    "effects": [
      "Improves glucose control in type 2 diabetes",
      "Some products support chronic weight-management care"
    ],
    "risks": [
      "GI effects, pancreatitis, and gallbladder problems",
      "Contraindicated with personal/family MTC or MEN2"
    ],
    "interactionNote": "Delayed gastric emptying can affect absorption of oral medicines. Hypoglycemia risk may rise with insulin or insulin secretagogues; monitor the broader diabetes regimen with a clinician.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · liraglutide injection label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0450d8a2-a88e-4849-9788-ed4f5246f223"
      },
      {
        "label": "DailyMed · Saxenda (liraglutide) weight-management injection label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3946d389-0926-4f77-a708-0acb8153b143"
      },
      {
        "label": "MedlinePlus · Liraglutide injection",
        "url": "https://medlineplus.gov/druginfo/meds/a611003.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "planning",
      "prop": "calendar",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Planning meals during product-specific metabolic care.",
      "responseNotes": [
        "GLP-1 receptors are activated",
        "Glucose-dependent insulin release increases"
      ],
      "riskNotes": [
        "Digestive effects can occur",
        "Pancreatitis and gallbladder disease are concerns"
      ],
      "beats": [
        "GLP-1 receptors are activated",
        "Digestive effects can occur"
      ],
      "asides": [
        "Meal planning still involves dinner.",
        "Pancreatitis and gallbladder disease are concerns"
      ],
      "riskVisual": "gut",
      "exposure": "symbolic"
    }
  },
  {
    "id": "dulaglutide",
    "name": "Dulaglutide",
    "aliases": [
      "Trulicity"
    ],
    "category": "Medications",
    "className": "GLP-1 receptor agonist",
    "useContext": "Clinician-managed type 2 diabetes treatment; its label also supports reducing major cardiovascular events in adults with type 2 diabetes who have established cardiovascular disease or multiple risk factors. Personal or family history of medullary thyroid carcinoma, or MEN2, is a contraindication.",
    "mechanism": "GLP-1 receptor agonist that increases glucose-dependent insulin release, lowers glucagon secretion, and slows gastric emptying.",
    "effects": [
      "Improves glucose control in type 2 diabetes",
      "Reduces cardiovascular risk in labeled diabetes populations"
    ],
    "risks": [
      "GI effects; pancreatitis can occur",
      "Contraindicated with personal/family MTC or MEN2"
    ],
    "interactionNote": "Delayed gastric emptying may change the rate of absorption of oral medicines. Hypoglycemia risk can rise with insulin or insulin secretagogues.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · Trulicity (dulaglutide) injection label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=463050bd-2b1c-40f5-b3c3-0a04bb433309"
      },
      {
        "label": "MedlinePlus · Dulaglutide injection",
        "url": "https://medlineplus.gov/druginfo/meds/a614047.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "glucose-log",
      "prop": "notebook",
      "motif": "glucose",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reviewing a glucose log during ongoing type 2 diabetes care.",
      "responseNotes": [
        "GLP-1 signaling changes glucose regulation",
        "Cardiovascular benefit is population-specific"
      ],
      "riskNotes": [
        "Digestive effects can occur",
        "Severe GI effects and pancreatitis are concerns"
      ],
      "beats": [
        "GLP-1 signaling changes glucose regulation",
        "Digestive effects can occur"
      ],
      "asides": [
        "The glucose log keeps its place at the table.",
        "Severe GI effects and pancreatitis are concerns"
      ],
      "riskVisual": "gut",
      "exposure": "symbolic"
    }
  },
  {
    "id": "exenatide",
    "name": "Exenatide",
    "aliases": [
      "Byetta",
      "Bydureon"
    ],
    "category": "Medications",
    "className": "GLP-1 receptor agonist",
    "useContext": "Adjunct to diet and exercise for type 2 diabetes under clinician care; immediate- and extended-release presentations have distinct labeling.",
    "mechanism": "GLP-1 receptor agonist that increases glucose-dependent insulin secretion, suppresses inappropriately high glucagon, and slows gastric emptying.",
    "effects": [
      "Improves glucose control in type 2 diabetes",
      "Slows stomach emptying and post-meal glucose rise"
    ],
    "risks": [
      "Nausea; pancreatitis and dehydration-related kidney injury",
      "Low blood sugar with insulin or insulin secretagogues"
    ],
    "interactionNote": "Insulin or sulfonylureas can raise hypoglycemia risk; the label also describes a warfarin interaction requiring monitoring. Delayed gastric emptying may affect oral medicines.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · exenatide injection label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e6cb5c8f-e97f-4a6a-95a4-939fd2393949"
      },
      {
        "label": "MedlinePlus · Exenatide injection",
        "url": "https://medlineplus.gov/druginfo/meds/a605034.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal-log",
      "prop": "clipboard",
      "motif": "glucose",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut",
        "kidneys"
      ],
      "intent": "Recording meal-related glucose patterns during diabetes care.",
      "responseNotes": [
        "Post-meal glucose regulation changes",
        "Gastric emptying slows during treatment"
      ],
      "riskNotes": [
        "Nausea and dehydration can occur",
        "Pancreatitis and kidney injury are concerns"
      ],
      "beats": [
        "Post-meal glucose regulation changes",
        "Nausea and dehydration can occur"
      ],
      "asides": [
        "Meals give the numbers context.",
        "Pancreatitis and kidney injury are concerns"
      ],
      "riskVisual": "gut",
      "exposure": "symbolic"
    }
  },
  {
    "id": "lixisenatide",
    "name": "Lixisenatide",
    "aliases": [
      "Adlyxin"
    ],
    "category": "Medications",
    "className": "glp1 agonist",
    "useContext": "Treatment of type 2 diabetes alongside diet and exercise.",
    "mechanism": "GLP-1 receptor agonist that increases glucose-dependent insulin release and slows gastric emptying.",
    "effects": [
      "Lowers blood glucose",
      "Can reduce appetite"
    ],
    "risks": [
      "Pancreatitis and severe allergic reactions can occur",
      "Nausea, vomiting, and diarrhea are common"
    ],
    "interactionNote": "Other glucose-lowering medicines can increase hypoglycemia risk; slows gastric emptying.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lixisenatide Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a617005.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "care-card",
      "motif": "glucose",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [
        "gut",
        "hormones"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Updating a meal record during injectable diabetes treatment.",
      "responseNotes": [
        "Lowers blood glucose",
        "Can reduce appetite"
      ],
      "riskNotes": [
        "Pancreatitis and severe allergic reactions can occur",
        "Nausea, vomiting, and diarrhea are common"
      ],
      "beats": [
        "Lowers blood glucose",
        "Pancreatitis and severe allergic reactions can occur"
      ],
      "asides": [
        "Meal notes keep the treatment connected to daily life.",
        "Nausea, vomiting, and diarrhea are common"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "acarbose",
    "name": "Acarbose",
    "aliases": [
      "Precose"
    ],
    "category": "Medications",
    "className": "alpha glucosidase inhibitor",
    "useContext": "Treatment of type 2 diabetes to reduce after-meal glucose rises.",
    "mechanism": "Alpha-glucosidase inhibitor that slows carbohydrate digestion in the intestine.",
    "effects": [
      "Reduces post-meal glucose rise",
      "Can support diabetes control"
    ],
    "risks": [
      "Gas, diarrhea, and abdominal pain are common",
      "Liver injury is a rare concern"
    ],
    "interactionNote": "Digestive enzymes or intestinal adsorbents can reduce effect; insulin can increase hypoglycemia risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Acarbose",
        "url": "https://medlineplus.gov/druginfo/meds/a696015.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "gut",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "cramp",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Eating an ordinary meal during treatment for after-meal glucose rises.",
      "responseNotes": [
        "Reduces post-meal glucose rise",
        "Can support diabetes control"
      ],
      "riskNotes": [
        "Gas, diarrhea, and abdominal pain are common",
        "Liver injury is a rare concern"
      ],
      "beats": [
        "Reduces post-meal glucose rise",
        "Gas, diarrhea, and abdominal pain are common"
      ],
      "asides": [
        "The plate is ordinary; the digestion diagram is schematic.",
        "Liver injury is a rare concern"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "insulin-glargine",
    "name": "Insulin glargine",
    "aliases": [
      "Lantus",
      "Basaglar"
    ],
    "category": "Medications",
    "className": "insulin long acting",
    "useContext": "Long-acting insulin replacement for type 1 or type 2 diabetes.",
    "mechanism": "Long-acting insulin that replaces basal insulin and reduces liver glucose output.",
    "effects": [
      "Lowers blood glucose",
      "Provides long-acting insulin coverage"
    ],
    "risks": [
      "Low blood sugar can be severe",
      "Injection-site or allergic reactions can occur"
    ],
    "interactionNote": "Other glucose-lowering medicines, alcohol, and beta blockers can affect glucose symptoms or levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Insulin Glargine (rDNA origin) Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a600027.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "glucose-log",
      "prop": "notebook",
      "motif": "glucose",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "glucose",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing a glucose record during a basal-insulin care routine.",
      "responseNotes": [
        "Lowers blood glucose",
        "Provides long-acting insulin coverage"
      ],
      "riskNotes": [
        "Low blood sugar can be severe",
        "Injection-site or allergic reactions can occur"
      ],
      "beats": [
        "Lowers blood glucose",
        "Low blood sugar can be severe"
      ],
      "asides": [
        "The record follows glucose across the day.",
        "Injection-site or allergic reactions can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "insulin-lispro",
    "name": "Insulin lispro",
    "aliases": [
      "Humalog"
    ],
    "category": "Medications",
    "className": "insulin rapid acting",
    "useContext": "Short-acting insulin replacement for type 1 or type 2 diabetes.",
    "mechanism": "Rapid-acting insulin that supports glucose uptake and reduces liver glucose output.",
    "effects": [
      "Lowers blood glucose",
      "Replaces meal-related insulin"
    ],
    "risks": [
      "Low blood sugar can be severe",
      "Injection-site reactions or weight gain can occur"
    ],
    "interactionNote": "Other glucose-lowering medicines, alcohol, and beta blockers can affect glucose symptoms or levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Insulin Lispro Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a697021.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "glucose",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "glucose",
      "organs": [],
      "cautions": [],
      "intent": "Sitting down to a meal during prescribed insulin care.",
      "responseNotes": [
        "Lowers blood glucose",
        "Replaces meal-related insulin"
      ],
      "riskNotes": [
        "Low blood sugar can be severe",
        "Injection-site reactions or weight gain can occur"
      ],
      "beats": [
        "Lowers blood glucose",
        "Low blood sugar can be severe"
      ],
      "asides": [
        "The scene shows the meal context without dosing instructions.",
        "Injection-site reactions or weight gain can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "insulin-aspart",
    "name": "Insulin aspart",
    "aliases": [
      "NovoLog"
    ],
    "category": "Medications",
    "className": "insulin rapid acting",
    "useContext": "Short-acting insulin replacement for type 1 or type 2 diabetes.",
    "mechanism": "Rapid-acting insulin that supports glucose uptake and reduces liver glucose output.",
    "effects": [
      "Lowers blood glucose",
      "Replaces meal-related insulin"
    ],
    "risks": [
      "Low blood sugar can be severe",
      "Injection-site reactions or weight gain can occur"
    ],
    "interactionNote": "Other glucose-lowering medicines, alcohol, and beta blockers can affect glucose symptoms or levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Insulin Aspart (rDNA Origin) Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a605013.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "glucose-log",
      "prop": "clipboard",
      "motif": "glucose",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "glucose",
      "organs": [],
      "cautions": [],
      "intent": "Updating a meal-related glucose record during insulin treatment.",
      "responseNotes": [
        "Lowers blood glucose",
        "Replaces meal-related insulin"
      ],
      "riskNotes": [
        "Low blood sugar can be severe",
        "Injection-site reactions or weight gain can occur"
      ],
      "beats": [
        "Lowers blood glucose",
        "Low blood sugar can be severe"
      ],
      "asides": [
        "The clipboard connects the meal and its care record.",
        "Injection-site reactions or weight gain can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "levothyroxine",
    "name": "Levothyroxine",
    "aliases": [
      "Synthroid",
      "Levoxyl"
    ],
    "category": "Medications",
    "className": "thyroid hormone",
    "useContext": "Hormone replacement for hypothyroidism and selected thyroid-cancer care.",
    "mechanism": "Synthetic T4 thyroid hormone that replaces a hormone the body normally makes.",
    "effects": [
      "Restores thyroid hormone levels",
      "Can relieve hypothyroid symptoms"
    ],
    "risks": [
      "Excess exposure can cause heart-rhythm problems",
      "Not for weight loss in normal thyroid function"
    ],
    "interactionNote": "Calcium, iron, antacids, and some foods can reduce absorption; warfarin effect can change.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Levothyroxine",
        "url": "https://medlineplus.gov/druginfo/meds/a682461.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "hormone",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "over-time",
      "riskVisual": "pulse",
      "organs": [
        "hormones"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Organizing follow-up cards during thyroid-hormone replacement.",
      "responseNotes": [
        "Restores thyroid hormone levels",
        "Can relieve hypothyroid symptoms"
      ],
      "riskNotes": [
        "Excess exposure can cause heart-rhythm problems",
        "Not for weight loss in normal thyroid function"
      ],
      "beats": [
        "Restores thyroid hormone levels",
        "Excess exposure can cause heart-rhythm problems"
      ],
      "asides": [
        "The routine continues across ordinary mornings.",
        "Not for weight loss in normal thyroid function"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "liothyronine",
    "name": "Liothyronine",
    "aliases": [
      "Cytomel"
    ],
    "category": "Medications",
    "className": "thyroid hormone",
    "useContext": "Treatment of hypothyroidism and selected thyroid diagnostic or goiter care.",
    "mechanism": "Synthetic T3 thyroid hormone that supplies active thyroid hormone.",
    "effects": [
      "Restores thyroid hormone levels",
      "Can relieve hypothyroid symptoms"
    ],
    "risks": [
      "Excess exposure can cause serious cardiac effects",
      "Not for weight loss in normal thyroid function"
    ],
    "interactionNote": "Warfarin effect and blood glucose may change; stimulants can increase cardiac risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Liothyronine",
        "url": "https://medlineplus.gov/druginfo/meds/a682462.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "hormone",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "pulse",
      "organs": [
        "hormones"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Planning a thyroid-care follow-up on a home calendar.",
      "responseNotes": [
        "Restores thyroid hormone levels",
        "Can relieve hypothyroid symptoms"
      ],
      "riskNotes": [
        "Excess exposure can cause serious cardiac effects",
        "Not for weight loss in normal thyroid function"
      ],
      "beats": [
        "Restores thyroid hormone levels",
        "Excess exposure can cause serious cardiac effects"
      ],
      "asides": [
        "The calendar tracks a monitored replacement treatment.",
        "Not for weight loss in normal thyroid function"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "methimazole",
    "name": "Methimazole",
    "aliases": [
      "Tapazole"
    ],
    "category": "Medications",
    "className": "antithyroid",
    "useContext": "Treatment of hyperthyroidism and preparation for selected thyroid procedures.",
    "mechanism": "Thionamide that reduces thyroid hormone synthesis.",
    "effects": [
      "Lowers excess thyroid hormone production",
      "Can control hyperthyroidism"
    ],
    "risks": [
      "Rare agranulocytosis can cause serious infection",
      "Liver injury and fetal risk can occur"
    ],
    "interactionNote": "Warfarin and other thyroid medicines may need monitoring as thyroid status changes.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Methimazole",
        "url": "https://medlineplus.gov/druginfo/meds/a682464.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "infection",
      "organs": [
        "hormones"
      ],
      "cautions": [],
      "intent": "Checking a follow-up list during hyperthyroidism treatment.",
      "responseNotes": [
        "Lowers excess thyroid hormone production",
        "Can control hyperthyroidism"
      ],
      "riskNotes": [
        "Rare agranulocytosis can cause serious infection",
        "Liver injury and fetal risk can occur"
      ],
      "beats": [
        "Lowers excess thyroid hormone production",
        "Rare agranulocytosis can cause serious infection"
      ],
      "asides": [
        "The list includes changes to discuss at follow-up.",
        "Liver injury and fetal risk can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "propylthiouracil",
    "name": "Propylthiouracil",
    "aliases": [
      "PTU"
    ],
    "category": "Medications",
    "className": "antithyroid",
    "useContext": "Treatment of hyperthyroidism in selected adults and children.",
    "mechanism": "Thionamide that reduces thyroid hormone production and conversion.",
    "effects": [
      "Lowers excess thyroid hormone",
      "Can control hyperthyroidism"
    ],
    "risks": [
      "Severe, sometimes fatal liver injury can occur",
      "Low white-cell counts can cause serious infection"
    ],
    "interactionNote": "Warfarin effect can change as thyroid function changes; specialist monitoring is important.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Propylthiouracil",
        "url": "https://medlineplus.gov/druginfo/meds/a682465.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [
        "hormones"
      ],
      "cautions": [
        "liver"
      ],
      "intent": "Writing questions during ongoing hyperthyroidism care.",
      "responseNotes": [
        "Lowers excess thyroid hormone",
        "Can control hyperthyroidism"
      ],
      "riskNotes": [
        "Severe, sometimes fatal liver injury can occur",
        "Low white-cell counts can cause serious infection"
      ],
      "beats": [
        "Lowers excess thyroid hormone",
        "Severe, sometimes fatal liver injury can occur"
      ],
      "asides": [
        "The notebook brings the between-visit questions along.",
        "Low white-cell counts can cause serious infection"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "alendronate",
    "name": "Alendronate",
    "aliases": [
      "Fosamax"
    ],
    "category": "Medications",
    "className": "bisphosphonate",
    "useContext": "Prevention or treatment of osteoporosis and treatment of Paget disease.",
    "mechanism": "Bisphosphonate that slows bone breakdown.",
    "effects": [
      "Can increase bone density",
      "Can reduce fracture risk"
    ],
    "risks": [
      "Esophageal irritation or ulcer can occur",
      "Jaw bone injury is a rare serious risk"
    ],
    "interactionNote": "Calcium, antacids, and supplements can reduce absorption; review NSAID use.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Alendronate",
        "url": "https://medlineplus.gov/druginfo/meds/a601011.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "bone",
      "mechanismStyle": "protect",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [
        "bones"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reading during an ordinary day of osteoporosis treatment.",
      "responseNotes": [
        "Can increase bone density",
        "Can reduce fracture risk"
      ],
      "riskNotes": [
        "Esophageal irritation or ulcer can occur",
        "Jaw bone injury is a rare serious risk"
      ],
      "beats": [
        "Can increase bone density",
        "Esophageal irritation or ulcer can occur"
      ],
      "asides": [
        "Bone changes are followed over time.",
        "Jaw bone injury is a rare serious risk"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "risedronate",
    "name": "Risedronate",
    "aliases": [
      "Actonel"
    ],
    "category": "Medications",
    "className": "bisphosphonate",
    "useContext": "Prevention or treatment of osteoporosis and treatment of Paget disease.",
    "mechanism": "Bisphosphonate that slows bone breakdown.",
    "effects": [
      "Can increase bone density",
      "Can reduce fracture risk"
    ],
    "risks": [
      "Esophageal irritation or ulcer can occur",
      "Jaw bone injury is a rare serious risk"
    ],
    "interactionNote": "Calcium, antacids, and supplements can reduce absorption; review NSAID use.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Risedronate",
        "url": "https://medlineplus.gov/druginfo/meds/a601247.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "bone",
      "mechanismStyle": "protect",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "bone",
      "organs": [
        "bones"
      ],
      "cautions": [
        "bones"
      ],
      "intent": "Planning a bone-health follow-up for osteoporosis care.",
      "responseNotes": [
        "Can increase bone density",
        "Can reduce fracture risk"
      ],
      "riskNotes": [
        "Esophageal irritation or ulcer can occur",
        "Jaw bone injury is a rare serious risk"
      ],
      "beats": [
        "Can increase bone density",
        "Esophageal irritation or ulcer can occur"
      ],
      "asides": [
        "The calendar makes room for long-term follow-up.",
        "Jaw bone injury is a rare serious risk"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "zoledronic-acid",
    "name": "Zoledronic acid",
    "aliases": [
      "Reclast",
      "Zometa"
    ],
    "category": "Medications",
    "className": "bisphosphonate",
    "useContext": "Injection treatment or prevention of osteoporosis, Paget disease, and selected cancer-related bone conditions.",
    "mechanism": "Intravenous bisphosphonate that slows bone breakdown.",
    "effects": [
      "Can reduce bone loss and fractures",
      "Can treat Paget disease"
    ],
    "risks": [
      "Kidney injury and low calcium can occur",
      "Jaw bone injury is a rare serious risk"
    ],
    "interactionNote": "Kidney-affecting drugs and calcium-lowering therapies require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Zoledronic Acid Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a605023.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "care-card",
      "prop": "care-card",
      "motif": "bone",
      "mechanismStyle": "protect",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "kidney",
      "organs": [
        "bones"
      ],
      "cautions": [
        "kidneys"
      ],
      "intent": "Reviewing an osteoporosis infusion-care card with a clinician.",
      "responseNotes": [
        "Can reduce bone loss and fractures",
        "Can treat Paget disease"
      ],
      "riskNotes": [
        "Kidney injury and low calcium can occur",
        "Jaw bone injury is a rare serious risk"
      ],
      "beats": [
        "Can reduce bone loss and fractures",
        "Kidney injury and low calcium can occur"
      ],
      "asides": [
        "The card keeps the clinical treatment in context.",
        "Jaw bone injury is a rare serious risk"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "denosumab",
    "name": "Denosumab",
    "aliases": [
      "Prolia",
      "Xgeva"
    ],
    "category": "Medications",
    "className": "rankl inhibitor",
    "useContext": "Product-specific treatment of osteoporosis, bone loss, or cancer-related bone complications.",
    "mechanism": "RANKL inhibitor that reduces bone resorption.",
    "effects": [
      "Can increase bone density",
      "Can reduce fracture or skeletal-event risk"
    ],
    "risks": [
      "Severe low calcium can occur",
      "Stopping can cause rapid bone loss and fractures"
    ],
    "interactionNote": "Other bone-modifying drugs and immunosuppressants require review; product indications differ.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Denosumab Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a610023.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "clipboard",
      "motif": "bone",
      "mechanismStyle": "protect",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "electrolytes",
      "organs": [
        "bones"
      ],
      "cautions": [],
      "intent": "Noting questions about a prescribed osteoporosis injection plan.",
      "responseNotes": [
        "Can increase bone density",
        "Can reduce fracture or skeletal-event risk"
      ],
      "riskNotes": [
        "Severe low calcium can occur",
        "Stopping can cause rapid bone loss and fractures"
      ],
      "beats": [
        "Can increase bone density",
        "Severe low calcium can occur"
      ],
      "asides": [
        "The questions include ongoing follow-up and stopping risks.",
        "Stopping can cause rapid bone loss and fractures"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "raloxifene",
    "name": "Raloxifene",
    "aliases": [
      "Evista"
    ],
    "category": "Medications",
    "className": "serm",
    "useContext": "Prevention or treatment of osteoporosis in selected postmenopausal patients.",
    "mechanism": "Selective estrogen receptor modulator with estrogen-like effects in bone.",
    "effects": [
      "Can reduce vertebral fracture risk",
      "Can improve bone density"
    ],
    "risks": [
      "Blood clots and stroke risk can increase",
      "Hot flashes and leg cramps can occur"
    ],
    "interactionNote": "Estrogens, cholestyramine, and other clot-risk medicines require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Raloxifene",
        "url": "https://medlineplus.gov/druginfo/meds/a698007.html"
      }
    ],
    "scene": {
      "setting": "garden",
      "activity": "reading",
      "task": "reading",
      "prop": "notebook",
      "motif": "bone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "flush",
      "timeCourse": "over-time",
      "riskVisual": "clot",
      "organs": [
        "bones"
      ],
      "cautions": [],
      "intent": "Reading bone-health notes during postmenopausal osteoporosis care.",
      "responseNotes": [
        "Can reduce vertebral fracture risk",
        "Can improve bone density"
      ],
      "riskNotes": [
        "Blood clots and stroke risk can increase",
        "Hot flashes and leg cramps can occur"
      ],
      "beats": [
        "Can reduce vertebral fracture risk",
        "Blood clots and stroke risk can increase"
      ],
      "asides": [
        "The notes follow a longer bone-health plan.",
        "Hot flashes and leg cramps can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "allopurinol",
    "name": "Allopurinol",
    "aliases": [
      "Zyloprim"
    ],
    "category": "Medications",
    "className": "xanthine oxidase inhibitor",
    "useContext": "Long-term uric-acid management for gout and selected related conditions.",
    "mechanism": "Xanthine oxidase inhibitor that reduces uric acid production.",
    "effects": [
      "Lowers uric acid",
      "Can help prevent gout flares over time"
    ],
    "risks": [
      "Severe skin reactions can occur",
      "Liver or blood-cell problems can occur"
    ],
    "interactionNote": "Azathioprine/mercaptopurine levels rise substantially; warfarin and theophylline need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Allopurinol",
        "url": "https://medlineplus.gov/druginfo/meds/a682673.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "urate",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "skin",
      "organs": [],
      "cautions": [
        "skin"
      ],
      "intent": "Keeping a meal record during long-term gout prevention.",
      "responseNotes": [
        "Lowers uric acid",
        "Can help prevent gout flares over time"
      ],
      "riskNotes": [
        "Severe skin reactions can occur",
        "Liver or blood-cell problems can occur"
      ],
      "beats": [
        "Lowers uric acid",
        "Severe skin reactions can occur"
      ],
      "asides": [
        "The urate diagram represents prevention over time.",
        "Liver or blood-cell problems can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "colchicine",
    "name": "Colchicine",
    "aliases": [
      "Colcrys"
    ],
    "category": "Medications",
    "className": "anti gout",
    "useContext": "Treatment or prevention of gout flares and selected familial Mediterranean fever care.",
    "mechanism": "Anti-inflammatory medicine that disrupts microtubule function in inflammatory cells.",
    "effects": [
      "Can reduce gout-flare inflammation",
      "Can help prevent recurrent flares"
    ],
    "risks": [
      "Overdose can be fatal",
      "Muscle injury and blood-cell suppression can occur"
    ],
    "interactionNote": "Strong CYP3A4/P-gp inhibitors can cause dangerous toxicity, especially with kidney/liver disease.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Colchicine",
        "url": "https://medlineplus.gov/druginfo/meds/a682711.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "resting",
      "prop": "towel",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "muscle",
      "organs": [],
      "cautions": [
        "muscle"
      ],
      "intent": "Resting during clinician-managed treatment of a gout flare.",
      "responseNotes": [
        "Can reduce gout-flare inflammation",
        "Can help prevent recurrent flares"
      ],
      "riskNotes": [
        "Overdose can be fatal",
        "Muscle injury and blood-cell suppression can occur"
      ],
      "beats": [
        "Can reduce gout-flare inflammation",
        "Overdose can be fatal"
      ],
      "asides": [
        "The scene follows a painful flare and its treatment.",
        "Muscle injury and blood-cell suppression can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "prednisone",
    "name": "Prednisone",
    "aliases": [
      "Deltasone"
    ],
    "category": "Medications",
    "className": "corticosteroid",
    "useContext": "Treatment of inflammatory, allergic, and immune conditions.",
    "mechanism": "Systemic glucocorticoid that suppresses inflammation and immune activity.",
    "effects": [
      "Can reduce inflammation",
      "Can suppress overactive immune responses"
    ],
    "risks": [
      "Infection risk and blood sugar can rise",
      "Long-term use can weaken bones and adrenal function"
    ],
    "interactionNote": "Vaccines, NSAIDs, diabetes medicines, and anticoagulants require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Prednisone",
        "url": "https://medlineplus.gov/druginfo/meds/a601102.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "infection",
      "organs": [],
      "cautions": [],
      "intent": "Recording symptoms during a prescribed inflammatory-disease course.",
      "responseNotes": [
        "Can reduce inflammation",
        "Can suppress overactive immune responses"
      ],
      "riskNotes": [
        "Infection risk and blood sugar can rise",
        "Long-term use can weaken bones and adrenal function"
      ],
      "beats": [
        "Can reduce inflammation",
        "Infection risk and blood sugar can rise"
      ],
      "asides": [
        "The record keeps day-to-day changes visible.",
        "Long-term use can weaken bones and adrenal function"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "prednisolone",
    "name": "Prednisolone",
    "aliases": [
      "Orapred"
    ],
    "category": "Medications",
    "className": "corticosteroid",
    "useContext": "Systemic treatment of inflammatory, allergic, and immune conditions; source covers oral forms.",
    "mechanism": "Systemic glucocorticoid that suppresses inflammation and immune activity.",
    "effects": [
      "Can reduce inflammation",
      "Can suppress overactive immune responses"
    ],
    "risks": [
      "Infection risk and blood sugar can rise",
      "Long-term use can weaken bones and adrenal function"
    ],
    "interactionNote": "Vaccines, NSAIDs, diabetes medicines, and anticoagulants require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Prednisolone",
        "url": "https://medlineplus.gov/druginfo/meds/a615042.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "notebook",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "glucose",
      "organs": [],
      "cautions": [],
      "intent": "Checking a home-care list during systemic inflammation treatment.",
      "responseNotes": [
        "Can reduce inflammation",
        "Can suppress overactive immune responses"
      ],
      "riskNotes": [
        "Infection risk and blood sugar can rise",
        "Long-term use can weaken bones and adrenal function"
      ],
      "beats": [
        "Can reduce inflammation",
        "Infection risk and blood sugar can rise"
      ],
      "asides": [
        "The list belongs to a clinician-directed course.",
        "Long-term use can weaken bones and adrenal function"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "methylprednisolone",
    "name": "Methylprednisolone",
    "aliases": [
      "Medrol",
      "Solu-Medrol"
    ],
    "category": "Medications",
    "className": "corticosteroid",
    "useContext": "Treatment of inflammatory and immune conditions; this source covers systemic forms.",
    "mechanism": "Systemic glucocorticoid that suppresses inflammation and immune activity.",
    "effects": [
      "Can reduce inflammation",
      "Can suppress overactive immune responses"
    ],
    "risks": [
      "Infection risk and blood sugar can rise",
      "Long-term use can weaken bones and adrenal function"
    ],
    "interactionNote": "Vaccines, NSAIDs, diabetes medicines, and anticoagulants require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Methylprednisolone",
        "url": "https://medlineplus.gov/druginfo/meds/a682795.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "infection",
      "organs": [],
      "cautions": [],
      "intent": "Organizing follow-up cards during treatment of an immune condition.",
      "responseNotes": [
        "Can reduce inflammation",
        "Can suppress overactive immune responses"
      ],
      "riskNotes": [
        "Infection risk and blood sugar can rise",
        "Long-term use can weaken bones and adrenal function"
      ],
      "beats": [
        "Can reduce inflammation",
        "Infection risk and blood sugar can rise"
      ],
      "asides": [
        "The cards keep the wider treatment plan together.",
        "Long-term use can weaken bones and adrenal function"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "dexamethasone",
    "name": "Dexamethasone",
    "aliases": [
      "Decadron"
    ],
    "category": "Medications",
    "className": "corticosteroid",
    "useContext": "Treatment of inflammatory, allergic, and immune conditions and selected cancer-related symptoms.",
    "mechanism": "Potent systemic glucocorticoid that suppresses inflammation and immune activity.",
    "effects": [
      "Can reduce inflammation",
      "Can suppress overactive immune responses"
    ],
    "risks": [
      "Infection risk and blood sugar can rise",
      "Long-term use can weaken bones and adrenal function"
    ],
    "interactionNote": "Vaccines, NSAIDs, diabetes medicines, and anticoagulants require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Dexamethasone",
        "url": "https://medlineplus.gov/druginfo/meds/a682792.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "reading",
      "prop": "book",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "bone",
      "organs": [],
      "cautions": [],
      "intent": "Reading care information during systemic inflammation treatment.",
      "responseNotes": [
        "Can reduce inflammation",
        "Can suppress overactive immune responses"
      ],
      "riskNotes": [
        "Infection risk and blood sugar can rise",
        "Long-term use can weaken bones and adrenal function"
      ],
      "beats": [
        "Can reduce inflammation",
        "Infection risk and blood sugar can rise"
      ],
      "asides": [
        "Longer exposure has risks beyond the immediate symptoms.",
        "Long-term use can weaken bones and adrenal function"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "hydrocortisone",
    "name": "Hydrocortisone",
    "aliases": [
      "Cortef"
    ],
    "category": "Medications",
    "className": "corticosteroid",
    "useContext": "Systemic hormone replacement for adrenal insufficiency and treatment of inflammatory conditions.",
    "mechanism": "Glucocorticoid with cortisol-like effects on immune activity and metabolism.",
    "effects": [
      "Can replace deficient cortisol",
      "Can reduce inflammation"
    ],
    "risks": [
      "Infection risk and blood sugar can rise",
      "Abrupt changes can precipitate adrenal crisis"
    ],
    "interactionNote": "Vaccines, NSAIDs, diabetes medicines, and anticoagulants require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Hydrocortisone",
        "url": "https://medlineplus.gov/druginfo/meds/a682206.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "hormone",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "hormones",
      "organs": [
        "hormones"
      ],
      "cautions": [
        "hormones"
      ],
      "intent": "Planning follow-up during cortisol replacement for adrenal insufficiency.",
      "responseNotes": [
        "Deficient cortisol is replaced",
        "Replacement supports adrenal-insufficiency care"
      ],
      "riskNotes": [
        "Infection risk and blood sugar can rise",
        "Abrupt changes can precipitate adrenal crisis"
      ],
      "beats": [
        "Deficient cortisol is replaced",
        "Infection risk and blood sugar can rise"
      ],
      "asides": [
        "The calendar belongs to an established replacement plan.",
        "Abrupt changes can precipitate adrenal crisis"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "methotrexate",
    "name": "Methotrexate",
    "aliases": [
      "Trexall",
      "Rheumatrex"
    ],
    "category": "Medications",
    "className": "antimetabolite",
    "useContext": "Treatment of certain cancers, rheumatoid arthritis, psoriasis, and other immune conditions.",
    "mechanism": "Folate antagonist that inhibits DNA synthesis and immune-cell activity.",
    "effects": [
      "Can suppress inflammatory disease",
      "Can treat selected cancers"
    ],
    "risks": [
      "Can cause severe liver, lung, or marrow injury",
      "Can cause fetal harm"
    ],
    "interactionNote": "Many medicines, alcohol, folic acid, and NSAIDs need clinician review; serious interaction potential.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Methotrexate",
        "url": "https://medlineplus.gov/druginfo/meds/a682019.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "notebook",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver",
        "lungs"
      ],
      "intent": "Writing questions during specialist rheumatoid-arthritis treatment.",
      "responseNotes": [
        "Inflammatory arthritis activity can decrease",
        "Folate-related and immune-cell activity changes"
      ],
      "riskNotes": [
        "Can cause severe liver, lung, or marrow injury",
        "Can cause fetal harm"
      ],
      "beats": [
        "Inflammatory arthritis activity can decrease",
        "Can cause severe liver, lung, or marrow injury"
      ],
      "asides": [
        "The notebook keeps the specialist follow-up questions together.",
        "Can cause fetal harm"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "azathioprine",
    "name": "Azathioprine",
    "aliases": [
      "Imuran",
      "Azasan"
    ],
    "category": "Medications",
    "className": "immune modulator",
    "useContext": "Prevention of transplant rejection and treatment of selected autoimmune diseases.",
    "mechanism": "Purine antimetabolite that suppresses immune-cell proliferation.",
    "effects": [
      "Can suppress immune activity",
      "Can help prevent transplant rejection"
    ],
    "risks": [
      "Serious infection and bone-marrow suppression can occur",
      "Long-term cancer risk can rise"
    ],
    "interactionNote": "Allopurinol/febuxostat markedly increase toxicity; vaccines and other immunosuppressants require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Azathioprine",
        "url": "https://medlineplus.gov/druginfo/meds/a682167.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "immune",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "infection",
      "organs": [],
      "cautions": [],
      "intent": "Reading follow-up instructions during transplant-rejection prevention.",
      "responseNotes": [
        "Immune-cell proliferation is suppressed",
        "Treatment can help prevent transplant rejection"
      ],
      "riskNotes": [
        "Serious infection and bone-marrow suppression can occur",
        "Long-term cancer risk can rise"
      ],
      "beats": [
        "Immune-cell proliferation is suppressed",
        "Serious infection and bone-marrow suppression can occur"
      ],
      "asides": [
        "The care plan continues after the hospital visit.",
        "Long-term cancer risk can rise"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "mycophenolate",
    "name": "Mycophenolate",
    "aliases": [
      "CellCept",
      "Myfortic"
    ],
    "category": "Medications",
    "className": "immune modulator",
    "useContext": "Prevention of organ-transplant rejection under specialist care.",
    "mechanism": "Immunosuppressant that inhibits lymphocyte purine synthesis.",
    "effects": [
      "Can help prevent transplant rejection",
      "Can suppress immune activity"
    ],
    "risks": [
      "Serious infections and blood disorders can occur",
      "Can cause miscarriage and birth defects"
    ],
    "interactionNote": "Other immunosuppressants and antacids can affect use; live vaccines are generally avoided.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Mycophenolate",
        "url": "https://medlineplus.gov/druginfo/meds/a601081.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "immune",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "infection",
      "organs": [],
      "cautions": [],
      "intent": "Organizing specialist records during organ-transplant care.",
      "responseNotes": [
        "Can help prevent transplant rejection",
        "Can suppress immune activity"
      ],
      "riskNotes": [
        "Serious infections and blood disorders can occur",
        "Can cause miscarriage and birth defects"
      ],
      "beats": [
        "Can help prevent transplant rejection",
        "Serious infections and blood disorders can occur"
      ],
      "asides": [
        "The record connects the transplant team and everyday care.",
        "Can cause miscarriage and birth defects"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "hydroxychloroquine",
    "name": "Hydroxychloroquine",
    "aliases": [
      "Plaquenil"
    ],
    "category": "Medications",
    "className": "antimalarial immunomodulator",
    "useContext": "Treatment of lupus and rheumatoid arthritis and prevention or treatment of malaria.",
    "mechanism": "Antimalarial with immune-modulating effects.",
    "effects": [
      "Can reduce autoimmune symptoms",
      "Can prevent or treat malaria"
    ],
    "risks": [
      "Retinal damage can impair vision",
      "Heart-rhythm changes can occur"
    ],
    "interactionNote": "Antacids affect absorption; QT-prolonging drugs and glucose-lowering medicines require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Hydroxychloroquine",
        "url": "https://medlineplus.gov/druginfo/meds/a601240.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "immune",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "vision",
      "organs": [],
      "cautions": [
        "eyes"
      ],
      "intent": "Planning follow-up during lupus treatment.",
      "responseNotes": [
        "Autoimmune symptoms can decrease",
        "Immune activity is modulated"
      ],
      "riskNotes": [
        "Retinal damage can impair vision",
        "Heart-rhythm changes can occur"
      ],
      "beats": [
        "Autoimmune symptoms can decrease",
        "Retinal damage can impair vision"
      ],
      "asides": [
        "The calendar also holds the monitoring appointments.",
        "Heart-rhythm changes can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "sulfasalazine",
    "name": "Sulfasalazine",
    "aliases": [
      "Azulfidine"
    ],
    "category": "Medications",
    "className": "anti inflammatory dmard",
    "useContext": "Treatment of ulcerative colitis and selected inflammatory arthritis.",
    "mechanism": "Aminosalicylate/DMARD with anti-inflammatory effects.",
    "effects": [
      "Can reduce bowel inflammation",
      "Can reduce inflammatory joint symptoms"
    ],
    "risks": [
      "Blood-cell disorders and liver injury can occur",
      "Rash or severe allergic reaction can occur"
    ],
    "interactionNote": "Folic acid absorption and interactions with digoxin or warfarin may be affected.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Sulfasalazine",
        "url": "https://medlineplus.gov/druginfo/meds/a682204.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [
        "gut"
      ],
      "cautions": [
        "liver"
      ],
      "intent": "Recording bowel symptoms during ulcerative-colitis treatment.",
      "responseNotes": [
        "Bowel inflammation can decrease",
        "Treatment supports ulcerative-colitis care"
      ],
      "riskNotes": [
        "Blood-cell disorders and liver injury can occur",
        "Rash or severe allergic reaction can occur"
      ],
      "beats": [
        "Bowel inflammation can decrease",
        "Blood-cell disorders and liver injury can occur"
      ],
      "asides": [
        "The notebook follows symptoms between reviews.",
        "Rash or severe allergic reaction can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "adalimumab",
    "name": "Adalimumab",
    "aliases": [
      "Humira"
    ],
    "category": "Medications",
    "className": "tnf inhibitor",
    "useContext": "Treatment of selected inflammatory autoimmune diseases; source covers injection.",
    "mechanism": "TNF inhibitor monoclonal antibody that dampens inflammatory signaling.",
    "effects": [
      "Can reduce autoimmune inflammation",
      "Can improve disease symptoms"
    ],
    "risks": [
      "Serious infection and tuberculosis reactivation can occur",
      "Some cancers have been reported"
    ],
    "interactionNote": "Other biologic immunosuppressants and live vaccines require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Adalimumab Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a603010.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "checklist",
      "prop": "care-card",
      "motif": "immune",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "infection",
      "organs": [],
      "cautions": [],
      "intent": "Checking a follow-up card during injectable inflammatory-disease treatment.",
      "responseNotes": [
        "Can reduce autoimmune inflammation",
        "Can improve disease symptoms"
      ],
      "riskNotes": [
        "Serious infection and tuberculosis reactivation can occur",
        "Some cancers have been reported"
      ],
      "beats": [
        "Can reduce autoimmune inflammation",
        "Serious infection and tuberculosis reactivation can occur"
      ],
      "asides": [
        "The card includes the longer-term care checks.",
        "Some cancers have been reported"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "albuterol",
    "name": "Albuterol",
    "aliases": [
      "Ventolin",
      "Proventil"
    ],
    "category": "Medications",
    "className": "short acting beta agonist",
    "useContext": "Quick relief or prevention of bronchospasm in asthma and other airway disease; cited source covers inhaled aerosol, powder, and nebulizer solution.",
    "mechanism": "Short-acting beta-2 agonist that relaxes airway smooth muscle.",
    "effects": [
      "Can open narrowed airways",
      "Can relieve wheezing or shortness of breath"
    ],
    "risks": [
      "Fast heartbeat and tremor can occur",
      "Overuse can worsen breathing or cause cardiac effects"
    ],
    "interactionNote": "Beta blockers can reduce effect; other stimulants or sympathomimetics can increase cardiac effects.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Albuterol Oral Inhalation",
        "url": "https://medlineplus.gov/druginfo/meds/a682145.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "breathing",
      "task": "breathing",
      "prop": "timer",
      "motif": "airway",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "heartbeat",
      "timeCourse": "immediate",
      "riskVisual": "pulse",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Pausing to breathe during prescribed quick-relief care with an aerosol inhaler.",
      "responseNotes": [
        "Can open narrowed airways",
        "Can relieve wheezing or shortness of breath"
      ],
      "riskNotes": [
        "Fast heartbeat and tremor can occur",
        "Overuse can worsen breathing or cause cardiac effects"
      ],
      "beats": [
        "Can open narrowed airways",
        "Fast heartbeat and tremor can occur"
      ],
      "asides": [
        "An aerosol-inhaler example is shown; other devices differ.",
        "Overuse can worsen breathing or cause cardiac effects"
      ],
      "exposure": "inhaler"
    }
  },
  {
    "id": "levalbuterol",
    "name": "Levalbuterol",
    "aliases": [
      "Xopenex"
    ],
    "category": "Medications",
    "className": "short acting beta agonist",
    "useContext": "Relief or prevention of bronchospasm; source covers inhaled forms.",
    "mechanism": "Short-acting beta-2 agonist that relaxes airway smooth muscle.",
    "effects": [
      "Can open narrowed airways",
      "Can relieve wheezing or shortness of breath"
    ],
    "risks": [
      "Fast heartbeat and tremor can occur",
      "Overuse can worsen breathing or cause cardiac effects"
    ],
    "interactionNote": "Beta blockers can reduce effect; other stimulants or sympathomimetics can increase cardiac effects.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Levalbuterol Oral Inhalation",
        "url": "https://medlineplus.gov/druginfo/meds/a603025.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "breathing",
      "task": "resting",
      "prop": "towel",
      "motif": "airway",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "heartbeat",
      "timeCourse": "immediate",
      "riskVisual": "pulse",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Resting during prescribed bronchospasm relief with an aerosol inhaler.",
      "responseNotes": [
        "Can open narrowed airways",
        "Can relieve wheezing or shortness of breath"
      ],
      "riskNotes": [
        "Fast heartbeat and tremor can occur",
        "Overuse can worsen breathing or cause cardiac effects"
      ],
      "beats": [
        "Can open narrowed airways",
        "Fast heartbeat and tremor can occur"
      ],
      "asides": [
        "An aerosol-inhaler example is shown; other devices differ.",
        "Overuse can worsen breathing or cause cardiac effects"
      ],
      "exposure": "inhaler"
    }
  },
  {
    "id": "salmeterol",
    "name": "Salmeterol",
    "aliases": [
      "Serevent"
    ],
    "category": "Medications",
    "className": "long acting beta agonist",
    "useContext": "Maintenance treatment of COPD; source covers inhaled forms.",
    "mechanism": "Long-acting beta-2 agonist that relaxes airway smooth muscle.",
    "effects": [
      "Can improve persistent airflow symptoms",
      "Can reduce COPD symptoms"
    ],
    "risks": [
      "Not for rapid relief of acute bronchospasm",
      "Asthma-related serious risk if used alone"
    ],
    "interactionNote": "Use only with indicated controller treatment in asthma; avoid duplicate LABAs and review interacting drugs.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Salmeterol Oral Inhalation",
        "url": "https://medlineplus.gov/druginfo/meds/a695001.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "airway",
      "mechanismStyle": "activate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "breathing",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "lungs"
      ],
      "intent": "Planning daily activities during COPD maintenance treatment.",
      "responseNotes": [
        "Persistent COPD airflow symptoms can improve",
        "Maintenance treatment does not rapidly relieve an attack"
      ],
      "riskNotes": [
        "Not for rapid relief of acute bronchospasm",
        "Asthma-related serious risk if used alone"
      ],
      "beats": [
        "Persistent COPD airflow symptoms can improve",
        "Not for rapid relief of acute bronchospasm"
      ],
      "asides": [
        "Maintenance care is followed across ordinary days.",
        "Asthma-related serious risk if used alone"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "formoterol",
    "name": "Formoterol",
    "aliases": [
      "Foradil",
      "Perforomist"
    ],
    "category": "Medications",
    "className": "long acting beta agonist",
    "useContext": "Maintenance treatment of COPD; source covers inhaled forms.",
    "mechanism": "Long-acting beta-2 agonist that relaxes airway smooth muscle.",
    "effects": [
      "Can improve persistent airflow symptoms",
      "Can reduce COPD symptoms"
    ],
    "risks": [
      "Not for rapid relief of acute bronchospasm",
      "Fast heartbeat and tremor can occur"
    ],
    "interactionNote": "Avoid duplicate LABAs and review other sympathomimetics and QT-prolonging drugs.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Formoterol Oral Inhalation",
        "url": "https://medlineplus.gov/druginfo/meds/a602023.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "airway",
      "mechanismStyle": "activate",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "over-time",
      "riskVisual": "pulse",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Updating a symptom diary during COPD maintenance treatment.",
      "responseNotes": [
        "Persistent COPD airflow symptoms can improve",
        "Maintenance treatment does not rapidly relieve an attack"
      ],
      "riskNotes": [
        "Not for rapid relief of acute bronchospasm",
        "Fast heartbeat and tremor can occur"
      ],
      "beats": [
        "Persistent COPD airflow symptoms can improve",
        "Not for rapid relief of acute bronchospasm"
      ],
      "asides": [
        "The diary records the days between appointments.",
        "Fast heartbeat and tremor can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "tiotropium",
    "name": "Tiotropium",
    "aliases": [
      "Spiriva"
    ],
    "category": "Medications",
    "className": "long acting anticholinergic",
    "useContext": "Long-term maintenance treatment of COPD; the label says it can reduce exacerbations and is not for acute bronchospasm.",
    "mechanism": "Long-acting muscarinic antagonist bronchodilator that relaxes airway smooth muscle.",
    "effects": [
      "Can prevent persistent COPD breathing symptoms",
      "Can reduce COPD exacerbations"
    ],
    "risks": [
      "Not indicated for acute bronchospasm",
      "Dry mouth or urinary retention can occur"
    ],
    "interactionNote": "Other anticholinergic medicines can increase dry mouth, urinary retention, and glaucoma risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Tiotropium Oral Inhalation",
        "url": "https://medlineplus.gov/druginfo/meds/a604018.html"
      },
      {
        "label": "DailyMed · Spiriva Respimat label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7b656b14-fcaa-2741-f6f0-e0be48971c02"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "airway",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "riskVisual": "dry-mouth",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "bladder"
      ],
      "intent": "Checking a home-care list during COPD maintenance treatment.",
      "responseNotes": [
        "Airflow can improve during ongoing COPD treatment",
        "Used for daily maintenance, not rapid rescue"
      ],
      "riskNotes": [
        "Dry mouth and urinary retention can occur",
        "Can worsen narrow-angle glaucoma if exposed to eyes"
      ],
      "beats": [
        "Airflow can improve during ongoing COPD treatment",
        "Dry mouth and urinary retention can occur"
      ],
      "asides": [
        "The checklist brings the maintenance plan into the day.",
        "Can worsen narrow-angle glaucoma if exposed to eyes"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "umeclidinium",
    "name": "Umeclidinium",
    "aliases": [
      "Incruse Ellipta"
    ],
    "category": "Medications",
    "className": "long acting anticholinergic",
    "useContext": "Maintenance treatment of COPD in adults; source covers inhaled forms.",
    "mechanism": "Long-acting muscarinic antagonist that relaxes airway smooth muscle.",
    "effects": [
      "Airflow can improve during ongoing COPD treatment",
      "Used for daily maintenance, not rapid rescue"
    ],
    "risks": [
      "Dry mouth and urinary retention can occur",
      "Can worsen narrow-angle glaucoma if exposed to eyes"
    ],
    "interactionNote": "Other anticholinergic drugs can increase dry mouth, urinary retention, and glaucoma risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Umeclidinium Oral Inhalation",
        "url": "https://medlineplus.gov/druginfo/meds/a614024.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "airway",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "riskVisual": "bladder",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "bladder"
      ],
      "intent": "Reading during a quiet part of a COPD-care day.",
      "responseNotes": [
        "Airflow can improve during ongoing COPD treatment",
        "Used for daily maintenance, not rapid rescue"
      ],
      "riskNotes": [
        "Dry mouth and urinary retention can occur",
        "Can worsen narrow-angle glaucoma if exposed to eyes"
      ],
      "beats": [
        "Airflow can improve during ongoing COPD treatment",
        "Dry mouth and urinary retention can occur"
      ],
      "asides": [
        "The book keeps its place while the care routine continues.",
        "Can worsen narrow-angle glaucoma if exposed to eyes"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "ipratropium",
    "name": "Ipratropium",
    "aliases": [
      "Atrovent"
    ],
    "category": "Medications",
    "className": "nasal anticholinergic",
    "useContext": "Relief of runny nose from colds or allergic/nonallergic rhinitis; source covers nasal spray.",
    "mechanism": "Nasal anticholinergic that reduces mucus secretion.",
    "effects": [
      "Can reduce runny nose",
      "Can relieve rhinitis symptoms"
    ],
    "risks": [
      "Nose dryness or bleeding can occur",
      "Eye exposure can worsen narrow-angle glaucoma"
    ],
    "interactionNote": "Other anticholinergic drugs may increase dryness, urinary retention, or eye risks.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ipratropium Nasal Spray",
        "url": "https://medlineplus.gov/druginfo/meds/a618013.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "mirror",
      "prop": "mirror",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "bleeding",
      "organs": [],
      "cautions": [],
      "intent": "Checking a runny nose in the mirror before prescribed rhinitis care.",
      "responseNotes": [
        "Can reduce runny nose",
        "Can relieve rhinitis symptoms"
      ],
      "riskNotes": [
        "Nose dryness or bleeding can occur",
        "Eye exposure can worsen narrow-angle glaucoma"
      ],
      "beats": [
        "Can reduce runny nose",
        "Nose dryness or bleeding can occur"
      ],
      "asides": [
        "The scene uses a symbolic nasal treatment.",
        "Eye exposure can worsen narrow-angle glaucoma"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "fluticasone",
    "name": "Fluticasone",
    "aliases": [
      "Flovent"
    ],
    "category": "Medications",
    "className": "inhaled corticosteroid",
    "useContext": "Prevention and control of asthma symptoms; source covers oral inhalation.",
    "mechanism": "Inhaled corticosteroid that reduces airway inflammation.",
    "effects": [
      "Can prevent asthma symptoms",
      "Can reduce airway inflammation"
    ],
    "risks": [
      "Oral thrush or hoarseness can occur",
      "Long-term high exposure can affect growth or adrenal function"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors can increase systemic steroid exposure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Fluticasone Oral Inhalation",
        "url": "https://medlineplus.gov/druginfo/meds/a601056.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "infection",
      "organs": [
        "lungs"
      ],
      "cautions": [],
      "intent": "Updating an asthma record during prevention treatment with an aerosol inhaler.",
      "responseNotes": [
        "Can prevent asthma symptoms",
        "Can reduce airway inflammation"
      ],
      "riskNotes": [
        "Oral thrush or hoarseness can occur",
        "Long-term high exposure can affect growth or adrenal function"
      ],
      "beats": [
        "Can prevent asthma symptoms",
        "Oral thrush or hoarseness can occur"
      ],
      "asides": [
        "An aerosol-inhaler example is shown; other devices differ.",
        "Long-term high exposure can affect growth or adrenal function"
      ],
      "exposure": "inhaler"
    }
  },
  {
    "id": "budesonide",
    "name": "Budesonide",
    "aliases": [
      "Entocort EC",
      "Uceris",
      "Tarpeyo"
    ],
    "category": "Medications",
    "className": "corticosteroid",
    "useContext": "Product-specific oral treatment of Crohn disease, ulcerative colitis, or IgA nephropathy.",
    "mechanism": "Glucocorticoid that reduces inflammation; effects vary by formulation.",
    "effects": [
      "Can reduce intestinal inflammation",
      "Can reduce proteinuria in IgA nephropathy"
    ],
    "risks": [
      "Infection and adrenal effects can occur",
      "CYP3A4 interactions can raise systemic exposure"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors can raise exposure; products have different indications.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Budesonide",
        "url": "https://medlineplus.gov/druginfo/meds/a608007.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "clipboard",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "infection",
      "organs": [
        "gut"
      ],
      "cautions": [
        "hormones"
      ],
      "intent": "Keeping a meal and symptom record during prescribed bowel treatment.",
      "responseNotes": [
        "Intestinal inflammation can decrease",
        "Selected oral products treat inflammatory bowel disease"
      ],
      "riskNotes": [
        "Infection and adrenal effects can occur",
        "CYP3A4 interactions can raise systemic exposure"
      ],
      "beats": [
        "Intestinal inflammation can decrease",
        "Infection and adrenal effects can occur"
      ],
      "asides": [
        "This scene follows an oral bowel-treatment product.",
        "CYP3A4 interactions can raise systemic exposure"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "mometasone",
    "name": "Mometasone",
    "aliases": [
      "Asmanex"
    ],
    "category": "Medications",
    "className": "inhaled corticosteroid",
    "useContext": "Prevention and control of asthma symptoms; source covers oral inhalation.",
    "mechanism": "Inhaled corticosteroid that reduces airway inflammation.",
    "effects": [
      "Can prevent asthma symptoms",
      "Can reduce airway inflammation"
    ],
    "risks": [
      "Oral thrush or hoarseness can occur",
      "Long-term high exposure can affect growth or adrenal function"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors can increase systemic steroid exposure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Mometasone Oral Inhalation",
        "url": "https://medlineplus.gov/druginfo/meds/a608035.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "hormones",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "hormones"
      ],
      "intent": "Organizing care cards for an aerosol-inhaler asthma maintenance product.",
      "responseNotes": [
        "Can prevent asthma symptoms",
        "Can reduce airway inflammation"
      ],
      "riskNotes": [
        "Oral thrush or hoarseness can occur",
        "Long-term high exposure can affect growth or adrenal function"
      ],
      "beats": [
        "Can prevent asthma symptoms",
        "Oral thrush or hoarseness can occur"
      ],
      "asides": [
        "An aerosol-inhaler example is shown; other devices differ.",
        "Long-term high exposure can affect growth or adrenal function"
      ],
      "exposure": "inhaler"
    }
  },
  {
    "id": "montelukast",
    "name": "Montelukast",
    "aliases": [
      "Singulair"
    ],
    "category": "Medications",
    "className": "leukotriene antagonist",
    "useContext": "Prevention of asthma symptoms and treatment of allergic rhinitis.",
    "mechanism": "Leukotriene receptor antagonist that reduces inflammatory signaling.",
    "effects": [
      "Can help prevent asthma symptoms",
      "Can reduce allergic rhinitis symptoms"
    ],
    "risks": [
      "Serious mood or behavior changes can occur",
      "Suicidal thoughts have been reported"
    ],
    "interactionNote": "No major interaction emphasized in source; review all medicines and mental-health changes.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Montelukast",
        "url": "https://medlineplus.gov/druginfo/meds/a600014.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "airway",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "agitation",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Planning a follow-up during prescribed asthma prevention.",
      "responseNotes": [
        "Leukotriene signaling is blocked",
        "Treatment can help prevent asthma symptoms"
      ],
      "riskNotes": [
        "Serious mood or behavior changes can occur",
        "Suicidal thoughts have been reported"
      ],
      "beats": [
        "Leukotriene signaling is blocked",
        "Serious mood or behavior changes can occur"
      ],
      "asides": [
        "Mood and behavior changes belong in the care discussion.",
        "Suicidal thoughts have been reported"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "roflumilast",
    "name": "Roflumilast",
    "aliases": [
      "Daliresp"
    ],
    "category": "Medications",
    "className": "pde4 inhibitor",
    "useContext": "Reduction of COPD exacerbations in selected patients with severe disease.",
    "mechanism": "PDE4 inhibitor that reduces airway inflammation.",
    "effects": [
      "Can reduce COPD exacerbations",
      "Can support maintenance care"
    ],
    "risks": [
      "Weight loss and diarrhea can occur",
      "Depression or suicidal thoughts can occur"
    ],
    "interactionNote": "CYP3A4 inhibitors or inducers can change exposure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Roflumilast",
        "url": "https://medlineplus.gov/druginfo/meds/a611034.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Recording daily symptoms during severe-COPD maintenance care.",
      "responseNotes": [
        "Can reduce COPD exacerbations",
        "Can support maintenance care"
      ],
      "riskNotes": [
        "Weight loss and diarrhea can occur",
        "Depression or suicidal thoughts can occur"
      ],
      "beats": [
        "Can reduce COPD exacerbations",
        "Weight loss and diarrhea can occur"
      ],
      "asides": [
        "The record follows the days between flare-ups.",
        "Depression or suicidal thoughts can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "cetirizine",
    "name": "Cetirizine",
    "aliases": [
      "Zyrtec"
    ],
    "category": "Medications",
    "className": "antihistamine",
    "useContext": "Relief of allergy symptoms and hives.",
    "mechanism": "Second-generation H1 antihistamine that blocks histamine effects.",
    "effects": [
      "Can relieve sneezing and itching",
      "Can reduce hives"
    ],
    "risks": [
      "Drowsiness can occur",
      "Dry mouth or fatigue can occur"
    ],
    "interactionNote": "Alcohol and sedatives can increase drowsiness.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Cetirizine",
        "url": "https://medlineplus.gov/druginfo/meds/a623043.html"
      }
    ],
    "scene": {
      "setting": "garden",
      "activity": "garden",
      "task": "gardening",
      "prop": "plant",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "sleepiness",
      "organs": [],
      "cautions": [],
      "intent": "Tending a small plant during seasonal-allergy treatment.",
      "responseNotes": [
        "Can relieve sneezing and itching",
        "Can reduce hives"
      ],
      "riskNotes": [
        "Drowsiness can occur",
        "Dry mouth or fatigue can occur"
      ],
      "beats": [
        "Can relieve sneezing and itching",
        "Drowsiness can occur"
      ],
      "asides": [
        "The plant still needs its ordinary care.",
        "Dry mouth or fatigue can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "loratadine",
    "name": "Loratadine",
    "aliases": [
      "Claritin"
    ],
    "category": "Medications",
    "className": "antihistamine",
    "useContext": "Relief of allergy symptoms and hives.",
    "mechanism": "Second-generation H1 antihistamine that blocks histamine effects.",
    "effects": [
      "Can relieve sneezing and itching",
      "Can reduce hives"
    ],
    "risks": [
      "Headache or drowsiness can occur",
      "Dry mouth can occur"
    ],
    "interactionNote": "Other medicines causing drowsiness may add to impairment.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Loratadine",
        "url": "https://medlineplus.gov/druginfo/meds/a697038.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "reading",
      "prop": "book",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "dry-mouth",
      "timeCourse": "variable",
      "riskVisual": "dry-mouth",
      "organs": [],
      "cautions": [],
      "intent": "Returning to a book during allergy-symptom treatment.",
      "responseNotes": [
        "Can relieve sneezing and itching",
        "Can reduce hives"
      ],
      "riskNotes": [
        "Headache or drowsiness can occur",
        "Dry mouth can occur"
      ],
      "beats": [
        "Can relieve sneezing and itching",
        "Headache or drowsiness can occur"
      ],
      "asides": [
        "The bookmark remembers where the sneezing interrupted.",
        "Dry mouth can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "fexofenadine",
    "name": "Fexofenadine",
    "aliases": [
      "Allegra"
    ],
    "category": "Medications",
    "className": "antihistamine",
    "useContext": "Relief of seasonal allergy symptoms and hives.",
    "mechanism": "Second-generation H1 antihistamine that blocks histamine effects.",
    "effects": [
      "Can relieve sneezing and itching",
      "Can reduce hives"
    ],
    "risks": [
      "Headache or dizziness can occur",
      "Nausea can occur"
    ],
    "interactionNote": "Fruit juices and aluminum/magnesium antacids can reduce absorption.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Fexofenadine",
        "url": "https://medlineplus.gov/druginfo/meds/a697035.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "work",
      "task": "typing",
      "prop": "phone",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "nausea",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Resuming a phone task during seasonal-allergy care.",
      "responseNotes": [
        "Can relieve sneezing and itching",
        "Can reduce hives"
      ],
      "riskNotes": [
        "Headache or dizziness can occur",
        "Nausea can occur"
      ],
      "beats": [
        "Can relieve sneezing and itching",
        "Headache or dizziness can occur"
      ],
      "asides": [
        "The message can wait for the tissue break.",
        "Nausea can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "levocetirizine",
    "name": "Levocetirizine",
    "aliases": [
      "Xyzal"
    ],
    "category": "Medications",
    "className": "antihistamine",
    "useContext": "Relief of allergy symptoms and hives.",
    "mechanism": "Second-generation H1 antihistamine that blocks histamine effects.",
    "effects": [
      "Can relieve sneezing and itching",
      "Can reduce hives"
    ],
    "risks": [
      "Drowsiness and fatigue can occur",
      "Dry mouth can occur"
    ],
    "interactionNote": "Alcohol and sedatives can increase drowsiness.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Levocetirizine",
        "url": "https://medlineplus.gov/druginfo/meds/a607056.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "sleepiness",
      "organs": [],
      "cautions": [],
      "intent": "Checking the day's list during allergy treatment.",
      "responseNotes": [
        "Can relieve sneezing and itching",
        "Can reduce hives"
      ],
      "riskNotes": [
        "Drowsiness and fatigue can occur",
        "Dry mouth can occur"
      ],
      "beats": [
        "Can relieve sneezing and itching",
        "Drowsiness and fatigue can occur"
      ],
      "asides": [
        "A short list keeps the next ordinary task visible.",
        "Dry mouth can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "diphenhydramine",
    "name": "Diphenhydramine",
    "aliases": [
      "Benadryl"
    ],
    "category": "Medications",
    "className": "first generation antihistamine",
    "useContext": "Relief of allergy/cold symptoms and short-term adult insomnia; source covers standalone product.",
    "mechanism": "First-generation H1 antihistamine with anticholinergic and sedating effects.",
    "effects": [
      "Can relieve allergy symptoms",
      "Can cause sedation"
    ],
    "risks": [
      "Marked drowsiness and impaired coordination occur",
      "Confusion, urinary retention, and falls can occur"
    ],
    "interactionNote": "Alcohol, sedatives, and other anticholinergics increase impairment and adverse effects.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Diphenhydramine",
        "url": "https://medlineplus.gov/druginfo/meds/a682539.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "rest",
      "task": "resting",
      "prop": "towel",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "sleepiness",
      "organs": [],
      "cautions": [
        "brain",
        "bladder"
      ],
      "intent": "Taking a quiet break during treatment for allergy symptoms.",
      "responseNotes": [
        "Allergy symptoms can decrease",
        "Histamine effects are blocked"
      ],
      "riskNotes": [
        "Marked drowsiness and impaired coordination occur",
        "Confusion, urinary retention, and falls can occur"
      ],
      "beats": [
        "Allergy symptoms can decrease",
        "Marked drowsiness and impaired coordination occur"
      ],
      "asides": [
        "Drowsiness can change the pace of the break.",
        "Confusion, urinary retention, and falls can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "chlorpheniramine",
    "name": "Chlorpheniramine",
    "aliases": [
      "Chlor-Trimeton"
    ],
    "category": "Medications",
    "className": "first generation antihistamine",
    "useContext": "Relief of allergy and cold symptoms.",
    "mechanism": "First-generation H1 antihistamine with sedating and anticholinergic effects.",
    "effects": [
      "Can relieve sneezing and runny nose",
      "Can reduce itching"
    ],
    "risks": [
      "Drowsiness and impaired coordination can occur",
      "Dry mouth or urinary retention can occur"
    ],
    "interactionNote": "Alcohol, sedatives, and other anticholinergics increase impairment.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Chlorpheniramine",
        "url": "https://medlineplus.gov/druginfo/meds/a682543.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "dry-mouth",
      "timeCourse": "variable",
      "riskVisual": "sleepiness",
      "organs": [],
      "cautions": [],
      "intent": "Reading during an allergy-and-cold symptom care routine.",
      "responseNotes": [
        "Can relieve sneezing and runny nose",
        "Can reduce itching"
      ],
      "riskNotes": [
        "Drowsiness and impaired coordination can occur",
        "Dry mouth or urinary retention can occur"
      ],
      "beats": [
        "Can relieve sneezing and runny nose",
        "Drowsiness and impaired coordination can occur"
      ],
      "asides": [
        "The book is ready for the next quiet page.",
        "Dry mouth or urinary retention can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "azelastine",
    "name": "Azelastine",
    "aliases": [
      "Astelin",
      "Astepro"
    ],
    "category": "Medications",
    "className": "nasal antihistamine",
    "useContext": "Relief of allergy symptoms; source covers nasal spray.",
    "mechanism": "Nasal H1 antihistamine that blocks histamine effects.",
    "effects": [
      "Can relieve sneezing and congestion",
      "Can reduce nasal itching"
    ],
    "risks": [
      "Bitter taste and nasal irritation can occur",
      "Drowsiness can occur"
    ],
    "interactionNote": "Alcohol and sedatives may increase drowsiness.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Azelastine Nasal Spray",
        "url": "https://medlineplus.gov/druginfo/meds/a697014.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "sleepiness",
      "organs": [],
      "cautions": [],
      "intent": "Checking a nasal-allergy care card before the morning routine.",
      "responseNotes": [
        "Can relieve sneezing and congestion",
        "Can reduce nasal itching"
      ],
      "riskNotes": [
        "Bitter taste and nasal irritation can occur",
        "Drowsiness can occur"
      ],
      "beats": [
        "Can relieve sneezing and congestion",
        "Bitter taste and nasal irritation can occur"
      ],
      "asides": [
        "The nasal treatment is represented symbolically.",
        "Drowsiness can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "benzonatate",
    "name": "Benzonatate",
    "aliases": [
      "Tessalon"
    ],
    "category": "Medications",
    "className": "antitussive",
    "useContext": "Symptomatic relief of cough.",
    "mechanism": "Non-opioid antitussive that numbs stretch receptors in the respiratory tract.",
    "effects": [
      "Can reduce cough",
      "May ease cough-related discomfort"
    ],
    "risks": [
      "Chewing can numb the mouth and throat",
      "Overdose can cause seizures or cardiac arrest"
    ],
    "interactionNote": "Sedatives may increase drowsiness; accidental ingestion is dangerous, especially for children.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Benzonatate",
        "url": "https://medlineplus.gov/druginfo/meds/a682640.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "rest",
      "task": "resting",
      "prop": "cup",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "seizure",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "brain",
        "heart"
      ],
      "intent": "Taking a quiet rest during prescribed cough treatment.",
      "responseNotes": [
        "Can reduce cough",
        "May ease cough-related discomfort"
      ],
      "riskNotes": [
        "Chewing can numb the mouth and throat",
        "Overdose can cause seizures or cardiac arrest"
      ],
      "beats": [
        "Can reduce cough",
        "Chewing can numb the mouth and throat"
      ],
      "asides": [
        "The cup is part of the rest break.",
        "Overdose can cause seizures or cardiac arrest"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "omeprazole",
    "name": "Omeprazole",
    "aliases": [
      "Prilosec"
    ],
    "category": "Medications",
    "className": "proton pump inhibitor",
    "useContext": "Treatment of acid reflux, ulcers, and related stomach-acid conditions.",
    "mechanism": "Proton-pump inhibitor that reduces gastric acid secretion.",
    "effects": [
      "Reduces stomach acid",
      "Can relieve reflux symptoms"
    ],
    "risks": [
      "Long-term use may lower magnesium or B12",
      "Fracture and intestinal-infection risks can rise"
    ],
    "interactionNote": "Clopidogrel activation and some antiviral or antifungal medicines can be affected.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Omeprazole",
        "url": "https://medlineplus.gov/druginfo/meds/a693050.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "acid",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "electrolytes",
      "organs": [
        "gut"
      ],
      "cautions": [],
      "intent": "Recording meal-related reflux during an acid-treatment course.",
      "responseNotes": [
        "Reduces stomach acid",
        "Can relieve reflux symptoms"
      ],
      "riskNotes": [
        "Long-term use may lower magnesium or B12",
        "Fracture and intestinal-infection risks can rise"
      ],
      "beats": [
        "Reduces stomach acid",
        "Long-term use may lower magnesium or B12"
      ],
      "asides": [
        "The food notes put the reflux symptoms in context.",
        "Fracture and intestinal-infection risks can rise"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "pantoprazole",
    "name": "Pantoprazole",
    "aliases": [
      "Protonix"
    ],
    "category": "Medications",
    "className": "proton pump inhibitor",
    "useContext": "Treatment of gastroesophageal reflux and acid-related esophageal injury.",
    "mechanism": "Proton-pump inhibitor that reduces gastric acid secretion.",
    "effects": [
      "Reduces stomach acid",
      "Can relieve reflux symptoms"
    ],
    "risks": [
      "Long-term use may lower magnesium or B12",
      "Fracture and intestinal-infection risks can rise"
    ],
    "interactionNote": "May affect absorption of pH-dependent medicines and interact with methotrexate.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Pantoprazole",
        "url": "https://medlineplus.gov/druginfo/meds/a601246.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "acid",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "infection",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reading a care card during treatment for acid-related esophageal injury.",
      "responseNotes": [
        "Reduces stomach acid",
        "Can relieve reflux symptoms"
      ],
      "riskNotes": [
        "Long-term use may lower magnesium or B12",
        "Fracture and intestinal-infection risks can rise"
      ],
      "beats": [
        "Reduces stomach acid",
        "Long-term use may lower magnesium or B12"
      ],
      "asides": [
        "The card follows the treatment home.",
        "Fracture and intestinal-infection risks can rise"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "esomeprazole",
    "name": "Esomeprazole",
    "aliases": [
      "Nexium"
    ],
    "category": "Medications",
    "className": "proton pump inhibitor",
    "useContext": "Treatment of reflux, ulcers, and related acid conditions.",
    "mechanism": "Proton-pump inhibitor that reduces gastric acid secretion.",
    "effects": [
      "Reduces stomach acid",
      "Can relieve reflux symptoms"
    ],
    "risks": [
      "Long-term use may lower magnesium or B12",
      "Fracture and intestinal-infection risks can rise"
    ],
    "interactionNote": "Clopidogrel activation and some antiviral or antifungal medicines can be affected.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Esomeprazole",
        "url": "https://medlineplus.gov/druginfo/meds/a699054.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "acid",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "bone",
      "organs": [
        "gut"
      ],
      "cautions": [
        "bones"
      ],
      "intent": "Writing a symptom record during ongoing reflux treatment.",
      "responseNotes": [
        "Reduces stomach acid",
        "Can relieve reflux symptoms"
      ],
      "riskNotes": [
        "Long-term use may lower magnesium or B12",
        "Fracture and intestinal-infection risks can rise"
      ],
      "beats": [
        "Reduces stomach acid",
        "Long-term use may lower magnesium or B12"
      ],
      "asides": [
        "The record shows how the days compare.",
        "Fracture and intestinal-infection risks can rise"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "lansoprazole",
    "name": "Lansoprazole",
    "aliases": [
      "Prevacid"
    ],
    "category": "Medications",
    "className": "proton pump inhibitor",
    "useContext": "Treatment of reflux, ulcers, and related acid conditions.",
    "mechanism": "Proton-pump inhibitor that reduces gastric acid secretion.",
    "effects": [
      "Reduces stomach acid",
      "Can relieve reflux symptoms"
    ],
    "risks": [
      "Long-term use may lower magnesium or B12",
      "Fracture and intestinal-infection risks can rise"
    ],
    "interactionNote": "May affect absorption of pH-dependent medicines and interact with methotrexate.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lansoprazole",
        "url": "https://medlineplus.gov/druginfo/meds/a695020.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "acid",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "electrolytes",
      "organs": [
        "gut"
      ],
      "cautions": [],
      "intent": "Sitting down to a meal during prescribed acid-reflux care.",
      "responseNotes": [
        "Reduces stomach acid",
        "Can relieve reflux symptoms"
      ],
      "riskNotes": [
        "Long-term use may lower magnesium or B12",
        "Fracture and intestinal-infection risks can rise"
      ],
      "beats": [
        "Reduces stomach acid",
        "Long-term use may lower magnesium or B12"
      ],
      "asides": [
        "An ordinary meal gives the care routine its context.",
        "Fracture and intestinal-infection risks can rise"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "famotidine",
    "name": "Famotidine",
    "aliases": [
      "Pepcid"
    ],
    "category": "Medications",
    "className": "h2 blocker",
    "useContext": "Treatment of reflux, ulcers, and other conditions involving excess stomach acid.",
    "mechanism": "Histamine H2-receptor blocker that reduces gastric acid secretion.",
    "effects": [
      "Reduces stomach acid",
      "Can relieve heartburn"
    ],
    "risks": [
      "Headache or dizziness can occur",
      "Confusion may occur, especially in older adults"
    ],
    "interactionNote": "Kidney function affects exposure; review medicines needing stomach acid for absorption.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Famotidine",
        "url": "https://medlineplus.gov/druginfo/meds/a687011.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "acid",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "riskVisual": "dizziness",
      "organs": [
        "gut"
      ],
      "cautions": [],
      "intent": "Returning to a book during heartburn treatment.",
      "responseNotes": [
        "Reduces stomach acid",
        "Can relieve heartburn"
      ],
      "riskNotes": [
        "Headache or dizziness can occur",
        "Confusion may occur, especially in older adults"
      ],
      "beats": [
        "Reduces stomach acid",
        "Headache or dizziness can occur"
      ],
      "asides": [
        "The book keeps the quiet part of the evening intact.",
        "Confusion may occur, especially in older adults"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "cimetidine",
    "name": "Cimetidine",
    "aliases": [
      "Tagamet"
    ],
    "category": "Medications",
    "className": "h2 blocker",
    "useContext": "Treatment of reflux, ulcers, and other conditions involving excess stomach acid.",
    "mechanism": "Histamine H2-receptor blocker that reduces gastric acid secretion.",
    "effects": [
      "Reduces stomach acid",
      "Can relieve heartburn"
    ],
    "risks": [
      "Confusion or dizziness can occur",
      "Breast or sexual side effects can occur"
    ],
    "interactionNote": "Inhibits metabolism of warfarin, phenytoin, theophylline, and several other medicines.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Cimetidine",
        "url": "https://medlineplus.gov/druginfo/meds/a682256.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "acid",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "riskVisual": "hormones",
      "organs": [
        "gut"
      ],
      "cautions": [],
      "intent": "Organizing treatment notes during ongoing heartburn care.",
      "responseNotes": [
        "Reduces stomach acid",
        "Can relieve heartburn"
      ],
      "riskNotes": [
        "Confusion or dizziness can occur",
        "Breast or sexual side effects can occur"
      ],
      "beats": [
        "Reduces stomach acid",
        "Confusion or dizziness can occur"
      ],
      "asides": [
        "The medication list belongs with the care notes.",
        "Breast or sexual side effects can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "sucralfate",
    "name": "Sucralfate",
    "aliases": [
      "Carafate"
    ],
    "category": "Medications",
    "className": "mucosal protectant",
    "useContext": "Treatment of duodenal ulcers.",
    "mechanism": "Mucosal protectant that forms a barrier over ulcerated tissue.",
    "effects": [
      "Can protect ulcerated tissue",
      "Can support ulcer healing"
    ],
    "risks": [
      "Constipation can occur",
      "Aluminum accumulation is a concern in kidney disease"
    ],
    "interactionNote": "Can bind medicines and reduce absorption; separate review is needed for interacting products.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Sucralfate",
        "url": "https://medlineplus.gov/druginfo/meds/a681049.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "care-card",
      "prop": "notebook",
      "motif": "gut",
      "mechanismStyle": "protect",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reviewing notes for a prescribed duodenal-ulcer treatment plan.",
      "responseNotes": [
        "Can protect ulcerated tissue",
        "Can support ulcer healing"
      ],
      "riskNotes": [
        "Constipation can occur",
        "Aluminum accumulation is a concern in kidney disease"
      ],
      "beats": [
        "Can protect ulcerated tissue",
        "Constipation can occur"
      ],
      "asides": [
        "The notes follow healing over time.",
        "Aluminum accumulation is a concern in kidney disease"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "ondansetron",
    "name": "Ondansetron",
    "aliases": [
      "Zofran"
    ],
    "category": "Medications",
    "className": "5ht3 antagonist",
    "useContext": "Prevention of nausea and vomiting related to surgery, chemotherapy, or radiation.",
    "mechanism": "5-HT3 receptor antagonist that blocks emetic signaling.",
    "effects": [
      "Can prevent nausea and vomiting",
      "Can support cancer-care symptom control"
    ],
    "risks": [
      "QT prolongation and arrhythmia can occur",
      "Constipation or headache can occur"
    ],
    "interactionNote": "Apomorphine is contraindicated; QT-prolonging and serotonergic drugs require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ondansetron",
        "url": "https://medlineplus.gov/druginfo/meds/a601209.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "checklist",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [
        "gut"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Checking a symptom-care card during chemotherapy-related nausea prevention.",
      "responseNotes": [
        "Nausea and vomiting can be prevented",
        "5-HT3-mediated emetic signaling is blocked"
      ],
      "riskNotes": [
        "QT prolongation and arrhythmia can occur",
        "Constipation or headache can occur"
      ],
      "beats": [
        "Nausea and vomiting can be prevented",
        "QT prolongation and arrhythmia can occur"
      ],
      "asides": [
        "The card supports a wider cancer-care plan.",
        "Constipation or headache can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "metoclopramide",
    "name": "Metoclopramide",
    "aliases": [
      "Reglan"
    ],
    "category": "Medications",
    "className": "prokinetic",
    "useContext": "Treatment of reflux symptoms and diabetic gastroparesis.",
    "mechanism": "Dopamine antagonist that increases upper gastrointestinal motility.",
    "effects": [
      "Can improve stomach emptying",
      "Can reduce reflux symptoms"
    ],
    "risks": [
      "Tardive dyskinesia can be irreversible",
      "Restlessness or involuntary movements can occur"
    ],
    "interactionNote": "Antipsychotics and dopamine-blocking drugs increase movement-disorder risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Metoclopramide",
        "url": "https://medlineplus.gov/druginfo/meds/a684035.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "clipboard",
      "motif": "gut",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "agitation",
      "organs": [
        "gut"
      ],
      "cautions": [
        "brain"
      ],
      "intent": "Recording meals and symptoms during diabetic gastroparesis care.",
      "responseNotes": [
        "Stomach emptying can improve",
        "Upper gastrointestinal motility increases"
      ],
      "riskNotes": [
        "Tardive dyskinesia can be irreversible",
        "Restlessness or involuntary movements can occur"
      ],
      "beats": [
        "Stomach emptying can improve",
        "Tardive dyskinesia can be irreversible"
      ],
      "asides": [
        "The meal record tracks a stomach-emptying problem.",
        "Restlessness or involuntary movements can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "promethazine",
    "name": "Promethazine",
    "aliases": [
      "Phenergan"
    ],
    "category": "Medications",
    "className": "first generation antihistamine",
    "useContext": "Treatment of allergy symptoms, nausea/vomiting, and selected sedation uses.",
    "mechanism": "First-generation H1 antihistamine with sedating and anticholinergic effects.",
    "effects": [
      "Can relieve allergy symptoms",
      "Can reduce nausea or vomiting"
    ],
    "risks": [
      "Severe respiratory depression can occur",
      "Marked sedation and confusion can occur"
    ],
    "interactionNote": "Opioids, alcohol, sedatives, and anticholinergics increase respiratory or CNS depression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Promethazine",
        "url": "https://medlineplus.gov/druginfo/meds/a682284.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "rest",
      "task": "resting",
      "prop": "towel",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "breathing",
      "organs": [
        "gut"
      ],
      "cautions": [
        "lungs"
      ],
      "intent": "Resting during prescribed treatment for nausea and vomiting.",
      "responseNotes": [
        "Nausea and vomiting can decrease",
        "Histamine-related signaling is blocked"
      ],
      "riskNotes": [
        "Severe respiratory depression can occur",
        "Marked sedation and confusion can occur"
      ],
      "beats": [
        "Nausea and vomiting can decrease",
        "Severe respiratory depression can occur"
      ],
      "asides": [
        "The rest break remains quiet as the medicine can sedate.",
        "Marked sedation and confusion can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "prochlorperazine",
    "name": "Prochlorperazine",
    "aliases": [
      "Compazine"
    ],
    "category": "Medications",
    "className": "phenothiazine antipsychotic",
    "useContext": "Control of severe nausea/vomiting and treatment of schizophrenia; source covers tablets and suppositories.",
    "mechanism": "Phenothiazine dopamine antagonist with antiemetic and antipsychotic effects.",
    "effects": [
      "Can control severe nausea and vomiting",
      "Can treat schizophrenia"
    ],
    "risks": [
      "Movement disorders and tardive dyskinesia can occur",
      "Older adults with dementia face increased mortality risk"
    ],
    "interactionNote": "Alcohol, sedatives, QT-prolonging drugs, and other dopamine blockers need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Prochlorperazine",
        "url": "https://medlineplus.gov/druginfo/meds/a682116.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "muscle",
      "organs": [
        "gut"
      ],
      "cautions": [
        "muscle"
      ],
      "intent": "Reading a care card during treatment for severe nausea and vomiting.",
      "responseNotes": [
        "Severe nausea and vomiting can be controlled",
        "Dopamine-mediated emetic signaling is blocked"
      ],
      "riskNotes": [
        "Movement disorders and tardive dyskinesia can occur",
        "Older adults with dementia face increased mortality risk"
      ],
      "beats": [
        "Severe nausea and vomiting can be controlled",
        "Movement disorders and tardive dyskinesia can occur"
      ],
      "asides": [
        "The card keeps this anti-nausea treatment in context.",
        "Older adults with dementia face increased mortality risk"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "meclizine",
    "name": "Meclizine",
    "aliases": [
      "Antivert",
      "Bonine"
    ],
    "category": "Medications",
    "className": "antihistamine",
    "useContext": "Prevention and treatment of motion-sickness nausea, vomiting, and dizziness.",
    "mechanism": "Sedating antihistamine with anticholinergic effects.",
    "effects": [
      "Can reduce motion-related nausea",
      "Can ease dizziness"
    ],
    "risks": [
      "Drowsiness and fatigue can occur",
      "Blurred vision can occur"
    ],
    "interactionNote": "Alcohol, sedatives, and other anticholinergics increase impairment.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Meclizine",
        "url": "https://medlineplus.gov/druginfo/meds/a682548.html"
      }
    ],
    "scene": {
      "setting": "travel",
      "activity": "travel",
      "task": "packing",
      "prop": "suitcase",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "relief",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "sleepiness",
      "organs": [],
      "cautions": [],
      "intent": "Packing a bag before travel with a motion-sickness care plan.",
      "responseNotes": [
        "Can reduce motion-related nausea",
        "Can ease dizziness"
      ],
      "riskNotes": [
        "Drowsiness and fatigue can occur",
        "Blurred vision can occur"
      ],
      "beats": [
        "Can reduce motion-related nausea",
        "Drowsiness and fatigue can occur"
      ],
      "asides": [
        "The suitcase is packed before the journey begins.",
        "Blurred vision can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "dicyclomine",
    "name": "Dicyclomine",
    "aliases": [
      "Bentyl"
    ],
    "category": "Medications",
    "className": "antispasmodic",
    "useContext": "Treatment of symptoms of irritable bowel syndrome.",
    "mechanism": "Anticholinergic that reduces gastrointestinal smooth-muscle spasms.",
    "effects": [
      "Can reduce abdominal cramping",
      "Can ease IBS symptoms"
    ],
    "risks": [
      "Dry mouth and blurred vision can occur",
      "Confusion or heat illness can occur"
    ],
    "interactionNote": "Other anticholinergics and medicines slowing gut movement increase adverse effects.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Dicyclomine",
        "url": "https://medlineplus.gov/druginfo/meds/a684007.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "gut",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "dry-mouth",
      "timeCourse": "variable",
      "riskVisual": "dry-mouth",
      "organs": [
        "gut"
      ],
      "cautions": [],
      "intent": "Recording abdominal symptoms during irritable-bowel-syndrome treatment.",
      "responseNotes": [
        "Can reduce abdominal cramping",
        "Can ease IBS symptoms"
      ],
      "riskNotes": [
        "Dry mouth and blurred vision can occur",
        "Confusion or heat illness can occur"
      ],
      "beats": [
        "Can reduce abdominal cramping",
        "Dry mouth and blurred vision can occur"
      ],
      "asides": [
        "The diary keeps each day's symptoms together.",
        "Confusion or heat illness can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "loperamide",
    "name": "Loperamide",
    "aliases": [
      "Imodium"
    ],
    "category": "Medications",
    "className": "antidiarrheal",
    "useContext": "Symptomatic treatment of diarrhea.",
    "mechanism": "Peripheral opioid-receptor agonist that slows intestinal movement.",
    "effects": [
      "Can reduce diarrhea",
      "Can reduce stool frequency"
    ],
    "risks": [
      "Constipation or abdominal swelling can occur",
      "High doses can cause fatal heart rhythms"
    ],
    "interactionNote": "CYP3A4/P-gp inhibitors and QT-prolonging medicines raise risk; avoid excessive use.",
    "evidence": "Strong",
    "status": "otc",
    "sources": [
      {
        "label": "MedlinePlus · Loperamide",
        "url": "https://medlineplus.gov/druginfo/meds/a682280.html"
      }
    ],
    "scene": {
      "setting": "travel",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "gut",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [
        "gut"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Reviewing a diarrhea-care card while away from home.",
      "responseNotes": [
        "Can reduce diarrhea",
        "Can reduce stool frequency"
      ],
      "riskNotes": [
        "Constipation or abdominal swelling can occur",
        "High doses can cause fatal heart rhythms"
      ],
      "beats": [
        "Can reduce diarrhea",
        "Constipation or abdominal swelling can occur"
      ],
      "asides": [
        "The card keeps symptom care organized during travel.",
        "High doses can cause fatal heart rhythms"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "linaclotide",
    "name": "Linaclotide",
    "aliases": [
      "Linzess"
    ],
    "category": "Medications",
    "className": "guanylate cyclase c agonist",
    "useContext": "Treatment of irritable bowel syndrome with constipation and chronic idiopathic constipation.",
    "mechanism": "Guanylate cyclase-C agonist that increases intestinal fluid and transit.",
    "effects": [
      "Can improve bowel frequency",
      "Can relieve constipation-related symptoms"
    ],
    "risks": [
      "Severe diarrhea and dehydration can occur",
      "Not for children under 2 years"
    ],
    "interactionNote": "Other medicines that cause diarrhea may worsen fluid loss.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Linaclotide",
        "url": "https://medlineplus.gov/druginfo/meds/a613007.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "gut",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Updating a bowel-symptom diary during chronic constipation care.",
      "responseNotes": [
        "Can improve bowel frequency",
        "Can relieve constipation-related symptoms"
      ],
      "riskNotes": [
        "Severe diarrhea and dehydration can occur",
        "Not for children under 2 years"
      ],
      "beats": [
        "Can improve bowel frequency",
        "Severe diarrhea and dehydration can occur"
      ],
      "asides": [
        "The record follows a routine across several days.",
        "Not for children under 2 years"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "plecanatide",
    "name": "Plecanatide",
    "aliases": [
      "Trulance"
    ],
    "category": "Medications",
    "className": "guanylate cyclase c agonist",
    "useContext": "Treatment of chronic idiopathic constipation and IBS with constipation.",
    "mechanism": "Guanylate cyclase-C agonist that increases intestinal fluid and transit.",
    "effects": [
      "Can improve bowel frequency",
      "Can relieve constipation-related symptoms"
    ],
    "risks": [
      "Severe diarrhea and dehydration can occur",
      "Not for children under 6 years"
    ],
    "interactionNote": "Other medicines that cause diarrhea may worsen fluid loss.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Plecanatide",
        "url": "https://medlineplus.gov/druginfo/meds/a617020.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "gut",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "fluid",
      "organs": [
        "gut"
      ],
      "cautions": [],
      "intent": "Checking a daily-care list during IBS-with-constipation treatment.",
      "responseNotes": [
        "Can improve bowel frequency",
        "Can relieve constipation-related symptoms"
      ],
      "riskNotes": [
        "Severe diarrhea and dehydration can occur",
        "Not for children under 6 years"
      ],
      "beats": [
        "Can improve bowel frequency",
        "Severe diarrhea and dehydration can occur"
      ],
      "asides": [
        "The list keeps the care routine simple.",
        "Not for children under 6 years"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "lubiprostone",
    "name": "Lubiprostone",
    "aliases": [
      "Amitiza"
    ],
    "category": "Medications",
    "className": "chloride channel activator",
    "useContext": "Treatment of chronic constipation, IBS with constipation, and opioid-related constipation.",
    "mechanism": "Chloride-channel activator that increases intestinal fluid secretion.",
    "effects": [
      "Can improve bowel movements",
      "Can relieve constipation symptoms"
    ],
    "risks": [
      "Nausea and diarrhea can occur",
      "Shortness of breath or fainting can occur"
    ],
    "interactionNote": "Methadone may reduce effectiveness; other diarrhea-causing drugs can worsen fluid loss.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Lubiprostone",
        "url": "https://medlineplus.gov/druginfo/meds/a607034.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "gut",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Planning follow-up during chronic-constipation treatment.",
      "responseNotes": [
        "Can improve bowel movements",
        "Can relieve constipation symptoms"
      ],
      "riskNotes": [
        "Nausea and diarrhea can occur",
        "Shortness of breath or fainting can occur"
      ],
      "beats": [
        "Can improve bowel movements",
        "Nausea and diarrhea can occur"
      ],
      "asides": [
        "The calendar keeps the next care review visible.",
        "Shortness of breath or fainting can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "prucalopride",
    "name": "Prucalopride",
    "aliases": [
      "Motegrity"
    ],
    "category": "Medications",
    "className": "5ht4 agonist",
    "useContext": "Treatment of chronic idiopathic constipation in adults.",
    "mechanism": "Selective 5-HT4 agonist that increases intestinal motility.",
    "effects": [
      "Can increase bowel movement frequency",
      "Can relieve chronic constipation"
    ],
    "risks": [
      "Headache, nausea, or diarrhea can occur",
      "Mood changes or suicidal thoughts are reported"
    ],
    "interactionNote": "No major interaction highlighted in the article; review all medicines and mood changes.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Prucalopride",
        "url": "https://medlineplus.gov/druginfo/meds/a619011.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "typing",
      "prop": "phone",
      "motif": "gut",
      "mechanismStyle": "activate",
      "response": "relief",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Saving a symptom reminder during chronic-constipation care.",
      "responseNotes": [
        "Can increase bowel movement frequency",
        "Can relieve chronic constipation"
      ],
      "riskNotes": [
        "Headache, nausea, or diarrhea can occur",
        "Mood changes or suicidal thoughts are reported"
      ],
      "beats": [
        "Can increase bowel movement frequency",
        "Headache, nausea, or diarrhea can occur"
      ],
      "asides": [
        "The phone keeps the reminder close at hand.",
        "Mood changes or suicidal thoughts are reported"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "mesalamine",
    "name": "Mesalamine",
    "aliases": [
      "Asacol",
      "Lialda",
      "Pentasa"
    ],
    "category": "Medications",
    "className": "aminosalicylate",
    "useContext": "Treatment and maintenance of remission in ulcerative colitis.",
    "mechanism": "Aminosalicylate anti-inflammatory that acts in the intestinal lining.",
    "effects": [
      "Can reduce bowel inflammation",
      "Can help maintain remission"
    ],
    "risks": [
      "Kidney injury or pancreatitis can occur",
      "Severe allergic reaction can occur"
    ],
    "interactionNote": "NSAIDs and other kidney-affecting medicines require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Mesalamine",
        "url": "https://medlineplus.gov/druginfo/meds/a688021.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "clipboard",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "kidney",
      "organs": [
        "gut"
      ],
      "cautions": [
        "kidneys"
      ],
      "intent": "Writing follow-up questions during ulcerative-colitis maintenance care.",
      "responseNotes": [
        "Can reduce bowel inflammation",
        "Can help maintain remission"
      ],
      "riskNotes": [
        "Kidney injury or pancreatitis can occur",
        "Severe allergic reaction can occur"
      ],
      "beats": [
        "Can reduce bowel inflammation",
        "Kidney injury or pancreatitis can occur"
      ],
      "asides": [
        "The questions follow symptoms between appointments.",
        "Severe allergic reaction can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "amoxicillin",
    "name": "Amoxicillin",
    "aliases": [
      "Amoxil"
    ],
    "category": "Medications",
    "className": "penicillin antibiotic",
    "useContext": "Treatment of selected bacterial infections when an antibiotic is appropriate.",
    "mechanism": "Aminopenicillin beta-lactam that inhibits bacterial cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Allergic reactions can be severe",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Warfarin and methotrexate may be affected; antibiotics do not treat viral illnesses.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Amoxicillin",
        "url": "https://medlineplus.gov/druginfo/meds/a685001.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "recovery",
      "task": "reading",
      "prop": "book",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Reading at home during treatment of a susceptible bacterial infection.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Allergic reactions can be severe",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Allergic reactions can be severe"
      ],
      "asides": [
        "The bookmark keeps the page during recovery.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "ampicillin",
    "name": "Ampicillin",
    "aliases": [
      "Principen"
    ],
    "category": "Medications",
    "className": "penicillin antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Aminopenicillin beta-lactam that inhibits bacterial cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Allergic reactions can be severe",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Allopurinol can increase rash risk; warfarin and methotrexate require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ampicillin",
        "url": "https://medlineplus.gov/druginfo/meds/a685002.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "notebook",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Checking a home-care list during prescribed bacterial-infection treatment.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Allergic reactions can be severe",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Allergic reactions can be severe"
      ],
      "asides": [
        "The list holds the ordinary tasks of a recovery day.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "penicillin-v",
    "name": "Penicillin V",
    "aliases": [
      "Veetids"
    ],
    "category": "Medications",
    "className": "penicillin antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Penicillin beta-lactam that inhibits bacterial cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Allergic reactions can be severe",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Methotrexate and anticoagulants may be affected; antibiotics do not treat viral illness.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Penicillin V Potassium",
        "url": "https://medlineplus.gov/druginfo/meds/a685015.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "recovery",
      "task": "resting",
      "prop": "towel",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Resting during a clinician-directed bacterial-infection course.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Allergic reactions can be severe",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Allergic reactions can be severe"
      ],
      "asides": [
        "The scene follows an ordinary rest break.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "dicloxacillin",
    "name": "Dicloxacillin",
    "aliases": [
      "Dynapen"
    ],
    "category": "Medications",
    "className": "penicillin antibiotic",
    "useContext": "Treatment of selected staphylococcal bacterial infections.",
    "mechanism": "Penicillinase-resistant beta-lactam that inhibits bacterial cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Allergic reactions can be severe",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Warfarin effect may change; antibiotics do not treat viral illnesses.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Dicloxacillin",
        "url": "https://medlineplus.gov/druginfo/meds/a685017.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Reviewing a care card for a susceptible staphylococcal infection.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Allergic reactions can be severe",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Allergic reactions can be severe"
      ],
      "asides": [
        "The card keeps the antibiotic course in context.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "cephalexin",
    "name": "Cephalexin",
    "aliases": [
      "Keflex"
    ],
    "category": "Medications",
    "className": "cephalosporin antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "First-generation cephalosporin beta-lactam that inhibits cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Allergic reactions can be severe",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Warfarin and metformin may require review; antibiotics do not treat viral illness.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Cephalexin",
        "url": "https://medlineplus.gov/druginfo/meds/a682733.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Writing questions during treatment of a susceptible bacterial infection.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Allergic reactions can be severe",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Allergic reactions can be severe"
      ],
      "asides": [
        "The questions stay with the care record.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "cefuroxime",
    "name": "Cefuroxime",
    "aliases": [
      "Ceftin"
    ],
    "category": "Medications",
    "className": "cephalosporin antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Second-generation cephalosporin beta-lactam that inhibits cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Allergic reactions can be severe",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Antacids reduce absorption; warfarin may require monitoring.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Cefuroxime",
        "url": "https://medlineplus.gov/druginfo/meds/a601206.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Planning follow-up while recovering from a bacterial infection.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Allergic reactions can be severe",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Allergic reactions can be severe"
      ],
      "asides": [
        "The calendar marks the next check-in.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "cefdinir",
    "name": "Cefdinir",
    "aliases": [
      "Omnicef"
    ],
    "category": "Medications",
    "className": "cephalosporin antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Third-generation cephalosporin beta-lactam that inhibits cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Allergic reactions can be severe",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Iron supplements and aluminum/magnesium antacids reduce absorption.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Cefdinir",
        "url": "https://medlineplus.gov/druginfo/meds/a698001.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "recovery",
      "task": "meal",
      "prop": "plate",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Sitting down to an ordinary meal during bacterial-infection care.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Allergic reactions can be severe",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Allergic reactions can be severe"
      ],
      "asides": [
        "Recovery still includes ordinary meals.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "cefpodoxime",
    "name": "Cefpodoxime",
    "aliases": [
      "Vantin"
    ],
    "category": "Medications",
    "className": "cephalosporin antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Third-generation cephalosporin beta-lactam that inhibits cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Allergic reactions can be severe",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Antacids and H2 blockers can reduce absorption; take with clinician guidance.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Cefpodoxime",
        "url": "https://medlineplus.gov/druginfo/meds/a698024.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "typing",
      "prop": "phone",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Saving a follow-up reminder during bacterial-infection treatment.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Allergic reactions can be severe",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Allergic reactions can be severe"
      ],
      "asides": [
        "The reminder belongs to the recovery routine.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "ceftriaxone",
    "name": "Ceftriaxone",
    "aliases": [
      "Rocephin"
    ],
    "category": "Medications",
    "className": "cephalosporin antibiotic",
    "useContext": "Treatment of selected serious bacterial infections; source covers injection.",
    "mechanism": "Third-generation cephalosporin beta-lactam that inhibits cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear serious bacterial illness"
    ],
    "risks": [
      "Allergic reactions can be severe",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Calcium-containing IV products have specific compatibility restrictions, especially in neonates.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ceftriaxone Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a685032.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "reading",
      "prop": "book",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Reading care information during injection treatment for a serious infection.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear serious bacterial illness"
      ],
      "riskNotes": [
        "Allergic reactions can be severe",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Allergic reactions can be severe"
      ],
      "asides": [
        "The scene follows a clinician-managed treatment.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "cefazolin",
    "name": "Cefazolin",
    "aliases": [
      "Ancef"
    ],
    "category": "Medications",
    "className": "cephalosporin antibiotic",
    "useContext": "Treatment or prevention of selected bacterial infections; source covers injection.",
    "mechanism": "First-generation cephalosporin beta-lactam that inhibits cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can prevent selected surgical infections"
    ],
    "risks": [
      "Allergic reactions can be severe",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Warfarin may require monitoring; review beta-lactam allergy history.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Cefazolin Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a682731.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Checking a surgical-care list that includes infection prevention.",
      "responseNotes": [
        "Selected surgical infections can be prevented",
        "Bacterial cell-wall synthesis is inhibited"
      ],
      "riskNotes": [
        "Allergic reactions can be severe",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Selected surgical infections can be prevented",
        "Allergic reactions can be severe"
      ],
      "asides": [
        "The checklist is part of the surgical care plan.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "cefepime",
    "name": "Cefepime",
    "aliases": [
      "Maxipime"
    ],
    "category": "Medications",
    "className": "cephalosporin antibiotic",
    "useContext": "Treatment of selected serious bacterial infections; source covers injection.",
    "mechanism": "Fourth-generation cephalosporin beta-lactam that inhibits cell-wall synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear serious bacterial illness"
    ],
    "risks": [
      "Neurotoxicity or seizures can occur",
      "Allergic reactions and colitis can occur"
    ],
    "interactionNote": "Kidney impairment raises neurotoxicity risk; review other kidney-affecting drugs.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Cefepime Injection",
        "url": "https://medlineplus.gov/druginfo/meds/a698021.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "organizer",
      "prop": "care-card",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "seizure",
      "organs": [],
      "cautions": [
        "brain"
      ],
      "intent": "Organizing care cards during treatment for a serious bacterial infection.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear serious bacterial illness"
      ],
      "riskNotes": [
        "Neurotoxicity or seizures can occur",
        "Allergic reactions and colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Neurotoxicity or seizures can occur"
      ],
      "asides": [
        "The care team follows both the infection and treatment risks.",
        "Allergic reactions and colitis can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "azithromycin",
    "name": "Azithromycin",
    "aliases": [
      "Zithromax",
      "Z-Pak"
    ],
    "category": "Medications",
    "className": "macrolide antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Macrolide antibiotic that inhibits bacterial protein synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "QT prolongation and arrhythmia can occur",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "QT-prolonging drugs and warfarin require review; antibiotics do not treat viral illness.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Azithromycin",
        "url": "https://medlineplus.gov/druginfo/meds/a697037.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [
        "heart"
      ],
      "intent": "Recording questions during a prescribed bacterial-infection course.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "QT prolongation and arrhythmia can occur",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "QT prolongation and arrhythmia can occur"
      ],
      "asides": [
        "The notebook keeps the questions for the next conversation.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "clarithromycin",
    "name": "Clarithromycin",
    "aliases": [
      "Biaxin"
    ],
    "category": "Medications",
    "className": "macrolide antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Macrolide antibiotic that inhibits bacterial protein synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "QT prolongation and arrhythmia can occur",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "Strong CYP3A4 inhibitor; interacts with statins, colchicine, and many other drugs.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Clarithromycin",
        "url": "https://medlineplus.gov/druginfo/meds/a692005.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [
        "heart"
      ],
      "intent": "Reading during a rest break in bacterial-infection treatment.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "QT prolongation and arrhythmia can occur",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "QT prolongation and arrhythmia can occur"
      ],
      "asides": [
        "The next page can wait through the rest break.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "erythromycin",
    "name": "Erythromycin",
    "aliases": [
      "Ery-Tab"
    ],
    "category": "Medications",
    "className": "macrolide antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Macrolide antibiotic that inhibits bacterial protein synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "QT prolongation and arrhythmia can occur",
      "Diarrhea and antibiotic-associated colitis can occur"
    ],
    "interactionNote": "CYP3A4 interactions are common; QT-prolonging drugs require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Erythromycin",
        "url": "https://medlineplus.gov/druginfo/meds/a682381.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [
        "heart"
      ],
      "intent": "Organizing treatment notes while recovering from a bacterial infection.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "QT prolongation and arrhythmia can occur",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "QT prolongation and arrhythmia can occur"
      ],
      "asides": [
        "The notes keep the course and follow-up together.",
        "Diarrhea and antibiotic-associated colitis can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "doxycycline",
    "name": "Doxycycline",
    "aliases": [
      "Vibramycin"
    ],
    "category": "Medications",
    "className": "tetracycline antibiotic",
    "useContext": "Treatment of selected bacterial infections and other clinician-directed conditions.",
    "mechanism": "Tetracycline antibiotic that inhibits bacterial protein synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Sun sensitivity and esophageal irritation can occur",
      "Fetal and tooth/bone effects are concerns"
    ],
    "interactionNote": "Iron, calcium, magnesium, and antacids reduce absorption; warfarin may be affected.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Doxycycline",
        "url": "https://medlineplus.gov/druginfo/meds/a682063.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "skin",
      "organs": [],
      "cautions": [
        "skin"
      ],
      "intent": "Reviewing a care card during prescribed bacterial-infection treatment.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Sun sensitivity and esophageal irritation can occur",
        "Fetal and tooth/bone effects are concerns"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Sun sensitivity and esophageal irritation can occur"
      ],
      "asides": [
        "The card includes the treatment's sun-sensitivity concern.",
        "Fetal and tooth/bone effects are concerns"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "minocycline",
    "name": "Minocycline",
    "aliases": [
      "Minocin"
    ],
    "category": "Medications",
    "className": "tetracycline antibiotic",
    "useContext": "Treatment of selected bacterial infections and acne.",
    "mechanism": "Tetracycline antibiotic that inhibits bacterial protein synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can improve acne"
    ],
    "risks": [
      "Dizziness and skin pigmentation can occur",
      "Severe allergic or autoimmune reactions can occur"
    ],
    "interactionNote": "Iron, calcium, magnesium, and antacids reduce absorption; warfarin may be affected.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Minocycline",
        "url": "https://medlineplus.gov/druginfo/meds/a682101.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "mirror",
      "prop": "mirror",
      "motif": "skin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "riskVisual": "skin",
      "organs": [
        "skin"
      ],
      "cautions": [
        "skin"
      ],
      "intent": "Checking acne in a mirror during prescribed oral treatment.",
      "responseNotes": [
        "Acne can improve during prescribed treatment",
        "Bacterial protein synthesis is inhibited"
      ],
      "riskNotes": [
        "Dizziness and skin pigmentation can occur",
        "Severe allergic or autoimmune reactions can occur"
      ],
      "beats": [
        "Acne can improve during prescribed treatment",
        "Dizziness and skin pigmentation can occur"
      ],
      "asides": [
        "The mirror follows changes across the treatment course.",
        "Severe allergic or autoimmune reactions can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "clindamycin",
    "name": "Clindamycin",
    "aliases": [
      "Cleocin"
    ],
    "category": "Medications",
    "className": "lincosamide antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Lincosamide antibiotic that inhibits bacterial protein synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Severe antibiotic-associated colitis can occur",
      "Allergic skin reactions can occur"
    ],
    "interactionNote": "Neuromuscular blockers may have stronger effects; antibiotics do not treat viral illness.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Clindamycin",
        "url": "https://medlineplus.gov/druginfo/meds/a682399.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Recording symptoms during a clinician-directed bacterial-infection course.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Severe antibiotic-associated colitis can occur",
        "Allergic skin reactions can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Severe antibiotic-associated colitis can occur"
      ],
      "asides": [
        "The record makes room for changes during recovery.",
        "Allergic skin reactions can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "metronidazole",
    "name": "Metronidazole",
    "aliases": [
      "Flagyl"
    ],
    "category": "Medications",
    "className": "nitroimidazole antibiotic",
    "useContext": "Treatment of selected bacterial and protozoal infections.",
    "mechanism": "Nitroimidazole antimicrobial that inhibits susceptible microbes.",
    "effects": [
      "Can treat susceptible infections",
      "Can clear bacterial or protozoal illness"
    ],
    "risks": [
      "Nausea and metallic taste can occur",
      "Peripheral nerve effects can occur"
    ],
    "interactionNote": "Warfarin and lithium require review; alcohol interaction warnings apply during treatment and after.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Metronidazole",
        "url": "https://medlineplus.gov/druginfo/meds/a689011.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Organizing a prescribed care plan for a susceptible bacterial infection.",
      "responseNotes": [
        "Selected bacterial infections can be treated",
        "Susceptible organisms suffer DNA damage"
      ],
      "riskNotes": [
        "Nausea and metallic taste can occur",
        "Peripheral nerve effects can occur"
      ],
      "beats": [
        "Selected bacterial infections can be treated",
        "Nausea and metallic taste can occur"
      ],
      "asides": [
        "The cards keep the treatment details together.",
        "Peripheral nerve effects can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "nitrofurantoin",
    "name": "Nitrofurantoin",
    "aliases": [
      "Macrobid",
      "Macrodantin"
    ],
    "category": "Medications",
    "className": "urinary antibiotic",
    "useContext": "Treatment of selected urinary tract infections.",
    "mechanism": "Nitrofuran antibacterial that damages bacterial processes in the urinary tract.",
    "effects": [
      "Can treat susceptible urinary infection",
      "Can clear bladder infection"
    ],
    "risks": [
      "Lung or liver injury can occur",
      "Nerve damage and hemolysis are possible"
    ],
    "interactionNote": "Magnesium trisilicate antacids and probenecid can affect use; kidney function matters.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Nitrofurantoin",
        "url": "https://medlineplus.gov/druginfo/meds/a682291.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "liver",
      "organs": [
        "bladder"
      ],
      "cautions": [
        "liver",
        "lungs"
      ],
      "intent": "Updating a symptom diary during bladder-infection treatment.",
      "responseNotes": [
        "Can treat susceptible urinary infection",
        "Can clear bladder infection"
      ],
      "riskNotes": [
        "Lung or liver injury can occur",
        "Nerve damage and hemolysis are possible"
      ],
      "beats": [
        "Can treat susceptible urinary infection",
        "Lung or liver injury can occur"
      ],
      "asides": [
        "The diary tracks the days of urinary-infection care.",
        "Nerve damage and hemolysis are possible"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "fosfomycin",
    "name": "Fosfomycin",
    "aliases": [
      "Monurol"
    ],
    "category": "Medications",
    "className": "urinary antibiotic",
    "useContext": "Treatment of uncomplicated urinary tract infection in selected patients.",
    "mechanism": "Phosphonic-acid antibiotic that inhibits bacterial cell-wall synthesis.",
    "effects": [
      "Can treat susceptible urinary infection",
      "Can clear bladder infection"
    ],
    "risks": [
      "Diarrhea or headache can occur",
      "Allergic reaction can occur"
    ],
    "interactionNote": "Metoclopramide can lower fosfomycin levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Fosfomycin",
        "url": "https://medlineplus.gov/druginfo/meds/a697008.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [
        "bladder"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Reading a care card during treatment for an uncomplicated urinary infection.",
      "responseNotes": [
        "Can treat susceptible urinary infection",
        "Can clear bladder infection"
      ],
      "riskNotes": [
        "Diarrhea or headache can occur",
        "Allergic reaction can occur"
      ],
      "beats": [
        "Can treat susceptible urinary infection",
        "Diarrhea or headache can occur"
      ],
      "asides": [
        "The card connects treatment with the symptom record.",
        "Allergic reaction can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "trimethoprim",
    "name": "Trimethoprim",
    "aliases": [
      "Proloprim"
    ],
    "category": "Medications",
    "className": "folate antagonist antibiotic",
    "useContext": "Treatment of selected urinary tract infections.",
    "mechanism": "Antibacterial folate antagonist that inhibits bacterial dihydrofolate reductase.",
    "effects": [
      "Can treat susceptible urinary infection",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Rash or severe skin reaction can occur",
      "Blood-cell abnormalities can occur"
    ],
    "interactionNote": "Warfarin, methotrexate, and potassium-raising medicines require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Trimethoprim",
        "url": "https://medlineplus.gov/druginfo/meds/a684025.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "skin",
      "organs": [
        "bladder"
      ],
      "cautions": [
        "skin"
      ],
      "intent": "Checking follow-up notes during urinary-tract-infection treatment.",
      "responseNotes": [
        "Can treat susceptible urinary infection",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Rash or severe skin reaction can occur",
        "Blood-cell abnormalities can occur"
      ],
      "beats": [
        "Can treat susceptible urinary infection",
        "Rash or severe skin reaction can occur"
      ],
      "asides": [
        "The checklist keeps the follow-up details together.",
        "Blood-cell abnormalities can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "ciprofloxacin",
    "name": "Ciprofloxacin",
    "aliases": [
      "Cipro"
    ],
    "category": "Medications",
    "className": "fluoroquinolone antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Fluoroquinolone that inhibits bacterial DNA gyrase and topoisomerase.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Tendon injury and nerve effects can be disabling",
      "QT changes or CNS effects can occur"
    ],
    "interactionNote": "Iron, calcium, magnesium, antacids, and warfarin require review; tizanidine is contraindicated.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ciprofloxacin",
        "url": "https://medlineplus.gov/druginfo/meds/a688016.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "notebook",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "tendon",
      "organs": [],
      "cautions": [],
      "intent": "Writing questions about a selected bacterial-infection treatment.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Tendon injury and nerve effects can be disabling",
        "QT changes or CNS effects can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Tendon injury and nerve effects can be disabling"
      ],
      "asides": [
        "The discussion includes the tendon and nerve risks.",
        "QT changes or CNS effects can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "levofloxacin",
    "name": "Levofloxacin",
    "aliases": [
      "Levaquin"
    ],
    "category": "Medications",
    "className": "fluoroquinolone antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Fluoroquinolone that inhibits bacterial DNA gyrase and topoisomerase.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Tendon injury and nerve effects can be disabling",
      "QT changes or CNS effects can occur"
    ],
    "interactionNote": "Iron, calcium, magnesium, antacids, and warfarin require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Levofloxacin",
        "url": "https://medlineplus.gov/druginfo/meds/a697040.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "tendon",
      "organs": [],
      "cautions": [],
      "intent": "Planning follow-up during a clinician-selected antibiotic course.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Tendon injury and nerve effects can be disabling",
        "QT changes or CNS effects can occur"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Tendon injury and nerve effects can be disabling"
      ],
      "asides": [
        "The calendar tracks the next recovery check.",
        "QT changes or CNS effects can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "moxifloxacin",
    "name": "Moxifloxacin",
    "aliases": [
      "Avelox"
    ],
    "category": "Medications",
    "className": "fluoroquinolone antibiotic",
    "useContext": "Treatment of selected susceptible bacterial infections.",
    "mechanism": "Fluoroquinolone that inhibits bacterial DNA gyrase and topoisomerase.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can clear bacterial illness"
    ],
    "risks": [
      "Tendon injury and nerve effects can be disabling",
      "QT prolongation can cause serious arrhythmia"
    ],
    "interactionNote": "QT-prolonging drugs and mineral-containing antacids require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Moxifloxacin",
        "url": "https://medlineplus.gov/druginfo/meds/a600002.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "reading",
      "prop": "clipboard",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [
        "heart"
      ],
      "intent": "Reading a treatment record for a susceptible bacterial infection.",
      "responseNotes": [
        "Can treat susceptible bacterial infections",
        "Can clear bacterial illness"
      ],
      "riskNotes": [
        "Tendon injury and nerve effects can be disabling",
        "QT prolongation can cause serious arrhythmia"
      ],
      "beats": [
        "Can treat susceptible bacterial infections",
        "Tendon injury and nerve effects can be disabling"
      ],
      "asides": [
        "The record includes the heart-rhythm precautions.",
        "QT prolongation can cause serious arrhythmia"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "linezolid",
    "name": "Linezolid",
    "aliases": [
      "Zyvox"
    ],
    "category": "Medications",
    "className": "oxazolidinone antibiotic",
    "useContext": "Treatment of selected resistant gram-positive bacterial infections.",
    "mechanism": "Oxazolidinone antibiotic that inhibits bacterial protein synthesis.",
    "effects": [
      "Can treat selected resistant infections",
      "Can clear susceptible bacterial illness"
    ],
    "risks": [
      "Low blood counts and nerve injury can occur",
      "Serotonin syndrome can occur"
    ],
    "interactionNote": "Serotonergic drugs, sympathomimetics, and tyramine-rich foods require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Linezolid",
        "url": "https://medlineplus.gov/druginfo/meds/a602004.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "organizer",
      "prop": "notebook",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "serotonin",
      "organs": [],
      "cautions": [],
      "intent": "Organizing medication notes during treatment of a resistant bacterial infection.",
      "responseNotes": [
        "Can treat selected resistant infections",
        "Can clear susceptible bacterial illness"
      ],
      "riskNotes": [
        "Low blood counts and nerve injury can occur",
        "Serotonin syndrome can occur"
      ],
      "beats": [
        "Can treat selected resistant infections",
        "Low blood counts and nerve injury can occur"
      ],
      "asides": [
        "The medication list matters to the interaction review.",
        "Serotonin syndrome can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "vancomycin",
    "name": "Vancomycin",
    "aliases": [
      "Vancocin"
    ],
    "category": "Medications",
    "className": "glycopeptide antibiotic",
    "useContext": "Treatment of selected serious bacterial infections; this article covers oral use.",
    "mechanism": "Glycopeptide antibiotic that inhibits bacterial cell-wall synthesis.",
    "effects": [
      "Can treat selected intestinal infection",
      "Can clear susceptible bacterial illness"
    ],
    "risks": [
      "Kidney injury can occur with systemic exposure",
      "Serious allergic reactions can occur"
    ],
    "interactionNote": "Other kidney-toxic drugs increase risk; oral and IV uses have different indications.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Vancomycin",
        "url": "https://medlineplus.gov/druginfo/meds/a604038.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "kidney",
      "organs": [
        "gut"
      ],
      "cautions": [
        "kidneys"
      ],
      "intent": "Reviewing a care card for oral treatment of an intestinal infection.",
      "responseNotes": [
        "Selected intestinal infection can be treated",
        "Bacterial cell-wall synthesis is inhibited"
      ],
      "riskNotes": [
        "Kidney injury can occur with systemic exposure",
        "Serious allergic reactions can occur"
      ],
      "beats": [
        "Selected intestinal infection can be treated",
        "Kidney injury can occur with systemic exposure"
      ],
      "asides": [
        "This scene follows the intestinal indication of oral treatment.",
        "Serious allergic reactions can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "rifampin",
    "name": "Rifampin",
    "aliases": [
      "Rifadin"
    ],
    "category": "Medications",
    "className": "rifamycin antibiotic",
    "useContext": "Treatment of tuberculosis and selected other bacterial infections.",
    "mechanism": "Rifamycin antibiotic that inhibits bacterial RNA synthesis.",
    "effects": [
      "Can treat susceptible bacterial infections",
      "Can be part of tuberculosis treatment"
    ],
    "risks": [
      "Liver injury can occur",
      "Body fluids may turn orange-red"
    ],
    "interactionNote": "Strong enzyme induction lowers levels of many medicines, including contraceptives and anticoagulants.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Rifampin",
        "url": "https://medlineplus.gov/druginfo/meds/a682403.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Checking a follow-up list during a tuberculosis treatment plan.",
      "responseNotes": [
        "Treatment can help control tuberculosis",
        "Bacterial RNA synthesis is inhibited"
      ],
      "riskNotes": [
        "Liver injury can occur",
        "Body fluids may turn orange-red"
      ],
      "beats": [
        "Treatment can help control tuberculosis",
        "Liver injury can occur"
      ],
      "asides": [
        "The list follows a monitored treatment course.",
        "Body fluids may turn orange-red"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "isoniazid",
    "name": "Isoniazid",
    "aliases": [
      "Nydrazid"
    ],
    "category": "Medications",
    "className": "antimycobacterial",
    "useContext": "Treatment and prevention of tuberculosis under clinician supervision.",
    "mechanism": "Antimycobacterial that inhibits mycolic-acid synthesis.",
    "effects": [
      "Can treat tuberculosis",
      "Can prevent progression of latent infection"
    ],
    "risks": [
      "Liver injury can be severe",
      "Peripheral neuropathy can occur"
    ],
    "interactionNote": "Alcohol increases liver risk; phenytoin and carbamazepine levels may rise.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Isoniazid",
        "url": "https://medlineplus.gov/druginfo/meds/a682401.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "planning",
      "prop": "calendar",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Planning follow-up during treatment of latent tuberculosis infection.",
      "responseNotes": [
        "Progression of latent tuberculosis can be prevented",
        "Mycolic-acid synthesis in mycobacteria is inhibited"
      ],
      "riskNotes": [
        "Liver injury can be severe",
        "Peripheral neuropathy can occur"
      ],
      "beats": [
        "Progression of latent tuberculosis can be prevented",
        "Liver injury can be severe"
      ],
      "asides": [
        "The calendar supports prevention over a longer course.",
        "Peripheral neuropathy can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "acyclovir",
    "name": "Acyclovir",
    "aliases": [
      "Zovirax"
    ],
    "category": "Medications",
    "className": "antiviral",
    "useContext": "Treatment of herpes-virus infections including genital herpes, shingles, and chickenpox.",
    "mechanism": "Nucleoside antiviral that inhibits viral DNA replication.",
    "effects": [
      "Can shorten or control herpes outbreaks",
      "Can reduce viral replication"
    ],
    "risks": [
      "Kidney injury or neurologic effects can occur",
      "Nausea or diarrhea can occur"
    ],
    "interactionNote": "Other kidney-affecting medicines and dehydration raise kidney-injury risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Acyclovir",
        "url": "https://medlineplus.gov/druginfo/meds/a681045.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "recovery",
      "task": "reading",
      "prop": "book",
      "motif": "virus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "variable",
      "riskVisual": "kidney",
      "organs": [],
      "cautions": [
        "kidneys"
      ],
      "intent": "Reading during a rest break in herpes-outbreak treatment.",
      "responseNotes": [
        "Can shorten or control herpes outbreaks",
        "Can reduce viral replication"
      ],
      "riskNotes": [
        "Kidney injury or neurologic effects can occur",
        "Nausea or diarrhea can occur"
      ],
      "beats": [
        "Can shorten or control herpes outbreaks",
        "Kidney injury or neurologic effects can occur"
      ],
      "asides": [
        "The bookmark waits through the recovery break.",
        "Nausea or diarrhea can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "valacyclovir",
    "name": "Valacyclovir",
    "aliases": [
      "Valtrex"
    ],
    "category": "Medications",
    "className": "antiviral",
    "useContext": "Treatment or suppression of herpes-virus infections.",
    "mechanism": "Prodrug converted to acyclovir, which inhibits viral DNA replication.",
    "effects": [
      "Can shorten or suppress herpes outbreaks",
      "Can reduce viral replication"
    ],
    "risks": [
      "Kidney injury or neurologic effects can occur",
      "Nausea or headache can occur"
    ],
    "interactionNote": "Other kidney-affecting medicines and dehydration raise kidney-injury risk.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Valacyclovir",
        "url": "https://medlineplus.gov/druginfo/meds/a695010.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "virus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "riskVisual": "kidney",
      "organs": [],
      "cautions": [
        "kidneys"
      ],
      "intent": "Planning follow-up during prescribed herpes-suppression care.",
      "responseNotes": [
        "Herpes outbreaks can be suppressed",
        "Herpes-virus DNA replication is inhibited"
      ],
      "riskNotes": [
        "Kidney injury or neurologic effects can occur",
        "Nausea or headache can occur"
      ],
      "beats": [
        "Herpes outbreaks can be suppressed",
        "Kidney injury or neurologic effects can occur"
      ],
      "asides": [
        "The calendar follows a longer prevention routine.",
        "Nausea or headache can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "famciclovir",
    "name": "Famciclovir",
    "aliases": [
      "Famvir"
    ],
    "category": "Medications",
    "className": "antiviral",
    "useContext": "Treatment of selected herpes-virus infections, including shingles and genital herpes.",
    "mechanism": "Prodrug antiviral that inhibits herpes-virus DNA replication.",
    "effects": [
      "Can shorten herpes outbreaks",
      "Can reduce viral replication"
    ],
    "risks": [
      "Headache or nausea can occur",
      "Kidney impairment may raise adverse-effect risk"
    ],
    "interactionNote": "Probenecid can increase exposure; kidney function affects dosing and safety.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Famciclovir",
        "url": "https://medlineplus.gov/druginfo/meds/a694038.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "rest",
      "task": "resting",
      "prop": "towel",
      "motif": "virus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Resting during clinician-managed shingles treatment.",
      "responseNotes": [
        "Shingles outbreaks can be shortened",
        "Herpes-virus DNA replication is inhibited"
      ],
      "riskNotes": [
        "Headache or nausea can occur",
        "Kidney impairment may raise adverse-effect risk"
      ],
      "beats": [
        "Shingles outbreaks can be shortened",
        "Headache or nausea can occur"
      ],
      "asides": [
        "The scene keeps the treatment within a recovery day.",
        "Kidney impairment may raise adverse-effect risk"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "oseltamivir",
    "name": "Oseltamivir",
    "aliases": [
      "Tamiflu"
    ],
    "category": "Medications",
    "className": "antiviral",
    "useContext": "Treatment or prevention of influenza A and B in selected patients.",
    "mechanism": "Neuraminidase inhibitor that limits release of influenza virus.",
    "effects": [
      "Can shorten flu illness",
      "Can prevent influenza in some exposures"
    ],
    "risks": [
      "Nausea and vomiting can occur",
      "Confusion or unusual behavior is reported rarely"
    ],
    "interactionNote": "Probenecid can increase levels; live attenuated influenza vaccine timing requires review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Oseltamivir",
        "url": "https://medlineplus.gov/druginfo/meds/a699040.html"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "recovery",
      "task": "resting",
      "prop": "cup",
      "motif": "virus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Resting at home during prescribed influenza treatment.",
      "responseNotes": [
        "Influenza illness can be shortened",
        "Release of new influenza virus is limited"
      ],
      "riskNotes": [
        "Nausea and vomiting can occur",
        "Confusion or unusual behavior is reported rarely"
      ],
      "beats": [
        "Influenza illness can be shortened",
        "Nausea and vomiting can occur"
      ],
      "asides": [
        "A quiet room is part of the ordinary flu-care setting.",
        "Confusion or unusual behavior is reported rarely"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "valganciclovir",
    "name": "Valganciclovir",
    "aliases": [
      "Valcyte"
    ],
    "category": "Medications",
    "className": "antiviral",
    "useContext": "Prevention or treatment of cytomegalovirus disease in selected patients.",
    "mechanism": "Prodrug of ganciclovir that inhibits viral DNA synthesis.",
    "effects": [
      "Can suppress cytomegalovirus",
      "Can prevent CMV disease in transplant care"
    ],
    "risks": [
      "Can lower red and white blood cells and platelets",
      "Kidney injury risk rises with renal disease or interacting drugs"
    ],
    "interactionNote": "Other marrow-suppressing or nephrotoxic drugs can increase serious risks.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Valganciclovir",
        "url": "https://medlineplus.gov/druginfo/meds/a605021.html"
      },
      {
        "label": "DailyMed · Valganciclovir label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ddfb4e0e-64f5-4654-8670-91b8b6abe794"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "organizer",
      "prop": "care-card",
      "motif": "virus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "blood-cells",
      "organs": [],
      "cautions": [
        "kidneys"
      ],
      "intent": "Organizing follow-up cards during CMV prevention after transplantation.",
      "responseNotes": [
        "CMV disease can be prevented in selected transplant care",
        "Viral DNA synthesis is inhibited"
      ],
      "riskNotes": [
        "Can lower red and white blood cells and platelets",
        "Kidney injury risk rises with renal disease or interacting drugs"
      ],
      "beats": [
        "CMV disease can be prevented in selected transplant care",
        "Can lower red and white blood cells and platelets"
      ],
      "asides": [
        "The cards connect specialist monitoring with home care.",
        "Kidney injury risk rises with renal disease or interacting drugs"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "fluconazole",
    "name": "Fluconazole",
    "aliases": [
      "Diflucan"
    ],
    "category": "Medications",
    "className": "azole antifungal",
    "useContext": "Treatment of selected yeast and fungal infections.",
    "mechanism": "Triazole antifungal that inhibits fungal ergosterol synthesis.",
    "effects": [
      "Can treat susceptible fungal infections",
      "Can clear yeast infection"
    ],
    "risks": [
      "Liver injury and QT prolongation can occur",
      "Rash or severe skin reaction can occur"
    ],
    "interactionNote": "Inhibits drug metabolism; warfarin, statins, and QT-prolonging drugs need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Fluconazole",
        "url": "https://medlineplus.gov/druginfo/meds/a690002.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "fungus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Reading a care card during treatment for a susceptible yeast infection.",
      "responseNotes": [
        "Can treat susceptible fungal infections",
        "Can clear yeast infection"
      ],
      "riskNotes": [
        "Liver injury and QT prolongation can occur",
        "Rash or severe skin reaction can occur"
      ],
      "beats": [
        "Can treat susceptible fungal infections",
        "Liver injury and QT prolongation can occur"
      ],
      "asides": [
        "The care card keeps the treatment and follow-up together.",
        "Rash or severe skin reaction can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "itraconazole",
    "name": "Itraconazole",
    "aliases": [
      "Sporanox"
    ],
    "category": "Medications",
    "className": "azole antifungal",
    "useContext": "Treatment of selected systemic fungal infections.",
    "mechanism": "Triazole antifungal that inhibits fungal ergosterol synthesis.",
    "effects": [
      "Can treat susceptible fungal infections",
      "Can clear systemic fungal illness"
    ],
    "risks": [
      "Can worsen heart failure",
      "Liver injury and serious interactions can occur"
    ],
    "interactionNote": "Strong CYP3A4 inhibitor; many drugs interact, and acid reducers can affect capsule absorption.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Itraconazole",
        "url": "https://medlineplus.gov/druginfo/meds/a692049.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "notebook",
      "motif": "fungus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "fluid",
      "organs": [],
      "cautions": [
        "heart"
      ],
      "intent": "Noting questions during systemic fungal-infection treatment.",
      "responseNotes": [
        "Can treat susceptible fungal infections",
        "Can clear systemic fungal illness"
      ],
      "riskNotes": [
        "Can worsen heart failure",
        "Liver injury and serious interactions can occur"
      ],
      "beats": [
        "Can treat susceptible fungal infections",
        "Can worsen heart failure"
      ],
      "asides": [
        "The questions include heart and interaction risks.",
        "Liver injury and serious interactions can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "voriconazole",
    "name": "Voriconazole",
    "aliases": [
      "Vfend"
    ],
    "category": "Medications",
    "className": "azole antifungal",
    "useContext": "Treatment of selected serious fungal infections.",
    "mechanism": "Triazole antifungal that inhibits fungal ergosterol synthesis.",
    "effects": [
      "Can treat serious fungal infections",
      "Can clear susceptible fungal illness"
    ],
    "risks": [
      "Visual effects and liver injury can occur",
      "QT prolongation and photosensitivity can occur"
    ],
    "interactionNote": "Many CYP interactions; warfarin, tacrolimus, and QT-prolonging drugs need review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Voriconazole",
        "url": "https://medlineplus.gov/druginfo/meds/a605022.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "fungus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sensitivity",
      "timeCourse": "variable",
      "riskVisual": "vision",
      "organs": [],
      "cautions": [
        "eyes",
        "liver"
      ],
      "intent": "Checking follow-up details during treatment of a serious fungal infection.",
      "responseNotes": [
        "Can treat serious fungal infections",
        "Can clear susceptible fungal illness"
      ],
      "riskNotes": [
        "Visual effects and liver injury can occur",
        "QT prolongation and photosensitivity can occur"
      ],
      "beats": [
        "Can treat serious fungal infections",
        "Visual effects and liver injury can occur"
      ],
      "asides": [
        "The record includes changes in vision and skin sensitivity.",
        "QT prolongation and photosensitivity can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "terbinafine",
    "name": "Terbinafine",
    "aliases": [
      "Lamisil"
    ],
    "category": "Medications",
    "className": "allylamine antifungal",
    "useContext": "Treatment of selected fungal skin and nail infections.",
    "mechanism": "Allylamine antifungal that inhibits fungal squalene epoxidase.",
    "effects": [
      "Can treat fungal nail infection",
      "Can clear susceptible fungal infection"
    ],
    "risks": [
      "Liver injury can be severe",
      "Taste or smell changes can occur"
    ],
    "interactionNote": "CYP2D6 substrates and rifampin/cimetidine can affect drug levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Terbinafine",
        "url": "https://medlineplus.gov/druginfo/meds/a699061.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "skin-check",
      "prop": "towel",
      "motif": "fungus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [
        "skin"
      ],
      "cautions": [
        "liver"
      ],
      "intent": "Checking an affected nail during prescribed fungal-nail treatment.",
      "responseNotes": [
        "Can treat fungal nail infection",
        "Can clear susceptible fungal infection"
      ],
      "riskNotes": [
        "Liver injury can be severe",
        "Taste or smell changes can occur"
      ],
      "beats": [
        "Can treat fungal nail infection",
        "Liver injury can be severe"
      ],
      "asides": [
        "Nail changes are followed across a longer course.",
        "Taste or smell changes can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "nystatin",
    "name": "Nystatin",
    "aliases": [
      "Mycostatin"
    ],
    "category": "Medications",
    "className": "polyene antifungal",
    "useContext": "Treatment of fungal infections of the mouth and digestive tract; source covers oral suspension/tablets.",
    "mechanism": "Polyene antifungal that disrupts fungal cell membranes.",
    "effects": [
      "Can treat oral yeast infection",
      "Can reduce fungal growth locally"
    ],
    "risks": [
      "Nausea or diarrhea can occur",
      "Allergic reaction can occur"
    ],
    "interactionNote": "Few systemic interactions expected with poorly absorbed oral products; review the exact formulation.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Nystatin",
        "url": "https://medlineplus.gov/druginfo/meds/a682758.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "mirror",
      "prop": "mirror",
      "motif": "fungus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Checking the mouth during treatment of oral thrush.",
      "responseNotes": [
        "Can treat oral yeast infection",
        "Can reduce fungal growth locally"
      ],
      "riskNotes": [
        "Nausea or diarrhea can occur",
        "Allergic reaction can occur"
      ],
      "beats": [
        "Can treat oral yeast infection",
        "Nausea or diarrhea can occur"
      ],
      "asides": [
        "The mouth-directed treatment is shown symbolically.",
        "Allergic reaction can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "clotrimazole",
    "name": "Clotrimazole",
    "aliases": [
      "Mycelex"
    ],
    "category": "Medications",
    "className": "azole antifungal",
    "useContext": "Treatment of oral thrush; source covers buccal lozenge.",
    "mechanism": "Azole antifungal that inhibits fungal ergosterol synthesis.",
    "effects": [
      "Can treat oral yeast infection",
      "Can reduce fungal growth locally"
    ],
    "risks": [
      "Mouth irritation or nausea can occur",
      "Liver effects are possible with systemic exposure"
    ],
    "interactionNote": "Warfarin interactions are possible; route and absorption vary by formulation.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Clotrimazole Lozenge",
        "url": "https://medlineplus.gov/druginfo/meds/a618058.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "fungus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [],
      "intent": "Reading a care card during buccal treatment for oral thrush.",
      "responseNotes": [
        "Can treat oral yeast infection",
        "Can reduce fungal growth locally"
      ],
      "riskNotes": [
        "Mouth irritation or nausea can occur",
        "Liver effects are possible with systemic exposure"
      ],
      "beats": [
        "Can treat oral yeast infection",
        "Mouth irritation or nausea can occur"
      ],
      "asides": [
        "The lozenge route is represented symbolically.",
        "Liver effects are possible with systemic exposure"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "miconazole",
    "name": "Miconazole",
    "aliases": [
      "Oravig"
    ],
    "category": "Medications",
    "className": "azole antifungal",
    "useContext": "Local treatment of oral and throat yeast infection; the cited product is a buccal tablet.",
    "mechanism": "Azole antifungal that inhibits fungal ergosterol synthesis.",
    "effects": [
      "Can treat oral yeast infection",
      "Can reduce fungal growth locally"
    ],
    "risks": [
      "Local mouth or gum discomfort, burning, or pain can occur",
      "Allergic reactions can occur"
    ],
    "interactionNote": "Miconazole can increase warfarin effect; review concurrent medicines.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Miconazole Buccal",
        "url": "https://medlineplus.gov/druginfo/meds/a618060.html"
      },
      {
        "label": "DailyMed · Oravig buccal tablet label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dc2427ff-e566-4b48-b289-9e51c011250a"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "fungus",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "mouth",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing notes for a buccal-tablet oral-thrush treatment.",
      "responseNotes": [
        "Can treat oral yeast infection",
        "Can reduce fungal growth locally"
      ],
      "riskNotes": [
        "Local mouth or gum discomfort, burning, or pain can occur",
        "Allergic reactions can occur"
      ],
      "beats": [
        "Can treat oral yeast infection",
        "Local mouth or gum discomfort, burning, or pain can occur"
      ],
      "asides": [
        "The scene keeps the mouth-directed route symbolic.",
        "Allergic reactions can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "ivermectin",
    "name": "Ivermectin",
    "aliases": [
      "Stromectol"
    ],
    "category": "Medications",
    "className": "antiparasitic",
    "useContext": "Treatment of selected parasitic infections.",
    "mechanism": "Antiparasitic that disrupts nerve and muscle function in susceptible parasites.",
    "effects": [
      "Can clear susceptible parasitic infection",
      "Can reduce parasite burden"
    ],
    "risks": [
      "Dizziness or nausea can occur",
      "Neurologic effects can occur in serious reactions"
    ],
    "interactionNote": "Warfarin may interact; avoid combining with other antiparasitic products without review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Ivermectin",
        "url": "https://medlineplus.gov/druginfo/meds/a607069.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "reading",
      "prop": "book",
      "motif": "parasite",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "riskVisual": "dizziness",
      "organs": [],
      "cautions": [],
      "intent": "Reading treatment information for a diagnosed susceptible parasitic infection.",
      "responseNotes": [
        "Can clear susceptible parasitic infection",
        "Can reduce parasite burden"
      ],
      "riskNotes": [
        "Dizziness or nausea can occur",
        "Neurologic effects can occur in serious reactions"
      ],
      "beats": [
        "Can clear susceptible parasitic infection",
        "Dizziness or nausea can occur"
      ],
      "asides": [
        "The care context is a clinician-selected parasitic illness.",
        "Neurologic effects can occur in serious reactions"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "albendazole",
    "name": "Albendazole",
    "aliases": [
      "Albenza"
    ],
    "category": "Medications",
    "className": "antiparasitic",
    "useContext": "Treatment of selected tapeworm infections, including neurocysticercosis.",
    "mechanism": "Benzimidazole antiparasitic that disrupts parasite microtubules.",
    "effects": [
      "Can treat selected parasitic infections",
      "Can reduce parasite burden"
    ],
    "risks": [
      "Liver injury and low blood counts can occur",
      "Fetal harm is a concern"
    ],
    "interactionNote": "Dexamethasone, praziquantel, and cimetidine can change albendazole exposure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Albendazole",
        "url": "https://medlineplus.gov/druginfo/meds/a610019.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "writing",
      "prop": "clipboard",
      "motif": "parasite",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Writing questions during specialist treatment of a tapeworm infection.",
      "responseNotes": [
        "Can treat selected parasitic infections",
        "Can reduce parasite burden"
      ],
      "riskNotes": [
        "Liver injury and low blood counts can occur",
        "Fetal harm is a concern"
      ],
      "beats": [
        "Can treat selected parasitic infections",
        "Liver injury and low blood counts can occur"
      ],
      "asides": [
        "The questions remain with the monitored treatment plan.",
        "Fetal harm is a concern"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "mebendazole",
    "name": "Mebendazole",
    "aliases": [
      "Vermox",
      "Emverm"
    ],
    "category": "Medications",
    "className": "anthelmintic",
    "useContext": "Treatment of selected intestinal worm infections.",
    "mechanism": "Benzimidazole anthelmintic that disrupts parasite microtubules.",
    "effects": [
      "Can treat susceptible worm infections",
      "Can clear intestinal parasites"
    ],
    "risks": [
      "Abdominal pain or diarrhea can occur",
      "Low blood counts or liver injury are possible"
    ],
    "interactionNote": "Cimetidine can raise exposure; other antiparasitic medicines require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Mebendazole",
        "url": "https://medlineplus.gov/druginfo/meds/a682315.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "care-card",
      "motif": "parasite",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "cramp",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Checking a care card during treatment of an intestinal worm infection.",
      "responseNotes": [
        "Can treat susceptible worm infections",
        "Can clear intestinal parasites"
      ],
      "riskNotes": [
        "Abdominal pain or diarrhea can occur",
        "Low blood counts or liver injury are possible"
      ],
      "beats": [
        "Can treat susceptible worm infections",
        "Abdominal pain or diarrhea can occur"
      ],
      "asides": [
        "The card keeps the household care routine organized.",
        "Low blood counts or liver injury are possible"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "praziquantel",
    "name": "Praziquantel",
    "aliases": [
      "Biltricide"
    ],
    "category": "Medications",
    "className": "anthelmintic",
    "useContext": "Treatment of selected schistosoma and liver-fluke infections.",
    "mechanism": "Anthelmintic that disrupts parasite function and causes paralysis.",
    "effects": [
      "Can treat selected worm infections",
      "Can clear parasitic infection"
    ],
    "risks": [
      "Dizziness, headache, or nausea can occur",
      "Neurologic symptoms can worsen with brain cysts"
    ],
    "interactionNote": "Rifampin is contraindicated; CYP3A4 inducers/inhibitors can alter levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Praziquantel",
        "url": "https://medlineplus.gov/druginfo/meds/a608048.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "parasite",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "variable",
      "riskVisual": "dizziness",
      "organs": [],
      "cautions": [],
      "intent": "Planning follow-up for a diagnosed susceptible fluke infection.",
      "responseNotes": [
        "Can treat selected worm infections",
        "Can clear parasitic infection"
      ],
      "riskNotes": [
        "Dizziness, headache, or nausea can occur",
        "Neurologic symptoms can worsen with brain cysts"
      ],
      "beats": [
        "Can treat selected worm infections",
        "Dizziness, headache, or nausea can occur"
      ],
      "asides": [
        "The calendar follows the treatment beyond the clinic visit.",
        "Neurologic symptoms can worsen with brain cysts"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "finasteride",
    "name": "Finasteride",
    "aliases": [
      "Proscar",
      "Propecia"
    ],
    "category": "Medications",
    "className": "5-alpha-reductase inhibitor",
    "useContext": "Finasteride is used for enlarged-prostate symptoms and, in a different product, male-pattern hair loss. Treatment effects develop over time.",
    "mechanism": "Selectively inhibits type II 5-alpha-reductase, reducing conversion of testosterone to dihydrotestosterone (DHT), an androgen involved in prostate enlargement.",
    "effects": [
      "Hair-loss products can slow male-pattern hair loss",
      "Can improve BPH symptoms and reduce urinary retention"
    ],
    "risks": [
      "Sexual side effects, breast changes, and mood changes",
      "Fetal harm from damaged-tablet exposure in pregnancy"
    ],
    "interactionNote": "The selected label reports no clinically important interactions identified in tested medicines. Review a full medication list and flag finasteride before PSA testing because it changes PSA levels.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · finasteride tablet label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e482a50d-db15-4407-85c9-160c88e8a657"
      },
      {
        "label": "MedlinePlus · Finasteride",
        "url": "https://medlineplus.gov/druginfo/meds/a698016.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "hair",
      "task": "hair-photo",
      "prop": "phone",
      "motif": "hair",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "hair",
        "hormones"
      ],
      "cautions": [
        "hormones"
      ],
      "intent": "Comparing hairline photos during prescribed hair-loss care.",
      "responseNotes": [
        "Lower DHT can slow male-pattern hair loss",
        "Hair changes develop over time"
      ],
      "riskNotes": [
        "Sexual side effects can occur",
        "Breast or mood changes deserve attention"
      ],
      "beats": [
        "Lower DHT can slow male-pattern hair loss",
        "Sexual side effects can occur"
      ],
      "asides": [
        "Hair keeps its own calendar.",
        "Breast or mood changes deserve attention"
      ],
      "riskVisual": "hormones",
      "exposure": "oral"
    }
  },
  {
    "id": "dutasteride",
    "name": "Dutasteride",
    "aliases": [
      "Avodart"
    ],
    "category": "Medications",
    "className": "5-alpha-reductase inhibitor",
    "useContext": "Clinician-managed treatment of symptomatic benign prostatic hyperplasia in men with an enlarged prostate; it can also be combined with an alpha blocker under the label.",
    "mechanism": "Inhibits both type I and type II 5-alpha-reductase isoenzymes, reducing conversion of testosterone to DHT.",
    "effects": [
      "Can improve BPH symptoms and reduce urinary retention",
      "Reduces DHT in blood and prostate tissue"
    ],
    "risks": [
      "Sexual side effects and breast changes",
      "Pregnancy exposure risk; prostate-screening changes"
    ],
    "interactionNote": "Use caution with strong chronic CYP3A4 inhibitors such as ritonavir, which may raise dutasteride exposure. Combination with tamsulosin is a labeled treatment option and requires clinician review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · Avodart (dutasteride) capsule label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=960797b3-09b1-4d6a-8ece-8b5d918e93e4"
      },
      {
        "label": "MedlinePlus · Dutasteride",
        "url": "https://medlineplus.gov/druginfo/meds/a603001.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "organs": [
        "bladder",
        "hormones"
      ],
      "cautions": [
        "hormones"
      ],
      "intent": "Reviewing urinary symptoms during prostate-enlargement care.",
      "responseNotes": [
        "Lower DHT can improve BPH symptoms",
        "Urinary retention and surgery risks can decrease"
      ],
      "riskNotes": [
        "Sexual side effects can occur",
        "Breast changes and PSA interpretation need attention"
      ],
      "beats": [
        "Lower DHT can improve BPH symptoms",
        "Sexual side effects can occur"
      ],
      "asides": [
        "The symptom diary travels to the appointment.",
        "Breast changes and PSA interpretation need attention"
      ],
      "riskVisual": "hormones",
      "exposure": "oral"
    }
  },
  {
    "id": "tamsulosin",
    "name": "Tamsulosin",
    "aliases": [
      "Flomax"
    ],
    "category": "Medications",
    "className": "alpha1 blocker",
    "useContext": "Relief of urinary symptoms from benign prostatic hyperplasia.",
    "mechanism": "Alpha-1A adrenergic blocker that relaxes prostate and bladder-neck muscle.",
    "effects": [
      "Can improve urine flow",
      "Can relieve urinary symptoms"
    ],
    "risks": [
      "Dizziness or fainting can occur",
      "Ejaculation changes can occur"
    ],
    "interactionNote": "PDE-5 inhibitors and blood-pressure medicines may increase low blood pressure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Tamsulosin",
        "url": "https://medlineplus.gov/druginfo/meds/a698012.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "riskVisual": "dizziness",
      "organs": [
        "bladder"
      ],
      "cautions": [],
      "intent": "Recording urinary symptoms during benign-prostate-enlargement care.",
      "responseNotes": [
        "Can improve urine flow",
        "Can relieve urinary symptoms"
      ],
      "riskNotes": [
        "Dizziness or fainting can occur",
        "Ejaculation changes can occur"
      ],
      "beats": [
        "Can improve urine flow",
        "Dizziness or fainting can occur"
      ],
      "asides": [
        "The diary tracks changes between follow-up visits.",
        "Ejaculation changes can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "alfuzosin",
    "name": "Alfuzosin",
    "aliases": [
      "Uroxatral"
    ],
    "category": "Medications",
    "className": "alpha1 blocker",
    "useContext": "Relief of urinary symptoms from benign prostatic hyperplasia.",
    "mechanism": "Alpha-1 adrenergic blocker that relaxes prostate and bladder-neck muscle.",
    "effects": [
      "Can improve urine flow",
      "Can relieve urinary symptoms"
    ],
    "risks": [
      "Dizziness or fainting can occur",
      "QT prolongation can occur"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors and other QT-prolonging drugs are contraindicated or require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Alfuzosin",
        "url": "https://medlineplus.gov/druginfo/meds/a604002.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "riskVisual": "pulse",
      "organs": [
        "bladder"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Planning a follow-up for urinary symptoms from prostate enlargement.",
      "responseNotes": [
        "Can improve urine flow",
        "Can relieve urinary symptoms"
      ],
      "riskNotes": [
        "Dizziness or fainting can occur",
        "QT prolongation can occur"
      ],
      "beats": [
        "Can improve urine flow",
        "Dizziness or fainting can occur"
      ],
      "asides": [
        "The calendar keeps the next symptom review visible.",
        "QT prolongation can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "doxazosin",
    "name": "Doxazosin",
    "aliases": [
      "Cardura"
    ],
    "category": "Medications",
    "className": "alpha1 blocker",
    "useContext": "Treatment of benign prostatic hyperplasia or high blood pressure.",
    "mechanism": "Alpha-1 adrenergic blocker that relaxes blood vessels and prostate smooth muscle.",
    "effects": [
      "Can improve urine flow",
      "Can lower blood pressure"
    ],
    "risks": [
      "First-dose fainting can occur",
      "Dizziness or low blood pressure can occur"
    ],
    "interactionNote": "PDE-5 inhibitors and other blood-pressure medicines can increase hypotension.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Doxazosin",
        "url": "https://medlineplus.gov/druginfo/meds/a693045.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "checklist",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "riskVisual": "pressure",
      "organs": [
        "bladder"
      ],
      "cautions": [],
      "intent": "Checking a urinary-symptom care list during prostate-enlargement treatment.",
      "responseNotes": [
        "Prostate and bladder-neck smooth muscle relaxes",
        "Urine flow can improve"
      ],
      "riskNotes": [
        "First-dose fainting can occur",
        "Dizziness or low blood pressure can occur"
      ],
      "beats": [
        "Prostate and bladder-neck smooth muscle relaxes",
        "First-dose fainting can occur"
      ],
      "asides": [
        "The list tracks the everyday urinary-care routine.",
        "Dizziness or low blood pressure can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "terazosin",
    "name": "Terazosin",
    "aliases": [
      "Hytrin"
    ],
    "category": "Medications",
    "className": "alpha1 blocker",
    "useContext": "Treatment of benign prostatic hyperplasia or high blood pressure.",
    "mechanism": "Alpha-1 adrenergic blocker that relaxes blood vessels and prostate smooth muscle.",
    "effects": [
      "Can improve urine flow",
      "Can lower blood pressure"
    ],
    "risks": [
      "First-dose fainting can occur",
      "Dizziness or low blood pressure can occur"
    ],
    "interactionNote": "PDE-5 inhibitors and other blood-pressure medicines can increase hypotension.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Terazosin",
        "url": "https://medlineplus.gov/druginfo/meds/a693046.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "reading",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "over-time",
      "riskVisual": "pressure",
      "organs": [
        "bladder"
      ],
      "cautions": [],
      "intent": "Reading a care sheet during prostate-related urinary-symptom treatment.",
      "responseNotes": [
        "Prostate and bladder-neck smooth muscle relaxes",
        "Urine flow can improve"
      ],
      "riskNotes": [
        "First-dose fainting can occur",
        "Dizziness or low blood pressure can occur"
      ],
      "beats": [
        "Prostate and bladder-neck smooth muscle relaxes",
        "First-dose fainting can occur"
      ],
      "asides": [
        "The care sheet includes low-pressure and fainting risks.",
        "Dizziness or low blood pressure can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "oxybutynin",
    "name": "Oxybutynin",
    "aliases": [
      "Ditropan"
    ],
    "category": "Medications",
    "className": "antimuscarinic",
    "useContext": "Treatment of overactive bladder symptoms including urgency and incontinence.",
    "mechanism": "Antimuscarinic that relaxes bladder smooth muscle.",
    "effects": [
      "Can reduce urgency and frequency",
      "Can reduce urge incontinence"
    ],
    "risks": [
      "Dry mouth and constipation are common",
      "Confusion or urinary retention can occur"
    ],
    "interactionNote": "Other anticholinergics increase cognitive and urinary adverse effects.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Oxybutynin",
        "url": "https://medlineplus.gov/druginfo/meds/a682141.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "riskVisual": "bladder",
      "organs": [
        "bladder"
      ],
      "cautions": [
        "bladder"
      ],
      "intent": "Updating an urgency diary during overactive-bladder treatment.",
      "responseNotes": [
        "Can reduce urgency and frequency",
        "Can reduce urge incontinence"
      ],
      "riskNotes": [
        "Dry mouth and constipation are common",
        "Confusion or urinary retention can occur"
      ],
      "beats": [
        "Can reduce urgency and frequency",
        "Dry mouth and constipation are common"
      ],
      "asides": [
        "The diary gives the next visit a record of ordinary days.",
        "Confusion or urinary retention can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "tolterodine",
    "name": "Tolterodine",
    "aliases": [
      "Detrol"
    ],
    "category": "Medications",
    "className": "antimuscarinic",
    "useContext": "Treatment of overactive bladder symptoms including urgency and incontinence.",
    "mechanism": "Antimuscarinic that reduces involuntary bladder contractions.",
    "effects": [
      "Can reduce urgency and frequency",
      "Can reduce urge incontinence"
    ],
    "risks": [
      "Dry mouth and constipation can occur",
      "Urinary retention or QT effects can occur"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors and other anticholinergics require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Tolterodine",
        "url": "https://medlineplus.gov/druginfo/meds/a699026.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "typing",
      "prop": "phone",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "riskVisual": "bladder",
      "organs": [
        "bladder"
      ],
      "cautions": [
        "bladder"
      ],
      "intent": "Saving a symptom reminder during overactive-bladder care.",
      "responseNotes": [
        "Can reduce urgency and frequency",
        "Can reduce urge incontinence"
      ],
      "riskNotes": [
        "Dry mouth and constipation can occur",
        "Urinary retention or QT effects can occur"
      ],
      "beats": [
        "Can reduce urgency and frequency",
        "Dry mouth and constipation can occur"
      ],
      "asides": [
        "The reminder keeps the urinary-care notes close.",
        "Urinary retention or QT effects can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "solifenacin",
    "name": "Solifenacin",
    "aliases": [
      "VESIcare"
    ],
    "category": "Medications",
    "className": "antimuscarinic",
    "useContext": "Treatment of overactive bladder symptoms including urgency and incontinence.",
    "mechanism": "Antimuscarinic that reduces involuntary bladder contractions.",
    "effects": [
      "Can reduce urgency and frequency",
      "Can reduce urge incontinence"
    ],
    "risks": [
      "Dry mouth and constipation can occur",
      "Urinary retention or QT effects can occur"
    ],
    "interactionNote": "Strong CYP3A4 inhibitors and other anticholinergics require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Solifenacin",
        "url": "https://medlineplus.gov/druginfo/meds/a605019.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "riskVisual": "pulse",
      "organs": [
        "bladder"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Organizing care cards during treatment for urinary urgency.",
      "responseNotes": [
        "Can reduce urgency and frequency",
        "Can reduce urge incontinence"
      ],
      "riskNotes": [
        "Dry mouth and constipation can occur",
        "Urinary retention or QT effects can occur"
      ],
      "beats": [
        "Can reduce urgency and frequency",
        "Dry mouth and constipation can occur"
      ],
      "asides": [
        "The cards bring the follow-up details together.",
        "Urinary retention or QT effects can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "trospium",
    "name": "Trospium",
    "aliases": [
      "Sanctura"
    ],
    "category": "Medications",
    "className": "antimuscarinic",
    "useContext": "Treatment of overactive bladder symptoms including urgency and incontinence.",
    "mechanism": "Antimuscarinic that reduces involuntary bladder contractions.",
    "effects": [
      "Can reduce urgency and frequency",
      "Can reduce urge incontinence"
    ],
    "risks": [
      "Dry mouth and constipation can occur",
      "Urinary retention can occur"
    ],
    "interactionNote": "Other anticholinergics increase adverse effects; kidney function affects exposure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Trospium",
        "url": "https://medlineplus.gov/druginfo/meds/a604037.html"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "block",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "over-time",
      "riskVisual": "bladder",
      "organs": [
        "bladder"
      ],
      "cautions": [
        "bladder"
      ],
      "intent": "Checking a daily symptom list during overactive-bladder treatment.",
      "responseNotes": [
        "Can reduce urgency and frequency",
        "Can reduce urge incontinence"
      ],
      "riskNotes": [
        "Dry mouth and constipation can occur",
        "Urinary retention can occur"
      ],
      "beats": [
        "Can reduce urgency and frequency",
        "Dry mouth and constipation can occur"
      ],
      "asides": [
        "The list follows the day's ordinary urinary symptoms.",
        "Urinary retention can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "mirabegron",
    "name": "Mirabegron",
    "aliases": [
      "Myrbetriq"
    ],
    "category": "Medications",
    "className": "beta3 agonist",
    "useContext": "Treatment of overactive bladder symptoms including urgency and frequency.",
    "mechanism": "Beta-3 adrenergic agonist that relaxes bladder muscle during filling.",
    "effects": [
      "Can reduce urgency and frequency",
      "Can increase bladder capacity"
    ],
    "risks": [
      "Can raise blood pressure",
      "Urinary retention or fast heartbeat can occur"
    ],
    "interactionNote": "CYP2D6 substrate levels can rise; digoxin levels may change.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Mirabegron",
        "url": "https://medlineplus.gov/druginfo/meds/a612038.html"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "receptor",
      "mechanismStyle": "activate",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "over-time",
      "riskVisual": "pressure",
      "organs": [
        "bladder"
      ],
      "cautions": [
        "heart"
      ],
      "intent": "Planning follow-up during treatment for overactive bladder.",
      "responseNotes": [
        "Can reduce urgency and frequency",
        "Can increase bladder capacity"
      ],
      "riskNotes": [
        "Can raise blood pressure",
        "Urinary retention or fast heartbeat can occur"
      ],
      "beats": [
        "Can reduce urgency and frequency",
        "Can raise blood pressure"
      ],
      "asides": [
        "The follow-up also considers blood-pressure changes.",
        "Urinary retention or fast heartbeat can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "sildenafil",
    "name": "Sildenafil",
    "aliases": [
      "Viagra",
      "Revatio"
    ],
    "category": "Medications",
    "className": "pde5 inhibitor",
    "useContext": "Product-specific treatment of erectile dysfunction or pulmonary arterial hypertension.",
    "mechanism": "PDE5 inhibitor that increases cyclic GMP and relaxes selected smooth muscle.",
    "effects": [
      "Can improve erectile function",
      "Can support pulmonary-artery relaxation"
    ],
    "risks": [
      "Low blood pressure and vision changes can occur",
      "Rare prolonged erection can damage tissue"
    ],
    "interactionNote": "Nitrates are contraindicated; alpha blockers and riociguat can cause dangerous hypotension.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Sildenafil",
        "url": "https://medlineplus.gov/druginfo/meds/a699015.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "care-card",
      "prop": "care-card",
      "motif": "flow",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "vision",
      "organs": [
        "lungs"
      ],
      "cautions": [
        "eyes"
      ],
      "intent": "Reviewing a product-specific pulmonary-hypertension care plan.",
      "responseNotes": [
        "Selected pulmonary arteries can relax",
        "Product-specific treatment supports PAH care"
      ],
      "riskNotes": [
        "Low blood pressure and vision changes can occur",
        "Rare prolonged erection can damage tissue"
      ],
      "beats": [
        "Selected pulmonary arteries can relax",
        "Low blood pressure and vision changes can occur"
      ],
      "asides": [
        "This scene follows the pulmonary-hypertension indication.",
        "Rare prolonged erection can damage tissue"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "tadalafil",
    "name": "Tadalafil",
    "aliases": [
      "Cialis",
      "Adcirca"
    ],
    "category": "Medications",
    "className": "pde5 inhibitor",
    "useContext": "Product-specific treatment of erectile dysfunction, BPH symptoms, or pulmonary arterial hypertension.",
    "mechanism": "PDE5 inhibitor that increases cyclic GMP and relaxes selected smooth muscle.",
    "effects": [
      "Can improve erectile function",
      "Can relieve urinary symptoms or support PAH care"
    ],
    "risks": [
      "Low blood pressure and back pain can occur",
      "Rare prolonged erection can damage tissue"
    ],
    "interactionNote": "Nitrates are contraindicated; alpha blockers and riociguat can cause dangerous hypotension.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Tadalafil",
        "url": "https://medlineplus.gov/druginfo/meds/a604008.html"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "flow",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "pressure",
      "organs": [
        "bladder"
      ],
      "cautions": [],
      "intent": "Writing urinary-symptom notes during prescribed BPH treatment.",
      "responseNotes": [
        "Selected smooth muscle relaxes",
        "BPH-related urinary symptoms can improve"
      ],
      "riskNotes": [
        "Low blood pressure and back pain can occur",
        "Rare prolonged erection can damage tissue"
      ],
      "beats": [
        "Selected smooth muscle relaxes",
        "Low blood pressure and back pain can occur"
      ],
      "asides": [
        "The notebook follows the urinary-symptom indication.",
        "Rare prolonged erection can damage tissue"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "isotretinoin",
    "name": "Isotretinoin",
    "aliases": [
      "Accutane"
    ],
    "category": "Medications",
    "className": "retinoid",
    "useContext": "Specialist treatment of severe, resistant nodular acne.",
    "mechanism": "Oral retinoid that reduces sebum and acne-causing processes.",
    "effects": [
      "Can improve severe nodular acne",
      "Can reduce acne lesions"
    ],
    "risks": [
      "Severe birth defects can occur",
      "Mood changes and lipid/liver effects can occur"
    ],
    "interactionNote": "Vitamin A supplements and tetracyclines require avoidance or review; strict pregnancy safeguards apply.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Isotretinoin",
        "url": "https://medlineplus.gov/druginfo/meds/a681043.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "mirror",
      "prop": "mirror",
      "motif": "skin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "reproductive",
      "organs": [
        "skin"
      ],
      "cautions": [
        "liver"
      ],
      "intent": "Checking the face in a mirror during specialist treatment for severe acne.",
      "responseNotes": [
        "Can improve severe nodular acne",
        "Can reduce acne lesions"
      ],
      "riskNotes": [
        "Severe birth defects can occur",
        "Mood changes and lipid/liver effects can occur"
      ],
      "beats": [
        "Can improve severe nodular acne",
        "Severe birth defects can occur"
      ],
      "asides": [
        "The mirror follows changes across the treatment course.",
        "Mood changes and lipid/liver effects can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "tretinoin",
    "name": "Tretinoin",
    "aliases": [
      "Vesanoid"
    ],
    "category": "Medications",
    "className": "retinoid antineoplastic",
    "useContext": "Treatment of acute promyelocytic leukemia; source covers oral oncology use.",
    "mechanism": "Retinoid that promotes maturation of abnormal promyelocytes.",
    "effects": [
      "Can induce remission in APL",
      "Can support leukemia treatment"
    ],
    "risks": [
      "Differentiation syndrome can be life-threatening",
      "Fetal harm and liver effects are concerns"
    ],
    "interactionNote": "Vitamin A and other retinoids may increase toxicity; specialist oncology review required.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Tretinoin",
        "url": "https://medlineplus.gov/druginfo/meds/a608032.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Organizing oncology-care papers during oral APL treatment.",
      "responseNotes": [
        "Can induce remission in APL",
        "Can support leukemia treatment"
      ],
      "riskNotes": [
        "Differentiation syndrome can be life-threatening",
        "Fetal harm and liver effects are concerns"
      ],
      "beats": [
        "Can induce remission in APL",
        "Differentiation syndrome can be life-threatening"
      ],
      "asides": [
        "This scene follows the oral leukemia-treatment indication.",
        "Fetal harm and liver effects are concerns"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "adapalene",
    "name": "Adapalene",
    "aliases": [
      "Differin"
    ],
    "category": "Medications",
    "className": "topical retinoid",
    "useContext": "Topical treatment of acne.",
    "mechanism": "Topical retinoid that normalizes follicular cell turnover.",
    "effects": [
      "Can reduce acne lesions",
      "Can help prevent new comedones"
    ],
    "risks": [
      "Dryness, redness, and peeling can occur",
      "Sun sensitivity can increase"
    ],
    "interactionNote": "Other irritating skin products can worsen dryness and irritation.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Adapalene",
        "url": "https://medlineplus.gov/druginfo/meds/a604001.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "mirror",
      "prop": "mirror",
      "motif": "skin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "skin",
      "organs": [
        "skin"
      ],
      "cautions": [
        "skin"
      ],
      "intent": "Checking acne in a mirror during a topical treatment routine.",
      "responseNotes": [
        "Can reduce acne lesions",
        "Can help prevent new comedones"
      ],
      "riskNotes": [
        "Dryness, redness, and peeling can occur",
        "Sun sensitivity can increase"
      ],
      "beats": [
        "Can reduce acne lesions",
        "Dryness, redness, and peeling can occur"
      ],
      "asides": [
        "The routine follows skin changes over time.",
        "Sun sensitivity can increase"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "azelaic-acid",
    "name": "Azelaic acid",
    "aliases": [
      "Finacea",
      "Azelex"
    ],
    "category": "Medications",
    "className": "topical anti inflammatory",
    "useContext": "Topical treatment of rosacea or acne, depending on product.",
    "mechanism": "Topical dicarboxylic acid with anti-inflammatory and antimicrobial effects.",
    "effects": [
      "Can improve inflammatory acne",
      "Can reduce rosacea lesions"
    ],
    "risks": [
      "Burning, stinging, or dryness can occur",
      "Skin-lightening changes can occur rarely"
    ],
    "interactionNote": "Avoid combining irritating topical products without clinician guidance.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Azelaic Acid Topical",
        "url": "https://medlineplus.gov/druginfo/meds/a603020.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "skin-check",
      "prop": "towel",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "skin",
      "organs": [
        "skin"
      ],
      "cautions": [
        "skin"
      ],
      "intent": "Checking facial redness during a prescribed rosacea-care routine.",
      "responseNotes": [
        "Rosacea lesions can decrease",
        "Local inflammatory activity is reduced"
      ],
      "riskNotes": [
        "Burning, stinging, or dryness can occur",
        "Skin-lightening changes can occur rarely"
      ],
      "beats": [
        "Rosacea lesions can decrease",
        "Burning, stinging, or dryness can occur"
      ],
      "asides": [
        "The skin check belongs to ordinary topical care.",
        "Skin-lightening changes can occur rarely"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "dapsone",
    "name": "Dapsone",
    "aliases": [],
    "category": "Medications",
    "className": "sulfone antimicrobial",
    "useContext": "Treatment of leprosy and selected skin infections; source covers oral tablets.",
    "mechanism": "Sulfone antimicrobial that interferes with folate pathways in susceptible organisms.",
    "effects": [
      "Can treat leprosy",
      "Can treat selected skin infections"
    ],
    "risks": [
      "Hemolysis and methemoglobinemia can occur",
      "Severe skin or blood reactions can occur"
    ],
    "interactionNote": "Rifampin lowers levels; other oxidant or marrow-suppressing drugs can raise toxicity.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Dapsone",
        "url": "https://medlineplus.gov/druginfo/meds/a682128.html"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "consultation",
      "task": "reading",
      "prop": "care-card",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "skin",
      "organs": [
        "skin"
      ],
      "cautions": [
        "skin"
      ],
      "intent": "Reading a care card during clinician-managed oral leprosy treatment.",
      "responseNotes": [
        "Can treat leprosy",
        "Can treat selected skin infections"
      ],
      "riskNotes": [
        "Hemolysis and methemoglobinemia can occur",
        "Severe skin or blood reactions can occur"
      ],
      "beats": [
        "Can treat leprosy",
        "Hemolysis and methemoglobinemia can occur"
      ],
      "asides": [
        "The care card follows a monitored antimicrobial course.",
        "Severe skin or blood reactions can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "mupirocin",
    "name": "Mupirocin",
    "aliases": [
      "Bactroban"
    ],
    "category": "Medications",
    "className": "topical antibiotic",
    "useContext": "Topical treatment of selected bacterial skin infections.",
    "mechanism": "Topical antibiotic that inhibits bacterial isoleucyl-tRNA synthetase.",
    "effects": [
      "Can treat localized bacterial skin infection",
      "Can clear susceptible bacteria"
    ],
    "risks": [
      "Burning or irritation can occur",
      "Allergic skin reaction can occur"
    ],
    "interactionNote": "No major interactions expected with limited topical use; avoid combining unreviewed products.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Mupirocin topical",
        "url": "https://medlineplus.gov/druginfo/meds/a688004.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "care-card",
      "prop": "care-card",
      "motif": "bacteria",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "skin",
      "organs": [
        "skin"
      ],
      "cautions": [
        "skin"
      ],
      "intent": "Reviewing care instructions for a localized bacterial skin infection.",
      "responseNotes": [
        "Can treat localized bacterial skin infection",
        "Can clear susceptible bacteria"
      ],
      "riskNotes": [
        "Burning or irritation can occur",
        "Allergic skin reaction can occur"
      ],
      "beats": [
        "Can treat localized bacterial skin infection",
        "Burning or irritation can occur"
      ],
      "asides": [
        "The treatment site remains symbolic in this scene.",
        "Allergic skin reaction can occur"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "tacrolimus",
    "name": "Tacrolimus",
    "aliases": [
      "Prograf",
      "Astagraf XL",
      "Envarsus XR"
    ],
    "category": "Medications",
    "className": "calcineurin inhibitor",
    "useContext": "Prevention of solid-organ transplant rejection; source covers systemic oral forms.",
    "mechanism": "Calcineurin inhibitor that suppresses T-cell immune activity.",
    "effects": [
      "Can help prevent transplant rejection",
      "Can suppress immune activity"
    ],
    "risks": [
      "Serious infection and kidney injury can occur",
      "Neurologic effects and high blood pressure can occur"
    ],
    "interactionNote": "Many CYP3A4 interactions, including grapefruit, azole antifungals, and macrolides.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Tacrolimus",
        "url": "https://medlineplus.gov/druginfo/meds/a601117.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "organizer",
      "prop": "notebook",
      "motif": "immune",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "kidney",
      "organs": [],
      "cautions": [
        "kidneys"
      ],
      "intent": "Organizing home-care notes after a solid-organ transplant.",
      "responseNotes": [
        "Can help prevent transplant rejection",
        "Can suppress immune activity"
      ],
      "riskNotes": [
        "Serious infection and kidney injury can occur",
        "Neurologic effects and high blood pressure can occur"
      ],
      "beats": [
        "Can help prevent transplant rejection",
        "Serious infection and kidney injury can occur"
      ],
      "asides": [
        "The notebook keeps specialist follow-up close to home.",
        "Neurologic effects and high blood pressure can occur"
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "pimecrolimus",
    "name": "Pimecrolimus",
    "aliases": [
      "Elidel"
    ],
    "category": "Medications",
    "className": "topical calcineurin inhibitor",
    "useContext": "Topical short-term or intermittent treatment of mild-to-moderate eczema.",
    "mechanism": "Topical calcineurin inhibitor that reduces inflammatory immune signaling in skin.",
    "effects": [
      "Can reduce eczema inflammation",
      "Can relieve itching"
    ],
    "risks": [
      "Burning or irritation can occur",
      "Long-term cancer risk warning remains uncertain"
    ],
    "interactionNote": "Avoid unreviewed immune-suppressing treatments or extensive UV exposure.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Pimecrolimus Topical",
        "url": "https://medlineplus.gov/druginfo/meds/a603027.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "writing",
      "prop": "notebook",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "skin",
      "organs": [
        "skin"
      ],
      "cautions": [
        "skin"
      ],
      "intent": "Writing a symptom note during an intermittent eczema-treatment plan.",
      "responseNotes": [
        "Can reduce eczema inflammation",
        "Can relieve itching"
      ],
      "riskNotes": [
        "Burning or irritation can occur",
        "Long-term cancer risk warning remains uncertain"
      ],
      "beats": [
        "Can reduce eczema inflammation",
        "Burning or irritation can occur"
      ],
      "asides": [
        "The note records the ordinary itch-and-flare routine.",
        "Long-term cancer risk warning remains uncertain"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "clobetasol",
    "name": "Clobetasol",
    "aliases": [
      "Temovate"
    ],
    "category": "Medications",
    "className": "topical corticosteroid",
    "useContext": "Topical treatment of selected corticosteroid-responsive skin conditions.",
    "mechanism": "Very potent topical corticosteroid that suppresses skin inflammation.",
    "effects": [
      "Can reduce skin inflammation",
      "Can relieve itching and redness"
    ],
    "risks": [
      "Skin thinning and stretch marks can occur",
      "Adrenal suppression can occur with excess exposure"
    ],
    "interactionNote": "Other corticosteroids can increase systemic exposure; occlusive products alter absorption.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Clobetasol Topical",
        "url": "https://medlineplus.gov/druginfo/meds/a686008.html"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "relief",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "skin",
      "organs": [
        "skin"
      ],
      "cautions": [
        "skin"
      ],
      "intent": "Checking a care sheet for a prescribed potent topical steroid.",
      "responseNotes": [
        "Can reduce skin inflammation",
        "Can relieve itching and redness"
      ],
      "riskNotes": [
        "Skin thinning and stretch marks can occur",
        "Adrenal suppression can occur with excess exposure"
      ],
      "beats": [
        "Can reduce skin inflammation",
        "Skin thinning and stretch marks can occur"
      ],
      "asides": [
        "The care sheet keeps the specific skin-treatment plan visible.",
        "Adrenal suppression can occur with excess exposure"
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "triamcinolone",
    "name": "Triamcinolone",
    "aliases": [
      "Kenalog"
    ],
    "category": "Medications",
    "className": "corticosteroid",
    "useContext": "Systemic treatment of selected inflammatory, allergic, and immune conditions.",
    "mechanism": "Glucocorticoid that suppresses inflammation and immune activity.",
    "effects": [
      "Can reduce inflammation",
      "Can suppress overactive immune responses"
    ],
    "risks": [
      "Infection risk and blood sugar can rise",
      "Long-term use can weaken bones and adrenal function"
    ],
    "interactionNote": "Vaccines, NSAIDs, diabetes medicines, and anticoagulants require review.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "MedlinePlus · Triamcinolone",
        "url": "https://medlineplus.gov/druginfo/meds/a601122.html"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "reading",
      "prop": "book",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "glucose",
      "organs": [],
      "cautions": [],
      "intent": "Reading care information during a systemic inflammatory-disease course.",
      "responseNotes": [
        "Can reduce inflammation",
        "Can suppress overactive immune responses"
      ],
      "riskNotes": [
        "Infection risk and blood sugar can rise",
        "Long-term use can weaken bones and adrenal function"
      ],
      "beats": [
        "Can reduce inflammation",
        "Infection risk and blood sugar can rise"
      ],
      "asides": [
        "This scene follows the sourced systemic treatment.",
        "Long-term use can weaken bones and adrenal function"
      ],
      "exposure": "oral"
    }
  }
];
