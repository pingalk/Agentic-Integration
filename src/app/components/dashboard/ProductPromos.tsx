import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const products = [
  {
    title: "API & Bulk Payouts",
    description: "Make multiple payouts with a single click from your dashboard.",
    image: "bg-blue-50", 
    action: "Sign Up",
    secondary: "Know More"
  },
  {
    title: "Vendor Payments",
    description: "Streamline vendor payouts: Invoices, TDS, payment, accounting.",
    image: "bg-orange-50",
    action: "Sign Up",
    secondary: "Know More",
    tag: "New"
  },
  {
    title: "Payout Links",
    description: "Share payout links for instant payments; no bank details needed.",
    image: "bg-green-50",
    action: "Sign Up",
    secondary: "Know More",
    tag: "New"
  },
  {
    title: "Tax Payments",
    description: "Pay TDS, GST, Advance Tax and more directly from dashboard.",
    image: "bg-purple-50",
    action: "Sign Up",
    secondary: "Know More"
  }
];

export const ProductPromos: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#0b2438] rounded-lg p-8 relative overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <h2 className="text-white text-lg font-bold mb-6 relative z-10">Products for you</h2>

      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
        >
          <ChevronLeft size={20} />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar relative z-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <div key={index} className="min-w-[280px] w-[280px] bg-white rounded-lg overflow-hidden snap-start flex flex-col h-[320px] flex-shrink-0">
              <div className={`h-32 ${product.image} p-4 flex items-center justify-center relative`}>
                {/* Mock UI */}
                <div className="w-3/4 h-20 bg-white rounded shadow-sm opacity-80 flex flex-col gap-2 p-2">
                    <div className="w-1/3 h-2 bg-slate-200 rounded"></div>
                    <div className="w-full h-2 bg-slate-100 rounded"></div>
                    <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                </div>
                {product.tag && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        {product.tag}
                    </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-slate-800 mb-2">{product.title}</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed flex-1">{product.description}</p>
                <div className="flex items-center gap-3 mt-auto">
                    <button className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                        {product.action}
                    </button>
                    {product.secondary && (
                        <button className="text-blue-600 text-xs font-bold hover:underline">
                            {product.secondary}
                        </button>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};