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

export const RaySidePanel: React.FC<RaySidePanelProps> = ({ isOpen, onClose, mode, onModeChange, currentView, transactionStatus }) => {
  // We use a key to force re-animation when mode changes if needed, 
  // but to preserve state we should try to keep the same component tree.
  // Ideally, LedContainer handles its own state persistence or we lift it.
  // Assuming LedContainer state is transient, we try to keep it mounted.
  
  // To keep state, we render the container always when open.
  // We change the class names based on mode.

  // Map currentView to LedContainer context
  const getContext = () => {
    if (currentView === 'transaction-details') return 'transaction-details';
    return 'transactions-list';
  };

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
            style={mode === 'floating' ? { height: '200px' } : undefined}
          >
             <div className="h-full w-full md:w-[420px] max-w-[calc(100vw-32px)] md:max-w-none"> {/* Wrapper to maintain width during resize animation */}
                <LedContainer 
                    onClose={onClose} 
                    context={getContext()} 
                    transactionStatus={transactionStatus}
                    mode={mode}
                    onModeChange={onModeChange}
                />
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
