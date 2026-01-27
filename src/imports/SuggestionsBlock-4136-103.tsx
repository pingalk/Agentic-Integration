import svgPaths from "./svg-f5fzbit8qh";

function PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="prompt_suggestion_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="prompt_suggestion_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p21a7ef00} fill="var(--fill-0, #768EA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz />
          <p className="css-4hzbpn font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px] w-[580px]">Draft a message for Pingal on pending payment</p>
        </div>
      </div>
    </div>
  );
}

function PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="prompt_suggestion_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="prompt_suggestion_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p3bb0600} fill="var(--fill-0, #768EA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f1f5fa] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz1 />
          <p className="css-4hzbpn font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium',sans-serif] leading-[26px] relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px] w-[580px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
            Why is payment for ₹20,000 pending?
          </p>
        </div>
      </div>
    </div>
  );
}

function PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="prompt_suggestion_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="prompt_suggestion_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p3bb0600} fill="var(--fill-0, #768EA7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz2 />
          <p className="css-4hzbpn font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px] w-[580px]">What is my overall payment success rate?</p>
        </div>
      </div>
    </div>
  );
}

function SuggestionsList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Suggestions list">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function SuggestionsBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Suggestions Block">
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#193f47] text-[18px] w-full">Suggestions</p>
      <SuggestionsList />
    </div>
  );
}