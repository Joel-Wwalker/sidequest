import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {registerHooks} from 'node:module';
import ts from 'typescript';
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {substances} from '../app/data/substances.ts';
const appRoot=new URL('../app/',import.meta.url).href;
const hooks=registerHooks({
  resolve(specifier,context,next){try{return next(specifier,context);}catch(error){if(specifier.startsWith('.')&&context.parentURL?.startsWith(appRoot))for(const extension of ['.ts','.tsx']){const url=new URL(specifier+extension,context.parentURL);if(existsSync(fileURLToPath(url)))return{url:url.href,shortCircuit:true};}throw error;}},
  load(url,context,next){if(url.startsWith(appRoot)&&url.endsWith('.css'))return{format:'module',source:'export {};',shortCircuit:true};if(url.startsWith(appRoot)&&url.endsWith('.tsx'))return{format:'module',shortCircuit:true,source:ts.transpileModule(readFileSync(fileURLToPath(url),'utf8'),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText};return next(url,context);},
});
const {SceneFrame}=await import('../app/components/PixelScene.tsx');hooks.deregister();
function render(id,time){const e=substances.find(e=>e.id===id);return renderToStaticMarkup(createElement(SceneFrame,{substanceId:id,name:e.name,type:e.sceneType,action:e.action,labels:e.sceneLabels,time}));}
test('cannabis and LSD show an identifiable consumed object, not symbolic particles',()=>{
  assert.match(render('cannabis',3.2),/data-exposure-prop="edible"/);
  assert.match(render('lsd',3.2),/data-exposure-prop="blotter"/);
});
test('known nonoral medicines show their selected real formulation',()=>{
  for(const [id,kind] of [['insulin-lispro','pen'],['ipratropium','nasal-spray'],['mupirocin','topical'],['nystatin','oral-liquid']])assert.ok(render(id,5.8).includes(`data-exposure-prop="${kind}"`),`${id}: must depict ${kind}`);
});
test('no catalog scene describes abstract particles as consumption',()=>{
  const failures=substances.filter(e=>/symbolic exposure|exposure marker/i.test(render(e.id,e.context?5.8:3.2))).map(e=>e.id);
  assert.deepEqual(failures,[]);
});

// Read effective ancestor opacity from the real rendered SVG, not a helper flag.
function visibleProps(markup){
  const svg=markup.match(/<svg class="scene-art"[^]*?<\/svg>/)[0],stack=[1],props=[];
  for(const match of svg.matchAll(/<(\/?)([\w:-]+)\b([^>]*?)(\/?)>/g)){
    const [,close,tag,attrs,self]=match;
    if(close){stack.pop();continue;}
    const own=Number(attrs.match(/(?:^|\s)opacity="([^"]+)"/)?.[1]??1),opacity=own*stack[stack.length-1];
    const type=attrs.match(/data-exposure-prop="([^"]+)"/)?.[1];if(type)props.push({type,opacity});
    if(!self)stack.push(opacity);
  }
  return props;
}
test('every selected use object is visibly present at contact',()=>{
  for(const e of substances){const props=visibleProps(render(e.id,e.context?5.8:3.2));assert.ok(props.some(p=>p.opacity>.9),e.id+': missing visible contact object');}
});
test('original temporary objects leave the reaction stage',()=>{
  for(const id of ['cocaine','ketamine','nicotine','testosterone','synthetic-cathinones'])assert.ok(visibleProps(render(id,18.1)).every(p=>p.opacity<.01),id+': use prop lingers into reaction');
});
test('selected forms read correctly in the visible scene and its description',()=>{
  for(const [id,text,kind] of [['formoterol','Nebulized medicine','nebulizer'],['salmeterol','Dry-powder inhaler','dry-powder-inhaler'],['ghrp-2','Investigational nasal spray','nasal-spray'],['ipamorelin','Investigational IV infusion','infusion']]){
    const html=render(id,5.8);assert.ok(html.includes(text),id);assert.ok(visibleProps(html).some(p=>p.type===kind&&p.opacity>.9),id);
  }
  assert.match(render('fentanyl',9),/Patch effects over hours/);
});

test('the used balloon stays smaller throughout the return',()=>{
  const size=t=>render('nitrous-oxide',t).match(/<ellipse cx="39" cy="17" rx="([^"]+)" ry="([^"]+)"/).slice(1).map(Number);
  const full=size(5.8),used=size(6.6);assert.ok(used[0]<full[0]&&used[1]<full[1]);
  for(const time of [6.8,7,7.4,7.7,8.1])assert.deepEqual(size(time),used,'balloon regrows at '+time);
});
