import svgPaths from "./svg-mpk6g0616t";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#768ea7] text-[12px] tracking-[0.12px]">From 12 sources</p>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path clipRule="evenodd" d={svgPaths.p2d2a9700} fill="var(--fill-0, #768EA7)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Prefix() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full" data-name="Prefix">
      <Frame />
      <ChevronRight />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame 2147239029">
          <rect fill="var(--fill-0, #4793FD)" height="20" rx="3.33333" width="20" />
          <path d={svgPaths.pa561c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Takeaway() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Takeaway">
      <Frame2 />
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#020202] text-[18px] w-[688px]">Recent payments from pingal@gmail.com</p>
    </div>
  );
}

function TakeawaySubtext() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Takeaway + Subtext">
      <Takeaway />
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#40566d] text-[0px] text-[16px] tracking-[0.16px] w-[580px]">
        <span className="font-['Inter:Regular',sans-serif] leading-[26px]">{`Pingal has `}</span>
        <span className="font-['Inter:Medium',sans-serif] leading-[26px] text-[#192839]">3 recent payments totalling ₹26,000.</span>
        <span className="font-['Inter:Regular',sans-serif] leading-[26px]"> </span>
        <span className="font-['Inter:Regular',sans-serif] leading-[26px]">{`Two are successful (captured) `}</span>
        <span className="font-['Inter:Regular',sans-serif] leading-[26px]">{`and have been settled. The `}</span>
        <span className="font-['Inter:Medium',sans-serif] leading-[26px] text-[#192839]">third—</span>
        <span className="font-['Inter:Medium',sans-serif] leading-[26px] text-[#192839]">a netbanking payment—is still pending</span>
        <span className="font-['Inter:Regular',sans-serif] leading-[26px]">{` as we wait for the customer's bank to confirm the transfer.`}</span>
      </p>
    </div>
  );
}

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

function Wrapper() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-[60px] min-w-px relative w-full" data-name="wrapper">
      <div aria-hidden="true" className="absolute border-[rgba(108,132,157,0.18)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end min-h-[inherit] p-[12px] relative size-full">
          <ContentContainer />
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-full" data-name="root">
      <Wrapper />
    </div>
  );
}

function TableHeaderCellBase() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-[124.665px]" data-name="Table Header Cell Base">
      <Root />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="text-container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:SemiBold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#192839] text-[14px]">Status</p>
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="content container">
      <TextContainer1 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-[60px] min-w-px relative w-full" data-name="wrapper">
      <div aria-hidden="true" className="absolute border-[rgba(108,132,157,0.18)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] p-[12px] relative size-full">
          <ContentContainer1 />
        </div>
      </div>
    </div>
  );
}

function Root1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-full" data-name="root">
      <Wrapper1 />
    </div>
  );
}

function TableHeaderCellBase1() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-[106.5px]" data-name="Table Header Cell Base">
      <Root1 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="text-container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:SemiBold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#192839] text-[14px]">Payment Method</p>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="content container">
      <TextContainer2 />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-[60px] min-w-px relative w-full" data-name="wrapper">
      <div aria-hidden="true" className="absolute border-[rgba(108,132,157,0.18)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] p-[12px] relative size-full">
          <ContentContainer2 />
        </div>
      </div>
    </div>
  );
}

function Root2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-full" data-name="root">
      <Wrapper2 />
    </div>
  );
}

function TableHeaderCellBase2() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-[144.5px]" data-name="Table Header Cell Base">
      <Root2 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="text-container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:SemiBold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#192839] text-[14px]">Created On</p>
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="content container">
      <TextContainer3 />
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-[60px] min-w-px relative w-full" data-name="wrapper">
      <div aria-hidden="true" className="absolute border-[rgba(108,132,157,0.18)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] p-[12px] relative size-full">
          <ContentContainer3 />
        </div>
      </div>
    </div>
  );
}

function Root3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-full" data-name="root">
      <Wrapper3 />
    </div>
  );
}

