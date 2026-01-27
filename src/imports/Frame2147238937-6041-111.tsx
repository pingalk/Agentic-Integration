import svgPaths from "./svg-tsjnly0pm0";

function Frame1() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(233, 105, 12, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Frame 2147239029">
            <rect fill="var(--fill-0, #E9690C)" height="20" rx="3.33333" width="20" />
            <path d={svgPaths.p362ac400} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame1 />
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#020202] text-[18px] w-[688px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
        Your settlements are paused due to a negative balance of ₹46,000.
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
      <Frame2 />
      <div className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px] w-[580px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
        <p className="css-4hzbpn mb-[12px]">
          <span className="leading-[26px]">{`This happened because `}</span>
          <span className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:SemiBold',sans-serif] leading-[26px] text-[#192839] tracking-[0.16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
            your refunds this week exceeded your payments
          </span>
          <span className="leading-[26px]">:</span>
        </p>
        <ul className="list-disc">
          <li className="css-4hzbpn mb-0 ms-[24px]">
            <span className="leading-[26px]">{`Payments received: `}</span>
            <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
              ₹7.6 Lakhs
            </span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[24px]">
            <span className="leading-[26px]">{`Refunds processed: `}</span>
            <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
              ₹8.0 Lakhs
            </span>
          </li>
          <li className="css-4hzbpn ms-[24px]">
            <span className="leading-[26px]">{`Current difference: `}</span>
            <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
              -₹46,000
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}