# Development

## Local setup

Use Node.js 24 and npm. The app supports Node.js 22.13 or newer, but the tests use Node.js 24's built-in TypeScript support. The lockfile records the dependency versions.

```sh
npm run install:ci
npm run dev
```

The development server normally runs on port 5173. Use the URL it prints if that port is already occupied. Source edits reload automatically.

`install:ci` uses the repository's installer so optional native packages are handled consistently across supported environments. A clean clone uses the portable execution profile. Checkout-local Sites runtime settings stay out of Git.

## Checks

```sh
npx tsc --noEmit
node --test tests/*.test.mjs
npm run build
```

The TypeScript check validates the application and starter code. Node's test runner checks the behavior covered by `tests/`. The build produces the client and worker output in `dist/`. GitHub CI runs these checks on pushes and pull requests with Node.js 24.

The repository also has an `npm run lint` command. When changing existing code, inspect any lint findings in the files you touched.

## Browser checks

Open the app at both desktop and narrow mobile widths. Search for a name and an alias, try an empty result, change categories, and open a saved entry. Check that bookmarks and notes survive a reload.

Use the keyboard to reach the library, entry tabs and dialog controls. Check that closing a dialog returns focus to the control that opened it. Arrow keys should not change the selected substance while typing a note.

For scene changes, watch a complete loop, pause it, resume it, replay it and select each story stage. Switch substances during playback. Repeat the check with reduced motion enabled and confirm that the scene stays still. Check that captions and organ highlights agree with the selected entry and stage.

## Publishing

`.openai/hosting.json` identifies the existing Sites project. Keep its project ID when updating this app. A GitHub push records source changes; it does not publish a new Site deployment.

Use the Sites plugin to build, push the exact source revision, package and publish the app. Keep the GitHub remote named `github` separate from the Sites source remote.

Do not commit `node_modules/`, build output, publication archives, local runtime directories, environment files or credentials. The repository's `.gitignore` excludes these paths.
