import React, { useState, useEffect } from 'react';
import { StoreProvider } from './StoreContext';
import { FormProvider } from './FormStore';
import { RayLayout } from './RayLayout';
import clsx from "clsx";
import { Menu, ChevronDown, Sparkles, Check, LayoutTemplate, ArrowUpRight, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { RayInputBox } from './RayInputBox';
import { RaySidebar } from './RaySidebar';
import Ray from "../../../imports/Ray";
import imgHeroCardBg from "figma:asset/f9e01682c64370f508a272cdc70ec2928a2e3147.png";
import Variant2Landing from '../Variant2Landing';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useDemo } from '../../../context/DemoContext';
import svgPathsChips from "../../../imports/svg-xvon3romwc";
import svgPathsInput from "../../../imports/svg-h0tl9nb0vi";
import svgPathsCards from "../../../imports/svg-9ik4xuwq12";
import svgPathsStats from "../../../imports/svg-h6d9ul042g";
import { motion } from 'motion/react';

// --- Helper Components ---

function ChipIconContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function SuggestionChip({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#f8fafc] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[rgba(48,94,255,0.09)] transition-colors border border-transparent hover:border-blue-100"
    >
      <div className="content-stretch flex gap-[7px] items-center overflow-clip p-[12px] relative rounded-[inherit]">
        <ChipIconContainer>{icon}</ChipIconContainer>
        <p className="font-sans font-medium leading-[24px] not-italic relative shrink-0 text-[#40566d] text-[16px] text-nowrap">{label}</p>
      </div>
    </div>
  );
}

// --- EXPERIMENTAL: Briefing Item with Hover Affordance ---
// This component adds a "Review with Ray" hover interaction
// To revert: Replace BriefingItem usage with original static JSX
interface BriefingItemProps {
  index: number;
  children: React.ReactNode;
  isHovered: boolean;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}

