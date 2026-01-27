import React, { useState, useRef, useEffect } from 'react';
import Ray from "./Ray";
import svgPaths from "./svg-zy1qiar5v1";
import svgPathsChips from "./svg-xvon3romwc";
import svgPathsInput from "./svg-tx7wrw30mz";
import { motion, AnimatePresence } from 'motion/react';
import { MoreHorizontal, Check, PanelRight, Layers, LayoutTemplate } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Variant2Landing from "@/app/components/Variant2Landing";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

// Background Image components from the provided Frame design
function BackgroundImage() {
    return (
      <div className="absolute inset-0 rounded-[8px]" />
    );
  }

function MicBackgroundImage() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mic">
          <g id="path">
            <path clipRule="evenodd" d={svgPathsInput.p36c9dec0} fill="var(--fill-0, #768EA7)" fillRule="evenodd" />
            <path d={svgPathsInput.p6ec300} fill="var(--fill-0, #768EA7)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AttachmentsIconBackgroundImage() {
  return (
    <div className="relative rounded-[38px] shrink-0 size-[32px] cursor-pointer hover:bg-slate-50 transition-colors">
      <BackgroundImage />
      <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="plus">
            <path d={svgPathsInput.p83dad00} fill="var(--fill-0, #768EA7)" id="path" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChipIconContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function SuggestionChip({ label, onClick }: { label: string, onClick?: () => void }) {
  return (
    <div onClick={onClick} className="cursor-pointer hover:opacity-80 transition-opacity shrink-0">
        <div className="bg-[rgba(108,132,157,0.09)] flex items-center px-[12px] h-[32px] rounded-[1000px]">
          <p className="font-['Inter:Medium',sans-serif] leading-[18px] text-[#243547] text-[13px] text-nowrap">{label}</p>
        </div>
    </div>
  );
}

interface Message {
  id: string;
  role: 'user' | 'ray';
  text: string;
  suggestions?: string[];
}

interface LedContainerProps {
  onClose?: () => void;
  context?: 'transactions-list' | 'transaction-details';
  transactionStatus?: string;
  mode?: 'floating' | 'native';
  onModeChange?: (mode: 'floating' | 'native') => void;
}

const SUGGESTIONS_MAP = {
  'transactions-list': [
    "Summarise today's payments",
    "What are the top reasons for failures?",
    "Which are my top payment methods"
  ],
  'details-failed': [
    "Why did this fail?",
    "Show customer history",
    "What are the next steps?"
  ],
  'details-success': [
    "When will this be settled?",
    "How much fees was charged?",
    "Was a receipt sent to the customer?"
  ]
};

// Helper to parse and format text
const parseBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <span key={index} className="font-['Inter:SemiBold',sans-serif] font-semibold text-[#40566d]">{part.slice(2, -2)}</span>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
            return <code key={index} className="bg-slate-100 px-1 rounded text-sm font-mono text-slate-800">{part.slice(1, -1)}</code>;
        }
        return part;
    });
};

const RayMessageContent = ({ text }: { text: string }) => {
    // If text contains newlines, treat as potentially structured content
    const blocks = text.split('\n\n');
    
    return (
        <div className="flex flex-col gap-[8px] items-start w-full">
            {blocks.map((block, idx) => {
                // Check if block contains list items (starts with bullet or has internal newlines with bullets)
                if (block.includes('\n•') || block.trim().startsWith('•') || block.trim().startsWith('-')) {
                    const items = block.split('\n').filter(line => line.trim().length > 0);
                    return (
                        <ul key={idx} className="list-disc pl-[24px] space-y-0 w-full marker:text-[#40566d]">
                            {items.map((item, itemIdx) => {
                                const cleanItem = item.replace(/^[•-]\s*/, '');
                                return (
                                    <li key={itemIdx} className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#40566d] pl-0.5">
                                        {parseBold(cleanItem)}
                                    </li>
                                );
                            })}
                        </ul>
                    );
                }
                
                // Check for potential headers (e.g. "Status of payment:") - simple heuristic
                if (block.includes(':') && block.length < 50 && !block.includes('\n')) {
                     return (
                        <h3 key={idx} className="font-['Inter:SemiBold',sans-serif] font-semibold text-[20px] leading-[26px] text-[#40566d]">
                            {parseBold(block)}
                        </h3>
                     );
                }

                // Standard paragraph
                return (
                    <p key={idx} className="font-['Inter:Regular',sans-serif] text-[16px] leading-[28px] text-[#40566d]">
                        {parseBold(block)}
                    </p>
                );
            })}
        </div>
    );
};

