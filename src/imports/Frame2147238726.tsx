import svgPaths from "./svg-vs85e1s3zl";

export default function Frame() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] border-[0.5px] border-solid border-white overflow-clip relative rounded-[100px] size-full">
      <div className="absolute border border-[#0354e0] border-solid inset-[-0.5px] rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(-73.0125deg, rgb(21, 102, 241) 54.842%, rgb(71, 147, 253) 98.573%)" }}>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
      </div>
      <div className="absolute flex items-center justify-center left-1/2 size-[16px] top-[7.5px] translate-x-[-50%]">
        <div className="flex-none rotate-[180deg]">
          <div className="relative size-[16px]" data-name="Frame">
            <div className="absolute inset-[-1.25%_-7.5%_-26.25%_-7.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4006 20.4004">
                <g id="Frame">
                  <g filter="url(#filter0_d_2017_7734)" id="Vector">
                    <path d={svgPaths.p4a27f00} fill="var(--fill-0, white)" />
                    <path d={svgPaths.p359eb400} stroke="var(--stroke-0, white)" strokeWidth="0.2" />
                  </g>
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4004" id="filter0_d_2017_7734" width="18.4006" x="0" y="-4.47035e-08">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2017_7734" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_2017_7734" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}