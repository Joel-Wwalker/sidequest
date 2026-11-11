// The nozzle center is shared by the SVG construction and contact checks.
export const inhalerGeometry={
  mouthpieceTip:[-12,-14] as const,
  canister:{x:8,y:-28,width:13,height:29},
};
export function inhalerBootPath(){
  const [x,y]=inhalerGeometry.mouthpieceTip;
  return `M${x} ${y-4}H24V10H-5V${y+4}H${x}Z`;
}
