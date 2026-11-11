# Animation review

Reviewed November 11, 2026.

## Findings resolved

The character uses connected arm segments through the reach and return. The cup meets the mouth, feet stay grounded, and the gut-clutching hand draws in front of the torso. Sweat droplets fade before resetting. Respiratory motion slows during the downside, while hormone suppression and medicine interactions have distinct diagrams.

The body panel separates anatomy and explanatory text from the room. The revised layout removes the clock/plant and shelf/lamp collisions, keeps captions clear of the character, and improves text contrast. Mobile copy wraps without clipping. Ketamine's bladder label specifies repeated use, and St John's wort's diagram describes medicine interactions without depicting liver injury.

## Verification

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Passed, exit code 0. |
| `node --test tests/scene-timeline.test.mjs` | All seven tests passed. |
| Sites production build | Passed, exit code 0. |
| `git diff --check` | No whitespace errors. |
| Pause | Scene time stayed at 12.455 seconds and the entire scene's markup remained unchanged across checks. |
| Replay | Restarted playback; the next observation was at 0.321 seconds. |
| Reduced motion | Playback controls were disabled. The body-response still stayed at 9.000 seconds after selecting the next substance. |
| Mobile at 390px | No horizontal overflow. All three St John's wort stages measured 587.758px high. |

The tests cover connected arm lengths, continuous reach and return, stage stills, loop reset, pose bounds, oral-prop fading and respiratory slowdown. They complement the visual checks of the complete scene.

Two independent reviewers approved the final revision. The composition review covered eight desktop frames and the mobile layout, with no remaining collisions, clipped captions or overlapping body panels. The motion review covered the live loop and final substance stills, including the revised alcohol lean.

## Capture limits

The live recording lasts 26.3 seconds and covers the 24-second loop at approximately five sampled frames per second. It supports the review of motion continuity and sequencing at that sampling rate. Rendering frame rate was not measured.
