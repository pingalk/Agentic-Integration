import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  Play,
  Search,
  File,
  GitBranch,
  Settings,
  ChevronRight,
  ChevronDown,
  User,
  Terminal,
  Code
} from 'lucide-react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Editor from '@monaco-editor/react';

interface ReplitWorkspaceProps {
  onClose: () => void;
}

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

const FILE_TREE: FileNode[] = [
  {
    name: 'src',
    type: 'folder',
    children: [
      { name: 'index.js', type: 'file' },
      { name: 'server.js', type: 'file' },
      { name: 'utils.js', type: 'file' }
    ]
  },
  {
    name: 'public',
    type: 'folder',
    children: [
      { name: 'index.html', type: 'file' },
      { name: 'styles.css', type: 'file' }
    ]
  },
  { name: 'package.json', type: 'file' },
  { name: 'README.md', type: 'file' }
];

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

const FileTreeItem: React.FC<{ node: FileNode; level: number }> = ({ node, level }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const isFolder = node.type === 'folder';

  return (
    <div>
      <div
        className="flex items-center gap-1 px-2 py-1 hover:bg-[#2d2d30] cursor-pointer text-[13px] text-[#cccccc]"
        style={{ paddingLeft: `${8 + level * 12}px` }}
        onClick={() => isFolder && setIsExpanded(!isExpanded)}
      >
        {isFolder && (
          isExpanded ?
            <ChevronDown className="w-3 h-3 text-[#cccccc]" /> :
            <ChevronRight className="w-3 h-3 text-[#cccccc]" />
        )}
        {!isFolder && <File className="w-3 h-3 text-[#cccccc]" />}
        <span className="ml-1">{node.name}</span>
      </div>
      {isFolder && isExpanded && node.children && (
        <div>
          {node.children.map((child, idx) => (
            <FileTreeItem key={idx} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const ReplitWorkspace: React.FC<ReplitWorkspaceProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'console' | 'shell'>('console');
  const [activeSidebarTab, setActiveSidebarTab] = useState<'files' | 'git' | 'tools'>('files');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0e1117] z-50 flex flex-col font-['Inter',sans-serif]"
    >
      {/* Header */}
      <div className="h-12 bg-[#1a1b1e] border-b border-[#2d2d30] flex items-center justify-between px-4 gap-4">
        {/* Left: Back button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Center: Search bar and Project title */}
        <div className="flex-1 flex items-center justify-center gap-4 max-w-2xl">
          <div className="flex items-center gap-2 bg-[#0e1117] px-3 py-1.5 rounded-md border border-[#2d2d30] flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#858585]" />
            <input
              type="text"
              placeholder="Search files..."
              className="bg-transparent text-[#cccccc] text-sm outline-none flex-1 placeholder-[#858585]"
            />
          </div>
          <span className="text-sm font-semibold text-white">my-razorpay-app</span>
        </div>

        {/* Right: Run button and User profile */}
        <div className="flex items-center gap-3">
          <button className="h-9 px-4 bg-[#00e676] hover:bg-[#00d966] text-[#0e1117] text-sm font-semibold rounded-md flex items-center gap-2 transition-colors">
            <Play className="w-4 h-4" fill="currentColor" />
            Run
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Icon Sidebar */}
        <div className="w-12 bg-[#1a1b1e] border-r border-[#2d2d30] flex flex-col items-center py-3 gap-2">
          <button
            onClick={() => setActiveSidebarTab('files')}
            className={`w-9 h-9 rounded flex items-center justify-center transition-colors ${
              activeSidebarTab === 'files' ? 'bg-[#2d2d30] text-white' : 'text-[#858585] hover:text-white'
            }`}
          >
            <File className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveSidebarTab('git')}
            className={`w-9 h-9 rounded flex items-center justify-center transition-colors ${
              activeSidebarTab === 'git' ? 'bg-[#2d2d30] text-white' : 'text-[#858585] hover:text-white'
            }`}
          >
            <GitBranch className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveSidebarTab('tools')}
            className={`w-9 h-9 rounded flex items-center justify-center transition-colors ${
              activeSidebarTab === 'tools' ? 'bg-[#2d2d30] text-white' : 'text-[#858585] hover:text-white'
            }`}
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Resizable Panel Group */}
        <PanelGroup direction="horizontal" className="flex-1">
          {/* File Tree Panel */}
          <Panel defaultSize={20} minSize={15} maxSize={35}>
            <div className="h-full bg-[#1a1b1e] border-r border-[#2d2d30] flex flex-col">
              {/* File Tree Header */}
              <div className="h-9 border-b border-[#2d2d30] flex items-center px-3">
                <span className="text-xs font-semibold text-[#cccccc] uppercase tracking-wide">Explorer</span>
              </div>
              {/* File Tree Content */}
              <div className="flex-1 overflow-y-auto py-2">
                {activeSidebarTab === 'files' && FILE_TREE.map((node, idx) => (
                  <FileTreeItem key={idx} node={node} level={0} />
                ))}
                {activeSidebarTab === 'git' && (
                  <div className="px-3 py-2 text-sm text-[#858585]">
                    No changes to commit
                  </div>
                )}
                {activeSidebarTab === 'tools' && (
                  <div className="px-3 py-2 text-sm text-[#858585]">
                    Tools and extensions
                  </div>
                )}
              </div>
            </div>
          </Panel>

          <PanelResizeHandle className="w-[1px] bg-[#2d2d30] hover:bg-[#00e676] transition-colors" />

          {/* Main Editor Area */}
          <Panel defaultSize={55} minSize={30}>
            <div className="h-full bg-[#0e1117] flex flex-col">
              {/* Editor Tab Bar */}
              <div className="h-9 bg-[#1a1b1e] border-b border-[#2d2d30] flex items-center px-2">
                <div className="h-7 px-3 bg-[#0e1117] rounded-t flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-[#00e676]" />
                  <span className="text-xs text-[#cccccc]">server.js</span>
                </div>
              </div>
              {/* Monaco Editor */}
              <div className="flex-1">
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  defaultValue={SAMPLE_CODE}
                  theme="vs-dark"
                  options={{
                    fontSize: 13,
                    fontFamily: "'Fira Code', 'Monaco', 'Courier New', monospace",
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    lineNumbers: 'on',
                    renderLineHighlight: 'all',
                    automaticLayout: true
                  }}
                />
              </div>
            </div>
          </Panel>

          <PanelResizeHandle className="w-[1px] bg-[#2d2d30] hover:bg-[#00e676] transition-colors" />

          {/* Console/Terminal Panel */}
          <Panel defaultSize={25} minSize={20} maxSize={40}>
            <div className="h-full bg-[#000000] flex flex-col">
              {/* Console Tabs */}
              <div className="h-9 bg-[#1a1b1e] border-b border-[#2d2d30] flex items-center px-2 gap-1">
                <button
                  onClick={() => setActiveTab('console')}
                  className={`h-7 px-3 rounded text-xs font-medium transition-colors ${
                    activeTab === 'console'
                      ? 'bg-[#000000] text-white'
                      : 'text-[#858585] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    Console
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('shell')}
                  className={`h-7 px-3 rounded text-xs font-medium transition-colors ${
                    activeTab === 'shell'
                      ? 'bg-[#000000] text-white'
                      : 'text-[#858585] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" />
                    Shell
                  </div>
                </button>
              </div>

              {/* Console Content */}
              <div className="flex-1 overflow-y-auto p-3 font-['Fira_Code','Monaco','Courier_New',monospace] text-[13px]">
                {activeTab === 'console' && (
                  <div className="space-y-1">
                    <div className="text-[#00e676]">&gt; npm start</div>
                    <div className="text-[#858585]">Starting development server...</div>
                    <div className="text-white">Server running on http://localhost:3000</div>
                    <div className="text-[#00e676]">✓ Compiled successfully</div>
                  </div>
                )}
                {activeTab === 'shell' && (
                  <div className="space-y-1">
                    <div className="text-white">
                      <span className="text-[#00e676]">➜</span> <span className="text-[#4fc3f7]">my-razorpay-app</span> <span className="text-[#858585]">git:(</span><span className="text-[#ff9800]">main</span><span className="text-[#858585]">)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00e676]">$</span>
                      <span className="text-white animate-pulse">|</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </motion.div>
  );
};
