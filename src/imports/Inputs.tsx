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

function Root() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="root">
      <Body />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Input">
      <Root />
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

function Root1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="root">
      <Body1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Input">
      <Root1 />
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

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="wrapper">
      <Container />
    </div>
  );
}

export default function Inputs() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Inputs">
      <Wrapper />
    </div>
  );
}