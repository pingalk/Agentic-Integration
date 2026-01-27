import React, { useState } from 'react';
import { Search, Bell, Settings, Home, ChevronDown, Sparkles } from 'lucide-react';
import { cn } from '../ui/utils';
import Ray from '../../../imports/Ray';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '../ui/dropdown-menu';

interface HeaderProps {
  onNavigateToRayAI?: () => void;
  variant?: 'central' | 'contextual';
  onToggleRaySidePanel?: () => void;
  showRayEntryPoint?: boolean;
  onNavigateToDoubleDebit?: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToRayAI, variant = 'contextual', onToggleRaySidePanel, showRayEntryPoint = true, onNavigateToDoubleDebit, onLogout }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-6">
        <div 
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 cursor-pointer group"
          onClick={onNavigateToRayAI}
        >
          <div className="size-[18px]">
            <Ray />
          </div>
          <span className="text-sm font-medium">Ray AI</span>
        </div>
        
        <div className="h-4 w-px bg-slate-300"></div>

        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-bold text-blue-600 border-b-2 border-blue-600 h-16 flex items-center px-1">
            Payments
          </a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1">
            Banking <span className="text-[10px] text-blue-600">↗</span>
          </a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Payroll
          </a>
          <DropdownMenu open={isMoreMenuOpen} onOpenChange={setIsMoreMenuOpen}>
            <DropdownMenuTrigger className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer outline-none">
              More <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Demo Flows</DropdownMenuLabel>
              <DropdownMenuItem 
                onClick={() => {
                  onNavigateToDoubleDebit?.();
                  setIsMoreMenuOpen(false);
                }}
                className="cursor-pointer"
              >
                <span>Double Debit Flow</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Quick Links</DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer">
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span>Help Center</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search in payments" 
            className="pl-9 pr-4 py-1.5 bg-slate-100 border-none rounded-sm text-sm w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-3">
          {variant === 'contextual' && showRayEntryPoint && (
            <div 
              className="size-[20px] text-slate-400 hover:text-slate-600 cursor-pointer"
              onClick={onToggleRaySidePanel}
            >
               <Ray />
            </div>
          )}
          <button className="text-slate-400 hover:text-slate-600">
            <Bell size={20} />
          </button>
          <button className="text-slate-400 hover:text-slate-600">
            <Settings size={20} />
          </button>
          <div className="h-8 w-8 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer">
            RK
          </div>
        </div>
      </div>
    </header>
  );
};