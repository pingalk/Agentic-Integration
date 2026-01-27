import svgPaths from "./svg-6g95gimkqo";

function Title() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full" data-name="title">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[18px]">Transaction Details</p>
    </div>
  );
}

function DrawerContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="drawer-content">
      <Title />
    </div>
  );
}

function LeftContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-center min-h-px min-w-px relative" data-name="left-container">
      <DrawerContent />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-wrapper">
          <path d={svgPaths.p287d0280} fill="var(--fill-0, #768EA7)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 size-[20px]" data-name="Icon Button">
      <IconWrapper />
    </div>
  );
}

function DrawerTrailingItem() {
  return (
    <div className="content-stretch flex gap-[16px] h-[28px] items-center justify-end relative shrink-0" data-name="_Drawer/ Trailing Item">
      <IconButton />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon-wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icon-wrapper">
          <path d={svgPaths.p3b0df280} fill="var(--fill-0, #768EA7)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 size-[20px]" data-name="Icon Button">
      <IconWrapper1 />
    </div>
  );
}

function ActionClose() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center relative shrink-0" data-name="action-close">
      <IconButton1 />
    </div>
  );
}

function RightContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pl-[8px] relative shrink-0" data-name="right-container">
      <DrawerTrailingItem />
      <ActionClose />
    </div>
  );
}

function TitleBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title-bar">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

function CurrencySymbolContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="currency-symbol-container">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#192839] text-[24px] text-right">₹</p>
    </div>
  );
}

function MainValueContainer() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="main-value-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[46px] not-italic relative shrink-0 text-[#192839] text-[40px] text-right">2,000</p>
    </div>
  );
}

function DecimalContainer() {
  return (
    <div className="content-stretch flex items-baseline opacity-64 relative shrink-0" data-name="decimal-container">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#192839] text-[24px] text-right">.00</p>
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

function Root() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
      <AmountBase />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
      <Root />
    </div>
  );
}

function HeadingContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="heading-container">
      <Amount />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="leading-icon">
      <div className="absolute inset-[0_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9998 16">
          <g id="leading-icon">
            <path d={svgPaths.p23b5600} fill="var(--fill-0, white)" id="Union" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="bg-[#00a251] content-stretch flex gap-[4px] h-[24px] items-center px-[12px] relative rounded-[1000px] shrink-0" data-name="wrapper">
      <LeadingIcon />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-white">Captured</p>
    </div>
  );
}

function Root1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="root">
      <Wrapper />
    </div>
  );
}

function Badge2Secondary() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badge 2 (Secondary)">
      <Root1 />
    </div>
  );
}

function BadgeGroup() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="badge-group">
      <Badge2Secondary />
    </div>
  );
}

function LeadingContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="leading-container">
      <p className="css-4hzbpn flex-[1_0_0] font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#40566d] text-[18px] text-center">
        {`Payment was successfully captured on `}
        <br aria-hidden="true" />
        Jan, 23, 2026
      </p>
    </div>
  );
}

function CaptionContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="caption-container">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#768ea7] text-[12px]">{`Created Jan 13, 2026  •  Updated Jan 11, 2025`}</p>
    </div>
  );
}

function DetailViewContent() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="detail-view-content">
      <HeadingContainer />
      <BadgeGroup />
      <LeadingContainer />
      <CaptionContainer />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrapper">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
        <TitleBar />
        <DetailViewContent />
      </div>
    </div>
  );
}

function Root2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
      <Wrapper1 />
    </div>
  );
}

function DrawerHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Drawer Header" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 380 284\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.0279e-16 -28.4 55.842 -1.9123e-14 190 284)\\\'><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(18,145,208,0.09)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <Root2 />
    </div>
  );
}

function Trailing() {
  return <div className="content-stretch flex flex-col items-start shrink-0 w-[97px]" data-name="trailing" />;
}

function DrawerHeader1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="drawer-header">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#192839] text-[18px]">Payment Details</p>
      <Trailing />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#768ea7] text-[14px]">Bank RRN</p>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="wrapper">
      <Body />
    </div>
  );
}

function Root3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper2 />
    </div>
  );
}

function InfoKey() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Key">
      <Root3 />
    </div>
  );
}

function Body1() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px]">--</p>
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="wrapper">
      <Body1 />
    </div>
  );
}

function Root4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper3 />
    </div>
  );
}

function InfoValue() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Value">
      <Root4 />
    </div>
  );
}