function TableHeaderCellBase3() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-[168.67px]" data-name="Table Header Cell Base">
      <Root3 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="text-container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:SemiBold',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#192839] text-[14px]">Bank RRN</p>
    </div>
  );
}

function ContentContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="content container">
      <TextContainer4 />
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="bg-[#f8f8f8] flex-[1_0_0] min-h-[60px] min-w-px relative w-full" data-name="wrapper">
      <div aria-hidden="true" className="absolute border-[rgba(108,132,157,0.18)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] p-[12px] relative size-full">
          <ContentContainer4 />
        </div>
      </div>
    </div>
  );
}

function Root4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-full" data-name="root">
      <Wrapper4 />
    </div>
  );
}

function TableHeaderCellBase4() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-[173.665px]" data-name="Table Header Cell Base">
      <Root4 />
    </div>
  );
}

function Thead() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="<thead>">
      <TableHeaderCellBase />
      <TableHeaderCellBase1 />
      <TableHeaderCellBase2 />
      <TableHeaderCellBase3 />
      <TableHeaderCellBase4 />
      <div className="bg-[#d9d9d9] h-[48px] shrink-0 w-[22px]" />
      <div className="absolute bg-[#f8f8f8] blur-[12px] h-[48px] left-[586px] top-[0.38px] w-[134px]" data-name="Layer blur" />
    </div>
  );
}

function CurrencySymbolContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">20,000</p>
    </div>
  );
}

function DecimalContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">.00</p>
    </div>
  );
}

function ValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer />
      <DecimalContainer />
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

function Root5() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
      <Root5 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="content">
      <Amount />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[12px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function DividerRow() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="124.667" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-end justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container />
      <DividerRow />
    </div>
  );
}

function Root6() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper5 />
    </div>
  );
}

function TableCellBase() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[124.667px]" data-name="Table Cell Base">
      <Root6 />
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="bg-[rgba(18,145,208,0.09)] content-stretch flex gap-[4px] h-[20px] items-center px-[8px] py-0 relative rounded-[1000px] shrink-0" data-name="wrapper">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f78ad] text-[12px]">Pending</p>
    </div>
  );
}

function Root7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="root">
      <Wrapper6 />
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
      <Root7 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="content">
      <Badge />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function DividerRow1() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.5 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="106.5" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container1 />
      <DividerRow1 />
    </div>
  );
}

function Root8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper7 />
    </div>
  );
}

function TableCellBase1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[106.5px]" data-name="Table Cell Base">
      <Root8 />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="leadingIcon">
      <div className="absolute inset-[0_-0.86%_-5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1722 21.0002">
          <g id="leadingIcon">
            <path clipRule="evenodd" d={svgPaths.p11930900} fill="var(--fill-0, #192839)" fillRule="evenodd" id="path" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeadingContainer() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="leading container">
      <LeadingIcon />
    </div>
  );
}

function NumberContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">Netbanking</p>
    </div>
  );
}

function ContainerNumberTrailingElement() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <LeadingContainer />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function DividerRow2() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_-66.09%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="240" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container2 />
      <DividerRow2 />
    </div>
  );
}

function Root9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper8 />
    </div>
  );
}

function TableCellBase2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-[144.5px]" data-name="Table Cell Base">
      <Root9 />
    </div>
  );
}

function NumberContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">21 Dec 2025, 08:53</p>
    </div>
  );
}

function ContainerNumberTrailingElement1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function DividerRow3() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="168.667" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container3 />
      <DividerRow3 />
    </div>
  );
}

function Root10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper9 />
    </div>
  );
}

function TableCellBase3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[168.667px]" data-name="Table Cell Base">
      <Root10 />
    </div>
  );
}

function NumberContainer2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">514633500160</p>
    </div>
  );
}

function ContainerNumberTrailingElement2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function DividerRow4() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="173.667" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper10() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container4 />
      <DividerRow4 />
    </div>
  );
}

function Root11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper10 />
    </div>
  );
}

function TableCellBase4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[173.667px]" data-name="Table Cell Base">
      <Root11 />
    </div>
  );
}

