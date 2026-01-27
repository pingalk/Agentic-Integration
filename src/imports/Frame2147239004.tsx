import svgPaths from "./svg-9ps2js1fbf";
import clsx from "clsx";
import imgImage25027 from "figma:asset/24cdf1dcfebcb810bf05f4622c59ba8895532270.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-[1167.59px] items-center justify-center translate-x-[-50%] translate-y-[-50%] w-[1168.089px]", additionalClassNames)}>
      {children}
    </div>
  );
}
type MainValueContainerTextProps = {
  text: string;
};

function MainValueContainerText({ text }: MainValueContainerTextProps) {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0">
      <p className="font-['TASA_Orbiter_Display:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#192839] text-[20px] text-nowrap text-right">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-baseline opacity-[0.64] relative shrink-0">
      <p className="font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#192839] text-[14px] text-nowrap text-right">{text}</p>
    </div>
  );
}

function Helper() {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px mix-blend-overlay relative shrink-0">
      <div className="flex-none rotate-[90deg] size-full">
        <div className="backdrop-blur-[48.457px] backdrop-filter bg-gradient-to-b from-[rgba(255,255,255,0.2)] relative size-full to-[110.67%] to-[rgba(255,255,255,0.2)] via-[31.127%] via-[rgba(4,9,20,0.2)]">
          <div aria-hidden="true" className="absolute border-[0px_0px_1.938px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
type FractalGlassProps = {
  additionalClassNames?: string;
};

function FractalGlass({ additionalClassNames = "" }: FractalGlassProps) {
  return (
    <div className={clsx("bg-[rgba(168,168,168,0.02)] content-stretch flex h-[953.361px] items-start overflow-clip relative w-[953.714px]", additionalClassNames)}>
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <Helper />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_1.938px_1.938px_0.969px_0px_rgba(255,255,255,0.3)]" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white border border-[#1667f2] border-solid overflow-clip relative rounded-[10px] size-full">
      <div className="absolute inset-[calc(-29.95%-1px)_calc(-39.84%-1px)_calc(-0.21%-1px)_calc(57.66%-1px)]">
        <div className="absolute inset-[-21.21%_-12.12%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520.69 341.067">
            <g filter="url(#filter0_f_7_2887)" id="Vector 16">
              <path d={svgPaths.pd204a80} fill="var(--fill-0, #82C1FA)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="341.067" id="filter0_f_7_2887" width="520.691" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_7_2887" stdDeviation="25.3933" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Wrapper additionalClassNames="left-[calc(50%-285.96px)] top-[calc(50%+283.8px)]">
        <div className="flex-none rotate-[345.006deg]">
          <FractalGlass />
        </div>
      </Wrapper>
      <Wrapper additionalClassNames="left-[calc(50%+174.05px)] top-[calc(50%+314.8px)]">
        <div className="flex-none rotate-[194.994deg] scale-y-[-100%]">
          <FractalGlass additionalClassNames="opacity-50" />
        </div>
      </Wrapper>
      <div className="absolute bottom-[5px] h-[129px] right-[-2px] w-[139px]" data-name="image 25027">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25027} />
      </div>
      <div className="absolute bottom-[21px] content-stretch flex flex-col gap-[8px] items-start left-[19px] w-[271px]">
        <div className="content-stretch flex gap-[45px] items-end relative shrink-0 w-full">
          <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#768ea7] text-[14px] text-nowrap text-right">payments collected</p>
          <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
            <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
              <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="_AmountBase">
                <Text text="₹" />
                <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
                  <MainValueContainerText text="13,000" />
                  <Text text=".00" />
                </div>
                <p className="absolute font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-nowrap text-right top-0 translate-x-[-100%]">INR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[46px] items-center relative shrink-0 w-full">
          <p className="font-['Inter:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#768ea7] text-[14px] text-nowrap text-right">available balance</p>
          <div className="content-stretch flex items-end justify-end relative shrink-0" data-name="Amount">
            <div className="content-stretch flex items-baseline relative shrink-0" data-name="root">
              <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0" data-name="_AmountBase">
                <Text text="₹" />
                <div className="content-stretch flex items-baseline relative shrink-0" data-name="value-container">
                  <MainValueContainerText text="1,00,000" />
                  <Text text=".00" />
                </div>
                <p className="absolute font-['Inter:Regular',sans-serif] leading-[14px] left-[21px] not-italic opacity-0 text-[#192839] text-[10px] text-nowrap text-right top-0 translate-x-[-100%]">INR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[28px] left-[19px] not-italic text-[0px] text-[20px] text-black text-nowrap top-[17px] tracking-[-0.26px]">
        <span className="text-[#40566d]">Payment volumes</span> <span className="font-['TASA_Orbiter_Display:SemiBold',sans-serif]">higher</span> <span className="text-[#40566d]">than usual today</span>
      </p>
      <div className="absolute bg-[rgba(0,0,0,0.04)] border-[0.313px] border-solid border-white left-[368px] overflow-clip rounded-[62.5px] size-[20px] top-[23px]" data-name="CTA">
        <div className="absolute bg-[#40566d] border-[0.625px] border-black border-solid inset-[-0.31px] rounded-[71.429px] shadow-[0px_1.25px_2.5px_0px_rgba(0,0,0,0.1)]">
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1.25px_0px_0px_rgba(255,255,255,0.2),inset_0px_1.25px_0px_0px_rgba(255,255,255,0.2)]" />
        </div>
        <div className="absolute flex items-center justify-center left-1/2 size-[10px] top-[4.69px] translate-x-[-50%]">
          <div className="flex-none rotate-[180deg]">
            <div className="relative size-[10px]" data-name="Frame">
              <div className="absolute inset-[0_-13.75%_-20%_-13.75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7502 12.0003">
                  <g id="Frame">
                    <g filter="url(#filter0_d_36_1803)" id="Vector">
                      <path d={svgPaths.p24bd8b00} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p2db96800} stroke="var(--stroke-0, white)" strokeWidth="0.125" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="11.5003" id="filter0_d_36_1803" width="12.7502" x="0" y="0.499928">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="1.25" />
                      <feGaussianBlur stdDeviation="1.25" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_36_1803" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_36_1803" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}