import svgPaths from "./svg-sj3uvw4e61";

function Ray() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="ray">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="ray">
          <path d={svgPaths.p3f6db900} fill="var(--fill-0, #192839)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Ray />
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#43505d] text-[12px]">Ray Insight</p>
    </div>
  );
}

export default function RayInsight() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[33.883%] from-[rgba(237,247,247,0.5)] gap-[4px] items-start p-[12px] relative rounded-[12px] size-full to-[268.38%] to-[rgba(18,145,208,0.09)]" data-name="Ray insight">
      <div aria-hidden="true" className="absolute border border-[#1291d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame />
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:Medium','Noto_Sans:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#40566d] text-[0px] text-[16px] tracking-[0.16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
        <span className="leading-[26px]">{`Pingal is a long time customer since 2023. He’s placed 13 orders so far. They have a Lifetime Value (LTV) of `}</span>
        <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
          ₹4.5 Lakhs
        </span>
        <span className="leading-[26px]">{` and, notably, `}</span>
        <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
          zero refunds
        </span>
        <span className="leading-[26px]">{` on record.`}</span>
      </p>
    </div>
  );
}