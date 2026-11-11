# SIDEQUEST implementation plan

Goal: An engaging substance encyclopedia with a muted pastel, pixel-art scenes with clean typography and animated exposure, mechanism and adverse-effect scenes. The user confirmed SIDEQUEST and explicitly deferred the forum.

Architecture: React on the Sites Vinext starter. Curated, source-linked substance records; original SVG/CSS animated room; client-side search, category filters, arrows, saved entries and persistent personal notes. No discussion database or simulated activity. Private Sites publication.

## Work
- [ ] Research 19 entries across everyday substances, psychoactives, steroids, SARMs, research chemicals, and vitamins/herbs in app/data/substances.ts.
- [ ] Build PixelScene.tsx with distinct scene types, ingestion gesture, mechanism and adverse-effect phases, pause and reduced-motion support.
- [ ] Build responsive library and entry interface, search, bookmarks, keyboard browsing, notes, source links and risk context.
- [ ] Check source fidelity, empty search, category navigation, saved persistence, notes, motion controls, and narrow-screen usability.
- [ ] Run TypeScript and production build, inspect browser, package and publish private Site.

## Constraints
Risk classifications are editorial summaries, not validated numerical safety scores. Uncertainty remains visible. No dosage or procurement instructions. Human animations are schematic, not predictions or timelines. Body text is readable sans-serif with clean Manrope display typography (updated at the user’s request). No forum in this version.

## Review focus
Empty filters, invalid URL entries, unavailable storage, reduced motion, and unsupported claims.
