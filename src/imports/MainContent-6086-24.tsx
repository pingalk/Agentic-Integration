function Heading() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] relative w-full">
          <p className="css-ew64yg font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#222] text-[18px]">Congrats, funds added successfully!</p>
        </div>
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Main Content">
      <Heading />
    </div>
  );
}