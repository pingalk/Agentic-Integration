import svgPaths from "./svg-1ndmru6r43";

function Link() {
  return (
    <div className="absolute left-1/2 size-[12px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="link">
          <g id="path">
            <path d={svgPaths.p2ffd3d70} fill="var(--fill-0, #1291D0)" />
            <path d={svgPaths.p1aabcd00} fill="var(--fill-0, #1291D0)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function PaymentLink() {
  return (
    <div className="bg-[rgba(18,145,208,0.09)] overflow-clip relative rounded-[4px] size-full" data-name="Payment link">
      <Link />
    </div>
  );
}
