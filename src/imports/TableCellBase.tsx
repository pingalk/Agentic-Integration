function Wrapper() {
  return (
    <div className="bg-[rgba(18,145,208,0.09)] content-stretch flex gap-[4px] h-[20px] items-center px-[8px] relative rounded-[1000px] shrink-0" data-name="wrapper">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f78ad] text-[12px]">Refunded</p>
    </div>
  );
}

function Root() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="root">
      <Wrapper />
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Badge">
      <Root />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="content">
      <Badge />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.5 1">
          <g id="DividerRow">
            <line id="Divider Line" stroke="var(--stroke-0, #6C849D)" strokeOpacity="0.18" x2="106.5" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0 w-full" data-name="wrapper">
      <Container />
      <DividerRow />
    </div>
  );
}

function Root1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="root">
      <Wrapper1 />
    </div>
  );
}

export default function TableCellBase() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative size-full" data-name="Table Cell Base">
      <Root1 />
    </div>
  );
}