const BriefingItem = ({ index, children, isHovered, hoveredIndex, onHover }: BriefingItemProps) => {
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <motion.div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full cursor-pointer"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      animate={{
        opacity: isOtherHovered ? 0.4 : 1,
        filter: isOtherHovered ? 'blur(1px)' : 'blur(0px)',
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Main content row */}
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center pt-[4px] relative shrink-0">
          <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[6px] relative rounded-[80px] shrink-0 size-[16px]">
            <p className="font-['Inter',sans-serif] font-medium leading-[14px] not-italic relative shrink-0 text-[#2980e1] text-[10px]">{index}</p>
          </div>
        </div>
        <p className="font-['TASA_Orbiter_Display',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#fdfdfd] text-[18px] tracking-[-0.234px]">
          {children}
        </p>
      </div>

      {/* "Review with Ray" affordance - appears on hover */}
      <motion.div
        className="flex items-center gap-[6px] pl-[26px] overflow-hidden"
        initial={false}
        animate={{
          height: isHovered ? 24 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          height: {
            duration: 0.25,
            ease: [0.25, 0.1, 0.25, 1],
          },
          opacity: {
            duration: 0.2,
            delay: isHovered ? 0.05 : 0,
          },
        }}
      >
        {/* Circular chevron icon */}
        <motion.div
          className="size-[18px] rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"
          initial={false}
          animate={{
            scale: isHovered ? 1 : 0.6,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: [0.34, 1.56, 0.64, 1], // spring-like
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </motion.div>

        {/* Text reveal */}
        <motion.span
          className="text-[14px] font-medium text-white/90 whitespace-nowrap"
          initial={false}
          animate={{
            x: isHovered ? 0 : -10,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.25,
            delay: isHovered ? 0.08 : 0,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          Review with Ray
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

// --- Main Components ---

interface RayDashboardProps {
  onNavigate: (view: 'home' | 'transactions') => void;
  onNavigateToPayments: () => void;
  initialQuery?: string;
  autoSubmit?: boolean;
  onLogout?: () => void;
}

export const RayDashboard: React.FC<RayDashboardProps> = (props) => {
  return (
    <StoreProvider>
      <FormProvider>
        <RayDashboardContent {...props} />
      </FormProvider>
    </StoreProvider>
  );
};

const RayDashboardContent: React.FC<RayDashboardProps> = ({ onNavigate, onNavigateToPayments, initialQuery, onLogout }) => {
  const { currentPersona } = useDemo(); // <--- LISTENING TO CONTEXT
  
  const [view, setView] = useState<'landing' | 'chat'>('landing');
  const [prompt, setPrompt] = useState(initialQuery || '');
  const [waveTrigger, setWaveTrigger] = useState(0);
  const [lastQuery, setLastQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [landingVariant, setLandingVariant] = useState<'v1' | 'v2'>('v1'); // Changed to 'v1' to show responsive cards

  // EXPERIMENTAL: Track which briefing item is hovered (null = none)
  const [hoveredBriefingItem, setHoveredBriefingItem] = useState<number | null>(null);

  // Sync prompt with persona when on landing page
  useEffect(() => {
    if (view === 'landing' && !initialQuery) {
        setPrompt(currentPersona.landing.initialPrompt);
    }
  }, [currentPersona, view, initialQuery]);

  const handleSend = () => {
    if (!prompt.trim()) return;
    setLastQuery(prompt);
    setPrompt('');
    setView('chat');
    setIsSidebarCollapsed(true);
  };

  const handleHomeClick = () => {
    setView('landing');
    setPrompt(currentPersona.landing.initialPrompt);
    onNavigate('home'); 
  };

  // --- Dynamic Data Extraction ---
  const briefingCard = currentPersona.landing.cards.find(c => c.type === 'briefing');
  const statsCard = currentPersona.landing.cards.find(c => c.type === 'stats');
  const settlementCard = currentPersona.landing.cards.find(c => c.type === 'settlement');
  
  // Theme Logic
  const isNegative = currentPersona.theme === 'negative';
  const isNeutral = currentPersona.theme === 'neutral'; // Sarah
  const isPositive = currentPersona.theme === 'positive'; // Maya

  // Dynamic Styles
  const greetingColor = isNegative ? 'text-[#0e1c2a]' : 'text-[#094c85]';
  
  const statsBg = isNegative 
    ? 'bg-gradient-to-br from-red-50 via-white to-white border-red-100' 
    : 'bg-gradient-to-br from-green-50 via-white to-white border-green-100';
    
  const statsTitleColor = isNegative ? 'text-red-600' : 'text-slate-600';
  const mainValueColor = isNegative ? 'text-slate-900' : 'text-slate-900';

  return (
    <div className="bg-[#F8FAFC] relative w-full h-full overflow-hidden flex font-sans transition-colors duration-500">
      <RaySidebar 
        currentView={view === 'landing' ? 'new-chat' : 'chat'}
        onChangeView={(v) => {
            if (v === 'new-chat') {
                handleHomeClick();
                setIsSidebarCollapsed(false);
            } else if (v.startsWith('thread-')) {
                setView('chat');
                setIsSidebarCollapsed(true);
            }
            setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isCollapsed={isSidebarCollapsed}
        onCollapseChange={setIsSidebarCollapsed}
        onLogout={onLogout}
      />

      {/* Main Content Area */}
      <div className={clsx(
        "flex-1 relative flex flex-col h-full bg-white transition-all duration-300",
        isSidebarCollapsed ? "md:ml-[72px]" : "md:ml-64"
      )}>
        {/* Top Nav */}
        <div className="h-14 border-b border-slate-100 flex items-center px-4 md:px-6 justify-between bg-white z-20">
            <div className="flex items-center gap-3 md:gap-6">
                <button 
                    className="md:hidden p-1 text-slate-500 hover:bg-slate-100 rounded"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <Menu size={20} />
                </button>

                <div 
                  className="bg-[#EFF6FF] flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer shadow-[inset_0px_-1px_0px_0px_white]"
                  onClick={handleHomeClick}
                >
                    <div className="w-[18px] h-[18px]"><Ray /></div>
                    <span className="text-sm font-medium text-slate-900">Ray AI</span>
                </div>
                
                <div className="hidden md:flex gap-6 text-sm text-slate-500 font-medium items-center">
                    <span className="hover:text-slate-900 cursor-pointer" onClick={onNavigateToPayments}>Payments</span>
                    <span className="hover:text-slate-900 cursor-pointer">Neobanking</span>
                    <span className="hover:text-slate-900 cursor-pointer">Payroll</span>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <span className="hover:text-slate-900 cursor-pointer flex items-center gap-1 select-none">
                              More <ChevronDown size={14} />
                            </span>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="min-w-[160px] bg-white rounded-lg p-1 shadow-lg border border-slate-100 z-[100]" sideOffset={5} align="end">
                                <DropdownMenu.Item className="text-sm text-slate-700 rounded flex items-center px-2 py-1.5 hover:bg-slate-50 cursor-pointer" onSelect={() => setLandingVariant('v1')}>
                                     {landingVariant === 'v1' && <Check size={14} className="mr-2 text-blue-600" />} Variant 1
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="text-sm text-slate-700 rounded flex items-center px-2 py-1.5 hover:bg-slate-50 cursor-pointer" onSelect={() => setLandingVariant('v2')}>
                                     {landingVariant === 'v2' && <Check size={14} className="mr-2 text-blue-600" />} Variant 2
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center text-xs font-medium uppercase ${isNegative ? 'bg-red-900' : 'bg-slate-900'}`}>
                    {currentPersona.name.charAt(0)}
                </div>
            </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 relative overflow-hidden dashboard-bg transition-[background] duration-700">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] opacity-30">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${isNegative ? 'from-red-100 via-transparent to-orange-100' : 'from-blue-100 via-transparent to-green-100'} blur-3xl rounded-full mix-blend-multiply transition-colors duration-1000`} />
               </div>
            </div>

            {view === 'landing' ? (
                landingVariant === 'v2' ? (
                    <Variant2Landing 
                        prompt={prompt}
                        setPrompt={setPrompt}
                        onSend={handleSend}
                        onChipClick={(label) => {
                             setLastQuery(label);
                             setView('chat');
                             setIsSidebarCollapsed(true);
                        }}
                    />
                ) : (
                <div className="relative z-10 h-full overflow-y-auto flex flex-col items-center justify-start p-8 px-[32px] pt-[48px] pb-[100px] scrollbar-hide">
                     {/* Greeting Section */}
                     <div 
                         className="flex items-center gap-[12px] mb-8 group cursor-default" 
                         onMouseEnter={() => setWaveTrigger(prev => prev + 1)}
                     >
                        <div className="relative shrink-0 size-[32px]">
                            <Ray trigger={waveTrigger} />
                        </div>
                        <h1 className={`font-sans font-medium text-[30px] leading-[34px] tracking-[-0.39px] transition-colors duration-300 ${greetingColor}`}>
                            {currentPersona.landing.greeting}
                        </h1>
                     </div>

                     {/* Input Box */}
                     <div className="w-full max-w-2xl relative mb-8 flex flex-col gap-[32px] items-center">
                        <RayInputBox 
                            value={prompt}
                            onChange={setPrompt}
                            onSend={handleSend}
                            variant="hero"
                            placeholder="Ask me anything..."
                        />
                        
                        {/* Suggestion Categories */}
                        <div className="content-stretch flex gap-[13px] items-center relative shrink-0 flex-wrap justify-center">
                            {/* Recent transactions */}
                            <div 
                                onClick={() => setPrompt("Show me recent transactions")}
                                className="h-[32px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
                                style={{ backgroundImage: "linear-gradient(189.448deg, rgba(255, 255, 255, 0) 10.211%, rgba(255, 255, 255, 0.8) 41.559%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)" }}
                            >
                                <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip pl-[12px] pr-[16px] py-[8px] relative rounded-[inherit]">
                                    <div className="relative shrink-0 size-[16px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                            <g><path clipRule="evenodd" d={svgPathsChips.p9de6b00} fill="#40566D" fillRule="evenodd" /></g>
                                        </svg>
                                    </div>
                                    <p className="font-['Inter',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] tracking-[-0.182px]">Recent transactions</p>
                                </div>
                                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_15px_2px_rgba(255,255,255,0.6)]" />
                                <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            </div>
                            
                            {/* Summarize */}
                            <div 
                                onClick={() => setPrompt("Summarize my dashboard")}
                                className="h-[32px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
                                style={{ backgroundImage: "linear-gradient(193.721deg, rgba(255, 255, 255, 0) 10.211%, rgba(255, 255, 255, 0.8) 41.559%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)" }}
                            >
                                <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip pl-[12px] pr-[16px] py-[8px] relative rounded-[inherit]">
                                    <div className="relative shrink-0 size-[16px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                            <g>
                                                <path d={svgPathsChips.p3a34d00} fill="#40566D" />
                                                <path clipRule="evenodd" d={svgPathsChips.p1727b600} fill="#40566D" fillRule="evenodd" />
                                            </g>
                                        </svg>
                                    </div>
                                    <p className="font-['Inter',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] tracking-[-0.182px]">Summarize</p>
                                </div>
                                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_15px_2px_rgba(255,255,255,0.6)]" />
                                <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            </div>
                            
                            {/* Analyze */}
                            <div 
                                onClick={() => setPrompt("Analyze my payment volume")}
                                className="h-[32px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
                                style={{ backgroundImage: "linear-gradient(196.433deg, rgba(255, 255, 255, 0) 10.211%, rgba(255, 255, 255, 0.8) 41.559%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)" }}
                            >
                                <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip pl-[12px] pr-[16px] py-[8px] relative rounded-[inherit]">
                                    <div className="relative shrink-0 size-[16px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                            <g><path d={svgPathsChips.p2368a080} fill="#40566D" /></g>
                                        </svg>
                                    </div>
                                    <p className="font-['Inter',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] tracking-[-0.182px]">Analyze</p>
                                </div>
                                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_15px_2px_rgba(255,255,255,0.6)]" />
                                <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            </div>
                            
                            {/* Troubleshoot */}
                            <div 
                                onClick={() => setPrompt("Why are payments failing?")}
                                className="h-[32px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
                                style={{ backgroundImage: "linear-gradient(192.443deg, rgba(255, 255, 255, 0) 10.211%, rgba(255, 255, 255, 0.8) 41.559%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)" }}
                            >
                                <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip pl-[12px] pr-[16px] py-[8px] relative rounded-[inherit]">
                                    <div className="relative shrink-0 size-[16px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                            <g><path d={svgPathsChips.p3072b700} fill="#40566D" /></g>
                                        </svg>
                                    </div>
                                    <p className="font-['Inter',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] tracking-[-0.182px]">Troubleshoot</p>
                                </div>
                                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_15px_2px_rgba(255,255,255,0.6)]" />
                                <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            </div>
                            
                            {/* Ray 101 */}
                            <div 
                                onClick={() => setPrompt("What can Ray do?")}
                                className="h-[32px] relative rounded-[12px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
                                style={{ backgroundImage: "linear-gradient(196.908deg, rgba(255, 255, 255, 0) 10.211%, rgba(255, 255, 255, 0.8) 41.559%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)" }}
                            >
                                <div className="content-stretch flex gap-[4px] h-full items-center overflow-clip pl-[12px] pr-[16px] py-[8px] relative rounded-[inherit]">
                                    <div className="relative shrink-0 size-[16px]">
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                            <g><path d={svgPathsChips.pe4107c0} fill="#40566D" /></g>
                                        </svg>
                                    </div>
                                    <p className="font-['Inter',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#40566d] text-[14px] tracking-[-0.182px]">Ray 101</p>
                                </div>
                                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_15px_2px_rgba(255,255,255,0.6)]" />
                                <div aria-hidden="true" className="absolute border border-[rgba(108,132,157,0.18)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                            </div>
                        </div>
                     </div>

                     {/* Dynamic Cards Grid */}
                     <div className="w-full max-w-[850px]">
                        {/* Responsive Grid Layout with Equal Spacing */}
                        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 auto-rows-min">
                        
                        {/* 1. TODAY'S BRIEFING CARD (Left) - Blue gradient background - Spans 2 rows on desktop */}
                        <motion.div 
                          className="bg-white h-[390px] md:row-span-2 overflow-clip rounded-[10px] w-full relative"
                          initial={{ opacity: 0, y: 26 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 2.0, 
                            delay: 0,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                        >
                          {/* Blue gradient background with layers */}
                          <div className="absolute inset-0">
                            {/* Background gradients */}
                            <div className="absolute flex inset-[36.11%_-12.5%_-10.95%_-23.57%] items-center justify-center">
                              <div className="flex-none h-[291.883px] rotate-[180deg] scale-y-[-100%] w-[381.001px]">
                                <div className="relative size-full">
                                  <div className="absolute inset-[-17.4%_-13.33%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482.574 393.456">
                                      <g filter="url(#filter0_f_briefing_bg1)">
                                        <path d={svgPathsCards.p31a56d00} fill="#82C1FA" />
                                      </g>
                                      <defs>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="393.456" id="filter0_f_briefing_bg1" width="482.574" x="0" y="0">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                          <feGaussianBlur result="effect1_foregroundBlur_briefing_bg1" stdDeviation="25.3933" />
                                        </filter>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex inset-[49.27%_-12.5%_-24.11%_-23.57%] items-center justify-center">
                              <div className="flex-none h-[291.883px] rotate-[180deg] scale-y-[-100%] w-[381.001px]">
                                <div className="relative size-full">
                                  <div className="absolute inset-[-17.4%_-13.33%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 482.574 393.456">
                                      <g filter="url(#filter0_f_briefing_bg2)">
                                        <path d={svgPathsCards.p31a56d00} fill="white" />
                                      </g>
                                      <defs>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="393.456" id="filter0_f_briefing_bg2" width="482.574" x="0" y="0">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                          <feGaussianBlur result="effect1_foregroundBlur_briefing_bg2" stdDeviation="25.3933" />
                                        </filter>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex inset-[-27.93px_-165.06px_-489.73px_-550px] items-center justify-center">
                              <div className="flex-none h-[753.167px] rotate-[167.19deg] scale-y-[-100%] skew-x-[2.47deg] w-[816.812px]">
                                <div className="relative size-full">
                                  <div className="absolute inset-[-11.15%_-10.28%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 984.812 921.167">
                                      <g filter="url(#filter0_f_briefing_main)">
                                        <path d={svgPathsCards.p3c22a940} fill="url(#paint0_linear_briefing_main)" />
                                      </g>
                                      <defs>
                                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="921.167" id="filter0_f_briefing_main" width="984.812" x="0" y="0">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                          <feGaussianBlur result="effect1_foregroundBlur_briefing_main" stdDeviation="42" />
                                        </filter>
                                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_briefing_main" x1="492.406" x2="416.78" y1="84" y2="395.564">
                                          <stop stopColor="#1291D0" />
                                          <stop offset="1" stopColor="#4D7FFF" />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Icon */}
                          <div className="absolute left-[19px] size-[18px] top-[30px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path d={svgPathsCards.p32c28e80} fill="#FDFDFD" />
                            </svg>
                          </div>
                          
                          {/* Title */}
                          <p className="absolute font-['Inter',sans-serif] font-normal leading-[26px] left-[47px] not-italic text-[14px] text-white top-[28px] tracking-[-0.28px]">TODAY'S BRIEFING</p>
                          
                          {/* Content List - Dynamic based on persona */}
                          {/* EXPERIMENTAL: Using BriefingItem with hover affordance */}
                          <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[19px] top-[79px] w-[239px]">
                            {/* Item 1 */}
                            <BriefingItem
                              index={1}
                              isHovered={hoveredBriefingItem === 1}
                              hoveredIndex={hoveredBriefingItem}
                              onHover={setHoveredBriefingItem}
                            >
                              {isNegative
                                ? <>Your refund volume for last<br />3 days was unusually high</>
                                : isNeutral
                                  ? <>Your refund volumes are<br />unusually high</>
                                  : <>No refunds or disputes so far<br />today</>
                              }
                            </BriefingItem>

                            {/* Item 2 */}
                            <BriefingItem
                              index={2}
                              isHovered={hoveredBriefingItem === 2}
                              hoveredIndex={hoveredBriefingItem}
                              onHover={setHoveredBriefingItem}
                            >
                              Payment timeouts are the most common failure reason (2%)
                            </BriefingItem>

                            {/* Item 3 */}
                            <BriefingItem
                              index={3}
                              isHovered={hoveredBriefingItem === 3}
                              hoveredIndex={hoveredBriefingItem}
                              onHover={setHoveredBriefingItem}
                            >
                              Cards & UPI payments<br />account for 96% of this<br />week's payment volume<br />(₹7.1 lakh)
                            </BriefingItem>
                          </div>
                        </motion.div>
                        
                        {/* Right Column - Nested Grid for 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-rows-[auto_auto] gap-4 w-full">
                        
                        {/* 2. ACCOUNT BALANCE / PAYMENT VOLUME CARD (Top Right) - Dynamic color based on theme */}
                        <motion.div
                          className={clsx(
                            "bg-white border border-solid overflow-clip rounded-[10px] h-[201px] w-full relative",
                            isNegative ? "border-[#fee4e2]" : isNeutral ? "border-[#fed7aa]" : "border-[#d1fae5]"
                          )}
                          initial={{ opacity: 0, y: 26 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 2.0,
                            delay: 0.3,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                        >
                          {/* Gradient SVG shapes in background - dynamic color */}
                          <div className="absolute inset-[calc(24.4%-1px)_calc(-39.84%-1px)_calc(-54.56%-1px)_calc(57.66%-1px)]">
                            <div className="absolute inset-[-21.21%_-12.12%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520.69 341.067">
                                <g filter="url(#filter0_f_stats_bg1)">
                                  <path d={svgPathsStats.pd204a80} fill={isNegative ? "#FA8282" : isNeutral ? "#FDBA74" : "#6EE7B7"} />
                                </g>
                                <defs>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="341.067" id="filter0_f_stats_bg1" width="520.691" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_stats_bg1" stdDeviation="25.3933" />
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[calc(77.11%-1px)_calc(30.75%-1px)_calc(-107.27%-1px)_calc(-12.93%-1px)]">
                            <div className="absolute inset-[-21.21%_-12.12%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520.69 341.067">
                                <g filter="url(#filter0_f_stats_bg2)">
                                  <path d={svgPathsStats.pd204a80} fill={isNegative ? "#FA8282" : isNeutral ? "#FDBA74" : "#6EE7B7"} />
                                </g>
                                <defs>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="341.067" id="filter0_f_stats_bg2" width="520.691" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_stats_bg2" stdDeviation="25.3933" />
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </div>

                          {/* Main Content - Dynamic based on theme */}
                          <div className="absolute bottom-[21px] content-stretch flex flex-col gap-[8px] items-start left-[19px] w-[313px]">
                            {isNegative ? (
                              <>
                                {/* Arjun: Available Balance Row */}
                                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                  <p className="font-['Inter',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#768ea7] text-[12px] tracking-[0.24px]">AVAILABLE BALANCE</p>
                                  <div className="content-stretch flex items-end justify-end relative shrink-0">
                                    <div className="content-stretch flex items-baseline relative shrink-0">
                                      <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
                                        <span className="font-['Inter',sans-serif] font-semibold leading-[20px] not-italic text-[#192839] text-[14px] opacity-64">₹</span>
                                        <span className="font-['TASA_Orbiter_Display',sans-serif] font-semibold leading-[26px] not-italic text-[#192839] text-[20px]">-46,000</span>
                                        <span className="font-['Inter',sans-serif] font-semibold leading-[20px] not-italic text-[#192839] text-[14px] opacity-64">.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Arjun: Payments Collected Row */}
                                <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
                                  <p className="font-['Inter',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#768ea7] text-[12px] tracking-[0.24px]">PAYMENTS COLLECTED</p>
                                  <div className="content-stretch flex items-end justify-end relative shrink-0">
                                    <div className="content-stretch flex items-baseline relative shrink-0">
                                      <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
                                        <span className="font-['Inter',sans-serif] font-semibold leading-[20px] not-italic text-[#192839] text-[14px] opacity-64">₹</span>
                                        <span className="font-['TASA_Orbiter_Display',sans-serif] font-semibold leading-[26px] not-italic text-[#192839] text-[20px]">1,20,000</span>
                                        <span className="font-['Inter',sans-serif] font-semibold leading-[20px] not-italic text-[#192839] text-[14px] opacity-64">.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                {/* Maya/Sarah: Payments Collected Row */}
                                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                                  <p className="font-['Inter',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#768ea7] text-[12px] tracking-[0.24px]">PAYMENTS COLLECTED</p>
                                  <div className="content-stretch flex items-end justify-end relative shrink-0">
                                    <div className="content-stretch flex items-baseline relative shrink-0">
                                      <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
                                        <span className="font-['Inter',sans-serif] font-semibold leading-[20px] not-italic text-[#192839] text-[14px] opacity-64">₹</span>
                                        <span className="font-['TASA_Orbiter_Display',sans-serif] font-semibold leading-[26px] not-italic text-[#192839] text-[20px]">1,13,000</span>
                                        <span className="font-['Inter',sans-serif] font-semibold leading-[20px] not-italic text-[#192839] text-[14px] opacity-64">.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Maya/Sarah: Available Balance Row */}
                                <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
                                  <p className="font-['Inter',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#768ea7] text-[12px] tracking-[0.24px]">AVAILABLE BALANCE</p>
                                  <div className="content-stretch flex items-end justify-end relative shrink-0">
                                    <div className="content-stretch flex items-baseline relative shrink-0">
                                      <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
                                        <span className="font-['Inter',sans-serif] font-semibold leading-[20px] not-italic text-[#192839] text-[14px] opacity-64">₹</span>
                                        <span className="font-['TASA_Orbiter_Display',sans-serif] font-semibold leading-[26px] not-italic text-[#192839] text-[20px]">1,00,000</span>
                                        <span className="font-['Inter',sans-serif] font-semibold leading-[20px] not-italic text-[#192839] text-[14px] opacity-64">.00</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>

                          {/* Title at top - Dynamic based on theme */}
                          <p className="absolute font-['TASA_Orbiter_Display',sans-serif] leading-[28px] left-[19px] not-italic text-[20px] top-[17px] tracking-[-0.26px]">
                            {isNegative ? (
                              <>
                                <span className="text-black">Your account balance </span>
                                <span className="font-['TASA_Orbiter_Display',sans-serif] font-bold text-[#d92d20]">is negative</span>
                              </>
                            ) : isNeutral ? (
                              <>
                                <span className="text-black">Payment volumes </span>
                                <span className="font-['TASA_Orbiter_Display',sans-serif] font-bold text-[#ea580c]">low</span>
                                <span className="text-black"> than usual today</span>
                              </>
                            ) : (
                              <>
                                <span className="text-black">Payment volumes </span>
                                <span className="font-['TASA_Orbiter_Display',sans-serif] font-bold text-[#00a251]">higher</span>
                                <span className="text-black"> than usual today</span>
                              </>
                            )}
                          </p>
                        </motion.div>

                        {/* Bottom Row - Success Rate and Settlement Cards side by side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        
                        {/* 3. SUCCESS RATE CARD (Bottom Left) */}
                        <motion.div 
                          className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.1)] border-solid not-italic overflow-clip rounded-[12px] h-[183px] w-full relative"
                          initial={{ opacity: 0, y: 26 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 2.0, 
                            delay: 0.6,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                        >
                          {/* Title at top */}
                          <p className="absolute font-['TASA_Orbiter_Display',sans-serif] leading-[28px] left-[12px] text-[#40566d] text-[20px] top-[15px] tracking-[-0.26px]">
                            Your payment success rate is <span className="font-['TASA_Orbiter_Display',sans-serif] font-semibold text-[#00a251]">healthy</span>
                          </p>
                          
                          {/* Label */}
                          <p className="absolute font-['Inter',sans-serif] font-medium leading-[16px] left-[12px] text-[#768ea7] text-[12px] top-[111px] tracking-[0.24px]">SUCCESS RATE</p>
                          
                          {/* Large percentage value */}
                          <div className="absolute flex flex-col font-['TASA_Orbiter_Display',sans-serif] font-semibold justify-end leading-[0] left-[75px] text-[#192839] text-[32px] text-right top-[169px] translate-x-[-100%] translate-y-[-100%]">
                            <p className="leading-[38px]">98%</p>
                          </div>
                        </motion.div>

                        {/* 4. SETTLEMENT CARD (Bottom Right) - Dynamic color based on theme */}
                        <motion.div
                          className="bg-[#fcfcfc] border border-[rgba(0,0,0,0.1)] border-solid h-[183px] overflow-clip rounded-[12px] w-full relative"
                          initial={{ opacity: 0, y: 26 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 2.0,
                            delay: 0.9,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                        >
                          {/* Ellipse gradient at bottom - dynamic color */}
                          <div className="absolute h-[98px] left-[-27px] top-[173px] w-[275px]">
                            <div className="absolute inset-[-61.22%_-21.82%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 395 218">
                                <g filter="url(#filter0_f_settlement_glow)" opacity="0.97">
                                  <ellipse cx="197.5" cy="109" fill={isNegative ? "#D92D20" : "#10B981"} rx="137.5" ry="49" />
                                </g>
                                <defs>
                                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="218" id="filter0_f_settlement_glow" width="395" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                                    <feGaussianBlur result="effect1_foregroundBlur_settlement_glow" stdDeviation="30" />
                                  </filter>
                                </defs>
                              </svg>
                            </div>
                          </div>

                          {/* Title - Dynamic based on theme */}
                          <p className="absolute font-['TASA_Orbiter_Display',sans-serif] leading-[28px] left-[13px] not-italic text-[20px] top-[15px] tracking-[-0.26px]">
                            <span className="text-black text-[18px]">Your settlements are</span><br />
                            {isNegative ? (
                              <span className="font-['TASA_Orbiter_Display',sans-serif] font-bold text-[#d92d20] text-[18px]">paused</span>
                            ) : (
                              <span className="font-['TASA_Orbiter_Display',sans-serif] font-bold text-[#00a251] text-[18px]">on track</span>
                            )}
                          </p>

                          {/* Amount */}
                          <div className="absolute content-stretch flex items-end justify-end left-[15px] top-[131px]">
                            <div className="content-stretch flex items-baseline relative shrink-0">
                              <div className="content-stretch flex gap-[2px] items-baseline relative shrink-0">
                                <span className="font-['Inter',sans-serif] font-semibold leading-[26px] not-italic text-[#192839] text-[20px] opacity-64">₹</span>
                                <span className="font-['TASA_Orbiter_Display',sans-serif] font-semibold leading-[38px] not-italic text-[#192839] text-[32px]">1.26L</span>
                              </div>
                            </div>
                          </div>

                          {/* Label */}
                          <p className="absolute font-['Inter',sans-serif] font-medium leading-[16px] left-[15px] not-italic text-[#768ea7] text-[10px] top-[111px] tracking-[0.3px]">NEXT SETTLEMENT</p>
                        </motion.div>
                        
                        </div>
                        </div>

                     </div>
                     </div>
                </div>
                )
            ) : (
                <RayLayout initialQuery={lastQuery} />
            )}
        </div>
      </div>
    </div>
  );
};