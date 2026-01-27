function CurrencySymbolContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] not-italic relative shrink-0 text-[#192839] text-[20px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">46,000</p>
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
    <div className="absolute content-stretch flex items-end justify-end left-1/2 top-[calc(50%-6px)] translate-x-[-50%] translate-y-[-50%]" data-name="Amount">
      <Root />
    </div>
  );
}

function RefNo() {
  return (
    <div className="absolute backdrop-blur-[40px] bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center left-[58px] px-[6px] py-[5px] rounded-[6px] top-[126px]" data-name="Ref No">
      <div aria-hidden="true" className="absolute border border-[rgba(175,175,175,0.4)] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#768ea7] text-[10px]">
        <p className="css-ew64yg leading-[12px]">Added via UPI</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[6px]" style={{ backgroundImage: "linear-gradient(117.01deg, rgb(255, 255, 255) 22.005%, rgb(218, 245, 232) 90.552%)" }}>
      <Amount />
      <RefNo />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[192px] left-[7px] top-[7px] w-[208px]">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Medium',sans-serif] items-center justify-between left-[237px] not-italic top-[143px] w-[320px]">
      <div className="css-g0mm18 flex flex-col justify-center leading-[0] relative shrink-0 text-[#768ea7] text-[12px]">
        <p className="css-ew64yg leading-[18px]">created on</p>
      </div>
      <p className="css-ew64yg leading-[20px] relative shrink-0 text-[#40566d] text-[14px] text-right">Jan 13, 2026</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Medium',sans-serif] items-center justify-between left-[237px] not-italic top-[113px] w-[320px]">
      <div className="css-g0mm18 flex flex-col justify-center leading-[0] relative shrink-0 text-[#768ea7] text-[12px]">
        <p className="css-ew64yg leading-[18px]">payment method</p>
      </div>
      <p className="css-ew64yg leading-[20px] relative shrink-0 text-[#40566d] text-[14px] text-right">UPI</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex font-['Inter:Medium',sans-serif] items-center justify-between left-[237px] not-italic top-[171px] w-[320px]">
      <div className="css-g0mm18 flex flex-col justify-center leading-[0] relative shrink-0 text-[#768ea7] text-[12px]">
        <p className="css-ew64yg leading-[18px]">available balance</p>
      </div>
      <p className="css-ew64yg leading-[20px] relative shrink-0 text-[#40566d] text-[14px] text-right">₹45,500</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[237px] top-[58px]">
      <div className="bg-[#10c382] h-[4px] shrink-0 w-[77px]" />
      <div className="bg-[#10c382] h-[4px] shrink-0 w-[77px]" />
      <div className="bg-[#10c382] h-[4px] shrink-0 w-[77px]" />
      <div className="bg-[#10c382] h-[4px] shrink-0 w-[77px]" />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="bg-white border border-[rgba(181,217,250,0.13)] border-solid overflow-clip relative rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)] size-full">
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] left-[237px] not-italic text-[#192839] text-[18px] top-[23px]">Funds were added successfully</p>
      <Frame3 />
      <Frame1 />
      <Frame5 />
      <Frame2 />
      <Frame4 />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] left-[237px] not-italic opacity-60 text-[10px] text-black top-[66px]">Payment status: Funds transfer succesful</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1.5px_0px_1px_white,inset_0px_1.5px_0px_1px_white]" />
    </div>
  );
}