function Pair() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="pair">
      <InfoKey />
      <InfoValue />
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="wrapper">
      <Pair />
    </div>
  );
}

function Root5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper4 />
    </div>
  );
}

function InfoItem() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Info Item">
      <Root5 />
    </div>
  );
}

function Body2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#768ea7] text-[14px]">Paid via</p>
    </div>
  );
}

function Wrapper5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="wrapper">
      <Body2 />
    </div>
  );
}

function Root6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper5 />
    </div>
  );
}

function InfoKey1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Key">
      <Root6 />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon-wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-wrapper">
          <path d={svgPaths.p1aac0400} fill="var(--fill-0, #768EA7)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="iconButton">
      <IconWrapper2 />
    </div>
  );
}

function Root7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <IconButton2 />
    </div>
  );
}

function InfoItemTrailing() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Info Item Trailing">
      <Root7 />
    </div>
  );
}

function Body3() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px]">Axis Bank Credit Card</p>
      <InfoItemTrailing />
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="wrapper">
      <Body3 />
    </div>
  );
}

function Root8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper6 />
    </div>
  );
}

function InfoValue1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Value">
      <Root8 />
    </div>
  );
}

function Pair1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="pair">
      <InfoKey1 />
      <InfoValue1 />
    </div>
  );
}

function Wrapper7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="wrapper">
      <Pair1 />
    </div>
  );
}

function Root9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper7 />
    </div>
  );
}

function InfoItem1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Info Item">
      <Root9 />
    </div>
  );
}

function Body4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#768ea7] text-[14px]">Transfer method</p>
    </div>
  );
}

function Wrapper8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="wrapper">
      <Body4 />
    </div>
  );
}

function Root10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper8 />
    </div>
  );
}

function InfoKey2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Key">
      <Root10 />
    </div>
  );
}

function LeadingIcon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="leadingIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="leadingIcon">
          <path clipRule="evenodd" d={svgPaths.p114a7500} fill="var(--fill-0, #768EA7)" fillRule="evenodd" id="path" />
        </g>
      </svg>
    </div>
  );
}

function Root11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <LeadingIcon1 />
    </div>
  );
}

function InfoItemLeading() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0" data-name="_Info Item Leading">
      <Root11 />
    </div>
  );
}

function Leading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="leading">
      <InfoItemLeading />
    </div>
  );
}

function Body5() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px]">UPI</p>
    </div>
  );
}

function Wrapper9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="wrapper">
      <Body5 />
    </div>
  );
}

function Root12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Leading />
      <Wrapper9 />
    </div>
  );
}

function InfoValue2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Value">
      <Root12 />
    </div>
  );
}

function Pair2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="pair">
      <InfoKey2 />
      <InfoValue2 />
    </div>
  );
}

function Wrapper10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="wrapper">
      <Pair2 />
    </div>
  );
}

function Root13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper10 />
    </div>
  );
}

function InfoItem2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Info Item">
      <Root13 />
    </div>
  );
}

function Body6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#768ea7] text-[14px]">Fee Bearer</p>
    </div>
  );
}

function Wrapper11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="wrapper">
      <Body6 />
    </div>
  );
}

function Root14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper11 />
    </div>
  );
}

function InfoKey3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Key">
      <Root14 />
    </div>
  );
}

function Body7() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px]">Fee paid by customer</p>
    </div>
  );
}

function Wrapper12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="wrapper">
      <Body7 />
    </div>
  );
}

function Root15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper12 />
    </div>
  );
}

function InfoValue3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Value">
      <Root15 />
    </div>
  );
}

function Pair3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="pair">
      <InfoKey3 />
      <InfoValue3 />
    </div>
  );
}

function Wrapper13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="wrapper">
      <Pair3 />
    </div>
  );
}

function Root16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper13 />
    </div>
  );
}

function InfoItem3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Info Item">
      <Root16 />
    </div>
  );
}

function Body8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#768ea7] text-[14px]">Order ID</p>
    </div>
  );
}

function Wrapper14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="wrapper">
      <Body8 />
    </div>
  );
}

function Root17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper14 />
    </div>
  );
}

function InfoKey4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Key">
      <Root17 />
    </div>
  );
}

function Body9() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px]">--</p>
    </div>
  );
}

function Wrapper15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="wrapper">
      <Body9 />
    </div>
  );
}

function Root18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper15 />
    </div>
  );
}

function InfoValue4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Value">
      <Root18 />
    </div>
  );
}

