import React from 'react';
import { motion } from 'motion/react';
import { Layers, Columns, LayoutTemplate } from 'lucide-react';
import { useFormStore } from './FormStore';

export const ViewModeToggle = () => {
  const { viewMode, setViewMode, isOpen, intent } = useFormStore();

  if (!isOpen || intent === 'view_transaction') return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md border border-slate-200 p-1 rounded-full shadow-lg flex items-center gap-1">
      <button
        onClick={() => setViewMode('overlay')}
        className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
          viewMode === 'overlay' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
        }`}
        title="Overlay View"
      >
        {viewMode === 'overlay' && (
          <motion.div
            layoutId="toggle-active"
            className="absolute inset-0 bg-blue-50 rounded-full border border-blue-100"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <Layers size={18} className="relative z-10" />
      </button>

      <button
        onClick={() => setViewMode('card')}
        className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
          viewMode === 'card' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
        }`}
        title="Card View"
      >
        {viewMode === 'card' && (
          <motion.div
            layoutId="toggle-active"
            className="absolute inset-0 bg-blue-50 rounded-full border border-blue-100"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <LayoutTemplate size={18} className="relative z-10" />
      </button>
      
      <button
        onClick={() => setViewMode('split')}
        className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
          viewMode === 'split' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
        }`}
        title="Split View"
      >
         {viewMode === 'split' && (
          <motion.div
            layoutId="toggle-active"
            className="absolute inset-0 bg-blue-50 rounded-full border border-blue-100"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <Columns size={18} className="relative z-10" />
      </button>
    </div>
  );
};
