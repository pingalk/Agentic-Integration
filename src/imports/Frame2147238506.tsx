function Frame2() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(247, 247, 248) 100%)" }}>
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] py-[16px] relative rounded-[inherit]">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[16px] tracking-[-0.528px]">Payments</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1.5px_0px_1px_white,inset_0px_1.5px_0px_1px_white]" />
      <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[16px] tracking-[-0.528px]">Orders</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[16px] tracking-[-0.528px]">Invoices</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame />
    </div>
  );
}