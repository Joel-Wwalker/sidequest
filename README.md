# SIDEQUEST

SIDEQUEST is a browser-based substance encyclopedia with source-linked entries and animated retro scenes. Browse 506 entries, compare selected effects and risks, and follow the sources behind each summary. The catalog includes medications, psychoactive substances, peptides, SARMs, steroids, nutrients and herbs.

Bookmarks and personal notes save in your browser. The current edition has no account system or forum.

## Run locally

Install [Node.js](https://nodejs.org/) 24 for development and tests, then run these commands from the repository directory:

```sh
npm run install:ci
npm run dev
```

Open the URL printed by the development server, normally [localhost:5173](http://localhost:5173/). The server reloads source changes.

Check types, run the tests and build the production bundle with:

```sh
npx tsc --noEmit
node --test tests/*.test.mjs
npm run build
```

Local browsing needs no environment file or cloud account.

## Using the guide

- Browse by category or search names and aliases. The address hash links to the selected entry.
- Read the overview, body response, risks and interactions, and linked sources for each substance.
- Pause or replay a scene, or select one of its three story stages. Reduced-motion settings keep the illustration still.
- Each entry has its own setting and reaction sequence. Enable the optional sound button for quiet scene cues; sound starts off and pauses with playback.
- Save entries to your collection and write a field note for each one.

Browser storage belongs to the current browser and site address. Notes and bookmarks do not sync between devices, and clearing site data removes them.

## Editorial scope

Descriptions are summaries with linked government and research sources. Medication entries select a treatment context; experimental entries state evidence limits. Risk labels are qualitative editorial summaries, not validated clinical scales or personal safety predictions. The guide has not undergone clinical review. See the [catalog method](docs/catalog.md) for scope and counting rules.

Animations illustrate a use context, a selected body response and a possible downside. Oral and beverage examples use simplified gestures; other routes can be symbolic. The scenes do not give doses or administration instructions, model biological timing, or predict an individual's experience. Changes from repeated treatment are labeled accordingly.

## Development

SIDEQUEST uses React, TypeScript and CSS on the Sites Vinext starter. The source data and scenes live in `app/`; the starter's UI primitives and runtime helpers remain in their own directories.

- [Development guide](docs/development.md): commands, browser checks and publishing.
- [Architecture](docs/architecture.md): source layout, animation controls and local persistence.
- [Contributing](CONTRIBUTING.md): focused changes, source corrections and pull requests.

GitHub holds the source and review history. Publishing the app uses the Sites workflow and the project registered in `.openai/hosting.json`.

## License and credits

The application is available under the [MIT License](LICENSE).

Bundled code retains its existing copyright and license notices, including the [OpenAI Sites Vite plugin](scripts/vite/sites-vite-plugin.LICENSE) and [shadcn styles](vendor/shadcn-tailwind-4.13.0.LICENSE.md). Package dependencies retain their respective licenses.
