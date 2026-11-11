# SIDEQUEST conventions

The encyclopedia and its animations are the current priority. Defer the forum until the user asks for that phase.

Use clean, readable typography. The user rejected pixel lettering; retro styling belongs in the scenes.

## UI review

Use Sol for independent reviews. Use a lower-cost model for source research; this cost preference does not lower the implementation or review bar. Keep reviewers independent from authors.

Use independent Astra reviewers for shared anatomy and explanatory-meaning assessments, alongside the Sol motion and composition reviews. Inspect the full-size character, not only small catalog tiles. Include both complete sleeves against the entire tilted head, and verify that every stage heading, description and body effect names the same selected event.

For every UI or animation revision, obtain independent UI reviews before delivery. Reviewers must not author the change they review. Use at least one motion reviewer and one composition/accessibility reviewer. Have them inspect rendered output as well as source. Address concrete findings and have the revised output checked again. Do not claim a revision is reviewed from compilation or source inspection alone.

Animations need smooth, connected movement; distinct, evidence-backed side effects; stable object placement; readable annotations; and working pause, replay, selected stages and reduced-motion behavior. Check a full loop and narrow layouts, not only one still.

Each drug needs a recognizable setting and its own response and downside choreography. Shared effect families may reuse animation mechanics, but changing only colors, text or speed is insufficient. Compare same-family entries side by side. Use restrained drug-specific humor in character asides and props; keep serious harm legible. Scene sound is optional, quiet, and off until the user enables it.

Follow the [scene review procedure](docs/scene-review-procedure.md) for every scene-affecting revision. Record full-loop and stage evidence, attachment and overlap checks, desktop and 390px checks, both independent reviewers' findings, and each fix and recheck. A shared `Character` change requires regression review of every catalog scene. Cropped or obstructed captures cannot support approval. Keep approval scoped to the evidence reviewed; do not promise that a revision has no possible defects.

## New entries

Before implementing a substance, establish its credible use context. Author the setting, ordinary activity, held object, exposure representation, selected response and downside, and time course explicitly. Show prescribed treatment as treatment; label experimental uncertainty. Changes over repeated use must not appear to be an immediate transformation. Match the scene explanation to its selected indication.

Use verified sources. Count canonical substances once and treat brands, salts and formulations as aliases unless a separate ingredient has a justified identity. Each entry needs a distinct rendered scene; ID hashes, colors, timing labels and unused metadata do not establish uniqueness. Check task/prop combinations and map body regions deliberately rather than guessing from risk keywords.

## Pull requests

Use [blader/humanizer](https://github.com/blader/humanizer) for every PR title and description. Read the skill and apply its writing audit. Match the owner's LLVM contribution style documented in [docs/pr-style.md](docs/pr-style.md): a concrete subsystem title, a short explanation of the faulty behavior, the fix, and actual verification. Avoid promotional language and templated summaries. Do not invent test results. Preserve any required assistance disclosure.

Follow Oddtongue's repository conventions as recorded in CONTRIBUTING.md. Keep GitHub and Sites publication remotes separate. Do not change the private Site's audience without the user's request.
