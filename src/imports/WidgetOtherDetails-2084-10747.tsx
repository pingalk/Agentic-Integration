import svgPaths from "./svg-7gnijuke2a";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <g id="radio">{children}</g>
    </Wrapper1>
  );
}

function Radio1() {
  return (
    <Wrapper>
      <circle cx="8" cy="8" fill="var(--fill-0, #305EFF)" id="radio-background" r="8" />
      <circle cx="8" cy="8" fill="var(--fill-0, white)" id="radio-center" r="3" />
    </Wrapper>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#40566d] text-[14px]">{text}</p>
    </div>
  );
}

function Radio() {
  return (
    <Wrapper>
      <circle cx="8" cy="8" id="radio-background" r="7.25" stroke="var(--stroke-0, #CBD5E2)" strokeWidth="1.5" />
    </Wrapper>
  );
}

export default function WidgetOtherDetails() {
  return (
    <div className="bg-[#edece8] content-stretch flex flex-col items-start p-[4px] relative rounded-[8px] size-full" data-name="Widget - Other details">
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
                    <Wrapper1>
                      <g id="icon">
                        <path d={svgPaths.p18c16ac0} fill="var(--fill-0, #2950DA)" id="Union" />
                      </g>
                    </Wrapper1>
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
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[12px] py-[13px] relative w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Main Content">
              <div className="bg-white relative shrink-0 w-full" data-name="Heading">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-between px-[4px] py-0 relative w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                      <p className="font-['Inter:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] text-nowrap">Other Details</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start opacity-0 relative shrink-0" data-name="Button">
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                        <div className="bg-[rgba(108,132,157,0.12)] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[4px] shrink-0" data-name="wrapper">
                          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
                            <div className="flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#192839] text-[12px] text-center text-nowrap">
                              <p className="leading-[18px]">Change</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <p className="font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#768ea7] text-[12px] text-nowrap">Should the link expire?</p>
                <div className="content-stretch flex gap-[15px] items-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]" data-name="Radio">
                    <div className="content-stretch flex gap-[4px] items-start px-0 py-[2px] relative shrink-0 w-full" data-name="root">
                      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[2px] shrink-0" data-name="_Radio Base">
                        <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="root">
                          <Radio />
                        </div>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="label-group">
                        <LabelText text="Yes" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]" data-name="Radio">
                    <div className="content-stretch flex gap-[4px] items-start px-0 py-[2px] relative shrink-0 w-full" data-name="root">
                      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[2px] shrink-0" data-name="_Radio Base">
                        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                          <Radio1 />
                        </div>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="label-group">
                        <LabelText text="No" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <p className="font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#768ea7] text-[12px] text-nowrap">Is a reminder required?</p>
                <div className="content-stretch flex gap-[15px] items-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]" data-name="Radio">
                    <div className="content-stretch flex gap-[4px] items-start px-0 py-[2px] relative shrink-0 w-full" data-name="root">
                      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[2px] shrink-0" data-name="_Radio Base">
                        <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="root">
                          <Radio />
                        </div>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="label-group">
                        <LabelText text="Yes" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]" data-name="Radio">
                    <div className="content-stretch flex gap-[4px] items-start px-0 py-[2px] relative shrink-0 w-full" data-name="root">
                      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[2px] shrink-0" data-name="_Radio Base">
                        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                          <Radio1 />
                        </div>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="label-group">
                        <LabelText text="No" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button">
              <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="root">
                <div className="basis-0 bg-[#18181b] grow h-[36px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="wrapper">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-0 relative size-full">
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
                        <div className="flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
                          <p className="leading-[20px]">Proceed</p>
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
  );
}