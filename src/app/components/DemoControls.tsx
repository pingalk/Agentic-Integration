import React from 'react';
import { PERSONAS } from '../../data/demoConfig';
import { useDemo } from '../../context/DemoContext';
import { RotateCcw } from 'lucide-react';

export const DemoControls = () => {
  const { currentPersonaId, setPersona, resetDemo, isInChatView } = useDemo();

  // Hide on chat view - only show on landing page
  if (isInChatView) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white px-2 py-2 rounded-full flex gap-4 items-center z-[100] shadow-2xl border border-white/10 ring-1 ring-black/20">
      
      <div className="flex items-center px-2">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mr-2">
          Demo Persona
        </span>
        <div className="h-4 w-px bg-white/20 mx-2" />
      </div>
      
      <div className="flex gap-1">
        {Object.values(PERSONAS).map((p) => (
          <button
            key={p.id}
            onClick={() => setPersona(p.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              currentPersonaId === p.id 
              ? 'bg-white text-slate-900 shadow-[0_0_10px_rgba(255,255,255,0.3)] scale-105' 
              : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="h-4 w-px bg-white/20 mx-1" />

      <button 
        onClick={resetDemo}
        className="p-2 rounded-full hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors mr-1"
        title="Reset Flow"
      >
        <RotateCcw size={14} />
      </button>
    </div>
  );
};
