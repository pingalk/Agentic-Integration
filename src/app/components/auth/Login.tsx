import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Loader2, Smartphone, Mail, Shield, Zap, BarChart3, ArrowLeft } from 'lucide-react';

// --- Assets ---
const BG_IMAGE = "https://images.unsplash.com/photo-1654764746504-cf01f4de040a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vZGVybiUyMGJsdWUlMjB0ZWNobm9sb2d5JTIwYnVzaW5lc3MlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2ODgzODE0N3ww&ixlib=rb-4.1.0&q=80&w=1080";

// --- Components ---

const MarketingPanel = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between w-1/2 h-full relative bg-[#0a1e45] overflow-hidden text-white p-12">
      {/* Background */}
      <div className="absolute inset-0 z-0">
         <img src={BG_IMAGE} alt="Background" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e45] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl font-bold leading-tight max-w-xl mb-12 tracking-tight"
        >
          Join 8 Million businesses that trust Razorpay to supercharge their business
        </motion.h1>

        <div className="flex gap-8">
            <FeatureItem icon={Zap} text="100+ Payment Methods" delay={0.4} />
            <FeatureItem icon={Shield} text="Easy Integration" delay={0.5} />
            <FeatureItem icon={BarChart3} text="Powerful Dashboard" delay={0.6} />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon: Icon, text, delay }: { icon: any, text: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-center gap-3 opacity-90"
    >
        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <Icon size={16} className="text-white" />
        </div>
        <span className="text-sm font-medium">{text}</span>
    </motion.div>
);

