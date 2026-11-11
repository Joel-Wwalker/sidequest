# Animation review

Reviewed November 11, 2026, for the scene revision based on commit `0e7c2a5`. The final application files include the raised-arm fixes, attached head effects, alcohol bottle and label-contrast correction.

## Review coverage

The independent motion reviewer inspected a complete desktop cycle for every entry and all 57 mobile stage captures. The composition reviewer inspected all 38 desktop response/downside frames. A second reviewer checked the later Character, PixelScene and CSS corrections, including cocaine, alcohol and 2C-B cycles and all mobile stages. That reviewer excluded its own Room, Atmosphere, sets and earlier BodyMap implementation; the independent motion reviewer covered those files and their rendered output.

All reviewers reported no remaining blocking finding within their reviewed scope. This is a scoped review, not a guarantee that every defect has been found.

| Entry | Distinct response and downside | Desktop loop / mobile stages |
| --- | --- | --- |
| Caffeine | Alertness, then hand and foot jitter | Pass / Pass |
| Nicotine | Brief lift, then collar fidget and craving loop | Pass / Pass |
| Cocaine | Restlessness, then chest strain | Pass / Pass |
| MDMA | Open sway, then forehead wipe, heat and jaw tension | Pass / Pass |
| Synthetic cathinones | Restlessness, then two-arm agitation and heat | Pass / Pass |
| Psilocybin | Organic perception, then withdrawal | Pass / Pass |
| LSD | Searching gesture, then geometric overwhelm | Pass / Pass |
| 2C-B | Arousal, then chest/anxiety cue with attached halo | Pass / Pass |
| Alcohol | Amber bottle, then balancing sway | Pass / Pass |
| Fentanyl | Sedation, then slowed breathing | Pass / Pass |
| Cannabis | Relaxation, then a lost-thought gesture | Pass / Pass |
| Ketamine | Detachment, then reduced awareness | Pass / Pass |
| Testosterone | Calendar motif, then diminished feedback | Pass / Pass |
| Anabolic steroids | Changes over time, then multiple organ risks | Pass / Pass |
| Ostarine | Uncertainty, then reported liver harm | Pass / Pass |
| Vitamin D | Calcium/bone diagram, then excess and kidney risk | Pass / Pass |
| Magnesium | Nerve diagram, then gut clutch | Pass / Pass |
| Ashwagandha | Neutral response, then drowsiness/gut cues | Pass / Pass |
| St John's wort | Paired pathways, then one medicine signal fades | Pass / Pass |

## Defects and rechecks

| Finding | Correction | Recheck |
| --- | --- | --- |
| Plants intersected their supports; an extra floor shadow floated below the feet | Bottom-anchored plant helpers; removed the duplicate shadow | All desktop compositions and mobile stages passed |
| Speech bubble moved with the panel height | Anchor overlays to the room's aspect-ratio wrapper | Desktop and narrow captures passed |
| Ostarine's adverse legend added 10px to the card | Keep the bullet inline and reserve legend space | Both desktop stages measured 668.5px; mobile stages stayed equal |
| Cocaine pupils extended outside closing eyes; heart graphic covered the hand | Clip pupils to eye apertures; draw the heart behind the foreground hand | Complete cocaine loop and mobile stages passed |
| Alcohol reused the coffee mug | Use an attached amber bottle and correct its accessible description | Mouth contact, wrist attachment and balance sequence passed |
| 2C-B halo stayed fixed while the head moved | Put halos, sweat and craving cues inside the head transform | Complete affected loops and mobile stages passed |
| LSD, MDMA and cathinone sleeves crossed facial features | Move left gestures outward; use the right hand for MDMA's wipe | Revised complete loops passed |
| MDMA's initial revised wipe crossed the shoulder's unreachable region | Add a continuous outward arc during approach and return | Reachability test and revised loop passed |
| Brief nicotine sleeve collision missed by sparse capture | Lower the collar gesture; add a sleeve/face regression test | Test and revised nicotine loop passed |
| Small masthead/body headings had low contrast | Darken to #59674c | Calculated contrast 5.23:1 and 5.49:1; clean mobile captures passed |
| Initial recordings cropped the head; some stills had a focus overlay | Reframe complete SVGs and recapture unobstructed stills | Invalid captures excluded from approval |

The intentional overlap list includes fingers around held props, a hand on the chest with the heart behind it, the MDMA hand touching the forehead, the desk monitor in front of the office window, and schematic gut rings over the clutching hand. Reviewers checked that these contacts leave joints and facial features readable.

## Verification

| Check | Observed result |
| --- | --- |
| `npx tsc --noEmit` | Passed, exit 0 |
| `node --test tests/*.test.mjs` | All 13 tests passed |
| Sites `build-site.mjs` production build | Passed, exit 0 |
| `git diff --check` | No whitespace errors |
| Pause | Time stayed at 0.419s and the complete scene markup stayed unchanged |
| Replay and stage selection | Replay restarted; stage buttons selected 3.7s, 9s and 18.1s |
| Reduced motion after switching entries | Static 9.000s frame; replay disabled |
| Sound | No audio context before opt-in; opt-in created oscillator/gain/filter nodes; reduced-motion switching created no new oscillators |
| Mobile at 390px | All 57 cards were 352px wide and 687.21875px high; no horizontal overflow |
| Browser console | No captured errors in the final check |

The new sleeve test samples all 19 sequences at 60Hz. It checks a foreground sleeve's radius against the central facial features in head coordinates, and caught the cathinone and brief nicotine collisions before their corrections. It complements reachability, loop-continuity and visual checks.

## Evidence and limits

Local review artifacts are retained in the ignored `outputs/review-v3/` directory. The approved recordings are `complete-<substance>/`, with `-revised` replacing the earlier LSD, MDMA, nicotine and synthetic-cathinone recordings. Each includes full-scene JPEG frames and metadata. The clean mobile files are `mobile-<substance>-0.png`, `-1.png` and `-2.png`; dimensions are recorded in `mobile-metrics.json`.

The desktop recordings cover approximately 25 seconds around the 24-second cycle at about 3.7 sampled frames per second. They support visual sequencing and continuity review; they do not measure playback FPS. The earlier cropped `loop-*` recordings are not approval evidence.

Future revisions follow [the scene review procedure](scene-review-procedure.md) and [review record template](scene-review-record-template.md).
