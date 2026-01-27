import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

// --- Visual Components ---

export function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[8px] relative size-full">{children}</div>
    </div>
  );
}

export function Value({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[8px] pr-0 py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}

// Updated Radio Button Components based on Figma Import
export function RadioWrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="radio">{children}</g>
      </svg>
    </div>
  );
}

export function RadioSelected() {
  return (
    <RadioWrapper>
      <circle cx="8" cy="8" fill="var(--fill-0, #305EFF)" id="radio-background" r="8" />
      <circle cx="8" cy="8" fill="var(--fill-0, white)" id="radio-center" r="3" />
    </RadioWrapper>
  );
}

export function RadioUnselected() {
  return (
    <RadioWrapper>
      <circle cx="8" cy="8" id="radio-background" r="7.25" stroke="var(--stroke-0, #CBD5E2)" strokeWidth="1.5" />
    </RadioWrapper>
  );
}

export function LabelText({ text }: { text: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#40566d] text-[14px]">{text}</p>
    </div>
  );
}

// Reusable Button
export function ProceedButton({ onClick }: { onClick: () => void }) {
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-2 cursor-pointer" onClick={onClick}>
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
                <div className="basis-0 bg-[#18181b] hover:bg-[#2e2e33] transition-colors grow h-[36px] min-h-px min-w-px relative rounded-[4px] shrink-0">
                    <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-0 relative size-full">
                            <div className="content-stretch flex items-center justify-center relative shrink-0">
                                <div className="flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
                                    <p className="leading-[20px]">Proceed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Summary Row Component for Review Step
export const SummaryRow = ({ title, subtext, onClickChange, actionLabel = "Change" }: any) => {
    return (
        <div className="w-full border-b border-slate-100 last:border-0">
            <div className="bg-white relative shrink-0 w-full rounded-[inherit] overflow-hidden">
                <div className="content-stretch flex items-start justify-between px-[4px] py-[12px] relative w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 grow">
                        <p className="font-['Inter:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#222] text-[14px] text-nowrap">{title}</p>
                        <p className="font-['Inter:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#222] text-[12px] text-nowrap opacity-70">
                            {subtext}
                        </p>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer" onClick={onClickChange}>
                        <div className="content-stretch flex items-center justify-center relative shrink-0">
                            <div className="bg-[rgba(108,132,157,0.12)] hover:bg-[rgba(108,132,157,0.2)] transition-colors content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[4px] shrink-0">
                                <div className="flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2950da] text-[12px] text-center text-nowrap">
                                    <p className="leading-[18px]">{actionLabel}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Stepper Components ---

export const StepperIcon = ({ state, stepNumber, isLast }: { state: 'completed' | 'active' | 'pending', stepNumber: number, isLast: boolean }) => {
    return (
        <div className="relative flex flex-col items-center h-full w-[24px]">
             {/* Icon Circle */}
             <div className={`
                 relative z-10 flex items-center justify-center w-[24px] h-[24px] rounded-full text-[12px] font-bold transition-colors duration-300
                 ${state === 'completed' ? 'bg-black text-white' : ''}
                 ${state === 'active' ? 'bg-black text-white' : ''}
                 ${state === 'pending' ? 'bg-transparent border border-[#cbd5e1] text-[#94a3b8]' : ''}
             `}>
                 {state === 'completed' ? (
                     <Check size={14} strokeWidth={3} />
                 ) : (
                     <span>{stepNumber}</span>
                 )}
             </div>

             {/* Vertical Connector Line */}
             {!isLast && (
                 <div className={`
                    absolute top-[24px] bottom-[-4px] w-[1px]
                    ${state === 'completed' ? 'bg-black' : ''}
                    ${state === 'active' ? 'border-l border-dashed border-gray-400' : ''}
                    ${state === 'pending' ? 'bg-[#cbd5e1]' : ''}
                 `}></div>
             )}
        </div>
    );
};

export const StepWrapper = ({ 
    stepId, 
    currentStep, 
    title, 
    children, 
    summary,
    isLast = false,
    onEdit
}: { 
    stepId: number, 
    currentStep: number, 
    title: string, 
    children: React.ReactNode, 
    summary?: React.ReactNode,
    isLast?: boolean,
    onEdit?: () => void
}) => {
    let state: 'completed' | 'active' | 'pending' = 'pending';
    if (currentStep > stepId) state = 'completed';
    else if (currentStep === stepId) state = 'active';

    return (
        <div className="flex gap-3 w-full">
            {/* Left Column: Stepper */}
            <div className="flex flex-col items-center min-w-[32px]">
                 <StepperIcon state={state} stepNumber={stepId + 1} isLast={isLast} />
            </div>

            {/* Right Column: Content */}
            <div className={`flex-1 flex flex-col gap-3 pb-6 ${isLast ? 'pb-0' : ''}`}>
                 {/* Title & Summary */}
                 <div className="flex flex-col justify-center min-h-[24px] cursor-pointer" onClick={state === 'completed' ? onEdit : undefined}>
                     <p className={`font-['Inter:SemiBold',sans-serif] text-[14px] transition-colors ${state === 'pending' ? 'text-slate-400' : 'text-[#192839]'}`}>
                        {title}
                     </p>
                     {state === 'completed' && summary && (
                        <p className="text-[13px] text-gray-500 mt-1">{summary}</p>
                     )}
                 </div>

                 {/* Content - Only visible if active */}
                 <AnimatePresence mode="wait">
                     {state === 'active' && (
                         <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                         >
                            {children}
                         </motion.div>
                     )}
                 </AnimatePresence>
            </div>
        </div>
    );
};

// --- Smart Focus Hook ---
export const useSmartFocus = (config: any, fieldOrder: string[], onCompleteStep?: () => void) => {
  const inputRefs = useRef<Map<string, HTMLInputElement>>(new Map());

  const setRef = (name: string) => (el: HTMLInputElement | null) => {
    if (el) inputRefs.current.set(name, el);
    else inputRefs.current.delete(name);
  };

  const focusField = (name: string) => {
      inputRefs.current.get(name)?.focus();
  };

  const handleKeyDown = (name: string, e: React.KeyboardEvent) => {
    const currentIndex = fieldOrder.indexOf(name);
    
    // Enter or ArrowDown -> Next
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
       e.preventDefault();
       const nextField = fieldOrder[currentIndex + 1];
       if (nextField) {
           inputRefs.current.get(nextField)?.focus();
       } else if (onCompleteStep) {
           // If it's the last field, trigger step completion
           onCompleteStep();
       }
    }
    
    // ArrowUp -> Previous
    if (e.key === 'ArrowUp') {
       e.preventDefault();
       const prevField = fieldOrder[currentIndex - 1];
       if (prevField) {
           inputRefs.current.get(prevField)?.focus();
       }
    }
  };

  const handleSmartChange = (name: string, value: string, originalUpdate: (field: string, val: any) => void) => {
      // 1. Update state first
      originalUpdate(name, value);

      // 2. Check triggers
      const conf = config[name];
      if (conf) {
          // Length Trigger (e.g. Phone)
          if (conf.trigger === 'length' && value.length === conf.max) {
             const currentIndex = fieldOrder.indexOf(name);
             const nextField = fieldOrder[currentIndex + 1];
             if (nextField) inputRefs.current.get(nextField)?.focus();
          }
          // Pattern Trigger (e.g. Email .com)
          if (conf.trigger === 'pattern' && conf.pattern && conf.pattern.test(value)) {
             const currentIndex = fieldOrder.indexOf(name);
             const nextField = fieldOrder[currentIndex + 1];
             if (nextField) inputRefs.current.get(nextField)?.focus();
          }
      }
  };

  return { setRef, handleKeyDown, handleSmartChange, focusField };
};
