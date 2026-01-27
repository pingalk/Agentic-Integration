import svgPaths from "./svg-szo4asstmp";

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Frame 2147238912" opacity="0.9">
            <rect fill="var(--fill-0, #0A0C0E)" height="24" rx="12" width="24" />
            <path d={svgPaths.p28faa480} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
      <div className="relative shrink-0 size-[32px]" data-name="Attachments Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Attachments Icon">
            <path d={svgPaths.p3ee47480} stroke="url(#paint0_linear_7_2913)" strokeWidth="0.5" />
            <g id="Rectangle 1891598536"></g>
            <path d={svgPaths.p32ff9100} fill="var(--fill-0, #7D7D7D)" id="Union" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_7_2913" x1="16" x2="16" y1="32" y2="0">
              <stop stopColor="white" />
              <stop offset="0.463394" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Attachments Icon">
        <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
        <div className="absolute inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
        </div>
        <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="compass">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="compass">
              <g id="path">
                <path clipRule="evenodd" d={svgPaths.p8ae7f80} fill="var(--fill-0, #7D7D7D)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p303f9e40} fill="var(--fill-0, #7D7D7D)" fillRule="evenodd" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="Frame">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Frame">
            <path d={svgPaths.p2f82f900} fill="var(--fill-0, #7D7D7D)" id="Vector" stroke="var(--stroke-0, #7D7D7D)" />
          </g>
        </svg>
      </div>
    </div>
  );
}