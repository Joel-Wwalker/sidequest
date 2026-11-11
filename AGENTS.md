# SIDEQUEST conventions

The encyclopedia and its animations are the current priority. Defer the forum until the user asks for that phase.

Use clean, readable typography. The user rejected pixel lettering; retro styling belongs in the scenes.

## UI review

For every UI or animation revision, obtain independent UI reviews before delivery. Reviewers must not author the change they review. Use at least one motion reviewer and one composition/accessibility reviewer. Have them inspect rendered output as well as source. Address concrete findings and have the revised output checked again. Do not claim a revision is reviewed from compilation or source inspection alone.

Animations need smooth, connected movement; distinct, evidence-backed side effects; stable object placement; readable annotations; and working pause, replay, selected stages and reduced-motion behavior. Check a full loop and narrow layouts, not only one still.

## Pull requests

Use [blader/humanizer](https://github.com/blader/humanizer) for every PR title and description. Read the skill and apply its writing audit. Match the owner's LLVM contribution style documented in [docs/pr-style.md](docs/pr-style.md): a concrete subsystem title, a short explanation of the faulty behavior, the fix, and actual verification. Avoid promotional language and templated summaries. Do not invent test results. Preserve any required assistance disclosure.

Follow Oddtongue's repository conventions as recorded in CONTRIBUTING.md. Keep GitHub and Sites publication remotes separate. Do not change the private Site's audience without the user's request.
