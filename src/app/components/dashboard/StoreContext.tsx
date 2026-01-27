import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialSubscriptionData, parseSubscriptionIntent } from './useSubscriptionForm';

type NavigationSource = 'WIZARD_GENERIC' | 'TARGETED_ENTRY' | 'REVIEW_HUB';

interface FlowState {
    isOpen: boolean;
    mode: 'expanded' | 'minimized';
    wiggleTrigger: number;
    activeStep: number;
    activeField: string | null;
    navigationSource: NavigationSource;
    intent: 'create_payment_link' | 'create_subscription';
    formData: any;
    status: 'editing' | 'submitting' | 'success';
    viewMode: 'overlay' | 'split';
}

interface FlowActions {
    setIsOpen: (isOpen: boolean) => void;
    setMode: (mode: 'expanded' | 'minimized') => void;
    setActiveStep: (step: number) => void;
    setActiveField: (field: string | null) => void;
    setIntent: (intent: 'create_payment_link' | 'create_subscription') => void;
    setFormData: (data: any) => void;
    updateField: (field: string, value: any) => void;
    setStatus: (status: 'editing' | 'submitting' | 'success') => void;
    triggerWiggle: () => void;
    startFlow: (initialData: any) => void;
    nextStep: () => void;
    goToReview: () => void;
    editStep: (stepIndex: number) => void;
    close: () => void;
    minimize: () => void;
    maximize: () => void;
    setViewMode: (mode: 'overlay' | 'split') => void;
}

const StoreContext = createContext<(FlowState & FlowActions) | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'expanded' | 'minimized'>('expanded');
  const [wiggleTrigger, setWiggleTrigger] = useState(0);
  const [activeStep, setActiveStep] = useState(0); 
  const [activeField, setActiveField] = useState<string | null>(null);
  const [navigationSource, setNavigationSource] = useState<NavigationSource>('WIZARD_GENERIC');
  const [intent, setIntent] = useState<'create_payment_link' | 'create_subscription'>('create_payment_link');
  const [viewMode, setViewMode] = useState<'overlay' | 'split'>('overlay');
  
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    customerEmail: '',
    customerPhone: '',
    shouldExpire: false,
    requireReminder: false,
    ...initialSubscriptionData
  });

  const [status, setStatus] = useState<'editing' | 'submitting' | 'success'>('editing');

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const startFlow = (initialData: any) => {
    let flowIntent = 'create_payment_link';
    let flowData = initialData;

    if (initialData && initialData.intent) {
        flowIntent = initialData.intent;
        flowData = initialData.data;
    }

    setIntent(flowIntent as any);
    const newData = { ...formData, ...flowData };
    setFormData(newData);
    setIsOpen(true);
    setMode('expanded');
    setActiveField(null);
    setStatus('editing'); 
    
    // Default to overlay mode when flow starts
    setViewMode('overlay');

    if (flowIntent === 'create_subscription') {
        setActiveStep(0);
        setNavigationSource('WIZARD_GENERIC');
        return;
    }

    // Payment Link Routing Logic
    const hasLinkDetails = !!newData.amount && !!newData.purpose;
    const hasCustomerDetails = !!newData.customerEmail || !!newData.customerPhone;
    const isGeneric = !newData.amount && !newData.purpose && !newData.customerEmail && !newData.customerPhone;

    if (hasLinkDetails && hasCustomerDetails) {
        setNavigationSource('TARGETED_ENTRY');
        setActiveStep(3);
        return;
    }

    if (!isGeneric) {
        setNavigationSource('TARGETED_ENTRY');
        if (hasLinkDetails) {
            setActiveStep(1);
        } else {
            setActiveStep(0);
        }
        return;
    }

    setNavigationSource('WIZARD_GENERIC');
    setActiveStep(0);
  };

  const handleStepCompletion = (currentStepId: number) => {
      setActiveField(null); 
      
      if (intent === 'create_subscription') {
          // Linear progression
          if (currentStepId < 2) {
              setActiveStep(currentStepId + 1);
              return;
          }
          setActiveStep(3); // Review
          return;
      }

      if (navigationSource === 'REVIEW_HUB') {
         setActiveStep(3); 
         return;
      }
    
      if (navigationSource === 'TARGETED_ENTRY') {
         setActiveStep(3); 
         return;
      }
    
      if (currentStepId === 0) {
         setActiveStep(1);
         return;
      }
      
      if (currentStepId === 1) {
          setActiveStep(3);
          return;
      }

      if (currentStepId === 2) {
          setActiveStep(3);
          return;
      }
      
      setActiveStep(3);
  };

  const nextStep = () => {
      if (activeStep === 3) {
          console.log("Submitting flow:", formData);
          close();
      } else {
          handleStepCompletion(activeStep);
      }
  };
  
  const goToReview = () => setActiveStep(3);
  
  const editStep = (stepIndex: number) => {
      setNavigationSource('REVIEW_HUB');
      setActiveStep(stepIndex);
      setActiveField(null);
  };

  const close = () => {
      setIsOpen(false);
      setActiveField(null);
  };

  const minimize = () => setMode('minimized');
  const maximize = () => setMode('expanded');
  const triggerWiggle = () => setWiggleTrigger(prev => prev + 1);

  return (
    <StoreContext.Provider value={{
        isOpen, setIsOpen,
        mode, setMode,
        wiggleTrigger, triggerWiggle,
        activeStep, setActiveStep,
        activeField, setActiveField,
        navigationSource,
        intent, setIntent,
        formData, setFormData, updateField,
        status, setStatus,
        viewMode, setViewMode,
        startFlow,
        nextStep,
        goToReview,
        editStep,
        close,
        minimize,
        maximize
    }}>
        {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};
