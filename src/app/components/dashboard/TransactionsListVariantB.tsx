import React from 'react';
import clsx from "clsx";
import svgPaths from "../../../imports/svg-oyzbjsmmh7";
import imgGeminiGeneratedImageK30W93K30W93K30W19 from "figma:asset/a34d5728d95c39b20fd660ee602d74c17675bd80.png";

// --- Data ---
const transactions = [
  { id: "pay_LHadsJ529", rrn: "6482937429", status: "Captured", amount: "₹ 21,312.12", created: "a day ago by Saurav Rastogi" },
  { id: "pay_LGadms271", rrn: "1242940202", status: "Authorised", amount: "₹ 18,750.50", created: "2 weeks ago by Rama Krushna" },
  { id: "pay_LHadsJ529", rrn: "6482937429", status: "Captured", amount: "₹ 15,450.75", created: "3 days ago by Ashutosh Gupta" },
  { id: "pay_LKJdsm453", rrn: "9876543210", status: "Failed", amount: "₹ 12,300.00", created: "1 week ago by Pingal Kakti" },
  { id: "pay_LHgfdJ123", rrn: "4567891230", status: "Captured", amount: "₹ 24,500.90", created: "3 days ago by Dharam Chauhan" },
  { id: "pay_LPIadJ890", rrn: "3216549870", status: "Captured", amount: "₹ 5,500.25", created: "5 days ago by Anita Singh" },
  { id: "pay_LHgfdJ123", rrn: "4567891230", status: "Captured", amount: "₹ 24,500.90", created: "3 days ago by Dharam Chauhan" },
  { id: "pay_LQWads720", rrn: "7894561230", status: "Captured", amount: "₹ 8,750.00", created: "2 days ago by Priya Mehta" },
  { id: "pay_LPIadJ890", rrn: "3216549870", status: "Authorised", amount: "₹ 5,500.25", created: "5 days ago by Anita Singh", useDot: true },
  { id: "pay_LXYZabc987", rrn: "1122334455", status: "Captured", amount: "₹ 15,600.00", created: "1 week ago by Sameer Verma" },
];

interface TransactionsListProps {
    onViewDetails: (id: string) => void;
}

// --- Helper Components from Figma Import ---

type BackgroundImage9Props = {
  additionalClassNames?: string;
  children: React.ReactNode;
};

function BackgroundImage9({ children, additionalClassNames = "" }: BackgroundImage9Props) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(247, 247, 248) 100%)" }} className="basis-0 grow min-h-px min-w-px relative rounded-[12px] shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[20px] py-[16px] relative w-full">{children}</div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1.5px_0px_1px_white,inset_0px_1.5px_0px_1px_white]" />
      <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
    </div>
  );
}

type BackgroundImageAndText5Props = {
  text: string;
  children: React.ReactNode;
};

function BackgroundImageAndText5({ text, children }: BackgroundImageAndText5Props) {
  return (
    <div className="content-stretch flex flex-col gap-px items-start justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[12px] text-nowrap tracking-[0.72px] uppercase">{text}</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage7>
      <g id="Frame">{children}</g>
    </BackgroundImage7>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage7>
      <g id="Frame 2147238423">{children}</g>
    </BackgroundImage7>
  );
}

type BackgroundImage3Props = {
  text: string;
};

function BackgroundImage3({ text }: BackgroundImage3Props) {
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
    <BackgroundImage8>
      <g id="more-horizontal">
        <path d={svgPaths.p28b02980} fill="var(--fill-0, #9F9F9F)" id="path" />
      </g>
    </BackgroundImage8>
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
  status: string;
};

function DetailsBackgroundImageAndText({ text, status }: DetailsBackgroundImageAndTextProps) {
  const color = status === 'Failed' ? 'text-[#e34144]' : status === 'Authorised' ? 'text-[#077ef5]' : 'text-[#058e49]';
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className={clsx("font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap tracking-[-0.156px]", color)}>{text}</p>
    </div>
  );
}

type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
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

