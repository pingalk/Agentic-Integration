import React from 'react';
import { GenericFormLayout } from './GenericFormLayout';
import { useFormStore } from './FormStore';

export const SubscriptionFlatForm = () => {
  const { formData, updateField, nextStep, status, requestClose } = useFormStore();
  
  const isSubmitting = status === 'submitting';

  return (
    <div className="flex flex-col h-full bg-white">
      <GenericFormLayout.Header 
        title="Create Subscription Plan" 
        onClose={requestClose}
      />
      
      <div className="flex-1 overflow-y-auto">
        <GenericFormLayout.Section 
          title="Plan Details" 
          description="Define the core subscription terms."
        >
          <div className="grid grid-cols-2 gap-4">
             <GenericFormLayout.InputRow label="Plan Name" required>
                <input 
                  type="text" 
                  value={formData.plan}
                  onChange={(e) => updateField('plan', e.target.value)}
                  className="w-full h-10 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder="e.g. Pro Plan"
                />
             </GenericFormLayout.InputRow>
             
             <GenericFormLayout.InputRow label="Total Count" required>
                <input 
                  type="number" 
                  value={formData.totalCount}
                  onChange={(e) => updateField('totalCount', parseInt(e.target.value))}
                  className="w-full h-10 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
             </GenericFormLayout.InputRow>
          </div>
        </GenericFormLayout.Section>

        <GenericFormLayout.Section 
          title="Add-Ons" 
          description="Optional extras for the customer."
        >
          <div className="flex items-center gap-3 mb-4">
             <input 
                type="checkbox" 
                id="addUpfront" 
                checked={formData.addUpfront}
                onChange={(e) => updateField('addUpfront', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
             />
             <label htmlFor="addUpfront" className="text-sm text-slate-700 select-none">
                Include an upfront payment
             </label>
          </div>

          {formData.addUpfront && (
             <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <GenericFormLayout.InputRow label="Item Name">
                   <input 
                     type="text" 
                     value={formData.addOnItem}
                     onChange={(e) => updateField('addOnItem', e.target.value)}
                     className="w-full h-10 px-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                     placeholder="e.g. Setup Fee"
                   />
                </GenericFormLayout.InputRow>
                <GenericFormLayout.InputRow label="Amount">
                   <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">₹</span>
                      <input 
                        type="number" 
                        value={formData.addOnAmount}
                        onChange={(e) => updateField('addOnAmount', e.target.value)}
                        className="w-full h-10 pl-7 pr-3 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      />
                   </div>
                </GenericFormLayout.InputRow>
             </div>
          )}
        </GenericFormLayout.Section>

        <GenericFormLayout.Section title="Customer Details">
           <div className="grid grid-cols-1 gap-4">
              <GenericFormLayout.InputRow label="Email Address">
                 <input 
                   type="email" 
                   value={formData.customerEmail}
                   onChange={(e) => updateField('customerEmail', e.target.value)}
                   className="w-full h-10 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                   placeholder="customer@example.com"
                 />
              </GenericFormLayout.InputRow>
              <GenericFormLayout.InputRow label="Phone Number">
                 <input 
                   type="tel" 
                   value={formData.customerPhone}
                   onChange={(e) => updateField('customerPhone', e.target.value)}
                   className="w-full h-10 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                   placeholder="+91"
                 />
              </GenericFormLayout.InputRow>
           </div>
        </GenericFormLayout.Section>
      </div>

      <GenericFormLayout.Footer 
         primaryAction={{
            label: 'Create Subscription',
            onClick: nextStep, // This will trigger the submit if at the end, or we can call specific logic
            isLoading: isSubmitting
         }}
      />
    </div>
  );
};

export const PaymentLinkFlatForm = () => {
    const { formData, updateField, nextStep, status, requestClose } = useFormStore();
    const isSubmitting = status === 'submitting';
  
    return (
      <div className="flex flex-col h-full bg-white">
        <GenericFormLayout.Header 
            title="Create Payment Link" 
            onClose={requestClose}
        />
        
        <div className="flex-1 overflow-y-auto">
          <GenericFormLayout.Section 
            title="Payment Details" 
            description="Set the amount and purpose for this link."
          >
             <div className="grid grid-cols-1 gap-4">
                <GenericFormLayout.InputRow label="Amount" required>
                   <div className="relative">
                       <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">₹</span>
                       <input 
                         type="number" 
                         value={formData.amount}
                         onChange={(e) => updateField('amount', e.target.value)}
                         className="w-full h-10 pl-7 pr-3 border border-gray-200 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-200 ease-in-out text-lg font-medium shadow-sm"
                         placeholder="0.00"
                       />
                   </div>
                </GenericFormLayout.InputRow>
                
                <GenericFormLayout.InputRow label="Purpose" required>
                   <input 
                     type="text" 
                     value={formData.purpose}
                     onChange={(e) => updateField('purpose', e.target.value)}
                     className="w-full h-10 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-200 ease-in-out shadow-sm"
                     placeholder="What is this payment for?"
                   />
                </GenericFormLayout.InputRow>
             </div>
          </GenericFormLayout.Section>
  
          <GenericFormLayout.Section title="Customer (Optional)">
             <div className="grid grid-cols-1 gap-4">
                <GenericFormLayout.InputRow label="Email Address">
                   <input 
                     type="email" 
                     value={formData.customerEmail}
                     onChange={(e) => updateField('customerEmail', e.target.value)}
                     className="w-full h-10 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-200 ease-in-out shadow-sm"
                     placeholder="customer@example.com"
                   />
                </GenericFormLayout.InputRow>
                <GenericFormLayout.InputRow label="Phone Number">
                   <input 
                     type="tel" 
                     value={formData.customerPhone}
                     onChange={(e) => updateField('customerPhone', e.target.value)}
                     className="w-full h-10 px-3 border border-gray-200 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all duration-200 ease-in-out shadow-sm"
                     placeholder="+91"
                   />
                </GenericFormLayout.InputRow>
             </div>
          </GenericFormLayout.Section>
          
          <GenericFormLayout.Section title="Options">
             <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                   <input 
                      type="checkbox" 
                      id="shouldExpire"
                      checked={formData.shouldExpire}
                      onChange={(e) => updateField('shouldExpire', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                   />
                   <label htmlFor="shouldExpire" className="text-sm text-slate-700">Set expiry date</label>
                </div>
                <div className="flex items-center gap-3">
                   <input 
                      type="checkbox" 
                      id="requireReminder"
                      checked={formData.requireReminder}
                      onChange={(e) => updateField('requireReminder', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                   />
                   <label htmlFor="requireReminder" className="text-sm text-slate-700">Send automatic reminders</label>
                </div>
             </div>
          </GenericFormLayout.Section>
        </div>
  
        <GenericFormLayout.Footer 
           primaryAction={{
              label: 'Create Link',
              onClick: nextStep,
              isLoading: isSubmitting
           }}
        />
      </div>
    );
};
