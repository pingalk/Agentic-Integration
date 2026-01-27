function CurrencySymbolContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <div className="css-g0mm18 flex flex-col font-['Inter:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#192839] text-[20px] text-right">
        <p className="css-ew64yg leading-[26px]">₹</p>
      </div>
    </div>
  );
}

function MainValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <div className="css-g0mm18 flex flex-col font-['TASA_Orbiter_Display:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">
        <p className="css-ew64yg leading-[38px]">1.26</p>
      </div>
    </div>
  );
}

function DenominationContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="denomination-container">
      <div className="css-g0mm18 flex flex-col font-['TASA_Orbiter_Display:SemiBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">
        <p className="css-ew64yg leading-[38px]">L</p>
      </div>
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
      <div className="absolute css-g0mm18 flex flex-col font-['Inter:Regular',sans-serif] justify-end leading-[0] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-right top-[14px] translate-x-[-100%] translate-y-[-100%]">
        <p className="css-ew64yg leading-[14px]">INR</p>
      </div>
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
    <div className="absolute content-stretch flex items-end justify-end left-[15px] top-[131px]" data-name="Amount">
      <Root />
    </div>
  );
}

export default function SettlementCard() {
  return (
    <div className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.1)] border-solid overflow-clip relative rounded-[12px] size-full" data-name="Settlement Card">
      <div className="absolute h-[98px] left-[-27px] top-[173px] w-[275px]">
        <div className="absolute inset-[-61.22%_-21.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 395 218">
            <g filter="url(#filter0_f_6006_2101)" id="Ellipse 9343" opacity="0.97">
              <ellipse cx="197.5" cy="109" fill="var(--fill-0, #D92D20)" rx="137.5" ry="49" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="218" id="filter0_f_6006_2101" width="395" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6006_2101" stdDeviation="30" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[0] left-[13px] not-italic text-[20px] text-white top-[15px] tracking-[-0.26px]">
        <span className="leading-[28px] text-black">Your settlements are</span>
        <span className="leading-[28px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['TASA_Orbiter_Display:Bold',sans-serif] leading-[28px] text-[#d92d20]">paused</span>
      </p>
      <Amount />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[16px] left-[15px] not-italic text-[#768ea7] text-[12px] top-[111px] tracking-[0.24px]">NEXT SETTLEMENT</p>
    </div>
  );
}