import svgPaths from "./svg-ca7pvfxu0c";
import clsx from "clsx";
import imgGeminiGeneratedImageK30W93K30W93K30W19 from "figma:asset/a34d5728d95c39b20fd660ee602d74c17675bd80.png";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(247, 247, 248) 100%)" }} className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[20px] py-[16px] relative w-full">{children}</div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1.5px_0px_1px_white,inset_0px_1.5px_0px_1px_white]" />
      <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text, children }: React.PropsWithChildren<BackgroundImageAndText2Props>) {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[12px] text-nowrap tracking-[0.72px] uppercase">{text}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage2>
      <g id="Frame">{children}</g>
    </BackgroundImage2>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0">
      <BackgroundImage>
        <path d={svgPaths.p26bd9c00} id="Vector" stroke="var(--stroke-0, #D92D20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </BackgroundImage>
      <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d92d20] text-[12px] text-nowrap tracking-[-0.156px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[14px]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#050505] text-[23px] tracking-[-0.759px] w-full">
          <p className="leading-[normal]">{"₹"}</p>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#050505] text-[24px] text-nowrap tracking-[-0.792px]">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Group2147234129GeminiGeneratedImageK30W93K30W93K30WBackgroundImageProps = {
  additionalClassNames?: string;
};

function Group2147234129GeminiGeneratedImageK30W93K30W93K30WBackgroundImage({ additionalClassNames = "" }: Group2147234129GeminiGeneratedImageK30W93K30W93K30WBackgroundImageProps) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageK30W93K30W93K30W19} />
    </div>
  );
}

function ChevronRightBackgroundImage() {
  return (
    <BackgroundImage3>
      <g id="chevron-right">
        <path clipRule="evenodd" d={svgPaths.p361df540} fill="var(--fill-0, #606C75)" fillRule="evenodd" id="path" />
      </g>
    </BackgroundImage3>
  );
}

