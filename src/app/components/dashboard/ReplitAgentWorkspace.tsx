import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronDown,
  MessageSquare,
  Paperclip,
  Send,
  Globe,
  RotateCw,
  X
} from 'lucide-react';

interface ReplitAgentWorkspaceProps {
  onClose: () => void;
}

const SUGGESTION_CHIPS = [
  'Check my app for bugs',
  'Add payment processing',
  'Improve the homepage design',
  'Add a contact form',
  'Make it mobile responsive',
  'Add a dark mode toggle'
];

export const ReplitAgentWorkspace: React.FC<ReplitAgentWorkspaceProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'console'>('preview');
  const [chatInput, setChatInput] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0a0a0a] z-50 flex"
    >
      {/* LEFT PANEL: AI AGENT CHAT (35%) */}
      <div className="w-[35%] bg-[#000000] border-r border-[#1f1f1f] flex flex-col">
        {/* Top Navigation */}
        <div className="h-14 border-b border-[#1f1f1f] flex items-center justify-between px-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Back to Ray</span>
          </button>
        </div>

        {/* Project Breadcrumb */}
        <div className="px-6 py-3 border-b border-[#1f1f1f]">
          <div className="flex items-center gap-2 text-sm text-[#9ca3af]">
            <span className="text-white font-medium">Electro Commerce</span>
            <span>/</span>
            <span>Agent</span>
          </div>
        </div>

        {/* Chat Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-32">
          {/* Agent Icon */}
          <div className="mb-8">
            <div className="relative">
              <MessageSquare
                className="w-20 h-20 text-[#404040] stroke-[0.5]"
                strokeWidth={0.5}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>

          {/* Header */}
          <h2 className="text-xl font-normal text-white mb-2 text-center">
            New chat with Agent
          </h2>
          <p className="text-sm text-[#9ca3af] mb-8 text-center max-w-sm">
            Start building your app by describing what you want or choose a suggestion below
          </p>

          {/* Suggestion Chips Grid */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-md">
            {SUGGESTION_CHIPS.map((suggestion, idx) => (
              <button
                key={idx}
                className="px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-sm text-[#d1d5db] hover:border-[#404040] hover:bg-[#151515] transition-all text-left"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Chat Input */}
        <div className="p-4 border-t border-[#1f1f1f] bg-[#000000]">
          <div className="flex items-center gap-2">
            {/* Build Dropdown Button */}
            <button className="flex items-center gap-2 px-3 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-sm text-white hover:bg-[#151515] transition-colors">
              <span>Build</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#9ca3af]" />
            </button>

            {/* Chat Input */}
            <div className="flex-1 relative flex items-center gap-2 px-3 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg focus-within:border-[#404040] transition-colors">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Describe what you want to build..."
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder-[#6b7280]"
              />
              <button className="text-[#9ca3af] hover:text-white transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>
            </div>

            {/* Send Button */}
            <button className="w-9 h-9 bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg flex items-center justify-center transition-colors">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Helper Text */}
          <p className="text-xs text-[#6b7280] mt-2 text-center">
            Agent can make mistakes. Review code and output carefully.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL: PREVIEW (65%) */}
      <div className="flex-1 bg-[#0a0a0a] flex flex-col">
        {/* Browser-style Header */}
        <div className="h-14 bg-[#0a0a0a] border-b border-[#1f1f1f] flex flex-col">
          {/* Tabs Row */}
          <div className="flex items-center gap-1 px-4 h-10">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 h-8 rounded-t text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'preview'
                  ? 'bg-[#1a1a1a] text-white'
                  : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab('console')}
              className={`px-4 h-8 rounded-t text-sm font-medium transition-colors ${
                activeTab === 'console'
                  ? 'bg-[#1a1a1a] text-white'
                  : 'text-[#9ca3af] hover:text-white'
              }`}
            >
              Console
            </button>
          </div>

          {/* URL Bar Row */}
          <div className="flex items-center gap-2 px-4 pb-2">
            <button className="text-[#9ca3af] hover:text-white transition-colors">
              <RotateCw className="w-3.5 h-3.5" />
            </button>
            <div className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-3 py-1.5 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#6b7280]" />
              <span className="text-xs text-[#9ca3af]">https://electro-commerce.replit.dev/</span>
            </div>
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-auto bg-white">
          {activeTab === 'preview' && (
            <div className="min-h-full">
              {/* ElectroStore Hero Section */}
              <div className="relative bg-white overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-8 py-20">
                  <div className="grid grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <div className="space-y-8">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-blue-700">New Arrivals Available</span>
                      </div>

                      {/* Heading */}
                      <div className="space-y-4">
                        <h1 className="text-7xl font-bold text-gray-900 leading-[1.1]">
                          Next Gen<br />Tech
                        </h1>
                        <p className="text-xl text-gray-600 max-w-lg">
                          Discover the latest in cutting-edge electronics and premium gadgets designed for the modern lifestyle.
                        </p>
                      </div>

                      {/* CTAs */}
                      <div className="flex gap-4">
                        <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                          Shop Now
                        </button>
                        <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors">
                          View Collection
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="flex gap-8 pt-4">
                        <div>
                          <div className="text-3xl font-bold text-gray-900">500+</div>
                          <div className="text-sm text-gray-600">Products</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gray-900">50k+</div>
                          <div className="text-sm text-gray-600">Happy Customers</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-gray-900">4.9</div>
                          <div className="text-sm text-gray-600">Rating</div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Product Image */}
                    <div className="relative">
                      {/* Floating Card Effect */}
                      <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                          {/* Laptop Illustration */}
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-4/5 h-3/4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl border-4 border-gray-700 flex items-center justify-center">
                              <div className="w-[95%] h-[90%] bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm" />
                            </div>
                          </div>
                        </div>

                        {/* Floating Tag */}
                        <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">
                          30% OFF
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50" />
                      <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-8">
                  <div className="grid grid-cols-4 gap-8">
                    {[
                      { icon: '🚚', title: 'Free Shipping', desc: 'On orders over $50' },
                      { icon: '🔒', title: 'Secure Payment', desc: '100% protected' },
                      { icon: '↩️', title: 'Easy Returns', desc: '30-day guarantee' },
                      { icon: '💬', title: '24/7 Support', desc: 'Always here to help' }
                    ].map((feature, idx) => (
                      <div key={idx} className="text-center space-y-2">
                        <div className="text-4xl mb-2">{feature.icon}</div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'console' && (
            <div className="bg-[#000000] text-[#00ff00] font-mono text-sm p-4 min-h-full">
              <div className="space-y-1">
                <div>$ npm start</div>
                <div className="text-[#9ca3af]">Starting development server...</div>
                <div className="text-white">Server running at http://localhost:3000</div>
                <div className="text-[#00ff00]">✓ Compiled successfully</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