function Tr() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="<tr3>">
      <TableCellBase />
      <TableCellBase1 />
      <TableCellBase2 />
      <TableCellBase3 />
      <TableCellBase4 />
    </div>
  );
}

function CurrencySymbolContainer1() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">2,000</p>
    </div>
  );
}

function DecimalContainer1() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">.00</p>
    </div>
  );
}

function ValueContainer1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer1 />
      <DecimalContainer1 />
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

function Root12() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase1 />
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
      <Root12 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="content">
      <Amount1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[12px] relative size-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function DividerRow5() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="124.667" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper11() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-end justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container5 />
      <DividerRow5 />
    </div>
  );
}

function Root13() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper11 />
    </div>
  );
}

function TableCellBase5() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[124.667px]" data-name="Table Cell Base">
      <Root13 />
    </div>
  );
}

function Wrapper12() {
  return (
    <div className="bg-[rgba(0,162,81,0.09)] content-stretch flex gap-[4px] h-[20px] items-center px-[8px] py-0 relative rounded-[1000px] shrink-0" data-name="wrapper">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#008743] text-[12px]">Captured</p>
    </div>
  );
}

function Root14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="root">
      <Wrapper12 />
    </div>
  );
}

function Badge1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
      <Root14 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="content">
      <Badge1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function DividerRow6() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.5 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="106.5" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper13() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container6 />
      <DividerRow6 />
    </div>
  );
}

function Root15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper13 />
    </div>
  );
}

function TableCellBase6() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[106.5px]" data-name="Table Cell Base">
      <Root15 />
    </div>
  );
}

function Upi() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="upi">
      <div className="absolute inset-[0_-1.28%_-5.53%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2569 21.1068">
          <g id="upi">
            <path clipRule="evenodd" d={svgPaths.p37bfdbf0} fill="var(--fill-0, #192839)" fillRule="evenodd" id="path" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeadingContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="leading container">
      <Upi />
    </div>
  );
}

function NumberContainer3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">UPI</p>
    </div>
  );
}

function ContainerNumberTrailingElement3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer3 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <LeadingContainer1 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function DividerRow7() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_-66.09%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="240" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper14() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container7 />
      <DividerRow7 />
    </div>
  );
}

function Root16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper14 />
    </div>
  );
}

function TableCellBase7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-[144.5px]" data-name="Table Cell Base">
      <Root16 />
    </div>
  );
}

function NumberContainer4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">20 Dec 2025, 08:53</p>
    </div>
  );
}

function ContainerNumberTrailingElement4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer4 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function DividerRow8() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="168.667" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper15() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container8 />
      <DividerRow8 />
    </div>
  );
}

function Root17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper15 />
    </div>
  );
}

function TableCellBase8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[168.667px]" data-name="Table Cell Base">
      <Root17 />
    </div>
  );
}

function NumberContainer5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">514633500160</p>
    </div>
  );
}

function ContainerNumberTrailingElement5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer5 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function DividerRow9() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="173.667" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper16() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container9 />
      <DividerRow9 />
    </div>
  );
}

function Root18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper16 />
    </div>
  );
}

function TableCellBase9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[173.667px]" data-name="Table Cell Base">
      <Root18 />
    </div>
  );
}

function Tr1() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="<tr3>">
      <TableCellBase5 />
      <TableCellBase6 />
      <TableCellBase7 />
      <TableCellBase8 />
      <TableCellBase9 />
    </div>
  );
}

function CurrencySymbolContainer2() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">4,000</p>
    </div>
  );
}

function DecimalContainer2() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">.00</p>
    </div>
  );
}

function ValueContainer2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer2 />
      <DecimalContainer2 />
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

function Root19() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase2 />
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
      <Root19 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="content">
      <Amount2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[12px] relative size-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function DividerRow10() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 124.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="124.667" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper17() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-end justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container10 />
      <DividerRow10 />
    </div>
  );
}

function Root20() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper17 />
    </div>
  );
}

