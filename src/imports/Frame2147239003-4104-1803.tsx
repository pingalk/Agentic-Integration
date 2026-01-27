import svgPaths from "./svg-2375y6edm2";

function Data() {
  return (
    <div className="absolute inset-[28.13%_0_0_0]" data-name="data-1">
      <div className="absolute inset-[-0.72%_-0.44%_0_-0.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 271.602 139.719">
          <g id="data-1">
            <path d={svgPaths.p3f42c000} fill="url(#paint0_linear_4104_1921)" id="area" />
            <path d={svgPaths.p2e4d0600} id="line" stroke="var(--stroke-0, #00BE5F)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4104_1921" x1="135.907" x2="135.907" y1="4.46182" y2="139.719">
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
    <div className="absolute h-[193px] left-[-9px] overflow-clip top-[52px] w-[269px]" data-name="Spark Chart [ONLY ON DESIGN]">
      <Data />
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="absolute left-[90px] size-[12px] top-[92px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-up">
          <path d={svgPaths.p1abdbaf0} fill="var(--fill-0, #00BE5F)" id="path" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="border border-[#dee1e3] border-solid overflow-clip relative rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)] size-full" style={{ backgroundImage: "linear-gradient(rgb(250, 250, 251) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(243, 244, 245) 100%)" }}>
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] left-[78px] not-italic text-[#192839] text-[32px] text-right top-[75px] translate-x-[-100%]">98%</p>
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[0] left-[15px] not-italic text-[#40566d] text-[0px] text-[14px] top-[15px] tracking-[-0.182px]">
        <span className="leading-[20px]">{`Your payment success rate is `}</span>
        <span className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[20px] text-[#069a50]">healthy</span>
      </p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[16px] left-[16px] not-italic text-[#768ea7] text-[10px] top-[55px] tracking-[0.3px]">SUCCESS RATE</p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[16px] left-[104px] not-italic text-[#00be5f] text-[10px] top-[90px] tracking-[0.3px]">up by 2% today</p>
      <SparkChartOnlyOnDesign />
      <ArrowUp />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1.5px_0px_1px_white]" />
    </div>
  );
}
