import type { Organ } from './profiles';
import type { sampleScene } from './timeline';

const shapes: Record<Organ, string> = {
  brain: 'M57 21Q53 12 62 12Q65 6 71 11Q78 7 83 14Q90 15 86 24Q88 29 81 32L73 30L67 32L59 29Z',
  lungs: 'M67 58L65 66Q57 60 51 72L49 88Q52 96 63 91L68 82ZM74 58L76 66Q84 60 90 72L92 88Q89 96 78 91L73 82Z',
  heart: 'M70 75Q64 69 63 78Q62 86 72 92Q82 82 79 77Q76 71 70 75Z',
  liver: 'M48 98Q64 91 83 100L78 111L58 113L47 107Z',
  gut: 'M60 114Q48 110 52 125Q49 135 61 140H81Q91 132 85 120Q90 110 75 115L72 124L62 127Z',
  kidneys: 'M49 113Q40 118 46 131Q54 137 58 128L54 121L57 116Z M91 113Q100 118 94 131Q86 137 82 128L86 121L83 116Z',
  bladder: 'M61 142Q70 138 79 142L77 152L70 157L63 152Z',
  muscle: 'M37 65L46 68L40 98L32 94ZM96 68L105 65L110 94L102 98ZM53 158H64L61 187H51ZM78 158H89L92 187H81Z',
  hormones: 'M68 23H74V29H68ZM66 47H77V54H66ZM68 99H74V105H68ZM64 148H79V154H64Z',
  bones: 'M66 59H75V145H66ZM51 61H90V67H51ZM57 157H63V191H57ZM80 157H86V191H80Z',
};

type BodyMapProps = {
  organs: Organ[];
  risks: Organ[];
  pose: ReturnType<typeof sampleScene>;
  motion: string;
  substanceKey?: string;
};

function MedicineInteraction({ pose }: Pick<BodyMapProps, 'pose'>) {
  const remainingSignal = 1 - pose.adverse * .85;
  const pulse = .75 + Math.sin(pose.t * Math.PI / 2) * .15;
  return <svg className="scene-body-map" viewBox="0 0 140 212" aria-hidden="true">
    <rect x="8" y="23" width="124" height="171" rx="18" fill="#eef0e5" stroke="#c9cebd" strokeWidth="1.5"/>
    <g strokeWidth="2">
      <rect x="17" y="40" width="42" height="23" rx="11.5" fill="#a8b69b" stroke="#768968"/>
      <path d="M38 41V62" stroke="#768968"/>
      <rect x="81" y="40" width="42" height="23" rx="11.5" fill="#c3b4ce" stroke="#8f789f"/>
      <path d="M102 41V62" stroke="#8f789f"/>
    </g>
    <g fill="none" stroke="#9d8bab" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity={.3 + pose.adverse * .7}>
      <path d="M46 73Q70 96 94 73M86 73H94V81"/>
    </g>
    <g fill="none" stroke="#829674" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M38 82V142M33 136L38 142L43 136"/>
    </g>
    <g fill="none" stroke="#9d8bab" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity={remainingSignal}>
      <path d="M102 82V142M97 136L102 142L107 136"/>
    </g>
    {[97, 115, 131].map((y, index) => {
      const passing = .65 + Math.sin(pose.t * Math.PI / 2 - index * .8) * .25;
      return <g key={y}>
        <circle cx="38" cy={y} r="4" fill="#829674" opacity={passing}/>
        <circle cx="102" cy={y} r={2 + remainingSignal * 2} fill="#9d8bab" opacity={passing * remainingSignal}/>
      </g>;
    })}
    <circle cx="38" cy="163" r="13" fill="#dce5d1" stroke="#829674" strokeWidth="2"/>
    <circle cx="38" cy="163" r={5 + pulse * 2} fill="#829674" opacity={pulse}/>
    <circle cx="102" cy="163" r="13" fill="#ebe4ef" stroke="#c5b8cd" strokeWidth="2"/>
    <circle cx="102" cy="163" r={3 + remainingSignal * 5} fill="#9d8bab" opacity={pulse * remainingSignal}/>
  </svg>;
}

