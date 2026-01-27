import React from 'react';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '../ui/dropdown-menu';
import { Layers, Check } from 'lucide-react';
import { cn } from '../ui/utils';

interface VariantSwitcherProps {
  currentView: string;
  homeVariant: string;
  transactionsVariant: string;
  onNavigate: (view: 'home' | 'transactions', variant?: string) => void;
}

export const VariantSwitcher: React.FC<VariantSwitcherProps> = ({ 
  currentView, 
  homeVariant, 
  transactionsVariant,
  onNavigate 
}) => {
  const isPaymentsDashboard = currentView === 'home' && homeVariant === 'A';
  const isRayDashboard = currentView === 'home' && homeVariant === 'B';
  const isDoubleDebitFlow = currentView === 'home' && homeVariant === 'DOUBLE_DEBIT';
  const isTransactionsPage = currentView === 'transactions';

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full shadow-lg hover:bg-slate-800 transition-colors border border-slate-700">
          <Layers size={16} />
          <span className="text-sm font-medium">Switch View</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="center" side="top">
            <DropdownMenuLabel>Dashboards</DropdownMenuLabel>
            
            <DropdownMenuItem 
                onClick={() => onNavigate('home', 'A')}
                className="flex items-center justify-between cursor-pointer"
            >
                <span>Payments Dashboard</span>
                {isPaymentsDashboard && <Check size={14} className="text-blue-600" />}
            </DropdownMenuItem>
            
            <DropdownMenuItem 
                onClick={() => onNavigate('home', 'B')}
                className="flex items-center justify-between cursor-pointer"
            >
                <span>Agentic (Ray AI)</span>
                {isRayDashboard && <Check size={14} className="text-blue-600" />}
            </DropdownMenuItem>

            <DropdownMenuItem 
                onClick={() => onNavigate('home', 'B_DEEP_LINK')}
                className="flex items-center justify-between cursor-pointer"
            >
                <span>Deep Link Demo</span>
                {currentView === 'home' && homeVariant === 'B_DEEP_LINK' && <Check size={14} className="text-blue-600" />}
            </DropdownMenuItem>

            <DropdownMenuItem 
                onClick={() => onNavigate('home', 'DOUBLE_DEBIT')}
                className="flex items-center justify-between cursor-pointer"
            >
                <span>Double Debit Flow</span>
                {isDoubleDebitFlow && <Check size={14} className="text-blue-600" />}
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuLabel>Pages</DropdownMenuLabel>

            <DropdownMenuItem 
                onClick={() => onNavigate('transactions')}
                className="flex items-center justify-between cursor-pointer"
            >
                <span>Transactions</span>
                {isTransactionsPage && <Check size={14} className="text-blue-600" />}
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};