import svgPaths from "./svg-ounx049fst";

function Razorpay() {
  return (
    <div className="mr-[-4px] relative shrink-0 size-[24px]" data-name="razorpay">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="razorpay">
          <path d={svgPaths.p11aadc00} fill="var(--fill-0, #3395FF)" id="path" />
          <path d={svgPaths.p2f9fae00} fill="var(--fill-0, #0C2651)" id="path_2" />
        </g>
      </svg>
    </div>
  );
}

export default function RazorpayLogoCollapsed() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[4px] py-0 relative size-full" data-name="Razorpay Logo / Collapsed">
      <Razorpay />
    </div>
  );
}