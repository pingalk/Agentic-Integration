import svgPaths from "./svg-gylreytl7p";

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function StepBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[4px] py-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#192839] text-[12px] text-center text-nowrap">
        <p className="leading-[18px]">{children}</p>
      </div>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[100px] shrink-0 size-[32px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute border border-[#0354e0] border-solid inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(-73.0125deg, rgb(21, 102, 241) 54.842%, rgb(71, 147, 253) 98.573%)" }}>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
        </div>
        <div className="absolute flex items-center justify-center left-1/2 size-[16px] top-[8px] translate-x-[-50%]">
          <div className="flex-none rotate-[180deg]">
            <div className="relative size-[16px]">
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
  );
}

function MicBackgroundImage() {
  return (
    <BackgroundImage3>
      <g id="mic">
        <g id="path">
          <path clipRule="evenodd" d={svgPaths.p36c9dec0} fill="var(--fill-0, #768EA7)" fillRule="evenodd" />
          <path d={svgPaths.p6ec300} fill="var(--fill-0, #768EA7)" />
        </g>
      </g>
    </BackgroundImage3>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
    </div>
  );
}

function AttachmentsIconBackgroundImage() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[38px] shrink-0 size-[32px]">
      <BackgroundImage />
      <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="plus">
            <path d={svgPaths.p83dad00} fill="var(--fill-0, #768EA7)" id="path" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type StepCountBackgroundImageAndTextProps = {
  text: string;
};

function StepCountBackgroundImageAndText({ text }: StepCountBackgroundImageAndTextProps) {
  return (
    <div className="bg-[#222] relative rounded-[100px] shrink-0 size-[24px]">
      <p className="absolute font-['Inter:Medium',sans-serif] leading-[20px] left-[calc(50%-3.5px)] not-italic text-[14px] text-nowrap text-white top-[calc(50%-10px)]">{text}</p>
    </div>
  );
}
type LabelBackgroundImageAndTextProps = {
  text: string;
};

function LabelBackgroundImageAndText({ text }: LabelBackgroundImageAndTextProps) {
  return <BackgroundImage2>{text}</BackgroundImage2>;
}
type SubtextBackgroundImageAndTextProps = {
  text: string;
};

