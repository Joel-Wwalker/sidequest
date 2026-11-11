import type { CatalogSeed } from './types';

// Source-linked ingredient records with explicitly authored clinical storyboards.
export const specialtySeeds: CatalogSeed[] = [
  {
    "id": "asian-ginseng",
    "name": "Asian Ginseng",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Supplement promoted for energy, cognition, and immune support; evidence is condition-specific and limited.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some research suggests modest cognitive effects in middle-aged adults.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "May cause insomnia or headache.",
      "Long-term safety and pregnancy safety are uncertain."
    ],
    "interactionNote": "May affect blood glucose and interact with medicines; review use with a clinician.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Asian Ginseng",
        "url": "https://www.nccih.nih.gov/health/asian-ginseng"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading about an energy supplement before an ordinary work session.",
      "responseNotes": [
        "Some studies suggest modest cognitive effects in middle age.",
        "Benefit outside those study settings is not established."
      ],
      "riskNotes": [
        "Insomnia or headache may occur.",
        "Long-term and pregnancy safety remain uncertain."
      ],
      "beats": [
        "Some studies suggest modest cognitive effects in middle age.",
        "Insomnia or headache may occur."
      ],
      "asides": [
        "The book leaves room for the limits of the evidence.",
        "Long-term and pregnancy safety remain uncertain."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "astragalus",
    "name": "Astragalus",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Traditional herb promoted for immune and cardiovascular support; human evidence remains limited.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some studies have examined add-on use in type 2 diabetes.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Safety evaluation is incomplete.",
      "May worsen autoimmune disease symptoms."
    ],
    "interactionNote": "May interact with immunosuppressants and other medicines; review product use.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Astragalus",
        "url": "https://www.nccih.nih.gov/health/astragalus"
      }
    ],
    "scene": {
      "setting": "conservatory",
      "activity": "research",
      "task": "writing",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Writing questions about traditional immune-support claims.",
      "responseNotes": [
        "Studies have explored add-on use in type 2 diabetes.",
        "A general clinical benefit is not established."
      ],
      "riskNotes": [
        "Safety has not been fully evaluated.",
        "Autoimmune disease symptoms may worsen."
      ],
      "beats": [
        "Studies have explored add-on use in type 2 diabetes.",
        "Safety has not been fully evaluated."
      ],
      "asides": [
        "The questions come before a conclusion about benefit.",
        "Autoimmune disease symptoms may worsen."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "bilberry",
    "name": "Bilberry",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Berry extract promoted for vision and circulation; clear health benefits have not been established.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Anthocyanins are being studied for possible biological effects.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Food amounts are generally safe.",
      "Leaf products or long-term high intake may be harmful."
    ],
    "interactionNote": "Potential interactions with blood-thinning or diabetes medicines need review.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Bilberry",
        "url": "https://www.nccih.nih.gov/health/bilberry"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "reading",
      "task": "care-card",
      "prop": "care-card",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing a berry-extract information card about vision claims.",
      "responseNotes": [
        "Researchers are studying its anthocyanins.",
        "Clear health benefits have not been established."
      ],
      "riskNotes": [
        "Food amounts are generally considered safe.",
        "Leaf products or prolonged high intake may be harmful."
      ],
      "beats": [
        "Researchers are studying its anthocyanins.",
        "Food amounts are generally considered safe."
      ],
      "asides": [
        "Vision claims deserve more than the label alone.",
        "Leaf products or prolonged high intake may be harmful."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "bitter-orange",
    "name": "Bitter Orange",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herbal ingredient promoted for weight loss and energy; efficacy is unclear.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Weight-loss studies are small and inconsistent.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Supplement products have been linked to serious heart events.",
      "May raise heart rate or blood pressure."
    ],
    "interactionNote": "Caffeine and stimulant medicines may increase cardiovascular effects.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Bitter Orange",
        "url": "https://www.nccih.nih.gov/health/bitter-orange"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "reading",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "unknown",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [
        "heart"
      ],
      "intent": "Reading an energy-and-weight supplement label before training.",
      "responseNotes": [
        "Weight-loss studies are small and inconsistent.",
        "A reliable weight-loss benefit is not established."
      ],
      "riskNotes": [
        "Serious heart events have been reported with supplements.",
        "Heart rate or blood pressure may rise."
      ],
      "beats": [
        "Weight-loss studies are small and inconsistent.",
        "Serious heart events have been reported with supplements."
      ],
      "asides": [
        "The label includes more than its front-page promise.",
        "Heart rate or blood pressure may rise."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "black-cohosh",
    "name": "Black Cohosh",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herbal supplement used for menopause symptoms; evidence is mixed.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some reviews report possible improvement in overall menopause symptoms.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Rare reports of serious liver injury exist.",
      "Product identity and causality in liver cases are uncertain."
    ],
    "interactionNote": "Consult a clinician about liver disease, hormone-sensitive conditions, and medicines.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Black Cohosh",
        "url": "https://www.nccih.nih.gov/health/black-cohosh"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Keeping menopause-symptom notes while reviewing an herbal product.",
      "responseNotes": [
        "Some reviews suggest overall menopause-symptom relief.",
        "The evidence is mixed and depends on the preparation."
      ],
      "riskNotes": [
        "Rare serious liver-injury reports exist.",
        "Product identity and causality remain uncertain in those cases."
      ],
      "beats": [
        "Some reviews suggest overall menopause-symptom relief.",
        "Rare serious liver-injury reports exist."
      ],
      "asides": [
        "The notebook records symptoms alongside evidence limits.",
        "Product identity and causality remain uncertain in those cases."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "boswellia",
    "name": "Boswellia",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herbal resin extract studied for joint inflammation and pain.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Small studies suggest possible osteoarthritis symptom relief.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Oral use appears generally tolerated in short studies.",
      "Digestive symptoms or allergic reactions can occur."
    ],
    "interactionNote": "Potential interactions with medicines are not well characterized; review concurrent use.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Boswellia",
        "url": "https://www.nccih.nih.gov/health/boswellia"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "research",
      "task": "reading",
      "prop": "book",
      "motif": "inflammation",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Reading about joint-symptom research during a quiet recovery break.",
      "responseNotes": [
        "Small studies suggest possible osteoarthritis symptom relief.",
        "Benefits outside those studies are not established."
      ],
      "riskNotes": [
        "Short studies suggest oral use is generally tolerated.",
        "Digestive symptoms or allergic reactions can occur."
      ],
      "beats": [
        "Small studies suggest possible osteoarthritis symptom relief.",
        "Short studies suggest oral use is generally tolerated."
      ],
      "asides": [
        "Small studies leave practical questions unanswered.",
        "Digestive symptoms or allergic reactions can occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "bromelain",
    "name": "Bromelain",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Pineapple-derived enzyme supplement studied for swelling and digestive complaints.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some studies suggest possible relief of dental-surgery swelling.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Stomach upset and diarrhea can occur.",
      "Allergic reactions are possible, especially with pineapple sensitivity."
    ],
    "interactionNote": "May affect bleeding risk or interact with antibiotics; check with a clinician.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Bromelain",
        "url": "https://www.nccih.nih.gov/health/bromelain"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Reviewing a supplement claim about swelling after dental care.",
      "responseNotes": [
        "Some studies suggest less swelling after dental surgery.",
        "Broader clinical benefits are not established."
      ],
      "riskNotes": [
        "Stomach upset and diarrhea can occur.",
        "Allergy is possible, especially with pineapple sensitivity."
      ],
      "beats": [
        "Some studies suggest less swelling after dental surgery.",
        "Stomach upset and diarrhea can occur."
      ],
      "asides": [
        "The care card keeps the specific study context visible.",
        "Allergy is possible, especially with pineapple sensitivity."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "butterbur",
    "name": "Butterbur",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herbal extract studied for migraine prevention and allergic rhinitis.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some trials suggest fewer migraines or allergy symptoms.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Unprocessed plants contain liver- and lung-toxic pyrrolizidine alkaloids.",
      "Only certified PA-free products avoid that known plant toxin."
    ],
    "interactionNote": "May interact with medicines; product quality and PA removal require verification.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Butterbur",
        "url": "https://www.nccih.nih.gov/health/butterbur"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver",
        "lungs"
      ],
      "intent": "Planning a migraine-care discussion about a herbal extract.",
      "responseNotes": [
        "Some trials suggest fewer migraines or allergy symptoms.",
        "Results do not establish benefit for every preparation."
      ],
      "riskNotes": [
        "Unprocessed plants contain toxic pyrrolizidine alkaloids.",
        "These alkaloids can damage the liver and lungs."
      ],
      "beats": [
        "Some trials suggest fewer migraines or allergy symptoms.",
        "Unprocessed plants contain toxic pyrrolizidine alkaloids."
      ],
      "asides": [
        "The preparation and its plant toxins matter.",
        "These alkaloids can damage the liver and lungs."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "cats-claw",
    "name": "Cat’s Claw",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Traditional vine supplement promoted for immunity and inflammation; clinical benefit is unproven.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Human studies have not shown conclusive benefit for health conditions.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "May stimulate immune activity.",
      "May slow blood clotting."
    ],
    "interactionNote": "May interact with anticoagulants or immunosuppressants.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Cat’s Claw",
        "url": "https://www.nccih.nih.gov/health/cats-claw"
      }
    ],
    "scene": {
      "setting": "conservatory",
      "activity": "research",
      "task": "reading",
      "prop": "research-folder",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "bleeding",
      "organs": [],
      "cautions": [],
      "intent": "Reading traditional inflammation claims beside a potted vine.",
      "responseNotes": [
        "Human studies have not shown a conclusive health benefit.",
        "Traditional use does not establish clinical effectiveness."
      ],
      "riskNotes": [
        "The herb may stimulate immune activity.",
        "It may slow blood clotting."
      ],
      "beats": [
        "Human studies have not shown a conclusive health benefit.",
        "The herb may stimulate immune activity."
      ],
      "asides": [
        "The research folder keeps claims and evidence separate.",
        "It may slow blood clotting."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "chamomile",
    "name": "Chamomile",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herbal tea and extract used for relaxation and digestive comfort.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Preliminary studies suggest possible anxiety symptom benefit.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Allergic reactions, including severe reactions, can occur.",
      "Drowsiness or nausea may occur."
    ],
    "interactionNote": "May interact with warfarin and sedatives; check concurrent medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Chamomile",
        "url": "https://www.nccih.nih.gov/health/chamomile"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "hydration",
      "task": "hydration",
      "prop": "cup",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "sleepiness",
      "organs": [],
      "cautions": [],
      "intent": "Pausing with chamomile tea during an ordinary evening relaxation routine.",
      "responseNotes": [
        "Tea is used in ordinary relaxation routines.",
        "A reliable benefit for the tea itself is not established."
      ],
      "riskNotes": [
        "Allergic reactions can be severe.",
        "Drowsiness or nausea may occur."
      ],
      "beats": [
        "Tea is used in ordinary relaxation routines.",
        "Allergic reactions can be severe."
      ],
      "asides": [
        "The quiet evening is already part of the setting.",
        "Drowsiness or nausea may occur."
      ],
      "exposure": "drink"
    }
  },
  {
    "id": "chasteberry",
    "name": "Chasteberry",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herbal supplement promoted for premenstrual symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some studies suggest possible reduction in PMS symptoms; evidence is not definitive.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Mild nausea, headache, or digestive symptoms can occur.",
      "Pregnancy and hormone-sensitive conditions raise safety concerns."
    ],
    "interactionNote": "May interact with hormonal medicines or dopamine-active drugs.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Chasteberry",
        "url": "https://www.nccih.nih.gov/health/chasteberry"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "riskVisual": "hormones",
      "organs": [],
      "cautions": [
        "hormones"
      ],
      "intent": "Tracking cycle-related symptoms before reviewing a herbal supplement.",
      "responseNotes": [
        "Some studies suggest possible relief of PMS symptoms.",
        "The evidence remains inconclusive."
      ],
      "riskNotes": [
        "Nausea, headache, or digestive symptoms can occur.",
        "Pregnancy and hormone-sensitive conditions raise concerns."
      ],
      "beats": [
        "Some studies suggest possible relief of PMS symptoms.",
        "Nausea, headache, or digestive symptoms can occur."
      ],
      "asides": [
        "The calendar gives the symptom history a place.",
        "Pregnancy and hormone-sensitive conditions raise concerns."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "cinnamon",
    "name": "Cinnamon",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Spice and supplement promoted for blood sugar and weight control.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Research does not clearly support treatment benefits.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Large or prolonged supplement use can cause GI symptoms or allergy.",
      "Cassia cinnamon can contain coumarin, which may harm the liver in excess."
    ],
    "interactionNote": "Use caution with liver disease or blood-glucose medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Cinnamon",
        "url": "https://www.nccih.nih.gov/health/cinnamon"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Recording meals while considering a blood-sugar supplement claim.",
      "responseNotes": [
        "Research does not clearly support treatment benefits.",
        "Blood-sugar and weight claims remain uncertain."
      ],
      "riskNotes": [
        "Large or prolonged supplement use can cause digestive effects.",
        "Excess coumarin in cassia cinnamon may harm the liver."
      ],
      "beats": [
        "Research does not clearly support treatment benefits.",
        "Large or prolonged supplement use can cause digestive effects."
      ],
      "asides": [
        "A spice and a concentrated supplement are different contexts.",
        "Excess coumarin in cassia cinnamon may harm the liver."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "cranberry",
    "name": "Cranberry",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Fruit products used to support urinary health.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some evidence suggests fewer recurrent symptomatic UTIs in women.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Large amounts can cause stomach upset or diarrhea.",
      "Juice products may add substantial sugar."
    ],
    "interactionNote": "Possible warfarin interaction has been reported; review regular use.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Cranberry",
        "url": "https://www.nccih.nih.gov/health/cranberry"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Reading recurrent-UTI prevention information about cranberry products.",
      "responseNotes": [
        "Some studies find fewer recurrent symptomatic UTIs in women.",
        "Prevention evidence does not establish active-UTI treatment."
      ],
      "riskNotes": [
        "Large amounts can cause stomach upset or diarrhea.",
        "Juice products can add substantial sugar."
      ],
      "beats": [
        "Some studies find fewer recurrent symptomatic UTIs in women.",
        "Large amounts can cause stomach upset or diarrhea."
      ],
      "asides": [
        "Prevention evidence does not establish active-UTI treatment.",
        "Juice products can add substantial sugar."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "dandelion",
    "name": "Dandelion",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herb promoted for digestion, fluid balance, and liver support; benefits are unproven.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "No compelling clinical evidence supports treatment claims.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Food amounts are likely safe.",
      "Allergic skin reactions and uncertain high-dose safety are concerns."
    ],
    "interactionNote": "May interact with diuretics, lithium, and diabetes medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Dandelion",
        "url": "https://www.nccih.nih.gov/health/dandelion"
      }
    ],
    "scene": {
      "setting": "garden",
      "activity": "research",
      "task": "gardening",
      "prop": "plant",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "skin",
      "organs": [],
      "cautions": [
        "skin"
      ],
      "intent": "Tending a plant while reviewing traditional digestion claims.",
      "responseNotes": [
        "Compelling clinical evidence for treatment claims is lacking.",
        "Traditional use does not establish a clinical benefit."
      ],
      "riskNotes": [
        "Food amounts are likely safe.",
        "Allergic skin reactions and high-intake uncertainty remain."
      ],
      "beats": [
        "Compelling clinical evidence for treatment claims is lacking.",
        "Food amounts are likely safe."
      ],
      "asides": [
        "Familiar plants can still have uncertain supplement effects.",
        "Allergic skin reactions and high-intake uncertainty remain."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "echinacea",
    "name": "Echinacea",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herbal supplement commonly used for colds and respiratory symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "It may slightly reduce the chance of catching a cold; duration effects are unclear.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Allergic reactions can occur.",
      "Rash or stomach symptoms may occur."
    ],
    "interactionNote": "Potential immune-system interactions; review immunosuppressive therapy.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Echinacea",
        "url": "https://www.nccih.nih.gov/health/echinacea"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "reading",
      "prop": "book",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "skin",
      "organs": [],
      "cautions": [
        "skin"
      ],
      "intent": "Reading cold-season supplement information during a rest break.",
      "responseNotes": [
        "It may slightly reduce the chance of catching a cold.",
        "Its effect on cold duration remains unclear."
      ],
      "riskNotes": [
        "Allergic reactions can occur.",
        "Rash or stomach symptoms may occur."
      ],
      "beats": [
        "It may slightly reduce the chance of catching a cold.",
        "Allergic reactions can occur."
      ],
      "asides": [
        "The book keeps the small possible benefit in context.",
        "Rash or stomach symptoms may occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "elderberry",
    "name": "Elderberry",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Berry product promoted for cold and flu symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Preliminary research suggests possible symptom relief, but evidence is insufficient.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Raw or unripe berries and leaves can cause cyanide-like poisoning.",
      "Cooking removes the toxic compounds in berries."
    ],
    "interactionNote": "Interactions are uncertain; avoid raw plant material and review medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Elderberry",
        "url": "https://www.nccih.nih.gov/health/elderberry"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "research",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Checking preparation information for a cold-and-flu berry product.",
      "responseNotes": [
        "Preliminary research suggests possible cold-symptom relief.",
        "Evidence is insufficient to establish a reliable benefit."
      ],
      "riskNotes": [
        "Raw or unripe berries and leaves can cause poisoning.",
        "Cooking removes the toxic compounds in the berries."
      ],
      "beats": [
        "Preliminary research suggests possible cold-symptom relief.",
        "Raw or unripe berries and leaves can cause poisoning."
      ],
      "asides": [
        "Plant part and preparation change the safety question.",
        "Cooking removes the toxic compounds in the berries."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "ephedra",
    "name": "Ephedra",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "Historical stimulant-herb supplement",
    "useContext": "Stimulant herb formerly used in weight-loss and energy supplements.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Historical trials found modest short-term weight effects.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "FDA banned dietary supplements containing ephedrine alkaloids due to serious risks.",
      "Heart attack, stroke, seizures, and death have been reported."
    ],
    "interactionNote": "Caffeine and stimulant medicines can compound cardiovascular effects.",
    "evidence": "Strong",
    "status": "nonmedical",
    "sources": [
      {
        "label": "NCCIH · Ephedra",
        "url": "https://www.nccih.nih.gov/health/ephedra"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "research-notes",
      "prop": "research-folder",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [
        "heart"
      ],
      "intent": "Reviewing the history of a high-risk stimulant weight-loss supplement.",
      "responseNotes": [
        "Historical trials found modest short-term weight effects.",
        "Those findings do not establish safe supplement use."
      ],
      "riskNotes": [
        "FDA banned ephedrine-alkaloid dietary supplements.",
        "Heart attack, stroke, seizures, and death have been reported."
      ],
      "beats": [
        "Historical trials found modest short-term weight effects.",
        "FDA banned ephedrine-alkaloid dietary supplements."
      ],
      "asides": [
        "The safety record is central to this historical context.",
        "Heart attack, stroke, seizures, and death have been reported."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "european-mistletoe",
    "name": "European Mistletoe",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "Complementary cancer-care research",
    "useContext": "Plant extract studied in Europe as complementary cancer care; not a proven cancer treatment.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Clinical trials do not establish it as an effective cancer therapy.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Oral berries and leaves can cause serious poisoning.",
      "Injection can cause local inflammation, fever, or allergic reactions."
    ],
    "interactionNote": "Do not substitute for cancer treatment; interactions and product safety vary.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "NCCIH · European Mistletoe",
        "url": "https://www.nccih.nih.gov/health/european-mistletoe"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "reading",
      "prop": "research-folder",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading evidence on complementary mistletoe claims during cancer care.",
      "responseNotes": [
        "Trials have not established an effective cancer therapy.",
        "Complementary use is not proof of cancer-treatment benefit."
      ],
      "riskNotes": [
        "Oral berries and leaves can cause serious poisoning.",
        "Injections can cause inflammation, fever, or allergic reactions."
      ],
      "beats": [
        "Trials have not established an effective cancer therapy.",
        "Oral berries and leaves can cause serious poisoning."
      ],
      "asides": [
        "The evidence does not establish a cancer treatment.",
        "Injections can cause inflammation, fever, or allergic reactions."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "evening-primrose-oil",
    "name": "Evening Primrose Oil",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Seed oil supplement promoted for eczema, breast pain, and menopause symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Evidence does not support clear benefit for these uses.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "GI effects and headache can occur.",
      "Safety in pregnancy and children is uncertain."
    ],
    "interactionNote": "May interact with anticoagulants or seizure-threshold-lowering medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Evening Primrose Oil",
        "url": "https://www.nccih.nih.gov/health/evening-primrose-oil"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Writing questions about an oil supplement promoted for breast symptoms.",
      "responseNotes": [
        "Evidence does not show clear benefit for the promoted uses.",
        "Eczema and menopause claims remain unproven."
      ],
      "riskNotes": [
        "Digestive effects and headache can occur.",
        "Safety in pregnancy and children remains uncertain."
      ],
      "beats": [
        "Evidence does not show clear benefit for the promoted uses.",
        "Digestive effects and headache can occur."
      ],
      "asides": [
        "The questions include the lack of clear benefit.",
        "Safety in pregnancy and children remains uncertain."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "fenugreek",
    "name": "Fenugreek",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Seed used as food and supplement, often promoted for blood sugar and lactation.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some studies suggest blood-glucose reduction, but study quality is limited.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "GI symptoms and allergic reactions can occur.",
      "Large amounts may cause low blood sugar."
    ],
    "interactionNote": "May interact with diabetes medicines and anticoagulants.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Fenugreek",
        "url": "https://www.nccih.nih.gov/health/fenugreek"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "glucose",
      "organs": [],
      "cautions": [],
      "intent": "Recording meals while reviewing a blood-glucose herbal claim.",
      "responseNotes": [
        "Some studies suggest a reduction in blood glucose.",
        "Study quality limits conclusions about benefit."
      ],
      "riskNotes": [
        "Digestive symptoms and allergic reactions can occur.",
        "Large amounts may cause low blood sugar."
      ],
      "beats": [
        "Some studies suggest a reduction in blood glucose.",
        "Digestive symptoms and allergic reactions can occur."
      ],
      "asides": [
        "The diary keeps the claim tied to an actual care context.",
        "Large amounts may cause low blood sugar."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "feverfew",
    "name": "Feverfew",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herb studied for migraine prevention.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some studies suggest fewer migraines, but results are mixed.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Mouth irritation, nausea, or digestive symptoms can occur.",
      "Stopping after regular use may cause rebound symptoms."
    ],
    "interactionNote": "May affect clotting and interact with anticoagulants or antiplatelets.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Feverfew",
        "url": "https://www.nccih.nih.gov/health/feverfew"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "checklist",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "riskVisual": "withdrawal",
      "organs": [],
      "cautions": [],
      "intent": "Checking a migraine-symptom diary before a supplement discussion.",
      "responseNotes": [
        "Some studies suggest fewer migraines.",
        "Prevention studies have produced mixed results."
      ],
      "riskNotes": [
        "Mouth irritation, nausea, or digestive symptoms can occur.",
        "Stopping regular use may cause rebound symptoms."
      ],
      "beats": [
        "Some studies suggest fewer migraines.",
        "Mouth irritation, nausea, or digestive symptoms can occur."
      ],
      "asides": [
        "The diary follows the pattern between headaches.",
        "Stopping regular use may cause rebound symptoms."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "flaxseed-and-flaxseed-oil",
    "name": "Flaxseed and Flaxseed Oil",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Seed and oil supplements studied for cholesterol, bowel health, and weight.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Oil supplements have not shown weight-loss benefit; fiber may support bowel regularity.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Raw or unripe seeds may contain potentially toxic compounds.",
      "Bloating and diarrhea can occur."
    ],
    "interactionNote": "Fiber may affect medicine absorption; use with medication review.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Flaxseed and Flaxseed Oil",
        "url": "https://www.nccih.nih.gov/health/flaxseed-and-flaxseed-oil"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "nutrition",
      "mechanismStyle": "modulate",
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
      "intent": "Sitting down to a fiber-containing meal while reviewing flaxseed products.",
      "responseNotes": [
        "Seed fiber may support bowel regularity.",
        "Oil supplements have not shown weight-loss benefit."
      ],
      "riskNotes": [
        "Raw or unripe seeds may contain toxic compounds.",
        "Bloating and diarrhea can occur."
      ],
      "beats": [
        "Seed fiber may support bowel regularity.",
        "Raw or unripe seeds may contain toxic compounds."
      ],
      "asides": [
        "Seed fiber and extracted oil have different evidence.",
        "Bloating and diarrhea can occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "garcinia-cambogia",
    "name": "Garcinia Cambogia",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Fruit extract promoted for weight loss; benefit is unclear.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Studies show inconsistent or small effects on body weight.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Liver injury, including severe cases, has been reported.",
      "Multi-ingredient products complicate safety attribution."
    ],
    "interactionNote": "Use caution with liver-affecting medicines and supplements.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Garcinia Cambogia",
        "url": "https://www.nccih.nih.gov/health/garcinia-cambogia"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "writing",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Writing questions about a weight-loss supplement before a workout.",
      "responseNotes": [
        "Weight studies show small or inconsistent effects.",
        "A reliable weight-loss benefit is not established."
      ],
      "riskNotes": [
        "Liver injury, including severe cases, has been reported.",
        "Multiple ingredients can obscure which product caused harm."
      ],
      "beats": [
        "Weight studies show small or inconsistent effects.",
        "Liver injury, including severe cases, has been reported."
      ],
      "asides": [
        "The notebook leaves room for the liver-risk reports.",
        "Multiple ingredients can obscure which product caused harm."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "garlic",
    "name": "Garlic",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Food and supplement used for cardiovascular and immune claims.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Supplements may slightly lower LDL cholesterol or blood pressure.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "GI upset and odor are common concerns.",
      "Bleeding risk may rise, especially around surgery."
    ],
    "interactionNote": "Can interact with anticoagulants, antiplatelets, and some HIV medicines.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Garlic",
        "url": "https://www.nccih.nih.gov/health/garlic"
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
      "riskVisual": "bleeding",
      "organs": [],
      "cautions": [],
      "intent": "Eating an ordinary meal while reviewing garlic supplement claims.",
      "responseNotes": [
        "Supplements may slightly lower LDL or blood pressure.",
        "The effects are modest and study-specific."
      ],
      "riskNotes": [
        "Digestive upset and odor can occur.",
        "Bleeding risk may rise, including around surgery."
      ],
      "beats": [
        "Supplements may slightly lower LDL or blood pressure.",
        "Digestive upset and odor can occur."
      ],
      "asides": [
        "The evidence describes modest, study-specific effects.",
        "Bleeding risk may rise, including around surgery."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "ginger",
    "name": "Ginger",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Root used as food and supplement for nausea and digestive symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Evidence supports possible relief of pregnancy-related nausea.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Heartburn and abdominal discomfort can occur.",
      "High intake may increase bleeding risk."
    ],
    "interactionNote": "Review use with anticoagulants and medicines for blood pressure or glucose.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Ginger",
        "url": "https://www.nccih.nih.gov/health/ginger"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "resting",
      "prop": "cup",
      "motif": "gut",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Pausing with a cup while reviewing ginger for nausea symptoms.",
      "responseNotes": [
        "Some evidence supports relief of pregnancy-related nausea.",
        "Results depend on the preparation and symptom context."
      ],
      "riskNotes": [
        "Heartburn and abdominal discomfort can occur.",
        "High intake may increase bleeding risk."
      ],
      "beats": [
        "Some evidence supports relief of pregnancy-related nausea.",
        "Heartburn and abdominal discomfort can occur."
      ],
      "asides": [
        "The preparation and symptom context matter.",
        "High intake may increase bleeding risk."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "ginkgo",
    "name": "Ginkgo",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Leaf extract marketed for memory, circulation, and tinnitus.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Human studies have not established benefit for preventing or slowing dementia.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Seed is toxic if eaten.",
      "Leaf products can increase bleeding risk."
    ],
    "interactionNote": "May interact with anticoagulants, antiplatelets, and seizure medicines.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Ginkgo",
        "url": "https://www.nccih.nih.gov/health/ginkgo"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "reading",
      "prop": "book",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "bleeding",
      "organs": [],
      "cautions": [],
      "intent": "Reading a memory-supplement claim before returning to a book.",
      "responseNotes": [
        "Studies have not established dementia-prevention benefit.",
        "Memory claims do not establish effective dementia treatment."
      ],
      "riskNotes": [
        "The seeds are toxic if eaten.",
        "Leaf products can increase bleeding risk."
      ],
      "beats": [
        "Studies have not established dementia-prevention benefit.",
        "The seeds are toxic if eaten."
      ],
      "asides": [
        "The claim does not establish dementia prevention.",
        "Leaf products can increase bleeding risk."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "goldenseal",
    "name": "Goldenseal",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Root supplement promoted for infection and digestive complaints.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Rigorous human studies have not established health benefits.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Long-term safety is uncertain.",
      "Berberine can affect newborns and may cause adverse effects."
    ],
    "interactionNote": "Can alter metabolism of medicines, including metformin and cyclosporine.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Goldenseal",
        "url": "https://www.nccih.nih.gov/health/goldenseal"
      }
    ],
    "scene": {
      "setting": "conservatory",
      "activity": "research",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing an herb information card about infection claims.",
      "responseNotes": [
        "Rigorous human studies have not established health benefits.",
        "Infection and digestive-treatment claims remain unproven."
      ],
      "riskNotes": [
        "Long-term safety remains uncertain.",
        "Its berberine can affect newborns and cause adverse effects."
      ],
      "beats": [
        "Rigorous human studies have not established health benefits.",
        "Long-term safety remains uncertain."
      ],
      "asides": [
        "The card includes the missing clinical evidence.",
        "Its berberine can affect newborns and cause adverse effects."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "grape-seed-extract",
    "name": "Grape Seed Extract",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Seed extract studied for cardiovascular and metabolic effects.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some trials suggest small changes in LDL cholesterol or triglycerides.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Generally tolerated, but safety data are limited.",
      "Allergic reaction or headache can occur."
    ],
    "interactionNote": "May interact with anticoagulants or blood-pressure medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Grape Seed Extract",
        "url": "https://www.nccih.nih.gov/health/grape-seed-extract"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "reading",
      "prop": "book",
      "motif": "lipids",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading about a seed extract during a cholesterol-care discussion.",
      "responseNotes": [
        "Some trials suggest small LDL or triglyceride changes.",
        "Broader treatment benefits are not established."
      ],
      "riskNotes": [
        "Safety data remain limited despite generally good tolerance.",
        "Allergic reactions or headache can occur."
      ],
      "beats": [
        "Some trials suggest small LDL or triglyceride changes.",
        "Safety data remain limited despite generally good tolerance."
      ],
      "asides": [
        "The possible lipid changes are small and study-specific.",
        "Allergic reactions or headache can occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "green-tea",
    "name": "Green Tea",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Beverage and concentrated extract used for alertness and weight claims.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Beverage is safe for most adults; weight effects of extract are small or uncertain.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Extract supplements can cause liver injury.",
      "Caffeine can cause insomnia, anxiety, and palpitations."
    ],
    "interactionNote": "Can interact with warfarin and some medicines; caffeine adds stimulant effects.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Green Tea",
        "url": "https://www.nccih.nih.gov/health/green-tea"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "hydration",
      "task": "hydration",
      "prop": "cup",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [
        "heart"
      ],
      "intent": "Taking an ordinary green-tea break during a work session.",
      "responseNotes": [
        "The beverage is used for everyday alertness.",
        "Most adults tolerate ordinary beverage use."
      ],
      "riskNotes": [
        "Beverage caffeine can cause insomnia or anxiety.",
        "Caffeine can also cause palpitations."
      ],
      "beats": [
        "The beverage is used for everyday alertness.",
        "Beverage caffeine can cause insomnia or anxiety."
      ],
      "asides": [
        "The liver-injury concern applies to concentrated extracts.",
        "Caffeine can also cause palpitations."
      ],
      "exposure": "drink"
    }
  },
  {
    "id": "hawthorn",
    "name": "Hawthorn",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Berry and leaf extract promoted for heart failure and circulation.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Evidence for heart failure is conflicting and insufficient.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Products labeled tejocote have sometimes contained toxic yellow oleander.",
      "May cause dizziness or GI symptoms."
    ],
    "interactionNote": "Can interact with heart and blood-pressure medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Hawthorn",
        "url": "https://www.nccih.nih.gov/health/hawthorn"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "dizzy",
      "timeCourse": "unknown",
      "riskVisual": "dizziness",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing a heart-health herbal claim during a care discussion.",
      "responseNotes": [
        "Heart-failure research has produced conflicting results.",
        "Evidence is insufficient to establish a treatment benefit."
      ],
      "riskNotes": [
        "Some 'tejocote' products contained toxic yellow oleander.",
        "Dizziness or digestive symptoms may occur."
      ],
      "beats": [
        "Heart-failure research has produced conflicting results.",
        "Some 'tejocote' products contained toxic yellow oleander."
      ],
      "asides": [
        "The product's identity is part of the safety question.",
        "Dizziness or digestive symptoms may occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "hoodia",
    "name": "Hoodia",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Desert plant extract promoted for appetite suppression and weight loss.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "A small study found no greater weight loss than placebo.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Human safety data are sparse.",
      "Nausea, vomiting, dizziness, and sensory symptoms were reported."
    ],
    "interactionNote": "Product contents and interactions are uncertain.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Hoodia",
        "url": "https://www.nccih.nih.gov/health/hoodia"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "unknown",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Checking evidence behind an appetite-suppression supplement label.",
      "responseNotes": [
        "A small trial found no greater weight loss than placebo.",
        "An appetite-suppression claim is not an established benefit."
      ],
      "riskNotes": [
        "Human safety data are sparse.",
        "Nausea, vomiting, dizziness, and sensory symptoms were reported."
      ],
      "beats": [
        "A small trial found no greater weight loss than placebo.",
        "Human safety data are sparse."
      ],
      "asides": [
        "A small trial did not establish weight-loss benefit.",
        "Nausea, vomiting, dizziness, and sensory symptoms were reported."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "horse-chestnut",
    "name": "Horse Chestnut",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Seed extract studied for chronic venous insufficiency symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Standardized extract may improve leg pain and swelling.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Raw seeds, bark, flowers, and leaves are toxic.",
      "Only processed standardized extracts remove the toxic constituent."
    ],
    "interactionNote": "May interact with anticoagulants and diabetes medicines.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Horse Chestnut",
        "url": "https://www.nccih.nih.gov/health/horse-chestnut"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading about a standardized extract for leg-vein symptoms.",
      "responseNotes": [
        "Standardized extracts may improve leg pain and swelling.",
        "Those findings concern chronic venous insufficiency."
      ],
      "riskNotes": [
        "Raw seeds, bark, flowers, and leaves are toxic.",
        "Processed standardized extracts remove that toxic constituent."
      ],
      "beats": [
        "Standardized extracts may improve leg pain and swelling.",
        "Raw seeds, bark, flowers, and leaves are toxic."
      ],
      "asides": [
        "Processed extract differs from toxic raw plant material.",
        "Processed standardized extracts remove that toxic constituent."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "kava",
    "name": "Kava",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Traditional ceremonial beverage and supplement promoted for anxiety.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some studies suggest anxiety relief, but it has not shown clear benefit for GAD.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Rare liver injury has been severe or fatal.",
      "Sedation and impaired coordination can occur."
    ],
    "interactionNote": "Alcohol and sedatives may increase CNS depression; avoid with liver-risk medicines.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Kava",
        "url": "https://www.nccih.nih.gov/health/kava"
      }
    ],
    "scene": {
      "setting": "listening-room",
      "activity": "rest",
      "task": "music",
      "prop": "headphones",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Settling into a quiet listening break while considering an anxiety product.",
      "responseNotes": [
        "Some studies suggest anxiety relief.",
        "A clear benefit for generalized anxiety is not established."
      ],
      "riskNotes": [
        "Rare liver injury has been severe or fatal.",
        "Sedation and impaired coordination can occur."
      ],
      "beats": [
        "Some studies suggest anxiety relief.",
        "Rare liver injury has been severe or fatal."
      ],
      "asides": [
        "The liver-risk reports remain part of this context.",
        "Sedation and impaired coordination can occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "lavender",
    "name": "Lavender",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Aromatic herb used in teas, oils, and oral products promoted for anxiety.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "A specific oral lavender oil preparation may reduce anxiety symptoms.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Can cause nausea, headache, or allergic skin reactions.",
      "Sedation may occur with oral products."
    ],
    "interactionNote": "May add to effects of sedatives; essential oil should not be swallowed casually.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Lavender",
        "url": "https://www.nccih.nih.gov/health/lavender"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "reading",
      "prop": "book",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Reading about a specific oral lavender preparation for anxiety symptoms.",
      "responseNotes": [
        "A specific oral oil preparation may reduce anxiety symptoms.",
        "The result does not apply to every lavender product."
      ],
      "riskNotes": [
        "Nausea, headache, or allergic skin reactions can occur.",
        "Oral products may cause sedation."
      ],
      "beats": [
        "A specific oral oil preparation may reduce anxiety symptoms.",
        "Nausea, headache, or allergic skin reactions can occur."
      ],
      "asides": [
        "Findings for one preparation do not apply to every product.",
        "Oral products may cause sedation."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "licorice-root",
    "name": "Licorice Root",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Root used in traditional remedies and supplements for digestive or respiratory symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some topical or mouth-rinse products may ease canker sores; broader claims lack evidence.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Glycyrrhizin can cause high blood pressure, low potassium, and arrhythmia.",
      "Risk is higher with prolonged or high exposure."
    ],
    "interactionNote": "Interacts with diuretics, digoxin, corticosteroids, and blood-pressure medicines.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Licorice Root",
        "url": "https://www.nccih.nih.gov/health/licorice-root"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "research",
      "task": "reading",
      "prop": "care-card",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "electrolytes",
      "organs": [],
      "cautions": [
        "heart"
      ],
      "intent": "Reading a digestive-remedy label containing licorice root.",
      "responseNotes": [
        "Digestive-treatment benefits are not established.",
        "Some topical or rinse products may ease canker sores."
      ],
      "riskNotes": [
        "Glycyrrhizin can raise pressure and lower potassium.",
        "Arrhythmia risk rises with prolonged or high exposure."
      ],
      "beats": [
        "Digestive-treatment benefits are not established.",
        "Glycyrrhizin can raise pressure and lower potassium."
      ],
      "asides": [
        "The glycyrrhizin content matters to the safety discussion.",
        "Arrhythmia risk rises with prolonged or high exposure."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "milk-thistle",
    "name": "Milk Thistle",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Seed extract promoted for liver health.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Evidence is insufficient to conclude benefit for liver diseases.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Digestive upset and allergy can occur.",
      "Product contamination and quality vary."
    ],
    "interactionNote": "May affect drug-metabolizing enzymes; review medicines with a pharmacist.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Milk Thistle",
        "url": "https://www.nccih.nih.gov/health/milk-thistle"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "writing",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Writing questions about a supplement promoted for liver health.",
      "responseNotes": [
        "Evidence is insufficient to establish liver-disease benefit.",
        "A liver-health claim does not establish effective treatment."
      ],
      "riskNotes": [
        "Digestive upset and allergy can occur.",
        "Contamination and product quality vary."
      ],
      "beats": [
        "Evidence is insufficient to establish liver-disease benefit.",
        "Digestive upset and allergy can occur."
      ],
      "asides": [
        "The claim does not establish liver-disease benefit.",
        "Contamination and product quality vary."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "mugwort",
    "name": "Mugwort",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herb used traditionally and studied in topical mixtures.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Human evidence for health benefit is insufficient.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Safety of oral or topical use is not established.",
      "Should not be used during pregnancy."
    ],
    "interactionNote": "Possible allergy and medicine interactions are poorly characterized.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Mugwort",
        "url": "https://www.nccih.nih.gov/health/mugwort"
      }
    ],
    "scene": {
      "setting": "conservatory",
      "activity": "research",
      "task": "gardening",
      "prop": "plant",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "reproductive",
      "organs": [],
      "cautions": [],
      "intent": "Tending a plant while reading about traditional mugwort preparations.",
      "responseNotes": [
        "Human evidence is insufficient to establish a health benefit.",
        "Traditional use does not establish treatment effectiveness."
      ],
      "riskNotes": [
        "Oral and topical safety are not established.",
        "Pregnancy use raises safety concerns."
      ],
      "beats": [
        "Human evidence is insufficient to establish a health benefit.",
        "Oral and topical safety are not established."
      ],
      "asides": [
        "Traditional use does not settle pregnancy safety.",
        "Pregnancy use raises safety concerns."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "noni",
    "name": "Noni",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Tropical fruit juice promoted for immune and general health.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Human studies have not shown a clear health benefit.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Rare liver toxicity has been reported.",
      "High potassium content may be a concern in kidney disease."
    ],
    "interactionNote": "May interact with blood-pressure or kidney medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Noni",
        "url": "https://www.nccih.nih.gov/health/noni"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "hydration",
      "task": "hydration",
      "prop": "cup",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Pausing with a noni fruit-juice product while reviewing its health claims.",
      "responseNotes": [
        "Human studies have not shown a clear health benefit.",
        "General-health marketing does not establish clinical benefit."
      ],
      "riskNotes": [
        "Rare liver toxicity has been reported.",
        "High potassium may be a concern in kidney disease."
      ],
      "beats": [
        "Human studies have not shown a clear health benefit.",
        "Rare liver toxicity has been reported."
      ],
      "asides": [
        "The information includes liver reports and potassium concerns.",
        "High potassium may be a concern in kidney disease."
      ],
      "exposure": "drink"
    }
  },
  {
    "id": "passionflower",
    "name": "Passionflower",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herb and tea promoted for anxiety and sleep.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Small studies suggest possible anxiety relief, but conclusions remain uncertain.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Drowsiness and dizziness can occur.",
      "Use around surgery or pregnancy may be unsafe."
    ],
    "interactionNote": "Can interact with sedatives and anesthesia medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Passionflower",
        "url": "https://www.nccih.nih.gov/health/passionflower"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "sleep",
      "task": "sleep-log",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "sleepiness",
      "organs": [],
      "cautions": [],
      "intent": "Updating a sleep diary while considering a relaxation herb.",
      "responseNotes": [
        "Small studies suggest possible anxiety relief.",
        "The clinical conclusions remain uncertain."
      ],
      "riskNotes": [
        "Drowsiness and dizziness can occur.",
        "Use around surgery or pregnancy may be unsafe."
      ],
      "beats": [
        "Small studies suggest possible anxiety relief.",
        "Drowsiness and dizziness can occur."
      ],
      "asides": [
        "The diary tracks the routine as well as the product.",
        "Use around surgery or pregnancy may be unsafe."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "peppermint-oil",
    "name": "Peppermint Oil",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Essential oil used in food and enteric-coated products for digestive symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Enteric-coated oil may improve IBS symptoms in adults.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Heartburn and reflux can worsen.",
      "Skin or mouth irritation can occur."
    ],
    "interactionNote": "May affect cyclosporine and medicines metabolized by liver enzymes.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Peppermint Oil",
        "url": "https://www.nccih.nih.gov/health/peppermint-oil"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "gut",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "gut",
      "organs": [
        "gut"
      ],
      "cautions": [
        "gut"
      ],
      "intent": "Recording IBS symptoms while reviewing an enteric-coated peppermint product.",
      "responseNotes": [
        "Enteric-coated oil may improve IBS symptoms in adults.",
        "Findings depend on the preparation and indication."
      ],
      "riskNotes": [
        "Heartburn and reflux can worsen.",
        "Skin or mouth irritation can occur."
      ],
      "beats": [
        "Enteric-coated oil may improve IBS symptoms in adults.",
        "Heartburn and reflux can worsen."
      ],
      "asides": [
        "The coating and preparation are part of the studied context.",
        "Skin or mouth irritation can occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "pomegranate",
    "name": "Pomegranate",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Fruit juice and extract studied for blood pressure and metabolic health.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Juice or extract may modestly lower blood pressure; more research is needed.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Root, stem, and peel may be unsafe in large amounts.",
      "Allergic reactions or digestive effects can occur."
    ],
    "interactionNote": "May interact with blood-pressure medicines and some drug-metabolizing enzymes.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Pomegranate",
        "url": "https://www.nccih.nih.gov/health/pomegranate"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "pressure",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Eating a meal while reading about pomegranate and blood-pressure research.",
      "responseNotes": [
        "Juice or extract may modestly lower blood pressure.",
        "More research is needed to establish broader benefit."
      ],
      "riskNotes": [
        "Large amounts of root, stem, or peel may be unsafe.",
        "Allergic reactions or digestive effects can occur."
      ],
      "beats": [
        "Juice or extract may modestly lower blood pressure.",
        "Large amounts of root, stem, or peel may be unsafe."
      ],
      "asides": [
        "The possible change is modest and study-dependent.",
        "Allergic reactions or digestive effects can occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "red-clover",
    "name": "Red Clover",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Isoflavone-rich plant supplement promoted for menopause symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Studies of hot flashes are inconsistent and often have bias concerns.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Pregnancy and breastfeeding safety is uncertain.",
      "Potential estrogen-like effects raise concern in hormone-sensitive conditions."
    ],
    "interactionNote": "May interact with anticoagulants and hormone therapies.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Red Clover",
        "url": "https://www.nccih.nih.gov/health/red-clover"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "care",
      "task": "checklist",
      "prop": "care-card",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "hormones",
      "organs": [],
      "cautions": [
        "hormones"
      ],
      "intent": "Checking menopause-symptom notes before a red-clover discussion.",
      "responseNotes": [
        "Hot-flash studies have produced inconsistent results.",
        "Bias concerns limit conclusions about benefit."
      ],
      "riskNotes": [
        "Pregnancy and breastfeeding safety remain uncertain.",
        "Estrogen-like effects raise hormone-sensitive concerns."
      ],
      "beats": [
        "Hot-flash studies have produced inconsistent results.",
        "Pregnancy and breastfeeding safety remain uncertain."
      ],
      "asides": [
        "Mixed study results leave the claimed benefit uncertain.",
        "Estrogen-like effects raise hormone-sensitive concerns."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "rhodiola",
    "name": "Rhodiola",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Root supplement promoted for fatigue, stress, and performance.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Evidence is insufficient to determine whether it is useful.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Dizziness, headache, insomnia, and dry mouth can occur.",
      "Long-term safety is not established."
    ],
    "interactionNote": "May interact with losartan and other medicines; review combinations.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Rhodiola",
        "url": "https://www.nccih.nih.gov/health/rhodiola"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "typing",
      "prop": "phone",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "dry-mouth",
      "timeCourse": "unknown",
      "riskVisual": "dry-mouth",
      "organs": [],
      "cautions": [],
      "intent": "Pausing a work task to read a stress-and-fatigue supplement claim.",
      "responseNotes": [
        "Evidence is insufficient to establish usefulness.",
        "Fatigue and performance claims remain uncertain."
      ],
      "riskNotes": [
        "Dizziness, headache, insomnia, or dry mouth can occur.",
        "Long-term safety is not established."
      ],
      "beats": [
        "Evidence is insufficient to establish usefulness.",
        "Dizziness, headache, insomnia, or dry mouth can occur."
      ],
      "asides": [
        "The workday continues while the evidence remains uncertain.",
        "Long-term safety is not established."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "sage",
    "name": "Sage",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Herb and extract studied for hot flashes and cognition.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Small studies suggest possible reduction in hot flashes.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Some sage species contain thujone, which can be toxic in large amounts.",
      "Seizures are a concern with concentrated thujone exposure."
    ],
    "interactionNote": "Use caution with seizure disorders and sedative medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Sage",
        "url": "https://www.nccih.nih.gov/health/sage"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "research",
      "task": "reading",
      "prop": "book",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "seizure",
      "organs": [],
      "cautions": [
        "brain"
      ],
      "intent": "Reading about a sage preparation promoted for hot flashes.",
      "responseNotes": [
        "Small studies suggest possible hot-flash relief.",
        "Broader clinical benefits are not established."
      ],
      "riskNotes": [
        "Some species contain thujone, which is toxic in large amounts.",
        "Concentrated thujone exposure can cause seizures."
      ],
      "beats": [
        "Small studies suggest possible hot-flash relief.",
        "Some species contain thujone, which is toxic in large amounts."
      ],
      "asides": [
        "Concentrated thujone exposure carries a separate safety concern.",
        "Concentrated thujone exposure can cause seizures."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "saw-palmetto",
    "name": "Saw Palmetto",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Berry extract promoted for urinary symptoms related to BPH.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "A recent review found little or no benefit when used alone for BPH symptoms.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Usually well tolerated; mild digestive symptoms or headache can occur.",
      "Product quality and preparation vary."
    ],
    "interactionNote": "May affect hormones or clotting; review anticoagulants and hormone medicines.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Saw Palmetto",
        "url": "https://www.nccih.nih.gov/health/saw-palmetto"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Recording urinary symptoms before reviewing saw-palmetto evidence.",
      "responseNotes": [
        "A review found little or no benefit for BPH symptoms alone.",
        "Urinary-health marketing does not establish symptom relief."
      ],
      "riskNotes": [
        "Mild digestive symptoms or headache can occur.",
        "Product quality and preparation vary."
      ],
      "beats": [
        "A review found little or no benefit for BPH symptoms alone.",
        "Mild digestive symptoms or headache can occur."
      ],
      "asides": [
        "Trials found little or no benefit for the selected BPH context.",
        "Product quality and preparation vary."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "soy",
    "name": "Soy",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Food protein and isoflavone supplement studied for cholesterol and menopause symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Soy protein may modestly lower cholesterol; isoflavones may reduce hot flashes.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Food and studied supplements are generally tolerated.",
      "Soy allergy can cause serious reactions."
    ],
    "interactionNote": "Can affect levothyroxine absorption and warfarin response; separate/review use.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Soy",
        "url": "https://www.nccih.nih.gov/health/soy"
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
      "riskVisual": "skin",
      "organs": [],
      "cautions": [],
      "intent": "Eating a soy-containing meal during a cholesterol-care routine.",
      "responseNotes": [
        "Soy protein may modestly lower cholesterol.",
        "This dietary role does not establish extra supplement benefit."
      ],
      "riskNotes": [
        "Soy allergy can cause serious reactions.",
        "Food and studied supplements are otherwise generally tolerated."
      ],
      "beats": [
        "Soy protein may modestly lower cholesterol.",
        "Soy allergy can cause serious reactions."
      ],
      "asides": [
        "Food protein and concentrated isoflavones have different uses.",
        "Food and studied supplements are otherwise generally tolerated."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "tea-tree-oil",
    "name": "Tea Tree Oil",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "Topical essential oil",
    "useContext": "Topical essential oil used in some skin-care products.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Small studies suggest possible benefit for acne or athlete’s foot.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Swallowing can cause confusion, unsteadiness, coma, or other poisoning.",
      "Topical products may irritate or cause allergic dermatitis."
    ],
    "interactionNote": "Avoid oral exposure; topical products may interact with skin treatments.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Tea Tree Oil",
        "url": "https://www.nccih.nih.gov/health/tea-tree-oil"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "skin",
      "task": "skin-check",
      "prop": "towel",
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
      "intent": "Checking a skin area while reviewing a topical tea-tree-oil product.",
      "responseNotes": [
        "Small studies suggest possible acne or athlete's-foot benefit.",
        "The evidence concerns selected topical preparations."
      ],
      "riskNotes": [
        "Swallowing the oil can cause coma or other poisoning.",
        "Topical use can irritate skin or cause allergic dermatitis."
      ],
      "beats": [
        "Small studies suggest possible acne or athlete's-foot benefit.",
        "Swallowing the oil can cause coma or other poisoning."
      ],
      "asides": [
        "The oil is a topical product in this scene.",
        "Topical use can irritate skin or cause allergic dermatitis."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "thunder-god-vine",
    "name": "Thunder God Vine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Traditional plant extract studied for rheumatoid arthritis symptoms.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Some reports suggest joint-symptom improvement, but evidence is limited.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Can cause digestive symptoms and lower white blood-cell counts.",
      "Reproductive toxicity and menstrual effects are concerns."
    ],
    "interactionNote": "Can interact with immunosuppressants and anticoagulants.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Thunder God Vine",
        "url": "https://www.nccih.nih.gov/health/thunder-god-vine"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "writing",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "hormones",
      "organs": [],
      "cautions": [
        "hormones"
      ],
      "intent": "Writing questions about a traditional extract for arthritis symptoms.",
      "responseNotes": [
        "Some reports suggest improved arthritis symptoms.",
        "The clinical evidence remains limited."
      ],
      "riskNotes": [
        "Digestive symptoms and low white-cell counts can occur.",
        "Reproductive toxicity and menstrual changes are concerns."
      ],
      "beats": [
        "Some reports suggest improved arthritis symptoms.",
        "Digestive symptoms and low white-cell counts can occur."
      ],
      "asides": [
        "Limited benefit evidence sits beside substantial safety concerns.",
        "Reproductive toxicity and menstrual changes are concerns."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "turmeric",
    "name": "Turmeric",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Spice and curcumin supplement studied for osteoarthritis and metabolic conditions.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Evidence is not sufficient to establish a clear treatment benefit.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "High-bioavailability products have been linked to liver injury.",
      "Nausea, reflux, and diarrhea can occur."
    ],
    "interactionNote": "Piperine-containing products can change medicine exposure; review interactions.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Turmeric",
        "url": "https://www.nccih.nih.gov/health/turmeric"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "research",
      "task": "reading",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "unknown",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Reading a joint-health supplement label during a recovery break.",
      "responseNotes": [
        "Evidence does not establish a clear treatment benefit.",
        "Osteoarthritis and metabolic claims remain uncertain."
      ],
      "riskNotes": [
        "Highly absorbable products have been linked to liver injury.",
        "Nausea, reflux, and diarrhea can occur."
      ],
      "beats": [
        "Evidence does not establish a clear treatment benefit.",
        "Highly absorbable products have been linked to liver injury."
      ],
      "asides": [
        "More absorbable products can have different safety concerns.",
        "Nausea, reflux, and diarrhea can occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "valerian",
    "name": "Valerian",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Root supplement used for sleep and relaxation.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Evidence for insomnia is inconsistent; guidelines advise against chronic-insomnia use.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Drowsiness and headache can occur.",
      "Long-term safety is not established."
    ],
    "interactionNote": "Alcohol and sedatives may increase drowsiness.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Valerian",
        "url": "https://www.nccih.nih.gov/health/valerian"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "sleep",
      "task": "sleep-log",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "unknown",
      "riskVisual": "sleepiness",
      "organs": [],
      "cautions": [],
      "intent": "Updating a sleep record while reviewing valerian's insomnia claims.",
      "responseNotes": [
        "Insomnia studies have produced inconsistent results.",
        "Guidelines advise against use for chronic insomnia."
      ],
      "riskNotes": [
        "Drowsiness and headache can occur.",
        "Long-term safety is not established."
      ],
      "beats": [
        "Insomnia studies have produced inconsistent results.",
        "Drowsiness and headache can occur."
      ],
      "asides": [
        "The sleep record keeps the ordinary routine visible.",
        "Long-term safety is not established."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "white-mulberry-leaf",
    "name": "White Mulberry Leaf",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Leaf extract promoted for blood sugar and metabolic effects.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Human studies of blood glucose are mixed.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Digestive upset, gas, and loose stools can occur.",
      "Low blood sugar may occur with diabetes medicines."
    ],
    "interactionNote": "May add to effects of glucose-lowering medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · White Mulberry Leaf",
        "url": "https://www.nccih.nih.gov/health/white-mulberry-leaf"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "glucose-log",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "glucose",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing glucose notes before a mulberry-leaf supplement discussion.",
      "responseNotes": [
        "Human studies of blood glucose have mixed results.",
        "A reliable metabolic treatment benefit is not established."
      ],
      "riskNotes": [
        "Digestive upset, gas, and loose stools can occur.",
        "Low blood sugar may occur with diabetes medicines."
      ],
      "beats": [
        "Human studies of blood glucose have mixed results.",
        "Digestive upset, gas, and loose stools can occur."
      ],
      "asides": [
        "The discussion includes interactions with diabetes medicines.",
        "Low blood sugar may occur with diabetes medicines."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "yohimbe",
    "name": "Yohimbe",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "botanical supplement",
    "useContext": "Bark supplement promoted for sexual performance and weight loss.",
    "mechanism": "Botanical mixture; active constituents vary, and a specific mechanism for marketed claims is not established.",
    "effects": [
      "Supplement products are inconsistently labeled and are not equivalent to prescription yohimbine.",
      "Clinical benefit beyond the described study context is not established"
    ],
    "risks": [
      "Yohimbine has been associated with arrhythmia, heart attack, seizures, and blood-pressure problems.",
      "Supplement amounts vary widely."
    ],
    "interactionNote": "Can interact dangerously with stimulants, antidepressants, and blood-pressure medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Yohimbe",
        "url": "https://www.nccih.nih.gov/health/yohimbe"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "reading",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [
        "heart"
      ],
      "intent": "Reading a sexual-performance supplement label and its safety reports.",
      "responseNotes": [
        "Supplement contents vary and differ from prescription drug use.",
        "A clinical benefit for these supplements is not established."
      ],
      "riskNotes": [
        "Yohimbine is linked to heart attack, arrhythmia, and seizures.",
        "Blood-pressure problems occur; supplement amounts vary."
      ],
      "beats": [
        "Supplement contents vary and differ from prescription drug use.",
        "Yohimbine is linked to heart attack, arrhythmia, and seizures."
      ],
      "asides": [
        "Variable supplement contents complicate the claim.",
        "Blood-pressure problems occur; supplement amounts vary."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "vitamin-a",
    "name": "Vitamin A",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting vitamin A needs through diet or deficiency care; excess preformed vitamin A has distinct liver and pregnancy risks.",
    "mechanism": "Essential fat-soluble retinoid nutrient.",
    "effects": [
      "Supports normal vision",
      "Supports immune and tissue function"
    ],
    "risks": [
      "Excess preformed vitamin A can injure liver",
      "High intake in pregnancy can harm fetal development"
    ],
    "interactionNote": "Retinoids and orlistat can affect status; excess supplementation is hazardous.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Vitamin A fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "vision",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [
        "eyes"
      ],
      "cautions": [
        "liver"
      ],
      "intent": "Eating a meal while reviewing dietary vitamin A needs.",
      "responseNotes": [
        "Adequate vitamin A supports normal vision.",
        "It also supports immune and tissue function."
      ],
      "riskNotes": [
        "Excess preformed vitamin A can injure the liver.",
        "High intake during pregnancy can harm fetal development."
      ],
      "beats": [
        "Adequate vitamin A supports normal vision.",
        "Excess preformed vitamin A can injure the liver."
      ],
      "asides": [
        "The role is normal vision and tissue maintenance.",
        "High intake during pregnancy can harm fetal development."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "vitamin-c",
    "name": "Vitamin C",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting vitamin C needs in ordinary nutrition or deficiency care, including its roles in collagen and iron absorption.",
    "mechanism": "Water-soluble antioxidant and enzyme cofactor.",
    "effects": [
      "Supports collagen formation",
      "Enhances nonheme iron absorption"
    ],
    "risks": [
      "High intake can cause diarrhea or cramps",
      "May increase kidney-stone risk in susceptible people"
    ],
    "interactionNote": "Can increase iron absorption; high intake may interact with some cancer treatments.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Vitamin C fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/VitaminC-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Recording food choices while reviewing vitamin C intake.",
      "responseNotes": [
        "Adequate vitamin C supports collagen formation.",
        "It helps the body absorb nonheme iron."
      ],
      "riskNotes": [
        "High intake can cause diarrhea or abdominal cramps.",
        "Kidney-stone risk may rise in susceptible people."
      ],
      "beats": [
        "Adequate vitamin C supports collagen formation.",
        "High intake can cause diarrhea or abdominal cramps."
      ],
      "asides": [
        "Normal nutrient function does not imply benefit from excess.",
        "Kidney-stone risk may rise in susceptible people."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "vitamin-e",
    "name": "Vitamin E",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting vitamin E nutritional needs; high-dose supplements are a separate exposure from food intake.",
    "mechanism": "Fat-soluble antioxidant tocopherol nutrient.",
    "effects": [
      "Supports cell-membrane antioxidant activity",
      "Helps meet essential nutrient needs"
    ],
    "risks": [
      "High supplemental intake can increase bleeding",
      "Large doses may increase hemorrhagic-stroke risk"
    ],
    "interactionNote": "Can increase bleeding risk with anticoagulants or antiplatelet medicines.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Vitamin E fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/VitaminE-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "nutrition",
      "mechanismStyle": "protect",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "bleeding",
      "organs": [],
      "cautions": [],
      "intent": "Reading a supplement label while reviewing vitamin E intake.",
      "responseNotes": [
        "Vitamin E supports antioxidant activity in cell membranes.",
        "Adequacy meets an essential nutritional need."
      ],
      "riskNotes": [
        "High supplemental intake can increase bleeding.",
        "Large doses may increase hemorrhagic-stroke risk."
      ],
      "beats": [
        "Vitamin E supports antioxidant activity in cell membranes.",
        "High supplemental intake can increase bleeding."
      ],
      "asides": [
        "The label also includes the high-intake bleeding concern.",
        "Large doses may increase hemorrhagic-stroke risk."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "vitamin-k",
    "name": "Vitamin K",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting vitamin K needs for clotting proteins, with special attention to changes in intake during vitamin K-antagonist treatment.",
    "mechanism": "Fat-soluble cofactor for vitamin-K-dependent proteins.",
    "effects": [
      "Supports normal blood clotting",
      "Supports bone protein function"
    ],
    "risks": [
      "Large changes in intake alter anticoagulation",
      "Rare allergic reactions to supplements can occur"
    ],
    "interactionNote": "Vitamin K intake can substantially change warfarin effect; keep intake consistent.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Vitamin K fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/VitaminK-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "clot",
      "organs": [],
      "cautions": [],
      "intent": "Eating an ordinary meal while reviewing vitamin K needs for normal clotting proteins.",
      "responseNotes": [
        "Vitamin K supports normal blood-clotting proteins.",
        "It also supports proteins involved in bone function."
      ],
      "riskNotes": [
        "Large intake changes can alter anticoagulant treatment.",
        "Rare allergic reactions to supplements can occur."
      ],
      "beats": [
        "Vitamin K supports normal blood-clotting proteins.",
        "Large intake changes can alter anticoagulant treatment."
      ],
      "asides": [
        "Consistency and medication context matter to this nutrient.",
        "Rare allergic reactions to supplements can occur."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "thiamin-vitamin-b1",
    "name": "Thiamin (Vitamin B1)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting thiamin needs in food or clinician-managed deficiency care; normal metabolism is not evidence of benefit from extra intake.",
    "mechanism": "Water-soluble coenzyme in carbohydrate metabolism.",
    "effects": [
      "Supports energy metabolism",
      "Supports nervous-system function"
    ],
    "risks": [
      "Toxicity from food or supplements is uncommon",
      "Injection can rarely cause severe allergy"
    ],
    "interactionNote": "Alcohol use and loop diuretics can contribute to low thiamin status.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Thiamin (Vitamin B1) fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Thiamin-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Eating an ordinary meal while reviewing thiamin adequacy.",
      "responseNotes": [
        "Adequate thiamin supports normal energy metabolism.",
        "It also supports nervous-system function."
      ],
      "riskNotes": [
        "Toxicity from food or supplements is uncommon.",
        "Safety findings depend on the formulation and route."
      ],
      "beats": [
        "Adequate thiamin supports normal energy metabolism.",
        "Toxicity from food or supplements is uncommon."
      ],
      "asides": [
        "The scene follows dietary adequacy rather than an energy boost.",
        "Safety findings depend on the formulation and route."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "riboflavin-vitamin-b2",
    "name": "Riboflavin (Vitamin B2)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting riboflavin requirements as part of a varied diet or deficiency care; high supplemental intake can change urine color.",
    "mechanism": "Water-soluble precursor of flavin coenzymes.",
    "effects": [
      "Supports energy metabolism",
      "Supports normal cell growth"
    ],
    "risks": [
      "No upper limit set due to low toxicity",
      "High supplemental intake may turn urine bright yellow"
    ],
    "interactionNote": "Riboflavin can interact with some medicines; medication review is prudent.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Riboflavin (Vitamin B2) fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Riboflavin-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading about riboflavin in an everyday nutrition guide.",
      "responseNotes": [
        "Adequate riboflavin supports energy metabolism.",
        "It also supports normal cell growth."
      ],
      "riskNotes": [
        "Low toxicity has prevented setting an upper intake limit.",
        "High supplemental intake may turn urine bright yellow."
      ],
      "beats": [
        "Adequate riboflavin supports energy metabolism.",
        "Low toxicity has prevented setting an upper intake limit."
      ],
      "asides": [
        "Bright urine from supplements is not a performance marker.",
        "High supplemental intake may turn urine bright yellow."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "niacin-vitamin-b3",
    "name": "Niacin (Vitamin B3)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting niacin needs to support normal metabolism and prevent deficiency; concentrated supplementation can cause flushing and other harms.",
    "mechanism": "Water-soluble precursor of NAD and NADP coenzymes.",
    "effects": [
      "Supports energy metabolism",
      "Prevents pellagra when intake is adequate"
    ],
    "risks": [
      "Supplement flush, itching, and GI upset can occur",
      "High doses can injure liver and alter glucose"
    ],
    "interactionNote": "High-dose niacin can interact with statins and diabetes or blood-pressure medicines.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Niacin (Vitamin B3) fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Niacin-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "flush",
      "timeCourse": "over-time",
      "riskVisual": "skin",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing a vitamin label during a dietary niacin check.",
      "responseNotes": [
        "Adequate niacin supports normal energy metabolism.",
        "Adequate intake prevents pellagra."
      ],
      "riskNotes": [
        "Supplements can cause flushing, itching, or digestive upset.",
        "High doses can injure the liver and alter glucose."
      ],
      "beats": [
        "Adequate niacin supports normal energy metabolism.",
        "Supplements can cause flushing, itching, or digestive upset."
      ],
      "asides": [
        "Nutritional and pharmacologic exposures have different risks.",
        "High doses can injure the liver and alter glucose."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "pantothenic-acid-vitamin-b5",
    "name": "Pantothenic acid (Vitamin B5)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting pantothenic-acid needs through ordinary nutrition; very high supplemental intake can cause digestive effects.",
    "mechanism": "Water-soluble component of coenzyme A.",
    "effects": [
      "Supports fatty-acid metabolism",
      "Supports cellular energy pathways"
    ],
    "risks": [
      "Very high intake can cause diarrhea",
      "No established benefit from excess intake"
    ],
    "interactionNote": "No major interactions are well established; review supplements with medicines.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Pantothenic acid (Vitamin B5) fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/PantothenicAcid-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "checklist",
      "prop": "care-card",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Checking a nutrition card while reviewing pantothenic-acid intake.",
      "responseNotes": [
        "Pantothenic acid supports fatty-acid metabolism.",
        "It also supports normal cellular energy pathways."
      ],
      "riskNotes": [
        "Very high intake can cause diarrhea.",
        "Benefit from excessive intake has not been established."
      ],
      "beats": [
        "Pantothenic acid supports fatty-acid metabolism.",
        "Very high intake can cause diarrhea."
      ],
      "asides": [
        "An essential role does not establish benefit from excess.",
        "Benefit from excessive intake has not been established."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "vitamin-b6",
    "name": "Vitamin B6",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting vitamin B6 nutritional needs while avoiding chronic excessive supplement exposure that can injure sensory nerves.",
    "mechanism": "Water-soluble coenzyme vitamin, including pyridoxal phosphate.",
    "effects": [
      "Supports neurotransmitter synthesis",
      "Supports normal red-blood-cell function"
    ],
    "risks": [
      "High chronic intake can cause sensory neuropathy",
      "Nausea or skin sensitivity can occur"
    ],
    "interactionNote": "Can interact with levodopa without carbidopa and some antiseizure medicines.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Vitamin B6 fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/VitaminB6-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "neural",
      "organs": [],
      "cautions": [],
      "intent": "Checking supplement labels while reviewing total vitamin B6 intake.",
      "responseNotes": [
        "Adequate vitamin B6 supports neurotransmitter synthesis.",
        "It also supports normal red-blood-cell function."
      ],
      "riskNotes": [
        "Chronically high intake can cause sensory nerve injury.",
        "Nausea or skin sensitivity can occur."
      ],
      "beats": [
        "Adequate vitamin B6 supports neurotransmitter synthesis.",
        "Chronically high intake can cause sensory nerve injury."
      ],
      "asides": [
        "The total intake matters across multiple products.",
        "Nausea or skin sensitivity can occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "biotin-vitamin-b7",
    "name": "Biotin (Vitamin B7)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Biotin is used to meet nutritional needs and is marketed for hair or nails; high supplement intake can distort laboratory tests.",
    "mechanism": "Water-soluble cofactor for carboxylase enzymes.",
    "effects": [
      "Supports macronutrient metabolism",
      "Helps prevent deficiency-related skin or hair changes"
    ],
    "risks": [
      "High intake can distort lab tests",
      "False results can affect heart and hormone tests"
    ],
    "interactionNote": "Tell clinicians and labs about biotin; it can interfere with immunoassays.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Biotin (Vitamin B7) fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Biotin-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "testing",
      "organs": [],
      "cautions": [],
      "intent": "Reading a biotin label before discussing supplements at a lab visit.",
      "responseNotes": [
        "Biotin supports normal macronutrient metabolism.",
        "Adequacy prevents deficiency-related skin or hair changes."
      ],
      "riskNotes": [
        "High supplement intake can distort laboratory tests.",
        "False results can affect heart or hormone testing."
      ],
      "beats": [
        "Biotin supports normal macronutrient metabolism.",
        "High supplement intake can distort laboratory tests."
      ],
      "asides": [
        "The laboratory needs an accurate supplement history.",
        "False results can affect heart or hormone testing."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "folate-vitamin-b9",
    "name": "Folate (Vitamin B9)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting folate needs for cell division and pregnancy-related neural-tube prevention; high folic-acid intake can obscure vitamin B12 deficiency.",
    "mechanism": "Water-soluble one-carbon transfer cofactor.",
    "effects": [
      "Supports DNA synthesis",
      "Supports fetal neural-tube development"
    ],
    "risks": [
      "High folic acid can mask vitamin B12 deficiency",
      "GI or sleep symptoms can occur at high intake"
    ],
    "interactionNote": "Folate can interact with methotrexate and some antiseizure medicines.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Folate (Vitamin B9) fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "planning",
      "prop": "calendar",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [],
      "intent": "Planning a nutrition-care discussion about folate needs.",
      "responseNotes": [
        "Adequate folate supports DNA synthesis and cell division.",
        "It supports fetal neural-tube development."
      ],
      "riskNotes": [
        "High intake can cause digestive or sleep symptoms.",
        "High folic-acid intake can mask vitamin B12 deficiency."
      ],
      "beats": [
        "Adequate folate supports DNA synthesis and cell division.",
        "High intake can cause digestive or sleep symptoms."
      ],
      "asides": [
        "Adequacy and the reason for supplementation guide the context.",
        "High folic-acid intake can mask vitamin B12 deficiency."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "vitamin-b12",
    "name": "Vitamin B12",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "vitamin",
    "useContext": "Meeting vitamin B12 needs or correcting deficiency to support blood-cell and nerve function; extra intake is not a general energy treatment.",
    "mechanism": "Cobalamin cofactor in DNA synthesis and neurologic metabolism.",
    "effects": [
      "Supports red-blood-cell formation",
      "Supports normal nerve function"
    ],
    "risks": [
      "No upper limit set due to low toxicity",
      "Allergy or acne-like reactions are uncommon"
    ],
    "interactionNote": "Metformin and acid-suppressing medicines can reduce B12 status over time.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Vitamin B12 fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "skin",
      "organs": [],
      "cautions": [],
      "intent": "Writing questions during a vitamin B12 deficiency-care review.",
      "responseNotes": [
        "Adequate vitamin B12 supports red-blood-cell formation.",
        "It also supports normal nerve function."
      ],
      "riskNotes": [
        "Low toxicity has prevented setting an upper intake limit.",
        "Allergic or acne-like reactions are uncommon."
      ],
      "beats": [
        "Adequate vitamin B12 supports red-blood-cell formation.",
        "Low toxicity has prevented setting an upper intake limit."
      ],
      "asides": [
        "The notebook connects the nutrient status with the care plan.",
        "Allergic or acne-like reactions are uncommon."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "choline",
    "name": "Choline",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "nutrient",
    "useContext": "Meeting dietary choline needs for cell membranes and neurotransmission; excessive intake can lower blood pressure and cause digestive effects.",
    "mechanism": "Essential nutrient used to form phosphatidylcholine and acetylcholine.",
    "effects": [
      "Supports cell-membrane structure",
      "Supports acetylcholine production"
    ],
    "risks": [
      "Excess can cause low blood pressure",
      "Fishy body odor and GI effects can occur"
    ],
    "interactionNote": "May interact with anticholinergic medicines; review high-dose supplements.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Choline fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal",
      "prop": "plate",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "pressure",
      "organs": [],
      "cautions": [],
      "intent": "Eating a meal while reviewing dietary choline sources.",
      "responseNotes": [
        "Adequate choline supports cell-membrane structure.",
        "It supports the production of acetylcholine."
      ],
      "riskNotes": [
        "Excess intake can lower blood pressure.",
        "Fishy body odor and digestive effects can occur."
      ],
      "beats": [
        "Adequate choline supports cell-membrane structure.",
        "Excess intake can lower blood pressure."
      ],
      "asides": [
        "Normal nutrient needs set the context for the meal.",
        "Fishy body odor and digestive effects can occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "calcium",
    "name": "Calcium",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Meeting calcium needs for bone maintenance or treating low intake; excess supplementation can cause stones or high blood calcium.",
    "mechanism": "Essential mineral in hydroxyapatite and cellular signaling.",
    "effects": [
      "Supports bone and teeth structure",
      "Supports muscle and nerve function"
    ],
    "risks": [
      "Excess can cause kidney stones or constipation",
      "High blood calcium can disturb heart rhythm"
    ],
    "interactionNote": "Can reduce absorption of levothyroxine, iron, and some antibiotics.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Calcium fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "reading",
      "prop": "book",
      "motif": "bone",
      "mechanismStyle": "replace",
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
      "intent": "Reading bone-health information while reviewing calcium intake.",
      "responseNotes": [
        "Adequate calcium supports bone and tooth structure.",
        "It also supports muscle and nerve function."
      ],
      "riskNotes": [
        "Excess intake can cause kidney stones or constipation.",
        "High blood calcium can disturb heart rhythm."
      ],
      "beats": [
        "Adequate calcium supports bone and tooth structure.",
        "Excess intake can cause kidney stones or constipation."
      ],
      "asides": [
        "Diet and supplements contribute to the same total intake.",
        "High blood calcium can disturb heart rhythm."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "iron",
    "name": "Iron",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Correcting iron deficiency or meeting nutritional requirements for oxygen transport; excess iron can cause severe poisoning and organ injury.",
    "mechanism": "Essential mineral in hemoglobin and iron-containing enzymes.",
    "effects": [
      "Supports oxygen transport",
      "Supports energy metabolism"
    ],
    "risks": [
      "Overload can injure liver and heart",
      "Accidental ingestion can fatally poison children"
    ],
    "interactionNote": "Reduces absorption of levothyroxine and some antibiotics; calcium can reduce iron uptake.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Iron fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver",
        "heart"
      ],
      "intent": "Reviewing a care sheet during clinician-managed low-iron treatment.",
      "responseNotes": [
        "Adequate iron supports oxygen transport.",
        "It also supports normal energy metabolism."
      ],
      "riskNotes": [
        "Iron overload can injure the liver and heart.",
        "Accidental ingestion can fatally poison children."
      ],
      "beats": [
        "Adequate iron supports oxygen transport.",
        "Iron overload can injure the liver and heart."
      ],
      "asides": [
        "Iron care is tied to the person's actual iron status.",
        "Accidental ingestion can fatally poison children."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "zinc",
    "name": "Zinc",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Meeting zinc requirements for normal immune and tissue function; high supplemental intake can cause nausea and copper deficiency.",
    "mechanism": "Essential trace mineral for many enzymes and transcription factors.",
    "effects": [
      "Supports immune function",
      "Supports wound healing"
    ],
    "risks": [
      "High intake can cause nausea and copper deficiency",
      "Excess may impair immune function"
    ],
    "interactionNote": "Can reduce absorption of tetracycline/quinolone antibiotics and penicillamine.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Zinc fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "notebook",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [
        "gut"
      ],
      "intent": "Checking supplement amounts while reviewing dietary zinc intake.",
      "responseNotes": [
        "Adequate zinc supports normal immune function.",
        "It also supports wound healing."
      ],
      "riskNotes": [
        "High intake can cause nausea and copper deficiency.",
        "Excess intake may impair immune function."
      ],
      "beats": [
        "Adequate zinc supports normal immune function.",
        "High intake can cause nausea and copper deficiency."
      ],
      "asides": [
        "The total amount includes every supplement on the list.",
        "Excess intake may impair immune function."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "copper",
    "name": "Copper",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Meeting copper nutritional needs, with deficiency or excess assessed in context; excess is particularly hazardous in Wilson disease.",
    "mechanism": "Essential trace mineral and enzyme cofactor.",
    "effects": [
      "Supports iron metabolism",
      "Supports connective-tissue formation"
    ],
    "risks": [
      "Excess can injure liver and GI tract",
      "High intake is dangerous in Wilson disease"
    ],
    "interactionNote": "High-dose zinc can reduce copper absorption.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Copper fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "writing",
      "prop": "clipboard",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [
        "liver"
      ],
      "intent": "Writing questions about copper intake during a nutrient-care review.",
      "responseNotes": [
        "Adequate copper supports iron metabolism.",
        "It also supports connective-tissue formation."
      ],
      "riskNotes": [
        "Excess copper can injure the liver and digestive tract.",
        "High intake is dangerous in Wilson disease."
      ],
      "beats": [
        "Adequate copper supports iron metabolism.",
        "Excess copper can injure the liver and digestive tract."
      ],
      "asides": [
        "The review considers the wider mineral balance.",
        "High intake is dangerous in Wilson disease."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "selenium",
    "name": "Selenium",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Meeting selenium needs for enzymes and thyroid metabolism; excess supplementation can cause hair, nail, and neurologic changes.",
    "mechanism": "Essential trace mineral incorporated into selenoproteins.",
    "effects": [
      "Supports antioxidant enzyme activity",
      "Supports thyroid hormone metabolism"
    ],
    "risks": [
      "Excess causes hair and nail changes",
      "High exposure can cause garlic breath and neurologic symptoms"
    ],
    "interactionNote": "May interact with chemotherapy or anticoagulant medicines; review supplements.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Selenium fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "care",
      "task": "organizer",
      "prop": "care-card",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "hair",
      "organs": [],
      "cautions": [
        "hair"
      ],
      "intent": "Organizing supplement labels while checking selenium intake.",
      "responseNotes": [
        "Adequate selenium supports antioxidant enzymes.",
        "It also supports thyroid-hormone metabolism."
      ],
      "riskNotes": [
        "Excess intake can change hair and nails.",
        "High exposure can cause garlic breath or neurologic symptoms."
      ],
      "beats": [
        "Adequate selenium supports antioxidant enzymes.",
        "Excess intake can change hair and nails."
      ],
      "asides": [
        "Small nutritional needs do not imply a wide safety margin.",
        "High exposure can cause garlic breath or neurologic symptoms."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "iodine",
    "name": "Iodine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Meeting iodine requirements for thyroid hormones; excess iodine can also disturb thyroid function.",
    "mechanism": "Essential mineral incorporated into thyroid hormones.",
    "effects": [
      "Supports thyroid hormone synthesis",
      "Supports normal growth and brain development"
    ],
    "risks": [
      "Excess can trigger thyroid dysfunction",
      "High intake may cause goiter or thyroiditis"
    ],
    "interactionNote": "Amiodarone, lithium, and antithyroid medicines can interact with iodine status.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Iodine fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Iodine-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
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
      "intent": "Reading an iodine-product label during a thyroid-nutrition discussion.",
      "responseNotes": [
        "Adequate iodine supports thyroid-hormone synthesis.",
        "It supports normal growth and brain development."
      ],
      "riskNotes": [
        "Excess iodine can trigger thyroid dysfunction.",
        "High intake may cause goiter or thyroid inflammation."
      ],
      "beats": [
        "Adequate iodine supports thyroid-hormone synthesis.",
        "Excess iodine can trigger thyroid dysfunction."
      ],
      "asides": [
        "Both too little and too much can affect thyroid function.",
        "High intake may cause goiter or thyroid inflammation."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "potassium",
    "name": "Potassium",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Meeting dietary potassium needs or treating a documented deficit; supplements can cause dangerous high potassium, especially with kidney disease.",
    "mechanism": "Essential electrolyte and intracellular cation.",
    "effects": [
      "Supports nerve and muscle function",
      "Supports normal fluid balance"
    ],
    "risks": [
      "High blood potassium can cause fatal arrhythmia",
      "Kidney disease increases supplement risk"
    ],
    "interactionNote": "ACE inhibitors, ARBs, and potassium-sparing diuretics can raise blood potassium.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Potassium fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [
        "heart",
        "kidneys"
      ],
      "intent": "Checking a care list before a potassium-supplement discussion.",
      "responseNotes": [
        "Adequate potassium supports nerve and muscle function.",
        "It also supports normal fluid balance."
      ],
      "riskNotes": [
        "High blood potassium can cause fatal arrhythmia.",
        "Kidney disease increases the risk from supplements."
      ],
      "beats": [
        "Adequate potassium supports nerve and muscle function.",
        "High blood potassium can cause fatal arrhythmia."
      ],
      "asides": [
        "Kidney function is part of the supplement decision.",
        "Kidney disease increases the risk from supplements."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "phosphorus",
    "name": "Phosphorus",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Meeting phosphorus needs for bones and cellular energy; kidney disease changes the risks of excess phosphorus.",
    "mechanism": "Essential mineral in phosphate, ATP, and phospholipids.",
    "effects": [
      "Supports bone structure",
      "Supports cellular energy transfer"
    ],
    "risks": [
      "Excess can disturb calcium balance",
      "Kidney disease increases risk of high phosphorus"
    ],
    "interactionNote": "Phosphate binders and antacids can change absorption; review with kidney disease.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Phosphorus fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Phosphorus-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "care-card",
      "motif": "bone",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "electrolytes",
      "organs": [
        "bones"
      ],
      "cautions": [
        "kidneys"
      ],
      "intent": "Recording meals during a phosphorus and kidney-health discussion.",
      "responseNotes": [
        "Adequate phosphorus supports bone structure.",
        "It also supports normal cellular energy transfer."
      ],
      "riskNotes": [
        "Excess intake can disturb calcium balance.",
        "Kidney disease increases the risk of high phosphorus."
      ],
      "beats": [
        "Adequate phosphorus supports bone structure.",
        "Excess intake can disturb calcium balance."
      ],
      "asides": [
        "The meal record keeps intake in its health context.",
        "Kidney disease increases the risk of high phosphorus."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "chromium",
    "name": "Chromium",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Chromium supplements are promoted for glucose or lipid effects, but a reliable benefit for otherwise healthy people is not established.",
    "mechanism": "Trace element with incompletely understood human biological role.",
    "effects": [
      "May support normal macronutrient metabolism",
      "Deficiency is rare in healthy people"
    ],
    "risks": [
      "High supplemental exposure may affect kidney or liver",
      "Can alter blood glucose"
    ],
    "interactionNote": "May interact with diabetes medicines and levothyroxine.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Chromium fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Chromium-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "reading",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "kidney",
      "organs": [],
      "cautions": [
        "kidneys",
        "liver"
      ],
      "intent": "Reading evidence behind a chromium glucose-control supplement claim.",
      "responseNotes": [
        "Chromium has been studied in macronutrient metabolism.",
        "Deficiency is rare in otherwise healthy people."
      ],
      "riskNotes": [
        "High supplemental exposure may affect the kidneys or liver.",
        "Supplement use can alter blood glucose."
      ],
      "beats": [
        "Chromium has been studied in macronutrient metabolism.",
        "High supplemental exposure may affect the kidneys or liver."
      ],
      "asides": [
        "A proposed metabolic role does not establish treatment benefit.",
        "Supplement use can alter blood glucose."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "manganese",
    "name": "Manganese",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Meeting manganese nutritional needs; excessive exposure can harm the nervous system and is riskier with impaired liver handling.",
    "mechanism": "Essential trace mineral and enzyme cofactor.",
    "effects": [
      "Supports enzyme function",
      "Supports bone formation"
    ],
    "risks": [
      "Excess can harm nervous system",
      "Liver disease can increase toxicity risk"
    ],
    "interactionNote": "May reduce absorption of some antibiotics; iron status affects manganese uptake.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Manganese fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Manganese-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "organizer",
      "prop": "notebook",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "neural",
      "organs": [],
      "cautions": [],
      "intent": "Organizing nutrient notes while reviewing manganese exposure.",
      "responseNotes": [
        "Adequate manganese supports metabolic enzymes.",
        "It also supports normal bone formation."
      ],
      "riskNotes": [
        "Excess exposure can harm the nervous system.",
        "Liver disease can increase toxicity risk."
      ],
      "beats": [
        "Adequate manganese supports metabolic enzymes.",
        "Excess exposure can harm the nervous system."
      ],
      "asides": [
        "The review includes supplement and other exposure sources.",
        "Liver disease can increase toxicity risk."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "molybdenum",
    "name": "Molybdenum",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "mineral",
    "useContext": "Meeting molybdenum needs for metabolic enzymes; very high supplemental exposure can raise uric acid and cause joint symptoms.",
    "mechanism": "Essential trace mineral cofactor for molybdoenzymes.",
    "effects": [
      "Supports sulfite metabolism",
      "Supports purine metabolism"
    ],
    "risks": [
      "Very high intake can raise uric acid",
      "Joint pain may occur with excess exposure"
    ],
    "interactionNote": "Large intakes may affect copper status; review high-dose supplements.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "NIH ODS · Molybdenum fact sheet",
        "url": "https://ods.od.nih.gov/factsheets/Molybdenum-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "care",
      "task": "reading",
      "prop": "book",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "urate",
      "organs": [],
      "cautions": [],
      "intent": "Reading a nutrient guide before considering a molybdenum supplement.",
      "responseNotes": [
        "Adequate molybdenum supports sulfite metabolism.",
        "It also supports normal purine metabolism."
      ],
      "riskNotes": [
        "Very high intake can raise uric acid.",
        "Joint pain may occur with excessive exposure."
      ],
      "beats": [
        "Adequate molybdenum supports sulfite metabolism.",
        "Very high intake can raise uric acid."
      ],
      "asides": [
        "The usual dietary role is separate from very high intake.",
        "Joint pain may occur with excessive exposure."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "bpc-157",
    "name": "BPC-157",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Synthetic peptide studied mainly in preclinical tissue-repair research; human benefit is unestablished.",
    "mechanism": "Gastric-derived peptide sequence; proposed repair mechanisms are not clinically established.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "No adequate human safety data for proposed compounded routes.",
      "FDA notes immunogenicity and peptide-impurity concerns."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "research",
      "task": "reading",
      "prop": "research-folder",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading tissue-repair claims during a recovery-research discussion.",
      "responseNotes": [
        "Tissue-repair effects have mainly been studied preclinically.",
        "A human clinical benefit has not been established."
      ],
      "riskNotes": [
        "Human safety data for proposed routes are inadequate.",
        "FDA flags immune reactions and peptide-impurity concerns."
      ],
      "beats": [
        "Tissue-repair effects have mainly been studied preclinically.",
        "Human safety data for proposed routes are inadequate."
      ],
      "asides": [
        "Preclinical findings do not establish human recovery benefit.",
        "FDA flags immune reactions and peptide-impurity concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "cjc-1295",
    "name": "CJC-1295",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Synthetic growth-hormone-releasing-hormone analogue investigated for endocrine effects; not established treatment.",
    "mechanism": "GHRH analogue that can increase growth hormone and IGF-1 in limited clinical data.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA reports increased heart rate and systemic vasodilatory reactions.",
      "Clinical data are limited; compounded peptide may pose immunogenicity and impurity risks."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "research-notes",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "heartbeat",
      "timeCourse": "unknown",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing endocrine-study notes about an experimental GHRH analogue.",
      "responseNotes": [
        "Its endocrine effects are under investigation.",
        "It is not an established general-use treatment."
      ],
      "riskNotes": [
        "FDA reports increased heart rate and vasodilatory reactions.",
        "Limited data leave immune and peptide-quality concerns."
      ],
      "beats": [
        "Its endocrine effects are under investigation.",
        "FDA reports increased heart rate and vasodilatory reactions."
      ],
      "asides": [
        "The study concerns hormone signaling, not instant muscle growth.",
        "Limited data leave immune and peptide-quality concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "aod-9604",
    "name": "AOD-9604",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Modified growth-hormone fragment investigated for metabolic and weight-related effects; human benefit is unestablished.",
    "mechanism": "C-terminal fragment of growth hormone; intended metabolic action remains uncertain.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA reports limited safety information and serious events of unclear causality.",
      "FDA also notes route-dependent immunogenicity and peptide-impurity concerns."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Comparing weight-related marketing claims with metabolic research notes.",
      "responseNotes": [
        "It has been investigated for metabolic and weight effects.",
        "A human clinical benefit has not been established."
      ],
      "riskNotes": [
        "Serious events were reported, but their cause is unclear.",
        "Route-specific immune and peptide-quality concerns remain."
      ],
      "beats": [
        "It has been investigated for metabolic and weight effects.",
        "Serious events were reported, but their cause is unclear."
      ],
      "asides": [
        "Human weight-management benefit remains unestablished.",
        "Route-specific immune and peptide-quality concerns remain."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "ipamorelin",
    "name": "Ipamorelin",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Growth-hormone secretagogue studied in research; safety and therapeutic role remain unsettled.",
    "mechanism": "Ghrelin-receptor agonist that stimulates growth-hormone release.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA cites serious events, including deaths, in an IV motility study; causality uncertain.",
      "FDA notes immunogenicity and peptide-impurity risks; glucose effects are a concern."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "reading",
      "prop": "book",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading a clinical-research report about a growth-hormone secretagogue.",
      "responseNotes": [
        "Its growth-hormone-secretagogue activity has been studied.",
        "Its therapeutic role remains unsettled."
      ],
      "riskNotes": [
        "Deaths occurred in an IV trial; causality remains unclear.",
        "Immune, impurity, and glucose-related concerns remain."
      ],
      "beats": [
        "Its growth-hormone-secretagogue activity has been studied.",
        "Deaths occurred in an IV trial; causality remains unclear."
      ],
      "asides": [
        "Serious study events do not establish a safe general-use regimen.",
        "Immune, impurity, and glucose-related concerns remain."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "ghrp-2",
    "name": "GHRP-2",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Growth-hormone-releasing peptide investigated for endocrine research; no established general clinical use.",
    "mechanism": "Growth-hormone secretagogue acting at ghrelin/GHS receptors.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA reports serious events including increased insulin need, infection, and pancreatitis.",
      "FDA notes reported deaths in critically ill study subjects; causality is not established."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "research-notes",
      "prop": "notebook",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Noting the limits of endocrine studies in medically vulnerable participants.",
      "responseNotes": [
        "Researchers have examined its endocrine activity.",
        "A general clinical use has not been established."
      ],
      "riskNotes": [
        "Insulin need, infection, and pancreatitis were reported.",
        "Deaths occurred in critically ill subjects; causality is unclear."
      ],
      "beats": [
        "Researchers have examined its endocrine activity.",
        "Insulin need, infection, and pancreatitis were reported."
      ],
      "asides": [
        "Reported events require their study-population context.",
        "Deaths occurred in critically ill subjects; causality is unclear."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "ghrp-6",
    "name": "GHRP-6",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Growth-hormone-releasing peptide investigated for endocrine research; no established general clinical use.",
    "mechanism": "Growth-hormone secretagogue acting at ghrelin/GHS receptors.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA notes possible cortisol effects and increased blood glucose.",
      "Human safety data are limited; peptide impurity and immunogenicity risks remain."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "glucose",
      "organs": [],
      "cautions": [],
      "intent": "Checking an endocrine-research summary for glucose and cortisol concerns.",
      "responseNotes": [
        "Researchers have examined its endocrine activity.",
        "A general clinical use has not been established."
      ],
      "riskNotes": [
        "Cortisol effects and increased blood glucose are concerns.",
        "Human safety data are limited; immune and impurity risks remain."
      ],
      "beats": [
        "Researchers have examined its endocrine activity.",
        "Cortisol effects and increased blood glucose are concerns."
      ],
      "asides": [
        "The checklist includes the unresolved safety questions.",
        "Human safety data are limited; immune and impurity risks remain."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "kisspeptin-10",
    "name": "Kisspeptin-10",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Reproductive neuropeptide studied for hypothalamic-pituitary-gonadal signaling.",
    "mechanism": "Kisspeptin receptor agonist involved in gonadotropin-releasing hormone regulation.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA has little or no safety information for proposed compounded routes.",
      "FDA notes possible immunogenicity and peptide-characterization concerns."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "reading",
      "prop": "care-card",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading about experimental reproductive-hormone signaling research.",
      "responseNotes": [
        "Its role in reproductive-hormone signaling has been studied.",
        "A general clinical benefit has not been established."
      ],
      "riskNotes": [
        "FDA has little safety data for proposed compounded routes.",
        "Immune reactions and peptide characterization are concerns."
      ],
      "beats": [
        "Its role in reproductive-hormone signaling has been studied.",
        "FDA has little safety data for proposed compounded routes."
      ],
      "asides": [
        "A signaling role is not an established treatment benefit.",
        "Immune reactions and peptide characterization are concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "dihexa",
    "name": "Dihexa",
    "aliases": [
      "Dihexa acetate"
    ],
    "category": "Research chemicals",
    "className": "experimental neurotrophic compound",
    "useContext": "Experimental angiotensin-IV-related compound studied preclinically for neurotrophic signaling.",
    "mechanism": "Angiotensin-IV-derived small peptide analog; proposed effects remain investigational.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA has identified no human exposure data for drug products.",
      "Human safety and potential harm are unknown."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "writing",
      "prop": "notebook",
      "motif": "neural",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Writing notes on preclinical neurotrophic-signaling research.",
      "responseNotes": [
        "Neurotrophic signaling has been investigated preclinically.",
        "A human clinical benefit has not been established."
      ],
      "riskNotes": [
        "FDA found no human exposure data for drug products.",
        "Human safety and potential harms remain unknown."
      ],
      "beats": [
        "Neurotrophic signaling has been investigated preclinically.",
        "FDA found no human exposure data for drug products."
      ],
      "asides": [
        "Human drug-product exposure data are missing.",
        "Human safety and potential harms remain unknown."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "emideltide-dsip",
    "name": "Emideltide (DSIP)",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Sleep-related peptide investigated experimentally; clinical benefit is unestablished.",
    "mechanism": "Short neuropeptide with proposed sleep-modulating activity; mechanism is uncertain.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA has not identified safety data for proposed routes.",
      "Potential immunogenicity and peptide-impurity concerns remain."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "research",
      "task": "sleep-log",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Comparing a sleep record with experimental sleep-peptide claims.",
      "responseNotes": [
        "This sleep-related peptide has been studied experimentally.",
        "A clinical sleep benefit has not been established."
      ],
      "riskNotes": [
        "FDA has not identified safety data for proposed routes.",
        "Immune reactions and peptide impurities remain concerns."
      ],
      "beats": [
        "This sleep-related peptide has been studied experimentally.",
        "FDA has not identified safety data for proposed routes."
      ],
      "asides": [
        "The diary does not establish that the peptide improves sleep.",
        "Immune reactions and peptide impurities remain concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "epitalon",
    "name": "Epitalon",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Synthetic tetrapeptide marketed for aging-related claims; human benefit is not established.",
    "mechanism": "Short synthetic peptide; proposed telomere effects are not clinically validated.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA lacks safety information for proposed routes.",
      "Peptide aggregation, impurities, and immunogenicity are concerns."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "planning",
      "prop": "calendar",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing aging-related peptide claims beside a research calendar.",
      "responseNotes": [
        "Researchers have investigated this synthetic tetrapeptide.",
        "A human aging-related benefit has not been established."
      ],
      "riskNotes": [
        "FDA lacks safety information for proposed routes.",
        "Aggregation, impurities, and immune reactions are concerns."
      ],
      "beats": [
        "Researchers have investigated this synthetic tetrapeptide.",
        "FDA lacks safety information for proposed routes."
      ],
      "asides": [
        "Aging claims need human outcomes rather than a calendar metaphor.",
        "Aggregation, impurities, and immune reactions are concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "ghk-cu",
    "name": "GHK-Cu",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Copper-binding peptide studied in skin biology and cosmetic research; injectable use is experimental.",
    "mechanism": "Endogenous copper-binding tripeptide implicated in tissue signaling.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA notes limited human safety information for injectable products.",
      "Injectable formulations may carry aggregation, impurity, and immunogenicity risks."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "research",
      "task": "skin-check",
      "prop": "towel",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing skin-biology research and the separate claims for injectable copper peptide.",
      "responseNotes": [
        "Its role in skin biology has been investigated.",
        "Cosmetic research does not establish injectable benefit."
      ],
      "riskNotes": [
        "Injectable products have limited human safety data.",
        "Aggregation, impurities, and immune reactions are concerns."
      ],
      "beats": [
        "Its role in skin biology has been investigated.",
        "Injectable products have limited human safety data."
      ],
      "asides": [
        "Cosmetic research does not establish injectable safety.",
        "Aggregation, impurities, and immune reactions are concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "cathelicidin-ll-37",
    "name": "Cathelicidin LL-37",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Antimicrobial host-defense peptide studied in immune and tissue biology.",
    "mechanism": "Human cathelicidin peptide with antimicrobial and immune-signaling activity.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA cites insufficient human safety information and nonclinical reproductive concerns.",
      "Nonclinical findings suggest possible tumor-promoting activity in some tissues."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "checklist",
      "prop": "research-folder",
      "motif": "immune",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Checking host-defense peptide findings and their nonclinical limits.",
      "responseNotes": [
        "Researchers have studied immune and tissue biology.",
        "A general clinical benefit has not been established."
      ],
      "riskNotes": [
        "Human safety information is insufficient.",
        "Nonclinical studies raise reproductive and tumor concerns."
      ],
      "beats": [
        "Researchers have studied immune and tissue biology.",
        "Human safety information is insufficient."
      ],
      "asides": [
        "Immune activity is not proof of a safe treatment.",
        "Nonclinical studies raise reproductive and tumor concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "kpv",
    "name": "KPV",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Short alpha-MSH-derived peptide studied preclinically for inflammation.",
    "mechanism": "Tripeptide fragment with proposed anti-inflammatory signaling effects.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA has identified no human exposure data for drug products.",
      "Potential harm and route-specific safety are unknown."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "research",
      "task": "writing",
      "prop": "clipboard",
      "motif": "inflammation",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Writing questions about preclinical anti-inflammatory peptide research.",
      "responseNotes": [
        "Inflammatory pathways have been studied preclinically.",
        "A human clinical benefit has not been established."
      ],
      "riskNotes": [
        "FDA found no human exposure data for drug products.",
        "Potential harms and route-specific safety remain unknown."
      ],
      "beats": [
        "Inflammatory pathways have been studied preclinically.",
        "FDA found no human exposure data for drug products."
      ],
      "asides": [
        "Human benefit and route-specific safety remain unknown.",
        "Potential harms and route-specific safety remain unknown."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "peg-mgf",
    "name": "PEG-MGF",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Pegylated mechano-growth-factor peptide studied experimentally in muscle biology.",
    "mechanism": "IGF-1 splice-variant-related growth factor peptide; clinical effects are unestablished.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA has identified no human exposure data for drug products.",
      "FDA notes immunogenicity and peptide-impurity concerns."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "reading",
      "prop": "research-folder",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading muscle-biology claims before considering a research peptide.",
      "responseNotes": [
        "Researchers have studied its role in muscle biology.",
        "A human clinical benefit has not been established."
      ],
      "riskNotes": [
        "FDA found no human exposure data for drug products.",
        "Immune reactions and peptide impurities are concerns."
      ],
      "beats": [
        "Researchers have studied its role in muscle biology.",
        "FDA found no human exposure data for drug products."
      ],
      "asides": [
        "The setting does not imply an earned muscle-building benefit.",
        "Immune reactions and peptide impurities are concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "melanotan-ii",
    "name": "Melanotan II",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Synthetic melanocortin peptide marketed for tanning and other effects; not an approved general-use therapy.",
    "mechanism": "Nonselective melanocortin-receptor agonist related to alpha-MSH.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "Published reports include melanoma, neurologic syndrome, sympathomimetic effects, and priapism.",
      "Compounded peptide may have immunogenicity and product-quality risks."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "bathroom",
      "activity": "research",
      "task": "mirror",
      "prop": "mirror",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "hormones",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing tanning-peptide claims beside a mirror.",
      "responseNotes": [
        "Melanocortin-related effects have been investigated.",
        "A safe general-use therapy has not been established."
      ],
      "riskNotes": [
        "Reports include melanoma, neurologic effects, and priapism.",
        "Immune reactions and product-quality problems are concerns."
      ],
      "beats": [
        "Melanocortin-related effects have been investigated.",
        "Reports include melanoma, neurologic effects, and priapism."
      ],
      "asides": [
        "Reported harms include priapism and serious case reports.",
        "Immune reactions and product-quality problems are concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "mots-c",
    "name": "MOTS-c",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Mitochondrial-derived peptide studied preclinically in metabolic signaling.",
    "mechanism": "Mitochondrial-encoded peptide implicated in cellular stress and metabolic regulation.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA has identified no human exposure data for drug products.",
      "Human safety and potential harm are unknown."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Organizing papers about experimental mitochondrial-peptide signaling.",
      "responseNotes": [
        "Metabolic signaling has been studied preclinically.",
        "A human clinical benefit has not been established."
      ],
      "riskNotes": [
        "FDA found no human exposure data for drug products.",
        "Human safety and potential harms remain unknown."
      ],
      "beats": [
        "Metabolic signaling has been studied preclinically.",
        "FDA found no human exposure data for drug products."
      ],
      "asides": [
        "Metabolic hypotheses are distinct from clinical outcomes.",
        "Human safety and potential harms remain unknown."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "selank",
    "name": "Selank",
    "aliases": [
      "Selank acetate"
    ],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Synthetic peptide investigated in limited neuropsychiatric research; efficacy is not established.",
    "mechanism": "Tuftsin-related peptide; proposed effects on anxiety and neurotransmission remain uncertain.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA lacks important safety information for human use.",
      "FDA notes aggregation, impurity, and immunogenicity concerns."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "typing",
      "prop": "phone",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Saving questions about limited neuropsychiatric peptide research.",
      "responseNotes": [
        "Limited neuropsychiatric research has investigated it.",
        "Clinical effectiveness has not been established."
      ],
      "riskNotes": [
        "Important human safety information is missing.",
        "Aggregation, impurities, and immune reactions are concerns."
      ],
      "beats": [
        "Limited neuropsychiatric research has investigated it.",
        "Important human safety information is missing."
      ],
      "asides": [
        "A research claim is not a proven stress treatment.",
        "Aggregation, impurities, and immune reactions are concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "semax",
    "name": "Semax",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Synthetic heptapeptide studied in limited neurologic research; clinical benefit is unestablished.",
    "mechanism": "ACTH-fragment-related peptide; proposed neurotrophic effects are investigational.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA has no or limited safety data for proposed routes.",
      "Potential immunogenicity and peptide-impurity risks are noted by FDA."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "reading",
      "prop": "book",
      "motif": "neural",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading the limits of experimental neurologic-peptide research.",
      "responseNotes": [
        "Limited neurologic research has investigated it.",
        "A clinical benefit has not been established."
      ],
      "riskNotes": [
        "Safety data for proposed routes are absent or limited.",
        "FDA notes immune reactions and peptide-impurity concerns."
      ],
      "beats": [
        "Limited neurologic research has investigated it.",
        "Safety data for proposed routes are absent or limited."
      ],
      "asides": [
        "The neurologic diagram represents a research topic.",
        "FDA notes immune reactions and peptide-impurity concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "thymosin-alpha-1",
    "name": "Thymosin alpha-1",
    "aliases": [],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Immune-modulating peptide investigated for infection and cancer-related indications.",
    "mechanism": "Thymic peptide that modulates T-cell and innate immune signaling.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA says safety information is inadequate to characterize risks of proposed compounding.",
      "Route-specific immunogenicity and product characterization remain concerns."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "care-card",
      "prop": "care-card",
      "motif": "immune",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing immune-peptide studies across infection and cancer contexts.",
      "responseNotes": [
        "Infection and cancer-related uses have been investigated.",
        "Those contexts do not establish a general clinical benefit."
      ],
      "riskNotes": [
        "Safety data are inadequate for proposed compounding.",
        "Route-specific immune and product-quality concerns remain."
      ],
      "beats": [
        "Infection and cancer-related uses have been investigated.",
        "Safety data are inadequate for proposed compounding."
      ],
      "asides": [
        "The proposed use needs its own evidence and route context.",
        "Route-specific immune and product-quality concerns remain."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "thymosin-beta-4-fragment-tb-500",
    "name": "Thymosin beta-4 fragment (TB-500)",
    "aliases": [
      "TB-500"
    ],
    "category": "Peptides",
    "className": "experimental peptide",
    "useContext": "Synthetic thymosin-beta-4 fragment marketed for tissue repair; human benefit is unestablished.",
    "mechanism": "Seven-amino-acid fragment of thymosin beta-4; clinical mechanism and effects are uncertain.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA has identified no human exposure data for drug products.",
      "FDA notes potential immunogenicity, aggregation, and peptide impurities."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "research",
      "task": "planning",
      "prop": "calendar",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Planning a research discussion about tissue-repair marketing claims.",
      "responseNotes": [
        "This fragment is marketed for tissue-repair claims.",
        "A human tissue-repair benefit has not been established."
      ],
      "riskNotes": [
        "FDA found no human exposure data for drug products.",
        "Immune reactions, aggregation, and impurities are concerns."
      ],
      "beats": [
        "This fragment is marketed for tissue-repair claims.",
        "FDA found no human exposure data for drug products."
      ],
      "asides": [
        "The fragment is not evidence of proven human repair.",
        "Immune reactions, aggregation, and impurities are concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "ibutamoren",
    "name": "Ibutamoren",
    "aliases": [],
    "category": "Research chemicals",
    "className": "growth-hormone secretagogue",
    "useContext": "Experimental growth-hormone secretagogue studied for muscle, bone, and recovery outcomes.",
    "mechanism": "Nonpeptide ghrelin-receptor agonist that increases growth hormone and IGF-1.",
    "effects": [
      "Biological activity is under investigation",
      "No established general clinical benefit"
    ],
    "risks": [
      "FDA cites a trial stopped early for a possible congestive-heart-failure safety signal.",
      "Human safety and benefit are not established for general use."
    ],
    "interactionNote": "Human interaction data are insufficient; product identity, purity, route, and immune responses add uncertainty.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "FDA · Certain bulk drug substances and safety risks",
        "url": "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "writing",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "fluid",
      "organs": [],
      "cautions": [],
      "intent": "Reading a stopped recovery-study safety signal for a secretagogue.",
      "responseNotes": [
        "Studies have examined muscle, bone, and recovery outcomes.",
        "A general-use benefit has not been established."
      ],
      "riskNotes": [
        "A trial stopped over a possible heart-failure safety signal.",
        "General-use human safety remains unestablished."
      ],
      "beats": [
        "Studies have examined muscle, bone, and recovery outcomes.",
        "A trial stopped over a possible heart-failure safety signal."
      ],
      "asides": [
        "A possible heart-failure signal limits the recovery claim.",
        "General-use human safety remains unestablished."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "lgd-4033",
    "name": "LGD-4033",
    "aliases": [
      "Ligandrol"
    ],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Clinical study in healthy adults examined androgen-receptor activity, lean mass, and hormonal/lipid effects.",
    "mechanism": "Nonsteroidal selective androgen-receptor modulator.",
    "effects": [
      "A short trial found dose-related suppression of testosterone, SHBG, and HDL.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "No approved human clinical use; class-level FDA warnings include liver injury and cardiovascular events.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22459616/"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "writing",
      "prop": "notebook",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "hormones",
      "organs": [],
      "cautions": [],
      "intent": "Writing down a short SARM trial's hormone and lipid findings.",
      "responseNotes": [
        "A short human trial examined androgen-related effects.",
        "That trial does not establish safe enhancement use."
      ],
      "riskNotes": [
        "The trial found lower testosterone, SHBG, and HDL.",
        "FDA class warnings include liver and cardiovascular harm."
      ],
      "beats": [
        "A short human trial examined androgen-related effects.",
        "The trial found lower testosterone, SHBG, and HDL."
      ],
      "asides": [
        "Trial findings do not establish a safe enhancement use.",
        "FDA class warnings include liver and cardiovascular harm."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "rad-140",
    "name": "RAD-140",
    "aliases": [
      "Testolone"
    ],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Early phase clinical study investigated an androgen-receptor-targeting cancer treatment.",
    "mechanism": "Nonsteroidal androgen-receptor modulator.",
    "effects": [
      "A first-in-human cancer trial reported frequent liver-enzyme elevations.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "Unapproved SARM products have been linked to serious liver injury, heart attack, and stroke.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34565686/"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "reading",
      "prop": "research-folder",
      "motif": "receptor",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Reading an early cancer trial of an androgen-receptor compound.",
      "responseNotes": [
        "An early cancer trial examined androgen-receptor targeting.",
        "General enhancement benefit has not been established."
      ],
      "riskNotes": [
        "The early trial reported frequent liver-enzyme elevations.",
        "FDA warns of serious liver and cardiovascular SARM-class harms."
      ],
      "beats": [
        "An early cancer trial examined androgen-receptor targeting.",
        "The early trial reported frequent liver-enzyme elevations."
      ],
      "asides": [
        "Cancer-trial findings do not establish enhancement benefit.",
        "FDA warns of serious liver and cardiovascular SARM-class harms."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "andarine",
    "name": "Andarine",
    "aliases": [
      "S-4"
    ],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Investigational SARM characterized in preclinical research and identified in unapproved products.",
    "mechanism": "Nonsteroidal selective androgen-receptor modulator.",
    "effects": [
      "Animal research demonstrates tissue-selective androgenic activity.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "FDA class warnings include liver injury, cardiovascular events, and endocrine effects.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/15204699/"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "research-notes",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Recording preclinical tissue-selective androgen findings.",
      "responseNotes": [
        "Animal studies found tissue-selective androgenic activity.",
        "A human clinical benefit has not been established."
      ],
      "riskNotes": [
        "FDA class warnings include liver and cardiovascular harm.",
        "Endocrine effects and uncertain product contents are concerns."
      ],
      "beats": [
        "Animal studies found tissue-selective androgenic activity.",
        "FDA class warnings include liver and cardiovascular harm."
      ],
      "asides": [
        "Animal activity is not a human efficacy result.",
        "Endocrine effects and uncertain product contents are concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "s-23",
    "name": "S-23",
    "aliases": [],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Preclinical candidate studied for androgen signaling and experimental male contraception.",
    "mechanism": "Nonsteroidal selective androgen-receptor modulator.",
    "effects": [
      "Animal models studied its androgen-receptor effects and contraceptive potential.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "Human safety and effectiveness are not established; FDA warns of class-level harms.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/18772237/"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "planning",
      "prop": "calendar",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Planning a literature review of experimental androgen-based contraception.",
      "responseNotes": [
        "Animal models examined androgen and contraceptive effects.",
        "A human clinical benefit has not been established."
      ],
      "riskNotes": [
        "Human safety and effectiveness are not established.",
        "FDA class warnings and uncertain product contents remain."
      ],
      "beats": [
        "Animal models examined androgen and contraceptive effects.",
        "Human safety and effectiveness are not established."
      ],
      "asides": [
        "Contraceptive findings are preclinical in this context.",
        "FDA class warnings and uncertain product contents remain."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "lgd-3303",
    "name": "LGD-3303",
    "aliases": [],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Preclinical candidate studied for tissue-selective androgen effects.",
    "mechanism": "Nonsteroidal selective androgen-receptor modulator.",
    "effects": [
      "Rodent models showed anabolic activity with tissue-dependent receptor effects.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "Human safety and effectiveness are not established; FDA warns of class-level harms.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19017848/"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "reading",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading rodent tissue-selectivity results for an experimental SARM.",
      "responseNotes": [
        "Rodent models showed tissue-dependent androgenic effects.",
        "A human clinical benefit has not been established."
      ],
      "riskNotes": [
        "Human safety and effectiveness are not established.",
        "FDA class warnings and uncertain product contents remain."
      ],
      "beats": [
        "Rodent models showed tissue-dependent androgenic effects.",
        "Human safety and effectiveness are not established."
      ],
      "asides": [
        "The rodent result does not establish a human benefit.",
        "FDA class warnings and uncertain product contents remain."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "gsk2881078",
    "name": "GSK2881078",
    "aliases": [],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Investigated clinically for muscle weakness and physical function.",
    "mechanism": "Nonsteroidal selective androgen-receptor modulator.",
    "effects": [
      "Clinical research found dose-related HDL and SHBG lowering.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "Human safety data remain limited; FDA class warnings include liver injury and cardiovascular events.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28449232/"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "research",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "metabolic",
      "organs": [],
      "cautions": [],
      "intent": "Checking trial notes about muscle weakness and lipid changes.",
      "responseNotes": [
        "Clinical trials examined muscle weakness and function.",
        "General enhancement benefit has not been established."
      ],
      "riskNotes": [
        "Trials found lower HDL and SHBG.",
        "FDA class warnings include liver and cardiovascular harm."
      ],
      "beats": [
        "Clinical trials examined muscle weakness and function.",
        "Trials found lower HDL and SHBG."
      ],
      "asides": [
        "Physical-function research includes safety outcomes as well.",
        "FDA class warnings include liver and cardiovascular harm."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "bms-564929",
    "name": "BMS-564929",
    "aliases": [],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Investigated preclinically as a tissue-selective androgen-receptor agonist.",
    "mechanism": "Nonsteroidal selective androgen-receptor modulator.",
    "effects": [
      "Animal studies found muscle activity with less prostate stimulation than testosterone.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "No approved clinical use; class-level risks and human safety are not established.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/17008401/"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "research-notes",
      "prop": "research-folder",
      "motif": "receptor",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing preclinical muscle-and-prostate selectivity experiments.",
      "responseNotes": [
        "Animal studies compared muscle and prostate stimulation.",
        "Those findings do not establish a human clinical benefit."
      ],
      "riskNotes": [
        "Human safety and class-level risks remain uncertain.",
        "Unregulated products can have uncertain identity or purity."
      ],
      "beats": [
        "Animal studies compared muscle and prostate stimulation.",
        "Human safety and class-level risks remain uncertain."
      ],
      "asides": [
        "Selectivity in animals is not proof of safe human use.",
        "Unregulated products can have uncertain identity or purity."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "pf-06260414",
    "name": "PF-06260414",
    "aliases": [],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Investigational SARM identified in metabolism research; clinical benefit is not established.",
    "mechanism": "Nonsteroidal androgen-receptor modulator.",
    "effects": [
      "Human liver-microsome research characterized metabolism, not therapeutic outcomes.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "No established human benefit; FDA class warnings include liver injury and cardiovascular events.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34414676/"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "organizer",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Organizing liver-microsome metabolism research for an experimental SARM.",
      "responseNotes": [
        "The study examined metabolism in human liver microsomes.",
        "It did not measure clinical treatment outcomes."
      ],
      "riskNotes": [
        "FDA class warnings include liver and cardiovascular harm.",
        "Unregulated products can have uncertain identity or purity."
      ],
      "beats": [
        "The study examined metabolism in human liver microsomes.",
        "FDA class warnings include liver and cardiovascular harm."
      ],
      "asides": [
        "Metabolism data do not measure clinical benefit.",
        "Unregulated products can have uncertain identity or purity."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "tfm-4as-1",
    "name": "TFM-4AS-1",
    "aliases": [],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Research SARM included in metabolism studies; no established clinical role.",
    "mechanism": "Nonsteroidal androgen-receptor modulator.",
    "effects": [
      "In-vitro work characterized metabolic pathways, not clinical effects.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "Human safety and effectiveness are not established; products may be mislabeled.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34414676/"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "research-notes",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Taking notes on an in-vitro SARM metabolism study.",
      "responseNotes": [
        "The cited work characterized in-vitro metabolic pathways.",
        "It did not evaluate clinical effectiveness."
      ],
      "riskNotes": [
        "Human safety and effectiveness are not established.",
        "Unregulated products may be mislabeled or impure."
      ],
      "beats": [
        "The cited work characterized in-vitro metabolic pathways.",
        "Human safety and effectiveness are not established."
      ],
      "asides": [
        "The research describes pathways rather than treatment outcomes.",
        "Unregulated products may be mislabeled or impure."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "mk-0773",
    "name": "MK-0773",
    "aliases": [],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Investigational SARM studied in clinical research for muscle and physical function.",
    "mechanism": "Nonsteroidal selective androgen-receptor modulator.",
    "effects": [
      "Clinical-trial reviews include it among SARMs studied for body composition and function.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "No approved clinical use; FDA warns of serious risks from SARM-containing products.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39285652/"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "research",
      "task": "reading",
      "prop": "book",
      "motif": "receptor",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading trials that examined muscle function and body composition.",
      "responseNotes": [
        "Trials have examined body composition and physical function.",
        "A general clinical benefit has not been established."
      ],
      "riskNotes": [
        "FDA warns of serious harms from SARM-containing products.",
        "Unregulated products can have uncertain identity or purity."
      ],
      "beats": [
        "Trials have examined body composition and physical function.",
        "FDA warns of serious harms from SARM-containing products."
      ],
      "asides": [
        "The research does not establish a general enhancement indication.",
        "Unregulated products can have uncertain identity or purity."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "yk-11",
    "name": "YK-11",
    "aliases": [],
    "category": "SARMs",
    "className": "selective androgen-receptor modulator",
    "useContext": "Experimental androgen-receptor ligand marketed online; human benefit is unestablished.",
    "mechanism": "Steroidal androgen-receptor ligand often marketed as a SARM; classification is less settled.",
    "effects": [
      "Preclinical mechanisms and human effects are not well established.",
      "No approved general clinical benefit is established"
    ],
    "risks": [
      "FDA identified YK-11 in a product associated with a stroke report; causality is not established.",
      "Unregulated products may have uncertain identity or purity"
    ],
    "interactionNote": "Human interaction profiles are not established; products marketed online may be mislabeled or contain undeclared compounds.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · compound-specific research",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      },
      {
        "label": "FDA · SARM-containing products and safety",
        "url": "https://www.fda.gov/drugs/fraudulent-products/certain-bodybuilding-products-put-consumers-risk-heart-attack-stroke-serious-liver-damage-and-more"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "care-card",
      "prop": "care-card",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing an online androgen-ligand claim beside a product safety report.",
      "responseNotes": [
        "Preclinical mechanisms and human effects remain unclear.",
        "A general clinical benefit has not been established."
      ],
      "riskNotes": [
        "FDA found YK-11 in a product linked to a stroke report.",
        "Causality is unproven; unregulated contents can vary."
      ],
      "beats": [
        "Preclinical mechanisms and human effects remain unclear.",
        "FDA found YK-11 in a product linked to a stroke report."
      ],
      "asides": [
        "A reported stroke does not establish compound-specific causality.",
        "Causality is unproven; unregulated contents can vary."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "phenibut",
    "name": "Phenibut",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Online nootropic/supplement marketing in the United States; WHO notes it is a medicine in one member state and marketed differently elsewhere.",
    "mechanism": "GABA analogue acting primarily at GABA-B receptors and calcium-channel subunits.",
    "effects": [
      "Can produce sedation or anxiolysis; clinical effects vary by setting",
      "WHO reports intoxication with stupor and other neurologic effects"
    ],
    "risks": [
      "Dependence and severe withdrawal have been reported",
      "Intoxication may include stupor, dystonia, or hypothermia"
    ],
    "interactionNote": "Alcohol and sedatives can compound CNS depression; interaction and withdrawal evidence is limited.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "WHO · Phenibut review",
        "url": "https://cdn.who.int/media/docs/default-source/essential-medicines/unedited--advance-copy-44th-ecdd-critical-review-report_phenibut.pdf"
      },
      {
        "label": "PubMed · Chronic phenibut use, withdrawal, and recovery",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35442585/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "relax",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "withdrawal",
      "organs": [],
      "cautions": [],
      "intent": "Taking a reading break while seeking calm through an online nootropic product.",
      "responseNotes": [
        "It can cause sedation or reduced anxiety.",
        "Reported intoxication includes stupor and neurologic effects."
      ],
      "riskNotes": [
        "Dependence and severe withdrawal have been reported.",
        "Intoxication can involve dystonia or hypothermia."
      ],
      "beats": [
        "It can cause sedation or reduced anxiety.",
        "Dependence and severe withdrawal have been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Intoxication can involve dystonia or hypothermia."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "kratom",
    "name": "Kratom",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Plant product used traditionally in Southeast Asia and marketed elsewhere for pain, mood, and opioid-related claims; efficacy is unsettled.",
    "mechanism": "Mitragyna speciosa contains several psychoactive alkaloids with opioid-like activity.",
    "effects": [
      "May cause stimulant-like or opioid-like effects",
      "People report self-treatment uses, but evidence is limited"
    ],
    "risks": [
      "Dependence and withdrawal have been reported",
      "Fatal and nonfatal overdoses have been reported"
    ],
    "interactionNote": "Combining with opioids, sedatives, or other psychoactives may raise risk; product strength varies.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "WHO · Kratom and alkaloid review",
        "url": "https://cdn.who.int/media/docs/default-source/controlled-substances/44ecdd_unsg_annex1.pdf"
      },
      {
        "label": "NCCIH · Kratom",
        "url": "https://www.nccih.nih.gov/health/kratom"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "rest",
      "task": "resting",
      "prop": "cup",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "dependence",
      "organs": [],
      "cautions": [],
      "intent": "Resting while considering a plant product marketed for pain and mood.",
      "responseNotes": [
        "Effects can be stimulant-like or opioid-like.",
        "Reported self-treatment uses have limited benefit evidence."
      ],
      "riskNotes": [
        "Dependence and withdrawal have been reported.",
        "Fatal and nonfatal overdoses have been reported."
      ],
      "beats": [
        "Effects can be stimulant-like or opioid-like.",
        "Dependence and withdrawal have been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Fatal and nonfatal overdoses have been reported."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "mitragynine",
    "name": "Mitragynine",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Major psychoactive alkaloid of kratom studied for opioid-related and other effects; clinical benefit is unestablished.",
    "mechanism": "Indole alkaloid with opioid-like and other receptor actions.",
    "effects": [
      "Can produce opioid-like effects",
      "Other pharmacologic actions remain uncertain"
    ],
    "risks": [
      "Dependence and withdrawal have been reported",
      "Overdose deaths have involved mitragynine-containing products"
    ],
    "interactionNote": "Effects may combine unpredictably with opioids, sedatives, and other CNS-active substances.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "WHO · Kratom and alkaloid review",
        "url": "https://cdn.who.int/media/docs/default-source/controlled-substances/44ecdd_unsg_annex1.pdf"
      },
      {
        "label": "WHO · Surveillance summary",
        "url": "https://cdn.who.int/media/docs/default-source/controlled-substances/47th-ecdd/2024-who-substances-under-surveillance.pdf"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "reading",
      "prop": "research-folder",
      "motif": "receptor",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "dependence",
      "organs": [],
      "cautions": [],
      "intent": "Reading research on kratom's main opioid-active alkaloid.",
      "responseNotes": [
        "It can produce opioid-like effects.",
        "Other pharmacologic actions remain uncertain."
      ],
      "riskNotes": [
        "Dependence and withdrawal have been reported.",
        "Deaths have involved mitragynine-containing products."
      ],
      "beats": [
        "It can produce opioid-like effects.",
        "Dependence and withdrawal have been reported."
      ],
      "asides": [
        "The research context does not establish a therapeutic benefit.",
        "Deaths have involved mitragynine-containing products."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "7-hydroxymitragynine",
    "name": "7-Hydroxymitragynine",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Kratom alkaloid studied for opioid-like activity; human therapeutic role is not established.",
    "mechanism": "Kratom alkaloid with opioid-like receptor activity.",
    "effects": [
      "Can produce opioid-like effects",
      "Clinical effects and potency vary by product"
    ],
    "risks": [
      "Overdose and dependence concerns are reported",
      "Human safety data remain limited"
    ],
    "interactionNote": "Avoid assuming equivalence to whole-leaf kratom; interactions with other sedatives are poorly characterized.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "WHO · Kratom and alkaloid review",
        "url": "https://cdn.who.int/media/docs/default-source/controlled-substances/44ecdd_unsg_annex1.pdf"
      },
      {
        "label": "WHO · Surveillance summary",
        "url": "https://cdn.who.int/media/docs/default-source/controlled-substances/47th-ecdd/2024-who-substances-under-surveillance.pdf"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "research-notes",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "dependence",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing the limited human evidence for a kratom-related opioid alkaloid.",
      "responseNotes": [
        "It can produce opioid-like effects.",
        "Clinical effects and potency vary by product."
      ],
      "riskNotes": [
        "Overdose and dependence are concerns.",
        "Human safety data remain limited."
      ],
      "beats": [
        "It can produce opioid-like effects.",
        "Overdose and dependence are concerns."
      ],
      "asides": [
        "The research context does not establish a therapeutic benefit.",
        "Human safety data remain limited."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "25i-nbome",
    "name": "25I-NBOMe",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Nonmedical synthetic psychedelic with no FDA-approved medical use in the United States.",
    "mechanism": "Potent serotonergic phenethylamine agonist, especially at 5-HT2A receptors.",
    "effects": [
      "Can cause intense perceptual changes and hallucinations",
      "Severe stimulant-like and serotonergic toxicity has been documented"
    ],
    "risks": [
      "Seizures, hyperthermia, and acute kidney injury occur in reports",
      "Fatal intoxications have been reported"
    ],
    "interactionNote": "Unknown products and co-use with stimulants or serotonergic drugs raise uncertainty.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Analytically confirmed toxicity cases",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23731373/"
      },
      {
        "label": "DEA · NBOMe substances",
        "url": "https://www.dea.gov/press-releases/2013/11/15/three-more-synthetic-drugs-become-illegal-least-two-years"
      }
    ],
    "scene": {
      "setting": "art-studio",
      "activity": "rest",
      "task": "reading",
      "prop": "book",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "seizure",
      "organs": [],
      "cautions": [],
      "intent": "Looking through an art book before nonmedical psychedelic exposure.",
      "responseNotes": [
        "It can cause intense perceptual changes and hallucinations.",
        "Severe stimulant-like and serotonergic toxicity is documented."
      ],
      "riskNotes": [
        "Reports describe seizures, overheating, and kidney injury.",
        "Fatal intoxications have been reported."
      ],
      "beats": [
        "It can cause intense perceptual changes and hallucinations.",
        "Reports describe seizures, overheating, and kidney injury."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Fatal intoxications have been reported."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "25c-nbome",
    "name": "25C-NBOMe",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Nonmedical synthetic psychedelic with no FDA-approved medical use in the United States.",
    "mechanism": "Potent serotonergic phenethylamine agonist.",
    "effects": [
      "Can cause intense hallucinations",
      "Can produce stimulant-like effects"
    ],
    "risks": [
      "Seizure, agitation, and hyperthermia cases are reported",
      "Severe intoxication has been documented"
    ],
    "interactionNote": "Unknown composition and co-use with serotonergic or stimulant drugs can raise risk.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · 25C/25B NBOMe intoxication cases",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25387562/"
      },
      {
        "label": "DEA · NBOMe substances",
        "url": "https://www.dea.gov/press-releases/2013/11/15/three-more-synthetic-drugs-become-illegal-least-two-years"
      }
    ],
    "scene": {
      "setting": "listening-room",
      "activity": "rest",
      "task": "music",
      "prop": "headphones",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "seizure",
      "organs": [],
      "cautions": [],
      "intent": "Selecting music before nonmedical exposure to a synthetic psychedelic.",
      "responseNotes": [
        "It can cause intense hallucinations.",
        "It can also produce stimulant-like effects."
      ],
      "riskNotes": [
        "Reports describe seizures, agitation, and overheating.",
        "Severe intoxication has been documented."
      ],
      "beats": [
        "It can cause intense hallucinations.",
        "Reports describe seizures, agitation, and overheating."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Severe intoxication has been documented."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "25b-nbome",
    "name": "25B-NBOMe",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Nonmedical synthetic psychedelic with no FDA-approved medical use in the United States.",
    "mechanism": "Potent serotonergic phenethylamine agonist.",
    "effects": [
      "Can cause hallucinations and altered perception",
      "Can produce stimulant-like effects"
    ],
    "risks": [
      "Agitation, hyperthermia, and seizures are reported",
      "Fatal toxicity has been documented in forensic reports"
    ],
    "interactionNote": "Unknown composition and co-use with serotonergic or stimulant drugs can raise risk.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · 25B-NBOMe toxicity cases",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26621342/"
      },
      {
        "label": "DEA · NBOMe substances",
        "url": "https://www.dea.gov/press-releases/2013/11/15/three-more-synthetic-drugs-become-illegal-least-two-years"
      }
    ],
    "scene": {
      "setting": "observatory",
      "activity": "reading",
      "task": "reading",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "seizure",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing a sketch notebook before seeking a perceptual change.",
      "responseNotes": [
        "It can cause hallucinations and altered perception.",
        "It can also produce stimulant-like effects."
      ],
      "riskNotes": [
        "Agitation, overheating, and seizures have been reported.",
        "Fatal toxicity has appeared in forensic reports."
      ],
      "beats": [
        "It can cause hallucinations and altered perception.",
        "Agitation, overheating, and seizures have been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Fatal toxicity has appeared in forensic reports."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "mephedrone-4-mmc",
    "name": "Mephedrone (4-MMC)",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Synthetic cathinone with nonmedical stimulant and entactogenic use; no approved medical role in the United States.",
    "mechanism": "Monoamine-releasing stimulant related to cathinone.",
    "effects": [
      "Can cause stimulation and altered mood",
      "Acute intoxication often resembles a sympathomimetic toxidrome"
    ],
    "risks": [
      "Agitation, tachycardia, hypertension, and seizures occur in cases",
      "Fatal intoxications have been reported, often with co-exposures"
    ],
    "interactionNote": "Alcohol and other stimulants can compound cardiovascular and behavioral effects.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Analytically confirmed acute toxicity",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21171849/"
      },
      {
        "label": "NIDA · Commonly abused drugs",
        "url": "https://nida.nih.gov/sites/default/files/commonly_abused_drugs.pdf"
      }
    ],
    "scene": {
      "setting": "listening-room",
      "activity": "rest",
      "task": "typing",
      "prop": "phone",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Choosing a playlist before nonmedical stimulant and mood-altering use.",
      "responseNotes": [
        "It can cause stimulation and altered mood.",
        "Acute toxicity can resemble other sympathomimetic stimulants."
      ],
      "riskNotes": [
        "Cases include agitation, fast pulse, hypertension, or seizures.",
        "Deaths are reported, often with other exposures."
      ],
      "beats": [
        "It can cause stimulation and altered mood.",
        "Cases include agitation, fast pulse, hypertension, or seizures."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Deaths are reported, often with other exposures."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "methylone",
    "name": "Methylone",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Synthetic cathinone with nonmedical stimulant/entactogenic use; no approved medical role in the United States.",
    "mechanism": "Cathinone derivative with stimulant and serotonin-related activity.",
    "effects": [
      "Can cause stimulation and altered mood",
      "Effects overlap with other cathinone stimulants"
    ],
    "risks": [
      "Sudden cardiac death and fatal intoxications are reported",
      "Hyperthermia, agitation, and organ injury can occur in severe toxicity"
    ],
    "interactionNote": "Other stimulants and serotonergic drugs may increase acute toxicity.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Sudden cardiac death associated with methylone",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23403480/"
      },
      {
        "label": "NIDA · Commonly abused drugs",
        "url": "https://nida.nih.gov/sites/default/files/commonly_abused_drugs.pdf"
      }
    ],
    "scene": {
      "setting": "art-studio",
      "activity": "rest",
      "task": "music",
      "prop": "headphones",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Listening to music before nonmedical entactogenic exposure.",
      "responseNotes": [
        "It can cause stimulation and altered mood.",
        "Its effects overlap with other cathinone stimulants."
      ],
      "riskNotes": [
        "Sudden cardiac death and fatal intoxications are reported.",
        "Overheating, agitation, and organ injury can occur."
      ],
      "beats": [
        "It can cause stimulation and altered mood.",
        "Sudden cardiac death and fatal intoxications are reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Overheating, agitation, and organ injury can occur."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "mdpv",
    "name": "MDPV",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Synthetic cathinone encountered in nonmedical stimulant products; no approved medical role in the United States.",
    "mechanism": "Potent dopamine and norepinephrine reuptake inhibitor.",
    "effects": [
      "Can cause strong stimulant effects",
      "Can cause agitation or psychosis"
    ],
    "risks": [
      "Severe cardiovascular toxicity can occur",
      "Overdose may involve hyperthermia or seizures"
    ],
    "interactionNote": "Other stimulants and monoamine-active drugs can compound toxicity.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · MDPV intoxications in STRIDA",
        "url": "https://pubmed.ncbi.nlm.nih.gov/26462932/"
      },
      {
        "label": "NIDA · Commonly abused drugs",
        "url": "https://nida.nih.gov/sites/default/files/commonly_abused_drugs.pdf"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "typing",
      "prop": "phone",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "tense",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Pausing a phone task before nonmedical stimulant exposure.",
      "responseNotes": [
        "It can cause strong stimulant effects.",
        "Agitation or psychosis can occur."
      ],
      "riskNotes": [
        "Severe cardiovascular toxicity can occur.",
        "Overdose may involve overheating or seizures."
      ],
      "beats": [
        "It can cause strong stimulant effects.",
        "Severe cardiovascular toxicity can occur."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Overdose may involve overheating or seizures."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "dmt",
    "name": "DMT",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Psychedelic tryptamine found in plants and also produced synthetically; no general approved medical use in the United States.",
    "mechanism": "Serotonergic psychedelic acting at 5-HT2A and related receptors.",
    "effects": [
      "Can cause intense hallucinations and altered self-perception",
      "Can cause agitation and rapid changes in perception"
    ],
    "risks": [
      "Heart rate and blood pressure can rise",
      "Seizures and severe toxicity are reported at high exposure"
    ],
    "interactionNote": "MAO-inhibiting plants or medicines can alter effects; interactions are not predictable.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "NIDA · Commonly abused drugs",
        "url": "https://nida.nih.gov/sites/default/files/commonly_abused_drugs.pdf"
      },
      {
        "label": "PubMed · Fatal intoxication involving 5-MeO-DMT and DMT",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16356341/"
      }
    ],
    "scene": {
      "setting": "observatory",
      "activity": "rest",
      "task": "resting",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "pressure",
      "organs": [],
      "cautions": [],
      "intent": "Setting down a notebook before seeking a brief perceptual change.",
      "responseNotes": [
        "It can cause intense hallucinations and altered self-perception.",
        "Agitation and rapid perceptual changes can occur."
      ],
      "riskNotes": [
        "Heart rate and blood pressure can rise.",
        "High exposure has been associated with seizures and toxicity."
      ],
      "beats": [
        "It can cause intense hallucinations and altered self-perception.",
        "Heart rate and blood pressure can rise."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "High exposure has been associated with seizures and toxicity."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "5-meo-dmt",
    "name": "5-MeO-DMT",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Potent psychedelic tryptamine investigated in early clinical research; not an established treatment.",
    "mechanism": "Serotonergic tryptamine with strong 5-HT1A and 5-HT2A activity.",
    "effects": [
      "Can produce intense psychedelic effects",
      "Early clinical research remains limited"
    ],
    "risks": [
      "Severe intoxication and a fatal case are reported",
      "Combining with MAO inhibitors may increase toxicity risk"
    ],
    "interactionNote": "MAO inhibitors and serotonergic medicines can create dangerous interactions.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · Fatal 5-MeO-DMT intoxication case",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16356341/"
      },
      {
        "label": "PubMed · Clinical pharmacology review",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35149998/"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "serotonin",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing an early psychedelic-study information card.",
      "responseNotes": [
        "It can produce intense psychedelic effects.",
        "Early clinical research remains limited."
      ],
      "riskNotes": [
        "Severe intoxication and a fatal case have been reported.",
        "Combining it with MAO inhibitors may increase toxicity."
      ],
      "beats": [
        "It can produce intense psychedelic effects.",
        "Severe intoxication and a fatal case have been reported."
      ],
      "asides": [
        "The research context does not establish a therapeutic benefit.",
        "Combining it with MAO inhibitors may increase toxicity."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "mescaline",
    "name": "Mescaline",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Naturally occurring psychedelic alkaloid found in certain cacti; no general approved medical use in the United States.",
    "mechanism": "Serotonergic psychedelic, especially at 5-HT2A receptors.",
    "effects": [
      "Can alter perception and thought",
      "Can cause nausea and autonomic stimulation"
    ],
    "risks": [
      "Anxiety, elevated heart rate, and blood pressure can occur",
      "Long-term safety of nonmedical use is not established"
    ],
    "interactionNote": "Other serotonergic or stimulant substances may compound acute effects.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "NIDA · Hallucinogens and commonly abused drugs",
        "url": "https://nida.nih.gov/sites/default/files/commonly_abused_drugs.pdf"
      }
    ],
    "scene": {
      "setting": "conservatory",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "nausea",
      "timeCourse": "variable",
      "riskVisual": "pressure",
      "organs": [],
      "cautions": [],
      "intent": "Reading in a plant-filled room before nonmedical psychedelic exposure.",
      "responseNotes": [
        "It can alter perception and thought.",
        "Nausea and autonomic stimulation can occur."
      ],
      "riskNotes": [
        "Anxiety, fast pulse, and high blood pressure can occur.",
        "Long-term safety of nonmedical use is not established."
      ],
      "beats": [
        "It can alter perception and thought.",
        "Anxiety, fast pulse, and high blood pressure can occur."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Long-term safety of nonmedical use is not established."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "salvinorin-a",
    "name": "Salvinorin A",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Salvia-derived psychoactive compound studied for unusual perceptual effects.",
    "mechanism": "Kappa-opioid receptor agonist, distinct from classic serotonergic psychedelics.",
    "effects": [
      "Can cause intense, brief dissociation and perceptual distortion",
      "Can impair coordination and awareness"
    ],
    "risks": [
      "Confusion, fear, and accidental injury can occur",
      "Long-term effects are insufficiently characterized"
    ],
    "interactionNote": "Avoid combining with alcohol or sedatives; clinical interaction data are limited.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Salvinorin A pharmacology",
        "url": "https://pubmed.ncbi.nlm.nih.gov/17528346/"
      },
      {
        "label": "NIDA · Hallucinogens research report",
        "url": "https://nida.nih.gov/research-topics/hallucinogens"
      }
    ],
    "scene": {
      "setting": "art-studio",
      "activity": "rest",
      "task": "resting",
      "prop": "book",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "unsteady",
      "timeCourse": "variable",
      "riskVisual": "dizziness",
      "organs": [],
      "cautions": [],
      "intent": "Setting aside an art book before seeking an unusual perceptual experience.",
      "responseNotes": [
        "It can cause intense, brief dissociation and perceptual change.",
        "Coordination and awareness can be impaired."
      ],
      "riskNotes": [
        "Confusion, fear, and accidental injury can occur.",
        "Long-term effects remain insufficiently characterized."
      ],
      "beats": [
        "It can cause intense, brief dissociation and perceptual change.",
        "Confusion, fear, and accidental injury can occur."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Long-term effects remain insufficiently characterized."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "ibogaine",
    "name": "Ibogaine",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Plant-derived psychoactive alkaloid investigated experimentally for substance-use disorders.",
    "mechanism": "Complex alkaloid with multiple monoamine and opioid-related actions.",
    "effects": [
      "Can produce prolonged altered perception",
      "Clinical benefit for addiction is unproven"
    ],
    "risks": [
      "QT prolongation and fatal arrhythmias have been reported",
      "Nausea, ataxia, and neurologic effects can occur"
    ],
    "interactionNote": "Cardiac medicines and substances affecting QT or electrolytes can increase risk.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "PubMed · Ibogaine-associated cardiac arrhythmia case series",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19132667/"
      },
      {
        "label": "PubMed · Ibogaine clinical pharmacology",
        "url": "https://pubmed.ncbi.nlm.nih.gov/20494333/"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "writing",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "nausea",
      "timeCourse": "unknown",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Writing questions about an experimental substance-use-disorder treatment claim.",
      "responseNotes": [
        "It can produce prolonged changes in perception.",
        "Clinical benefit for addiction remains unproven."
      ],
      "riskNotes": [
        "QT prolongation and fatal arrhythmias have been reported.",
        "Nausea, poor coordination, and neurologic effects can occur."
      ],
      "beats": [
        "It can produce prolonged changes in perception.",
        "QT prolongation and fatal arrhythmias have been reported."
      ],
      "asides": [
        "The research context does not establish a therapeutic benefit.",
        "Nausea, poor coordination, and neurologic effects can occur."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "nitrous-oxide",
    "name": "Nitrous oxide",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Medical anesthetic gas with nonmedical inhalant misuse; effects differ by setting and exposure.",
    "mechanism": "NMDA-receptor antagonist with anesthetic and dissociative effects.",
    "effects": [
      "Can cause brief euphoria and dissociation",
      "Can impair coordination and judgment"
    ],
    "risks": [
      "Hypoxia and accidents can cause severe injury",
      "Repeated exposure can inactivate B12 and injure nerves"
    ],
    "interactionNote": "Alcohol and other sedatives increase impairment; repeated exposure can worsen functional B12 deficiency.",
    "evidence": "Strong",
    "status": "nonmedical",
    "sources": [
      {
        "label": "NIDA · Commonly abused drugs",
        "url": "https://nida.nih.gov/sites/default/files/commonly_abused_drugs.pdf"
      },
      {
        "label": "NIH · Nitrous oxide-associated myeloneuropathy",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31303450/"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "rest",
      "task": "music",
      "prop": "headphones",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "relax",
      "adverse": "unsteady",
      "timeCourse": "variable",
      "riskVisual": "neural",
      "organs": [],
      "cautions": [],
      "intent": "Listening to music before a nonmedical inhalant exposure.",
      "responseNotes": [
        "It can cause brief euphoria and dissociation.",
        "Coordination and judgment can be impaired."
      ],
      "riskNotes": [
        "Low oxygen and accidents can cause severe injury.",
        "Repeated exposure can inactivate B12 and injure nerves."
      ],
      "beats": [
        "It can cause brief euphoria and dissociation.",
        "Low oxygen and accidents can cause severe injury."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Repeated exposure can inactivate B12 and injure nerves."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "methoxetamine-mxe",
    "name": "Methoxetamine (MXE)",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Dissociative new psychoactive substance encountered in nonmedical use; clinical role is unestablished.",
    "mechanism": "Arylcyclohexylamine dissociative related to ketamine.",
    "effects": [
      "Can cause dissociation and altered perception",
      "Can produce confusion and reduced consciousness"
    ],
    "risks": [
      "Acute cerebellar and sympathomimetic toxicity are reported",
      "Ataxia, tachycardia, and hypertension can occur"
    ],
    "interactionNote": "Alcohol, ketamine, opioids, and other CNS-active drugs may compound impairment.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Analytically confirmed acute toxicity",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22205276/"
      },
      {
        "label": "PubMed · Reversible cerebellar toxicity cases",
        "url": "https://pubmed.ncbi.nlm.nih.gov/22578175/"
      }
    ],
    "scene": {
      "setting": "listening-room",
      "activity": "rest",
      "task": "reading",
      "prop": "book",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "unsteady",
      "timeCourse": "variable",
      "riskVisual": "dizziness",
      "organs": [],
      "cautions": [],
      "intent": "Reading during a quiet break before nonmedical dissociative exposure.",
      "responseNotes": [
        "It can cause dissociation and altered perception.",
        "Confusion and reduced consciousness can occur."
      ],
      "riskNotes": [
        "Coordination loss, fast pulse, and high pressure are reported.",
        "Acute cerebellar toxicity has been reported."
      ],
      "beats": [
        "It can cause dissociation and altered perception.",
        "Coordination loss, fast pulse, and high pressure are reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Acute cerebellar toxicity has been reported."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "3-meo-pcp",
    "name": "3-MeO-PCP",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Dissociative new psychoactive substance with no established medical role.",
    "mechanism": "Methoxy-substituted phencyclidine analogue and NMDA-receptor antagonist.",
    "effects": [
      "Can cause dissociation and perceptual distortion",
      "Can cause agitation or confusion"
    ],
    "risks": [
      "Severe intoxications and deaths are reported",
      "Hypertension, tachycardia, and neurologic effects can occur"
    ],
    "interactionNote": "Other dissociatives, stimulants, and sedatives may create unpredictable combined effects.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Intoxication case report",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31876705/"
      },
      {
        "label": "PubMed · Fatal intoxication case series",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28830118/"
      }
    ],
    "scene": {
      "setting": "art-studio",
      "activity": "rest",
      "task": "writing",
      "prop": "notebook",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "pressure",
      "organs": [],
      "cautions": [],
      "intent": "Writing in a sketch notebook before seeking dissociative effects.",
      "responseNotes": [
        "It can cause dissociation and perceptual distortion.",
        "Agitation or confusion can occur."
      ],
      "riskNotes": [
        "Severe intoxications and deaths have been reported.",
        "High pressure, fast pulse, and neurologic effects can occur."
      ],
      "beats": [
        "It can cause dissociation and perceptual distortion.",
        "Severe intoxications and deaths have been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "High pressure, fast pulse, and neurologic effects can occur."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "o-pce",
    "name": "O-PCE",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Arylcyclohexylamine new psychoactive substance identified in nonmedical polydrug exposure.",
    "mechanism": "Deschloro-N-ethylketamine, a ketamine-related dissociative.",
    "effects": [
      "Dissociative effects are expected from the class",
      "Human effects are poorly characterized"
    ],
    "risks": [
      "A polydrug case involved loss of consciousness and ICU care",
      "Substance-specific risks remain uncertain"
    ],
    "interactionNote": "Co-exposure is common in reports; combining with depressants or dissociatives is unpredictable.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Toxicokinetic O-PCE exposure case",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38518457/"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "rest",
      "task": "resting",
      "prop": "towel",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Taking a quiet break before exposure to a poorly characterized dissociative product.",
      "responseNotes": [
        "Dissociative effects are expected from its drug class.",
        "Human effects remain poorly characterized."
      ],
      "riskNotes": [
        "A mixed-drug case involved unconsciousness and ICU care.",
        "Substance-specific risks remain uncertain."
      ],
      "beats": [
        "Dissociative effects are expected from its drug class.",
        "A mixed-drug case involved unconsciousness and ICU care."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Substance-specific risks remain uncertain."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "2c-e",
    "name": "2C-E",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Synthetic psychedelic phenethylamine with nonmedical use and no established medical role.",
    "mechanism": "Serotonergic phenethylamine psychedelic.",
    "effects": [
      "Can cause intense perceptual and cognitive changes",
      "Human effects vary and are poorly characterized"
    ],
    "risks": [
      "Severe mass intoxication and a fatal neurologic case are reported",
      "Agitation and impaired consciousness can occur"
    ],
    "interactionNote": "Combining with other psychedelics or stimulants can increase unpredictability.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal toxic leukoencephalopathy case",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23077393/"
      },
      {
        "label": "PubMed · Mass-poisoning event",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29959557/"
      }
    ],
    "scene": {
      "setting": "observatory",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "agitation",
      "organs": [],
      "cautions": [],
      "intent": "Looking through an illustrated book before nonmedical psychedelic exposure.",
      "responseNotes": [
        "It can cause intense perceptual and cognitive changes.",
        "Human effects vary and remain poorly characterized."
      ],
      "riskNotes": [
        "Severe group intoxication and a fatal neurologic case occurred.",
        "Agitation and impaired consciousness can occur."
      ],
      "beats": [
        "It can cause intense perceptual and cognitive changes.",
        "Severe group intoxication and a fatal neurologic case occurred."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Agitation and impaired consciousness can occur."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "2c-t-7",
    "name": "2C-T-7",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychoactive substance",
    "useContext": "Synthetic psychedelic phenethylamine with no established medical role.",
    "mechanism": "Serotonergic phenethylamine-thiophene psychedelic.",
    "effects": [
      "Can produce hallucinations and altered perception",
      "Animal studies show hallucinogen-like activity"
    ],
    "risks": [
      "A fatality after reported use has been documented",
      "Human safety information is limited"
    ],
    "interactionNote": "Interactions with serotonergic drugs and stimulants are not well characterized.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Postmortem identification",
        "url": "https://pubmed.ncbi.nlm.nih.gov/14607005/"
      },
      {
        "label": "PubMed · Hallucinogen-like animal research",
        "url": "https://pubmed.ncbi.nlm.nih.gov/15983786/"
      }
    ],
    "scene": {
      "setting": "art-studio",
      "activity": "reading",
      "task": "reading",
      "prop": "clipboard",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing an illustration before seeking a psychedelic perceptual change.",
      "responseNotes": [
        "It can cause hallucinations and altered perception.",
        "Animal studies show hallucinogen-like activity."
      ],
      "riskNotes": [
        "A death after reported use has been documented.",
        "Human safety information remains limited."
      ],
      "beats": [
        "It can cause hallucinations and altered perception.",
        "A death after reported use has been documented."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Human safety information remains limited."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "3-mmc",
    "name": "3-MMC",
    "aliases": [],
    "category": "Psychoactives",
    "className": "synthetic cathinone",
    "useContext": "Synthetic stimulant encountered in nonmedical use; human treatment benefit is not established.",
    "mechanism": "Synthetic cathinone with monoamine-transporter stimulant activity.",
    "effects": [
      "Can produce stimulant and mood-altering effects",
      "Human effects vary with product and co-exposures"
    ],
    "risks": [
      "Fatal intoxications have been analytically documented",
      "Stimulant toxicity can involve cardiovascular strain"
    ],
    "interactionNote": "Co-use with stimulants or serotonergic drugs can make toxicity less predictable.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal 3-MMC poisoning case",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31056341/"
      }
    ],
    "scene": {
      "setting": "listening-room",
      "activity": "rest",
      "task": "music",
      "prop": "headphones",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "heartbeat",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Starting a listening session before nonmedical stimulant exposure.",
      "responseNotes": [
        "It can produce stimulant and mood-altering effects.",
        "Effects vary with product contents and co-exposures."
      ],
      "riskNotes": [
        "Fatal intoxications have been analytically documented.",
        "Stimulant toxicity can strain the cardiovascular system."
      ],
      "beats": [
        "It can produce stimulant and mood-altering effects.",
        "Fatal intoxications have been analytically documented."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Stimulant toxicity can strain the cardiovascular system."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "4-fluoroamphetamine",
    "name": "4-Fluoroamphetamine",
    "aliases": [],
    "category": "Psychoactives",
    "className": "synthetic stimulant",
    "useContext": "Synthetic phenethylamine stimulant encountered in nonmedical settings; no established therapeutic role.",
    "mechanism": "Para-substituted amphetamine-type monoamine-releasing stimulant.",
    "effects": [
      "Can cause stimulant and entactogenic effects",
      "No established medical benefit"
    ],
    "risks": [
      "Cardiogenic shock and stroke are reported",
      "Fatal polydrug intoxications have been reported"
    ],
    "interactionNote": "Combining with other stimulants or serotonergic substances may compound acute toxicity.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · 4-FA cardiogenic shock case",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25350468/"
      },
      {
        "label": "PubMed · 4-FA-associated hemorrhagic stroke",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29737425/"
      },
      {
        "label": "PubMed · 4-FA/25C-NBOMe fatal intoxications",
        "url": "https://pubmed.ncbi.nlm.nih.gov/35975553/"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "rest",
      "task": "typing",
      "prop": "phone",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Choosing music on a phone before nonmedical stimulant exposure.",
      "responseNotes": [
        "It can produce stimulant and entactogenic effects.",
        "A medical benefit has not been established."
      ],
      "riskNotes": [
        "Cardiogenic shock and stroke have been reported.",
        "Fatal mixed-drug intoxications have been reported."
      ],
      "beats": [
        "It can produce stimulant and entactogenic effects.",
        "Cardiogenic shock and stroke have been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Fatal mixed-drug intoxications have been reported."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "6-apb",
    "name": "6-APB",
    "aliases": [],
    "category": "Psychoactives",
    "className": "benzofuran entactogen",
    "useContext": "Benzofuran new psychoactive substance encountered in nonmedical use; human treatment benefit is not established.",
    "mechanism": "Entactogenic stimulant with monoamine-related activity.",
    "effects": [
      "Can cause agitation and altered mood",
      "Acute human effects remain poorly characterized"
    ],
    "risks": [
      "Analytically confirmed acute psychosis has been reported",
      "Fatal 5- and 6-APB detections occur in forensic cases"
    ],
    "interactionNote": "Co-use with stimulants or serotonergic drugs may increase uncertainty and acute risk.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Analytically confirmed 6-APB toxicity",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23733714/"
      },
      {
        "label": "PubMed · Forensic 5- and 6-APB analysis",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33576419/"
      }
    ],
    "scene": {
      "setting": "listening-room",
      "activity": "rest",
      "task": "reading",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "agitation",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing a playlist notebook before nonmedical entactogenic exposure.",
      "responseNotes": [
        "It can cause agitation and altered mood.",
        "Acute human effects remain poorly characterized."
      ],
      "riskNotes": [
        "An analytically confirmed acute psychosis case was reported.",
        "Fatal forensic cases have included 5-APB or 6-APB."
      ],
      "beats": [
        "It can cause agitation and altered mood.",
        "An analytically confirmed acute psychosis case was reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Fatal forensic cases have included 5-APB or 6-APB."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "5-apb",
    "name": "5-APB",
    "aliases": [],
    "category": "Psychoactives",
    "className": "benzofuran entactogen",
    "useContext": "Benzofuran new psychoactive substance encountered in nonmedical use; no established therapeutic role.",
    "mechanism": "Entactogenic stimulant related to 6-APB.",
    "effects": [
      "May produce stimulant and empathogenic effects",
      "Human effects are poorly characterized"
    ],
    "risks": [
      "Detected in a fatal forensic intoxication",
      "Severe stimulant toxicity can affect heart and temperature"
    ],
    "interactionNote": "Effects may combine unpredictably with other stimulants or serotonergic drugs.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Forensic 5- and 6-APB analysis",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33576419/"
      }
    ],
    "scene": {
      "setting": "art-studio",
      "activity": "rest",
      "task": "resting",
      "prop": "cup",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Taking a studio break before nonmedical entactogenic exposure.",
      "responseNotes": [
        "It may produce stimulant and empathogenic effects.",
        "Human effects remain poorly characterized."
      ],
      "riskNotes": [
        "It was detected in a fatal forensic intoxication.",
        "Severe stimulant toxicity can affect heart and temperature."
      ],
      "beats": [
        "It may produce stimulant and empathogenic effects.",
        "It was detected in a fatal forensic intoxication."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Severe stimulant toxicity can affect heart and temperature."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "bromo-dragonfly",
    "name": "Bromo-DragonFLY",
    "aliases": [],
    "category": "Psychoactives",
    "className": "serotonergic psychedelic",
    "useContext": "Potent synthetic psychedelic encountered in nonmedical use; no established medical role.",
    "mechanism": "Long-acting serotonergic psychedelic with strong 5-HT2A activity.",
    "effects": [
      "Can cause prolonged perceptual changes",
      "Acute psychosis and agitation have been reported"
    ],
    "risks": [
      "Fatal poisoning has been documented",
      "Hyperthermia and cardiovascular strain occur in severe cases"
    ],
    "interactionNote": "Combining with stimulants or serotonergic drugs can increase toxicity uncertainty.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal Bromo-Dragonfly poisoning",
        "url": "https://pubmed.ncbi.nlm.nih.gov/19091499/"
      }
    ],
    "scene": {
      "setting": "observatory",
      "activity": "rest",
      "task": "music",
      "prop": "headphones",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Selecting music before a potentially prolonged psychedelic exposure.",
      "responseNotes": [
        "It can cause prolonged perceptual changes.",
        "Acute psychosis and agitation have been reported."
      ],
      "riskNotes": [
        "Fatal poisoning has been documented.",
        "Severe cases involve overheating and cardiovascular strain."
      ],
      "beats": [
        "It can cause prolonged perceptual changes.",
        "Fatal poisoning has been documented."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Severe cases involve overheating and cardiovascular strain."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "2c-i",
    "name": "2C-I",
    "aliases": [],
    "category": "Psychoactives",
    "className": "serotonergic psychedelic",
    "useContext": "Synthetic phenethylamine psychedelic encountered in nonmedical use; no established medical indication.",
    "mechanism": "Serotonergic phenethylamine psychedelic, with 5-HT2A activity.",
    "effects": [
      "Can cause hallucinations and altered perception",
      "Can cause agitation or confusion"
    ],
    "risks": [
      "Laboratory-confirmed seizures and serotonin syndrome are reported",
      "Rhabdomyolysis has occurred in severe combined exposures"
    ],
    "interactionNote": "Serotonergic co-exposures may compound toxicity; case reports describe combination exposures.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed Central · 2C-I serotonin syndrome case",
        "url": "https://pubmed.ncbi.nlm.nih.gov/3657032/"
      }
    ],
    "scene": {
      "setting": "conservatory",
      "activity": "reading",
      "task": "reading",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "serotonin",
      "organs": [],
      "cautions": [],
      "intent": "Setting aside plant notes before nonmedical psychedelic exposure.",
      "responseNotes": [
        "It can cause hallucinations and altered perception.",
        "Agitation or confusion can occur."
      ],
      "riskNotes": [
        "Confirmed cases include seizures and serotonin syndrome.",
        "Severe mixed exposures have involved muscle breakdown."
      ],
      "beats": [
        "It can cause hallucinations and altered perception.",
        "Confirmed cases include seizures and serotonin syndrome."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Severe mixed exposures have involved muscle breakdown."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "alpha-pvp",
    "name": "Alpha-PVP",
    "aliases": [],
    "category": "Psychoactives",
    "className": "synthetic cathinone",
    "useContext": "Synthetic cathinone encountered in nonmedical stimulant products; no established therapeutic role.",
    "mechanism": "Potent stimulant cathinone that inhibits dopamine and norepinephrine reuptake.",
    "effects": [
      "Can cause intense stimulation and agitation",
      "Can produce paranoia or psychosis"
    ],
    "risks": [
      "Fatal intoxication with cardiac arrest is documented",
      "Hyperthermia and severe cardiovascular toxicity can occur"
    ],
    "interactionNote": "Co-use with stimulants or other psychoactives can increase acute toxicity.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal alpha-PVP intoxication",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28028802/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "tense",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Checking a task list before nonmedical stimulant exposure.",
      "responseNotes": [
        "It can cause intense stimulation and agitation.",
        "Paranoia or psychosis can occur."
      ],
      "riskNotes": [
        "Fatal intoxication with cardiac arrest is documented.",
        "Overheating and severe cardiovascular toxicity can occur."
      ],
      "beats": [
        "It can cause intense stimulation and agitation.",
        "Fatal intoxication with cardiac arrest is documented."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Overheating and severe cardiovascular toxicity can occur."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "u-47700",
    "name": "U-47700",
    "aliases": [],
    "category": "Psychoactives",
    "className": "synthetic opioid",
    "useContext": "Nonmedical synthetic opioid identified in fatal intoxications; no approved medical role.",
    "mechanism": "Synthetic mu-opioid receptor agonist.",
    "effects": [
      "Can cause opioid-like sedation and analgesia",
      "Medical benefit is not established"
    ],
    "risks": [
      "Fatal respiratory depression is reported",
      "Counterfeit or mixed products add overdose uncertainty"
    ],
    "interactionNote": "Benzodiazepines, alcohol, and other sedatives can compound respiratory depression.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal U-47700 and benzodiazepine intoxication",
        "url": "https://pubmed.ncbi.nlm.nih.gov/29637722/"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "rest",
      "task": "resting",
      "prop": "towel",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "breathing",
      "organs": [],
      "cautions": [],
      "intent": "Resting while seeking relief through an unapproved opioid product.",
      "responseNotes": [
        "It can cause opioid-like sedation and analgesia.",
        "A medical benefit has not been established."
      ],
      "riskNotes": [
        "Fatal respiratory depression has been reported.",
        "Counterfeit or mixed products add overdose uncertainty."
      ],
      "beats": [
        "It can cause opioid-like sedation and analgesia.",
        "Fatal respiratory depression has been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Counterfeit or mixed products add overdose uncertainty."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "flualprazolam",
    "name": "Flualprazolam",
    "aliases": [],
    "category": "Psychoactives",
    "className": "designer benzodiazepine",
    "useContext": "Nonapproved designer benzodiazepine found in counterfeit or unregulated products; no approved U.S. medical role.",
    "mechanism": "Benzodiazepine-site positive allosteric modulator of GABA-A receptors.",
    "effects": [
      "Can cause sedation and impaired coordination",
      "Effects may be prolonged or unpredictable"
    ],
    "risks": [
      "Fatal multidrug intoxications are reported",
      "Respiratory and central nervous system depression can occur"
    ],
    "interactionNote": "Opioids, alcohol, and other sedatives raise the risk of severe respiratory depression.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal flualprazolam multidrug intoxication",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36454486/"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "rest",
      "task": "reading",
      "prop": "book",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "unsteady",
      "timeCourse": "variable",
      "riskVisual": "breathing",
      "organs": [],
      "cautions": [],
      "intent": "Reading at bedtime before exposure to an unregulated sedative product.",
      "responseNotes": [
        "It can cause sedation and impaired coordination.",
        "Effects can be prolonged or unpredictable."
      ],
      "riskNotes": [
        "Fatal mixed-drug intoxications have been reported.",
        "Breathing and central nervous activity can be suppressed."
      ],
      "beats": [
        "It can cause sedation and impaired coordination.",
        "Fatal mixed-drug intoxications have been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Breathing and central nervous activity can be suppressed."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "flubromazepam",
    "name": "Flubromazepam",
    "aliases": [],
    "category": "Psychoactives",
    "className": "designer benzodiazepine",
    "useContext": "Designer benzodiazepine encountered in nonmedical products; no established approved U.S. therapeutic role.",
    "mechanism": "Long-acting benzodiazepine-site positive allosteric modulator of GABA-A receptors.",
    "effects": [
      "Can produce sedative and hypnotic effects",
      "Prolonged impairment has been reported"
    ],
    "risks": [
      "Prolonged coma and cerebral ischemia are reported",
      "Low blood pressure and reduced consciousness can occur"
    ],
    "interactionNote": "Opioids, alcohol, and sedatives can compound CNS and respiratory depression.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Flubromazepam prolonged coma case",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41741198/"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "rest",
      "task": "resting",
      "prop": "cup",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "unsteady",
      "timeCourse": "variable",
      "riskVisual": "pressure",
      "organs": [],
      "cautions": [],
      "intent": "Taking a quiet break before exposure to a long-acting unapproved sedative.",
      "responseNotes": [
        "It can produce sedative and hypnotic effects.",
        "Prolonged impairment has been reported."
      ],
      "riskNotes": [
        "Prolonged coma and cerebral ischemia have been reported.",
        "Low blood pressure and reduced consciousness can occur."
      ],
      "beats": [
        "It can produce sedative and hypnotic effects.",
        "Prolonged coma and cerebral ischemia have been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Low blood pressure and reduced consciousness can occur."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "etizolam",
    "name": "Etizolam",
    "aliases": [],
    "category": "Psychoactives",
    "className": "thienodiazepine",
    "useContext": "Medicine in some jurisdictions and nonapproved/counterfeit-product exposure in others; status is country-specific.",
    "mechanism": "Thienodiazepine acting at benzodiazepine sites on GABA-A receptors.",
    "effects": [
      "Can cause sedation and anxiolysis",
      "Impairment and dependence can occur"
    ],
    "risks": [
      "Overdose and withdrawal are documented",
      "Fatal mixed-drug poisoning has been reported"
    ],
    "interactionNote": "Opioids, alcohol, and other sedatives can cause dangerous combined CNS depression.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Etizolam and tianeptine overdose/withdrawal case",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36644586/"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "rest",
      "task": "sleep-log",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "relax",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "withdrawal",
      "organs": [],
      "cautions": [],
      "intent": "Recording sleep concerns before nonmedical sedative exposure.",
      "responseNotes": [
        "It can cause sedation and reduced anxiety.",
        "Impairment and dependence can occur."
      ],
      "riskNotes": [
        "Overdose and withdrawal have been documented.",
        "Fatal mixed-drug poisoning has been reported."
      ],
      "beats": [
        "It can cause sedation and reduced anxiety.",
        "Overdose and withdrawal have been documented."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Fatal mixed-drug poisoning has been reported."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "bromazolam",
    "name": "Bromazolam",
    "aliases": [],
    "category": "Psychoactives",
    "className": "designer benzodiazepine",
    "useContext": "Designer benzodiazepine identified in overdose deaths; no approved U.S. medical role.",
    "mechanism": "Benzodiazepine-type positive allosteric modulator of GABA-A receptors.",
    "effects": [
      "Can cause sedation and impaired memory",
      "Effects may vary in unregulated products"
    ],
    "risks": [
      "Fatal overdose detections are increasing in reports",
      "Respiratory depression is a serious concern"
    ],
    "interactionNote": "Opioids and other sedatives are frequent co-exposures and can compound respiratory depression.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Bromazolam-related fatalities",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38679868/"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "rest",
      "task": "music",
      "prop": "headphones",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "breathing",
      "organs": [],
      "cautions": [],
      "intent": "Listening quietly before exposure to an unregulated sedative product.",
      "responseNotes": [
        "It can cause sedation and impaired memory.",
        "Effects may vary in unregulated products."
      ],
      "riskNotes": [
        "Reports include detections in fatal overdoses.",
        "Respiratory depression is a serious concern."
      ],
      "beats": [
        "It can cause sedation and impaired memory.",
        "Reports include detections in fatal overdoses."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Respiratory depression is a serious concern."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "5-meo-dipt",
    "name": "5-MeO-DiPT",
    "aliases": [],
    "category": "Psychoactives",
    "className": "psychedelic tryptamine",
    "useContext": "Synthetic psychedelic tryptamine encountered in nonmedical use; no established medical role.",
    "mechanism": "Tryptamine psychedelic with serotonergic activity.",
    "effects": [
      "Can alter perception and sensory experience",
      "Human effects are poorly characterized"
    ],
    "risks": [
      "Fatal poisoning has been reported",
      "Severe toxicity cannot be estimated from single cases"
    ],
    "interactionNote": "Serotonergic drugs and stimulants may compound unpredictable effects.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal 5-MeO-DiPT poisoning",
        "url": "https://pubmed.ncbi.nlm.nih.gov/16406422/"
      }
    ],
    "scene": {
      "setting": "listening-room",
      "activity": "rest",
      "task": "music",
      "prop": "headphones",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Choosing music before nonmedical exposure to a poorly characterized tryptamine.",
      "responseNotes": [
        "It can alter perception and sensory experience.",
        "Human effects remain poorly characterized."
      ],
      "riskNotes": [
        "Fatal poisoning has been reported.",
        "Single cases cannot establish the frequency of severe toxicity."
      ],
      "beats": [
        "It can alter perception and sensory experience.",
        "Fatal poisoning has been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Single cases cannot establish the frequency of severe toxicity."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "4-mta",
    "name": "4-MTA",
    "aliases": [],
    "category": "Psychoactives",
    "className": "synthetic stimulant",
    "useContext": "Synthetic amphetamine-type stimulant with nonmedical use; no established therapeutic role.",
    "mechanism": "Serotonin-releasing amphetamine-type compound; monoamine effects are incompletely characterized.",
    "effects": [
      "Can produce stimulant and serotonergic effects",
      "Human therapeutic benefit is not established"
    ],
    "risks": [
      "Fatal poisoning has been reported in a mixed-drug case",
      "Serotonin toxicity is a concern from its pharmacology"
    ],
    "interactionNote": "Combining with MDMA or serotonergic medicines may raise toxicity risk.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal 4-MTA poisoning report",
        "url": "https://pubmed.ncbi.nlm.nih.gov/10732944/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "writing",
      "prop": "notebook",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "serotonin",
      "organs": [],
      "cautions": [],
      "intent": "Pausing a writing task before nonmedical serotonergic-stimulant exposure.",
      "responseNotes": [
        "It can produce stimulant and serotonergic effects.",
        "A human therapeutic benefit has not been established."
      ],
      "riskNotes": [
        "A fatal mixed-drug poisoning case has been reported.",
        "Serotonin toxicity is a pharmacologic concern."
      ],
      "beats": [
        "It can produce stimulant and serotonergic effects.",
        "A fatal mixed-drug poisoning case has been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Serotonin toxicity is a pharmacologic concern."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "5-it",
    "name": "5-IT",
    "aliases": [],
    "category": "Psychoactives",
    "className": "synthetic stimulant",
    "useContext": "Synthetic indole stimulant identified in fatal forensic cases; no established therapeutic use.",
    "mechanism": "Indole derivative with stimulant properties.",
    "effects": [
      "Can produce stimulant effects",
      "Human effects and potency are poorly characterized"
    ],
    "risks": [
      "Multiple deaths associated with 5-IT are reported",
      "Polydrug co-exposures complicate risk assessment"
    ],
    "interactionNote": "Co-use with stimulants or serotonergic substances can increase unpredictability.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Four fatalities involving 5-IT",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23861338/"
      }
    ],
    "scene": {
      "setting": "listening-room",
      "activity": "rest",
      "task": "typing",
      "prop": "phone",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Selecting a track before exposure to a poorly characterized stimulant.",
      "responseNotes": [
        "It can produce stimulant effects.",
        "Human effects and potency remain poorly characterized."
      ],
      "riskNotes": [
        "Multiple deaths associated with 5-IT have been reported.",
        "Mixed-drug exposures complicate the risk assessment."
      ],
      "beats": [
        "It can produce stimulant effects.",
        "Multiple deaths associated with 5-IT have been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Mixed-drug exposures complicate the risk assessment."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "2-fluorodeschloroketamine-2-fdck",
    "name": "2-Fluorodeschloroketamine (2-FDCK)",
    "aliases": [],
    "category": "Psychoactives",
    "className": "arylcyclohexylamine dissociative",
    "useContext": "Ketamine-related new psychoactive substance encountered in nonmedical use; no established medical role.",
    "mechanism": "Arylcyclohexylamine dissociative and ketamine analogue.",
    "effects": [
      "Can produce dissociation and altered consciousness",
      "Human effects vary and remain poorly characterized"
    ],
    "risks": [
      "Clinical series report impaired consciousness and convulsions",
      "Deaths and severe behavioral events have been reported"
    ],
    "interactionNote": "Co-use with ketamine analogues, alcohol, or sedatives can compound impairment.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · 2-FDCK deaths and self-harm case series",
        "url": "https://pubmed.ncbi.nlm.nih.gov/38619360/"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "rest",
      "task": "reading",
      "prop": "notebook",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "seizure",
      "organs": [],
      "cautions": [],
      "intent": "Setting aside notes before nonmedical dissociative exposure.",
      "responseNotes": [
        "It can produce dissociation and altered consciousness.",
        "Human effects vary and remain poorly characterized."
      ],
      "riskNotes": [
        "Clinical series report impaired consciousness and convulsions.",
        "Deaths and severe behavioral events have been reported."
      ],
      "beats": [
        "It can produce dissociation and altered consciousness.",
        "Clinical series report impaired consciousness and convulsions."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Deaths and severe behavioral events have been reported."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "diphenidine",
    "name": "Diphenidine",
    "aliases": [],
    "category": "Psychoactives",
    "className": "arylcyclohexylamine dissociative",
    "useContext": "Dissociative new psychoactive substance with no established medical or veterinary use.",
    "mechanism": "Dissociative substance with NMDA-receptor antagonist activity.",
    "effects": [
      "Can cause altered perception and hallucinations",
      "Can cause confusion and agitation"
    ],
    "risks": [
      "Analytically confirmed intoxication is reported",
      "Multiple-drug fatalities involving diphenidine are documented"
    ],
    "interactionNote": "Other dissociatives and sedatives may worsen impairment and toxicity.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Nonfatal diphenidine intoxication",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28597920/"
      }
    ],
    "scene": {
      "setting": "art-studio",
      "activity": "reading",
      "task": "reading",
      "prop": "book",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "tense",
      "timeCourse": "variable",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Looking through an art book before nonmedical dissociative exposure.",
      "responseNotes": [
        "It can cause altered perception and hallucinations.",
        "Confusion and agitation can occur."
      ],
      "riskNotes": [
        "Analytically confirmed intoxication has been reported.",
        "Mixed-drug fatalities involving diphenidine are documented."
      ],
      "beats": [
        "It can cause altered perception and hallucinations.",
        "Analytically confirmed intoxication has been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Mixed-drug fatalities involving diphenidine are documented."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "methoxphenidine-mxp",
    "name": "Methoxphenidine (MXP)",
    "aliases": [],
    "category": "Psychoactives",
    "className": "arylcyclohexylamine dissociative",
    "useContext": "Dissociative new psychoactive substance encountered in nonmedical use; no established clinical role.",
    "mechanism": "NMDA-receptor antagonist in the diarylethylamine dissociative class.",
    "effects": [
      "Can cause confusion and impaired awareness",
      "Human effects are poorly characterized"
    ],
    "risks": [
      "Analytically confirmed intoxication is reported",
      "Neurologic impairment can require hospital care"
    ],
    "interactionNote": "Co-ingestion with benzodiazepines or other depressants may deepen sedation.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Analytically diagnosed MXP intoxication",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28452234/"
      }
    ],
    "scene": {
      "setting": "listening-room",
      "activity": "rest",
      "task": "resting",
      "prop": "towel",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "neural",
      "organs": [],
      "cautions": [],
      "intent": "Taking a quiet break before exposure to a poorly characterized dissociative.",
      "responseNotes": [
        "It can cause confusion and impaired awareness.",
        "Human effects remain poorly characterized."
      ],
      "riskNotes": [
        "Analytically confirmed intoxication has been reported.",
        "Neurologic impairment can require hospital care."
      ],
      "beats": [
        "It can cause confusion and impaired awareness.",
        "Analytically confirmed intoxication has been reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Neurologic impairment can require hospital care."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "isotonitazene",
    "name": "Isotonitazene",
    "aliases": [],
    "category": "Psychoactives",
    "className": "synthetic opioid",
    "useContext": "Novel synthetic opioid identified in fatal nonmedical intoxications; no approved medical role.",
    "mechanism": "Benzimidazole-derived synthetic opioid with mu-opioid activity.",
    "effects": [
      "Can cause opioid-like sedation and analgesia",
      "No established therapeutic use"
    ],
    "risks": [
      "Three fatal intoxications are analytically documented",
      "Respiratory depression can be life-threatening"
    ],
    "interactionNote": "Opioids combined with benzodiazepines, alcohol, or sedatives increase respiratory-depression risk.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Three fatal isotonitazene intoxications",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33497988/"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "reading",
      "prop": "care-card",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "breathing",
      "organs": [],
      "cautions": [],
      "intent": "Checking information about an unknown nonmedical opioid product.",
      "responseNotes": [
        "It can cause opioid-like sedation and analgesia.",
        "A therapeutic use has not been established."
      ],
      "riskNotes": [
        "Three fatal intoxications were analytically documented.",
        "Respiratory depression can be life-threatening."
      ],
      "beats": [
        "It can cause opioid-like sedation and analgesia.",
        "Three fatal intoxications were analytically documented."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Respiratory depression can be life-threatening."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "n-pyrrolidino-protonitazene",
    "name": "N-pyrrolidino protonitazene",
    "aliases": [],
    "category": "Psychoactives",
    "className": "synthetic opioid",
    "useContext": "Novel nitazene opioid identified in a fatal forensic case; no approved medical role.",
    "mechanism": "Benzimidazole-derived synthetic opioid; in-vitro data suggest very high potency.",
    "effects": [
      "Can produce opioid-like effects",
      "Human clinical effects are poorly characterized"
    ],
    "risks": [
      "A fatal intoxication has been analytically documented",
      "Small exposure uncertainty can carry severe overdose risk"
    ],
    "interactionNote": "Other opioids and sedatives can compound respiratory depression.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal N-pyrrolidino protonitazene case",
        "url": "https://pubmed.ncbi.nlm.nih.gov/41107543/"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "reading",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading a forensic report on an unapproved nitazene opioid.",
      "responseNotes": [
        "It can produce opioid-like effects.",
        "Human clinical effects remain poorly characterized."
      ],
      "riskNotes": [
        "A fatal intoxication has been analytically documented.",
        "Exposure uncertainty can carry severe overdose risk."
      ],
      "beats": [
        "It can produce opioid-like effects.",
        "A fatal intoxication has been analytically documented."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Exposure uncertainty can carry severe overdose risk."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "5-mapb",
    "name": "5-MAPB",
    "aliases": [],
    "category": "Psychoactives",
    "className": "benzofuran entactogen",
    "useContext": "Novel psychoactive benzofuran encountered in nonmedical use; no established therapeutic role.",
    "mechanism": "N-methylated benzofuran stimulant with entactogen-like effects.",
    "effects": [
      "Can cause stimulant and entactogen effects",
      "Human effects remain poorly characterized"
    ],
    "risks": [
      "Acute toxicity with cardiovascular and neurologic signs is reported",
      "A fatal co-intoxication has been reported"
    ],
    "interactionNote": "Co-use with stimulants or serotonergic drugs may compound cardiovascular and neurologic risk.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Analytically confirmed 5-MAPB acute toxicity",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27156124/"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "rest",
      "task": "music",
      "prop": "headphones",
      "motif": "serotonin",
      "mechanismStyle": "modulate",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Beginning a listening break before nonmedical entactogenic exposure.",
      "responseNotes": [
        "It can produce stimulant and entactogenic effects.",
        "Human effects remain poorly characterized."
      ],
      "riskNotes": [
        "Acute cardiovascular and neurologic toxicity was reported.",
        "A fatal co-intoxication has been reported."
      ],
      "beats": [
        "It can produce stimulant and entactogenic effects.",
        "Acute cardiovascular and neurologic toxicity was reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "A fatal co-intoxication has been reported."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "2-methyl-ap-237",
    "name": "2-Methyl-AP-237",
    "aliases": [],
    "category": "Psychoactives",
    "className": "synthetic opioid",
    "useContext": "Novel synthetic opioid identified in fatal nonmedical intoxication; no approved medical role.",
    "mechanism": "Synthetic opioid with limited human pharmacology data.",
    "effects": [
      "Can produce opioid-like sedation",
      "Human therapeutic benefit is not established"
    ],
    "risks": [
      "A fatal intoxication involving the compound is reported",
      "Respiratory depression is a serious opioid-class hazard"
    ],
    "interactionNote": "Benzodiazepines, alcohol, and other depressants can worsen respiratory depression.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal 2-methyl-AP-237 intoxication",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37264551/"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "care",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "breathing",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing an unapproved opioid product in a self-treatment context.",
      "responseNotes": [
        "It can produce opioid-like sedation.",
        "A human therapeutic benefit has not been established."
      ],
      "riskNotes": [
        "A fatal intoxication involving the compound was reported.",
        "Respiratory depression is a serious opioid-class hazard."
      ],
      "beats": [
        "It can produce opioid-like sedation.",
        "A fatal intoxication involving the compound was reported."
      ],
      "asides": [
        "Product identity and co-exposures can change the effects.",
        "Respiratory depression is a serious opioid-class hazard."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "oxandrolone",
    "name": "Oxandrolone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Historical U.S. labels described adjunct use after severe weight loss. The OXANDRIN NDA approval was withdrawn in 2023; that label does not establish current U.S. availability or approval elsewhere.",
    "mechanism": "Androgenic anabolic steroid; synthetic androgen related to testosterone.",
    "effects": [
      "Historical labels described medical adjunct use",
      "No established athletic-performance benefit"
    ],
    "risks": [
      "Cholestatic hepatitis and jaundice may occur",
      "Edema and adverse lipid changes are label warnings"
    ],
    "interactionNote": "Can markedly increase warfarin effect; interaction is described in the historical label.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      },
      {
        "label": "DailyMed · Oxandrolone historical label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a6f42739-5bfc-4b76-8795-e93fa58f3d29"
      },
      {
        "label": "Federal Register · OXANDRIN NDA withdrawal (2023)",
        "url": "https://www.govinfo.gov/content/pkg/FR-2023-06-28/pdf/2023-13733.pdf"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "reading",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Reading a historical medical label for severe weight-loss care.",
      "responseNotes": [
        "Historical labels described selected medical weight recovery.",
        "Athletic enhancement benefit was not established."
      ],
      "riskNotes": [
        "Cholestatic hepatitis and jaundice may occur.",
        "Edema and adverse lipid changes are label warnings."
      ],
      "beats": [
        "Historical labels described selected medical weight recovery.",
        "Cholestatic hepatitis and jaundice may occur."
      ],
      "asides": [
        "The historical indication is separate from athletic enhancement.",
        "Edema and adverse lipid changes are label warnings."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "oxymetholone",
    "name": "Oxymetholone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Historical U.S. labels described use for selected anemias; a 2023 Federal Register notice states no FDA-approved product was commercially available.",
    "mechanism": "Synthetic anabolic androgen; historical medical indications do not establish current U.S. availability.",
    "effects": [
      "Historical labels described a role in selected anemia",
      "No established role for nonmedical physique enhancement"
    ],
    "risks": [
      "Liver injury and jaundice are recognized androgen-class concerns",
      "Androgenic effects may alter reproductive function"
    ],
    "interactionNote": "Co-use with other anabolic agents can compound liver, lipid, and cardiovascular risks.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      },
      {
        "label": "Federal Register · 2023 no commercially available FDA-approved product",
        "url": "https://www.govinfo.gov/content/pkg/FR-2023-01-26/html/2023-00957.htm"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "reading",
      "prop": "research-folder",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing historical androgen labeling for selected anemia.",
      "responseNotes": [
        "Historical labels described treatment for selected anemia.",
        "That does not establish safe nonmedical enhancement."
      ],
      "riskNotes": [
        "Liver injury and jaundice are recognized androgen-class concerns.",
        "Androgenic effects can alter reproductive function."
      ],
      "beats": [
        "Historical labels described treatment for selected anemia.",
        "Liver injury and jaundice are recognized androgen-class concerns."
      ],
      "asides": [
        "The archive does not establish a current enhancement use.",
        "Androgenic effects can alter reproductive function."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "methandrostenolone",
    "name": "Methandrostenolone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Anabolic steroid identified in U.S. law-enforcement encounters; no FDA-approved U.S. indication for performance enhancement.",
    "mechanism": "Synthetic anabolic-androgenic steroid related to testosterone.",
    "effects": [
      "Sought in nonmedical settings for muscle and performance claims",
      "Evidence does not establish safe performance enhancement"
    ],
    "risks": [
      "Class reports include liver, heart, and mood harms",
      "Severe outcomes are reported with unregulated products"
    ],
    "interactionNote": "Unregulated products may contain additional active drugs, making interactions unpredictable.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "checklist",
      "prop": "notebook",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Checking physique claims against anabolic-steroid safety information.",
      "responseNotes": [
        "Nonmedical users seek muscle and performance effects.",
        "Evidence does not establish safe performance enhancement."
      ],
      "riskNotes": [
        "Class reports include liver, heart, and mood harms.",
        "Severe outcomes are reported with unregulated products."
      ],
      "beats": [
        "Nonmedical users seek muscle and performance effects.",
        "Class reports include liver, heart, and mood harms."
      ],
      "asides": [
        "Class-level harms remain part of the nonmedical-use context.",
        "Severe outcomes are reported with unregulated products."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "boldenone",
    "name": "Boldenone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Anabolic steroid identified in U.S. law-enforcement encounters; no FDA-approved U.S. human indication for physique enhancement.",
    "mechanism": "Synthetic anabolic-androgenic steroid with veterinary and illicit contexts.",
    "effects": [
      "Encountered in nonmedical performance-enhancement settings",
      "Human efficacy and safety are not established"
    ],
    "risks": [
      "Class reports include heart, liver, and psychiatric harms",
      "Hormonal and fertility effects can occur with anabolic steroids"
    ],
    "interactionNote": "Human interaction data are sparse; co-use with other anabolic products adds uncertainty.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "reading",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "hormones",
      "organs": [],
      "cautions": [],
      "intent": "Reading a nonmedical performance claim and its fertility concerns.",
      "responseNotes": [
        "It is encountered in nonmedical enhancement settings.",
        "Human effectiveness and safety are not established."
      ],
      "riskNotes": [
        "Class reports include heart, liver, and psychiatric harms.",
        "Anabolic steroids can affect hormones and fertility."
      ],
      "beats": [
        "It is encountered in nonmedical enhancement settings.",
        "Class reports include heart, liver, and psychiatric harms."
      ],
      "asides": [
        "Human enhancement safety is not established.",
        "Anabolic steroids can affect hormones and fertility."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "trenbolone",
    "name": "Trenbolone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Anabolic steroid identified in U.S. law-enforcement encounters; no FDA-approved U.S. human indication for performance enhancement.",
    "mechanism": "Potent synthetic anabolic-androgenic steroid; human clinical evidence is sparse.",
    "effects": [
      "Nonmedical use is associated with muscle and physique goals",
      "Human medical benefit is not established"
    ],
    "risks": [
      "Anabolic steroid misuse is linked to cardiac and liver harm",
      "Mood and reproductive effects are reported at class level"
    ],
    "interactionNote": "Human interaction data are limited; unregulated co-products increase uncertainty.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "writing",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Writing questions about a nonmedical physique-enhancement claim.",
      "responseNotes": [
        "Nonmedical users seek muscle and physique effects.",
        "A human medical benefit has not been established."
      ],
      "riskNotes": [
        "Steroid misuse is linked to cardiac and liver harm.",
        "Mood and reproductive effects are reported at class level."
      ],
      "beats": [
        "Nonmedical users seek muscle and physique effects.",
        "Steroid misuse is linked to cardiac and liver harm."
      ],
      "asides": [
        "The notes include class-level cardiac and liver harms.",
        "Mood and reproductive effects are reported at class level."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "fluoxymesterone",
    "name": "Fluoxymesterone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "U.S. prescription label describes androgen replacement in selected conditions; it explicitly says it is not established for athletic enhancement.",
    "mechanism": "Oral androgenic anabolic steroid.",
    "effects": [
      "Can replace androgen activity in selected diagnosed conditions",
      "Not shown safe and effective for athletic-performance enhancement"
    ],
    "risks": [
      "Cholestatic hepatitis and jaundice may occur",
      "Edema and hepatic tumors are serious label concerns"
    ],
    "interactionNote": "Liver disease and other androgen therapy can increase safety concerns; review the full label.",
    "evidence": "Moderate",
    "status": "prescription",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      },
      {
        "label": "DailyMed · Fluoxymesterone historical label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=09bafc2d-1893-4618-86dc-e9403407cd41"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "care",
      "task": "care-card",
      "prop": "care-card",
      "motif": "hormone",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing a medical androgen-replacement care sheet.",
      "responseNotes": [
        "It can replace androgen activity in selected diagnosed care.",
        "Athletic enhancement is not established as safe or effective."
      ],
      "riskNotes": [
        "Cholestatic hepatitis and jaundice may occur.",
        "Edema and hepatic tumors are serious label concerns."
      ],
      "beats": [
        "It can replace androgen activity in selected diagnosed care.",
        "Cholestatic hepatitis and jaundice may occur."
      ],
      "asides": [
        "The labeled context is diagnosed androgen-replacement care.",
        "Edema and hepatic tumors are serious label concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "drostanolone",
    "name": "Drostanolone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Synthetic anabolic steroid reported in performance-enhancement contexts; no FDA-approved U.S. human indication for that use.",
    "mechanism": "Dihydrotestosterone-derived anabolic-androgenic steroid.",
    "effects": [
      "No established clinical benefit for nonmedical muscle enhancement",
      "Human evidence is limited and context-dependent"
    ],
    "risks": [
      "Anabolic steroid class is linked to adverse lipids and cardiac risk",
      "Mood, liver, and reproductive harms are reported for misuse"
    ],
    "interactionNote": "Compound-specific interactions are poorly characterized; class co-use may compound risk.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "organizer",
      "prop": "research-folder",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "metabolic",
      "organs": [],
      "cautions": [],
      "intent": "Organizing evidence behind an anabolic-steroid physique claim.",
      "responseNotes": [
        "Nonmedical physique claims lack established clinical benefit.",
        "Human evidence is limited and context-dependent."
      ],
      "riskNotes": [
        "Steroid-class risks include adverse lipids and cardiac harm.",
        "Misuse carries reported mood, liver, and reproductive harms."
      ],
      "beats": [
        "Nonmedical physique claims lack established clinical benefit.",
        "Steroid-class risks include adverse lipids and cardiac harm."
      ],
      "asides": [
        "Class risks do not establish a compound-specific injury rate.",
        "Misuse carries reported mood, liver, and reproductive harms."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "methenolone",
    "name": "Methenolone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Synthetic anabolic steroid encountered in nonmedical performance-enhancement settings; no FDA-approved U.S. use for that purpose.",
    "mechanism": "Anabolic-androgenic steroid related to dihydrotestosterone.",
    "effects": [
      "No established clinical benefit for nonmedical physique enhancement",
      "Human safety evidence is limited"
    ],
    "risks": [
      "Anabolic steroid misuse can harm heart and liver",
      "Endocrine suppression and fertility effects are class concerns"
    ],
    "interactionNote": "Human interaction evidence is limited; co-use with other androgenic agents adds risk.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "planning",
      "prop": "calendar",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "hormones",
      "organs": [],
      "cautions": [],
      "intent": "Planning an evidence discussion about a nonmedical physique claim.",
      "responseNotes": [
        "Nonmedical physique enhancement has no established benefit.",
        "Human safety evidence remains limited."
      ],
      "riskNotes": [
        "Steroid misuse can harm the heart and liver.",
        "Endocrine suppression and fertility effects are class concerns."
      ],
      "beats": [
        "Nonmedical physique enhancement has no established benefit.",
        "Steroid misuse can harm the heart and liver."
      ],
      "asides": [
        "Suppression and fertility concerns remain part of the review.",
        "Endocrine suppression and fertility effects are class concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "mesterolone",
    "name": "Mesterolone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Androgenic steroid used medically in some countries; the specific approval status varies by jurisdiction.",
    "mechanism": "Oral androgen derived from dihydrotestosterone.",
    "effects": [
      "Therapeutic uses are country-specific and do not establish enhancement benefit",
      "Nonmedical performance use lacks reliable evidence"
    ],
    "risks": [
      "Androgenic adverse effects may affect skin and reproductive function",
      "Long-term safety outside indicated care is uncertain"
    ],
    "interactionNote": "Review interactions with other hormone-active medicines; product-specific data are limited.",
    "evidence": "Limited",
    "status": "experimental",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      }
    ],
    "scene": {
      "setting": "clinic",
      "activity": "research",
      "task": "writing",
      "prop": "notebook",
      "motif": "hormone",
      "mechanismStyle": "uncertain",
      "response": "uncertain",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "hormones",
      "organs": [],
      "cautions": [],
      "intent": "Noting country-specific medical uses and separate enhancement claims.",
      "responseNotes": [
        "Medical uses depend on the country and indication.",
        "They do not establish a nonmedical enhancement benefit."
      ],
      "riskNotes": [
        "Androgenic effects may affect skin and reproduction.",
        "Long-term safety outside indicated care remains uncertain."
      ],
      "beats": [
        "Medical uses depend on the country and indication.",
        "Androgenic effects may affect skin and reproduction."
      ],
      "asides": [
        "Country-specific indications do not prove enhancement benefit.",
        "Long-term safety outside indicated care remains uncertain."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "mibolerone",
    "name": "Mibolerone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Synthetic androgen with no FDA-approved human therapeutic indication; encountered in nonmedical bodybuilding settings.",
    "mechanism": "Potent androgen-receptor agonist used in veterinary contexts.",
    "effects": [
      "No established human therapeutic benefit",
      "Human safety and efficacy evidence are very limited"
    ],
    "risks": [
      "Potential liver toxicity is a concern for oral anabolic steroids",
      "Androgenic and reproductive effects are plausible class risks"
    ],
    "interactionNote": "Human interaction data are absent or very limited; combining agents raises uncertainty.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "checklist",
      "prop": "care-card",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Checking safety information for an androgen without an approved human role.",
      "responseNotes": [
        "A human therapeutic benefit has not been established.",
        "Human safety and efficacy evidence are very limited."
      ],
      "riskNotes": [
        "Liver toxicity is a concern for oral anabolic steroids.",
        "Androgenic and reproductive class effects are concerns."
      ],
      "beats": [
        "A human therapeutic benefit has not been established.",
        "Liver toxicity is a concern for oral anabolic steroids."
      ],
      "asides": [
        "Limited human evidence leaves serious class concerns unresolved.",
        "Androgenic and reproductive class effects are concerns."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "stenbolone",
    "name": "Stenbolone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Anabolic steroid listed by U.S. authorities among controlled anabolic agents; no FDA-approved performance-enhancement use.",
    "mechanism": "Synthetic anabolic-androgenic steroid.",
    "effects": [
      "Nonmedical use is associated with physique and performance claims",
      "Human benefits have not been established in controlled evidence"
    ],
    "risks": [
      "Class warnings include liver, cardiovascular, and psychiatric harms",
      "Hormonal suppression and fertility effects are possible"
    ],
    "interactionNote": "Interactions with other androgenic or hepatotoxic products are poorly characterized.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "organizer",
      "prop": "notebook",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "hormones",
      "organs": [],
      "cautions": [],
      "intent": "Organizing notes about a controlled anabolic agent's physique claims.",
      "responseNotes": [
        "Nonmedical users seek physique and performance effects.",
        "Controlled evidence has not established human benefit."
      ],
      "riskNotes": [
        "Class warnings include liver, heart, and psychiatric harms.",
        "Hormonal suppression and fertility effects are possible."
      ],
      "beats": [
        "Nonmedical users seek physique and performance effects.",
        "Class warnings include liver, heart, and psychiatric harms."
      ],
      "asides": [
        "The notes distinguish marketing from demonstrated benefit.",
        "Hormonal suppression and fertility effects are possible."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "chlorodehydromethyltestosterone",
    "name": "Chlorodehydromethyltestosterone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Synthetic anabolic steroid known as Oral Turinabol; no FDA-approved U.S. performance-enhancement use.",
    "mechanism": "17α-alkylated anabolic-androgenic steroid related to testosterone.",
    "effects": [
      "No established therapeutic benefit for nonmedical enhancement",
      "Human evidence is limited; anti-doping records document illicit use"
    ],
    "risks": [
      "17α-alkylated androgens can cause cholestatic liver injury",
      "Anabolic steroid misuse is linked to cardiovascular and mood harms"
    ],
    "interactionNote": "Potential liver interactions and co-use risks are poorly characterized.",
    "evidence": "Limited",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DEA · Steroids fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "FDA · Bodybuilding products can be risky",
        "url": "https://www.fda.gov/consumers/consumer-updates/caution-bodybuilding-products-can-be-risky"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "writing",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "unknown",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Writing an evidence summary about an illicit performance-enhancement agent.",
      "responseNotes": [
        "Nonmedical enhancement has no established therapeutic benefit.",
        "Human evidence is limited; anti-doping records document use."
      ],
      "riskNotes": [
        "17-alpha-alkylated androgens can cause cholestatic liver injury.",
        "Steroid misuse is linked to cardiovascular and mood harms."
      ],
      "beats": [
        "Nonmedical enhancement has no established therapeutic benefit.",
        "17-alpha-alkylated androgens can cause cholestatic liver injury."
      ],
      "asides": [
        "Anti-doping records do not establish a safe therapeutic use.",
        "Steroid misuse is linked to cardiovascular and mood harms."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "creatine",
    "name": "Creatine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "creatine compound",
    "useContext": "Dietary supplement used around strength and repeated high-intensity training; healthy people also obtain it from food and endogenous synthesis.",
    "mechanism": "Muscle energy-buffering compound involved in rapid ATP regeneration.",
    "effects": [
      "Can improve repeated short-burst strength and power",
      "Benefit varies by person and activity"
    ],
    "risks": [
      "Water-related weight gain can occur",
      "GI distress, cramps, or stiffness are reported"
    ],
    "interactionNote": "May affect kidney test interpretation; review use with a clinician in kidney disease.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · Creatine section",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "training",
      "task": "stretching",
      "prop": "stretch-band",
      "motif": "nutrition",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "fluid",
      "organs": [],
      "cautions": [],
      "intent": "Preparing a normal training session while reviewing a creatine supplement.",
      "responseNotes": [
        "Repeated short-burst strength and power may improve.",
        "Benefit depends on the person and activity."
      ],
      "riskNotes": [
        "Water-related weight gain can occur.",
        "Digestive distress, cramps, or stiffness are reported."
      ],
      "beats": [
        "Repeated short-burst strength and power may improve.",
        "Water-related weight gain can occur."
      ],
      "asides": [
        "Research concerns repeated short efforts, not instant growth.",
        "Digestive distress, cramps, or stiffness are reported."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "beta-alanine",
    "name": "Beta-alanine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "amino-acid supplement",
    "useContext": "Sports supplement studied for short, intense intermittent exercise; not a substitute for adequate nutrition.",
    "mechanism": "Amino acid precursor used by muscle to synthesize carnosine.",
    "effects": [
      "May modestly help some short intermittent activities",
      "Evidence differs across sports and people"
    ],
    "risks": [
      "Can cause tingling or prickling sensations",
      "Long-term daily safety is not well established"
    ],
    "interactionNote": "No well-established drug interaction signal; long-term safety evidence remains limited.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · Beta-alanine section",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "training",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "nutrition",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "neural",
      "organs": [],
      "cautions": [],
      "intent": "Checking a training plan before considering a short-effort sports supplement.",
      "responseNotes": [
        "Some short, intense activities may improve modestly.",
        "The evidence differs across sports and people."
      ],
      "riskNotes": [
        "Tingling or prickling sensations can occur.",
        "Long-term daily safety is not well established."
      ],
      "beats": [
        "Some short, intense activities may improve modestly.",
        "Tingling or prickling sensations can occur."
      ],
      "asides": [
        "The evidence varies across activities and people.",
        "Long-term daily safety is not well established."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "citrulline",
    "name": "Citrulline",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "amino-acid supplement",
    "useContext": "Supplement promoted for exercise performance; NIH ODS describes performance evidence as limited.",
    "mechanism": "Amino acid converted in the kidney to arginine and then nitric oxide.",
    "effects": [
      "Performance effects may be positive, null, or negative",
      "Evidence is insufficient for a reliable benefit"
    ],
    "risks": [
      "May cause stomach discomfort",
      "Long-term safety is not well established"
    ],
    "interactionNote": "Blood-pressure effects with other vasodilators are not well characterized.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · Citrulline section",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "reading",
      "prop": "book",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [],
      "intent": "Reading performance evidence beside an ordinary workout plan.",
      "responseNotes": [
        "Performance results can be positive, absent, or negative.",
        "Evidence does not establish a reliable performance benefit."
      ],
      "riskNotes": [
        "Stomach discomfort may occur.",
        "Long-term safety is not well established."
      ],
      "beats": [
        "Performance results can be positive, absent, or negative.",
        "Stomach discomfort may occur."
      ],
      "asides": [
        "A blood-flow claim does not establish performance benefit.",
        "Long-term safety is not well established."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "l-arginine",
    "name": "L-arginine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "amino-acid supplement",
    "useContext": "Supplement promoted for exercise performance and blood flow; dietary protein also provides arginine.",
    "mechanism": "Amino acid precursor for nitric oxide synthesis.",
    "effects": [
      "Studies show little to no exercise-strength benefit",
      "Exercise-performance evidence remains limited"
    ],
    "risks": [
      "May cause GI discomfort",
      "Can slightly lower blood pressure"
    ],
    "interactionNote": "May add to blood-pressure lowering from antihypertensive medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · Arginine section",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "care-card",
      "prop": "care-card",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "pressure",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing an amino-acid supplement label before a workout.",
      "responseNotes": [
        "Studies find little or no improvement in exercise strength.",
        "Performance-benefit evidence remains limited."
      ],
      "riskNotes": [
        "Digestive discomfort may occur.",
        "Blood pressure can decrease slightly."
      ],
      "beats": [
        "Studies find little or no improvement in exercise strength.",
        "Digestive discomfort may occur."
      ],
      "asides": [
        "Trials show little or no strength benefit.",
        "Blood pressure can decrease slightly."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "betaine",
    "name": "Betaine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "methyl donor supplement",
    "useContext": "Supplement studied for strength and power performance; normal foods also provide betaine.",
    "mechanism": "Trimethylglycine involved in one-carbon metabolism and methyl donation.",
    "effects": [
      "Small studies show no or modest performance changes",
      "Benefits beyond diet are unproven"
    ],
    "risks": [
      "Safety evidence is insufficient for certainty",
      "Short studies have reported few side effects"
    ],
    "interactionNote": "Drug interaction data are sparse; co-use safety has not been well evaluated.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · Betaine section",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "training",
      "task": "writing",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Updating a training notebook while comparing betaine supplement claims.",
      "responseNotes": [
        "Small studies find no or modest performance changes.",
        "Benefits beyond ordinary diet remain unproven."
      ],
      "riskNotes": [
        "Safety evidence is insufficient for certainty.",
        "Short studies have reported few side effects."
      ],
      "beats": [
        "Small studies find no or modest performance changes.",
        "Safety evidence is insufficient for certainty."
      ],
      "asides": [
        "Small performance studies leave the benefit uncertain.",
        "Short studies have reported few side effects."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "beta-hydroxy-beta-methylbutyrate-hmb",
    "name": "Beta-hydroxy-beta-methylbutyrate (HMB)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "leucine metabolite supplement",
    "useContext": "Supplement studied for recovery after strenuous exercise; marketed use does not establish a general performance benefit.",
    "mechanism": "Metabolite formed from the essential amino acid leucine.",
    "effects": [
      "May support recovery after muscle-damaging exercise",
      "Performance benefit is uncertain"
    ],
    "risks": [
      "Short studies reported few adverse effects",
      "Long-term safety evidence is limited"
    ],
    "interactionNote": "Calcium-containing product variants can affect total calcium intake; review concurrent supplements.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · HMB section",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "research",
      "task": "stretching",
      "prop": "stretch-band",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Preparing a comfortable movement while reading recovery-supplement claims.",
      "responseNotes": [
        "Recovery after muscle-damaging exercise may improve.",
        "A general performance benefit remains uncertain."
      ],
      "riskNotes": [
        "Short studies have reported few adverse effects.",
        "Long-term safety evidence remains limited."
      ],
      "beats": [
        "Recovery after muscle-damaging exercise may improve.",
        "Short studies have reported few adverse effects."
      ],
      "asides": [
        "Recovery findings do not establish a general performance gain.",
        "Long-term safety evidence remains limited."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "l-glutamine",
    "name": "L-glutamine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "amino-acid supplement",
    "useContext": "Amino acid found in protein foods and made by the body; supplements are promoted for exercise recovery.",
    "mechanism": "Conditionally essential amino acid used in energy and nitrogen metabolism.",
    "effects": [
      "Exercise studies show no or only small benefit",
      "Adequate dietary protein supplies glutamine"
    ],
    "risks": [
      "Short trials report few side effects",
      "Long-term supplement safety is less certain"
    ],
    "interactionNote": "No medication interactions have been reported in the cited NIH review.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · Glutamine section",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "meal",
      "task": "meal-log",
      "prop": "clipboard",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Recording protein-containing meals while comparing glutamine supplement claims.",
      "responseNotes": [
        "Exercise studies find no benefit or only a small benefit.",
        "Adequate dietary protein supplies glutamine."
      ],
      "riskNotes": [
        "Short trials have reported few side effects.",
        "Long-term supplement safety is less certain."
      ],
      "beats": [
        "Exercise studies find no benefit or only a small benefit.",
        "Short trials have reported few side effects."
      ],
      "asides": [
        "Ordinary dietary protein already supplies glutamine.",
        "Long-term supplement safety is less certain."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "dehydroepiandrosterone-dhea",
    "name": "Dehydroepiandrosterone (DHEA)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "steroid hormone supplement",
    "useContext": "Adrenal steroid hormone marketed as a supplement; U.S. athletic-enhancement claims lack supporting evidence.",
    "mechanism": "Endogenous adrenal hormone and precursor to sex steroids.",
    "effects": [
      "Small exercise studies found no performance benefit",
      "Supplement can alter androgen and estrogen exposure"
    ],
    "risks": [
      "May cause acne or facial hair growth",
      "Long-term safety is not established"
    ],
    "interactionNote": "May interact with hormone-sensitive conditions and hormone-active medicines.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · DHEA section",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-Consumer/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "reading",
      "prop": "care-card",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "skin",
      "organs": [],
      "cautions": [],
      "intent": "Reading a hormone-supplement label promoted for athletic enhancement.",
      "responseNotes": [
        "Small exercise studies found no performance benefit.",
        "Supplement use can alter androgen and estrogen exposure."
      ],
      "riskNotes": [
        "Acne or facial-hair growth may occur.",
        "Long-term safety is not established."
      ],
      "beats": [
        "Small exercise studies found no performance benefit.",
        "Acne or facial-hair growth may occur."
      ],
      "asides": [
        "Small exercise studies did not establish a performance benefit.",
        "Long-term safety is not established."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "l-leucine",
    "name": "L-leucine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "essential amino acid",
    "useContext": "Dietary amino acid in complete protein; also sold alone or in branched-chain amino-acid mixtures.",
    "mechanism": "Essential branched-chain amino acid used in protein synthesis.",
    "effects": [
      "Dietary protein supports muscle maintenance and repair",
      "Extra leucine benefit beyond adequate protein is unclear"
    ],
    "risks": [
      "Supplement-specific safety evidence is limited",
      "Large amino-acid mixtures may unbalance nutrient intake"
    ],
    "interactionNote": "Co-use with other amino-acid products can duplicate intake; medication interaction data are sparse.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · BCAA and protein sections",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "meal-log",
      "prop": "notebook",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Recording protein foods before considering isolated leucine.",
      "responseNotes": [
        "Dietary protein supports muscle maintenance and repair.",
        "Extra leucine benefit beyond adequate protein is unclear."
      ],
      "riskNotes": [
        "Supplement-specific safety evidence is limited.",
        "Large amino-acid mixtures may unbalance nutrient intake."
      ],
      "beats": [
        "Dietary protein supports muscle maintenance and repair.",
        "Supplement-specific safety evidence is limited."
      ],
      "asides": [
        "Adequate protein and extra isolated amino acids differ.",
        "Large amino-acid mixtures may unbalance nutrient intake."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "l-isoleucine",
    "name": "L-isoleucine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "essential amino acid",
    "useContext": "Essential dietary amino acid commonly sold in branched-chain amino-acid mixtures.",
    "mechanism": "Branched-chain essential amino acid incorporated into protein.",
    "effects": [
      "Part of normal dietary protein requirements",
      "Extra supplementation has no established standalone performance benefit"
    ],
    "risks": [
      "Isolated high supplemental intake is not well studied",
      "BCAA product safety evidence is limited"
    ],
    "interactionNote": "Co-use with other amino-acid supplements can duplicate intake; interaction data are sparse.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · BCAA and protein sections",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "kitchen",
      "activity": "care",
      "task": "checklist",
      "prop": "clipboard",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Checking a meal plan while reviewing a branched-chain amino-acid product.",
      "responseNotes": [
        "Isoleucine is part of normal dietary protein requirements.",
        "Extra supplementation has no established standalone benefit."
      ],
      "riskNotes": [
        "Isolated high supplemental intake is not well studied.",
        "BCAA-product safety evidence remains limited."
      ],
      "beats": [
        "Isoleucine is part of normal dietary protein requirements.",
        "Isolated high supplemental intake is not well studied."
      ],
      "asides": [
        "Standalone performance benefit has not been established.",
        "BCAA-product safety evidence remains limited."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "l-valine",
    "name": "L-valine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "essential amino acid",
    "useContext": "Essential dietary amino acid commonly sold in branched-chain amino-acid mixtures.",
    "mechanism": "Branched-chain essential amino acid incorporated into protein.",
    "effects": [
      "Part of normal dietary protein requirements",
      "Extra supplementation has no established standalone performance benefit"
    ],
    "risks": [
      "Isolated high supplemental intake is not well studied",
      "BCAA product safety evidence is limited"
    ],
    "interactionNote": "Co-use with other amino-acid supplements can duplicate intake; interaction data are sparse.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · BCAA and protein sections",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "reading",
      "task": "reading",
      "prop": "care-card",
      "motif": "nutrition",
      "mechanismStyle": "replace",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading a nutrition card before considering an isolated amino-acid supplement.",
      "responseNotes": [
        "Valine is part of normal dietary protein requirements.",
        "Extra supplementation has no established standalone benefit."
      ],
      "riskNotes": [
        "Isolated high supplemental intake is not well studied.",
        "BCAA-product safety evidence remains limited."
      ],
      "beats": [
        "Valine is part of normal dietary protein requirements.",
        "Isolated high supplemental intake is not well studied."
      ],
      "asides": [
        "A dietary role does not establish extra performance benefit.",
        "BCAA-product safety evidence remains limited."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "coenzyme-q10",
    "name": "Coenzyme Q10",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "endogenous coenzyme supplement",
    "useContext": "Supplement studied for several conditions; evidence does not support a meaningful blood-pressure or Parkinson symptom benefit.",
    "mechanism": "Endogenous coenzyme involved in mitochondrial electron transport.",
    "effects": [
      "Clinical benefits remain uncertain for many conditions",
      "Supplementation does not improve Parkinson symptoms"
    ],
    "risks": [
      "May cause digestive upset or insomnia",
      "Cancer-treatment compatibility is uncertain"
    ],
    "interactionNote": "May interact with warfarin and insulin; discuss with a clinician.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "NCCIH · Coenzyme Q10",
        "url": "https://www.nccih.nih.gov/health/coenzyme-q10"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "care",
      "task": "writing",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [],
      "intent": "Writing questions about a supplement promoted for several health conditions.",
      "responseNotes": [
        "Clinical benefit remains uncertain for many conditions.",
        "Supplementation does not improve Parkinson symptoms."
      ],
      "riskNotes": [
        "Digestive upset or insomnia may occur.",
        "Compatibility with cancer treatment remains uncertain."
      ],
      "beats": [
        "Clinical benefit remains uncertain for many conditions.",
        "Digestive upset or insomnia may occur."
      ],
      "asides": [
        "The claims require condition-specific evidence.",
        "Compatibility with cancer treatment remains uncertain."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "l-carnitine",
    "name": "L-carnitine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "amino-acid derivative supplement",
    "useContext": "Supplement marketed for exercise performance and metabolism; human performance findings are mixed.",
    "mechanism": "Amino-acid derivative that transports long-chain fatty acids into mitochondria.",
    "effects": [
      "Exercise-performance results are mixed",
      "A fat-burning benefit is not established"
    ],
    "risks": [
      "Can cause nausea, diarrhea, or fishy body odor",
      "TMAO and cardiovascular implications remain uncertain"
    ],
    "interactionNote": "May interact with anticoagulants and thyroid hormone; review current medicines.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · Carnitine",
        "url": "https://ods.od.nih.gov/factsheets/Carnitine-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "reading",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "nausea",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [],
      "intent": "Reading a fat-burning supplement claim before an ordinary training session.",
      "responseNotes": [
        "Exercise-performance studies have mixed results.",
        "A fat-burning benefit has not been established."
      ],
      "riskNotes": [
        "Nausea, diarrhea, or fishy body odor can occur.",
        "TMAO-related cardiovascular implications remain uncertain."
      ],
      "beats": [
        "Exercise-performance studies have mixed results.",
        "Nausea, diarrhea, or fishy body odor can occur."
      ],
      "asides": [
        "Human performance findings are mixed.",
        "TMAO-related cardiovascular implications remain uncertain."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "n-acetylcysteine-nac",
    "name": "N-acetylcysteine (NAC)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "Oral NAC supplement",
    "useContext": "U.S. FDA-approved drug for specific medical uses and also sold in some supplement products.",
    "mechanism": "Cysteine derivative with mucolytic activity and glutathione-precursor role.",
    "effects": [
      "Can thin respiratory mucus in medical use",
      "Oral supplement benefits depend on condition and remain uncertain"
    ],
    "risks": [
      "Oral use can cause nausea or abdominal discomfort",
      "Inhaled forms can cause airway irritation"
    ],
    "interactionNote": "Can add to anticoagulant or blood-pressure effects; nitroglycerin may increase hypotension and headache.",
    "evidence": "Strong",
    "status": "supplement",
    "sources": [
      {
        "label": "ODS · N-acetylcysteine section",
        "url": "https://ods.od.nih.gov/factsheets/ImmuneFunction-HealthProfessional/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "organizer",
      "prop": "care-card",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "gut",
      "organs": [],
      "cautions": [],
      "intent": "Organizing questions about an oral NAC supplement and its uncertain condition-specific benefits.",
      "responseNotes": [
        "Oral supplement benefits depend on the condition studied.",
        "A general supplement benefit remains uncertain."
      ],
      "riskNotes": [
        "Oral use can cause nausea or abdominal discomfort.",
        "Safety findings depend on the selected formulation and route."
      ],
      "beats": [
        "Oral supplement benefits depend on the condition studied.",
        "Oral use can cause nausea or abdominal discomfort."
      ],
      "asides": [
        "Medical uses do not establish a general supplement benefit.",
        "Safety findings depend on the selected formulation and route."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "l-theanine",
    "name": "L-theanine",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "tea-derived amino acid supplement",
    "useContext": "Supplement studied for stress and attention; current human trials are small and effects remain context-specific.",
    "mechanism": "Tea-derived amino acid with proposed glutamatergic and other CNS actions.",
    "effects": [
      "Trials suggest a short-term attention signal",
      "Stress effects are modest and uncertain"
    ],
    "risks": [
      "No serious adverse events in reviewed trials",
      "Long-term safety is not established"
    ],
    "interactionNote": "Potential additive sedation with CNS depressants has not been well studied.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "PubMed · Randomized-trial systematic review",
        "url": "https://pubmed.ncbi.nlm.nih.gov/42410082/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "reading",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Returning to study notes while reviewing an attention-supplement claim.",
      "responseNotes": [
        "Small trials suggest a short-term attention signal.",
        "Stress-related effects are modest and uncertain."
      ],
      "riskNotes": [
        "Reviewed trials reported no serious adverse events.",
        "Long-term safety is not established."
      ],
      "beats": [
        "Small trials suggest a short-term attention signal.",
        "Reviewed trials reported no serious adverse events."
      ],
      "asides": [
        "The human trials are small and context-specific.",
        "Long-term safety is not established."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "nicotinamide-mononucleotide-nmn",
    "name": "Nicotinamide mononucleotide (NMN)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "NAD precursor supplement",
    "useContext": "Supplement marketed for aging and metabolism; human trials have not established broad clinical benefits.",
    "mechanism": "NAD precursor involved in cellular redox metabolism.",
    "effects": [
      "Short trials show changes in NAD-related biomarkers",
      "Clinical disease-prevention benefits are unproven"
    ],
    "risks": [
      "Small trials provide limited long-term safety data",
      "Long-term effects remain uncertain"
    ],
    "interactionNote": "Medication interactions are not well characterized; human research remains early.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "PubMed · Randomized NMN safety trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/36002548/"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "research",
      "task": "research-notes",
      "prop": "notebook",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Taking notes on NAD-related biomarkers and aging-supplement claims.",
      "responseNotes": [
        "Short trials show changes in NAD-related biomarkers.",
        "Clinical disease-prevention benefits remain unproven."
      ],
      "riskNotes": [
        "Small trials provide limited long-term safety information.",
        "Long-term effects remain uncertain."
      ],
      "beats": [
        "Short trials show changes in NAD-related biomarkers.",
        "Small trials provide limited long-term safety information."
      ],
      "asides": [
        "A changed biomarker is not a proven disease-prevention benefit.",
        "Long-term effects remain uncertain."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "nicotinamide-riboside",
    "name": "Nicotinamide riboside",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "NAD precursor supplement",
    "useContext": "Supplement studied as an NAD precursor; human trials have not established a broad disease-modifying benefit.",
    "mechanism": "Nicotinamide-derived precursor to NAD metabolism.",
    "effects": [
      "Raises blood NAD-related metabolites in trials",
      "Metabolic and clinical benefits remain uncertain"
    ],
    "risks": [
      "Short-term trials reported no major adverse-event difference",
      "Long-term safety and clinical value remain uncertain"
    ],
    "interactionNote": "Drug interaction evidence is limited; review use when taking multiple supplements.",
    "evidence": "Moderate",
    "status": "supplement",
    "sources": [
      {
        "label": "PubMed · Randomized NR safety trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31278280/"
      }
    ],
    "scene": {
      "setting": "laboratory",
      "activity": "research",
      "task": "reading",
      "prop": "care-card",
      "motif": "nutrition",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Reading a human-trial summary about an NAD precursor.",
      "responseNotes": [
        "Trials show increases in blood NAD-related metabolites.",
        "Metabolic and clinical benefits remain uncertain."
      ],
      "riskNotes": [
        "Short trials found no major adverse-event difference.",
        "Long-term safety and clinical value remain uncertain."
      ],
      "beats": [
        "Trials show increases in blood NAD-related metabolites.",
        "Short trials found no major adverse-event difference."
      ],
      "asides": [
        "The trial biomarkers leave broader clinical value uncertain.",
        "Long-term safety and clinical value remain uncertain."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "s-adenosyl-l-methionine-same",
    "name": "S-adenosyl-L-methionine (SAMe)",
    "aliases": [],
    "category": "Vitamins & herbs",
    "className": "methyl donor supplement",
    "useContext": "Supplement studied as a mood and joint-health product; a small depression trial did not meet its primary statistical outcome.",
    "mechanism": "Endogenous methyl donor involved in transmethylation reactions.",
    "effects": [
      "Pilot depression trial showed no significant primary outcome",
      "Clinical benefit remains uncertain"
    ],
    "risks": [
      "Short trial was well tolerated",
      "Long-term supplement safety is not established"
    ],
    "interactionNote": "Combining with antidepressants or other mood-active medicines may have uncertain effects.",
    "evidence": "Limited",
    "status": "supplement",
    "sources": [
      {
        "label": "PubMed · Randomized SAMe depression trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/31712971/"
      }
    ],
    "scene": {
      "setting": "living-room",
      "activity": "research",
      "task": "writing",
      "prop": "clipboard",
      "motif": "uncertainty",
      "mechanismStyle": "uncertain",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "uncertainty",
      "organs": [],
      "cautions": [],
      "intent": "Writing questions about a supplement promoted for mood and joint health.",
      "responseNotes": [
        "A pilot depression trial missed its primary outcome.",
        "Clinical benefit remains uncertain."
      ],
      "riskNotes": [
        "The short trial was well tolerated.",
        "Long-term supplement safety is not established."
      ],
      "beats": [
        "A pilot depression trial missed its primary outcome.",
        "The short trial was well tolerated."
      ],
      "asides": [
        "The cited pilot trial did not meet its primary outcome.",
        "Long-term supplement safety is not established."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "heroin",
    "name": "Heroin",
    "aliases": [
      "Diacetylmorphine"
    ],
    "category": "Psychoactives",
    "className": "opioid",
    "useContext": "Nonmedical opioid exposure; the DEA states heroin has no currently accepted U.S. medical use.",
    "mechanism": "Rapidly acting opioid converted to morphine in the brain and acting at opioid receptors.",
    "effects": [
      "Can cause euphoria followed by drowsiness",
      "Can slow heart and breathing rates"
    ],
    "risks": [
      "Overdose can cause coma or death",
      "Unregulated contents add overdose uncertainty"
    ],
    "interactionNote": "Alcohol, benzodiazepines, and other depressants can worsen opioid-related breathing suppression.",
    "evidence": "Strong",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DEA · Heroin drug fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Heroin-Drug-Fact-Sheet.pdf"
      },
      {
        "label": "NIDA · Heroin research report",
        "url": "https://nida.nih.gov/sites/default/files/heroinrrs_11_14.pdf"
      }
    ],
    "scene": {
      "setting": "recovery",
      "activity": "rest",
      "task": "reading",
      "prop": "book",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "sleepy",
      "timeCourse": "variable",
      "riskVisual": "breathing",
      "organs": [],
      "cautions": [],
      "intent": "Taking a quiet break before a nonmedical opioid exposure.",
      "responseNotes": [
        "It can cause euphoria followed by drowsiness.",
        "Heart and breathing rates can slow."
      ],
      "riskNotes": [
        "Overdose can cause coma or death.",
        "Unregulated contents add overdose uncertainty."
      ],
      "beats": [
        "It can cause euphoria followed by drowsiness.",
        "Overdose can cause coma or death."
      ],
      "asides": [
        "Unregulated contents and other depressants can change the risk.",
        "Unregulated contents add overdose uncertainty."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "methamphetamine",
    "name": "Methamphetamine",
    "aliases": [],
    "category": "Psychoactives",
    "className": "amphetamine-type stimulant",
    "useContext": "U.S. prescription methamphetamine has a narrow labeled medical role; nonmedical use can cause severe stimulant toxicity.",
    "mechanism": "Sympathomimetic stimulant in the amphetamine class.",
    "effects": [
      "Prescription label covers ADHD treatment in selected patients",
      "Can increase wakefulness and stimulation"
    ],
    "risks": [
      "Misuse can cause sudden death or serious cardiac events",
      "Can cause dependence and severe psychiatric effects"
    ],
    "interactionNote": "Other stimulants and monoamine-active medicines can compound cardiovascular and psychiatric effects.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · Desoxyn (methamphetamine) label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=81bfc45f-c345-47d0-9fc9-77abe553b541"
      },
      {
        "label": "DEA · Methamphetamine fact sheet",
        "url": "https://www.dea.gov/factsheets/methamphetamine"
      }
    ],
    "scene": {
      "setting": "study",
      "activity": "work",
      "task": "organizer",
      "prop": "clipboard",
      "motif": "neural",
      "mechanismStyle": "modulate",
      "response": "focus",
      "adverse": "heartbeat",
      "timeCourse": "over-time",
      "riskVisual": "pulse",
      "organs": [],
      "cautions": [],
      "intent": "Organizing study tasks during a narrowly indicated prescription ADHD treatment.",
      "responseNotes": [
        "A narrow prescription role exists for selected ADHD care.",
        "Wakefulness and stimulation can increase."
      ],
      "riskNotes": [
        "Misuse can cause sudden death or serious cardiac events.",
        "Dependence and severe psychiatric effects can occur."
      ],
      "beats": [
        "A narrow prescription role exists for selected ADHD care.",
        "Misuse can cause sudden death or serious cardiac events."
      ],
      "asides": [
        "This scene follows the narrow prescription ADHD context.",
        "Dependence and severe psychiatric effects can occur."
      ],
      "exposure": "oral"
    }
  },
  {
    "id": "gamma-hydroxybutyrate-ghb",
    "name": "Gamma-hydroxybutyrate (GHB)",
    "aliases": [
      "GHB",
      "Sodium oxybate"
    ],
    "category": "Psychoactives",
    "className": "CNS depressant",
    "useContext": "Prescription sodium oxybate treats cataplexy or excessive daytime sleepiness in narcolepsy; illicit GHB misuse can cause coma or death.",
    "mechanism": "CNS depressant; sodium oxybate is the prescription sodium salt of GHB.",
    "effects": [
      "Prescription sodium oxybate treats selected narcolepsy symptoms",
      "Can cause sedation and reduced consciousness"
    ],
    "risks": [
      "Respiratory depression can occur even in clinical use",
      "Misuse can cause seizures, coma, or death"
    ],
    "interactionNote": "Alcohol, opioids, benzodiazepines, and other CNS depressants can cause dangerous combined respiratory depression.",
    "evidence": "Strong",
    "status": "prescription",
    "sources": [
      {
        "label": "DailyMed · Sodium oxybate oral solution label",
        "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5dcf9a5c-312b-420b-82f3-42177d8f9ee4"
      },
      {
        "label": "DEA · GHB and sodium oxybate fact sheet",
        "url": "https://www.dea.gov/factsheets/ghb-gamma-hydroxybutyric-acid"
      }
    ],
    "scene": {
      "setting": "bedroom",
      "activity": "sleep",
      "task": "sleep-log",
      "prop": "clipboard",
      "motif": "sleep",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "sleepy",
      "timeCourse": "over-time",
      "riskVisual": "breathing",
      "organs": [],
      "cautions": [],
      "intent": "Updating a sleep diary during prescribed sodium-oxybate care for narcolepsy.",
      "responseNotes": [
        "Prescription sodium oxybate treats selected narcolepsy symptoms.",
        "Cataplexy or excessive daytime sleepiness can decrease."
      ],
      "riskNotes": [
        "Breathing suppression can occur even in clinical use.",
        "Other depressants can dangerously compound that effect."
      ],
      "beats": [
        "Prescription sodium oxybate treats selected narcolepsy symptoms.",
        "Breathing suppression can occur even in clinical use."
      ],
      "asides": [
        "The prescribed narcolepsy context differs from illicit misuse.",
        "Other depressants can dangerously compound that effect."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "gamma-butyrolactone-gbl",
    "name": "Gamma-butyrolactone (GBL)",
    "aliases": [
      "GBL"
    ],
    "category": "Psychoactives",
    "className": "GHB-related industrial solvent",
    "useContext": "Industrial solvent with nonmedical exposures; DEA identifies it as a GHB analogue that can be substituted for GHB.",
    "mechanism": "GHB precursor that is converted to GHB in the body; CNS depressant effects may follow.",
    "effects": [
      "Can produce GHB-like sedation and reduced consciousness",
      "No approved U.S. medical use is established"
    ],
    "risks": [
      "Severe intoxication can include coma or respiratory depression",
      "Unregulated products create unpredictable exposure"
    ],
    "interactionNote": "Alcohol and other CNS depressants can compound GHB-like respiratory and consciousness effects.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DEA · GHB and GBL fact sheet",
        "url": "https://www.dea.gov/factsheets/ghb-gamma-hydroxybutyric-acid"
      },
      {
        "label": "DEA · Drugs of Abuse 2024, controlled-substance reference",
        "url": "https://www.dea.gov/sites/default/files/2024-12/2024-Drugs-of-Abuse-508.pdf"
      }
    ],
    "scene": {
      "setting": "listening-room",
      "activity": "rest",
      "task": "reading",
      "prop": "notebook",
      "motif": "receptor",
      "mechanismStyle": "modulate",
      "response": "sleepy",
      "adverse": "neutral",
      "timeCourse": "variable",
      "riskVisual": "breathing",
      "organs": [],
      "cautions": [],
      "intent": "Setting aside notes before nonmedical exposure to a GHB-related solvent.",
      "responseNotes": [
        "It can cause GHB-like sedation and reduced consciousness.",
        "A U.S. medical use has not been established."
      ],
      "riskNotes": [
        "Severe intoxication can cause coma or respiratory depression.",
        "Unregulated products create unpredictable exposure."
      ],
      "beats": [
        "It can cause GHB-like sedation and reduced consciousness.",
        "Severe intoxication can cause coma or respiratory depression."
      ],
      "asides": [
        "An industrial product is not a pharmaceutical preparation.",
        "Unregulated products create unpredictable exposure."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "nandrolone",
    "name": "Nandrolone",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Historical U.S. labeling describes anemia-of-renal-insufficiency treatment. Nandrolone is also encountered in nonmedical anabolic-steroid contexts; the historical label does not establish safe enhancement use.",
    "mechanism": "Anabolic androgenic steroid with androgenic and anabolic activity.",
    "effects": [
      "Historical label describes increased hemoglobin and red-cell mass",
      "Anabolic effects do not establish safe performance enhancement"
    ],
    "risks": [
      "Label reports liver lesions and altered blood lipids",
      "Androgenic and reproductive effects can occur"
    ],
    "interactionNote": "Anticoagulants, corticosteroids, and other androgenic agents can require interaction review.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "DailyMed · Nandrolone decanoate label (revised 2006)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a586b484-1b46-40b9-9508-fd28002ad383"
      },
      {
        "label": "Federal Register · Nandrolone status (2023)",
        "url": "https://www.govinfo.gov/content/pkg/FR-2023-01-26/html/2023-00957.htm"
      },
      {
        "label": "DEA · Steroids drug fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "care-card",
      "prop": "clipboard",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "metabolic",
      "organs": [],
      "cautions": [],
      "intent": "Reviewing nonmedical anabolic claims alongside a historical anemia-treatment label.",
      "responseNotes": [
        "Historical anemia labels described increased red-cell mass.",
        "That does not establish safe performance enhancement."
      ],
      "riskNotes": [
        "The label reports liver lesions and adverse lipid changes.",
        "Androgenic and reproductive effects can occur."
      ],
      "beats": [
        "Historical anemia labels described increased red-cell mass.",
        "The label reports liver lesions and adverse lipid changes."
      ],
      "asides": [
        "Historical labeling does not establish safe enhancement use.",
        "Androgenic and reproductive effects can occur."
      ],
      "exposure": "symbolic"
    }
  },
  {
    "id": "stanozolol",
    "name": "Stanozolol",
    "aliases": [],
    "category": "Steroids",
    "className": "anabolic androgenic steroid",
    "useContext": "Anabolic steroid identified in DEA reports; 2023 U.S. reference lists no FDA-approved product commercially available.",
    "mechanism": "Synthetic anabolic androgenic steroid related to testosterone.",
    "effects": [
      "Nonmedical use is associated with muscle and performance claims",
      "No U.S. FDA-approved performance-enhancement use"
    ],
    "risks": [
      "Analytically confirmed severe liver injury and death are reported",
      "Class misuse is linked to cardiovascular and psychiatric harms"
    ],
    "interactionNote": "Other anabolic or liver-toxic products can compound risk; class interaction data are limited.",
    "evidence": "Moderate",
    "status": "nonmedical",
    "sources": [
      {
        "label": "PubMed · Fatal stanozolol intoxication case",
        "url": "https://pubmed.ncbi.nlm.nih.gov/37948000/"
      },
      {
        "label": "Federal Register · Stanozolol U.S. availability (2023)",
        "url": "https://www.govinfo.gov/content/pkg/FR-2023-01-26/html/2023-00957.htm"
      },
      {
        "label": "DEA · Steroids drug fact sheet",
        "url": "https://www.dea.gov/sites/default/files/2025-01/Steroids-Drug-Fact-Sheet.pdf"
      }
    ],
    "scene": {
      "setting": "gym",
      "activity": "research",
      "task": "reading",
      "prop": "book",
      "motif": "hormone",
      "mechanismStyle": "modulate",
      "response": "neutral",
      "adverse": "neutral",
      "timeCourse": "over-time",
      "riskVisual": "liver",
      "organs": [],
      "cautions": [],
      "intent": "Reading about a performance-enhancement claim and its liver-injury reports.",
      "responseNotes": [
        "Nonmedical users seek muscle and performance effects.",
        "There is no FDA-approved U.S. enhancement use."
      ],
      "riskNotes": [
        "Severe liver injury and death have been reported.",
        "A case report cannot establish the frequency of that harm."
      ],
      "beats": [
        "Nonmedical users seek muscle and performance effects.",
        "Severe liver injury and death have been reported."
      ],
      "asides": [
        "The fatal case report does not estimate how often injury occurs.",
        "A case report cannot establish the frequency of that harm."
      ],
      "exposure": "symbolic"
    }
  }
];
