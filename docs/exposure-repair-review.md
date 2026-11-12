# Recognizable use review

This revision removes the particle-only use fallback and authors one source-linked form for each of the 506 entries. The frozen application fingerprint is `76cff1880c3188de90d6f74147ec51e6f1d55b4babc3ddca3308a2abbc47b220`, on `codex/smooth-substance-animations` above `04236cc`. Shared character, use motion, first-stage controls and captions affect the whole catalog.

The root agent authored renderer changes; a separate author supplied the initial registry and a Luna researcher verified sources. Independent Sol agents `exposure_motion_review` and `exposure_composition_review` inspected motion and composition. Independent Astra agent `exposure_meaning_review` assessed anatomy and explanatory meaning. Reviewers did not author product changes.

## Findings and repairs

| Finding | Repair and evidence |
| --- | --- |
| 161 entries used floating symbols as administration | Explicit registry for all 506 IDs, with no unknown-ID fallback. Cannabis uses an edible, LSD blotter, and other selected forms have distinct held objects and contact targets. |
| First-stage controls selected a notebook or a nearly vanished oral prop | First-stage seeks now use 3.2 seconds for original scenes and 5.8 for expanded scenes. Labels and accessible descriptions use the same registry. |
| Pills could disappear before clear mouth contact | A visible hold precedes consumption; the empty hand returns after the solid fades. |
| Some activity props shared a wrist with the incoming medicine | The task clears before the use object appears. Existing drinks remain continuously held. |
| Skin applications could touch clothing or miss the selected region | Exposed skin, shorter sleeves where needed, body-attached cream/patches, and cheek contact for facial treatment. The facial reach passes complete sleeve/head geometry checks. |
| Infusion support was missing from the first-stage still | A floor-supported stand and flexible line connect to the actual moving catheter point. |
| Respiratory medicines shared the wrong device | Separate aerosol, dry-powder and nebulizer drawings, with source-selected forms. |
| Naloxone appeared as self-administration | A separate helper delivers the nasal formulation to an impaired recipient. The helper fades in gradually, keeps fixed arm lengths and withdraws before the next stage. |
| Nonmedical steroid scenes looked like clinical administration | Distinct plain-clothes helper and explicit nonmedical wording. Nandrolone keeps its historical clinical qualification; the drawing is schematic IM contact. |
| Devices and powder packets lingered into original-scene reactions | Temporary use objects leave with the returning hand, while applied material follows the body. |
| Facial treatments later examined an arm | Adapalene and azelaic acid use mirror examination. Cream clears before response/downside so local irritation remains visible. |
| Nicotine patch conflicted with reward/craving narration | Selected a documented nicotine vaping form. Fentanyl retains a prescribed patch with visible effects-over-hours wording. |
| Two research samples had documented human routes | Ipamorelin uses the studied IV route and GHRP-2 a studied nasal formulation, with investigational labels. The remaining 29 route/form gaps retain labeled closed-sample scenes. |
| Old symbolic metadata hid four repeated combinations | Tests now compare the rendered registry and actual wrist. Pramipexole, sildenafil, ibutamoren and LGD-4033 have distinct context activities/objects that fit their selected care or research setting. |
| Nitrous balloon regrew as the hand returned | Deflation now remains through the return and resets while hidden. Independent fresh native and browser loops passed. The other 505 contact SVGs are byte-identical to the preceding revision. |

## Evidence and limits

Final evidence is in ignored `outputs/scene-review-76cff1880c31`, with explicit carry-forward from `outputs/scene-review-dd12ed065b44` and the independent reviewers' output directories. The native composition census contains 4,554 complete 720 by 430 SVG/PNG pairs: nine times for each entry, including opening, contact, handoffs, response and downside. All 26 contact atlases and full-size device/site representatives were inspected. The rendered census found no missing visible use object or mismatched route caption/title/description.

The separate native motion review includes eight full loops at 8 sampled frames per second for cannabis, LSD, nicotine, formoterol, naloxone, nandrolone, trenbolone and adapalene. Sixty fresh stills cover the final helper/context delta. Independent math checks and the test suite inspect the actual rendered arm rig at 60 Hz; this is not a claim about browser frame rate.

Independent Sol motion review inspected browser playback across all 506 IDs. The 26 accepted broad recordings include fresh replacements for batches 03 and 16, whose original captures missed the visible reset. The final nitrous loop has 391 frames; the larger cannabis/LSD loop has 453. Accepted browser sampling ranges from 1.04 to 16.97 frames per second, with a maximum broad gap of 2.93 seconds. These rates describe the evidence, not guaranteed animation performance. Timed-out recordings and cropped supplemental JPEGs are excluded.

At 390 CSS pixels, 108 browser screenshots cover opening, contact, response and downside across all 506 entries, including a separate original-scene timing pass at 2, 3.2, 9 and 18.1 seconds. Independent composition review inspected the complete catalog frames. Twenty clean actual-guide mobile screenshots cover selected routes and their captions; a 1280px guide check has no horizontal overflow. A hidden fixed skip link appeared in earlier full-page captures taken while scrolled; recapturing at scroll origin resolved that artifact without a product change.

Intentional contacts include fingertips holding oral forms, mouth/nose contact, hands wrapping a device, applied material on moving skin, a catheter/line attachment, and separate helper delivery. The composition reviewer records 506 scene-specific pairs in `native-exposure-composition/intentional-contacts.json`. Handoff exceptions are single continuous cups or separate helper wrists, not two objects assigned to one grip.

## Verification

- TypeScript: passed on the frozen source.
- Complete test suite: 56 passed, including actual-arm geometry, route coverage, visible contact objects, stage copy, motion seams and sound gating.
- Sites production build: passed, with the existing large-client-chunk warning.
- Whitespace check: passed.
- Actual-guide controls: stage selection reaches the expected 3.2/9/18.1 or 5.8/11.5/18.1 seconds. Pause holds scene SVG, progress and time; resume advances; replay restarts. Reduced motion holds 11.5 seconds and disables replay. Sound is off in the fresh preview.
- Capture coverage checker: 506 loop records and 506 mobile records, no missing or invalid evidence.
- Independent Sol motion and composition dispositions: pass within the documented sampled scope. Astra meaning and anatomy disposition: accepted for the inspected routes and contact/stage subset. The reviews do not certify every medical claim.

Independent records: `outputs/exposure-motion-review/76cff1880c31-motion-review.md`, `outputs/scene-review-76cff1880c31/native-exposure-composition-sample/composition-review.md`, and `outputs/exposure-meaning-review/independent-report-76cff1880c31.md`.

Approval is limited to inspected evidence. Related drugs still share some later reaction trajectories, and the 29 research-sample entries do not depict human administration. No dose or preparation sequence is supplied.
