import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { 
    Wrapper, Value, RadioSelected, RadioUnselected, LabelText, 
    ProceedButton, StepWrapper, useSmartFocus 
} from './AccordionShared';
import { 
    subscriptionFocusConfig, 
    getSubscriptionFieldOrder, 
    validateSubscriptionStep 
} from './useSubscriptionForm';

export const SubscriptionSteps = ({ flow, onSubmit }: { flow: any, onSubmit: () => void }) => {
    
    // Dynamic Field Order based on data (e.g. Add-ons)
    const fieldOrder = getSubscriptionFieldOrder(flow.activeStep, flow.formData);

    const { setRef, handleKeyDown, handleSmartChange, focusField } = useSmartFocus(
        subscriptionFocusConfig, 
        fieldOrder,
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
            if (!flow.formData.plan) return null;
            return `Plan: ${flow.formData.plan} | Cycles: ${flow.formData.totalCount}`;
        }
        if (stepId === 1) {
            if (!flow.formData.addUpfront) return "No Add-ons";
            // Simple summary
            const count = 1; // Logic for multiple items not implemented yet, just 1 item
            const total = (parseFloat(flow.formData.addOnAmount) || 0) * (flow.formData.addOnQuantity || 1);
            return `${count} Add-on${count > 1 ? 's' : ''} | Total: ₹${total}`;
        }
        if (stepId === 2) {
            const contact = flow.formData.customerEmail || flow.formData.customerPhone || "Not added";
            const expires = flow.formData.expiryDate ? `Expires: ${flow.formData.expiryDate}` : "No Expiry";
            return `${contact} | ${expires}`;
        }
        return null;
    };

    // Global Validation for Submit
    const isStep0Valid = validateSubscriptionStep(0, flow.formData);
    const isStep1Valid = validateSubscriptionStep(1, flow.formData);
    const isStep2Valid = validateSubscriptionStep(2, flow.formData);
    const isFormValid = isStep0Valid && isStep1Valid && isStep2Valid;
    const isReadyForReview = flow.activeStep === 3;

    return (
        <div className="bg-white relative rounded-[8px] shrink-0 w-full overflow-hidden flex flex-col">
            <div className="content-stretch flex flex-col pt-[24px] px-[24px] pb-[12px] relative w-full">
                
                {/* STEP 0: Plan Details */}
                <StepWrapper 
                    stepId={0} 
                    currentStep={flow.activeStep} 
                    title="Plan Details"
                    summary={renderSummary(0)}
                    onEdit={() => flow.setActiveStep(0)}
                >
                    <div className="w-full flex flex-col mt-1">
                        <div className="w-full flex flex-col">
                            {/* Plan Dropdown */}
                            <div className="group bg-white h-[48px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full border border-[#e3eaf3] rounded-[4px] flex items-center transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF] focus-within:z-10">
                                <Wrapper>
                                    <div className="basis-0 content-center flex flex-wrap gap-0 grow items-center min-h-px min-w-px relative shrink-0">
                                    <Value>
                                        <select
                                            value={flow.formData.plan}
                                            onChange={(e) => handleSmartChange('plan', e.target.value, flow.updateField)}
                                            onKeyDown={(e) => handleKeyDown('plan', e)}
                                            ref={setRef('plan')} // Note: select ref might differ but HTMLSelectElement is fine
                                            className="font-['Inter:SemiBold',sans-serif] leading-[24px] text-[#40566d] text-[16px] w-full outline-none bg-transparent"
                                            autoFocus={!flow.formData.plan}
                                        >
                                            <option value="" disabled>Select a Plan</option>
                                            <option value="Test Plan">Test Plan</option>
                                            <option value="Premium Plan">Premium Plan</option>
                                            <option value="Basic Plan">Basic Plan</option>
                                            <option value="Standard Plan">Standard Plan</option>
                                        </select>
                                    </Value>
                                    </div>
                                </Wrapper>
                            </div>

                            {/* Start Date */}
                            <div className="group bg-white h-[48px] relative shrink-0 w-full border-x border-b border-[#e3eaf3] flex items-center transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF] focus-within:z-10">
                                <Wrapper>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex gap-2 items-center cursor-pointer" onClick={() => flow.updateField('isImmediate', !flow.formData.isImmediate)}>
                                            <div className="p-[2px]">
                                                {flow.formData.isImmediate ? <RadioSelected /> : <RadioUnselected />}
                                            </div>
                                            <LabelText text="Start Immediately" />
                                        </div>
                                        {!flow.formData.isImmediate && (
                                            <div className="basis-0 grow relative shrink-0">
                                                <input 
                                                    type="date"
                                                    value={flow.formData.startDate}
                                                    onChange={(e) => flow.updateField('startDate', e.target.value)}
                                                    className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#40566d] text-[14px] w-full outline-none bg-transparent text-right"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Wrapper>
                            </div>
                            
                            {/* Total Count */}
                            <div className="group bg-white h-[48px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full border-x border-b border-[#e3eaf3] rounded-[4px] flex items-center transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF] focus-within:z-10">
                                <Wrapper>
                                    <div className="basis-0 content-center flex flex-wrap gap-0 grow items-center min-h-px min-w-px relative shrink-0">
                                        <Value>
                                        <div className="flex items-center w-full justify-between">
                                            <span className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#768ea7] text-[14px] mr-2">Total Cycles</span>
                                            <input 
                                                type="number" 
                                                value={flow.formData.totalCount}
                                                onChange={(e) => handleSmartChange('totalCount', e.target.value, flow.updateField)}
                                                onKeyDown={(e) => handleKeyDown('totalCount', e)}
                                                ref={setRef('totalCount')}
                                                className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#40566d] text-[16px] w-[60px] outline-none bg-transparent text-right"
                                                placeholder="12"
                                            />
                                        </div>
                                        </Value>
                                    </div>
                                </Wrapper>
                            </div>
                        </div>
                        <ProceedButton onClick={flow.nextStep} />
                    </div>
                </StepWrapper>

                {/* STEP 1: Add-Ons */}
                <StepWrapper 
                    stepId={1} 
                    currentStep={flow.activeStep} 
                    title="Add-Ons"
                    summary={renderSummary(1)}
                    onEdit={() => flow.setActiveStep(1)}
                >
                    <div className="w-full flex flex-col mt-1">
                        <div className="w-full flex flex-col gap-3">
                            <div className="flex gap-2 items-center cursor-pointer mb-2" onClick={() => flow.updateField('addUpfront', !flow.formData.addUpfront)}>
                                <div className="p-[2px]">
                                    {flow.formData.addUpfront ? <RadioSelected /> : <RadioUnselected />}
                                </div>
                                <LabelText text="Add upfront amount" />
                            </div>

                            {flow.formData.addUpfront && (
                                <div className="w-full flex flex-col">
                                     {/* Item Name */}
                                     <div className="group bg-white h-[48px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full border border-[#e3eaf3] flex items-center transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF] focus-within:z-10">
                                         <Wrapper>
                                            <div className="basis-0 content-center flex flex-wrap gap-0 grow items-center min-h-px min-w-px relative shrink-0">
                                                <Value>
                                                     <input 
                                                        type="text" 
                                                        value={flow.formData.addOnItem}
                                                        onChange={(e) => handleSmartChange('addOnItem', e.target.value, flow.updateField)}
                                                        onKeyDown={(e) => handleKeyDown('addOnItem', e)}
                                                        ref={setRef('addOnItem')}
                                                        className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#40566d] text-[16px] w-full outline-none bg-transparent placeholder:opacity-40"
                                                        placeholder="Item Name (e.g. Setup Fee)"
                                                     />
                                                </Value>
                                            </div>
                                         </Wrapper>
                                     </div>
                                     {/* Amount and Quantity Row */}
                                     <div className="group bg-white h-[48px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full border-x border-b border-[#e3eaf3] flex items-center transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF] focus-within:z-10">
                                         <div className="flex w-full h-full">
                                             <div className="flex-1 border-r border-[#e3eaf3] flex items-center px-3">
                                                 <span className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#768ea7] text-[16px] mr-1">₹</span>
                                                 <input 
                                                    type="text"
                                                    value={flow.formData.addOnAmount}
                                                    onChange={(e) => handleSmartChange('addOnAmount', e.target.value, flow.updateField)}
                                                    onKeyDown={(e) => handleKeyDown('addOnAmount', e)}
                                                    ref={setRef('addOnAmount')}
                                                    className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#40566d] text-[16px] w-full outline-none bg-transparent placeholder:opacity-40"
                                                    placeholder="Amount"
                                                 />
                                             </div>
                                             <div className="w-[100px] flex items-center px-3">
                                                 <span className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#768ea7] text-[14px] mr-1">Qty</span>
                                                 <input 
                                                    type="number"
                                                    value={flow.formData.addOnQuantity}
                                                    onChange={(e) => flow.updateField('addOnQuantity', e.target.value)}
                                                    onKeyDown={(e) => handleKeyDown('addOnQuantity', e)}
                                                    ref={setRef('addOnQuantity')}
                                                    className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#40566d] text-[16px] w-full outline-none bg-transparent placeholder:opacity-40"
                                                    placeholder="1"
                                                 />
                                             </div>
                                         </div>
                                     </div>
                                </div>
                            )}
                        </div>
                        <ProceedButton onClick={flow.nextStep} />
                    </div>
                </StepWrapper>

                {/* STEP 2: Link Settings */}
                <StepWrapper 
                    stepId={2} 
                    currentStep={flow.activeStep} 
                    title="Link Settings" 
                    isLast={true}
                    summary={renderSummary(2)}
                    onEdit={() => flow.setActiveStep(2)}
                >
                    <div className="w-full flex flex-col mt-1 gap-[12px]">
                            {/* Customer Contact */}
                            <div className="group bg-white h-[48px] relative rounded-[4px] shrink-0 w-full border border-[#e3eaf3] flex items-center transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF] focus-within:z-10">
                                <Wrapper>
                                    <div className="basis-0 content-center flex flex-wrap gap-0 grow items-center min-h-px min-w-px relative shrink-0">
                                        <Value>
                                            <input 
                                                type="text" 
                                                value={flow.formData.customerEmail}
                                                onChange={(e) => handleSmartChange('customerEmail', e.target.value, flow.updateField)}
                                                onKeyDown={(e) => handleKeyDown('customerEmail', e)}
                                                ref={setRef('customerEmail')}
                                                className="font-['Inter:Regular',sans-serif] leading-[24px] text-[#40566d] text-[16px] w-full outline-none bg-transparent placeholder:opacity-40"
                                                placeholder="Customer Email or Phone"
                                            />
                                        </Value>
                                    </div>
                                </Wrapper>
                            </div>

                            {/* Link Expiry Toggle */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between cursor-pointer" onClick={() => flow.updateField('shouldExpire', !flow.formData.shouldExpire)}>
                                    <LabelText text="Link Expiry" />
                                    <div className={`w-[36px] h-[20px] rounded-full p-[2px] transition-colors ${flow.formData.shouldExpire ? 'bg-[#305EFF]' : 'bg-slate-300'}`}>
                                        <div className={`w-[16px] h-[16px] bg-white rounded-full shadow-sm transition-transform ${flow.formData.shouldExpire ? 'translate-x-[16px]' : 'translate-x-0'}`} />
                                    </div>
                                </div>
                                
                                <AnimatePresence>
                                    {flow.formData.shouldExpire && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: 4 }}
                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="group bg-white h-[40px] relative rounded-[4px] shrink-0 w-full border border-[#e3eaf3] flex items-center px-3 transition-all duration-200 focus-within:border-[#305EFF] focus-within:ring-1 focus-within:ring-[#305EFF]">
                                                <input 
                                                    type="date"
                                                    value={flow.formData.expiryDate}
                                                    onChange={(e) => flow.updateField('expiryDate', e.target.value)}
                                                    className="font-['Inter:Regular',sans-serif] text-[#40566d] text-[14px] w-full outline-none bg-transparent"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Notify Toggle */}
                            <div className="flex items-center justify-between cursor-pointer" onClick={() => flow.updateField('notifyCustomer', !flow.formData.notifyCustomer)}>
                                <LabelText text="Notify Customer" />
                                <div className={`w-[36px] h-[20px] rounded-full p-[2px] transition-colors ${flow.formData.notifyCustomer ? 'bg-[#305EFF]' : 'bg-slate-300'}`}>
                                    <div className={`w-[16px] h-[16px] bg-white rounded-full shadow-sm transition-transform ${flow.formData.notifyCustomer ? 'translate-x-[16px]' : 'translate-x-0'}`} />
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
