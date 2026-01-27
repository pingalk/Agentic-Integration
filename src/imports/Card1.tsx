import svgPaths from "./svg-15og8h2lk7";

function Frame() {
  return (
    <div className="absolute bottom-[25px] content-stretch flex flex-col gap-[6px] items-start left-[24px] right-[26px] rounded-[100px]">
      <div className="bg-[rgba(108,132,157,0.09)] h-[6px] rounded-[100px] shrink-0 w-full" />
      <div className="h-[168px] relative shrink-0 w-[221px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 168">
          <path d={svgPaths.p39b64df0} fill="url(#paint0_linear_4123_384)" id="Union" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4123_384" x1="110.5" x2="110.5" y1="0" y2="168">
              <stop stopColor="#91E3BA" />
              <stop offset="0.44296" stopColor="#00BE5F" />
              <stop offset="1" stopColor="#00582C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="border border-[rgba(0,0,0,0.1)] border-solid overflow-clip relative rounded-[12px] size-full" data-name="Card 1" style={{ backgroundImage: "linear-gradient(180.106deg, rgb(255, 255, 255) 25.242%, rgb(182, 236, 209) 99.93%)" }}>
      <Frame />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] left-[20px] not-italic text-[#768ea7] text-[12px] top-[20px]">Payment success rate</p>
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[0] left-[20px] not-italic opacity-80 text-[16px] text-black top-[49px] tracking-[0.48px]">
        <span className="leading-[24px] text-[#192839]">
          Overall payment performance
          <br aria-hidden="true" />
          is
        </span>
        <span className="font-['TASA_Orbiter_Display:Bold',sans-serif] leading-[24px] text-[#009d4e]">{` healthy`}</span>
      </p>
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] left-[83px] not-italic text-[#40566d] text-[32px] text-right top-[108px] translate-x-[-100%]">98%</p>
    </div>
  );
}