type BackgroundImageAndText3Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText3({ text, additionalClassNames = "" }: BackgroundImageAndText3Props) {
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
    <BackgroundImage7>
      <g id="Frame 2147238422">
        <path d={svgPaths.p42ce500} fill="var(--fill-0, #9F9F9F)" id="Subtract" />
      </g>
    </BackgroundImage7>
  );
}

type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center px-[12px] py-[6px] relative rounded-[8px] shrink-0">
      <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[16px] text-nowrap tracking-[-0.528px]">{text}</p>
    </div>
  );
}

type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0">
      <BackgroundImage5>
        <path d={svgPaths.p26bd9c00} id="Vector" stroke="var(--stroke-0, #D92D20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </BackgroundImage5>
      <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d92d20] text-[12px] text-nowrap tracking-[-0.156px]">{text}</p>
    </div>
  );
}

type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[14px]">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#050505] text-[23px] tracking-[-0.759px] w-full">
          <p className="leading-[normal]">{"₹"}</p>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#050505] text-[24px] text-nowrap tracking-[-0.792px]">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

type Component39BackgroundImageProps = {
  additionalClassNames?: string;
};

function Component39BackgroundImage({ additionalClassNames = "" }: Component39BackgroundImageProps) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex items-center justify-center right-[164.78px] size-[7.761px]", additionalClassNames)}>
      <div className="flex-none rotate-[90deg]">
        <div className="size-[7.761px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 7.7613 7.7613\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(2.3762e-17 0.38807 -0.38807 2.3762e-17 3.8807 3.8807)\\\'><stop stop-color=\\\'rgba(194,255,208,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(149,254,173,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(104,252,138,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
      </div>
    </div>
  );
}

type Group2147234129GeminiGeneratedImageK30W93K30W93K30WBackgroundImageProps = {
  additionalClassNames?: string;
};

function Group2147234129GeminiGeneratedImageK30W93K30W93K30WBackgroundImage({ additionalClassNames = "" }: Group2147234129GeminiGeneratedImageK30W93K30W93K30WBackgroundImageProps) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageK30W93K30W93K30W19} />
    </div>
  );
}

function ChevronRightBackgroundImage() {
  return (
    <BackgroundImage8>
      <g id="chevron-right">
        <path clipRule="evenodd" d={svgPaths.p361df540} fill="var(--fill-0, #606C75)" fillRule="evenodd" id="path" />
      </g>
    </BackgroundImage8>
  );
}

function TrailingIconBackgroundImage() {
  return (
    <BackgroundImage8>
      <g id="trailing-icon">
        <path clipRule="evenodd" d={svgPaths.p11e63280} fill="var(--fill-0, #050505)" fillRule="evenodd" id="path" />
      </g>
    </BackgroundImage8>
  );
}


function TransactionRowVariantB({ data, onViewDetails }: { data: typeof transactions[0], onViewDetails: (id: string) => void }) {
  const isSelected = data.id === "pay_LGadms271" || data.id === "pay_LHadsJ529" && data.rrn === "6482937429" || data.id === "pay_LKJdsm453"; 

  let bg = 'bg-[#e1f0e9]';
  if (data.status === 'Authorised') bg = 'bg-[#e8edf8]';
  if (data.status === 'Failed') bg = 'bg-[#ffeae3]';

  // Specific logic for the dot variation mentioned
  const useDot = (data as any).useDot;

  return (
    <div className={clsx("content-stretch flex items-start relative shrink-0 w-full hover:bg-slate-50 cursor-pointer transition-colors", isSelected ? "bg-[rgba(23,42,76,0)]" : "")} data-name="tr" onClick={() => onViewDetails(data.id)}>
      <div aria-hidden="true" className="absolute border-[#e4e6e7] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center pl-[18px] pr-0 py-[16px] relative self-stretch shrink-0" data-name="td">
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
          {isSelected ? <BackgroundImage2 /> : <BackgroundImage />}
        </div>
      </div>
      <TdBackgroundImageAndText text={data.id} />
      <BackgroundImageAndText4 text={data.rrn} />
      <div className="content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[128px]" data-name="td">
        {useDot ? (
             <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="content">
             <div className="h-[18px] relative shrink-0 w-[10px]" data-name="status">
               <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
                 <g id="status">
                   <circle cx="5" cy="9" fill="var(--fill-0, #53A2F1)" id="status-dot" r="5" />
                 </g>
               </svg>
             </div>
             <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="details">
               <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[14px] text-nowrap tracking-[-0.182px]">{data.status}</p>
             </div>
           </div>
        ) : (
            <div className={`${bg} content-stretch flex items-center px-[8px] py-[3px] relative rounded-[23px] shrink-0`} data-name="content">
                <DetailsBackgroundImageAndText text={data.status} status={data.status} />
            </div>
        )}
      </div>
      <TdBackgroundImageAndText1 text={data.amount} />
      <BackgroundImage3 text={data.created} />
      <div className="content-stretch flex flex-col h-[48px] items-end justify-center pl-[24px] pr-[26px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
        <MoreHorizontalBackgroundImage />
      </div>
    </div>
  );
}

