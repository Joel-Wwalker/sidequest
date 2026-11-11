import type { sampleScene } from './timeline';
import { getSceneSet } from './sets';

type Pose = ReturnType<typeof sampleScene>;
type EffectProps = { substanceKey: string; pose: Pose; accent: string };
const TAU = Math.PI * 2;

function Stimulation({ substanceKey, pose, accent }: EffectProps) {
  if (substanceKey === 'nicotine') {
    const angle = pose.t * TAU / 8;
    return <g stroke={accent} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="147" cy="143" rx="72" ry="46" opacity=".55"/>
      <path d="M211 116L220 127L207 128M83 169L74 157L87 157"/>
      <rect x="124" y="120" width="45" height="47" rx="5" fill="#f2ecd7"/><path d="M134 132H159M134 143H154M134 154H160" strokeWidth="2.5"/>
      <g transform={`translate(${147 + Math.cos(angle)*72} ${143 + Math.sin(angle)*46}) rotate(${Math.sin(angle)*9})`}>
        <rect x="-14" y="-15" width="28" height="30" rx="4" fill="#e2e6ce"/><path d="M-6-4H6M-6 4H3" strokeWidth="2"/>
      </g>
      <ellipse cx="147" cy="143" rx={83+Math.sin(angle)*3} ry="57" opacity={pose.adverse*.45}/>
    </g>;
  }
  if (substanceKey === 'cocaine') {
    const points = Array.from({length:37},(_,i) => {
      const a = i/36*TAU*2 - pose.t*1.7;
      const peak = Math.sin(a) * Math.pow(Math.abs(Math.sin(a)),5);
      return `${i?'L':'M'}${571+i*3.25} ${128+peak*(12+pose.adverse*26)}`;
    }).join(' ');
    return <g stroke={accent} strokeLinecap="round" strokeLinejoin="round">
      <path d={points} strokeWidth="5"/><path d={points} strokeWidth="13" opacity=".13"/>
      <circle cx="580" cy="76" r={4+pose.adverse*2} fill={accent} opacity=".7"/>
      <path d="M573 177H687" strokeWidth="2" opacity=".4"/>
    </g>;
  }
  const tremble = Math.sin(pose.t*6)*pose.adverse*2.5;
  return <g transform={`translate(${tremble} 0)`} stroke={accent} strokeWidth="3" strokeLinecap="round">
    <rect x="158" y="111" width="99" height="55" rx="5" fill="#f3e8ce" strokeWidth="2"/>
    {[122,136,150].map((y,i) => <g key={y} transform={`translate(${Math.sin(pose.t*1.7-i)*5} 0)`}><path d={`M174 ${y}h${48-i*8}`}/><path d={`M237 ${y-4}l5 4l-5 4`} strokeWidth="2"/></g>)}
    <path d="M149 124H138M148 140H129M149 155H139" opacity=".6"/>
  </g>;
}

function Heat({ substanceKey, pose, accent }: EffectProps) {
  if (substanceKey === 'mdma') return <g strokeLinecap="round">
    <g opacity={1-pose.adverse*.75} fill={accent}>
      {[140,162,184,206,228,248].map((x,i) => {
        const h = 12 + (Math.sin(pose.t*1.6+i*.8)*.5+.5)*25;
        return <rect key={x} x={x-4} y={103-h} width="8" height={h} rx="4"/>;
      })}
    </g>
    <g opacity={pose.adverse} stroke="#b78067" strokeWidth="4">
      {[153,190,227].map((x,i) => <path key={x} d={`M${x} 106q-10-11 0-21t0-21`} transform={`translate(0 ${Math.sin(pose.t*1.2+i)*3})`}/>)}
    </g>
    <ellipse cx="627" cy="157" rx={57+Math.sin(pose.t)*3} ry={57+Math.sin(pose.t)*3} stroke={accent} strokeWidth="2.5" opacity={.25+pose.adverse*.25}/>
  </g>;
  const points = Array.from({length:15},(_,i) => `${i?'L':'M'}${570+i*8.2} ${125+(i%2?1:-1)*(8+pose.adverse*25)+Math.sin(pose.t*1.6+i*.9)*5}`).join(' ');
  return <g stroke={accent} strokeLinejoin="round" strokeLinecap="round">
    <path d={points} strokeWidth="5"/><path d={points} transform="translate(0 13)" opacity={pose.adverse*.25} strokeWidth="3"/>
    {[582,628,674].map((x,i) => <path key={x} d={`M${x} 170q-8-9 0-17`} transform={`translate(0 ${Math.sin(pose.t+i)*3})`} opacity={pose.adverse*.7} strokeWidth="3"/>)}
  </g>;
}

