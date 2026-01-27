import svgPaths from "./svg-cl6hcb6yh2";
import { imgColumn01 } from "./svg-bwpup";

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

function TopContent() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-center relative shrink-0 w-full" data-name="Top Content">
      <GreetingSection />
      <SearchInputContainerRayInput />
      <PromptCategories />
    </div>
  );
}

function FractalGlass() {
  return (
    <div className="bg-[rgba(168,168,168,0.02)] content-stretch flex h-[953.361px] items-start overflow-clip relative w-[953.714px]" data-name="Fractal Glass">
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-642.481px_-3.438px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 01" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-565.711px_17.123px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 02" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-488.941px_37.686px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 03" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-412.17px_58.247px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 04" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-335.4px_78.809px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 05" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-258.63px_99.37px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 06" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-181.86px_119.933px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 07" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-105.089px_140.494px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 08" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-28.319px_161.056px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 09" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[48.451px_181.617px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 10" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[125.221px_202.179px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 11" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[201.992px_222.741px] mask-size-[359px_153px] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 12" style={{ maskImage: `url('${imgColumn01}')` }}>
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1.938px_1.938px_0.969px_0px_rgba(255,255,255,0.3)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+185.05px)] top-[calc(50%+489.06px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute flex h-[1167.59px] items-center justify-center left-[calc(50%+185.05px)] top-[calc(50%+489.06px)] translate-x-[-50%] translate-y-[-50%] w-[1168.089px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-165.01deg] scale-y-[-100%] skew-x-[-0.01deg]">
          <FractalGlass />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return <div className="absolute contents left-[calc(50%-70px)] top-[calc(50%-97.5px)] translate-x-[-50%] translate-y-[-50%]" />;
}

function Bg() {
  return (
    <div className="absolute contents left-[-552px] top-[-262px]" data-name="BG">
      <div className="absolute flex inset-[36.11%_-12.5%_-10.95%_-23.57%] items-center justify-center">
        <div className="flex-none h-[291.883px] rotate-[180deg] scale-y-[-100%] w-[381.001px]">
          <div className="relative size-full">
            <div className="absolute inset-[-17.4%_-13.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482.574 393.456">
                <g filter="url(#filter0_f_6006_2105)" id="Vector 16">
                  <path d={svgPaths.p31a56d00} fill="var(--fill-0, #82C1FA)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="393.456" id="filter0_f_6006_2105" width="482.574" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_6006_2105" stdDeviation="25.3933" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[49.27%_-12.5%_-24.11%_-23.57%] items-center justify-center">
        <div className="flex-none h-[291.883px] rotate-[180deg] scale-y-[-100%] w-[381.001px]">
          <div className="relative size-full">
            <div className="absolute inset-[-17.4%_-13.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482.574 393.456">
                <g filter="url(#filter0_f_6006_2103)" id="Vector 17">
                  <path d={svgPaths.p31a56d00} fill="var(--fill-0, white)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="393.456" id="filter0_f_6006_2103" width="482.574" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_6006_2103" stdDeviation="25.3933" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[-27.93px_-165.06px_-489.73px_-550px] items-center justify-center">
        <div className="flex-none h-[753.167px] rotate-[167.19deg] scale-y-[-100%] skew-x-[2.47deg] w-[816.812px]">
          <div className="relative size-full" data-name="path">
            <div className="absolute inset-[-11.15%_-10.28%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 984.812 921.167">
                <g filter="url(#filter0_f_6006_2095)" id="path">
                  <path d={svgPaths.p3c22a940} fill="url(#paint0_linear_6006_2095)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="921.167" id="filter0_f_6006_2095" width="984.812" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_6006_2095" stdDeviation="42" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6006_2095" x1="492.406" x2="416.78" y1="84" y2="395.564">
                    <stop stopColor="#1291D0" />
                    <stop offset="1" stopColor="#4D7FFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group />
      <Group1 />
    </div>
  );
}

function Number() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] relative rounded-[80px] shrink-0 size-[16px]" data-name="Number">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#2980e1] text-[10px]">1</p>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="Number">
      <Number />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Item 1">
      <Number1 />
      <p className="css-ew64yg font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fdfdfd] text-[18px] tracking-[-0.234px]">
        {`Your refund volume for last `}
        <br aria-hidden="true" />3 days was unusually high
      </p>
    </div>
  );
}

function Number2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] relative rounded-[80px] shrink-0 size-[16px]" data-name="Number">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#2980e1] text-[10px]">2</p>
    </div>
  );
}

function Number3() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="Number">
      <Number2 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Item 2">
      <Number3 />
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fdfdfd] text-[18px] tracking-[-0.234px] w-[173px]">Payment timeouts are the most common failure reason (2%)</p>
    </div>
  );
}

function Number4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] relative rounded-[80px] shrink-0 size-[16px]" data-name="Number">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#2980e1] text-[10px]">3</p>
    </div>
  );
}

