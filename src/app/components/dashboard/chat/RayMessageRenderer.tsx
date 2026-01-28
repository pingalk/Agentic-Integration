import React, { useState, useEffect } from 'react';
import { SmartTable, MessageFooter, SuggestionStack } from './RayComponents';
import Ray from '@/imports/Ray';
import Copy from '@/imports/Copy';
import { FundsAddedCard } from './artifacts/FundsAddedCard';
import { FundsAddedHeader, FundsAddedBody, SettlementCard, RayInsightCard } from './artifacts/FundsAddedComponents';
import { Wallet, Download, ExternalLink, ThumbsUp, ThumbsDown, Share2, Copy as CopyIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { PerplexityStreamText } from './PerplexityStreamingTypography';
import { RayThinking } from '../RayThinking';
import { useStreamSequencer } from '../useStreamSequencer';

// --- Elegant Tooltip Component ---
const Tooltip = ({ children, text, position = 'top' }: { children: React.ReactNode; text: string; position?: 'top' | 'bottom' | 'left' | 'right' }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div 
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: position === 'top' ? 5 : position === 'bottom' ? -5 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: position === 'top' ? 5 : position === 'bottom' ? -5 : 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={clsx(
              'absolute z-[9999] pointer-events-none whitespace-nowrap',
              'px-3 py-1.5 text-xs font-medium text-white',
              'bg-slate-900 rounded-lg shadow-lg',
              positionClasses[position]
            )}
          >
            {text}
            {/* Arrow */}
            <div 
              className={clsx(
                'absolute w-2 h-2 bg-slate-900 rotate-45',
                position === 'top' && 'bottom-[-4px] left-1/2 -translate-x-1/2',
                position === 'bottom' && 'top-[-4px] left-1/2 -translate-x-1/2',
                position === 'left' && 'right-[-4px] top-1/2 -translate-y-1/2',
                position === 'right' && 'left-[-4px] top-1/2 -translate-y-1/2'
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Flexible content block types
export type ContentBlock = 
  | { type: 'text'; content: string }
  | { type: 'table'; headers: string[]; rows: any[] }
  | { type: 'card'; title: string; value: string; trend?: string }; // Future proofing

export interface RayResponseData {
  id: string;
  sender: 'user' | 'ai';
  headline?: string;     // Optional Top Headline
  blocks?: ContentBlock[]; // Flexible array of content
  suggestions?: string[];
  isThinking?: boolean;
  resolution?: { title: string; content: string };
  artifact?: {
    type: 'investigation_report';
    data: {
      headline: string;
      subtext: string;
      stats: Array<{ label: string; value: string }>;
      table: {
        rows: Array<{
          id: string;
          amount: string;
          status: string;
          date: string;
          rrn: string;
          email: string;
        }>;
      };
      resolution: {
        title: string;
        content: string;
      };
      buttons?: Array<{ label: string; variant: 'primary' | 'secondary' }>;
      suggestions: string[];
    };
  } | {
    type: 'funds_added_card';
  } | {
    type: 'followup_question';
    data: {
      headline: string;
      question: string;
      buttons: Array<{ label: string; variant: 'primary' | 'secondary' }>;
    };
  } | {
    type: 'simple_text';
    data: {
      headline?: string;
      body: string;
      suggestions?: string[];
    };
  } | {
    type: 'bullet_list_with_buttons';
    data: {
      bullets: Array<{ bold: string; text: string }>;
      buttons: Array<{ label: string; variant: 'primary' | 'secondary' }>;
    };
  } | {
    type: 'setting_updated_with_bullets';
    data: {
      headline: string;
      body: string;
      bullets: Array<{ text: string }>;
      buttons: Array<{ label: string; variant: 'primary' | 'secondary' }>;
    };
  } | {
    type: 'payment_links_created';
    data: {
      headline: string;
      body: string;
      table: {
        rows: Array<{
          id: string;
          linkUrl: string;
          amount: string;
          status: string;
          createdOn: string;
          expiry: string;
        }>;
      };
      followup: {
        title: string;
        body: string;
        buttons: Array<{ label: string; variant: 'primary' | 'secondary' }>;
      };
    };
  };
}

// --- Animation Primitives ---
const containerVar = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVar = { hidden: { opacity: 0, y: 5, filter: 'blur(4px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0)' } };

// --- Copyable Text Component (for links, IDs, emails, RRNs) ---
const CopyableText = ({
  text,
  className = "",
  isLink = false
}: {
  text: string;
  className?: string;
  isLink?: boolean;
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="inline-flex items-center gap-[6px] group/copyable">
      <span className={clsx(
        className,
        isLink && "text-[#2563EB] underline decoration-blue-300 underline-offset-2 hover:text-blue-700 cursor-pointer"
      )}>
        {text}
      </span>
      <Tooltip text={copied ? "Copied!" : "Copy"} position="top">
        <button
          onClick={handleCopy}
          className="size-[16px] shrink-0 opacity-0 group-hover/copyable:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover/copyable:translate-x-0 hover:scale-110"
        >
          <Copy />
        </button>
      </Tooltip>
    </div>
  );
};

// --- Markdown Bold Parser for Static Text ---
const parseMarkdownBold = (content: string): React.ReactNode[] => {
  if (!content) return [];
  const parts = content.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <span key={i} className="font-semibold text-[#192839]">{part.slice(2, -2)}</span>;
    }
    return <span key={i}>{part}</span>;
  }).filter(node => {
    const text = typeof node === 'string' ? node : (node as React.ReactElement).props.children;
    return text && text.length > 0;
  });
};

// --- Investigation Report Component ---
const InvestigationReportArtifact = ({ data, onRowClick, onSuggestionClick, isLast }: any) => {
  const [subtextStarted, setSubtextStarted] = useState(false);

  const { phase, onNarrativeComplete } = useStreamSequencer({
    hasDataAsset: !!data.table,
    hasInsight: !!data.resolution,
    hasSuggestions: data.suggestions?.length > 0,
    thinkingDuration: 7000  // 7 seconds for primary response
  });

  // Start subtext after 1.3s cognitive pause following headline
  const handleHeadlineComplete = React.useCallback(() => {
    setTimeout(() => setSubtextStarted(true), 1300);
  }, []);

  return (
    <>
      {/* Phase 0: Thinking */}
      {phase === 0 && <RayThinking />}

      {/* Phase 1+: Content */}
      {phase >= 1 && (
        <motion.div
          className="flex flex-col gap-[24px] w-full mt-2"
          initial="hidden"
          animate="visible"
          variants={containerVar}
        >
          {/* Primary Content Section - gap-[16px] between subsections */}
          <div className="flex flex-col gap-[16px]">
            {/* Header + Subtext + Stats Group - gap-[4px] internally */}
            <div className="flex flex-col gap-[4px] px-[0px] py-[4px]">
              {/* 1. Header: Icon + Bold Text (streamed) */}
              <motion.div variants={itemVar} className="flex gap-[6px] items-center">
                <div className="shrink-0 size-[20px] bg-[#E9690C] rounded-[3.33px] flex items-center justify-center shadow-sm">
                  <Wallet size={12} strokeWidth={2.5} className="text-white" />
                </div>
                <h3 className="text-[18px] leading-[24px] font-semibold text-[#020202]">
                  <PerplexityStreamText
                    content={data.headline}
                    speed={15}
                    onComplete={handleHeadlineComplete}
                    inheritStyles
                  />
                </h3>
              </motion.div>

              {/* 2. Subtext with inline bold (streamed after 1.3s pause) */}
              {subtextStarted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[16px] text-[#40566d] leading-[26px] tracking-[0.16px]"
                >
                  <PerplexityStreamText
                    content={data.subtext}
                    speed={10}
                    onComplete={onNarrativeComplete}
                  />
                </motion.div>
              )}

              {/* 3. Stats List (appears after subtext starts streaming) */}
              {subtextStarted && (
                <motion.ul
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col gap-[6px] pl-[48px] list-disc ml-0"
                >
                  {data.stats.map((stat: any, i: number) => (
                    <li key={i} className="text-[16px] leading-[24px] text-[#40566d]">
                      <span className="text-[#40566d]">{stat.label}: </span>
                      <span className="font-semibold text-[#192839]">{stat.value}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>

            {/* 4. Table Section (Phase 2+) */}
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="pl-0 py-[12px]"
              >
                <h4 className="text-[15px] font-bold text-slate-900 mb-3">Your recent refunds:</h4>

                <div className="w-full rounded-[12px] border border-[#E4E7EC] relative group/table overflow-x-auto">
                  <div className="min-w-[700px]">
                    {/* Table Header */}
                    <div className="flex h-[48px] text-[14px] font-semibold text-[#192839] bg-[rgba(108,132,157,0.06)] px-[16px] border-b border-[rgba(108,132,157,0.18)]">
                      <div className="w-[100px] shrink-0 flex items-center pl-[20px]">Amount</div>
                      <div className="w-[90px] shrink-0 flex items-center">Status</div>
                      <div className="w-[160px] shrink-0 flex items-center">Issued On</div>
                      <div className="w-[130px] shrink-0 flex items-center">Bank RRN</div>
                      <div className="min-w-[160px] flex-1 flex items-center">Customer Email</div>
                    </div>
                    {/* Table Rows with staggered animation */}
                    <div className="bg-white">
                      {data.table.rows.map((row: any, rowIndex: number) => (
                        <motion.div
                          key={row.id}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: rowIndex * 0.1, duration: 0.3 }}
                          className="relative flex h-[56px] items-center px-[16px] border-b border-[#E4E7EC] last:border-b-0 hover:bg-[#F9FAFB] transition-colors group/row cursor-pointer"
                          onClick={() => onRowClick?.(row)}
                        >
                          <div className="w-[100px] shrink-0 font-semibold text-[#1D2939] text-[14px] pl-[20px]">{row.amount}</div>
                          <div className="w-[90px] shrink-0">
                            <span className="inline-flex items-center h-[20px] px-[8px] bg-[rgba(18,145,208,0.09)] text-[#0f78ad] text-[12px] font-medium leading-[18px] rounded-[1000px]">
                              {row.status}
                            </span>
                          </div>
                          <div className="w-[160px] shrink-0 text-[#5D6B82] text-[14px] font-normal">{row.date}</div>
                          <div className="w-[130px] shrink-0 text-[#5D6B82] font-mono text-[14px] font-normal">
                            <CopyableText text={row.rrn} className="text-[#5D6B82]" />
                          </div>
                          <div className="min-w-[160px] flex-1 text-[14px] font-normal truncate">
                            <CopyableText text={row.email} className="text-[#5D6B82] underline decoration-slate-300 underline-offset-2" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Table-level hover actions - bottom right */}
                  <div className="absolute bottom-0 right-0 flex items-center gap-2 bg-white shadow-lg border border-slate-200 rounded-md p-1.5 opacity-0 group-hover/table:opacity-100 transition-opacity z-10 m-[8px]">
                    <Tooltip text="Copy table data" position="top">
                      <button className="p-1.5 hover:bg-slate-50 rounded text-slate-500 hover:text-slate-700 transition-colors">
                        <CopyIcon size={16} />
                      </button>
                    </Tooltip>
                    <Tooltip text="Download table" position="top">
                      <button className="p-1.5 hover:bg-slate-50 rounded text-slate-500 hover:text-slate-700 transition-colors">
                        <Download size={16} />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 5. Resolution (Phase 3+) */}
            {phase >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 5, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex flex-col gap-[4px]"
              >
                <h3 className="text-[18px] leading-[24px] font-semibold text-[#020202]">
                  {data.resolution.title}
                </h3>
                <p className="text-[16px] leading-[26px] text-[#40566d] tracking-[0.16px] whitespace-pre-line">
                  {parseMarkdownBold(data.resolution.content)}
                </p>
              </motion.div>
            )}

            {/* 5b. Action Buttons (Phase 3+) - if buttons exist */}
            {phase >= 3 && data.buttons && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex gap-3 mt-2"
              >
                {data.buttons.map((button: { label: string; variant: 'primary' | 'secondary' }, i: number) => (
                  <button
                    key={i}
                    onClick={() => onSuggestionClick?.(button.label)}
                    className={clsx(
                      'px-4 py-2 rounded-lg font-medium text-[14px] transition-all duration-200',
                      button.variant === 'primary'
                        ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-sm'
                        : 'bg-[#f1f5fa] text-[#40566d] hover:bg-[#e2e8f0] border border-[#e2e8f0]'
                    )}
                  >
                    {button.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* 6. Footer Actions Strip (Phase 4+) - Only visible for last message */}
          {phase >= 4 && isLast && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex gap-[8px] items-center"
            >
              <Tooltip text="Good response" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <ThumbsUp size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
              <Tooltip text="Bad response" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <ThumbsDown size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
              <Tooltip text="Copy to clipboard" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <div className="size-[16px]">
                    <Copy />
                  </div>
                </button>
              </Tooltip>
              <Tooltip text="Share" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <Share2 size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
            </motion.div>
          )}

          {/* 7. Divider (Phase 5+) - Only if suggestions are present and it's the last message */}
          {phase >= 5 && isLast && data.suggestions && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-[0.5px] bg-[#CBD5E2] origin-left"
            />
          )}

          {/* 8. Suggestions Section (Phase 5+) - Only visible for last message */}
          {phase >= 5 && isLast && data.suggestions && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-[12px] mt-[0px] mr-[0px] mb-[30px] ml-[0px]"
            >
              <h3 className="text-[18px] leading-[26px] font-semibold text-[#193f47]">
                Suggestions
              </h3>
              <div className="flex flex-col gap-[2px]">
                {data.suggestions.map((sug: string, i: number) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.2 }}
                    onClick={() => onSuggestionClick?.(sug)}
                    className="flex items-center gap-[4px] p-[4px] text-left w-full rounded-[4px] transition-colors hover:bg-[#f1f5fa] group"
                  >
                    <div className="shrink-0 size-[20px] rounded-full flex items-center justify-center bg-[#f1f5fa] group-hover:bg-white transition-colors">
                      <span className="text-[10px] font-medium leading-[14px] text-[#40566d] group-hover:text-[#2980e1] transition-colors">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-[16px] leading-[26px] tracking-[0.16px] font-medium text-[#40566d] group-hover:text-[#2980e1] transition-colors">
                      {sug}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
};

// --- Followup Question Artifact Component ---
const FollowupQuestionArtifact = ({
  data,
  isLast,
  onButtonClick
}: {
  data: { headline: string; question: string; buttons: Array<{ label: string; variant: 'primary' | 'secondary' }> };
  isLast: boolean;
  onButtonClick?: (label: string) => void;
}) => {
  const [questionStarted, setQuestionStarted] = useState(false);

  const { phase, onNarrativeComplete } = useStreamSequencer({
    hasDataAsset: true,   // buttons count as data asset
    hasInsight: false,
    hasSuggestions: false,
    thinkingDuration: 0   // No thinking animation for followup questions
  });

  // Start question text after 1.3s cognitive pause following headline
  const handleHeadlineComplete = React.useCallback(() => {
    setTimeout(() => setQuestionStarted(true), 1300);
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-[16px] w-full mt-2"
      initial="hidden"
      animate="visible"
      variants={containerVar}
    >
      {/* Phase 1: Headline (streamed) */}
      <motion.div variants={itemVar} className="flex gap-[6px] items-center">
        <div className="shrink-0 size-[20px] bg-[#2563EB] rounded-[3.33px] flex items-center justify-center shadow-sm">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <h3 className="text-[18px] leading-[24px] font-semibold text-[#020202]">
          <PerplexityStreamText
            content={data.headline}
            speed={15}
            onComplete={handleHeadlineComplete}
            inheritStyles
          />
        </h3>
      </motion.div>

      {/* Question text (streamed after 1.3s pause) */}
      {questionStarted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[16px] text-[#40566d] leading-[26px] tracking-[0.16px]"
        >
          <PerplexityStreamText
            content={data.question}
            speed={10}
            onComplete={onNarrativeComplete}
          />
        </motion.div>
      )}

      {/* Phase 2+: Action Buttons */}
      {phase >= 2 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex gap-3"
        >
          {data.buttons.map((button, i) => (
            <button
              key={i}
              onClick={() => onButtonClick?.(button.label)}
              className={clsx(
                'px-4 py-2 rounded-lg font-medium text-[14px] transition-all duration-200',
                button.variant === 'primary'
                  ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-sm'
                  : 'bg-[#f1f5fa] text-[#40566d] hover:bg-[#e2e8f0] border border-[#e2e8f0]'
              )}
            >
              {button.label}
            </button>
          ))}
        </motion.div>
      )}

      {/* Phase 4+: Footer Actions Strip - Only visible for last message */}
      {phase >= 4 && isLast && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex gap-[8px] items-center mt-2"
        >
          <Tooltip text="Good response" position="bottom">
            <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
              <ThumbsUp size={16} className="text-[#40566D]" strokeWidth={2} />
            </button>
          </Tooltip>
          <Tooltip text="Bad response" position="bottom">
            <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
              <ThumbsDown size={16} className="text-[#40566D]" strokeWidth={2} />
            </button>
          </Tooltip>
          <Tooltip text="Copy to clipboard" position="bottom">
            <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
              <div className="size-[16px]">
                <Copy />
              </div>
            </button>
          </Tooltip>
          <Tooltip text="Share" position="bottom">
            <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
              <Share2 size={16} className="text-[#40566D]" strokeWidth={2} />
            </button>
          </Tooltip>
        </motion.div>
      )}
    </motion.div>
  );
};

// --- Simple Text Artifact Component ---
const SimpleTextArtifact = ({
  data,
  isLast,
  onSuggestionClick
}: {
  data: { headline?: string; body: string; suggestions?: string[] };
  isLast: boolean;
  onSuggestionClick?: (suggestion: string) => void;
}) => {
  const [bodyStarted, setBodyStarted] = useState(false);
  const [bodyComplete, setBodyComplete] = useState(false);

  const { phase, onNarrativeComplete } = useStreamSequencer({
    hasDataAsset: false,
    hasInsight: false,
    hasSuggestions: !!data.suggestions?.length,
    thinkingDuration: 2000  // 2 seconds for simple text
  });

  // Start body after 1.3s cognitive pause following headline (or immediately if no headline)
  const handleHeadlineComplete = React.useCallback(() => {
    setTimeout(() => setBodyStarted(true), 1300);
  }, []);

  // If no headline, start body immediately when phase 1 begins
  useEffect(() => {
    if (phase >= 1 && !data.headline) {
      setBodyStarted(true);
    }
  }, [phase, data.headline]);

  const handleBodyComplete = React.useCallback(() => {
    setBodyComplete(true);
    onNarrativeComplete();
  }, [onNarrativeComplete]);

  return (
    <>
      {/* Phase 0: Thinking */}
      {phase === 0 && <RayThinking />}

      {/* Phase 1+: Content */}
      {phase >= 1 && (
        <motion.div
          className="flex flex-col gap-[16px] w-full mt-2"
          initial="hidden"
          animate="visible"
          variants={containerVar}
        >
          {/* Headline (optional, streamed) */}
          {data.headline && (
            <motion.div variants={itemVar} className="flex gap-[6px] items-center">
              <div className="shrink-0 size-[20px] bg-[#10B981] rounded-[3.33px] flex items-center justify-center shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-[18px] leading-[24px] font-semibold text-[#020202]">
                <PerplexityStreamText
                  content={data.headline}
                  speed={15}
                  onComplete={handleHeadlineComplete}
                  inheritStyles
                />
              </h3>
            </motion.div>
          )}

          {/* Body text (streamed after 1.3s pause if headline exists, otherwise immediately) */}
          {bodyStarted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[16px] text-[#40566d] leading-[26px] tracking-[0.16px]"
            >
              <PerplexityStreamText
                content={data.body}
                speed={10}
                onComplete={handleBodyComplete}
              />
            </motion.div>
          )}

          {/* Phase 4+: Footer Actions Strip - Only visible for last message */}
          {phase >= 4 && isLast && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex gap-[8px] items-center mt-2"
            >
              <Tooltip text="Good response" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <ThumbsUp size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
              <Tooltip text="Bad response" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <ThumbsDown size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
              <Tooltip text="Copy to clipboard" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <div className="size-[16px]">
                    <Copy />
                  </div>
                </button>
              </Tooltip>
              <Tooltip text="Share" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <Share2 size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
            </motion.div>
          )}

          {/* Phase 5+: Divider - Only if suggestions are present and it's the last message */}
          {phase >= 5 && isLast && data.suggestions && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-[0.5px] bg-[#CBD5E2] origin-left"
            />
          )}

          {/* Phase 5+: Suggestions Section - Only visible for last message */}
          {phase >= 5 && isLast && data.suggestions && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-[12px] mt-[0px] mr-[0px] mb-[30px] ml-[0px]"
            >
              <h3 className="text-[18px] leading-[26px] font-semibold text-[#193f47]">
                Suggestions
              </h3>
              <div className="flex flex-col gap-[2px]">
                {data.suggestions.map((sug: string, i: number) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.2 }}
                    onClick={() => onSuggestionClick?.(sug)}
                    className="flex items-center gap-[4px] p-[4px] text-left w-full rounded-[4px] transition-colors hover:bg-[#f1f5fa] group"
                  >
                    <div className="shrink-0 size-[20px] rounded-full flex items-center justify-center bg-[#f1f5fa] group-hover:bg-white transition-colors">
                      <span className="text-[10px] font-medium leading-[14px] text-[#40566d] group-hover:text-[#2980e1] transition-colors">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-[16px] leading-[26px] tracking-[0.16px] font-medium text-[#40566d] group-hover:text-[#2980e1] transition-colors">
                      {sug}
                    </p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
};

// --- Bullet List with Buttons Artifact Component ---
const BulletListWithButtonsArtifact = ({
  data,
  isLast,
  onButtonClick
}: {
  data: { bullets: Array<{ bold: string; text: string }>; buttons: Array<{ label: string; variant: 'primary' | 'secondary' }> };
  isLast: boolean;
  onButtonClick?: (label: string) => void;
}) => {
  const [showButtons, setShowButtons] = useState(false);

  const { phase, onNarrativeComplete } = useStreamSequencer({
    hasDataAsset: true,   // buttons count as data asset
    hasInsight: false,
    hasSuggestions: false,
    thinkingDuration: 1500   // Brief thinking for follow-up responses
  });

  // Show buttons after narrative completes
  useEffect(() => {
    if (phase >= 2) {
      setShowButtons(true);
    }
  }, [phase]);

  return (
    <>
      {/* Phase 0: Thinking */}
      {phase === 0 && <RayThinking />}

      {/* Phase 1+: Content */}
      {phase >= 1 && (
        <motion.div
          className="flex flex-col gap-[16px] w-full mt-2"
          initial="hidden"
          animate="visible"
          variants={containerVar}
        >
          {/* Bullet Points */}
          <motion.ul
            variants={itemVar}
            className="flex flex-col gap-[12px] list-disc pl-[20px]"
          >
            {data.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.3 }}
                onAnimationComplete={i === data.bullets.length - 1 ? onNarrativeComplete : undefined}
                className="text-[16px] leading-[26px] text-[#40566d] tracking-[0.16px]"
              >
                {bullet.bold && (
                  <span className="font-semibold text-[#192839]">{bullet.bold} </span>
                )}
                <span>{parseMarkdownBold(bullet.text)}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Action Buttons */}
          {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-3 mt-2"
            >
              {data.buttons.map((button, i) => (
                <button
                  key={i}
                  onClick={() => onButtonClick?.(button.label)}
                  className={clsx(
                    'px-4 py-2 rounded-lg font-medium text-[14px] transition-all duration-200',
                    button.variant === 'primary'
                      ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-sm'
                      : 'bg-[#f1f5fa] text-[#40566d] hover:bg-[#e2e8f0] border border-[#e2e8f0]'
                  )}
                >
                  {button.label}
                </button>
              ))}
            </motion.div>
          )}

          {/* Phase 4+: Footer Actions Strip - Only visible for last message */}
          {phase >= 4 && isLast && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex gap-[8px] items-center mt-2"
            >
              <Tooltip text="Good response" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <ThumbsUp size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
              <Tooltip text="Bad response" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <ThumbsDown size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
              <Tooltip text="Copy to clipboard" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <div className="size-[16px]">
                    <Copy />
                  </div>
                </button>
              </Tooltip>
              <Tooltip text="Share" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <Share2 size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
};

// --- Setting Updated with Bullets Artifact Component ---
const SettingUpdatedWithBulletsArtifact = ({
  data,
  isLast,
  onButtonClick
}: {
  data: {
    headline: string;
    body: string;
    bullets: Array<{ text: string }>;
    buttons: Array<{ label: string; variant: 'primary' | 'secondary' }>;
  };
  isLast: boolean;
  onButtonClick?: (label: string) => void;
}) => {
  const [bodyStarted, setBodyStarted] = useState(false);
  const [showBullets, setShowBullets] = useState(false);

  const { phase, onNarrativeComplete } = useStreamSequencer({
    hasDataAsset: true,   // buttons count as data asset
    hasInsight: false,
    hasSuggestions: false,
    thinkingDuration: 1500
  });

  // Start body after 1s cognitive pause following headline
  const handleHeadlineComplete = React.useCallback(() => {
    setTimeout(() => setBodyStarted(true), 1000);
  }, []);

  // Show bullets after body completes
  const handleBodyComplete = React.useCallback(() => {
    setShowBullets(true);
    onNarrativeComplete();
  }, [onNarrativeComplete]);

  return (
    <>
      {/* Phase 0: Thinking */}
      {phase === 0 && <RayThinking />}

      {/* Phase 1+: Content */}
      {phase >= 1 && (
        <motion.div
          className="flex flex-col gap-[16px] w-full mt-2"
          initial="hidden"
          animate="visible"
          variants={containerVar}
        >
          {/* Headline (streamed) */}
          <motion.div variants={itemVar} className="flex gap-[6px] items-center">
            <div className="shrink-0 size-[20px] bg-[#10B981] rounded-[3.33px] flex items-center justify-center shadow-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-[18px] leading-[24px] font-semibold text-[#020202]">
              <PerplexityStreamText
                content={data.headline}
                speed={15}
                onComplete={handleHeadlineComplete}
                inheritStyles
              />
            </h3>
          </motion.div>

          {/* Body text (streamed after pause) */}
          {bodyStarted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[16px] text-[#40566d] leading-[26px] tracking-[0.16px]"
            >
              <PerplexityStreamText
                content={data.body}
                speed={10}
                onComplete={handleBodyComplete}
              />
            </motion.div>
          )}

          {/* Bullet Points */}
          {showBullets && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-[8px] list-disc pl-[20px]"
            >
              {data.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.3 }}
                  className="text-[16px] leading-[26px] text-[#40566d] tracking-[0.16px]"
                >
                  {parseMarkdownBold(bullet.text)}
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Action Buttons (Phase 2+) */}
          {phase >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-3 mt-2 pl-[24px]"
            >
              {data.buttons.map((button, i) => (
                <button
                  key={i}
                  onClick={() => onButtonClick?.(button.label)}
                  className={clsx(
                    'px-4 py-2 rounded-lg font-medium text-[14px] transition-all duration-200',
                    button.variant === 'primary'
                      ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-sm'
                      : 'bg-[#f1f5fa] text-[#40566d] hover:bg-[#e2e8f0] border border-[#e2e8f0]'
                  )}
                >
                  {button.label}
                </button>
              ))}
            </motion.div>
          )}

          {/* Phase 4+: Footer Actions Strip - Only visible for last message */}
          {phase >= 4 && isLast && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex gap-[8px] items-center mt-2"
            >
              <Tooltip text="Good response" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <ThumbsUp size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
              <Tooltip text="Bad response" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <ThumbsDown size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
              <Tooltip text="Copy to clipboard" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <div className="size-[16px]">
                    <Copy />
                  </div>
                </button>
              </Tooltip>
              <Tooltip text="Share" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <Share2 size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
};

// --- Payment Links Created Artifact Component ---
const PaymentLinksCreatedArtifact = ({
  data,
  isLast,
  onButtonClick,
  onRowClick
}: {
  data: {
    headline: string;
    body: string;
    table: { rows: Array<{ id: string; linkUrl: string; amount: string; status: string; createdOn: string; expiry: string }> };
    followup: { title: string; body: string; buttons: Array<{ label: string; variant: 'primary' | 'secondary' }> };
  };
  isLast: boolean;
  onButtonClick?: (label: string) => void;
  onRowClick?: (rowData: any) => void;
}) => {
  const [bodyStarted, setBodyStarted] = useState(false);

  const { phase, onNarrativeComplete } = useStreamSequencer({
    hasDataAsset: true,   // table counts as data asset
    hasInsight: true,     // followup counts as insight
    hasSuggestions: false,
    thinkingDuration: 1500
  });

  // Start body after 1s cognitive pause following headline
  const handleHeadlineComplete = React.useCallback(() => {
    setTimeout(() => setBodyStarted(true), 1000);
  }, []);

  return (
    <>
      {/* Phase 0: Thinking */}
      {phase === 0 && <RayThinking />}

      {/* Phase 1+: Content */}
      {phase >= 1 && (
        <motion.div
          className="flex flex-col gap-[24px] w-full mt-2"
          initial="hidden"
          animate="visible"
          variants={containerVar}
        >
          {/* Primary Content Section */}
          <div className="flex flex-col gap-[16px]">
            {/* Header + Body Group */}
            <div className="flex flex-col gap-[4px] px-[0px] py-[4px]">
              {/* 1. Header: Icon + Bold Text (streamed) */}
              <motion.div variants={itemVar} className="flex gap-[6px] items-center">
                <div className="shrink-0 size-[20px] bg-[#10B981] rounded-[3.33px] flex items-center justify-center shadow-sm">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[18px] leading-[24px] font-semibold text-[#020202]">
                  <PerplexityStreamText
                    content={data.headline}
                    speed={15}
                    onComplete={handleHeadlineComplete}
                    inheritStyles
                  />
                </h3>
              </motion.div>

              {/* 2. Body text (streamed after pause) */}
              {bodyStarted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[16px] text-[#40566d] leading-[26px] tracking-[0.16px]"
                >
                  <PerplexityStreamText
                    content={data.body}
                    speed={10}
                    onComplete={onNarrativeComplete}
                  />
                </motion.div>
              )}
            </div>

            {/* 3. Payment Links Table (Phase 2+) */}
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="pl-0 py-[12px]"
              >
                <div className="w-full rounded-[12px] overflow-hidden border border-[#E4E7EC] relative group/table">
                  {/* Table Header */}
                  <div className="flex h-[48px] text-[14px] font-semibold text-[#192839] bg-[rgba(108,132,157,0.06)] px-[16px] border-b border-[rgba(108,132,157,0.18)]">
                    <div className="w-[260px] flex items-center pl-[20px]">Payment Link</div>
                    <div className="w-[120px] flex items-center">Amount</div>
                    <div className="w-[80px] flex items-center">Status</div>
                    <div className="w-[180px] flex items-center">Created On</div>
                    <div className="flex-1 flex items-center">Expiry</div>
                  </div>
                  {/* Table Rows with staggered animation */}
                  <div className="bg-white">
                    {data.table.rows.map((row, rowIndex) => (
                      <motion.div
                        key={row.id}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: rowIndex * 0.1, duration: 0.3 }}
                        className="relative flex h-[56px] items-center px-[16px] border-b border-[#E4E7EC] last:border-b-0 hover:bg-[#F9FAFB] transition-colors group/row cursor-pointer"
                        onClick={() => onRowClick?.({ ...row, type: 'payment', amount: row.amount, status: 'Active', date: row.createdOn })}
                      >
                        <div className="w-[260px] text-[14px] font-normal pl-[20px]">
                          <CopyableText text={row.linkUrl} isLink />
                        </div>
                        <div className="w-[120px] font-semibold text-[#1D2939] text-[14px]">{row.amount}</div>
                        <div className="w-[80px]">
                          <span className="inline-flex items-center h-[20px] px-[8px] bg-[rgba(16,185,129,0.1)] text-[#059669] text-[12px] font-medium leading-[18px] rounded-[1000px]">
                            {row.status}
                          </span>
                        </div>
                        <div className="w-[180px] text-[#5D6B82] text-[14px] font-normal">{row.createdOn}</div>
                        <div className="flex-1 text-[#5D6B82] text-[14px] font-normal">{row.expiry}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Table-level hover actions - bottom right */}
                  <div className="absolute bottom-0 right-0 flex items-center gap-2 bg-white shadow-lg border border-slate-200 rounded-md p-1.5 opacity-0 group-hover/table:opacity-100 transition-opacity z-10 m-[8px]">
                    <Tooltip text="Copy table data" position="top">
                      <button className="p-1.5 hover:bg-slate-50 rounded text-slate-500 hover:text-slate-700 transition-colors">
                        <CopyIcon size={16} />
                      </button>
                    </Tooltip>
                    <Tooltip text="Download table" position="top">
                      <button className="p-1.5 hover:bg-slate-50 rounded text-slate-500 hover:text-slate-700 transition-colors">
                        <Download size={16} />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. Followup Section (Phase 3+) */}
            {phase >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 5, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex flex-col gap-[12px] mt-2"
              >
                <h3 className="text-[18px] leading-[24px] font-semibold text-[#020202]">
                  {data.followup.title}
                </h3>
                <p className="text-[16px] leading-[26px] text-[#40566d] tracking-[0.16px]">
                  {parseMarkdownBold(data.followup.body)}
                </p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex gap-3 mt-2"
                >
                  {data.followup.buttons.map((button, i) => (
                    <button
                      key={i}
                      onClick={() => onButtonClick?.(button.label)}
                      className={clsx(
                        'px-4 py-2 rounded-lg font-medium text-[14px] transition-all duration-200',
                        button.variant === 'primary'
                          ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-sm'
                          : 'bg-[#f1f5fa] text-[#40566d] hover:bg-[#e2e8f0] border border-[#e2e8f0]'
                      )}
                    >
                      {button.label}
                    </button>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Footer Actions Strip (Phase 4+) - Only visible for last message */}
          {phase >= 4 && isLast && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="flex gap-[8px] items-center"
            >
              <Tooltip text="Good response" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <ThumbsUp size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
              <Tooltip text="Bad response" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <ThumbsDown size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
              <Tooltip text="Copy to clipboard" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <div className="size-[16px]">
                    <Copy />
                  </div>
                </button>
              </Tooltip>
              <Tooltip text="Share" position="bottom">
                <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                  <Share2 size={16} className="text-[#40566D]" strokeWidth={2} />
                </button>
              </Tooltip>
            </motion.div>
          )}
        </motion.div>
      )}
    </>
  );
};

// --- Block Sequencer ---
const BlockSequencer = ({ blocks, onComplete }: { blocks: ContentBlock[], onComplete?: () => void }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const onCompleteCalled = React.useRef(false);

  useEffect(() => {
     // Check if we are done
     if (visibleIndex >= blocks.length) {
       if (onComplete && !onCompleteCalled.current) {
         onCompleteCalled.current = true;
         onComplete();
       }
       return;
     }

     const currentBlock = blocks[visibleIndex];
     if (currentBlock && currentBlock.type !== 'text') {
        const timer = setTimeout(() => {
           setVisibleIndex(prev => prev + 1);
        }, 600); 
        return () => clearTimeout(timer);
     }
  }, [visibleIndex, blocks, onComplete]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {blocks.map((block, idx) => {
        if (idx > visibleIndex) return null;

        return (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
             {block.type === 'text' ? (
                <PerplexityStreamText 
                   content={block.content} 
                   speed={20} // fast typing (20ms/char)
                   onComplete={() => {
                      // Only advance if this is the currently active block
                      if (visibleIndex === idx) setVisibleIndex(prev => prev + 1);
                   }}
                />
             ) : block.type === 'table' ? (
                <SmartTable headers={block.headers} rows={block.rows} />
             ) : null}
          </motion.div>
        )
      })}
    </div>
  )
}

// --- Sequenced Funds Added Message Component ---
const FundsAddedMessage = ({ data, isLast, onSuggestionClick }: { data: RayResponseData, isLast: boolean, onSuggestionClick?: (s: string) => void }) => {
  // Sequence state: headline -> body -> artifact -> done
  const [sequence, setSequence] = useState<'headline' | 'body' | 'artifact' | 'done'>(() => {
    if (data.headline) return 'headline';
    return 'body';
  });

  const handleHeadlineComplete = React.useCallback(() => {
    setSequence('body');
  }, []);

  // For the body text, since we are using a static component that renders immediately,
  // we can use a simple timeout or animation complete callback to trigger the next step.
  // We'll treat it as "appearing" then moving to artifact.
  const handleBodyComplete = React.useCallback(() => {
    setSequence('artifact');
  }, []);

  const handleArtifactComplete = React.useCallback(() => {
    setSequence('done');
  }, []);

  return (
      <div className="flex gap-4 items-start w-full animate-fade-in-up">
        {/* Content Container - No Avatar */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">
             
            {/* 1. Headline (Custom Component) */}
            {data.headline && (
                 <div className={sequence === 'headline' || sequence === 'body' || sequence === 'artifact' || sequence === 'done' ? 'block' : 'hidden'}> 
                    <motion.div
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       onAnimationComplete={handleHeadlineComplete}
                    >
                        <FundsAddedHeader title={data.headline} />
                    </motion.div>
                 </div>
            )}

            {/* 2. Body Text (Custom Component mimicking Frame7 text) */}
            {(sequence === 'body' || sequence === 'artifact' || sequence === 'done') && (
                 <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={handleBodyComplete}
                 >
                    <FundsAddedBody />
                 </motion.div>
            )}
            
            {/* 3. Artifacts (Card + Insight) */}
            {(sequence === 'artifact' || sequence === 'done') && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onAnimationComplete={handleArtifactComplete}
                    className="flex flex-col gap-4"
                >
                    <SettlementCard />
                    <RayInsightCard />
                </motion.div>
            )}

            {/* 4. Footer & Suggestions (Only when done and is last) */}
            {(sequence === 'done') && isLast && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex flex-col gap-6 mt-2"
              >
                  {/* Footer Actions */}
                  <div className="flex gap-[8px] items-center">
                    <Tooltip text="Good response" position="bottom">
                      <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                        <ThumbsUp size={16} className="text-[#40566D]" strokeWidth={2} />
                      </button>
                    </Tooltip>
                    <Tooltip text="Bad response" position="bottom">
                      <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                        <ThumbsDown size={16} className="text-[#40566D]" strokeWidth={2} />
                      </button>
                    </Tooltip>
                    <Tooltip text="Copy to clipboard" position="bottom">
                      <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                        <div className="size-[16px]"><Copy /></div>
                      </button>
                    </Tooltip>
                    <Tooltip text="Share" position="bottom">
                      <button className="group relative size-[32px] bg-white hover:bg-[#f1f5fa] rounded-full flex items-center justify-center transition-colors">
                        <Share2 size={16} className="text-[#40566D]" strokeWidth={2} />
                      </button>
                    </Tooltip>
                  </div>

                  {/* Divider */}
                  {data.suggestions && <div className="w-full h-[0.5px] bg-[#CBD5E2]" />}

                  {/* Suggestions */}
                  {data.suggestions && (
                    <div className="flex flex-col gap-[12px]">
                       <h3 className="text-[18px] leading-[26px] font-semibold text-[#193f47]">Suggestions</h3>
                       <div className="flex flex-col gap-[2px]">
                          {data.suggestions.map((sug: string, i: number) => (
                            <button 
                              key={i} 
                              onClick={() => onSuggestionClick?.(sug)}
                              className="flex items-center gap-[4px] p-[4px] text-left w-full rounded-[4px] transition-colors hover:bg-[#f1f5fa] group"
                            >
                              <div className="shrink-0 size-[20px] rounded-full flex items-center justify-center bg-[#f1f5fa] group-hover:bg-white transition-colors">
                                <span className="text-[10px] font-medium leading-[14px] text-[#40566d] group-hover:text-[#2980e1] transition-colors">
                                  {i + 1}
                                </span>
                              </div>
                              <p className="text-[16px] leading-[26px] tracking-[0.16px] font-medium text-[#40566d] group-hover:text-[#2980e1] transition-colors">
                                {sug}
                              </p>
                            </button>
                          ))}
                       </div>
                    </div>
                  )}
              </motion.div>
            )}
        </div>
      </div>
  );
};

export const RayMessageRenderer = ({ data, onSuggestionClick, onRowClick, isLast = true }: { data: RayResponseData; onSuggestionClick?: (suggestion: string) => void; onRowClick?: (rowData: any) => void; isLast?: boolean }) => {
  // 1. User Message (Right Aligned)
  if (data.sender === 'user') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} // Cubic bezier for "rolling up" feel
        className="bg-[#e6eafa] text-[#090e13] px-[16px] py-[12px] rounded-[12px] shadow-[0px_2px_2px_0px_rgba(237,236,236,0.16)] max-w-[398px] ml-auto w-fit text-[14px] leading-[20px] tracking-[-0.28px]"
      >
        {data.blocks?.[0].type === 'text' ? data.blocks[0].content : ''}
      </motion.div>
    );
  }

  // 2. Ray Thinking State
  if (data.isThinking) {
    return <RayThinking />;
  }

  // 3. Ray AI Message with Investigation Report Artifact
  if (data.artifact?.type === 'investigation_report') {
    return (
      <div className="w-full animate-fade-in-up">
        <InvestigationReportArtifact data={data.artifact.data} onSuggestionClick={onSuggestionClick} onRowClick={onRowClick} isLast={isLast} />
      </div>
    );
  }

  // 4. Ray AI Message with Funds Added Card
  if (data.artifact?.type === 'funds_added_card') {
    return <FundsAddedMessage data={data} isLast={isLast} onSuggestionClick={onSuggestionClick} />;
  }

  // 5. Ray AI Message with Followup Question
  if (data.artifact?.type === 'followup_question') {
    return (
      <div className="w-full animate-fade-in-up">
        <FollowupQuestionArtifact
          data={data.artifact.data}
          isLast={isLast}
          onButtonClick={onSuggestionClick}
        />
      </div>
    );
  }

  // 6. Ray AI Message with Simple Text
  if (data.artifact?.type === 'simple_text') {
    return (
      <div className="w-full animate-fade-in-up">
        <SimpleTextArtifact
          data={data.artifact.data}
          isLast={isLast}
          onSuggestionClick={onSuggestionClick}
        />
      </div>
    );
  }

  // 7. Ray AI Message with Bullet List and Buttons
  if (data.artifact?.type === 'bullet_list_with_buttons') {
    return (
      <div className="w-full animate-fade-in-up">
        <BulletListWithButtonsArtifact
          data={data.artifact.data}
          isLast={isLast}
          onButtonClick={onSuggestionClick}
        />
      </div>
    );
  }

  // 8. Ray AI Message with Setting Updated + Bullets
  if (data.artifact?.type === 'setting_updated_with_bullets') {
    return (
      <div className="w-full animate-fade-in-up">
        <SettingUpdatedWithBulletsArtifact
          data={data.artifact.data}
          isLast={isLast}
          onButtonClick={onSuggestionClick}
        />
      </div>
    );
  }

  // 8. Ray AI Message with Payment Links Created
  if (data.artifact?.type === 'payment_links_created') {
    return (
      <div className="w-full animate-fade-in-up">
        <PaymentLinksCreatedArtifact
          data={data.artifact.data}
          isLast={isLast}
          onButtonClick={onSuggestionClick}
          onRowClick={onRowClick}
        />
      </div>
    );
  }

  // 9. Ray AI Message (Standard Blocks, Max Width 398px)
  return (
    <div className="flex gap-4 items-start w-full max-w-[398px] animate-fade-in-up">
        {/* Content Container - No Avatar */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">
            
            {/* Headline */}
            {data.headline && (
                <h3 className="text-[17px] font-bold text-slate-900 leading-snug tracking-tight mb-1">
                    {data.headline}
                </h3>
            )}

            {/* Sequenced Blocks */}
            {data.blocks && <BlockSequencer blocks={data.blocks} />}

            {/* Footer Actions - Only visible for last message */}
            {isLast && <MessageFooter />}

            {/* Stacked Suggestions - Only visible for last message */}
            {isLast && data.suggestions && (
                <SuggestionStack items={data.suggestions} />
            )}
        </div>
    </div>
  );
};
