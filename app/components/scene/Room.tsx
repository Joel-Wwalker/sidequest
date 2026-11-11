import { memo } from 'react';
import { getSceneSet } from './sets';

function Plant({ x, bottom, scale = 1, pot = '#bb9079' }: { x: number; bottom: number; scale?: number; pot?: string }) {
  return <g transform={`translate(${x} ${bottom-38*scale}) scale(${scale})`}>
    <path d="M0 0V-80M0-25Q-35-28-31-56Q-4-58 0-32M0-50Q32-54 29-81Q2-81 0-57M0-67Q-22-76-17-99Q6-94 0-67" fill="#829779" stroke="#6f896d" strokeWidth="3"/>
    <path d="M-24-2H24L19 38H-18Z" fill={pot} stroke="#9c806a" strokeWidth="2"/><path d="M-26-3H26V6H-26Z" fill="#d3b291"/>
  </g>;
}

function Window({ x, y, width, height, city = false, night = false }: { x: number; y: number; width: number; height: number; city?: boolean; night?: boolean }) {
  return <g transform={`translate(${x} ${y})`}>
    <rect width={width} height={height} rx="3" fill="#aa9e91"/><rect x="6" y="6" width={width-12} height={height-12} fill={night?'#9499b7':'#c6d7d3'}/><circle cx={width*.73} cy={height*.25} r="16" fill={night?'#e2dfcf':'#f2df9d'}/>
    {city ? <g fill="#74889c">{[.05,.24,.43,.62,.8].map((n,i) => <g key={n}><rect x={width*n+4} y={height*(.28+(i%3)*.1)} width={width*.15} height={height*(.66-(i%3)*.1)}/>{[.47,.62,.77].map(m => <path key={m} d={`M${width*n+10} ${height*m}h7m5 0h7`} stroke="#d3d5c6" strokeWidth="4"/>)}</g>)}</g> : <path d={`M6 ${height*.76}Q${width*.24} ${height*.32} ${width*.48} ${height*.77}Q${width*.75} ${height*.45} ${width-6} ${height*.7}V${height-6}H6Z`} fill="#93ac95"/>}
    <path d={`M${width/2} 6V${height-6}M6 ${height*.52}H${width-6}`} stroke="#f1ecdc" strokeWidth="6"/><rect x="-6" y={height-3} width={width+12} height="8" fill="#b9a38c"/>
  </g>;
}

function Books({ x, y, count = 5 }: { x: number; y: number; count?: number }) {
  return <g transform={`translate(${x} ${y})`}>{Array.from({length:count},(_,i) => <g key={i}><rect x={i*15} y={-31-(i%3)*6} width="12" height={31+(i%3)*6} rx="1" fill={['#a0ad92','#bf9688','#aaa0b8','#bfad82'][i%4]}/><path d={`M${i*15+3} ${-22-(i%3)*6}h6`} stroke="#eee5d3" strokeWidth="2"/></g>)}</g>;
}

