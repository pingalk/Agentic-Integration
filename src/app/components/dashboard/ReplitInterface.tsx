import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Send, ChevronLeft } from 'lucide-react';
import Ray from '@/imports/Ray';

interface ReplitInterfaceProps {
  onClose: () => void;
  initialPrompt?: string;
}

export const ReplitInterface: React.FC<ReplitInterfaceProps> = ({ onClose, initialPrompt = '' }) => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: 'Integration complete! Your Razorpay checkout is now live. Try making a test payment on the preview.'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');

    // Simulate assistant response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I\'ve updated the code based on your request. Check the preview to see the changes.'
      }]);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#1e1e1e] z-50 flex flex-col"
    >
      {/* Header */}
      <div className="h-14 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Ray</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6" style={{ '--fill-0': '#04c982' } as React.CSSProperties}>
            <Ray static />
          </div>
          <span className="text-sm font-medium text-[#cccccc]">Replit Agent</span>
        </div>

        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#3e3e42] transition-colors text-[#cccccc]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content - Split View */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Chat/Prompts */}
        <div className="w-[400px] bg-[#252526] border-r border-[#3e3e42] flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 ${message.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4" style={{ '--fill-0': '#04c982' } as React.CSSProperties}>
                      <Ray static />
                    </div>
                    <span className="text-xs text-[#8c8c8c]">Replit Agent</span>
                  </div>
                )}
                <div
                  className={`
                    px-4 py-2 rounded-lg max-w-[320px]
                    ${message.role === 'user'
                      ? 'bg-[#0e639c] text-white'
                      : 'bg-[#2d2d30] text-[#cccccc]'
                    }
                  `}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-[#3e3e42]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me to modify the integration..."
                className="flex-1 bg-[#3c3c3c] text-[#cccccc] text-sm px-3 py-2 rounded border border-[#3e3e42] focus:outline-none focus:border-[#007acc] placeholder-[#6a6a6a]"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 bg-[#0e639c] text-white rounded flex items-center justify-center hover:bg-[#1177bb] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Website Preview */}
        <div className="flex-1 bg-[#1e1e1e] flex flex-col">
          {/* Preview Header */}
          <div className="h-10 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center px-4 gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex-1 bg-[#3c3c3c] text-[#8c8c8c] text-xs px-3 py-1 rounded">
              https://your-app.replit.dev
            </div>
          </div>

          {/* Preview Content */}
          <div className="flex-1 bg-white overflow-auto">
            <iframe
              src="about:blank"
              className="w-full h-full border-0"
              title="Website Preview"
              sandbox="allow-same-origin allow-scripts"
            />
            {/* Placeholder Preview */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="text-center space-y-4 p-8">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#1566f1] to-[#4793fd] rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Integration Complete!</h3>
                  <p className="text-sm text-gray-600 max-w-md">
                    Your Razorpay payment integration is now live. The checkout flow has been added to your application.
                  </p>
                </div>
                <div className="pt-4">
                  <button className="px-6 py-3 bg-gradient-to-b from-[#1566f1] to-[#4793fd] text-white rounded-lg font-medium text-sm hover:shadow-lg transition-shadow">
                    Test Payment Flow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
