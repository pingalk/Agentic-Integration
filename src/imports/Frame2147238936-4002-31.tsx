export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] min-w-full not-italic relative shrink-0 text-[#193f47] text-[18px] w-[min-content]">Recent payments from pingal@gmail.com</p>
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[#40566d] text-[0px] text-[16px] tracking-[0.16px] w-[580px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <span className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{`Pingal has `}</span>
        <span className="leading-[26px] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          3 recent payments totalling ₹26,000.
        </span>
        <span className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          {" "}
        </span>
        <span className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{`Two are successful (captured) `}</span>
        <span className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{`and have been settled. The `}</span>
        <span className="leading-[26px] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          third—
        </span>
        <span className="leading-[26px] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          a netbanking payment—is still pending
        </span>
        <span className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{` as we wait for the customer's bank to confirm the transfer.`}</span>
      </p>
    </div>
  );
}