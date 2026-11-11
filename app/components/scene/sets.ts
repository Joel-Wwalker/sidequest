import { getCatalogSeed } from '../../data/catalog/index.ts';
import { contextStyle } from './context-style.ts';
export type SceneFamily =
  | 'stimulation'
  | 'heat'
  | 'perception'
  | 'slowdown'
  | 'cannabinoid'
  | 'dissociation'
  | 'anabolic'
  | 'bodycare'
  | 'interactions';

export type SceneSet = {
  name: string;
  family: SceneFamily;
  accent: string;
  label: string;
  wall: string;
  floor: string;
  trim: string;
};

export const sceneSets: Record<string, SceneSet> = {
  caffeine: {
    name: 'The kitchenette', family: 'stimulation', label: 'Morning counter',
    accent: '#a78155', wall: '#f0e8d8', floor: '#d8bd98', trim: '#b5a080',
  },
  nicotine: {
    name: 'The tiled study', family: 'stimulation', label: 'Tile and paper',
    accent: '#758f91', wall: '#e4ece6', floor: '#b9c6bc', trim: '#94aaa2',
  },
  cocaine: {
    name: 'The city office', family: 'stimulation', label: 'City windows',
    accent: '#77889d', wall: '#e3e6ec', floor: '#b6b8bd', trim: '#8f9aa7',
  },
  mdma: {
    name: 'The listening room', family: 'heat', label: 'Warm acoustics',
    accent: '#be867d', wall: '#f0dfd7', floor: '#c5a08b', trim: '#a88976',
  },
  'synthetic-cathinones': {
    name: 'The angular studio', family: 'heat', label: 'Angles and traces',
    accent: '#b77c7c', wall: '#e6e2e9', floor: '#aaa6b6', trim: '#8d889e',
  },
  alcohol: {
    name: 'The dining corner', family: 'slowdown', label: 'Wood and lamplight',
    accent: '#a3745f', wall: '#ede3d4', floor: '#bd9375', trim: '#9c785e',
  },
  cannabis: {
    name: 'The curtain lounge', family: 'cannabinoid', label: 'Soft curtains',
    accent: '#92966c', wall: '#e7e7d7', floor: '#c1b591', trim: '#9ca080',
  },
  psilocybin: {
    name: 'The conservatory', family: 'perception', label: 'Glass and foliage',
    accent: '#7e9b85', wall: '#e4eddf', floor: '#b6b99b', trim: '#86a094',
  },
  lsd: {
    name: 'The observatory', family: 'perception', label: 'Geometric sky',
    accent: '#a18eb8', wall: '#e6e2ef', floor: '#b5a9c5', trim: '#8b84a6',
  },
  '2c-b': {
    name: 'The art studio', family: 'perception', label: 'Paint and pattern',
    accent: '#b68d99', wall: '#f0e4e4', floor: '#d0b1a0', trim: '#b19b8f',
  },
  ketamine: {
    name: 'The mirror nook', family: 'dissociation', label: 'Offset reflections',
    accent: '#8fa4b4', wall: '#e8edf0', floor: '#c7d0d3', trim: '#a4b4bd',
  },
  fentanyl: {
    name: 'The blue bedroom', family: 'slowdown', label: 'Quiet blue room',
    accent: '#8298b4', wall: '#dfe7ee', floor: '#b5c0cc', trim: '#96a7bc',
  },
  testosterone: {
    name: 'The training corner', family: 'anabolic', label: 'Daylight training',
    accent: '#8b9b7a', wall: '#e8ebdf', floor: '#c2b694', trim: '#99a18a',
  },
  'anabolic-steroids': {
    name: 'The brick gym', family: 'anabolic', label: 'Brick and equipment',
    accent: '#b38471', wall: '#dfc8ba', floor: '#a5a39a', trim: '#998879',
  },
  ostarine: {
    name: 'The technical study', family: 'anabolic', label: 'Plans and instruments',
    accent: '#7f9ba2', wall: '#e2e9e7', floor: '#b5c0b7', trim: '#8eaaa3',
  },
  'vitamin-d': {
    name: 'The morning greenhouse', family: 'bodycare', label: 'Sunlit breakfast',
    accent: '#c3a05e', wall: '#f3ecd5', floor: '#d1c29a', trim: '#b5ad81',
  },
  magnesium: {
    name: 'The reading pantry', family: 'bodycare', label: 'Shelves and pages',
    accent: '#8ba4a0', wall: '#e8ebe2', floor: '#c3baa2', trim: '#a39e85',
  },
  ashwagandha: {
    name: 'The botanical den', family: 'bodycare', label: 'Woven chair and leaves',
    accent: '#a18c6f', wall: '#eee6d8', floor: '#c5ac89', trim: '#9b9476',
  },
  'st-johns-wort': {
    name: 'The botanical worktable', family: 'interactions', label: 'Pressed flowers',
    accent: '#b39e64', wall: '#ece8dc', floor: '#bdb5a0', trim: '#9fa38b',
  },
};

export function getSceneSet(key: string): SceneSet {
  const seed=getCatalogSeed(key);
  if(seed)return contextStyle(seed) as SceneSet;
  return sceneSets[key] ?? sceneSets.caffeine;
}