const Logo = () => (
    <motion.div 
        className="flex items-center gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <div className="content-stretch flex items-center pl-0 pr-[5px] py-0 relative size-full h-[24px]" data-name="Razorpay Logo / Expanded">
            <div className="mr-[-5px] relative shrink-0 size-[24px]" data-name="razorpay">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="razorpay">
                        <path d="M9.71729 10.3339L10.7146 6.66299L20.9998 0L15.4842 20.5753L11.6924 20.5722L15.426 6.64209L9.71729 10.3339Z" fill="#3395FF" id="path" />
                        <path d="M3 20.5758L4.57044 14.7196L13.9519 8.6626L10.7718 20.5758H3Z" fill="#0C2651" id="path_2" />
                    </g>
                </svg>
            </div>
            <div className="h-[24px] mr-[-5px] relative shrink-0 w-[102px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 24">
                    <g clipPath="url(#clip0_4035_18)" id="Frame 2147239205">
                        <path d="M12.8475 9.5135C12.6643 10.1927 12.3114 10.6917 11.785 11.0103C11.2599 11.3283 10.5228 11.4879 9.57148 11.4879H6.54884L7.61012 7.54033H10.6328C11.5829 7.54033 12.2357 7.69872 12.5898 8.02159C12.944 8.34446 13.0295 8.8379 12.8475 9.5202V9.5135ZM15.977 9.43491C16.3617 8.0094 16.203 6.91286 15.4995 6.14528C14.7973 5.38379 13.565 5 11.8064 5H5.06072L1 20.114H4.27728L5.91378 14.0221H8.06321C8.54561 14.0221 8.92543 14.1013 9.20266 14.2536C9.4805 14.412 9.64353 14.6861 9.69361 15.0821L10.2786 20.114H13.7897L13.2206 15.4233C13.1046 14.3755 12.624 13.7602 11.7795 13.5774C12.8561 13.2667 13.758 12.7489 14.4846 12.0301C15.2062 11.3165 15.7218 10.4221 15.977 9.441V9.43491ZM23.9434 14.7044C23.6686 15.7279 23.2473 16.5015 22.6775 17.0437C22.1072 17.5859 21.4257 17.8539 20.6307 17.8539C19.821 17.8539 19.272 17.592 18.982 17.062C18.6913 16.532 18.6815 15.7644 18.9514 14.7592C19.2213 13.7541 19.6518 12.9682 20.2442 12.4017C20.8365 11.8351 21.5289 11.5519 22.324 11.5519C23.1178 11.5519 23.6613 11.826 23.9361 12.37C24.2169 12.9164 24.2231 13.698 23.9483 14.7154L23.9434 14.7044ZM25.3796 9.35572L24.9693 10.8848C24.7922 10.3365 24.4484 9.8979 23.9403 9.56893C23.4311 9.24606 22.8009 9.08158 22.0492 9.08158C21.1271 9.08158 20.2417 9.31917 19.3929 9.79433C18.5441 10.2695 17.7992 10.9396 17.1641 11.8047C16.5291 12.6697 16.065 13.6505 15.7658 14.7532C15.4727 15.8619 15.4116 16.8305 15.5887 17.6712C15.7719 18.518 16.1566 19.1637 16.7489 19.6145C17.3473 20.0714 18.1106 20.2968 19.0449 20.2968C19.7873 20.3005 20.5213 20.1404 21.1943 19.8277C21.8597 19.5283 22.4516 19.0875 22.9285 18.5362L22.5011 20.1299H25.6703L28.5641 9.3612H25.3888L25.3796 9.35572ZM39.9524 9.35572H30.7361L30.0919 11.7559H35.4545L28.365 17.8661L27.7592 20.1201H37.2729L37.9171 17.7199H32.1711L39.3692 11.5183L39.9524 9.35572ZM48.0647 14.6861C47.7795 15.7461 47.3563 16.543 46.7976 17.062C46.2389 17.5859 45.5623 17.8478 44.7679 17.8478C43.1069 17.8478 42.561 16.7939 43.1277 14.6861C43.4086 13.6383 43.8336 12.8506 44.4015 12.32C44.9694 11.7876 45.6576 11.522 46.4666 11.522C47.2605 11.522 47.7966 11.7858 48.0726 12.317C48.3486 12.847 48.3462 13.6371 48.0647 14.6849V14.6861ZM49.9198 9.76083C49.1901 9.30759 48.2589 9.08097 47.1231 9.08097C45.9733 9.08097 44.9089 9.30637 43.9295 9.75717C42.9541 10.2052 42.0968 10.8739 41.4259 11.7102C40.7358 12.557 40.2394 13.55 39.9347 14.6831C39.6355 15.8119 39.5988 16.8031 39.8309 17.6517C40.0629 18.4985 40.5514 19.1503 41.2842 19.6011C42.0231 20.0556 42.9634 20.2816 44.1175 20.2816C45.2533 20.2816 46.3097 20.0537 47.2806 19.6005C48.2515 19.1448 49.082 18.4978 49.772 17.645C50.462 16.7958 50.9566 15.8052 51.262 14.6721C51.5673 13.539 51.6039 12.5497 51.3719 11.6993C51.1398 10.8525 50.6574 10.2007 49.9308 9.74682L49.9198 9.76083ZM61.2336 12.2323L62.0458 9.30211C61.771 9.16199 61.4107 9.08889 60.9588 9.08889C60.2322 9.08889 59.5361 9.26799 58.8644 9.63107C58.2867 9.93932 57.7958 10.3743 57.3805 10.9189L57.8019 9.3411L56.8816 9.34475H54.6223L51.7096 20.1092H54.9233L56.4346 14.4821C56.6545 13.6639 57.0502 13.02 57.6211 12.5631C58.189 12.1044 58.8973 11.8747 59.7522 11.8747C60.2774 11.8747 60.7659 11.9947 61.23 12.2341L61.2336 12.2323ZM70.1758 14.7379C69.901 15.7431 69.4857 16.5107 68.9179 17.0407C68.35 17.5731 67.6661 17.8387 66.8722 17.8387C66.0784 17.8387 65.5349 17.5707 65.2479 17.0346C64.9548 16.4954 64.9487 15.7187 65.2235 14.6977C65.4983 13.6773 65.9196 12.8945 66.4997 12.3523C67.0799 11.8059 67.7638 11.533 68.5576 11.533C69.3392 11.533 69.8643 11.8132 70.1452 12.3797C70.4261 12.9463 70.4322 13.7321 70.1623 14.7373L70.1758 14.7379ZM72.4095 9.7785C71.8141 9.30333 71.0539 9.06574 70.1318 9.06574C69.3239 9.06574 68.5539 9.2485 67.8236 9.61767C67.0939 9.98623 66.5016 10.4888 66.0467 11.1248L66.0576 11.0517L66.5968 9.33988H63.4582L62.6582 12.3188L62.6338 12.4224L59.3364 24.6939H62.5544L64.2154 18.5167C64.3802 19.0662 64.7161 19.4975 65.229 19.8094C65.7419 20.1201 66.3752 20.2743 67.1281 20.2743C68.0624 20.2743 68.9539 20.0489 69.7996 19.598C70.6484 19.146 71.3812 18.4954 72.004 17.6547C72.6269 16.814 73.0891 15.8393 73.384 14.7367C73.6833 13.6322 73.7443 12.6472 73.5733 11.7852C73.3993 10.9219 73.014 10.2537 72.4192 9.78093L72.4095 9.7785ZM83.084 14.6941C82.8092 15.7114 82.3878 16.4912 81.82 17.0273C81.2521 17.567 80.5682 17.8357 79.7743 17.8357C78.9622 17.8357 78.4126 17.5737 78.1256 17.0437C77.8325 16.5137 77.8264 15.7461 78.0951 14.741C78.3638 13.7358 78.7924 12.9499 79.3848 12.3834C79.9771 11.8168 80.6701 11.5342 81.4652 11.5342C82.259 11.5342 82.7964 11.8083 83.0773 12.3505C83.3582 12.8945 83.36 13.6761 83.0864 14.6959L83.084 14.6941ZM84.519 9.34231L84.108 10.8714C83.9309 10.3201 83.589 9.88145 83.0821 9.55553C82.5692 9.23022 81.9403 9.06818 81.1892 9.06818C80.2671 9.06818 79.3768 9.30576 78.5268 9.78093C77.678 10.2561 76.933 10.9226 76.298 11.7852C75.6629 12.6478 75.1988 13.631 74.8996 14.7337C74.6035 15.8406 74.5455 16.811 74.7226 17.6553C74.9015 18.496 75.2868 19.1454 75.8828 19.5987C76.4775 20.0495 77.2445 20.2773 78.1787 20.2773C78.9298 20.2773 79.6473 20.1213 80.3282 19.8082C80.992 19.5074 81.5823 19.0661 82.0581 18.5149L81.6307 20.1098H84.7999L87.693 9.34536H84.5238L84.519 9.34231ZM100.998 9.34597L101 9.34292H99.0521C98.9898 9.34292 98.9348 9.34597 98.878 9.34719H97.8674L97.3484 10.066L97.2202 10.2366L97.1652 10.3219L93.0587 16.0288L92.2099 9.34597H88.8465L90.5502 19.5012L86.7887 24.6976H90.1411L91.0509 23.4104C91.0766 23.3726 91.0998 23.3409 91.1303 23.3007L92.1928 21.796L92.2233 21.7534L96.982 15.0218L100.994 9.35633L101 9.35267H100.998V9.34597Z" fill="#0C2651" id="Vector" />
                    </g>
                    <defs>
                        <clipPath id="clip0_4035_18">
                            <rect fill="white" height="24" width="102" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    </motion.div>
);

