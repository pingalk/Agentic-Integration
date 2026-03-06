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
          <div className="flex-1 bg-white overflow-auto relative">
            {/* Simple Website Mockup with Razorpay Integration */}
            <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50">
              {/* Mock Navigation */}
              <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shadow-sm">
                <div className="text-xl font-bold text-blue-600">MyStore</div>
                <div className="ml-auto flex gap-6 text-sm text-gray-600">
                  <span>Home</span>
                  <span>Products</span>
                  <span>Cart</span>
                </div>
              </div>

              {/* Mock Product Page */}
              <div className="max-w-4xl mx-auto p-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-80 flex items-center justify-center">
                      <svg className="w-32 h-32 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col">
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">Premium Product</h1>
                      <p className="text-gray-600 mb-4">High-quality item with amazing features</p>
                      <div className="text-4xl font-bold text-blue-600 mb-6">₹2,999</div>

                      {/* Razorpay Payment Button - Integrated */}
                      <button className="w-full h-14 bg-gradient-to-b from-[#1566f1] to-[#4793fd] text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        Pay with Razorpay
                      </button>

                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Secure payment powered by Razorpay
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
