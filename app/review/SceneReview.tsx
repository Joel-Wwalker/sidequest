'use client';
import { useEffect, useState } from 'react';
import { substances } from '../data/substances';
import { SceneFrame } from '../components/PixelScene';
import { LOOP_SECONDS, STAGE_TIMES } from '../components/scene/timeline';
import './review.css';

/** Development-only inspection sheet. It uses the production scene renderer. */
export default function SceneReview(){
  const [page,setPage]=useState(0),[time,setTime]=useState(0),[paused,setPaused]=useState(true);
  const [size,setSize]=useState(20),[full,setFull]=useState(false);
  const [query,setQuery]=useState('');
  const [scope,setScope]=useState('all');
  const queries=query.toLowerCase().split(',').map(value=>value.trim()).filter(Boolean);
  const entries=substances.filter(s=>(scope==='all'||(scope==='expanded'?!!s.context:!s.context))&&(!queries.length||queries.some(q=>[s.id,s.name,...s.aliases].some(v=>v.toLowerCase().includes(q)))));
  const count=Math.max(1,Math.ceil(entries.length/size)),batch=entries.slice(page*size,(page+1)*size);
  const stageTimes=batch.some(entry=>entry.context)?[5.8,11.5,18.1]:STAGE_TIMES;
  useEffect(()=>{
    if(paused)return;
    let frame:number,previous=performance.now();
    // A large review grid can paint slowly; keep its clock close to real time.
    // The single-scene production player retains its own smaller frame cap.
    const tick=(now:number)=>{const delta=Math.min((now-previous)/1000,.5);previous=now;if(!document.hidden)setTime(value=>(value+delta)%LOOP_SECONDS);frame=requestAnimationFrame(tick);};
    frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame);
  },[paused]);
  const change=(next:number)=>{setPage(Math.max(0,Math.min(count-1,next)));setTime(0);setPaused(true);};
  return <main className="review-page">
    <header className="review-toolbar"><strong>Scene review</strong><span>Batch {page+1}/{count} · {substances.length} entries</span><output aria-label="Scene time">{time.toFixed(2)}s</output>
      <button onClick={()=>{setTime(0);setPaused(false);}}>Replay batch</button><button onClick={()=>setPaused(!paused)}>{paused?'Play batch':'Pause batch'}</button>
      {stageTimes.map((t,i)=><button key={i} onClick={()=>{setTime(t);setPaused(true);}}>Stage {i+1}</button>)}
      <label>Time <input aria-label="Set scene time" type="number" min="0" max="23.999" step="0.1" value={time.toFixed(2)} onChange={e=>{setTime(Math.max(0,Math.min(23.999,Number(e.target.value))));setPaused(true);}} style={{width:60}}/></label>
      <input aria-label="Find scene" placeholder="Find scene" value={query} onChange={e=>{setQuery(e.target.value);setPage(0);setPaused(true);}} style={{width:100}}/>
      <select aria-label="Review scope" value={scope} onChange={e=>{setScope(e.target.value);setPage(0);setTime(0);setPaused(true);}}><option value="all">All</option><option value="original">Original</option><option value="expanded">Expanded</option></select>
      <button disabled={!page} onClick={()=>change(page-1)}>Previous batch</button><button disabled={page>=count-1} onClick={()=>change(page+1)}>Next batch</button>
      <label>Size <select aria-label="Batch size" value={size} onChange={e=>{setSize(Number(e.target.value));setPage(0);}}>{[1,4,20].map(n=><option key={n}>{n}</option>)}</select></label>
      <label><input type="checkbox" checked={full} onChange={e=>setFull(e.target.checked)}/>Full cards</label>
    </header>
    <div className={`review-grid ${full?'review-full':''}`} style={{gridTemplateColumns:size===20&&!full?'repeat(5,minmax(0,220px))':size===1&&!full?'minmax(0,720px)':size===4&&!full?'repeat(2,minmax(0,480px))':`repeat(${size===1?1:size===4?2:5},minmax(0,1fr))`}} data-review-page={page} data-review-time={time.toFixed(3)}>
      {batch.map(entry=><section className="review-tile" key={entry.id} data-review-id={entry.id}><h2>{entry.name}<small>{entry.id}</small></h2><SceneFrame substanceId={entry.id} name={entry.name} type={entry.sceneType} action={entry.action} labels={entry.sceneLabels} risks={entry.risks} effects={entry.effects} time={time}/></section>)}
    </div>
  </main>;
}
