function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="text-container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:SemiBold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#192839] text-[14px] text-right">Amount</p>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="content container">
      <TextContainer />
    </div>
  );
}

export default function Wrapper() {
  return (
    <div className="bg-[rgba(108,132,157,0.06)] content-stretch flex gap-[8px] items-center justify-end p-[12px] relative size-full" data-name="wrapper">
      <div aria-hidden="true" className="absolute border-[rgba(108,132,157,0.18)] border-b border-solid inset-0 pointer-events-none" />
      <ContentContainer />
    </div>
  );
}