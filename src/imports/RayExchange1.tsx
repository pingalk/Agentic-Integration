import svgPaths from "./svg-0803z8axcw";

function ChatBox() {
  return (
    <div className="bg-[#e6eafa] content-stretch flex items-center max-w-[398px] overflow-clip px-[16px] py-[12px] relative rounded-[12px] shadow-[0px_2px_2px_0px_rgba(237,236,236,0.16)] shrink-0 w-[398px]" data-name="chat-box">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#090e13] text-[14px] tracking-[-0.28px]">{`Where are my settlements? Why is my account balance negative?  We had high value txns this week.`}</p>
    </div>
  );
}

function Frame1() {
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-full">
      <Frame1 />
      <ChevronRight />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(233, 105, 12, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Frame 2147239029">
            <rect fill="var(--fill-0, #E9690C)" height="20" rx="3.33333" width="20" />
            <path d={svgPaths.p362ac400} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Header">
      <Icon />
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[#192839] text-[18px] w-[688px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
        Your settlements are paused due to a negative balance of ₹46,000.
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Header />
      <div className="font-['TASA_Orbiter_Display:Regular','Noto_Sans:SemiBold',sans-serif] leading-[0] relative shrink-0 text-[#192839] text-[16px] tracking-[0.16px] w-[580px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
        <p className="css-4hzbpn mb-[12px]">
          <span className="leading-[26px]">{`This happened because `}</span>
          <span className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:SemiBold',sans-serif] leading-[26px] tracking-[0.16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
            your refunds this week exceeded your payments
          </span>
          <span className="leading-[26px]">:</span>
        </p>
        <ul className="list-disc">
          <li className="css-4hzbpn mb-0 ms-[24px]">
            <span className="leading-[26px]">{`Payments received: `}</span>
            <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
              ₹7.6 Lakhs
            </span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[24px]">
            <span className="leading-[26px]">{`Refunds processed: `}</span>
            <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
              ₹8.0 Lakhs
            </span>
          </li>
          <li className="css-4hzbpn ms-[24px]">
            <span className="leading-[26px]">{`Current difference: `}</span>
            <span className="font-['TASA_Orbiter_Display:SemiBold','Noto_Sans:SemiBold',sans-serif] leading-[26px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 600" }}>
              -₹46,000
            </span>
          </li>
        </ul>
      </div>
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
    <div className="bg-[rgba(108,132,157,0.12)] flex-[1_0_0] min-h-[60px] min-w-px relative w-full" data-name="wrapper">
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
    <div className="bg-[rgba(108,132,157,0.12)] flex-[1_0_0] min-h-[60px] min-w-px relative w-full" data-name="wrapper">
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
    <div className="bg-[rgba(108,132,157,0.12)] flex-[1_0_0] min-h-[60px] min-w-px relative w-full" data-name="wrapper">
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
    <div className="bg-[rgba(108,132,157,0.12)] flex-[1_0_0] min-h-[60px] min-w-px relative w-full" data-name="wrapper">
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
    <div className="bg-[rgba(108,132,157,0.12)] flex-[1_0_0] min-h-[60px] min-w-px relative w-full" data-name="wrapper">
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
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-[143.665px]" data-name="Table Header Cell Base">
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
    <div className="bg-[rgba(18,145,208,0.09)] content-stretch flex gap-[4px] h-[20px] items-center px-[8px] relative rounded-[1000px] shrink-0" data-name="wrapper">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f78ad] text-[12px]">Refunded</p>
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

function LeadingContainer() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="leading container">
      <Upi />
    </div>
  );
}

function NumberContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">UPI</p>
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
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">23 Jan 2026, 08:53</p>
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="143.667" y1="0.5" y2="0.5" />
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
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[143.667px]" data-name="Table Cell Base">
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

function Tbody() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="<tbody>">
      <Tr />
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
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">20,000</p>
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
    <div className="bg-[rgba(18,145,208,0.09)] content-stretch flex gap-[4px] h-[20px] items-center px-[8px] relative rounded-[1000px] shrink-0" data-name="wrapper">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f78ad] text-[12px]">Refunded</p>
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

function LeadingIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="leadingIcon">
      <div className="absolute inset-[0_-0.86%_-5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1722 21.0002">
          <g id="current-account">
            <path clipRule="evenodd" d={svgPaths.p11930900} fill="var(--fill-0, #192839)" fillRule="evenodd" id="path" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeadingContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="leading container">
      <LeadingIcon />
    </div>
  );
}

function NumberContainer3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">Netbanking</p>
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
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">23 Jan 2026, 08:53</p>
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="143.667" y1="0.5" y2="0.5" />
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
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[143.667px]" data-name="Table Cell Base">
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

