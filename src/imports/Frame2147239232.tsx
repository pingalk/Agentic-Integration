import svgPaths from "./svg-zsawxnofnb";

function StepCount() {
  return (
    <div className="bg-[#222] relative rounded-[100px] shrink-0 size-[24px]" data-name="Step Count">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] left-[calc(50%-3.5px)] not-italic text-[14px] text-white top-[calc(50%-10px)]">1</p>
    </div>
  );
}

function Subtext() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Subtext">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#222] text-[12px]">Amount: ₹1000.00 | Payment for: Math class</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Content">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[14px]">Key Details</p>
      <Subtext />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Main Content">
      <StepCount />
      <Content />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="css-g0mm18 flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#192839] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Change</p>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="bg-[rgba(108,132,157,0.12)] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="wrapper">
      <Label />
    </div>
  );
}

function Root() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <Wrapper />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
      <Root />
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Step 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[4px] py-[12px] relative w-full">
          <MainContent />
          <Button />
        </div>
      </div>
    </div>
  );
}

function StepCount1() {
  return (
    <div className="bg-[#222] relative rounded-[100px] shrink-0 size-[24px]" data-name="Step Count">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] left-[calc(50%-3.5px)] not-italic text-[14px] text-white top-[calc(50%-10px)]">2</p>
    </div>
  );
}

function Subtext1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Subtext">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#222] text-[12px]">-</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Content">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[14px]">Customer Details</p>
      <Subtext1 />
    </div>
  );
}

function MainContent1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Main Content">
      <StepCount1 />
      <Content1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="css-g0mm18 flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#192839] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Change</p>
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="bg-[rgba(108,132,157,0.12)] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="wrapper">
      <Label1 />
    </div>
  );
}

function Root1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <Wrapper1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
      <Root1 />
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Step 2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[4px] py-[12px] relative w-full">
          <MainContent1 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function StepCount2() {
  return (
    <div className="bg-[#222] relative rounded-[100px] shrink-0 size-[24px]" data-name="Step Count">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] left-[calc(50%-3.5px)] not-italic text-[14px] text-white top-[calc(50%-10px)]">3</p>
    </div>
  );
}

function Subtext2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Subtext">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#222] text-[12px]">No link expiry, No reminder</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Content">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[14px]">Other Details</p>
      <Subtext2 />
    </div>
  );
}

function MainContent2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Main Content">
      <StepCount2 />
      <Content2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="css-g0mm18 flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#192839] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Change</p>
      </div>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="bg-[rgba(108,132,157,0.12)] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="wrapper">
      <Label2 />
    </div>
  );
}

function Root2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <Wrapper2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
      <Root2 />
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Step 3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[4px] py-[12px] relative w-full">
          <MainContent2 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Step />
      <Step1 />
      <Step2 />
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
    <div className="absolute bottom-[5px] content-stretch flex items-end justify-between right-[12px] w-[464px]" data-name="Actions">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function RayInputBox() {
  return (
    <div className="backdrop-blur-[5.5px] bg-[rgba(255,255,255,0.9)] content-stretch flex h-[96px] items-start justify-between overflow-clip pb-[4px] pt-[12px] relative rounded-[24px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)] shrink-0 w-full" data-name="Ray Input Box">
      <RayLogoText />
      <Frame4 />
      <Actions />
    </div>
  );
}

export default function Frame9() {
  return (
    <div className="backdrop-blur-[5.5px] bg-white relative rounded-[24px] size-full">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <Frame10 />
        <div className="bg-[#d9d9d9] h-px opacity-40 shrink-0 w-[472px]" />
        <RayInputBox />
      </div>
      <div aria-hidden="true" className="absolute border-[#a4d4fe] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
    </div>
  );
}