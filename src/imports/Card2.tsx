function Frame() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Medium',sans-serif] items-center justify-between leading-[18px] left-1/2 not-italic text-[12px] text-black top-[333px] translate-x-[-50%] w-[227px]">
      <p className="css-ew64yg relative shrink-0">S</p>
      <p className="css-ew64yg relative shrink-0">M</p>
      <p className="css-ew64yg relative shrink-0">T</p>
      <p className="css-ew64yg relative shrink-0">W</p>
      <p className="css-ew64yg relative shrink-0">T</p>
      <p className="css-ew64yg relative shrink-0">F</p>
      <p className="css-ew64yg relative shrink-0">S</p>
    </div>
  );
}

function CurrencySymbolContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#192839] text-[12px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#192839] text-[16px] text-right">41</p>
    </div>
  );
}

function DenominationContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="denomination-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#192839] text-[16px] text-right">k</p>
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
    <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
      <Root />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[19px] top-[226px]">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-black">Avg:</p>
      <Amount />
    </div>
  );
}

function CurrencySymbolContainer1() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#192839] text-[20px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">1.2</p>
    </div>
  );
}

function DenominationContainer1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="denomination-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">L</p>
    </div>
  );
}

function ValueContainer1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer1 />
      <DenominationContainer1 />
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
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="Amount">
      <Root1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] top-[108px] w-[73px]">
      <Amount1 />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#768ea7] text-[10px] tracking-[0.3px] w-full">Avl balance</p>
    </div>
  );
}

function CurrencySymbolContainer2() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#192839] text-[20px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">75</p>
    </div>
  );
}

function DenominationContainer2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="denomination-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">k</p>
    </div>
  );
}

function ValueContainer2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer2 />
      <DenominationContainer2 />
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
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="Amount">
      <Root2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[150px] top-[108px] w-[73px]">
      <Amount2 />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#768ea7] text-[10px] tracking-[0.3px] w-[103px]">Payments collected</p>
    </div>
  );
}

export default function Card() {
  return (
    <div className="border border-[rgba(0,0,0,0.1)] border-solid overflow-clip relative rounded-[12px] size-full" data-name="Card 2" style={{ backgroundImage: "linear-gradient(180.114deg, rgb(255, 255, 255) 30.638%, rgb(182, 236, 209) 99.925%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] left-[20px] not-italic text-[#768ea7] text-[12px] top-[20px]">Payments collected</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[0] left-[20px] not-italic opacity-80 text-[0px] text-[16px] text-black top-[49px] tracking-[0.14px] tracking-[0.48px]">
        <span className="font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[24px] text-[#192839]">Payments collected today is</span>
        <span className="font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[24px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['TASA_Orbiter_Display:Bold',sans-serif] leading-[24px] text-[#009d4e]">is higher than usual</span>
      </p>
      <div className="absolute h-[106px] left-[18px] top-[186.5px] w-[271.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector 4126"></g>
        </svg>
      </div>
      <div className="absolute bg-[#145252] h-px left-[11px] top-[328px] w-[249px]" />
      <Frame />
      <div className="absolute bg-[#b9dad3] bottom-[30px] h-[35px] left-[47px] rounded-tl-[4px] rounded-tr-[4px] w-[28px]" />
      <div className="absolute bg-[#b9dad3] bottom-[30px] h-[35px] left-[84px] rounded-tl-[4px] rounded-tr-[4px] w-[28px]" />
      <div className="absolute bg-[#b9dad3] bottom-[30px] h-[105px] left-[121px] rounded-tl-[4px] rounded-tr-[4px] w-[28px]" />
      <div className="absolute bg-[#b9dad3] bottom-[30px] h-[135px] left-[158px] rounded-tl-[4px] rounded-tr-[4px] w-[28px]" />
      <div className="absolute bg-[#b9dad3] bottom-[30px] h-[55px] left-[13px] rounded-tl-[4px] rounded-tr-[4px] w-[28px]" />
      <div className="absolute h-0 left-[calc(50%+0.5px)] top-[251px] translate-x-[-50%] w-[234px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 1">
            <line id="Line 1467" stroke="var(--stroke-0, #145252)" strokeDasharray="4 4" x2="234" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}