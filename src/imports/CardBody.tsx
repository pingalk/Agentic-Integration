import svgPaths from "./svg-uzbxbe87oz";

function Close() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <path d={svgPaths.p2f9c6900} fill="var(--fill-0, #D92D20)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(217,45,32,0.09)] content-stretch flex inset-0 items-start overflow-clip p-[14px] rounded-[4px]">
      <Close />
    </div>
  );
}

function State() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="State">
      <Frame2 />
    </div>
  );
}

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
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">1,000</p>
    </div>
  );
}

function DecimalContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#192839] text-[20px] text-right">.00</p>
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
    <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
      <Root />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="bg-[rgba(217,45,32,0.09)] content-stretch flex gap-[4px] h-[24px] items-center px-[12px] py-0 relative rounded-[1000px] shrink-0" data-name="wrapper">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#d92d20] text-[12px]">Failed</p>
    </div>
  );
}

function Root1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="root">
      <Wrapper />
    </div>
  );
}

function BadgeCaptured() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Badge/captured">
      <Root1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Amount />
      <BadgeCaptured />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[534px]">
      <Frame />
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#192839] text-[0px] w-[min-content]">
        <p className="css-4hzbpn font-['Inter:Regular',sans-serif]">
          <span className="leading-[24px] text-[16px]">{`Created on Thu Feb 2, `}</span>
          <span className="leading-[20px] text-[#768ea7] text-[14px]">12:17am</span>
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <State />
      <Frame1 />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 610 1">
          <g id="Divider">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="610" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame3 />
      <Divider />
    </div>
  );
}

function IdentifierCardContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative rounded-[4px]" data-name="Identifier card content">
      <Frame4 />
    </div>
  );
}

export default function CardBody() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="card-body">
      <IdentifierCardContent />
    </div>
  );
}