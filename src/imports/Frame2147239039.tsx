import svgPaths from "./svg-onvg4oxk7i";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-white content-stretch flex flex-col items-start left-[25px] rounded-[4px] top-[58px]" data-name="Footer">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="card-content-holder">
          <div className="content-stretch flex items-start relative shrink-0" data-name="card-body">
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Footer">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Footer">
                <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
                  <Wrapper>
                    <g id="thumbs-up">
                      <path clipRule="evenodd" d={svgPaths.p220a8000} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
                    </g>
                  </Wrapper>
                </div>
                <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
                  <Wrapper>
                    <g id="thumbs-down">
                      <path clipRule="evenodd" d={svgPaths.p385f2000} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
                    </g>
                  </Wrapper>
                </div>
                <div className="bg-[#f1f5fa] overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
                  <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="copy">
                    <div className="absolute inset-[0_-43.75%_-43.75%_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
                        <g id="copy">
                          <g id="path">
                            <path d={svgPaths.p1cb3c80} fill="var(--fill-0, #192839)" />
                            <path clipRule="evenodd" d={svgPaths.p3a3dcb80} fill="var(--fill-0, #192839)" fillRule="evenodd" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
                  <Wrapper>
                    <g id="share">
                      <g id="path">
                        <path clipRule="evenodd" d={svgPaths.p33d9fc12} fill="#40566D" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p670a780} fill="#40566D" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p19ecdd00} fill="#40566D" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p36ecc300} fill="#40566D" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.pbd93e00} fill="#40566D" fillRule="evenodd" />
                      </g>
                    </g>
                  </Wrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[95px] top-[88px]" data-name="Tooltip">
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
  );
}