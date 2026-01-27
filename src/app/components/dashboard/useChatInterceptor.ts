import { useFormStore } from './FormStore';
import { getFieldOrder } from './ActionAccordion';
import { toast } from 'sonner';

export type InterceptorResult = {
    type: 'FIELD_UPDATE' | 'RELATED_QUERY' | 'DIVERGENT_QUERY' | 'PASS_THROUGH';
    field?: string;
    value?: any;
    aiResponse?: string;
    shouldShowGuardrail?: boolean;
};

export const useChatInterceptor = () => {
    const flow = useFormStore();

    const classifyAndProcess = (text: string): InterceptorResult => {
        if (!flow.isOpen) {
            return { type: 'PASS_THROUGH' };
        }

        // --- TYPE A: Field Input (Dual Input) ---
        let matchedField = null;
        let matchedValue = null;
        let targetStep = flow.activeStep;

        const cleanText = text.trim();

        // 1. Email (gmail.com or standard regex)
        if (cleanText.includes('@') || cleanText.toLowerCase().includes('gmail.com')) {
             matchedField = 'customerEmail';
             matchedValue = cleanText;
             targetStep = 1;
        }
        // 2. Phone (10 digits)
        else if (/^\d{10}$/.test(cleanText)) {
             matchedField = 'customerPhone';
             matchedValue = cleanText;
             targetStep = 1;
        }
        // 3. Amount (4-5 digits explicitly requested, but usually any number not 10 digits is amount contextually)
        else if (/^\d{4,5}$/.test(cleanText)) {
             matchedField = 'amount';
             matchedValue = cleanText;
             targetStep = 0;
        }
        // 4. Contextual Fallback
        else {
             if (flow.activeStep === 0) {
                 const amountMatch = cleanText.match(/(\d+)/);
                 if (amountMatch && (cleanText.toLowerCase().includes('rupees') || cleanText.toLowerCase().includes('amount'))) {
                     matchedField = 'amount';
                     matchedValue = amountMatch[0];
                 } else if (cleanText.length > 2 && !cleanText.endsWith('?')) {
                     // Purpose
                     matchedField = 'purpose';
                     matchedValue = cleanText;
                 }
             } else if (flow.activeStep === 1) {
                 // Fallback for phone with +91?
                 if (cleanText.startsWith('+91') && cleanText.length === 13) {
                      matchedField = 'customerPhone';
                      matchedValue = cleanText;
                 }
             }
        }

        if (matchedField) {
            flow.resetDivergence();
            
            // Switch step if needed (Smart Navigation)
            if (flow.activeStep !== targetStep) {
                flow.setActiveStep(targetStep);
            }

            flow.updateField(matchedField, matchedValue);
            
            // Logic to move to next field
            const fields = getFieldOrder(targetStep); // Use targetStep
            const currentIndex = fields.indexOf(matchedField);
            const nextField = fields[currentIndex + 1];

            if (nextField) {
                flow.setActiveField(nextField);
            } else {
                // If checking off last field of step 0, move to step 1?
                if (targetStep === 0 && matchedField === 'purpose') { // Assuming purpose is last
                     flow.setActiveStep(1);
                     // Set first field of step 1?
                     const nextStepFields = getFieldOrder(1);
                     if (nextStepFields.length > 0) flow.setActiveField(nextStepFields[0]);
                } else if (targetStep === 1) {
                    // Maybe move to review?
                    // flow.nextStep(); 
                }
            }

            return { type: 'FIELD_UPDATE', field: matchedField, value: matchedValue };
        }

        // --- TYPE B: Related Question ---
        const lowerText = text.toLowerCase();

        // 1. Specific Link Expiry Check
        if (lowerText.includes('expiry') || lowerText.includes('expire') || lowerText.includes('expiration')) {
             flow.resetDivergence();
             return {
                 type: 'RELATED_QUERY',
                 aiResponse: "Link expiry lets you set a date and time after which this payment link will no longer be active. It's useful for limited-time offers or inventory management."
             };
        }

        const relatedKeywords = ['tax', 'rate', 'limit', 'explain', 'help', 'gst', 'fees', 'charges', 'validity'];
        const isRelated = relatedKeywords.some(k => lowerText.includes(k));

        if (isRelated) {
            flow.resetDivergence();
            // Return standard response
            return { 
                type: 'RELATED_QUERY', 
                aiResponse: "I can help clarify that. This transaction is subject to standard platform fees and applicable taxes based on your merchant category." 
            };
        }

        // --- TYPE C: Divergent Question ---
        // If it's a question or chat but NOT related and NOT a field match
        flow.incrementDivergence();
        
        // Check threshold (Current count is before increment in state, so check >= 2 to trigger on 3rd?)
        // Actually flow.divergenceCount will be stale in this closure until re-render. 
        // We can assume the increment happens.
        // Let's use the value from flow directly.
        
        const currentCount = flow.divergenceCount || 0;
        const shouldShowGuardrail = currentCount + 1 >= 3;

        return { 
            type: 'DIVERGENT_QUERY', 
            shouldShowGuardrail 
        };
    };

    return { classifyAndProcess };
};
