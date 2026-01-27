import svgPaths from "./svg-5n5ke8b4ip";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-[124px]">
      <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#192839] text-[18px]">Add Funds via UPI</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path d={svgPaths.p35e86340} fill="var(--fill-0, #2950DA)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="leading-icon">
      <Icon />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="css-g0mm18 flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2950da] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Edit</p>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrapper">
      <LeadingIcon />
      <Label />
    </div>
  );
}

function Root() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <Wrapper />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shrink-0" data-name="Link">
      <Root />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
        <Frame1 />
        <Link />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="css-ew64yg font-['Inter:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px]">How much would you like to add?</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
      <div className="css-g0mm18 flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#192839] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Change</p>
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="bg-[rgba(108,132,157,0.12)] content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="wrapper">
      <Label1 />
    </div>
  );
}

function Root1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
      <Wrapper1 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 relative shrink-0" data-name="Button">
      <Root1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] relative w-full">
          <Frame5 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Value() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="value">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[8px] relative w-full">
          <p className="css-ew64yg font-['Inter:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px]">₹ 1000.00</p>
        </div>
      </div>
    </div>
  );
}

function Leading() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-0 items-center min-h-px min-w-px relative" data-name="leading">
      <Value />
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white h-[48px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="field">
      <div aria-hidden="true" className="absolute border-[#e3eaf3] border-l border-r border-solid border-t inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[8px] relative size-full">
          <Leading />
        </div>
      </div>
    </div>
  );
}

function FormGroupBody() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="FormGroup-Body">
      <Field />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="body">
      <FormGroupBody />
    </div>
  );
}

function Root2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="root">
      <Body />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Input">
      <Root2 />
    </div>
  );
}

function InputGroupElement() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="_Input Group Element">
      <TextInput />
    </div>
  );
}

function InputGroupRow() {
  return (
    <div className="content-stretch flex items-start mb-[-1px] relative shrink-0 w-full" data-name="_Input Group Row">
      <InputGroupElement />
    </div>
  );
}

function Value1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="value">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[8px] relative w-full">
          <p className="css-ew64yg font-['Inter:Regular',sans-serif] leading-[24px] not-italic opacity-40 relative shrink-0 text-[#40566d] text-[16px]">Enter purpose</p>
        </div>
      </div>
    </div>
  );
}

function Leading1() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-0 items-center min-h-px min-w-px relative" data-name="leading">
      <Value1 />
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white h-[48px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="field">
      <div aria-hidden="true" className="absolute border border-[#e3eaf3] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[8px] relative size-full">
          <Leading1 />
        </div>
      </div>
    </div>
  );
}

function FormGroupBody1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="FormGroup-Body">
      <Field1 />
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="body">
      <FormGroupBody1 />
    </div>
  );
}

function Root3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="root">
      <Body1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Input">
      <Root3 />
    </div>
  );
}

function InputGroupElement1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="_Input Group Element">
      <TextInput1 />
    </div>
  );
}

function InputGroupRow1() {
  return (
    <div className="content-stretch flex items-start mb-[-1px] relative shrink-0 w-full" data-name="_Input Group Row">
      <InputGroupElement1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" data-name="container">
      <InputGroupRow />
      <InputGroupRow1 />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="wrapper">
      <Container />
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Inputs">
      <Wrapper2 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end justify-end min-h-px min-w-px relative" data-name="Main Content">
      <Heading />
      <Inputs />
    </div>
  );
}

function MainContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Main Content">
      <MainContent />
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Step 1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[4px] relative w-full">
          <MainContent1 />
        </div>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primary Button" style={{ backgroundImage: "linear-gradient(-14.7374deg, rgb(21, 102, 241) 54.842%, rgb(71, 147, 253) 98.573%)" }}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[6px] relative size-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.156px]">
            <p className="css-ew64yg leading-[normal]">{`Confirm & Proceed`}</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.2),inset_0px_-2px_0px_0px_rgba(255,255,255,0.2)]" />
      <div aria-hidden="true" className="absolute border border-[#0354e0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[13px] relative w-full">
          <Step />
          <PrimaryButton />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function WidgetReview() {
  return (
    <div className="bg-[#eaeeff] content-stretch flex flex-col items-start p-[4px] relative rounded-[8px] size-full" data-name="Widget - Review">
      <Frame3 />
      <Frame4 />
    </div>
  );
}