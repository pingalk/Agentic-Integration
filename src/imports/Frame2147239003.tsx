import svgPaths from "./svg-7cqy9wjh3m";

export default function Frame() {
  return (
    <div className="bg-white border border-[#1667f2] border-solid overflow-clip relative rounded-[10px] size-full">
      <p className="absolute font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[56px] left-[12px] not-italic text-[#048f56] text-[40px] text-nowrap top-[116px] tracking-[-0.52px]">98%</p>
      <p className="absolute font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[28px] left-[12px] not-italic text-[#40566d] text-[20px] text-nowrap top-[15px] tracking-[-0.26px]">
        <span>
          {`Your payment success rate `}
          <br aria-hidden="true" />
          {`is `}
        </span>
        <span className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] text-black">healthy</span>
      </p>
      <div className="absolute bg-[rgba(0,0,0,0.04)] border-[0.313px] border-solid border-white left-[12px] overflow-clip rounded-[62.5px] size-[20px] top-[79px]" data-name="CTA">
        <div className="absolute bg-[#40566d] border-[0.625px] border-black border-solid inset-[-0.31px] rounded-[71.429px] shadow-[0px_1.25px_2.5px_0px_rgba(0,0,0,0.1)]">
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1.25px_0px_0px_rgba(255,255,255,0.2),inset_0px_1.25px_0px_0px_rgba(255,255,255,0.2)]" />
        </div>
        <div className="absolute flex items-center justify-center left-1/2 size-[10px] top-[4.69px] translate-x-[-50%]">
          <div className="flex-none rotate-[180deg]">
            <div className="relative size-[10px]" data-name="Frame">
              <div className="absolute inset-[0_-13.75%_-20%_-13.75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7502 12.0003">
                  <g id="Frame">
                    <g filter="url(#filter0_d_36_1803)" id="Vector">
                      <path d={svgPaths.p24bd8b00} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p2db96800} stroke="var(--stroke-0, white)" strokeWidth="0.125" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.5003" id="filter0_d_36_1803" width="12.7502" x="0" y="0.499928">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="1.25" />
                      <feGaussianBlur stdDeviation="1.25" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_36_1803" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_36_1803" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}