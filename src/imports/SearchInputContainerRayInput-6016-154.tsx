import svgPaths from "./svg-nst6sd3bpz";

function Text() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text">
      <p className="css-4hzbpn flex-[1_0_0] font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#40566d] text-[18px] tracking-[0.36px]">{`Where are my settlements? Why is my account balance negative?  We had high value txns this week.`}</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="plus">
          <path d={svgPaths.p83dad00} fill="var(--fill-0, #768EA7)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function AttachmentsIcon() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Attachments Icon">
      <div className="absolute inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
      </div>
      <Plus />
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mic">
          <g id="path">
            <path clipRule="evenodd" d={svgPaths.p36c9dec0} fill="var(--fill-0, #768EA7)" fillRule="evenodd" />
            <path d={svgPaths.p6ec300} fill="var(--fill-0, #768EA7)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AttachmentsIcon1() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Attachments Icon">
      <div className="absolute inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
      </div>
      <Mic />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AttachmentsIcon />
      <AttachmentsIcon1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative size-[16px]" data-name="Frame">
      <div className="absolute inset-[-1.25%_-7.5%_-26.25%_-7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4006 20.4004">
          <g id="Frame">
            <g filter="url(#filter0_d_6006_2132)" id="Vector">
              <path d={svgPaths.p4a27f00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p359eb400} stroke="var(--stroke-0, white)" strokeWidth="0.2" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4004" id="filter0_d_6006_2132" width="18.4006" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6006_2132" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6006_2132" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[100px] shrink-0 size-[32px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute border border-[#0354e0] border-solid inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(-73.0125deg, rgb(21, 102, 241) 54.842%, rgb(71, 147, 253) 98.573%)" }}>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
        </div>
        <div className="absolute flex items-center justify-center left-1/2 size-[16px] top-[8px] translate-x-[-50%]">
          <div className="flex-none rotate-[180deg]">
            <Frame />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[197px]" data-name="Buttons">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default function SearchInputContainerRayInput() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[26px] size-full" data-name="Search Input Container (Ray Input)">
      <div className="content-stretch flex flex-col gap-[4px] items-end justify-end overflow-clip px-[19px] py-[16px] relative rounded-[inherit] size-full">
        <Text />
        <Buttons />
      </div>
      <div aria-hidden="true" className="absolute border border-[#6db7e8] border-solid inset-0 pointer-events-none rounded-[26px] shadow-[0px_6px_32px_4px_rgba(25,40,57,0.09)]" />
    </div>
  );
}