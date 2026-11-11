# SIDEQUEST

A substance encyclopedia with clean typography, muted pastels, and original animated pixel-art scenes.

## Run locally

Requires Node.js 22.13+.

```sh
npm run install:ci
npm run dev
```

The local preview prints its URL (normally http://127.0.0.1:5173).

```sh
npx tsc --noEmit
npm run build
```

## Editing

- `app/data/substances.ts`: 19 curated entries, evidence links, effects and risk context.
- `app/components/FieldGuide.tsx`: browsing, search, bookmarks, notes and content panels.
- `app/components/PixelScene.tsx` and `pixel-scene.css`: 12-second illustrative scenes and per-substance visual profiles.
- `app/globals.css`: responsive visual system; Manrope headings and DM Sans text.

Bookmarks and personal notes are saved only in the current browser. They are not synced. The forum is intentionally deferred to a later phase.

## Editorial scope

This is a curated first edition, not a complete PsychonautWiki mirror. Descriptions are original summaries with linked government and research sources. Risk labels are qualitative editorial summaries, not validated clinical scales or personal safety predictions. Medical-product risk descriptions focus on nonmedical use. The guide has not undergone clinical review.

Animations are symbolic and do not depict dosage, real timing or a procedural method of use. Reduced-motion settings produce still illustrations; each story stage can also be selected manually.

## Publishing

`.openai/hosting.json` retains the registered private Sites project. Use the Sites plugin workflow to build, push the exact source state, package and publish. Do not replace the project ID when editing this site.
