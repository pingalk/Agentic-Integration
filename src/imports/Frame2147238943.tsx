import svgPaths from "./svg-ebt7ow3hj3";
import clsx from "clsx";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="prompt_suggestion_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">{children}</g>
      </svg>
    </div>
  );
}

function PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <Wrapper>
      <path d={svgPaths.p3bb0600} fill="var(--fill-0, #768EA7)" id="Vector" />
    </Wrapper>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full">
      <p className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#193f47] text-[18px] w-full">Suggestions</p>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <Wrapper1>
          <Wrapper>
            <path d={svgPaths.p21a7ef00} fill="var(--fill-0, #768EA7)" id="Vector" />
          </Wrapper>
          <p className="font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px] w-[580px]">Draft a message for Pingal on pending payment</p>
        </Wrapper1>
        <Wrapper1 additionalClassNames="bg-[#f1f5fa]">
          <PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz />
          <p className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium',sans-serif] leading-[26px] relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px] w-[580px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
            Why is payment for ₹20,000 pending?
          </p>
        </Wrapper1>
        <Wrapper1>
          <PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz />
          <p className="font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px] w-[580px]">What is my overall payment success rate?</p>
        </Wrapper1>
      </div>
    </div>
  );
}