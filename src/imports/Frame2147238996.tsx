import svgPaths from "./svg-9r7j4fq4cg";

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

function ChevronRightBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-right">
          <path clipRule="evenodd" d={svgPaths.p361df540} fill="var(--fill-0, #606C75)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full">
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
  );
}