import svgPaths from "./svg-rvo2ii4voy";

function Frame() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 162, 81, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Frame 2147239029">
            <rect fill="var(--fill-0, #00A251)" height="20" rx="3.33333" width="20" />
            <path d={svgPaths.pa561c00} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Frame />
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#020202] text-[18px] w-[688px]">{`Funds added successfully & settlements resumed`}</p>
    </div>
  );
}

function CreditCardClock24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <div className="absolute left-1/2 size-[38px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="credit_card_clock_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="credit_card_clock_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p4f7f000} fill="var(--fill-0, #0F78AD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-1/2 overflow-clip rounded-[135.714px] size-[76px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <CreditCardClock24Dp1F1F1FFill0Wght400Grad0Opsz />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[6px]" style={{ backgroundImage: "linear-gradient(115.198deg, rgb(255, 255, 255) 22.005%, rgb(234, 245, 251) 90.552%)" }}>
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[8px] size-[96px] top-[8px]">
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[115px] top-[71px]">
      <div className="bg-[#10c382] h-[4px] shrink-0 w-[77px]" />
      <div className="bg-[#dfdfdf] h-[4px] shrink-0 w-[77px]" />
      <div className="bg-[#dfdfdf] h-[4px] shrink-0 w-[77px]" />
      <div className="bg-[#dfdfdf] h-[4px] shrink-0 w-[77px]" />
    </div>
  );
}

function CurrencySymbolContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#192839] text-[20px] text-right">1,26,000</p>
    </div>
  );
}

function DecimalContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">.00</p>
    </div>
  );
}

function ValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer />
      <DecimalContainer />
    </div>
  );
}

function AmountBase() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="_AmountBase">
      <CurrencySymbolContainer />
      <ValueContainer />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-right top-0 translate-x-[-100%]">INR</p>
    </div>
  );
}

function Root() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase />
    </div>
  );
}

function Amount() {
  return (
    <div className="absolute content-stretch flex items-end justify-end left-[449px] top-[12px]" data-name="Amount">
      <Root />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[108px] relative rounded-[12px] shrink-0 w-[573px]" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(227, 246, 255) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame3 />
        <Frame4 />
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] left-[115px] not-italic opacity-50 text-[10px] text-black top-[83px]">Settlement status: Scheduled</p>
        <Amount />
        <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[0] left-[118px] not-italic text-[#243547] text-[0px] top-[12px]">
          <span className="leading-[24px] text-[#0f78ad] text-[18px]">Settlement on the way</span>
          <span className="leading-[24px] text-[18px]">
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#768ea7] text-[14px]">Settlement scheduled for Jan 24, 2026 10:00 AM</span>
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1.5px_0px_1px_white,inset_0px_1.5px_0px_1px_white]" />
      <div aria-hidden="true" className="absolute border border-[rgba(181,217,250,0.23)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
      <Frame1 />
      <div className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:Medium','Noto_Sans:Regular',sans-serif] leading-[0] relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px] w-[580px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="css-4hzbpn mb-[12px]">
          <span className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium','Noto_Sans:Regular',sans-serif] leading-[26px] text-[#192839] tracking-[0.16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
            Great news! We have received your ₹46,000.
          </span>
          <span className="leading-[26px]">{` This has cleared your negative balance, and the hold on your funds has been removed.`}</span>
        </p>
        <p className="css-4hzbpn">
          <span className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium','Noto_Sans:Regular',sans-serif] leading-[26px] text-[#192839] tracking-[0.16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>{`What happens next? `}</span>
          <span className="leading-[26px]">{` Your full settlement of ₹1.26 Lakhs is now scheduled to be transferred to your bank account by tomorrow, Jan 24.`}</span>
        </p>
      </div>
      <Frame6 />
    </div>
  );
}