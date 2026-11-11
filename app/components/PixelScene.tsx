'use client';

import { useEffect, useId, useMemo, useRef, useState, type CSSProperties } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import Room from './scene/Room';
import Atmosphere from './scene/Atmosphere';
import Character from './scene/Character';
import BodyMap from './scene/BodyMap';
import { getSceneProfile } from './scene/profiles';
import { LOOP_SECONDS, STAGE_TIMES, sampleScene } from './scene/timeline';
import { playSceneSound, prepareSceneSound, stopSceneSound } from './scene/sound';
import { getSceneSet } from './scene/sets';
import './pixel-scene.css';

export type PixelSceneProps = {
  type: string;
  action: 'sips' | 'takes';
  labels?: string[];
  name: string;
  paused: boolean;
  phase?: number;
  risks?: string[];
  effects?: string[];
  soundOn?: boolean;
  onSoundChange?: (enabled: boolean) => void;
  soundUnavailable?: boolean;
};

/** Shared by live playback and deterministic visual review frames. */
export function SceneFrame({ type, action, labels, name, time, risks = [], effects = [], soundOn = false, onSoundChange, soundUnavailable = false }: Omit<PixelSceneProps, 'paused' | 'phase'> & { time: number }) {
  const id = useId().replace(/:/g, '');
  const profile = useMemo(() => getSceneProfile(name, type), [name, type]);
  const sceneSet = getSceneSet(profile.key);
  const pose = sampleScene(time, profile.motion, profile.key);
  const stage = pose.stage;
  const title = ['The first moment', ...profile.beats][stage];
  const selectedLabel = labels?.[stage] ?? title;
  const thought = stage === 2 ? profile.thoughts[1] : stage === 1 ? profile.thoughts[0] : action === 'sips' ? 'one curious little human.' : profile.oral ? 'a small action, a complex body.' : 'let’s see what changes.';
  const activeOrgans = stage === 2 ? profile.risks : profile.organs;
  const details = stage === 2 ? risks.slice(0, 2) : stage === 1 ? effects.slice(0, 2) : ['Responses vary between people.', profile.longTerm ? 'Changes develop over time.' : 'This is an illustrative sequence.'];
  const intake = action === 'sips' ? 'drink' : profile.oral ? 'oral' : 'symbolic';
  const signalFrequency = profile.motion === 'breathing' ? 1 : profile.motion === 'jitter' || profile.motion === 'heat' ? 3 : 1.8;
  const signal = Array.from({ length: 65 }, (_, i) => {
    const envelope = Math.sin(i / 64 * Math.PI);
    const y = 20 + Math.sin(i / 64 * Math.PI * 2 * signalFrequency - (profile.motion === 'breathing' ? pose.breathPhase : pose.t * Math.PI / 3)) * envelope * (profile.motion === 'breathing' ? 10 - pose.adverse * 7 : 5 + pose.adverse * 6);
    return `${i ? 'L' : 'M'}${i * 2.5} ${y.toFixed(2)}`;
  }).join(' ');

  return <div className="pixel-scene" data-time={pose.t.toFixed(3)} data-stage={stage} data-substance={profile.key} data-family={sceneSet.family} style={{'--scene-wall':sceneSet.wall} as CSSProperties}>
    <div className="scene-masthead"><span><i style={{background:sceneSet.accent}}/> {sceneSet.name.toUpperCase()}</span><div className="scene-tools"><span>{profile.longTerm ? 'CHANGES OVER TIME' : sceneSet.family.toUpperCase()}</span>{onSoundChange && <button type="button" className="scene-sound" aria-label={soundUnavailable ? 'Scene sound unavailable' : soundOn ? 'Mute scene sounds' : 'Enable scene sounds'} aria-pressed={soundOn} disabled={soundUnavailable} onClick={()=>onSoundChange(!soundOn)}>{soundOn ? <Volume2 size={14}/> : <VolumeX size={14}/>}<span>{soundUnavailable?'Unavailable':soundOn?'Sound on':'Sound off'}</span></button>}</div></div>
    <div className="scene-layout">
      <div className="scene-room">
        <div className="scene-room-art">
        <svg className="scene-art" viewBox="0 0 720 430" role="img" aria-labelledby={`${id}-title ${id}-description`}>
          <title id={`${id}-title`}>{`${name}: ${title.toLowerCase()}`}</title>
          <desc id={`${id}-description`}>{`${selectedLabel}. A person ${intake === 'drink' ? (profile.key === 'alcohol' ? 'smoothly raises and lowers an alcohol bottle' : 'smoothly raises and lowers a mug') : intake === 'oral' ? 'raises their hand to their mouth in an oral example' : 'appears beside a symbolic exposure marker'}. Their expression and movement show selected possible effects. The separate body view shows ${profile.motion === 'interaction' ? 'medicine interactions' : stage === 2 ? profile.riskLabel.toLowerCase() : activeOrgans.join(', ')}. This illustration is not a real timeline or a method of use.`}</desc>
          <Room id={id} substanceKey={profile.key}/>
          <Atmosphere id={id} substanceKey={profile.key} pose={pose}/>
          <Character pose={pose} motion={profile.motion} intake={intake} mushroom={profile.key === 'psilocybin'} substanceKey={profile.key} accent={sceneSet.accent}/>
        </svg>
        <div className="scene-thought" key={`${name}-${stage}`}><span>{thought}</span></div>
        <span className="scene-exposure-note">{intake === 'drink' ? 'Beverage example' : intake === 'oral' ? 'Oral example' : 'Symbolic exposure'}</span>
        </div>
      </div>
      <aside className={`scene-monitor ${stage === 2 ? 'is-adverse' : ''}`} aria-label={`${name} body view`}>
        <div className="monitor-heading"><span>BODY VIEW</span><span>{stage === 2 ? 'POSSIBLE DOWNSIDE' : stage === 1 ? 'BODY RESPONSE' : 'AT A GLANCE'}</span></div>
        <div className="monitor-body"><BodyMap organs={profile.organs} risks={profile.risks} pose={pose} motion={profile.motion} substanceKey={profile.key}/><div className="monitor-legend"><span className="monitor-key"/>{stage === 2 || profile.motion === 'interaction' ? profile.riskLabel.toLowerCase() : activeOrgans.join(' · ')}</div></div>
        <div className="monitor-copy"><h3>{title}</h3><ul>{details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="monitor-signal"><svg viewBox="0 0 160 40" aria-hidden="true"><path d="M0 20H160" stroke="#e0e3d7" strokeDasharray="2 4"/><path d={signal} stroke="currentColor" strokeWidth="1.5" fill="none"/></svg><span>{profile.motion === 'breathing' ? 'Breathing illustration' : profile.motion === 'heat' ? 'Heat / body strain' : profile.longTerm ? 'Changes over time' : 'Body response illustration'}</span></div></div>
      </aside>
    </div>
    <div className="scene-story"><span className={`story-number ${stage === 2 ? 'is-adverse' : ''}`}>0{stage + 1}</span><div><strong>{selectedLabel}</strong><p>{thought}</p></div><span className="scene-story-duration">{profile.longTerm ? 'Over time' : 'Every body differs'}</span></div>
    <div className="scene-progress" role="progressbar" aria-label="Illustration playback" aria-valuenow={Math.round(pose.t)} aria-valuemax={LOOP_SECONDS} aria-valuemin={0}><span style={{ transform: `scaleX(${pose.t / LOOP_SECONDS})` }}/></div>
  </div>;
}

export default function PixelScene(props: PixelSceneProps) {
  const [time, setTime] = useState(0);
  const [reduced, setReduced] = useState(false);
  const elapsed = useRef(0);
  const [soundUnavailable,setSoundUnavailable]=useState(false);
  const soundKey=useRef('');
  const profile=useMemo(()=>getSceneProfile(props.name,props.type),[props.name,props.type]);
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
      elapsed.current = STAGE_TIMES[Math.max(0, Math.min(2, Math.floor(props.phase)))];
      setTime(elapsed.current); return;
    }
    if (reduced) { elapsed.current = STAGE_TIMES[1]; setTime(elapsed.current); return; }
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
  }, [props.paused, props.phase, reduced]);
  return <SceneFrame {...props} time={time} onSoundChange={props.onSoundChange?toggleSound:undefined} soundUnavailable={soundUnavailable}/>;
}