export default function LedContainer({ onClose, context = 'transactions-list', transactionStatus, mode, onModeChange }: LedContainerProps) {
  const [prompt, setPrompt] = useState('');
  const [view, setView] = useState<'landing' | 'chat'>('landing');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [landingVariant, setLandingVariant] = useState<'v1' | 'v2'>('v1');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Determine active suggestions based on context
  const getSuggestions = () => {
    if (context === 'transactions-list') return SUGGESTIONS_MAP['transactions-list'];
    if (context === 'transaction-details') {
       if (transactionStatus === 'Failed') return SUGGESTIONS_MAP['details-failed'];
       return SUGGESTIONS_MAP['details-success'];
    }
    return SUGGESTIONS_MAP['transactions-list'];
  };

  const activeSuggestions = getSuggestions();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const processResponse = async (userQuery: string) => {
    setIsTyping(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let responseText = "I can help you with that. Could you provide more details?";
    let matchedQuestion = "";
    
    // Updated logic for specific user questions
    const lowerQuery = userQuery.toLowerCase();
    
    // Default response based on context
    responseText = "I'm analyzing the data. Could you be more specific about what you need?";

    if (context === 'transactions-list') {
        if (lowerQuery.includes('volume') || lowerQuery.includes('summarize') || lowerQuery.includes('payments')) {
            responseText = "Total transaction volume for the last 30 days is **₹1.2Cr**, up 15% from the previous period.\n\n• Success rate is steady at **98.2%**.\n• Would you like a breakdown by payment method?";
            matchedQuestion = "Summarise today's payments";
        } else if (lowerQuery.includes('failure') || lowerQuery.includes('trends') || lowerQuery.includes('reasons')) {
            responseText = "I've detected a **5% spike in failures** for UPI transactions via HDFC bank between 2 PM and 4 PM today.\n\n• This appears to be a downstream bank downtime.\n• I'll monitor this and alert you if it persists.";
            matchedQuestion = "What are the top reasons for failures?";
        } else if (lowerQuery.includes('top') || lowerQuery.includes('method')) {
            responseText = "**UPI** remains the dominant method (65%), followed by **Cards** (25%) and **Netbanking** (10%).\n\n• Wallet usage has dropped by 2% this week.";
            matchedQuestion = "Which are my top payment methods";
        }
    } else if (context === 'transaction-details') {
        if (transactionStatus === 'Failed') {
             if (lowerQuery.includes('why') || lowerQuery.includes('fail')) {
                responseText = "Status of payment: pay_AbC1dE2fG3hI\n\n• The payment failed because the **transaction timed out**.\n• This typically means the customer didn't enter their UPI PIN or approve the transaction on their app within the time limit.\n• The payment was from Anita Patel, who is a repeat customer.";
                matchedQuestion = "Why did this fail?";
            } else if (lowerQuery.includes('history') || lowerQuery.includes('customer')) {
                responseText = "Customer History: Anita Patel\n\n• This customer (aditi.a@razorpay.com) has a **success rate of 85%**.\n• They have made 12 successful transactions in the last 6 months.\n• The last failure was on Nov 12 due to an OTP timeout.";
                matchedQuestion = "Show customer history";
            } else if (lowerQuery.includes('next') || lowerQuery.includes('step')) {
                responseText = "Recommended Next Steps:\n\n• I recommend sending a **Payment Link** via WhatsApp to retry immediately.\n• Alternatively, you can trigger a refund check if the customer claims a debit.";
                matchedQuestion = "What are the next steps?";
            }
        } else {
            // Success/Captured/Authorised
            if (lowerQuery.includes('settle') || lowerQuery.includes('when')) {
                responseText = "Settlement Status:\n\n• Settlement is scheduled for **Jan 17 (tomorrow) by 2 PM**.\n• Net amount to be credited: **₹998.12**.";
                matchedQuestion = "When will this be settled?";
            } else if (lowerQuery.includes('fee') || lowerQuery.includes('charge')) {
                responseText = "Fee Breakdown:\n\n• The total fee on this transaction is **₹1.88**.\n• Razorpay fee: ₹1.56\n• GST: ₹0.32";
                matchedQuestion = "How much fees was charged?";
            } else if (lowerQuery.includes('receipt')) {
                responseText = "Receipt Status:\n\n• Yes, Receipt **#REC123** was sent to the customer's registered email (aditi.a@razorpay.com) immediately after capture.";
                matchedQuestion = "Was a receipt sent to the customer?";
            }
        }
    }

    const relevantSuggestions = activeSuggestions.filter(s => s !== matchedQuestion);

    const rayMessage: Message = {
        id: Date.now().toString(),
        role: 'ray',
        text: responseText,
        suggestions: relevantSuggestions
    };

    setMessages(prev => [...prev, rayMessage]);
    setIsTyping(false);
  };

  const handleSend = () => {
    if (!prompt.trim()) return;
    
    const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        text: prompt
    };

    setMessages(prev => [...prev, userMessage]);
    setView('chat');
    const currentPrompt = prompt;
    setPrompt('');
    
    processResponse(currentPrompt);
  };

  const handleChipClick = (label: string) => {
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        text: label
    };
    setMessages(prev => [...prev, userMessage]);
    setView('chat');
    processResponse(label);
  };

  const InputArea = () => (
    <div className="absolute bottom-0 w-full z-20 px-4 pb-4">
          <div className="backdrop-blur-[5.5px] backdrop-filter bg-[rgba(255,255,255,0.9)] relative rounded-[24px] w-full shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)] min-h-[56px] flex flex-col justify-end transition-all duration-200 ease-out border border-slate-200">
              <div className="content-stretch flex items-start justify-between overflow-clip p-[12px] relative rounded-[inherit] w-full">
                {/* Left Side: Ray Logo + Input */}
                <div className="content-stretch flex gap-[8px] items-start p-[4px] relative shrink-0 flex-1">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="ray">
                        <path d={svgPathsInput.p342782a0} fill="#009E5C" id="path" />
                      </g>
                    </svg>
                  </div>
                  
                  <div className="flex-1 relative flex items-start min-h-[24px]">
                      {!prompt && (
                         <div className="absolute left-0 top-0 h-full flex items-start pointer-events-none gap-[2px]">
                            <span className="font-['Inter:Medium',sans-serif] text-[#7d7d7d] text-[16px] leading-[24px] tracking-[-0.208px]">Ask anything...</span>
                         </div>
                      )}
                      <textarea 
                        ref={(el) => {
                            if (el) {
                               el.style.height = 'auto';
                               el.style.height = Math.min(el.scrollHeight, 72) + 'px';
                               el.style.overflowY = el.scrollHeight > 72 ? 'auto' : 'hidden';
                            }
                        }}
                        rows={1}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        className="w-full bg-transparent border-none outline-none text-[#192839] text-[16px] font-sans resize-none overflow-hidden pl-1 py-0 leading-[24px]"
                      />
                  </div>
                </div>

                {/* Right Side: Actions */}
                <div className="absolute bottom-[12px] right-[12px] content-stretch flex gap-[8px] items-end justify-end">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                        <AttachmentsIconBackgroundImage />
                        <div className="relative rounded-[38px] shrink-0 size-[32px] cursor-pointer hover:bg-slate-50 transition-colors">
                            <BackgroundImage />
                            <MicBackgroundImage />
                        </div>
                    </div>
                    
                    {/* Send Button */}
                    <div 
                        onClick={handleSend}
                        className="bg-[rgba(0,0,0,0.04)] relative rounded-[100px] shrink-0 size-[32px] cursor-pointer hover:opacity-90 transition-opacity"
                    >
                        <div className="overflow-clip relative rounded-[inherit] size-full">
                            <div className="absolute border border-[#0354e0] border-solid inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(-73.0125deg, rgb(21, 102, 241) 54.842%, rgb(71, 147, 253) 98.573%)" }}>
                                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
                            </div>
                            <div className="absolute flex items-center justify-center left-1/2 size-[16px] top-[8px] translate-x-[-50%]">
                                <div className="flex-none rotate-[180deg]">
                                    <div className="relative size-[16px]">
                                        <div className="absolute inset-[-1.25%_-7.5%_-26.25%_-7.5%]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4006 20.4004">
                                                <g filter="url(#filter0_d_2017_7734)">
                                                    <path d={svgPathsInput.p4a27f00} fill="white" />
                                                    <path d={svgPathsInput.p359eb400} stroke="white" strokeWidth="0.2" />
                                                </g>
                                                <defs>
                                                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.4004" id="filter0_d_2017_7734" width="18.4006" x="0" y="-4.47035e-08">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                        <feOffset dy="2" />
                                                        <feGaussianBlur stdDeviation="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2017_7734" />
                                                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_2017_7734" mode="normal" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[100px]" />
                    </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#a4d4fe] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_6px_32px_4px_rgba(184,196,214,0.06)]" />
          </div>
      </div>
  );

  return (
    <div className="bg-white flex flex-col h-full relative rounded-[8px] shadow-2xl overflow-hidden">
      
      {/* Header Section */}
      <div className="relative shrink-0 w-full z-10 bg-white border-b border-slate-100">
        <div className="flex items-center justify-between px-[16px] py-[12px] w-full">
            <div className="flex gap-[8px] items-center">
              <div className="relative shrink-0 size-[20px]">
                <Ray />
              </div>
              <p className="font-sans font-semibold text-[#192839] text-[16px] leading-[24px]">Ray</p>
            </div>
            
            <div className="flex items-center gap-1">
                {onModeChange && (
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button className="cursor-pointer hover:bg-slate-100 p-1 rounded-md transition-colors text-slate-500 outline-none flex items-center justify-center">
                                <MoreHorizontal size={16} />
                            </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content 
                                className="min-w-[160px] bg-white rounded-lg p-1 shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)] border border-slate-100 will-change-[opacity,transform] z-[100]"
                                sideOffset={5}
                                align="end"
                            >
                                <DropdownMenu.Item 
                                    className="group text-[13px] leading-none text-slate-700 rounded-[4px] flex items-center h-[32px] px-[5px] relative pl-[28px] select-none outline-none hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-colors"
                                    onSelect={() => onModeChange('floating')}
                                >
                                     <div className="absolute left-[6px] w-[16px] flex items-center justify-center">
                                        {mode === 'floating' && <Check size={14} className="text-blue-600" />}
                                     </div>
                                     <span className="flex items-center gap-2">
                                        <Layers size={14} className="text-slate-400 group-hover:text-slate-600" />
                                        Floating
                                     </span>
                                </DropdownMenu.Item>
                                
                                <DropdownMenu.Item 
                                    className="group text-[13px] leading-none text-slate-700 rounded-[4px] flex items-center h-[32px] px-[5px] relative pl-[28px] select-none outline-none hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-colors"
                                    onSelect={() => onModeChange('native')}
                                >
                                     <div className="absolute left-[6px] w-[16px] flex items-center justify-center">
                                        {mode === 'native' && <Check size={14} className="text-blue-600" />}
                                     </div>
                                     <span className="flex items-center gap-2">
                                         <PanelRight size={14} className="text-slate-400 group-hover:text-slate-600" />
                                         Native
                                     </span>
                                </DropdownMenu.Item>

                                <DropdownMenu.Separator className="h-[1px] bg-slate-100 my-1" />
                                
                                <DropdownMenu.Label className="px-[5px] py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                    Landing Variant
                                </DropdownMenu.Label>

                                <DropdownMenu.Item 
                                    className="group text-[13px] leading-none text-slate-700 rounded-[4px] flex items-center h-[32px] px-[5px] relative pl-[28px] select-none outline-none hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-colors"
                                    onSelect={() => setLandingVariant('v1')}
                                >
                                     <div className="absolute left-[6px] w-[16px] flex items-center justify-center">
                                        {landingVariant === 'v1' && <Check size={14} className="text-blue-600" />}
                                     </div>
                                     <span className="flex items-center gap-2">
                                         <LayoutTemplate size={14} className="text-slate-400 group-hover:text-slate-600" />
                                         Variant 1
                                     </span>
                                </DropdownMenu.Item>

                                <DropdownMenu.Item 
                                    className="group text-[13px] leading-none text-slate-700 rounded-[4px] flex items-center h-[32px] px-[5px] relative pl-[28px] select-none outline-none hover:bg-slate-50 hover:text-slate-900 cursor-pointer transition-colors"
                                    onSelect={() => setLandingVariant('v2')}
                                >
                                     <div className="absolute left-[6px] w-[16px] flex items-center justify-center">
                                        {landingVariant === 'v2' && <Check size={14} className="text-blue-600" />}
                                     </div>
                                     <span className="flex items-center gap-2">
                                         <LayoutTemplate size={14} className="text-slate-400 group-hover:text-slate-600" />
                                         Variant 2
                                     </span>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                )}

                <div onClick={onClose} className="cursor-pointer hover:bg-slate-100 p-1 rounded-md transition-colors text-slate-500">
                   <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                       <path d="M12.4714 4.4714C12.7318 4.21105 12.7318 3.78894 12.4714 3.5286C12.2111 3.26825 11.7889 3.26825 11.5286 3.5286L8 7.05719L4.4714 3.5286C4.21105 3.26825 3.78894 3.26825 3.5286 3.5286C3.26825 3.78894 3.26825 4.21105 3.5286 4.4714L7.05719 8L3.5286 11.5286C3.26825 11.7889 3.26825 12.2111 3.5286 12.4714C3.78894 12.7318 4.21105 12.7318 4.4714 12.4714L8 8.94281L11.5286 12.4714C11.7889 12.7318 12.2111 12.7318 12.4714 11.5286L8.94281 8L12.4714 4.4714Z" />
                   </svg>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-white relative">
        {view === 'landing' ? (
             landingVariant === 'v2' ? (
                <Variant2Landing 
                    prompt={prompt} 
                    setPrompt={setPrompt} 
                    onSend={handleSend} 
                    onChipClick={handleChipClick} 
                />
             ) : (
             <div className="flex flex-col h-full relative">
                {/* Centered Greeting and Input */}
                <div className="flex-1 flex flex-col items-center justify-center w-full px-4 pb-48">
                    <div className="flex flex-col items-center gap-4 w-full max-w-[640px]">
                        <div className="size-[40px]">
                            <Ray />
                        </div>
                        <h2 className="text-[#094c85] font-sans text-[24px] font-semibold text-center leading-tight mb-4">
                            Good afternoon, Ishan!
                        </h2>
                    </div>
                </div>

                {/* Bottom Suggestions (Footer Strip) */}
                <div className="absolute bottom-[88px] left-0 w-full px-4 pb-2 pt-4 bg-gradient-to-t from-white via-white to-transparent z-10">
                    <div className="w-full flex flex-col gap-3 items-center max-w-[400px] mx-auto">
                        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider text-center">Things you can ask me</p>
                        <div className="flex flex-col gap-2 w-full items-center">
                            {activeSuggestions.map((suggestion, idx) => (
                                <SuggestionChip 
                                    key={idx}
                                    onClick={() => handleChipClick(suggestion)}
                                    label={suggestion} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
                
                <InputArea />
            </div>
            )
        ) : (
            <div className="p-4 flex flex-col gap-6 min-h-full pb-32">
                {messages.map((msg, index) => (
                    <motion.div 
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.role === 'user' ? (
                            <div className="max-w-[85%] bg-[#F1F5FA] text-[#090e13] px-4 py-3 rounded-2xl rounded-tr-sm text-[15px] leading-relaxed whitespace-pre-line">
                                {msg.text}
                            </div>
                        ) : (
                            <div className="flex gap-3 max-w-[90%]">
                                {/* Ray logo removed */}
                                <div className="flex flex-col gap-1 w-full pt-1">
                                    <RayMessageContent text={msg.text} />
                                    {index === messages.length - 1 && (
                                        <>
                                            <div className="flex gap-2 mt-1">
                                                {/* Simple feedback actions */}
                                                <button className="text-slate-400 hover:text-slate-600 p-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></button>
                                                <button className="text-slate-400 hover:text-slate-600 p-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg></button>
                                            </div>
                                            
                                            {/* Follow-up suggestions */}
                                            {msg.suggestions && msg.suggestions.length > 0 && (
                                                <div className="flex flex-col items-start gap-2 mt-2">
                                                    {msg.suggestions.map((suggestion, idx) => (
                                                        <SuggestionChip 
                                                            key={idx}
                                                            label={suggestion}
                                                            onClick={() => handleChipClick(suggestion)}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
                
                {isTyping && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex w-full justify-start"
                    >
                         <div className="flex gap-3 max-w-[90%]">
                            
                            <div className="flex items-center gap-1 h-[28px] pl-2">
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>
        )}
      </div>

      {/* Chat Input Area (Always visible at the bottom ONLY in chat view) */}
      {view === 'chat' && (
        <InputArea />
      )}
    </div>
  );
}
