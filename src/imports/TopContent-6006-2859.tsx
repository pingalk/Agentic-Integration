import svgPaths from "./svg-77p14kcrmb";

function Ray() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="ray">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ray">
          <path d={svgPaths.p11cee400} fill="var(--fill-0, #009E5C)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function GreetingSection() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Greeting Section">
      <Ray />
      <p className="css-ew64yg font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#094c85] text-[30px] text-center tracking-[-0.39px]">Good afternoon, Arjun!</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[19px] top-[18px] w-[305.5px]" data-name="Text">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#768ea7] text-[18px]">Ask me anything...</p>
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
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Attachments Icon">
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
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
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
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
    <div className="absolute content-stretch flex gap-[8px] items-center justify-end left-[587px] top-[72px] w-[197px]" data-name="Buttons">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function SearchInputContainerRayInput() {
  return (
    <div className="bg-[#f8fafc] h-[120px] relative rounded-[26px] shrink-0 w-full" data-name="Search Input Container (Ray Input)">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Text />
        <Buttons />
      </div>
      <div aria-hidden="true" className="absolute border border-[#6db7e8] border-solid inset-0 pointer-events-none rounded-[26px] shadow-[0px_6px_32px_4px_rgba(25,40,57,0.09)]" />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search">
          <path clipRule="evenodd" d={svgPaths.p9de6b00} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function PromptCategory() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Prompt category 1">
      <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[inherit]">
        <Search />
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] tracking-[-0.182px]">Recent transactions</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7dcda] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ListSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="list-search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="list-search">
          <g id="path">
            <path d={svgPaths.p3a34d00} fill="var(--fill-0, #40566D)" />
            <path clipRule="evenodd" d={svgPaths.p1727b600} fill="var(--fill-0, #40566D)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PromptCategory1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Prompt category 2">
      <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[inherit]">
        <ListSearch />
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] tracking-[-0.182px]">Summarize</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7dcda] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Timeline24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="timeline_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="timeline_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p2368a080} fill="var(--fill-0, #40566D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PromptCategory2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Prompt category 3">
      <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[inherit]">
        <Timeline24Dp1F1F1FFill0Wght400Grad0Opsz />
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] tracking-[-0.182px]">Analyze</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7dcda] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Build24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="build_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="build_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p3072b700} fill="var(--fill-0, #40566D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PromptCategory3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Prompt category 4">
      <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[inherit]">
        <Build24Dp1F1F1FFill0Wght400Grad0Opsz />
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] tracking-[-0.182px]">Troubleshoot</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7dcda] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Ray1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ray">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ray">
          <path d={svgPaths.pe4107c0} fill="var(--fill-0, #40566D)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function PromptCategory4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Prompt category 5">
      <div className="content-stretch flex gap-[7px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[inherit]">
        <Ray1 />
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] tracking-[-0.182px]">Ray 101</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d7dcda] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function PromptCategories() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0" data-name="Prompt categories">
      <PromptCategory />
      <PromptCategory1 />
      <PromptCategory2 />
      <PromptCategory3 />
      <PromptCategory4 />
    </div>
  );
}

export default function TopContent() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-center relative size-full" data-name="Top Content">
      <GreetingSection />
      <SearchInputContainerRayInput />
      <PromptCategories />
    </div>
  );
}