import {readFile,readdir,writeFile} from 'node:fs/promises';
import path from 'node:path';

const directory=path.resolve(process.argv[2]??'');
const revision=JSON.parse(await readFile(path.join(directory,'revision.json'),'utf8'));
const ids=revision.entries.map(entry=>entry.id),loops=new Set(),mobile=new Map(),invalid=[];
const recordings=[];
for(const entry of await readdir(directory,{withFileTypes:true})){
  if(!entry.isDirectory()||!/^(desktop|detail)-/.test(entry.name))continue;
  let record;
  try{record=JSON.parse(await readFile(path.join(directory,entry.name,'manifest.json'),'utf8'));}catch{continue;}
  if(record.fingerprint!==revision.fingerprint){
    let previous;
    try{previous=JSON.parse(await readFile(path.join(directory,'..',`scene-review-${record.fingerprint.slice(0,12)}`,'revision.json'),'utf8'));}catch{}
    const matches=previous?.rendererFingerprint===revision.rendererFingerprint&&record.ids.every(id=>previous.entries.find(e=>e.id===id)?.fingerprint===revision.entries.find(e=>e.id===id)?.fingerprint);
    if(!matches){invalid.push(`${entry.name}: stale source`);continue;}
  }
  if(record.duration<24||record.frameCount<24){invalid.push(`${entry.name}: incomplete recording`);continue;}
  const endTime=Number.parseFloat(record.finalTime);
  if(!record.wrapped||!Number.isFinite(endTime)||endTime<.1||endTime>5){invalid.push(`${entry.name}: loop reset not established`);continue;}
  if(record.layout.tiles.some(tile=>tile.svg.top<0||tile.svg.left<0||tile.svg.bottom>record.layout.viewport[1]||tile.svg.right>record.layout.viewport[0])){invalid.push(`${entry.name}: cropped scene`);continue;}
  for(const id of record.ids)loops.add(id);
  recordings.push({name:entry.name,ids:record.ids,frameCount:record.frameCount,sampledFps:record.sampledFps,maxGap:record.maxGap,finalTime:record.finalTime});
}
let mobileRecords=[];
try{mobileRecords=JSON.parse(await readFile(path.join(directory,'mobile-manifest.json'),'utf8'));}catch{}
for(const record of mobileRecords){
  if(record.fingerprint!==revision.fingerprint||record.width!==390){invalid.push(`${record.file}: stale source or wrong viewport`);continue;}
  if(record.overflow){invalid.push(`${record.file}: horizontal overflow`);continue;}
  for(const id of record.ids){if(!mobile.has(id))mobile.set(id,new Set());mobile.get(id).add(record.stage);}
}
const result={fingerprint:revision.fingerprint,entries:ids.length,loopCount:ids.filter(id=>loops.has(id)).length,mobileCount:ids.filter(id=>[0,1,2].every(stage=>mobile.get(id)?.has(stage))).length,missingLoops:ids.filter(id=>!loops.has(id)),missingMobile:ids.filter(id=>![0,1,2].every(stage=>mobile.get(id)?.has(stage))),invalid,recordings,note:'Capture coverage only. Independent visual review and full-size motion checks remain separate requirements.'};
await writeFile(path.join(directory,'coverage.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({...result,recordings:recordings.length}));
if(invalid.length||result.missingLoops.length||result.missingMobile.length)process.exitCode=1;