function Perception({ substanceKey, pose, accent }: EffectProps) {
  if (substanceKey === 'psilocybin') return <g transform={`translate(627 108) rotate(${Math.sin(pose.t*.55)*8})`}>
    {[0,60,120,180,240,300].map((angle,i) => <ellipse key={angle} cx={Math.sin(pose.t*.7+i)*pose.adverse*5} cy="-24" rx={16+Math.sin(pose.t*.8+i)*2} ry="34" transform={`rotate(${angle})`} fill={i%2?'#c0aec9':'#a9c7a0'} stroke={accent} strokeWidth="2.5" opacity=".7"/>)}
    <circle r={15+Math.sin(pose.t*.8)*2} fill="#e3d4a3" stroke={accent} strokeWidth="2"/>
    <ellipse rx={60+Math.sin(pose.t*.6)*3} ry="61" stroke="#ae93b9" strokeWidth="2.5" opacity={pose.adverse*.65}/>
  </g>;
  if (substanceKey === 'lsd') return <g transform="translate(148 122)" strokeLinejoin="round">
    {[0,1,2,3].map(i => {
      const size = 24+i*14;
      return <g key={i} transform={`rotate(${i*14+Math.sin(pose.t*.6+i)*7*(1+pose.adverse)})`}>
        <path d={`M0 ${-size}L${size*.87} ${-size*.5}V${size*.5}L0 ${size}L${-size*.87} ${size*.5}V${-size*.5}Z`} stroke={i%2?'#c098b2':accent} strokeWidth="3.5" fill={i===0?'#ead7c6':'none'} opacity=".85"/>
      </g>;
    })}
    <path d={`M-78 ${Math.sin(pose.t*.5)*8}Q-39-45 0 0T78 0M-68 42Q-26-13 8 32T72 16`} stroke="#d1b1c4" strokeWidth="5" opacity={pose.adverse*.65}/>
  </g>;
  const turn = Math.sin(pose.t*.65)*7;
  return <g strokeWidth="4" strokeLinejoin="round">
    <path d="M122 109L167 157L122 205L77 157Z" fill="#c1d4ca" stroke="#89a99d" transform={`rotate(${turn} 122 157)`} opacity=".8"/>
    <path d="M171 134L213 178L171 223L129 178Z" fill="#d6b4c6" stroke={accent} transform={`rotate(${-turn*(1+pose.adverse*.5)} 171 178)`} opacity=".75"/>
    <path d={`M120 ${119+Math.sin(pose.t)*3}L162 161L120 202M171 144L204 178L171 212`} stroke="#f1d9b1" strokeWidth="3"/>
    <circle cx="148" cy="168" r={10+pose.adverse*5+Math.sin(pose.t)*2} stroke="#bc8da6" strokeWidth="2.5" opacity={pose.adverse}/>
  </g>;
}

