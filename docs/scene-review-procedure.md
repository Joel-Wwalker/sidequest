# Scene review procedure

Every scene-affecting revision needs independent motion and composition/accessibility reviews before delivery. Each reviewer must inspect the rendered scene and relevant source. Neither reviewer may author the scene changes they approve. If a reviewer implements a fix, assign that review to someone else.

Use the [review record template](scene-review-record-template.md) to record evidence and results. Keep the current revision's review report separate from this procedure.

## 1. Establish the scope

List the changed files and affected substance IDs before capturing evidence. A change to shared `Character` code requires regression review of all entries exported by `app/data/substances.ts`, including the expanded catalog. Changes to shared timing, layout, drawing helpers or controls require review of every scene they can affect. If the affected set cannot be established, review all entries.

Record the source revision, any uncommitted changes, browser, viewport and capture date. Capture after the final relevant edit. Later edits invalidate the affected approval and require fresh evidence. Compare entries within the same effect family side by side to check that their settings, response and downside remain distinct.

Run `node scripts/scene-review-snapshot.mjs` before capturing a stable revision. It records the application source hashes and current catalog IDs in a dedicated ignored output folder. Copy the returned fingerprint into each recording manifest and reviewer record. Pause source assembly while recording: a development reload can reset playback or selected stages. Record displayed scene times, not just elapsed wall time.

## 2. Capture complete scenes

For each affected scene, record a complete loop at desktop width. At 390 CSS pixels wide, capture all three stages and the relevant contact/attachment stills to check the responsive layout. Keep the entire scene SVG visible in these captures, including its edges, floor, feet and moving props. Record the captions and controls in companion frames if they do not fit in the same viewport.

The current loop is 24 seconds. Start before the first action and continue past the reset into the next cycle; approximately 26 seconds covers that boundary. Check the displayed scene time as well as elapsed recording time. If `LOOP_SECONDS` changes, capture the new complete duration and its reset.

Save opening, exposure, response and downside stills, plus frames immediately before and after the loop boundary. Add frames at maximum reach, mouth contact, strongest body lean and any attachment or occlusion that needs closer inspection. Legacy stage times are 3.7, 9 and 18.1 seconds. Context scenes use 2, 10 and 18.1 seconds, with exposure contact near 6 seconds. Use the current source values if these change.

Check capture validity before reviewing it. A cropped SVG, hidden feet, covered character, devtools overlay or missing loop boundary makes that capture insufficient for approval. Magnified crops help diagnose a defect, but require a complete-scene capture alongside them. Recapture invalid evidence. Record the actual sampling rate and any dropped frames; a sparse recording does not establish a higher rendering frame rate.

## 3. Inspect motion and object placement

Review every affected scene against these checks. Use the complete desktop recording for motion and the corresponding 390px stage/contact frames for responsive geometry. A static responsive layout does not require a second full-loop recording.

| Area | Required inspection |
| --- | --- |
| Head and face | Head effects and halos follow the intended head transform. Pupils stay within the eye whites during gaze, blinking and dilation. Hair, eyelids and facial marks retain their intended depth. |
| Arms and held props | Shoulders, elbows and wrists remain connected. Hands stay attached to cups, bottles or other props through reach, contact and return. The prop suits the selected substance; a shared prop must not produce an incorrect depiction. |
| Depth and occlusion | Check the draw order of the head, arms, torso, props and effects. A hand placed on the abdomen remains visible in front of it. Effects do not cut through the face or overwrite a held object. |
| Support contact | Pot bottoms meet shelf or table tops after scaling. Furniture legs and feet meet the floor. Shadows remain attached to the object casting them. Check for rails passing through pots, floating props and detached shadows. |
| Protected space | Keep furniture and atmosphere effects clear of the character's full motion envelope and caption area. Inspect the largest reach and lean, not only the rest pose. |
| Continuity | Watch transitions and the loop boundary. Props do not teleport, particles fade before resetting, and visible layers return continuously. Compare the pose just before reset with the starting pose. |
| Explanatory meaning | Scene labels, visible effects and risk context agree with the selected entry. Distinguish exposure, response and downside. Preserve long-term and repeated-use qualifications. Keep serious harm clear when using humor. |
| Responsive layout | At 390px, check the complete SVG, readable captions, body panel, controls, horizontal overflow and stage-dependent height changes. Long labels must not detach their bullets or move the page unexpectedly. |

The current 720 by 430 scene reserves character space at x310 to x525, y110 to y370, and caption space at x294 to x466, y24 to y95. Side props occupy x16 to x278 or x548 to x704. The room floor begins at y309; the character's feet meet the foreground at about y365. If a layout changes these bounds, document the replacement bounds and inspect the complete motion envelope again.

Maintain an intentional-overlap allowlist for each reviewed scene. Name the two objects, the intended depth or contact, the relevant stage, and the evidence showing it works. Examples include a hand wrapping a bottle or a desk monitor occluding the window behind it. An unlisted collision remains a finding until inspected. A general statement that overlaps are artistic does not resolve a specific collision.

## 4. Check controls, source and tests

Pause during movement and confirm that character, atmosphere, body diagram and progress all stop. Resume from the same time. Replay must restart consistently. Select each stage, switch substances, and repeat with reduced motion enabled. Check optional sound when it or shared playback changes: it starts off, requires explicit opt-in, remains quiet, and stops with the relevant controls.

Inspect transforms, clipping, SVG draw order, support anchors and loop envelopes in source. Visible motion must use the shared scene time so it cannot continue independently while paused. Verify that every affected entry resolves to its intended setting and choreography.

Run the required checks with Node.js 24:

```sh
npx tsc --noEmit
node --test tests/*.test.mjs
npm run build
git diff --check
```

Run every `tests/*.test.mjs` file and record the observed count and results. The suite includes catalog identity, context choreography, original scene timing and sound checks. A validated Sites production build may supply the production-build result; record the command used. Compilation and tests support the review but do not replace rendered inspection.

## 5. Resolve findings and obtain both reviews

Log each defect with its scene, stage or time, viewport, evidence and expected behavior. Record the fix revision and new evidence. The implementer fixes the issue; the appropriate independent reviewer checks the changed output again. A shared fix may expand the regression scope.

The motion reviewer must inspect full-loop playback, attachment continuity, stage transitions and the boundary. The composition/accessibility reviewer must inspect object placement, intentional overlaps, protected spaces, readable content and desktop/mobile layout. Both reviewers receive the source changes, complete captures and defect log.

Keep each review pending until its required evidence is valid and its concrete findings have been resolved and rechecked. Record each reviewer's disposition, reviewed revision, covered scenes and limitations. Report unresolved or untested areas explicitly. Approval means that no blocking defect remains in the reviewed scope; it is not a guarantee against every possible defect.

Use Sol for both independent review roles. Source research may use a lower-cost model. A development review grid can establish broad coverage, but it does not replace full-size contact checks or the real guide's captions, controls and mobile layout. Record the IDs actually present in each grid, capture timestamps, sample rate and gaps. Never treat a sparse capture as proof of smooth rendering.