export default function BodyMap({ organs, risks, pose, motion, substanceKey = '' }: BodyMapProps) {
  if (motion === 'interaction') return <MedicineInteraction pose={pose}/>;
  const hormoneSignal = 1 - pose.adverse * .82;
  const injuryOrgans = motion === 'hormone' ? risks.filter(organ => organ !== 'hormones') : risks;
  return <svg className="scene-body-map" viewBox="0 0 140 212" aria-hidden="true">
    <path d="M51 23Q51 3 71 3Q91 3 91 23Q91 40 79 46V53L100 59Q108 62 111 75L123 121Q125 130 119 132Q112 135 109 125L98 95L98 144L94 193Q94 205 86 205Q78 204 78 194L75 157H67L64 194Q64 205 56 205Q48 204 48 193L44 144V95L33 125Q30 135 23 132Q17 130 19 121L31 75Q34 62 42 59L63 53V46Q51 40 51 23Z" fill="#e5e6dc" stroke="#c9cebd" strokeWidth="1.5"/>
    <path d="M70 57V142M52 152H90" stroke="#cdd2c3" strokeDasharray="3 5"/>
    <g opacity=".18">{[...new Set([...organs, ...risks])].map(organ => <path key={organ} d={shapes[organ]} fill="#8d9e80"/>)}</g>
    <g opacity={pose.response}>{organs.map(organ => <path key={organ} d={shapes[organ]} fill={organ === 'brain' || organ === 'hormones' ? '#b29bc3' : '#95aa84'} stroke="#728c68" strokeWidth="1" style={{ transformOrigin: '70px 80px', transform: organ === 'lungs' ? `scale(${1 + pose.breath * .035})` : organ === 'heart' ? `scale(${pose.heart})` : undefined }}/>)}</g>
    <g opacity={pose.adverse}>{injuryOrgans.map((organ,index) => <path key={organ} d={shapes[organ]} fill="#d99986" stroke="#ae6d59" strokeWidth="1.3" opacity={substanceKey==='anabolic-steroids' ? .6 + Math.sin(pose.t*2-index*1.8)*.35 : 1} style={{ transformOrigin: '70px 80px', transform: organ === 'lungs' ? `scale(${1 + pose.breath * .035})` : organ === 'heart' ? `scale(${pose.heart})` : undefined }}/>)}</g>
    {motion === 'hormone' && substanceKey!=='ostarine' && <g opacity={Math.min(1, .3 + pose.response + pose.adverse)}>
      <path d="M71 31V46M71 56V97M71 107V146" fill="none" stroke="#9b83ac" strokeWidth="2.5" strokeDasharray="3 4" opacity={hormoneSignal}/>
      {[26, 51, 102, 151].map((y, index) => {
        const pulse = .7 + Math.sin(pose.t * Math.PI / 2 - index * .7) * .3;
        return <g key={y}>
          <circle cx="71" cy={y} r="5" fill="#f5eff8" stroke="#b9a7c4" strokeWidth="1"/>
          <circle cx="71" cy={y} r={2 + hormoneSignal * 2} fill="#9176a3" opacity={hormoneSignal * pulse}/>
          <circle cx="71" cy={y} r={5 + hormoneSignal * pulse * 3} fill="none" stroke="#b49bc7" strokeWidth="1" opacity={hormoneSignal * .5}/>
        </g>;
      })}
    </g>}
    {substanceKey==='ostarine' && <g opacity={pose.response+pose.adverse} fill="none" stroke="#a18bae" strokeWidth="2"><path d="M70 44V57M70 57L42 77M70 57L100 77" strokeDasharray="3 5" strokeDashoffset={-pose.t*3}/><circle cx="70" cy="44" r="5"/><path d="M65 42h10M70 39v10"/><path d="M62 104h16" stroke="#b27760" strokeWidth={1+pose.adverse*2}/></g>}
    {substanceKey==='vitamin-d' && <g fill="#d7b467" opacity={pose.response}>{[0,1,2].map(i=><circle key={i} cx={63+Math.sin(pose.t*1.5-i)*6} cy={82+i*20} r={2.5+Math.sin(pose.t*1.5-i)*.7}/>)}</g>}
    <circle cx="126" cy="12" r="3" fill="#8c9f79" opacity={.8 * (1 - pose.adverse)}/>
    <circle cx="126" cy="12" r="3" fill={motion === 'hormone' ? '#9b83ac' : '#bd7d66'} opacity={.8 * pose.adverse}/>
  </svg>;
}
