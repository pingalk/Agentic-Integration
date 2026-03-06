import React, { useState } from 'react';
import { motion } from 'motion/react';
import Ray from "../../../imports/Ray";
import { useMagicColor } from '../../../context/MagicColorContext';

// SVG-based Arrow Icon component
const ArrowIcon = ({ color = "#7d7d7d" }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 12L10 8L6 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// SVG-based Donut Chart component for Payment Integration card
const PaymentChart = () => (
  <svg viewBox="0 0 120 105" className="w-full h-full">
    <defs>
      <linearGradient id="chartGradient1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4D7FFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#305eff" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="chartGradient3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FDBA74" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#ea580c" stopOpacity="1" />
      </linearGradient>
    </defs>
    {/* Three overlapping circles representing payment methods */}
    <circle cx="45" cy="70" r="35" fill="url(#chartGradient1)" opacity="0.9" />
    <circle cx="75" cy="70" r="35" fill="url(#chartGradient2)" opacity="0.9" />
    <circle cx="60" cy="45" r="25" fill="url(#chartGradient3)" opacity="0.9" />
    {/* Currency symbols */}
    <text x="38" y="78" fill="white" fontSize="20" fontWeight="600">₹</text>
    <text x="68" y="78" fill="white" fontSize="16" fontWeight="600">₹</text>
    <text x="55" y="52" fill="white" fontSize="12" fontWeight="600">₹</text>
  </svg>
);

interface HomeCardsProps {
  animPhase: number;
  onPromptSelect?: (prompt: string) => void;
}

// Card footer component with Ray icon and arrow
const CardFooter = ({ label, isHovered, magicColor }: { label: string; isHovered: boolean; magicColor: string }) => (
  <div className="flex gap-2 items-center px-2 py-3 w-full">
    <style>{`
      @keyframes shimmerCard {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      .shimmer-card-text {
        background: linear-gradient(90deg, ${magicColor} 0%, ${magicColor}80 50%, ${magicColor} 100%);
        background-size: 200% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: shimmerCard 2s linear infinite;
      }
    `}</style>
    <motion.div
      className="shrink-0 size-4"
      style={{ '--fill-0': isHovered ? magicColor : '#7d7d7d' } as React.CSSProperties}
      animate={{ rotate: isHovered ? [0, 90, 180, 270, 360] : 0 }}
      transition={isHovered ? {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity
      } : { duration: 0.3, ease: "easeOut" }}
    >
      <Ray static />
    </motion.div>
    <p
      className={`flex-1 font-['Inter',sans-serif] font-normal text-[14px] tracking-[-0.182px] transition-colors duration-300 ${isHovered ? 'shimmer-card-text' : ''}`}
      style={!isHovered ? { color: '#7d7d7d' } : undefined}
    >
      {label}
    </p>
    <motion.div
      className="flex items-center justify-center shrink-0"
      animate={{ x: isHovered ? 4 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <ArrowIcon color={isHovered ? '#050505' : '#7d7d7d'} />
    </motion.div>
  </div>
);

export const HomeCards: React.FC<HomeCardsProps> = ({ animPhase, onPromptSelect }) => {
  const { config: magicColorConfig } = useMagicColor();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-5 items-start w-full max-w-[850px]">
      {/* Payment Integration Card */}
      <motion.div
        className="border border-[#dee1e3] flex flex-col gap-2 items-center p-2 rounded-xl shrink-0 w-[268px] cursor-pointer transition-shadow hover:shadow-md"
        style={{ backgroundImage: "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 93.453%, rgb(247, 247, 248) 100%)" }}
        initial={{ opacity: 0, y: 26 }}
        animate={animPhase >= 7 ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
        transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setHoveredCard('payment-integration')}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => onPromptSelect?.("Help me integrate Razorpay payments")}
      >
        <div className="bg-gradient-to-b from-white from-[47%] to-[#f8f8f8] h-[221px] overflow-hidden relative rounded-lg w-full p-3 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-['Inter',sans-serif] font-medium text-[12px] text-[#7d7d7d] leading-[18px]">Payment Integration</p>
            <p className="font-['Inter',sans-serif] font-medium text-[20px] text-[#050505] tracking-[-0.528px] leading-[28px]">
              Start collecting payments in 1 click
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#7d7d7d] leading-[20px]">
              Integrate Razorpay Payments to your website and start collecting payments.
            </p>
          </div>

          {/* Payment Chart */}
          <div className="absolute right-[10px] bottom-[10px] w-[120px] h-[105px]">
            <PaymentChart />
          </div>
        </div>
        <CardFooter label="Integrate payments" isHovered={hoveredCard === 'payment-integration'} magicColor={magicColorConfig.primary} />
      </motion.div>

      {/* Custom Integration Card */}
      <motion.div
        className="border border-[#dee1e3] flex flex-col gap-2 items-center p-2 rounded-xl shrink-0 w-[268px] cursor-pointer transition-shadow hover:shadow-md"
        style={{ backgroundImage: "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 93.453%, rgb(247, 247, 248) 100%)" }}
        initial={{ opacity: 0, y: 26 }}
        animate={animPhase >= 7 ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setHoveredCard('custom-integration')}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => onPromptSelect?.("I'm using Claude, help me integrate payments")}
      >
        <div className="bg-gradient-to-b from-white from-[47%] to-[#f8f8f8] h-[221px] overflow-hidden relative rounded-lg w-full p-3 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-['Inter',sans-serif] font-medium text-[12px] text-[#7d7d7d] leading-[18px]">Custom Integration</p>
            <p className="font-['Inter',sans-serif] font-medium text-[20px] text-[#050505] tracking-[-0.528px] leading-[28px]">
              Not using Replit? No problem
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#7d7d7d] leading-[20px]">
              Tell me what you're building with (Claude, Cursor or VSCode etc.), and I will guide you through the integration.
            </p>
          </div>
        </div>
        <CardFooter label="Start your integration" isHovered={hoveredCard === 'custom-integration'} magicColor={magicColorConfig.primary} />
      </motion.div>

      {/* Payment Link Card */}
      <motion.div
        className="border border-[#dee1e3] flex flex-col gap-2 items-center p-2 rounded-xl shrink-0 w-[268px] cursor-pointer transition-shadow hover:shadow-md"
        style={{ backgroundImage: "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 27.731%, rgb(255, 255, 255) 93.453%, rgb(247, 247, 248) 100%)" }}
        initial={{ opacity: 0, y: 26 }}
        animate={animPhase >= 7 ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setHoveredCard('payment-link')}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => onPromptSelect?.("Create a payment link for me")}
      >
        <div className="bg-gradient-to-b from-white from-[47%] to-[#f8f8f8] h-[221px] overflow-hidden relative rounded-lg w-full p-3 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-['Inter',sans-serif] font-medium text-[12px] text-[#7d7d7d] leading-[18px]">Payment Link</p>
            <p className="font-['Inter',sans-serif] font-medium text-[20px] text-[#050505] tracking-[-0.528px] leading-[28px]">
              Get paid in seconds.
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[14px] text-[#7d7d7d] leading-[20px]">
              Skip the code. I'll generate a branded link you can share right now.
            </p>
          </div>

          {/* Payment Link Example */}
          <div className="mt-4">
            <div className="bg-[#EFF6FF] rounded-lg px-3 py-2 border border-[#BFDBFE]">
              <p className="font-['Inter',sans-serif] text-[13px] text-[#1E40AF] font-medium">
                razorpay.me/@avishya
              </p>
            </div>
          </div>
        </div>
        <CardFooter label="Customise your link" isHovered={hoveredCard === 'payment-link'} magicColor={magicColorConfig.primary} />
      </motion.div>
    </div>
  );
};

export default HomeCards;
