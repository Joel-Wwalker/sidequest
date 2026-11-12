'use client';

import { memo, useEffect, useId, useMemo, useRef, useState, type CSSProperties } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Room from './scene/Room';
import ContextRoom from './scene/ContextRoom';
import ContextExplainer from './scene/ContextExplainer';
import { getCatalogSeed } from '../data/catalog/index';
import Atmosphere from './scene/Atmosphere';
import Character from './scene/Character';
import BodyMap from './scene/BodyMap';
import { getSceneProfile } from './scene/profiles';
import { LOOP_SECONDS, STAGE_TIMES, sampleScene } from './scene/timeline';
import { playSceneSound, prepareSceneSound, stopSceneSound } from './scene/sound';
import { getSceneSet } from './scene/sets';
import { getContextStageCopies } from './scene/scene-stage-copy';
import {getExposure} from './scene/exposure';
import './pixel-scene.css';

const StaticRoom=memo(Room);
const StaticContextRoom=memo(ContextRoom);

export type PixelSceneProps = {
  type: string;
  action: 'sips' | 'takes';
  labels?: string[];
  name: string;
  substanceId?: string;
  paused: boolean;
  phase?: number;
  risks?: string[];
  effects?: string[];
  soundOn?: boolean;
  onSoundChange?: (enabled: boolean) => void;
  soundUnavailable?: boolean;
};