const StepEmail = ({ onNext, initialValue }: { onNext: (val: string) => void, initialValue: string }) => {
    const [value, setValue] = useState(initialValue);
    
    return (
        <div className="w-full">
            <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-8 tracking-tight">
                Get started with your email or phone number
            </h2>

            <div className="space-y-6">
                {/* Main Input */}
                <div className="relative group">
                    <input 
                        type="text" 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && value && onNext(value)}
                        placeholder="Enter email or mobile"
                        className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-[#0a0a0a] placeholder:text-gray-400"
                        autoFocus
                    />
                </div>

                {/* Continue Button */}
                <button 
                    onClick={() => value && onNext(value)}
                    disabled={!value}
                    className="w-full h-12 bg-[#305EFF] hover:bg-[#254eda] disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl font-medium transition-all flex items-center justify-between px-4 group"
                >
                    <span>Continue</span>
                    <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                        <ArrowRight size={14} />
                    </div>
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 py-2">
                    <div className="h-px bg-gray-200 flex-1 border-dashed border-t border-gray-200" />
                    <span className="text-xs text-gray-400 font-medium">or continue with email</span>
                    <div className="h-px bg-gray-200 flex-1 border-dashed border-t border-gray-200" />
                </div>

                {/* Continue as Alex */}
                <div 
                    onClick={() => onNext("alex.doe@acmecorp.in")}
                    className="w-full p-4 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-xl cursor-pointer transition-all flex items-center justify-between group"
                >
                    <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-black text-white flex items-center justify-center text-xs font-bold shadow-inner">
                            A
                         </div>
                         <div className="flex flex-col items-start">
                             <span className="text-sm font-medium text-gray-900 group-hover:text-black">Continue as Alex</span>
                             <span className="text-xs text-gray-500">alex.doe@acmecorp.in</span>
                         </div>
                    </div>
                    
                    {/* Google Logo Mock */}
                     <div className="w-5 h-5 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-4 h-4">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                     </div>
                </div>
            </div>
        </div>
    );
};