function SubtextBackgroundImageAndText({ text }: SubtextBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#222] text-[12px] text-nowrap">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <div className="absolute bg-[#edece8] content-stretch flex flex-col items-start left-[38px] p-[4px] rounded-[8px] top-[47px] w-[488px]" data-name="Widget - Review">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0 w-[124px]">
                  <p className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#192839] text-[18px] text-nowrap">Let’s create a payment link</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start opacity-0 relative shrink-0" data-name="Link">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                  <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrapper">
                    <div className="content-stretch flex items-center relative shrink-0" data-name="leading-icon">
                      <div className="relative shrink-0 size-[16px]" data-name="icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g id="icon">
                            <path d={svgPaths.p18c16ac0} fill="var(--fill-0, #2950DA)" id="Union" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
                      <div className="flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2950da] text-[16px] text-center text-nowrap">
                        <p className="leading-[24px]">Edit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[8px] shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[13px] relative w-full">
              <StepBackgroundImage>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Main Content">
                  <div className="bg-[#222] relative rounded-[100px] shrink-0 size-[24px]" data-name="Step Count">
                    <BackgroundImage3>
                      <g id="check">
                        <path clipRule="evenodd" d={svgPaths.p1d8ed000} fill="var(--fill-0, white)" fillRule="evenodd" id="path" />
                      </g>
                    </BackgroundImage3>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Content">
                    <p className="font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">Payment link Details</p>
                    <SubtextBackgroundImageAndText text="Amount: ₹1000.00 | Payment for: Math class" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                    <div className="bg-[rgba(108,132,157,0.12)] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[4px] shrink-0" data-name="wrapper">
                      <LabelBackgroundImageAndText text="Change" />
                    </div>
                  </div>
                </div>
              </StepBackgroundImage>
              <StepBackgroundImage>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Main Content">
                  <StepCountBackgroundImageAndText text="2" />
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Content">
                    <p className="font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">Customer Details</p>
                    <div className="content-stretch flex items-center relative shrink-0" data-name="Subtext">
                      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[18px] opacity-50 relative shrink-0 text-[#222] text-[12px] text-nowrap">Optional - Not added</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                    <div className="bg-[rgba(108,132,157,0.12)] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[4px] shrink-0" data-name="wrapper">
                      <BackgroundImage2>{`Add `}</BackgroundImage2>
                    </div>
                  </div>
                </div>
              </StepBackgroundImage>
              <StepBackgroundImage>
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Main Content">
                  <StepCountBackgroundImageAndText text="3" />
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Content">
                    <p className="font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">Other Details</p>
                    <SubtextBackgroundImageAndText text="No link expiry, No reminder" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                    <div className="bg-[rgba(108,132,157,0.12)] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[4px] shrink-0" data-name="wrapper">
                      <LabelBackgroundImageAndText text="Change" />
                    </div>
                  </div>
                </div>
              </StepBackgroundImage>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="root">
                  <div className="basis-0 bg-[#18181b] grow h-[36px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="wrapper">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-0 relative size-full">
                        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
                          <div className="flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
                            <p className="leading-[20px]">{`Confirm & Proceed`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      <div className="absolute backdrop-blur-[5.5px] backdrop-filter bg-[rgba(255,255,255,0.9)] h-[108px] left-[calc(50%+7.5px)] rounded-[24px] top-[427px] translate-x-[-50%] w-[492px]" data-name="Ray Input Box">
        <div className="content-stretch flex items-start justify-between overflow-clip p-[12px] relative rounded-[inherit] size-full">
          <div className="basis-0 grow min-h-px min-w-[260px] relative shrink-0" data-name="Ray Logo + Text">
            <div className="flex flex-row items-center min-w-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] p-[4px] relative w-full">
                <div className="relative shrink-0 size-[24px]" data-name="ray">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="ray">
                      <path d={svgPaths.p342782a0} fill="var(--fill-0, #009E5C)" id="path" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-[358px]" data-name="Cursor + Text">
                  <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7d7d7d] text-[16px] text-nowrap tracking-[-0.208px]">
                    <span className="text-[#18181b]">Create a payment link</span>
                    <span>{` for ₹1000.00 for Math Class`}</span>
                  </p>
                  <div className="bg-[#1566f1] h-[24px] rounded-[100px] shrink-0 w-[1.3px]" data-name="cursor" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-end justify-end opacity-0 relative shrink-0 w-[197px]">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <AttachmentsIconBackgroundImage />
              <div className="relative rounded-[38px] shrink-0 size-[32px]" data-name="Attachments Icon">
                <BackgroundImage />
                <MicBackgroundImage />
              </div>
            </div>
            <BackgroundImage1 />
          </div>
          <div className="absolute bottom-[12px] content-stretch flex items-end justify-between right-[12px] w-[464px]" data-name="Actions">
            <div className="bg-[rgba(48,94,255,0.09)] content-stretch flex items-center justify-between overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0 w-[173px]">
              <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2c7bf6] text-[14px] text-nowrap tracking-[-0.182px]">Create Payment link</p>
              <div className="relative shrink-0 size-[12px]" data-name="close">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <g>
                    <path d={svgPaths.p3061172} fill="var(--fill-0, #2C7BF6)" id="path" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <AttachmentsIconBackgroundImage />
                <div className="relative rounded-[38px] shrink-0 size-[32px]" data-name="Attachments Icon">
                  <BackgroundImage />
                  <MicBackgroundImage />
                </div>
              </div>
              <BackgroundImage1 />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#a4d4fe] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
      </div>
    </div>
  );
}