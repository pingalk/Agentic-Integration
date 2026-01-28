import React, { useState, useEffect, useRef } from 'react';
import { RayMessageRenderer, RayResponseData } from './chat/RayMessageRenderer';
import { AddFundsWidget } from './chat/AddFundsWidget';
import { TransactionPreviewPane, TransactionData } from './chat/TransactionPreviewPane';
import { ArrowDown, ArrowUp, Mic, Plus, Sparkles } from 'lucide-react';
import { useDemo } from '@/context/DemoContext';
import { useDemoScript } from './useDemoScript';
import { motion, AnimatePresence } from 'motion/react';

// --- Context Aware Data Generator ---
const generateArjunData = (): RayResponseData => {
  const today = new Date();
  const formatDate = (date: Date) => date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const formatTime = (date: Date) => date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  // Generate dynamic dates relative to now
  const d1 = new Date(today); // Today
  const d2 = new Date(today); d2.setDate(today.getDate() - 1); // Yesterday
  const d3 = new Date(today); d3.setDate(today.getDate() - 2); 
  const d4 = new Date(today); d4.setDate(today.getDate() - 3);

  // Random realistic RRNs
  const rrn = () => Math.floor(100000000000 + Math.random() * 900000000000).toString();

  return {
    id: 'ai-response-1',
    sender: 'ai',
    artifact: {
      type: 'investigation_report',
      data: {
        headline: "Your settlements are paused due to a negative balance of ₹46,000.",
        subtext: "This happened because your refunds this week exceeded your payments:",
        stats: [
          { label: "Payments received", value: "₹7.6 Lakhs" },
          { label: "Refunds processed", value: "₹8.0 Lakhs" },
          { label: "Current difference", value: "-₹46,000" }
        ],
        table: {
          rows: [
            { id: '1', amount: '₹1,85,000', status: 'Processed', date: `${formatDate(d1)}, ${formatTime(d1)}`, rrn: rrn(), email: 'priya.mehta@email.com' },
            { id: '2', amount: '₹1,20,000', status: 'Processed', date: `${formatDate(d2)}, ${formatTime(d2)}`, rrn: rrn(), email: 'rahul.trading@email.com' },
            { id: '3', amount: '₹95,000', status: 'Processed', date: `${formatDate(d3)}, 11:08 AM`, rrn: rrn(), email: 'supplier.ops@email.com' },
            { id: '4', amount: '₹88,000', status: 'Processing', date: `${formatDate(d4)}, 6:45 PM`, rrn: rrn(), email: 'ankita.shah@email.com' },
            { id: '5', amount: '₹75,000', status: 'Processed', date: `${formatDate(d4)}, 3:30 PM`, rrn: rrn(), email: 'orders@business.com' },
          ]
        },
        resolution: {
          title: "How to unlock your money immediately:",
          content: "You have ₹1.26 Lakhs in settlements waiting. Add ₹46,000 to your Razorpay account now to clear the negative balance, and your full ₹1.26 Lakhs will be transferred to your bank by the next business day."
        },
        suggestions: [
          "Add funds worth ₹46,000",
          "How can I avoid this negative balance in the future?",
          "Tell me how Refund Credits can keep my settlements running smoothly."
        ]
      }
    }
  };
};

