import React from 'react';
import { useStore } from '../StoreContext';
import { GenericFormLayout, FormSection, InputGroup, TextInput } from './GenericFormLayout';

export const SubscriptionFlatForm: React.FC = () => {
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
      title="Create Subscription"
      subtitle="Set up a recurring billing plan for your customer."
      onClose={close}
      onSubmit={handleSubmit}
      isSubmitting={status === 'submitting'}
    >
      <FormSection title="Plan Details">
        <InputGroup label="Plan Name" required>
            <TextInput 
                value={formData.plan} 
                onChange={(e) => updateField('plan', e.target.value)}
                placeholder="e.g. Premium Plan"
            />
        </InputGroup>
        
        <div className="grid grid-cols-2 gap-4">
            <InputGroup label="Billing Frequency" required>
                 <select 
                    className="w-full h-10 px-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all text-sm bg-white"
                    defaultValue="monthly"
                 >
                     <option value="monthly">Monthly</option>
                     <option value="yearly">Yearly</option>
                     <option value="weekly">Weekly</option>
                 </select>
            </InputGroup>
            <InputGroup label="Total Cycles" required>
                 <TextInput 
                    type="number"
                    value={formData.totalCount} 
                    onChange={(e) => updateField('totalCount', parseInt(e.target.value) || '')}
                    placeholder="e.g. 12"
                />
            </InputGroup>
        </div>
      </FormSection>

      <div className="h-px bg-slate-100 w-full" />

      <FormSection title="Add-ons">
         <div className="flex items-center gap-2 mb-2">
            <input 
                type="checkbox" 
                id="addUpfront"
                checked={formData.addUpfront}
                onChange={(e) => updateField('addUpfront', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="addUpfront" className="text-sm text-slate-700 select-none">Include an upfront charge or add-on</label>
         </div>

         {formData.addUpfront && (
             <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex flex-col gap-4">
                <InputGroup label="Add-on Name">
                    <TextInput 
                        value={formData.addOnItem} 
                        onChange={(e) => updateField('addOnItem', e.target.value)}
                        placeholder="e.g. Setup Fee"
                    />
                </InputGroup>
                <div className="grid grid-cols-2 gap-4">
                    <InputGroup label="Amount">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">₹</span>
                            <TextInput 
                                className="pl-7"
                                value={formData.addOnAmount} 
                                onChange={(e) => updateField('addOnAmount', e.target.value)}
                                placeholder="0.00"
                            />
                        </div>
                    </InputGroup>
                    <InputGroup label="Quantity">
                        <TextInput 
                            type="number"
                            value={formData.addOnQuantity} 
                            onChange={(e) => updateField('addOnQuantity', parseInt(e.target.value) || 1)}
                            placeholder="1"
                        />
                    </InputGroup>
                </div>
             </div>
         )}
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
    </GenericFormLayout>
  );
};