function Number5() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="Number">
      <Number4 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Item 3">
      <Number5 />
      <p className="css-ew64yg font-['TASA_Orbiter_Display:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#fdfdfd] text-[18px] tracking-[-0.234px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        {`Cards & UPI payments `}
        <br aria-hidden="true" />
        account for 96% of this
        <br aria-hidden="true" />
        week’s payment volume
        <br aria-hidden="true" />
        (₹7.1 lakh)
      </p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[19px] top-[79px] w-[239px]" data-name="Main content">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function BriefingCard() {
  return (
    <div className="absolute bg-white border-2 border-[#1667f2] border-solid h-[390px] left-0 overflow-clip rounded-[10px] top-0 w-[280px]" data-name="Briefing Card">
      <Bg />
      <div className="absolute left-[19px] size-[18px] top-[30px]" data-name="path">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p32c28e80} fill="var(--fill-0, #FDFDFD)" id="path" />
        </svg>
      </div>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] leading-[26px] left-[47px] not-italic text-[14px] text-white top-[28px] tracking-[-0.28px]">TODAY’S BRIEFING</p>
      <MainContent />
    </div>
  );
}

function SuccessCard() {
  return (
    <div className="absolute bg-[#fcfcfc] border border-[rgba(0,0,0,0.1)] border-solid font-['TASA_Orbiter_Display:Regular',sans-serif] h-[183px] left-[297px] not-italic overflow-clip rounded-[12px] top-[204px] w-[265px]" data-name="Success Card">
      <p className="absolute css-ew64yg leading-[56px] left-[12px] text-[#048f56] text-[48px] top-[110px] tracking-[-0.624px]">98%</p>
      <p className="absolute css-ew64yg leading-[0] left-[12px] text-[#40566d] text-[20px] top-[15px] tracking-[-0.26px]">
        <span className="leading-[28px]">
          {`Your payment success rate `}
          <br aria-hidden="true" />
          {`is `}
        </span>
        <span className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[28px] text-black">healthy</span>
      </p>
    </div>
  );
}

function CurrencySymbolContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#192839] text-[20px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">1.26</p>
    </div>
  );
}

function DenominationContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="denomination-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#192839] text-[32px] text-right">L</p>
    </div>
  );
}

function ValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer />
      <DenominationContainer />
    </div>
  );
}

function AmountBase() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="_AmountBase">
      <CurrencySymbolContainer />
      <ValueContainer />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-right top-0 translate-x-[-100%]">INR</p>
    </div>
  );
}

function Root() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase />
    </div>
  );
}

function Amount() {
  return (
    <div className="absolute content-stretch flex items-end justify-end left-[15px] top-[131px]" data-name="Amount">
      <Root />
    </div>
  );
}

function SettlementCard() {
  return (
    <div className="absolute bg-[#fcfcfc] border border-[rgba(0,0,0,0.1)] border-solid h-[183px] left-[580px] overflow-clip rounded-[12px] top-[204px] w-[224px]" data-name="Settlement Card">
      <div className="absolute h-[98px] left-[-27px] top-[173px] w-[275px]">
        <div className="absolute inset-[-61.22%_-21.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 395 218">
            <g filter="url(#filter0_f_6006_2101)" id="Ellipse 9343" opacity="0.97">
              <ellipse cx="197.5" cy="109" fill="var(--fill-0, #D92D20)" rx="137.5" ry="49" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="218" id="filter0_f_6006_2101" width="395" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6006_2101" stdDeviation="30" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[0] left-[13px] not-italic text-[20px] text-white top-[15px] tracking-[-0.26px]">
        <span className="leading-[28px] text-black">Your settlements are</span>
        <span className="leading-[28px]">
          <br aria-hidden="true" />
        </span>
        <span className="font-['TASA_Orbiter_Display:Bold',sans-serif] leading-[28px] text-[#d92d20]">paused</span>
      </p>
      <Amount />
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[16px] left-[15px] not-italic text-[#768ea7] text-[10px] top-[111px] tracking-[0.3px]">NEXT SETTLEMENT</p>
    </div>
  );
}

function FractalGlass1() {
  return (
    <div className="bg-[rgba(168,168,168,0.02)] content-stretch flex h-[953.361px] items-start overflow-clip relative w-[953.714px]" data-name="Fractal Glass">
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 01">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 02">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 03">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 04">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 05">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 06">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 07">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 08">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 09">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 10">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 11">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 12">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1.938px_1.938px_0.969px_0px_rgba(255,255,255,0.3)]" />
    </div>
  );
}

function FractalGlass2() {
  return (
    <div className="bg-[rgba(168,168,168,0.02)] content-stretch flex h-[953.361px] items-start opacity-50 overflow-clip relative w-[953.714px]" data-name="Fractal Glass">
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 01">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 02">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 03">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 04">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 05">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 06">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 07">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 08">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 09">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 10">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 11">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] size-full">
          <div className="backdrop-blur-[48.457px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]" data-name="Column 12">
            <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.2)] border-b-[1.938px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_1.938px_1.938px_0.969px_0px_rgba(255,255,255,0.3)]" />
    </div>
  );
}

