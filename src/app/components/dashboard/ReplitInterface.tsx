import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, ChevronLeft, Play, RotateCw } from 'lucide-react';

interface ReplitInterfaceProps {
  onClose: () => void;
  initialPrompt?: string;
}

const SAMPLE_CODE = `// server.js
const express = require('express');
const Razorpay = require('razorpay');
const app = express();

const razorpay = new Razorpay({
  key_id: 'rzp_test_5BBRP05LqWxRbD',
  key_secret: '4e#MFL+1N!1SGqAH2MuqD+x6'
});

app.use(express.json());
app.use(express.static('public'));

app.post('/create-order', async (req, res) => {
  const options = {
    amount: req.body.amount * 100,
    currency: 'INR',
    receipt: 'order_rcptid_' + Date.now()
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`;

export const ReplitInterface: React.FC<ReplitInterfaceProps> = ({ onClose, initialPrompt = '' }) => {
  const [activeFile, setActiveFile] = useState('server.js');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#1e1e1e] z-50 flex flex-col"
    >
      {/* Header - Replit Style */}
      <div className="h-14 bg-[#0e1525] border-b border-[#1c2333] flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Ray</span>
          </button>

          <div className="h-6 w-px bg-[#1c2333]" />

          {/* Replit Logo */}
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 512 512" fill="none">
              <path d="M253.397 165.568H74.005c-17.088 0-31.36 14.272-31.36 31.36v118.144c0 17.088 14.272 31.36 31.36 31.36h179.392c17.088 0 31.36-14.272 31.36-31.36V196.928c0-17.088-14.272-31.36-31.36-31.36z" fill="#F26207"/>
            </svg>
            <span className="text-white font-semibold text-sm">my-razorpay-app</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="h-8 px-3 bg-[#0f62fe] hover:bg-[#0353e9] text-white text-sm font-medium rounded flex items-center gap-2 transition-colors">
            <Play className="w-3.5 h-3.5" fill="white" />
            Run
          </button>
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Code Editor */}
        <div className="flex-1 bg-[#0e1525] flex flex-col">
          {/* File Tabs */}
          <div className="h-10 bg-[#0e1525] border-b border-[#1c2333] flex items-center px-2 gap-1">
            <button
              className={`h-8 px-3 text-sm font-medium rounded transition-colors ${
                activeFile === 'server.js'
                  ? 'bg-[#1c2333] text-white'
                  : 'text-[#9ca3af] hover:bg-[#1c2333]/50'
              }`}
              onClick={() => setActiveFile('server.js')}
            >
              server.js
            </button>
            <button
              className={`h-8 px-3 text-sm font-medium rounded transition-colors ${
                activeFile === 'index.html'
                  ? 'bg-[#1c2333] text-white'
                  : 'text-[#9ca3af] hover:bg-[#1c2333]/50'
              }`}
              onClick={() => setActiveFile('index.html')}
            >
              index.html
            </button>
            <button
              className={`h-8 px-3 text-sm font-medium rounded transition-colors ${
                activeFile === 'package.json'
                  ? 'bg-[#1c2333] text-white'
                  : 'text-[#9ca3af] hover:bg-[#1c2333]/50'
              }`}
              onClick={() => setActiveFile('package.json')}
            >
              package.json
            </button>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-auto p-4 font-mono text-sm">
            <pre className="text-[#e6edf3]">
              <code>{SAMPLE_CODE}</code>
            </pre>
          </div>
        </div>

        {/* Right Panel - Website Preview */}
        <div className="w-[600px] bg-white flex flex-col border-l border-[#1c2333]">
          {/* Preview Header */}
          <div className="h-10 bg-[#0e1525] border-b border-[#1c2333] flex items-center px-4 gap-3">
            <span className="text-xs font-medium text-[#9ca3af]">Webview</span>
            <div className="flex gap-2 ml-auto">
              <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#1c2333] text-[#9ca3af]">
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Preview Content - Simple Website */}
          <div className="flex-1 overflow-auto">
            <div className="w-full h-full bg-white">
              {/* Simple landing page */}
              <div className="min-h-full bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-6xl mx-auto px-8 py-16">
                  <div className="text-center space-y-8">
                    <h1 className="text-6xl font-bold text-gray-900">
                      Welcome to My App
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      A simple and elegant web application built with modern technologies
                    </p>
                    <div className="flex gap-4 justify-center pt-8">
                      <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                        Get Started
                      </button>
                      <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-8 mt-24">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast</h3>
                      <p className="text-gray-600 text-sm">Lightning quick performance</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure</h3>
                      <p className="text-gray-600 text-sm">Enterprise-grade security</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Simple</h3>
                      <p className="text-gray-600 text-sm">Easy to use interface</p>
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
