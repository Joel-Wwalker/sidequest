export type SoundNote = { frequency: number; delay: number; duration: number; gain: number; shape: OscillatorType };

/** Short, quiet accents. These are scene cues, never simulated medical alarms. */
export function soundNotes(family: string, key: string, stage: number): SoundNote[] {
  const base: Record<string, number> = { stimulation: 440, heat: 330, perception: 523.25, slowdown: 220, cannabinoid: 392, dissociation: 293.66, anabolic: 261.63, bodycare: 349.23, interactions: 466.16 };
  const frequency = (base[family] ?? 330) * (1 + (key.length % 3)*.03);
  if(stage === 2 && key === 'fentanyl') return [{frequency:164.81,delay:0,duration:.28,gain:.018,shape:'sine'}];
  const pitches = stage === 0 ? [1, 1.5] : stage === 1 ? [1, 1.25] : [1, .8];
  return pitches.map((pitch,index)=>({frequency:frequency*pitch,delay:index*.13,duration:family==='perception'||family==='dissociation'?.32:.16,gain:stage===2?.018:.022,shape:family==='stimulation'?'triangle':'sine'}));
}

let context: AudioContext | undefined;
const sounding = new Map<OscillatorNode, GainNode>();

export async function prepareSceneSound() {
  if(typeof window === 'undefined' || !window.AudioContext) return false;
  try {
    context ??= new window.AudioContext();
    await context.resume();
    return context.state === 'running';
  } catch { return false; }
}

export function stopSceneSound() {
  for(const [oscillator,gain] of sounding) {
    try {
      const now=context?.currentTime ?? 0;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setTargetAtTime(.0001,now,.008);
      oscillator.stop(now+.03);
    } catch { /* Already stopped. */ }
  }
  sounding.clear();
}

export function playSceneSound(family: string, key: string, stage: number) {
  if(!context || context.state !== 'running' || document.hidden) return;
  stopSceneSound();
  const audio = context;
  for(const note of soundNotes(family,key,stage)) {
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    const filter = audio.createBiquadFilter();
    const start = audio.currentTime + note.delay;
    oscillator.type = note.shape;
    oscillator.frequency.setValueAtTime(note.frequency,start);
    filter.type='lowpass';filter.frequency.value=1800;
    gain.gain.setValueAtTime(.0001,start);
    gain.gain.exponentialRampToValueAtTime(note.gain,start+.015);
    gain.gain.exponentialRampToValueAtTime(.0001,start+note.duration);
    oscillator.connect(filter);filter.connect(gain);gain.connect(audio.destination);
    sounding.set(oscillator,gain);
    oscillator.onended=()=>{sounding.delete(oscillator);oscillator.disconnect();gain.disconnect();filter.disconnect();};
    oscillator.start(start);oscillator.stop(start+note.duration+.015);
  }
}
