// src/context/DemoContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAS, PersonaId, PersonaConfig } from '../data/demoConfig';

interface DemoContextType {
  currentPersonaId: PersonaId;
  currentPersona: PersonaConfig;
  setPersona: (id: PersonaId) => void;
  resetDemo: () => void;
  isInChatView: boolean;
  setIsInChatView: (value: boolean) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPersonaId, setCurrentPersonaId] = useState<PersonaId>('maya');
  const [isInChatView, setIsInChatView] = useState(false);

  // Optional: Add a data-theme attribute to body for global CSS variables if needed later
  useEffect(() => {
    document.body.setAttribute('data-theme', PERSONAS[currentPersonaId].theme);
  }, [currentPersonaId]);

  const resetDemo = () => {
    setCurrentPersonaId('maya');
    // Additional reset logic can be added here (e.g., clear chat history, reset demo steps, etc.)
  };

  return (
    <DemoContext.Provider value={{
      currentPersonaId,
      currentPersona: PERSONAS[currentPersonaId],
      setPersona: setCurrentPersonaId,
      resetDemo,
      isInChatView,
      setIsInChatView
    }}>
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) throw new Error('useDemo must be used within a DemoProvider');
  return context;
};