import svgPaths from "./svg-960neb5ytg";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[8px] relative size-full">{children}</div>
    </div>
  );
}

function Value({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[8px] pr-0 py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

export default function WidgetPaymentLinkDetails() {
  return (
    <div className="bg-[#edece8] content-stretch flex flex-col items-start p-[4px] relative rounded-[8px] size-full" data-name="Widget - Payment link Details">
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
                          <path d={svgPaths.p1ea78800} fill="var(--fill-0, #2950DA)" id="Union" />
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
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[12px] py-[13px] relative w-full">
            <div className="bg-white relative shrink-0 w-full" data-name="Heading">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-between px-[4px] py-0 relative w-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                    <p className="font-['Inter:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] text-nowrap">Payment link Details</p>
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
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="root">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="wrapper">
                <div className="content-stretch flex flex-col items-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="container">
                  <div className="content-stretch flex items-start mb-[-1px] relative shrink-0 w-full" data-name="_Input Group Row">
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="_Input Group Element">
                      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Input">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="root">
                          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="body">
                            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="FormGroup-Body">
                              <div className="bg-white h-[48px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="field">
                                <div aria-hidden="true" className="absolute border-[#e3eaf3] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
                                <Wrapper>
                                  <div className="basis-0 content-center flex flex-wrap gap-0 grow items-center min-h-px min-w-px relative shrink-0" data-name="leading">
                                    <Value>
                                      <p className="font-['Inter:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] text-nowrap">₹ 1000.00</p>
                                    </Value>
                                  </div>
                                </Wrapper>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start mb-[-1px] relative shrink-0 w-full" data-name="_Input Group Row">
                    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="_Input Group Element">
                      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Input">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="root">
                          <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="body">
                            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="FormGroup-Body">
                              <div className="bg-white h-[48px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="field">
                                <div aria-hidden="true" className="absolute border border-[#e3eaf3] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[4px]" />
                                <Wrapper>
                                  <div className="basis-0 content-center flex flex-wrap gap-0 grow items-center min-h-px min-w-px relative shrink-0" data-name="leading">
                                    <Value>
                                      <p className="font-['Inter:Regular',sans-serif] leading-[24px] not-italic opacity-40 relative shrink-0 text-[#40566d] text-[16px] text-nowrap">Payment for</p>
                                    </Value>
                                  </div>
                                </Wrapper>
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