const StepOTP = ({ onVerify, onBack, identifier }: { onVerify: () => void, onBack: () => void, identifier: string }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;
        
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
        if (e.key === 'Enter' && isComplete) {
            handleVerify();
        }
    };

    const handleVerify = () => {
        setLoading(true);
        // Simulate API
        setTimeout(() => {
            onVerify();
        }, 1200);
    };

    const isComplete = otp.every(v => v !== '');

    useEffect(() => {
        inputsRef.current[0]?.focus();
    }, []);

    return (
        <div className="w-full">
            <button onClick={onBack} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors">
                <ArrowLeft size={16} />
                <span>Back</span>
            </button>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-2 tracking-tight">
                    Enter OTP
                </h2>
                <p className="text-gray-500 text-sm">
                    Sent to <span className="text-gray-900 font-medium">{identifier}</span>
                </p>
            </div>

            <div className="space-y-8">
                {/* OTP Inputs */}
                <div className="flex gap-3 justify-between">
                    {otp.map((digit, i) => (
                        <div key={i} className="relative flex-1 h-12 max-w-[56px]">
                            <input
                                ref={el => inputsRef.current[i] = el}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(i, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(i, e)}
                                className={`w-full h-full text-center text-lg font-semibold border rounded-xl focus:outline-none transition-all
                                    ${digit 
                                        ? 'border-blue-600 bg-blue-50/50' 
                                        : 'border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                                    }
                                `}
                            />
                        </div>
                    ))}
                </div>

                {/* Verify Button */}
                <button 
                    onClick={handleVerify}
                    disabled={!isComplete || loading}
                    className="w-full h-12 bg-[#305EFF] hover:bg-[#254eda] disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl font-medium transition-all flex items-center justify-between px-4 group"
                >
                    {loading ? (
                        <div className="w-full flex items-center justify-center gap-2">
                            <Loader2 size={18} className="animate-spin" />
                            <span>Verifying...</span>
                        </div>
                    ) : (
                        <>
                            <span>Verify OTP</span>
                            <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                                <ArrowRight size={14} />
                            </div>
                        </>
                    )}
                </button>

                {/* Resend */}
                <div className="flex items-center justify-between text-xs">
                    <button onClick={onBack} className="text-gray-500 hover:text-gray-900 transition-colors">
                        ← Try other options
                    </button>
                    <p className="text-gray-400">
                        Resend in <span className="text-blue-600 font-medium">25s</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

import { VariantSwitcher } from '../dashboard/VariantSwitcher';

// --- Main Login Component ---

interface LoginProps {
    onLoginSuccess: () => void;
    currentConfig?: {
        view: string;
        variants: { home: string; transactions: string };
    };
    onConfigChange?: (config: {
        view: string;
        variants: { home: string; transactions: string };
    }) => void;
}

export const Login = ({ onLoginSuccess, currentConfig, onConfigChange }: LoginProps) => {
    const [step, setStep] = useState<'email' | 'otp'>('email');
    const [identifier, setIdentifier] = useState('');

    const handleEmailSubmit = (value: string) => {
        setIdentifier(value);
        setStep('otp');
    };

    const handleViewChange = (view: 'home' | 'transactions', variant?: string) => {
        if (onConfigChange && currentConfig) {
            onConfigChange({
                view,
                variants: {
                    ...currentConfig.variants,
                    ...(variant ? { [view]: variant } : {})
                }
            });
            // Automatically login when a specific dashboard is selected from the switcher
            onLoginSuccess();
        }
    };

    return (
        <div className="w-full h-screen flex bg-white overflow-hidden relative">
            {/* Variant Switcher for Prototype Demo */}
            {currentConfig && (
                <VariantSwitcher 
                    currentView={currentConfig.view}
                    homeVariant={currentConfig.variants.home}
                    transactionsVariant={currentConfig.variants.transactions}
                    onNavigate={handleViewChange}
                />
            )}

            {/* Left Panel - Marketing */}
            <MarketingPanel />

            {/* Right Panel - Form */}
            <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center p-8 lg:p-16 relative">
                <div className="w-full max-w-[420px]">
                    <Logo />

                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {step === 'email' ? (
                                <motion.div 
                                    key="email"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    <StepEmail onNext={handleEmailSubmit} initialValue={identifier} />
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="otp"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    <StepOTP 
                                        identifier={identifier} 
                                        onVerify={onLoginSuccess}
                                        onBack={() => setStep('email')} 
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="absolute bottom-8 left-0 right-0 text-center">
                        <p className="text-[11px] text-gray-400">
                            By continuing you agree to our <a href="#" className="underline decoration-gray-300 hover:text-gray-600">privacy policy</a> and <a href="#" className="underline decoration-gray-300 hover:text-gray-600">terms of use</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
