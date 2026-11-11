import { memo } from 'react';

/** Static props stay outside the protected character region (x=290..510). */
function Room({ id }: { id: string }) {
  return <g shapeRendering="crispEdges" aria-hidden="true">
    <defs>
      <pattern id={`${id}-floor`} width="120" height="42" patternUnits="userSpaceOnUse"><rect width="120" height="42" fill="#e5cbb8"/><path d="M0 41H120M60 0V41" stroke="#d5b9a4"/><path d="M10 14H32M82 31H103" stroke="#dcc0ab"/></pattern>
      <clipPath id={`${id}-window`}><rect x="49" y="70" width="182" height="139"/></clipPath>
    </defs>
    <rect width="720" height="430" fill="#eee8df"/>
    <rect y="309" width="720" height="121" fill={`url(#${id}-floor)`}/>
    <path d="M0 301H720V309H0" fill="#d1b9a3"/><path d="M0 299H720V302H0" fill="#faf1df"/>
    <path d="M0 0H720V7H0M0 0H7V301H0M713 0H720V301H713" fill="#e5ded1"/>
    <path d="M45 311H230L321 412H131Z" fill="#f7dfb8" opacity=".4"/>
    <rect x="39" y="59" width="202" height="163" fill="#b9a08e"/><rect x="44" y="64" width="192" height="153" fill="#fbf1de"/>
    <g clipPath={`url(#${id}-window)`}>
      <rect x="49" y="70" width="182" height="139" fill="#cbd0e4"/>
      <path d="M49 160H66V150H86V144H109V155H127V162H146V156H170V141H189V152H209V162H231V210H49Z" fill="#adb9ad"/>
      <path d="M49 184H67V177H91V164H112V172H131V185H150V180H173V169H195V179H217V188H231V210H49Z" fill="#859e85"/>
      <path d="M49 199H74V195H109V200H150V193H191V198H231V210H49Z" fill="#6f8c74"/>
      <path d="M81 91H110V97H119V104H73V98H81M165 116H184V121H197V128H157V121H165" fill="#f3eef1"/>
      <path d="M190 83H205V87H210V101H205V106H190V101H185V87H190" fill="#f6dfa2"/>
    </g>
    <rect x="136" y="66" width="7" height="149" fill="#fcf3df"/><rect x="45" y="137" width="191" height="6" fill="#fcf3df"/>
    <rect x="32" y="218" width="216" height="8" fill="#bca088"/><rect x="32" y="216" width="216" height="3" fill="#dbc0a2"/>
    <path d="M30 54H251V59H30M32 59H40V125H36V166H28V59M241 59H250V166H242V125H237V59" fill="#b9adbf"/>
    <rect x="260" y="147" width="34" height="49" fill="#c6b29b"/><rect x="264" y="151" width="26" height="41" fill="#faf0db"/>
    <path d="M276 183V169H279V183M271 160H282V164H285V171H271V168H268V164H271" fill="#a7858c"/><path d="M272 180H282V184H272" fill="#8d9d78"/>
    {/* Shelf and clock have independent clear spaces; neither intersects the lamp. */}
    <rect x="548" y="120" width="131" height="7" fill="#b79a7c"/><path d="M558 127H564V137H558M663 127H669V137H663" fill="#a78a70"/>
    <rect x="555" y="91" width="11" height="29" fill="#a3af99"/><rect x="568" y="84" width="13" height="36" fill="#c79783"/><rect x="583" y="94" width="10" height="26" fill="#b4a8c1"/><path d="M557 98H564M571 92H578M585 101H591" stroke="#f4e5c6" strokeWidth="2"/>
    <path d="M631 96H650V115H646V120H635V115H631Z" fill="#bba785"/>
    <path d="M639 96V76H643V96M640 87H629V82H625V73H632V78H640M642 79H650V71H657V79H651V85H642" fill="#819875"/>
    <path d="M475 79H482V72H512V79H519V109H512V116H482V109H475Z" fill="#b89f88"/>
    <path d="M481 82H486V78H508V82H513V106H508V110H486V106H481Z" fill="#f8efdb"/>
    <path d="M495 81H499V85H495M495 104H499V108H495M484 92H488V96H484M506 92H510V96H506" fill="#b9a68d"/>
    <path d="M496 94V85H499V92H506V95H496" fill="#7b7e68"/>
    {/* Sofa: cat animation is a separate foreground group. */}
    <path d="M47 264H56V254H236V261H245V312H47Z" fill="#7f947d"/><rect x="56" y="264" width="179" height="50" fill="#9aaf92"/>
    <rect x="144" y="264" width="3" height="50" fill="#859b7e"/>
    <path d="M36 292H61V304H229V289H253V298H259V346H36Z" fill="#7f9679"/><rect x="46" y="310" width="202" height="24" fill="#a2b495"/>
    <path d="M65 310H142V315H65M149 310H228V315H149" fill="#bbc7a9"/><rect x="40" y="340" width="214" height="7" fill="#71866a"/>
    <path d="M49 347H61V359H49M232 347H244V359H232" fill="#997e67"/>
    <path d="M67 267H98V272H104V302H64V297H59V273H67Z" fill="#ddbd8e"/><path d="M70 272V297M81 272V298M93 274V298M64 279H99M65 290H100" stroke="#c69f75" strokeWidth="2"/>
    {/* Rug leaves the torso and hand reach unobstructed. */}
    <ellipse cx="402" cy="373" rx="115" ry="27" fill="#cbb3a0" opacity=".24"/>
    <path d="M309 351H486V357H502V366H516V392H500V400H302V392H287V366H301V357H309Z" fill="#cda999"/>
    <path d="M313 358H481V364H494V372H507V386H493V394H307V386H296V372H309V364H313" fill="#e5c5ae"/>
    <path d="M329 365H468V371H481V382H466V388H329V382H315V372H329" fill="#eddbc1"/>
    {/* Desk, lamp, and tall plant occupy separate footprints. */}
    <rect x="548" y="294" width="118" height="10" fill="#b19374"/><rect x="544" y="290" width="126" height="7" fill="#c4a687"/>
    <path d="M554 304H563V359H554M649 304H658V359H649" fill="#a98a6c"/>
    <rect x="557" y="282" width="34" height="8" fill="#9dac93"/><rect x="560" y="283" width="27" height="3" fill="#efe1c4"/><rect x="561" y="275" width="32" height="7" fill="#c29784"/>
    <path d="M632 242H636V286H632M620 286H648V290H620" fill="#a58e6f"/>
    <path d="M621 211H647V220H653V243H615V220H621" fill="#d7b67a"/><path d="M623 214H629V237H618V222H623" fill="#edcf95"/><rect x="613" y="240" width="42" height="5" fill="#c3a365"/>
    <path d="M615 248H653L668 288H599Z" fill="#f4dba5" opacity=".18"/>
    <path d="M688 311V240H692V311M689 272H677V267H671V252H680V258H689M691 257H698V246H708V259H701V265H691M689 294H679V288H673V276H682V282H689" fill="#7e9571"/>
    <path d="M674 309H708V319H704V351H680V319H674Z" fill="#bd9079"/><rect x="680" y="319" width="24" height="5" fill="#d5a78a"/>
  </g>;
}
export default memo(Room);
