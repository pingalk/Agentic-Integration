import svgPaths from "./svg-54bb1u6kk8";

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end relative size-full">
      <div className="bg-[#f0f0f0] content-stretch flex gap-[7px] items-start overflow-clip px-[8px] py-[6px] relative rounded-[4px] shrink-0">
        <div className="bg-white h-[39px] relative rounded-[4px] shadow-[0px_2px_16px_0px_rgba(25,40,57,0.09)] shrink-0 w-[32px]">
          <div className="absolute left-1/2 size-[16px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="list">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="list">
                <g id="path">
                  <path d={svgPaths.p367c4400} fill="var(--fill-0, #192839)" />
                  <path d={svgPaths.p37e5eb00} fill="var(--fill-0, #192839)" />
                  <path d={svgPaths.p1d3c5300} fill="var(--fill-0, #192839)" />
                  <path d={svgPaths.p2344d400} fill="var(--fill-0, #192839)" />
                  <path d={svgPaths.p2de6ed00} fill="var(--fill-0, #192839)" />
                  <path d={svgPaths.p2a95b080} fill="var(--fill-0, #192839)" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="content-stretch flex flex-col font-['Inter:Medium',sans-serif] items-start not-italic relative shrink-0 text-nowrap">
          <p className="leading-[20px] relative shrink-0 text-[14px] text-black">Payment link creation</p>
          <p className="leading-[18px] relative shrink-0 text-[#767676] text-[12px]">Form</p>
        </div>
      </div>
      <div className="bg-[#e6eafa] h-[44px] max-w-[350px] relative rounded-[12px] shadow-[0px_2px_2px_0px_rgba(237,236,236,0.16)] shrink-0 w-full" data-name="chat-box">
        <div className="flex flex-row items-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center max-w-[inherit] p-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#090e13] text-[14px] text-nowrap tracking-[-0.28px]">Show me recent payments from pingal@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}