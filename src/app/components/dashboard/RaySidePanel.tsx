import React, { useEffect, useState } from 'react';
import LedContainer from '../../../imports/LedContainer';
import { motion, AnimatePresence } from 'motion/react';

interface RaySidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'floating' | 'native';
  onModeChange: (mode: 'floating' | 'native') => void;
  currentView: string;
  transactionStatus?: string;
}

// Floating panel heights
const COMPACT_HEIGHT = 200;
const FULL_HEIGHT = 'calc(100vh - 6rem)';

export const RaySidePanel: React.FC<RaySidePanelProps> = ({ isOpen, onClose, mode, onModeChange, currentView, transactionStatus }) => {
  // Track if floating panel should be expanded (when chat/thinking starts)
  const [isFloatingExpanded, setIsFloatingExpanded] = useState(false);

  // Reset expanded state when panel closes
  useEffect(() => {
    if (!isOpen) {
      setIsFloatingExpanded(false);
    }
  }, [isOpen]);

  // Map currentView to LedContainer context
  const getContext = () => {
    if (currentView === 'transaction-details') return 'transaction-details';
    return 'transactions-list';
  };

  // Handler to expand floating panel
  const handleExpand = () => {
    if (mode === 'floating') {
      setIsFloatingExpanded(true);
    }
  };

  // Determine panel height for floating mode
  const floatingHeight = isFloatingExpanded ? FULL_HEIGHT : `${COMPACT_HEIGHT}px`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - Only for floating mode */}
          {mode === 'floating' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/20 z-40"
            />
          )}
          
          {/* Side Panel */}
          <motion.div
            initial={mode === 'floating' ? { x: '100%' } : { width: 0, opacity: 0 }}
            animate={mode === 'floating' 
              ? { x: 0, width: 420, opacity: 1 } 
              : { width: 420, opacity: 1, x: 0 }
            }
            exit={mode === 'floating' ? { x: '100%' } : { width: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`
              ${mode === 'floating'
                ? 'fixed bottom-16 right-4 z-50 rounded-xl shadow-2xl'
                : 'relative h-full border-l border-slate-200 bg-white shrink-0'
              }
               overflow-hidden
            `}
            style={mode === 'floating' ? { height: floatingHeight } : undefined}
          >
             <div className="h-full w-full md:w-[420px] max-w-[calc(100vw-32px)] md:max-w-none"> {/* Wrapper to maintain width during resize animation */}
                <LedContainer
                    onClose={onClose}
                    context={getContext()}
                    transactionStatus={transactionStatus}
                    mode={mode}
                    onModeChange={onModeChange}
                    onExpand={handleExpand}
                    isExpanded={isFloatingExpanded}
                />
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