export const TransactionsListVariantB: React.FC<TransactionsListProps> = ({ onViewDetails }) => {
  return (
    <div className="content-stretch flex flex-col gap-[84px] items-start relative size-full max-w-7xl mx-auto p-8" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Top content">
        {/* Header Section */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-['TASA_Orbiter_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[20px] text-nowrap tracking-[-0.1px]">Transactions Overview</p>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">updated 28m ago</p>
              <BackgroundImage8>
                <g id="refresh">
                  <g id="path">
                    <path d={svgPaths.p3f1141b2} fill="var(--fill-0, #606C75)" />
                    <path d={svgPaths.p1cdb4600} fill="var(--fill-0, #606C75)" />
                  </g>
                </g>
              </BackgroundImage8>
            </div>
            <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center pl-[12px] pr-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="wrapper">
              <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[12px] text-nowrap tracking-[-0.156px]">Today</p>
              <TrailingIconBackgroundImage />
            </div>
            <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center pl-[12px] pr-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="wrapper">
              <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[12px] text-nowrap tracking-[-0.156px]">Documentation</p>
              <BackgroundImage8>
                <g id="arrow-up-right">
                  <path d={svgPaths.p18ee7700} fill="var(--fill-0, #050505)" id="path" />
                </g>
              </BackgroundImage8>
            </div>
          </div>
        </div>

        {/* Top Cards Section */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            
            {/* Collected Amount Card */}
          <div className="h-[164px] relative rounded-[12px] shrink-0 w-full" data-name="39" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(247, 247, 248) 100%)" }}>
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute bottom-[-126.07px] flex h-[181.332px] items-center justify-center right-[-165.67px] w-[498.669px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none rotate-[350.679deg]">
                  <div className="h-[103.609px] relative w-[488.336px]">
                    <div className="absolute inset-[-138.15%_-29.31%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 774.598 389.871">
                        <g filter="url(#filter0_f_50_9410)" id="Ellipse 9335">
                          <ellipse cx="387.299" cy="194.935" fill="var(--fill-0, #B8E1FF)" rx="244.168" ry="51.8045" />
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="389.871" id="filter0_f_50_9410" width="774.598" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_50_9410" stdDeviation="71.5654" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center justify-between left-[20px] right-[20px] top-[16px]">
                <BackgroundImageAndText5 text="Collected amount">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 1">
                    <line id="Line 1465" opacity="0.4" stroke="var(--stroke-0, #606C75)" strokeDasharray="3 3" x2="140" y1="0.5" y2="0.5" />
                  </svg>
                </BackgroundImageAndText5>
                <div className="flex flex-row items-center self-stretch">
                  <div className="content-stretch flex h-full items-end pb-[1.5px] pt-0 px-0 relative shrink-0">
                    <ChevronRightBackgroundImage />
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[948.2px] top-[16px]">
                <div className="absolute flex h-[87.064px] items-center justify-center left-[948.2px] top-[16px] w-[95.645px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="flex-none rotate-[184.077deg] scale-y-[-100%] skew-x-[5.967deg]">
                    <Group2147234129GeminiGeneratedImageK30W93K30W93K30WBackgroundImage additionalClassNames="h-[82.55px] w-[81.408px]" />
                  </div>
                </div>
                <div className="absolute flex h-[124.257px] items-center justify-center left-[994.64px] top-[42.43px] w-[111.544px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="flex-none rotate-[144.174deg] scale-y-[-100%] skew-x-[5.967deg]">
                    <Group2147234129GeminiGeneratedImageK30W93K30W93K30WBackgroundImage additionalClassNames="h-[86.005px] w-[84.815px]" />
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[8px] h-[95px] items-start justify-center left-[20px] top-[52px] w-[269.441px]">
                <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
                  <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                    <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[31px] text-nowrap tracking-[-1.023px]">₹</p>
                  </div>
                  <p className="font-['TASA_Orbiter_Deck:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[54px] text-nowrap tracking-[-1.782px]">1,20,000.00</p>
                </div>
                <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0">
                  <BackgroundImage5>
                    <path d={svgPaths.pbc1f4c0} id="Vector" stroke="var(--stroke-0, #01A653)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </BackgroundImage5>
                  <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#01a653] text-[12px] text-nowrap tracking-[-0.156px]">20%</p>
                </div>
              </div>
              <div className="absolute blur-[17.257px] filter h-[66.431px] left-[253.89px] rounded-[9.647px] top-[222.97px] w-[118.78px]" />
              <div className="absolute bottom-[63.01px] right-[12.74px] size-[7.761px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 7.7613 7.7613\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(2.3762e-17 0.38807 -0.38807 2.3762e-17 3.8807 3.8807)\\\'><stop stop-color=\\\'rgba(194,255,208,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(149,254,173,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(104,252,138,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
              <div className="absolute bottom-[70.77px] right-[20.51px] size-[7.761px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 7.7613 7.7613\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(2.3762e-17 0.38807 -0.38807 2.3762e-17 3.8807 3.8807)\\\'><stop stop-color=\\\'rgba(194,255,208,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(149,254,173,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(104,252,138,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
              <Component39BackgroundImage additionalClassNames="bottom-[19.55px]" />
              <div className="absolute bottom-[70.77px] right-[12.74px] size-[7.761px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 7.7613 7.7613\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(2.3762e-17 0.38807 -0.38807 2.3762e-17 3.8807 3.8807)\\\'><stop stop-color=\\\'rgba(194,255,208,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(149,254,173,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(104,252,138,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
              <Component39BackgroundImage additionalClassNames="bottom-[11.79px]" />
              <div className="absolute contents left-[931px] top-[77.4px]">
                <div className="absolute h-[143.437px] left-[931px] top-[77.4px] w-[178.923px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178.923 143.437">
                    <path d={svgPaths.p2b313cf0} fill="var(--fill-0, #75A3FF)" id="Rectangle 1891601673" stroke="url(#paint0_linear_57_9184)" strokeWidth="1.19408" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_57_9184" x1="185.186" x2="93.0945" y1="12.1968" y2="193.452">
                        <stop stopColor="#6F6F6F" />
                        <stop offset="0.0817308" stopColor="#ECECEC" />
                        <stop offset="0.153846" stopColor="#FEFEFE" />
                        <stop offset="0.25" stopColor="#4B4B4B" />
                        <stop offset="0.355769" stopColor="white" />
                        <stop offset="0.557692" stopColor="#C4C4C4" />
                        <stop offset="0.754808" stopColor="#666666" />
                        <stop offset="0.831731" stopColor="#3C3C3C" />
                        <stop offset="0.918269" stopColor="white" />
                        <stop offset="1" stopColor="#666666" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute h-[143.813px] left-[931.71px] top-[78.14px] w-[179.325px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.325 143.813">
                    <path d={svgPaths.p163f6200} fill="var(--fill-0, #75A3FF)" id="Rectangle 1891601675" />
                  </svg>
                </div>
                <div className="absolute h-[108.928px] left-[945.36px] top-[95.58px] w-[152.031px]">
                  <div className="absolute inset-[-21.07%_-15.1%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197.938 154.835">
                      <g filter="url(#filter0_f_57_9182)" id="Rectangle 1891601674">
                        <path d={svgPaths.p34deac00} fill="var(--fill-0, #A7E6F9)" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="154.835" id="filter0_f_57_9182" width="197.938" x="0" y="-6.06955e-07">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_57_9182" stdDeviation="11.4767" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute flex h-[73.762px] items-center justify-center left-[116.06px] mix-blend-overlay top-[173.62px] w-[67.224px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="flex-none rotate-[30.917deg]">
                  <BackgroundImage9 additionalClassNames="h-[60.89px] w-[41.891px]">
                    <g id="Ellipse 9451" style={{ mixBlendMode: "overlay" }}></g>
                  </BackgroundImage9>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_0px_2px_white,inset_0px_-1.5px_0px_1px_white]" />
            <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
          </div>

          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full overflow-x-auto">
              <BackgroundImage6>
                <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <BackgroundImage5>
                        <path d={svgPaths.p3fa96280} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                      </BackgroundImage5>
                      <BackgroundImageAndText5 text="Refunds">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 1">
                          <line id="Line 1465" opacity="0.4" stroke="var(--stroke-0, #606C75)" strokeDasharray="3 3" x2="61" y1="0.5" y2="0.5" />
                        </svg>
                      </BackgroundImageAndText5>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex h-full items-end pb-[1.5px] pt-0 px-0 relative shrink-0">
                        <ChevronRightBackgroundImage />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                      <BackgroundImageAndText text="5,421" />
                      <BackgroundImageAndText1 text="2%" />
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">3 processed</p>
                  </div>
                </div>
              </BackgroundImage6>
              <BackgroundImage6>
                <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[143.167px]">
                      <BackgroundImage5>
                        <path d={svgPaths.p232aa180} id="Vector" stroke="var(--stroke-0, #050505)" strokeWidth="1.2" />
                        <path d={svgPaths.p27165aa0} fill="var(--fill-0, #050505)" id="Vector_2" />
                        <path d={svgPaths.p3ee2c000} fill="var(--fill-0, #050505)" id="Vector_3" />
                      </BackgroundImage5>
                      <BackgroundImageAndText5 text="Disputes">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 1">
                          <line id="Line 1465" opacity="0.4" stroke="var(--stroke-0, #606C75)" strokeDasharray="3 3" x2="64" y1="0.5" y2="0.5" />
                        </svg>
                      </BackgroundImageAndText5>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex h-full items-end pb-[1.5px] pt-0 px-0 relative shrink-0">
                        <ChevronRightBackgroundImage />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                      <BackgroundImageAndText text="652" />
                      <BackgroundImageAndText1 text="2%" />
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">
                      <p className="font-['Inter:Medium',sans-serif] relative shrink-0">0 open</p>
                      <p className="font-['Inter:Regular',sans-serif] relative shrink-0">·</p>
                      <p className="font-['Inter:Medium',sans-serif] relative shrink-0">0 under review</p>
                    </div>
                  </div>
                </div>
              </BackgroundImage6>
              <BackgroundImage6>
                <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[133.167px]">
                      <BackgroundImage7>
                        <g clipPath="url(#clip0_50_9347)" id="Frame">
                          <path d={svgPaths.p32395700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_50_9347">
                            <rect fill="white" height="16" width="16" />
                          </clipPath>
                        </defs>
                      </BackgroundImage7>
                      <BackgroundImageAndText5 text="Failed">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
                          <line id="Line 1465" opacity="0.4" stroke="var(--stroke-0, #606C75)" strokeDasharray="3 3" x2="44" y1="0.5" y2="0.5" />
                        </svg>
                      </BackgroundImageAndText5>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex h-full items-end pb-[1.5px] pt-0 px-0 relative shrink-0">
                        <ChevronRightBackgroundImage />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
                    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
                      <div className="content-stretch flex items-start relative shrink-0">
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#050505] text-[24px] text-nowrap tracking-[-0.792px]">
                          <p className="leading-[normal]">03</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0">
                        <BackgroundImage5>
                          <path d={svgPaths.p26bd9c00} id="Vector" stroke="var(--stroke-0, #008743)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </BackgroundImage5>
                        <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#008743] text-[12px] text-nowrap tracking-[-0.156px]">89%</p>
                      </div>
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">Payments</p>
                  </div>
                </div>
              </BackgroundImage6>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table Section */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Table Content">
        {/* Tabs */}
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
            <div className="h-[32px] relative rounded-[8px] shrink-0" style={{ backgroundImage: "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 71.787%, rgb(247, 247, 248) 100%)" }}>
              <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[12px] py-[16px] relative rounded-[inherit]">
                <p className="font-['Inter:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#050505] text-[16px] text-nowrap tracking-[-0.528px]">Payments</p>
              </div>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1.5px_0px_1px_white,inset_0px_1.5px_0px_1px_white]" />
              <div aria-hidden="true" className="absolute border border-[#dee1e3] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
            </div>
            <BackgroundImageAndText2 text="Orders" />
            <BackgroundImageAndText2 text="Invoices" />
          </div>
        </div>
        
        {/* Table Container */}
        <div className="bg-[#f8f8f8] relative rounded-[12px] shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start overflow-x-auto relative rounded-[inherit] w-full">
            {/* Filter Bar */}
            <div className="h-[56px] relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 overflow-x-auto">
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
                          <TrailingIconBackgroundImage />
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Table Rows */}
            <div className="content-stretch flex flex-col items-start pb-[8px] pt-0 px-0 relative shadow-[0px_2px_2px_1px_rgba(65,65,65,0.04)] shrink-0 w-full bg-white">
              <div className="content-stretch flex flex-col items-start mb-[-8px] overflow-clip relative shrink-0 w-full" data-name="table">
                <div className="relative shrink-0 w-full" data-name="tbody">
                  <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-start justify-center px-[2px] py-0 relative w-full">
                      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
                        
                        {/* Table Header */}
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
                          <BackgroundImageAndText3 text="Amount" additionalClassNames="h-full shrink-0 w-[168px]" />
                          <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="td">
                            <div className="flex flex-col items-end justify-center size-full">
                              <BackgroundImageAndText3 text="Created" additionalClassNames="size-full" />
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-full items-start justify-center px-[24px] py-[16px] relative shrink-0 w-[72px]" data-name="td">
                            <BackgroundImage9 additionalClassNames="shrink-0 size-[12px]">
                              <g id="more-horizontal" opacity="0">
                                <path d={svgPaths.p28b02980} fill="var(--fill-0, #768EA7)" id="path" />
                              </g>
                            </BackgroundImage9>
                          </div>
                        </div>

                        {/* Rows */}
                        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                            {transactions.map((tx, i) => (
                                <TransactionRowVariantB key={i} data={tx} onViewDetails={onViewDetails} />
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="relative shrink-0 w-full" data-name="tfooter">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[20px] py-[8px] relative w-full">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                        <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">Showing</p>
                        <div className="bg-white content-stretch flex gap-[2px] h-[28px] items-center justify-center pl-[8px] pr-[6px] py-[8px] relative rounded-[8px] shrink-0" data-name="button-xsmall">
                          <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">10</p>
                          <BackgroundImage8>
                            <g id="chevron-down">
                              <path clipRule="evenodd" d={svgPaths.p11e63280} fill="var(--fill-0, #606C75)" fillRule="evenodd" id="path" />
                            </g>
                          </BackgroundImage8>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#606c75] text-[12px] text-nowrap tracking-[-0.156px]">of 240</p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="pagination">
                        <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[28px]" data-name="button-xsmall">
                          <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <BackgroundImage7>
                            <g id="chevron-left">
                              <path clipRule="evenodd" d={svgPaths.p18afd780} fill="var(--fill-0, #606C75)" fillRule="evenodd" id="path" />
                            </g>
                          </BackgroundImage7>
                        </div>
                        <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[28px]" data-name="button-xsmall">
                          <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <BackgroundImage7>
                            <g id="chevron-right">
                              <path clipRule="evenodd" d={svgPaths.p2d2a9700} fill="var(--fill-0, #606C75)" fillRule="evenodd" id="path" />
                            </g>
                          </BackgroundImage7>
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
    </div>
  );
}