export default function TopContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Top content">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[20px] text-nowrap tracking-[-0.1px]">Transactions Overview</p>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">updated 28m ago</p>
            <BackgroundImage3>
              <g id="refresh">
                <g id="path">
                  <path d={svgPaths.p3f1141b2} fill="var(--fill-0, #606C75)" />
                  <path d={svgPaths.p1cdb4600} fill="var(--fill-0, #606C75)" />
                </g>
              </g>
            </BackgroundImage3>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center pl-[12px] pr-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="wrapper">
            <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[12px] text-nowrap tracking-[-0.156px]">Today</p>
            <BackgroundImage3>
              <g id="trailing-icon">
                <path clipRule="evenodd" d={svgPaths.p11e63280} fill="var(--fill-0, #050505)" fillRule="evenodd" id="path" />
              </g>
            </BackgroundImage3>
          </div>
          <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center pl-[12px] pr-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="wrapper">
            <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[12px] text-nowrap tracking-[-0.156px]">Documentation</p>
            <BackgroundImage3>
              <g id="arrow-up-right">
                <path d={svgPaths.p18ee7700} fill="var(--fill-0, #050505)" id="path" />
              </g>
            </BackgroundImage3>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        <div className="h-[164px] relative rounded-[12px] shrink-0 w-full" data-name="39" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(247, 247, 248) 100%)" }}>
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute bottom-[-126.07px] flex h-[181.332px] items-center justify-center right-[-165.67px] w-[498.669px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none rotate-[350.679deg]">
                <div className="h-[103.609px] relative w-[488.336px]">
                  <div className="absolute inset-[-138.15%_-29.31%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 774.598 389.871">
                      <g filter="url(#filter0_f_50_9410)" id="Ellipse 9335">
                        <ellipse cx="387.299" cy="194.935" fill="var(--fill-0, #B8E1FF)" rx="244.168" ry="51.8045" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="389.871" id="filter0_f_50_9410" width="774.598" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_50_9410" stdDeviation="71.5654" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex items-center justify-between left-[20px] right-[20px] top-[16px]">
              <BackgroundImageAndText2 text="Collected amount">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 1">
                  <line id="Line 1465" opacity="0.4" stroke="var(--stroke-0, #606C75)" strokeDasharray="3 3" x2="140" y1="0.5" y2="0.5" />
                </svg>
              </BackgroundImageAndText2>
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex h-full items-end pb-[1.5px] pt-0 px-0 relative shrink-0">
                  <ChevronRightBackgroundImage />
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[95px] items-start justify-center left-[20px] top-[52px] w-[269.441px]">
              <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[31px] text-nowrap tracking-[-1.023px]">₹</p>
                </div>
                <p className="font-['TASA_Orbiter_Deck:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[54px] text-nowrap tracking-[-1.782px]">1,20,000.00</p>
              </div>
              <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0">
                <BackgroundImage>
                  <path d={svgPaths.pbc1f4c0} id="Vector" stroke="var(--stroke-0, #01A653)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </BackgroundImage>
                <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#01a653] text-[12px] text-nowrap tracking-[-0.156px]">20%</p>
              </div>
            </div>
            <div className="absolute contents left-[931px] top-[16px]" data-name="visual">
              <div className="absolute contents left-[948.2px] top-[16px]">
                <div className="absolute flex h-[87.064px] items-center justify-center left-[948.2px] top-[16px] w-[95.645px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="flex-none rotate-[184.077deg] scale-y-[-100%] skew-x-[5.967deg]">
                    <Group2147234129GeminiGeneratedImageK30W93K30W93K30WBackgroundImage additionalClassNames="h-[82.55px] w-[81.408px]" />
                  </div>
                </div>
                <div className="absolute flex h-[124.257px] items-center justify-center left-[994.64px] top-[42.43px] w-[111.544px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="flex-none rotate-[144.174deg] scale-y-[-100%] skew-x-[5.967deg]">
                    <Group2147234129GeminiGeneratedImageK30W93K30W93K30WBackgroundImage additionalClassNames="h-[86.005px] w-[84.815px]" />
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[931px] top-[77.4px]">
                <div className="absolute h-[143.437px] left-[931px] top-[77.4px] w-[178.923px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178.923 143.437">
                    <path d={svgPaths.p2b313cf0} fill="var(--fill-0, #75A3FF)" id="Rectangle 1891601673" stroke="url(#paint0_linear_57_9184)" strokeWidth="1.19408" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_57_9184" x1="185.186" x2="93.0945" y1="12.1968" y2="193.452">
                        <stop stopColor="#6F6F6F" />
                        <stop offset="0.0817308" stopColor="#ECECEC" />
                        <stop offset="0.153846" stopColor="#FEFEFE" />
                        <stop offset="0.25" stopColor="#4B4B4B" />
                        <stop offset="0.355769" stopColor="white" />
                        <stop offset="0.557692" stopColor="#C4C4C4" />
                        <stop offset="0.754808" stopColor="#666666" />
                        <stop offset="0.831731" stopColor="#3C3C3C" />
                        <stop offset="0.918269" stopColor="white" />
                        <stop offset="1" stopColor="#666666" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute h-[143.813px] left-[931.71px] top-[78.14px] w-[179.325px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.325 143.813">
                    <path d={svgPaths.p163f6200} fill="var(--fill-0, #75A3FF)" id="Rectangle 1891601675" />
                  </svg>
                </div>
                <div className="absolute h-[108.928px] left-[945.36px] top-[95.58px] w-[152.031px]">
                  <div className="absolute inset-[-21.07%_-15.1%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197.938 154.835">
                      <g filter="url(#filter0_f_57_9182)" id="Rectangle 1891601674">
                        <path d={svgPaths.p34deac00} fill="var(--fill-0, #A7E6F9)" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="154.835" id="filter0_f_57_9182" width="197.938" x="0" y="-6.06955e-07">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_57_9182" stdDeviation="11.4767" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[73.762px] items-center justify-center left-[116.06px] mix-blend-overlay top-[173.62px] w-[67.224px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="flex-none rotate-[30.917deg]">
                <div className="h-[60.89px] relative w-[41.891px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Ellipse 9451" style={{ mixBlendMode: "overlay" }}></g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_0px_2px_white,inset_0px_-1.5px_0px_1px_white]" />
          <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Transaction Split">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Breakdown">
            <BackgroundImage1>
              <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <BackgroundImage>
                      <path d={svgPaths.p3fa96280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                    </BackgroundImage>
                    <BackgroundImageAndText2 text="Refunds">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 1">
                        <line id="Line 1465" opacity="0.4" stroke="var(--stroke-0, #606C75)" strokeDasharray="3 3" x2="61" y1="0.5" y2="0.5" />
                      </svg>
                    </BackgroundImageAndText2>
                  </div>
                  <div className="flex flex-row items-center self-stretch">
                    <div className="content-stretch flex h-full items-end pb-[1.5px] pt-0 px-0 relative shrink-0">
                      <ChevronRightBackgroundImage />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                    <BackgroundImageAndText text="5,421" />
                    <BackgroundImageAndText1 text="2%" />
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">3 processed</p>
                </div>
              </div>
            </BackgroundImage1>
            <BackgroundImage1>
              <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[143.167px]">
                    <BackgroundImage>
                      <path d={svgPaths.p232aa180} id="Vector" stroke="var(--stroke-0, #050505)" strokeWidth="1.2" />
                      <path d={svgPaths.p27165aa0} fill="var(--fill-0, #050505)" id="Vector_2" />
                      <path d={svgPaths.p3ee2c000} fill="var(--fill-0, #050505)" id="Vector_3" />
                    </BackgroundImage>
                    <BackgroundImageAndText2 text="Disputes">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 1">
                        <line id="Line 1465" opacity="0.4" stroke="var(--stroke-0, #606C75)" strokeDasharray="3 3" x2="64" y1="0.5" y2="0.5" />
                      </svg>
                    </BackgroundImageAndText2>
                  </div>
                  <div className="flex flex-row items-center self-stretch">
                    <div className="content-stretch flex h-full items-end pb-[1.5px] pt-0 px-0 relative shrink-0">
                      <ChevronRightBackgroundImage />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                    <BackgroundImageAndText text="652" />
                    <BackgroundImageAndText1 text="2%" />
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">
                    <p className="font-['Inter:Medium',sans-serif] relative shrink-0">0 open</p>
                    <p className="font-['Inter:Regular',sans-serif] relative shrink-0">·</p>
                    <p className="font-['Inter:Medium',sans-serif] relative shrink-0">0 under review</p>
                  </div>
                </div>
              </div>
            </BackgroundImage1>
            <BackgroundImage1>
              <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[133.167px]">
                    <BackgroundImage2>
                      <g clipPath="url(#clip0_50_9347)" id="Frame">
                        <path d={svgPaths.p32395700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_50_9347">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </BackgroundImage2>
                    <BackgroundImageAndText2 text="Failed">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
                        <line id="Line 1465" opacity="0.4" stroke="var(--stroke-0, #606C75)" strokeDasharray="3 3" x2="44" y1="0.5" y2="0.5" />
                      </svg>
                    </BackgroundImageAndText2>
                  </div>
                  <div className="flex flex-row items-center self-stretch">
                    <div className="content-stretch flex h-full items-end pb-[1.5px] pt-0 px-0 relative shrink-0">
                      <ChevronRightBackgroundImage />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                    <div className="content-stretch flex items-start relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#050505] text-[24px] text-nowrap tracking-[-0.792px]">
                        <p className="leading-[normal]">03</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0">
                      <BackgroundImage>
                        <path d={svgPaths.p26bd9c00} id="Vector" stroke="var(--stroke-0, #008743)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </BackgroundImage>
                      <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#008743] text-[12px] text-nowrap tracking-[-0.156px]">89%</p>
                    </div>
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">Payments</p>
                </div>
              </div>
            </BackgroundImage1>
          </div>
        </div>
      </div>
    </div>
  );
}