# Pull request style

SIDEQUEST uses the same prose conventions as the maintainer's LLVM contributions and [Oddtongue's contribution guide](https://github.com/Joel-Wwalker/oddtongue/blob/main/CONTRIBUTING.md).

Use `[Subsystem]` followed by a concrete action in the title. Start the description with the behavior that caused the problem and its consequence. Name the affected function or control when it helps a reviewer locate the issue. A small example often explains the failure more clearly than a broad claim.

Explain the fix in the next paragraph. Describe compatibility effects or related behavior only when they matter to the change. State what a test or browser check establishes, and distinguish checks that passed from checks that were not run. Link the relevant issue when one exists.

Use short paragraphs rather than mandatory summary and test-plan sections. Keep the description focused on the final implementation. Apply [Humanizer](https://github.com/blader/humanizer) to titles, descriptions and other repository prose while preserving technical names, evidence and uncertainty. Attribute assistant involvement accurately when applicable.

## Examples

| LLVM pull request | Useful convention |
| --- | --- |
| [#240124: Check every lane of a deinterleaving mask](https://github.com/llvm/llvm-project/pull/240124) | Names the missed check, gives concrete masks, and explains what each test demonstrates. |
| [#240057: Only fold deinterleave to undef when all operands are undef](https://github.com/llvm/llvm-project/pull/240057) | Describes the failing input and why the previous fold discarded meaningful lanes. |
| [#239987: Return the requested result when splitting FFREXP](https://github.com/llvm/llvm-project/pull/239987) | Explains the type mismatch and limits the compatibility discussion to other users of the helper. |
| [#239627: Don't merge stores across a store that can't be merged](https://github.com/llvm/llvm-project/pull/239627) | Uses offsets 0, 4 and 8 to show the incorrect write, then states the fix in one sentence. |
| [#239437: Keep jump table range checks under branch target enforcement](https://github.com/llvm/llvm-project/pull/239437) | Identifies where two implementations diverged and explains why sharing the check resolves it. |
