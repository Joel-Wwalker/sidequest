'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import Room from './scene/Room';
import Character from './scene/Character';
import BodyMap from './scene/BodyMap';
import { getSceneProfile } from './scene/profiles';
import { LOOP_SECONDS, STAGE_TIMES, sampleScene } from './scene/timeline';
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
};

/** Shared by live playback and deterministic visual review frames. */
export function SceneFrame({ type, action, labels, name, time, risks = [], effects = [] }: Omit<PixelSceneProps, 'paused' | 'phase'> & { time: number }) {
  const id = useId().replace(/:/g, '');
  const profile = useMemo(() => getSceneProfile(name, type), [name, type]);
  const pose = sampleScene(time, profile.motion);
  const stage = pose.stage;
  const title = ['The first moment', 'Inside the body', 'Possible side effects'][stage];
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

  return <div className="pixel-scene" data-time={pose.t.toFixed(3)} data-stage={stage} data-substance={profile.key}>
    <div className="scene-masthead"><span><i/> THE LIVING ROOM</span><span>{profile.longTerm ? 'CHANGES OVER TIME' : 'AN ILLUSTRATED EXPLAINER'}</span></div>
    <div className="scene-layout">
      <div className="scene-room">
        <svg className="scene-art" viewBox="0 0 720 430" role="img" aria-labelledby={`${id}-title ${id}-description`}>
          <title id={`${id}-title`}>{`${name}: ${title.toLowerCase()}`}</title>
          <desc id={`${id}-description`}>{`${selectedLabel}. A person ${intake === 'drink' ? 'smoothly raises and lowers a mug' : intake === 'oral' ? 'raises their hand to their mouth in an oral example' : 'appears beside a symbolic exposure marker'}. Their expression and movement show selected possible effects. The separate body view shows ${profile.motion === 'interaction' ? 'medicine interactions' : stage === 2 ? profile.riskLabel.toLowerCase() : activeOrgans.join(', ')}. This illustration is not a real timeline or a method of use.`}</desc>
          <Room id={id}/>
          <g transform={`translate(184 302) scale(1 ${pose.cat})`} aria-hidden="true">
            <path d="M-27-7Q-30-23-10-25H10Q24-25 29-10L33 3H-31Z" fill="#bb967b"/>
            <path d="M7-21V-39L15-31H26L34-39V-17L27-11H12Z" fill="#d0ae8d"/>
            <path d="M12-23h5m8 0h5" stroke="#7d6a59" strokeWidth="2" strokeLinecap="round"/>
            <path d="M-27-5Q-45-2-43-17" fill="none" stroke="#b08a70" strokeWidth="7" strokeLinecap="round"/>
            <path d="M-13-20V-9M-3-23V-12" stroke="#a8846b" strokeWidth="3"/>
            <ellipse cx="20" cy="-17" rx="2" ry="1.5" fill="#aa7f71"/>
          </g>
          <g opacity={.35 + Math.sin(pose.t * Math.PI / 2) * .12} transform={`translate(242 ${272 + pose.drift})`} aria-hidden="true" fill="none" stroke="#9ba28b" strokeWidth="1.5"><path d="M-1 1h5l-5 5h5M7-9h4l-4 4h4"/></g>
          <Character pose={pose} motion={profile.motion} intake={intake} mushroom={profile.key === 'psilocybin'}/>
        </svg>
        <div className="scene-thought" key={`${name}-${stage}`}><span>{thought}</span></div>
        <span className="scene-exposure-note">{intake === 'drink' ? 'Beverage example' : intake === 'oral' ? 'Oral example' : 'Symbolic exposure'}</span>
      </div>
      <aside className={`scene-monitor ${stage === 2 ? 'is-adverse' : ''}`} aria-label={`${name} body view`}>
        <div className="monitor-heading"><span>BODY VIEW</span><span>{stage === 2 ? 'POSSIBLE DOWNSIDE' : stage === 1 ? 'BODY RESPONSE' : 'AT A GLANCE'}</span></div>
        <div className="monitor-body"><BodyMap organs={profile.organs} risks={profile.risks} pose={pose} motion={profile.motion}/><div className="monitor-legend"><span className="monitor-key"/>{stage === 2 || profile.motion === 'interaction' ? profile.riskLabel.toLowerCase() : activeOrgans.join(' · ')}</div></div>
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
  return <SceneFrame {...props} time={time}/>;
}
