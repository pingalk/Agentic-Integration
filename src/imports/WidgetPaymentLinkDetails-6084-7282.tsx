import svgPaths from "./svg-m0923jgy3a";
import imgChatGptImageOct282025032150Pm2 from "figma:asset/bac6c683adc820f5ac390a46127dd3011074110c.png";

function Heading() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] relative w-full">
          <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#222] text-[20px]">Congrats, funds added successfully!</p>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Main Content">
      <Heading />
    </div>
  );
}

function Check() {
  return (
    <div className="absolute left-[11px] size-[24px] top-[11px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p9937370} fill="var(--fill-0, white)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function SuccessIcon() {
  return (
    <div className="absolute left-[-10px] overflow-clip rounded-[100px] size-[44px] top-0" data-name="Success icon" style={{ backgroundImage: "linear-gradient(152.176deg, rgb(0, 158, 92) 32.335%, rgba(0, 158, 92, 0.51) 100.81%)" }}>
      <Check />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[88px] relative shrink-0 w-[100px]">
      <div className="absolute left-[12px] size-[88px] top-0" data-name="ChatGPT Image Oct 28, 2025, 03_21_50 PM 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImageOct282025032150Pm2} />
      </div>
      <SuccessIcon />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center px-[12px] py-[24px] relative w-full">
          <MainContent />
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function WidgetPaymentLinkDetails() {
  return (
    <div className="bg-[#edece8] content-stretch flex flex-col items-start p-[4px] relative rounded-[8px] size-full" data-name="Widget - Payment link Details">
      <Frame />
    </div>
  );
}