import svgPaths from "./svg-x8tc0dge13";
import clsx from "clsx";

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage5>
      <g id="Frame 2147238423">{children}</g>
    </BackgroundImage5>
  );
}
type BackgroundImage3Props = {
  text: string;
};

function BackgroundImage3({ children, text }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[14px] text-nowrap tracking-[-0.182px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundImage2() {
  return (
    <BackgroundImage4>
      <path d={svgPaths.p2d4a6700} fill="var(--fill-0, #2858FE)" id="Subtract" />
    </BackgroundImage4>
  );
}

function MoreHorizontalBackgroundImage() {
  return (
    <BackgroundImage6>
      <g id="more-horizontal">
        <path d={svgPaths.p28b02980} fill="var(--fill-0, #9F9F9F)" id="path" />
      </g>
    </BackgroundImage6>
  );
}
type TdBackgroundImageAndText1Props = {
  text: string;
};

function TdBackgroundImageAndText1({ text }: TdBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-end justify-center px-[24px] py-[16px] relative shrink-0 w-[168px]">
      <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[14px] text-nowrap text-right tracking-[-0.182px]">{text}</p>
    </div>
  );
}
type DetailsBackgroundImageAndTextProps = {
  text: string;
};

function DetailsBackgroundImageAndText({ text }: DetailsBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#058e49] text-[12px] text-nowrap tracking-[-0.156px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[156px]">
      <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[14px] text-nowrap tracking-[-0.182px]">{text}</p>
    </div>
  );
}
type TdBackgroundImageAndTextProps = {
  text: string;
};

function TdBackgroundImageAndText({ text }: TdBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[48px] items-center pl-[20px] pr-[24px] py-[16px] relative shrink-0 w-[168px]">
      <p className="font-['Inter:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#050505] text-[14px] text-nowrap tracking-[-0.4px]">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col items-end justify-center px-[24px] py-[16px] relative", additionalClassNames)}>
      <p className="font-['Inter:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap text-right tracking-[0.72px] uppercase">{text}</p>
    </div>
  );
}
type BackgroundImage1Props = {
  text: string;
  text1: string;
};

function BackgroundImage1({ text, text1 }: BackgroundImage1Props) {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline leading-[normal] not-italic relative shrink-0 text-nowrap">
      <p className="font-['Inter:Medium',sans-serif] relative shrink-0 text-[#050505] text-[14px] tracking-[-0.182px]">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] relative shrink-0 text-[#606c75] text-[12px] tracking-[-0.156px]">{text1}</p>
    </div>
  );
}

function BackgroundImage() {
  return (
    <BackgroundImage5>
      <g id="Frame 2147238422">
        <path d={svgPaths.p42ce500} fill="var(--fill-0, #9F9F9F)" id="Subtract" />
      </g>
    </BackgroundImage5>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[16px] text-nowrap tracking-[-0.528px]">{text}</p>
    </div>
  );
}

