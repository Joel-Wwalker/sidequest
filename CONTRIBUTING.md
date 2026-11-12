# Contributing to SIDEQUEST

Bug reports, source corrections and code contributions are welcome. For a substantial feature or a change to saved data, open an issue first so the intended behavior can be discussed.

## Getting started

Use Node.js 24 for development and tests. From your checkout, run:

```sh
npm run install:ci
npx tsc --noEmit
node --test tests/*.test.mjs
npm run build
npm run dev
```

Open the URL printed by the development server, normally [localhost:5173](http://localhost:5173/). See the [development guide](docs/development.md) for browser checks and the [architecture guide](docs/architecture.md) for a source map.

## Making a change

Keep each pull request focused on one problem. Follow the nearby TypeScript and CSS conventions, and avoid unrelated formatting changes. Explain new dependencies or changes to stored data.

Preserve bookmarks and notes saved in the browser. Add a regression check when a behavior change needs one. Run the TypeScript check and production build before submitting, and run any tests affected by the change. Check interface changes in a browser, including narrow screens, keyboard navigation, pause controls and reduced motion. If a check cannot be run, say which one and why.

Substance summaries need sources that support the specific claim. Keep uncertainty and the limits of the evidence visible. The animations illustrate concepts; they must not imply a dose, real onset time or a reliable personal outcome. See the editorial scope in the [README](README.md).

Keep credentials, personal notes, local environment files and generated output out of commits. Preserve the existing license notices for bundled code and assets.

## Pull requests

Use a subsystem prefix and a concrete verb in commit and pull request titles, such as `[Scene] Smooth the transition between story stages` or `[Library] Keep the selected entry visible after filtering`.

Describe the problem and its consequence, then explain the resulting behavior. Include a short before-and-after example when it makes the fix easier to understand. State what the tests or manual checks establish. Use short paragraphs rather than a fixed checklist, and include screenshots when they help explain a visual change.

Apply the [Humanizer](https://github.com/blader/humanizer) guidance to pull request titles, descriptions and other repository prose. Keep technical details, specific examples and uncertainty intact. Remove filler and promotional claims.

See the [pull request style notes](docs/pr-style.md) for examples from the maintainer's LLVM contributions.

Link a related issue when one exists. Mention any compatibility effect or follow-up needed to use the change. If an assistant helped with the work, name the assistant accurately; do not reuse an attribution from another project.

## Reporting an issue

For a bug, include steps to reproduce it, what you expected, what happened, and your browser and operating system. Remove personal notes from screenshots.

For a source correction, identify the entry and claim, and link the evidence that supports the correction. For a feature, explain what you are trying to do and where the current workflow gets in the way.

Contributions are made under the project's [MIT License](LICENSE). Bundled code and assets retain their own notices.