function Tbody1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="<tbody>">
      <Tr1 />
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
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">20,000</p>
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
    <div className="bg-[rgba(18,145,208,0.09)] content-stretch flex gap-[4px] h-[20px] items-center px-[8px] relative rounded-[1000px] shrink-0" data-name="wrapper">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f78ad] text-[12px]">Refunded</p>
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

function LeadingIcon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="leadingIcon">
      <div className="absolute inset-[0_-0.86%_-5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1722 21.0002">
          <g id="current-account">
            <path clipRule="evenodd" d={svgPaths.p11930900} fill="var(--fill-0, #192839)" fillRule="evenodd" id="path" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeadingContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="leading container">
      <LeadingIcon1 />
    </div>
  );
}

function NumberContainer6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">Netbanking</p>
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="143.667" y1="0.5" y2="0.5" />
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
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[143.667px]" data-name="Table Cell Base">
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

function Tbody2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="<tbody>">
      <Tr2 />
    </div>
  );
}

function CurrencySymbolContainer3() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer3() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-right">20,000</p>
    </div>
  );
}

function DecimalContainer3() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#192839] text-[10px] text-right">.00</p>
    </div>
  );
}

function ValueContainer3() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
      <MainValueContainer3 />
      <DecimalContainer3 />
    </div>
  );
}

function AmountBase3() {
  return (
    <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="_AmountBase">
      <CurrencySymbolContainer3 />
      <ValueContainer3 />
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-right top-0 translate-x-[-100%]">INR</p>
    </div>
  );
}

function Root26() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase3 />
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
      <Root26 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative" data-name="content">
      <Amount3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[12px] relative size-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function DividerRow15() {
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

function Wrapper23() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-end justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container15 />
      <DividerRow15 />
    </div>
  );
}

function Root27() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper23 />
    </div>
  );
}

function TableCellBase15() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[124.667px]" data-name="Table Cell Base">
      <Root27 />
    </div>
  );
}

function Wrapper24() {
  return (
    <div className="bg-[rgba(18,145,208,0.09)] content-stretch flex gap-[4px] h-[20px] items-center px-[8px] relative rounded-[1000px] shrink-0" data-name="wrapper">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f78ad] text-[12px]">Refunded</p>
    </div>
  );
}

function Root28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="root">
      <Wrapper24 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
      <Root28 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="content">
      <Badge3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
          <Content16 />
        </div>
      </div>
    </div>
  );
}

function DividerRow16() {
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

function Wrapper25() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container16 />
      <DividerRow16 />
    </div>
  );
}

function Root29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper25 />
    </div>
  );
}

function TableCellBase16() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[106.5px]" data-name="Table Cell Base">
      <Root29 />
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

function LeadingContainer3() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="leading container">
      <Upi1 />
    </div>
  );
}

function NumberContainer9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">Netbanking</p>
    </div>
  );
}

function ContainerNumberTrailingElement9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer9 />
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement9 />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <LeadingContainer3 />
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function DividerRow17() {
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

function Wrapper26() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container17 />
      <DividerRow17 />
    </div>
  );
}

function Root30() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper26 />
    </div>
  );
}

function TableCellBase17() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center relative shrink-0 w-[144.5px]" data-name="Table Cell Base">
      <Root30 />
    </div>
  );
}

function NumberContainer10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">21 Dec 2025, 08:53</p>
    </div>
  );
}

function ContainerNumberTrailingElement10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer10 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement10 />
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function DividerRow18() {
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

function Wrapper27() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container18 />
      <DividerRow18 />
    </div>
  );
}

function Root31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper27 />
    </div>
  );
}

function TableCellBase18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[168.667px]" data-name="Table Cell Base">
      <Root31 />
    </div>
  );
}

function NumberContainer11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="number container">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px]">514633500160</p>
    </div>
  );
}

function ContainerNumberTrailingElement11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="container (number + trailing element)">
      <NumberContainer11 />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name="content">
      <ContainerNumberTrailingElement11 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Content19 />
        </div>
      </div>
    </div>
  );
}

function DividerRow19() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="DividerRow">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.667 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="143.667" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper28() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container19 />
      <DividerRow19 />
    </div>
  );
}

function Root32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper28 />
    </div>
  );
}

function TableCellBase19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[143.667px]" data-name="Table Cell Base">
      <Root32 />
    </div>
  );
}

function Tr3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="<tr3>">
      <TableCellBase15 />
      <TableCellBase16 />
      <TableCellBase17 />
      <TableCellBase18 />
      <TableCellBase19 />
    </div>
  );
}