function CurrencySymbolContainer1() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#192839] text-[20px] text-right">-46,000</p>
    </div>
  );
}

function DecimalContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">.00</p>
    </div>
  );
}

function ValueContainer1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer1 />
      <DecimalContainer />
    </div>
  );
}

function AmountBase1() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="_AmountBase">
      <CurrencySymbolContainer1 />
      <ValueContainer1 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-right top-0 translate-x-[-100%]">INR</p>
    </div>
  );
}

function Root1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase1 />
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
      <Root1 />
    </div>
  );
}

function AvailableBalance() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Available Balance">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#768ea7] text-[14px] text-right">available balance</p>
      <Amount1 />
    </div>
  );
}

function CurrencySymbolContainer2() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#192839] text-[20px] text-right">1,20,000</p>
    </div>
  );
}

function DecimalContainer1() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">.00</p>
    </div>
  );
}

function ValueContainer2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer2 />
      <DecimalContainer1 />
    </div>
  );
}

function AmountBase2() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="_AmountBase">
      <CurrencySymbolContainer2 />
      <ValueContainer2 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-right top-0 translate-x-[-100%]">INR</p>
    </div>
  );
}

function Root2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase2 />
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
      <Root2 />
    </div>
  );
}

function PaymentsCollected() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Payments collected">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#768ea7] text-[14px] text-right">payments collected</p>
      <Amount2 />
    </div>
  );
}

function MainContent1() {
  return (
    <div className="absolute bottom-[21px] content-stretch flex flex-col gap-[8px] items-start left-[19px] w-[271px]" data-name="Main content">
      <AvailableBalance />
      <PaymentsCollected />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute left-[-2px] size-[24px] top-[3px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-right">
          <path d={svgPaths.p17b2a200} fill="var(--fill-0, #192839)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-right">
          <path d={svgPaths.p2018ae00} fill="var(--fill-0, #FBFBFB)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#192839] left-[297px] overflow-clip rounded-[100px] size-[20px] top-[23px]">
      <ArrowRight />
      <ArrowRight1 />
    </div>
  );
}

function StatsCard() {
  return (
    <div className="absolute bg-white border border-[#fee4e2] border-solid h-[184px] left-[298px] overflow-clip rounded-[10px] top-0 w-[510px]" data-name="Stats Card">
      <div className="absolute inset-[calc(24.4%-1px)_calc(-39.84%-1px)_calc(-54.56%-1px)_calc(57.66%-1px)]">
        <div className="absolute inset-[-21.21%_-12.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520.69 341.067">
            <g filter="url(#filter0_f_6006_2093)" id="Vector 16">
              <path d={svgPaths.pd204a80} fill="var(--fill-0, #FA8282)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="341.067" id="filter0_f_6006_2093" width="520.691" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6006_2093" stdDeviation="25.3933" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[calc(77.11%-1px)_calc(30.75%-1px)_calc(-107.27%-1px)_calc(-12.93%-1px)]">
        <div className="absolute inset-[-21.21%_-12.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520.69 341.067">
            <g filter="url(#filter0_f_6006_2093)" id="Vector 16">
              <path d={svgPaths.pd204a80} fill="var(--fill-0, #FA8282)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="341.067" id="filter0_f_6006_2093" width="520.691" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6006_2093" stdDeviation="25.3933" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[1167.59px] items-center justify-center left-[calc(50%-285.96px)] top-[calc(50%+283.8px)] translate-x-[-50%] translate-y-[-50%] w-[1168.089px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-14.99deg] skew-x-[0.01deg]">
          <FractalGlass1 />
        </div>
      </div>
      <div className="absolute flex h-[1167.59px] items-center justify-center left-[calc(50%+174.05px)] top-[calc(50%+314.8px)] translate-x-[-50%] translate-y-[-50%] w-[1168.089px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-165.01deg] scale-y-[-100%] skew-x-[-0.01deg]">
          <FractalGlass2 />
        </div>
      </div>
      <MainContent1 />
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[0] left-[19px] not-italic text-[20px] text-black top-[17px] tracking-[-0.26px]">
        <span className="leading-[28px]">{`Your account balance `}</span>
        <span className="font-['TASA_Orbiter_Display:Bold',sans-serif] leading-[28px] text-[#d92d20]">is negative</span>
      </p>
      <Frame3 />
    </div>
  );
}

function CardsGrid() {
  return (
    <div className="h-[390px] relative shrink-0 w-full" data-name="Cards Grid">
      <StatsCard />
      <BriefingCard />
      <SuccessCard />
      <SettlementCard />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-start relative size-full">
      <TopContent />
      <CardsGrid />
    </div>
  );
}