# Architecture

SIDEQUEST renders a single field guide page. React manages browsing state and personal notes in the browser; the content comes from a checked-in TypeScript dataset.

## Source layout

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Mounts the field guide. |
| `app/layout.tsx` | Page metadata and global styles. |
| `app/data/substances.ts` | Substance entries, aliases, evidence links, effect descriptions and risk context. |
| `app/components/FieldGuide.tsx` | Search, categories, saved entries, notes, tabs and scene controls. |
| `app/components/PixelScene.tsx` | Playback clock, scene composition and accessible descriptions. |
| `app/components/scene/timeline.ts` | Pose sampling and connected arm geometry. |
| `app/components/scene/profiles.ts` | Per-substance body highlights and motion choices. |
| `app/components/scene/sets.ts` and `Atmosphere.tsx` | Nineteen room settings, nine shared effect families, and each entry's animated visual motifs. |
| `app/components/scene/sound.ts` | Quiet synthesized stage cues, enabled by a user gesture. |
| `app/components/scene/Character.tsx`, `Room.tsx` and `BodyMap.tsx` | Character, room and separate body-view SVGs. |
| `app/components/pixel-scene.css` | Scene layout and responsive body panel. |
| `app/globals.css` | Responsive application layout and typography. |
| `components/ui/` | Shared UI primitives supplied by the starter. |
| `scripts/` | Portable installation, build and Sites runtime helpers. |
| `worker/` and `vite.config.ts` | Cloudflare worker and Vinext build configuration. |

The starter includes database and connector examples. The field guide's bookmarks and notes use browser storage and do not depend on these examples.

## Browsing and persistence

`FieldGuide` selects entries by their stable IDs. Categories and saved-only filtering determine the visible list; search matches names, aliases, categories and classes. The address hash carries the selected entry for direct links.

Bookmarks use the `sidequest-saved` local-storage key. Notes use `sidequest-notes`. The app reads these values after mounting, validates their basic shape, then saves later edits. Storage errors leave the app usable for the current session and show a notice. These values belong to the current browser and site address.

## Scenes

The field guide passes the selected substance, effect and risk text, and playback controls to `PixelScene`. All nineteen entries have a setting and a named choreography. Nine effect families share drawing and motion primitives; each entry supplies its own gestures, visual motifs and captions. The separate body panel reuses effect and risk text from the matching entry. The animation illustrates possible effects and does not model biological timing.

One `requestAnimationFrame` clock supplies elapsed time to `sampleScene`. The sampler calculates each pose, including ambient movement and effect opacity. `solveArm` calculates the elbow and hand positions from fixed segment lengths so the sleeve, wrist and held prop stay connected.

Sound starts off. The sound button resumes Web Audio through a user gesture, and playback adds short cues at stage changes. The field guide retains that choice while browsing entries. Pause, still-frame selection, hidden tabs and reduced motion suppress cues. No audio assets or network requests are needed.

The scene has three stages: exposure, possible body response and possible adverse effects. Pause retains elapsed time; replay remounts the scene at its start. Stage controls sample fixed times from the same timeline. Reduced-motion preferences open a still body-response view, and users can choose the other stages. SVG titles and descriptions provide a text account of the selected illustration.

## Hosting

Vinext builds the React application for the Cloudflare worker runtime. The Sites project registration lives in `.openai/hosting.json`; local build and preview state stays in ignored directories. GitHub CI checks the source, while the Sites publishing workflow manages deployments.
