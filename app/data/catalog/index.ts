import { medicationSeeds } from './medications.ts';
import { specialtySeeds } from './specialties.ts';
export const catalogSeeds=[...medicationSeeds,...specialtySeeds];
const byId=new Map(catalogSeeds.map(seed=>[seed.id,seed]));
const byName=new Map(catalogSeeds.map(seed=>[seed.name.toLowerCase(),seed]));
export function getCatalogSeed(key:string){return byId.get(key)??byName.get(key.toLowerCase());}
