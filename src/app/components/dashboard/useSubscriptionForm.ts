export const initialSubscriptionData = {
    plan: '',
    startDate: '',
    isImmediate: true,
    totalCount: 12,
    addUpfront: false,
    addOnItem: '',
    addOnAmount: '',
    addOnQuantity: 1,
    customerEmail: '',
    customerPhone: '',
    expiryDate: '',
    notifyCustomer: true
};

export const subscriptionFocusConfig = {
    plan: { trigger: 'manual' },
    totalCount: { trigger: 'manual' },
    addOnItem: { trigger: 'manual' },
    addOnAmount: { trigger: 'manual' },
    customerEmail: { trigger: 'pattern', pattern: /\.com$/ },
    customerPhone: { trigger: 'length', max: 10 }
};

export const validateSubscriptionStep = (step: number, data: any) => {
    if (step === 0) {
        // Step 1: Plan Details
        return !!data.plan && !!data.totalCount;
    }
    if (step === 1) {
        // Step 2: Add-Ons
        if (!data.addUpfront) return true;
        return !!data.addOnItem && !!data.addOnAmount && !!data.addOnQuantity;
    }
    if (step === 2) {
        // Step 3: Link Settings
        // Basic validation for email or phone
        return !!data.customerEmail || !!data.customerPhone;
    }
    return false;
};

export const getSubscriptionFieldOrder = (step: number, data: any) => {
    if (step === 0) return ['plan', 'totalCount'];
    if (step === 1) {
        if (data.addUpfront) return ['addOnItem', 'addOnAmount', 'addOnQuantity'];
        return [];
    }
    if (step === 2) return ['customerEmail', 'customerPhone'];
    return [];
};

export const parseSubscriptionIntent = (query: string) => {
    const lower = query.toLowerCase();
    
    // Explicit keywords
    const isSubscriptionRequest = lower.includes('subscription') || lower.includes('subscribe');

    // Detect Plan
    const plans = ['Test Plan', 'Premium Plan', 'Basic Plan', 'Standard Plan'];
    const matchedPlan = plans.find(p => lower.includes(p.toLowerCase()));
    
    // Detect Count
    const countMatch = query.match(/(\d+)\s*(cycles|months)/);
    const count = countMatch ? parseInt(countMatch[1]) : null;

    if (isSubscriptionRequest || matchedPlan || count) {
        return {
            intent: 'create_subscription',
            data: {
                ...(matchedPlan ? { plan: matchedPlan } : {}),
                ...(count ? { totalCount: count } : {})
            }
        };
    }
    return null;
};
