import svgPaths from "./svg-xvon3romwc";
import clsx from "clsx";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative rounded-[8px] shrink-0", additionalClassNames)}>
      <div className="content-stretch flex gap-[7px] items-center overflow-clip p-[12px] relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

export default function SuggestionCategories() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full" data-name="Suggestion Categories">
      <Wrapper1 additionalClassNames="bg-[#f8fafc]">
        <Wrapper>
          <g id="search">
            <path clipRule="evenodd" d={svgPaths.p9de6b00} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
          </g>
        </Wrapper>
        <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] text-nowrap">Recent transactions</p>
      </Wrapper1>
      <Wrapper1 additionalClassNames="bg-[rgba(48,94,255,0.09)]">
        <Wrapper>
          <g id="list-search">
            <g id="path">
              <path d={svgPaths.p3a34d00} fill="var(--fill-0, #40566D)" />
              <path clipRule="evenodd" d={svgPaths.p1727b600} fill="var(--fill-0, #40566D)" fillRule="evenodd" />
            </g>
          </g>
        </Wrapper>
        <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] text-nowrap">Summarize</p>
      </Wrapper1>
      <Wrapper1 additionalClassNames="bg-[#f8fafc]">
        <Wrapper>
          <g id="timeline_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
            <path d={svgPaths.p3f56f7c0} fill="var(--fill-0, #40566D)" id="Vector" />
          </g>
        </Wrapper>
        <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] text-nowrap">Analyze</p>
      </Wrapper1>
      <Wrapper1 additionalClassNames="bg-[#f8fafc]">
        <Wrapper>
          <g id="build_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
            <path d={svgPaths.p3072b700} fill="var(--fill-0, #40566D)" id="Vector" />
          </g>
        </Wrapper>
        <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] text-nowrap">Troubleshoot</p>
      </Wrapper1>
      <Wrapper1 additionalClassNames="bg-[#f8fafc]">
        <Wrapper>
          <g id="ray">
            <path d={svgPaths.pe4107c0} fill="var(--fill-0, #40566D)" id="path" />
          </g>
        </Wrapper>
        <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] text-nowrap">Ray 101</p>
      </Wrapper1>
    </div>
  );
}