function Pair4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="pair">
      <InfoKey4 />
      <InfoValue4 />
    </div>
  );
}

function Wrapper16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="wrapper">
      <Pair4 />
    </div>
  );
}

function Root19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper16 />
    </div>
  );
}

function InfoItem4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Info Item">
      <Root19 />
    </div>
  );
}

function Body10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#768ea7] text-[14px]">Payment ID</p>
    </div>
  );
}

function Wrapper17() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="wrapper">
      <Body10 />
    </div>
  );
}

function Root20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper17 />
    </div>
  );
}

function InfoKey5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Key">
      <Root20 />
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="icon-wrapper">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon-wrapper">
          <path d={svgPaths.p1aac0400} fill="var(--fill-0, #768EA7)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="iconButton">
      <IconWrapper3 />
    </div>
  );
}

function Root21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <IconButton3 />
    </div>
  );
}

function InfoItemTrailing1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="_Info Item Trailing">
      <Root21 />
    </div>
  );
}

function Body11() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px]">pay_HsdfhjaS35H22jjd</p>
      <InfoItemTrailing1 />
    </div>
  );
}

function Wrapper18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="wrapper">
      <Body11 />
    </div>
  );
}

function Root22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper18 />
    </div>
  );
}

function InfoValue5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Value">
      <Root22 />
    </div>
  );
}

function Pair5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="pair">
      <InfoKey5 />
      <InfoValue5 />
    </div>
  );
}

function Wrapper19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="wrapper">
      <Pair5 />
    </div>
  );
}

function Root23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper19 />
    </div>
  );
}

function InfoItem5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Info Item">
      <Root23 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2950da] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">More details</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path d={svgPaths.pbbf3600} fill="var(--fill-0, #2950DA)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="trailing-icon">
      <Icon />
    </div>
  );
}

function Wrapper20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrapper">
      <Label />
      <TrailingIcon />
    </div>
  );
}

function Root24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <Wrapper20 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Root24 />
    </div>
  );
}

function DrawerBody() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="drawer-body">
      <InfoItem />
      <InfoItem1 />
      <InfoItem2 />
      <InfoItem3 />
      <InfoItem4 />
      <InfoItem5 />
      <Link />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 40">
        <g id="Divider">
          <line id="Divider Line" stroke="var(--stroke-0, #B1C1D2)" strokeWidth="0.5" x2="340" y1="19.75" y2="19.75" />
        </g>
      </svg>
    </div>
  );
}

function DrawerFooter() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="drawer-footer">
      <Divider />
    </div>
  );
}

function DrawerSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="drawer-section">
      <DrawerHeader1 />
      <DrawerBody />
      <DrawerFooter />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2950da] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">view more</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path d={svgPaths.p2f260800} fill="var(--fill-0, #2950DA)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="trailing-icon">
      <Icon1 />
    </div>
  );
}

function Wrapper21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrapper">
      <Label1 />
      <TrailingIcon1 />
    </div>
  );
}

function Root25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <Wrapper21 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <Root25 />
    </div>
  );
}

function Trailing1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center relative shrink-0" data-name="trailing">
      <Link1 />
    </div>
  );
}

function DrawerHeader2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="drawer-header">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#192839] text-[18px]">Customer Details</p>
      <Trailing1 />
    </div>
  );
}

function Body12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#768ea7] text-[14px]">Email</p>
    </div>
  );
}

function Wrapper22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="wrapper">
      <Body12 />
    </div>
  );
}

function Root26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper22 />
    </div>
  );
}

function InfoKey6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Key">
      <Root26 />
    </div>
  );
}

function Body13() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px]">arvind@gmail.com</p>
    </div>
  );
}

function Wrapper23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="wrapper">
      <Body13 />
    </div>
  );
}

function Root27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper23 />
    </div>
  );
}

function InfoValue6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Value">
      <Root27 />
    </div>
  );
}

function Pair6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="pair">
      <InfoKey6 />
      <InfoValue6 />
    </div>
  );
}

function Wrapper24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="wrapper">
      <Pair6 />
    </div>
  );
}

function Root28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper24 />
    </div>
  );
}

function InfoItem6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Info Item">
      <Root28 />
    </div>
  );
}

function Body14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#768ea7] text-[14px]">Phone</p>
    </div>
  );
}

function Wrapper25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="wrapper">
      <Body14 />
    </div>
  );
}

function Root29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper25 />
    </div>
  );
}

