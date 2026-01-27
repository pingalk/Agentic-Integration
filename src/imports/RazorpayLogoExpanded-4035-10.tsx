import svgPaths from "./svg-66tgr2zlla";

function Razorpay() {
  return (
    <div className="mr-[-5px] relative shrink-0 size-[24px]" data-name="razorpay">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="razorpay">
          <path d={svgPaths.p1f344900} fill="var(--fill-0, #3395FF)" id="path" />
          <path d={svgPaths.p22e43000} fill="var(--fill-0, #0C2651)" id="path_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[24px] mr-[-5px] relative shrink-0 w-[102px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 24">
        <g clipPath="url(#clip0_4035_18)" id="Frame 2147239205">
          <path d={svgPaths.p3847b300} fill="var(--fill-0, #0C2651)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4035_18">
            <rect fill="white" height="24" width="102" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function RazorpayLogoExpanded() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[5px] py-0 relative size-full" data-name="Razorpay Logo / Expanded">
      <Razorpay />
      <Frame />
    </div>
  );
}