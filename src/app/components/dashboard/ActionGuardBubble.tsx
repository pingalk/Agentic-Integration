import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, X, Check } from 'lucide-react';
import { useFormStore } from './FormStore';

interface ActionGuardBubbleProps {
    onKeepOpen: () => void;
    onCloseForm: () => void;
}

export const ActionGuardBubble: React.FC<ActionGuardBubbleProps> = ({ onKeepOpen, onCloseForm }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex flex-col gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 shadow-sm max-w-[80%] self-start mb-4"
        >
            <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-600 shrink-0">
                    <AlertTriangle size={18} />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-amber-900">
                        Distraction Detected
                    </p>
                    <p className="text-sm text-amber-800/80 leading-relaxed">
                        I noticed we've moved away from creating the subscription. Would you like to close this form?
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-1">
                <button
                    onClick={onKeepOpen}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-700 hover:bg-amber-100 rounded-md transition-colors"
                >
                    <X size={14} />
                    Keep Open
                </button>
                <button
                    onClick={onCloseForm}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-md shadow-sm transition-colors"
                >
                    <Check size={14} />
                    Close Form
                </button>
            </div>
        </motion.div>
    );
};
