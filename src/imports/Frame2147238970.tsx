import svgPaths from "./svg-q9h43jlaao";
import clsx from "clsx";
type Frame2147238970HelperProps = {
  additionalClassNames?: string;
};

function Frame2147238970Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Frame2147238970HelperProps>) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="flex-none h-[291.883px] rotate-[180deg] scale-y-[-100%] w-[381.001px]">
        <div className="relative size-full">
          <div className="absolute inset-[-17.4%_-13.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482.574 393.456">
              {children}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("bg-white overflow-clip rounded-[100px] size-[20px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] leading-[18px] left-[calc(50%-3px)] not-italic text-[#2980e1] text-[12px] top-[calc(50%-9px)] tracking-[-0.156px] w-[6px]">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute left-[14px] size-[18px] top-[20px]" data-name="path">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p32c28e80} fill="var(--fill-0, #FDFDFD)" id="path" />
        </svg>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[14px] top-[76px] w-[239px]">
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
          <Text text="3" additionalClassNames="opacity-0 relative shrink-0" />
          <p className="font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fdfdfd] text-[18px] text-nowrap tracking-[-0.234px]">2 new disputes were raised</p>
          <Text text="1" additionalClassNames="absolute left-0 top-[3px]" />
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
          <Text text="3" additionalClassNames="opacity-0 relative shrink-0" />
          <p className="font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fdfdfd] text-[18px] text-nowrap tracking-[-0.234px]">
            {`Payment timeouts are the `}
            <br aria-hidden="true" />
            most common failure reason
          </p>
          <Text text="2" additionalClassNames="absolute left-0 top-[3px]" />
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
          <Text text="2" additionalClassNames="opacity-0 relative shrink-0" />
          <p className="font-['TASA_Orbiter_Display:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fdfdfd] text-[18px] text-nowrap tracking-[-0.234px]">
            {`UPI continues to perform `}
            <br aria-hidden="true" />
            {`strongly (99%), netbanking `}
            <br aria-hidden="true" />
            weakest (79%)
          </p>
          <Text text="3" additionalClassNames="absolute left-0 top-[2px]" />
        </div>
      </div>
    </div>
  );
}