function Slowdown({ substanceKey, pose, accent }: EffectProps) {
  if (substanceKey === 'alcohol') {
    const angle = Math.sin(pose.t*.85)*(3+pose.adverse*15);
    return <g stroke={accent} strokeLinecap="round" strokeLinejoin="round">
      <path d="M146 109V156M122 156H170" strokeWidth="5"/>
      <g transform={`rotate(${angle} 146 109)`}>
        <path d="M92 109H200M99 109V127M193 109V127" strokeWidth="4"/>
        <path d="M81 126Q99 151 117 126ZM175 126Q193 151 211 126Z" fill="#c7ad86" strokeWidth="2.5"/>
        <circle cx="146" cy="109" r="6" fill="#edddbd" strokeWidth="3"/>
      </g>
      <path d="M108 76Q146 57 184 76" strokeWidth="2" opacity=".45"/>
      <circle cx={146+Math.sin(angle*Math.PI/180)*112} cy="75" r="4" fill={accent}/>
    </g>;
  }
  const scale = 1+pose.breath*.025;
  return <g stroke={accent} strokeLinecap="round" strokeLinejoin="round">
    <g transform={`translate(149 113) scale(${scale})`}>
      <path d="M-5-30V-15Q-31-30-39-3L-43 27Q-30 43-7 26V-13M5-30V-15Q31-30 39-3L43 27Q30 43 7 26V-13" fill="#bacbd8" strokeWidth="4"/>
      <path d="M0-39V-18M0-18L-17-4M0-18L17-4" strokeWidth="4"/>
    </g>
    <path d={Array.from({length:37},(_,i) => `${i?'L':'M'}${60+i*5} ${163+Math.sin(i/36*TAU*2-pose.breathPhase)*(5-pose.adverse*3.8)}`).join(' ')} strokeWidth="3"/>
  </g>;
}

function Memory({ pose, accent }: Omit<EffectProps, 'substanceKey'>) {
  return <g stroke={accent} strokeWidth="2.5" strokeLinecap="round">
    {[{x:100,y:98,a:-8},{x:161,y:113,a:9},{x:129,y:169,a:-3}].map(({x,y,a},i) => <g key={x} transform={`translate(${x+Math.sin(pose.t*.65+i)*3} ${y+Math.sin(pose.t*.45+i)*4}) rotate(${a})`} opacity={1-pose.adverse*(.25+i*.24)}>
      <rect x="-20" y="-24" width="40" height="48" rx="3" fill="#eee6ca"/><path d="M-11-11H11M-11 0H8"/><path d="M-11 11H12" opacity={1-pose.adverse}/>
    </g>)}
    <path d="M211 181q12-6 17 4q3 8-7 12v7" opacity={pose.adverse*.7}/><circle cx="221" cy="213" r="1.8" fill={accent} opacity={pose.adverse*.7}/>
  </g>;
}

function Dissociation({ pose, accent }: Omit<EffectProps, 'substanceKey'>) {
  const spread = 8+pose.adverse*16;
  return <g stroke={accent} strokeWidth="3.5" strokeLinejoin="round">
    {[0,1,2].map(i => <g key={i} transform={`translate(${83+i*spread+Math.sin(pose.t*.5+i)*5} ${100+i*21+Math.cos(pose.t*.5+i)*4})`} opacity={.8-i*.17}>
      <path d="M0 0H93V118H0Z" fill="#dbe5e4"/><path d="M0 88L37 64H93M37 64V0M37 64V118" strokeWidth="2"/>
      <circle cx="64" cy="31" r="10" fill="#b4c7ca" strokeWidth="2"/>
    </g>)}
    <path d="M583 92H674V183H583Z" strokeDasharray="6 7" opacity={pose.adverse*.5} transform={`translate(${Math.sin(pose.t*.5)*4} ${Math.cos(pose.t*.5)*3})`}/>
  </g>;
}

function Calendar({ x, y, width, height, columns, pose, accent }: { x:number; y:number; width:number; height:number; columns:number; pose:Pose; accent:string }) {
  const rows = columns===7?1:3;
  const cellWidth = (width-20)/columns;
  const cellHeight = (height-26)/rows;
  return <g transform={`translate(${x} ${y})`} stroke={accent}>
    <rect width={width} height={height} rx="5" fill="#eee6cd" strokeWidth="2.5"/><path d={`M0 17H${width}M15-4V6M${width-15}-4V6`} strokeWidth="3"/>
    {Array.from({length:rows*columns},(_,i) => <g key={i} transform={`translate(${10+i%columns*cellWidth} ${22+Math.floor(i/columns)*cellHeight})`}>
      <rect width={cellWidth-5} height={cellHeight-5} rx="2" fill={accent} stroke="none" opacity={.1+(.5+.5*Math.sin(pose.t*.24-i*.5))*.35*(1-pose.adverse*.5)}/>
      <path d={`M3 ${cellHeight*.45}h${Math.max(3,cellWidth-12)}`} strokeWidth="2" opacity={pose.adverse*.6}/>
    </g>)}
  </g>;
}

