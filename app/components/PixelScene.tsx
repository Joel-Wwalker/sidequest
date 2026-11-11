"use client";

import { useId } from "react";
import "./pixel-scene.css";

export type PixelSceneProps = {
  type: string;
  action: "sips" | "takes";
  labels?: string[];
  name: string;
  paused: boolean;
  /** Leave unset to play the loop. 0, 1, or 2 shows a still of that stage. */
  phase?: number;
};

const thoughts: Record<string, [string, string]> = {
  caffeine: ["oh, hello brain.", "i can hear the fridge."],
  psychedelic: ["the wallpaper gets it.", "a little too much input."],
  sedative: ["volume turned down.", "was i saying something?"],
  stimulant: ["one thing at a time…", "brain has 37 tabs open."],
  cannabis: ["this is a good sofa.", "why did i come in here?"],
  muscle: ["changes take time.", "hormones affect more."],
  supplement: ["not an instant feeling.", "results may vary."],
};

type Organ = "brain" | "lungs" | "heart" | "gut" | "muscle" | "liver" | "kidneys" | "bladder" | "hormones" | "bones";
type SceneProfile = { thoughts: [string, string]; organs: Organ[]; risks: Organ[]; riskLabel: string };
// These labels summarize the matching encyclopedia entry, not a dose or onset model.
const profiles: Record<string, SceneProfile> = {
  caffeine: { thoughts: thoughts.caffeine, organs: ["brain", "heart"], risks: ["heart"], riskLabel: "JITTERS / HEART RATE" },
  alcohol: { thoughts: ["brain signals slow.", "balance gets unreliable."], organs: ["brain"], risks: ["brain"], riskLabel: "COORDINATION" },
  nicotine: { thoughts: ["reward circuits respond.", "the craving comes back."], organs: ["brain", "heart"], risks: ["brain", "heart"], riskLabel: "CRAVING / HEART RATE" },
  cannabis: { thoughts: thoughts.cannabis, organs: ["brain"], risks: ["brain"], riskLabel: "MEMORY / COORDINATION" },
  psilocybin: { thoughts: ["perception is shifting.", "it can feel overwhelming."], organs: ["brain"], risks: ["brain"], riskLabel: "ANXIETY / PERCEPTION" },
  lsd: { thoughts: ["sensory signals shift.", "confusion can linger."], organs: ["brain"], risks: ["brain"], riskLabel: "PROLONGED CONFUSION" },
  mdma: { thoughts: ["several signals rise.", "heat can build up."], organs: ["brain", "heart"], risks: ["heart"], riskLabel: "HEAT / HEART STRAIN" },
  ketamine: { thoughts: ["a sense of detachment.", "awareness can fade."], organs: ["brain"], risks: ["brain", "bladder"], riskLabel: "BLADDER: REPEATED USE" },
  cocaine: { thoughts: ["reward and stress rise.", "the heart is under strain."], organs: ["brain", "heart"], risks: ["heart"], riskLabel: "CARDIOVASCULAR STRAIN" },
  fentanyl: { thoughts: ["pain signals turn down.", "breathing can slow."], organs: ["brain", "lungs"], risks: ["lungs"], riskLabel: "RESPIRATORY DEPRESSION" },
  testosterone: { thoughts: ["changes take time.", "natural signals can fall."], organs: ["muscle", "hormones"], risks: ["hormones", "heart"], riskLabel: "HORMONES / BLOOD PRESSURE" },
  "anabolic-steroids": { thoughts: ["more than muscle changes.", "heart and hormones matter."], organs: ["muscle", "hormones"], risks: ["heart", "liver", "hormones"], riskLabel: "HEART / LIVER / HORMONES" },
  ostarine: { thoughts: ["receptors respond.", "liver harm is reported."], organs: ["muscle", "hormones"], risks: ["liver", "hormones"], riskLabel: "LIVER / HORMONES" },
  "2c-b": { thoughts: ["perception shifts.", "anxiety and pulse can rise."], organs: ["brain"], risks: ["brain", "heart"], riskLabel: "ANXIETY / HEART RATE" },
  "synthetic-cathinones": { thoughts: ["monoamine signals rise.", "heat and agitation build."], organs: ["brain", "heart"], risks: ["brain", "heart"], riskLabel: "HEAT / AGITATION" },
  "vitamin-d": { thoughts: ["no instant feeling.", "excess can harm kidneys."], organs: ["bones", "kidneys"], risks: ["kidneys"], riskLabel: "KIDNEYS: EXCESS INTAKE" },
  magnesium: { thoughts: ["cellular housekeeping.", "the gut may object."], organs: ["muscle", "heart"], risks: ["gut"], riskLabel: "CRAMPING / DIARRHEA" },
  ashwagandha: { thoughts: ["evidence is still limited.", "drowsy, or an upset gut."], organs: ["brain", "gut"], risks: ["gut", "liver"], riskLabel: "GUT / RARE LIVER INJURY" },
  "st-johns-wort": { thoughts: ["drug processing changes.", "medicines can lose effect."], organs: ["brain", "liver"], risks: ["liver"], riskLabel: "MEDICINE INTERACTIONS" },
};

