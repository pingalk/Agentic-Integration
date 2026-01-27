import svgPaths from "./svg-zkz3kddhp5";

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path clipRule="evenodd" d={svgPaths.p1d8ed000} fill="var(--fill-0, #008743)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function State() {
  return (
    <div className="bg-[rgba(0,162,81,0.09)] content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0 size-[20px]" data-name="State">
      <Check />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#192839] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Payment created</p>
      </div>
    </div>
  );
}

function TimelineAtom() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[262px]" data-name="Timeline atom">
      <Frame />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#40566d] text-[12px] w-full">
        <p className="css-4hzbpn leading-[18px]">Thu Feb 2, 2023, 12:17am</p>
      </div>
    </div>
  );
}

function TImelineMoleculeDefault() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="TImeline molecule/default">
      <State />
      <TimelineAtom />
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p3e2fc480} fill="var(--fill-0, #D92D20)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function State1() {
  return (
    <div className="bg-[rgba(217,45,32,0.09)] content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0 size-[20px]" data-name="State">
      <Close />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-[262px]">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#192839] text-[14px]">
        <p className="css-ew64yg leading-[20px]">
          {`Payment failed due to mismatch in `}
          <br aria-hidden="true" />
          customer’s account details
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <Frame1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#40566d] text-[12px] w-[262px]">
        <p className="css-4hzbpn leading-[18px]">Fri Feb 19, 2023, 1:12pm</p>
      </div>
    </div>
  );
}

function TimelineAtom1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[262px]" data-name="Timeline atom">
      <Frame3 />
    </div>
  );
}

function TImelineMoleculeDefault1() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[12px] items-start ml-0 mt-0 relative row-1" data-name="TImeline molecule/default">
      <State1 />
      <TimelineAtom1 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <TImelineMoleculeDefault1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Group />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full">
      <TImelineMoleculeDefault />
      <Frame4 />
    </div>
  );
}