function Anabolic({ substanceKey, pose, accent }: EffectProps) {
  if (substanceKey === 'testosterone') return <>
    <Calendar x={52} y={202} width={198} height={52} columns={7} pose={pose} accent={accent}/>
    <g stroke={accent} strokeWidth="3" opacity={pose.adverse}>
      <path d="M79 212H223" strokeDasharray="3 7" opacity={1-pose.adverse*.65}/>
      {[89,125,161,197,233].map((x,i) => <circle key={x} cx={x} cy="212" r="3.5" fill={accent} opacity={.65-pose.adverse*.4+Math.sin(pose.t*.6-i)*.1}/>)}
    </g>
  </>;
  if (substanceKey === 'anabolic-steroids') return <>
    <Calendar x={54} y={65} width={104} height={109} columns={3} pose={pose} accent={accent}/>
    <g stroke={accent} strokeWidth="3" strokeLinecap="round">
      <path d="M182 78V162M182 120H229" strokeDasharray="4 5" opacity={.65-pose.adverse*.45}/>
      {[82,120,158].map((y,i) => <circle key={y} cx="182" cy={y} r={6+Math.sin(pose.t*.5+i)*1.5} fill="#e2c6b0" opacity={1-pose.adverse*.65}/>)}
      <path d="M217 109Q212 100 207 110Q203 119 219 132Q234 119 230 110Q225 102 219 111Z" fill="#c99883" opacity={pose.adverse*.8}/>
    </g>
  </>;
  return <g stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M75 101H222M113 101V138M188 101V138" strokeDasharray="5 6" opacity={1-pose.adverse*.65}/>
    {[75,148,222].map((x,i) => <g key={x}><rect x={x-17} y="72" width="34" height="50" rx="5" fill="#d8e2d7"/><path d={`M${x-8} 85h16M${x-8} 95h16M${x-8} 105h11`} strokeWidth="2" opacity={.55+Math.sin(pose.t*.35-i)*.2}/></g>)}
    <path d="M62 161H234" strokeWidth="2"/>{[72,104,136,168,200,232].map((x,i) => <rect key={x} x={x-4} y={150-Math.sin(pose.t*.25-i*.4)*3} width="8" height="18" rx="2" fill={accent} stroke="none" opacity={.35+pose.response*.3}/>)}
    <path d="M172 134l10 16l10-16" opacity={pose.adverse*.8}/>
  </g>;
}

function Bodycare({ substanceKey, pose, accent }: EffectProps) {
  if (substanceKey === 'vitamin-d') return <g stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="578" cy="90" r="15" fill="#e9d591"/><path d="M600 90H644M636 84L644 90L636 96"/>
    <path d="M658 66q-9-8-12 2q-1 7 7 10l9 22q-6 8 2 11q8 2 11-7l-10-26q7-9-1-11Z" fill="#f0e5c3" strokeWidth="3"/>
    {[611,626].map((x,i) => <circle key={x} cx={x+Math.sin(pose.t*.7+i)*5} cy={86+Math.cos(pose.t*.7+i)*4} r="4" fill={accent} stroke="none"/>)}
    {[[-14,-20],[2,-26],[19,-17],[24,3],[17,24],[-9,26]].map(([dx,dy],i) => <circle key={i} cx={665+dx+Math.sin(pose.t*.6+i)*2} cy={89+dy} r="4.5" fill="#bf946c" stroke="none" opacity={pose.adverse*.85}/>)}
  </g>;
  if (substanceKey === 'magnesium') return <g stroke={accent} strokeLinecap="round" strokeLinejoin="round">
    <g opacity={1-pose.adverse*.9}>
      <path d="M60 243H131L159 211H231M131 243L160 275H229M159 211V192M160 275V295" strokeWidth="4"/>
      {[60,100,139,180,222].map((x,i) => <circle key={x} cx={x} cy={x<140?243:x<181?213:211} r={4+Math.sin(pose.t*.8-i)*1.2} fill="#c1d5bc" strokeWidth="2"/>)}
    </g>
    <g opacity={pose.adverse} stroke="#b39376" strokeWidth="6">
      <path d={`M70 210C${95+Math.sin(pose.t)*5} 190 221 196 222 221C224 240 67 231 68 251C68 272 220 255 221 277C220 291 104 294 76 282`}/>
      <path d="M78 222H210M80 264H209" strokeWidth="2" opacity=".4"/>
    </g>
  </g>;
  const lid = 12*(1-pose.adverse);
  return <g stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d={`M92 93Q145 ${77-lid} 200 93Q147 ${111-pose.adverse*16} 92 93Z`} fill="#d6d8b2"/>
    <ellipse cx="146" cy="94" rx="8" ry={Math.max(1,lid*.65)} fill="#91a17d" stroke="none" opacity={1-pose.adverse}/>
    <path d={`M92 93Q145 ${111-pose.adverse*16} 200 93`} strokeWidth="4"/>
    <path d="M112 102L108 109M145 106V114M178 102L182 109" opacity={pose.adverse}/>
    <path d="M76 65Q92 40 113 59Q94 80 76 65ZM180 59Q207 40 221 65Q201 80 180 59Z" fill="#b7c39c" transform={`translate(0 ${Math.sin(pose.t*.55)*3})`} opacity=".85"/>
  </g>;
}

