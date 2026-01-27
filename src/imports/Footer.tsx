import svgPaths from "./svg-865zu3th6l";

function ThumbsUp() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="thumbs-up">
          <path clipRule="evenodd" d={svgPaths.p220a8000} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function FooterAction() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <ThumbsUp />
    </div>
  );
}

function ThumbsDown() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="thumbs-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="thumbs-down">
          <path clipRule="evenodd" d={svgPaths.p385f2000} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function FooterAction1() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <ThumbsDown />
    </div>
  );
}

function Copy() {
  return (
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
  );
}

function FooterAction2() {
  return (
    <div className="bg-[#f1f5fa] overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <Copy />
    </div>
  );
}

function Share() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="share">
          <g id="path">
            <path clipRule="evenodd" d={svgPaths.p33d9fc12} fill="#40566D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p670a780} fill="#40566D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p19ecdd00} fill="#40566D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p36ecc300} fill="#40566D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pbd93e00} fill="#40566D" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FooterAction3() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <Share />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Footer">
      <FooterAction />
      <FooterAction1 />
      <FooterAction2 />
      <FooterAction3 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Footer">
      <Footer />
    </div>
  );
}

function CardBody() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="card-body">
      <Footer1 />
    </div>
  );
}

function CardContentHolder() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="card-content-holder">
      <CardBody />
    </div>
  );
}

export default function Footer2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] size-full" data-name="Footer">
      <CardContentHolder />
    </div>
  );
}