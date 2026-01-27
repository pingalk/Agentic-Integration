import svgPaths from "./svg-barbhb83kg";

function LeadingIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="leading-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="leading-icon">
          <path d={svgPaths.p133bbd00} fill="var(--fill-0, #0F78AD)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="bg-[rgba(18,145,208,0.09)] content-stretch flex gap-[4px] h-[24px] items-center px-[12px] relative rounded-[1000px] shrink-0" data-name="wrapper">
      <LeadingIcon />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f78ad] text-[12px]">Authorised</p>
    </div>
  );
}

function Root() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="root">
      <Wrapper />
    </div>
  );
}

export default function Badge2Secondary() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Badge 2 (Secondary)">
      <Root />
    </div>
  );
}