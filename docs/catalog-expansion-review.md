# Catalog expansion review

Review date: 2026-11-11. Final application fingerprint: `b787721bb1ceb485e3090d46b20a03fba1867d0c968e01c0ee1f7ff030d2c74e`. Scene evidence fingerprint: `ab660475c7747016cd7afa1e6072a8f400917292714fd3556ef5af92bc290c3f`.

This revision expands the guide from 19 to 506 entries. The 487 additions include 300 medications and 187 specialty records. The original two family guides remain in the count. Brands and common salts are aliases. See [catalog method](catalog.md).

## Independence and scope

Research used a lower-cost Luna agent. Implementation remained separate from two Sol reviewers: one for content and motion, one for composition and accessibility. Neither reviewer authored the source they reviewed. The content preflight, scene source audit, rendered stage inspection and playback review are distinct checks; this is not a clinical review.

The reviewers checked all 187 specialty caption sets against the retained research and independently verified that the full effect and risk arrays matched the unshortened source records. They audited the selected routes for all 300 medication scenes, with targeted source checks for ambiguous formulations. The summaries remain selected information rather than complete product labels.

## Findings and fixes

| Finding | Correction and recheck |
| --- | --- |
| Automatic shortening removed qualifiers and left sentence fragments in specialty descriptions. | Restored all full effects and risks, then separately authored all 187 concise scene-caption sets. Sol compared the restored arrays and read the rewritten captions. |
| Tea tree oil, mistletoe and historical ephedra contexts used an oral gesture. | Replaced it with symbolic topical, evidence-review or historical scenes. Restored the poisoning and regulatory qualifications in full copy. |
| Tea and noni beverage contexts showed a pill; fosfomycin's selected product was a solution. | Three beverage scenes retain one right-hand cup through the sip. Fosfomycin uses symbolic exposure. |
| Vitamin K used an anticlot mechanism, and several dietary or study contexts implied a different route. | Vitamin K uses a nutrition mechanism and symbolic dietary exposure. Corrected thiamin, soy, NAC and licorice context/copy. |
| Vitamin C and B5 shared the same actual animation. | B5 now uses a study/checklist scene. The duplicate test collapses shared drawing branches and ignores unused activity labels, text and colors. |
| Mirror checks combed hair in nasal, mouth and skin-care contexts. | Mirror tasks use an empty hand outside the face. Finasteride's photo task retains intentional hairline contact. |
| Greenhouse rails crossed foliage; jars and a telescope floated above supports. | Reordered the rail, clipped scenery to the window, rested jars on the bench, and joined the telescope to its tripod. Corrected the kitchen fork's support. |
| A long opening overlay covered the head at the desktop layout breakpoint. | Removed the duplicate context-opening overlay. Full intent remains in the context card, monitor, story and accessible description. Rechecked Naloxone at 1110px. |
| Long ingredient names forced horizontal scrolling. | Allowed title/library names to wrap, preserved the Save button, and kept the last letter with the decorative period. |
| Review captures could be incomplete or use the wrong viewport. | Captures require a displayed clock reset, tab-specific viewport settings and whole SVG bounds. The mobile gallery fixes card width so full-page capture cannot alter it by removing the scrollbar. Invalid earlier images are excluded. |

## Intentional contacts

Hands overlap their held-object grips. Inhaler mouthpieces and mug rims meet the lips at the selected contact frame. Finasteride's raised hand touches the hairline while keeping the eyes visible. Abdominal and chest gestures draw in front of the torso and associated body effects. Pots, plates, books, jars, furniture and the telescope meet their intended supports. The detailed review distinguishes these contacts from unintended collisions.

## Evidence and validation

Evidence lives in the ignored `outputs/scene-review-ab660475c774/` folder. `revision.json` records application source hashes and all entry hashes. Recording manifests include the actual IDs, complete SVG bounds, sampled frames, clock observations and the loop reset. `mobile-manifest.json` identifies each stage capture. The coverage checker verifies completeness but does not grant visual approval.

All 506 entries have three valid mobile stage captures at 390 CSS pixels, using 337px scene art matching the real guide. Both reviewers inspected the complete stage art. The composition reviewer also checked full-card crops and verified stable heights, no horizontal overflow and correct crop alignment for every entry.

All 506 desktop sequences were recorded through the displayed 24-second reset in 26 batches. Both reviewers inspected sampled sequences across all entries. The 5,031 grid frames sampled 5.88 to 14.59 frames per second; one late-fade capture gap was 1.90 seconds. These figures describe the recording, not product frame rate. Five closer recordings cover 14 entries at 26.21 to 30.08 sampled frames per second, including mug, bottle, inhaler, mirror, hair-photo and head-effect attachment. All 506 also have a narrow exposure/contact still, at 3.7 seconds for legacy entries and 6 seconds for context entries.

The final revision changes only the long-title class in `FieldGuide` and a narrow-screen rule scoped to `.entry h2.long-name`. Both reviewers independently reversed these two edits in memory and recovered the earlier file hashes; all 506 entry hashes stayed identical. The existing scene evidence therefore carries forward. Fresh actual-guide evidence for the final revision is in `outputs/scene-review-b787721bb1ce/`.

The actual guide passed the 390px long-title/Save check, Finasteride's paused and three stage views, reduced-motion Semaglutide, and the 1110px Naloxone, GHRP-2 and Thunder God Vine stress cases. The browser record confirms pause, resume, replay, selected times, disabled playback under reduced motion, manual reduced-motion stages, sound opt-in, and six priority-name/alias searches. No console warnings or errors appeared in the final preview. Audio loudness was not measured, and the reviewers did not independently listen to the cues.

Both independent Sol reviews passed with no blocking findings in their stated scopes. Composition included all 15 populated room layouts and representative full-size contacts and closely related scene pairs. Accessibility checks covered contrast, accessible names, stage descriptions, observed controls and reduced motion; a dedicated screen reader was not run. Content review used the source-backed research records rather than a new clinical or URL audit.

Validation: all 21 Node tests pass, TypeScript passes, and the Sites production build passes. The build reports a large client-chunk warning. The capture coverage checker accounts for 506 loops and 506 three-stage mobile sets with no missing or invalid recordings. Full-size stills and continuous 60Hz geometry tests supplement the sampled browser evidence; neither substitutes for a clinical review or guarantees that no future defect can occur.