function Tbody3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="<tbody>">
      <Tr3 />
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0" data-name="<table>">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <Thead />
        {[...Array(2).keys()].map((_, i) => (
          <Tbody key={i} />
        ))}
        {[...Array(2).keys()].map((_, i) => (
          <Tbody1 key={i} />
        ))}
        <Tbody2 />
        <Tbody3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TableSection() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Table Section">
      <Table />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#192839] text-[18px] w-[688px]">{`How to unlock your money immediately: `}</p>
    </div>
  );
}

function Resolution() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Resolution">
      <Frame4 />
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:Regular','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] leading-[0] relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px] w-[580px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <span className="leading-[26px]">{`You have ₹1.26 Lakhs in settlements waiting. `}</span>
        <span className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] leading-[26px] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          Add ₹46,000 to your Razorpay account now
        </span>
        <span className="leading-[26px]">{` to clear the negative balance, and your full `}</span>
        <span className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] leading-[26px] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          ₹1.26 Lakhs will be transferred
        </span>
        <span className="leading-[26px]">{` to your bank by the `}</span>
        <span className="font-['TASA_Orbiter_Display:Medium','Noto_Sans:Regular','Noto_Sans:Medium',sans-serif] leading-[26px] text-[#192839]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          next business day.
        </span>
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
      <Frame3 />
      <Frame2 />
      <TableSection />
      <Resolution />
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

function FooterAction() {
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

function FooterAction1() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <ThumbsDown />
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

function FooterAction2() {
  return (
    <div className="bg-[#f1f5fa] overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <Copy />
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

function FooterAction3() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[32px]" data-name="Footer action">
      <Share />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Footer">
      <FooterAction />
      <FooterAction1 />
      <FooterAction2 />
      <FooterAction3 />
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

function Divider() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Divider">
      <div className="absolute inset-[-0.5px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 714 0.5">
          <g id="Divider">
            <line id="Divider Line" stroke="var(--stroke-0, #CBD5E2)" strokeWidth="0.5" x2="714" y1="0.25" y2="0.25" />
          </g>
        </svg>
      </div>
    </div>
  );
}

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

function Number2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Number">
      <Number1 />
    </div>
  );
}

function Suggestion() {
  return (
    <div className="bg-[#f1f5fa] relative rounded-[4px] shrink-0 w-full" data-name="Suggestion 1">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Number2 />
          <p className="css-ew64yg font-['TASA_Orbiter_Display:Medium','Noto_Sans:Medium',sans-serif] leading-[26px] relative shrink-0 text-[#2980e1] text-[16px] tracking-[0.16px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
            Add funds worth ₹46,000
          </p>
        </div>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div className="bg-[#f1f5fa] content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] relative rounded-[80px] shrink-0 size-[20px]" data-name="Number">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#40566d] text-[10px] text-center">2</p>
    </div>
  );
}

function Number4() {
  return (
    <div className="absolute content-stretch flex items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Number">
      <Number3 />
    </div>
  );
}

function Number5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Number">
      <Number4 />
    </div>
  );
}

function Suggestion1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Suggestion 2">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Number5 />
          <p className="css-ew64yg font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px]">How can I avoid this negative balance in the future?</p>
        </div>
      </div>
    </div>
  );
}

function Number6() {
  return (
    <div className="bg-[#f1f5fa] content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] relative rounded-[80px] shrink-0 size-[20px]" data-name="Number">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#40566d] text-[10px] text-center">3</p>
    </div>
  );
}

function Number7() {
  return (
    <div className="absolute content-stretch flex items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Number">
      <Number6 />
    </div>
  );
}

function Number8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Number">
      <Number7 />
    </div>
  );
}

function Suggestion2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Suggestion 3">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[4px] relative w-full">
          <Number8 />
          <p className="css-ew64yg font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#40566d] text-[16px] tracking-[0.16px]">Tell me how Refund Credits can keep my settlements running smoothly.</p>
        </div>
      </div>
    </div>
  );
}

function Suggestions() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Suggestions">
      <Suggestion />
      <Suggestion1 />
      <Suggestion2 />
    </div>
  );
}

function SuggestionsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Suggestions Section">
      <p className="css-4hzbpn font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#193f47] text-[18px] w-full">Suggestions</p>
      <Suggestions />
    </div>
  );
}

function RayResponse() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Ray Response">
      <Frame />
      <Footer2 />
      <Divider />
      <SuggestionsSection />
    </div>
  );
}

export default function RayExchange() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-end relative size-full" data-name="Ray Exchange 1">
      <ChatBox />
      <RayResponse />
    </div>
  );
}