function Furniture({ substanceKey, id }: { substanceKey: string; id: string }) {
  switch (substanceKey) {
    case 'nicotine': return <>
      <rect x="16" y="20" width="262" height="284" fill={`url(#${id}-tiles)`}/><rect x="35" y="64" width="224" height="157" rx="6" fill="#d6d5bd" stroke="#879b91" strokeWidth="7"/>
      <path d="M28 267H272V279H28M41 279V352M253 279V352" fill="none" stroke="#879b93" strokeWidth="10"/><path d="M50 257H138V264H50M57 248H133V256H57M64 240H125V248H64" fill="#e8e4d4" stroke="#b5b8a6" strokeWidth="2"/>
      <rect x="184" y="238" width="41" height="28" rx="5" fill="#acb8ae"/><path d="M225 243h12v15h-12" fill="none" stroke="#81988b" strokeWidth="4"/>
      <rect x="559" y="49" width="140" height="296" fill="#a3afa0" stroke="#7d9287" strokeWidth="5"/>{[126,211,299].map((y,i) => <g key={y}><Books x={573} y={y-5} count={i===1?5:7}/><path d={`M565 ${y}H693`} stroke="#7d9287" strokeWidth="6"/></g>)}
    </>;
    case 'cocaine': return <>
      <Window x={24} y={38} width={244} height={191} city night/><path d="M21 261H274V273H21M37 273V351M258 273V351" fill="none" stroke="#88929b" strokeWidth="9"/>
      <rect x="168" y="205" width="84" height="48" rx="3" fill="#677b89"/><rect x="174" y="211" width="72" height="35" fill="#b3c7c6"/><path d="M210 253V261M192 261H228" stroke="#7d8c98" strokeWidth="5"/><path d="M47 251H124V259H47M55 241H120V249H55" fill="#e4dfd3" stroke="#bdbaad" strokeWidth="2"/>
      <rect x="558" y="57" width="143" height="143" rx="5" fill="#bdccd0" stroke="#8b9fa9" strokeWidth="5"/><path d="M570 86H688M570 117H688M570 148H688M570 179H688" stroke="#a5bbc0"/>
      <rect x="565" y="241" width="133" height="108" fill="#9ea9b0"/>{[255,286,317].map(y => <g key={y}><rect x="573" y={y} width="116" height="25" fill="#bbc1c1"/><path d={`M620 ${y+12}h22`} stroke="#84929c" strokeWidth="4"/></g>)}
    </>;
    case 'mdma': return <>
      <rect x="18" y="34" width="85" height="269" fill="#b18b78"/>{[29,44,59,74,89].map(x => <path key={x} d={`M${x} 34V303`} stroke="#d3b294" strokeWidth="7"/>)}
      <rect x="127" y="136" width="125" height="195" rx="7" fill="#9c7d71" stroke="#80685f" strokeWidth="4"/><circle cx="190" cy="189" r="28" fill="#574f53" stroke="#bc9a87" strokeWidth="7"/><circle cx="190" cy="268" r="44" fill="#635b60" stroke="#c4a28e" strokeWidth="7"/><circle cx="190" cy="268" r="18" fill="#a68d86"/>
      <rect x="118" y="55" width="145" height="57" rx="7" fill="#e6c7ac"/><circle cx="627" cy="157" r="48" fill="#70636b" stroke="#d9bbab" strokeWidth="8"/><circle cx="627" cy="157" r="17" fill="#c8978c"/>
      <rect x="553" y="252" width="145" height="79" fill="#b68f76"/><path d="M563 331V352M687 331V352" stroke="#917965" strokeWidth="7"/><rect x="564" y="237" width="119" height="15" rx="3" fill="#806d64"/><ellipse cx="611" cy="237" rx="30" ry="7" fill="#514d52"/><path d="M665 230L647 240H637" stroke="#d9c2a5" strokeWidth="3" fill="none"/>
    </>;
    case 'synthetic-cathinones': return <>
      <path d="M16 36H269L231 203H16Z" fill="#ccc3d1"/><path d="M16 36L155 203H16ZM269 36L155 203H231Z" fill="#ada5b9"/><path d="M64 36L202 203M112 36L247 187" stroke="#e3d6dc" strokeWidth="8"/>
      <path d="M24 255L246 220L277 244L51 281Z" fill="#9793a3"/><path d="M51 281V352M246 249V345" stroke="#777384" strokeWidth="8"/><path d="M84 240L177 224L202 240L107 256Z" fill="#d7d4da"/>
      <rect x="558" y="65" width="141" height="125" fill="#e9dfe6" stroke="#9590a5" strokeWidth="5"/><path d="M555 251L679 220L702 262L571 289Z" fill="#79788a"/><path d="M573 250L667 231M580 265L678 245" stroke="#c1b1bf" strokeWidth="5"/><path d="M575 288V348M688 265V348" stroke="#7e7b8b" strokeWidth="7"/>
    </>;
    case 'alcohol': return <>
      <rect x="16" y="166" width="263" height="137" fill="#c9a78b"/>{[37,76,115,154,193,232,270].map(x => <path key={x} d={`M${x} 171V302`} stroke="#b18e74" strokeWidth="3"/>)}<path d="M16 165H278V176H16" fill="#ac876a"/>
      <ellipse cx="146" cy="117" rx="87" ry="66" fill="#f2dfc2" stroke="#b89977" strokeWidth="6"/>
      <path d="M75 268V226H123V269M184 268V226H231V269" fill="#b88d6e" stroke="#9a775e" strokeWidth="6"/><ellipse cx="148" cy="278" rx="121" ry="24" fill="#bd9575" stroke="#9f7b60" strokeWidth="5"/><path d="M80 293L66 353M216 293L231 353" stroke="#9f7b60" strokeWidth="11"/><ellipse cx="100" cy="271" rx="27" ry="8" fill="#ebdfc4"/>
      <rect x="560" y="241" width="138" height="104" rx="4" fill="#b48e72"/><path d="M568 254H690V289H568ZM629 295V337" fill="#c7a084" stroke="#98775e" strokeWidth="2"/><Window x={567} y={57} width={121} height={148} night/>
    </>;
    case 'cannabis': return <>
      <Window x={46} y={51} width={193} height={169}/><path d="M19 35H272V48H19M23 47H70L60 165L40 243H18ZM219 47H267V243H247L226 165Z" fill="#adb18c"/><path d="M37 53L29 229M55 53L45 185M238 53L250 213M254 53L261 232" stroke="#909b76" strokeWidth="5"/>
      <path d="M34 277Q34 256 52 256H246Q264 256 264 277V334H34Z" fill="#a8ac8b"/><path d="M25 290H57V310H240V290H273V347H25Z" fill="#8d9b7c"/><rect x="70" y="272" width="47" height="37" rx="7" fill="#d7bf91"/>
      <path d="M652 166V337M632 337H674" stroke="#a39172" strokeWidth="7"/><path d="M629 122H675L689 167H615Z" fill="#dcc9a1"/><rect x="557" y="295" width="69" height="46" rx="13" fill="#bdac91"/><rect x="562" y="283" width="52" height="12" rx="2" fill="#aa9bb2"/><path d="M595 283V269L603 275L611 267V283" fill="#d0a58e"/>
    </>;
    case 'psilocybin': return <>
      <path d="M19 302V96L145 22L273 96V302Z" fill="#cbdfd0" stroke="#819c8f" strokeWidth="6"/><path d="M145 25V303M21 97H271M21 183H271M82 62V301M211 62V301" stroke="#94ad9a" strokeWidth="5"/>
      <Plant x={72} bottom={303.5} scale={1.15}/><Plant x={219} bottom={303.5} scale={1.35} pot="#a9b496"/><path d="M32 307H265V319H32M45 319V351M251 319V351" stroke="#9f9273" strokeWidth="7"/>
      <path d="M558 280H698L689 339H568Z" fill="#b99c7d"/><Plant x={589} bottom={280} scale={.55}/><Plant x={663} bottom={280} scale={.73} pot="#b8ae89"/><path d="M562 43Q627 15 693 43V176H562Z" fill="#dde7d3" stroke="#a3b69a" strokeWidth="4"/>
    </>;
    case 'lsd': return <>
      <path d="M24 214V126Q24 30 148 30Q271 30 271 126V214Z" fill="#aaa3bf" stroke="#8c84a5" strokeWidth="6"/><path d="M29 124H267M148 34V213M65 64L231 213M232 64L67 213" stroke="#c9bdd7" strokeWidth="4"/><circle cx="148" cy="122" r="46" fill="#c9bfd6"/>
      <path d="M73 266L222 207L236 236L86 291Z" fill="#9a91b1" stroke="#776f94" strokeWidth="3"/><ellipse cx="229" cy="222" rx="7" ry="16" transform="rotate(-22 229 222)" fill="#605d7b"/><path d="M155 266L129 352M155 266L202 352M155 266V348" stroke="#847a97" strokeWidth="6"/>
      <rect x="555" y="49" width="145" height="181" fill="#c6b8d6" stroke="#9b89ad" strokeWidth="5"/><path d="M628 74L681 200H574Z" fill="#e1cdd5" stroke="#aa92b0" strokeWidth="3"/><ellipse cx="613" cy="151" rx="12" ry="7" fill="#f5e9df"/><ellipse cx="645" cy="151" rx="12" ry="7" fill="#f5e9df"/><circle cx="615" cy="151" r="4" fill="#94809e"/><circle cx="643" cy="151" r="4" fill="#94809e"/>
    </>;
    case '2c-b': return <>
      <path d="M139 38L37 354M139 38L263 354M72 287H238" stroke="#b3997b" strokeWidth="9"/><rect x="55" y="72" width="178" height="197" fill="#d6b6a3"/><rect x="64" y="81" width="160" height="177" fill="#f4e9d8"/><path d="M73 238Q96 218 111 239M177 94Q202 84 214 106" stroke="#cfa498" strokeWidth="8" fill="none"/>
      <rect x="561" y="260" width="137" height="65" fill="#a4ada3"/><path d="M571 325V348M688 325V348M567 285H691M567 310H691" stroke="#80958a" strokeWidth="5"/>{[580,612,644,676].map((x,i) => <g key={x}><rect x={x-10} y="238" width="20" height="22" rx="2" fill={['#c79d94','#c6b579','#9aa9a0','#aaa0ba'][i]}/><path d={`M${x} 239V219`} stroke="#a18a71" strokeWidth="3"/></g>)}
      <path d="M576 52H685V189L663 181L642 192L620 180L599 188L576 179Z" fill="#d7bdc3"/><path d="M591 69L670 160M668 72L590 159" stroke="#c49eac" strokeWidth="13"/>
    </>;
    case 'ketamine': return <>
      <path d="M24 303V60H149V303" fill="#c9d8dc" stroke="#a5b9c2" strokeWidth="6"/><path d="M150 301V83H271V301" fill="#dae5e5" stroke="#b7c8ca" strokeWidth="6"/><path d="M34 286L136 77M163 282L257 98" stroke="#eff1eb" strokeWidth="9" opacity=".6"/>
      <rect x="37" y="316" width="226" height="26" rx="13" fill="#b6c8ca"/><path d="M58 342V356M242 342V356" stroke="#9aafb6" strokeWidth="6"/><path d="M558 44H685L702 213H575Z" fill="#d7e2e2" stroke="#b1c4ca" strokeWidth="4"/><path d="M573 60H671L684 197H588Z" fill="#e9eeee"/>
      <rect x="559" y="286" width="139" height="54" rx="13" fill="#b3c5cb"/><rect x="574" y="263" width="106" height="29" rx="12" fill="#d1dedf"/>
    </>;
    case 'fentanyl': return <>
      <rect x="29" y="200" width="65" height="134" rx="14" fill="#9eafc5"/><rect x="22" y="267" width="253" height="67" rx="8" fill="#aebed0"/><rect x="33" y="247" width="239" height="32" rx="12" fill="#e0e5e6"/><rect x="45" y="235" width="71" height="29" rx="11" fill="#edf0e9"/><path d="M129 248H267V320H129Q147 285 129 248" fill="#a7b4d0"/><path d="M148 254V314M167 254V315" stroke="#bdc8da" strokeWidth="3"/>
      <Window x={566} y={49} width={129} height={107} night/><rect x="561" y="268" width="130" height="77" rx="4" fill="#a0b2c4"/><rect x="573" y="279" width="106" height="27" fill="#c5d0d8"/><path d="M625 211V262M608 264H642" stroke="#9aa9bc" strokeWidth="5"/><path d="M607 184H641L653 214H595Z" fill="#dedfd0"/><rect x="32" y="44" width="236" height="139" fill="#d3dfe7" stroke="#b6c7d5" strokeWidth="3"/>
    </>;
    case 'testosterone': return <>
      <Window x={25} y={35} width={244} height={157}/><path d="M39 284H263V304H39M60 304L47 353M242 304L255 353" fill="#a3a88b" stroke="#8d967c" strokeWidth="5"/><path d="M85 268H143M77 257V280M86 254V283M143 254V283M152 257V280" stroke="#7f8c81" strokeWidth="8"/>
      <rect x="559" y="47" width="137" height="174" rx="5" fill="#c2ccb3"/>{[576,604,632,660,684].map(x => <path key={x} d={`M${x} 61V208`} stroke="#a9b69a" strokeWidth="3"/>)}<path d="M589 85V167Q589 194 614 194Q639 194 639 167V85" fill="none" stroke="#7e9581" strokeWidth="7"/><path d="M665 93V189" stroke="#b4967b" strokeWidth="8"/>
      <rect x="557" y="295" width="139" height="35" rx="14" fill="#9aab95"/><ellipse cx="572" cy="312" rx="15" ry="17" fill="#bdc8ac"/><ellipse cx="572" cy="312" rx="6" ry="9" fill="#8c9f87"/>
    </>;
    case 'anabolic-steroids': return <>
      <rect x="14" y="25" width="264" height="279" fill={`url(#${id}-brick)`}/><rect x="550" y="25" width="156" height="279" fill={`url(#${id}-brick)`}/><path d="M37 225V349M259 225V349M37 248H259M37 303H259" stroke="#817e77" strokeWidth="9"/>
      {[70,144,216].map(x => <path key={x} d={`M${x-18} 232H${x+18}M${x-21} 219V244M${x+21} 219V244M${x-18} 287H${x+18}M${x-23} 273V299M${x+23} 273V299`} stroke="#6e7978" strokeWidth="8"/>)}
      <path d="M574 72V351M684 72V351M563 351H695M558 148H702" stroke="#858981" strokeWidth="8"/><path d="M566 125V172M576 119V178M683 119V178M693 125V172" stroke="#686f6c" strokeWidth="10"/><rect x="40" y="49" width="214" height="142" rx="5" fill="#dfd3bf" stroke="#a68e74" strokeWidth="5"/>
    </>;
    case 'ostarine': return <>
      <rect x="31" y="39" width="239" height="161" rx="4" fill="#bdcfd0" stroke="#8ca6aa" strokeWidth="5"/><path d="M45 68H258M45 100H258M45 132H258M45 164H258M77 50V188M119 50V188M161 50V188M203 50V188M245 50V188" stroke="#a8bfc1"/>
      <path d="M30 247L253 212L274 257L50 290Z" fill="#b6b5a2" stroke="#919e92" strokeWidth="4"/><path d="M65 290L51 352M243 263L261 352" stroke="#879a8e" strokeWidth="8"/><path d="M62 251L201 229L212 254L73 274Z" fill="#e7e7d5"/>
      <rect x="564" y="232" width="133" height="111" fill="#a6b9b0"/>{[245,277,309].map(y => <g key={y}><rect x="573" y={y} width="114" height="24" fill="#c7d2c5"/><path d={`M617 ${y+12}h26`} stroke="#8fa59a" strokeWidth="4"/></g>)}<circle cx="632" cy="127" r="49" fill="#dfe5d7" stroke="#93adb0" strokeWidth="7"/><path d="M602 126A30 30 0 0 1 662 126M632 127L650 107" fill="none" stroke="#a3b9b5" strokeWidth="4"/>
    </>;
    case 'vitamin-d': return <>
      <circle cx="146" cy="135" r="106" fill="#d7e5cb" stroke="#b7bd93" strokeWidth="8"/><circle cx="146" cy="108" r="38" fill="#f0d992"/><path d="M52 164Q134 120 240 167V182Q146 247 52 182Z" fill="#b6c69c"/><path d="M145 35V237M43 137H247" stroke="#f7eed1" strokeWidth="7"/>
      <path d="M26 277H270V289H26M44 289V352M252 289V352" stroke="#b5a57d" strokeWidth="9"/><ellipse cx="101" cy="267" rx="34" ry="10" fill="#f8eed4"/><path d="M75 265Q77 284 101 284Q125 283 128 265Z" fill="#d3bd8f"/><rect x="190" y="250" width="23" height="26" rx="4" fill="#e9d3a2"/>
      <path d="M555 219H700M555 298H700M565 219V351M690 219V351" stroke="#a5ac80" strokeWidth="7"/><Plant x={591} bottom={215.5} scale={.5}/><Plant x={661} bottom={294.5} scale={.5} pot="#bdba8d"/><rect x="552" y="40" width="151" height="103" fill="#f2e7c2" stroke="#d3c69f" strokeWidth="3"/>
    </>;
    case 'magnesium': return <>
      <rect x="23" y="38" width="248" height="292" rx="3" fill="#b2b6a1" stroke="#959e87" strokeWidth="5"/><rect x="35" y="52" width="224" height="107" fill="#d7d7bf"/><path d="M35 106H259" stroke="#98a18b" strokeWidth="5"/>
      {[57,102,147,192,235].map((x,i) => <g key={x} transform={`translate(0 ${i%2?7:4.5})`}><rect x={x-12} y={i%2?120:67} width="25" height="31" rx="4" fill={i%2?'#c5b996':'#a9beb0'} stroke="#91a28c" strokeWidth="2"/><rect x={x-13} y={i%2?116:63} width="27" height="6" rx="1" fill="#9c9f87"/></g>)}<rect x="36" y="174" width="222" height="142" fill="#e1e2cc" stroke="#a8af96" strokeWidth="3"/>
      <path d="M560 261Q560 239 582 239H667Q687 239 687 261V318H560Z" fill="#a7b5aa"/><path d="M552 287H576V313H678V287H700V337H552Z" fill="#8eaa9e"/><path d="M596 273Q615 265 630 275Q646 263 666 270V294Q646 287 630 299Q612 288 596 296Z" fill="#eee7cc" stroke="#bdba9e" strokeWidth="2"/>
      <rect x="562" y="58" width="47" height="73" rx="3" fill="#d8ddc8" stroke="#a7b49d" strokeWidth="3"/><circle cx="585" cy="78" r="6" fill="#9aab98"/><path d="M585 87V110M574 97H596M585 108L576 122M585 108L594 122" stroke="#9aab98" strokeWidth="4"/>
    </>;
    case 'ashwagandha': return <>
      <path d="M43 276V207Q43 139 145 139Q250 139 250 207V276" fill="#c4b38d" stroke="#a58f6b" strokeWidth="8"/>{[75,105,135,165,195,225].map(x => <path key={x} d={`M${x} 166V273`} stroke="#e3d0a5" strokeWidth="3"/>)}{[185,211,237,263].map(y => <path key={y} d={`M50 ${y}H244`} stroke="#a58f6b" strokeWidth="3"/>)}
      <path d="M36 270H257V318H36Z" fill="#b69c75"/><rect x="54" y="274" width="188" height="30" rx="13" fill="#d8c5a2"/><path d="M56 317L43 354M239 317L251 354" stroke="#9c8767" strokeWidth="7"/><path d="M171 267H221V326H171Z" fill="#a8ad8a"/><path d="M176 326V338M186 326V338M196 326V338M206 326V338M216 326V338" stroke="#9ca480" strokeWidth="3"/>
      <path d="M559 267H696V279H559M576 279V351M683 279V351" stroke="#ae9c7b" strokeWidth="8"/><Plant x={604} bottom={263} scale={.82}/><Plant x={673} bottom={263} scale={.49} pot="#c8b68d"/><path d="M630 24V75M598 73H662L654 108H605Z" fill="#c3ad86" stroke="#9d9776" strokeWidth="3"/><path d="M609 76Q588 116 608 143M631 80Q650 114 630 150M647 77Q672 112 655 130" fill="none" stroke="#8e9e79" strokeWidth="10"/>
    </>;
    case 'st-johns-wort': return <>
      {[29,154].map((x,i) => <g key={x}><rect x={x} y="45" width="112" height="161" fill="#b0ac8e"/><rect x={x+7} y="52" width="98" height="147" fill="#e4e3ca"/><path d={`M${x+56} 176V98M${x+56} 140L${x+30} 119M${x+56} 155L${x+80} 132`} stroke="#9da779" strokeWidth="4"/><g fill={i?'#d6c080':'#d9c68c'}>{[[-7,-7],[7,-7],[-7,7],[7,7]].map(([dx,dy]) => <circle key={`${dx},${dy}`} cx={x+56+dx} cy={91+dy} r="9"/>)}</g><circle cx={x+56} cy="91" r="6" fill="#b5a060"/></g>)}
      <path d="M24 269H274V282H24M43 282V350M254 282V350" stroke="#aaa081" strokeWidth="9"/><path d="M65 247H175V265H65Z" fill="#a5ad8d"/><path d="M71 253H168" stroke="#e1dcc3" strokeWidth="5"/><Plant x={231} bottom={264.5} scale={.4} pot="#b4b697"/>
      <rect x="558" y="43" width="143" height="301" rx="4" fill="#b3baa3" stroke="#92a18b" strokeWidth="5"/><rect x="568" y="55" width="123" height="224" fill="#e0e4d2"/><path d="M568 282H691M568 316H691" stroke="#94a088" strokeWidth="5"/>{[588,626,666].map((x,i) => <rect key={x} x={x-10} y="293" width="21" height="23" rx="3" fill={i===1?'#b9aa87':'#a5b9a3'}/>)}
    </>;
    default: return <>
      <rect x="17" y="75" width="258" height="170" fill={`url(#${id}-tiles)`}/><rect x="19" y="255" width="256" height="83" fill="#c7ad89"/><path d="M19 251H275V263H19" fill="#a88d6d"/><path d="M107 266V332M193 266V332M29 300H264" stroke="#aa906f" strokeWidth="3"/><path d="M54 281H77M134 281H159M216 281H241" stroke="#94795c" strokeWidth="4"/>
      <g transform="translate(0 4.5)"><rect x="44" y="173" width="103" height="72" fill="#afa995" stroke="#8d927e" strokeWidth="3"/><rect x="53" y="182" width="85" height="20" rx="3" fill="#d5d4bd"/><path d="M59 211H133V238H59Z" fill="#6f7e70"/><rect x="84" y="222" width="22" height="16" rx="3" fill="#f2e3bf"/><path d="M106 225h7v9h-7" fill="none" stroke="#f2e3bf" strokeWidth="3"/></g>
      <g transform="translate(0 6)"><path d="M188 195H236V245H188Z" fill="#d5bc89"/><path d="M194 204H231M194 214H231M194 224H231" stroke="#bc9e6e" strokeWidth="3"/></g>
      <path d="M34 50H263" stroke="#b3a080" strokeWidth="7"/>{[61,108,156,204,249].map((x,i) => <g key={x}><path d={`M${x} 51V65`} stroke="#9e9276" strokeWidth="3"/><path d={`M${x-13} 67h26v24q-12 10-26 0Z`} fill={['#c0c4a5','#cfa991','#b0bba6'][i%3]}/></g>)}
      <rect x="571" y="185" width="119" height="160" rx="8" fill="#b8c3ac" stroke="#97a38d" strokeWidth="4"/><path d="M574 237H687M585 205V226M585 254V283" stroke="#87977e" strokeWidth="4"/><g transform="rotate(-8 630 117)"><path d="M602 88L593 78M658 88L667 78" stroke="#a7906b" strokeWidth="7"/><circle cx="630" cy="118" r="36" fill="#e9d5ad" stroke="#b49a73" strokeWidth="7"/><path d="M630 93V119L647 126" fill="none" stroke="#8b8268" strokeWidth="4" strokeLinecap="round"/></g>
    </>;
  }
}