function Interactions({ pose, accent }: Omit<EffectProps, 'substanceKey'>) {
  const remaining = 1-pose.adverse*.84;
  return <g stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="579" y="85" width="35" height="21" rx="10.5" fill="#c6cba7"/><path d="M596 86V105"/>
    <rect x="644" y="85" width="35" height="21" rx="10.5" fill="#c8b9ce" stroke="#9a85aa"/><path d="M661 86V105" stroke="#9a85aa"/>
    <path d={`M596 116Q629 ${143+Math.sin(pose.t*.5)*4} 661 116M651 117L661 116L660 126`} opacity=".75"/>
    <path d="M596 141V224M590 218L596 225L602 218"/><path d="M661 141V224M655 218L661 225L667 218" stroke="#9a85aa" opacity={remaining}/>
    {[155,180,205].map((y,i) => <g key={y}><circle cx="596" cy={y} r="4" fill={accent} opacity={.65+Math.sin(pose.t*.8-i)*.2}/><circle cx="661" cy={y} r={2+remaining*2} fill="#9a85aa" stroke="none" opacity={remaining*(.65+Math.sin(pose.t*.8-i)*.2)}/></g>)}
    <circle cx="596" cy="245" r="12" fill="#c9d2b3"/><circle cx="661" cy="245" r="12" fill="#e0d9e3" stroke="#b2a1be"/><circle cx="661" cy="245" r={3+remaining*5} fill="#9a85aa" stroke="none" opacity={remaining}/>
  </g>;
}

/** Each setting reserves side space for a metaphor; all effects share scene time. */
export default function Atmosphere({ id, substanceKey, pose }: { id: string; substanceKey: string; pose: Pose }) {
  const set = getSceneSet(substanceKey);
  const props = { substanceKey, pose, accent: set.accent };
  return <g aria-hidden="true" data-scene-atmosphere={substanceKey} fill="none" opacity={Math.min(1,pose.response+pose.adverse)}>
    <defs><clipPath id={`${id}-atmosphere-zones`}><rect x="16" y="27" width="262" height="273"/><rect x="548" y="35" width="156" height="269"/></clipPath></defs>
    <g clipPath={`url(#${id}-atmosphere-zones)`}>
      {set.family==='stimulation' && <Stimulation {...props}/>}
      {set.family==='heat' && <Heat {...props}/>}
      {set.family==='perception' && <Perception {...props}/>}
      {set.family==='slowdown' && <Slowdown {...props}/>}
      {set.family==='cannabinoid' && <Memory {...props}/>}
      {set.family==='dissociation' && <Dissociation {...props}/>}
      {set.family==='anabolic' && <Anabolic {...props}/>}
      {set.family==='bodycare' && <Bodycare {...props}/>}
      {set.family==='interactions' && <Interactions {...props}/>}
    </g>
  </g>;
}
