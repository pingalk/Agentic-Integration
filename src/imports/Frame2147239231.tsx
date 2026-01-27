import svgPaths from "./svg-5igapv4woq";

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative w-full">
          <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[18px]">What is this payment link for?</p>
        </div>
      </div>
    </div>
  );
}

function Ray() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ray">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ray">
          <path d={svgPaths.p342782a0} fill="var(--fill-0, #009E5C)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function CursorText() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-[358px]" data-name="Cursor + Text">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#7d7d7d] text-[16px] tracking-[-0.208px]">This is for brownies</p>
    </div>
  );
}

function RayLogoText() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[260px] relative" data-name="Ray Logo + Text">
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] p-[4px] relative w-full">
          <Ray />
          <CursorText />
        </div>
      </div>
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
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[38px] shrink-0 size-[32px]" data-name="Attachments Icon">
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
    <div className="relative rounded-[38px] shrink-0 size-[32px]" data-name="Attachments Icon">
      <div className="absolute inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
      </div>
      <Mic />
    </div>
  );
}

function Frame5() {
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
            <g filter="url(#filter0_d_4041_62525)" id="Vector">
              <path d={svgPaths.p4a27f00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p359eb400} stroke="var(--stroke-0, white)" strokeWidth="0.2" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4004" id="filter0_d_4041_62525" width="18.4006" x="0" y="-4.47035e-08">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4041_62525" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4041_62525" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-end opacity-0 relative shrink-0 w-[197px]">
      <Frame5 />
      <Frame2 />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g>
          <path d={svgPaths.p3061172} fill="var(--fill-0, #2C7BF6)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(48,94,255,0.09)] content-stretch flex items-center justify-between overflow-clip px-[12px] py-[6px] relative rounded-[100px] shrink-0 w-[173px]">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2c7bf6] text-[14px] tracking-[-0.182px]">Create Payment link</p>
      <Close />
    </div>
  );
}

function Plus1() {
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

function AttachmentsIcon2() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[38px] shrink-0 size-[32px]" data-name="Attachments Icon">
      <div className="absolute inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
      </div>
      <Plus1 />
    </div>
  );
}

function Mic1() {
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

function AttachmentsIcon3() {
  return (
    <div className="relative rounded-[38px] shrink-0 size-[32px]" data-name="Attachments Icon">
      <div className="absolute inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
      </div>
      <Mic1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <AttachmentsIcon2 />
      <AttachmentsIcon3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative size-[16px]" data-name="Frame">
      <div className="absolute inset-[-1.25%_-7.5%_-26.25%_-7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4006 20.4004">
          <g id="Frame">
            <g filter="url(#filter0_d_4041_62525)" id="Vector">
              <path d={svgPaths.p4a27f00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p359eb400} stroke="var(--stroke-0, white)" strokeWidth="0.2" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4004" id="filter0_d_4041_62525" width="18.4006" x="0" y="-4.47035e-08">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4041_62525" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4041_62525" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[100px] shrink-0 size-[32px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute border border-[#0354e0] border-solid inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(-73.0125deg, rgb(21, 102, 241) 54.842%, rgb(71, 147, 253) 98.573%)" }}>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
        </div>
        <div className="absolute flex items-center justify-center left-1/2 size-[16px] top-[8px] translate-x-[-50%]">
          <div className="flex-none rotate-[180deg]">
            <Frame1 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame6 />
      <Frame3 />
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex items-end justify-between right-[12px] w-[464px]" data-name="Actions">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function RayInputBox() {
  return (
    <div className="backdrop-blur-[5.5px] bg-[rgba(255,255,255,0.9)] h-[108px] relative rounded-[24px] shrink-0 w-full" data-name="Ray Input Box">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between p-[12px] relative size-full">
          <RayLogoText />
          <Frame4 />
          <Actions />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#a4d4fe] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="bg-[#eaeeff] content-stretch flex flex-col items-start overflow-clip px-[4px] py-[2px] relative rounded-[20px] size-full">
      <Frame10 />
      <RayInputBox />
    </div>
  );
}