function TableCellBase10() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[124.667px]" data-name="Table Cell Base">
      <Root20 />
    </div>
  );
}

function Wrapper18() {
  return (
    <div className="bg-[rgba(0,162,81,0.09)] content-stretch flex gap-[4px] h-[20px] items-center px-[8px] py-0 relative rounded-[1000px] shrink-0" data-name="wrapper">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#008743] text-[12px]">Captured</p>
    </div>
  );
}

function Root21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="root">
      <Wrapper18 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
      <Root21 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="content">
      <Badge2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function DividerRow11() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.5 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="106.5" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper19() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container11 />
      <DividerRow11 />
    </div>
  );
}

function Root22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper19 />
    </div>
  );
}

function TableCellBase11() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[106.5px]" data-name="Table Cell Base">
      <Root22 />
    </div>
  );
}

function Upi1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="upi">
      <div className="absolute inset-[0_-1.28%_-5.53%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2569 21.1068">
          <g id="upi">
            <path clipRule="evenodd" d={svgPaths.p37bfdbf0} fill="var(--fill-0, #192839)" fillRule="evenodd" id="path" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeadingContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="leading container">
      <Upi1 />
    </div>
  );
}

function NumberContainer6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">UPI</p>
    </div>
  );
}

function ContainerNumberTrailingElement6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer6 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement6 />
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <LeadingContainer2 />
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function DividerRow12() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_-66.09%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="240" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper20() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container12 />
      <DividerRow12 />
    </div>
  );
}

function Root23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper20 />
    </div>
  );
}

function TableCellBase12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-[144.5px]" data-name="Table Cell Base">
      <Root23 />
    </div>
  );
}

function NumberContainer7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">21 Dec 2025, 08:53</p>
    </div>
  );
}

function ContainerNumberTrailingElement7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer7 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement7 />
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function DividerRow13() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 168.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="168.667" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper21() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container13 />
      <DividerRow13 />
    </div>
  );
}

function Root24() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper21 />
    </div>
  );
}

function TableCellBase13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[168.667px]" data-name="Table Cell Base">
      <Root24 />
    </div>
  );
}

function NumberContainer8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">514633500160</p>
    </div>
  );
}

function ContainerNumberTrailingElement8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer8 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement8 />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function DividerRow14() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="173.667" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper22() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container14 />
      <DividerRow14 />
    </div>
  );
}

function Root25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper22 />
    </div>
  );
}

function TableCellBase14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[173.667px]" data-name="Table Cell Base">
      <Root25 />
    </div>
  );
}

function Tr2() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="<tr3>">
      <TableCellBase10 />
      <TableCellBase11 />
      <TableCellBase12 />
      <TableCellBase13 />
      <TableCellBase14 />
    </div>
  );
}

function Tbody() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="<tbody>">
      <Tr />
      <Tr1 />
      <Tr2 />
    </div>
  );
}

function Copy() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="copy">
          <g id="path">
            <path d={svgPaths.p37690f00} fill="var(--fill-0, #192839)" />
            <path clipRule="evenodd" d={svgPaths.p3556ca00} fill="var(--fill-0, #192839)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FooterAction() {
  return (
    <div className="bg-[#f1f5fa] overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Footer action">
      <Copy />
    </div>
  );
}

function Download() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="download">
      <div className="absolute inset-[0_-37.5%_-43.75%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 23">
          <g id="download">
            <g id="path">
              <path d={svgPaths.p14572800} fill="var(--fill-0, #40566D)" />
              <path d={svgPaths.p34f3b900} fill="var(--fill-0, #40566D)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FooterAction1() {
  return (
    <div className="bg-[#f8fafc] overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Footer action">
      <Download />
    </div>
  );
}

function ExternalLink() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="external-link">
      <div className="absolute inset-[0_-37.5%_-37.5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="external-link">
            <g id="path">
              <path d={svgPaths.p38913800} fill="var(--fill-0, #40566D)" />
              <path d={svgPaths.p3eceaf00} fill="var(--fill-0, #40566D)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function FooterAction2() {
  return (
    <div className="bg-[#f8fafc] overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="Footer action">
      <ExternalLink />
    </div>
  );
}