export const RayChatInterface = () => {
  const { currentPersona } = useDemo();
  const { arjunScript, sarahScript, mayaScript } = useDemoScript();
  const [messages, setMessages] = useState<RayResponseData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const messageRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [showScrollButton, setShowScrollButton] = useState(false);
  const prevMessageCountRef = useRef(0);

  // Widget States
  const [showAddFundsWidget, setShowAddFundsWidget] = useState(false);
  const [widgetAmount, setWidgetAmount] = useState('');

  // Input Box States
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const isInputExpanded = isInputFocused || isInputHovered || inputValue.length > 0;

  // Sarah Flow State
  const [sarahFlowStep, setSarahFlowStep] = useState(0);

  // Maya Flow State
  const [mayaFlowStep, setMayaFlowStep] = useState(0);

  // Transaction Preview State
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionData | null>(null);

  // Handler for table row clicks
  const handleRowClick = (rowData: any) => {
    // Transform row data to TransactionData format
    const transaction: TransactionData = {
      id: rowData.id || `txn-${Date.now()}`,
      type: rowData.status?.toLowerCase() === 'refunded' ? 'refund' : 'payment',
      amount: rowData.amount || '₹0',
      status: rowData.status || 'Unknown',
      date: rowData.date || rowData.createdOn || new Date().toLocaleDateString(),
      email: rowData.email,
      rrn: rowData.rrn,
      method: rowData.method || rowData.paymentMethod,
      paymentId: `pay_${Math.random().toString(36).substr(2, 12)}`,
      refundId: rowData.status?.toLowerCase() === 'refunded' ? `rfnd_${Math.random().toString(36).substr(2, 12)}` : undefined,
    };
    setSelectedTransaction(transaction);
  };

  // Triggers for demo flow - Arjun
  useEffect(() => {
    if (currentPersona.id === 'arjun' && messages.length === 0) {
        // Step 1: User asks question
        setTimeout(() => {
            setMessages([{
                id: 'u1',
                sender: 'user',
                blocks: [{ type: 'text', content: "Where are my settlements? Why is my account balance negative? We had high value txns this week" }]
            }]);

            // Step 2: Show Thinking State
            setTimeout(() => {
                const thinkingMsg: RayResponseData = {
                    id: 'ai-response-1',
                    sender: 'ai',
                    isThinking: true
                };
                setMessages(prev => [...prev, thinkingMsg]);

                // Step 3: Replace with Real Response after delay
                setTimeout(() => {
                    setMessages(prev => prev.map(msg =>
                        msg.id === 'ai-response-1' ? generateArjunData() : msg
                    ));
                }, 2000); // 2s thinking time
            }, 600);
        }, 600);
    }
  }, [currentPersona.id, messages.length]);

  // Triggers for demo flow - Sarah
  useEffect(() => {
    if (currentPersona.id === 'sarah' && messages.length === 0) {
        // Step 1: User asks question
        setTimeout(() => {
            setMessages([{
                id: 'sarah-u1',
                sender: 'user',
                blocks: [{ type: 'text', content: "My customer called and said payment was refunded. I didn't initiate this.. What is going on?" }]
            }]);
            setSarahFlowStep(1);

            // Step 2: Show Thinking State
            setTimeout(() => {
                const thinkingMsg: RayResponseData = {
                    id: 'sarah-ai-1',
                    sender: 'ai',
                    isThinking: true
                };
                setMessages(prev => [...prev, thinkingMsg]);

                // Step 3: Replace with Investigation Report after delay
                setTimeout(() => {
                    setMessages(prev => prev.map(msg =>
                        msg.id === 'sarah-ai-1' ? {
                            ...sarahScript.sarah_step_1,
                            id: 'sarah-ai-1',
                            sender: 'ai' as const
                        } : msg
                    ));
                }, 2000); // 2s thinking time
            }, 600);
        }, 600);
    }
  }, [currentPersona.id, messages.length, sarahScript]);

  // Triggers for demo flow - Maya
  useEffect(() => {
    if (currentPersona.id === 'maya' && messages.length === 0) {
        // Step 1: User asks for Arvind's transactions
        setTimeout(() => {
            setMessages([{
                id: 'maya-u1',
                sender: 'user',
                blocks: [{ type: 'text', content: "Show me recent payments from arvind@gmail.com" }]
            }]);
            setMayaFlowStep(1);

            // Step 2: Show Thinking State
            setTimeout(() => {
                const thinkingMsg: RayResponseData = {
                    id: 'maya-ai-1',
                    sender: 'ai',
                    isThinking: true
                };
                setMessages(prev => [...prev, thinkingMsg]);

                // Step 3: Replace with Transactions Report after delay
                setTimeout(() => {
                    setMessages(prev => prev.map(msg =>
                        msg.id === 'maya-ai-1' ? {
                            ...mayaScript.maya_step_1,
                            id: 'maya-ai-1',
                            sender: 'ai' as const
                        } : msg
                    ));
                }, 2000); // 2s thinking time
            }, 600);
        }, 600);
    }
  }, [currentPersona.id, messages.length, mayaScript]);

  // Auto-scroll: user messages to top of viewport, AI messages show start
  useEffect(() => {
    if (!scrollContainerRef.current || messages.length === 0) return;

    const isNewMessage = messages.length > prevMessageCountRef.current;
    prevMessageCountRef.current = messages.length;

    if (!isNewMessage) return;

    const lastMessage = messages[messages.length - 1];

    setTimeout(() => {
      const messageEl = messageRefs.current.get(lastMessage.id);
      if (!messageEl || !scrollContainerRef.current) return;

      if (lastMessage.sender === 'user') {
        // User message: scroll so it's at the TOP of viewport
        const targetScroll = messageEl.offsetTop - 24;
        scrollContainerRef.current.scrollTo({
          top: Math.max(0, targetScroll),
          behavior: 'smooth'
        });
      } else {
        // AI message: scroll to show start of response
        messageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, [messages.length]);

  // Handle Scroll to toggle button visibility
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    
    // Show button if we are not at the bottom (with 50px buffer)
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
    setShowScrollButton(!isAtBottom);
  };

  // Scroll to next response logic
  const scrollToNext = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const currentBottom = container.scrollTop + container.clientHeight;
    
    // Find the first message that ends below the current viewport
    const nextMessage = messages.find(msg => {
      const el = messageRefs.current.get(msg.id);
      if (!el) return false;
      // 5px buffer
      return el.offsetTop + el.offsetHeight > currentBottom + 5; 
    });

    if (nextMessage) {
      const el = messageRefs.current.get(nextMessage.id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
      // Fallback: just scroll to very bottom
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  };

  // Check scroll button visibility when messages change (e.g. new message arrives but is offscreen)
  useEffect(() => {
    handleScroll();
  }, [messages]);

  // Check for "Add Funds" in input
  useEffect(() => {
    if (inputValue.toLowerCase().includes('add funds')) {
      setShowAddFundsWidget(true);
    } else {
      // Optionally hide it if they delete the text, but for better UX maybe keep it open if it was opened?
      // For now, let's close it if text is cleared or doesn't match to keep it responsive to "typing"
      // But if it was opened via suggestion, we shouldn't close it just because input is empty.
      // So let's only auto-open via text. Auto-closing is tricky.
      // Let's say: if input has "add funds", show it. 
      // If input doesn't have it, ONLY hide if it was NOT opened by suggestion? 
      // Simplified: If input includes "add funds", force show.
      // If I want to close it, I need a close handler.
      // For now: only open on match.
    }
  }, [inputValue]);

  const handleSuggestionClick = (suggestion: string) => {
    // Handle Arjun's Add Funds suggestion
    if (suggestion.toLowerCase().includes('add funds')) {
      // Extract amount: "Add funds worth ₹46,000"
      const match = suggestion.match(/₹([0-9,]+)/);
      const amount = match ? match[1].replace(/,/g, '') : ''; // 46000

      setWidgetAmount(amount); // This will pass '46000' which widget formats as needed
      setShowAddFundsWidget(true);
      return;
    }

    // Handle Sarah's flow transitions
    if (currentPersona.id === 'sarah') {
      // Handle "Yes" button click
      if (suggestion === 'Yes') {
        if (sarahFlowStep === 1) {
          // Transition from step 1 to step 2 (auto-capture confirmation)
          handleSarahFlowAdvance("Yes", sarahScript.sarah_step_2, 2);
        } else if (sarahFlowStep === 2) {
          // Transition from step 2 to step 3 (payment links created)
          handleSarahFlowAdvance("Yes", sarahScript.sarah_step_3, 3);
        } else if (sarahFlowStep === 3) {
          // Transition from step 3 to step 4 (notifications enabled)
          handleSarahFlowAdvance("Yes", sarahScript.sarah_step_4, 4);
        }
        return;
      }

      // Handle "Not now" button click
      if (suggestion === 'Not now') {
        // Show dismissal message and end flow
        setMessages(prev => [...prev, {
          id: `sarah-u-${Date.now()}`,
          sender: 'user',
          blocks: [{ type: 'text', content: 'Not now' }]
        }]);

        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: `sarah-ai-dismiss-${Date.now()}`,
            sender: 'ai',
            artifact: {
              type: 'simple_text',
              data: {
                headline: "No problem!",
                body: "I'll be here whenever you need help. Feel free to ask me anything about your payments or account settings.",
                suggestions: []
              }
            }
          }]);
        }, 600);
        return;
      }

      // Handle suggestion clicks that trigger auto-capture flow
      if (sarahFlowStep === 1 && (
        suggestion.toLowerCase().includes('auto-capture') ||
        suggestion.toLowerCase().includes('change payment')
      )) {
        handleSarahFlowAdvance(suggestion, sarahScript.sarah_step_2, 2);
        return;
      }
    }

    // Handle Maya's flow transitions
    if (currentPersona.id === 'maya') {
      // Step 1 → Step 2: "He claims double debit"
      if (mayaFlowStep === 1 && suggestion.toLowerCase().includes('double debit')) {
        handleMayaFlowAdvance(suggestion, mayaScript.maya_step_2, 2);
        return;
      }

      // Step 2 → Step 3: "Draft explanation for Arvind"
      if (mayaFlowStep === 2 && suggestion.toLowerCase().includes('draft')) {
        handleMayaFlowAdvance(suggestion, mayaScript.maya_step_3, 3);
        return;
      }

      // Step 3: Handle draft message actions
      if (mayaFlowStep === 3) {
        if (suggestion.toLowerCase().includes('copy')) {
          // Copy the draft message to clipboard
          const draftMessage = mayaScript.maya_step_3.artifact.data.draftMessage;
          navigator.clipboard.writeText(draftMessage);
          return;
        }
      }
    }
  };

  // Helper function to advance Sarah's flow
  const handleSarahFlowAdvance = (userMessage: string, nextStep: any, nextFlowStep: number) => {
    // Add user message
    setMessages(prev => [...prev, {
      id: `sarah-u-${Date.now()}`,
      sender: 'user',
      blocks: [{ type: 'text', content: userMessage }]
    }]);

    // Show thinking state
    setTimeout(() => {
      const thinkingId = `sarah-ai-thinking-${Date.now()}`;
      setMessages(prev => [...prev, {
        id: thinkingId,
        sender: 'ai',
        isThinking: true
      }]);

      // Replace with next step response
      setTimeout(() => {
        setMessages(prev => {
          const withoutThinking = prev.filter(m => !m.isThinking);
          return [...withoutThinking, {
            ...nextStep,
            id: `sarah-ai-${Date.now()}`,
            sender: 'ai' as const
          }];
        });
        setSarahFlowStep(nextFlowStep);
      }, 1500);
    }, 600);
  };

  // Helper function to advance Maya's flow
  const handleMayaFlowAdvance = (userMessage: string, nextStep: any, nextFlowStep: number) => {
    // Add user message
    setMessages(prev => [...prev, {
      id: `maya-u-${Date.now()}`,
      sender: 'user',
      blocks: [{ type: 'text', content: userMessage }]
    }]);

    // Show thinking state
    setTimeout(() => {
      const thinkingId = `maya-ai-thinking-${Date.now()}`;
      setMessages(prev => [...prev, {
        id: thinkingId,
        sender: 'ai',
        isThinking: true
      }]);

      // Replace with next step response
      setTimeout(() => {
        setMessages(prev => {
          const withoutThinking = prev.filter(m => !m.isThinking);
          return [...withoutThinking, {
            ...nextStep,
            id: `maya-ai-${Date.now()}`,
            sender: 'ai' as const
          }];
        });
        setMayaFlowStep(nextFlowStep);
      }, 1500);
    }, 600);
  };

  return (
    <div className="flex h-full relative bg-white font-sans overflow-hidden">

      {/* Main Chat Container - animates width when preview is open */}
      <motion.div
        className="flex flex-col h-full relative"
        initial={false}
        animate={{
          width: selectedTransaction ? '60%' : '100%',
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 28,
          mass: 1,
        }}
      >
        {/* 1. Scrollable Chat Area */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-4 md:px-6 pt-6 pb-56 scrollbar-hide"
        >
           <div className={`flex flex-col gap-10 mx-auto transition-all duration-300 ${selectedTransaction ? 'max-w-[600px]' : 'max-w-[800px]'}`}>
              {messages.map((msg, index) => (
                 <div key={msg.id} ref={el => { if (el) messageRefs.current.set(msg.id, el) }} className="w-full">
                    <RayMessageRenderer
                      data={msg}
                      isLast={index === messages.length - 1}
                      onSuggestionClick={handleSuggestionClick}
                      onRowClick={handleRowClick}
                    />
                 </div>
              ))}
           </div>
        </div>

      {/* Floating Scroll Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToNext}
            className="absolute bottom-[130px] left-1/2 -translate-x-1/2 z-[60] size-9 bg-white border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors"
          >
            <ArrowDown size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Pinned Glass Input (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 z-50">
         
         {/* Add Funds Widget - Floats above input */}
         <AnimatePresence>
           {showAddFundsWidget && (
             <AddFundsWidget 
               initialAmount={widgetAmount}
               onClose={() => setShowAddFundsWidget(false)}
               onConfirm={(amt, purpose) => {
                 console.log("Adding funds:", amt, purpose);
                 setShowAddFundsWidget(false);
                 setInputValue(''); // Clear input
                 
                 // 1. User Message
                 setMessages(prev => [...prev, {
                    id: `u-${Date.now()}`,
                    sender: 'user',
                    blocks: [{ type: 'text', content: `Add ₹${amt} for ${purpose}` }]
                 }]);

                 // 2. Thinking State
                 setTimeout(() => {
                     setMessages(prev => [...prev, {
                        id: `ai-think-${Date.now()}`,
                        sender: 'ai',
                        isThinking: true
                     }]);

                     // 3. Success Response
                     setTimeout(() => {
                         const stepData = arjunScript.arjun_step_3;
                         setMessages(prev => {
                            // Remove thinking
                            const withoutThinking = prev.filter(m => !m.isThinking);
                            
                            return [...withoutThinking, {
                                id: `ai-${Date.now()}`,
                                sender: 'ai',
                                headline: stepData.headline,
                                artifact: stepData.artifact,
                                blocks: [
                                    { type: 'text', content: stepData.subtext }
                                ],
                                resolution: stepData.resolution
                            }];
                         });
                     }, 1500);
                 }, 600);
               }}
             />
           )}
         </AnimatePresence>

         {/* Top Fade Gradient */}
         <div className="h-16 w-full bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
         
         <div className="bg-white/80 backdrop-blur-xl border-t border-slate-100 px-4 pb-6 pt-4">
            <motion.div 
               animate={{ 
                 width: showAddFundsWidget 
                   ? "398px" 
                   : isInputExpanded 
                     ? "100%" 
                     : "480px" 
               }}
               transition={{ type: "spring", bounce: 0, duration: 0.4 }}
               className="max-w-[700px] mx-auto relative group"
               onMouseEnter={() => setIsInputHovered(true)}
               onMouseLeave={() => setIsInputHovered(false)}
            >
               <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  placeholder="Ask anything..."
                  className="w-full h-[52px] pl-5 pr-14 bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-full text-[15px] outline-none transition-all shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] placeholder:text-slate-400"
               />
               
               {/* Right Actions */}
               <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {inputValue.length === 0 && (
                     <>
                        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100"><Plus size={20} /></button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100"><Mic size={20} /></button>
                     </>
                  )}
                  <button 
                    disabled={!inputValue}
                    className="w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:bg-slate-300 transition-all shadow-sm active:scale-95"
                  >
                     <ArrowUp size={18} strokeWidth={2.5} />
                  </button>
               </div>
            </motion.div>
            
            <div className="flex justify-center items-center gap-2 mt-3 opacity-60">
                <Sparkles size={10} className="text-slate-400" />
                <p className="text-center text-[11px] text-slate-400 font-medium">
                   Ray can make mistakes. Please check important info.
                </p>
            </div>
         </div>
        </div>
      </motion.div>

      {/* Transaction Preview Pane - slides in from the right */}
      <AnimatePresence mode="popLayout">
        {selectedTransaction && (
          <motion.div
            className="h-full p-4 shrink-0 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            exit={{ width: 0 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 28,
              mass: 1,
            }}
          >
            <motion.div
              className="h-full"
              initial={{ opacity: 0, scale: 0.96, x: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.96, x: 20, filter: 'blur(8px)' }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 32,
                mass: 0.8,
                delay: 0.05,
              }}
            >
              <TransactionPreviewPane
                transaction={selectedTransaction}
                onClose={() => setSelectedTransaction(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
