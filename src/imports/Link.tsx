import svgPaths from "./svg-h0tn44seox";

export default function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Link">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
        <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrapper">
          <div className="content-stretch flex items-center relative shrink-0" data-name="leading-icon">
            <div className="relative shrink-0 size-[16px]" data-name="icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="icon">
                  <path d={svgPaths.p2dc60800} fill="var(--fill-0, #008743)" id="Union" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#008743] text-[14px] text-center text-nowrap">
              <p className="leading-[20px]">Copied. You’re all set</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}