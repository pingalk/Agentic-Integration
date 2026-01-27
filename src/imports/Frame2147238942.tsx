function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#020202] text-[18px] w-[688px]">{`How to unlock your money immediately: `}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
      <Frame1 />
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:Regular','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px] w-[580px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <span className="leading-[26px]">{`You have ₹1.26 Lakhs in settlements waiting. `}</span>
        <span className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium','Noto_Sans:Regular',sans-serif] leading-[26px] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          Add ₹46,000 to your Razorpay account now
        </span>
        <span className="leading-[26px]">{` to clear the negative balance, and your full `}</span>
        <span className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium','Noto_Sans:Regular',sans-serif] leading-[26px] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          ₹1.26 Lakhs will be transferred
        </span>
        <span className="leading-[26px]">{` to your bank by the `}</span>
        <span className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium','Noto_Sans:Regular',sans-serif] leading-[26px] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
          next business day.
        </span>
      </p>
    </div>
  );
}