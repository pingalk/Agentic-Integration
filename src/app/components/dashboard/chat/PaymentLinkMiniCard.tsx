import React from 'react';
import { motion } from 'motion/react';
import { Link2, Check, ChevronRight } from 'lucide-react';

export interface PaymentLinkMiniCardProps {
  formData: {
    amount: string;
    purpose: string;
    email?: string;
  };
  status: 'draft' | 'completed';
  onClick: () => void;
  isLoading?: boolean;
}

export const PaymentLinkMiniCard: React.FC<PaymentLinkMiniCardProps> = ({
  formData,
  status,
  onClick,
  isLoading = false
}) => {
  const formatAmount = (amount: string) => {
    const num = parseInt(amount.replace(/,/g, ''), 10);
    if (isNaN(num)) return amount;
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const truncatePurpose = (purpose: string, maxLength: number = 28) => {
    if (purpose.length <= maxLength) return purpose;
    return purpose.substring(0, maxLength) + '...';
  };

  const isDraft = status === 'draft';

  return (
    <motion.button
      onClick={onClick}
      className={`
        w-full max-w-[320px] text-left
        bg-white border rounded-[12px] overflow-hidden
        transition-shadow duration-200
        ${isDraft
          ? 'border-[#305EFF]/30 hover:border-[#305EFF]/50 hover:shadow-md'
          : 'border-[#22c55e]/30 hover:border-[#22c55e]/50 hover:shadow-md'
        }
      `}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      {/* Header */}
      <div className={`
        flex items-center justify-between px-3 py-2
        ${isDraft ? 'bg-[#305EFF]/5' : 'bg-[#22c55e]/5'}
      `}>
        <div className="flex items-center gap-2">
          <div className={`
            flex items-center justify-center w-6 h-6 rounded-full
            ${isDraft ? 'bg-[#305EFF]/10' : 'bg-[#22c55e]/10'}
          `}>
            {isDraft ? (
              <Link2 size={14} className="text-[#305EFF]" />
            ) : (
              <Check size={14} className="text-[#22c55e]" />
            )}
          </div>
          <span className={`
            text-[13px] font-medium
            ${isDraft ? 'text-[#305EFF]' : 'text-[#22c55e]'}
          `}>
            {isDraft ? 'Payment Link Draft' : 'Payment Link Created'}
          </span>
        </div>
        <ChevronRight size={16} className="text-[#94a3b8]" />
      </div>

      {/* Content */}
      <div className="px-3 py-2.5 border-t border-[#f1f5f9]">
        {isLoading ? (
          /* Skeleton State */
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <div className="h-[18px] w-[72px] bg-[#e2e8f0] rounded animate-pulse" />
              <div className="h-[14px] w-[140px] bg-[#e2e8f0] rounded animate-pulse" />
            </div>
            <div className="h-[14px] w-[120px] bg-[#e2e8f0] rounded animate-pulse" />
          </div>
        ) : (
          /* Actual Content */
          <>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[15px] font-semibold text-[#1e293b]">
                ₹{formatAmount(formData.amount)}
              </span>
              {formData.purpose && (
                <>
                  <span className="text-[#cbd5e1]">•</span>
                  <span className="text-[13px] text-[#64748b]">
                    {truncatePurpose(formData.purpose)}
                  </span>
                </>
              )}
            </div>
            {formData.email && (
              <div className="mt-1 text-[12px] text-[#94a3b8]">
                {formData.email}
              </div>
            )}
          </>
        )}
      </div>
    </motion.button>
  );
};

export default PaymentLinkMiniCard;