function TableActions() {
  return (
    <div className="absolute bg-[#f8fafc] content-stretch flex gap-[2px] items-center left-[607px] overflow-clip rounded-[8px] shadow-[0px_2px_16px_0px_rgba(25,40,57,0.09)] top-[7px]" data-name="Table - Actions">
      <FooterAction />
      <FooterAction1 />
      <FooterAction2 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-[714px]" data-name="<table>">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Thead />
        <Tbody />
        <TableActions />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1.5px_0px_1px_white,inset_0px_1.5px_0px_1px_rgba(255,255,255,0.7)]" />
      <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.08)]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start justify-center relative shrink-0" data-name="Main Content">
      <TakeawaySubtext />
      <Table />
    </div>
  );
}

function PrimaryContentBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Primary Content Block">
      <Prefix />
      <MainContent />
    </div>
  );
}

function Ray() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="ray">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="ray">
          <path d={svgPaths.p3f6db900} fill="var(--fill-0, #192839)" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Ray />
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#43505d] text-[12px]">Ray Insight</p>
    </div>
  );
}

function RayInsight() {
  return (
    <div className="bg-gradient-to-b from-[33.883%] from-[rgba(237,247,247,0.5)] relative rounded-[12px] shrink-0 to-[268.38%] to-[rgba(18,145,208,0.09)] w-full" data-name="Ray insight">
      <div aria-hidden="true" className="absolute border border-[#1291d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative w-full">
        <Frame1 />
        <p className="css-4hzbpn font-['TASA_Orbiter_Display:Medium','Noto_Sans:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#40566d] text-[0px] text-[16px] tracking-[0.16px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
          <span className="leading-[26px]">{`Pingal is a long time customer since 2023. He’s placed 13 orders so far. They have a Lifetime Value (LTV) of `}</span>
          <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
            ₹4.5 Lakhs
          </span>
          <span className="leading-[26px]">{` and, notably, `}</span>
          <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
            zero refunds
          </span>
          <span className="leading-[26px]">{` on record.`}</span>
        </p>
      </div>
    </div>
  );
}

function ThumbsUp() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="thumbs-up">
          <path clipRule="evenodd" d={svgPaths.p220a8000} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function FooterAction3() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <ThumbsUp />
    </div>
  );
}

function ThumbsDown() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="thumbs-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="thumbs-down">
          <path clipRule="evenodd" d={svgPaths.p385f2000} fill="var(--fill-0, #40566D)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function FooterAction4() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <ThumbsDown />
    </div>
  );
}

function Copy1() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="copy">
          <g id="path">
            <path d={svgPaths.p37690f00} fill="var(--fill-0, #192839)" />
            <path clipRule="evenodd" d={svgPaths.p3556ca00} fill="var(--fill-0, #192839)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FooterAction5() {
  return (
    <div className="bg-[#f1f5fa] overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <Copy1 />
    </div>
  );
}

function Share() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="share">
          <g id="path">
            <path clipRule="evenodd" d={svgPaths.p33d9fc12} fill="#40566D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p670a780} fill="#40566D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p19ecdd00} fill="#40566D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p36ecc300} fill="#40566D" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pbd93e00} fill="#40566D" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FooterAction6() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <Share />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Footer">
      <FooterAction3 />
      <FooterAction4 />
      <FooterAction5 />
      <FooterAction6 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Footer">
      <Footer />
    </div>
  );
}

function CardBody() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="card-body">
      <Footer1 />
    </div>
  );
}

function CardContentHolder() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="card-content-holder">
      <CardBody />
    </div>
  );
}

function Footer2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[4px] shrink-0" data-name="Footer">
      <CardContentHolder />
    </div>
  );
}

export default function Response() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative size-full" data-name="Response 1">
      <PrimaryContentBlock />
      <RayInsight />
      <Footer2 />
    </div>
  );
}