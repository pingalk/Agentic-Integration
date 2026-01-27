import svgPaths from "./svg-kh5coiqosb";

function ChartContainer() {
  return (
    <div className="absolute h-[241px] left-[8px] top-[242px] w-[246px]" data-name="chart-container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 246 241">
        <g id="chart-container">
          <path d={svgPaths.p2e0b1900} fill="var(--fill-0, #F1F1F1)" id="chart-shape" />
          <path d={svgPaths.p2e0b1900} fill="var(--fill-0, #F8FAFC)" id="chart-shape_2" opacity="0.5" />
          <path d={svgPaths.p19222400} fill="var(--fill-0, #F8FAFC)" id="chart-shape_3" opacity="0.5" />
          <path d={svgPaths.p2bd47e70} fill="var(--fill-0, #F8FAFC)" id="chart-shape_4" opacity="0.5" />
          <path d={svgPaths.p15c8b180} fill="var(--fill-0, #F8FAFC)" id="chart-shape_5" opacity="0.5" />
          <path d={svgPaths.p888e040} fill="var(--fill-0, #305EFF)" id="chart-shape_6" />
          <path d={svgPaths.p8151f80} fill="var(--fill-0, #4D7FFF)" id="chart-shape_7" />
          <path d={svgPaths.p169134f0} fill="var(--fill-0, #75A3FF)" id="chart-shape_8" />
          <path d={svgPaths.p30e4cb00} fill="var(--fill-0, #B4CDFD)" id="chart-shape_9" />
        </g>
      </svg>
    </div>
  );
}

function CurrencySymbolContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#192839] text-[12px] text-right">1,76,000</p>
    </div>
  );
}

function DecimalContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">.00</p>
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
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-[57px]" data-name="Amount">
      <Root />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic opacity-50 relative shrink-0 text-[#40566d] text-[12px]">CARDS</p>
      <Amount />
    </div>
  );
}

function CurrencySymbolContainer1() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#192839] text-[12px] text-right">1,28,000</p>
    </div>
  );
}

function DecimalContainer1() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">.00</p>
    </div>
  );
}

function ValueContainer1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer1 />
      <DecimalContainer1 />
    </div>
  );
}

function AmountBase1() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="_AmountBase">
      <CurrencySymbolContainer1 />
      <ValueContainer1 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-right top-0 translate-x-[-100%]">INR</p>
    </div>
  );
}

function Root1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase1 />
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-[57px]" data-name="Amount">
      <Root1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic opacity-50 relative shrink-0 text-[#40566d] text-[12px]">UPI</p>
      <Amount1 />
    </div>
  );
}

function CurrencySymbolContainer2() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#192839] text-[12px] text-right">13,000</p>
    </div>
  );
}

function DecimalContainer2() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">.00</p>
    </div>
  );
}

function ValueContainer2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer2 />
      <DecimalContainer2 />
    </div>
  );
}

function AmountBase2() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="_AmountBase">
      <CurrencySymbolContainer2 />
      <ValueContainer2 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-right top-0 translate-x-[-100%]">INR</p>
    </div>
  );
}

function Root2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase2 />
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-[57px]" data-name="Amount">
      <Root2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic opacity-50 relative shrink-0 text-[#40566d] text-[12px]">NETBANKING</p>
      <Amount2 />
    </div>
  );
}

function CurrencySymbolContainer3() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer3() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#192839] text-[12px] text-right">5,600</p>
    </div>
  );
}

function DecimalContainer3() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">.00</p>
    </div>
  );
}

function ValueContainer3() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer3 />
      <DecimalContainer3 />
    </div>
  );
}

function AmountBase3() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="_AmountBase">
      <CurrencySymbolContainer3 />
      <ValueContainer3 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-right top-0 translate-x-[-100%]">INR</p>
    </div>
  );
}

function Root3() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase3 />
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-[57px]" data-name="Amount">
      <Root3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic opacity-50 relative shrink-0 text-[#40566d] text-[12px]">OTHERS</p>
      <Amount3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[19px] top-[122px] w-[233px]">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="border border-[rgba(0,0,0,0.1)] border-solid overflow-clip relative rounded-[12px] size-full" data-name="Card 3" style={{ backgroundImage: "linear-gradient(180.114deg, rgb(255, 255, 255) 30.638%, rgb(216, 228, 253) 99.925%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] left-[20px] not-italic text-[#768ea7] text-[12px] top-[20px]">Payment method split</p>
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[0] left-[20px] not-italic opacity-80 text-[16px] text-black top-[49px] tracking-[0.48px]">
        <span className="leading-[24px] text-[#192839]">Cards and UPI contribute to</span>
        <span className="leading-[24px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['TASA_Orbiter_Display:Bold',sans-serif] leading-[24px] text-[#2950da]">94% of your total payments</span>
      </p>
      <div className="absolute h-[106px] left-[18px] top-[186.5px] w-[271.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector 4126"></g>
        </svg>
      </div>
      <ChartContainer />
      <Frame4 />
    </div>
  );
}