import svgPaths from "./svg-uwm9j1e8bn";

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
          <path d={svgPaths.p2b3e1a00} fill="var(--fill-0, #768EA7)" id="Union" />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="leading-icon">
          <path d={svgPaths.p3a6af000} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="bg-[#00a251] content-stretch flex gap-[4px] h-[24px] items-center px-[12px] relative rounded-[1000px] shrink-0" data-name="wrapper">
      <LeadingIcon />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-white">Failed</p>
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
      <p className="css-4hzbpn flex-[1_0_0] font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#40566d] text-[18px] text-center">{`The payment failed due to insufficient funds in the customer's bank account.`}</p>
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

export default function DrawerHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="_Drawer Header" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 380 284\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(4.0279e-16 -28.4 55.842 -1.9123e-14 190 284)\\\'><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(18,145,208,0.09)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <Root2 />
    </div>
  );
}