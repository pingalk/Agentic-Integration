export default function SuccessCard() {
  return (
    <div className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.1)] border-solid not-italic overflow-clip relative rounded-[12px] size-full" data-name="Success Card">
      <div className="absolute css-g0mm18 flex flex-col font-['TASA_Orbiter_Display:SemiBold',sans-serif] justify-end leading-[0] left-[75px] text-[#192839] text-[32px] text-right top-[169px] translate-x-[-100%] translate-y-[-100%]">
        <p className="css-ew64yg leading-[38px]">98%</p>
      </div>
      <p className="absolute css-ew64yg font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[0] left-[12px] text-[#40566d] text-[20px] top-[15px] tracking-[-0.26px]">
        <span className="leading-[28px]">
          {`Your payment success rate `}
          <br aria-hidden="true" />
          {`is `}
        </span>
        <span className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[28px] text-[#00a251]">healthy</span>
      </p>
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] leading-[16px] left-[12px] text-[#768ea7] text-[12px] top-[111px] tracking-[0.24px]">SUCCESS RATE</p>
    </div>
  );
}