function Number() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] relative rounded-[80px] shrink-0 size-[20px]" data-name="Number">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#2980e1] text-[10px] text-center">1</p>
    </div>
  );
}

function Number1() {
  return (
    <div className="absolute content-stretch flex items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Number">
      <Number />
    </div>
  );
}

function PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="prompt_suggestion_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <Number1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f1f5fa] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz />
          <p className="css-ew64yg font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium',sans-serif] leading-[26px] relative shrink-0 text-[#2980e1] text-[16px] tracking-[0.16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
            Add funds worth ₹46,000
          </p>
        </div>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div className="bg-[#f1f5fa] content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] relative rounded-[80px] shrink-0 size-[20px]" data-name="Number">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#40566d] text-[10px] text-center">2</p>
    </div>
  );
}

function Number3() {
  return (
    <div className="absolute content-stretch flex items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Number">
      <Number2 />
    </div>
  );
}

function PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="prompt_suggestion_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 2">
      <Number3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz1 />
          <p className="css-ew64yg font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px]">How can I avoid this negative balance in the future?</p>
        </div>
      </div>
    </div>
  );
}

function Number4() {
  return (
    <div className="bg-[#f1f5fa] content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] relative rounded-[80px] shrink-0 size-[20px]" data-name="Number">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#40566d] text-[10px] text-center">3</p>
    </div>
  );
}

function Number5() {
  return (
    <div className="absolute content-stretch flex items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Number">
      <Number4 />
    </div>
  );
}

function PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="prompt_suggestion_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 2">
      <Number5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <PromptSuggestion24Dp1F1F1FFill0Wght400Grad0Opsz2 />
          <p className="css-ew64yg font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px]">Tell me how Refund Credits can keep my settlements running smoothly.</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame1 />
      <Frame4 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full">
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#193f47] text-[18px] w-full">Suggestions</p>
      <Frame3 />
    </div>
  );
}