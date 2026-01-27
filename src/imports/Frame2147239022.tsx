import svgPaths from "./svg-ppa97fze1j";

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
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">7.56</p>
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
    <div className="absolute content-stretch flex items-end justify-end left-[15px] top-[133px]" data-name="Amount">
      <Root />
    </div>
  );
}

function Data() {
  return (
    <div className="absolute inset-[28.13%_0_0_0]" data-name="data-1">
      <div className="absolute inset-[-0.72%_-0.39%_0_-0.46%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 303.575 139.719">
          <g id="data-1">
            <path d={svgPaths.p39e2ae00} fill="url(#paint0_linear_4104_1933)" id="area" />
            <path d={svgPaths.pcb8e000} id="line" stroke="var(--stroke-0, #00BE5F)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4104_1933" x1="151.897" x2="151.897" y1="4.46182" y2="139.719">
              <stop stopColor="#B6ECD1" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function SparkChartOnlyOnDesign() {
  return (
    <div className="absolute h-[193px] left-[224px] overflow-clip top-[34px] w-[301px]" data-name="Spark Chart [ONLY ON DESIGN]">
      <Data />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="border border-[#dee1e3] border-solid overflow-clip relative rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)] size-full" style={{ backgroundImage: "linear-gradient(rgb(250, 250, 251) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(243, 244, 245) 100%)" }}>
      <Amount />
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[0] left-[18px] not-italic text-[#40566d] text-[0px] text-[14px] top-[14px] tracking-[-0.182px]">
        <span className="leading-[20px]">{`You’ve collect 1.08L worth payments today. `}</span>
        <span className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[20px] text-[#069a50]">Higher than usual</span>
      </p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[16px] left-[15px] not-italic text-[#768ea7] text-[10px] top-[113px] tracking-[0.3px]">ACCOUNT BALANCE</p>
      <SparkChartOnlyOnDesign />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1.5px_0px_1px_white]" />
    </div>
  );
}
