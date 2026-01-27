import svgPaths from "./svg-avjyi74sfk";

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Frame 2147239029">
              <rect fill="var(--fill-0, #4793FD)" height="20" rx="3.33333" width="20" />
              <path d={svgPaths.pa561c00} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
        <p className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#020202] text-[18px] w-[688px]">Recent payments from pingal@gmail.com</p>
      </div>
      <p className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium',sans-serif] leading-[26px] relative shrink-0 text-[#40566d] text-[0px] text-[16px] tracking-[0.16px] w-[580px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <span className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{`Pingal has `}</span>
        <span className="text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          3 recent payments totalling ₹26,000.
        </span>
        <span className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          {" "}
        </span>
        <span className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{`Two are successful (captured) `}</span>
        <span className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{`and have been settled. The `}</span>
        <span className="text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          third—
        </span>
        <span className="text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          a netbanking payment—is still pending
        </span>
        <span className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{` as we wait for the customer's bank to confirm the transfer.`}</span>
      </p>
    </div>
  );
}