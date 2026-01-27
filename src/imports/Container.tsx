import svgPaths from "./svg-7ai3inkdbc";

function PlusBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="plus">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
    </div>
  );
}

export default function Container() {
  return (
    <div className="backdrop-blur-[5.5px] backdrop-filter bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-center justify-between p-[12px] relative rounded-[24px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#a4d4fe] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
      <div className="h-[32px] overflow-clip relative rounded-[8px] shrink-0 w-[361px]">
        <div className="absolute flex flex-col font-['TASA_Orbiter_Display:Regular',sans-serif] justify-center leading-[0] left-[60.5px] not-italic text-[#768ea7] text-[18px] text-center text-nowrap top-[calc(50%+1px)] translate-x-[-50%] translate-y-[-50%]">
          <p className="leading-[24px]">Ask anything...</p>
        </div>
        <div className="absolute bg-[#1291d0] h-[22px] left-[5px] rounded-[100px] top-[calc(50%+1px)] translate-y-[-50%] w-[2px]" />
      </div>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between opacity-0 relative shrink-0 w-[49px]">
          <PlusBackgroundImage>
            <path d={svgPaths.p136cecf0} fill="var(--fill-0, #40566D)" id="path" />
          </PlusBackgroundImage>
          <PlusBackgroundImage>
            <path d={svgPaths.p398bd180} fill="var(--fill-0, #40566D)" id="Vector" />
          </PlusBackgroundImage>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[111px]">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Attachments Icon">
              <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
              <BackgroundImage />
              <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="plus">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="plus">
                    <path d={svgPaths.p83dad00} fill="var(--fill-0, #768EA7)" id="path" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Attachments Icon">
              <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
              <BackgroundImage />
              <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="mic">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="mic">
                    <g id="path">
                      <path clipRule="evenodd" d={svgPaths.p36c9dec0} fill="var(--fill-0, #768EA7)" fillRule="evenodd" />
                      <path d={svgPaths.p6ec300} fill="var(--fill-0, #768EA7)" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[100px] shrink-0 size-[32px]">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute border border-[#0354e0] border-solid inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(-73.0125deg, rgb(21, 102, 241) 54.842%, rgb(71, 147, 253) 98.573%)" }}>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
              </div>
              <div className="absolute flex items-center justify-center left-1/2 size-[16px] top-[8px] translate-x-[-50%]">
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
            <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}