/** Furniture stays outside the character, captions and hand reach. */
function Room({ id, substanceKey }: { id: string; substanceKey: string }) {
  const set = getSceneSet(substanceKey);
  return <g aria-hidden="true" data-scene-set={substanceKey} fill="none">
    <defs>
      <pattern id={`${id}-tiles`} width="38" height="34" patternUnits="userSpaceOnUse"><rect width="38" height="34" fill={set.wall}/><path d="M0 33H38M37 0V34" stroke={set.trim} opacity=".38"/></pattern>
      <pattern id={`${id}-brick`} width="72" height="34" patternUnits="userSpaceOnUse"><rect width="72" height="34" fill="#c6a18d"/><path d="M0 0H72M0 17H72M0 34H72M36 0V17M9 17V34" stroke="#dfc3af" strokeWidth="3"/></pattern>
      <clipPath id={`${id}-furniture-zones`}><rect width="279" height="368"/><rect x="548" width="172" height="368"/></clipPath>
    </defs>
    <rect width="720" height="430" fill={set.wall}/><path d="M0 0H720V9H0M0 0H8V309H0M712 0H720V309H712" fill={set.trim} opacity=".18"/>
    <rect y="309" width="720" height="121" fill={set.floor}/><path d="M0 342H720M0 386H720M91 309L57 430M273 309L257 430M545 309L568 430M666 309L705 430" stroke={set.trim} strokeWidth="1.5" opacity=".36"/>
    <path d="M0 302H720V309H0" fill={set.trim}/><path d="M0 300H720" stroke="#f5efdf" strokeWidth="3" opacity=".65"/>
    <g clipPath={`url(#${id}-furniture-zones)`}><Furniture id={id} substanceKey={substanceKey}/></g>
  </g>;
}

export default memo(Room);
