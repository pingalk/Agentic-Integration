import React from 'react';
import { useStore } from '../StoreContext';
import { GenericFormLayout, FormSection, InputGroup, TextInput } from './GenericFormLayout';

export const PaymentLinkFlatForm: React.FC = () => {
  const { formData, updateField, close, setStatus, status } = useStore();

  const handleSubmit = () => {
    setStatus('submitting');
    setTimeout(() => {
        setStatus('success');
        setTimeout(() => {
            close();
        }, 1500);
    }, 1000);
  };

  return (
    <GenericFormLayout
      title="Create Payment Link"
      subtitle="Generate a link to accept payments from your customers."
      onClose={close}
      onSubmit={handleSubmit}
      isSubmitting={status === 'submitting'}
    >
      <FormSection title="Payment Details">
        <InputGroup label="Amount" required>
            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">₹</span>
                <TextInput 
                    className="pl-7 text-lg font-medium"
                    value={formData.amount} 
                    onChange={(e) => updateField('amount', e.target.value)}
                    placeholder="0.00"
                    autoFocus
                />
            </div>
        </InputGroup>
        
        <InputGroup label="Payment For (Purpose)" required>
            <TextInput 
                value={formData.purpose} 
                onChange={(e) => updateField('purpose', e.target.value)}
                placeholder="e.g. Web Development Services"
            />
        </InputGroup>
      </FormSection>

      <div className="h-px bg-slate-100 w-full" />

      <FormSection title="Customer Details">
        <InputGroup label="Email Address">
            <TextInput 
                type="email"
                value={formData.customerEmail} 
                onChange={(e) => updateField('customerEmail', e.target.value)}
                placeholder="customer@example.com"
            />
        </InputGroup>
        <InputGroup label="Phone Number">
            <TextInput 
                type="tel"
                value={formData.customerPhone} 
                onChange={(e) => updateField('customerPhone', e.target.value)}
                placeholder="+91 98765 43210"
            />
        </InputGroup>
      </FormSection>

      <div className="h-px bg-slate-100 w-full" />
      
      <FormSection title="Options">
         <div className="flex flex-col gap-3">
             <div className="flex items-center gap-2">
                <input 
                    type="checkbox" 
                    id="shouldExpire"
                    checked={formData.shouldExpire}
                    onChange={(e) => updateField('shouldExpire', e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="shouldExpire" className="text-sm text-slate-700 select-none">Link should expire automatically</label>
             </div>
             
             <div className="flex items-center gap-2">
                <input 
                    type="checkbox" 
                    id="requireReminder"
                    checked={formData.requireReminder}
                    onChange={(e) => updateField('requireReminder', e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="requireReminder" className="text-sm text-slate-700 select-none">Send automatic reminders</label>
             </div>
         </div>
      </FormSection>
    </GenericFormLayout>
  );
};
