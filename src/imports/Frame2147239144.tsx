import svgPaths from "./svg-4xkgha759o";

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

function Frame3() {
  return (
    <div className="absolute left-1/2 overflow-clip rounded-[135.714px] size-[76px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <CreditCardClock24Dp1F1F1FFill0Wght400Grad0Opsz />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[6px]" style={{ backgroundImage: "linear-gradient(115.198deg, rgb(255, 255, 255) 22.005%, rgb(234, 245, 251) 90.552%)" }}>
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[7px] size-[96px] top-[7px]">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[114px] top-[70px]">
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
    <div className="absolute content-stretch flex items-end justify-end left-[448px] top-[11px]" data-name="Amount">
      <Root />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="border border-[rgba(181,217,250,0.23)] border-solid overflow-clip relative rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)] size-full" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(227, 246, 255) 100%)" }}>
      <Frame1 />
      <Frame2 />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] left-[114px] not-italic opacity-50 text-[10px] text-black top-[82px]">Settlement status: Scheduled</p>
      <Amount />
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[0] left-[117px] not-italic text-[#243547] text-[0px] top-[11px]">
        <span className="leading-[24px] text-[#0f78ad] text-[18px]">Settlement on the way</span>
        <span className="leading-[24px] text-[18px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#768ea7] text-[14px]">Settlement scheduled for Jan 24, 2026 10:00 AM</span>
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1.5px_0px_1px_white,inset_0px_1.5px_0px_1px_white]" />
    </div>
  );
}