function Tr() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="tr">
      <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center pl-[18px] pr-0 py-[16px] relative self-stretch shrink-0" data-name="td">
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
          <BackgroundImage />
        </div>
      </div>
      <TdBackgroundImageAndText text="pay_LHgfdJ123" />
      <BackgroundImageAndText2 text="4567891230" />
      <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
        <div className="bg-[#e1f0e9] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[23px] shrink-0" data-name="content">
          <DetailsBackgroundImageAndText text="Captured" />
        </div>
      </div>
      <TdBackgroundImageAndText1 text="₹ 24,500.90" />
      <BackgroundImage3 text="3 days ago by Dharam Chauhan" />
      <div className="content-stretch flex flex-col h-[48px] items-end justify-center pl-[24px] pr-[26px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
        <MoreHorizontalBackgroundImage />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
          <div className="h-[32px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(247, 247, 248) 100%)" }}>
            <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] py-[16px] relative rounded-[inherit]">
              <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[16px] text-nowrap tracking-[-0.528px]">Payments</p>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1.5px_0px_1px_white,inset_0px_1.5px_0px_1px_white]" />
            <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
          </div>
          <BackgroundImageAndText text="Orders" />
          <BackgroundImageAndText text="Invoices" />
        </div>
      </div>
      <div className="bg-[#f8f8f8] relative rounded-[12px] shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
          <div className="h-[56px] relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[4px] h-[32px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                      <BackgroundImage />
                    </div>
                    <BackgroundImage1 text="All GRNs" text1="320" />
                  </div>
                  <div className="bg-white h-[32px] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip pl-[8px] pr-[10px] py-[6px] relative rounded-[inherit]">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <BackgroundImage4>
                          <path d={svgPaths.p2d4a6700} fill="var(--fill-0, #305EFF)" id="Subtract" />
                        </BackgroundImage4>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-baseline leading-[normal] not-italic relative shrink-0 text-[#305eff] text-nowrap">
                        <p className="font-['Inter:SemiBold',sans-serif] relative shrink-0 text-[14px] tracking-[-0.182px]">In Approval</p>
                        <p className="font-['Inter:Regular',sans-serif] relative shrink-0 text-[12px] tracking-[-0.156px]">45</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.02)]" />
                    <div aria-hidden="true" className="absolute border border-[#2858fe] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                  <div className="content-stretch flex gap-[4px] h-[32px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                      <BackgroundImage />
                    </div>
                    <BackgroundImage1 text="Created" text1="125" />
                  </div>
                  <div className="content-stretch flex gap-[4px] h-[32px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                      <BackgroundImage />
                    </div>
                    <BackgroundImage1 text="Invoiced" text1="64" />
                  </div>
                  <div className="content-stretch flex gap-[4px] h-[32px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                      <BackgroundImage />
                    </div>
                    <BackgroundImage1 text="Closed" text1="127" />
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="right-section">
                  <div className="bg-white relative rounded-[8px] shrink-0 size-[32px]">
                    <div className="content-stretch flex items-center justify-between overflow-clip px-[8px] py-0 relative rounded-[inherit] size-full">
                      <div className="relative shrink-0 size-[14px]" data-name="filter">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <g id="filter">
                            <path clipRule="evenodd" d={svgPaths.p3e900c80} fill="var(--fill-0, #050505)" fillRule="evenodd" id="path" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                  <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[180px]">
                    <div className="content-stretch flex items-center justify-between overflow-clip pl-[8px] pr-[10px] py-0 relative rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Frame">
                          <div className="absolute left-[calc(50%+0.06px)] size-[10.125px] top-[calc(50%+0.06px)] translate-x-[-50%] translate-y-[-50%]">
                            <div className="absolute inset-[-5.93%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.325 11.325">
                                <g id="Group 2147233780">
                                  <path d={svgPaths.p1a97c780} id="Vector" stroke="var(--stroke-0, #606C75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                                  <path d="M8.6625 8.6625L10.725 10.725" id="Vector_2" stroke="var(--stroke-0, #606C75)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">Search...</p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                        <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[12px] text-nowrap tracking-[-0.156px]">Column</p>
                        <BackgroundImage6>
                          <g id="trailing-icon">
                            <path clipRule="evenodd" d={svgPaths.p11e63280} fill="var(--fill-0, #050505)" fillRule="evenodd" id="path" />
                          </g>
                        </BackgroundImage6>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shadow-[0px_2px_2px_1px_rgba(65,65,65,0.04)] shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start mb-[-8px] overflow-clip relative shrink-0 w-full" data-name="table">
              <div className="relative shrink-0 w-full" data-name="tbody">
                <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start justify-center px-[2px] py-0 relative w-full">
                    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
                      <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="tr">
                        <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-full items-center pl-[18px] pr-0 py-[16px] relative shrink-0" data-name="td">
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                            <BackgroundImage />
                          </div>
                        </div>
                        <div className="content-stretch flex h-full items-center pl-[20px] pr-[24px] py-[16px] relative shrink-0 w-[168px]" data-name="td">
                          <p className="font-['Inter:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[0.72px] uppercase">Payment ID</p>
                        </div>
                        <div className="content-stretch flex flex-col h-full items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[156px]" data-name="td">
                          <p className="font-['Inter:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[0.72px] uppercase">Bank RRN</p>
                        </div>
                        <div className="content-stretch flex flex-col h-full items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
                          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="details">
                            <p className="font-['Inter:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[0.72px] uppercase">Status</p>
                          </div>
                        </div>
                        <BackgroundImageAndText1 text="Amount" additionalClassNames="h-full shrink-0 w-[168px]" />
                        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="td">
                          <div className="flex flex-col items-end justify-center size-full">
                            <BackgroundImageAndText1 text="Created" additionalClassNames="size-full" />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-full items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
                          <div className="relative shrink-0 size-[12px]" data-name="more-horizontal">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                              <g id="more-horizontal" opacity="0">
                                <path d={svgPaths.p28b02980} fill="var(--fill-0, #768EA7)" id="path" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="tr">
                          <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex items-center pl-[18px] pr-0 py-[16px] relative self-stretch shrink-0" data-name="td">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                              <BackgroundImage />
                            </div>
                          </div>
                          <TdBackgroundImageAndText text="pay_LHadsJ529" />
                          <BackgroundImageAndText2 text="6482937429" />
                          <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
                            <div className="bg-[#e1f0e9] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[23px] shrink-0" data-name="content">
                              <DetailsBackgroundImageAndText text="Captured" />
                            </div>
                          </div>
                          <TdBackgroundImageAndText1 text="₹ 21,312.12" />
                          <BackgroundImage3 text="a day ago by Saurav Rastogi" />
                          <div className="content-stretch flex flex-col h-[48px] items-end justify-center pl-[24px] pr-[26px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
                            <MoreHorizontalBackgroundImage />
                          </div>
                        </div>
                        <div className="bg-[rgba(23,42,76,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="tr">
                          <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex items-center pl-[18px] pr-0 py-[16px] relative self-stretch shrink-0" data-name="td">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <BackgroundImage2 />
                            </div>
                          </div>
                          <TdBackgroundImageAndText text="pay_LGadms271" />
                          <BackgroundImageAndText2 text="1242940202" />
                          <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
                            <div className="bg-[#e8edf8] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[23px] shrink-0" data-name="content">
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="details">
                                <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#077ef5] text-[12px] text-nowrap tracking-[-0.156px]">Authorised</p>
                              </div>
                            </div>
                          </div>
                          <TdBackgroundImageAndText1 text="₹ 18,750.50" />
                          <BackgroundImage3 text="2 weeks ago by Rama Krushna" />
                          <div className="content-stretch flex flex-col h-[48px] items-end justify-center pl-[24px] pr-[26px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
                            <MoreHorizontalBackgroundImage />
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="tr">
                          <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex items-center pl-[18px] pr-0 py-[16px] relative self-stretch shrink-0" data-name="td">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <BackgroundImage2 />
                            </div>
                          </div>
                          <TdBackgroundImageAndText text="pay_LHadsJ529" />
                          <BackgroundImageAndText2 text="6482937429" />
                          <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
                            <div className="bg-[#e1f0e9] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[23px] shrink-0" data-name="content">
                              <DetailsBackgroundImageAndText text="Captured" />
                            </div>
                          </div>
                          <TdBackgroundImageAndText1 text="₹ 15,450.75" />
                          <BackgroundImage3 text="3 days ago by Ashutosh Gupta" />
                          <div className="content-stretch flex flex-col h-[48px] items-end justify-center pl-[24px] pr-[26px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
                            <MoreHorizontalBackgroundImage />
                          </div>
                        </div>
                        <div className="bg-[rgba(23,42,76,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="tr">
                          <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex items-center pl-[18px] pr-0 py-[16px] relative self-stretch shrink-0" data-name="td">
                            <div className="content-stretch flex items-center relative shrink-0">
                              <BackgroundImage2 />
                            </div>
                          </div>
                          <TdBackgroundImageAndText text="pay_LKJdsm453" />
                          <BackgroundImageAndText2 text="9876543210" />
                          <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
                            <div className="bg-[#ffeae3] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[23px] shrink-0" data-name="content">
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="details">
                                <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e34144] text-[12px] text-nowrap tracking-[-0.156px]">Failed</p>
                              </div>
                            </div>
                          </div>
                          <TdBackgroundImageAndText1 text="₹ 12,300.00" />
                          <BackgroundImage3 text="1 week ago by Pingal Kakti" />
                          <div className="content-stretch flex flex-col h-[48px] items-end justify-center pl-[24px] pr-[26px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
                            <MoreHorizontalBackgroundImage />
                          </div>
                        </div>
                        <Tr />
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="tr">
                          <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex items-center pl-[18px] pr-0 py-[16px] relative self-stretch shrink-0" data-name="td">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                              <BackgroundImage />
                            </div>
                          </div>
                          <TdBackgroundImageAndText text="pay_LPIadJ890" />
                          <BackgroundImageAndText2 text="3216549870" />
                          <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
                            <div className="bg-[#e1f0e9] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[23px] shrink-0" data-name="content">
                              <DetailsBackgroundImageAndText text="Captured" />
                            </div>
                          </div>
                          <TdBackgroundImageAndText1 text="₹ 5,500.25" />
                          <BackgroundImage3 text="5 days ago by Anita Singh" />
                          <div className="content-stretch flex flex-col h-[48px] items-end justify-center pl-[24px] pr-[26px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
                            <MoreHorizontalBackgroundImage />
                          </div>
                        </div>
                        <Tr />
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="tr">
                          <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex items-center pl-[18px] pr-0 py-[16px] relative self-stretch shrink-0" data-name="td">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                              <BackgroundImage />
                            </div>
                          </div>
                          <TdBackgroundImageAndText text="pay_LQWads720" />
                          <BackgroundImageAndText2 text="7894561230" />
                          <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
                            <div className="bg-[#e1f0e9] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[23px] shrink-0" data-name="content">
                              <DetailsBackgroundImageAndText text="Captured" />
                            </div>
                          </div>
                          <TdBackgroundImageAndText1 text="₹ 8,750.00" />
                          <BackgroundImage3 text="2 days ago by Priya Mehta" />
                          <div className="content-stretch flex flex-col h-[48px] items-end justify-center pl-[24px] pr-[26px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
                            <MoreHorizontalBackgroundImage />
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="tr">
                          <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="content-stretch flex items-center pl-[18px] pr-0 py-[16px] relative self-stretch shrink-0" data-name="td">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                              <BackgroundImage />
                            </div>
                          </div>
                          <TdBackgroundImageAndText text="pay_LPIadJ890" />
                          <BackgroundImageAndText2 text="3216549870" />
                          <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="content">
                              <div className="h-[18px] relative shrink-0 w-[10px]" data-name="status">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
                                  <g id="status">
                                    <circle cx="5" cy="9" fill="var(--fill-0, #53A2F1)" id="status-dot" r="5" />
                                  </g>
                                </svg>
                              </div>
                              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="details">
                                <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[14px] text-nowrap tracking-[-0.182px]">Authorised</p>
                              </div>
                            </div>
                          </div>
                          <TdBackgroundImageAndText1 text="₹ 5,500.25" />
                          <BackgroundImage3 text="5 days ago by Anita Singh" />
                          <div className="content-stretch flex flex-col h-[48px] items-end justify-center pl-[24px] pr-[26px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
                            <MoreHorizontalBackgroundImage />
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="tr">
                          <div className="content-stretch flex items-center pl-[18px] pr-0 py-[16px] relative self-stretch shrink-0" data-name="td">
                            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                              <BackgroundImage />
                            </div>
                          </div>
                          <TdBackgroundImageAndText text="pay_LXYZabc987" />
                          <BackgroundImageAndText2 text="1122334455" />
                          <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
                            <div className="bg-[#e1f0e9] content-stretch flex items-center px-[8px] py-[3px] relative rounded-[23px] shrink-0" data-name="content">
                              <DetailsBackgroundImageAndText text="Captured" />
                            </div>
                          </div>
                          <TdBackgroundImageAndText1 text="₹ 15,600.00" />
                          <BackgroundImage3 text="1 week ago by Sameer Verma" />
                          <div className="content-stretch flex flex-col h-[48px] items-end justify-center pl-[24px] pr-[26px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
                            <MoreHorizontalBackgroundImage />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="tfooter">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[20px] py-[8px] relative w-full">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">Showing</p>
                      <div className="bg-white content-stretch flex gap-[2px] h-[28px] items-center justify-center pl-[8px] pr-[6px] py-[8px] relative rounded-[8px] shrink-0" data-name="button-xsmall">
                        <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">10</p>
                        <BackgroundImage6>
                          <g id="chevron-down">
                            <path clipRule="evenodd" d={svgPaths.p11e63280} fill="var(--fill-0, #606C75)" fillRule="evenodd" id="path" />
                          </g>
                        </BackgroundImage6>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">of 240</p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="pagination">
                      <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[28px]" data-name="button-xsmall">
                        <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <BackgroundImage5>
                          <g id="chevron-left">
                            <path clipRule="evenodd" d={svgPaths.p18afd780} fill="var(--fill-0, #606C75)" fillRule="evenodd" id="path" />
                          </g>
                        </BackgroundImage5>
                      </div>
                      <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[28px]" data-name="button-xsmall">
                        <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <BackgroundImage5>
                          <g id="chevron-right">
                            <path clipRule="evenodd" d={svgPaths.p2d2a9700} fill="var(--fill-0, #606C75)" fillRule="evenodd" id="path" />
                          </g>
                        </BackgroundImage5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1.5px_0px_1px_white,inset_0px_1.5px_0px_1px_rgba(255,255,255,0.7)]" />
        <div aria-hidden="true" className="absolute border border-[#e4e6e7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.08)]" />
      </div>
    </div>
  );
}