function Anatomy({ organs }: { organs: Organ[] }) {
  const shapes: Record<Organ, { d: string; fill: string }> = {
    brain: { d: "M397 149H403V146H410V149H416V153H420V159H416V163H410V160H406V163H399V160H395V153H397Z", fill: "#b297c1" },
    lungs: { d: "M405 196V204H400V200H396V205H393V216H402V212H406V205H408V212H412V216H420V205H417V200H413V204H410V196Z", fill: "#a4b8c2" },
    heart: { d: "M405 202H410V205H413V202H417V210H413V215H409V211H405Z", fill: "#cf8d84" },
    gut: { d: "M407 216H412V220H417V227H410V230H401V226H397V220H403V223H407Z", fill: "#c6a366" },
    muscle: { d: "M392 196H399V210H392ZM412 196H419V210H412ZM397 217H414V227H397Z", fill: "#b896ad" },
    liver: { d: "M393 216H410V219H415V223H403V226H393Z", fill: "#b88f78" },
    kidneys: { d: "M394 218H400V224H398V229H393V225H391V221H394ZM412 218H417V221H420V225H417V229H412V224H410V221H412Z", fill: "#b38b92" },
    bladder: { d: "M400 230H413V238H410V241H404V238H400Z", fill: "#bf9d72" },
    hormones: { d: "M404 154H409V159H404ZM405 165H408V182H405ZM402 185H411V191H402ZM405 195H408V226H405ZM401 230H412V235H401Z", fill: "#b895b9" },
    bones: { d: "M399 195H413V199H409V223H414V227H398V223H403V199H399ZM393 240H397V259H393ZM414 240H418V259H414Z", fill: "#eee2c5" },
  };
  return <>{organs.map(organ => <path key={organ} className={`pixel-scene__symbol pixel-scene__symbol--${organ}`} d={shapes[organ].d} fill={shapes[organ].fill} />)}</>;
}

function LeafyPlant({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-3 0V-74H2V0Z" fill="#65795a" />
      <path d="M-2-57H-12V-62H-22V-76H-10V-71H-2ZM1-41H12V-46H22V-61H10V-56H1ZM-2-20H-14V-25H-24V-40H-12V-35H-2ZM1-65H7V-72H17V-88H7V-83H1Z" fill="#839874" />
      <path d="M-20-74H-12V-69H-5V-64H-12V-67H-20ZM12-58H19V-49H11V-44H4V-49H12ZM-21-37H-13V-31H-5V-26H-13V-29H-21Z" fill="#a6b58c" />
      <path d="M-21-2H22V7H18V31H13V37H-13V31H-17V7H-21Z" fill="#bd8c78" />
      <path d="M-17 7H18V12H-17ZM-12 14H-7V30H-12Z" fill="#d4a68b" />
      <path d="M-21-2H22V4H-21Z" fill="#dda98b" />
    </g>
  );
}

