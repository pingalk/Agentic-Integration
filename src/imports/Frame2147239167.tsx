export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[30px] not-italic text-[#40566d] top-[30px] w-[353px]" data-name="Block 1">
        <p className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] min-w-full relative shrink-0 text-[20px] w-[min-content]">Status of payment: pay_AbC1dE2fG3hI</p>
        <ul className="block font-['Inter:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 text-[0px] w-[min-content]">
          <li className="leading-[28px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
            <span>{`I've analyzed the screenshot and located the transaction `}</span>
            <span className="font-['Inter:SemiBold',sans-serif] not-italic">{`using the bank reference number (Bank RRN). `}</span>
          </li>
        </ul>
        <ul className="block font-['Inter:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 text-[0px] w-[min-content]">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
            <span className="font-['Inter:SemiBold',sans-serif] leading-[24px] not-italic text-[#40566d]">The payment failed because the transaction timed out.</span>
            <span className="leading-[28px]">{` This typically means the customer didn't enter their UPI PIN or approve the transaction on their app within the time limit.`}</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[28px] text-[16px]">The payment was from Anita Patel, who is a repeat customer.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}