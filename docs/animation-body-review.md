# Body and arm animation review

This revision replaces the projected arm rig and card-based effect layers. The shared character change affects all 506 entries. The application snapshot is `e3c9ebeb4a27dac752ffa4607113cc5664ad19ba9b64b0c287af695270798728`; the source is on `codex/smooth-substance-animations` above `9d2ec34`.

The implementers were the root agent and separate body-effect and choreography authors. Independent Sol agents reviewed motion (`natural_arm_review`) and composition (`embodied_scene_review`). An independent Astra agent (`arm_anatomy_assessment`) reviewed anatomy and explanatory meaning. The reviewers did not implement the product changes.

## Findings and fixes

| Finding | Fix and recheck |
| --- | --- |
| Fluconazole's upper arm shortened to 4px; forearm length also changed | Fixed 38px and 42px links, a continuous mirrored bend, compatible wrist paths, and visible rolled cuffs. The complete catalog passes joint-length, angle, continuity and tilted-head checks at 60Hz. |
| High elbows and dangling wrists survived the algebraic repair | Centered reading and hand examinations; relaxed both supporting arms; reauthored original balance, heat and sedation poses. Astra accepted fresh full-size renders. |
| Tablet floated above the palm | A visible finger bridge joins the pinch grip to the tablet without moving the mouth contact. Sol checked approach, contact and return. |
| Inhaler reach approached the shoulder singularity | Reauthored its path and grip; the shortened nozzle still meets the lips while the canister clears the eyes. Sol checked all four inhalers in browser playback. |
| Generic cards and notes carried the effects | Replaced synthetic cards with posture, gaze, jaw movement, breathing, guard gestures and local body processes. Unknown outcomes remain visually uncertain. |
| Guarding hands hid gut effects | Moved the palms below or beside the cutaway while keeping foreground depth. Sol and Astra rechecked the full character. |
| Related treatments reused the same quiet performance | Added explicit variations for selected antifungals, hypnotics, antibiotics, insulins and GLP-1 medicines. Some families still share later effect trajectories; this review does not establish bespoke choreography for every drug. |
| Several diagrams pointed to the wrong process | Corrected retinal versus transient visual effects, adrenal versus generic endocrine cues, genital versus bladder risk, colitis versus stomach bleeding, and drug-specific microbial contours. Removed unsupported pregnancy and sexual-side-effect gland graphics. |
| Faint glucose and white-cell marks disappeared into vessel tracks | Darkened active particles and reduced channel contrast; reviewers checked native and browser frames. |
| Full catalog review found two additional region errors | Risedronate's selected risk now follows the jaw; Selenium's response follows the thyroid without a secretion animation. Independent differential rendering verified the remaining 504 entries unchanged. |

## Evidence

The ignored output folder `outputs/scene-review-e3c9ebeb4a27` contains manifests and captures. Its `carry-forward.json` links the independently verified unaffected evidence from `outputs/scene-review-9a31e2a29019`. The two corrected entries have fresh native and browser evidence. The differential review compared all 2,024 native SVG snapshots; 2,020 were byte-identical, with changed output confined to Risedronate and Selenium.

The Sol composition reviewer inspected 2,024 full-scene native frames through 52 actor/room atlases. The desktop motion review covers 506 entries through 26 effective broad recordings, plus six close recordings containing 20 distinct entries. The broad recordings contain 2,788 JPGs at 2.35 to 9.30 captured frames per second, with a maximum gap of 3.23 seconds. Close recordings contain 3,883 JPGs; the single Fluconazole recording captures about 32 frames per second. Capture rate describes the evidence, not the application's guaranteed frame rate.

A replacement recording for desktop batch 08 contains the previously missing visible reset. The other 25 broad recordings include visible pre- and post-reset frames. Complete scenes accompany all close crops.

Intentional overlaps include fingers wrapping held objects, the oral or inhaler prop meeting the mouth, a guarding palm in front of the torso, and body cutaways beneath foreground arms. The fingertip bridge, lips, cuffs, head rotation and prop handoffs were reviewed explicitly.

Independent records: `outputs/natural-motion-sol/browser/review.md`, `outputs/natural-arm-astra/static-closeout-review.md`, and the final snapshot's `native-composition-followup/carry-forward-review.md`. These document inspected scope and remaining sampling limitations.

## Verification

- `node --test tests/*.test.mjs`: 43 passed on the final application source.
- `npx tsc --noEmit`: passed.
- Sites production build: passed with the existing large-client-chunk warning.
- `git diff --check`: passed.
- 390px catalog review: 108 browser screenshots cover all 506 entries at opening, exposure, response and downside, including a separate original-entry timing pass. Independent Sol composition review passed within that sampled scope.
- Actual Fluconazole guide: all three stage controls seek and hold at 2.000, 11.500 and 18.100 seconds. Titles, descriptions and visible captions agree with the selected event. No horizontal overflow at 390px or the desktop check.
- Playback: replay returns to the opening, pause preserves the complete SVG, and resume advances. Reduced motion settles at 11.500 seconds with an unchanged SVG and disabled replay. Sound remains off by default.
- `node scripts/check-scene-evidence.mjs outputs/scene-review-e3c9ebeb4a27`: 506 loop records, 506 mobile records, no missing or invalid evidence. This checks capture coverage, not visual correctness.
- Final independent Sol composition disposition: pass, recorded in `native-composition-followup/carry-forward-review.md`. The separate motion and Astra approvals retain the sampling limits described above.
