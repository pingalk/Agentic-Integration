import svgPaths from "./svg-ry7c0e1u57";
import clsx from "clsx";

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage3>
      <g id="icon">{children}</g>
    </BackgroundImage3>
  );
}

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[12px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function WrapperBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[rgba(108,132,157,0.12)] grow min-h-[36px] min-w-px relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[12px] py-[8px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage4>
      <g id="leadingIcon">{children}</g>
    </BackgroundImage4>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
    </div>
  );
}
type ArrowRightBackgroundImageProps = {
  additionalClassNames?: string;
};

function ArrowRightBackgroundImage({ additionalClassNames = "" }: ArrowRightBackgroundImageProps) {
  return (
    <div className={clsx("absolute size-[16px] top-[calc(50%+0.1px)] translate-x-[-50%] translate-y-[-50%]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p1503f900} fill="var(--fill-0, #768EA7)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Frame1973342713BackgroundImage() {
  return (
    <div className="relative shrink-0 size-[4px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
        <circle cx="2" cy="2" fill="var(--fill-0, #D9D9D9)" id="Ellipse 5954" r="2" />
      </svg>
    </div>
  );
}
type LabelBackgroundImageAndTextProps = {
  text: string;
};

function LabelBackgroundImageAndText({ text }: LabelBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2950da] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}

function LeadingIconBackgroundImage() {
  return (
    <BackgroundImage1>
      <path clipRule="evenodd" d={svgPaths.p114a7500} fill="var(--fill-0, #192839)" fillRule="evenodd" id="path" />
    </BackgroundImage1>
  );
}
type WrapperBackgroundImageAndTextProps = {
  text: string;
};

function WrapperBackgroundImageAndText({ text }: WrapperBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center overflow-clip relative shrink-0">
      <BackgroundImage5>
        <g clipPath="url(#clip0_12_65925)" id="circle-container">
          <circle cx="5" cy="5" fill="var(--fill-0, #008743)" id="inner-circle" r="5" />
        </g>
        <defs>
          <clipPath id="clip0_12_65925">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </BackgroundImage5>
      <p className="font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}

function DividerRowBackgroundImage4() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.067 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="143.067" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DividerRowBackgroundImage3() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164.2 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="164.2" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DividerRowBackgroundImage2() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="147" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type NumberContainerBackgroundImageAndTextProps = {
  text: string;
};

function NumberContainerBackgroundImageAndText({ text }: NumberContainerBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-nowrap">{text}</p>
    </div>
  );
}

function DividerRowBackgroundImage1() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142.533 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="142.533" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DividerRowBackgroundImage() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.2 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="119.2" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type AmountBaseBackgroundImageAndTextProps = {
  text: string;
};

function AmountBaseBackgroundImageAndText({ text }: AmountBaseBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
      <BackgroundImageAndText text="₹" />
      <div className="content-stretch flex items-baseline relative shrink-0">
        <div className="content-stretch flex items-baseline relative shrink-0">
          <p className="font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-nowrap text-right">{"1,000"}</p>
        </div>
        <BackgroundImageAndText text=".00" />
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-nowrap text-right top-0 translate-x-[-100%]">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-baseline opacity-[0.64] relative shrink-0">
      <p className="font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-nowrap text-right">{text}</p>
    </div>
  );
}
type TextContainerBackgroundImageAndTextProps = {
  text: string;
};

function TextContainerBackgroundImageAndText({ text }: TextContainerBackgroundImageAndTextProps) {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <p className="basis-0 font-['Inter:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#192839] text-[14px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute backdrop-blur-[5.5px] backdrop-filter bg-white bottom-[64px] h-[56px] left-[calc(50%-7px)] rounded-[1000px] translate-x-[-50%] w-[560px]" data-name="Ray Input Box">
        <div className="content-stretch flex items-center justify-between overflow-clip px-[12px] py-0 relative rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[4px] py-0 relative shrink-0 w-[305.5px]" data-name="Ray Logo + Text">
            <div className="relative shrink-0 size-[24px]" data-name="ray">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="ray">
                  <path d={svgPaths.p342782a0} fill="var(--fill-0, #009E5C)" id="path" />
                </g>
              </svg>
            </div>
            <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#768ea7] text-[16px] text-nowrap">Ask anything...</p>
          </div>
          <p className="absolute font-['Inter:Medium',sans-serif] leading-[24px] left-[48px] not-italic text-[#768ea7] text-[16px] text-nowrap top-[calc(50%-12px)]">Ask anything...</p>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[197px]" data-name="Actions">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Secondary Actions">
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
                <BackgroundImage2>
                  <g id="mic">
                    <g id="path">
                      <path clipRule="evenodd" d={svgPaths.p36c9dec0} fill="var(--fill-0, #768EA7)" fillRule="evenodd" />
                      <path d={svgPaths.p6ec300} fill="var(--fill-0, #768EA7)" />
                    </g>
                  </g>
                </BackgroundImage2>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[100px] shrink-0 size-[32px]" data-name="Primary Button">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute border border-[#0354e0] border-solid inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(-73.0125deg, rgb(21, 102, 241) 54.842%, rgb(71, 147, 253) 98.573%)" }}>
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
                </div>
                <div className="absolute flex items-center justify-center left-1/2 size-[16px] top-[8px] translate-x-[-50%]">
                  <div className="flex-none rotate-[180deg]">
                    <div className="relative size-[16px]" data-name="Frame">
                      <div className="absolute inset-[-1.25%_-7.5%_-26.25%_-7.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4006 20.4004">
                          <g id="Frame">
                            <g filter="url(#filter0_d_7_2809)" id="Vector">
                              <path d={svgPaths.p4a27f00} fill="var(--fill-0, white)" />
                              <path d={svgPaths.p359eb400} stroke="var(--stroke-0, white)" strokeWidth="0.2" />
                            </g>
                          </g>
                          <defs>
                            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4004" id="filter0_d_7_2809" width="18.4006" x="0" y="-4.47035e-08">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_2809" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_7_2809" mode="normal" result="shape" />
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
        <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[1000px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[16px] items-end left-[calc(50%-7px)] top-[66px] translate-x-[-50%] w-[720px]" data-name="Responses">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-bl-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="chat-bubble" style={{ backgroundImage: "linear-gradient(90deg, rgba(48, 94, 255, 0.09) 0%, rgba(48, 94, 255, 0.09) 100%), linear-gradient(90deg, rgb(241, 245, 250) 0%, rgb(241, 245, 250) 100%)" }}>
          <p className="font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#090e13] text-[14px] text-nowrap tracking-[-0.28px]">Show me recent payments from pingal@gmail.com</p>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Main Content">
          <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0" data-name="Main Content Block">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Top Content Block">
              <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Prefix (Steps taken & sources)">
                <p className="font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#768ea7] text-[12px] text-nowrap">From 12 sources</p>
                <BackgroundImage3>
                  <g id="chevron-right">
                    <path clipRule="evenodd" d={svgPaths.p2d2a9700} fill="var(--fill-0, #768EA7)" fillRule="evenodd" id="path" />
                  </g>
                </BackgroundImage3>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Summary Block">
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                  <BackgroundImage4>
                    <g id="Frame 2147239029">
                      <rect fill="var(--fill-0, #4793FD)" height="20" rx="3.33333" width="20" />
                      <path d={svgPaths.pa561c00} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                  </BackgroundImage4>
                  <p className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#192839] text-[18px] w-[688px]">Recent payments from pingal@gmail.com</p>
                </div>
                <p className="font-['Inter:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] w-[600px]">{`Pingal has 3 recent payments totalling ₹26,000. Two are successful (captured) and have been settled. The third—a netbanking payment—is still pending as we wait for the customer's bank to confirm the transfer.`}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Table">
              <div className="bg-white relative rounded-[4px] shrink-0 w-[714px]" data-name="Card">
                <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="card-content-holder">
                    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="card-body">
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Local Table Instance">
                        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Content">
                          <div className="bg-white content-stretch flex flex-col gap-px items-start relative shrink-0">
                            <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[716px]" data-name="<table>">
                              <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="<thead>">
                                <div className="content-stretch flex flex-col h-[36px] items-start justify-center relative shrink-0 w-[119.2px]" data-name="Table Header Cell Base">
                                  <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="root">
                                    <div className="basis-0 bg-[rgba(108,132,157,0.12)] grow min-h-[36px] min-w-px relative shrink-0 w-full" data-name="wrapper">
                                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none" />
                                      <div className="flex flex-row items-center justify-end min-h-[inherit] size-full">
                                        <div className="content-stretch flex gap-[8px] items-center justify-end min-h-[inherit] px-[12px] py-[8px] relative size-full">
                                          <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="content container">
                                            <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="text-container">
                                              <p className="basis-0 font-['Inter:SemiBold',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#192839] text-[14px] text-right">Amount</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col grow h-[36px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Table Header Cell Base">
                                  <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="root">
                                    <WrapperBackgroundImage>
                                      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="content container">
                                        <TextContainerBackgroundImageAndText text="Status" />
                                      </div>
                                    </WrapperBackgroundImage>
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col grow h-[36px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Table Header Cell Base">
                                  <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="root">
                                    <WrapperBackgroundImage>
                                      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="content container">
                                        <TextContainerBackgroundImageAndText text="Payment Method" />
                                      </div>
                                    </WrapperBackgroundImage>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col h-[36px] items-start justify-center relative shrink-0 w-[164.2px]" data-name="Table Header Cell Base">
                                  <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="root">
                                    <WrapperBackgroundImage>
                                      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="content container">
                                        <TextContainerBackgroundImageAndText text="Created On" />
                                      </div>
                                    </WrapperBackgroundImage>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col h-[36px] items-start justify-center relative shrink-0 w-[144.2px]" data-name="Table Header Cell Base">
                                  <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="root">
                                    <WrapperBackgroundImage>
                                      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="content container">
                                        <TextContainerBackgroundImageAndText text="Bank RRN" />
                                      </div>
                                    </WrapperBackgroundImage>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="<tr1>">
                              <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[119.2px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-end justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage>
                                      <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
                                          <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
                                            <AmountBaseBackgroundImageAndText text="INR" />
                                          </div>
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage>
                                    <DividerRowBackgroundImage />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[142.533px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage1>
                                      <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="content">
                                        <div className="content-stretch flex items-center relative shrink-0" data-name="Indicator">
                                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="root">
                                            <div className="content-stretch flex gap-[4px] h-[20px] items-center overflow-clip relative shrink-0" data-name="wrapper">
                                              <BackgroundImage5>
                                                <g clipPath="url(#clip0_12_65867)" id="circle-container">
                                                  <circle cx="5" cy="5" fill="var(--fill-0, #1291D0)" id="inner-circle" r="5" />
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_12_65867">
                                                    <rect fill="white" height="10" width="10" />
                                                  </clipPath>
                                                </defs>
                                              </BackgroundImage5>
                                              <p className="font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] text-nowrap">Pending</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage1>
                                    <DividerRowBackgroundImage1 />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[147px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage2>
                                      <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="leading container">
                                        <BackgroundImage1>
                                          <path clipRule="evenodd" d={svgPaths.p1c1acac0} fill="var(--fill-0, #192839)" fillRule="evenodd" id="path" />
                                        </BackgroundImage1>
                                      </div>
                                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
                                          <NumberContainerBackgroundImageAndText text="Netbanking" />
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage2>
                                    <DividerRowBackgroundImage2 />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[164.2px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage2>
                                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
                                          <NumberContainerBackgroundImageAndText text="13 Jan 2026, 11:56" />
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage2>
                                    <DividerRowBackgroundImage3 />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[143.067px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage2>
                                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
                                          <NumberContainerBackgroundImageAndText text="414633500160" />
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage2>
                                    <DividerRowBackgroundImage4 />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="<tr2>">
                              <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[119.2px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-end justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage>
                                      <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
                                          <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
                                            <AmountBaseBackgroundImageAndText text="INR" />
                                          </div>
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage>
                                    <DividerRowBackgroundImage />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[142.533px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage1>
                                      <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="content">
                                        <div className="content-stretch flex items-center relative shrink-0" data-name="Indicator">
                                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="root">
                                            <WrapperBackgroundImageAndText text="Captured" />
                                          </div>
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage1>
                                    <DividerRowBackgroundImage1 />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[147px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage2>
                                      <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="leading container">
                                        <LeadingIconBackgroundImage />
                                      </div>
                                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
                                          <NumberContainerBackgroundImageAndText text="UPI" />
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage2>
                                    <DividerRowBackgroundImage2 />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[164.2px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage2>
                                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
                                          <NumberContainerBackgroundImageAndText text="13 Jan 2026, 10:53" />
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage2>
                                    <DividerRowBackgroundImage3 />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[143.067px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage2>
                                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
                                          <NumberContainerBackgroundImageAndText text="524633500154" />
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage2>
                                    <DividerRowBackgroundImage4 />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="<tr3>">
                              <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[119.2px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-end justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage>
                                      <div className="basis-0 content-stretch flex grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
                                          <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
                                            <AmountBaseBackgroundImageAndText text="INR" />
                                          </div>
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage>
                                    <DividerRowBackgroundImage />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[142.533px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage1>
                                      <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="content">
                                        <div className="content-stretch flex items-center relative shrink-0" data-name="Indicator">
                                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="root">
                                            <WrapperBackgroundImageAndText text="Captured" />
                                          </div>
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage1>
                                    <DividerRowBackgroundImage1 />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[147px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage2>
                                      <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="leading container">
                                        <LeadingIconBackgroundImage />
                                      </div>
                                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
                                          <NumberContainerBackgroundImageAndText text="UPI" />
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage2>
                                    <DividerRowBackgroundImage2 />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[164.2px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage2>
                                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
                                          <NumberContainerBackgroundImageAndText text="12 Jan 2026, 9:40" />
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage2>
                                    <DividerRowBackgroundImage3 />
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[143.067px]" data-name="Table Cell Base">
                                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
                                  <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
                                    <ContainerBackgroundImage2>
                                      <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
                                        <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
                                          <NumberContainerBackgroundImageAndText text="263350016011" />
                                        </div>
                                      </div>
                                    </ContainerBackgroundImage2>
                                    <DividerRowBackgroundImage4 />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrapper">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="leading-icon">
                          <IconBackgroundImage>
                            <path d={svgPaths.pb90d400} fill="var(--fill-0, #2950DA)" id="Union" />
                          </IconBackgroundImage>
                        </div>
                        <LabelBackgroundImageAndText text="Copy" />
                      </div>
                    </div>
                  </div>
                  <Frame1973342713BackgroundImage />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrapper">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="leading-icon">
                          <IconBackgroundImage>
                            <path d={svgPaths.p28f466c0} fill="var(--fill-0, #2950DA)" id="Union" />
                          </IconBackgroundImage>
                        </div>
                        <LabelBackgroundImageAndText text="Download as CSV" />
                      </div>
                    </div>
                  </div>
                  <Frame1973342713BackgroundImage />
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrapper">
                        <div className="content-stretch flex items-center relative shrink-0" data-name="leading-icon">
                          <IconBackgroundImage>
                            <path d={svgPaths.p7480d00} fill="var(--fill-0, #2950DA)" id="Union" />
                          </IconBackgroundImage>
                        </div>
                        <LabelBackgroundImageAndText text="Go to transactions list view" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[25.383%] from-[rgba(237,247,247,0.5)] relative rounded-[12px] shrink-0 to-[268.38%] to-[rgba(18,145,208,0.09)] w-full">
            <div aria-hidden="true" className="absolute border border-[#1291d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-[12px]" data-name="ray">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <g id="ray">
                      <path d={svgPaths.p3f6db900} fill="var(--fill-0, #192839)" id="path" />
                    </g>
                  </svg>
                </div>
                <p className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#43505d] text-[12px] text-nowrap">Ray Insight</p>
              </div>
              <p className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:SemiBold',sans-serif] leading-[26px] relative shrink-0 text-[#40566d] text-[0px] text-[16px] tracking-[0.16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
                <span>{`Pingal is a long time customer since 2023. He’s placed 13 orders so far. They have a Lifetime Value (LTV) of `}</span>
                <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
                  ₹4.5 Lakhs
                </span>
                <span>{` and, notably, `}</span>
                <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
                  zero refunds
                </span>
                <span>{` on record.`}</span>
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Footer">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="card-content-holder">
              <div className="content-stretch flex items-start relative shrink-0" data-name="card-body">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Footer">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Footer">
                    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
                      <BackgroundImage2>
                        <g id="thumbs-up">
                          <path clipRule="evenodd" d={svgPaths.p220a8000} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
                        </g>
                      </BackgroundImage2>
                    </div>
                    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
                      <BackgroundImage2>
                        <g id="thumbs-down">
                          <path clipRule="evenodd" d={svgPaths.p385f2000} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
                        </g>
                      </BackgroundImage2>
                    </div>
                    <div className="bg-[#f1f5fa] overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
                      <BackgroundImage2>
                        <g id="copy">
                          <g id="path">
                            <path d={svgPaths.p37690f00} fill="var(--fill-0, #192839)" />
                            <path clipRule="evenodd" d={svgPaths.p3556ca00} fill="var(--fill-0, #192839)" fillRule="evenodd" />
                          </g>
                        </g>
                      </BackgroundImage2>
                    </div>
                    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
                      <BackgroundImage2>
                        <g id="share">
                          <g id="path">
                            <path clipRule="evenodd" d={svgPaths.p33d9fc12} fill="#40566D" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p670a780} fill="#40566D" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p19ecdd00} fill="#40566D" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p36ecc300} fill="#40566D" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.pbd93e00} fill="#40566D" fillRule="evenodd" />
                          </g>
                        </g>
                      </BackgroundImage2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-full" data-name="Divider">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 720 0.5">
                <g id="Divider">
                  <line id="Divider Line" stroke="var(--stroke-0, #CBD5E2)" strokeWidth="0.5" x2="720" y1="0.25" y2="0.25" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Suggestions Block">
            <div className="h-[128px] overflow-clip relative shrink-0 w-[714px]" data-name="Content">
              <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-0 w-[714px]" data-name="Suggestions block">
                <p className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#192839] text-[18px] w-[min-content]">Suggestions</p>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[714px]" data-name="Suggestions">
                  <div className="content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[4px] shrink-0 w-[714px]" data-name="Suggestion">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-[19px]">
                      <ArrowRightBackgroundImage additionalClassNames="left-[calc(50%+0.5px)]" />
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] w-[580px]">Draft a message for Pingal on pending payment</p>
                  </div>
                  <div className="bg-[#f1f5fa] content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[4px] shrink-0 w-[714px]" data-name="Suggestion">
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <ArrowRightBackgroundImage additionalClassNames="left-1/2" />
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] w-[580px]">Why is payment for ₹20,000 pending?</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[4px] shrink-0 w-[714px]" data-name="Suggestion">
                    <div className="h-[20px] overflow-clip relative shrink-0 w-[19px]">
                      <ArrowRightBackgroundImage additionalClassNames="left-[calc(50%+0.5px)]" />
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] w-[580px]">What is the overall success rate?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-start left-[70px] top-[555px]" data-name="Tooltip">
            <div className="content-stretch flex flex-col isolate items-center justify-center pb-[2px] pt-[4px] px-0 relative shadow-[0px_2px_16px_0px_rgba(25,40,57,0.09)] shrink-0" data-name="root">
              <div className="content-stretch flex flex-col items-center justify-center mb-[-2px] relative shrink-0 z-[2]" data-name="Arrow Container">
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-[180deg]">
                    <div className="h-[8px] relative w-[14px]" data-name="_Tooltip/arrow">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
                        <g id="_Tooltip/arrow">
                          <path d={svgPaths.p282a8000} fill="var(--fill-0, #2F4256)" id="Arrow Fill" />
                          <g id="Arrow Stroke">
                            <mask fill="white" id="path-2-inside-1_12_65810">
                              <path d={svgPaths.pf769180} />
                            </mask>
                            <path d={svgPaths.paf93252} fill="var(--stroke-0, #40566D)" mask="url(#path-2-inside-1_12_65810)" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#2f4256] content-stretch flex flex-col gap-[4px] items-start mb-[-2px] p-[12px] relative rounded-[4px] shrink-0 z-[1]" data-name="wrapper">
                <div aria-hidden="true" className="absolute border-[#40566d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="content-stretch flex items-start relative shrink-0" data-name="text-container">
                  <p className="font-['Inter:Regular',sans-serif] leading-[18px] max-w-[200px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.88)] text-nowrap">Copy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#fdfdfd] blur-md filter h-[108px] left-[99px] top-[827px] w-[816px]" data-name="Bottom-fade" />
      <div className="absolute bg-[#fdfdfd] blur-md filter h-[108px] left-[99px] top-[-44px] w-[816px]" data-name="Top-fade" />
    </div>
  );
}