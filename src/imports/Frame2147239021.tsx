import svgPaths from "./svg-8pkk8o13c0";

function CurrencySymbolContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#192839] text-[20px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">1.26</p>
    </div>
  );
}

function DenominationContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="denomination-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">L</p>
    </div>
  );
}

function ValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer />
      <DenominationContainer />
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
    <div className="absolute content-stretch flex items-end justify-end left-[15px] top-[138px]" data-name="Amount">
      <Root />
    </div>
  );
}

function Check() {
  return (
    <div className="absolute left-[3px] size-[12px] top-[3px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p13502180} fill="var(--fill-0, #F9F9FA)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#03be60] left-[113px] rounded-[100px] size-[18px] top-[152px]">
      <Check />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="border border-[#dee1e3] border-solid overflow-clip relative rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)] size-full" style={{ backgroundImage: "linear-gradient(rgb(250, 250, 251) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(243, 244, 245) 100%)" }}>
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[0] left-[15px] not-italic text-[14px] text-black top-[15px] tracking-[-0.182px]">
        <span className="leading-[20px]">{`Your settlements are `}</span>
        <span className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[20px] text-[#069a50]">on track</span>
      </p>
      <Amount />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[16px] left-[15px] not-italic text-[#768ea7] text-[10px] top-[118px] tracking-[0.3px]">TODAY’S SETTLEMENTS</p>
      <Frame1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1.5px_0px_1px_white]" />
    </div>
  );
}
