import type { CatalogSeed } from '../../data/catalog/types';
import { getSceneStory, type ResponseMode, type DownsideMode, type StoryTarget } from '../../data/catalog/scene-stories.ts';
import { getExposure } from './exposure.ts';

export type SceneStageCopy = {
  label: string;
  cue: string;
  target?: StoryTarget;
  mode?: ResponseMode | DownsideMode;
};

/** The selected animated event supplies every primary caption for that stage. */
export function getContextStageCopies(seed: CatalogSeed): [SceneStageCopy, SceneStageCopy, SceneStageCopy] | undefined {
  const story = getSceneStory(seed);
  if (!story) return undefined;
  return [
    { label: getExposure(seed.id).label, cue: getExposure(seed.id).description },
    { label: story.responseLabel, cue: story.responseCue, target: story.responseTarget, mode: story.responseMode },
    { label: story.downsideLabel, cue: story.downsideCue, target: story.downsideTarget, mode: story.downsideMode },
  ];
}
