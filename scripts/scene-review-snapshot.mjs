import { createHash } from 'node:crypto';
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { substances } from '../app/data/substances.ts';
import { getCatalogSeed } from '../app/data/catalog/index.ts';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
async function sourceFiles(directory){
  const entries=await readdir(path.join(root,directory),{withFileTypes:true});
  const files=[];
  for(const entry of entries){const relative=path.posix.join(directory,entry.name);if(entry.isDirectory())files.push(...await sourceFiles(relative));else if(/\.(tsx?|css)$/.test(entry.name))files.push(relative);}
  return files;
}
const files={};
for(const file of (await sourceFiles('app')).sort())files[file]=createHash('sha256').update(await readFile(path.join(root,file))).digest('hex');
const fingerprint=createHash('sha256').update(JSON.stringify(files)).digest('hex');
const rendererFiles=Object.fromEntries(Object.entries(files).filter(([file])=>!['app/data/substances.ts','app/data/catalog/medications.ts','app/data/catalog/specialties.ts'].includes(file)));
const rendererFingerprint=createHash('sha256').update(JSON.stringify(rendererFiles)).digest('hex');
const directory=path.join(root,'outputs',`scene-review-${fingerprint.slice(0,12)}`);
await mkdir(directory,{recursive:true});
const record={fingerprint,rendererFingerprint,gitRevision:execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim(),capturedAt:new Date().toISOString(),files,entries:substances.map(entry=>({id:entry.id,name:entry.name,fingerprint:createHash('sha256').update(JSON.stringify({entry,scene:getCatalogSeed(entry.id)})).digest('hex')})),note:'A source snapshot identifies evidence; it is not review approval. Previous scene evidence can only carry forward when its entry and renderer fingerprints still match.'};
await writeFile(path.join(directory,'revision.json'),JSON.stringify(record,null,2)+'\n');
console.log(JSON.stringify({directory,fingerprint,entries:record.entries.length}));