function PixelStar({ x, y, size = 1, color = "#f1c76c" }: { x: number; y: number; size?: number; color?: string }) {
  return <path transform={`translate(${x} ${y}) scale(${size})`} d="M-2-8H2V-2H8V2H2V8H-2V2H-8V-2H-2Z" fill={color} />;
}

/** An intentionally illustrative, non-anatomical scene with a 12-second story. */
export default function PixelScene({ type, action, labels, name, paused, phase }: PixelSceneProps) {
  const id = useId().replace(/:/g, "");
  const substance = name.toLowerCase().replace(/[.’']/g, "").replace(/\s+/g, "-");
  const oralExample = ["vitamin-d", "magnesium", "ashwagandha", "st-johns-wort", "ostarine", "mdma", "2c-b", "psilocybin"].includes(substance);
  const profile = profiles[substance] ?? { thoughts: thoughts[type] ?? thoughts.supplement, organs: ["brain"] as Organ[], risks: ["brain"] as Organ[], riskLabel: "POSSIBLE UNWANTED EFFECTS" };
  const thought = profile.thoughts;
  const stage = phase === undefined ? "loop" : String(Math.min(2, Math.max(0, Math.floor(phase))));
  const stageLabels = labels?.length ? labels : ["A person interacts with the substance", "Possible effects are highlighted", "Possible unwanted effects appear"];
  const description = `An animated pixel-art living room illustrates ${name}. ${action === "sips" ? "A person raises a mug" : oralExample ? "A person raises their hand in an illustrative oral-exposure example" : "Abstract squares symbolize exposure without depicting a method of use"}, symbolic body highlights show possible effects, then ${profile.riskLabel.toLowerCase()} is highlighted. ${stage === "loop" ? stageLabels.join(". ") : stageLabels[Number(stage)] ?? ""}. Illustrative, not to scale; timing does not represent real onset or duration.`;

  return (
    <div className={`pixel-scene pixel-scene--${type}`} data-paused={paused} data-stage={stage} data-substance={substance} data-action={oralExample ? "oral" : action}>
      <svg key={`${type}-${name}`} className="pixel-scene__art" viewBox="0 0 760 340" role="img" aria-labelledby={`${id}-title ${id}-desc`} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        <title id={`${id}-title`}>{`${name}: a little scene about possible effects`}</title>
        <desc id={`${id}-desc`}>{description}</desc>
        <defs>
          <pattern id={`${id}-floor`} width="108" height="31" patternUnits="userSpaceOnUse">
            <rect width="108" height="31" fill="#e7c9b6" />
            <path d="M0 30H108M53 0V30" stroke="#d9bba9" strokeWidth="1" />
            <path d="M8 10H24M73 23H91" stroke="#ddbfac" strokeWidth="1" />
          </pattern>
          <clipPath id={`${id}-window`}><rect x="74" y="62" width="170" height="124" /></clipPath>
        </defs>

        {/* A warm room, drawn on a small pixel grid. */}
        <rect width="760" height="340" fill="#f0e9dc" />
        <rect width="760" height="243" fill="#eee8df" />
        <rect y="243" width="760" height="97" fill={`url(#${id}-floor)`} />
        <rect y="238" width="760" height="6" fill="#cbb4a3" />
        <rect y="236" width="760" height="3" fill="#faf1df" />
        <path d="M0 0H760V7H0ZM0 0H7V237H0ZM753 0H760V237H753Z" fill="#e8e0d4" />

        {/* Window and a tiny, distant landscape. */}
        <rect x="65" y="52" width="188" height="145" fill="#d1bbaa" />
        <rect x="69" y="56" width="180" height="136" fill="#fff5e3" />
        <g clipPath={`url(#${id}-window)`}>
          <rect x="74" y="62" width="170" height="124" fill="#d5d0e6" />
          <rect x="74" y="126" width="170" height="60" fill="#e5d5e0" />
          <path d="M74 152H87V145H102V136H116V129H132V135H146V145H159V151H176V146H189V138H206V141H222V151H244V186H74Z" fill="#b1b7b2" />
          <path d="M74 170H95V160H112V153H130V160H145V168H162V175H179V165H197V158H219V165H244V186H74Z" fill="#8da48c" />
          <path d="M74 179H93V176H118V181H150V177H179V180H201V173H226V177H244V186H74Z" fill="#7e957b" />
          <path d="M103 79H124V84H133V92H97V86H103ZM182 95H207V100H218V107H176V101H182Z" fill="#f4edf1" />
          <path d="M211 71H224V75H228V88H224V92H211V88H207V75H211Z" fill="#f5e2ad" />
          <path d="M81 64H86V122H81ZM91 64H94V106H91" fill="#eee4ef" opacity=".55" />
        </g>
        <rect x="155" y="59" width="7" height="129" fill="#fff3e0" />
        <rect x="72" y="123" width="174" height="6" fill="#fff3e0" />
        <rect x="60" y="192" width="198" height="7" fill="#bfa28b" />
        <rect x="60" y="191" width="198" height="3" fill="#ddc2a7" />
        <path d="M55 47H261V52H55ZM57 52H66V113H62V145H54V52ZM252 52H261V145H253V113H249V52Z" fill="#bfb4c2" />
        <path d="M57 52H60V141H57ZM256 52H259V141H256Z" fill="#d2c6d0" />

        {/* Light falls across the boards, without blurring the pixel edges. */}
        <path d="M73 245H240L309 319H129Z" fill="#f4ddbd" opacity=".43" />
        <path d="M153 245H160L231 319H224ZM102 275H268L272 280H107Z" fill="#e4c6ad" opacity=".5" />

        {/* A modest gallery wall, clock, and shelf. */}
        <rect x="295" y="80" width="53" height="66" fill="#cebaa4" />
        <rect x="299" y="84" width="45" height="58" fill="#faf0d8" />
        <rect x="303" y="88" width="37" height="50" fill="#e4d8bd" />
        <path d="M320 129V108H324V129ZM320 116H312V109H316V112H320ZM324 105H331V112H324Z" fill="#859b76" />
        <path d="M317 98H326V101H329V108H325V111H317V108H313V102H317Z" fill="#c78677" />
        <rect x="315" y="129" width="15" height="3" fill="#baa88a" />
        <path d="M585 77H592V70H619V77H626V104H619V111H592V104H585Z" fill="#ba9d85" />
        <path d="M590 79H596V75H615V79H621V100H615V105H596V100H590Z" fill="#f7edd6" />
        <path d="M604 78H607V82H604ZM604 99H607V103H604ZM593 89H597V92H593ZM614 89H618V92H614Z" fill="#bba78f" />
        <path className="pixel-scene__clock-hand" d="M604 90V82H607V89H612V92H604Z" fill="#7c7a65" />
        <path d="M530 141H655V148H530ZM538 148H545V157H538ZM640 148H647V157H640Z" fill="#b99a80" />
        <rect x="542" y="119" width="9" height="22" fill="#a4a68d" />
        <rect x="552" y="111" width="10" height="30" fill="#ce9f88" />
        <rect x="563" y="115" width="8" height="26" fill="#b7acc4" />
        <path d="M576 117H584V141H576Z" fill="#c5b488" />
        <path d="M544 124H549M554 117H560M565 122H569M578 123H582" stroke="#f2e1bd" strokeWidth="2" />
        <path d="M614 123H633V137H629V141H618V137H614Z" fill="#91a391" />
        <path d="M623 123V105H627V123ZM623 112H615V108H611V101H618V105H623ZM626 105H632V99H640V105H635V110H626Z" fill="#7f9675" />

        {/* Sage sofa, woven cushion, and the resident cat. */}
        <path d="M89 197H101V188H271V195H283V242H89Z" fill="#829782" />
        <path d="M99 198H105V194H267V200H274V236H99Z" fill="#9cad94" />
        <rect x="179" y="197" width="3" height="37" fill="#8fa38a" />
        <path d="M82 224H94V218H111V230H264V216H282V222H292V263H82Z" fill="#7f957e" />
        <path d="M91 232H281V250H91Z" fill="#98ac8f" />
        <path d="M106 232H181V236H106ZM185 232H261V236H185Z" fill="#b5c2a5" />
        <rect x="86" y="260" width="202" height="5" fill="#748970" />
        <path d="M95 265H104V274H95ZM269 265H278V274H269Z" fill="#9e826d" />
        <path d="M111 200H141V204H146V228H110V224H105V205H111Z" fill="#e1bd8e" />
        <path d="M116 204V224M127 204V225M138 207V225" stroke="#c99f77" strokeWidth="2" />
        <path d="M111 211H141M110 220H143" stroke="#eacba5" strokeWidth="2" />
        <g className="pixel-scene__cat">
          <path d="M203 222V213H211V208H235V212H242V217H246V230H200V226H193V220H187V216H191V219H198V222Z" fill="#b99a7f" />
          <path d="M222 213V201H227V206H236V201H241V220H222Z" fill="#c8aa8b" />
          <rect x="225" y="213" width="4" height="2" fill="#786b5e" />
          <rect x="234" y="213" width="4" height="2" fill="#786b5e" />
          <rect x="231" y="217" width="2" height="2" fill="#9b7970" />
          <path d="M208 219H213V225H208ZM217 215H222V223H217Z" fill="#a98b72" />
          <rect x="222" y="226" width="22" height="4" fill="#e0c3a1" />
        </g>
        <g className="pixel-scene__cat-sleep" fill="#89917d"><text x="254" y="209" fontSize="11">z</text><text x="263" y="198" fontSize="8">z</text></g>

        {/* Flat woven rug grounds the central character. */}
        <path d="M318 273H485V278H496V284H507V310H493V315H309V309H297V283H308V278H318Z" fill="#d2b1a1" />
        <path d="M321 279H481V284H491V290H499V304H488V309H313V303H305V289H315V284H321Z" fill="#e5c4b0" />
        <path d="M335 285H470V290H482V299H469V304H335V299H322V291H335Z" fill="#e8d2b8" />
        <path d="M311 281H319M306 287H313M301 294H309M302 301H310M311 309H319M488 280H494M495 287H502M501 295H510M498 303H505M490 310H498" stroke="#cba896" strokeWidth="2" />

        {/* Side table: dog-eared books, coffee, and a very patient lamp. */}
        <path d="M514 231H651V240H514ZM525 240H534V291H525ZM632 240H641V291H632Z" fill="#ab8b6d" />
        <rect x="513" y="228" width="140" height="7" fill="#c2a183" />
        <rect x="534" y="240" width="98" height="5" fill="#9b7e62" />
        <rect x="537" y="221" width="39" height="7" fill="#a3ac99" />
        <rect x="539" y="222" width="34" height="3" fill="#f1dfbd" />
        <rect x="543" y="214" width="37" height="7" fill="#c3927e" />
        <rect x="545" y="215" width="33" height="3" fill="#f1dfbd" />
        <path d="M588 210H606V224H602V228H592V224H588ZM606 212H612V221H606V218H609V215H606Z" fill="#e9dbb8" />
        <rect x="591" y="209" width="12" height="3" fill="#977662" />
        <path d="M627 175H632V225H627ZM614 225H644V228H614Z" fill="#b09876" />
        <path d="M615 152H644V160H650V178H609V160H615Z" fill="#d8b977" />
        <path d="M616 155H623V173H612V161H616Z" fill="#e9d197" />
        <rect x="607" y="176" width="45" height="4" fill="#c5a66a" />
        <rect x="611" y="180" width="36" height="3" fill="#f2e0ac" />
        <path d="M607 182H652L670 228H589Z" fill="#f4dfae" opacity=".16" />

        <LeafyPlant x={39} y={240} scale={0.8} />
        <LeafyPlant x={697} y={254} scale={1.14} />
        <path d="M674 300H719V304H674Z" fill="#c7aa94" opacity=".6" />
        <path d="M21 272H57V275H21Z" fill="#c7aa94" opacity=".6" />

        {/* The character has three distinct poses, not just an effects overlay. */}
        <g className="pixel-scene__person">
          <path d="M384 279H431V284H384Z" fill="#bba28d" opacity=".45" />
          <path d="M388 229H425V249H421V271H408V243H403V271H389V247H385V233Z" fill="#827e86" />
          <path d="M391 241H399V268H391ZM412 241H418V268H412Z" fill="#95919a" />
          <path d="M387 267H403V278H380V273H387ZM409 267H423V271H429V278H409Z" fill="#776c66" />
          <path d="M380 276H403V279H380ZM409 276H429V279H409Z" fill="#e4d6bf" />
          <path d="M393 176H416V185H422V193H426V232H421V238H388V232H383V194H388V184H393Z" fill="#8d9f83" />
          <path d="M390 188H395V229H390ZM391 231H420V235H391" fill="#a7b499" />
          <path d="M397 179V185H412V179Z" fill="#d6aa88" />
          <path d="M396 186H414V190H396Z" fill="#6f866e" />
          <path d="M384 190H392V215H387V227H378V222H375V204H379V195H384Z" fill="#8d9f83" />
          <path d="M378 222H387V234H383V237H377V232H374V225H378Z" fill="#e6bd98" />

          <g className="pixel-scene__head">
            <path d="M390 136H398V130H418V135H426V143H430V164H426V174H420V181H397V177H390V169H385V145H390Z" fill="#6f6256" />
            <path d="M392 147H399V143H416V147H423V168H418V175H398V172H391V164H388V153H392Z" fill="#e9be96" />
            <path d="M390 144H398V150H391V155H387V146ZM412 140H422V147H427V154H422V150H415V146H412Z" fill="#6f6256" />
            <rect x="389" y="157" width="4" height="9" fill="#dfad89" />
            <rect x="421" y="157" width="5" height="9" fill="#dfad89" />
            <path d="M399 155H402V160H399ZM413 155H416V160H413Z" className="pixel-scene__eyes" fill="#5e5a50" />
            <path d="M398 159H403V161H398ZM412 159H417V161H412Z" className="pixel-scene__sleepy-eyes" fill="#5e5a50" />
            <path d="M405 162H409V164H405Z" fill="#cc9779" />
            <path d="M403 168H412V170H403Z" className="pixel-scene__mouth" fill="#a37565" />
            <rect x="395" y="163" width="5" height="3" fill="#dfa38a" />
            <rect x="415" y="163" width="5" height="3" fill="#dfa38a" />
          </g>

          <path className="pixel-scene__arm-down" d="M418 189H426V195H430V207H441V219H429V215H421V205H417Z" fill="#809576" />
          <path className="pixel-scene__arm-mid" d="M419 187H427V193H435V202H427V207H419V201H415V193H419Z" fill="#809576" />
          <path className="pixel-scene__arm-up" d="M418 187H424V180H430V172H419V178H413V187H409V197H420V193H424V187Z" fill="#809576" />
          <g className="pixel-scene__hand">
            <path d="M436 206H445V202H450V213H447V218H438V215H434V209H436Z" fill="#e9be96" />
            {action === "sips" ? (
              <g className="pixel-scene__held-mug">
                <path d="M441 194H458V210H454V214H445V210H441ZM458 197H464V207H458V204H461V200H458Z" fill="#f0ddad" />
                <rect x="444" y="194" width="11" height="3" fill="#8a6b55" />
                <rect x="444" y="200" width="3" height="8" fill="#fff0ce" />
              </g>
            ) : oralExample ? substance === "psilocybin" ? <g><path d="M447 199H450V205H447Z" fill="#e9dab8" /><path d="M444 195H451V197H454V200H441V197H444Z" fill="#bba187" /></g> : <path d="M444 201H450V204H444Z" fill="#f6ecd9" /> : null}
          </g>

          {/* Symbolic anatomy is deliberately a simplified diagram. */}
          <g className="pixel-scene__body-highlight">
            <path d="M396 190H414V195H419V229H391V196H396Z" fill="#d2dbc3" opacity=".76" />
            <path d="M397 147H417V151H421V163H393V152H397Z" fill="#f3dcbe" opacity=".8" />
            <Anatomy organs={profile.organs} />
          </g>
          <g className="pixel-scene__risk-highlight">
            <path d="M396 190H414V195H419V238H391V196H396Z" fill="#eee0cf" opacity=".8" />
            <Anatomy organs={profile.risks} />
          </g>
        </g>

        {action === "takes" && <g className="pixel-scene__arrival" fill="none" stroke="#a8a1b4" strokeWidth="2">{!oralExample && <path d="M459 177H465V183H459ZM445 188H450V193H445ZM433 198H437V202H433Z" />}<text x={oralExample ? "448" : "477"} y="184" stroke="none" fill="#8b8394" fontSize="7">{oralExample ? "ORAL EXAMPLE" : "SYMBOLIC EXPOSURE"}</text></g>}

        <g className="pixel-scene__risk-label"><path d="M425 222H451V196H457" fill="none" stroke="#b88d80" strokeWidth="1" /><text x="463" y="198">{profile.riskLabel}</text></g>
        {substance === "ketamine" && <path className="pixel-scene__dissociation" d="M391 135H421V143H429V173H420V183H427V232H421V274H408V244H402V274H387V234H380V193H389V178H383V145H391Z" fill="none" stroke="#b5a3bf" strokeWidth="2" strokeDasharray="5 5" />}

        {/* A restrained, slow layer of effects and a changing expression. */}
        <g className="pixel-scene__good-effects">
          <g className="pixel-scene__float-one"><PixelStar x={368} y={162} size={0.8} /><PixelStar x={444} y={145} size={0.55} color="#a9a0bd" /></g>
          <g className="pixel-scene__float-two"><PixelStar x={452} y={201} size={0.6} color="#b4bd91" /><PixelStar x={370} y={213} size={0.45} color="#b4bd91" /></g>
          <path className="pixel-scene__orbit" d="M369 182H362V175H369M444 169H451V176H444M438 224H446V217" fill="none" stroke="#c4a1ba" strokeWidth="3" />
        </g>
        <g className="pixel-scene__bad-effects" fill="none" stroke="#bb8b80" strokeWidth="3">
          <path d="M374 161H369V169H365V177H370V185M440 154H445V162H450V170H445V177" />
          <path className="pixel-scene__worry" d="M388 123V115M404 120V111M421 124L425 117" />
          <g className="pixel-scene__sleep-symbols" fill="#9b91ac" stroke="none"><text x="444" y="156" fontSize="17">z</text><text x="457" y="139" fontSize="12">z</text></g>
        </g>

        {/* Caption plaques remain proper text, including at smaller widths. */}
        <g className="pixel-scene__thought pixel-scene__thought--good">
          <path d="M368 80H507V84H511V108H507V112H438V119H432V112H368V108H364V84H368Z" fill="#fbf6e9" stroke="#d1c5b3" strokeWidth="1" />
          <text x="437" y="100" textAnchor="middle">{thought[0]}</text>
        </g>
        <g className="pixel-scene__thought pixel-scene__thought--bad">
          <path d="M355 80H520V84H524V108H520V112H438V119H432V112H355V108H351V84H355Z" fill="#fbf6e9" stroke="#d1c5b3" strokeWidth="1" />
          <text x="437" y="100" textAnchor="middle">{thought[1]}</text>
        </g>

        <g className="pixel-scene__room-label">
          <rect x="22" y="18" width="116" height="19" fill="#e6ddd0" />
          <rect x="27" y="24" width="5" height="5" fill="#95a383" />
          <text x="38" y="29">THE LIVING ROOM</text>
        </g>
        <text className="pixel-scene__scale-label" x="738" y="29" textAnchor="end">ILLUSTRATIVE · NOT TO SCALE</text>
        <text className="pixel-scene__tiny-note" x="738" y="326" textAnchor="end">a small scene. a complex body.</text>
      </svg>
    </div>
  );
}
