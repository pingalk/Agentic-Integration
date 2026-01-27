export default function Badge() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Badge">
      <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="root">
        <div className="bg-[rgba(108,132,157,0.09)] content-stretch flex gap-[4px] h-[24px] items-center px-[12px] py-0 relative rounded-[1000px] shrink-0" data-name="wrapper">
          <p className="font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#243547] text-[12px] text-nowrap">Tell me when this payment will be settled</p>
        </div>
      </div>
    </div>
  );
}