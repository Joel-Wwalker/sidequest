import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { registerHooks } from 'node:module';
import ts from 'typescript';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { catalogSeeds, getCatalogSeed } from '../app/data/catalog/index.ts';
import { substances, originalSubstances } from '../app/data/substances.ts';
import { getSceneStory } from '../app/data/catalog/scene-stories.ts';
import { getContextStageCopies } from '../app/components/scene/scene-stage-copy.ts';

// Render the production component using the project's TypeScript compiler.
// Node ignores only stylesheet imports; no product markup is mocked.
const appRoot=new URL('../app/',import.meta.url).href;
const hooks=registerHooks({
  resolve(specifier,context,next){
    try{return next(specifier,context);}catch(error){
      if(specifier.startsWith('.')&&context.parentURL?.startsWith(appRoot)){
        for(const extension of ['.ts','.tsx']){
          const url=new URL(specifier+extension,context.parentURL);
          if(existsSync(fileURLToPath(url)))return {url:url.href,shortCircuit:true};
        }
      }
      throw error;
    }
  },
  load(url,context,next){
    if(url.startsWith(appRoot)&&url.endsWith('.css'))return {format:'module',source:'export {};',shortCircuit:true};
    if(url.startsWith(appRoot)&&url.endsWith('.tsx'))return {format:'module',shortCircuit:true,source:ts.transpileModule(readFileSync(fileURLToPath(url),'utf8'),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText};
    return next(url,context);
  },
});
const {SceneFrame}=await import('../app/components/PixelScene.tsx');
hooks.deregister();

const text=markup=>markup.replace(/&#x27;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');

test('all expanded stage labels and cues follow the selected animated story',()=>{
  assert.equal(catalogSeeds.length,487);
  for(const seed of catalogSeeds){
    const story=getSceneStory(seed),copies=getContextStageCopies(seed);
    assert.deepEqual(copies.map(copy=>copy.label),['The situation',story.responseLabel,story.downsideLabel],seed.id);
    assert.deepEqual(copies.map(copy=>copy.cue),[seed.scene.intent,story.responseCue,story.downsideCue],seed.id);
    assert.equal(copies[1].target,story.responseTarget,seed.id);
    assert.equal(copies[2].target,story.downsideTarget,seed.id);
  }
});

test('selected downside captions agree in the rendered title, description, strip and explainer',()=>{
  for(const id of ['amoxicillin','morphine']){
    const entry=substances.find(entry=>entry.id===id),seed=getCatalogSeed(id),copy=getContextStageCopies(seed)[2];
    const html=renderToStaticMarkup(createElement(SceneFrame,{type:entry.sceneType,action:entry.action,name:entry.name,substanceId:id,time:18.1,labels:entry.sceneLabels,risks:entry.risks,effects:entry.effects}));
    const title=text(html.match(/<title[^>]*>(.*?)<\/title>/s)[1]);
    const description=text(html.match(/<desc[^>]*>(.*?)<\/desc>/s)[1]);
    const strip=html.match(/class="scene-story"[\s\S]*?<strong>(.*?)<\/strong><p>(.*?)<\/p>/);
    assert.equal(title,`${entry.name}: ${copy.label.toLowerCase()}`,id);
    assert.ok(description.includes(copy.label)&&description.includes(copy.cue),id);
    assert.equal(text(strip[1]),copy.label,id);
    assert.equal(text(strip[2]),copy.cue,id);
    assert.ok(html.includes(`<h3>${renderToStaticMarkup(copy.label)}</h3>`),id);
    assert.ok(html.includes(`<p class="explainer-event">${renderToStaticMarkup(copy.cue)}</p>`),id);
    assert.notEqual(copy.cue,seed.scene.riskNotes[0],`${id}: fixture must catch the stale primary-risk regression`);
  }
});

test('original scenes retain their supplied stage labels',()=>{
  for(const entry of originalSubstances){
    const html=renderToStaticMarkup(createElement(SceneFrame,{type:entry.sceneType,action:entry.action,name:entry.name,substanceId:entry.id,time:18.1,labels:entry.sceneLabels}));
    const label=html.match(/class="scene-story"[\s\S]*?<strong>(.*?)<\/strong>/)[1];
    assert.equal(text(label),entry.sceneLabels[2],entry.id);
  }
});

test('response captions keep the authored aside while accessible copy describes the selected event',()=>{
  for(const id of ['amoxicillin','morphine']){
    const entry=substances.find(entry=>entry.id===id),seed=getCatalogSeed(id),copy=getContextStageCopies(seed)[1];
    const html=renderToStaticMarkup(createElement(SceneFrame,{type:entry.sceneType,action:entry.action,name:entry.name,substanceId:id,time:11.5,labels:entry.sceneLabels}));
    const strip=html.match(/class="scene-story"[\s\S]*?<strong>(.*?)<\/strong><p>(.*?)<\/p>/);
    const description=text(html.match(/<desc[^>]*>(.*?)<\/desc>/s)[1]);
    assert.equal(text(strip[1]),copy.label,id);
    assert.equal(text(strip[2]),seed.scene.asides[0],id);
    assert.ok(description.includes(copy.cue),id);
  }
});

test('reviewed downside props and local cues render the selected event',()=>{
  const render=id=>{
    const entry=substances.find(entry=>entry.id===id);
    return renderToStaticMarkup(createElement(SceneFrame,{type:entry.sceneType,action:entry.action,name:entry.name,substanceId:id,time:18.1,labels:entry.sceneLabels}));
  };
  for(const id of ['finasteride','dutasteride','cimetidine','spironolactone','esomeprazole']){
    const html=render(id);
    assert.ok(html.includes('data-card-content="symptom-notes"'),id);
    assert.ok(!html.includes('data-stage-object="urgent-review"')&&!html.includes('data-stage-object="review-labs"'),id);
  }
  assert.ok(render('ipratropium').includes('data-local-cue="nasal-dryness"'));
  assert.ok(render('peppermint-oil').includes('data-local-cue="reflux"'));
  assert.ok(render('isoniazid').includes('Nerves in the limbs'));
  assert.ok(render('methoxphenidine-mxp').includes('data-stage-object="urgent-review"'));
});
