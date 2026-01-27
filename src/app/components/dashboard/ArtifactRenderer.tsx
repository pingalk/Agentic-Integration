import React from 'react';
import { useFormStore } from './FormStore';
import { SubscriptionFlatForm, PaymentLinkFlatForm } from './FlatForms';
import { TransactionDetailsArtifact } from './TransactionDetailsArtifact';

interface ArtifactRendererProps {
  intent?: string;
}

export const ArtifactRenderer: React.FC<ArtifactRendererProps> = () => {
  const { intent } = useFormStore();

  if (intent === 'view_transaction') {
    return <TransactionDetailsArtifact />;
  }

  if (intent === 'create_subscription') {
    return <SubscriptionFlatForm />;
  }

  if (intent === 'create_payment_link') {
    return <PaymentLinkFlatForm />;
  }
  
  // Default fallback
  return (
      <div className="flex items-center justify-center h-full text-slate-400">
          Unknown Intent: {intent}
      </div>
  );
};
