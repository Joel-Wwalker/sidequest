// The nozzle center is shared by the SVG construction and contact checks.
export const inhalerGeometry={
  mouthpieceTip:[-35,-8] as const,
  canister:{x:-5,y:-28,width:13,height:29},
};
export function inhalerBootPath(){
  const [x,y]=inhalerGeometry.mouthpieceTip;
  return `M${x} ${y-4}H12V10H-9V${y+4}H${x}Z`;
}
