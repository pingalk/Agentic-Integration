import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { 
    Wrapper, Value, RadioSelected, RadioUnselected, LabelText, 
    ProceedButton, StepWrapper, useSmartFocus 
} from './AccordionShared';

// Helper: Field Order
export const getFieldOrder = (step: number) => {
    if (step === 0) return ['amount', 'purpose'];
    if (step === 1) return ['customerEmail', 'customerPhone'];
    return [];
};

export const PaymentLinkSteps = ({ flow, onSubmit }: { flow: any, onSubmit: () => void }) => {
    // Focus Config
    const focusConfig = {
        amount: { trigger: 'manual' },
        purpose: { trigger: 'manual' },
        customerEmail: { trigger: 'pattern', pattern: /\.com$/ },
        customerPhone: { trigger: 'length', max: 10 }
    };

    const { setRef, handleKeyDown, handleSmartChange, focusField } = useSmartFocus(
        focusConfig, 
        getFieldOrder(flow.activeStep),
        flow.nextStep 
    );
    
    // Focus Effect
    useEffect(() => {
         if (flow.activeField) {
             focusField(flow.activeField);
         }
    }, [flow.activeField]);

    const renderSummary = (stepId: number) => {
        if (stepId === 0) {
            if (!flow.formData.amount && !flow.formData.purpose) return null;
            return `Amount: ₹${flow.formData.amount || '0'} | Purpose: ${flow.formData.purpose || '-'}`;
        }
        if (stepId === 1) {
            if (!flow.formData.customerEmail && !flow.formData.customerPhone) return "Not added";
            return [flow.formData.customerEmail, flow.formData.customerPhone].filter(Boolean).join(" | ");
        }
        if (stepId === 2) {
            return `Expiry: ${flow.formData.shouldExpire ? 'Yes' : 'No'} | Reminder: ${flow.formData.requireReminder ? 'Yes' : 'No'}`;
        }
        return null;
    };

    const isFormValid = !!flow.formData.amount && !!flow.formData.purpose;
    const isReadyForReview = flow.activeStep === 3;

    return (
        <div className="bg-white relative rounded-[8px] shrink-0 w-full overflow-hidden flex flex-col">
            <div className="content-stretch flex flex-col pt-[24px] px-[24px] pb-[12px] relative w-full">
                
                {/* STEP 0: Payment Link Details */}
                <StepWrapper 
                    stepId={0} 
                    currentStep={flow.activeStep} 
                    title="Payment link Details"
                    summary={renderSummary(0)}
                    onEdit={() => flow.setActiveStep(0)}
                >
                    <div className="w-full flex flex-col mt-1">
                        <div className="w-full flex flex-col">
                            {/* Amount Input */}
                            <div className="group bg-white h-[48px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full border border-[#e3eaf3] rounded-[4px] flex items-center transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF] focus-within:z-10">
                                <Wrapper>
                                    <div className="basis-0 content-center flex flex-wrap gap-0 grow items-center min-h-px min-w-px relative shrink-0">
                                    <Value>
                                        <div className="flex items-center w-full">
                                            <span className="font-['Inter:Bold',sans-serif] leading-[24px] text-[#40566d] text-[16px] mr-1">₹</span>
                                            <input 
                                                type="text" 
                                                value={flow.formData.amount}
                                                onChange={(e) => handleSmartChange('amount', e.target.value, flow.updateField)}
                                                onKeyDown={(e) => handleKeyDown('amount', e)}
                                                ref={setRef('amount')}
                                                className="font-['Inter:Bold',sans-serif] leading-[24px] text-[#40566d] text-[16px] w-full outline-none bg-transparent"
                                                placeholder="0.00"
                                                autoFocus={!flow.formData.amount}
                                            />
                                        </div>
                                    </Value>
                                    </div>
                                </Wrapper>
                            </div>
                            
                            {/* Purpose Input */}
                            <div className="group bg-white h-[48px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full border border-[#e3eaf3] rounded-[4px] flex items-center mt-[-1px] transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF] focus-within:z-10">
                                <Wrapper>
                                    <div className="basis-0 content-center flex flex-wrap gap-0 grow items-center min-h-px min-w-px relative shrink-0">
                                        <Value>
                                        <input 
                                            type="text" 
                                            value={flow.formData.purpose}
                                            onChange={(e) => handleSmartChange('purpose', e.target.value, flow.updateField)}
                                            onKeyDown={(e) => handleKeyDown('purpose', e)}
                                            ref={setRef('purpose')}
                                            className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#40566d] text-[16px] w-full outline-none bg-transparent placeholder:opacity-40"
                                            placeholder="Payment for"
                                            autoFocus={!!flow.formData.amount && !flow.formData.purpose}
                                        />
                                        </Value>
                                    </div>
                                </Wrapper>
                            </div>
                        </div>
                        <ProceedButton onClick={flow.nextStep} />
                    </div>
                </StepWrapper>

                {/* STEP 1: Customer Details */}
                <StepWrapper 
                    stepId={1} 
                    currentStep={flow.activeStep} 
                    title="Customer Details"
                    summary={renderSummary(1)}
                    onEdit={() => flow.setActiveStep(1)}
                >
                    <div className="w-full flex flex-col mt-1">
                        <div className="w-full flex flex-col">
                            {/* Email Input */}
                            <div className="group bg-white h-[48px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full border border-[#e3eaf3] rounded-[4px] flex items-center transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF] focus-within:z-10">
                                <Wrapper>
                                    <div className="basis-0 content-center flex flex-wrap gap-0 grow items-center min-h-px min-w-px relative shrink-0">
                                    <Value>
                                        <input 
                                            type="email" 
                                            value={flow.formData.customerEmail}
                                            onChange={(e) => handleSmartChange('customerEmail', e.target.value, flow.updateField)}
                                            onKeyDown={(e) => handleKeyDown('customerEmail', e)}
                                            ref={setRef('customerEmail')}
                                            className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#40566d] text-[16px] w-full outline-none bg-transparent placeholder:opacity-40"
                                            placeholder="customer@example.com"
                                            autoFocus={!flow.formData.customerEmail}
                                        />
                                    </Value>
                                    </div>
                                </Wrapper>
                            </div>
                            
                            {/* Phone Input */}
                            <div className="group bg-white h-[48px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full border border-[#e3eaf3] rounded-[4px] flex items-center mt-[-1px] transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF] focus-within:z-10">
                                <Wrapper>
                                    <div className="basis-0 content-center flex flex-wrap gap-0 grow items-center min-h-px min-w-px relative shrink-0">
                                        <Value>
                                        <input 
                                            type="text" 
                                            value={flow.formData.customerPhone}
                                            onChange={(e) => handleSmartChange('customerPhone', e.target.value, flow.updateField)}
                                            onKeyDown={(e) => handleKeyDown('customerPhone', e)}
                                            ref={setRef('customerPhone')}
                                            className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#40566d] text-[16px] w-full outline-none bg-transparent placeholder:opacity-40"
                                            placeholder="Phone number (optional)"
                                        />
                                        </Value>
                                    </div>
                                </Wrapper>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full mt-2">
                            <ProceedButton onClick={flow.nextStep} />
                            <div 
                                onClick={flow.nextStep}
                                className="w-full h-[32px] flex items-center justify-center cursor-pointer hover:bg-slate-50 rounded-[4px] transition-colors"
                            >
                                <p className="font-['Inter:SemiBold',sans-serif] text-[13px] text-[#768ea7]">Skip</p>
                            </div>
                        </div>
                    </div>
                </StepWrapper>

                {/* STEP 2: Other Details */}
                <StepWrapper 
                    stepId={2} 
                    currentStep={flow.activeStep} 
                    title="Other Details" 
                    isLast={true}
                    summary={renderSummary(2)}
                    onEdit={() => flow.setActiveStep(2)}
                >
                    <div className="w-full flex flex-col mt-1 gap-[20px]">
                            {/* Link Expiry */}
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                                <p className="font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#768ea7] text-[12px] text-nowrap">Should the link expire?</p>
                                <div className="content-stretch flex gap-[15px] items-start relative shrink-0">
                                    {/* Yes */}
                                    <div className="flex gap-[4px] items-center cursor-pointer w-[120px]" onClick={() => flow.updateField('shouldExpire', true)}>
                                        <div className="p-[2px]">{flow.formData.shouldExpire ? <RadioSelected /> : <RadioUnselected />}</div>
                                        <LabelText text="Yes" />
                                    </div>
                                    {/* No */}
                                    <div className="flex gap-[4px] items-center cursor-pointer w-[120px]" onClick={() => flow.updateField('shouldExpire', false)}>
                                        <div className="p-[2px]">{!flow.formData.shouldExpire ? <RadioSelected /> : <RadioUnselected />}</div>
                                        <LabelText text="No" />
                                    </div>
                                </div>
                            </div>

                            {/* Reminder */}
                            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                                <p className="font-['Inter:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#768ea7] text-[12px] text-nowrap">Is a reminder required?</p>
                                <div className="content-stretch flex gap-[15px] items-start relative shrink-0">
                                    {/* Yes */}
                                    <div className="flex gap-[4px] items-center cursor-pointer w-[120px]" onClick={() => flow.updateField('requireReminder', true)}>
                                        <div className="p-[2px]">{flow.formData.requireReminder ? <RadioSelected /> : <RadioUnselected />}</div>
                                        <LabelText text="Yes" />
                                    </div>
                                    {/* No */}
                                    <div className="flex gap-[4px] items-center cursor-pointer w-[120px]" onClick={() => flow.updateField('requireReminder', false)}>
                                        <div className="p-[2px]">{!flow.formData.requireReminder ? <RadioSelected /> : <RadioUnselected />}</div>
                                        <LabelText text="No" />
                                    </div>
                                </div>
                            </div>
                            <ProceedButton onClick={flow.nextStep} />
                        </div>
                </StepWrapper>
            </div>

            {/* Global Footer */}
            <AnimatePresence>
                {isReadyForReview && (
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        className="w-full px-[24px] pb-[24px] pt-[12px] border-t border-slate-100 mt-auto bg-white"
                    >
                        <button 
                            disabled={!isFormValid || flow.status === 'submitting'}
                            onClick={onSubmit}
                            className={`w-full h-[36px] rounded-[4px] flex items-center justify-center font-['Inter:SemiBold',sans-serif] text-[14px] transition-all duration-200
                                ${isFormValid 
                                    ? "bg-[#18181b] hover:opacity-90 text-white cursor-pointer" 
                                    : "bg-slate-200 text-slate-400 cursor-not-allowed"}
                            `}
                        >
                            {flow.status === 'submitting' ? (
                                <Loader2 className="animate-spin" size={18} />
                            ) : (
                                "Confirm & Proceed"
                            )}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
