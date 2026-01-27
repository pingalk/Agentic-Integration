import svgPaths from "./svg-mdzw81x5bb";

function Frame10() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="path">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.pa379f00} fill="var(--fill-0, #FDFDFD)" id="path" />
        </svg>
      </div>
      <p className="css-ew64yg font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fafafa] text-[14px] tracking-[0.42px]">DAILY DIGEST</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white opacity-0 overflow-clip relative rounded-[100px] shrink-0 size-[20px]">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] leading-[18px] left-[calc(50%-3px)] not-italic text-[#2980e1] text-[12px] top-[calc(50%-9px)] tracking-[-0.156px] w-[6px]">3</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] left-0 overflow-clip rounded-[80px] size-[16px] top-[3px]">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] leading-[14.4px] left-[calc(50%-2.4px)] not-italic text-[#2980e1] text-[9.6px] top-[calc(50%-7.2px)] tracking-[-0.1248px] w-[4.8px]">1</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame />
      <p className="css-ew64yg font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#fdfdfd] text-[16px] tracking-[0.32px]">
        {`No refunds or disputes `}
        <br aria-hidden="true" />
        so far.
      </p>
      <Frame1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white opacity-0 overflow-clip relative rounded-[100px] shrink-0 size-[20px]">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] leading-[18px] left-[calc(50%-3px)] not-italic text-[#2980e1] text-[12px] top-[calc(50%-9px)] tracking-[-0.156px] w-[6px]">3</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] left-0 overflow-clip rounded-[80px] size-[16px] top-[3px]">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] leading-[14.4px] left-[calc(50%-2.4px)] not-italic text-[#2980e1] text-[9.6px] top-[calc(50%-7.2px)] tracking-[-0.1248px] w-[4.8px]">2</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame5 />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#fdfdfd] text-[0px] text-[16px] tracking-[0.32px] w-[173px]">
        <span className="font-['TASA_Orbiter_Display:Bold',sans-serif] leading-[23px]">Most payment failures due to</span>
        <span className="font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[23px]">: Incorrect CVV (2%)</span>
      </p>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white opacity-0 overflow-clip relative rounded-[100px] shrink-0 size-[20px]">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] leading-[18px] left-[calc(50%-3px)] not-italic text-[#2980e1] text-[12px] top-[calc(50%-9px)] tracking-[-0.156px] w-[6px]">2</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] left-0 overflow-clip rounded-[80px] size-[16px] top-[2px]">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] leading-[14.4px] left-[calc(50%-2.4px)] not-italic text-[#2980e1] text-[9.6px] top-[calc(50%-7.2px)] tracking-[-0.1248px] w-[4.8px]">3</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <Frame7 />
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#fdfdfd] text-[0px] text-[16px] tracking-[0.32px] w-[221px]">
        <span className="font-['TASA_Orbiter_Display:Bold',sans-serif] leading-[23px]">
          {`UPI continues to perform `}
          <br aria-hidden="true" />
          strongly (99%)
        </span>
        <span className="font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[23px]">
          {`, netbanking `}
          <br aria-hidden="true" />
          weakest (79%)
        </span>
      </p>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
      <Frame2 />
    </div>
  );
}

export default function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative size-full">
      <Frame10 />
      <Frame9 />
    </div>
  );
}