/** Shared by live playback and deterministic visual review frames. */
export function SceneFrame({ type, action, labels, name, substanceId, time, risks = [], effects = [], soundOn = false, onSoundChange, soundUnavailable = false }: Omit<PixelSceneProps, 'paused' | 'phase'> & { time: number }) {
  const id = useId().replace(/:/g, '');
  const profile = useMemo(() => getSceneProfile(name, type,substanceId), [name, type,substanceId]);
  const context=getCatalogSeed(profile.key);
  const exposure=getExposure(profile.key);
  const sceneSet = getSceneSet(profile.key);
  const pose = sampleScene(time, profile.motion, profile.key);
  const stage = pose.stage;
  const stageCopy = context ? getContextStageCopies(context)?.[stage] : undefined;
  const title = stage===0?exposure.label:stageCopy?.label ?? ['The first moment', ...profile.beats][stage];
  const selectedLabel = stage===0?exposure.label:stageCopy?.label ?? labels?.[stage] ?? title;
  const thought = stage === 2 ? profile.thoughts[1] : stage === 1 ? profile.thoughts[0] : exposure.description;
  const activeOrgans = stage === 2 ? profile.risks : profile.organs;
  const timing = profile.key==='fentanyl' ? 'Patch effects develop over hours; this sequence compresses time.' : context ? ({'immediate':'Timing varies with the substance and person.','over-time':'Changes develop over repeated use, not in one loop.',variable:'Timing depends on the condition and formulation.',unknown:'Human effects and timing are not well established.'}[context.scene.timeCourse ?? 'unknown']) : profile.longTerm ? 'Changes develop over time.' : 'This is an illustrative sequence.';
  const details = stage === 2 ? context?.scene.riskNotes ?? risks.slice(0, 2) : stage === 1 ? context?.scene.responseNotes ?? effects.slice(0, 2) : [context?.scene.intent ?? 'Responses vary between people.', timing];
  const sceneDescription=context
    ? `${sceneSet.name}. ${stage===0?`${context.scene.intent} ${exposure.label}. ${exposure.description}`:`${title}. ${stageCopy?.cue??thought}. The character illustrates this selected response or safety check.`} ${timing} This is a schematic illustration, not a method of use.`
    : `${selectedLabel}. ${stage===0?exposure.description:'Their expression and movement show selected possible effects.'} The separate body view shows ${profile.motion==='interaction'?'medicine interactions':stage===2?profile.riskLabel.toLowerCase():activeOrgans.join(', ')}. This illustration is not a real timeline or a method of use.`;
  const signalFrequency = profile.motion === 'breathing' ? 1 : profile.motion === 'jitter' || profile.motion === 'heat' ? 3 : 1.8;
  const signal = Array.from({ length: 65 }, (_, i) => {
    const envelope = Math.sin(i / 64 * Math.PI);
    const y = 20 + Math.sin(i / 64 * Math.PI * 2 * signalFrequency - (profile.motion === 'breathing' ? pose.breathPhase : pose.t * Math.PI / 3)) * envelope * (profile.motion === 'breathing' ? 10 - pose.adverse * 7 : 5 + pose.adverse * 6);
    return `${i ? 'L' : 'M'}${i * 2.5} ${y.toFixed(2)}`;
  }).join(' ');

  return <div className="pixel-scene" data-time={pose.t.toFixed(3)} data-stage={stage} data-substance={profile.key} data-family={sceneSet.family} style={{'--scene-wall':sceneSet.wall} as CSSProperties}>
    <div className="scene-masthead"><span><i style={{background:sceneSet.accent}}/> {sceneSet.name.toUpperCase()}</span><div className="scene-tools"><span>{profile.key==='fentanyl' ? 'PATCH EFFECTS OVER HOURS' : profile.longTerm ? 'CHANGES OVER TIME' : sceneSet.family.toUpperCase()}</span>{onSoundChange && <button type="button" className="scene-sound" aria-label={soundUnavailable ? 'Scene sound unavailable' : soundOn ? 'Mute scene sounds' : 'Enable scene sounds'} aria-pressed={soundOn} disabled={soundUnavailable} onClick={()=>onSoundChange(!soundOn)}>{soundOn ? <Volume2 size={14}/> : <VolumeX size={14}/>}<span>{soundUnavailable?'Unavailable':soundOn?'Sound on':'Sound off'}</span></button>}</div></div>
    <div className="scene-layout">
      <div className="scene-room">
        <div className="scene-room-art">
        <svg className="scene-art" viewBox="0 0 720 430" role="img" aria-labelledby={`${id}-title ${id}-description`}>
          <title id={`${id}-title`}>{`${name}: ${title.toLowerCase()}`}</title>
          <desc id={`${id}-description`}>{sceneDescription}</desc>
          {context?<StaticContextRoom id={id} seed={context}/>:<StaticRoom id={id} substanceKey={profile.key}/>}
          {!context&&<Atmosphere id={id} substanceKey={profile.key} pose={pose}/>}
          <Character pose={pose} motion={profile.motion} substanceKey={profile.key} accent={sceneSet.accent}/>
        </svg>
        {!context&&stage>0&&<div className="scene-thought" key={`${name}-${stage}`}><span>{thought}</span></div>}
        {((context&&stage===1&&context.scene.timeCourse==='over-time')||(profile.key==='fentanyl'&&stage>0))&&<span className="scene-time-note">{profile.key==='fentanyl'?'Patch effects over hours':'Treatment over time'}</span>}
        </div>
      </div>
      {context?<ContextExplainer seed={context} stage={stage} timing={timing}/>:<aside className={`scene-monitor ${stage === 2 ? 'is-adverse' : ''}`} aria-label={`${name} body view`}>
        <div className="monitor-heading"><span>BODY VIEW</span><span>{stage === 2 ? 'POSSIBLE DOWNSIDE' : stage === 1 ? 'BODY RESPONSE' : 'AT A GLANCE'}</span></div>
        <div className="monitor-body"><BodyMap organs={profile.organs} risks={profile.risks} pose={pose} motion={profile.motion} substanceKey={profile.key}/><div className="monitor-legend"><span className="monitor-key"/>{!context&&(stage === 2 || profile.motion === 'interaction') ? profile.riskLabel.toLowerCase() : activeOrgans.join(' · ') || 'Systemic / cellular effects'}</div></div>
        <div className="monitor-copy"><h3>{title}</h3><ul>{details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="monitor-signal"><svg viewBox="0 0 160 40" aria-hidden="true"><path d="M0 20H160" stroke="#e0e3d7" strokeDasharray="2 4"/><path d={signal} stroke="currentColor" strokeWidth="1.5" fill="none"/></svg><span>{profile.motion === 'breathing' ? 'Breathing illustration' : profile.motion === 'heat' ? 'Heat / body strain' : profile.longTerm ? 'Changes over time' : 'Body response illustration'}</span></div></div>
      </aside>}
    </div>
    <div className="scene-story"><span className={`story-number ${stage === 2 ? 'is-adverse' : ''}`}>0{stage + 1}</span><div><strong>{selectedLabel}</strong><p>{thought}</p></div><span className="scene-story-duration" title={timing}>{profile.key==='fentanyl' ? 'Effects over hours' : profile.longTerm ? 'Over repeated use' : context?.scene.timeCourse==='unknown' ? 'Timing uncertain' : 'Every body differs'}</span></div>
    <div className="scene-progress" role="progressbar" aria-label="Illustration playback" aria-valuenow={Math.round(pose.t)} aria-valuemax={LOOP_SECONDS} aria-valuemin={0}><span style={{ transform: `scaleX(${pose.t / LOOP_SECONDS})` }}/></div>
  </div>;
}

export default function PixelScene(props: PixelSceneProps) {
  const [time, setTime] = useState(0);
  const [reduced, setReduced] = useState(false);
  const elapsed = useRef(0);
  const [soundUnavailable,setSoundUnavailable]=useState(false);
  const soundKey=useRef('');
  const profile=useMemo(()=>getSceneProfile(props.name,props.type,props.substanceId),[props.name,props.type,props.substanceId]);
  const family=getSceneSet(profile.key).family;
  const currentStage=sampleScene(time,profile.motion,profile.key).stage;
  useEffect(()=>{
    if(!props.soundOn || props.paused || reduced || window.matchMedia('(prefers-reduced-motion: reduce)').matches || props.phase!==undefined){stopSceneSound();soundKey.current='';return;}
    const key=`${profile.key}-${currentStage}`;
    if(soundKey.current!==key){playSceneSound(family,profile.key,currentStage);soundKey.current=key;}
  },[props.soundOn,props.paused,props.phase,family,profile.key,currentStage,reduced]);
  useEffect(()=>{
    const quiet=()=>{if(document.hidden)stopSceneSound();};
    document.addEventListener('visibilitychange',quiet);
    return()=>{document.removeEventListener('visibilitychange',quiet);stopSceneSound();};
  },[]);
  const toggleSound=async(enabled:boolean)=>{
    if(!enabled){stopSceneSound();props.onSoundChange?.(false);return;}
    if(await prepareSceneSound())props.onSoundChange?.(true);
    else setSoundUnavailable(true);
  };
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update(); media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (props.phase !== undefined) {
      const times=getCatalogSeed(profile.key)?[5.8,11.5,18.1]:STAGE_TIMES;
      elapsed.current = times[Math.max(0, Math.min(2, Math.floor(props.phase)))];
      setTime(elapsed.current); return;
    }
    if (reduced) { elapsed.current = getCatalogSeed(profile.key)?11.5:STAGE_TIMES[1]; setTime(elapsed.current); return; }
    if (props.paused) return;
    let frameId: number;
    let prior = performance.now();
    const frame = (now: number) => {
      const delta = Math.min((now - prior) / 1000, .1);
      prior = now;
      if (!document.hidden) { elapsed.current = (elapsed.current + delta) % LOOP_SECONDS; setTime(elapsed.current); }
      frameId = requestAnimationFrame(frame);
    };
    frameId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(frameId);
  }, [props.paused, props.phase, reduced,profile.key]);
  return <SceneFrame {...props} time={time} onSoundChange={props.onSoundChange?toggleSound:undefined} soundUnavailable={soundUnavailable}/>;
}