function InfoKey7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Key">
      <Root29 />
    </div>
  );
}

function Body15() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px]">9882331122</p>
    </div>
  );
}

function Wrapper26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="wrapper">
      <Body15 />
    </div>
  );
}

function Root30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper26 />
    </div>
  );
}

function InfoValue7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="_Info Value">
      <Root30 />
    </div>
  );
}

function Pair7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="pair">
      <InfoKey7 />
      <InfoValue7 />
    </div>
  );
}

function Wrapper27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="wrapper">
      <Pair7 />
    </div>
  );
}

function Root31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper27 />
    </div>
  );
}

function InfoItem7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Info Item">
      <Root31 />
    </div>
  );
}

function DrawerBody1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="drawer-body">
      <InfoItem6 />
      <InfoItem7 />
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 40">
        <g id="Divider">
          <line id="Divider Line" stroke="var(--stroke-0, #B1C1D2)" strokeWidth="0.5" x2="340" y1="19.75" y2="19.75" />
        </g>
      </svg>
    </div>
  );
}

function DrawerFooter1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="drawer-footer">
      <Divider1 />
    </div>
  );
}

function DrawerSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="drawer-section">
      <DrawerHeader2 />
      <DrawerBody1 />
      <DrawerFooter1 />
    </div>
  );
}

function Trailing2() {
  return <div className="content-stretch flex flex-col h-[24px] items-start justify-center shrink-0" data-name="trailing" />;
}

function DrawerHeader3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="drawer-header">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#192839] text-[18px]">Other details</p>
      <Trailing2 />
    </div>
  );
}

function Body16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#768ea7] text-[14px]">Refund</p>
    </div>
  );
}

function Wrapper28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="wrapper">
      <Body16 />
    </div>
  );
}

function Root32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper28 />
    </div>
  );
}

function InfoKey8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="_Info Key">
      <Root32 />
    </div>
  );
}

function Body17() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center relative rounded-[1000px] shrink-0 w-full" data-name="body">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, pellentesque nec leo eget, vehicula egestas augue. Proin sodales, ante eget pharetra gravida, velit ligula venenatis augue...</p>
    </div>
  );
}

function Wrapper29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative self-stretch" data-name="wrapper">
      <Body17 />
    </div>
  );
}

function Root33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper29 />
    </div>
  );
}

function InfoValue8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="_Info Value">
      <Root33 />
    </div>
  );
}

function Pair8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="pair">
      <InfoKey8 />
      <InfoValue8 />
    </div>
  );
}

function Wrapper30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="wrapper">
      <Pair8 />
    </div>
  );
}

function Root34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="root">
      <Wrapper30 />
    </div>
  );
}

function InfoItem8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Info Item">
      <Root34 />
    </div>
  );
}

function DrawerBody2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="drawer-body">
      <InfoItem8 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2950da] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">Show more</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path d={svgPaths.pbbf3600} fill="var(--fill-0, #2950DA)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="trailing-icon">
      <Icon2 />
    </div>
  );
}

function Wrapper31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrapper">
      <Label2 />
      <TrailingIcon2 />
    </div>
  );
}

function Root35() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <Wrapper31 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Root35 />
    </div>
  );
}

function Divider2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 40">
        <g id="Divider">
          <line id="Divider Line" stroke="var(--stroke-0, #B1C1D2)" strokeWidth="0.5" x2="340" y1="19.75" y2="19.75" />
        </g>
      </svg>
    </div>
  );
}

function DrawerFooter2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="drawer-footer">
      <Link2 />
      <Divider2 />
    </div>
  );
}

function DrawerSection2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="drawer-section">
      <DrawerHeader3 />
      <DrawerBody2 />
      <DrawerFooter2 />
    </div>
  );
}

function DrawerTransactionsView() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name=".drawer / transactions-view">
      <DrawerSection />
      <DrawerSection1 />
      <DrawerSection2 />
    </div>
  );
}

function DrawerBody3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="drawer-body">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[20px] relative size-full">
          <DrawerTransactionsView />
        </div>
      </div>
    </div>
  );
}

function Wrapper32() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center justify-between min-h-px min-w-px relative w-full" data-name="wrapper">
      <DrawerHeader />
      <DrawerBody3 />
    </div>
  );
}

export default function TransactionDetails() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[8px] shadow-[0px_16px_48px_-4px_rgba(25,40,57,0.18)] size-full" data-name="Transaction Details">
      <Wrapper32 />
    </div>
  );
}